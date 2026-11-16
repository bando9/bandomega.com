import Image from "next/image";
import { Works } from "../../../data/works";
import TimeLine from "./timeline";

export default function WorkExperienceSection() {
  return (
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
          Work<span className="gradient-primary ms-1"> Experience</span>
        </h2>
      </div>

      <ul className="md:relative md:border-l-2 md:border-gray-700 md:ml-4 mt-10 text-text">
        {Works.map((work) => {
          return <TimeLine key={work.id} work={work} />;
        })}
      </ul>
    </section>
  );
}
