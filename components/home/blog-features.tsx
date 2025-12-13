import CTALink from "./cta-link";
import BlogFeatureCard from "../cards/blog-feature-card";
import { getAllPosts } from "@/lib/posts";

export default function BlogFeatures() {
  const posts = getAllPosts();
  const blogsPublic = posts.filter((post) => !post.draft);
  const displayBlogFeatures = blogsPublic.slice(0, 3);

  return (
    <section id="blog-posts" className="mt-20 md:mx-25 mx-5">
      <h1 className="heading-600-32 md:title-600-48">
        Featured{" "}
        <span className="bg-linear-to-r from-primary from-30% to-accent text-transparent bg-clip-text inline-block">
          Post
        </span>
      </h1>

      <ul className="mt-9 md:mt-13 mb-10">
        {displayBlogFeatures.map((post) => {
          return (
            <li key={post.slug}>
              <BlogFeatureCard post={post} />
            </li>
          );
        })}
      </ul>

      <CTALink text="See more posts" link="/blog" />
    </section>
  );
}
