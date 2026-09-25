import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Digital Product",
    title: "Digital experiences built around real business needs.",
    description:
      "From customer-facing websites to connected digital platforms, we create experiences that make complex business journeys easier to understand and use.",
    image: "/images/work-project-01.jpg",
    tags: ["Strategy", "UI/UX", "Development"],
  },
  {
    number: "02",
    category: "Business Platform",
    title: "Systems that connect people, process and technology.",
    description:
      "Purpose-built software can bring the important parts of a business into one clear, dependable workflow.",
    image: "/images/work-project-02.jpg",
    tags: ["Product Design", "Software", "Web"],
  },
  {
    number: "03",
    category: "Growth Experience",
    title: "Digital presence designed to move the business forward.",
    description:
      "We combine thoughtful design, technology and growth thinking to create digital experiences that support the next stage of a business.",
    image: "/images/work-project-03.jpg",
    tags: ["Design", "Growth", "Digital"],
  },
];

export default function WorkPage() {
  return (
    <div className="work-page">
      <section className="work-page-hero">
        <div className="work-page-grid" aria-hidden="true" />

        <div className="page-container work-page-hero-inner">
          <div className="work-page-hero-copy">
            <span className="work-page-eyebrow">
              <span />
              SELECTED WORK
            </span>

            <h1>
              Built for the
              <span> work that matters.</span>
            </h1>

            <p>
              Every business has different challenges. Our work focuses on
              creating digital experiences and systems around the specific
              problem that needs to be solved.
            </p>

            <div className="work-page-hero-actions">
              <Link href="/contact" className="work-page-primary">
                Start a Project
                <span aria-hidden="true">↗</span>
              </Link>

              <a href="#work-projects" className="work-page-secondary">
                Explore Work
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div
            className="work-page-hero-visual"
            style={{
              width: "min(100%, 640px)",
              aspectRatio: "16 / 10",
              height: "auto",
              justifySelf: "end",
            }}
          >
            <div
              className="work-page-hero-image-frame"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                aspectRatio: "16 / 10",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/work-project-01.jpg"
                alt="GreenSync digital product workspace"
                fill
                priority
                sizes="(max-width: 1000px) 100vw, 640px"
                className="work-page-hero-image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />

              <div className="work-page-hero-image-overlay" />

              <div className="work-page-hero-image-label">
                <span>01</span>
                <strong>Digital Product</strong>
              </div>

              <span
                className="work-page-hero-image-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="work-projects" className="work-page-projects">
        <div className="page-container">
          <div className="work-page-section-heading">
            <div className="work-page-label">
              <span />
              THE WORK
            </div>

            <div>
              <h2>
                Digital products,
                <br />
                <span>designed with purpose.</span>
              </h2>

              <p>
                A selection of the kinds of digital experiences, platforms and
                systems GreenSync is built to create.
              </p>
            </div>
          </div>

          <div className="work-page-project-list">
            {projects.map((project, index) => (
              <article
                className={`work-page-project ${
                  index === 0 ? "is-featured" : ""
                }`}
                key={project.number}
              >
                <Link
                  href="/contact"
                  className="work-page-project-image"
                  aria-label={`Discuss a project like ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 900px) 100vw, 68vw"
                        : "(max-width: 900px) 100vw, 48vw"
                    }
                    className="work-page-project-image-element"
                  />

                  <div className="work-page-project-image-overlay" />

                  <span className="work-page-project-number">
                    {project.number}
                  </span>

                  <span
                    className="work-page-project-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>

                  <div className="work-page-project-image-caption">
                    <span>{project.category}</span>
                    <strong>GreenSync</strong>
                  </div>
                </Link>

                <div className="work-page-project-content">
                  <div className="work-page-project-meta">
                    <span>{project.category}</span>
                    <span>{project.number}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="work-page-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="work-page-project-link"
                  >
                    Discuss a project like this
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-page-principles">
        <div className="page-container">
          <div className="work-page-principles-card">
            <div className="work-page-principles-copy">
              <span className="work-page-label">
                <span />
                HOW WE THINK ABOUT WORK
              </span>

              <h2>
                The deliverable is
                <span> more than a screen.</span>
              </h2>

              <p>
                A successful digital project should make something clearer,
                faster, easier or more useful. We look at the complete
                experience — not just the interface.
              </p>
            </div>

            <div className="work-page-principles-list">
              <div>
                <span>01</span>
                <strong>Clear purpose</strong>
                <p>Every feature should have a reason to exist.</p>
              </div>

              <div>
                <span>02</span>
                <strong>Useful experience</strong>
                <p>People should understand what to do without friction.</p>
              </div>

              <div>
                <span>03</span>
                <strong>Connected system</strong>
                <p>
                  Design, technology and business goals should work together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-page-cta">
        <div className="page-container">
          <div className="work-page-cta-card">
            <div>
              <span>HAVE A PROJECT IN MIND?</span>

              <h2>
                Let&apos;s create the next
                <span> useful thing.</span>
              </h2>

              <p>
                Tell us what you are trying to build, improve or solve.
              </p>
            </div>

            <Link href="/contact" className="work-page-cta-button">
              Start a Project
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}