export default function Contact() {
  return (
    <main className="mt-25 md:mt-35">
      <section className="mt-20 md:mx-25 mx-5">
        <div className="title text-center">
          <h1 className="title-600-48 bg-gradient-to-r from-primary from-30% to-accent text-transparent bg-clip-text inline-block">
            Contact
          </h1>
          <p className="body-large-400-18 text-text-muted">
            Let’s connect! Whether it’s about tech, collaboration, or just
            sharing ideas - here’s where you can reach me.
          </p>
        </div>
      </section>

      <section className="mt-20 md:mx-25 mx-5">
        <form className="bg-bg-light px-5 py-5 md:px-15 md:py-15 w-full md:w-150 flex flex-col gap-10 mx-auto rounded-lg">
          <div className="w-full">
            <label htmlFor="name"> Name </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="bg-bg-dark py-2 px-3 mt-3 rounded-lg w-full"
            />
          </div>

          <div className="w-full">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              className="bg-bg-dark py-2 px-3 mt-3 rounded-lg w-full"
            />
          </div>

          <div className="w-full">
            <label htmlFor="subject"> Subject </label>
            <input
              id="subject"
              type="text"
              placeholder="Inquiry about collaboration"
              className="bg-bg-dark py-2 px-3 mt-3 rounded-lg w-full"
            />
          </div>

          <div className="w-full">
            <label htmlFor="message"> Message </label>
            <textarea
              id="message"
              placeholder="Write your message here.."
              className="bg-bg-dark py-2 px-3 mt-3 rounded-lg w-full h-25 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-3 px-8 bg-button w-50 mx-auto rounded-lg cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
