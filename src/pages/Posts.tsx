import Navigation from "@/components/ui/navigation";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

const Posts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-primary">All Posts</h1>
            <p className="text-muted-foreground text-lg">
              Complete collection of thoughts on software engineering, development practices, and AI
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Posts;