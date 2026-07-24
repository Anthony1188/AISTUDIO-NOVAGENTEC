import { ArrowRight } from 'lucide-react';
import commercialBg from '../assets/images/commercial_card_bg_1784713078439.jpg';
import govBg from '../assets/images/gov_aero_card_bg_1784713090507.jpg';
import { BrandLogo } from './BrandLogo';

const CAPABILITY_LABEL_BASE = 'flex-1 text-center font-mono text-[8px] tracking-[0.18em] uppercase py-2';

export function DivisionCards() {
  return (
    <div className="w-full max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-24">

      {/* ── Commercial Card ─────────────────────────────── */}
      <a
        href="/commercial"
        className="group block w-full outline-none focus:ring-2 focus:ring-brushed-silver focus:ring-offset-4 focus:ring-offset-[#E6E5E1]"
      >
        <div className="p-[6px] md:p-[8px] bg-gradient-to-br from-[#ffffff] via-[#d7d5cf] to-[#a7a8a5] shadow-xl w-full transition-transform duration-400 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl">
          <div className="relative bg-pure-white w-full flex flex-col overflow-hidden min-h-[420px]">

            {/* Background image */}
            <div className="absolute top-0 right-0 bottom-0 w-[62%] z-0">
              <img
                src={commercialBg}
                className="w-full h-full object-cover opacity-75 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pure-white via-pure-white/95 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 flex flex-col min-h-[420px]">

              {/* Division identifier — dark monogram, 32px, light background */}
              <div className="mb-8">
                <BrandLogo variant="monogram-only" scheme="dark" size={32} className="opacity-55" />
              </div>

              {/* Identity */}
              <div className="flex-1">
                <h2 className="font-heading text-xl md:text-2xl tracking-tight uppercase leading-tight mb-3 text-left font-extrabold text-[color:var(--color-graphite)]">
                  Commercial<br />Small Business
                </h2>
                <p className="font-mono text-[9px] tracking-[0.15em] text-graphite uppercase border-b border-stone-gray/30 pb-4 mb-6 inline-block">
                  For growing small businesses
                </p>
                <p className="text-graphite font-light leading-relaxed text-sm max-w-[260px]">
                  Growth architecture that aligns your brand, systems, and customer experience into one scalable infrastructure.
                </p>
              </div>

              {/* Capability labels + CTA */}
              <div className="mt-10">
                <div className="flex border border-stone-gray/40 mb-5">
                  {['Acquire', 'Automate', 'Grow'].map((label, i, arr) => (
                    <span
                      key={label}
                      className={`${CAPABILITY_LABEL_BASE} text-graphite${i < arr.length - 1 ? ' border-r border-stone-gray/40' : ''}`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3 border border-graphite/40 py-3 md:py-4 transition-colors duration-300 group-hover:bg-carbon-black group-hover:text-pure-white group-hover:border-carbon-black text-carbon-black">
                  <span className="font-mono text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">Enter Commercial</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </a>

      {/* ── Government & Aerospace Card ──────────────────── */}
      <a
        href="/government-aerospace"
        className="group block w-full outline-none focus:ring-2 focus:ring-technical-bronze focus:ring-offset-4 focus:ring-offset-[#E6E5E1]"
      >
        <div className="p-[6px] md:p-[8px] bg-gradient-to-br from-[#3a3a3a] via-[#1a1a1a] to-[#0a0a0a] shadow-xl w-full transition-transform duration-400 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl">
          <div className="relative bg-[#0d0d0d] w-full flex flex-col overflow-hidden min-h-[420px] border border-technical-bronze/20">

            {/* Background image */}
            <div className="absolute top-0 right-0 bottom-0 w-[62%] z-0">
              <img
                src={govBg}
                className="w-full h-full object-cover opacity-55 transition-transform duration-700 ease-out group-hover:scale-[1.03] mix-blend-lighten"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/95 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 flex flex-col min-h-[420px]">

              {/* Division identifier — white monogram, 32px, dark background */}
              <div className="mb-8">
                <BrandLogo variant="monogram-only" scheme="white" size={32} className="opacity-75" />
              </div>

              {/* Identity */}
              <div className="flex-1">
                <h2 className="font-heading text-xl md:text-2xl font-medium tracking-tight uppercase leading-tight mb-3 text-[#a27b52]">
                  Government<br />& Aerospace
                </h2>
                <p className="font-mono text-[9px] tracking-[0.15em] uppercase border-b border-technical-bronze/30 pb-4 mb-6 inline-block text-[color:var(--color-gray-50)]">
                  For contractors &amp; aerospace suppliers
                </p>
                <p className="text-stone-gray font-light leading-relaxed text-sm max-w-[260px]">
                  Mission-ready infrastructure for compliance, program execution, and operational excellence.
                </p>
              </div>

              {/* Capability labels + CTA */}
              <div className="mt-10">
                <div className="flex border border-charcoal mb-5">
                  {['Comply', 'Execute', 'Sustain'].map((label, i, arr) => (
                    <span
                      key={label}
                      className={`${CAPABILITY_LABEL_BASE} text-stone-gray${i < arr.length - 1 ? ' border-r border-charcoal' : ''}`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3 border border-technical-bronze/40 py-3 md:py-4 transition-colors duration-300 group-hover:bg-technical-bronze group-hover:text-carbon-black text-technical-bronze">
                  <span className="font-mono text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">Enter Government &amp; Aerospace</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </a>

    </div>
  );
}
