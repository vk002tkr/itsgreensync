import Link from "next/link";


const policyStyles = `
.policy-page{--p-green:var(--green,#67e89a);--p-border:var(--border,rgba(255,255,255,.1));--p-soft:var(--text-soft,#b5c3bd);min-height:100vh;padding-bottom:90px;background:radial-gradient(ellipse at 80% 0%,rgba(103,232,154,.09),transparent 32rem),var(--bg,#07100d);color:var(--text,#f2f7f4);font-family:inherit}
.policy-page *{box-sizing:border-box}.policy-hero{border-bottom:1px solid var(--p-border);position:relative;overflow:hidden}.policy-hero:after{content:"";position:absolute;width:440px;height:440px;border:1px solid rgba(103,232,154,.18);border-radius:50%;right:-100px;top:-300px;box-shadow:0 0 0 65px rgba(103,232,154,.025),0 0 0 130px rgba(103,232,154,.02);pointer-events:none}.policy-hero-inner{width:min(calc(100% - 48px),1120px);margin:auto;padding:88px 0 66px;position:relative;z-index:1}.policy-kicker{display:inline-flex;align-items:center;gap:10px;color:var(--p-green);font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}.policy-kicker:before{content:"";width:28px;height:1px;background:currentColor}.policy-title{margin:22px 0 18px;font-size:clamp(44px,7vw,76px);line-height:.98;letter-spacing:-.065em;font-weight:800}.policy-title span{color:var(--p-green)}.policy-lead{max-width:760px;color:var(--p-soft);font-size:17px;line-height:1.8;margin:0}.policy-meta{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px;color:var(--p-soft);font-size:12px}.policy-meta span{padding:8px 12px;border:1px solid var(--p-border);border-radius:999px;background:rgba(255,255,255,.025)}.policy-layout{width:min(calc(100% - 48px),1120px);margin:42px auto 0;display:grid;grid-template-columns:250px minmax(0,1fr);gap:44px;align-items:start}.policy-sidebar{position:sticky;top:28px;border:1px solid var(--p-border);border-radius:18px;padding:22px;background:rgba(255,255,255,.025)}.policy-sidebar h2{font-size:12px;letter-spacing:.12em;text-transform:uppercase;margin:0 0 15px}.policy-sidebar nav{display:flex;flex-direction:column;gap:4px}.policy-sidebar a{padding:9px 10px;border-radius:9px;color:var(--p-soft);font-size:13px;text-decoration:none;line-height:1.45}.policy-sidebar a:hover{color:var(--p-green);background:rgba(103,232,154,.07)}.policy-content{min-width:0}.policy-notice{display:flex;gap:14px;padding:19px;border:1px solid rgba(103,232,154,.2);border-radius:15px;background:rgba(103,232,154,.055);margin-bottom:18px}.policy-notice-icon{flex:0 0 28px;width:28px;height:28px;display:grid;place-items:center;border-radius:50%;background:rgba(103,232,154,.12);color:var(--p-green);font-weight:800}.policy-notice h2{font-size:15px;margin:2px 0 6px}.policy-notice p{font-size:13px;line-height:1.75;color:var(--p-soft);margin:0}.policy-section{padding:26px 0;border-bottom:1px solid var(--p-border);scroll-margin-top:30px}.policy-section-head{display:flex;gap:14px;align-items:flex-start;margin-bottom:13px}.policy-number{flex:0 0 35px;width:35px;height:35px;border:1px solid rgba(103,232,154,.22);border-radius:10px;display:grid;place-items:center;color:var(--p-green);font-size:11px;font-weight:800}.policy-section h2{font-size:clamp(19px,2.5vw,24px);letter-spacing:-.035em;margin:4px 0 0}.policy-body p,.policy-body li{font-size:14px;line-height:1.85;color:var(--p-soft)}.policy-body p{margin:10px 0}.policy-body ul{padding-left:22px;margin:10px 0}.policy-body li{padding:3px 0}.policy-contact{margin-top:30px;padding:28px;border:1px solid var(--p-border);border-radius:18px;background:linear-gradient(135deg,rgba(103,232,154,.09),rgba(255,255,255,.02))}.policy-contact-label{font-size:10px;color:var(--p-green);font-weight:800;letter-spacing:.15em;text-transform:uppercase}.policy-contact h2{font-size:clamp(24px,4vw,34px);letter-spacing:-.04em;margin:10px 0}.policy-contact p{max-width:650px;color:var(--p-soft);font-size:14px;line-height:1.8}.policy-contact a{display:inline-flex;margin-top:8px;padding:12px 16px;border-radius:10px;background:var(--p-green);color:#06110b;text-decoration:none;font-size:13px;font-weight:800}.policy-disclaimer{margin:22px 0 0;color:var(--p-soft);font-size:11px;line-height:1.8;opacity:.8}
@media(max-width:800px){.policy-hero-inner{padding:65px 0 48px}.policy-layout{grid-template-columns:1fr;gap:22px;margin-top:25px}.policy-sidebar{position:static}.policy-sidebar nav{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.policy-lead{font-size:15px}.policy-section{padding:22px 0}}
@media(max-width:480px){.policy-hero-inner,.policy-layout{width:min(calc(100% - 32px),1120px)}.policy-sidebar nav{grid-template-columns:1fr}.policy-notice{padding:15px}.policy-contact{padding:22px}.policy-meta{gap:7px}.policy-meta span{font-size:11px}}
@media(prefers-reduced-motion:reduce){.policy-page *{scroll-behavior:auto!important;transition:none!important}}
`;


const sections = [
  { id: "scope", title: "Scope and Relationship to Project Terms" },
  { id: "how-to-cancel", title: "How to Submit a Cancellation Request" },
  { id: "before-start", title: "Cancellation Before Work Starts" },
  { id: "after-start", title: "Cancellation After Work Starts" },
  { id: "deliverables", title: "Work Completed and Handover" },
  { id: "recurring", title: "Recurring Services and Subscriptions" },
  { id: "client-delays", title: "Client Delays or Lack of Response" },
  { id: "third-party", title: "Third-Party Services and Purchases" },
  { id: "changes", title: "Changes and Applicable Rights" },
  { id: "contact", title: "Contact Us" },
];

export default function CancellationPolicyPage() {
  return (
    <main className="policy-page">
      <style>{policyStyles}</style>
      <header className="policy-hero">
        <div className="policy-hero-inner">
          <div className="policy-kicker">Legal information</div>
          <h1 className="policy-title">Cancellation <span>Policy.</span></h1>
          <p className="policy-lead">This policy explains how to request cancellation of a GreenSync project or ongoing digital service, what happens to work in progress, and how outstanding fees, deliverables, and third-party commitments are handled.</p>
          <div className="policy-meta"><span>Last updated: October 28, 2026</span><span>GreenSync policies</span><span>Digital services</span></div>
        </div>
      </header>
      <div className="policy-layout">
        <aside className="policy-sidebar"><h2>On this page</h2><nav aria-label="Cancellation navigation">            <a href="#scope">Scope and Relationship to Project Terms</a>
            <a href="#how-to-cancel">How to Submit a Cancellation Request</a>
            <a href="#before-start">Cancellation Before Work Starts</a>
            <a href="#after-start">Cancellation After Work Starts</a>
            <a href="#deliverables">Work Completed and Handover</a>
            <a href="#recurring">Recurring Services and Subscriptions</a>
            <a href="#client-delays">Client Delays or Lack of Response</a>
            <a href="#third-party">Third-Party Services and Purchases</a>
            <a href="#changes">Changes and Applicable Rights</a>
            <a href="#contact">Contact Us</a>
            <a href="#policy-contact">Contact GreenSync</a></nav></aside>
        <article className="policy-content">
          <div className="policy-notice"><div className="policy-notice-icon" aria-hidden="true">i</div><div><h2>Important information</h2><p>Cancellation may stop future work or renewal, but it does not necessarily remove charges for work already completed or costs already committed. The applicable written agreement and mandatory law remain important.</p></div></div>
          <div>
          <section id="scope" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">01</span><h2>Scope and Relationship to Project Terms</h2></div>
            <div className="policy-body">
              <p>This Cancellation Policy applies to GreenSync digital services and project engagements. Payment schedules and cancellation terms may vary by service. Your proposal, order, invoice, statement of work, or other written agreement may contain additional details for your specific engagement.</p>
            </div>
          </section>
          <section id="how-to-cancel" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">02</span><h2>How to Submit a Cancellation Request</h2></div>
            <div className="policy-body">
              <p>Submit your request through the contact page on our website or the contact details listed in your proposal or invoice. Include your name, project or invoice reference, the service you wish to cancel, and the requested cancellation date. We will acknowledge the request and confirm the next steps in writing where reasonably practicable.</p>
            </div>
          </section>
          <section id="before-start" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">03</span><h2>Cancellation Before Work Starts</h2></div>
            <div className="policy-body">
              <p>If you cancel before work begins, we will review any amounts paid and may refund the eligible balance after accounting for non-recoverable third-party purchases or other costs already incurred, where permitted by the agreement and applicable law.</p>
            </div>
          </section>
          <section id="after-start" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">04</span><h2>Cancellation After Work Starts</h2></div>
            <div className="policy-body">
              <p>If work has begun, we may stop future work after confirming the cancellation and safe handover arrangements. Any final amount due or potential refund will be assessed by reference to completed work, milestones reached, resources already used, deliverables provided, and costs or commitments that cannot reasonably be recovered. We will explain any applicable charges or deductions.</p>
            </div>
          </section>
          <section id="deliverables" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">05</span><h2>Work Completed and Handover</h2></div>
            <div className="policy-body">
              <p>You may be asked to settle fees for completed work or approved milestones before receiving final deliverables, source files, credentials, or transfer assistance, where this is consistent with the written agreement and applicable law. We will clarify what has been completed and what can be handed over.</p>
            </div>
          </section>
          <section id="recurring" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">06</span><h2>Recurring Services and Subscriptions</h2></div>
            <div className="policy-body">
              <p>For recurring services, including ongoing maintenance, support, or marketing where offered, submit cancellation before the next billing or renewal date. Unless your written agreement states otherwise, cancellation will normally stop future renewal or service periods and will not automatically refund a period already started or work already delivered. Any notice period or minimum commitment stated in your agreement will apply subject to applicable law.</p>
            </div>
          </section>
          <section id="client-delays" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">07</span><h2>Client Delays or Lack of Response</h2></div>
            <div className="policy-body">
              <p>Project timelines may be affected when required content, approvals, access, or feedback are delayed. If we cannot proceed because we are waiting for information or approval, we may notify you and agree a revised schedule. Extended inactivity may result in pausing or closing the project after reasonable notice. Work already performed and costs incurred may still be payable under the agreed terms.</p>
            </div>
          </section>
          <section id="third-party" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">08</span><h2>Third-Party Services and Purchases</h2></div>
            <div className="policy-body">
              <p>Cancellation of GreenSync services may not cancel third-party services purchased directly by you, such as domains, hosting, software licences, advertising accounts, or subscriptions. You are responsible for cancelling those services with the relevant provider unless we have expressly agreed in writing to manage them on your behalf. Provider charges and refund rules may apply separately.</p>
            </div>
          </section>
          <section id="changes" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">09</span><h2>Changes and Applicable Rights</h2></div>
            <div className="policy-body">
              <p>We may update this policy to reflect changes in our services or processes. Nothing in this policy excludes or limits a consumer or client right that cannot lawfully be excluded or limited. If there is a conflict, mandatory applicable law will take precedence, and specific written project terms will apply where lawful.</p>
            </div>
          </section>
          <section id="contact" className="policy-section">
            <div className="policy-section-head"><span className="policy-number">10</span><h2>Contact Us</h2></div>
            <div className="policy-body">
              <p>For cancellation requests or questions, please contact GreenSync through the website contact page and include your project or invoice reference. Avoid sending passwords or full payment-card details.</p>
            </div>
          </section>
          </div>
          <section id="policy-contact" className="policy-contact"><span className="policy-contact-label">Need help?</span><h2>Let&apos;s talk it through.</h2><p>If you have a question about this Cancellation Policy or need to submit a request, contact GreenSync with your project or invoice reference.</p><Link href="/contact">Contact GreenSync <span aria-hidden="true">↗</span></Link></section>
          <p className="policy-disclaimer">This policy is a general business template, not legal advice. Before publishing, confirm that it reflects GreenSync&apos;s actual practices, contracts, payment provider terms, business details, and applicable legal obligations. If a specific written agreement or mandatory law gives you a different right, that agreement or law will govern to the extent applicable.</p>
        </article>
      </div>
    </main>
  );
}
