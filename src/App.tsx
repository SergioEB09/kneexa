import React from 'react';
import { Header } from './components/Header';
import StickyNav from './components/StickyNav';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { FirstExperience } from './components/FirstExperience';
import { RealProblem } from './components/RealProblem';
export function App() {
  return <div className="min-h-screen bg-[#FDF9F6] text-[#333333] font-sans overflow-x-hidden w-full">
      <Header />
      <StickyNav />
      <main className="flex-grow overflow-x-hidden w-full">
        <Hero />
        <Story />
        <Problem />
        <RealProblem />
        <FirstExperience />
        <Solution />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>;

