import React from "react";

export default function RealProblem() {
  return (
    <section className="bg-[#FDF9F6] py-12 px-4">
      <div className="container mx-auto max-w-3xl text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#333]">
          The Real Problem Doctors Don’t Want You to Know
        </h2>
      </div>

      <div className="container mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-[#333]">

        <p>
          Linda’s story isn’t unique. If you’re reading this, you probably recognize yourself in her struggle.
        </p>

        <p>
          But here’s what Linda discovered that changed everything: Her knee pain wasn’t from “just getting older.”
        </p>

        <p>
          Despite what her doctor told her (“It’s normal at your age”), Linda’s pain had a specific, fixable cause.
        </p>

        <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
          <img
            src="/pexels-karolina-grabowska-5207334.jpg"
            alt="Linda holding pills"
            className="rounded-lg shadow-md w-full md:w-1/2 mb-6 md:mb-0"
          />
          <div className="md:w-1/2 space-y-2 text-base text-[#333]">
            <p>
              “Take these pills and learn to live with it,” her orthopedist had said, scribbling out a prescription for pain medication.
            </p>
            <p><strong>Sound familiar?</strong></p>
          </div>
        </div>

        <p>
          Linda had heard the same dismissive response from three different doctors. Each one offered the same “solutions”:
        </p>

        <ul className="bg-white rounded-lg border border-[#E5E0DC] p-6 shadow space-y-2 text-sm">
          <li><span className="text-[#D66A5E] mr-2">▶</span> Stronger pain medications (with worse side effects)</li>
          <li><span className="text-[#D66A5E] mr-2">▶</span> Expensive injections that wore off in weeks</li>
          <li><span className="text-[#D66A5E] mr-2">▶</span> Joint replacement surgery as the “final option”</li>
          <li><span className="text-[#D66A5E] mr-2">▶</span> Physical therapy that was too painful to complete</li>
        </ul>

        <p>
          But Linda began to realize something disturbing. These “solutions” weren’t actually solving anything.
        </p>

        <p>
          The pills masked her pain for a few hours, then it returned worse than before. The side effects—stomach problems, brain fog, potential addiction—were almost worse than the knee pain itself.
        </p>

        <blockquote className="italic text-[#333] border-l-4 border-[#D66A5E] pl-4">
          “I was spending $200 a month on medications that made me feel like a zombie,” Linda recalls. “And my knees still hurt.”
        </blockquote>

        <p>Linda calculated that her knee pain was costing her:</p>

        <ul className="bg-white rounded-lg border border-[#E5E0DC] p-6 shadow space-y-2 text-sm">
          <li><span className="text-[#D66A5E] mr-2">•</span> $2,400 per year in medications</li>
          <li><span className="text-[#D66A5E] mr-2">•</span> $180 per physical therapy session (with minimal results)</li>
          <li><span className="text-[#D66A5E] mr-2">•</span> Thousands in potential surgery costs</li>
          <li><span className="text-[#D66A5E] mr-2">•</span> But worst of all... her quality of life</li>
        </ul>

        <p>She was missing:</p>

        <ul className="bg-white rounded-lg border border-[#E5E0DC] p-6 shadow space-y-2 text-sm">
          <li><span className="text-[#D66A5E] mr-2">♥</span> Precious moments with grandchildren</li>
          <li><span className="text-[#D66A5E] mr-2">♥</span> Travel opportunities with her husband</li>
          <li><span className="text-[#D66A5E] mr-2">♥</span> Simple pleasures like gardening and walking</li>
          <li><span className="text-[#D66A5E] mr-2">♥</span> Her sense of independence and vitality</li>
        </ul>

        <div className="bg-[#F2DDD6] border border-[#E5E0DC] text-sm text-[#333] p-4 rounded-lg shadow">
          <p>
            <strong>“I refused to accept that this was my new normal.”</strong> Linda says. “There had to be a better way.”
          </p>
        </div>
      </div>
    </section>
  );
}