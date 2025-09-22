export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: ".NET 9 Telemetry: pushing logs and metrics to HELK with OpenTelemetry",
    excerpt: "Modern observability: sending .NET 9 telemetry to HELK with OpenTelemetry for logs, traces, and metrics.",
    content: `# .NET 9 Telemetry: pushing logs and metrics to HELK with OpenTelemetry

*14 Nov 2024 — Mind of a Coder*
*Exploring the intersection of software development, engineering best practices, and artificial intelligence. Deep dives into code, architecture, and the future of tech.*

> Modern observability: sending .NET 9 telemetry to HELK with OpenTelemetry for logs, traces, and metrics.

---

## The problem

You've got a .NET 9 service and a HELK stack (Elasticsearch + Logstash + Kibana, often with Kafka) powering threat hunting and analytics. You want **one instrumentation** strategy—OpenTelemetry (OTel)—to ship **logs, traces, and metrics** into HELK without sprinkling per-signal agents everywhere. Keep it simple, vendor-agnostic, and production-grade. HELK is ELK under the hood, so if we can shape OTel data for Elasticsearch/Kibana properly, we're golden. ([GitHub][1])

## The approach (TL;DR)

1. **Instrument .NET 9 with OTel** (logs, metrics, traces) and **export via OTLP** to an **OpenTelemetry Collector**.
2. In the **Collector**, use the **Elasticsearch exporter** to send all three signals to HELK's Elasticsearch in **OTel-native mapping** (or ECS if you prefer classic Kibana dashboards). Recent Elastic docs confirm logs, metrics, and traces are supported. ([Elastic][2])
3. (Optional) If you want the Elastic APM UI for deep traces, add **APM Server** and send OTLP there; it natively accepts OTLP/HTTP and OTLP/gRPC. ([Elastic][3])

This keeps your app clean (one exporter), makes the Collector your "router/transformer," and lands data in HELK ready to query/visualize.

---

## Wiring up .NET 9 (one-time setup)

**Packages** (csproj – versions omitted on purpose; use the latest stable):

\`\`\`xml
<ItemGroup>
  <PackageReference Include="OpenTelemetry.Extensions.Hosting" />
  <PackageReference Include="OpenTelemetry.Exporter.OpenTelemetryProtocol" />
  <PackageReference Include="OpenTelemetry.Instrumentation.AspNetCore" />
  <PackageReference Include="OpenTelemetry.Instrumentation.Http" />
  <PackageReference Include="OpenTelemetry.Instrumentation.Runtime" />
  <PackageReference Include="OpenTelemetry.Logs" />
</ItemGroup>
\`\`\`

**Program.cs** (minimal API):

\`\`\`csharp
using OpenTelemetry.Resources;
using OpenTelemetry.Trace;
using OpenTelemetry.Metrics;

var builder = WebApplication.CreateBuilder(args);

// ship logs via OTLP to the Collector
builder.Logging.ClearProviders();
builder.Logging.AddOpenTelemetry(o =>
{
    o.IncludeFormattedMessage = true;
    o.IncludeScopes = true;
    o.ParseStateValues = true;
    o.AddOtlpExporter(); // default http://localhost:4318
});

// single OTel setup for traces & metrics
builder.Services.AddOpenTelemetry()
    .ConfigureResource(r => r
        .AddService(serviceName: "crm.api", serviceVersion: "1.0.0")
        .AddAttributes(new KeyValuePair<string, object>[] {
            new("deployment.environment", Environment.GetEnvironmentVariable("ENV") ?? "dev")
        }))
    .WithTracing(t => t
        .AddAspNetCoreInstrumentation()
        .AddHttpClientInstrumentation()
        .AddSource("crm.api")           // your ActivitySource if you do manual spans
        .AddOtlpExporter())
    .WithMetrics(m => m
        .AddAspNetCoreInstrumentation()
        .AddHttpClientInstrumentation()
        .AddRuntimeInstrumentation()
        .AddProcessInstrumentation()
        .AddOtlpExporter());

var app = builder.Build();
app.MapGet("/health", () => "ok");
app.Run();
\`\`\`

> Why OTLP? It's the native OTel protocol, widely supported by collectors/backends and avoids lossy translations. ([OpenTelemetry][4])

---

## OpenTelemetry Collector → HELK (Elasticsearch)

### Option A — **Direct to Elasticsearch** (simple, fast)

Use the **Elasticsearch exporter** in the Collector and pick a mapping:

* \`mapping.mode: otel\` → OTel-native schema (great for consistency across tools)
* \`mapping.mode: ecs\` → Elastic Common Schema (handy if you've got existing ECS dashboards)

Elastic's current docs state the exporter supports logs, metrics, and traces. ([Elastic][2])

**collector.yaml**

\`\`\`yaml
receivers:
  otlp:
    protocols:
      http:
      grpc

processors:
  batch:
  resource:
    attributes:
      - key: env
        action: upsert
        value: \${ENVIRONMENT}

exporters:
  elasticsearch:
    # point to HELK's Elasticsearch
    endpoints: ["https://helk-es:9200"]
    user: elastic
    password: \${ELASTIC_PASSWORD}
    # or: api_key: \${ELASTIC_API_KEY}
    mapping:
      mode: otel    # or "ecs" if you want ECS fields

service:
  pipelines:
    logs:
      receivers: [otlp]
      processors: [resource, batch]
      exporters: [elasticsearch]
    metrics:
      receivers: [otlp]
      processors: [resource, batch]
      exporters: [elasticsearch]
    traces:
      receivers: [otlp]
      processors: [resource, batch]
      exporters: [elasticsearch]
\`\`\`

### Option B — **Use Elastic APM Server** (for the APM UI)

If your HELK includes **APM Server** (or you add it), send traces/metrics over OTLP to APM; logs can still go straight to Elasticsearch. APM Server natively speaks OTLP over HTTP and gRPC. ([Elastic][3])

\`\`\`yaml
exporters:
  otlphttp/apm:
    endpoint: http://apm-server:8200
    # headers: { Authorization: "Bearer <token>" } # if needed
  elasticsearch:
    endpoints: ["https://helk-es:9200"]
    user: elastic
    password: \${ELASTIC_PASSWORD}
    mapping:
      mode: otel

service:
  pipelines:
    traces:
      receivers: [otlp]
      processors: [batch]
      exporters: [otlphttp/apm]
    metrics:
      receivers: [otlp]
      processors: [batch]
      exporters: [otlphttp/apm]
    logs:
      receivers: [otlp]
      processors: [batch]
      exporters: [elasticsearch]
\`\`\`

### Option C — **Kafka + Logstash** (when HELK standardizes on Kafka)

HELK often rides with Kafka/Logstash. You can fan out via Kafka and keep Logstash pipelines you already have. ([thehelk.com][5])

**collector.yaml (logs via Kafka)**

\`\`\`yaml
exporters:
  kafka:
    brokers: ["kafka:9092"]
    topic: otel-logs
    encoding: otlp_json

service:
  pipelines:
    logs:
      receivers: [otlp]
      processors: [batch]
      exporters: [kafka]
\`\`\`

**logstash.conf**

\`\`\`conf
input {
  kafka {
    bootstrap_servers => "kafka:9092"
    topics => ["otel-logs"]
    codec => json
  }
}

# optional transforms here (mutate/grok)
output {
  elasticsearch {
    hosts => ["http://helk-es:9200"]
    index => "otel-logs-%{+YYYY.MM.dd}"
  }
}
\`\`\`

---

## Querying in Kibana

* With **\`mapping.mode: otel\`**, your docs use OTel-native field names; use **Discover** and build Lens/Alerts directly.
* With **\`mapping.mode: ecs\`**, your logs fit classic ECS visualizations and SIEM/hunting content more naturally.
* If you installed **APM Server**, use the **APM app** for traces/service maps; Elasticsearch stores the data underneath. ([Elastic][2])

---

## Alternatives (and why I didn't pick them)

* **Ship app logs via Filebeat/Elastic Agent only**: fine for logs, but then you still need a story for traces/metrics; OTel keeps all three signals consistent and correlatable. ([OpenTelemetry][6])
* **Send straight from .NET to Elasticsearch**: possible via community libs, but you lose the Collector's routing, batching, retries, and signal-wise policies. The Collector is the control plane. ([OpenTelemetry][7])
* **Grafana stack (Loki/Tempo/Mimir)**: great stack, but if HELK is your center of gravity and your hunters live in Kibana, Elasticsearch-first keeps the operational surface smaller.

---

## Gotchas & notes from the trenches

* **Indices & privileges**: ensure the exporter's credential can create/write indices (mapping conflicts bite). Monitor exporter failure metrics and Collector logs during rollout. ([GitHub][8])
* **Choose your mapping early**: flipping between \`ecs\` and \`otel\` later means reindexing or dual-write during migration. ([Elastic][2])
* **APM or not?** If you want native APM views, add **APM Server**. If not, you can still visualize traces in Kibana via Discover/Visualize, but you'll miss curated APM UX. ([Elastic][3])

---

## Final checklist

* [ ] .NET 9 app emits logs/metrics/traces via OTLP. ([Microsoft Learn][9])
* [ ] Collector receives OTLP(\`4317\` gRPC, \`4318\` HTTP) and batches. ([OpenTelemetry][10])
* [ ] Exporter: **Elasticsearch** (mapping \`otel\` or \`ecs\`) **or** **APM Server** for traces/metrics. ([Elastic][2])
* [ ] Kibana dashboards wired; (optional) APM UI if using APM Server. ([Elastic][11])

---

## Appendix: minimal manual span (optional)

\`\`\`csharp
using System.Diagnostics;

var source = new ActivitySource("crm.api");

app.MapGet("/work", () =>
{
    using var activity = source.StartActivity("heavy-work");
    // ... your code
    return Results.Ok(new { ok = true });
});
\`\`\`

---

### References

* HELK introduces an ELK-based hunting platform with analytics (Spark/GraphFrames/Jupyter). ([thehelk.com][5])
* Elastic Stack **APM Server** supports **OTLP** (HTTP & gRPC). ([Elastic][3])
* **Elasticsearch exporter** in the OTel Collector supports **logs, metrics, traces** and multiple mapping modes (including \`otel\` and \`ecs\`). ([Elastic][2])
* .NET observability with OpenTelemetry (official docs). ([Microsoft Learn][9])


[1]: https://github.com/cyb3rward0g/helk/wiki?utm_source=chatgpt.com "Home · Cyb3rWard0g/HELK Wiki"
[2]: https://www.elastic.co/docs/reference/opentelemetry/edot-collector/components/elasticsearchexporter?utm_source=chatgpt.com "Elasticsearch exporter | Elastic Agent release notes"
[3]: https://www.elastic.co/docs/solutions/observability/apm/opentelemetry-intake-api?utm_source=chatgpt.com "OpenTelemetry intake API | Elastic Docs"
[4]: https://opentelemetry.io/docs/languages/js/exporters/?utm_source=chatgpt.com "Exporters"
[5]: https://thehelk.com/intro.html?utm_source=chatgpt.com "Introduction — The HELK"
[6]: https://opentelemetry.io/docs/specs/otel/logs/?utm_source=chatgpt.com "OpenTelemetry Logging"
[7]: https://opentelemetry.io/docs/collector/?utm_source=chatgpt.com "Collector"
[8]: https://github.com/open-telemetry/opentelemetry-collector-contrib/issues/32302?utm_source=chatgpt.com "[exporter/elasticsearchexporter] Push failures not reported ..."
[9]: https://learn.microsoft.com/en-us/dotnet/core/diagnostics/observability-with-otel?utm_source=chatgpt.com "NET Observability with OpenTelemetry"
[10]: https://opentelemetry.io/docs/collector/configuration/?utm_source=chatgpt.com "Configuration"
[11]: https://www.elastic.co/guide/en/observability/8.19/apm-open-telemetry.html?utm_source=chatgpt.com "Use OpenTelemetry with APM | Elastic Observability [8.19]"`,
    date: "2024-11-14",
    readTime: "12 min read",
    tags: ["dotnet", "opentelemetry", "observability", "helk", "elasticsearch"],
    slug: "dotnet-9-telemetry-helk-opentelemetry"
  }
];