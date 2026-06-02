import Header from "@/components/layout/header";
import SearchForm from "@/app/blog/_components/search-form";
import AsideSection from "@/app/blog/_components/aside-section";
import BlogList from "@/app/blog/_components/blog-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Read articles about Web Development, JavaScript, React, and more from Bando Mega Kusuma.",
};

export default function Blog() {
  const preTitle = "The";
  const title = "Blog";
  const description =
    "Dive into my thoughts on coding, tech trends, and developer life. Explore my latest posts below.";

  return (
    <main className="mt-25 md:mt-35">
      <Header preTitle={preTitle} title={title} description={description} />

      <SearchForm />

      <section className="mt-20 mx-5 md:ms-25 md:me-12 flex flex-col md:flex-row gap-1 md:gap-3">
        <BlogList />

        <AsideSection />
      </section>
    </main>
  );
}
