import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DivisionCards } from '../components/DivisionCards';
import { SynergyCTA } from '../components/SynergyCTA';
import heroBg from '../assets/images/homepage_bg.png';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F3F2EE]">

      <Header theme="light" />

      <main className="flex-1 flex flex-col pt-[72px]">
        <section className="relative min-h-[calc(100vh-72px)] flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden">

          {/* Background image — anchored top-right so the structural joint sits
              above/beside the cards; faded heavily to keep mineral-white reading */}
          <div
            className="absolute inset-0 z-0"
            aria-hidden="true"
          >
            <img
              src={heroBg}
              alt=""
              className="absolute top-0 right-0 w-[75%] md:w-[58%] h-auto object-cover object-right-top select-none pointer-events-none"
              style={{ opacity: 0.28 }}
            />
            {/* Soft left fade so the text column stays pristine */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F3F2EE] via-[#F3F2EE]/70 to-transparent" />
            {/* Soft bottom fade so cards emerge cleanly */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F3F2EE]/80" />
          </div>

          {/* Page headline */}
          <div className="relative z-10 text-center max-w-5xl mx-auto mb-16 md:mb-20">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-wide text-carbon-black mb-6 uppercase leading-tight">
              Build what your next level requires.
            </h1>
            <div className="w-14 h-[2px] bg-technical-bronze mx-auto mb-8" />
            <p className="text-base md:text-lg text-graphite font-light max-w-2xl mx-auto">
              Choose the infrastructure path designed for your organization.
            </p>
          </div>

          {/* Division cards — z-10 so they sit above the faded image */}
          <div className="relative z-10 w-full">
            <DivisionCards />
          </div>

        </section>

        <SynergyCTA />
      </main>

      <Footer theme="dark" />
    </div>
  );
}
