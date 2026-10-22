import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ItsGreenSync",
  description:
    "Learn how ItsGreenSync may collect, use, disclose, and protect information when you visit our website or contact us about our services.",
  robots: { index: true, follow: true },
};

type PrivacySection = {
  id: string;
  title: string;
  content: string[];
  bullets?: string[];
  ending?: string;
};

const sections: PrivacySection[] = [
  {
    id: "scope",
    title: "1. Scope of This Policy",
    content: [
      "This Privacy Policy explains how ItsGreenSync handles information when you visit our website, contact us, submit an enquiry, or engage with our digital and technology-related services.",
      "The information we collect depends on how you interact with us. A separate notice or agreement may apply to a particular product, project, event, or service. If that notice conflicts with this policy for the relevant activity, the specific notice will apply to the extent stated in it.",
    ],
  },
  {
    id: "information",
    title: "2. Information We May Collect",
    content: ["Depending on your interaction with us, we may collect the following categories of information:"],
    bullets: [
      "Contact details, such as your name, email address, phone number, business name, and the information you include in a message or enquiry.",
      "Project and service information, such as requirements, feedback, files, content, and details needed to provide a requested service.",
      "Account or transaction details where relevant to a service, subscription, invoice, or payment. Payment card or banking information may be handled by the applicable payment provider rather than stored directly by us.",
      "Technical and usage information, such as IP address, browser and device type, pages viewed, referral information, and approximate interaction timestamps, where collected by our website, hosting provider, or enabled tools.",
      "Communications and preferences, including messages sent to us and your choices about receiving updates or marketing communications.",
    ],
    ending: "Please avoid sending passwords, payment credentials, government identity numbers, or other sensitive information through general enquiry forms unless it is specifically required and an appropriate secure method has been provided.",
  },
  {
    id: "sources",
    title: "3. How Information Is Collected",
    content: [
      "We may receive information directly from you when you fill out a form, email or call us, request a quotation, provide project materials, or otherwise communicate with us.",
      "Some technical information may be collected automatically when you use the website. We may also receive relevant information from service providers or business partners when it is necessary to respond to your request or provide an agreed service, and where permitted by applicable law.",
    ],
  },
  {
    id: "purposes",
    title: "4. How We Use Information",
    content: ["We may use information for purposes such as:"],
    bullets: [
      "Responding to enquiries, preparing proposals, and communicating with you.",
      "Delivering, maintaining, troubleshooting, and improving our website and services.",
      "Managing projects, customer relationships, billing, records, and support requests.",
      "Protecting our systems, preventing misuse or fraud, and investigating security incidents.",
      "Understanding website usage and improving content, performance, and user experience.",
      "Sending service-related notices and, where permitted and appropriate, marketing communications that you can opt out of.",
      "Meeting legal obligations and establishing, exercising, or defending legal claims where necessary.",
    ],
  },
  {
    id: "legal-basis",
    title: "5. Lawful Grounds for Processing",
    content: [
      "Where applicable law requires a lawful ground for processing personal information, we will rely on an appropriate ground for the relevant activity. Depending on the circumstances, this may include your consent, taking steps at your request before entering into a contract, performing a contract, complying with a legal obligation, or another ground permitted by applicable law.",
      "Where processing is based on consent, you may withdraw it as permitted by law. Withdrawal does not affect processing that took place before the withdrawal or processing that may lawfully continue on another ground.",
    ],
  },
  {
    id: "cookies",
    title: "6. Cookies and Similar Technologies",
    content: [
      "Our website or its service providers may use cookies, local storage, pixels, logs, or similar technologies to support site functionality, remember preferences, understand traffic, and help protect the website.",
      "The specific technologies used depend on the features and third-party tools enabled on the website. You may be able to manage cookies through your browser settings. Blocking certain cookies may affect some website features. If a cookie banner or preference tool is provided, you can use it to manage the choices offered there.",
    ],
  },
  {
    id: "sharing",
    title: "7. When We May Share Information",
    content: ["We do not publish your personal information as a general practice. We may share relevant information in limited circumstances, including:"],
    bullets: [
      "With hosting, infrastructure, analytics, communications, payment, security, or other service providers that help operate our website or deliver requested services.",
      "With your authorization or at your direction, such as when you ask us to work with another provider on your project.",
      "With professional advisers or insurers where reasonably necessary for business operations or legal matters.",
      "Where disclosure is required by law, a valid legal process, or a competent authority, or is reasonably necessary to protect rights, safety, and security.",
      "In connection with a proposed or completed business reorganisation or transfer, subject to appropriate safeguards and applicable law.",
    ],
    ending: "Service providers are expected to handle information in accordance with their applicable obligations and the arrangements governing their services. Their own privacy notices may also apply to information they collect directly.",
  },
  {
    id: "third-party",
    title: "8. Third-Party Websites and Services",
    content: [
      "Our website may contain links to third-party websites, platforms, or tools. Those third parties operate independently and may have their own privacy policies and terms.",
      "We do not control the privacy practices of independent third parties. Before submitting information to them, please review their policies and make sure you are comfortable with how they handle your information.",
    ],
  },
  {
    id: "retention",
    title: "9. Data Retention",
    content: [
      "We keep personal information only for as long as reasonably necessary for the purposes described in this policy, including providing services, maintaining business and financial records, resolving disputes, enforcing agreements, and meeting applicable legal requirements.",
      "Retention periods may vary depending on the type of information, the nature of the relationship, and any legal or operational requirements. When information is no longer required, we will take reasonable steps to delete it, anonymise it, or securely dispose of it, subject to applicable law and legitimate recordkeeping needs.",
    ],
  },
  {
    id: "security",
    title: "10. Information Security",
    content: [
      "We use reasonable technical, organisational, and administrative measures designed to protect information against unauthorised access, loss, misuse, alteration, or disclosure.",
      "No website, network, transmission, or storage system can be guaranteed to be completely secure. You should use appropriate care when sharing information online and notify us promptly if you believe information provided to us has been compromised.",
    ],
  },
  {
    id: "rights",
    title: "11. Your Choices and Privacy Rights",
    content: [
      "Depending on your location and applicable law, you may have rights to request access to, correction of, or deletion of certain personal information; withdraw consent; object to or restrict certain processing; or raise a complaint with a relevant authority.",
      "You may also ask us to stop sending promotional communications by following an unsubscribe instruction, where available, or contacting us. We may need to verify your identity and clarify your request before acting. Some information may need to be retained or processed to comply with law or to establish, exercise, or defend legal claims.",
      "To make a privacy-related request, use the contact details or contact page listed below. We will handle requests in accordance with applicable law and within any required timeframe.",
    ],
  },
  {
    id: "children",
    title: "12. Children’s Privacy",
    content: [
      "Our website and business services are not intended to knowingly collect personal information from children in circumstances where parental consent or other safeguards are required. If you believe a child has provided personal information to us inappropriately, please contact us so we can review the matter and take appropriate action as required by law.",
    ],
  },
  {
    id: "transfers",
    title: "13. International Data Handling",
    content: [
      "Some service providers or technology infrastructure may process or store information in locations outside your state or country. Where cross-border handling occurs, we will take steps required by applicable law and use appropriate safeguards where necessary.",
    ],
  },
  {
    id: "business-clients",
    title: "14. Client Projects and Third-Party Data",
    content: [
      "When providing development, hosting, marketing, automation, or other services, we may process information supplied by a client or made available through systems the client authorises us to access. The client is responsible for ensuring that it has the rights and permissions needed to provide that information and to instruct us to process it.",
      "Our handling of information in a client project may also be governed by the relevant service agreement, project instructions, confidentiality terms, and applicable law. We will use such information for the agreed purposes and as otherwise permitted or required by law.",
    ],
  },
  {
    id: "changes",
    title: "15. Changes to This Privacy Policy",
    content: [
      "We may update this policy to reflect changes in our services, website features, business practices, or legal requirements. The revised version will be published on this page with an updated date.",
      "Please review this page periodically. Where required by applicable law, we will provide notice of material changes or obtain consent for new processing activities.",
    ],
  },
  {
    id: "contact-details",
    title: "16. Contact Us",
    content: [
      "If you have questions about this Privacy Policy or wish to make a privacy-related request, please contact ItsGreenSync through the contact page on our website. Include enough information for us to understand your request, but do not include passwords or unnecessary sensitive information.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="igs-privacy">
      <style>{`
.igs-privacy {
  --privacy-green: var(--green, #67e89a);
  --privacy-border: var(--border, rgba(255,255,255,.09));
  --privacy-soft: var(--text-soft, #b5c3bd);
  --privacy-muted: var(--text-muted, #71817a);
  min-height: 100vh;
  padding-bottom: 100px;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 78% 0%, rgba(103,232,154,.08), transparent 32rem),
    var(--bg, #07100d);
  color: var(--text, #f2f7f4);
  font-family: "DM Sans", sans-serif;
}
.igs-privacy * { box-sizing: border-box; }
.igs-privacy a { color: inherit; text-decoration: none; }
.igs-privacy-hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-bottom: 1px solid var(--privacy-border);
}
.igs-privacy-hero::before,
.igs-privacy-hero::after {
  position: absolute;
  z-index: -1;
  content: "";
  pointer-events: none;
  border: 1px solid var(--green-border, rgba(103,232,154,.22));
  border-radius: 50%;
}
.igs-privacy-hero::before { width: 560px; height: 560px; top: -390px; right: -100px; }
.igs-privacy-hero::after { width: 380px; height: 380px; top: -295px; right: -10px; }
.igs-privacy-hero-inner {
  width: min(calc(100% - 48px), 1240px);
  margin: 0 auto;
  padding: 92px 0 72px;
}
.igs-privacy-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border: 1px solid var(--green-border, rgba(103,232,154,.22));
  border-radius: 999px;
  background: var(--green-soft, rgba(103,232,154,.1));
  color: var(--privacy-green);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
}
.igs-privacy-eyebrow-dot { width: 7px; height: 7px; border-radius: 50%; background: currentColor; box-shadow: 0 0 0 5px rgba(103,232,154,.08); }
.igs-privacy-title {
  max-width: 850px;
  margin: 24px 0 0;
  font-family: "Manrope", sans-serif;
  font-size: clamp(42px, 6vw, 76px);
  font-weight: 800;
  line-height: .99;
  letter-spacing: -.065em;
}
.igs-privacy-title span { color: var(--privacy-green); }
.igs-privacy-lead {
  max-width: 660px;
  margin: 22px 0 0;
  color: var(--privacy-soft);
  font-size: 16px;
  line-height: 1.85;
}
.igs-privacy-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 28px;
}
.igs-privacy-meta span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 34px;
  padding: 7px 11px;
  border: 1px solid var(--privacy-border);
  border-radius: 999px;
  color: var(--privacy-soft);
  font-size: 11px;
}
.igs-privacy-meta-mark { color: var(--privacy-green); font-size: 14px; }
.igs-privacy-layout {
  display: grid;
  grid-template-columns: 255px minmax(0, 1fr);
  align-items: start;
  gap: 42px;
  width: min(calc(100% - 48px), 1240px);
  margin: 0 auto;
  padding-top: 48px;
}
.igs-privacy-sidebar { position: sticky; top: 105px; min-width: 0; }
.igs-privacy-toc {
  padding: 22px 16px 18px;
  border: 1px solid var(--privacy-border);
  border-radius: 20px;
  background: var(--surface, #0f1d18);
  box-shadow: var(--shadow, 0 25px 80px rgba(0,0,0,.2));
}
.igs-privacy-toc-heading {
  margin: 0 0 14px;
  padding: 0 10px 14px;
  border-bottom: 1px solid var(--privacy-border);
  color: var(--privacy-muted);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .15em;
  text-transform: uppercase;
}
.igs-privacy-toc nav { display: grid; gap: 3px; }
.igs-privacy-toc a {
  display: block;
  padding: 9px 10px;
  border-radius: 9px;
  color: var(--privacy-soft);
  font-size: 11px;
  line-height: 1.45;
  transition: color .2s ease, background .2s ease;
}
.igs-privacy-toc a:hover,
.igs-privacy-toc a:focus-visible {
  outline: none;
  background: var(--green-soft, rgba(103,232,154,.1));
  color: var(--privacy-green);
}
.igs-privacy-content { min-width: 0; }
.igs-privacy-notice {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 15px;
  align-items: start;
  margin-bottom: 22px;
  padding: 22px;
  border: 1px solid var(--green-border, rgba(103,232,154,.22));
  border-radius: 18px;
  background: linear-gradient(120deg, var(--green-soft, rgba(103,232,154,.1)), transparent 85%), var(--surface, #0f1d18);
}
.igs-privacy-notice-icon {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid var(--green-border, rgba(103,232,154,.22));
  border-radius: 13px;
  background: var(--green-soft, rgba(103,232,154,.1));
  color: var(--privacy-green);
  font-size: 18px;
}
.igs-privacy-notice h2 { margin: 1px 0 6px; font-family: "Manrope", sans-serif; font-size: 15px; letter-spacing: -.02em; }
.igs-privacy-notice p { margin: 0; color: var(--privacy-soft); font-size: 12px; line-height: 1.8; }
.igs-privacy-sections { display: grid; gap: 14px; }
.igs-privacy-section {
  scroll-margin-top: 105px;
  padding: 28px 30px 29px;
  border: 1px solid var(--privacy-border);
  border-radius: 18px;
  background: var(--surface, #0f1d18);
  transition: border-color .2s ease, transform .2s ease;
}
.igs-privacy-section:hover { border-color: var(--green-border, rgba(103,232,154,.22)); }
.igs-privacy-section-heading { display: flex; align-items: flex-start; gap: 15px; }
.igs-privacy-section-number {
  display: grid;
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 1px solid var(--green-border, rgba(103,232,154,.22));
  border-radius: 11px;
  background: var(--green-soft, rgba(103,232,154,.1));
  color: var(--privacy-green);
  font-family: "Manrope", sans-serif;
  font-size: 11px;
  font-weight: 800;
}
.igs-privacy-section h2 {
  margin: 4px 0 0;
  font-family: "Manrope", sans-serif;
  font-size: clamp(17px, 2vw, 21px);
  line-height: 1.35;
  font-weight: 700;
  letter-spacing: -.035em;
}
.igs-privacy-section-body {
  margin: 18px 0 0 51px;
  color: var(--privacy-soft);
  font-size: 13px;
  line-height: 1.9;
  overflow-wrap: anywhere;
}
.igs-privacy-section-body p { margin: 0 0 13px; }
.igs-privacy-section-body p:last-child { margin-bottom: 0; }
.igs-privacy-section-body ul { display: grid; gap: 9px; margin: 14px 0 16px; padding: 0; list-style: none; }
.igs-privacy-section-body li { position: relative; padding-left: 21px; }
.igs-privacy-section-body li::before {
  position: absolute;
  top: .8em;
  left: 2px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--privacy-green);
  content: "";
}
.igs-privacy-contact {
  margin-top: 16px;
  padding: 30px;
  border: 1px solid var(--green-border, rgba(103,232,154,.22));
  border-radius: 20px;
  background: radial-gradient(ellipse at 100% 0%, rgba(103,232,154,.11), transparent 55%), var(--surface, #0f1d18);
}
.igs-privacy-contact-kicker { color: var(--privacy-green); font-size: 10px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; }
.igs-privacy-contact h2 { margin: 10px 0 0; font-family: "Manrope", sans-serif; font-size: 27px; letter-spacing: -.045em; }
.igs-privacy-contact p { max-width: 680px; margin: 12px 0 0; color: var(--privacy-soft); font-size: 13px; line-height: 1.85; }
.igs-privacy-contact-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 22px;
  padding: 12px 17px;
  border: 1px solid var(--privacy-green);
  border-radius: 999px;
  background: var(--privacy-green);
  color: #06110b !important;
  font-size: 12px;
  font-weight: 700;
  transition: transform .2s ease, background .2s ease;
}
.igs-privacy-contact-link:hover { transform: translateY(-2px); background: var(--green-bright, #8affb3); }
.igs-privacy-disclaimer { margin: 20px 4px 0; color: var(--privacy-muted); font-size: 11px; line-height: 1.8; }
@media (max-width: 900px) {
  .igs-privacy-layout { grid-template-columns: 1fr; gap: 25px; padding-top: 28px; }
  .igs-privacy-sidebar { position: static; }
  .igs-privacy-toc { padding: 18px; }
  .igs-privacy-toc nav { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .igs-privacy-toc a { padding: 8px 9px; }
  .igs-privacy-hero-inner { padding: 72px 0 55px; }
}
@media (max-width: 560px) {
  .igs-privacy { padding-bottom: 60px; }
  .igs-privacy-hero-inner,
  .igs-privacy-layout { width: min(calc(100% - 32px), 1240px); }
  .igs-privacy-hero-inner { padding: 54px 0 42px; }
  .igs-privacy-title { font-size: clamp(39px, 12vw, 56px); }
  .igs-privacy-lead { margin-top: 17px; font-size: 14px; line-height: 1.8; }
  .igs-privacy-meta { margin-top: 20px; }
  .igs-privacy-layout { padding-top: 22px; }
  .igs-privacy-toc { padding: 16px 12px 12px; border-radius: 15px; }
  .igs-privacy-toc nav { grid-template-columns: 1fr; max-height: 240px; overflow-y: auto; }
  .igs-privacy-notice { grid-template-columns: 34px minmax(0,1fr); gap: 11px; padding: 16px; }
  .igs-privacy-notice-icon { width: 34px; height: 34px; border-radius: 10px; }
  .igs-privacy-section { padding: 20px 17px 21px; border-radius: 15px; }
  .igs-privacy-section-heading { gap: 11px; }
  .igs-privacy-section-number { flex-basis: 32px; width: 32px; height: 32px; border-radius: 9px; }
  .igs-privacy-section h2 { margin-top: 3px; font-size: 17px; }
  .igs-privacy-section-body { margin: 15px 0 0; font-size: 12px; line-height: 1.85; }
  .igs-privacy-contact { padding: 23px 19px; border-radius: 16px; }
  .igs-privacy-contact h2 { font-size: 24px; }
  .igs-privacy-contact-link { width: 100%; justify-content: center; }
}
@media (prefers-reduced-motion: reduce) {
  .igs-privacy *, .igs-privacy *::before, .igs-privacy *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; }
}
`}</style>

      <header className="igs-privacy-hero">
        <div className="igs-privacy-hero-inner">
          <div className="igs-privacy-eyebrow">
            <span className="igs-privacy-eyebrow-dot" aria-hidden="true" />
            Legal information
          </div>
          <h1 className="igs-privacy-title">
            Privacy <span>Policy.</span>
          </h1>
          <p className="igs-privacy-lead">
            Your information matters. This policy explains what information ItsGreenSync may collect,
            how it may be used, and the choices available to you when you visit our website or work with us.
          </p>
          <div className="igs-privacy-meta">
            <span><b className="igs-privacy-meta-mark" aria-hidden="true">◷</b> Last updated: October 22, 2026</span>
            <span><b className="igs-privacy-meta-mark" aria-hidden="true">§</b> 16 sections</span>
            <span><b className="igs-privacy-meta-mark" aria-hidden="true">↗</b> Website &amp; services</span>
          </div>
        </div>
      </header>

      <div className="igs-privacy-layout">
        <aside className="igs-privacy-sidebar">
          <div className="igs-privacy-toc">
            <h2 className="igs-privacy-toc-heading">On this page</h2>
            <nav aria-label="Privacy Policy sections">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>{section.title}</a>
              ))}
              <a href="#contact">Contact ItsGreenSync</a>
            </nav>
          </div>
        </aside>

        <article className="igs-privacy-content">
          <div className="igs-privacy-notice">
            <div className="igs-privacy-notice-icon" aria-hidden="true">i</div>
            <div>
              <h2>A note about this policy</h2>
              <p>
                This page describes general privacy practices. The exact information collected depends on the
                website features and services in use. Please adapt this policy to your actual tools, data flows,
                business details, and legal obligations before publishing it.
              </p>
            </div>
          </div>

          <div className="igs-privacy-sections">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="igs-privacy-section">
                <div className="igs-privacy-section-heading">
                  <span className="igs-privacy-section-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2>{section.title.replace(/^\d+\.\s*/, "")}</h2>
                </div>
                <div className="igs-privacy-section-body">
                  {section.content.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                  {section.ending && <p>{section.ending}</p>}
                </div>
              </section>
            ))}
          </div>

          <section id="contact" className="igs-privacy-contact">
            <span className="igs-privacy-contact-kicker">Privacy questions?</span>
            <h2>Your privacy, taken seriously.</h2>
            <p>
              Contact us if you have a question about this policy, want to exercise a privacy right,
              or need clarification about how information is handled for a service.
            </p>
            <a href="/contact" className="igs-privacy-contact-link">
              Contact us <span aria-hidden="true">↗</span>
            </a>
          </section>

          <p className="igs-privacy-disclaimer">
            This is a general privacy policy template and is not legal advice. Before publication, confirm that it
            accurately reflects the information your website and service providers collect, the tools you use,
            your operating entity, and the laws applicable to your business.
          </p>
        </article>
      </div>
    </main>
  );
}
