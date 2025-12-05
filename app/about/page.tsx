import Image from "next/image";

export default function About() {
  return (
    <main className="mt-25 md:mt-35">
      <section id="header" className="mt-25 md:mt-25 md:mx-25 mx-5">
        <div className="title">
          <h1 className="heading-600-32 md:title-600-48 text-center">
            About <span className="color-gradient-primary">Me</span>
          </h1>
          <p className="body-large-400-18 text-center text-text-muted">
            Learning, building, and becoming along the way
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-25 mt-25">
          <div className="order-2 md:order-1">
            <h2 className="subtitle-600-24">
              I’m Bando Mega Kusuma, an aspiring Software Engineer, Frontend
              Developer, and IoT enthusiast from Indonesia.
            </h2>
            <div className="body-default-400-16 mt-4 text-text-blog">
              <p className="mt-2">
                I was born in 1999 in Bogor, Indonesia, and have lived in
                Semarang for most of my life. I hold a degree in Physics, with a
                focus on electronics and instrumentation. During my studies, I
                discovered my passion for programming — especially web
                development — and decided to pursue a career in this field.
              </p>
              <p className="mt-2">
                My learning journey began with reading articles, taking online
                courses, and joining both online and campus IT communities.
                Along the way, I started writing articles to document what I had
                learned — not only to strengthen my own understanding but also
                to share knowledge with others on the same path.
              </p>
              <p className="mt-2">
                Today, I am growing as a full-stack engineer, with a strong
                focus on frontend development. I enjoy building projects that
                combine clean design, responsive user interfaces, and solid
                technical foundations.
              </p>
            </div>
          </div>

          <div className="relative w-2/3 ms-10 md:ms-0 flex justify-center items-center py-5 order-1">
            <div className="absolute -rotate-3 -left-5 top-2 md:-left-10 md:top-0">
              <Image
                width={450}
                height={450}
                src="/images/profile.jpg"
                alt="Profile 1"
                className="w-40 h-56 md:w-60 md:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="relative rotate-3 z-10">
              <Image
                width={450}
                height={450}
                src="/images/profile-2.jpg"
                alt="Profile 2"
                className="w-44 h-56 md:w-70 md:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

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
                    <Image
                      width={450}
                      height={450}
                      src="/images/stack/html5.svg"
                      alt="HTML"
                      className="w-5"
                    />
                    <p className="subtitle-600-16">HTML</p>
                  </div>

                  <div className="flex gap-1 items-center">
                    <Image
                      width={450}
                      height={450}
                      src="/images/stack/css.svg"
                      alt="CSS"
                      className="w-5"
                    />
                    <p className="subtitle-600-16">CSS</p>
                  </div>

                  <div className="flex gap-1 items-center">
                    <Image
                      width={450}
                      height={450}
                      src="/images/stack/javascript.svg"
                      alt="JavaScript"
                      className="w-5"
                    />
                    <p className="subtitle-600-16">JavaScript</p>
                  </div>

                  <div className="flex gap-1 items-center blur-sm hover:blur-none">
                    <Image
                      width={450}
                      height={450}
                      src="/images/stack/typescript.svg"
                      alt="TypeScript"
                      className="w-5"
                    />
                    <p className="subtitle-600-16">TypeScript</p>
                  </div>

                  <div className="flex gap-1 items-center blur-sm hover:blur-none">
                    <Image
                      width={450}
                      height={450}
                      src="/images/stack/react.svg"
                      alt="React"
                      className="w-5"
                    />
                    <p className="subtitle-600-16">React</p>
                  </div>

                  <div className="flex gap-1 items-center blur-sm hover:blur-none">
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

              <div className="mt-8 blur-sm hover:blur-none hidden md:block">
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
                    <Image
                      width={450}
                      height={450}
                      src="/images//stack/nodedotjs.svg"
                      alt="Node.js"
                      className="w-5"
                    />
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

              <div className="mt-8 blur-sm hover:blur-none hidden md:block">
                <h3 className="subtitle-600-20">Fullstack Frameworks</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 mt-3">
                  <div className="flex gap-1 items-center">
                    <Image
                      width={450}
                      height={450}
                      src="/images//stack/nextdotjs.svg"
                      alt="Next.js"
                      className="w-5"
                    />
                    <p className="subtitle-600-16">Next.js</p>
                  </div>

                  <div className="flex gap-1 items-center">
                    <Image
                      width={450}
                      height={450}
                      src="/images//stack/remix.svg"
                      alt="Remix"
                      className="w-5"
                    />
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
                    <Image
                      width={450}
                      height={450}
                      src="/images/stack/ubuntu.svg"
                      alt="Ubuntu"
                      className="w-6"
                    />
                    <p className="subtitle-600-16">Ubuntu</p>
                  </div>

                  <div className="flex gap-1 items-center">
                    <Image
                      width={450}
                      height={450}
                      src="/images/stack/gnometerminal.svg"
                      alt="Terminal"
                      className="w-6"
                    />
                    <p className="subtitle-600-16">Terminal</p>
                  </div>

                  <div className="flex gap-1 items-center">
                    <Image
                      width={450}
                      height={450}
                      src="/images/stack/markdown.svg"
                      alt="Markdown"
                      className="w-6"
                    />
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
                    <Image
                      width={450}
                      height={450}
                      src="/images/stack/figma.svg"
                      className="w-6"
                      alt="Figma"
                    />
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
                    <Image
                      width={450}
                      height={450}
                      src="/images/stack/github.svg"
                      className="w-6"
                      alt="GitHub"
                    />
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

                  <div className="flex gap-1 items-center blur-sm hover:blur-none">
                    <Image
                      width={450}
                      height={450}
                      src="/images/stack/esbuild.svg"
                      className="w-6"
                      alt="Esbuild"
                    />
                    <p className="subtitle-600-16">esbuild</p>
                  </div>

                  <div className="flex gap-1 items-center blur-sm hover:blur-none">
                    <Image
                      width={450}
                      height={450}
                      src="/images/stack/webpack.svg"
                      className="w-6"
                      alt="Webpack"
                    />
                    <p className="subtitle-600-16">Webpack</p>
                  </div>

                  <div className="flex gap-1 items-center blur-sm hover:blur-none">
                    <Image
                      width={450}
                      height={450}
                      src="/images/stack/deno.svg"
                      className="w-6"
                      alt="Deno"
                    />
                    <p className="subtitle-600-16">Deno</p>
                  </div>

                  <div className="flex gap-1 items-center blur-sm hover:blur-none">
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
                    <Image
                      width={450}
                      height={450}
                      src="/images/stack/vercel.svg"
                      className="w-6"
                      alt="Vercel"
                    />
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
                    <Image
                      width={450}
                      height={450}
                      src="/images/stack/googlecloud.svg"
                      className="w-6"
                      alt="Google Cloud"
                    />
                    <p className="subtitle-600-16">Google Cloud</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certificate" className="w-full overflow-hidden mt-15">
        <div className="flex animate-scroll-mobile md:animate-scroll space-x-3 md:space-x-6">
          <div className="max-w-2xs bg-white shadow rounded">
            <Image
              width={450}
              height={450}
              src="/images/certificates/certificate-reactjs.jpg"
              alt="Certificate 1"
              className="w-full h-auto rounded"
            />
          </div>

          <div className="min-w-80 bg-white shadow rounded">
            <Image
              width={450}
              height={450}
              src="/images/certificates/certificate-reactjs.jpg"
              alt="Certificate 2"
              className="w-full h-auto rounded"
            />
          </div>

          <div className="min-w-80 bg-white shadow rounded">
            <Image
              width={450}
              height={450}
              src="/images/certificates/certificate-reactjs.jpg"
              alt="Certificate 3"
              className="w-full h-auto rounded"
            />
          </div>

          <div className="min-w-80 bg-white shadow rounded">
            <Image
              width={450}
              height={450}
              src="/images/certificates/certificate-reactjs.jpg"
              alt="Certificate 4"
              className="w-full h-auto rounded"
            />
          </div>

          <div className="min-w-80 bg-white shadow rounded">
            <Image
              width={450}
              height={450}
              src="/images/certificates/certificate-reactjs.jpg"
              alt="Certificate 1"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </section>

      <section id="work-experience" className="mt-20 md:mt-25 md:mx-25 mx-5">
        <div className="flex justify-start items-center gap-1 md:gap-1.5">
          <Image
            width={450}
            height={450}
            src="/images/icons/work.svg"
            alt="work-icon"
            className="w-7 h-7 md:w-10 md:h-10 -rotate-8"
          />
          <h2 className="heading-600-32 md:title-600-48">
            Work<span className="color-gradient-primary ms-1"> Experience</span>
          </h2>
        </div>

        <ul className="md:relative md:border-l-2 md:border-gray-700 md:ml-4 mt-10 text-text">
          <li className="mb-10 md:ml-6">
            <span className="hidden md:absolute md:-left-3 md:flex md:items-center md:justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-black"></span>
            <div className="bg-bg-light p-4 rounded-lg shadow-md">
              <h3 className="subtitle-600-16">
                PT. Roda Pasifik Mandiri, Account Receivable
              </h3>
              <h4 className="body-default-400-16 mt-0.5">
                Oktober 2024 - Present. Semarang, Central Java.
              </h4>

              <p className="body-default-400-16 mt-5">
                PT Roda Pasifik Mandiri is an Indonesian manufacturing company
                specializing in bicycles and related products. The company
                operates in the consumer goods sector, focusing on delivering
                affordable and reliable mobility solutions.
              </p>

              <ul className="list-disc ms-4">
                <li>
                  Ensured accuracy and validation of transaction data,
                  developing strong attention to detail and structured data
                  management.
                </li>
                <li>
                  Maintained organized documentation and digital records,
                  reinforcing systematic workflows relevant to database and code
                  management.
                </li>
                <li>
                  Collaborated with cross-functional teams (sales & operations),
                  enhancing communication, teamwork, and problem-solving skills.
                </li>
              </ul>
            </div>
          </li>

          <li className="mb-10 md:ml-6">
            <span className="hidden md:absolute md:-left-3 md:flex md:items-center md:justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-black"></span>
            <div className="bg-bg-light p-4 rounded-lg shadow-md">
              <h3 className="subtitle-600-16">
                PVMBG, Sundoro-Sumbing Observation Post, Volcano Observer Intern
              </h3>
              <h4 className="body-default-400-16 mt-0.5">
                August 2022 – September 2022. Temanggung, Central Java.
              </h4>

              <p className="body-default-400-16 mt-5">
                The PVMBG Sundoro-Sumbing Observation Post is part of
                Indonesia’s Geological Agency responsible for monitoring
                volcanic activity. The post operates seismographic instruments
                and conducts direct observations to collect and analyze data
                from Mount Sundoro and Mount Sumbing.
              </p>
              <ul className="list-disc ms-4">
                <li>
                  Performed maintenance and monitoring of seismograph
                  instruments, reinforcing technical accuracy and system
                  monitoring skills.
                </li>
                <li>
                  Assisted in analyzing and reporting volcanic data, building
                  strong data analysis and documentation abilities.
                </li>
                <li>
                  Conducted systematic observations and data collection of
                  volcanic activity, demonstrating attention to detail and
                  structured workflows.
                </li>
              </ul>
            </div>
          </li>

          <li className="mb-10 md:ml-6">
            <span className="hidden md:absolute md:-left-3 md:flex md:items-center md:justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-black"></span>
            <div className="bg-bg-light p-4 rounded-lg shadow-md">
              <h3 className="subtitle-600-16">
                Physics Student Association (HMJ Fisika), Head of Education and
                Reasoning Department.
              </h3>
              <h4 className="body-default-400-16 mt-0.5">
                2021 – 2022. Semarang, Central Java
              </h4>

              <p className="body-default-400-16 mt-5">
                The Physics Student Association (HMJ Fisika) at UIN Walisongo is
                an academic organization managed by physics students.
              </p>
              <ul className="list-disc ms-4">
                <li>
                  Led and coordinated meetings for the Education and Reasoning
                  division, demonstrating leadership and organizational skills.
                </li>
                <li>
                  Served as person-in-charge for the National Islamic Physics
                  Olympiad program for high school and junior high school
                  levels.
                </li>
                <li>
                  Developed a registration website and implemented
                  question-and-answer input using LaTeX, showcasing early web
                  development and technical skills.
                </li>
              </ul>
            </div>
          </li>

          <li className="mb-10 md:ml-6">
            <span className="hidden md:absolute md:-left-3 md:flex md:items-center md:justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-black"></span>
            <div className="bg-bg-light p-4 rounded-lg shadow-md">
              <h3 className="subtitle-600-16">
                Bidikmisi Community Walisongo, Media and Journalism Staff.
              </h3>
              <h4 className="body-default-400-16 mt-0.5">
                2021 – 2022. Semarang, Central Java.
              </h4>

              <p className="body-default-400-16 mt-5">
                Bidikmisi Community Walisongo is a student organization at UIN
                Walisongo formed by scholarship awardees of the Bidikmisi
                program. The organization focuses on academic development,
                leadership training, and social activities to support the
                personal growth of its members.
              </p>
              <ul className="list-disc ms-4">
                <li>
                  Managed the organization’s social media platforms, ensuring
                  consistent and engaging communication.
                </li>
                <li>
                  Published and distributed information about programs and
                  activities to reach a wider student audience.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>

      <section id="education" className="mt-20 md:mt-25 md:mx-25 mx-5">
        <div className="flex justify-center">
          <div className="flex justify-start items-center gap-1.5 mx-auto">
            <Image
              width={450}
              height={450}
              src="/images/icons/education.svg"
              alt="education-icon"
              className="w-8 h-8 -rotate-8"
            />
            <h2 className="heading-600-32 bg-gradient-to-r from-primary from-30% to-accent text-transparent bg-clip-text inline-block">
              Education
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-10">
          <h3 className="subtitle-600-20 md:subtitle-600-24">2019-2024</h3>
          <div className="col-span-3">
            <h3 className="subtitle-600-20 md:subtitle-600-24">
              Bachelor of Science
            </h3>
            <h4 className="subtitle-600-16">
              Walisongo State Islamic Univesity — Semarang, Indonesia.
            </h4>

            <p className="caption-500-14 mt-5 text-text-blog">
              I hold a Bachelor’s degree in Physics from UIN Walisongo (2024),
              where I specialized in electronics and instrumentation. Throughout
              my studies, I worked with microcontrollers, sensors, and IoT
              platforms, which strengthened my logical thinking and
              problem-solving skills. I also gained experience in programming,
              research, and documentation — transferable skills that now support
              my journey in web development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
