import CTALink from "@/features/home/components/cta-link";
import BlogCard from "@/components/shared/blog-card";
import { getAllPosts } from "@/lib/posts";

export default function BlogSection() {
  const posts = getAllPosts();
  const blogsPublic = posts.filter((post) => !post.draft);
  const displayBlogFeatures = blogsPublic.slice(0, 3);

  return (
    <section id="blog-posts" className="mt-20 md:mx-25 mx-5">
      <h1 className="heading-600-32 md:title-600-48">
        Featured <span className="gradient-primary">Post</span>
      </h1>

      <ul className="mt-9 md:mt-13 mb-10">
        {displayBlogFeatures.map((post) => {
          return (
            <li key={post.slug}>
              <BlogCard post={post} />
            </li>
          );
        })}
      </ul>

      <CTALink text="See more posts" link="/blog" />
    </section>
  );
}
