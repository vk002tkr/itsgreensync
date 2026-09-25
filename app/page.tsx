import Link from "next/link";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyGreenSync from "@/components/WhyGreenSync";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="page-container hero-container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Digital solutions for modern businesses
            </div>

            <h1 className="hero-title">
              We build digital
              <span> systems </span>
              that move businesses forward.
            </h1>

            <p className="hero-description">
              GreenSync helps businesses turn ideas into powerful digital
              products — from websites and custom software to mobile apps,
              SaaS platforms and digital growth solutions.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="hero-primary-button">
                Start a Project
                <span aria-hidden="true">↗</span>
              </Link>

              <Link href="/work" className="hero-secondary-button">
                Explore Our Work
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-orbit hero-orbit-three" />

            <div className="hero-center">
              <div className="hero-center-mark">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODAgMjgwIiB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCI+CiAgPGRlZnM+CiAgICA8IS0tIEdyYWRpZW50cyBmb3IgM0QgZWZmZWN0IC0tPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsZWFmR3JhZGllbnQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2E4ZmY0YTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI0MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2ZWU4NDk7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzJkODY1OTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAKICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGVhZkdyYWRpZW50MiIgeDE9IjEwMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NGRkODk7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdHlsZT0ic3RvcC1jb2xvcjojM2RiODZhO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxYTZkM2E7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxlYWZHcmFkaWVudDMiIHgxPSIwJSIgeTE9IjEwMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTBhMTUyO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NGRkODk7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgCiAgICA8IS0tIFNoYWRvdyBmaWx0ZXJzIC0tPgogICAgPGZpbHRlciBpZD0ic2hhZG93IiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAlIj4KICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VBbHBoYSIgc3RkRGV2aWF0aW9uPSI0Ii8+CiAgICAgIDxmZU9mZnNldCBkeD0iMiIgZHk9IjQiIHJlc3VsdD0ib2Zmc2V0Ymx1ciIvPgogICAgICA8ZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgICA8ZmVGdW5jQSB0eXBlPSJsaW5lYXIiIHNsb3BlPSIwLjMiLz4KICAgICAgPC9mZUNvbXBvbmVudFRyYW5zZmVyPgogICAgICA8ZmVNZXJnZT4KICAgICAgICA8ZmVNZXJnZU5vZGUvPgogICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPgogICAgICA8L2ZlTWVyZ2U+CiAgICA8L2ZpbHRlcj4KICAgIAogICAgPGZpbHRlciBpZD0iaW5uZXJTaGFkb3ciIHg9Ii01MCUiIHk9Ii01MCUiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiPgogICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiBzdGREZXZpYXRpb249IjMiLz4KICAgICAgPGZlT2Zmc2V0IGR4PSIxIiBkeT0iMiIgcmVzdWx0PSJvZmZzZXRibHVyIi8+CiAgICAgIDxmZUNvbXBvbmVudFRyYW5zZmVyPgogICAgICAgIDxmZUZ1bmNBIHR5cGU9ImxpbmVhciIgc2xvcGU9IjAuMiIvPgogICAgICA8L2ZlQ29tcG9uZW50VHJhbnNmZXI+CiAgICAgIDxmZU1lcmdlPgogICAgICAgIDxmZU1lcmdlTm9kZS8+CiAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgICAgIDwvZmVNZXJnZT4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICAKICA8IS0tIEJhY2tncm91bmQgLS0+CiAgPHJlY3Qgd2lkdGg9IjI4MCIgaGVpZ2h0PSIyODAiIGZpbGw9InRyYW5zcGFyZW50Ii8+CiAgCiAgPCEtLSBMZWZ0IGN1cnZlZCBsZWFmIChHIHNoYXBlKSAtLT4KICA8ZyBmaWx0ZXI9InVybCgjc2hhZG93KSI+CiAgICA8IS0tIE1haW4gc2hhcGUgLS0+CiAgICA8cGF0aCBkPSJNIDc1IDcwIFEgNTAgOTAgNTAgMTQwIFEgNTAgMTkwIDEwMCAyMTAgUSAxMzAgMjIwIDE0NSAyMDAgTCAxNDUgMTgwIFEgMTMwIDE4NSAxMTUgMTg1IFEgODUgMTg1IDg1IDE0MCBRIDg1IDEwMCAxMDUgODUgUSAxMjUgNzUgMTQ1IDg1IEwgMTQ1IDY1IFEgMTIwIDUwIDc1IDcwIFoiIAogICAgICAgICAgZmlsbD0idXJsKCNsZWFmR3JhZGllbnQxKSIgb3BhY2l0eT0iMC45NSIvPgogICAgCiAgICA8IS0tIElubmVyIHNoYWRvdyBmb3IgZGVwdGggLS0+CiAgICA8cGF0aCBkPSJNIDgwIDgwIFEgNjUgOTUgNjUgMTQwIFEgNjUgMTgwIDEwMCAxOTUgUSAxMjAgMjAyIDEzOCAxOTAgTCAxMzggMTc1IFEgMTI1IDE4MCAxMTAgMTgwIFEgODggMTgwIDg4IDE0MCBRIDg4IDEwNSAxMDUgOTIgUSAxMjAgODQgMTM3IDkwIEwgMTM3IDcyIFEgMTE1IDYwIDgwIDgwIFoiIAogICAgICAgICAgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4wOCIvPgogIDwvZz4KICAKICA8IS0tIFJpZ2h0IGN1cnZlZCBsZWFmIChTIHNoYXBlKSAtLT4KICA8ZyBmaWx0ZXI9InVybCgjc2hhZG93KSI+CiAgICA8IS0tIFVwcGVyIGN1cnZlIC0tPgogICAgPHBhdGggZD0iTSAxNjAgNjUgUSAyMDAgNTAgMjMwIDc1IFEgMjUwIDkwIDI1MCAxMTUgUSAyNDUgMTM1IDIxMCAxNDUgTCAyMTAgMTY1IFEgMjUwIDE1NSAyNTUgMTIwIFEgMjYwIDgwIDIzMCA1NSBRIDE5NSAzMCAxNjAgNDUgWiIgCiAgICAgICAgICBmaWxsPSJ1cmwoI2xlYWZHcmFkaWVudDIpIiBvcGFjaXR5PSIwLjk1Ii8+CiAgICAKICAgIDwhLS0gTG93ZXIgY3VydmUgLS0+CiAgICA8cGF0aCBkPSJNIDE3NSAxNDUgUSAxNDUgMTU1IDEzNSAxODAgUSAxMjUgMjA1IDE0NSAyMjUgUSAxNzUgMjQ1IDIxMCAyMjUgUSAyMzUgMjEwIDI0MCAxODAgTCAyMjAgMTc1IFEgMjE1IDIwMCAxOTUgMjE1IFEgMTcwIDIzMCAxNTUgMjE1IFEgMTQwIDIwNSAxNDUgMTg1IFEgMTU1IDE2NSAxODUgMTYwIFoiIAogICAgICAgICAgZmlsbD0idXJsKCNsZWFmR3JhZGllbnQzKSIgb3BhY2l0eT0iMC45NSIvPgogICAgCiAgICA8IS0tIElubmVyIGhpZ2hsaWdodCAtLT4KICAgIDxwYXRoIGQ9Ik0gMTc1IDcwIFEgMjEwIDU4IDIzNSA4MCBRIDI1MCA5MiAyNDggMTEwIFEgMjQ1IDEyOCAyMTUgMTM3IEwgMjE1IDE1MyBRIDI0OCAxNDUgMjUyIDExNSBRIDI1NiA4MiAyMzUgNjIgUSAyMDUgNDAgMTczIDUzIFoiIAogICAgICAgICAgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4xMiIvPgogIDwvZz4KICAKICA8IS0tIENlbnRyYWwgR1MgdGV4dCBpbmRpY2F0b3IgKHN1YnRsZSkgLS0+CiAgPGcgb3BhY2l0eT0iMC4xNSI+CiAgICA8dGV4dCB4PSIxNDAiIHk9IjE1NSIgZm9udC1mYW1pbHk9IkludGVyLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDgiIGZvbnQtd2VpZ2h0PSI4MDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmZmZmZmYiPkdTPC90ZXh0PgogIDwvZz4KICAKICA8IS0tIEFjY2VudCBkb3RzIChzeW5lcmd5IHBvaW50cykgLS0+CiAgPGNpcmNsZSBjeD0iMzUiIGN5PSIxMDAiIHI9IjQuNSIgZmlsbD0iI2E4ZmY0YSIgb3BhY2l0eT0iMC44NSIgZmlsdGVyPSJ1cmwoI3NoYWRvdykiLz4KICA8Y2lyY2xlIGN4PSIyNjAiIGN5PSI5MCIgcj0iNCIgZmlsbD0iIzY0ZGQ4OSIgb3BhY2l0eT0iMC44IiBmaWx0ZXI9InVybCgjc2hhZG93KSIvPgogIDxjaXJjbGUgY3g9IjU1IiBjeT0iMjE1IiByPSIzLjUiIGZpbGw9IiMxMGExNTIiIG9wYWNpdHk9IjAuNzUiIGZpbHRlcj0idXJsKCNzaGFkb3cpIi8+CiAgPGNpcmNsZSBjeD0iMjQwIiBjeT0iMjM1IiByPSI0LjUiIGZpbGw9IiM2ZWU4NDkiIG9wYWNpdHk9IjAuOCIgZmlsdGVyPSJ1cmwoI3NoYWRvdykiLz4KICAKICA8IS0tIFN1YnRsZSBjb25uZWN0aW5nIGZsb3cgbGluZXMgLS0+CiAgPHBhdGggZD0iTSA0MCAxMTAgUSAxMDAgMTMwIDE2MCAxNDUiIHN0cm9rZT0iI2E4ZmY0YSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0gMjQ1IDEwMCBRIDIwMCAxNjAgMTcwIDIwMCIgc3Ryb2tlPSIjNjRkZDg5IiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPg=="
                  alt="GreenSync"
                  width="82"
                  height="82"
                  className="hero-center-logo"
                />
              </div>
              <span>GREENSYNC</span>
            </div>

            <div className="hero-floating-card hero-card-one">
              <span className="hero-card-icon">⌘</span>
              <div>
                <strong>Web</strong>
                <small>Development</small>
              </div>
            </div>

            <div className="hero-floating-card hero-card-two">
              <span className="hero-card-icon">◇</span>
              <div>
                <strong>Software</strong>
                <small>Solutions</small>
              </div>
            </div>

            <div className="hero-floating-card hero-card-three">
              <span className="hero-card-icon">↗</span>
              <div>
                <strong>Growth</strong>
                <small>Digital Marketing</small>
              </div>
            </div>
          </div>
        </div>

        <div className="page-container hero-capabilities">
          <div className="hero-capability">
            <span>01</span>
            Web Development
          </div>
          <div className="hero-capability">
            <span>02</span>
            Custom Software
          </div>
          <div className="hero-capability">
            <span>03</span>
            Mobile Apps
          </div>
          <div className="hero-capability">
            <span>04</span>
            SaaS Platforms
          </div>
          <div className="hero-capability">
            <span>05</span>
            UI/UX Design
          </div>
          <div className="hero-capability">
            <span>06</span>
            Digital Growth
          </div>
        </div>
      </section>

      <Services />
      <About />
      <Work />
      <Process />
      <WhyGreenSync />
      <CTA />
    </>
  );
}
