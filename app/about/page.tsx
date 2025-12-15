import HeaderSectionAbout from "@/features/about/sections/header-section-about";
import TechSection from "@/features/about/sections/tech-section";
import CertificateSection from "@/features/about/sections/certificate-section";
import WorkExperienceSection from "@/features/about/sections/experience-section";
import EducationSection from "@/features/about/sections/education-section";

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
