import { ArrowUpRight } from "lucide-react";
import resumePdf from "../../assets/ABIGIYA_GETACHEW_ASSEFA_CV.pdf";

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
            I'm Abigiya Getachew Assefa, a full-stack and frontend developer
            based in Addis Ababa. I build interfaces that are fast, accessible,
            and actually pleasant to use.
          </p>
          <p className="about-copy">
            My focus is on the frontend: React, Next.js, TypeScript, and a real
            commitment to WCAG-conscious UI. I care about semantic markup,
            keyboard navigation, and contrast ratios — not because a checklist
            says so, but because they're what makes software usable for everyone.
          </p>
          <p className="about-copy">
            On the backend I work with Node.js, Nest.js, PostgreSQL, and MongoDB.
            I'm most comfortable owning a feature end-to-end, from database
            schema to the pixel that lands on screen.
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