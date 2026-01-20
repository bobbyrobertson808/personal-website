import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { BlogList } from "@/components/blog";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on product management, FinTech, and building great products.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="py-20 md:py-24">
      <Container size="narrow">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Blog</h1>
          <p className="mt-4 text-gray-600">
            Thoughts on product management, FinTech, and building great
            products.
          </p>
        </div>
        <BlogList posts={posts} />
      </Container>
    </section>
  );
}
