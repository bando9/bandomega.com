"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuData = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "Projects", link: "/project" },
  { id: 3, label: "Blog", link: "/blog" },
  { id: 4, label: "About", link: "/about" },
  { id: 5, label: "Contact", link: "/contact" },
];
export default function NavBar() {
  const active: string = "text-secondary";
  const location = usePathname();

  function isActive(path: string) {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  }

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
              {menuData.map((menu) => {
                return (
                  <li key={menu.id}>
                    <Link
                      href={menu.link}
                      className={`${isActive(menu.link) ? active : ""}`}
                    >
                      {menu.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
