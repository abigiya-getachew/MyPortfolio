const groups = [
  {
    label: "Frontend",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    label: "Backend",
    tags: ["Node.js", "Nest.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    label: "Tooling",
    tags: ["Git", "Vite", "Figma", "Vercel", "Linux"],
  },
  {
    label: "Practice",
    tags: ["WCAG / Accessibility", "Responsive design", "Performance"],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-heading">
      <div className="section-header">
        <div className="section-kicker">
          <span>03</span>
          <span id="skills-heading">Skills</span>
          <i />
        </div>
      </div>

      <div className="skills-grid">
        {groups.map((g) => (
          <div key={g.label}>
            <p className="skills-group-label">{g.label}</p>
            <ul className="skills-tags" aria-label={`${g.label} skills`}>
              {g.tags.map((tag) => (
                <li key={tag} className="stack-tag">{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
