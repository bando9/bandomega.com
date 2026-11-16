import { HeaderProps } from "@/app/type";

export default function Header({
  title,
  description,
  preTitle = "",
}: HeaderProps) {
  return (
    <>
      <section className="mt-20 md:mt-25 md:mx-25 mx-5">
        <div className="title text-center">
          <h1 className="heading-600-32 md:title-600-48">
            {preTitle} <span className="gradient-primary">{title}</span>
          </h1>
          <p className="body-default-400-16 md:body-large-400-18 text-text-muted md:text-text-muted mt-1 md:mt-0">
            {description}
          </p>
        </div>
      </section>
    </>
  );
}
