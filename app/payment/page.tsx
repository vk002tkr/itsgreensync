import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Make a Payment | ItsGreenSync",
  description: "Contact ItsGreenSync to receive a secure payment link for your project or service.",
};

export default function PaymentPage() {
  return (
    <main style={{ minHeight: "65vh", display: "grid", placeItems: "center", padding: "80px 24px" }}>
      <section style={{ width: "100%", maxWidth: "680px", textAlign: "center", padding: "48px 28px", border: "1px solid var(--border, #294137)", borderRadius: "24px", background: "var(--surface, rgba(12, 28, 20, 0.55))" }}>
        <div aria-hidden="true" style={{ width: "64px", height: "64px", margin: "0 auto 22px", display: "grid", placeItems: "center", borderRadius: "50%", background: "rgba(103, 232, 154, 0.12)", color: "var(--green, #67e89a)" }}>
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2.5" y="5" width="19" height="14" rx="2.5" /><path d="M2.5 10h19M7 15h3" />
          </svg>
        </div>
        <p style={{ color: "var(--green, #67e89a)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "12px", marginBottom: "12px" }}>Secure Payments</p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, marginBottom: "16px" }}>Make a Payment</h1>
        <p style={{ color: "var(--text-muted, #aab8af)", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto 28px" }}>
          Need to pay an invoice or make a project payment? Contact our team and we&apos;ll share the appropriate payment details with you.
        </p>
        <a href="mailto:hello@itsgreensync.com?subject=Payment%20Request" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "14px 26px", borderRadius: "999px", background: "var(--green, #67e89a)", color: "#07130d", fontWeight: 700, textDecoration: "none" }}>
          Request Payment Details <span aria-hidden="true">↗</span>
        </a>
        <p style={{ color: "var(--text-muted, #aab8af)", fontSize: "13px", lineHeight: 1.6, marginTop: "22px" }}>
          Online checkout is being configured. Please use the contact link above until the secure payment gateway is activated.
        </p>
        <div style={{ marginTop: "28px" }}>
          <Link href="/" style={{ color: "var(--green, #67e89a)", textDecoration: "none", fontWeight: 600 }}>← Back to Home</Link>
        </div>
      </section>
    </main>
  );
}
