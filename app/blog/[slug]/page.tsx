import CodeBlock from "@/components/code-blocks";
import { md } from "@/lib/markdown";
import { getAllPosts } from "@/lib/posts";
import { splitHtmlByPre } from "@/lib/split-html";
import { notFound } from "next/navigation";

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

  const blocks = splitHtmlByPre(htmlConverter);

  return (
    <div>
      <article className="prose prose-zinc mx-auto max-w-3xl dark:prose-invert">
        {blocks.map((block, i) => {
          if (block.type === "pre") {
            // ambil raw code
            const raw = decodeURIComponent(
              /data-raw="([^"]+)"/.exec(block.content)?.[1] || ""
            );
            console.log(raw);

            // const codeBlocks = [
            //   ...post.content.matchAll(/```([\s\S]*?)```/g),
            // ].map((m) => m[1].trim());

            // const codeBlock = codeBlocks[i - 1];
            // console.log(codeBlock);

            return <CodeBlock key={i} code={raw} html={block.content} />;
          }

          // block biasa
          return (
            <div key={i} dangerouslySetInnerHTML={{ __html: block.content }} />
          );
        })}
      </article>
    </div>
  );
}
