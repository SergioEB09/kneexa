import React, { useEffect, useState } from 'react';
export function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 400;
      if (show !== isVisible) setIsVisible(show);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);
return (
  <div
  className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 w-full ${
  isVisible ? 'translate-y-0' : 'translate-y-full'
}`}
  >
    <div className="bg-[#FDF9F6] border-b border-[#E5E0DC] shadow-sm py-3 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex items-center space-x-4">
            <div className="text-[#333333] font-serif italic text-sm md:text-base">
              Kneexa™ Relief System
            </div>
          </div>
          <div className="flex items-center text-xs md:text-sm text-[#666666]">
            <span className="flex text-[#D66A5E] mr-1">★★★★★</span>
            <span className="whitespace-nowrap">4.9 (2,847)</span>
          </div>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <div className="text-xs md:text-sm font-medium whitespace-nowrap text-[#D66A5E]">
              Only 17 units left
            </div>
          </div>
        </div>
      </div>
    </div>

<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
  <a
    href="https://novaluxcol.com/products/kneexa-relief-system"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition"
  >
        Check Availability
      </a>
    </div>
  </div>
);
}