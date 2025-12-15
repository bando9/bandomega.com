import Image from "next/image";
import { Works } from "../data/works";
import TimeLine from "../components/timeline";

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
          Work<span className="color-gradient-primary ms-1"> Experience</span>
        </h2>
      </div>

      <ul className="md:relative md:border-l-2 md:border-gray-700 md:ml-4 mt-10 text-text">
        {Works.map((work) => {
          return <TimeLine key={work.id} work={work} />;
        })}
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
                Ensured accuracy and validation of transaction data, developing
                strong attention to detail and structured data management.
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
              The PVMBG Sundoro-Sumbing Observation Post is part of Indonesia’s
              Geological Agency responsible for monitoring volcanic activity.
              The post operates seismographic instruments and conducts direct
              observations to collect and analyze data from Mount Sundoro and
              Mount Sumbing.
            </p>
            <ul className="list-disc ms-4">
              <li>
                Performed maintenance and monitoring of seismograph instruments,
                reinforcing technical accuracy and system monitoring skills.
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
                Olympiad program for high school and junior high school levels.
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
              Walisongo formed by scholarship awardees of the Bidikmisi program.
              The organization focuses on academic development, leadership
              training, and social activities to support the personal growth of
              its members.
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
  );
}
