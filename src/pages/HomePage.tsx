import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DivisionCards } from '../components/DivisionCards';
import { SynergyCTA } from '../components/SynergyCTA';
import heroBg from '../assets/images/hero_bg_minimal_1784711546485.jpg';

export default function HomePage() {
  return (
    <div
      className="w-full min-h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="fixed inset-0 bg-[#ECEAE5]/60 pointer-events-none z-0" />

      <Header />

      <main className="relative z-10 flex-1 flex flex-col pt-[80px]">
        <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center pt-24 pb-12 px-4 md:px-8">
          <div className="text-center max-w-5xl mx-auto mb-16 md:mb-20">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-wide text-carbon-black mb-6 uppercase leading-tight">
              Build what your next level requires.
            </h1>
            <div className="w-16 h-[3px] bg-technical-bronze mx-auto mb-8" />
            <p className="text-base md:text-xl text-graphite font-light max-w-2xl mx-auto">
              Choose the infrastructure path designed for your organization.
            </p>
          </div>
          <DivisionCards />
        </section>

        <SynergyCTA />
      </main>

      <Footer />
    </div>
  );
}
