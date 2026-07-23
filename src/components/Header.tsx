import wordmark from '../assets/images/novagentec-wordmark.png';

export function Header() {
  return (
    <header className="h-[80px] w-full flex items-center justify-between px-6 md:px-12 fixed top-0 z-50 bg-[#F3F2EE]/90 backdrop-blur-md border-b border-stone-gray/20">
      <a href="/" className="flex items-center hover:opacity-70 transition-opacity">
        <img src={wordmark} alt="NOVAGENTEC" className="h-[0.95rem] md:h-[1.05rem] w-auto object-contain" />
      </a>
      <nav className="hidden md:flex items-center gap-10 font-mono text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase text-carbon-black">
        <a href="/commercial" className="hover:text-graphite transition-colors">Commercial</a>
        <a href="/government-aerospace" className="hover:text-graphite transition-colors">Government &amp; Aerospace</a>
        <a href="#contact" className="px-8 py-3 border border-carbon-black hover:bg-carbon-black hover:text-pure-white transition-colors duration-300">
          Contact
        </a>
      </nav>
      <button className="md:hidden p-2 text-carbon-black" aria-label="Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
