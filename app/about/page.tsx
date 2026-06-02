import HeaderSectionAbout from "@/app/about/_components/header-section-about";
import TechSection from "@/app/about/_components/tech-section";
import CertificateSection from "@/app/about/_components/certificate-section";
import WorkExperienceSection from "@/app/about/_components/experience-section";
import EducationSection from "@/app/about/_components/education-section";
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
