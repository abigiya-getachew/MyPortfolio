import { ArrowUpRight } from "lucide-react";
import AGLogo from "./AGLogo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <AGLogo size={20} />
        <span>Abigiya Getachew Assefa</span>
      </div>

      <span>Built with attention · © 2026</span>

      <ul className="footer-links">
        <li><a href="#top">Back to top ↑</a></li>
        <li><a href="mailto:abigiya.getachew00@gmail.com">Email</a></li>
        <li>
          <a
            href="https://github.com/abigiya-getachew/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in new tab)"
          >
            GitHub <ArrowUpRight size={11} aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/abigiya-getachew-0879b5341"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in new tab)"
          >
            LinkedIn <ArrowUpRight size={11} aria-hidden="true" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
