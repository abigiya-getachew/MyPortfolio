const items = [
  {
    year: "2026",
    role: "UI/UX Design Intern",
    org: "Women Techmakers",
    impact:
      "Designed accessible, component-driven interfaces and contributed to a design system used across multiple products.",
  },
  {
    year: "2025",
    role: "Frontend Developer Intern",
    org: "SciTech Valley",
    impact:
      "Built responsive React features, improved Lighthouse accessibility scores, and shipped production UI improvements.",
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience" aria-labelledby="exp-heading">
      <div className="section-header">
        <div className="section-kicker">
          <span>03</span>
          <span id="exp-heading">Experience</span>
          <i />
        </div>
      </div>

      <ol className="experience-list">
        {items.map((item) => (
          <li className="experience-item" key={`${item.year}-${item.org}`}>
            <span className="experience-year" aria-label={`Year ${item.year}`}>{item.year}</span>
            <div>
              <h3 className="experience-role">{item.role}</h3>
              <p className="experience-org">{item.org}</p>
              <p className="experience-impact">{item.impact}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
