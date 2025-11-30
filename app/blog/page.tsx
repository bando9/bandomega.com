import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function Blog() {
  const posts = getAllPosts();

  const postsPublic = posts.filter((post) => !post.draft);

  return (
    <div className="space-y-5">
      <h1>Hi From Blog</h1>

      <ul className="space-y-2">
        {postsPublic.map((post) => {
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}> {post.title} </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
