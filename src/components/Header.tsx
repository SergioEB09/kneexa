import React from 'react';
export function Header() {
  return <header className="bg-[#FDF9F6] border-b border-[#E5E0DC] py-3 px-4">
      <div className="container mx-auto max-w-5xl flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="https://placehold.co/40x40/F2DDD6/D66A5E?text=HW&font=playfair" alt="Health & Wellness Journal" className="w-10 h-10 rounded" />
          <div className="text-sm text-[#666666] font-serif">
            Health & Wellness Journal
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-sm text-[#666666] hover:text-[#333333]">
            Subscribe
          </a>
          <a href="#" className="text-sm text-[#666666] hover:text-[#333333]">
            Sign In
          </a>
        </div>
      </div>
    </header>;
}