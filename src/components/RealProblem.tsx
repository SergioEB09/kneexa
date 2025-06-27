import React from "react";

export default function RealProblem() {
  return (
    <section className="bg-[#FDF9F6] py-12 px-4">
      <div className="container mx-auto max-w-3xl text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#333]">
          The Real Problem Doctors Don’t Want You to Know
        </h2>
      </div>
      <div className="container mx-auto max-w-3xl space-y-6">
        <p className="text-lg leading-relaxed">
          Linda’s story isn’t unique. If you’re reading this, you probably recognize yourself in her struggle.
        </p>
        <p className="text-lg leading-relaxed">
          But here’s what Linda discovered that changed everything: Her knee pain wasn’t from “just getting older.”
        </p>
        <p className="text-lg leading-relaxed">
          Despite what her doctor told her (“It’s normal at your age”), Linda’s pain had a specific, fixable cause.
        </p>
        <p className="text-lg leading-relaxed">
          Linda had heard the same dismissive response from three different doctors. Each one offered the same “solutions”:
        </p>
        <ul className="bg-white rounded-lg border border-[#E5E0DC] p-6 shadow-sm space-y-2">
          <li>
            <span className="text-[#D66A5E] mr-2">➤</span> Stronger pain medications (with worse side effects)
          </li>
          <li>
            <span className="text-[#D66A5E] mr-2">➤</span> Expensive injections that wore off in weeks
          </li>
          <li>
            <span className="text-[#D66A5E] mr-2">➤</span> Joint replacement surgery as the “final option”
          </li>
          <li>
            <span className="text-[#D66A5E] mr-2">➤</span> Physical therapy that was too painful to complete
          </li>
        </ul>
        <p className="text-lg leading-relaxed">
          But Linda began to realize something disturbing. These “solutions” weren’t actually solving anything.
        </p>
        <p className="text-lg leading-relaxed">
          The pills masked her pain for a few hours, then it returned worse than before. The side effects—stomach problems, brain fog, potential addiction—were almost worse than the knee pain itself.
        </p>
      </div>
    </section>
  );
}
