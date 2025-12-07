import Link from "next/link";
import Image from "next/image";
import CTALink from "./cta-link";
import ProjectCard from "../ui/project-card";

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
        <ProjectCard
          title="Bandomega Personal Website "
          description="A personal portfolio website showcasing projects, GitHub
          links, and project highlights. Built with HTML5 and Bootstrap."
          tools="HTML"
          websiteURL="https://v1.bandomega.com/"
          githubURL="https://github.com/bando9/bandomega-portfolio/"
          projectdetailURL="/projects/project-details"
        />

        <div className="project-card-right flex flex-col md:flex-row items-start md:justify-between gap-6">
          <div className="order-2 md:order-1 md:w-2/3">
            <h1 className="subtitle-600-20 md:subtitle-600-24 mb-2 group-hover:underline">
              Memomate – Daily Notes App
            </h1>
            <h3 className="caption-500-14">
              A simple web app for creating and managing daily notes. Built with
              ReactJS and modular styling.
            </h3>

            <div className="flex mt-3 gap-2 md:gap-4 items-center">
              <h3 className="caption-500-14">Tools:</h3>
              <div className="flex gap-3">
                <Image
                  width={450}
                  height={450}
                  src="/images/stack/react.svg"
                  alt="HTML Icon"
                  className="w-5"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-5 gap-4">
              <div className="flex items-center gap-5 order-2 md:order-1">
                <Link
                  href="https://github.com/bando9/memomate"
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
                  href="https://memomate-six.vercel.app/"
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

              <Link
                href="/projects/project-details"
                className="order-1 md:order-2"
              >
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

          <div className="order-1 w-full md:w-md">
            <Image
              width={450}
              height={450}
              src="/images/project-2.jpg"
              alt="Photo Memomate"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="project-card-right flex flex-col md:flex-row items-start md:justify-between gap-6">
          <div className="order-1 w-full md:w-md">
            <Image
              width={450}
              height={450}
              src="/images/project-3.jpg"
              alt="Photo Memomate"
              className="rounded-lg w-full h-auto"
            />
          </div>

          <div className="order-2 md:order-1 md:w-2/3">
            <h1 className="subtitle-600-20 md:subtitle-600-24 mb-2 group-hover:underline">
              Mini Library – Book CRUD Application
            </h1>
            <h3 className="caption-500-14">
              A personal portfolio website showcasing projects, GitHub links,
              and project highlights. Built with HTML5 and Bootstrap.
            </h3>

            <div className="flex mt-3 gap-2 md:gap-4 items-center">
              <h3 className="caption-500-14">Tools:</h3>
              <div className="flex gap-3">
                <Image
                  width={450}
                  height={450}
                  src="/images/stack/html5.svg"
                  alt="HTML Icon"
                  className="w-5"
                />

                <Image
                  width={450}
                  height={450}
                  src="/images/stack/css.svg"
                  className="w-5"
                  alt="CSS Icon"
                />

                <Image
                  width={450}
                  height={450}
                  src="/images/stack/javascript.svg"
                  className="w-5"
                  alt="JavaScript Icon"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-5 gap-4">
              <div className="flex items-center gap-5 order-2 md:order-1">
                <Link
                  href="https://github.com/bando9/perpustakaan-mini"
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
                  href="https://perpustakaan-mini.vercel.app/"
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

              <Link
                href="/projects/project-details"
                className="order-1 md:order-2"
              >
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
      </div>

      <CTALink text="See more projects" />
    </section>
  );
}
