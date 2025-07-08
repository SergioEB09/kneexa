import React from "react";

export default function RealProblem() {
  return (
    <section className="bg-[#FDF9F6] py-12 px-4">
      <div className="max-w-3xl mx-auto text-[#333] text-[17px] leading-[1.7]">
        <h2 className="text-[22px] md:text-[26px] font-bold text-center mb-6">
          The Real Problem Doctors Don’t Want You to Know
        </h2>

        <p className="mb-4">
          Linda’s story isn’t unique. If you’re reading this, you probably
          recognize yourself in her struggle.
        </p>

        <p className="mb-4">
          But here’s what Linda discovered that changed everything: Her knee
          pain wasn’t from “just getting older.”
        </p>

        <p className="mb-4">
          Despite what her doctor told her (“It’s normal at your age”), Linda’s
          pain had a specific, fixable cause.
        </p>

        <p className="mb-4">
          Linda had heard the same dismissive response from three different
          doctors. Each one offered the same “solutions”:
        </p>

        <div className="bg-white border border-[#E5E0DC] rounded-lg p-6 shadow-sm space-y-3 mb-6">
          <ul className="list-none space-y-2 text-[16px]">
            <li className="flex items-start">
              <span className="text-[#D66A5E] mr-2">▶</span>
              Stronger pain medications (with worse side effects)
            </li>
            <li className="flex items-start">
              <span className="text-[#D66A5E] mr-2">▶</span>
              Expensive injections that wore off in weeks
            </li>
            <li className="flex items-start">
              <span className="text-[#D66A5E] mr-2">▶</span>
              Joint replacement surgery as the “final option”
            </li>
            <li className="flex items-start">
              <span className="text-[#D66A5E] mr-2">▶</span>
              Physical therapy that was too painful to complete
            </li>
          </ul>
        </div>

        {/* ✅ Inserted image here */}
        <div className="mb-6">
          <img
            src="/pexels-karolina-grabowska-5207334.jpg"
            alt="Sick woman with pills"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        <p className="mb-4">
          But Linda began to realize something disturbing. These “solutions”
          weren’t actually solving anything.
        </p>

        <p>
          The pills masked her pain for a few hours, then it returned worse than
          before. The side effects—stomach problems, brain fog, potential
          addiction—were almost worse than the knee pain itself.
        </p>
      </div>
    </section>
  );
}
