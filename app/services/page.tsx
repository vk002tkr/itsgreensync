"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    label: "WEB DEVELOPMENT",
    title: "Websites that work as hard as you do.",
    description:
      "Fast, thoughtful websites built around your business goals—not a template that looks like everyone else.",
    items: ["Business & corporate websites", "Landing pages", "E-commerce experiences", "SEO-ready foundations"],
  },
  {
    number: "02",
    label: "CUSTOM SOFTWARE",
    title: "Tools built for the way you work.",
    description:
      "Replace scattered processes with practical software, dashboards and systems designed for your team's real workflow.",
    items: ["Admin panels & dashboards", "CRM and business tools", "Workflow automation", "API integrations"],
  },
  {
    number: "03",
    label: "MOBILE APPLICATIONS",
    title: "Useful experiences, wherever work happens.",
    description:
      "Mobile products that make it easier for customers and teams to get things done, on the move.",
    items: ["Android applications", "iOS applications", "Cross-platform products", "Customer and team apps"],
  },
  {
    number: "04",
    label: "SAAS PLATFORMS",
    title: "Turn a strong idea into a real product.",
    description:
      "From the first product flow to user accounts and dashboards, build a platform with room to grow.",
    items: ["Product planning", "User accounts & roles", "Subscription flows", "Scalable architecture"],
  },
  {
    number: "05",
    label: "UI/UX DESIGN",
    title: "Make the complicated feel simple.",
    description:
      "Clear structure, considered interactions and responsive interfaces that help people find their way.",
    items: ["Website and product UI", "User journeys", "Wireframes & prototypes", "Design systems"],
  },
  {
    number: "06",
    label: "DIGITAL GROWTH",
    title: "Help the right people find you.",
    description:
      "Connect your digital presence with practical marketing that supports visibility, enquiries and conversions.",
    items: ["Search engine optimisation", "Paid campaigns", "Social media strategy", "Content & conversion improvements"],
  },
];

const comparisons = [
  ["Speed", "Usually slows down as plugins pile up", "Lean, performance-minded builds"],
  ["Design", "Generic layouts shared by competitors", "Original, aligned to your brand"],
  ["Updates", "Plugin conflicts and fragile fixes", "Clear, maintainable code"],
  ["SEO", "Often added on afterwards", "Considered from the structure up"],
  ["Ownership", "Tied to a platform's limitations", "Your website and your content"],
  ["Support", "Helpdesk queues and hand-offs", "A team that understands your project"],
];

const pricing = [
  {
    label: "LANDING & BROCHURE",
    price: "From $1,800",
    description:
      "Focused websites for new businesses, campaigns and clear single offers. Designed around the message you need to communicate.",
    featured: false,
  },
  {
    label: "BUSINESS WEBSITE",
    price: "From $3,600",
    description:
      "A polished multi-page website with a clear structure, responsive design and a strong foundation for search visibility.",
    featured: true,
  },
  {
    label: "ECOMMERCE & SYSTEMS",
    price: "From $5,800",
    description:
      "Online stores, booking flows, dashboards and larger builds scoped around your catalogue and how your business operates.",
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <main className="gs-services">
      <section className="gs-hero">
        <div className="gs-hero-orb gs-hero-orb-one" />
        <div className="gs-hero-orb gs-hero-orb-two" />
        <div className="gs-container gs-hero-grid">
          <div className="gs-hero-copy">
            <div className="gs-eyebrow"><span /> DIGITAL SERVICES FOR REAL BUSINESSES</div>
            <h1>Good digital work.<br /><em>Built around you.</em></h1>
            <p>
              From your first website to the software that runs your business,
              GreenSync brings design, development and digital growth together
              to solve real problems.
            </p>
            <div className="gs-actions">
              <Link className="gs-button gs-button-dark" href="/contact">Tell us about your project <span>↗</span></Link>
              <a className="gs-text-link" href="#gs-services-list">Explore our services <span>↓</span></a>
            </div>
            <div className="gs-proof"><span className="gs-proof-dot" /> Strategy, design and technology—working as one.</div>
          </div>
          <div className="gs-hero-art" aria-hidden="true">
            <div className="gs-art-ring gs-art-ring-one" />
            <div className="gs-art-ring gs-art-ring-two" />
            <div className="gs-art-ring gs-art-ring-three" />
            <div className="gs-art-center"><span className="gs-mark">G</span><b>GREENSYNC</b><small>BUILD · CONNECT · GROW</small></div>
            <div className="gs-float gs-float-a"><span>01</span><b>Strategy</b><small>Find the right direction</small></div>
            <div className="gs-float gs-float-b"><span>02</span><b>Design</b><small>Make it feel effortless</small></div>
            <div className="gs-float gs-float-c"><span>03</span><b>Technology</b><small>Build it to last</small></div>
            <div className="gs-art-glow" />
          </div>
        </div>
        <div className="gs-service-strip"><div className="gs-container gs-strip-inner">{services.map((s) => <a key={s.number} href={`#service-${s.number}`}><span>{s.number}</span>{s.label}</a>)}</div></div>
      </section>

      <section id="gs-services-list" className="gs-services-section gs-container">
        <div className="gs-section-heading">
          <div><div className="gs-eyebrow gs-eyebrow-muted"><span /> WHAT WE DO</div><h2>Everything you need<br /><em>to move forward.</em></h2></div>
          <p>One connected team for the digital work that helps your business show up, run better and grow with confidence.</p>
        </div>
        <div className="gs-service-cards">
          {services.map((service) => (
            <article className="gs-service-card" id={`service-${service.number}`} key={service.number}>
              <div className="gs-card-top"><span>{service.number}</span><span className="gs-card-arrow">↗</span></div>
              <div className="gs-card-label">{service.label}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>{service.items.map((item) => <li key={item}><span>↗</span>{item}</li>)}</ul>
              <Link href="/contact" className="gs-card-link">Discuss this service <span>↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="gs-compare-section">
        <div className="gs-container gs-compare-layout">
          <div className="gs-compare-intro">
            <div className="gs-eyebrow"><span /> THE DIFFERENCE</div>
            <h2>The real cost of<br /><em>a template site.</em></h2>
            <p>Drag-and-drop builders can feel cheap at first. But when plugins break, performance drops or your needs change, the trade-offs start to show.</p>
          </div>
          <div className="gs-table-wrap"><table className="gs-compare-table"><thead><tr><th>WHAT MATTERS</th><th>TEMPLATE BUILDERS</th><th>GREENSYNC CUSTOM BUILD</th></tr></thead><tbody>{comparisons.map((row) => <tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td><td>{row[2]}</td></tr>)}</tbody></table></div>
        </div>
      </section>

      <section className="gs-pricing-section">
        <div className="gs-container">
          <div className="gs-pricing-heading"><div className="gs-eyebrow gs-eyebrow-muted"><span /> WHAT IT COSTS</div><h2>Honest, project-based<br />pricing.</h2><p>Every project is scoped to the business, so we quote around your goals, features and timeline—not a one-size-fits-all price list.</p></div>
          <div className="gs-pricing-grid">{pricing.map((plan) => <article key={plan.label} className={`gs-price-card${plan.featured ? " gs-price-featured" : ""}`}><div className="gs-card-label">{plan.label}</div>{plan.featured && <div className="gs-popular">MOST POPULAR</div>}<h3>{plan.price}</h3><p>{plan.description}</p><Link href="/contact" className="gs-button gs-button-dark">Get a quote <span>↗</span></Link></article>)}</div>
        </div>
      </section>

      <section className="gs-cta-section gs-container"><div className="gs-cta-card"><div className="gs-cta-dots" /><div className="gs-eyebrow gs-cta-eyebrow"><span /> HAVE A PROJECT IN MIND?</div><h2>Not sure what you need?<br />Start with a conversation.</h2><p>Tell us what you are building. We will help you work out the right next step—with honest advice and no unnecessary jargon.</p><Link href="/contact" className="gs-button gs-button-light">Send a project enquiry <span>↗</span></Link><div className="gs-cta-orb" /></div></section>

      <style jsx>{`
        .gs-services{--ink:#1c2c39;--muted:#5d7080;--paper:#f3f0e8;--card:#fffdf8;--orange:#ffb000;--green:#8de06b;background:var(--paper);color:var(--ink);font-family:inherit;overflow:hidden}
        .gs-container{width:min(1180px,calc(100% - 56px));margin:0 auto}
        .gs-hero{position:relative;background:#102c38;color:#f7f4ed;overflow:hidden}
        .gs-hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:62px 62px;mask-image:linear-gradient(to bottom,black,transparent 94%);pointer-events:none}
        .gs-hero-grid{position:relative;z-index:1;min-height:660px;display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:40px;padding-top:68px;padding-bottom:72px}
        .gs-hero-orb{position:absolute;border-radius:50%;filter:blur(2px);pointer-events:none}.gs-hero-orb-one{width:550px;height:550px;right:-100px;top:-210px;background:radial-gradient(circle,rgba(141,224,107,.15),transparent 68%)}.gs-hero-orb-two{width:450px;height:450px;left:-240px;bottom:-300px;background:radial-gradient(circle,rgba(255,176,0,.10),transparent 70%)}
        .gs-eyebrow{display:flex;align-items:center;gap:10px;font-size:10px;letter-spacing:.17em;font-weight:800;color:var(--orange);line-height:1.5}.gs-eyebrow>span{width:27px;height:1px;background:currentColor;display:inline-block}.gs-hero-copy h1{font-size:clamp(46px,5.8vw,78px);letter-spacing:-.065em;line-height:.99;margin:25px 0 22px;font-weight:750}.gs-hero-copy h1 em,.gs-section-heading h2 em,.gs-compare-intro h2 em{font-style:normal;color:var(--green)}.gs-hero-copy>p{max-width:535px;color:#c0cbd0;font-size:16px;line-height:1.85;margin:0}.gs-actions{display:flex;align-items:center;gap:25px;flex-wrap:wrap;margin-top:30px}.gs-button{display:inline-flex;align-items:center;justify-content:center;gap:17px;padding:14px 19px;border-radius:999px;font-size:12px;font-weight:800;text-decoration:none;transition:transform .2s ease,background .2s ease}.gs-button:hover{transform:translateY(-2px)}.gs-button-dark{background:var(--ink);color:white}.gs-button-dark:hover{background:#2b4252}.gs-text-link{color:#e7ecee;text-decoration:none;font-size:12px;font-weight:700}.gs-text-link span{margin-left:7px;color:var(--orange)}.gs-proof{margin-top:45px;display:flex;align-items:center;gap:10px;color:#aebfc4;font-size:11px}.gs-proof-dot{width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 14px rgba(141,224,107,.8)}
        .gs-hero-art{height:470px;position:relative;display:grid;place-items:center}.gs-art-ring{position:absolute;border:1px solid rgba(141,224,107,.22);border-radius:50%;aspect-ratio:1;left:50%;top:50%;transform:translate(-50%,-50%)}.gs-art-ring-one{width:290px}.gs-art-ring-two{width:390px;border-style:dashed;animation:gs-spin 38s linear infinite}.gs-art-ring-three{width:455px;border-color:rgba(255,176,0,.18)}.gs-art-center{position:relative;z-index:2;width:200px;height:200px;border:1px solid rgba(141,224,107,.45);border-radius:50%;background:radial-gradient(circle at 40% 25%,#244a4b,#102c38 72%);box-shadow:0 0 80px rgba(141,224,107,.12),inset 0 0 30px rgba(141,224,107,.08);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px}.gs-mark{font-size:78px;line-height:1;font-weight:800;letter-spacing:-.1em;color:var(--green);text-shadow:0 0 32px rgba(141,224,107,.35)}.gs-art-center b{font-size:10px;letter-spacing:.2em}.gs-art-center small{font-size:7px;letter-spacing:.13em;color:#a5b9b7}.gs-float{position:absolute;z-index:3;display:flex;flex-direction:column;gap:5px;padding:15px 17px;background:rgba(18,48,57,.92);border:1px solid rgba(180,218,190,.2);border-radius:12px;box-shadow:0 16px 40px rgba(0,0,0,.18);min-width:170px}.gs-float>span{color:var(--orange);font-size:9px;font-weight:800}.gs-float b{font-size:14px}.gs-float small{color:#a9bdc1;font-size:10px}.gs-float-a{top:62px;left:0}.gs-float-b{top:165px;right:-8px}.gs-float-c{bottom:65px;left:40px}.gs-art-glow{position:absolute;width:220px;height:220px;border-radius:50%;background:rgba(141,224,107,.1);filter:blur(55px)}
        .gs-service-strip{position:relative;z-index:2;border-top:1px solid rgba(255,255,255,.12);background:rgba(5,24,32,.23)}.gs-strip-inner{display:grid;grid-template-columns:repeat(6,1fr);gap:14px;padding-top:21px;padding-bottom:21px}.gs-strip-inner a{display:flex;flex-direction:column;gap:8px;color:#dce5e5;text-decoration:none;font-size:9px;font-weight:700;letter-spacing:.07em}.gs-strip-inner a span{color:var(--green);font-size:10px}
        .gs-services-section{padding-top:110px;padding-bottom:115px}.gs-section-heading{display:grid;grid-template-columns:1fr .6fr;gap:45px;align-items:end}.gs-eyebrow-muted{color:#788999}.gs-section-heading h2,.gs-compare-intro h2{font-size:clamp(42px,5vw,64px);line-height:1.02;letter-spacing:-.06em;margin:20px 0 0}.gs-section-heading h2 em{color:#648b63}.gs-section-heading>p{color:var(--muted);font-size:15px;line-height:1.85;max-width:400px;margin:0 0 6px}.gs-service-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:17px;margin-top:52px}.gs-service-card{scroll-margin-top:110px;background:var(--card);border:1px solid rgba(28,44,57,.1);border-radius:18px;padding:25px 25px 23px;min-height:405px;display:flex;flex-direction:column;box-shadow:0 8px 30px rgba(35,44,49,.025);transition:transform .22s ease,border-color .22s ease,box-shadow .22s ease}.gs-service-card:hover{transform:translateY(-5px);border-color:rgba(102,144,91,.5);box-shadow:0 18px 45px rgba(35,44,49,.07)}.gs-card-top{display:flex;align-items:center;justify-content:space-between;color:#80909a;font-size:11px}.gs-card-arrow{display:grid;place-items:center;width:34px;height:34px;border:1px solid rgba(28,44,57,.15);border-radius:50%;font-size:15px}.gs-card-label{font-size:9px;font-weight:800;letter-spacing:.14em;color:#b77d00;margin-top:24px}.gs-service-card h3{font-size:24px;line-height:1.15;letter-spacing:-.04em;margin:12px 0 12px}.gs-service-card>p{color:var(--muted);font-size:12px;line-height:1.8;margin:0}.gs-service-card ul{list-style:none;padding:16px 0 19px;margin:16px 0 0;border-top:1px solid rgba(28,44,57,.1);display:grid;gap:9px}.gs-service-card li{display:flex;align-items:center;gap:9px;color:#435664;font-size:11px}.gs-service-card li span{color:#789b67}.gs-card-link{margin-top:auto;padding-top:15px;border-top:1px solid rgba(28,44,57,.1);display:flex;justify-content:space-between;align-items:center;text-decoration:none;color:var(--ink);font-size:11px;font-weight:800}.gs-card-link span{color:#b77d00;font-size:16px}
        .gs-compare-section{background:#102c38;color:#f6f3ec;padding:100px 0 90px;position:relative;overflow:hidden}.gs-compare-section:after{content:"";position:absolute;width:550px;height:550px;right:-230px;bottom:-350px;border-radius:50%;background:radial-gradient(circle,rgba(141,224,107,.11),transparent 70%)}.gs-compare-layout{position:relative;z-index:1}.gs-compare-intro{max-width:640px}.gs-compare-intro h2{margin-top:22px}.gs-compare-intro>p{color:#bdc9cd;font-size:15px;line-height:1.8;max-width:600px;margin:22px 0 0}.gs-table-wrap{overflow-x:auto;margin-top:54px}.gs-compare-table{border-collapse:collapse;width:100%;min-width:660px;text-align:left}.gs-compare-table th,.gs-compare-table td{padding:19px 18px;border-bottom:1px solid rgba(255,255,255,.13);font-size:13px}.gs-compare-table thead th{font-size:10px;letter-spacing:.1em;color:#9fb2b9;font-weight:800}.gs-compare-table tbody tr:nth-child(even){background:rgba(255,255,255,.055)}.gs-compare-table tbody th{width:18%;font-size:12px;color:#fff;font-weight:800}.gs-compare-table tbody td:nth-child(2){color:#91a6b0}.gs-compare-table tbody td:nth-child(3){color:#ffb000;font-weight:750}
        .gs-pricing-section{padding:110px 0 115px;background:var(--paper)}.gs-pricing-heading{text-align:center;max-width:650px;margin:0 auto}.gs-pricing-heading .gs-eyebrow{justify-content:center}.gs-pricing-heading h2{font-size:clamp(42px,5vw,60px);line-height:1.03;letter-spacing:-.06em;margin:22px 0 18px}.gs-pricing-heading>p{color:var(--muted);font-size:15px;line-height:1.8;margin:0 auto;max-width:600px}.gs-pricing-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:25px;margin-top:54px}.gs-price-card{background:var(--card);border:1px solid rgba(28,44,57,.11);border-radius:17px;padding:30px;min-height:290px;display:flex;flex-direction:column;align-items:flex-start}.gs-price-featured{border:1.5px solid var(--ink);background:linear-gradient(145deg,#fffdf8,#fff6ed);box-shadow:0 12px 35px rgba(28,44,57,.06)}.gs-price-card .gs-card-label{margin:0}.gs-popular{margin-top:13px;color:#b77d00;font-size:9px;letter-spacing:.13em;font-weight:800}.gs-price-card h3{font-size:30px;letter-spacing:-.05em;margin:20px 0 12px}.gs-price-card p{color:var(--muted);font-size:13px;line-height:1.8;margin:0 0 25px}.gs-price-card .gs-button{margin-top:auto}
        .gs-cta-section{padding-top:0;padding-bottom:100px}.gs-cta-card{position:relative;overflow:hidden;border-radius:24px;padding:68px 76px;background:linear-gradient(112deg,#ff6942 0%,#b65e48 36%,#173e4b 100%);color:white;min-height:360px}.gs-cta-dots{position:absolute;inset:0;opacity:.12;background-image:radial-gradient(rgba(255,255,255,.75) .8px,transparent .8px);background-size:17px 17px;mask-image:linear-gradient(90deg,black,transparent 90%)}.gs-cta-eyebrow{position:relative;z-index:1;color:#fff}.gs-cta-card h2{position:relative;z-index:1;font-size:clamp(38px,4.2vw,56px);line-height:1.05;letter-spacing:-.055em;margin:20px 0 17px;max-width:780px}.gs-cta-card>p{position:relative;z-index:1;max-width:540px;color:rgba(255,255,255,.9);font-size:14px;line-height:1.8;margin:0 0 26px}.gs-button-light{position:relative;z-index:1;background:#fffdf8;color:#e45c36}.gs-cta-orb{position:absolute;width:400px;height:400px;right:-60px;top:-30px;border:1px solid rgba(255,255,255,.13);border-radius:50%;box-shadow:0 0 0 45px rgba(255,255,255,.035),0 0 0 90px rgba(255,255,255,.025)}
        @keyframes gs-spin{to{transform:translate(-50%,-50%) rotate(360deg)}}
        @media(max-width:950px){.gs-hero-grid{grid-template-columns:1fr;gap:15px;padding-top:75px}.gs-hero-copy{max-width:760px}.gs-hero-art{height:430px;max-width:600px;width:100%;margin:0 auto}.gs-strip-inner{grid-template-columns:repeat(3,1fr);row-gap:20px}.gs-service-cards{grid-template-columns:repeat(2,minmax(0,1fr))}.gs-section-heading{grid-template-columns:1fr;gap:22px}.gs-pricing-grid{gap:15px}.gs-price-card{padding:23px}.gs-cta-card{padding:55px 45px}}
        @media(max-width:620px){.gs-container{width:min(100% - 36px,1180px)}.gs-hero-grid{min-height:auto;padding-top:65px;padding-bottom:35px}.gs-hero-copy h1{font-size:clamp(43px,12vw,62px)}.gs-hero-copy>p{font-size:14px}.gs-actions{align-items:flex-start;flex-direction:column;gap:18px}.gs-proof{margin-top:30px;align-items:flex-start;line-height:1.6}.gs-hero-art{height:340px;margin-top:15px}.gs-art-ring-one{width:205px}.gs-art-ring-two{width:285px}.gs-art-ring-three{width:330px}.gs-art-center{width:145px;height:145px}.gs-mark{font-size:58px}.gs-art-center b{font-size:8px}.gs-art-center small{font-size:6px}.gs-float{min-width:0;width:140px;padding:11px;border-radius:9px}.gs-float b{font-size:12px}.gs-float small{font-size:9px}.gs-float-a{top:22px;left:0}.gs-float-b{top:116px;right:-3px}.gs-float-c{bottom:18px;left:4px}.gs-strip-inner{grid-template-columns:repeat(2,1fr);padding-top:18px;padding-bottom:18px}.gs-services-section,.gs-pricing-section{padding-top:75px;padding-bottom:75px}.gs-section-heading h2,.gs-compare-intro h2{font-size:43px}.gs-section-heading>p{font-size:13px}.gs-service-cards{grid-template-columns:1fr;margin-top:32px;gap:13px}.gs-service-card{min-height:0;padding:23px}.gs-service-card h3{font-size:25px}.gs-service-card>p{font-size:13px}.gs-compare-section{padding:75px 0 65px}.gs-compare-intro>p{font-size:13px}.gs-table-wrap{margin-top:35px;margin-right:-18px}.gs-compare-table th,.gs-compare-table td{padding:16px 13px;font-size:11px}.gs-pricing-heading h2{font-size:43px}.gs-pricing-heading>p{font-size:13px}.gs-pricing-grid{grid-template-columns:1fr;gap:13px;margin-top:34px}.gs-price-card{min-height:0;padding:25px}.gs-price-card h3{font-size:28px}.gs-cta-section{padding-bottom:65px}.gs-cta-card{padding:37px 25px;border-radius:18px;min-height:0}.gs-cta-card h2{font-size:37px}.gs-cta-card>p{font-size:13px}.gs-cta-orb{width:230px;height:230px;right:-130px;top:-90px}.gs-button{font-size:11px}}
        @media(prefers-reduced-motion:reduce){.gs-services *{animation:none!important;scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
