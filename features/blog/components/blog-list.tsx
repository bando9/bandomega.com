import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/shared/blog-card";

export default function BlogList() {
  const posts = getAllPosts();
  const postsPublic = posts.filter((post) => !post.draft);
  return (
    <ul className="blog-list w-full md:w-230 flex flex-col gap-10 md:gap-20 order-2 md:order-1">
      {postsPublic.map((post) => {
        return (
          <li key={post.slug}>
            <BlogCard post={post} />
          </li>
        );
      })}
    </ul>
  );
}
