import { skills } from "@/lib/data";

export default function Marquee() {
  // dua track identik supaya loop terlihat mulus
  return (
    <div className="marquee" aria-hidden="true">
      {[0, 1].map((i) => (
        <div className="marquee-track" key={i}>
          {skills.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
