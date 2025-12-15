import { WorkType } from "../data/works";

type TimeLineProps = {
  work: WorkType;
};

export default function TimeLine({ work }: TimeLineProps) {
  return (
    <>
      <li className="mb-10 md:ml-6">
        <span className="hidden md:absolute md:-left-3 md:flex md:items-center md:justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-black"></span>
        <div className="bg-bg-light p-4 rounded-lg shadow-md">
          <h3 className="subtitle-600-16">{work.title}</h3>
          <h4 className="body-default-400-16 mt-0.5">
            {work.year} {work.location}
          </h4>

          <p className="body-default-400-16 mt-5">{work.description}</p>

          <ul className="list-disc ms-4">
            {work.list.map((listData) => {
              return <li key={listData.id}>{listData.li}</li>;
            })}
          </ul>
        </div>
      </li>
    </>
  );
}
