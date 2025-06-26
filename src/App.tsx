import React from 'react';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Problem } from './components/Problem';
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
    <div>
      <Hero />
      <Story />
      <Problem />
      <RealProblem /> {/* <- Your new component */}
      <FirstExperience />
      <Solution />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;