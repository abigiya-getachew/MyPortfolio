import { useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import AGLogo from "./AGLogo";
import { resumePdf } from "./constants";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header className={`site-header ${open ? "is-open" : ""}`}>
        <a className="wordmark" href="#top" aria-label="Abigiya Getachew Assefa — home">
          <AGLogo size={26} />
          <span>Abigiya <em>/</em> Getachew</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="header-status">
            <span className="status-dot" aria-hidden="true" />
            <span>Available</span>
          </div>
          <a className="resume-link" href={resumePdf} download aria-label="Download résumé PDF">
            Resume <Download size={13} aria-hidden="true" />
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {open && (
        <nav className="mobile-nav is-open" aria-label="Mobile navigation">
          {navItems.map((item, i) => (
            <a key={item.href} href={item.href} onClick={close}>
              <span>0{i + 1}</span>
              {item.label}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
          <a href={resumePdf} download className="mobile-nav-resume" onClick={close} aria-label="Download résumé PDF">
            <span>04</span>
            Download resume
            <Download size={14} aria-hidden="true" />
          </a>
        </nav>
      )}
    </>
  );
}
