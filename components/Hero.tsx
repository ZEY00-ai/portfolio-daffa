import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <h1 className="display hero-title">
        {profile.heroLines.map((line) => (
          <span className="line" key={line}>
            <span>{line}</span>
          </span>
        ))}
      </h1>

      <div className="hero-bottom">
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-stats mono">
          {profile.stats.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div className="hero-scroll mono">
          <span>Scroll</span>
          <i />
        </div>
      </div>
    </section>
  );
}
