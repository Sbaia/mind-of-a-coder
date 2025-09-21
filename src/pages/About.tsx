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
            Principal Engineer at Lansweeper | Cloud Architect | Engineering Leader
          </p>
        </div>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a Principal Engineer at Lansweeper (starting July 2025), bringing over 15 years of 
                hands-on experience in software development and technical leadership. Previously, I led 
                the engineering efforts for CRM, MailUp, and TsCommerce divisions at TeamSystem, where 
                I managed distributed teams across Italy, Albania, and Spain while architecting the 
                technical vision for three strategic product areas.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                My passion lies in building cloud-native architectures that scale, mentoring engineers 
                to reach their full potential, and bridging the gap between complex technical challenges 
                and business outcomes. I specialize in Azure infrastructure, DevOps excellence, and 
                enterprise CRM modernization, always with an eye on code quality, security, and 
                sustainable engineering practices.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm particularly excited about the intersection of AI and software development. I actively 
                champion the adoption of AI-powered tools like GitHub Copilot, Cursor, and large language 
                models to supercharge developer productivity, enhance testing workflows, and elevate the 
                capabilities of entire engineering teams. The future of development is collaborative—between 
                humans and AI.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6">What I Write About</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-lg border border-border shadow-soft">
                <Code className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Engineering Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Deep dives into architectural patterns, production lessons learned, and the art of 
                  building systems that stand the test of time and scale.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border shadow-soft">
                <Brain className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">AI-Powered Development</h3>
                <p className="text-sm text-muted-foreground">
                  Exploring how AI tools are revolutionizing our craft, from coding assistants to 
                  automated testing and the future of human-AI collaboration.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border shadow-soft">
                <Rocket className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Technical Leadership</h3>
                <p className="text-sm text-muted-foreground">
                  Insights on scaling engineering teams, fostering growth mindsets, and navigating 
                  the delicate balance between technical debt and feature delivery.
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