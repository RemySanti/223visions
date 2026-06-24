/**
 * Portrait-safe hero for location SEO silo pages.
 * 3:4 frame + top anchor keeps heads in frame for portrait portfolio shots
 * without per-page object-position overrides.
 */
export function SiloHeroImage({ src, alt, className = '' }) {
  return (
    <div
      className={`aspect-[3/4] overflow-hidden rounded-2xl bg-brand-surface ${className}`.trim()}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}
