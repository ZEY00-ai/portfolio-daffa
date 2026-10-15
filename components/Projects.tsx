"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  const previewRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const move = (e: React.MouseEvent) => {
    const el = previewRef.current;
    if (!el) return;
    el.style.transform = `translate(${e.clientX + 28}px, ${e.clientY - 115}px)`;
  };

  const current = active !== null ? projects[active] : null;

  return (
    <section className="section" id="featured">
      <div className="projects-head">
        <h2 className="display">
          Featured
          <br />
          Projects.
        </h2>
        <span className="label">[ Studi kasus ]</span>
      </div>

      <div
        className="project-list"
        onMouseMove={move}
        onMouseLeave={() => setActive(null)}
      >
        {projects.map((p, i) => (
          <Reveal key={p.slug}>
            <Link
              href={p.href}
              className="project-row"
              onMouseEnter={() => setActive(i)}
            >
              <span className="mono num">{String(i + 1).padStart(2, "0")}</span>
              <div
                className="project-card-mobile"
                style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
              />
              <h3>{p.title}</h3>
              <span className="label">{p.tags}</span>
              <span className="mono year">{p.year}</span>
            </Link>
          </Reveal>
        ))}
      </div>

      <div
        ref={previewRef}
        className={`preview mono ${current ? "on" : ""}`}
        style={{
          background: current
            ? `linear-gradient(135deg, ${current.from}, ${current.to})`
            : "transparent",
        }}
        aria-hidden="true"
      >
        {current?.tags}
      </div>
    </section>
  );
}
