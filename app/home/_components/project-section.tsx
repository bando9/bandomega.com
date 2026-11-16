import ProjectList from "@/app/projects/_components/project-list";
import CTALink from "@/app/home/_components/cta-link";

export default function ProjectSection() {
  return (
    <section id="projects" className="mt-8 md:mt-25 md:mx-25 mx-5">
      <div>
        <h1 className="heading-600-32 md:title-600-48">
          Featured <span className="gradient-primary">Projects</span>
        </h1>
        <p className="body-small-400-14 md:body-large-400-18 text-text-muted">
          Some of the projects I’ve worked on, built with passion and a drive to
          keep improving.
        </p>
      </div>

      <ProjectList limit={3} />

      <CTALink text="See more projects" link="/projects" />
    </section>
  );
}
