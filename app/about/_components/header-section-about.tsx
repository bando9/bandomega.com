import Header from "@/components/layout/header";
import Image from "next/image";

export default function HeaderSectionAbout() {
  return (
    <section id="header" className="mt-25 md:mt-25 md:mx-25 mx-5">
      <Header
        preTitle="About"
        title="Me"
        description="Learning, building, and becoming along the way"
      />

      <div className="flex flex-col md:flex-row justify-between items-center gap-25 mt-25">
        <div className="order-2 md:order-1">
          <h2 className="subtitle-600-24">
            I’m Bando Mega Kusuma, an aspiring Software Engineer, Frontend
            Developer, and IoT enthusiast from Indonesia.
          </h2>
          <div className="body-default-400-16 mt-4 text-text-blog">
            <p className="mt-2">
              I was born in 1999 in Bogor, Indonesia, and have lived in Semarang
              for most of my life. I hold a degree in Physics, with a focus on
              electronics and instrumentation. During my studies, I discovered
              my passion for programming — especially web development — and
              decided to pursue a career in this field.
            </p>
            <p className="mt-2">
              My learning journey began with reading articles, taking online
              courses, and joining both online and campus IT communities. Along
              the way, I started writing articles to document what I had learned
              — not only to strengthen my own understanding but also to share
              knowledge with others on the same path.
            </p>
            <p className="mt-2">
              Today, I am growing as a full-stack engineer, with a strong focus
              on frontend development. I enjoy building projects that combine
              clean design, responsive user interfaces, and solid technical
              foundations.
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
  );
}
