import SectionKicker from "./SectionKicker";

export default function Statement() {
  return (
    <section className="statement-band" id="about">
      <div className="statement-meta">
        <SectionKicker number="01">A point of view</SectionKicker>
        <span className="meta-detail">NO. 001 / EDITION 2026</span>
      </div>

      <div className="statement-content">
        <p className="large-statement">
          Good design doesn&apos;t add volume. It finds the signal hiding in the
          noise.
        </p>
        <div className="statement-footnote">
          <span className="footnote-number">01</span>
          <p>
            I work with ambitious teams to turn complicated ideas into clear,
            memorable systems — from the first question to the last pixel.
          </p>
        </div>
      </div>
    </section>
  );
}
