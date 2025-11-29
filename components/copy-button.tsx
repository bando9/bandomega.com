"use client";

import { FaCopy } from "@react-icons/all-files/fa/FaCopy";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { useState } from "react";

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={copy}
      className="absolute right-3 top-3 text-xs bg-slate-700 text-white px-2 py-1 rounded hover:bg-slate-600 transition"
    >
      {copied ? (
        <span className="flex items-center gap-1">
          <FaCheck /> Copied !
        </span>
      ) : (
        <span className="flex items-center gap-1">
          <FaCopy /> Copy
        </span>
      )}
    </button>
  );
}
