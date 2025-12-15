import Image from "next/image";
import {
  RiCloudLine,
  RiCss3Fill,
  RiFigmaLine,
  RiGithubFill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiMarkdownFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiRemixFill,
  RiTerminalBoxFill,
  RiUbuntuFill,
  RiVercelFill,
} from "@remixicon/react";

export default function TechSection() {
  return (
    <section id="tech" className="mt-20 md:mt-25 md:mx-25 mx-5">
      <div className="flex justify-start items-center gap-1.5">
        <Image
          width={450}
          height={450}
          src="/images/icons/growth.svg"
          alt="growth-stack-icon"
          className="w-7 h-7 md:w-10 md:h-10 -rotate-8"
        />
        <h2 className="heading-600-32 md:title-600-48">
          Growth <span className="color-gradient-primary">Stack</span>
        </h2>
      </div>

      <div className="stack mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="left-side">
            <div>
              <h3 className="subtitle-600-20">Frontend Development</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 mt-3">
                <div className="flex gap-1 items-center">
                  <RiHtml5Fill />
                  <p className="subtitle-600-16">HTML</p>
                </div>

                <div className="flex gap-1 items-center">
                  <RiCss3Fill />
                  <p className="subtitle-600-16">CSS</p>
                </div>

                <div className="flex gap-1 items-center">
                  <RiJavascriptFill />
                  <p className="subtitle-600-16">JavaScript</p>
                </div>

                <div className="flex gap-1 items-center ">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/typescript.svg"
                    alt="TypeScript"
                    className="w-5"
                  />
                  <p className="subtitle-600-16">TypeScript</p>
                </div>

                <div className="flex gap-1 items-center ">
                  <RiReactjsFill />
                  <p className="subtitle-600-16">React</p>
                </div>

                <div className="flex gap-1 items-center ">
                  <Image
                    width={450}
                    height={450}
                    src="/images//stack/reactrouter.svg"
                    alt="React Router"
                    className="w-5"
                  />

                  <p className="subtitle-600-16">React Router</p>
                </div>

                <div className="flex gap-1 items-center blur-sm hover:blur-none">
                  <Image
                    width={450}
                    height={450}
                    src="/images//stack/redux.svg"
                    alt="Readux"
                    className="w-5"
                  />
                  <p className="subtitle-600-16">Redux</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="subtitle-600-20">Backend & API Development</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 mt-3">
                <div className="flex gap-1 items-center">
                  <Image
                    width={450}
                    height={450}
                    src="/images//stack/docker.svg"
                    alt="Docker"
                    className="w-5"
                  />

                  <p className="subtitle-600-16">Docker</p>
                </div>

                <div className="flex gap-1 items-center">
                  <RiNodejsFill />
                  <p className="subtitle-600-16">Node.js</p>
                </div>

                <div className="flex gap-1 items-center">
                  <Image
                    width={450}
                    height={450}
                    src="/images//stack/express.svg"
                    alt="Express"
                    className="w-5"
                  />

                  <p className="subtitle-600-16">Express</p>
                </div>
              </div>
            </div>

            <div className="mt-8 hidden md:block">
              <h3 className="subtitle-600-20">Fullstack Frameworks</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 mt-3">
                <div className="flex gap-1 items-center">
                  <RiNextjsFill />
                  <p className="subtitle-600-16">Next.js</p>
                </div>

                <div className="flex gap-1 items-center blur-sm hover:blur-none">
                  <RiRemixFill />
                  <p className="subtitle-600-16">Remix</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="subtitle-600-20">Database & ORM</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 mt-3">
                <div className="flex gap-1 items-center">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/postgresql.svg"
                    alt="PostgreSQL"
                    className="w-6"
                  />

                  <p className="subtitle-600-16">PostgreSQL</p>
                </div>

                <div className="flex gap-1 items-center blur-sm hover:blur-none">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/mysql.svg"
                    alt="MySQL"
                    className="w-6"
                  />

                  <p className="subtitle-600-16">MySQL</p>
                </div>

                <div className="flex gap-1 items-center blur-sm hover:blur-none">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/prisma.svg"
                    alt="Prisma"
                    className="w-6"
                  />

                  <p className="subtitle-600-16">Prisma</p>
                </div>

                <div className="flex gap-1 items-center blur-sm hover:blur-none">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/drizzle.svg"
                    alt="Drizzle"
                    className="w-6"
                  />
                  <p className="subtitle-600-16">Drizzle</p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-side">
            <div>
              <h3 className="subtitle-600-20">
                Operating System & Development Environtment
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 mt-3">
                <div className="flex gap-1 items-center">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/linux.svg"
                    alt="Linux"
                    className="w-6"
                  />

                  <p className="subtitle-600-16">Linux</p>
                </div>

                <div className="flex gap-1 items-center">
                  <RiUbuntuFill />
                  <p className="subtitle-600-16">Ubuntu</p>
                </div>

                <div className="flex gap-1 items-center">
                  <RiTerminalBoxFill />
                  <p className="subtitle-600-16">Terminal</p>
                </div>

                <div className="flex gap-1 items-center">
                  <RiMarkdownFill />
                  <p className="subtitle-600-16">Markdown</p>
                </div>

                <div className="flex gap-1 items-center blur-sm hover:blur-none">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/vim.svg"
                    className="w-6"
                    alt="Vim"
                  />
                  <p className="subtitle-600-16">Vim</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="subtitle-600-20">Design & Collaboration</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 mt-3">
                <div className="flex gap-1 items-center">
                  <RiFigmaLine />
                  <p className="subtitle-600-16">Figma</p>
                </div>

                <div className="flex gap-1 items-center">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/git.svg"
                    className="w-6"
                    alt="Git"
                  />
                  <p className="subtitle-600-16">Git</p>
                </div>

                <div className="flex gap-1 items-center">
                  <RiGithubFill />
                  <p className="subtitle-600-16">GitHub</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="subtitle-600-20">
                Build Tools & Package Management
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 mt-3">
                <div className="flex gap-1 items-center">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/vite.svg"
                    className="w-6"
                    alt="Vite"
                  />

                  <p className="subtitle-600-16">Vite</p>
                </div>

                <div className="flex gap-1 items-center">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/esbuild.svg"
                    className="w-6"
                    alt="Esbuild"
                  />
                  <p className="subtitle-600-16">esbuild</p>
                </div>

                <div className="flex gap-1 items-center">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/webpack.svg"
                    className="w-6"
                    alt="Webpack"
                  />
                  <p className="subtitle-600-16">Webpack</p>
                </div>

                <div className="flex gap-1 items-center">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/deno.svg"
                    className="w-6"
                    alt="Deno"
                  />
                  <p className="subtitle-600-16">Deno</p>
                </div>

                <div className="flex gap-1 items-center">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/bun.svg"
                    className="w-6"
                    alt="Bun"
                  />
                  <p className="subtitle-600-16">Bun</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="subtitle-600-20">Deployment & Cloud</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 mt-3">
                <div className="flex gap-1 items-center">
                  <RiVercelFill />
                  <p className="subtitle-600-16">Vercel</p>
                </div>

                <div className="flex gap-1 items-center">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/netlify.svg"
                    className="w-6"
                    alt="Netlify"
                  />

                  <p className="subtitle-600-16">Netlify</p>
                </div>

                <div className="flex gap-1 items-center">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/cloudflare.svg"
                    className="w-6"
                    alt="Cloudflare"
                  />
                  <p className="subtitle-600-16">Cloudflare</p>
                </div>

                <div className="flex gap-1 items-center blur-sm hover:blur-none">
                  <Image
                    width={450}
                    height={450}
                    src="/images/stack/digitalocean.svg"
                    className="w-6"
                    alt="DigitalOcean"
                  />
                  <p className="subtitle-600-16">DigitalOcean</p>
                </div>

                <div className="flex gap-1 items-center col-span-2 blur-sm hover:blur-none">
                  <RiCloudLine />
                  <p className="subtitle-600-16">Google Cloud</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
