"use client";

import { Heading } from "@/lib/extract-heading";
import { useEffect, useState } from "react";

export default function BlogToc({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => {
      let current = "";

      headings.forEach((heading) => {
        const el = document.getElementById(heading.slug);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = heading.slug;
          }
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [headings]);

  return (
    <aside className="hidden xl:block sticky right-15 top-30 w-60 h-80 ps-4 pt-3 border border-gray-800 rounded-xl overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-900 [&::-webkit-scrollbar-thumb]:rounded-sm [&::-webkit-scrollbar-thumb]:bg-text-muted [&::-webkit-scrollbar-thumb]:hover:bg-text">
      <nav className="flex flex-col space-y-2 text-sm ">
        {headings.map((heading, index) => (
          <a
            key={index}
            href={`#${heading.slug}`}
            className={`
              block 
              hover:text-text
              transition
              ${
                activeId === heading.slug
                  ? "text-text font-medium"
                  : "text-text-muted"
              }
            `}
            style={{
              paddingLeft: `${(heading.level - 1) * 12}px`,
            }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
