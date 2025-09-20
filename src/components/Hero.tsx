import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Brain, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="p-3 bg-accent-soft rounded-full">
            <Code className="w-6 h-6 text-accent" />
          </div>
          <div className="p-3 bg-accent-soft rounded-full">
            <Brain className="w-6 h-6 text-accent" />
          </div>
          <div className="p-3 bg-accent-soft rounded-full">
            <Cpu className="w-6 h-6 text-accent" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary leading-tight">
          Software Engineering
          <br />
          <span className="text-accent">& AI Insights</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Exploring the intersection of software development, engineering best practices, 
          and artificial intelligence. Deep dives into code, architecture, and the future of tech.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 transition-all duration-300 group"
          >
            Read Latest Posts
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-secondary transition-smooth"
          >
            About Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;