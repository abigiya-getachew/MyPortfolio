import { ArrowUpRight } from "lucide-react";
import AGLogo from "@/components/portfolio/AGLogo";

export default function NotFound() {
  return (
    <div className="not-found-shell">
      <header className="not-found-header">
        <a href="/" className="wordmark" aria-label="Abigiya Getachew Assefa — home">
          <AGLogo size={24} />
          <span>ABIGIYA <em>/</em> GETACHEW</span>
        </a>
      </header>

      <main className="not-found-body" id="main-content">
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1 className="not-found-heading">This page doesn't exist.</h1>
        <p className="not-found-sub">
          The project you're looking for may have moved.
        </p>
        <a href="/" className="not-found-action">
          Back to homepage <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </main>
    </div>
  );
}
