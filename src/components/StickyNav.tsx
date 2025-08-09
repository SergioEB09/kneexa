import React, { useEffect, useMemo, useState } from "react";

export default function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Build PDP URL once, preserving UTMs + variant
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
    // Meta
    // @ts-ignore
    window.fbq?.("trackCustom", "PresellToPDP", { variant });
    // GA4
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: "presell_to_pdp", variant });
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 w-full ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="bg-[#FDF9F6] border-b border-[#E5EDDC] shadow-sm py-3 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            {/* ...left content unchanged... */}
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

