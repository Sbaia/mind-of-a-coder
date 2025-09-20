import Navigation from "@/components/ui/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, Brain, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript/TypeScript", "React", "Node.js", "Python", 
    "Software Architecture", "System Design", "AI/ML", 
    "Cloud Computing", "DevOps", "Microservices"
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            About Me
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Passionate software engineer exploring the future of technology
          </p>
        </div>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a software engineer with a passion for building scalable systems and exploring 
                the intersection of traditional software engineering and artificial intelligence. 
                My journey in tech started with curiosity about how things work under the hood, 
                and has evolved into a deep appreciation for elegant code, robust architecture, 
                and innovative solutions.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Through this blog, I share insights from my experience building software at scale, 
                lessons learned from both successes and failures, and thoughts on how AI is reshaping 
                our industry. I believe in the power of sharing knowledge and learning from the 
                broader developer community.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6">What I Write About</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-card rounded-lg border border-border">
                <Code className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Software Engineering</h3>
                <p className="text-sm text-muted-foreground">
                  Best practices, architecture patterns, and lessons from building production systems.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-card rounded-lg border border-border">
                <Brain className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">AI & Development</h3>
                <p className="text-sm text-muted-foreground">
                  How AI is transforming software development and what it means for developers.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-card rounded-lg border border-border">
                <Rocket className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Career Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Insights on growing as a developer and navigating the tech industry.
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
              I'm always interested in connecting with fellow developers, discussing ideas, 
              or collaborating on interesting projects. Feel free to reach out!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              
              <Button variant="outline" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              
              <Button variant="outline" className="flex items-center gap-2">
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