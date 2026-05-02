import Header from "@/components/layout/header";
import ContactSection from "@/components/shared/contact-section";
import ProjectList from "@/features/projects/project-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Explore projects by Bando Mega Kusuma including modern web apps.",
};

export default function Projects() {
  return (
    <main className="mt-25 md:mt-35">
      <Header
        title="Projects"
        description="A collection of projects I’ve built to sharpen my skills and explore ideas."
      />

      <section className="mt-20 md:mx-25 mx-5">
        <div className="projects-list mt-7 md:mt-13 flex flex-col gap-10 md:gap-20">
          <ProjectList />
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
