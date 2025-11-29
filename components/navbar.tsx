import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10">
        <div className="flex justify-center items-center px-4">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            className="block absolute right-10 top-5 md:hidden"
          >
            <span className="hamburger-line transition origin-top-left"></span>
            <span className="hamburger-line transition"></span>
            <span className="hamburger-line transition origin-bottom-left"></span>
          </button>

          <nav
            id="nav-menu"
            className="bg-bg-light text-text mt-10 max-w-fit rounded-xl absolute py-12 px-12 md:px-10 md:py-3 hidden md:block top-full md:top-full right-20 md:right-auto md:left-1/2 md:-translate-x-1/2"
          >
            <ul className="subtitle-600-16 flex flex-col md:flex-row gap-4 md:gap-8">
              <li>
                <Link href="/" className="text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
