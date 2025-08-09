import React from "react";

/** (Kept for later; not rendered here) */
const CTA: React.FC<{ variant: string }> = ({ variant }) => (
  <a
    href={`https://novaluxcol.com/products/kneexa-relief-system?src=presell&v=${variant}`}
    onClick={() => {
      // @ts-ignore
      window.fbq && window.fbq("trackCustom", "PresellToPDP", { variant });
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: "presell_to_pdp", variant });
    }}
    className="inline-flex items-center justify-center px-5 py-3 mt-4 font-medium text-white bg-[#D66A5E] rounded-lg shadow hover:opacity-90"
  >
    See How Kneexa Works →
  </a>
);

/** Trust badges — mobile shows ratings beneath the 35,000+ badge */
const TrustBadges: React.FC = () => (
  <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-1 mb-2 px-2" aria-label="Trust badges">
    {/* 90-Day Money-Back */}
    <div className="inline-flex items-center gap-1.5 bg-white border border-[#E5E0DC] rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-[#333] shadow-sm">
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#D66A5E]" aria-hidden="true">
        <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8.5 12l2.2 2.2L15.5 9.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>90-Day Money-Back</span>
    </div>

    {/* FDA-Cleared */}
    <div className="inline-flex items-center gap-1.5 bg-white border border-[#E5E0DC] rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-[#333] shadow-sm">
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#D66A5E]" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M12 7v10M7 12h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
      <span>FDA-Cleared Device</span>
    </div>

    {/* 35,000+ Women Helped + MOBILE ratings underneath */}
    <div className="flex flex-col items-center">
      <div className="inline-flex items-center gap-1.5 bg-white border border-[#E5E0DC] rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-[#333] shadow-sm">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#D66A5E]" aria-hidden="true">
          <path d="M8 13a4 4 0 118 0" fill="none" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M2 19a6 6 0 0110-4 6 6 0 0110 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
        <span>35,000+ Women Helped</span>
      </div>

      {/* Mobile-only rating under the badge */}
      <div className="sm:hidden mt-1 text-[11.5px] text-[#666] flex items-center gap-1">
        <span className="font-semibold text-[#333]">4.9</span>
        <span className="text-[#D66A5E]" aria-hidden="true">★★★★★</span>
        <span>(2,847 reviews)</span>
        <span className="sr-only">out of five stars</span>
      </div>
    </div>
  </div>
);

/** Variant A */
const HeroA: React.FC = () => (
  <section className="py-8 sm:py-10 md:py-12 px-3 sm:px-4 bg-[#FDF9F6]">
    <div className="container mx-auto max-w-4xl">
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <span className="text-[11px] sm:text-sm uppercase tracking-wider text-[#666]">
            HEALTH & WELLNESS SPECIAL REPORT
          </span>
          <span className="bg-[#D66A5E] text-white text-[10px] sm:text-xs px-2 py-1 rounded">
            TRENDING
          </span>
        </div>

        {/* HEADLINE (bigger) */}
        <h1 className="font-serif text-[24px] leading-tight sm:text-5xl md:text-6xl lg:text-[56px] md:leading-tight mb-2 sm:mb-3 text-[#333]">
          How My Chronic Knee Pain Became A Problem And Why...
        </h1>

        {/* SUBHEAD (smaller) */}
        <p className="text-[14px] sm:text-base md:text-lg text-[#444] max-w-3xl mx-auto">
          I was planning my entire day around my knee pain—when to take pills, where to sit, how to avoid stairs. Then I discovered the hidden cause they never told me about...
        </p>
        {/* chips + CTA removed */}
      </div>

      <div className="max-w-2xl mx-auto mb-1 relative">
        <img
          src="/chatgpt_01.jpg"
          alt="Woman using the Kneexa device at home"
          className="w-full rounded-xl shadow-lg mb-6 sm:mb-8"
          loading="eager"
          decoding="async"
          sizes="(min-width: 640px) 640px, 100vw"
        />
        {/* Hide ribbon on very small screens so it doesn't overlap */}
        <div className="hidden sm:flex items-center absolute -right-4 -top-4 bg-[#D66A5E] text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg rotate-3 select-none" aria-hidden="true">
          As seen in Health Today
        </div>
      </div>

      <TrustBadges />

      <p className="text-[13px] sm:text-sm text-[#666] mt-2 text-center italic bg-[#F2DDD6] px-3 py-3 sm:p-4 rounded-lg max-w-2xl mx-auto">
        "I went from barely able to climb stairs to playing tag with my grandkids — all thanks to this simple morning routine"
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 py-5 sm:py-6 border-t border-b border-[#E5E0DC] text-[13px] sm:text-base mt-5">
        <div className="flex justify-center items-center gap-1.5">
          <span className="text-[#666]">Reading Time:</span>
          <span className="font-medium">8 min</span>
        </div>
        <div className="flex justify-center items-center gap-1.5">
          <span className="text-[#666]">Last Updated:</span>
          <span className="font-medium">October 2024</span>
        </div>
        {/* Desktop-only ratings */}
        <div className="hidden sm:flex justify-center items-center gap-1.5">
          <span className="text-[#666]">4.9</span>
          <div className="flex text-[#D66A5E]" aria-hidden="true">★★★★★</div>
          <span className="text-[#666]">(2,847 reviews)</span>
        </div>
      </div>
    </div>
  </section>
);

/** Variant B */
const HeroB: React.FC = () => (
  <section className="py-8 sm:py-10 md:py-12 px-3 sm:px-4 bg-[#FDF9F6]">
    <div className="container mx-auto max-w-4xl">
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <span className="text-[11px] sm:text-sm uppercase tracking-wider text-[#666]">
            HEALTH & WELLNESS SPECIAL REPORT
          </span>
          <span className="bg-[#D66A5E] text-white text-[10px] sm:text-xs px-2 py-1 rounded">
            TRENDING
          </span>
        </div>

        {/* HEADLINE (bigger) */}
        <h1 className="font-serif text-[24px] leading-tight sm:text-5xl md:text-6xl lg:text-[56px] md:leading-tight mb-2 sm:mb-3 text-[#333]">
          How My Chronic Knee Pain Went From Bad To TERRIBLE... A Wakeup Call For People With Knee Conditions
        </h1>

        {/* SUBHEAD (smaller) */}
        <p className="text-[14px] sm:text-base md:text-lg text-[#444] max-w-3xl mx-auto">
         I thought I'd tried everything—pills, shots, braces, therapy. But the day I could barely get out of bed changed everything. 
         What I discovered about circulation and inflammation finally explained why nothing had worked...
        </p>
        {/* chips + CTA removed */}
      </div>

      <div className="max-w-2xl mx-auto mb-1 relative">
        <img
          src="/chatgpt_01.jpg"
          alt="Woman using the Kneexa device at home"
          className="w-full rounded-xl shadow-lg mb-6 sm:mb-8"
          loading="eager"
          decoding="async"
          sizes="(min-width: 640px) 640px, 100vw"
        />
        <div className="hidden sm:flex items-center absolute -right-4 -top-4 bg-[#D66A5E] text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg rotate-3 select-none" aria-hidden="true">
          As seen in Health Today
        </div>
      </div>

      <TrustBadges />

      <p className="text-[13px] sm:text-sm text-[#666] mt-2 text-center italic bg-[#F2DDD6] px-3 py-3 sm:p-4 rounded-lg max-w-2xl mx-auto">
        "I went from barely able to climb stairs to playing tag with my grandkids — all thanks to this simple morning routine"
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 py-5 sm:py-6 border-t border-b border-[#E5E0DC] text-[13px] sm:text-base mt-5">
        <div className="flex justify-center items-center gap-1.5">
          <span className="text-[#666]">Reading Time:</span>
          <span className="font-medium">8 min</span>
        </div>
        <div className="flex justify-center items-center gap-1.5">
          <span className="text-[#666]">Last Updated:</span>
          <span className="font-medium">October 2024</span>
        </div>
        {/* Desktop-only ratings */}
        <div className="hidden sm:flex justify-center items-center gap-1.5">
          <span className="text-[#666]">4.9</span>
          <div className="flex text-[#D66A5E]" aria-hidden="true">★★★★★</div>
          <span className="text-[#666]">(2,847 reviews)</span>
        </div>
      </div>
    </div>
  </section>
);

/** Switch by ?v=A|B (default A) */
export default function Hero() {
  const v = (new URLSearchParams(window.location.search).get("v") || "A").toUpperCase();
  return v === "B" ? <HeroB /> : <HeroA />;
}
