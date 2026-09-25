import Image from "next/image";
import Link from "next/link";
import styles from "./process.module.css";

const steps = [
  {
    number: "01",
    title: "Discover",
    short: "Understand",
    description:
      "We learn how your business works, what your customers need and what problem the project needs to solve.",
    deliverables: ["Business context", "Goals & priorities", "Opportunity map"],
  },
  {
    number: "02",
    title: "Define",
    short: "Focus",
    description:
      "We turn the problem into a clear direction, defining the scope, experience and technical requirements before production begins.",
    deliverables: ["Project direction", "Feature priorities", "Technical plan"],
  },
  {
    number: "03",
    title: "Design",
    short: "Shape",
    description:
      "We create the structure and visual experience, keeping usability, brand and business objectives connected.",
    deliverables: ["User flows", "Interface design", "Design system"],
  },
  {
    number: "04",
    title: "Build",
    short: "Develop",
    description:
      "Design becomes a working digital product through focused development, testing and continuous refinement.",
    deliverables: ["Development", "Integrations", "Quality checks"],
  },
  {
    number: "05",
    title: "Launch",
    short: "Move",
    description:
      "We prepare the product for release, make the final checks and help create a clear path for what comes next.",
    deliverables: ["Launch preparation", "Handover", "Next-step roadmap"],
  },
];

export default function ProcessPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.grid} aria-hidden="true" />

        <div className={`page-container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              <i />
              OUR PROCESS
            </span>

            <h1>
              From a business
              <span> problem to something useful.</span>
            </h1>

            <p>
              A clear process keeps strategy, design and technology moving in
              the same direction. Every stage builds on the one before it.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primary}>
                Start a Project
                <span aria-hidden="true">↗</span>
              </Link>

              <a href="#process-steps" className={styles.secondary}>
                See the Process
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={`${styles.orbit} ${styles.orbitOne}`} />
            <div className={`${styles.orbit} ${styles.orbitTwo}`} />
            <div className={`${styles.orbit} ${styles.orbitThree}`} />

            <div className={styles.center}>
              <Image
                src="/greensync-logo.svg"
                alt="GreenSync"
                width={78}
                height={78}
                priority
              />
              <span>GREENSYNC</span>
            </div>

            <div className={`${styles.floatingCard} ${styles.cardOne}`}>
              <b>01</b>
              <span>Discover</span>
            </div>

            <div className={`${styles.floatingCard} ${styles.cardTwo}`}>
              <b>03</b>
              <span>Design</span>
            </div>

            <div className={`${styles.floatingCard} ${styles.cardThree}`}>
              <b>05</b>
              <span>Launch</span>
            </div>

            <div className={styles.routeLine} />
          </div>
        </div>
      </section>

      <section id="process-steps" className={styles.stepsSection}>
        <div className="page-container">
          <div className={styles.heading}>
            <div className={styles.label}>
              <i />
              THE WAY WE WORK
            </div>

            <div>
              <h2>
                One connected process.
                <span> Five clear stages.</span>
              </h2>

              <p>
                The exact project can change, but the thinking stays
                connected. We move from understanding to execution without
                losing sight of the original business objective.
              </p>
            </div>
          </div>

          <div className={styles.stepList}>
            {steps.map((step, index) => (
              <article className={styles.step} key={step.number}>
                <div className={styles.stepNumber}>{step.number}</div>

                <div className={styles.stepVisual} aria-hidden="true">
                  <span className={styles.stepRing} />
                  <span className={styles.stepDot} />
                  <strong>{step.number}</strong>
                </div>

                <div className={styles.stepMain}>
                  <div className={styles.stepTop}>
                    <span>{step.short}</span>
                    <span>{String(index + 1).padStart(2, "0")}/05</span>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                <div className={styles.deliverables}>
                  <span>OUTPUT</span>

                  {step.deliverables.map((item) => (
                    <div key={item}>
                      <i />
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.connectionSection}>
        <div className="page-container">
          <div className={styles.connectionCard}>
            <div className={styles.connectionCopy}>
              <span className={styles.label}>
                <i />
                ONE PROCESS. ONE DIRECTION.
              </span>

              <h2>
                Strategy, design and technology
                <span> should not work in isolation.</span>
              </h2>

              <p>
                Keeping the stages connected means decisions made early in the
                project continue to make sense when the product is being built
                and launched.
              </p>
            </div>

            <div className={styles.connectionFlow} aria-hidden="true">
              {["Strategy", "Design", "Technology", "Growth"].map(
                (item, index) => (
                  <div key={item}>
                    <span>0{index + 1}</span>
                    <strong>{item}</strong>
                    {index < 3 && <i>→</i>}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="page-container">
          <div className={styles.cta}>
            <div>
              <span>READY WHEN YOU ARE</span>
              <h2>
                Let&apos;s work through
                <span> the problem together.</span>
              </h2>
              <p>
                Tell us what you are trying to build, improve or solve.
              </p>
            </div>

            <Link href="/contact" className={styles.primary}>
              Start a Project
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
