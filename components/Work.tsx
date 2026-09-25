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
    featured: true,
  },
  {
    number: "02",
    category: "Business Platform",
    title: "Systems that connect people, process and technology.",
    description:
      "Purpose-built software can bring the important parts of a business into one clear, dependable workflow.",
    image: "/images/work-project-02.jpg",
    tags: ["Product Design", "Software", "Web"],
    featured: false,
  },
  {
    number: "03",
    category: "Growth Experience",
    title: "Digital presence designed to move the business forward.",
    description:
      "We combine thoughtful design, technology and growth thinking to create digital experiences that support the next stage of a business.",
    image: "/images/work-project-03.jpg",
    tags: ["Design", "Growth", "Digital"],
    featured: false,
  },
];

export default function Work() {
  return (
    <section className="section work-section" id="work">
      <div className="page-container">
        <div className="work-intro">
          <div className="work-intro-label">
            <span />
            SELECTED WORK
          </div>

          <div className="work-intro-content">
            <h2>
              Built for the <span>work that matters.</span>
            </h2>

            <p>
              Every business has different challenges. Our work focuses on
              creating digital experiences and systems around the specific
              problem that needs to be solved.
            </p>
          </div>
        </div>

        <div className="work-showcase">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`work-project ${
                project.featured ? "work-project-featured" : ""
              }`}
            >
              <Link
                href="/contact"
                className="work-project-visual"
                aria-label={`Discuss a project like ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes={
                    project.featured
                      ? "(max-width: 700px) 100vw, (max-width: 1100px) 92vw, 820px"
                      : "(max-width: 700px) 100vw, 420px"
                  }
                  className="work-project-image"
                />

                <div className="work-project-overlay" />

                <span className="work-project-number">
                  {project.number}
                </span>

                <span className="work-project-open" aria-hidden="true">
                  ↗
                </span>

                <div className="work-project-image-label">
                  <span>{project.category}</span>
                  <strong>GreenSync</strong>
                </div>
              </Link>

              <div className="work-project-content">
                <div className="work-project-meta">
                  <span>{project.category}</span>
                  <span>{project.number}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="work-project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="work-footer">
          <div>
            <span className="work-footer-label">Have something in mind?</span>
            <h3>
              Let&apos;s create the next
              <span> useful thing.</span>
            </h3>
          </div>

          <Link href="/contact" className="work-footer-link">
            Start a Project
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
