import React, { useMemo } from "react";

export function CallToAction() {
  // Build tracked PDP URL once, keeping UTMs + variant
  const { href, variant } = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const v = (params.get("v") || "A").toUpperCase();
    params.set("v", v);
    if (!params.has("src")) params.set("src", "presell"); // keep your source tag
    return {
      href: `https://novaluxcol.com/products/kneexa-relief-system?${params.toString()}`,
      variant: v,
    };
  }, []);

  const handleClick = () => {
    // Meta Pixel
    (window as any).fbq?.("trackCustom", "PresellToPDP", { variant });
    // GA4 / GTM
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: "presell_to_pdp", variant });
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center space-x-2 mb-8">
          <div className="h-px bg-[#E5E0DC] flex-grow" />
          <h2 className="text-xl md:text-3xl font-bold text-center px-4 w-full max-w-3xl mx-auto mb-6">
            Want to See What Helped Linda?
          </h2>
          <div className="h-px bg-[#E5E0DC] flex-grow" />
        </div>

        <div className="prose lg:prose-lg mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="w-full md:w-1/2">
              <p className="text-lg leading-relaxed">
                This isn't a drug. It's not surgery. It's not some gimmick.
              </p>
              <p className="text-lg leading-relaxed">
                It's a 4-in-1 therapy device backed by science — and now finally
                available for home use.
              </p>
              <p className="text-lg leading-relaxed">
                You've heard her story. Now you can see what actually helped her
                walk without wincing.
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-[#F2DDD6] rounded-lg p-6 border border-[#E5E0DC] shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="bg-white px-4 py-2 rounded-full text-[#D66A5E] text-sm uppercase tracking-wider font-medium">
                    Limited Time Offer
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold mb-2">$149</p>
                  <p className="text-sm mb-4">
                    <span className="line-through">$299</span>
                    <span className="bg-[#D66A5E] text-white text-xs px-2 py-1 rounded ml-2">
                      50% OFF
                    </span>
                  </p>
                  <p className="text-sm mb-2">✓ Free Shipping</p>
                  <p className="text-sm mb-2">✓ 90-Day Money Back Guarantee</p>
                  <p className="text-sm mb-4">✓ 1-Year Warranty</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA #1 (tracked) */}
          <div className="text-center my-8">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="inline-block w-full sm:w-auto bg-[#D66A5E] hover:opacity-90 text-white font-semibold py-3 px-4 sm:px-6 rounded-xl shadow-md transition duration-200 text-sm sm:text-base leading-snug whitespace-normal"
            >
              See the Device Behind Linda&apos;s Transformation →
            </a>
            <p className="text-sm mt-4 text-[#666666]">
              No prescriptions. No appointments. No commitments. Just a chance
              to feel what it&apos;s like to move without pain.
            </p>
          </div>

          {/* Trust icons */}
          <div className="flex items-center justify-center space-x-4 md:space-x-6 my-8">
            <div className="flex flex-col items-center">
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-[#F9F5F2] flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D66A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="text-xs md:text-sm text-center">
                Free Shipping
                <br />
                Nationwide
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-[#F9F5F2] flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D66A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
              </div>
              <p className="text-xs md:text-sm text-center">
                Satisfaction
                <br />
                Guaranteed
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-[#F9F5F2] flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D66A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <p className="text-xs md:text-sm text-center">
                Secure
                <br />
                Checkout
              </p>
            </div>
          </div>

          <div className="bg-[#F9F5F2] rounded-lg p-6 my-8 text-center">
            <p className="font-serif italic text-lg mb-4">
              &quot;Every morning I wake up now, I have a choice. I can move with
              pain, or I can spend 20 minutes with my device and move freely.
              It&apos;s the easiest decision I make all day.&quot;
            </p>
            <p className="font-medium">— Linda Martinez</p>
          </div>

          {/* CTA #2 (tracked) */}
          <div className="text-center mt-8">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="bg-[#D66A5E] hover:opacity-90 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-200"
            >
              Get Your Device Now →
            </a>
            <p className="text-xs mt-4 text-[#666666]">
              *Limited quantities available due to high demand. Ships within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
