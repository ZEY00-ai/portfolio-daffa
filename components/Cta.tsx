import Link from "next/link";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Cta() {
  return (
    <section className="cta">
      <Reveal>
        <h2 className="display">
          Ayo buat
          <br />
          sesuatu bersama.
        </h2>
        <div className="cta-actions">
          <a href={`mailto:${profile.email}`} className="btn mono">
            Let&apos;s talk
          </a>
          <Link href="/archive" className="btn btn-outline mono">
            Lihat arsip
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
