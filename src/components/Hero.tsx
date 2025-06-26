import React from 'react';
export function Hero() {
  return <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-sm uppercase tracking-wider text-[#666666]">
              HEALTH & WELLNESS SPECIAL REPORT
            </span>
            <span className="bg-[#D66A5E] text-white text-xs px-2 py-1 rounded">
              TRENDING
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-6 text-[#333333]">
            Tired of Limping Through Life? This 58-Year-Old Grandmother's
            "Weird" 10-Minute Morning Ritual Changed Everything...
          </h1>
          <div className="flex items-center justify-center space-x-4 text-[#666666] text-lg mb-6">
            <img src="https://placehold.co/48x48/F2DDD6/666666?text=SM&font=playfair" alt="Sarah Matthews" className="w-12 h-12 rounded-full" />
            <div className="text-left">
              <div>By Sarah Matthews</div>
              <div className="text-sm">Health & Wellness Editor</div>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mb-8 relative">
         <img src="/chatgpt-01.png" alt="A woman enjoying her morning coffee with a warm smile after finding relief from chronic pain" />
          <div className="absolute -right-4 -top-4 bg-[#D66A5E] text-white text-sm px-4 py-2 rounded-full shadow-lg transform rotate-3">
            As seen in Health Today
          </div>
          <p className="text-sm text-[#666666] mt-4 text-center italic bg-[#F2DDD6] p-4 rounded-lg">
            "I went from barely able to climb stairs to playing tag with my
            grandkids — all thanks to this simple morning routine"
          </p>
        </div>
        <div className="flex justify-center items-center space-x-4 md:space-x-8 py-6 border-t border-b border-[#E5E0DC] text-sm md:text-base">
          <div className="flex items-center space-x-2">
            <span className="text-[#666666]">Reading Time:</span>
            <span className="font-medium">8 min</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#666666]">Last Updated:</span>
            <span className="font-medium">October 2023</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#666666]">4.9</span>
            <div className="flex text-[#D66A5E]">★★★★★</div>
            <span className="text-[#666666] hidden md:inline">
              (2,847 reviews)
            </span>
          </div>
        </div>
      </div>
    </section>;
}