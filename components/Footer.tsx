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
  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com/itsgreensync", icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg> },
    { label: "Facebook", href: "https://www.facebook.com/share/1Atm8mEsBT/", icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M13.6 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6H17V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.5v3.2h2.8V21h3.3Z"/></svg> },
    { label: "YouTube", href: "https://youtube.com/@ItsGreenSync", icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M23.2 7a3 3 0 0 0-2.1-2.1C19.2 4.4 12 4.4 12 4.4s-7.2 0-9.1.5A3 3 0 0 0 .8 7 31 31 0 0 0 .3 12a31 31 0 0 0 .5 5 3 3 0 0 0 2.1 2.1c1.9.5 9.1.5 9.1.5s7.2 0 9.1-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5 31 31 0 0 0-.5-5ZM9.6 15.4V8.6l6 3.4-6 3.4Z"/></svg> },
  ];
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="GreenSync Home">
              <Image src="/images/greensync-mark.svg" alt="" width={48} height={48} className="footer-logo-mark-image" aria-hidden="true" />
              <span className="footer-logo-name"><span>Green</span><strong>Sync</strong></span>
            </Link>
            <p className="footer-description">We design and build digital products, software and growth solutions that help businesses move forward.</p>
            <p className="footer-description">ItsGreenSync is part of Hikinhigh Travels Pvt. Ltd., doing business as ItsGreenSync.</p>
            <Link href="/contact" className="footer-project-link">Start a Project <span aria-hidden="true">↗</span></Link>
            <nav aria-label="ItsGreenSync social media" className="footer-social-links" style={{display:"flex",alignItems:"center",gap:"12px",marginTop:"22px"}}>
              {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`ItsGreenSync on ${social.label} (opens in a new tab)`} title={social.label} className="footer-social-link" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",border:"1px solid var(--border-strong, var(--border, #294137))",borderRadius:"50%",color:"var(--green, #67e89a)",transition:"background-color 0.2s ease, transform 0.2s ease"}}><span style={{display:"flex",width:"19px",height:"19px"}}>{social.icon}</span></a>)}
            </nav>
          </div>
          <div className="footer-column"><h3>Services</h3><nav aria-label="Footer services navigation">{services.map((service)=><Link key={service.label} href={service.href}>{service.label}</Link>)}</nav></div>
          <div className="footer-column"><h3>Company</h3><nav aria-label="Footer company navigation">{companyLinks.map((link)=><Link key={link.label} href={link.href}>{link.label}</Link>)}</nav></div>
          <div className="footer-column footer-contact"><h3>Let&apos;s Talk</h3><p>Have an idea, project or business challenge?<br/>Let&apos;s build something useful together.</p><a href="mailto:hello@itsgreensync.com" style={{ display: "flex", alignItems: "center", gap: "9px", width: "fit-content" }}><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" style={{ flexShrink: 0 }}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg><span>hello@itsgreensync.com</span></a><a href="tel:+18577587201" style={{ display: "flex", alignItems: "center", gap: "9px", width: "fit-content", marginTop: "10px" }}><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.2 18.8a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.18 2 2 0 0 1 4.09 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.05 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.68A2 2 0 0 1 22 16.92Z"/></svg><span>+1 857 758 7201</span></a><p style={{ marginTop: "6px", marginLeft: "27px" }}>For the United States and Canada</p></div>
        </div>
        <div className="footer-cta"><div><span className="footer-cta-label">Have a project in mind?</span><h2>Let&apos;s build something<br/><span>meaningful.</span></h2></div><Link href="/contact" className="footer-cta-button">Tell Us About Your Project <span aria-hidden="true">↗</span></Link></div>
        <div className="footer-bottom"><p>© 2026 GreenSync. All rights reserved. Secure and Powered by <a href="https://ynrsgroup.in" target="_blank" rel="noopener noreferrer" className="hover:underline">YNRS Business Solutions</a>.</p><div className="footer-bottom-links"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link><Link href="/refund-policy">Refund Policy</Link><Link href="/cancellation-policy">Cancellation Policy</Link></div></div>
      </div>
    </footer>
  );
}
