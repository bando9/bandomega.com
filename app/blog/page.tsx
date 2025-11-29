import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function Blog() {
  const posts = getAllPosts();
  return (
    <div className="space-y-5">
      <h1>Hi From Blog</h1>

      <ul className="space-y-2">
        {posts.map((post) => {
          console.log(post);

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
