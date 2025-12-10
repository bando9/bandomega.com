import CTALink from "./cta-link";
import BlogCard from "../cards/blog-card";

export default function BlogFeatures() {
  return (
    <section id="blog-posts" className="mt-20 md:mx-25 mx-5">
      <h1 className="heading-600-32 md:title-600-48">
        Featured{" "}
        <span className="bg-linear-to-r from-primary from-30% to-accent text-transparent bg-clip-text inline-block">
          Post
        </span>
      </h1>

      <div className="blog-list mt-9 md:mt-13 mb-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      <CTALink text="See more posts" link="/blog" />
    </section>
  );
}
