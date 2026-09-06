export default function AGLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="4" fill="#B5651D" />
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#F3F2ED"
        fontFamily="Source Serif 4, Georgia, serif"
        fontWeight="700"
        fontSize="17"
        letterSpacing="-0.5"
      >
        AG
      </text>
    </svg>
  );
}
