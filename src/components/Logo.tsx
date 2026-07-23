export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="15 15 70 70" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M 15 85 L 15 15 L 45 45 L 45 30 L 30 15 L 30 85 Z" />
      <path d="M 85 15 L 85 85 L 55 55 L 55 70 L 70 85 L 70 15 Z" />
    </svg>
  );
}
