import Navigation from "@/components/ui/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, Brain, Rocket } from "lucide-react";

const About = () => {
  const frontendStack = [
    "Vue", "React", "TypeScript", "Capacitor/Ionic"
  ];

  const backendStack = [
    "ASP.NET Core", "Node.js", "MongoDB", "SQL Server", "PostgreSQL"
  ];

  const cloudDevOpsStack = [
    "Azure", "Docker", "Kubernetes", "Terraform", "GitLab CI/CD", "ArgoCD"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="flex-shrink-0">
              <img 
                src="https://media.licdn.com/dms/image/v2/C4D03AQGQcP5K9_5JOQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516877943693?e=1741824000&v=beta&t=L8h8rOJrKJ2gYz8w_8kZQGLtGLyNZQWLtJ8b8MQoQoQ"
                alt="Roberto Serafin profile photo"
                className="w-32 h-32 rounded-full object-cover border-4 border-accent shadow-large"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
                }}
              />
            </div>
            <div className="flex gap-4">
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
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Roberto Serafin
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Principal Engineer at Lansweeper | Cloud Architect | Engineering Leader
          </p>
        </div>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a Principal Engineer at Lansweeper who absolutely loves crafting elegant solutions 
                to complex problems. What gets me excited? Building systems that not only work flawlessly 
                but are also a joy to work with. I'm fascinated by the intersection of cutting-edge 
                technology and practical engineering—where theory meets the real world.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                My sweet spot lies in cloud-native architectures, particularly on Azure, where I enjoy 
                orchestrating Kubernetes clusters, designing CI/CD pipelines with GitLab, and watching 
                infrastructure come to life through Terraform. There's something deeply satisfying about 
                seeing code transform into scalable, resilient systems that handle real-world workloads.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                When I'm not diving deep into distributed systems, you'll find me exploring the latest 
                in AI-powered development tools. I'm particularly passionate about how GitHub Copilot, 
                Cursor, and other AI assistants are revolutionizing our craft—not replacing developers, 
                but amplifying our creativity and productivity in ways we never imagined.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6">What Gets Me Excited</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-lg border border-border shadow-soft">
                <Code className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Clean Architecture</h3>
                <p className="text-sm text-muted-foreground">
                  I get a thrill from designing systems that are not just functional, but elegant and 
                  maintainable. Good architecture is like poetry—every piece has its place.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border shadow-soft">
                <Brain className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">AI-Augmented Coding</h3>
                <p className="text-sm text-muted-foreground">
                  Exploring how AI tools can make us better developers, not replace us. The collaboration 
                  between human creativity and AI capabilities fascinates me endlessly.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border shadow-soft">
                <Rocket className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Cloud Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Building scalable, resilient systems in the cloud. There's magic in watching 
                  infrastructure-as-code transform into living, breathing applications.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6">My Tech Stack</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Frontend & Mobile</h3>
                <div className="flex flex-wrap gap-3">
                  {frontendStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-accent-soft text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Backend & Databases</h3>
                <div className="flex flex-wrap gap-3">
                  {backendStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-accent-soft text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-3">
                  {cloudDevOpsStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-accent-soft text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6">Let's Connect</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always eager to connect with fellow engineers, brainstorm innovative solutions, 
              or collaborate on projects that push the boundaries of what's possible. Whether 
              you're looking to discuss the latest in cloud architecture, AI tooling, or just 
              want to share war stories from the trenches—reach out!
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