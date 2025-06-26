import React from 'react';
export function Footer() {
  return <footer className="bg-[#333333] text-white py-8 px-4 text-sm">
      <div className="container mx-auto max-w-3xl">
        <div className="flex flex-col md:flex-row justify-between mb-6 pb-6 border-b border-gray-700">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-3">
              <img src="https://placehold.co/40x40/F2DDD6/D66A5E?text=HW&font=playfair" alt="Health & Wellness Journal" className="w-8 h-8 md:w-10 md:h-10 rounded" />
              <div className="text-xs md:text-sm font-serif">
                Health & Wellness Journal
              </div>
            </div>
            <p className="text-gray-400 text-xs max-w-xs">
              Dedicated to bringing you the latest research and breakthroughs in
              health, wellness, and natural alternatives.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div>
              <h4 className="font-medium mb-3 text-[#F2DDD6]">Journal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Latest Issues
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Subscribe
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-[#F2DDD6]">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs">
          <p className="mb-2">
            * These statements have not been evaluated by the FDA. This product
            is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p className="mb-2">
            Individual results may vary. The testimonials presented are from
            real people and may not reflect the typical purchaser's experience.
          </p>
          <p className="mt-4">
            © 2023 Health & Wellness Journal. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>;
}