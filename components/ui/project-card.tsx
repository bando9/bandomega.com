import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tools: string;
  websiteURL: string;
  githubURL: string;
  projectdetailURL: string;
  isContentTextLeft: boolean;
};

export default function ProjectCard({
  title,
  description,
  image,
  tools,
  websiteURL,
  githubURL,
  projectdetailURL,
  isContentTextLeft = false,
}: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col items-start md:justify-between gap-6 ${
        isContentTextLeft ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full md:w-md">
        <Image
          width={450}
          height={450}
          src={image}
          alt="Photo Personal Web v1"
          className="rounded-lg w-full h-auto"
        />
      </div>

      <div className=" md:w-2/3">
        <h1 className="subtitle-600-20 md:subtitle-600-24 mb-2 group-hover:underline">
          {title}
        </h1>
        <h3 className="caption-500-14">{description}</h3>

        <div className="flex mt-3 gap-2 md:gap-4 items-center">
          <h3 className="caption-500-14">Tools:</h3>
          <div className="flex gap-3">
            {tools}
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
            <Link
              href={githubURL}
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
            </Link>
            <Link
              href={websiteURL}
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
            </Link>
          </div>

          <Link href={projectdetailURL} className="order-1 md:order-2">
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
          </Link>
        </div>
      </div>
    </div>
  );
}
