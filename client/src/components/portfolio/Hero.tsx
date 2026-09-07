import { ArrowDownRight, Download } from "lucide-react";
import { resumePdf } from "./constants";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <p className="hero-label" aria-hidden="true">Frontend Engineer</p>

      <h1 id="hero-heading">
        Abigiya Getachew Assefa
      </h1>

      <p className="hero-role">
        <strong>Software Engineer / Frontend Focus</strong>
      </p>

      <p className="hero-value">
        Designing and building accessible, high-performance web products with
        React, Next.js, and TypeScript from Addis Ababa.
      </p>

      <div className="hero-actions">
        <a className="btn btn-primary" href="#work">
          View projects <ArrowDownRight size={16} aria-hidden="true" />
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
