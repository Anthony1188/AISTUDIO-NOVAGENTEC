import { LogoIcon } from './Logo';

export function Footer() {
  return (
    <footer className="w-full bg-[#0B0B0B] border-t border-charcoal py-8 px-6 md:px-12 text-stone-gray text-[10px] uppercase font-mono tracking-widest">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <LogoIcon className="h-[0.875rem] w-auto text-pure-white mr-[0.2em]" />
            <span className="font-heading font-semibold text-sm tracking-[0.2em] text-pure-white uppercase">OVAGENTEC</span>
          </a>
          <div className="hidden md:block w-px h-4 bg-charcoal"></div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <a href="/commercial" className="hover:text-pure-white transition-colors">Commercial Small Business</a>
            <a href="/government-aerospace" className="hover:text-pure-white transition-colors">Government & Aerospace</a>
            <a href="/about" className="hover:text-pure-white transition-colors">About</a>
            <a href="/contact" className="hover:text-pure-white transition-colors">Contact</a>
            <a href="/privacy" className="hover:text-pure-white transition-colors">Privacy</a>
          </div>
        </div>
        
        <div className="text-stone-gray/60 text-center md:text-right mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} NOVAGENTEC. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
