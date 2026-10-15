import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function WhatIDo() {
  return (
    <section className="section whatido">
      <Reveal>
        <span className="label">[ Apa yang saya kerjakan ]</span>
      </Reveal>
      <Reveal delay={120}>
        <h2>{profile.whatIDo}</h2>
        <p className="sub label">{profile.trusted}</p>
      </Reveal>
    </section>
  );
}
