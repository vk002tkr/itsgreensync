import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const services = [
    { label: "Web Development", href: "/services" },
    { label: "Custom Software", href: "/services" },
    { label: "Mobile Apps", href: "/services" },
    { label: "SaaS Development", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "Digital Marketing", href: "/services" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Our Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link
              href="/"
              className="footer-logo"
              aria-label="GreenSync Home"
            >
              <Image
                src="/images/greensync-mark.svg"
                alt=""
                width={48}
                height={48}
                className="footer-logo-mark-image"
                aria-hidden="true"
              />

              <span className="footer-logo-name">
                <span>Green</span>
                <strong>Sync</strong>
              </span>
            </Link>

            <p className="footer-description">
              We design and build digital products, software and growth
              solutions that help businesses move forward.
            </p>

            <Link
              href="/contact"
              className="footer-project-link"
            >
              Start a Project
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="footer-column">
            <h3>Services</h3>

            <nav aria-label="Footer services navigation">
              {services.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                >
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-column">
            <h3>Company</h3>

            <nav aria-label="Footer company navigation">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-column footer-contact">
            <h3>Let&apos;s Talk</h3>

            <p>
              Have an idea, project or business challenge?
              <br />
              Let&apos;s build something useful together.
            </p>

            <a href="mailto:hello@itsgreensync.com">
              hello@itsgreensync.com
            </a>
          </div>
        </div>

        <div className="footer-cta">
          <div>
            <span className="footer-cta-label">
              Have a project in mind?
            </span>

            <h2>
              Let&apos;s build something
              <br />
              <span>meaningful.</span>
            </h2>
          </div>

          <Link
            href="/contact"
            className="footer-cta-button"
          >
            Tell Us About Your Project
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="footer-bottom">
          <p>
  © 2026 GreenSync. All rights reserved. Secure and Powered by{"  "}
  <a
    href="https://ynrsgroup.in"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    YNRS Business Solutions
  </a>.
</p>

          <div className="footer-bottom-links">
            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}