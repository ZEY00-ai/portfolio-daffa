import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { archive } from "@/lib/data";

export const metadata = { title: "Archive" };

export default function ArchivePage() {
  return (
    <>
      <Nav />
      <main className="section" style={{ paddingTop: 140 }}>
        <span className="label">[ Arsip ]</span>
        <h1 className="display" style={{ fontSize: "clamp(3.5rem, 13vw, 13rem)", marginTop: 20 }}>
          Archive.
        </h1>

        <div className="archive-grid">
          {archive.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <Link href={p.href} className="archive-card">
                <div
                  className="thumb"
                  style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
                />
                <h3>{p.title}</h3>
                <span className="label">
                  {p.tags} · {p.year}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
