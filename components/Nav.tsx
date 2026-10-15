import Link from "next/link";
import { profile } from "@/lib/data";

export default function Nav() {
  return (
    <header className="nav mono">
      <Link href="/" className="nav-logo" style={{ textTransform: "none" }}>
        {profile.name}
      </Link>
      <nav className="nav-links">
        <Link href="/#featured" className="hide-sm">
          Projects
        </Link>
        <Link href="/#about" className="hide-sm">
          About
        </Link>
        <Link href="/archive">Archive</Link>
        <a href={`mailto:${profile.email}`} className="nav-cta">
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
