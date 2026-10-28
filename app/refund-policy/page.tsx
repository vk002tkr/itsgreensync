import Link from "next/link";


const policyStyles = `
.policy-page{--p-green:var(--green,#67e89a);--p-border:var(--border,rgba(255,255,255,.1));--p-soft:var(--text-soft,#b5c3bd);min-height:100vh;padding-bottom:90px;background:radial-gradient(ellipse at 80% 0%,rgba(103,232,154,.09),transparent 32rem),var(--bg,#07100d);color:var(--text,#f2f7f4);font-family:inherit}
.policy-page *{box-sizing:border-box}.policy-hero{border-bottom:1px solid var(--p-border);position:relative;overflow:hidden}.policy-hero:after{content:"";position:absolute;width:440px;height:440px;border:1px solid rgba(103,232,154,.18);border-radius:50%;right:-100px;top:-300px;box-shadow:0 0 0 65px rgba(103,232,154,.025),0 0 0 130px rgba(103,232,154,.02);pointer-events:none}.policy-hero-inner{width:min(calc(100% - 48px),1120px);margin:auto;padding:88px 0 66px;position:relative;z-index:1}.policy-kicker{display:inline-flex;align-items:center;gap:10px;color:var(--p-green);font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}.policy-kicker:before{content:"";width:28px;height:1px;background:currentColor}.policy-title{margin:22px 0 18px;font-size:clamp(44px,7vw,76px);line-height:.98;letter-spacing:-.065em;font-weight:800}.policy-title span{color:var(--p-green)}.policy-lead{max-width:760px;color:var(--p-soft);font-size:17px;line-height:1.8;margin:0}.policy-meta{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px;color:var(--p-soft);font-size:12px}.policy-meta span{padding:8px 12px;border:1px solid var(--p-border);border-radius:999px;background:rgba(255,255,255,.025)}.policy-layout{width:min(calc(100% - 48px),1120px);margin:42px auto 0;display:grid;grid-template-columns:250px minmax(0,1fr);gap:44px;align-items:start}.policy-sidebar{position:sticky;top:28px;border:1px solid var(--p-border);border-radius:18px;padding:22px;background:rgba(255,255,255,.025)}.policy-sidebar h2{font-size:12px;letter-spacing:.12em;text-transform:uppercase;margin:0 0 15px}.policy-sidebar nav{display:flex;flex-direction:column;gap:4px}.policy-sidebar a{padding:9px 10px;border-radius:9px;color:var(--p-soft);font-size:13px;text-decoration:none;line-height:1.45}.policy-sidebar a:hover{color:var(--p-green);background:rgba(103,232,154,.07)}.policy-content{min-width:0}.policy-notice{display:flex;gap:14px;padding:19px;border:1px solid rgba(103,232,154,.2);border-radius:15px;background:rgba(103,232,154,.055);margin-bottom:18px}.policy-notice-icon{flex:0 0 28px;width:28px;height:28px;display:grid;place-items:center;border-radius:50%;background:rgba(103,232,154,.12);color:var(--p-green);font-weight:800}.policy-notice h2{font-size:15px;margin:2px 0 6px}.policy-notice p{font-size:13px;line-height:1.75;color:var(--p-soft);margin:0}.policy-section{padding:26px 0;border-bottom:1px solid var(--p-border);scroll-margin-top:30px}.policy-section-head{display:flex;gap:14px;align-items:flex-start;margin-bottom:13px}.policy-number{flex:0 0 35px;width:35px;height:35px;border:1px solid rgba(103,232,154,.22);border-radius:10px;display:grid;place-items:center;color:var(--p-green);font-size:11px;font-weight:800}.policy-section h2{font-size:clamp(19px,2.5vw,24px);letter-spacing:-.035em;margin:4px 0 0}.policy-body p,.policy-body li{font-size:14px;line-height:1.85;color:var(--p-soft)}.policy-body p{margin:10px 0}.policy-body ul{padding-left:22px;margin:10px 0}.policy-body li{padding:3px 0}.policy-contact{margin-top:30px;padding:28px;border:1px solid var(--p-border);border-radius:18px;background:linear-gradient(135deg,rgba(103,232,154,.09),rgba(255,255,255,.02))}.policy-contact-label{font-size:10px;color:var(--p-green);font-weight:800;letter-spacing:.15em;text-transform:uppercase}.policy-contact h2{font-size:clamp(24px,4vw,34px);letter-spacing:-.04em;margin:10px 0}.policy-contact p{max-width:650px;color:var(--p-soft);font-size:14px;line-height:1.8}.policy-contact a{display:inline-flex;margin-top:8px;padding:12px 16px;border-radius:10px;background:var(--p-green);color:#06110b;text-decoration:none;font-size:13px;font-weight:800}.policy-disclaimer{margin:22px 0 0;color:var(--p-soft);font-size:11px;line-height:1.8;opacity:.8}
@media(max-width:800px){.policy-hero-inner{padding:65px 0 48px}.policy-layout{grid-template-columns:1fr;gap:22px;margin-top:25px}.policy-sidebar{position:static}.policy-sidebar nav{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.policy-lead{font-size:15px}.policy-section{padding:22px 0}}
@media(max-width:480px){.policy-hero-inner,.policy-layout{width:min(calc(100% - 32px),1120px)}.policy-sidebar nav{grid-template-columns:1fr}.policy-notice{padding:15px}.policy-contact{padding:22px}.policy-meta{gap:7px}.policy-meta span{font-size:11px}}
@media(prefers-reduced-motion:reduce){.policy-page *{scroll-behavior:auto!important;transition:none!important}}
`;


const sections = [
  { id: "scope", title: "Scope of This Policy" },
  { id: "requesting", title: "Requesting a Refund" },
  { id: "before-work", title: "Before Work Begins" },
  { id: "after-work", title: "After Work Has Commenced" },
  { id: "milestones", title: "Milestones, Deliverables, and Approvals" },
  { id: "third-party", title: "Third-Party Costs" },
  { id: "exceptions", title: "Service Issues and Exceptions" },
  { id: "processing", title: "Refund Decisions and Processing" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function RefundPolicyPage() {
  return (
    <main className="policy-page">
      <style>{policyStyles}</style>
      <header className="policy-hero">
        <div className="policy-hero-inner">
          <div className="policy-kicker">Legal information</div>
          <h1 className="policy-title">Refund <span>Policy.</span></h1>
          <p className="policy-lead">This policy explains how GreenSync reviews refund requests for digital services, including work that has not yet started, projects already in progress, and costs committed to third-party providers.</p>
          <div className="policy-meta"><span>Last updated: October 28, 2026</span><span>GreenSync policies</span><span>Digital services</span></div>
        </div>
      </header>
      <div className="policy-layout">
        <aside className="policy-sidebar"><h2>On this page</h2><nav aria-label="Refund navigation">            <a href="#scope">Scope of This Policy</a>
            <a href="#requesting">Requesting a Refund</a>
            <a href="#before-work">Before Work Begins</a>
            <a href="#after-work">After Work Has Commenced</a>
            <a href="#milestones">Milestones, Deliverables, and Approvals</a>
            <a href="#third-party">Third-Party Costs</a>
            <a href="#exceptions">Service Issues and Exceptions</a>
            <a href="#processing">Refund Decisions and Processing</a>
            <a href="#changes">Changes to This Policy</a>
            <a href="#contact">Contact Us</a>
            <a href="#policy-contact">Contact GreenSync</a></nav></aside>
        <article className="policy-content">
          <div className="policy-notice"><div className="policy-notice-icon" aria-hidden="true">i</div><div><h2>Important information</h2><p>Refund eligibility depends on the service agreement, whether work has started, the value of work completed, and any costs already committed. We assess requests individually; this page does not promise an automatic refund in every situation.</p></div></div>
          <div>
          <section id="scope" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">01</span><h2>Scope of This Policy</h2></div>
            <div className="policy-body">
              <p>This Refund Policy applies to paid digital services provided by GreenSync, including website design and development, software development, digital product work, consulting, design, and digital marketing services. The scope of each engagement, deliverables, fees, payment milestones, and any service-specific terms should be confirmed in the relevant proposal, order, invoice, or written agreement.</p>
            </div>
          </section>
          <section id="requesting" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">02</span><h2>Requesting a Refund</h2></div>
            <div className="policy-body">
              <p>To request a refund, contact us through our website contact page or the email address stated in your proposal or invoice. Include your name, project or invoice reference, the service purchased, the payment date, and the reason for the request. We may ask for reasonable additional information to assess the request.</p>
            </div>
          </section>
          <section id="before-work" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">03</span><h2>Before Work Begins</h2></div>
            <div className="policy-body">
              <p>If you request cancellation and a refund before work has begun, we will review the request and may refund amounts paid, less any non-recoverable third-party charges or other costs already incurred for your project, where permitted by the applicable agreement and law. A refund is not automatic and depends on the work status, payment terms, and costs already committed.</p>
            </div>
          </section>
          <section id="after-work" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">04</span><h2>After Work Has Commenced</h2></div>
            <div className="policy-body">
              <p>Once work has started, we will review the request in light of the work completed, project milestones achieved, time or resources already used, deliverables supplied, and non-recoverable costs. Any refund, if approved, may be reduced by the reasonable value of work performed and costs incurred. We will explain the basis of our decision.</p>
            </div>
          </section>
          <section id="milestones" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">05</span><h2>Milestones, Deliverables, and Approvals</h2></div>
            <div className="policy-body">
              <p>Where a project uses milestone payments, fees for completed or accepted milestones are generally not refundable, except where required by applicable law or expressly agreed in writing. If only part of a project has been completed, any refund assessment will take account of the completed work and the remaining unperformed scope.</p>
            </div>
          </section>
          <section id="third-party" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">06</span><h2>Third-Party Costs</h2></div>
            <div className="policy-body">
              <p>Domain registrations, hosting, paid themes, plugins, software licences, stock assets, advertising spend, payment processing fees where non-refundable, and other third-party purchases may be non-refundable once ordered or charged by the provider. We will identify such costs where reasonably possible. Third-party providers may have separate terms that apply directly to you.</p>
            </div>
          </section>
          <section id="exceptions" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">07</span><h2>Service Issues and Exceptions</h2></div>
            <div className="policy-body">
              <p>If you believe a deliverable materially differs from the agreed written scope, please notify us promptly and provide details so we can assess and, where appropriate, correct the issue. We may offer a correction, revised delivery, partial credit, or other reasonable resolution depending on the circumstances and agreement. Nothing in this policy limits any rights that cannot lawfully be excluded.</p>
            </div>
          </section>
          <section id="processing" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">08</span><h2>Refund Decisions and Processing</h2></div>
            <div className="policy-body">
              <p>We will communicate the outcome after reviewing the available information. Approved refunds will generally be sent to the original payment method where possible. The time for the funds to appear depends on the payment provider and financial institution. We cannot control their processing times.</p>
            </div>
          </section>
          <section id="changes" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">09</span><h2>Changes to This Policy</h2></div>
            <div className="policy-body">
              <p>We may update this policy when our services or processes change. The version published on this page applies subject to any mandatory legal requirements and the specific written terms agreed for your project.</p>
            </div>
          </section>
          <section id="contact" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">10</span><h2>Contact Us</h2></div>
            <div className="policy-body">
              <p>For refund questions or requests, please use our website contact page. Please do not send passwords, full payment-card details, or other unnecessary sensitive information.</p>
            </div>
          </section>
          </div>
          <section id="policy-contact" className="policy-contact"><span className="policy-contact-label">Need help?</span><h2>Let&apos;s talk it through.</h2><p>If you have a question about this Refund Policy or need to submit a request, contact GreenSync with your project or invoice reference.</p><Link href="/contact">Contact GreenSync <span aria-hidden="true">↗</span></Link></section>
          <p className="policy-disclaimer">This policy is a general business template, not legal advice. Before publishing, confirm that it reflects GreenSync&apos;s actual practices, contracts, payment provider terms, business details, and applicable legal obligations. If a specific written agreement or mandatory law gives you a different right, that agreement or law will govern to the extent applicable.</p>
        </article>
      </div>
    </main>
  );
}
