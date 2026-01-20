import { BlogPost } from "@/types";
import { BlogCard } from "./BlogCard";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <p className="text-gray-500">
        No posts yet. Check back soon!
      </p>
    );
  }

  return (
    <div className="divide-y divide-gray-100">
      {posts.map((post) => (
        <div key={post.slug} className="py-8 first:pt-0 last:pb-0">
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
}
