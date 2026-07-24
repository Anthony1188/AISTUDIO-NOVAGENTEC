/**
 * BrandLogo — single source of truth for all logo placements.
 *
 * Variants:
 *   commercial-header   dark monogram + dark wordmark  (large, 40-46px monogram)
 *   government-header   white wordmark only            (235-270px wide)
 *   light-footer        dark monogram + dark wordmark  (27-34px monogram)
 *   dark-footer         white monogram + white wordmark
 *   monogram-only       just the appropriate monogram
 *   compact-lockup      small full lockup
 *
 * Asset source: /assets/brand/  (served from public/)
 */

const MONOGRAM_TIGHT  = '/assets/brand/novagentec-monogram-tight.png';
const WORDMARK_TIGHT  = '/assets/brand/novagentec-wordmark-tight.png';
const MONOGRAM_WHITE  = '/assets/brand/novagentec-monogram-white.png';
const WORDMARK_WHITE  = '/assets/brand/novagentec-wordmark-white.png';

type Variant =
  | 'commercial-header'
  | 'government-header'
  | 'light-footer'
  | 'dark-footer'
  | 'monogram-only'
  | 'compact-lockup';

interface BrandLogoProps {
  variant: Variant;
  /** Override monogram size in px (optional). Falls back to variant default. */
  monogramSize?: number;
  className?: string;
}

export function BrandLogo({ variant, className = '' }: BrandLogoProps) {
  /* ── commercial-header: dark lockup, large ───────────── */
  if (variant === 'commercial-header') {
    return (
      <div className={`flex items-center gap-[14px] flex-shrink-0 ${className}`}>
        <img
          src={MONOGRAM_TIGHT}
          alt=""
          aria-hidden="true"
          style={{ height: 42, width: 'auto', objectFit: 'contain', flexShrink: 0 }}
        />
        <img
          src={WORDMARK_TIGHT}
          alt="NOVAGENTEC"
          style={{ width: 215, height: 'auto', objectFit: 'contain', objectPosition: 'left center', flexShrink: 0 }}
        />
      </div>
    );
  }

  /* ── government-header: white wordmark only ─────────── */
  if (variant === 'government-header') {
    return (
      <div className={`flex items-center flex-shrink-0 ${className}`}>
        <img
          src={WORDMARK_WHITE}
          alt="NOVAGENTEC"
          style={{ width: 250, height: 'auto', objectFit: 'contain', objectPosition: 'left center', flexShrink: 0 }}
        />
      </div>
    );
  }

  /* ── light-footer: dark lockup, medium ──────────────── */
  if (variant === 'light-footer') {
    return (
      <div className={`flex items-center gap-[10px] flex-shrink-0 ${className}`}>
        <img
          src={MONOGRAM_TIGHT}
          alt=""
          aria-hidden="true"
          style={{ height: 30, width: 'auto', objectFit: 'contain', flexShrink: 0 }}
        />
        <img
          src={WORDMARK_TIGHT}
          alt="NOVAGENTEC"
          style={{ width: 175, height: 'auto', objectFit: 'contain', objectPosition: 'left center', flexShrink: 0 }}
        />
      </div>
    );
  }

  /* ── dark-footer: white lockup, medium ──────────────── */
  if (variant === 'dark-footer') {
    return (
      <div className={`flex items-center gap-[10px] flex-shrink-0 ${className}`}>
        <img
          src={MONOGRAM_WHITE}
          alt=""
          aria-hidden="true"
          style={{ height: 30, width: 'auto', objectFit: 'contain', flexShrink: 0 }}
        />
        <img
          src={WORDMARK_WHITE}
          alt="NOVAGENTEC"
          style={{ width: 185, height: 'auto', objectFit: 'contain', objectPosition: 'left center', flexShrink: 0 }}
        />
      </div>
    );
  }

  /* ── monogram-only ───────────────────────────────────── */
  if (variant === 'monogram-only') {
    return (
      <div className={`flex-shrink-0 ${className}`}>
        <img
          src={MONOGRAM_TIGHT}
          alt="NOVAGENTEC"
          style={{ height: 36, width: 'auto', objectFit: 'contain' }}
        />
      </div>
    );
  }

  /* ── compact-lockup: dark, small ────────────────────── */
  /* variant === 'compact-lockup' */
  return (
    <div className={`flex items-center gap-[8px] flex-shrink-0 ${className}`}>
      <img
        src={MONOGRAM_TIGHT}
        alt=""
        aria-hidden="true"
        style={{ height: 24, width: 'auto', objectFit: 'contain', flexShrink: 0 }}
      />
      <img
        src={WORDMARK_TIGHT}
        alt="NOVAGENTEC"
        style={{ width: 140, height: 'auto', objectFit: 'contain', objectPosition: 'left center', flexShrink: 0 }}
      />
    </div>
  );
}
