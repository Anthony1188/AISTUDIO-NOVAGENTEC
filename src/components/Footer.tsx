import { BrandLogo } from './BrandLogo';

interface FooterProps {
  theme?: 'light' | 'dark';
}

export function Footer({ theme = 'dark' }: FooterProps) {
  const isDark = theme === 'dark';

  return (
    <footer
      className={[
        'w-full border-t py-8 px-8 md:px-12',
        'font-mono text-[10px] uppercase tracking-widest',
        isDark
          ? 'bg-[#0B0B0B] border-charcoal text-stone-gray'
          : 'bg-[#F3F2EE] border-stone-gray/30 text-graphite',
      ].join(' ')}
    >
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Left: logo lockup + brand statement */}
        <div className="flex flex-col gap-2">
          <a href="/" aria-label="NOVAGENTEC home" className="hover:opacity-70 transition-opacity">
            <BrandLogo variant={isDark ? 'dark-footer' : 'light-footer'} />
          </a>
          <span
            className={[
              'font-mono text-[7px] tracking-[0.18em] uppercase pl-[40px]',
              isDark ? 'text-stone-gray/50' : 'text-graphite/50',
            ].join(' ')}
          >
            Engineering Intelligent Business Infrastructure
          </span>
        </div>

        {/* Center: nav links */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 md:mx-auto">
          <a href="/commercial"        className={isDark ? 'hover:text-pure-white transition-colors' : 'hover:text-carbon-black transition-colors'}>Commercial Small Business</a>
          <a href="/government-aerospace" className={isDark ? 'hover:text-pure-white transition-colors' : 'hover:text-carbon-black transition-colors'}>Government &amp; Aerospace</a>
          <a href="/about"             className={isDark ? 'hover:text-pure-white transition-colors' : 'hover:text-carbon-black transition-colors'}>About</a>
          <a href="/contact"           className={isDark ? 'hover:text-pure-white transition-colors' : 'hover:text-carbon-black transition-colors'}>Contact</a>
          <a href="/privacy"           className={isDark ? 'hover:text-pure-white transition-colors' : 'hover:text-carbon-black transition-colors'}>Privacy</a>
        </div>

        {/* Right: copyright */}
        <div className={isDark ? 'text-stone-gray/50' : 'text-graphite/50'}>
          &copy; {new Date().getFullYear()} NOVAGENTEC. ALL&nbsp;RIGHTS&nbsp;RESERVED.
        </div>

      </div>
    </footer>
  );
}
