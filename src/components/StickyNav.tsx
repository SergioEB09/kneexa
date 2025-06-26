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
  return <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 w-full ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-[#FDF9F6] border-b border-[#E5E0DC] shadow-sm py-3 px-4">
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
            <a href="https://your-shopify-store.com/products/kneexa-therapeutic-system" className="bg-[#D66A5E] hover:bg-[#C55D52] text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-colors flex items-center space-x-2">
              <span>Check Availability</span>
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>;
}