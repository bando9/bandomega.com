import Link from "next/link";

export default function ButtonContact() {
  return (
    <section
      id="contact"
      className="px-5 md:px-25 py-25 md:py-32 flex justify-center items-center"
    >
      <div className="w-full max-w-3xl text-center">
        <h1 className="title-600-48 md:title-600-64">
          Get{" "}
          <span className="bg-linear-to-r from-primary from-30% to-accent text-transparent bg-clip-text inline-block">
            In Touch
          </span>
        </h1>
        <p className="body-default-400-16 md:body-large-400-18 text-text-muted max-w-xl mx-auto mt-4">
          While I’m focused on my current journey, my inbox is always open.
          Whether it’s about tech, career, or just a friendly hello, I’d be glad
          to hear from you.
        </p>
        <div className="flex justify-center items-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center py-3 px-6 bg-button rounded-2xl heading-700-20 md:heading-700-24 hover:shadow-md hover:shadow-bg-light transition"
          >
            Say Hello
          </Link>
        </div>
      </div>
    </section>
  );
}
