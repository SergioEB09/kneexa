import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { RealProblem } from './components/RealProblem';
import { FirstExperience } from './components/FirstExperience';
import { Solution } from './components/Solution';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Story />
      <RealProblem />
      <FirstExperience />
      <Solution />
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
              href="https://novaluxcol.com/products/kneexa-relief-system"
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
