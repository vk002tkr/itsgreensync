import Link from "next/link";


function GreenSyncLogo() {
  return (
    <svg
      className="services-page-logo"
      viewBox="0 0 280 280"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="servicesLogoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a8ff4a" />
          <stop offset="42%" stopColor="#6ee849" />
          <stop offset="100%" stopColor="#2d8659" />
        </linearGradient>

        <linearGradient id="servicesLogoGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#64dd89" />
          <stop offset="50%" stopColor="#3db86a" />
          <stop offset="100%" stopColor="#1a6d3a" />
        </linearGradient>

        <linearGradient id="servicesLogoGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10a152" />
          <stop offset="100%" stopColor="#64dd89" />
        </linearGradient>

        <filter id="servicesLogoShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="2" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#servicesLogoShadow)">
        <path
          d="M 75 70 Q 50 90 50 140 Q 50 190 100 210 Q 130 220 145 200 L 145 180 Q 130 185 115 185 Q 85 185 85 140 Q 85 100 105 85 Q 125 75 145 85 L 145 65 Q 120 50 75 70 Z"
          fill="url(#servicesLogoGradient1)"
          opacity="0.95"
        />
      </g>

      <g filter="url(#servicesLogoShadow)">
        <path
          d="M 160 65 Q 200 50 230 75 Q 250 90 250 115 Q 245 135 210 145 L 210 165 Q 250 155 255 120 Q 260 80 230 55 Q 195 30 160 45 Z"
          fill="url(#servicesLogoGradient2)"
          opacity="0.95"
        />

        <path
          d="M 175 145 Q 145 155 135 180 Q 125 205 145 225 Q 175 245 210 225 Q 235 210 240 180 L 220 175 Q 215 200 195 215 Q 170 230 155 215 Q 140 205 145 185 Q 155 165 185 160 Z"
          fill="url(#servicesLogoGradient3)"
          opacity="0.95"
        />
      </g>

      <g opacity="0.14">
        <text
          x="140"
          y="155"
          fontFamily="Inter, -apple-system, system-ui, sans-serif"
          fontSize="48"
          fontWeight="800"
          textAnchor="middle"
          fill="#ffffff"
        >
          GS
        </text>
      </g>

      <circle cx="35" cy="100" r="4.5" fill="#a8ff4a" opacity="0.85" />
      <circle cx="260" cy="90" r="4" fill="#64dd89" opacity="0.8" />
      <circle cx="55" cy="215" r="3.5" fill="#10a152" opacity="0.75" />
      <circle cx="240" cy="235" r="4.5" fill="#6ee849" opacity="0.8" />
    </svg>
  );
}

const services = [
  {
    number: "01",
    title: "Web Development",
    short: "Websites that are fast, clear and built to support the business.",
    description:
      "We design and develop modern websites that combine strong visual presentation with practical business functionality. From focused company websites to more complex digital platforms, every build is structured around the people who will use it.",
    capabilities: [
      "Business Websites",
      "Corporate Websites",
      "E-commerce",
      "Landing Pages",
      "Web Applications",
      "Next.js Development",
    ],
    symbol: "</>",
  },
  {
    number: "02",
    title: "Custom Software",
    short: "Purpose-built software for the way your business actually works.",
    description:
      "When off-the-shelf tools create more problems than they solve, we build software around your workflows. The goal is a connected system that removes unnecessary steps and gives your team a clearer way to work.",
    capabilities: [
      "Business Systems",
      "Admin Panels",
      "CRM Solutions",
      "Internal Tools",
      "Workflow Automation",
      "API Integrations",
    ],
    symbol: "⌘",
  },
  {
    number: "03",
    title: "Mobile Apps",
    short: "Mobile experiences designed around real user journeys.",
    description:
      "We create mobile product experiences that are simple to understand and purposeful to use. From customer applications to business-focused tools, the experience stays connected to the wider digital system.",
    capabilities: [
      "iOS Applications",
      "Android Applications",
      "Cross-platform Apps",
      "Customer Apps",
      "Business Apps",
      "App UI/UX",
    ],
    symbol: "◈",
  },
  {
    number: "04",
    title: "SaaS Platforms",
    short: "Scalable digital products designed for recurring use.",
    description:
      "We help turn product ideas into structured SaaS platforms with clear user journeys, dashboards, account experiences and the technical foundation needed to grow with the product.",
    capabilities: [
      "SaaS Products",
      "Dashboards",
      "User Accounts",
      "Subscriptions",
      "Product Architecture",
      "Platform Development",
    ],
    symbol: "◫",
  },
  {
    number: "05",
    title: "UI/UX Design",
    short: "Interfaces that make complex digital products easier to use.",
    description:
      "Good design is not decoration. We use structure, hierarchy and interaction design to make digital products easier to understand, easier to navigate and more useful for the people using them.",
    capabilities: [
      "Product UX",
      "Website UI",
      "Design Systems",
      "Wireframes",
      "User Flows",
      "Responsive Design",
    ],
    symbol: "✦",
  },
  {
    number: "06",
    title: "Digital Growth",
    short: "Digital marketing built around measurable business goals.",
    description:
      "We connect digital presence with growth activity — from content and search visibility to paid campaigns and conversion-focused improvements — so marketing works alongside the product rather than separately from it.",
    capabilities: [
      "Digital Strategy",
      "SEO",
      "Paid Campaigns",
      "Social Media",
      "Content",
      "Conversion Optimization",
    ],
    symbol: "↗",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand the problem",
    text: "We start with the business context, the users and the outcome you actually need.",
  },
  {
    number: "02",
    title: "Shape the solution",
    text: "We turn the problem into a clear product, design and technology direction.",
  },
  {
    number: "03",
    title: "Build with purpose",
    text: "Design and development work together so the final system stays useful, scalable and practical.",
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <section className="services-page-hero">
        <div className="services-page-grid" aria-hidden="true" />

        <div className="page-container services-page-hero-inner">
          <div className="services-page-hero-copy">
            <div className="services-page-eyebrow">
              <span />
              WHAT WE DO
            </div>

            <h1>
              Digital solutions
              <br />
              <span>built around your business.</span>
            </h1>

            <p>
              GreenSync brings strategy, design, development and digital
              growth together to create useful systems for modern businesses.
            </p>

            <div className="services-page-hero-actions">
              <Link href="/contact" className="services-page-primary">
                Start a Project
                <span aria-hidden="true">↗</span>
              </Link>

              <a href="#services-list" className="services-page-secondary">
                Explore Services
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="services-page-hero-visual" aria-hidden="true">
            <div className="services-page-orbit services-page-orbit-one" />
            <div className="services-page-orbit services-page-orbit-two" />
            <div className="services-page-orbit services-page-orbit-three" />

            <div className="services-page-core">
              <GreenSyncLogo />
              <small>GREENSYNC</small>
            </div>

            <div className="services-page-floating services-page-floating-one">
              <strong>Strategy</strong>
              <small>Understand</small>
            </div>

            <div className="services-page-floating services-page-floating-two">
              <strong>Design</strong>
              <small>Shape</small>
            </div>

            <div className="services-page-floating services-page-floating-three">
              <strong>Technology</strong>
              <small>Build</small>
            </div>
          </div>
        </div>
      </section>

      <section id="services-list" className="services-page-list-section">
        <div className="page-container">
          <div className="services-page-section-intro">
            <div className="services-page-section-label">
              <span />
              OUR SERVICES
            </div>

            <div>
              <h2>
                One team.
                <br />
                <span>Multiple capabilities.</span>
              </h2>

              <p>
                Whether you need a new digital presence, a business system,
                a product or a growth engine, we can bring the right
                disciplines together around the problem.
              </p>
            </div>
          </div>

          <div className="services-page-cards">
            {services.map((service) => (
              <article className="services-page-card" key={service.number}>
                <div className="services-page-card-top">
                  <span className="services-page-number">{service.number}</span>
                  <span className="services-page-symbol">{service.symbol}</span>
                </div>

                <div className="services-page-card-main">
                  <h3>{service.title}</h3>
                  <p className="services-page-card-short">{service.short}</p>
                  <p className="services-page-card-description">
                    {service.description}
                  </p>
                </div>

                <div className="services-page-capabilities">
                  {service.capabilities.map((capability) => (
                    <span key={capability}>{capability}</span>
                  ))}
                </div>

                <Link href="/contact" className="services-page-card-link">
                  Discuss this service
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-page-approach">
        <div className="page-container">
          <div className="services-page-approach-heading">
            <div className="services-page-section-label">
              <span />
              HOW WE WORK
            </div>

            <div>
              <h2>
                The service changes.
                <br />
                <span>The thinking stays connected.</span>
              </h2>
            </div>
          </div>

          <div className="services-page-approach-grid">
            {approach.map((item) => (
              <div className="services-page-approach-card" key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-page-fit">
        <div className="page-container">
          <div className="services-page-fit-card">
            <div>
              <span className="services-page-fit-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Not sure what
                <br />
                you need yet?
              </h2>

              <p>
                That&apos;s okay. Tell us about the business problem, the idea
                or the goal. We&apos;ll help you turn it into a practical
                digital direction.
              </p>
            </div>

            <Link href="/contact" className="services-page-fit-button">
              Tell Us About Your Project
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
