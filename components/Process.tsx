const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals and the problem you want technology to solve.",
    points: ["Business goals", "Requirements", "Research"],
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn the initial idea into a clear product direction, scope and practical roadmap.",
    points: ["Strategy", "Architecture", "Roadmap"],
  },
  {
    number: "03",
    title: "Design",
    description:
      "We shape the experience, interface and interactions before development begins.",
    points: ["UX structure", "UI design", "User flows"],
  },
  {
    number: "04",
    title: "Build",
    description:
      "We develop the product with a focus on performance, reliability, scalability and maintainability.",
    points: ["Development", "Integration", "Testing"],
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We prepare the product for real users and continue improving it as your business evolves.",
    points: ["Deployment", "Optimization", "Growth"],
  },
];

export default function Process() {
  return (
    <section className="process-section section" id="process">
      <div className="page-container">
        <div className="process-heading">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" />
            Our Process
          </div>

          <div className="process-heading-content">
            <h2 className="section-title">
              From an idea to
              <span> something real.</span>
            </h2>

            <p className="section-description">
              Good digital products are not created by jumping straight into
              development. We follow a structured process that keeps the
              business objective at the centre of every decision.
            </p>
          </div>
        </div>

        <div className="process-track">
          <div className="process-line" aria-hidden="true" />

          {processSteps.map((step) => (
            <article className="process-step" key={step.number}>
              <div className="process-step-marker">
                <span>{step.number}</span>
              </div>

              <div className="process-step-content">
                <span className="process-step-label">
                  Step {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                <div className="process-step-points">
                  {step.points.map((point) => (
                    <span key={point}>
                      <i aria-hidden="true" />
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="process-bottom">
          <div className="process-bottom-mark" aria-hidden="true">
            G
          </div>

          <div className="process-bottom-content">
            <span>One process. One clear direction.</span>

            <p>
              Every stage is connected, so strategy, design and technology
              work together instead of becoming separate pieces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}