import Image from "next/image";

export default function Projects() {
  return (
    <main className="mt-25 md:mt-35">
      <section className="mt-20 md:mx-25 mx-5">
        <div className="title text-center">
          <h1 className="title-600-48 bg-gradient-to-r from-primary from-30% to-accent text-transparent bg-clip-text inline-block">
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
          <div className="project-card-left flex flex-col md:flex-row items-start md:justify-between gap-6">
            <div className="order-1 w-full md:w-md">
              <Image
                width={450}
                height={450}
                src="/images/project-1.png"
                alt="Photo Personal Web v1"
                className="rounded-lg w-full h-auto"
              />
            </div>

            <div className="order-2 md:order-1 md:w-2/3">
              <h1 className="subtitle-600-20 md:subtitle-600-24 mb-2 group-hover:underline">
                Bandomega Personal Website
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
                    alt="CSS Icon"
                    className="w-5"
                  />
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/bootstrap.svg"
                    alt="Bootstrap Icon"
                    className="w-6"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-5 gap-4">
                <div className="flex items-center gap-5 order-2 md:order-1">
                  <a
                    href="https://github.com/bando9/bandomega-portfolio/tree/main"
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
                  </a>
                  <a
                    href="https://v1.bandomega.com/"
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
                  </a>
                </div>

                <a
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
                </a>
              </div>
            </div>
          </div>

          <div className="project-card-right flex flex-col md:flex-row items-start md:justify-between gap-6">
            <div className="order-2 md:order-1 md:w-2/3">
              <h1 className="subtitle-600-20 md:subtitle-600-24 mb-2 group-hover:underline">
                Memomate – Daily Notes App
              </h1>
              <h3 className="caption-500-14">
                A simple web app for creating and managing daily notes. Built
                with ReactJS and modular styling.
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
                  <a
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
                  </a>
                  <a
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
                  </a>
                </div>

                <a
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
                </a>
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
                  <a
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
                  </a>
                  <a
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
                  </a>
                </div>

                <a
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="px-5 md:px-25 py-25 md:py-32 flex justify-center items-center"
      >
        <div className="w-full max-w-3xl text-center">
          <h1 className="title-600-48 md:title-600-64">
            Get
            <span className="bg-gradient-to-r from-primary from-30% to-accent text-transparent bg-clip-text inline-block">
              In Touch
            </span>
          </h1>
          <p className="body-default-400-16 md:body-large-400-18 text-text-muted max-w-xl mx-auto mt-4">
            While I’m focused on my current journey, my inbox is always open.
            Whether it’s about tech, career, or just a friendly hello, I’d be
            glad to hear from you.
          </p>
          <div className="flex justify-center items-center mt-10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center py-3 px-6 bg-button rounded-2xl heading-700-20 md:heading-700-24 hover:shadow-md hover:shadow-bg-light transition"
            >
              Say Hello
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
