import { ArrowRight, Rocket, Target, Settings, TrendingUp, Globe, Users, Calendar, Zap, BarChart2, MessageCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import commercialHero from '../assets/images/commercial_hero.jpg';
import monogram from '../assets/images/novagentec-monogram.png';
import wordmark from '../assets/images/novagentec-wordmark.png';

/* ─── Data ────────────────────────────────────────────────── */

const services = [
  {
    num: '01',
    Icon: Rocket,
    title: 'Launch',
    desc: 'We build the foundation your business needs to start strong and make a powerful first impression.',
  },
  {
    num: '02',
    Icon: Target,
    title: 'Attract',
    desc: 'We bring the right customers to you through strategy, content, and high-intent lead systems.',
  },
  {
    num: '03',
    Icon: Settings,
    title: 'Operate',
    desc: 'We streamline your daily operations with systems that save time and reduce friction.',
  },
  {
    num: '04',
    Icon: TrendingUp,
    title: 'Scale',
    desc: 'We optimize performance, increase capacity, and build infrastructure that supports long-term growth.',
  },
];

const leftSystems = [
  { Icon: Globe,    label: 'Websites',   desc: 'High-performance sites that convert visitors into clients.' },
  { Icon: Users,    label: 'CRM',        desc: 'Manage leads, customers, and opportunities in one place.' },
  { Icon: Calendar, label: 'Scheduling', desc: 'Smart booking system that reduces friction and no-shows.' },
];

const rightSystems = [
  { Icon: Zap,          label: 'Automation',       desc: 'Automate follow-ups, workflows, and communications that save time.' },
  { Icon: BarChart2,    label: 'Analytics',         desc: 'Measure what matters and make data-driven decisions.' },
  { Icon: MessageCircle,label: 'Customer Ops',      desc: 'Service delivery, communication, and client experience that build loyalty.' },
];

const industries = [
  'Hauling Services',
  'Contractors',
  'Automotive Service',
  'Salons',
  'Med Spas',
  'Professional Services',
  'And More',
];

/* ─── Component ───────────────────────────────────────────── */

export default function CommercialPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F3F2EE]">
      <Header />

      <main className="flex-1 pt-[80px]">

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative w-full min-h-[88vh] flex items-stretch overflow-hidden">

          {/* Drafting grid background */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="draftGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0B0B0B" strokeWidth="0.75" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#draftGrid)" />
            </svg>
          </div>

          {/* Left: copy */}
          <div className="relative z-10 flex flex-col justify-center w-full md:w-[48%] px-8 md:px-16 lg:px-20 py-24">
            <p className="font-mono text-[9px] tracking-[0.22em] text-brushed-silver uppercase mb-6">
              Commercial Small Business
            </p>
            <h1 className="font-heading text-[2.4rem] md:text-5xl lg:text-[3.2rem] font-semibold tracking-tight text-carbon-black uppercase leading-[1.08] mb-6">
              Business Growth<br />Infrastructure.
            </h1>
            <div className="w-12 h-[2px] bg-brushed-silver mb-8" />
            <p className="text-graphite font-light text-base md:text-lg leading-relaxed max-w-md mb-10">
              NOVAGENTEC Commercial designs the brand, customer, and operational infrastructure that helps small businesses operate with clarity and scale with confidence.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="flex items-center gap-3 bg-carbon-black text-pure-white px-8 py-4 font-mono text-[10px] tracking-[0.2em] uppercase transition-opacity hover:opacity-80"
              >
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#approach"
                className="flex items-center gap-3 border border-graphite/40 text-carbon-black px-8 py-4 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors hover:bg-carbon-black hover:text-pure-white hover:border-carbon-black"
              >
                Explore Our Approach
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[56%]">
            <img
              src={commercialHero}
              alt="Business Growth Infrastructure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F3F2EE] via-[#F3F2EE]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F3F2EE]/20 to-transparent" />
          </div>
        </section>

        {/* ── Service Architecture ───────────────────────────── */}
        <section id="approach" className="w-full bg-[#ECEAE6] border-t border-stone-gray/40 py-0">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ num, Icon, title, desc }, i) => (
              <div
                key={num}
                className={`relative p-8 md:p-10 flex flex-col gap-4 border-stone-gray/30 ${i < 3 ? 'lg:border-r' : ''} ${i < 2 ? 'sm:border-r' : ''} border-b lg:border-b-0`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}
              >
                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-stone-gray/40" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />

                <span className="font-mono text-[10px] tracking-[0.18em] text-technical-bronze uppercase">{num}</span>
                <Icon className="w-7 h-7 text-graphite" strokeWidth={1.25} />
                <h3 className="font-heading text-xl font-semibold tracking-tight text-carbon-black uppercase">{title}</h3>
                <p className="text-graphite font-light text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Connected Systems ──────────────────────────────── */}
        <section className="w-full bg-[#F3F2EE] py-24 md:py-32 px-6 md:px-12 border-t border-stone-gray/30">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

            {/* Left: copy */}
            <div>
              <p className="font-mono text-[9px] tracking-[0.22em] text-brushed-silver/70 uppercase mb-6">Connected Systems</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-carbon-black uppercase leading-tight mb-6">
                One Connected<br />Growth<br />Infrastructure
              </h2>
              <p className="text-graphite font-light text-sm leading-relaxed mb-8 max-w-xs">
                Your business runs smoother when everything is connected. We build integrated systems that work together, amplify results, and grow with you.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] uppercase text-carbon-black border-b border-carbon-black pb-1 hover:text-brushed-silver hover:border-brushed-silver transition-colors">
                See How It Works <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* Right: hub */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">

              {/* Left systems */}
              <div className="flex flex-col gap-4">
                {leftSystems.map(({ Icon, label, desc }) => (
                  <div key={label} className="border border-stone-gray/50 bg-pure-white p-4 flex items-start gap-3">
                    <Icon className="w-5 h-5 text-graphite flex-shrink-0 mt-0.5" strokeWidth={1.25} />
                    <div>
                      <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-carbon-black mb-1">{label}</p>
                      <p className="text-graphite font-light text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Center hub */}
              <div className="flex flex-col items-center gap-2 px-2">
                <div className="w-px h-8 bg-stone-gray/40" />
                <div className="border border-stone-gray/50 bg-pure-white p-5 flex flex-col items-center gap-2">
                  <img src={monogram} alt="" className="w-10 h-10 object-contain opacity-70" />
                  <img src={wordmark} alt="NOVAGENTEC" className="h-[0.7rem] w-auto object-contain opacity-40" />
                </div>
                <div className="w-px h-8 bg-stone-gray/40" />
                <p className="font-mono text-[7px] tracking-[0.15em] text-brushed-silver uppercase text-center">Customer<br />Operations</p>
              </div>

              {/* Right systems */}
              <div className="flex flex-col gap-4">
                {rightSystems.map(({ Icon, label, desc }) => (
                  <div key={label} className="border border-stone-gray/50 bg-pure-white p-4 flex items-start gap-3">
                    <Icon className="w-5 h-5 text-graphite flex-shrink-0 mt-0.5" strokeWidth={1.25} />
                    <div>
                      <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-carbon-black mb-1">{label}</p>
                      <p className="text-graphite font-light text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Industries ─────────────────────────────────────── */}
        <section className="w-full border-t border-stone-gray/40 bg-[#ECEAE6] py-6 px-6 md:px-12 overflow-x-auto">
          <div className="max-w-[1400px] mx-auto flex items-center gap-0 min-w-max">
            <p className="font-mono text-[8px] tracking-[0.2em] text-brushed-silver uppercase whitespace-nowrap pr-8 mr-8 border-r border-stone-gray/40">
              Industries We Serve
            </p>
            {industries.map((name, i) => (
              <span
                key={name}
                className={`font-mono text-[9px] tracking-[0.15em] text-graphite uppercase whitespace-nowrap px-6 ${i < industries.length - 1 ? 'border-r border-stone-gray/40' : 'text-technical-bronze'}`}
              >
                {name}
              </span>
            ))}
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────── */}
        <section id="contact" className="w-full bg-[#0B0B0B] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
          {/* Background geometry */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="ctaGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="border-l border-technical-bronze pl-8 md:pl-12">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-pure-white uppercase leading-snug">
                Build a Business<br />That Runs Better<br />and Grows Stronger.
              </h2>
            </div>
            <div>
              <p className="text-stone-gray font-light text-base leading-relaxed mb-10 max-w-sm">
                Let's build the systems and strategy that take your business to the next level.
              </p>
              <a
                href="mailto:contact@novagentec.com"
                className="group inline-flex items-center gap-4 border border-technical-bronze text-technical-bronze px-10 py-4 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors hover:bg-technical-bronze hover:text-carbon-black"
              >
                Book Your Strategy Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
