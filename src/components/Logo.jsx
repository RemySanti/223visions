export function Logo({ className = 'h-24' }) {
  return (
    <img
      src="/logo.png"
      alt="223 Visions — Atlanta Photography & Videography"
      className={`w-auto object-contain ${className}`}
      width={320}
      height={96}
    />
  );
}
