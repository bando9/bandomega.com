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
    <aside className="hidden xl:block sticky right-12 top-40 w-60 h-11/12 ps-4 pt-3 border-2 border-text-muted rounded-xl  gap-0.5">
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
