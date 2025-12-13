import ProjectList from "./project-list";
import CTALink from "./cta-link";

export default function ProjectFeatures() {
  return (
    <section id="projects" className="mt-8 md:mt-25 md:mx-25 mx-5">
      <div>
        <h1 className="heading-600-32 md:title-600-48">
          Featured{" "}
          <span className="bg-linear-to-r from-primary from-30% to-accent text-transparent bg-clip-text inline-block">
            Projects
          </span>
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
