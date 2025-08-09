import React from "react";

/** Shared CTA (kept for later use, but not rendered here) */
const CTA: React.FC<{ variant: string }> = ({ variant }) => (
  <a
    href={`https://novaluxcol.com/products/kneexa-relief-system?src=presell&v=${variant}`}
    onClick={() => {
      // Meta Pixel
      // @ts-ignore
      window.fbq && window.fbq("trackCustom", "PresellToPDP", { variant });
      // GA4
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: "presell_to_pdp", variant });
    }}
    className="inline-flex items-center justify-center px-5 py-3 mt-4 font-medium text-white bg-[#D66A5E] rounded-lg shadow hover:opacity-90"
  >
    See How Kneexa Works →
  </a>
);

/** Reusable trust badges (inline SVG, no images) */
const TrustBadges: React.FC = () => (
  <div
    className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mt-2 mb-2"
    aria-label="Trust badges"
  >
    {/* 90-Day Money-Back */}
    <div className="inline-flex items-center gap-2 bg-white border border-[#E5E0DC] rounded-full px-3.5 py-2 text-sm font-medium text-[#333] shadow-sm">
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#D66A5E]" aria-hidden="true">
        <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8.5 12l2.2 2.2L15.5 9.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>90-Day Money-Back Guarantee</span>
    </div>

    {/* FDA-Cleared */}
    <div className="inline-flex items-center gap-2 bg-white border border-[#E5E0DC] rounded-full px-3.5 py-2 text-sm font-medium text-[#333] shadow-sm">
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#D66A5E]" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M12 7v10M7 12h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
      <span>FDA-Cleared Device</span>
    </div>

    {/* 35,000+ Women Helped */}
    <div className="inline-flex items-center gap-2 bg-white border border-[#E5E0DC] rounded-full px-3.5 py-2 text-sm font-medium text-[#333] shadow-sm">
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#D66A5E]" aria-hidden="true">
        <path d="M8 13a4 4 0 118 0" fill="none" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M2 19a6 6 0 0110-4 6 6 0 0110 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
      <span>35,000+ Women Helped</span>
    </div>
  </div>
);

/** Variant A */
const HeroA: React.FC = () => (
  <section className="py-12 px-4 bg-[#FDF9F6]">
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

        <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-4 text-[#333333]">
          Chronic Knee pain isn’t ‘just aging.’ It’s often trapped inflammation. Meet the 20-minute 4-in-1 therapy that helps flush inflammation.
        </h1>

        <p className="text-lg text-[#444] max-w-3xl mx-auto">
          Pills numb pain but don’t fix <b>trapped inflammation</b> and{" "}
          <b>slow circulation</b>. This PT-inspired <b>4-in-1 knee device</b> helps
          reset that cycle—drug-free.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-3 text-sm">
          {["Heat", "Red Light", "Compression", "Massage"].map((c) => (
            <span key={c} className="px-3 py-1 rounded-full bg-[#F2DDD6] text-[#333]">
              {c}
            </span>
          ))}
        </div>

        {/* CTA removed */}
      </div>

      <div className="max-w-2xl mx-auto mb-2 relative">
        <img
          src="/chatgpt_01.jpg"
          alt="A woman enjoying her morning coffee with a warm smile after finding relief from chronic pain"
          className="w-full rounded-lg shadow-lg mb-8"
          loading="eager"
        />
        <div className="absolute -right-4 -top-4 bg-[#D66A5E] text-white text-sm px-4 py-2 rounded-full shadow-lg transform rotate-3">
          As seen in Health Today
        </div>
      </div>

      {/* NEW: Trust badges under the image */}
      <TrustBadges />

      <p className="text-sm text-[#666666] mt-2 text-center italic bg-[#F2DDD6] p-4 rounded-lg max-w-2xl mx-auto">
        "I went from barely able to climb stairs to playing tag with my
        grandkids — all thanks to this simple morning routine"
      </p>

      <div className="flex justify-center items-center space-x-4 md:space-x-8 py-6 border-t border-b border-[#E5E0DC] text-sm md:text-base mt-6">
        <div className="flex items-center space-x-2">
          <span className="text-[#666666]">Reading Time:</span>
          <span className="font-medium">8 min</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[#666666]">Last Updated:</span>
          <span className="font-medium">October 2024</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[#666666]">4.9</span>
          <div className="flex text-[#D66A5E]">★★★★★</div>
          <span className="text-[#666666] hidden md:inline">(2,847 reviews)</span>
        </div>
      </div>
    </div>
  </section>
);

/** Variant B */
const HeroB: React.FC = () => (
  <section className="py-12 px-4 bg-[#FDF9F6]">
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

        <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-4 text-[#333333]">
          Tried pills, braces, shots? Here’s why your knees still hurt—and 
          the 20-minute at-home 4-in-1 therapy that finally helps
        </h1>

        <p className="text-lg text-[#444] max-w-3xl mx-auto">
          Chronic knee pain lingers when <b>inflammation gets trapped</b> and{" "}
          <b>circulation slows</b>. Physical therapists combine{" "}
          <b>Heat, Red Light, Compression &amp; Massage</b> to reset that cycle —
          Kneexa brings it home in one device.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-3 text-sm">
          {["Heat", "Red Light", "Compression", "Massage"].map((c) => (
            <span key={c} className="px-3 py-1 rounded-full bg-[#F2DDD6] text-[#333]">
              {c}
            </span>
          ))}
        </div>

        {/* CTA removed */}
      </div>

      <div className="max-w-2xl mx-auto mb-2 relative">
        <img
          src="/chatgpt_01.jpg"
          alt="A woman enjoying her morning coffee with a warm smile after finding relief from chronic pain"
          className="w-full rounded-lg shadow-lg mb-8"
          loading="eager"
        />
        <div className="absolute -right-4 -top-4 bg-[#D66A5E] text-white text-sm px-4 py-2 rounded-full shadow-lg transform rotate-3">
          As seen in Health Today
        </div>
      </div>

      {/* NEW: Trust badges under the image */}
      <TrustBadges />

      <p className="text-sm text-[#666666] mt-2 text-center italic bg-[#F2DDD6] p-4 rounded-lg max-w-2xl mx-auto">
        "I went from barely able to climb stairs to playing tag with my
        grandkids — all thanks to this simple morning routine"
      </p>

      <div className="flex justify-center items-center space-x-4 md:space-x-8 py-6 border-t border-b border-[#E5E0DC] text-sm md:text-base mt-6">
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
          <span className="text-[#666666] hidden md:inline">(2,847 reviews)</span>
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
