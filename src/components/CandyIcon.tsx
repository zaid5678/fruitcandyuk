import type { CSSProperties } from 'react';

interface CandyIconProps {
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export default function CandyIcon({ size = 24, className = '', style }: CandyIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Candy wrapper */}
      <ellipse cx="12" cy="13" rx="5" ry="4" fill="currentColor" opacity="0.9" />
      <path d="M7 13 C5 11 5 8 7 8 L8.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 13 C19 11 19 8 17 8 L15.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Cherry 1 */}
      <circle cx="10" cy="6" r="1.5" fill="currentColor" />
      {/* Cherry 2 */}
      <circle cx="14" cy="5" r="1.5" fill="currentColor" />
      {/* Stems */}
      <path d="M10 7.5 Q11 9 12 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M14 6.5 Q13 9 12 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
    </svg>
  );
}
