import React, { useEffect, useMemo, useState } from "react";

export default function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 400;
      if (show !== isVisible) setIsVisible(show);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  // Build tracked PDP URL once per load, preserving UTMs + variant
  const { href, variant } = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const v = (params.get("v") || "A").toUpperCase();
    params.set("v", v);
    params.set("src", "presell"); // keep your source tag
    return {
      href: `https://novaluxcol.com/products/kneexa-relief-system?${params.toString()}`,
      variant: v,
    };
  }, []);

  const handleClick = () => {
    // Meta Pixel
    // @ts-ignore
    window.fbq?.("trackCustom", "PresellToPDP", { variant });
    // GA4 / GTM
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: "presell_to_pdp", variant });
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 w-full ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-[#FDF9F6] border-b border-[#E5EDDC] shadow-sm py-3 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            <div className="flex items-center space-x-4">
              <div className="text-[#333333] font-serif italic text-sm md:text-base">
                Kneexa™ Relief System
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

            {/* Tracked CTA */}
            <a
              href={href}
              onClick={handleClick}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D66A5E] hover:opacity-90 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
            >
              Check Availability
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
