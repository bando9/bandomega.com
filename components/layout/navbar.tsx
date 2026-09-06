"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const menuData = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "Projects", link: "/projects" },
  { id: 3, label: "About", link: "/about" },
  { id: 4, label: "Blog", link: "/blog" },
];
export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const active: string = "text-[#F5E68E]";
  const location = usePathname();

  function isActive(path: string) {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={false}
        animate={{
          maxWidth: isScrolled ? "640px" : "1024px",
          borderRadius: isScrolled ? "9999px" : "16px",
          paddingLeft: isScrolled ? "24px" : "32px",
          paddingRight: isScrolled ? "24px" : "32px",
          paddingTop: isScrolled ? "10px" : "16px",
          paddingBottom: isScrolled ? "10px" : "16px",
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 28,
          mass: 0.8,
        }}
        className="flex items-center justify-between gap-6 w-2/3 bg-[#141414]/80 backdrop-blur-md border border-[#262626] text-sm shadow-2xl text-neutral-100"
      >
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-bold tracking-tight text-base hover:opacity-80 transition-opacity flex items-center h-6 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isScrolled ? (
                <motion.span
                  key="short-logo"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="tracking-tighter"
                >
                  BMK
                </motion.span>
              ) : (
                <motion.span
                  key="full-logo"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap"
                >
                  Bando Mega Kusuma
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
          <div className="h-4 w-px bg-border"></div>

          <div className="flex items-center gap-5 text-neutral-400 text-xs sm:text-sm font-medium">
            {menuData.map((menu) => {
              return (
                <Link
                  key={menu.id}
                  href={menu.link}
                  className={`${isActive(menu.link) ? active : "hover:text-white transition-colors"}`}
                >
                  {menu.label}
                </Link>
              );
            })}
          </div>
        </div>

        <Link
          href="/contact"
          className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 bg-white text-black text-xs font-semibold rounded-full hover:bg-neutral-200 transition-colors shrink-0"
        >
          Contact <ArrowRightIcon size={12} />
        </Link>
      </motion.nav>
    </header>
  );
}
