import Link from "next/link";
import Image from "next/image";
import CTALink from "./cta-link";
import ProjectCard from "../ui/project-card";
import { projects } from "@/data/projects";

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

      <div className="projects-list mt-7 md:mt-13 flex flex-col gap-10 md:gap-20 mb-10">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              websiteURL={project.websiteURL}
              githubURL={project.githubURL}
              projectdetailURL={project.projectdetailURL}
              isContentTextLeft={project.isContentTextLeft}
              image={project.image}
              tools={project.tools}
            />
          );
        })}
      </div>

      <CTALink text="See more projects" />
    </section>
  );
}
