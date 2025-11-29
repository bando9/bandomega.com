import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

async function fetchPosts(slug: string) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchPosts(slug);

  if (!post) notFound();
  const htmlConverter = md.render(post?.content);

  return (
    <div>
      <article className="prose mx-auto max-w-3xl dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: htmlConverter }} />
      </article>
    </div>
  );
}
