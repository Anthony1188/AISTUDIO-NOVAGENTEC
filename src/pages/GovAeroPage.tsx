import { ArrowRight, Shield, Crosshair, Trophy, Activity, Wrench, Factory, Truck, Lock, CheckCircle, BarChart2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import govHero from '../assets/images/gov_hero.jpg';
import monogram from '../assets/images/novagentec-monogram.png';
import wordmark from '../assets/images/novagentec-wordmark.png';

/* ─── Data ────────────────────────────────────────────────── */

const capabilities = [
  {
    num: '01',
    Icon: Shield,
    title: 'Prepare',
    desc: 'Build organizational readiness with compliance, certifications, systems, and internal infrastructure.',
  },
  {
    num: '02',
    Icon: Crosshair,
    title: 'Pursue',
    desc: 'Identify opportunities, develop strategy, build teaming relationships, and position for success.',
  },
  {
    num: '03',
    Icon: Trophy,
    title: 'Win',
    desc: 'Execute capture and proposal strategies that communicate value and meet mission requirements.',
  },
  {
    num: '04',
    Icon: Activity,
    title: 'Perform',
    desc: 'Deliver with operational excellence through program management, quality, and continuous improvement.',
  },
];

const techOps = [
  { Icon: Wrench,      label: 'Program & Contract Management' },
  { Icon: Shield,      label: 'Compliance & Quality Systems' },
  { Icon: Activity,    label: 'Engineering & Technical Services' },
  { Icon: Truck,       label: 'Supply Chain & Supplier Management' },
  { Icon: Factory,     label: 'Manufacturing & Production Support' },
  { Icon: Lock,        label: 'Secure Data & Document Control' },
  { Icon: BarChart2,   label: 'Reporting & Decision Intelligence' },
];

const industries = [
  'Government Contractors',
  'Industrial Manufacturers',
  'Aerospace & Defense Suppliers',
  'Engineering Companies',
  'Technical-Service Businesses',
];

/* ─── Component ───────────────────────────────────────────── */

export default function GovAeroPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#0B0B0B] text-pure-white">
      <Header theme="dark" />

      <main className="flex-1 pt-[80px]">

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative w-full min-h-[90vh] flex items-stretch overflow-hidden bg-[#0B0B0B]">

          {/* Technical drafting overlay */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="techGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#A27B52" strokeWidth="0.5" />
                  <circle cx="0" cy="0" r="1" fill="#A27B52" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#techGrid)" />
            </svg>
          </div>

          {/* Right: hero image */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] z-0">
            <img
              src={govHero}
              alt="Government & Aerospace Infrastructure"
              className="w-full h-full object-cover object-center"
            />
            {/* Dark gradient left fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent" />
            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 to-transparent" />
          </div>

          {/* Left: copy */}
          <div className="relative z-20 flex flex-col justify-center w-full md:w-[52%] px-8 md:px-16 lg:px-20 py-28">
            <p className="font-mono text-[9px] tracking-[0.22em] text-technical-bronze uppercase mb-6">
              Contract and Technical Infrastructure
            </p>
            <h1 className="font-heading text-[2.4rem] md:text-5xl lg:text-[3rem] font-semibold tracking-tight text-pure-white uppercase leading-[1.06] mb-6">
              Mission-ready<br />infrastructure<br />for what matters most.
            </h1>
            <div className="w-12 h-[2px] bg-technical-bronze mb-8" />
            <p className="text-stone-gray font-light text-base md:text-lg leading-relaxed max-w-md mb-10">
              NOVAGENTEC Government &amp; Aerospace builds the contract, technical, and operational systems that help capable organizations prepare, pursue, execute, and perform.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="flex items-center gap-3 bg-technical-bronze text-carbon-black px-8 py-4 font-mono text-[10px] tracking-[0.2em] uppercase transition-opacity hover:opacity-85"
              >
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#approach"
                className="flex items-center gap-3 border border-stone-gray/40 text-stone-gray px-8 py-4 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors hover:border-technical-bronze hover:text-technical-bronze"
              >
                Explore Our Approach
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── Capability Architecture ────────────────────────── */}
        <section id="approach" className="w-full bg-[#0f0f0f] border-t border-[#242424] py-0">
          <div className="max-w-[1400px] mx-auto">
            {/* Section label */}
            <div className="px-8 md:px-12 pt-12 pb-6 flex items-center gap-4">
              <span className="font-mono text-[8px] tracking-[0.25em] text-brushed-silver uppercase">Our Capability Architecture</span>
              <div className="flex-1 h-px bg-[#242424]" />
            </div>

            {/* Four blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#242424]">
              {capabilities.map(({ num, Icon, title, desc }, i) => (
                <div
                  key={num}
                  className={`relative p-8 md:p-10 flex flex-col gap-5 border-[#242424] ${i < 3 ? 'lg:border-r' : ''} ${i % 2 === 0 ? 'sm:border-r lg:border-r-0' : ''} border-b lg:border-b-0`}
                >
                  {/* Corner accent */}
                  <div
                    className="absolute bottom-0 right-0 w-5 h-5 bg-technical-bronze/20"
                    style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
                  />

                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-technical-bronze uppercase">{num}</span>
                    <Icon className="w-6 h-6 text-technical-bronze/60" strokeWidth={1.25} />
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold tracking-tight text-pure-white uppercase mb-3">
                      {title}
                    </h3>
                    <p className="text-stone-gray font-light text-sm leading-relaxed">{desc}</p>
                  </div>

                  {i < 3 && (
                    <ArrowRight className="w-4 h-4 text-technical-bronze/40 mt-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Technical Operations System ────────────────────── */}
        <section className="w-full bg-[#0B0B0B] border-t border-[#242424] py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-16">
              <span className="font-mono text-[8px] tracking-[0.25em] text-brushed-silver uppercase">Technical Operations System</span>
              <div className="flex-1 h-px bg-[#242424]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

              {/* Left: system list */}
              <div className="flex flex-col gap-0">
                {techOps.map(({ Icon, label }, i) => (
                  <div
                    key={label}
                    className={`flex items-center gap-4 py-4 ${i < techOps.length - 1 ? 'border-b border-[#1e1e1e]' : ''} group cursor-default`}
                  >
                    <Icon className="w-4 h-4 text-technical-bronze/50 flex-shrink-0 group-hover:text-technical-bronze transition-colors" strokeWidth={1.25} />
                    <span className="font-mono text-[10px] md:text-xs tracking-[0.15em] text-stone-gray uppercase group-hover:text-pure-white transition-colors">
                      {label}
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#2a2a2a] ml-auto group-hover:text-technical-bronze/50 transition-colors" />
                  </div>
                ))}
              </div>

              {/* Right: visual panel */}
              <div className="border border-[#242424] bg-[#0f0f0f] p-8 md:p-10">
                {/* Header bar */}
                <div className="flex items-center justify-between mb-8 border-b border-[#242424] pb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={monogram}
                      alt=""
                      className="w-7 h-7 object-contain"
                      style={{ filter: 'brightness(0) invert(1) opacity(0.6)' }}
                    />
                    <div>
                      <p className="font-mono text-[8px] tracking-[0.2em] text-brushed-silver uppercase">Program Overview</p>
                      <p className="font-mono text-[7px] tracking-[0.15em] text-[#3a3a3a] uppercase mt-0.5">Integrated Operations Dashboard</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {['Contracts', 'Deliverables', 'Milestones', 'Risk Status', 'Action Items'].map(t => (
                      <div key={t} className="h-1.5 w-1.5 rounded-full bg-[#2a2a2a]" />
                    ))}
                  </div>
                </div>

                {/* Mock metric rows */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Quality Metrics', val: '98.4%', sub: 'Acceptance Rate' },
                    { label: 'Delivery Performance', val: 'ON TRACK', sub: '12/14 Milestones' },
                    { label: 'Supplier Status', val: '6 ACTIVE', sub: '2 Pending Review' },
                    { label: 'Compliance Control', val: '100%', sub: 'Access Verified' },
                  ].map(({ label, val, sub }) => (
                    <div key={label} className="border border-[#1e1e1e] p-4">
                      <p className="font-mono text-[7px] tracking-[0.15em] text-brushed-silver uppercase mb-3">{label}</p>
                      <p className="font-heading text-2xl font-semibold text-technical-bronze leading-none mb-1">{val}</p>
                      <p className="font-mono text-[7px] text-[#3a3a3a] uppercase tracking-wider">{sub}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[#1e1e1e] pt-5 flex items-center justify-between">
                  <img
                    src={wordmark}
                    alt="NOVAGENTEC"
                    className="h-[0.6rem] w-auto object-contain opacity-20"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                  <span className="font-mono text-[7px] tracking-[0.15em] text-[#2a2a2a] uppercase">Gov &amp; Aerospace Division</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Industries ─────────────────────────────────────── */}
        <section className="w-full border-t border-[#242424] bg-[#0f0f0f] py-6 px-6 md:px-12 overflow-x-auto">
          <div className="max-w-[1400px] mx-auto flex items-center gap-0 min-w-max">
            <p className="font-mono text-[8px] tracking-[0.2em] text-brushed-silver uppercase whitespace-nowrap pr-8 mr-8 border-r border-[#242424]">
              Industries We Support
            </p>
            {industries.map((name, i) => (
              <span
                key={name}
                className={`font-mono text-[9px] tracking-[0.15em] uppercase whitespace-nowrap px-6 ${i < industries.length - 1 ? 'border-r border-[#242424] text-stone-gray' : 'text-technical-bronze'}`}
              >
                {name}
              </span>
            ))}
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────── */}
        <section id="contact" className="w-full bg-[#080808] border-t border-[#242424] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
          {/* Technical grid */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="ctaDraftGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#A27B52" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaDraftGrid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="border-l border-technical-bronze pl-8 md:pl-12">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-pure-white uppercase leading-snug">
                Build Infrastructure<br />That Delivers<br />Mission Success.
              </h2>
            </div>
            <div>
              <p className="text-stone-gray font-light text-base leading-relaxed mb-4 max-w-sm">
                Strategic systems. Technical excellence. Operational advantage.
              </p>
              <div className="flex flex-col gap-3 mt-8">
                <a
                  href="mailto:contact@novagentec.com"
                  className="group inline-flex items-center gap-4 border border-technical-bronze text-technical-bronze px-10 py-4 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors hover:bg-technical-bronze hover:text-carbon-black"
                >
                  Request Infrastructure Briefing
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="mailto:contact@novagentec.com"
                  className="group inline-flex items-center gap-4 border border-[#2a2a2a] text-stone-gray px-10 py-4 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors hover:border-stone-gray/50 hover:text-pure-white"
                >
                  Speak with an Advisor
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
