import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <Card className="h-full bg-card border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
          
          <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth leading-tight">
            {post.title}
          </h3>
        </CardHeader>
        
        <CardContent className="pt-0">
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                  className="text-xs bg-accent-soft text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-smooth" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;