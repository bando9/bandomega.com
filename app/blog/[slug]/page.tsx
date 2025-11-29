import CodeBlock from "@/components/code-blocks";
import { md } from "@/lib/markdown";
import { getAllPosts } from "@/lib/posts";
import { splitHtmlByPre } from "@/lib/split-html";
import { notFound } from "next/navigation";
import { RiBookOpenLine, RiHeartLine, RiTimeLine } from "@remixicon/react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

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

  dayjs.extend(localizedFormat);
  const formattedDate = dayjs(post?.date).format("LL");
  const formattedNumberUS = post?.watch.toLocaleString("en-US");
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2,
  });

  const formattedNumber = formatter.format(post?.like);

  return (
    <div>
      <section className="mt-20 mx-25">
        <div className="mt-10">
          <h2 className="heading-600-32">{post.title}</h2>
          <p className="caption-500-24 text-text-muted mt-2">
            {post.description}
          </p>
        </div>
        <div className="border-t border-b flex border-text-muted items-center justify-around mt-10">
          <p>{formattedDate}</p>
          <div className="flex gap-1.5 items-center py-3">
            <RiBookOpenLine className="w-5" />
            <p className="caption-500-14">{formattedNumberUS} views</p>
          </div>
          <div className="flex gap-1.5 items-center">
            <RiTimeLine className="w-5" />
            <p className="caption-500-14">{post?.read} min read</p>
          </div>
          <div className="flex gap-1.5 items-center">
            <RiHeartLine className="w-5" />
            <p className="caption-500-14">{formattedNumber} likes</p>
          </div>
        </div>
      </section>

      <article className="prose prose-zinc mx-auto max-w-3xl dark:prose-invert">
        {blocks.map((block, i) => {
          if (block.type === "pre") {
            const raw = decodeURIComponent(
              /data-raw="([^"]+)"/.exec(block.content)?.[1] || ""
            );

            return <CodeBlock key={i} code={raw} html={block.content} />;
          }

          return (
            <div key={i} dangerouslySetInnerHTML={{ __html: block.content }} />
          );
        })}
      </article>
    </div>
  );
}
