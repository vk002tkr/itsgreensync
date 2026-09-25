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

const capabilities = [
  "Strategy",
  "UI/UX",
  "Web",
  "Software",
  "Mobile",
  "SaaS",
  "Growth",
];

export default function Page() {
  return (
    <div className="about-page">
      <section className="about-page-hero">
        <div className="about-page-grid" aria-hidden="true" />

        <div className="page-container about-page-hero-inner">
          <div className="about-page-hero-copy">
            <span className="about-page-eyebrow">
              <span />
              ABOUT GREENSYNC
            </span>

            <h1>
              Technology should solve
              <span> business problems.</span>
            </h1>

            <p>
              GreenSync is a digital solutions company focused on helping
              businesses turn ideas, challenges and opportunities into useful
              digital products.
            </p>

            <div className="about-page-hero-actions">
              <Link href="/contact" className="about-page-primary">
                Start a Conversation
                <span aria-hidden="true">↗</span>
              </Link>

              <a href="#our-approach" className="about-page-secondary">
                Our Approach
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="about-page-hero-visual">
            <div className="about-page-hero-image">
              <Image
                src="/images/about-greensync.jpg"
                alt="GreenSync digital workspace"
                fill
                priority
                sizes="(max-width: 1000px) 100vw, 50vw"
                className="about-page-hero-image-element"
              />
              <div className="about-page-image-overlay" />
            </div>

            <div className="about-page-hero-badge">
              <span className="about-page-badge-dot" />
              Ideas · Design · Development · Growth
            </div>
          </div>
        </div>
      </section>

      <section className="about-page-story">
        <div className="page-container">
          <div className="about-page-story-grid">
            <div className="about-page-label">
              <span />
              WHAT WE BELIEVE
            </div>

            <div className="about-page-story-copy">
              <h2>
                Digital thinking,
                <span> built into everything we do.</span>
              </h2>

              <p>
                Whether you need a new website, custom software, mobile
                application or a complete digital platform, we combine
                business thinking with practical technology.
              </p>

              <p>
                The goal is not to add technology for the sake of technology.
                It is to create something useful — something that makes a
                process clearer, a customer journey easier or a business more
                capable.
              </p>

              <Link href="/contact" className="about-page-text-link">
                Start a Conversation
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="our-approach" className="about-page-principles">
        <div className="page-container">
          <div className="about-page-section-heading">
            <div className="about-page-label">
              <span />
              OUR APPROACH
            </div>

            <div>
              <h2>
                Simple principles.
                <br />
                <span>Useful outcomes.</span>
              </h2>

              <p>
                The tools and technologies can change. The way we think about
                solving business problems stays grounded.
              </p>
            </div>
          </div>

          <div className="about-page-principle-grid">
            {principles.map((principle) => (
              <article
                className="about-page-principle-card"
                key={principle.number}
              >
                <div className="about-page-principle-top">
                  <span>{principle.number}</span>
                  <span aria-hidden="true">↗</span>
                </div>

                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-capabilities">
        <div className="page-container">
          <div className="about-page-capabilities-card">
            <div className="about-page-capabilities-copy">
              <span className="about-page-eyebrow">
                <span />
                CONNECTED CAPABILITIES
              </span>

              <h2>
                One direction,
                <span> many disciplines.</span>
              </h2>

              <p>
                Strategy, design, technology and growth work better when they
                are connected. GreenSync brings these capabilities together
                around the same business objective.
              </p>
            </div>

            <div className="about-page-capability-list">
              {capabilities.map((capability, index) => (
                <div className="about-page-capability" key={capability}>
                  <span>0{index + 1}</span>
                  <strong>{capability}</strong>
                  <i aria-hidden="true">↗</i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-page-cta">
        <div className="page-container">
          <div className="about-page-cta-card">
            <div>
              <span className="about-page-cta-label">READY TO BUILD?</span>

              <h2>
                Bring us the
                <span> problem.</span>
              </h2>

              <p>
                We&apos;ll help you turn it into a clear digital direction.
              </p>
            </div>

            <Link href="/contact" className="about-page-cta-button">
              Tell Us About Your Project
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
