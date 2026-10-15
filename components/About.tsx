import Reveal from "./Reveal";
import { about, profile, skills } from "@/lib/data";

const photos = [
  "linear-gradient(160deg, #ff6a3d, #ffd2a8)",
  "linear-gradient(160deg, #2d2a8a, #8fa2ff)",
  "linear-gradient(160deg, #0f6b4f, #b8f0c8)",
];

export default function About() {
  return (
    <section className="section about" id="about">
      <Reveal>
        <span className="label">[ Awal perjalanan ]</span>
        <p className="about-intro" style={{ marginTop: 24 }}>
          {about.start}
        </p>
      </Reveal>

      <div className="about-row">
        <Reveal>
          <div className="photo" style={{ background: photos[0] }} />
        </Reveal>
        <Reveal delay={120}>
          <span className="label">[ Tentang saya ]</span>
          <p style={{ marginTop: 16 }}>{about.story}</p>
        </Reveal>
      </div>

      <div className="about-row">
        <Reveal>
          <span className="label">[ Di luar pekerjaan ]</span>
          <p style={{ marginTop: 16, color: "var(--fg)" }}>{about.outsideTitle}</p>
          <p>{about.outside}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="photo-grid">
            {photos.map((bg, i) => (
              <div className="photo" key={i} style={{ background: bg }} />
            ))}
          </div>
        </Reveal>
      </div>

      <div className="about-row">
        <Reveal>
          <p style={{ color: "var(--fg)" }}>{about.focus}</p>
        </Reveal>
        <Reveal delay={120}>
          <span className="label">[ Keahlian utama ]</span>
          <div className="skills">
            {skills.map((s) => (
              <span className="chip" key={s}>
                {s}
              </span>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>{about.best}</p>
          <a href={profile.resume} className="btn mono">
            Download CV ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
