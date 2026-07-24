/**
 * BrandLogo — single source of truth for every NOVAGENTEC logo placement.
 *
 * Rules:
 *   - Assets are served from /assets/brand/ (public/ folder, no Vite import)
 *   - No flex-shrink on any image or container
 *   - No inherited sizing from nav, card, or icon systems
 *   - Each variant has its own explicit dimensions and spacing
 *   - Do not render the wordmark as text
 *   - Do not add background boxes behind transparent assets
 *
 * Variants and their contexts:
 *   commercial-header   Light-bg header: dark monogram + dark wordmark (large)
 *   government-header   Dark-bg header: white wordmark only (wide, no monogram)
 *   light-footer        Light-bg footer: dark monogram + dark wordmark (medium)
 *   dark-footer         Dark-bg footer: white monogram + white wordmark (medium)
 *   monogram-only       Single monogram mark — use `scheme` to pick dark/white asset
 *   compact-lockup      Smallest full lockup (dark assets)
 */

// ── Asset paths (public/ folder) ──────────────────────────────────────────────
const MONOGRAM_TIGHT = '/assets/brand/novagentec-monogram-tight.png';
const WORDMARK_TIGHT = '/assets/brand/novagentec-wordmark-tight.png';
const MONOGRAM_WHITE = '/assets/brand/novagentec-monogram-white.png';
const WORDMARK_WHITE = '/assets/brand/novagentec-wordmark-white.png';

// ── Types ─────────────────────────────────────────────────────────────────────
export type BrandLogoVariant =
  | 'commercial-header'
  | 'government-header'
  | 'light-footer'
  | 'dark-footer'
  | 'monogram-only'
  | 'compact-lockup';

export interface BrandLogoProps {
  variant: BrandLogoVariant;
  /**
   * Only used with `monogram-only`.
   * 'dark' uses the tight/dark asset (light backgrounds).
   * 'white' uses the white asset (dark backgrounds).
   * Defaults to 'dark'.
   */
  scheme?: 'dark' | 'white';
  /**
   * Only used with `monogram-only`.
   * Overrides the default 36px height of the mark.
   */
  size?: number;
  className?: string;
}

// Shared no-shrink rule applied to every img
const IMG_BASE: React.CSSProperties = {
  flexShrink: 0,
  objectFit: 'contain',
  display: 'block',
};

export function BrandLogo({
  variant,
  scheme = 'dark',
  size,
  className = '',
}: BrandLogoProps) {

  // ── commercial-header ──────────────────────────────────────────────────────
  // Dark lockup. Monogram 42px tall; wordmark 210px wide. Gap 14px.
  // Responsive: tablet 34px / 175px, mobile hides wordmark (monogram only 34px).
  if (variant === 'commercial-header') {
    return (
      <div
        className={`flex items-center flex-shrink-0 ${className}`}
        style={{ gap: 14 }}
      >
        {/* Monogram: desktop 42px, tablet 34px */}
        <img
          src={MONOGRAM_TIGHT}
          alt=""
          aria-hidden="true"
          className="h-[42px] md:h-[42px] sm:h-[34px] w-auto"
          style={IMG_BASE}
        />
        {/* Wordmark: hidden on mobile, 175px tablet, 210px desktop */}
        <img
          src={WORDMARK_TIGHT}
          alt="NOVAGENTEC"
          className="hidden sm:block"
          style={{ ...IMG_BASE, width: 210, height: 'auto', objectPosition: 'left center' }}
        />
      </div>
    );
  }

  // ── government-header ──────────────────────────────────────────────────────
  // White wordmark only. No monogram (per spec for Gov & Aerospace dark header).
  // Desktop 250px, tablet 205px.
  if (variant === 'government-header') {
    return (
      <div className={`flex items-center flex-shrink-0 ${className}`}>
        <img
          src={WORDMARK_WHITE}
          alt="NOVAGENTEC"
          style={{ ...IMG_BASE, width: 250, height: 'auto', objectPosition: 'left center' }}
        />
      </div>
    );
  }

  // ── light-footer ───────────────────────────────────────────────────────────
  // Dark lockup for mineral-white footer bg. Monogram 30px; wordmark 175px. Gap 10px.
  if (variant === 'light-footer') {
    return (
      <div
        className={`flex items-center flex-shrink-0 ${className}`}
        style={{ gap: 10 }}
      >
        <img
          src={MONOGRAM_TIGHT}
          alt=""
          aria-hidden="true"
          style={{ ...IMG_BASE, height: 30, width: 'auto' }}
        />
        <img
          src={WORDMARK_TIGHT}
          alt="NOVAGENTEC"
          style={{ ...IMG_BASE, width: 175, height: 'auto', objectPosition: 'left center' }}
        />
      </div>
    );
  }

  // ── dark-footer ────────────────────────────────────────────────────────────
  // White lockup for carbon-black footer bg. Monogram 30px; wordmark 185px. Gap 10px.
  if (variant === 'dark-footer') {
    return (
      <div
        className={`flex items-center flex-shrink-0 ${className}`}
        style={{ gap: 10 }}
      >
        <img
          src={MONOGRAM_WHITE}
          alt=""
          aria-hidden="true"
          style={{ ...IMG_BASE, height: 30, width: 'auto' }}
        />
        <img
          src={WORDMARK_WHITE}
          alt="NOVAGENTEC"
          style={{ ...IMG_BASE, width: 185, height: 'auto', objectPosition: 'left center' }}
        />
      </div>
    );
  }

  // ── monogram-only ──────────────────────────────────────────────────────────
  // Standalone mark. Height defaults to 36px; override with `size` prop.
  // `scheme="dark"` → tight asset (light backgrounds)
  // `scheme="white"` → white asset (dark backgrounds)
  if (variant === 'monogram-only') {
    const markHeight = size ?? 36;
    const src = scheme === 'white' ? MONOGRAM_WHITE : MONOGRAM_TIGHT;
    const altText = scheme === 'white' ? 'NOVAGENTEC' : '';
    return (
      <div className={`flex-shrink-0 ${className}`}>
        <img
          src={src}
          alt={altText}
          aria-hidden={scheme !== 'white' ? 'true' : undefined}
          style={{ ...IMG_BASE, height: markHeight, width: 'auto' }}
        />
      </div>
    );
  }

  // ── compact-lockup ─────────────────────────────────────────────────────────
  // Smallest full lockup, dark assets. Monogram 24px; wordmark 140px. Gap 8px.
  // Used for mobile nav, secondary contexts.
  return (
    <div
      className={`flex items-center flex-shrink-0 ${className}`}
      style={{ gap: 8 }}
    >
      <img
        src={MONOGRAM_TIGHT}
        alt=""
        aria-hidden="true"
        style={{ ...IMG_BASE, height: 24, width: 'auto' }}
      />
      <img
        src={WORDMARK_TIGHT}
        alt="NOVAGENTEC"
        style={{ ...IMG_BASE, width: 140, height: 'auto', objectPosition: 'left center' }}
      />
    </div>
  );
}
