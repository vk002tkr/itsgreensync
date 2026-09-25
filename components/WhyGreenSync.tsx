const reasons = [
  {
    number: "01",
    title: "Business before technology",
    description:
      "We start with the business problem, not with a technology stack. Every digital decision should have a clear purpose behind it.",
    label: "Purpose",
  },
  {
    number: "02",
    title: "One connected approach",
    description:
      "Strategy, design and development work together from the beginning, creating a more consistent experience from idea to launch.",
    label: "Connected",
  },
  {
    number: "03",
    title: "Built around your needs",
    description:
      "There is no one-size-fits-all solution. We shape the product, workflow and experience around how your business actually operates.",
    label: "Custom",
  },
  {
    number: "04",
    title: "Designed for what comes next",
    description:
      "We think beyond the first version, creating foundations that can evolve as your users, requirements and business grow.",
    label: "Future-ready",
  },
];

export default function WhyGreenSync() {
  return (
    <section className="why-section section" id="why-greensync">
      <div className="page-container">
        <div className="why-heading">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" />
            Why GreenSync
          </div>

          <div className="why-heading-content">
            <h2 className="section-title">
              Not just another
              <span> technology partner.</span>
            </h2>

            <p className="section-description">
              We believe good digital work starts with understanding the
              business behind it. That mindset shapes how we plan, design and
              build every solution.
            </p>
          </div>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <article className="why-card" key={reason.number}>
              <div className="why-card-top">
                <span className="why-number">{reason.number}</span>

                <span className="why-label">{reason.label}</span>
              </div>

              <div className="why-card-icon" aria-hidden="true">
                <span />
              </div>

              <div className="why-card-content">
                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </div>

              <span className="why-card-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>

        <div className="why-bottom">
          <div className="why-bottom-line" />

          <p>
            <strong>Good technology is useful.</strong> Great technology fits
            naturally into the way a business works.
          </p>
        </div>
      </div>
    </section>
  );
}