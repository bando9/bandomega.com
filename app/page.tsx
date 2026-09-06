import BlogSection from "@/app/home/_components/blog-section";
import ContactSection from "@/components/shared/contact-section";

import GallerySection from "@/app/home/_components/gallery-section";
import HeaderSection from "@/app/home/_components/header-section";
import ProjectSection from "@/app/home/_components/project-section";
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
