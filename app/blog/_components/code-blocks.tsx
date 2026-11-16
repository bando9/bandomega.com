"use client";

import CopyButton from "@/app/blog/_components/copy-button";

interface CodeBlockProps {
  lang?: string;
  code?: string;
  html: string;
}

export default function CodeBlock({ lang, code = "", html }: CodeBlockProps) {
  return (
    <div className="relative group my-6 rounded-lg overflow-hidden border border-neutral-700 bg-black">
      <div className="absolute top-2 left-3 text-xs text-neutral-400 font-mono uppercase">
        {lang}
      </div>

      <CopyButton code={code} />

      <div
        className="overflow-x-auto p-4 text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
