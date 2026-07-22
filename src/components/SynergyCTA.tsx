import { ArrowRight } from 'lucide-react';

export function SynergyCTA() {
  return (
    <section id="synergy" className="w-full bg-[#0B0B0B] text-pure-white py-24 md:py-32 px-6 md:px-12 relative overflow-hidden border-t border-charcoal">
      {/* Subtle technical background grid / lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="synergyGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="30" cy="30" r="1.5" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#synergyGrid)" />
         </svg>
         <div className="absolute top-1/2 left-0 w-full h-px bg-technical-bronze/10"></div>
         <div className="absolute top-0 left-1/3 w-px h-full bg-technical-bronze/10"></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 text-center">
        <div className="w-full max-w-2xl border-l border-technical-bronze pl-8 md:pl-12 text-left">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-8 uppercase leading-snug text-pure-white">
            One Company. Two Paths.<br />One Synergy Standard.
          </h2>
          <div className="inline-block">
            <a href="/synergy" className="group flex items-center justify-center gap-4 bg-transparent border border-technical-bronze text-technical-bronze px-10 py-4 transition-colors duration-300 hover:bg-technical-bronze hover:text-carbon-black focus:outline-none focus:ring-2 focus:ring-technical-bronze focus:ring-offset-4 focus:ring-offset-carbon-black">
              <span className="font-mono text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">Build with Synergy</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
