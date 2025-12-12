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
    id: "4",
    title: "AI Amplifies Process, Not Intelligence",
    excerpt: "Why productivity is the wrong lens to evaluate AI in engineering, and what to measure instead.",
    content: `# AI Amplifies Process, Not Intelligence

*10 Oct 2025 — Mind of a Coder*
*Why productivity is the wrong lens to evaluate AI in engineering*

---

One thing I noticed after introducing AI more seriously into day-to-day engineering work is a strange mismatch between expectations and reality. Everyone talks about productivity — faster delivery, more output, fewer people doing more work. And yes, AI absolutely helps you write code faster. Sometimes *much* faster.

But after the initial excitement fades, a different question starts to surface, usually quietly: why does everything feel… heavier?

---

## Writing Code Was Never the Hard Part

Most engineering teams don't struggle because they can't write code. They struggle because they can't keep the system *in their head* anymore. Dependencies pile up. Assumptions go undocumented. Decisions get made implicitly and never revisited. Over time, the system becomes harder to reason about than to change.

AI doesn't fix that. What it does is remove friction from execution. And when execution becomes cheap, everything else becomes painfully visible.

---

## AI Speeds Up the Wrong Things First

The first thing AI accelerates is not understanding — it's *output*. You get more implementations, more variations, more "solutions". Often good ones, sometimes excellent ones. But they all come with a cost: every extra line of code is another thing someone needs to understand, review, and maintain.

This is where the illusion creeps in. From the outside, it looks like progress. From the inside, it feels like the system is expanding faster than the team's ability to reason about it. That's not an AI problem — that's a process problem being amplified.

---

## AI Doesn't Know What Matters

AI treats everything with roughly the same level of enthusiasm: critical paths and edge cases, temporary hacks and long-term decisions, reversible choices and irreversible ones. To a model, they all look like "code to be written".

Humans know the difference — or at least they should. But when AI starts filling in the gaps, there's a real temptation to let it decide *by default*, simply because the answer is there and looks reasonable. That's when teams start confusing speed with direction.

---

## Why Good Teams Often Slow Down

Here's something that surprised me. Teams that use AI well don't actually feel faster at first. They feel slower. More deliberate. Sometimes even more frustrated. They spend more time writing problem statements, more time arguing about intent, more time rejecting solutions that look fine but don't sit right.

From the outside, this can look like resistance to change. From the inside, it feels like regaining control. AI removes the cost of typing. It doesn't remove the cost of thinking. In fact, it exposes it.

---

## AI Doesn't Make Teams Smarter

This is probably the most important realization. AI doesn't raise the intelligence of a team — it raises the **impact** of whatever intelligence (or lack of it) is already there.

Clear processes become more effective. Messy processes become chaotic faster. Strong ownership scales. Weak ownership collapses. In that sense, AI is brutally honest. It doesn't hide organizational problems. It puts a spotlight on them.

---

## A Better Question to Ask

Instead of asking "Are we more productive with AI?", I've found it more useful to ask: **What exactly is AI making easier for us right now?**

If the answer is thinking less, deciding later, or pushing responsibility downstream — then the gains are temporary, and the bill will arrive. If the answer is expressing ideas faster, exploring alternatives safely, or reducing mechanical overhead — then you're probably on the right track.

---

## Closing Thought

AI will keep getting better at writing code. That's a given. What it won't do is care about your system. It won't remember why a decision was made. It won't feel the pain when things become unmaintainable. That part is still on us.

AI doesn't amplify intelligence — it amplifies **how you already work**. And that's why it's worth paying attention now, before the amplification gets too loud.`,
    date: "2025-10-10",
    readTime: "5 min read",
    tags: ["ai", "engineering-culture", "productivity", "process"],
    slug: "ai-amplifies-process-not-intelligence"
  },
  {
    id: "3",
    title: "AI Is Not a Junior Developer",
    excerpt: "Why the 'AI as junior developer' analogy is comforting, wrong, and quietly dangerous for engineering teams.",
    content: `# AI Is Not a Junior Developer

*12 Sep 2025 — Mind of a Coder*
*Why this analogy is comforting, wrong, and quietly dangerous*

---

There's a phrase I keep hearing in engineering conversations lately. It sounds reasonable. Comforting, even.

> "We're using AI like a junior developer. It writes the code, seniors review it."

It's usually said with good intentions. It's also wrong. Not slightly wrong — structurally wrong.

This analogy feels useful because it gives people a mental model they already understand. But that's exactly the problem: it maps something radically different onto something familiar, and in doing so it hides the real risks. AI is not a junior developer. Treating it as one doesn't just misunderstand the tool — it distorts the way teams think about responsibility, learning, and scale.

---

## A Junior Developer Is a Person. That Matters.

A junior developer is slow, uncertain, sometimes frustrating. But they have one property that no model has: **they change**. They build intuition. They internalize mistakes. They form mental models of the system. They start understanding *why* things are done a certain way.

When you review a junior's code, you're not just fixing the diff. You're shaping future decisions. You're investing in the system by investing in a person.

AI doesn't do that. Every prompt is amnesia. Every answer is detached from your team's history, scars, and trade-offs. Calling AI a "junior" isn't optimistic — it's anthropomorphic. And anthropomorphism is dangerous in engineering because it encourages us to delegate judgment where none exists.

---

## Code Is Not the Scarce Resource. Judgment Is.

Most teams don't struggle because they can't produce code. They struggle because they can't *reason* about the code they already have.

AI is extremely good at generating plausible solutions. That's not the same as correct solutions, and it's very far from *contextually appropriate* ones. A junior developer can be wrong, but they can also be corrected in a way that sticks. An AI can be wrong in the same way tomorrow, unless you catch it again.

This creates a subtle shift: reviews stop being educational moments and become damage control. Not because reviewers are lazy, but because the volume quietly increases. AI doesn't reduce the need for senior thinking — it concentrates it.

---

## The Scaling Illusion

The "AI as junior developer" narrative usually comes with an unspoken promise: scale. More output, same number of seniors. More features, same review process.

But reviews don't scale linearly. Understanding doesn't scale linearly. Attention definitely doesn't. If AI produces ten times more code, someone needs to validate ten times more assumptions. When that doesn't happen — and it usually doesn't — teams compensate by reviewing *less deeply*, not *more efficiently*.

That's how entropy sneaks in. Quietly. Respectably. With good intentions.

---

## AI Doesn't Need Mentorship. Engineers Do.

Here's the inversion that matters: junior developers need guidance because they are growing. AI doesn't grow. It doesn't accumulate wisdom. It doesn't carry responsibility forward.

So the real question isn't "how do we manage AI like a junior?" It's this:

> **How do we prevent AI from absorbing responsibility without absorbing understanding?**

The answer isn't more rules — it's clarity. AI works best where *intent is already clear*: to explore alternatives, reduce mechanical effort, surface edge cases, accelerate expression. The moment AI is used to *decide*, to *fill gaps in thinking*, or to *replace uncertainty with confidence*, the system starts lying to itself.

---

## What Actually Works

Teams that use AI well tend to do something counterintuitive: they slow down the human parts and speed up everything else. They write clearer problem statements. They demand stronger explanations in reviews. They treat AI output as raw material, not a solution.

In these teams, AI doesn't feel like a junior developer. It feels more like a power tool — useful, dangerous if mishandled, and entirely the operator's responsibility.

---

## The Uncomfortable Conclusion

AI will absolutely change how much code we write. It will not change how much thinking good engineering requires.

Calling AI a junior developer is comforting because it suggests continuity. But the truth is more disruptive: AI breaks old metaphors. And until we stop forcing it into familiar roles, we'll keep designing workflows that look productive while quietly undermining the very thing we're trying to scale: **understanding.**`,
    date: "2025-09-12",
    readTime: "6 min read",
    tags: ["ai", "engineering-culture", "code-review", "leadership"],
    slug: "ai-is-not-a-junior-developer"
  },
  {
    id: "2",
    title: "A New Way of Working: AI, Code Quality, Testing, and Documentation",
    excerpt: "What actually changed in our day-to-day engineering work when we stopped treating AI as a replacement and started treating it as an amplifier.",
    content: `# A New Way of Working: AI, Code Quality, Testing, and Documentation

*15 Jul 2025 — Mind of a Coder*
*What actually changed in our day-to-day engineering work*

---

For a long time, we told ourselves a comfortable story.

If we just wrote more code, faster, everything else would somehow fall into place. Features would ship. Quality would improve. Teams would scale.

That story doesn't survive contact with a real codebase.

What actually happens is simpler and uglier: code accumulates faster than understanding. Reviews turn superficial. Tests exist but nobody fully trusts them. Documentation decays into polite fiction.

The "new way of working" I'm describing here didn't come from a strategy deck or a leadership offsite. It emerged the only way real processes do: out of friction, mistakes, and a growing sense that the old habits were no longer sustainable.

---

## The problem hiding behind productivity

Velocity was never the real issue.

The real problem was **cognitive load**.

Every new feature required more context to be held in your head. Every change had invisible consequences. Senior engineers spent more time explaining the system than improving it. Junior engineers hesitated, not because they lacked skills, but because the blast radius of a mistake felt impossible to reason about.

AI entered this picture almost by accident. At first as a curiosity, then as a toy, and eventually as something that forced us to rethink how work actually flows through a team.

---

## AI didn't change everything. It exposed everything.

There's a lot of noise around AI replacing developers. In practice, what it really does is remove excuses.

AI can generate code quickly. Sometimes frighteningly quickly. But speed without clarity just accelerates entropy. We learned very early that delegating *decisions* to AI is a losing move.

So we reframed its role.

AI is not a developer. It's not even a teammate. It's closer to an amplifier: whatever process you already have, AI will make it louder.

That led us to a simple rule that still holds:

> **AI can help you move faster, but it never gets to decide where you're going.**

Once that boundary was explicit, fear dropped and usefulness went up.

---

## Quality starts before the first line of code

One of the first concrete changes was realizing that most bugs aren't implementation bugs. They're thinking bugs.

So instead of using AI after code existed, we started using it *before*.

Before opening an IDE, we'd ask questions like:

- What assumptions are we making here?
- What happens when this fails halfway?
- Which parts of this logic are irreversible?

AI is surprisingly good at being an annoying reviewer early in the process. Not because it's smarter, but because it's tireless. It will happily enumerate edge cases you forgot to consider while you were focused on the happy path.

By the time code was written, a large class of problems had already been surfaced, discussed, and either accepted or designed around.

---

## Code reviews became about thinking again

AI didn't make code reviews less important. It made shallow reviews indefensible.

If a machine can point out formatting issues, unused variables, or obvious refactors, then humans shouldn't be spending their time there. Reviews had to move up a level.

Gradually, the center of gravity shifted. Good reviews stopped being about *what changed* and started being about *why this change makes sense*.

Pull requests that couldn't explain their reasoning felt incomplete, even if the code "worked". AI helped by summarizing diffs and flagging risky areas, but the final judgment stayed human, where it belongs.

---

## Testing stopped pretending to be one thing

Testing culture often collapses under unrealistic expectations. Either everything must be perfectly tested, or testing quietly becomes optional.

We chose a third path: be explicit about what tests are for.

AI writes a lot of our unit tests now. That's fine. They're fast, cheap, and good at catching regressions. But nobody confuses them with a specification of system behavior.

The tests that matter most — the ones that encode business invariants and critical flows — are still written deliberately, slowly, and with intent. Fewer of them, but trusted.

The clarity about *why* a test exists turned out to matter more than the test itself.

---

## Documentation finally stopped lagging behind reality

Documentation was always the first thing to be sacrificed under pressure. It felt expensive, and it aged badly.

AI flipped the economics.

Instead of writing docs as a separate task, we started generating them as a byproduct of work already being done: pull requests, design discussions, code changes.

The important shift wasn't automation. It was ownership. Documentation became something you reviewed, versioned, and argued about — just like code.

When docs are allowed to be wrong, they quickly become irrelevant. When they're treated as part of the system, they start pulling their weight.

---

## The part tools can't fix

At some point it became obvious that none of this works without a cultural shift.

AI doesn't create ownership. It exposes the lack of it.

If "the AI wrote it" becomes an acceptable answer, quality collapses. If clarity is optional, velocity becomes meaningless. If engineers are rewarded for output instead of understanding, the system will rot no matter how advanced the tools are.

This way of working only survives when teams are willing to slow down decisions that matter, and speed up everything else.

---

## What actually changed

The outcome wasn't explosive productivity gains or fewer meetings.

What changed was the *feel* of the work.

Systems became easier to reason about. Reviews became calmer. Knowledge spread more evenly. Senior engineers stopped acting as human caches of undocumented behavior.

This isn't the future of work. It's a correction. One that probably should have happened years ago.

And like any real change, it's still unfinished.`,
    date: "2025-07-15",
    readTime: "7 min read",
    tags: ["ai", "code-quality", "testing", "documentation", "engineering-culture"],
    slug: "new-way-of-working-ai-code-quality-testing-documentation"
  },
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