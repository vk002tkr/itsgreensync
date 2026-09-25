import Image from "next/image";
import Link from "next/link";
import styles from "./contact.module.css";

const contactDetails = [
  {
    label: "Email",
    value: "hello@itsgreensync.com",
    href: "mailto:hello@itsgreensync.com",
  },
  {
    label: "Project enquiry",
    value: "Tell us what you are building",
    href: "#contact-form",
  },
  {
    label: "Availability",
    value: "Taking on selected projects",
    href: "#contact-form",
  },
];

const projectTypes = [
  "Website / Web Development",
  "Custom Software",
  "Mobile Application",
  "SaaS / Digital Platform",
  "UI/UX Design",
  "Digital Growth",
  "Something else",
];

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.grid} aria-hidden="true" />

        <div className={`page-container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              <i />
              CONTACT GREENSYNC
            </span>

            <h1>
              Let&apos;s talk about
              <span> what you want to build.</span>
            </h1>

            <p>
              Have an idea, a business problem or an existing digital product
              that needs to move forward? Tell us what you are working on and
              we&apos;ll start from there.
            </p>

            <div className={styles.heroLinks}>
              <a href="mailto:hello@itsgreensync.com">
                hello@itsgreensync.com
                <span aria-hidden="true">↗</span>
              </a>

              <a href="#contact-form">
                Start your enquiry
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={`${styles.visualRing} ${styles.visualRingOne}`} />
            <div className={`${styles.visualRing} ${styles.visualRingTwo}`} />
            <div className={`${styles.visualRing} ${styles.visualRingThree}`} />

            <div className={styles.visualCore}>
              <Image
                src="/greensync-logo.svg"
                alt="GreenSync"
                width={86}
                height={86}
                priority
                className={styles.visualLogo}
              />
              <span>GREENSYNC</span>
            </div>

            <div className={`${styles.visualCard} ${styles.visualCardOne}`}>
              <span>01</span>
              <strong>Idea</strong>
            </div>

            <div className={`${styles.visualCard} ${styles.visualCardTwo}`}>
              <span>02</span>
              <strong>Build</strong>
            </div>

            <div className={`${styles.visualCard} ${styles.visualCardThree}`}>
              <span>03</span>
              <strong>Grow</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className={styles.formSection}>
        <div className="page-container">
          <div className={styles.formLayout}>
            <div className={styles.formIntro}>
              <span className={styles.label}>
                <i />
                START A CONVERSATION
              </span>

              <h2>
                Tell us a little
                <span> about the project.</span>
              </h2>

              <p>
                You do not need to have everything figured out. Give us the
                useful context and we can take it from there.
              </p>

              <div className={styles.details}>
                {contactDetails.map((detail) => (
                  <a href={detail.href} key={detail.label}>
                    <span>{detail.label}</span>
                    <strong>{detail.value}</strong>
                    <b aria-hidden="true">↗</b>
                  </a>
                ))}
              </div>
            </div>

            <form className={styles.form}>
              <div className={styles.fieldGrid}>
                <label>
                  <span>Your name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </label>

                <label>
                  <span>Work email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </label>
              </div>

              <div className={styles.fieldGrid}>
                <label>
                  <span>Company</span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </label>

                <label>
                  <span>Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91"
                    autoComplete="tel"
                  />
                </label>
              </div>

              <label>
                <span>What do you need?</span>
                <select name="projectType" defaultValue="">
                  <option value="" disabled>
                    Select a project type
                  </option>

                  {projectTypes.map((type) => (
                    <option value={type} key={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Tell us about the project</span>
                <textarea
                  name="message"
                  rows={7}
                  placeholder="What are you trying to build, improve or solve?"
                />
              </label>

              <button type="submit" className={styles.submit}>
                Send Project Enquiry
                <span aria-hidden="true">↗</span>
              </button>

              <p className={styles.formNote}>
                This form is currently a project enquiry interface. Submission
                handling can be connected when the backend/contact workflow is
                added.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.expectSection}>
        <div className="page-container">
          <div className={styles.expectCard}>
            <div>
              <span className={styles.label}>
                <i />
                WHAT HAPPENS NEXT
              </span>

              <h2>
                A clear conversation before
                <span> anything gets built.</span>
              </h2>
            </div>

            <div className={styles.expectList}>
              <div>
                <span>01</span>
                <div>
                  <strong>We understand</strong>
                  <p>We look at your goals, context and the problem to solve.</p>
                </div>
              </div>

              <div>
                <span>02</span>
                <div>
                  <strong>We discuss</strong>
                  <p>We talk through scope, priorities and the right direction.</p>
                </div>
              </div>

              <div>
                <span>03</span>
                <div>
                  <strong>We plan</strong>
                  <p>You get a practical path from the conversation to execution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className="page-container">
          <div className={styles.finalCard}>
            <span>NOT READY TO START A PROJECT?</span>

            <h2>
              Explore how
              <span> GreenSync works.</span>
            </h2>

            <p>
              Learn about our services and process before starting the
              conversation.
            </p>

            <div className={styles.finalActions}>
              <Link href="/services" className={styles.primary}>
                Explore Services
                <span aria-hidden="true">↗</span>
              </Link>

              <Link href="/process" className={styles.secondary}>
                Our Process
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
