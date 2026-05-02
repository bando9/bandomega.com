import BlogSection from "@/features/home/sections/blog-section";
import ContactSection from "@/components/shared/contact-section";
import GallerySection from "@/features/home/sections/gallery-section";
import HeaderSection from "@/features/home/sections/header-section";
import ProjectSection from "@/features/home/sections/project-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "I'm Bando Mega Kusuma, a Software Engineer and Frontend Developer. Explore my portfolio, projects, blog, and ways to connect with me.",
};

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
