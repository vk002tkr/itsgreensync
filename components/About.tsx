import Image from "next/image";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Business before technology",
    text: "We start by understanding the problem, the people and the business goal before deciding what to build.",
  },
  {
    number: "02",
    title: "Simple, connected solutions",
    text: "Strategy, design and development work together so your digital presence feels consistent and purposeful.",
  },
  {
    number: "03",
    title: "Built for what comes next",
    text: "We create flexible digital systems that can evolve as your business grows and your needs change.",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="page-container">
        <div className="about-intro-row">
          <div className="about-intro-label">
            <span className="section-eyebrow">
              <span className="section-eyebrow-line" />
              ABOUT GREENSYNC
            </span>
          </div>

          <div className="about-intro-copy">
            <h2 className="about-intro-title">
              Technology should solve
              <span> business problems.</span>
            </h2>
            <p>
              GreenSync is a digital solutions company focused on helping
              businesses turn ideas, challenges and opportunities into useful
              digital products.
            </p>
            <Link href="/about" className="about-link">
              More About GreenSync
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="about-feature">
          <div className="about-image-wrap">
            <div className="about-image">
              <Image
                src="/images/about-greensync.jpg"
                alt="Modern GreenSync digital workspace"
                fill
                sizes="(max-width: 900px) 100vw, 58vw"
                className="about-image-element"
              />
            </div>

            <div className="about-image-caption">
              <span>Ideas</span>
              <span>Design</span>
              <span>Development</span>
              <span>Growth</span>
            </div>
          </div>

          <div className="about-feature-copy">
            <span className="about-feature-kicker">GREENSYNC</span>
            <h3>Digital thinking, built into everything we do.</h3>
            <p>
              Whether you need a new website, custom software, mobile
              application or a complete digital platform, we combine business
              thinking with practical technology.
            </p>

            <Link href="/contact" className="about-conversation-link">
              Start a Conversation
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="about-principles">
          {principles.map((principle) => (
            <article className="about-principle" key={principle.number}>
              <div className="about-principle-top">
                <span className="about-principle-number">
                  {principle.number}
                </span>
                <span className="about-principle-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="about-principle-content">
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
