import Image from "next/image";
import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites built for performance, usability and growth.",
    image: "/images/service-web-development.jpg",
  },
  {
    number: "02",
    title: "Custom Software",
    description:
      "Business-focused software designed around your workflows and requirements.",
    image: "/images/service-custom-software.jpg",
  },
  {
    number: "03",
    title: "Mobile Apps",
    description:
      "Smooth, intuitive mobile experiences built for real-world users.",
    image: "/images/service-mobile-apps.jpg",
  },
  {
    number: "04",
    title: "SaaS Platforms",
    description:
      "Scalable cloud-based products that connect your business, users and data.",
    image: "/images/service-saas-platforms.jpg",
  },
  {
    number: "05",
    title: "UI/UX Design",
    description:
      "Clear, thoughtful interfaces that make digital products easier to use.",
    image: "/images/service-ui-ux-design.jpg",
  },
  {
    number: "06",
    title: "Digital Growth",
    description:
      "Data-driven digital strategies designed to improve visibility and growth.",
    image: "/images/service-digital-growth.jpg",
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>WHAT WE BUILD</span>

            <h2>
              Digital solutions for
              <span> modern businesses.</span>
            </h2>
          </div>

          <div className={styles.headingSide}>
            <p>
              From websites to complex software systems, we create digital
              solutions designed around your business goals.
            </p>

            <Link href="/services" className={styles.viewLink}>
              View All Services
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.featured}>
          <div className={styles.featuredImage}>
            <Image
              src="/images/services-featured.jpg"
              alt="GreenSync digital solutions workspace"
              fill
              sizes="(max-width: 800px) 100vw, 62vw"
              priority={false}
            />

            <div className={styles.imageOverlay} />

            <div className={styles.featuredBadge}>
              <span className={styles.badgeDot} />
              Digital Solutions
            </div>
          </div>

          <div className={styles.featuredContent}>
            <span className={styles.featuredNumber}>01 — 06</span>

            <h3>
              One connected approach to
              <span> digital transformation.</span>
            </h3>

            <p>
              We bring strategy, design and technology together to build
              digital products that solve real business problems.
            </p>

            <Link href="/services" className={styles.featuredButton}>
              Explore Our Services
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article className={styles.card} key={service.title}>
              <div className={styles.cardImage}>
                <Image
                  src={service.image}
                  alt={`${service.title} at GreenSync`}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />

                <div className={styles.cardImageOverlay} />

                <span className={styles.cardNumber}>
                  {service.number}
                </span>

                <span className={styles.cardArrow} aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className={styles.cardContent}>
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link href="/services" className={styles.cardLink}>
                  Explore Service
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}