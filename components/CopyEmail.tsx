"use client";

import { useState } from "react";

export default function CopyEmail({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard bisa diblokir; abaikan */
    }
  };

  return (
    <button className={`copy-btn ${className}`} onClick={copy}>
      {copied ? "Tersalin!" : value}
    </button>
  );
}
