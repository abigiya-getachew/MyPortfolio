export default function SectionKicker({
  number,
  children,
}: {
  number: string;
  children: string;
}) {
  return (
    <div className="section-kicker">
      <span>{number}</span>
      <span>{children}</span>
      <i />
    </div>
  );
}
