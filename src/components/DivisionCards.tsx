import { ArrowRight, Target, Settings, BarChart2, ShieldCheck, Box, Hexagon } from 'lucide-react';
import { LogoIcon } from './Logo';
import commercialBg from '../assets/images/commercial_card_bg_1784713078439.jpg';
import govBg from '../assets/images/gov_aero_card_bg_1784713090507.jpg';

export function DivisionCards() {
  return (
    <div className="w-full max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-24">
      {/* Commercial Card */}
      <a href="/commercial" className="group block w-full outline-none focus:ring-2 focus:ring-brushed-silver focus:ring-offset-4 focus:ring-offset-[#E6E5E1]">
        <div className="p-[6px] md:p-[8px] bg-gradient-to-br from-[#ffffff] via-[#d7d5cf] to-[#a7a8a5] shadow-xl w-full h-full transition-transform duration-400 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl">
          <div className="relative bg-pure-white w-full h-full flex flex-col justify-between overflow-hidden min-h-[440px]">
            {/* Background Image Area */}
            <div className="absolute top-0 right-0 bottom-0 w-[70%] z-0">
               <img src={commercialBg} className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.03]" alt="Commercial Infrastructure" />
               {/* Gradient fade to white on the left */}
               <div className="absolute inset-0 bg-gradient-to-r from-pure-white via-pure-white/90 to-transparent"></div>
            </div>
            
            {/* Foreground Content */}
            <div className="relative z-10 w-full md:w-[75%] p-8 md:p-10 flex flex-col h-full justify-between">
              <div>
                <div className="mb-6 text-graphite opacity-80">
                  <LogoIcon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-carbon-black mb-3 uppercase leading-tight">
                  Novagentec<br />Commercial<br />Small Business
                </h2>
                <p className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] text-graphite mb-6 uppercase border-b border-stone-gray/30 pb-4 inline-block">
                  Business Growth Infrastructure
                </p>
                <p className="text-graphite font-light leading-relaxed text-xs md:text-sm max-w-[280px]">
                  Growth architecture for local service businesses. Align your brand, systems, operations, and customer experience into one scalable infrastructure.
                </p>
              </div>
              
              <div className="mt-10">
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex flex-col items-center flex-1 text-center border-r border-stone-gray/30 last:border-0">
                    <Target className="w-4 h-4 md:w-5 md:h-5 text-graphite mb-2" strokeWidth={1.5} />
                    <span className="font-mono text-[8px] md:text-[9px] tracking-wider text-graphite uppercase">Acquire</span>
                  </div>
                  <div className="flex flex-col items-center flex-1 text-center border-r border-stone-gray/30 last:border-0">
                    <Settings className="w-4 h-4 md:w-5 md:h-5 text-graphite mb-2" strokeWidth={1.5} />
                    <span className="font-mono text-[8px] md:text-[9px] tracking-wider text-graphite uppercase">Automate</span>
                  </div>
                  <div className="flex flex-col items-center flex-1 text-center border-r border-stone-gray/30 last:border-0">
                    <BarChart2 className="w-4 h-4 md:w-5 md:h-5 text-graphite mb-2" strokeWidth={1.5} />
                    <span className="font-mono text-[8px] md:text-[9px] tracking-wider text-graphite uppercase">Grow</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 border border-graphite/40 py-3 md:py-4 transition-colors duration-300 group-hover:bg-carbon-black group-hover:text-pure-white group-hover:border-carbon-black w-full text-carbon-black">
                  <span className="font-mono text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">Enter Commercial</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Gov & Aero Card */}
      <a href="/government-aerospace" className="group block w-full outline-none focus:ring-2 focus:ring-technical-bronze focus:ring-offset-4 focus:ring-offset-[#E6E5E1]">
        <div className="p-[6px] md:p-[8px] bg-gradient-to-br from-[#3a3a3a] via-[#1a1a1a] to-[#0a0a0a] shadow-xl w-full h-full transition-transform duration-400 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl">
          <div className="relative bg-[#0d0d0d] w-full h-full flex flex-col justify-between overflow-hidden min-h-[440px] border border-technical-bronze/20">
            {/* Background Image Area */}
            <div className="absolute top-0 right-0 bottom-0 w-[75%] z-0">
               <img src={govBg} className="w-full h-full object-cover opacity-70 transition-transform duration-700 ease-out group-hover:scale-[1.03] mix-blend-lighten" alt="Government & Aerospace" />
               {/* Gradient fade to dark on the left */}
               <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/90 to-transparent"></div>
            </div>
            
            {/* Foreground Content */}
            <div className="relative z-10 w-full md:w-[75%] p-8 md:p-10 flex flex-col h-full justify-between">
              <div>
                <div className="mb-6 text-technical-bronze opacity-90">
                  <LogoIcon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-pure-white mb-3 uppercase leading-tight">
                  Novagentec<br />Government<br />& Aerospace
                </h2>
                <p className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] text-technical-bronze mb-6 uppercase border-b border-technical-bronze/30 pb-4 inline-block">
                  Contract and Technical Infrastructure
                </p>
                <p className="text-stone-gray font-light leading-relaxed text-xs md:text-sm max-w-[280px]">
                  Mission-ready infrastructure for government contractors and aerospace suppliers. Build compliance, execution, and operational excellence into every program.
                </p>
              </div>
              
              <div className="mt-10">
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex flex-col items-center flex-1 text-center border-r border-charcoal last:border-0">
                    <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-technical-bronze mb-2" strokeWidth={1.5} />
                    <span className="font-mono text-[8px] md:text-[9px] tracking-wider text-pure-white uppercase">Comply</span>
                  </div>
                  <div className="flex flex-col items-center flex-1 text-center border-r border-charcoal last:border-0">
                    <Box className="w-4 h-4 md:w-5 md:h-5 text-technical-bronze mb-2" strokeWidth={1.5} />
                    <span className="font-mono text-[8px] md:text-[9px] tracking-wider text-pure-white uppercase">Execute</span>
                  </div>
                  <div className="flex flex-col items-center flex-1 text-center border-r border-charcoal last:border-0">
                    <Hexagon className="w-4 h-4 md:w-5 md:h-5 text-technical-bronze mb-2" strokeWidth={1.5} />
                    <span className="font-mono text-[8px] md:text-[9px] tracking-wider text-pure-white uppercase">Sustain</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 border border-technical-bronze/40 py-3 md:py-4 transition-colors duration-300 group-hover:bg-technical-bronze group-hover:text-carbon-black w-full text-technical-bronze">
                  <span className="font-mono text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">Enter Government & Aerospace</span>
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
