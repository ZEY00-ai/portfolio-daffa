"use client";

import { useState } from "react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section className="section testi" id="testimonials">
      <span className="label">[ Testimoni ]</span>
      <h2 className="display testi-title">
        Hasil
        <br />
        Bicara Lebih Keras
      </h2>

      <div className="testi-body">
        <div className="testi-nav">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={idx === i ? "active" : ""}
              onClick={() => setI(idx)}
              aria-label={`Testimoni ${idx + 1}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <div key={i} className="fade-swap">
          <p className="testi-quote">&ldquo;{t.quote}&rdquo;</p>
          <div className="testi-author">
            <div className="avatar" />
            <div>
              <div>{t.name}</div>
              <div className="label">{t.role}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
