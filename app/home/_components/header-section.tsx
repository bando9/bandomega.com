import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function HeaderSection() {
  return (
    <section
      id="header"
      className="flex flex-col lg:flex-row justify-between items-start gap-3 mt-15 md:mx-25 mx-5 z-10"
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
            href="/docs/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
      <ShootingStars className="pointer-events-none" />
      <StarsBackground className="pointer-events-none" />
    </section>
  );
}
