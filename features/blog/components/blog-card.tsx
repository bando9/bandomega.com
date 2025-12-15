import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { PostType } from "@/app/type";

interface BlogCardProps {
  post: PostType;
}

export default function BlogCard({ post }: BlogCardProps) {
  dayjs.extend(localizedFormat);
  const formattedDate = dayjs(post?.date).format("LL");
  const formattedNumberUS = post?.view.toLocaleString("en-US");

  return (
    <>
      <Link href={`/blog/${post.slug}`}>
        <div className="blog-card flex flex-col md:flex-row gap-5 group bg">
          <div className="flex flex-col gap-5 order-2 md:order-1 w-full md:w-2/3">
            <div className="flex flex-col gap-2">
              <p className="caption-500-14">{formattedDate}</p>
              <h3 className="subtitle-600-16 group-hover:underline">
                {post.title}
              </h3>
              <p className="body-small-400-14">{post.description}</p>
            </div>
            <div className="flex justify-between flex-col md:flex-row gap-3">
              <div className="icon flex gap-5">
                <div className="flex gap-1.5 items-center">
                  <Image
                    width={450}
                    height={450}
                    src="/images/icons/book-1.svg"
                    className="w-5 h-5"
                    alt="Book Icon"
                  />
                  <p className="caption-500-14">{formattedNumberUS} views</p>
                </div>
                <div className="flex gap-1.5 items-center">
                  <Image
                    width={450}
                    height={450}
                    src="/images/icons/time.svg"
                    alt="Clock Icon"
                    className="w-5"
                  />
                  <p className="caption-500-14">{post.read} min read</p>
                </div>
              </div>
              <div className="tag flex gap-3">
                <h4 className="inline-block body-extra-small-400-12 bg-card py-2 px-4 rounded-2xl hover:bg-bg-light">
                  React
                </h4>
                <h4 className="inline-block body-extra-small-400-12 bg-card py-2 px-4 rounded-2xl hover:bg-bg-light">
                  Animation
                </h4>
              </div>
            </div>
          </div>
          <div className="order-1">
            <Image
              width={450}
              height={450}
              src="/images/blog-image-1.jpg"
              alt="Blog Image"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </Link>
    </>
  );
}
