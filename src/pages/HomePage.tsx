import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DivisionCards } from '../components/DivisionCards';
import { SynergyCTA } from '../components/SynergyCTA';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F3F2EE]">

      <Header theme="light" />

      <main className="flex-1 flex flex-col pt-[72px]">
        <section className="min-h-[calc(100vh-72px)] flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-8">

          {/* Page headline */}
          <div className="text-center max-w-5xl mx-auto mb-16 md:mb-20">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-wide text-carbon-black mb-6 uppercase leading-tight">
              Build what your next level requires.
            </h1>
            <div className="w-14 h-[2px] bg-technical-bronze mx-auto mb-8" />
            <p className="text-base md:text-lg text-graphite font-light max-w-2xl mx-auto">
              Choose the infrastructure path designed for your organization.
            </p>
          </div>

          <DivisionCards />
        </section>

        <SynergyCTA />
      </main>

      <Footer theme="dark" />
    </div>
  );
}
