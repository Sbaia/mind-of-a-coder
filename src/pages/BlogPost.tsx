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
          {(() => {
            const lines = post.content.split('\n');
            const elements = [];
            let i = 0;
            
            while (i < lines.length) {
              const line = lines[i];
              
              if (line.trim() === '') {
                i++;
                continue;
              }
              
              // Handle code blocks
              if (line.startsWith('```')) {
                const language = line.substring(3).trim();
                const codeLines = [];
                i++; // Skip the opening ```
                
                while (i < lines.length && !lines[i].startsWith('```')) {
                  codeLines.push(lines[i]);
                  i++;
                }
                
                elements.push(
                  <div key={elements.length} className="bg-code-bg text-code-foreground p-6 rounded-lg my-6 overflow-x-auto">
                    <pre className="text-sm">
                      <code>{codeLines.join('\n')}</code>
                    </pre>
                  </div>
                );
                i++; // Skip the closing ```
                continue;
              }
              
              // Handle inline code
              if (line.includes('`') && !line.startsWith('```')) {
                const parts = line.split('`');
                elements.push(
                  <p key={elements.length} className="mb-6 leading-relaxed">
                    {parts.map((part, idx) => 
                      idx % 2 === 1 ? 
                        <code key={idx} className="bg-code-bg text-code-foreground px-2 py-1 rounded text-sm">{part}</code> : 
                        part
                    )}
                  </p>
                );
                i++;
                continue;
              }
              
              // Handle headings
              if (line.startsWith('# ')) {
                elements.push(
                  <h1 key={elements.length} className="text-4xl font-bold mb-8 mt-12 first:mt-0">
                    {line.substring(2)}
                  </h1>
                );
                i++;
                continue;
              }
              
              if (line.startsWith('## ')) {
                elements.push(
                  <h2 key={elements.length} className="text-2xl font-semibold mb-6 mt-10">
                    {line.substring(3)}
                  </h2>
                );
                i++;
                continue;
              }
              
              if (line.startsWith('### ')) {
                elements.push(
                  <h3 key={elements.length} className="text-xl font-semibold mb-4 mt-8">
                    {line.substring(4)}
                  </h3>
                );
                i++;
                continue;
              }
              
              // Handle blockquotes
              if (line.startsWith('> ')) {
                elements.push(
                  <blockquote key={elements.length} className="border-l-4 border-primary pl-6 italic text-muted-foreground my-6">
                    {line.substring(2)}
                  </blockquote>
                );
                i++;
                continue;
              }
              
              // Handle list items
              if (line.startsWith('- ') || line.startsWith('* ')) {
                const listItems = [];
                while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
                  listItems.push(lines[i].substring(2));
                  i++;
                }
                elements.push(
                  <ul key={elements.length} className="list-disc list-inside mb-6 space-y-2">
                    {listItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );
                continue;
              }
              
              // Handle horizontal rules
              if (line.trim() === '---') {
                elements.push(
                  <hr key={elements.length} className="border-border my-8" />
                );
                i++;
                continue;
              }
              
              // Handle bold text
              if (line.includes('**')) {
                const parts = line.split('**');
                elements.push(
                  <p key={elements.length} className="mb-6 leading-relaxed">
                    {parts.map((part, idx) => 
                      idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part
                    )}
                  </p>
                );
                i++;
                continue;
              }
              
              // Handle links
              if (line.includes('[') && line.includes('](')) {
                const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                const processedLine = line.replace(linkRegex, (match, text, url) => {
                  return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">${text}</a>`;
                });
                elements.push(
                  <p key={elements.length} className="mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: processedLine }} />
                );
                i++;
                continue;
              }
              
              // Handle regular paragraphs
              elements.push(
                <p key={elements.length} className="mb-6 leading-relaxed">
                  {line}
                </p>
              );
              i++;
            }
            
            return elements;
          })()}
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