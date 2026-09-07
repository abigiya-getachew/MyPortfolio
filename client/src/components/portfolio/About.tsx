import { ArrowUpRight } from "lucide-react";
import { resumePdf } from "./constants";

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="section-header">
        <div className="section-kicker">
          <span>01</span>
          <span id="about-heading">About</span>
          <i />
        </div>
      </div>

      <div className="about-grid">
        <div className="about-body">
          <h2 className="about-heading">
            Engineer who cares
            <br />about the details.
          </h2>
          <p className="about-lead">
            I'm Abigiya Getachew a software engineer based in Addis
            Ababa, specializing in frontend product development and accessible
            user interfaces.
          </p>
          <p className="about-copy">
  I build frontend interfaces with React, Next.js, and TypeScript. I care a
  lot about the details most people skip: semantic HTML, keyboard
  navigation, and making sure the site actually holds up under WCAG
  guidelines, not just looks like it does. Good information architecture and
  fast, reliable performance aren't extras to me; they're the baseline.
</p>
<p className="about-copy">
  I don't stop at the interface, though. On full-stack projects I work across
  Node.js, Nest.js, PostgreSQL, and MongoDB, designing the data models and
  APIs, then building the UI that sits on top of them. I like owning a
  feature end to end and seeing how the pieces actually connect.
</p>
          <a
            className="text-link about-cv-link"
            href={resumePdf}
            download
            aria-label="Download resume PDF"
          >
            Download resume <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="about-meta">
          <div className="about-meta-block">
            <p className="about-meta-label">Currently</p>
            <p className="about-meta-value">Open to full-stack &amp; frontend roles</p>
          </div>
          <div className="about-meta-block">
            <p className="about-meta-label">Location</p>
            <p className="about-meta-value">Addis Ababa, Ethiopia</p>
          </div>
          <div className="about-meta-block">
            <p className="about-meta-label">Education</p>
            <p className="about-meta-value">Software Engineering</p>
          </div>
          <div className="about-meta-block">
            <p className="about-meta-label">Experience</p>
            <ul className="about-exp-list">
              <li>
                <span className="about-exp-year">2026</span>
                <span>UI/UX Design Intern, Women Techmakers</span>
              </li>
              <li>
                <span className="about-exp-year">2025</span>
                <span>Frontend Intern, SciTech Valley</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}