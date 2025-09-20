import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="max-w-3xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-smooth">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Home
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary"
                className="bg-accent-soft text-accent"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.trim() === '') return null;
            
            if (paragraph.startsWith('# ')) {
              return (
                <h1 key={index} className="text-4xl font-bold mb-8 mt-12 first:mt-0">
                  {paragraph.substring(2)}
                </h1>
              );
            }
            
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-semibold mb-6 mt-10">
                  {paragraph.substring(3)}
                </h2>
              );
            }
            
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl font-semibold mb-4 mt-8">
                  {paragraph.substring(4)}
                </h3>
              );
            }
            
            if (paragraph.startsWith('```')) {
              // Simple code block handling
              return (
                <div key={index} className="bg-code-bg text-code-foreground p-6 rounded-lg my-6 overflow-x-auto">
                  <pre className="text-sm">
                    <code>{paragraph.replace(/```\w*/g, '').trim()}</code>
                  </pre>
                </div>
              );
            }
            
            if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
              return (
                <li key={index} className="mb-2">
                  {paragraph.substring(2)}
                </li>
              );
            }
            
            if (paragraph.includes('**') && paragraph.includes('**')) {
              const parts = paragraph.split('**');
              return (
                <p key={index} className="mb-6 leading-relaxed">
                  {parts.map((part, i) => 
                    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                  )}
                </p>
              );
            }
            
            return (
              <p key={index} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <Link to="/">
            <Button variant="outline" className="w-full sm:w-auto">
              <ArrowLeft className="mr-2 w-4 h-4" />
              More Posts
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;