import Link from "next/link";
import CopyEmail from "./CopyEmail";
import { profile, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <span className="label">Siap mulai?</span>
          <h3>
            <CopyEmail value={profile.email} />
          </h3>
          <a href={profile.whatsapp} className="mono">
            {profile.phone}
          </a>
        </div>

        <div>
          <span className="label">Site</span>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#featured">Projects</Link>
            </li>
            <li>
              <Link href="/#testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/archive">Archive</Link>
            </li>
          </ul>
        </div>

        <div>
          <span className="label">Follow</span>
          <ul>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="display footer-big">
        {profile.footerTagline.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>

      <div className="footer-bottom mono">
        <span>
          © {profile.year} {profile.name}
        </span>
        <a href="#top">Kembali ke atas ↑</a>
      </div>
    </footer>
  );
}
