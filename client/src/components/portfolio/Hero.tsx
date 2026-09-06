import { ArrowDownRight, Download } from "lucide-react";
import resumePdf from "../../assets/ABIGIYA_GETACHEW_ASSEFA_CV.pdf";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <p className="hero-label" aria-hidden="true">Frontend Engineer</p>

      <h1 id="hero-heading">
        Abigiya Getachew Assefa
      </h1>

      <p className="hero-role">
        <strong>React · Next.js · TypeScript</strong>
      </p>

      <p className="hero-value">
        Building accessible, WCAG-conscious interfaces — clean architecture,
        fast delivery, from Addis Ababa.
      </p>

      <div className="hero-actions">
        <a className="btn btn-primary" href="#work">
          View work <ArrowDownRight size={16} aria-hidden="true" />
        </a>
        <a className="btn btn-outline" href={resumePdf} download aria-label="Download résumé PDF">
          Download resume <Download size={15} aria-hidden="true" />
        </a>
        <a className="text-link" href="#contact">
          Get in touch
        </a>
      </div>
    </section>
  );
}
