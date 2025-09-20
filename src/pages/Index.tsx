import Navigation from "@/components/ui/navigation";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
            <p className="text-muted-foreground text-lg">
              Thoughts on software engineering, development practices, and AI
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
