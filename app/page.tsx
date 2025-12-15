import BlogSection from "@/features/home/sections/blog-section";
import ContactSection from "@/features/home/sections/contact-section";
import GallerySection from "@/features/home/sections/gallery-section";
import HeaderSection from "@/features/home/sections/header-section";
import ProjectSection from "@/features/home/sections/project-section";

export default function Home() {
  return (
    <>
      <HeaderSection />

      <GallerySection />

      <ProjectSection />

      <BlogSection />

      <ContactSection />
    </>
  );
}
