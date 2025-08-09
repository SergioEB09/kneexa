import React, { useMemo } from 'react';
import Header from './components/Header';                 // default
import Hero from './components/Hero';                     // default
import { Story } from './components/Story';               // named
import RealProblem from './components/RealProblem';       // default
import { FirstExperience } from './components/FirstExperience'; // named
import { Solution } from './components/Solution';         // named
import { Benefits } from './components/Benefits';         // named
import { Testimonials } from './components/Testimonials'; // named
import { FAQ } from './components/FAQ';                   // named
import { CallToAction } from './components/CallToAction'; // named
import { Footer } from './components/Footer';             // ← named

function App() {
  // Build the PDP href once per load, preserving UTMs + A/B variant
  const { pdpHref, variant } = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const v = (params.get('v') || 'A').toUpperCase(); // A or B
    params.set('v', v);
    if (!params.has('src')) params.set('src', 'presell'); // keep your source tag
    return {
      pdpHref: `https://novaluxcol.com/products/kneexa-relief-system?${params.toString()}`,
      variant: v,
    };
  }, []);

  // Track sticky CTA clicks (Meta + GA4/GTM)
  const handlePdpClick = () => {
    (window as any).fbq?.('trackCustom', 'PresellToPDP', { variant });
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: 'presell_to_pdp', variant });
  };

  return (
    <>
      <Header />
      <Hero />
      <Story />
      <RealProblem />
      <Solution />
      <FirstExperience />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />

      {/* Sticky ATC */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#FDF9F6] border-t border-[#E5E0DC] shadow-sm py-3 px-4 z-50">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex items-center space-x-4">
            <div className="text-[#333333] font-serif italic text-sm md:text-base">
              Kneexa™ Relief System
            </div>
            <div className="flex items-center text-xs md:text-sm text-[#666666]">
              <span className="flex text-[#D66A5E] mr-1">★★★★★</span>
              <span className="whitespace-nowrap">4.9 (2,847)</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <div className="text-xs md:text-sm text-[#D66A5E] font-medium whitespace-nowrap">
              Only 17 units left
            </div>
            <a
              href={pdpHref}
              onClick={handlePdpClick}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D66A5E] hover:bg-[#C55D52] text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-colors flex items-center space-x-2"
            >
              <span>Check Availability</span>
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
