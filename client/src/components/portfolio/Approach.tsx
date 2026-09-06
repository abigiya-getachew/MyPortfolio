import SectionKicker from "./SectionKicker";

const steps = [
  {
    number: "01",
    title: "Find the question",
    body: "Before a solution, we make the problem worth solving. That means listening closely, testing assumptions, and naming what is actually at stake.",
  },
  {
    number: "02",
    title: "Make a system",
    body: "Good work should travel. I build visual and digital languages that hold their shape across different voices, formats, and futures.",
  },
  {
    number: "03",
    title: "Leave room",
    body: "The final gesture is restraint. Space, rhythm, and a few well-placed surprises let the important thing arrive clearly.",
  },
];

export default function Approach() {
  return (
    <section className="approach-section" id="approach">
      <div className="approach-aside">
        <SectionKicker number="03">How I work</SectionKicker>
        <p className="approach-aside-note">A small practice with a wide lens.</p>
      </div>

      <div className="approach-main">
        <h2>
          Less noise.
          <br />
          <em>More meaning.</em>
        </h2>

        <div className="approach-list">
          {steps.map((step) => (
            <div className="approach-item" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
