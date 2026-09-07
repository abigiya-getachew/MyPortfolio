import { Accessibility, Code2, Server, Wrench } from "lucide-react";

const groups = [
  {
    label: "Frontend",
    icon: Code2,
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    label: "Backend",
    icon: Server,
    tags: ["Node.js", "Nest.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    label: "Tooling",
    icon: Wrench,
    tags: ["Git", "Vite", "Figma", "Vercel"],
  },
  {
    label: "Practice",
    icon: Accessibility,
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

      <div className="skills-marquee-list">
        {groups.map((g, index) => (
          <div className="skills-marquee" key={g.label}>
            <div className="skills-marquee-label">
              <span className="skills-group-index">0{index + 1}</span>
              <g.icon size={18} strokeWidth={1.7} aria-hidden="true" />
              <p className="skills-group-label">{g.label}</p>
            </div>
            <div className="skills-marquee-window">
              <ul className="skills-marquee-track" aria-label={`${g.label} skills`}>
                {g.tags.map((tag) => <li key={tag} className="stack-tag">{tag}</li>)}
                {g.tags.map((tag) => <li key={`${tag}-repeat`} className="stack-tag" aria-hidden="true">{tag}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
