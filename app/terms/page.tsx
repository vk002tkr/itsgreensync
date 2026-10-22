import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | ItsGreenSync",
  description:
    "Read the terms and conditions governing the use of ItsGreenSync's website, digital services, software solutions, and client engagements.",
  robots: { index: true, follow: true },
};

type TermsSection = {
  id: string;
  title: string;
  content: string[];
  bullets?: string[];
  ending?: string;
};

const sections: TermsSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      "These Terms & Conditions govern your access to and use of the ItsGreenSync website, services, digital products, and related communications.",
      "By accessing our website, submitting an enquiry, purchasing a service, or entering into a project agreement with us, you agree to these terms to the extent applicable to your engagement. If you do not agree, please discontinue use of the website and do not purchase our services.",
      "Additional written agreements, proposals, statements of work, or service-specific terms may apply to particular projects. Where terms conflict, the applicable signed agreement will take precedence for that project.",
    ],
  },
  {
    id: "services",
    title: "2. Our Services",
    content: [
      "ItsGreenSync provides digital and technology-related services, which may include:",
    ],
    bullets: [
      "Website design, development, maintenance, and optimization.",
      "Custom software development and business automation solutions.",
      "Mobile application design and development.",
      "Software-as-a-Service (SaaS) products and related solutions.",
      "User interface and user experience (UI/UX) design.",
      "Digital marketing, online advertising, and social media services.",
      "Technical consultation and other services expressly agreed with a client.",
    ],
    ending:
      "The exact deliverables, features, timelines, dependencies, and fees for a project will be defined in the relevant proposal, quotation, or written agreement. We may update or discontinue publicly offered services, subject to existing contractual commitments.",
  },
  {
    id: "eligibility",
    title: "3. Eligibility and Account Information",
    content: [
      "You must have the legal capacity to enter into a binding agreement to purchase our services. If you act on behalf of a company or another organization, you confirm that you are authorized to represent that organization.",
      "You agree to provide accurate, current, and complete information when submitting enquiries, placing orders, or working with us. You are responsible for keeping any account credentials confidential and for activities carried out through your account, subject to applicable law.",
    ],
  },
  {
    id: "engagement",
    title: "4. Project Scope and Client Responsibilities",
    content: [
      "Project work will be performed according to the agreed scope, specifications, deliverables, and milestones. Requests that fall outside the agreed scope may require a revised quotation, additional charges, or an updated timeline.",
      "Clients agree to:",
    ],
    bullets: [
      "Provide accurate requirements, instructions, content, assets, and approvals.",
      "Supply required access to relevant websites, hosting accounts, platforms, APIs, and other systems.",
      "Ensure they have the necessary rights and permissions to use all materials supplied to us.",
      "Review deliverables and provide feedback or approvals within agreed timeframes.",
      "Maintain appropriate backups and secure access to their own accounts and systems.",
      "Ensure that their intended use of our services complies with applicable laws.",
    ],
    ending:
      "Delays caused by missing information, delayed approvals, third-party dependencies, or changes requested by the client may affect delivery dates and project costs.",
  },
  {
    id: "pricing",
    title: "5. Pricing, Payments, and Taxes",
    content: [
      "Prices, payment schedules, deposits, recurring charges, and applicable taxes will be communicated in the relevant quotation, invoice, subscription plan, or written agreement.",
      "Unless otherwise agreed in writing, invoices must be paid by the stated due date. Work may be paused if an undisputed payment remains overdue after reasonable notice. Any consequences of late payment will be subject to the applicable agreement and law.",
      "Clients are responsible for applicable taxes, duties, or government charges unless the relevant quotation or applicable law provides otherwise.",
      "A payment confirmation does not by itself mean that every project deliverable has been accepted or that all contractual obligations have been completed.",
    ],
  },
  {
    id: "revisions",
    title: "6. Revisions, Changes, and Acceptance",
    content: [
      "The number of revisions, review stages, and acceptance criteria will be determined by the relevant proposal or agreement. Where no revision allowance has been specified, additional changes may be quoted separately.",
      "A material change to approved designs, functionality, content, integrations, or requirements may be treated as additional work.",
      "Clients should review deliverables promptly and report any discrepancies against the agreed specifications. Acceptance, testing periods, and the handling of reported defects will follow the applicable project agreement.",
    ],
  },
  {
    id: "ip",
    title: "7. Intellectual Property Rights",
    content: [
      "Each party retains ownership of its pre-existing intellectual property, including materials, software, tools, trademarks, methods, and other assets it owned or developed independently before the project.",
      "Ownership of project-specific deliverables, source code, design files, and other commissioned materials will be governed by the relevant written agreement. Where an agreement provides for transfer of ownership, that transfer will take effect subject to its stated conditions, including any applicable payment requirements.",
      "Unless expressly transferred or licensed in writing, we retain rights in our pre-existing tools, reusable components, frameworks, processes, and general know-how incorporated into or used to create a deliverable.",
      "Clients must not copy, redistribute, resell, or commercially exploit our proprietary materials except as permitted by an applicable licence or written agreement.",
    ],
  },
  {
    id: "third-party",
    title: "8. Third-Party Services and Software",
    content: [
      "Our services may rely on third-party platforms and providers, including hosting services, domain registrars, payment gateways, APIs, analytics tools, advertising platforms, app marketplaces, and open-source software.",
      "Third-party services may have their own terms, fees, privacy policies, technical requirements, and usage restrictions. Clients are responsible for charges associated with third-party services allocated to them under the relevant agreement.",
      "We do not control independent third-party services and cannot guarantee their uninterrupted availability, continued features, pricing, compatibility, or policies. We will address third-party dependencies according to the scope of our agreed responsibilities.",
    ],
  },
  {
    id: "marketing",
    title: "9. Digital Marketing and Performance",
    content: [
      "Digital marketing results depend on multiple factors, including competition, audience behaviour, advertising budgets, platform policies, website performance, market conditions, and the quality of supplied information.",
      "Unless expressly guaranteed in a written agreement, we do not guarantee specific rankings, traffic volumes, leads, sales, revenue, conversion rates, or advertising outcomes.",
      "Advertising spend, platform fees, creative production, and other campaign costs will be handled as stated in the relevant proposal. Clients remain responsible for ensuring that claims, offers, products, and materials they provide for publication are lawful and accurate.",
    ],
  },
  {
    id: "acceptable-use",
    title: "10. Acceptable Use",
    content: [
      "You agree not to use our website or services to:",
    ],
    bullets: [
      "Engage in unlawful, fraudulent, deceptive, or abusive activity.",
      "Distribute malware, malicious code, or unauthorized access tools.",
      "Infringe intellectual property, privacy, publicity, or other legal rights.",
      "Attempt to compromise the security or availability of our systems.",
      "Submit false, misleading, harmful, or unauthorized content.",
      "Interfere with other users or misuse any service beyond its permitted purpose.",
    ],
    ending:
      "We may investigate suspected misuse and take proportionate action, including restricting access or suspending affected services where reasonably necessary and legally permitted.",
  },
  {
    id: "confidentiality",
    title: "11. Confidentiality and Privacy",
    content: [
      "Both parties should take reasonable steps to protect confidential information received during a project and use it only for legitimate purposes connected with the engagement, subject to applicable law and any separate confidentiality agreement.",
      "Personal information submitted through our website or services will be handled in accordance with our Privacy Policy and applicable data protection laws. These Terms & Conditions should be read together with that policy.",
      "Clients should not share passwords or sensitive information through insecure channels where a more appropriate secure method is available.",
    ],
  },
  {
    id: "warranties",
    title: "12. Warranties and Service Limitations",
    content: [
      "We will provide our services with reasonable care and skill, subject to the scope and commitments in the applicable agreement.",
      "Except for commitments expressly made in writing and warranties that cannot lawfully be excluded, the website and its general informational content are provided on an as-available basis. We do not warrant that the website will always be uninterrupted, error-free, or compatible with every device or third-party system.",
      "Any maintenance, support, security updates, service-level commitments, or post-launch warranty periods must be determined by the relevant service agreement.",
    ],
  },
  {
    id: "liability",
    title: "13. Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, neither party will be liable to the other for indirect or consequential losses that are not recoverable under the applicable agreement or law.",
      "Any agreed limitation or cap on liability will be set out in the applicable written agreement. Nothing in these terms excludes or limits liability where such exclusion or limitation is prohibited by law, including any applicable rights or remedies that cannot lawfully be waived.",
      "Clients remain responsible for maintaining appropriate backups, protecting their credentials, reviewing their own business and legal requirements, and making independent decisions about the use of digital products and services.",
    ],
  },
  {
    id: "indemnity",
    title: "14. Client-Supplied Materials and Claims",
    content: [
      "You are responsible for ensuring that content, data, images, trademarks, instructions, and other materials you supply may lawfully be used for the intended purpose.",
      "Where permitted by law and subject to the applicable agreement, you may be responsible for losses or claims arising directly from unlawful client-supplied materials, your misuse of our services, or your material breach of these terms. This section does not remove any rights or obligations that cannot legally be excluded.",
    ],
  },
  {
    id: "termination",
    title: "15. Suspension and Termination",
    content: [
      "Either party may end a project or service in accordance with the applicable written agreement. If no termination procedure has been agreed, the parties should communicate in writing and comply with applicable law.",
      "On termination, the client remains responsible for fees properly due for work completed, authorised expenses, and any other amounts payable under the applicable agreement or law.",
      "Provisions that by their nature should continue after termination, including applicable payment obligations, intellectual property rights, confidentiality, and liability provisions, will survive to the extent legally enforceable.",
    ],
  },
  {
    id: "changes",
    title: "16. Changes to These Terms",
    content: [
      "We may revise these Terms & Conditions from time to time to reflect changes in our services, business practices, or legal requirements. The updated version will be published on this page with a revised effective or last-updated date.",
      "Updated terms will apply to future use from their stated effective date, subject to applicable law and any existing contract. Material changes to an ongoing engagement may require notice, agreement, or another procedure prescribed by law.",
    ],
  },
  {
    id: "law",
    title: "17. Governing Law and Disputes",
    content: [
      "These terms are subject to the laws applicable to the contracting parties and their engagement, without overriding any mandatory consumer protection or other rights that apply by law.",
      "The parties should first attempt to resolve disputes through good-faith communication. Any applicable mediation, arbitration, or court proceedings will be governed by the relevant written agreement and applicable law.",
    ],
  },
  {
    id: "general",
    title: "18. General Provisions",
    content: [
      "If any provision of these terms is found unenforceable, the remaining provisions will continue to apply to the extent permitted by law.",
      "A failure to enforce a provision on one occasion does not automatically waive the right to enforce it later.",
      "These terms, together with any applicable written project agreement and referenced policies, form the terms governing the relevant use or engagement. They do not override a separately signed agreement where that agreement expressly takes precedence.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="igs-terms">
      <style>{`
.igs-terms {
  --terms-green: var(--green, #67e89a);
  --terms-border: var(--border, rgba(255,255,255,.09));
  --terms-soft: var(--text-soft, #b5c3bd);
  --terms-muted: var(--text-muted, #71817a);
  min-height: 100vh;
  padding-bottom: 100px;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 78% 0%, rgba(103,232,154,.08), transparent 32rem),
    var(--bg, #07100d);
  color: var(--text, #f2f7f4);
  font-family: "DM Sans", sans-serif;
}
.igs-terms * { box-sizing: border-box; }
.igs-terms a { color: inherit; text-decoration: none; }
.igs-terms-hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-bottom: 1px solid var(--terms-border);
}
.igs-terms-hero::before,
.igs-terms-hero::after {
  position: absolute;
  z-index: -1;
  content: "";
  pointer-events: none;
  border: 1px solid var(--green-border, rgba(103,232,154,.22));
  border-radius: 50%;
}
.igs-terms-hero::before { width: 560px; height: 560px; top: -390px; right: -100px; }
.igs-terms-hero::after { width: 380px; height: 380px; top: -295px; right: -10px; }
.igs-terms-hero-inner {
  width: min(calc(100% - 48px), 1240px);
  margin: 0 auto;
  padding: 92px 0 72px;
}
.igs-terms-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border: 1px solid var(--green-border, rgba(103,232,154,.22));
  border-radius: 999px;
  background: var(--green-soft, rgba(103,232,154,.1));
  color: var(--terms-green);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
}
.igs-terms-eyebrow-dot { width: 7px; height: 7px; border-radius: 50%; background: currentColor; box-shadow: 0 0 0 5px rgba(103,232,154,.08); }
.igs-terms-title {
  max-width: 850px;
  margin: 24px 0 0;
  font-family: "Manrope", sans-serif;
  font-size: clamp(42px, 6vw, 76px);
  font-weight: 800;
  line-height: .99;
  letter-spacing: -.065em;
}
.igs-terms-title span { color: var(--terms-green); }
.igs-terms-lead {
  max-width: 660px;
  margin: 22px 0 0;
  color: var(--terms-soft);
  font-size: 16px;
  line-height: 1.85;
}
.igs-terms-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 28px;
}
.igs-terms-meta span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 34px;
  padding: 7px 11px;
  border: 1px solid var(--terms-border);
  border-radius: 999px;
  color: var(--terms-soft);
  font-size: 11px;
}
.igs-terms-meta-mark { color: var(--terms-green); font-size: 14px; }
.igs-terms-layout {
  display: grid;
  grid-template-columns: 255px minmax(0, 1fr);
  align-items: start;
  gap: 42px;
  width: min(calc(100% - 48px), 1240px);
  margin: 0 auto;
  padding-top: 48px;
}
.igs-terms-sidebar { position: sticky; top: 105px; min-width: 0; }
.igs-terms-toc {
  padding: 22px 16px 18px;
  border: 1px solid var(--terms-border);
  border-radius: 20px;
  background: var(--surface, #0f1d18);
  box-shadow: var(--shadow, 0 25px 80px rgba(0,0,0,.2));
}
.igs-terms-toc-heading {
  margin: 0 0 14px;
  padding: 0 10px 14px;
  border-bottom: 1px solid var(--terms-border);
  color: var(--terms-muted);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .15em;
  text-transform: uppercase;
}
.igs-terms-toc nav { display: grid; gap: 3px; }
.igs-terms-toc a {
  display: block;
  padding: 9px 10px;
  border-radius: 9px;
  color: var(--terms-soft);
  font-size: 11px;
  line-height: 1.45;
  transition: color .2s ease, background .2s ease;
}
.igs-terms-toc a:hover,
.igs-terms-toc a:focus-visible {
  outline: none;
  background: var(--green-soft, rgba(103,232,154,.1));
  color: var(--terms-green);
}
.igs-terms-content { min-width: 0; }
.igs-terms-notice {
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
.igs-terms-notice-icon {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid var(--green-border, rgba(103,232,154,.22));
  border-radius: 13px;
  background: var(--green-soft, rgba(103,232,154,.1));
  color: var(--terms-green);
  font-size: 18px;
}
.igs-terms-notice h2 { margin: 1px 0 6px; font-family: "Manrope", sans-serif; font-size: 15px; letter-spacing: -.02em; }
.igs-terms-notice p { margin: 0; color: var(--terms-soft); font-size: 12px; line-height: 1.8; }
.igs-terms-sections { display: grid; gap: 14px; }
.igs-terms-section {
  scroll-margin-top: 105px;
  padding: 28px 30px 29px;
  border: 1px solid var(--terms-border);
  border-radius: 18px;
  background: var(--surface, #0f1d18);
  transition: border-color .2s ease, transform .2s ease;
}
.igs-terms-section:hover { border-color: var(--green-border, rgba(103,232,154,.22)); }
.igs-terms-section-heading { display: flex; align-items: flex-start; gap: 15px; }
.igs-terms-section-number {
  display: grid;
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 1px solid var(--green-border, rgba(103,232,154,.22));
  border-radius: 11px;
  background: var(--green-soft, rgba(103,232,154,.1));
  color: var(--terms-green);
  font-family: "Manrope", sans-serif;
  font-size: 11px;
  font-weight: 800;
}
.igs-terms-section h2 {
  margin: 4px 0 0;
  font-family: "Manrope", sans-serif;
  font-size: clamp(17px, 2vw, 21px);
  line-height: 1.35;
  font-weight: 700;
  letter-spacing: -.035em;
}
.igs-terms-section-body {
  margin: 18px 0 0 51px;
  color: var(--terms-soft);
  font-size: 13px;
  line-height: 1.9;
  overflow-wrap: anywhere;
}
.igs-terms-section-body p { margin: 0 0 13px; }
.igs-terms-section-body p:last-child { margin-bottom: 0; }
.igs-terms-section-body ul { display: grid; gap: 9px; margin: 14px 0 16px; padding: 0; list-style: none; }
.igs-terms-section-body li { position: relative; padding-left: 21px; }
.igs-terms-section-body li::before {
  position: absolute;
  top: .8em;
  left: 2px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--terms-green);
  content: "";
}
.igs-terms-contact {
  margin-top: 16px;
  padding: 30px;
  border: 1px solid var(--green-border, rgba(103,232,154,.22));
  border-radius: 20px;
  background: radial-gradient(ellipse at 100% 0%, rgba(103,232,154,.11), transparent 55%), var(--surface, #0f1d18);
}
.igs-terms-contact-kicker { color: var(--terms-green); font-size: 10px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; }
.igs-terms-contact h2 { margin: 10px 0 0; font-family: "Manrope", sans-serif; font-size: 27px; letter-spacing: -.045em; }
.igs-terms-contact p { max-width: 680px; margin: 12px 0 0; color: var(--terms-soft); font-size: 13px; line-height: 1.85; }
.igs-terms-contact-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 22px;
  padding: 12px 17px;
  border: 1px solid var(--terms-green);
  border-radius: 999px;
  background: var(--terms-green);
  color: #06110b !important;
  font-size: 12px;
  font-weight: 700;
  transition: transform .2s ease, background .2s ease;
}
.igs-terms-contact-link:hover { transform: translateY(-2px); background: var(--green-bright, #8affb3); }
.igs-terms-disclaimer { margin: 20px 4px 0; color: var(--terms-muted); font-size: 11px; line-height: 1.8; }
@media (max-width: 900px) {
  .igs-terms-layout { grid-template-columns: 1fr; gap: 25px; padding-top: 28px; }
  .igs-terms-sidebar { position: static; }
  .igs-terms-toc { padding: 18px; }
  .igs-terms-toc nav { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .igs-terms-toc a { padding: 8px 9px; }
  .igs-terms-hero-inner { padding: 72px 0 55px; }
}
@media (max-width: 560px) {
  .igs-terms { padding-bottom: 60px; }
  .igs-terms-hero-inner,
  .igs-terms-layout { width: min(calc(100% - 32px), 1240px); }
  .igs-terms-hero-inner { padding: 54px 0 42px; }
  .igs-terms-title { font-size: clamp(39px, 12vw, 56px); }
  .igs-terms-lead { margin-top: 17px; font-size: 14px; line-height: 1.8; }
  .igs-terms-meta { margin-top: 20px; }
  .igs-terms-layout { padding-top: 22px; }
  .igs-terms-toc { padding: 16px 12px 12px; border-radius: 15px; }
  .igs-terms-toc nav { grid-template-columns: 1fr; max-height: 240px; overflow-y: auto; }
  .igs-terms-notice { grid-template-columns: 34px minmax(0,1fr); gap: 11px; padding: 16px; }
  .igs-terms-notice-icon { width: 34px; height: 34px; border-radius: 10px; }
  .igs-terms-section { padding: 20px 17px 21px; border-radius: 15px; }
  .igs-terms-section-heading { gap: 11px; }
  .igs-terms-section-number { flex-basis: 32px; width: 32px; height: 32px; border-radius: 9px; }
  .igs-terms-section h2 { margin-top: 3px; font-size: 17px; }
  .igs-terms-section-body { margin: 15px 0 0; font-size: 12px; line-height: 1.85; }
  .igs-terms-contact { padding: 23px 19px; border-radius: 16px; }
  .igs-terms-contact h2 { font-size: 24px; }
  .igs-terms-contact-link { width: 100%; justify-content: center; }
}
@media (prefers-reduced-motion: reduce) {
  .igs-terms *, .igs-terms *::before, .igs-terms *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; }
}
`}</style>

      <header className="igs-terms-hero">
        <div className="igs-terms-hero-inner">
          <div className="igs-terms-eyebrow">
            <span className="igs-terms-eyebrow-dot" aria-hidden="true" />
            Legal information
          </div>
          <h1 className="igs-terms-title">
            Terms <span>&amp; Conditions.</span>
          </h1>
          <p className="igs-terms-lead">
            Clear expectations. Transparent engagements. Responsible digital
            partnerships. Please read these terms carefully before using
            ItsGreenSync or engaging our services.
          </p>
          <div className="igs-terms-meta">
            <span><b className="igs-terms-meta-mark" aria-hidden="true">◷</b> Last updated: October 22, 2026</span>
            <span><b className="igs-terms-meta-mark" aria-hidden="true">§</b> 19 sections</span>
            <span><b className="igs-terms-meta-mark" aria-hidden="true">↗</b> Website &amp; services</span>
          </div>
        </div>
      </header>

      <div className="igs-terms-layout">
        <aside className="igs-terms-sidebar">
          <div className="igs-terms-toc">
            <h2 className="igs-terms-toc-heading">On this page</h2>
            <nav aria-label="Terms and Conditions sections">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>{section.title}</a>
              ))}
              <a href="#contact">19. Contact Us</a>
            </nav>
          </div>
        </aside>

        <article className="igs-terms-content">
          <div className="igs-terms-notice">
            <div className="igs-terms-notice-icon" aria-hidden="true">i</div>
            <div>
              <h2>Before you get started</h2>
              <p>
                These terms explain the general conditions for using our website
                and engaging our services. Project-specific quotations,
                contracts, subscriptions, and service agreements may contain
                additional terms that apply to your engagement.
              </p>
            </div>
          </div>

          <div className="igs-terms-sections">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="igs-terms-section">
                <div className="igs-terms-section-heading">
                  <span className="igs-terms-section-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2>{section.title.replace(/^\d+\.\s*/, "")}</h2>
                </div>
                <div className="igs-terms-section-body">
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

          <section id="contact" className="igs-terms-contact">
            <span className="igs-terms-contact-kicker">Need clarification?</span>
            <h2>Contact ItsGreenSync</h2>
            <p>
              If you have questions about these Terms &amp; Conditions, need
              clarification about a project, or would like to discuss our
              services, please contact us through our website.
            </p>
            <a href="/contact" className="igs-terms-contact-link">
              Contact us <span aria-hidden="true">↗</span>
            </a>
          </section>

          <p className="igs-terms-disclaimer">
            These terms are a general website and service-terms template. They
            should be reviewed and adapted to the operating legal entity,
            applicable jurisdiction, actual service arrangements, and applicable
            laws before publication.
          </p>
        </article>
      </div>
    </main>
  );
}
