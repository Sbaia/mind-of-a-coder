import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import { blogPosts } from "@/data/blogPosts";

// Helper to process inline formatting (bold, italic, code)
const processInlineFormatting = (text: string): React.ReactNode[] => {
  const result: React.ReactNode[] = [];
  let remaining = text;
  let keyCounter = 0;

  while (remaining.length > 0) {
    // Find the next formatting marker
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
    const italicMatch = remaining.match(/(?<!\*)\*([^*]+)\*(?!\*)/);
    const codeMatch = remaining.match(/`([^`]+)`/);

    const matches = [
      boldMatch ? { type: 'bold', match: boldMatch, index: boldMatch.index! } : null,
      italicMatch ? { type: 'italic', match: italicMatch, index: italicMatch.index! } : null,
      codeMatch ? { type: 'code', match: codeMatch, index: codeMatch.index! } : null,
    ].filter(Boolean).sort((a, b) => a!.index - b!.index);

    if (matches.length === 0) {
      result.push(remaining);
      break;
    }

    const first = matches[0]!;

    // Add text before the match
    if (first.index > 0) {
      result.push(remaining.substring(0, first.index));
    }

    // Add the formatted element
    const content = first.match![1];
    if (first.type === 'bold') {
      result.push(<strong key={keyCounter++}>{content}</strong>);
    } else if (first.type === 'italic') {
      result.push(<em key={keyCounter++}>{content}</em>);
    } else if (first.type === 'code') {
      result.push(
        <code key={keyCounter++} className="bg-code-bg text-code-foreground px-2 py-1 rounded text-sm">
          {content}
        </code>
      );
    }

    remaining = remaining.substring(first.index + first.match![0].length);
  }

  return result;
};

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
            const elements: React.ReactNode[] = [];
            const lines = post.content.split('\n');
            let i = 0;

            while (i < lines.length) {
              const line = lines[i];

              // Skip empty lines (paragraph separators handled by collecting non-empty lines)
              if (line.trim() === '') {
                i++;
                continue;
              }

              // Handle code blocks - collect until closing ```
              if (line.startsWith('```')) {
                const codeLines: string[] = [];
                i++; // skip opening ```
                while (i < lines.length && !lines[i].startsWith('```')) {
                  codeLines.push(lines[i]);
                  i++;
                }
                i++; // skip closing ```
                elements.push(
                  <div key={elements.length} className="bg-code-bg text-code-foreground p-3 rounded-lg my-4 overflow-x-auto">
                    <pre className="text-sm m-0">
                      <code>{codeLines.join('\n')}</code>
                    </pre>
                  </div>
                );
                continue;
              }

              // Handle headings
              if (line.startsWith('# ')) {
                elements.push(
                  <h1 key={elements.length} className="text-4xl font-bold mb-4 mt-8 first:mt-0">
                    {processInlineFormatting(line.substring(2))}
                  </h1>
                );
                i++;
                continue;
              }

              if (line.startsWith('## ')) {
                elements.push(
                  <h2 key={elements.length} className="text-2xl font-semibold mb-3 mt-6">
                    {processInlineFormatting(line.substring(3))}
                  </h2>
                );
                i++;
                continue;
              }

              if (line.startsWith('### ')) {
                elements.push(
                  <h3 key={elements.length} className="text-xl font-semibold mb-2 mt-5">
                    {processInlineFormatting(line.substring(4))}
                  </h3>
                );
                i++;
                continue;
              }

              // Handle horizontal rules
              if (line.trim() === '---') {
                elements.push(
                  <hr key={elements.length} className="border-border my-5" />
                );
                i++;
                continue;
              }

              // Handle blockquotes - collect consecutive > lines
              if (line.startsWith('> ')) {
                const quoteLines: string[] = [];
                while (i < lines.length && lines[i].startsWith('> ')) {
                  quoteLines.push(lines[i].substring(2));
                  i++;
                }
                elements.push(
                  <blockquote key={elements.length} className="border-l-4 border-primary pl-6 italic text-muted-foreground my-4">
                    {quoteLines.map((qline, idx) => (
                      <React.Fragment key={idx}>
                        {processInlineFormatting(qline)}
                        {idx < quoteLines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </blockquote>
                );
                continue;
              }

              // Handle list items - collect consecutive - or * lines
              if (line.startsWith('- ') || line.startsWith('* ')) {
                const listItems: string[] = [];
                while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
                  listItems.push(lines[i].substring(2));
                  i++;
                }
                elements.push(
                  <ul key={elements.length} className="list-disc list-inside mb-4 space-y-1">
                    {listItems.map((item, idx) => (
                      <li key={idx}>{processInlineFormatting(item)}</li>
                    ))}
                  </ul>
                );
                continue;
              }

              // Handle paragraphs - collect lines until empty line
              const paragraphLines: string[] = [];
              while (i < lines.length && lines[i].trim() !== '' &&
                     !lines[i].startsWith('```') &&
                     !lines[i].startsWith('# ') &&
                     !lines[i].startsWith('## ') &&
                     !lines[i].startsWith('### ') &&
                     !lines[i].startsWith('> ') &&
                     !lines[i].startsWith('- ') &&
                     !lines[i].startsWith('* ') &&
                     lines[i].trim() !== '---') {
                paragraphLines.push(lines[i]);
                i++;
              }

              if (paragraphLines.length > 0) {
                // Check if paragraph contains links
                const fullText = paragraphLines.join('\n');
                if (fullText.includes('[') && fullText.includes('](')) {
                  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                  const processedText = fullText.replace(linkRegex, (_, text, url) => {
                    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">${text}</a>`;
                  });
                  const withBreaks = processedText.replace(/\n/g, '<br>');
                  elements.push(
                    <p key={elements.length} className="mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: withBreaks }} />
                  );
                } else {
                  elements.push(
                    <p key={elements.length} className="mb-4 leading-relaxed">
                      {paragraphLines.map((pline, idx) => (
                        <React.Fragment key={idx}>
                          {processInlineFormatting(pline)}
                          {idx < paragraphLines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  );
                }
              }
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