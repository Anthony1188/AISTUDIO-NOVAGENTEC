import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  theme?: 'light' | 'dark';
}

export function Header({ theme = 'light' }: HeaderProps) {
  const isDark = theme === 'dark';

  return (
    <header
      className={[
        'h-[72px] w-full flex items-center justify-between px-8 md:px-12 fixed top-0 z-50 backdrop-blur-md',
        isDark
          ? 'bg-[#0d0d0d]/95 border-b border-[#242424]'
          : 'bg-[#F3F2EE]/95 border-b border-stone-gray/20',
      ].join(' ')}
    >
      <a
        href="/"
        aria-label="NOVAGENTEC home"
        className="flex items-center hover:opacity-75 transition-opacity duration-200"
      >
        {isDark
          ? <BrandLogo variant="government-header" />
          : <BrandLogo variant="commercial-header" />
        }
      </a>

      {/* Desktop nav */}
      <nav
        className={[
          'hidden md:flex items-center gap-10 font-mono text-[10px] font-medium tracking-[0.15em] uppercase',
          isDark ? 'text-stone-gray' : 'text-carbon-black',
        ].join(' ')}
      >
        <a
          href="/commercial"
          className={isDark
            ? 'hover:text-pure-white transition-colors'
            : 'hover:text-graphite transition-colors'}
        >
          Commercial
        </a>
        <a
          href="/government-aerospace"
          className={isDark
            ? 'hover:text-pure-white transition-colors'
            : 'hover:text-graphite transition-colors'}
        >
          Government &amp; Aerospace
        </a>
        <a
          href="#contact"
          className={[
            'px-6 py-2.5 border transition-colors duration-300',
            isDark
              ? 'border-technical-bronze text-technical-bronze hover:bg-technical-bronze hover:text-carbon-black'
              : 'border-carbon-black text-carbon-black hover:bg-carbon-black hover:text-pure-white',
          ].join(' ')}
        >
          Contact
        </a>
      </nav>

      {/* Mobile hamburger */}
      <button
        className={`md:hidden p-2 ${isDark ? 'text-pure-white' : 'text-carbon-black'}`}
        aria-label="Menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
