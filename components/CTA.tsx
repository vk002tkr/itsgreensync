import Link from "next/link";

function GreenSyncLogo() {
  return (
    <svg
      className="cta-side-logo"
      viewBox="0 0 280 280"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="ctaLeafGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a8ff4a" />
          <stop offset="40%" stopColor="#6ee849" />
          <stop offset="100%" stopColor="#2d8659" />
        </linearGradient>

        <linearGradient id="ctaLeafGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#64dd89" />
          <stop offset="50%" stopColor="#3db86a" />
          <stop offset="100%" stopColor="#1a6d3a" />
        </linearGradient>

        <linearGradient id="ctaLeafGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10a152" />
          <stop offset="100%" stopColor="#64dd89" />
        </linearGradient>

        <filter id="ctaLogoShadow" x="-50%" y="-50%" width="200%" height="200%">
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

      <g filter="url(#ctaLogoShadow)">
        <path
          d="M 75 70 Q 50 90 50 140 Q 50 190 100 210 Q 130 220 145 200 L 145 180 Q 130 185 115 185 Q 85 185 85 140 Q 85 100 105 85 Q 125 75 145 85 L 145 65 Q 120 50 75 70 Z"
          fill="url(#ctaLeafGradient1)"
          opacity="0.95"
        />
      </g>

      <g filter="url(#ctaLogoShadow)">
        <path
          d="M 160 65 Q 200 50 230 75 Q 250 90 250 115 Q 245 135 210 145 L 210 165 Q 250 155 255 120 Q 260 80 230 55 Q 195 30 160 45 Z"
          fill="url(#ctaLeafGradient2)"
          opacity="0.95"
        />

        <path
          d="M 175 145 Q 145 155 135 180 Q 125 205 145 225 Q 175 245 210 225 Q 235 210 240 180 L 220 175 Q 215 200 195 215 Q 170 230 155 215 Q 140 205 145 185 Q 155 165 185 160 Z"
          fill="url(#ctaLeafGradient3)"
          opacity="0.95"
        />
      </g>

      <g opacity="0.15">
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

      <path
        d="M 40 110 Q 100 130 160 145"
        stroke="#a8ff4a"
        strokeWidth="1.5"
        fill="none"
        opacity="0.25"
        strokeLinecap="round"
      />

      <path
        d="M 245 100 Q 200 160 170 200"
        stroke="#64dd89"
        strokeWidth="1.5"
        fill="none"
        opacity="0.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="page-container">
        <div className="cta-card">
          <div className="cta-background" aria-hidden="true">
            <div className="cta-background-overlay" />
          </div>

          <div className="cta-content">
            <span className="section-eyebrow cta-eyebrow">
              HAVE AN IDEA WORTH BUILDING?
            </span>

            <h2>
              Let&apos;s build
              <span> something meaningful.</span>
            </h2>

            <p>
              Tell us what you&apos;re working on, what you&apos;re trying to
              solve, or simply where you want to go next.
            </p>

            <div className="cta-actions">
              <Link href="/contact" className="cta-primary-button">
                Start a Project
                <span aria-hidden="true">↗</span>
              </Link>

              <Link href="/work" className="cta-secondary-button">
                Explore Our Work
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="cta-side-mark" aria-hidden="true">
            <GreenSyncLogo />
          </div>

          <div className="cta-orbit cta-orbit-one" aria-hidden="true" />
          <div className="cta-orbit cta-orbit-two" aria-hidden="true" />
          <div className="cta-orbit cta-orbit-three" aria-hidden="true" />
          <div className="cta-glow cta-glow-one" aria-hidden="true" />
          <div className="cta-glow cta-glow-two" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
