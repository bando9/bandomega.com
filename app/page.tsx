import { RiBook2Line } from "@remixicon/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        id="header"
        className="flex flex-col lg:flex-row justify-between items-start gap-3 mt-15 md:mx-25 mx-5"
      >
        <div className="w-full">
          <div className="inline-flex items-center md:px-6 md:py-3 px-3 py-2 rounded-full color-gradient-secondary mb-10">
            <span className="relative flex mr-3">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full blur-sm opacity-70"></span>
            </span>

            <span className="md:subtitle-600-20 subtitle-600-16">
              Exploring New Opportunities
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="heading-600-32 md:title-600-48">
              I&apos;m Bando Mega Kusuma
            </h1>
            <p className="body-small-400-14 md:body-default-400-16">
              I develop with React and write to guide others in rethingking the
              fundamentals through simple, effective mental models.
            </p>
          </div>

          <div className="flex gap-5 mt-5 md:mt-10 items-center flex-wrap">
            <a href="/projects">
              <h3 className="body-small-400-14 md:body-defult-400-16 text-text bg-button md:px-6 md:py-3 px-4 py-2 rounded-lg md:rounded-lg flex gap-2 cursor-pointer">
                View My Projects
              </h3>
            </a>

            <a href="/about">
              <h3 className="text-text bg-bg-dark border-2 border-button md:px-6 md:py-3 px-4 py-2 rounded-lg md:rounded-lg cursor-pointer hover:shadow-md shadow-button body-small-400-14 md:body-defult-400-16">
                More about me
              </h3>
            </a>
          </div>

          <div className="flex gap-3 mt-3 md:mt-5 flex-wrap">
            <a
              href="https://drive.google.com/file/d/1gmkJ5dN6XnUKEilYNey5fBkEe_Gq8_zE/view?usp=sharing"
              target="_blank"
              className="flex gap-1 opacity-50 hover:underline"
            >
              {/* <Image
                src="/images/icons/readdotcv.svg"
                alt="CV Icon"
                className="w-5"
              /> */}
              <RiBook2Line />
              <p>Resume</p>
            </a>
            <a
              href="https://www.linkedin.com/in/bando-mega-kusuma"
              target="_blank"
              className="flex gap-1 opacity-50 hover:underline"
            >
              <Image
                src="/images/icons/linkedin.svg"
                alt="LinkedIn Icon"
                className="w-5"
              />
              <p>LinkedIn</p>
            </a>
            <a
              href="https://www.github.com/bando9"
              target="_blank"
              className="flex gap-1 opacity-50 hover:underline"
            >
              <Image
                src="/images/stack/github.svg"
                alt="GitHub Icon"
                className="w-5"
              />
              <p>GitHub</p>
            </a>
          </div>
        </div>

        <div className="w-full md:max-w-120 flex justify-center mt-6 lg:mt-0">
          <Image
            src="/images/profile.jpg"
            alt="bando-profile"
            className="rounded-xl max-w-80 md:max-w-120 sm:w-full object-cover"
          />
        </div>
      </section>

      <section
        id="gallery"
        className="mt-15 md:mt-40 flex gap-4 md:gap-10 overflow-hidden h-55 md:h-120 py-10"
      >
        <div className="max-w-60 md:max-w-75 max-h-10 md:max-h-75">
          <Image
            className="rotate-2 rounded-xl h-35 w-45 md:h-100 md:w-100"
            src="https://images.unsplash.com/photo-1625967445189-d35d49a37501?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Semarang City"
          />
        </div>

        <div className="max-w-60 md:max-w-75 max-h-10 md:max-h-75">
          <Image
            className="rotate-2 rounded-xl h-35 w-45 md:h-100 md:w-100"
            src="https://images.unsplash.com/photo-1625967445155-bf8cc0412e9b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="semarang-city"
          />
        </div>

        <div className="max-w-60 md:max-w-75 max-h-10 md:max-h-75">
          <Image
            className="-rotate-2 rounded-xl h-35 w-45 md:h-100 md:w-100"
            src="https://images.unsplash.com/photo-1672281699269-86a871c5b2c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="makassar-city"
          />
        </div>

        <div className="max-w-60 md:max-w-75 max-h-10 md:max-h-75">
          <Image
            className="-rotate-2 rounded-xl h-35 w-45 md:h-100 md:w-100"
            src="https://images.unsplash.com/photo-1737638423079-5bac4c563ba4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="makassar-city"
          />
        </div>
      </section>

      <section id="projects" className="mt-8 md:mt-25 md:mx-25 mx-5">
        <div>
          <h1 className="heading-600-32 md:title-600-48">
            Featured
            <span className="bg-linear-to-r from-primary from-30% to-accent text-transparent bg-clip-text inline-block">
              Projects
            </span>
          </h1>
          <p className="body-small-400-14 md:body-large-400-18 text-text-muted">
            Some of the projects I’ve worked on, built with passion and a drive
            to keep improving.
          </p>
        </div>

        <div className="projects-list mt-7 md:mt-13 flex flex-col gap-10 md:gap-20">
          <div className="project-card-left flex flex-col md:flex-row items-start md:justify-between gap-6">
            <div className="order-1 w-full md:w-md">
              <Image
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
                    src="/images/stack/html5.svg"
                    alt="HTML Icon"
                    className="w-5"
                  />
                  <Image
                    src="/images/stack/css.svg"
                    alt="CSS Icon"
                    className="w-5"
                  />
                  <Image
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
                src="/images/project-2.jpg"
                alt="Photo Memomate"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="project-card-right flex flex-col md:flex-row items-start md:justify-between gap-6">
            <div className="order-1 w-full md:w-md">
              <Image
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
                    src="/images/stack/html5.svg"
                    alt="HTML Icon"
                    className="w-5"
                  />

                  <Image
                    src="/images/stack/css.svg"
                    className="w-5"
                    alt="CSS Icon"
                  />

                  <Image
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

        <div className="flex justify-center mt-8 md:mt-12 text-center">
          <a href="/projects/">
            <h3 className="flex items-center gap-2 cursor-pointer border rounded-lg py-1 px-3 hover:underline">
              See more projects
              <Image
                src="/images/icons/arrow-right.svg"
                alt="Arrow Right Icon"
                className="w-5"
              />
            </h3>
          </a>
        </div>
      </section>

      <section id="blog-posts" className="mt-20 md:mx-25 mx-5">
        <h1 className="heading-600-32 md:title-600-48">
          Featured
          <span className="bg-linear-to-r from-primary from-30% to-accent text-transparent bg-clip-text inline-block">
            Post
          </span>
        </h1>

        <div className="blog-list mt-9 md:mt-13">
          <div className="card-blog text-text flex flex-col md:flex-row cursor-pointer gap-6 items-start md:items-start md:justify-between mt-8 md:mt-12 group">
            <div className="order-2 md:order-1">
              <h4 className="caption-500-14 mb-2 md:mb-4">
                September 24, 2025
              </h4>
              <h1 className="subtitle-600-20 md:subtitle-600-24 mb-1 group-hover:underline">
                List Animation using Motion for React
              </h1>
              <p className="body-small-400-14 mb-3">
                An in-depth guide on how to animate enter and exit animation for
                list using Motion for React (previously Framer Motion).
              </p>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="icon flex gap-5">
                  <div className="flex gap-1 md:gap-1.5 items-center">
                    <Image
                      src="/images/icons/book-1.svg"
                      className="w-4 md:w-5"
                      alt="Book Icon"
                    />
                    <p className="caption-500-14">1,200 views</p>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <Image
                      src="/images/icons/time.svg"
                      alt="Clock Icon"
                      className="w-4 md:w-5"
                    />
                    <p className="caption-500-14">6 min read</p>
                  </div>
                </div>
                <div className="tag flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-0">
                  <h4 className="block body-extra-small-400-12 bg-card py-2 px-3 md:py-2 md:px-4 rounded-xl md:rounded-2xl hover:bg-bg-light">
                    React
                  </h4>
                  <h4 className="inline-block body-extra-small-400-12 bg-card py-2 px-3 md:py-2 md:px-4 rounded-xl md:rounded-2xl hover:bg-bg-light">
                    Animation
                  </h4>
                </div>
              </div>
            </div>
            <div className="order-1 w-full md:w-2/5 md:max-w-sm">
              <Image
                src="images/blog-image.jpg"
                alt="Blog Image"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          <div className="card-blog text-text flex flex-col md:flex-row cursor-pointer gap-6 items-start md:items-start md:justify-between mt-8 md:mt-12 group">
            <div className="order-2 md:order-1">
              <h4 className="caption-500-14 mb-2 md:mb-4">
                September 24, 2025
              </h4>
              <h1 className="subtitle-600-20 md:subtitle-600-24 mb-1 group-hover:underline">
                List Animation using Motion for React
              </h1>
              <p className="body-small-400-14 mb-3">
                An in-depth guide on how to animate enter and exit animation for
                list using Motion for React (previously Framer Motion).
              </p>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="icon flex gap-5">
                  <div className="flex gap-1 md:gap-1.5 items-center">
                    <Image
                      src="/images/icons/book-1.svg"
                      className="w-4 md:w-5"
                      alt="Book Icon"
                    />
                    <p className="caption-500-14">1,200 views</p>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <Image
                      src="/images/icons/time.svg"
                      alt="Clock Icon"
                      className="w-4 md:w-5"
                    />
                    <p className="caption-500-14">6 min read</p>
                  </div>
                </div>
                <div className="tag flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-0">
                  <h4 className="block body-extra-small-400-12 bg-card py-2 px-3 md:py-2 md:px-4 rounded-xl md:rounded-2xl hover:bg-bg-light">
                    React
                  </h4>
                  <h4 className="inline-block body-extra-small-400-12 bg-card py-2 px-3 md:py-2 md:px-4 rounded-xl md:rounded-2xl hover:bg-bg-light">
                    Animation
                  </h4>
                </div>
              </div>
            </div>
            <div className="order-1 w-full md:w-2/5 md:max-w-sm">
              <Image
                src="images/blog-image.jpg"
                alt="Blog Image"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          <div className="card-blog text-text flex flex-col md:flex-row cursor-pointer gap-6 items-start md:items-start md:justify-between mt-8 md:mt-12 group">
            <div className="order-2 md:order-1">
              <h4 className="caption-500-14 mb-2 md:mb-4">
                September 24, 2025
              </h4>
              <h1 className="subtitle-600-20 md:subtitle-600-24 mb-1 group-hover:underline">
                List Animation using Motion for React
              </h1>
              <p className="body-small-400-14 mb-3">
                An in-depth guide on how to animate enter and exit animation for
                list using Motion for React (previously Framer Motion).
              </p>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="icon flex gap-5">
                  <div className="flex gap-1 md:gap-1.5 items-center">
                    <Image
                      src="/images/icons/book-1.svg"
                      className="w-4 md:w-5"
                      alt="Book Icon"
                    />
                    <p className="caption-500-14">1,200 views</p>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <Image
                      src="/images/icons/time.svg"
                      alt="Clock Icon"
                      className="w-4 md:w-5"
                    />
                    <p className="caption-500-14">6 min read</p>
                  </div>
                </div>
                <div className="tag flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-0">
                  <h4 className="block body-extra-small-400-12 bg-card py-2 px-3 md:py-2 md:px-4 rounded-xl md:rounded-2xl hover:bg-bg-light">
                    React
                  </h4>
                  <h4 className="inline-block body-extra-small-400-12 bg-card py-2 px-3 md:py-2 md:px-4 rounded-xl md:rounded-2xl hover:bg-bg-light">
                    Animation
                  </h4>
                </div>
              </div>
            </div>
            <div className="order-1 w-full md:w-2/5 md:max-w-sm">
              <Image
                src="images/blog-image.jpg"
                alt="Blog Image"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 md:mt-12 text-center">
          <a href="/blog">
            <h3 className="flex items-center gap-2 cursor-pointer border-1 rounded-lg py-1 px-3 hover:underline">
              See more posts
              <Image
                src="/images/icons/arrow-right.svg"
                alt="Arrow Right Icon"
                className="w-5"
              />
            </h3>
          </a>
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
    </>
  );
}
