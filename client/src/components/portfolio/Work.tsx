import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";

const projects = [
  {
    num: "01",
    eyebrow: "Fullstack · 2026",
    title: "PizzaForge",
    description:
      "A restaurant ordering platform built for speed — customers browse, customize, and checkout without friction.",
    outcome: "End-to-end ordering flow, from menu to kitchen.",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    slug: "pizzaforge",
    image: project1,
    url: "https://pizzaforge-alpha.vercel.app/",
  },
   {
    num: "02",
    eyebrow: "Fullstack · 2025",
    title: "SafeHaven",
    description:
      "Final year capstone project: an anonymous reporting platform for trauma, bullying, and violence incidents. Built a full-stack system for real-time report submission and dashboard visualization, replacing manual processes with a faster digital workflow.",
    outcome: "Faster, more private incident reporting with real-time dashboard visibility.",
    tags: ["React", "Nest.js", "PostgreSQL", "TypeScript"],
    slug: "safehaven",
    image: project2,
    url: "https://safe-haven-mocha.vercel.app/",
  },
   {
    num: "03",
    eyebrow: "UI/UX Design · 2025",
    title: "EthioTour",
    description:
      "A tour and travel booking platform for Ethiopia, letting users explore destinations, browse curated tour packages, and book trips with local guides.",
    outcome: "A clearer path from discovering Ethiopian destinations to booking guided trips.",
    tags: [ "Figma", "Prototyping"],
    slug: "ethiotour",
    image: project3,
    url: "https://tweet-coat-10702328.figma.site/",
  },

];

export default function Work() {
  return (
    <section className="work-section" id="work" aria-labelledby="work-heading">
      <div className="work-header">
        <div className="section-kicker">
          <span>02</span>
          <span id="work-heading">Selected work</span>
          <i />
        </div>
        <span style={{ fontSize: 13, color: "var(--ink-soft)", fontFamily: "IBM Plex Mono, monospace" }}>
          {projects.length} projects
        </span>
      </div>

      <div className="project-track-wrap">
        <div
          className={`project-track ${projects.length > 3 ? "project-track-scrollable" : ""}`}
          role="list"
        >
          {projects.map((p) => (
            <article className="project-card" key={p.num} role="listitem">
              <div className="project-image">
                <span className="project-image-index" aria-hidden="true">{p.num}</span>
                {p.image ? (
                  <img src={p.image} alt={`${p.title} — screenshot`} loading="lazy" decoding="async" />
                ) : (
                  <div className={`project-placeholder project-placeholder-${p.num}`} role="img" aria-label={`${p.title} — project preview`}>
                    <div className="project-placeholder-inner">
                      <span>{p.title}</span>
                      <small>Live project</small>
                    </div>
                  </div>
                )}
              </div>

              <div className="project-card-content">
                <p className="project-eyebrow">{p.eyebrow}</p>
                <h2>{p.title}</h2>
                <p className="project-desc">{p.description}</p>

                <ul className="project-tags" aria-label="Stack">
                  {p.tags.map((tag) => (
                    <li key={tag} className="stack-tag">{tag}</li>
                  ))}
                </ul>

                <div className="project-outcome">
                  <p className="project-outcome-label">Outcome</p>
                  <p>{p.outcome}</p>
                </div>

                {p.url ? (
                  <a
                    className="project-cta"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View project: ${p.title} (opens in new tab)`}
                  >
                    View project <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="project-cta project-cta-disabled">
                    Link coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
