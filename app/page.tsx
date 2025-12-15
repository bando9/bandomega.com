import BlogFeatures from "@/features/home/sections/blog-features";
import ButtonContact from "@/features/home/components/button-contact";
import ProjectFeatures from "@/features/home/sections/project-features";
import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import photoMakassar from "@/public/images/photo-makassar.png";

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
            <Link href="/projects">
              <h3 className="body-small-400-14 md:body-defult-400-16 text-text bg-button md:px-6 md:py-3 px-4 py-2 rounded-lg md:rounded-lg flex gap-2 cursor-pointer">
                View My Projects
              </h3>
            </Link>

            <Link href="/about">
              <h3 className="text-text bg-bg-dark border-2 border-button md:px-6 md:py-3 px-4 py-2 rounded-lg md:rounded-lg cursor-pointer hover:shadow-md shadow-button body-small-400-14 md:body-defult-400-16">
                More about me
              </h3>
            </Link>
          </div>

          <div className="flex gap-3 mt-3 md:mt-5 flex-wrap">
            <Link
              href="https://drive.google.com/file/d/1gmkJ5dN6XnUKEilYNey5fBkEe_Gq8_zE/view?usp=sharing"
              target="_blank"
              className="flex gap-1 opacity-50 hover:underline"
            >
              <Image
                width={450}
                height={450}
                src="/images/icons/readdotcv.svg"
                alt="CV Icon"
                className="w-5"
              />
              <p>Resume</p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/bando-mega-kusuma"
              target="_blank"
              className="flex gap-1 opacity-50 hover:underline"
            >
              <RiLinkedinBoxFill />
              <p>LinkedIn</p>
            </Link>
            <Link
              href="https://www.github.com/bando9"
              target="_blank"
              className="flex gap-1 opacity-50 hover:underline"
            >
              <RiGithubFill />
              <p>GitHub</p>
            </Link>
          </div>
        </div>

        <div className="w-full md:max-w-120 flex justify-center mt-6 lg:mt-0">
          <Image
            width={450}
            height={450}
            src="/images/profile.jpg"
            alt="bando-profile"
            className="rounded-xl max-w-80 md:max-w-120 sm:w-full object-cover"
          />
        </div>
      </section>

      <section
        id="gallery"
        className="mt-15 md:mt-40 flex gap-4 md:gap-10 h-55 md:h-120 py-10"
      >
        <div className="max-w-60 md:max-w-75 max-h-10 md:max-h-75">
          <Image
            width={450}
            height={450}
            className="rotate-2 rounded-xl h-35 w-45 md:h-100 md:w-100"
            src="https://images.unsplash.com/photo-1625967445189-d35d49a37501?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Semarang City"
          />
        </div>

        <div className="max-w-60 md:max-w-72 max-h-10 md:max-h-75">
          <Image
            width={450}
            height={450}
            className="rotate-2 rounded-xl h-35 w-45 md:h-100 md:w-100"
            src="https://images.unsplash.com/photo-1625967445155-bf8cc0412e9b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="semarang-city"
          />
        </div>

        <div className="max-w-60 md:max-w-72 max-h-10 md:max-h-75">
          <Image
            width={450}
            height={450}
            className="-rotate-2 rounded-xl h-35 w-45 md:h-100 md:w-100"
            src="https://images.unsplash.com/photo-1672281699269-86a871c5b2c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="makassar-city"
          />
        </div>

        <div className="max-w-60 md:max-w-64 max-h-10 md:max-h-75">
          <Image
            width={450}
            height={450}
            className="-rotate-2 rounded-xl h-20 w-40 md:h-100 md:w-100"
            src={photoMakassar}
            alt="makassar-city"
          />
        </div>
      </section>

      <ProjectFeatures />

      <BlogFeatures />

      <ButtonContact />
    </>
  );
}
