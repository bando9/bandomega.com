import Link from "next/link";
import Image from "next/image";
import { ProjectType } from "@/app/type";

interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const reverse = project.isContentTextLeft;

  return (
    <div
      className={`flex flex-col items-start md:justify-between gap-6 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full md:w-md">
        <Image
          width={450}
          height={450}
          src={project.image}
          alt="Photo Personal Web v1"
          className="rounded-lg w-full h-auto"
        />
      </div>

      <div className=" md:w-2/3">
        <h1 className="subtitle-600-20 md:subtitle-600-24 mb-2 group-hover:underline">
          {project.title}
        </h1>
        <h3 className="caption-500-14">{project.description}</h3>

        <div className="flex mt-3 gap-2 md:gap-4 items-center">
          <h3 className="caption-500-14">Tools:</h3>
          <div className="flex gap-3">
            {project.tools.map((tool) => {
              const Icon = tool.icon;
              return <Icon key={tool.id} />;
            })}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-5 gap-4">
          <div className="flex items-center gap-5 order-2 md:order-1">
            <Link
              href={project.githubURL}
              target="_blank"
              className="flex items-center gap-1 hover:underline"
            >
              <Image
                width={450}
                height={450}
                src="/images/stack/github.svg"
                alt="GitHub Icon"
                className="w-5"
              />
              <p className="caption-500-14">Repository</p>
            </Link>
            <Link
              href={project.websiteURL}
              target="_blank"
              className="flex items-center gap-1 hover:underline"
            >
              <Image
                width={450}
                height={450}
                src="/images/icons/link-1.svg"
                alt="Link Icon"
                className="w-5"
              />
              <p className="caption-500-14">Open link sites</p>
            </Link>
          </div>

          <Link href={project.projectdetailURL} className="order-1 md:order-2">
            <div className="flex items-center gap-1 hover:underline">
              <p className="caption-500-14">View project</p>
              <Image
                width={450}
                height={450}
                src="/images/icons/arrow-right.svg"
                alt="Arrow right icon"
                className="w-5"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
