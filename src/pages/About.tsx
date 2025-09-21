import Navigation from "@/components/ui/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, Brain, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    "Leadership & Management", "Vue", "React", "TypeScript", "ASP.NET Core", 
    "Node.js", "Azure", "Docker", "Kubernetes", "Terraform", 
    "SQL Server", "MongoDB", "PostgreSQL", "DevOps", "GitLab CI/CD"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="p-4 bg-accent-soft rounded-full">
              <Code className="w-8 h-8 text-accent" />
            </div>
            <div className="p-4 bg-accent-soft rounded-full">
              <Brain className="w-8 h-8 text-accent" />
            </div>
            <div className="p-4 bg-accent-soft rounded-full">
              <Rocket className="w-8 h-8 text-accent" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Roberto Serafin
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Engineering Manager | Cloud Architect | Full Stack Developer
          </p>
        </div>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Engineering Manager con oltre 15 anni di esperienza nello sviluppo software e nella 
                leadership tecnica. Attualmente guido le divisioni CRM, MailUp e TsCommerce in TeamSystem, 
                gestendo team distribuiti in Italia, Albania e Spagna, supervisionando roadmap tecniche e di prodotto.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Esperto in architetture cloud-native, sviluppo full-stack, infrastrutture Azure, 
                pratiche DevOps e modernizzazione CRM enterprise. Focus su coaching del team, 
                gestione del carico di lavoro e sviluppo delle persone con mindset Agile e 
                attenzione alla qualità del codice, sicurezza e sostenibilità.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Promuovo attivamente l'adozione di strumenti AI nel workflow di sviluppo 
                (come GitHub Copilot, Cursor e large language models) per aumentare la produttività, 
                supportare testing e documentazione, e migliorare le capacità del team.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6">Cosa scrivo</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-lg border border-border shadow-soft">
                <Code className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Software Engineering</h3>
                <p className="text-sm text-muted-foreground">
                  Best practices, pattern architetturali e lezioni dall'esperienza sui sistemi in produzione.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border shadow-soft">
                <Brain className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">AI & Development</h3>
                <p className="text-sm text-muted-foreground">
                  Come l'AI sta trasformando lo sviluppo software e cosa significa per i developer.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border shadow-soft">
                <Rocket className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Leadership & Management</h3>
                <p className="text-sm text-muted-foreground">
                  Insights su crescita professionale, gestione team e navigazione nell'industria tech.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="bg-accent-soft text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6">Contattami</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sono sempre interessato a connettermi con altri sviluppatori, discutere idee 
              o collaborare su progetti interessanti. Non esitare a contattarmi!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => window.open('https://github.com/sbaia', '_blank')}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => window.open('https://linkedin.com/in/roberto-serafin', '_blank')}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => window.open('mailto:roberto.serafin@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4" />
                Email
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;