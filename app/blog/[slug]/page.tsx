import { md } from "@/lib/markdown";
import { getAllPosts } from "@/lib/posts";
import { splitHtmlByCode } from "@/lib/split-html";
import { notFound } from "next/navigation";
import { RiBookOpenLine, RiHeartLine, RiTimeLine } from "@remixicon/react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { extractHeadings } from "@/lib/extract-heading";
import BlogToc from "@/components/blog/blog-toc";
import CodeBlock from "@/components/blog/code-blocks";

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

  const headings = extractHeadings(post.content);
  const blocks = splitHtmlByCode(htmlConverter);

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
        <div className="border-t border-b flex border-gray-800 text-slate-300 items-center justify-around mt-10">
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

      <section className="mt-20 ms-25 flex gap-3 ">
        <article className="prose prose-zinc dark:prose-invert w-full max-w-5xl pe-7 text-text-blog">
          {blocks.map((block, i) => {
            if (block.type === "code") {
              return (
                <CodeBlock
                  key={i}
                  lang={block.lang}
                  code={block.code}
                  html={block.html}
                />
              );
            }

            return (
              <div key={i} dangerouslySetInnerHTML={{ __html: block.html }} />
            );
          })}
        </article>

        <BlogToc headings={headings} />
      </section>
    </div>
  );
}
