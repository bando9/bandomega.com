import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  const posts = getAllPosts();

  const postsPublic = posts.filter((post) => !post.draft);

  return (
    <main className="mt-25 md:mt-35">
      <section className="mt-20 md:mt-25 md:mx-25 mx-5">
        <div className="title text-center">
          <h1 className="heading-600-32 md:title-600-48">
            The <span className="color-gradient-primary">Blogs</span>
          </h1>
          <p className="body-default-400-16 md:body-large-400-18 text-text-muted md:text-text-muted mt-1 md:mt-0">
            Dive into my thoughts on coding, tech trends, and developer life.
            Explore my latest posts below.
          </p>
        </div>
      </section>

      <section className="mt-20 md:mt-25 md:mx-25 mx-5 flex justify-center">
        <div className="bg-gradient-to-r from-primary from-30% to-accent h-10 w-60 md:w-150 rounded-xl p-[1.5px] flex justify-center items-center">
          <label
            htmlFor="search"
            className="h-full w-full rounded-xl bg-bg-light flex items-center justify-around"
          >
            <Image
              width={450}
              height={450}
              src="/images/icons/search.svg"
              alt="Search Icon"
              className="ms-1 sm:w-5"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-45 md:w-130 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none"
            />
          </label>
        </div>
      </section>

      <section className="mt-20 mx-5 md:ms-25 md:me-12 flex flex-col md:flex-row gap-1 md:gap-3">
        <div className="blog-list w-full md:w-230 flex flex-col gap-10 md:gap-20 order-2 md:order-1">
          <Link href="/blog/blog-details/">
            <div className="blog-card flex flex-col md:flex-row gap-5 group bg">
              <div className="flex flex-col gap-5 order-2 md:order-1 w-full md:w-2/3">
                <div className="flex flex-col gap-2">
                  <p className="caption-500-14">December 17, 2024</p>
                  <h3 className="subtitle-600-16 group-hover:underline">
                    List Animation using Motion for ReactList Animation using
                    Motion for React
                  </h3>
                  <p className="body-small-400-14">
                    An in-depth guide on how to animate enter and exit animation
                    for list using Motion for React (previously Framer Motion).
                  </p>
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
                      <p className="caption-500-14">1,200 views</p>
                    </div>
                    <div className="flex gap-1.5 items-center">
                      <Image
                        width={450}
                        height={450}
                        src="/images/icons/time.svg"
                        alt="Clock Icon"
                        className="w-5"
                      />
                      <p className="caption-500-14">6 min read</p>
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

          <Link href="/blog/blog-details/">
            <div className="blog-card flex flex-col md:flex-row gap-5 group">
              <div className="flex flex-col gap-5 order-2 md:order-1 w-full md:w-2/3">
                <div className="flex flex-col gap-2">
                  <p className="caption-500-14">December 17, 2024</p>
                  <h3 className="subtitle-600-16 group-hover:underline">
                    List Animation using Motion for ReactList Animation using
                    Motion for React
                  </h3>
                  <p className="body-small-400-14">
                    An in-depth guide on how to animate enter and exit animation
                    for list using Motion for React (previously Framer Motion).
                  </p>
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
                      <p className="caption-500-14">1,200 views</p>
                    </div>
                    <div className="flex gap-1.5 items-center">
                      <Image
                        width={450}
                        height={450}
                        src="/images/icons/time.svg"
                        alt="Clock Icon"
                        className="w-5"
                      />
                      <p className="caption-500-14">6 min read</p>
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
          <Link href="/blog/blog-details/">
            <div className="blog-card flex flex-col md:flex-row gap-5 group">
              <div className="flex flex-col gap-5 order-2 md:order-1 w-full md:w-2/3">
                <div className="flex flex-col gap-2">
                  <p className="caption-500-14">December 17, 2024</p>
                  <h3 className="subtitle-600-16 group-hover:underline">
                    List Animation using Motion for ReactList Animation using
                    Motion for React
                  </h3>
                  <p className="body-small-400-14">
                    An in-depth guide on how to animate enter and exit animation
                    for list using Motion for React (previously Framer Motion).
                  </p>
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
                      <p className="caption-500-14">1,200 views</p>
                    </div>
                    <div className="flex gap-1.5 items-center">
                      <Image
                        width={450}
                        height={450}
                        src="/images/icons/time.svg"
                        alt="Clock Icon"
                        className="w-5"
                      />
                      <p className="caption-500-14">6 min read</p>
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
          <Link href="/blog/blog-details/">
            <div className="blog-card flex flex-col md:flex-row gap-5 group">
              <div className="flex flex-col gap-5 order-2 md:order-1 w-full md:w-2/3">
                <div className="flex flex-col gap-2">
                  <p className="caption-500-14">December 17, 2024</p>
                  <h3 className="subtitle-600-16 group-hover:underline">
                    List Animation using Motion for ReactList Animation using
                    Motion for React
                  </h3>
                  <p className="body-small-400-14">
                    An in-depth guide on how to animate enter and exit animation
                    for list using Motion for React (previously Framer Motion).
                  </p>
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
                      <p className="caption-500-14">1,200 views</p>
                    </div>
                    <div className="flex gap-1.5 items-center">
                      <Image
                        width={450}
                        height={450}
                        src="/images/icons/time.svg"
                        alt="Clock Icon"
                        className="w-5"
                      />
                      <p className="caption-500-14">6 min read</p>
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
        </div>

        <aside className="w-full md:w-60 flex pt-2 md:border-l-1 md:border-text-muted md:h-50 order-1 mb-10">
          <div className="ms-3">
            <div className="flex items-center gap-5">
              <p className="caption-500-14">Select date</p>
              <Link href="#">
                <Image
                  width={450}
                  height={450}
                  src="/images/icons/three-dots.svg"
                  alt="Three Dots Icon"
                  className="w-5"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <p className="caption-500-14">Choose topics</p>
              <div>
                <div className="tag grid grid-cols-3 gap-2">
                  <h4 className="body-extra-small-400-12 bg-card py-2 px-2 rounded-2xl flex justify-center hover:bg-bg-light cursor-pointer">
                    React
                  </h4>
                  <h4 className="flex justify-center body-extra-small-400-12 bg-card py-2 px-2 rounded-2xl hover:bg-bg-light cursor-pointer">
                    Animation
                  </h4>
                  <h4 className="flex justify-center body-extra-small-400-12 bg-card py-2 px-2 rounded-2xl hover:bg-bg-light cursor-pointer">
                    JavaScript
                  </h4>
                  <h4 className="flex justify-center body-extra-small-400-12 bg-card py-2 px-2 rounded-2xl hover:bg-bg-light cursor-pointer">
                    GitHub
                  </h4>
                  <h4 className="flex justify-center body-extra-small-400-12 bg-card py-2 px-2 rounded-2xl hover:bg-bg-light cursor-pointer">
                    Tailwind
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>

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
    </main>
  );
}
