import ProjectCard from "@/features/projects/project-card";
import { projects } from "@/data/projects";

interface ProjectListProps {
  limit?: number;
}

export default function ProjectList({ limit }: ProjectListProps) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="mt-7 md:mt-13 flex flex-col gap-10 md:gap-20 mb-10">
      {displayProjects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
}
