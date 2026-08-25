import BlogSection from "@/features/home/sections/blog-section";
import ContactSection from "@/components/shared/contact-section";
import GallerySection from "@/features/home/sections/gallery-section";
import HeaderSection from "@/features/home/sections/header-section";
import ProjectSection from "@/features/home/sections/project-section";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <>
      <div>
        <ShootingStars />
        <StarsBackground />
      </div>

      <HeaderSection />

      <GallerySection />

      <ProjectSection />

      <BlogSection />

      <ContactSection />
    </>
  );
}
