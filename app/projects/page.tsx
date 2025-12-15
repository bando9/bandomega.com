import ButtonContact from "@/features/home/components/button-contact";
import ProjectList from "@/features/projects/project-list";

export default function Projects() {
  return (
    <main className="mt-25 md:mt-35">
      <section className="mt-20 md:mx-25 mx-5">
        <div className="title text-center">
          <h1 className="title-600-48 bg-linear-to-r from-primary from-30% to-accent text-transparent bg-clip-text inline-block">
            Projects
          </h1>
          <p className="body-large-400-18 text-text-muted">
            A collection of projects I’ve built to sharpen my skills and explore
            ideas.
          </p>
        </div>
      </section>

      <section className="mt-20 md:mx-25 mx-5">
        <div className="projects-list mt-7 md:mt-13 flex flex-col gap-10 md:gap-20">
          <ProjectList />
        </div>
      </section>

      <ButtonContact />
    </main>
  );
}
