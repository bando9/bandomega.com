import HeaderSectionAbout from "@/features/about/sections/header-section-about";
import TechSection from "@/features/about/sections/tech-section";
import CertificateSection from "@/features/about/sections/certificate-section";
import WorkExperienceSection from "@/features/about/sections/experience-section";
import EducationSection from "@/features/about/sections/education-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "I'm Bando Mega Kusuma, a Software Engineer and Frontend Developer. Explore my portfolio, projects, blog, and ways to connect with me.",
};

export default function About() {
  return (
    <main className="mt-25 md:mt-35">
      <HeaderSectionAbout />

      <TechSection />

      <CertificateSection />

      <WorkExperienceSection />

      <EducationSection />
    </main>
  );
}
