import React from "react";

export const RealProblem = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-8">
          The Real Problem Doctors Don’t Want You to Know
        </h2>

        <p className="text-lg leading-relaxed mb-4">
          Linda’s story isn’t unique. If you’re reading this, you probably recognize yourself in her struggle.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          But here’s what Linda discovered that changed everything: Her knee pain wasn’t from “just getting older.”
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Despite what her doctor told her (“It’s normal at your age”), Linda’s pain had a specific, fixable cause.
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
          <img src="/chatgpt_04.png" alt="Woman with pills" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="w-full md:w-1/2">
            <p className="text-lg mb-2">
              “Take these pills and learn to live with it,” her orthopedist had said, scribbling out a prescription for pain medication.
            </p>
            <p className="text-sm text-gray-600">Sound familiar?</p>
          </div>
        </div>

        <p className="text-lg leading-relaxed mb-4">
          Linda had heard this same dismissive response from three different doctors. Each one offered the same “solutions”:
        </p>

        <div className="bg-[#F9F5F2] p-6 rounded-lg mb-6">
          <ul className="space-y-3 text-base">
            <li>1. Stronger pain medications (with worse side effects)</li>
            <li>2. Expensive injections that wore off in weeks</li>
            <li>3. Joint replacement surgery as the “final option”</li>
            <li>4. Physical therapy that was too painful to complete</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed mb-4">
          But Linda began to realize something disturbing. These “solutions” weren’t actually solving anything.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The pills masked her pain for a few hours, then it returned worse than before. The side effects — stomach problems, brain fog, potential addiction — were almost worse than the knee pain itself.
        </p>

        <blockquote className="italic text-base border-l-4 border-[#D66A5E] pl-4 my-6">
          “I was spending $200 a month on medications that made me feel like a zombie,” Linda recalls. “And my knees still hurt.”
        </blockquote>

        <p className="text-lg leading-relaxed mb-4">
          Linda calculated that her knee pain was costing her:
        </p>

        <div className="bg-[#F2DDD6] p-6 rounded-lg mb-6">
          <ul className="space-y-3 text-base">
            <li>• $2,400 per year in medications</li>
            <li>• $180 per physical therapy session (with minimal results)</li>
            <li>• Thousands in potential surgery costs</li>
            <li>• But worst of all… her quality of life</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed mb-4">She was missing:</p>

        <div className="bg-[#F2DDD6] p-6 rounded-lg mb-6">
          <ul className="space-y-3 text-base">
            <li>• Precious moments with grandchildren</li>
            <li>• Travel opportunities with her husband</li>
            <li>• Simple pleasures like gardening and walking</li>
            <li>• Her sense of independence and vitality</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed mb-4">
          The breaking point came when Emma asked, “Grandma, why don’t you play with me anymore?”
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Linda realized her knee pain wasn’t just affecting her body — it was stealing her identity as the fun, active grandmother she wanted to be.
        </p>

        <div className="bg-[#F9F5F2] p-4 rounded-lg border-l-4 border-[#D66A5E]">
          <p className="italic text-base mb-0">
            “I refused to accept that this was my new normal,” Linda says. “There had to be a better way.”
          </p>
        </div>
      </div>
    </section>
  );
};
