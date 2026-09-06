export default function ProofMark({ className = "" }: { className?: string }) {
  return (
    <span className={`proof-mark ${className}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <b />
    </span>
  );
}
