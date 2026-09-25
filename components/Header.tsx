"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/" className="header-logo" aria-label="GreenSync Home">
          <Image
            src="/greensync-logo.svg"
            alt="GreenSync"
            width={48}
            height={48}
            priority
            className="header-logo-image"
          />

          <span className="header-logo-text">
            <span className="header-logo-name">GreenSync</span>
            <span className="header-logo-tagline">Digital Solutions</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to day theme"
                : "Switch to dark theme"
            }
            title={
              theme === "dark"
                ? "Switch to day theme"
                : "Switch to dark theme"
            }
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {theme === "dark" ? "☀" : "☾"}
            </span>
          </button>

          <Link href="/contact" className="header-cta">
            Start a Project
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="mobile-header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to day theme"
                : "Switch to dark theme"
            }
            title={
              theme === "dark"
                ? "Switch to day theme"
                : "Switch to dark theme"
            }
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {theme === "dark" ? "☀" : "☾"}
            </span>
          </button>

          <button
            type="button"
            className={`mobile-menu-button ${
              mobileMenuOpen ? "is-open" : ""
            }`}
            onClick={() => setMobileMenuOpen((current) => !current)}
            aria-label={
              mobileMenuOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-navigation ${
          mobileMenuOpen ? "is-open" : ""
        }`}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}

          <Link
            href="/contact"
            className="mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start a Project
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}