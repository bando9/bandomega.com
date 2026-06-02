"use client";

import { useState } from "react";

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-3 opacity-0 group-hover:opacity-100 transition px-2 py-1 text-xs bg-neutral-800 border border-neutral-700 rounded text-neutral-300 hover:bg-neutral-700"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
