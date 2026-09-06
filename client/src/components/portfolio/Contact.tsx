import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { toast } from "sonner";

const EMAIL = "abigiya.getachew00@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard.");
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      toast.error(`Please email ${EMAIL} directly.`);
    }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="section-header">
        <div className="section-kicker">
          <span>04</span>
          <span id="contact-heading">Contact</span>
          <i />
        </div>
        <span style={{ fontSize: 12, fontFamily: "IBM Plex Mono, monospace", color: "var(--ink-soft)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Open to opportunities
        </span>
      </div>

      <div className="contact-grid">
        <div>
          <h2>
            Let's build
            <br />
            <em>something.</em>
          </h2>
          <p className="contact-intro">
            I'm Abigiya — a full-stack and frontend developer who enjoys
            building clean, purposeful web experiences. If you have a project,
            an idea, or just want to connect, my inbox is open.
          </p>
        </div>

        <div className="contact-actions">
          <a className="email-link" href={`mailto:${EMAIL}`}>
            {EMAIL}
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>

          <button className="copy-btn" type="button" onClick={copyEmail}>
            {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
            {copied ? "Copied" : "Copy email"}
          </button>

          <div className="contact-socials">
            <a
              href="https://linkedin.com/in/abigiya-getachew-0879b5341"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              aria-label="LinkedIn (opens in new tab)"
            >
              LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/abigiya-getachew/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              aria-label="GitHub (opens in new tab)"
            >
              GitHub <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
