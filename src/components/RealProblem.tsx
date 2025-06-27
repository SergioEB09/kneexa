import React from 'react';

export function RealProblem() {
  return (
    <section className="bg-[#FDF9F6] py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* IMAGE + QUOTE block at the top */}
<div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
  {/* LEFT SIDE — TEXT + QUOTE */}
  <div className="w-full lg:w-1/2">
    <p className="text-lg leading-relaxed mb-4">
      At 58, Linda had been dealing with knee pain for three years. What started as occasional stiffness had evolved into daily agony that dictated every decision she made.
    </p>
    <blockquote className="bg-[#F2DDD6] text-[#333] italic text-base rounded-lg px-6 py-4 shadow leading-relaxed">
      <p>
        "I remember the exact moment I knew things had to change," Linda tells me over coffee. "My 6-year-old granddaughter, Emma, asked me why I walked like her great-grandmother… who’s 89 and uses a walker."
      </p>
    </blockquote>
  </div>

  {/* RIGHT SIDE — IMAGE + CAPTION */}
  <div className="w-full lg:w-1/2 relative">
    <img src="/chatgpt_02.png" alt="Linda on stairs with Emma watching" className="rounded-lg shadow-lg w-full" />
    <figcaption className="italic text-sm text-gray-600 mt-2 bg-white shadow px-4 py-2 rounded">
  "That moment when Emma saw me struggling... it broke my heart" – <strong>Linda</strong>
</figcaption>

  </div>
</div>

        {/* Section title */}
        <h2 className="text-xl md:text-3xl font-bold text-[#333] text-center mb-8">
          The Real Problem Doctors Don’t Want You to Know
        </h2>

        {/* Main Content */}
        <p className="text-lg leading-relaxed mb-4">
          Linda’s story isn’t unique. If you’re reading this, you probably recognize yourself in her struggle.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          But here’s what Linda discovered that changed everything: Her knee pain wasn’t from “just getting older.”
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Despite what her doctor told her (“It’s normal at your age”), Linda’s pain had a specific, fixable cause.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Linda had heard this same dismissive response from three different doctors. Each one offered the same “solutions”:
        </p>

        <div className="bg-white rounded-lg border-l-4 border-[#D66A5E] p-6 shadow-sm mb-6">
          <ul className="space-y-3">
            <li><span className="font-medium text-[#D66A5E]">1.</span> Stronger pain medications (with worse side effects)</li>
            <li><span className="font-medium text-[#D66A5E]">2.</span> Expensive injections that wore off in weeks</li>
            <li><span className="font-medium text-[#D66A5E]">3.</span> Joint replacement surgery as the “final option”</li>
            <li><span className="font-medium text-[#D66A5E]">4.</span> Physical therapy that was too painful to complete</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed mb-4">
          But Linda began to realize something disturbing. These “solutions” weren’t actually solving anything.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The pills masked her pain for a few hours, then it returned worse than before. The side effects — stomach problems, brain fog, potential addiction — were almost worse than the knee pain itself.
        </p>

        <blockquote className="italic text-[#333] text-lg font-medium my-8 pl-6 border-l-4 border-[#D66A5E]">
          “I was spending $200 a month on medications that made me feel like a zombie,” Linda recalls. “And my knees still hurt.”
        </blockquote>

        <p className="text-lg leading-relaxed mb-4">
          Linda calculated that her knee pain was costing her:
        </p>

        <div className="bg-white rounded-lg border-l-4 border-[#D66A5E] p-6 shadow-sm mb-6">
          <ul className="space-y-3">
            <li>$2,400 per year in medications</li>
            <li>$180 per physical therapy session (with minimal results)</li>
            <li>Thousands in potential surgery costs</li>
            <li>But worst of all… her quality of life</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed mb-4">
          She was missing:
        </p>

        <div className="bg-white rounded-lg border-l-4 border-[#D66A5E] p-6 shadow-sm mb-6">
          <ul className="space-y-3">
            <li>Precious moments with grandchildren</li>
            <li>Travel opportunities with her husband</li>
            <li>Simple pleasures like gardening and walking</li>
            <li>Her sense of independence and vitality</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed mb-4">
          The breaking point came when Emma asked, “Grandma, why don’t you play with me anymore?”
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Linda realized her knee pain wasn’t just affecting her body — it was stealing her identity as the fun, active grandmother she wanted to be.
        </p>

        <div className="bg-[#F2DDD6] rounded-md p-6 mt-8 text-center">
          <p className="italic font-medium text-[#333]">
            “I refused to accept that this was my new normal,” Linda says. “There had to be a better way.”
          </p>
        </div>
      </div>
    </section>
  );
}