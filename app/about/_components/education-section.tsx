import Image from "next/image";

export default function EducationSection() {
  return (
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
          <h2 className="heading-600-32 gradient-primary">Education</h2>
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
  );
}
