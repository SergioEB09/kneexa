import React from "react";

/** Shared CTA (tracks variant, then navigates to your PDP) */
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

/** Variant A: keep your current headline + quick mechanism primer */
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
          Knee pain isn’t ‘just aging.’ It’s often trapped inflammation. Meet the 10-minute 4-in-1 therapy that helps flush it.
        </h1>

        <p className="text-lg text-[#444] max-w-3xl mx-auto">
          Pills numb pain but don’t fix <b>trapped inflammation</b> and{" "}
          <b>slow circulation</b>. This PT-inspired <b>4-in-1 knee device</b> helps
          reset that cycle—drug-free.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-3 text-sm">
          {["Heat", "Red Light", "Compression", "Massage"].map((c) => (
            <span
              key={c}
              className="px-3 py-1 rounded-full bg-[#F2DDD6] text-[#333]"
            >
              {c}
            </span>
          ))}
        </div>

        <CTA variant="A" />
      </div>

      <div className="max-w-2xl mx-auto mb-8 relative">
        <img
          src="/chatgpt_01.jpg"
          alt="A woman enjoying her morning coffee with a warm smile after finding relief from chronic pain"
          className="w-full rounded-lg shadow-lg mb-8"
          loading="eager"
        />
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
          <span className="text-[#666666] hidden md:inline">(2,847 reviews)</span>
        </div>
      </div>
    </div>
  </section>
);

/** Variant B: root-cause headline + bridge into the same story */
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
          Tried pills, braces, shots? Here’s why knees still hurt—and 
          the 10-minute at-home 4-in-1 therapy that finally helps
        </h1>

        <p className="text-lg text-[#444] max-w-3xl mx-auto">
          Chronic knee pain lingers when <b>inflammation gets trapped</b> and{" "}
          <b>circulation slows</b>. Physical therapists combine{" "}
          <b>Heat, Red Light, Compression & Massage</b> to reset that cycle —
          Kneexa brings it home in one device.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-3 text-sm">
          {["Heat", "Red Light", "Compression", "Massage"].map((c) => (
            <span
              key={c}
              className="px-3 py-1 rounded-full bg-[#F2DDD6] text-[#333]"
            >
              {c}
            </span>
          ))}
        </div>

        <CTA variant="B" />
      </div>

      <div className="max-w-2xl mx-auto mb-8 relative">
        <img
          src="/chatgpt_01.jpg"
          alt="A woman enjoying her morning coffee with a warm smile after finding relief from chronic pain"
          className="w-full rounded-lg shadow-lg mb-8"
          loading="eager"
        />
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
          <span className="text-[#666666] hidden md:inline">(2,847 reviews)</span>
        </div>
      </div>
    </div>
  </section>
);

/** Switch by ?v=A|B (default A) */
export default function Hero() {
  const v = (new URLSearchParams(window.location.search).get("v") || "A")
    .toUpperCase();
  return v === "B" ? <HeroB /> : <HeroA />;
}
