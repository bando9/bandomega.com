import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailLine,
  RiTelegram2Fill,
  RiThreadsFill,
} from "@remixicon/react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="mt-20">
        <div className="w-full h-px bg-linear-to-r from-bg-dark via-text to-bg-dark my-8 opacity-30"></div>

        <div className="md:grid md:grid-cols-2 md:mx-25 mx-5 md:gap-55">
          <div>
            <h1 className="caption-500-24">Bando Mega Kusuma</h1>
            <p className="caption-500-14 text-text-muted mt-2">
              Learning, building, and sharing software concepts through mental
              models that make coding more accessible.
            </p>
            <div>
              <ul className="flex gap-5 mt-3 md:mt-5">
                <li>
                  <Link href="mailto:bandomega1@gmail.com">
                    <RiMailLine />
                  </Link>
                </li>
                <li>
                  <Link href="https://t.me/bandomega" target="_blank">
                    <RiTelegram2Fill />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/bando-mega-kusuma"
                    target="_blank"
                  >
                    <RiLinkedinBoxFill />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.github.com/bando9" target="_blank">
                    <RiGithubFill />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.threads.com/@asliandho"
                    target="_blank"
                  >
                    <RiThreadsFill />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-10 md:mt-0">
            <div>
              <h3 className="text-text-muted">General</h3>
              <ul className="flex flex-col gap-1 mt-1.5">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:underline">
                    Project
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-text-muted">The website</h3>
              <ul className="flex flex-col gap-1 mt-1.5">
                <li>
                  <Link href="#" className="hover:underline">
                    Bucket List
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Uses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Attribution
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-linear-to-r from-bg-dark via-text to-bg-dark my-8 opacity-30"></div>

        <div className="caption-500-14 text-center text-text-muted mb-8">
          Copyright &copy; 2025. Bando Mega Allright reserved.
        </div>
      </footer>
    </>
  );
}
