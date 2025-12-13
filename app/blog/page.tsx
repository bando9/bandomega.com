import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";
import BlogCard from "@/components/cards/blog-card";

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
        <div className="bg-linear-to-r from-primary from-30% to-accent h-10 w-60 md:w-150 rounded-xl p-[1.5px] flex justify-center items-center">
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
        <ul className="blog-list w-full md:w-230 flex flex-col gap-10 md:gap-20 order-2 md:order-1">
          {postsPublic.map((post) => {
            return (
              <li key={post.slug}>
                <BlogCard post={post} />
              </li>
            );
          })}
        </ul>

        <aside className="w-full md:w-60 flex pt-2 md:border-l md:border-text-muted md:h-50 order-1 mb-10">
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
    </main>
  );
}
