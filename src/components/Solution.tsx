import React from 'react';
export function Solution() {
  return <section className="bg-white py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center space-x-2 mb-8">
          <div className="h-px bg-[#E5E0DC] flex-grow"></div>
          <h2 className="text-xl md:text-3xl font-bold text-center whitespace-nowrap px-4 max-w-[90%] mx-auto">
            The Discovery That Changed Everything
          </h2>
          <div className="h-px bg-[#E5E0DC] flex-grow"></div>
        </div>
        <div className="prose lg:prose-lg mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-1/2">
              <p className="text-lg leading-relaxed">
                Linda spent weeks researching alternatives. She wasn't ready for
                surgery, and she was tired of being dependent on pills that
                barely worked.
              </p>
              <p className="text-lg leading-relaxed">
                That's when she stumbled across something unusual: a combination
                therapy that physical therapists were using with remarkable
                success, but that most people had never heard of.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-[#F9F5F2] rounded-lg p-6 h-full flex items-center">
                <blockquote className="italic border-l-4 border-[#D66A5E] pl-4 mb-0">
                  "It looked like something from a sci-fi movie," Linda laughs,
                  describing her first reaction to the device. "This wrap-around
                  thing with red lights and heating elements. I almost didn't
                  buy it because it seemed so strange."
                </blockquote>
              </div>
            </div>
          </div>
          <div className="bg-[#F2DDD6] rounded-lg p-6 mb-8">
            <p className="text-lg leading-relaxed mb-4 font-medium">
              The more Linda researched, the more intrigued she became:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#D66A5E] text-white flex items-center justify-center mr-3 flex-shrink-0">
                  <span>1</span>
                </div>
                <p className="mb-0">
                  Physical therapists were using similar technology with
                  patients
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#D66A5E] text-white flex items-center justify-center mr-3 flex-shrink-0">
                  <span>2</span>
                </div>
                <p className="mb-0">
                  The science behind it was solid (we'll explain this in a
                  moment)
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#D66A5E] text-white flex items-center justify-center mr-3 flex-shrink-0">
                  <span>3</span>
                </div>
                <p className="mb-0">
                  Real women were sharing incredible results online
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#D66A5E] text-white flex items-center justify-center mr-3 flex-shrink-0">
                  <span>4</span>
                </div>
                <p className="mb-0">
                  It addressed multiple causes of knee pain simultaneously
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-8">
            <div className="max-w-xl bg-[#F9F5F2] p-6 rounded-lg border border-[#E5E0DC] shadow-sm">
              <blockquote className="italic text-xl font-serif text-center mb-0">
                "I figured I had nothing to lose. I was already spending $200 a
                month on pills that didn't work. This cost less than one month
                of my medications, and it came with a money-back guarantee."
              </blockquote>
            </div>
          </div>
          <p className="text-lg leading-relaxed mb-6">
            The device arrived two days later. Linda was skeptical but desperate
            enough to try anything.
          </p>
          <div className="bg-[#F9F5F2] rounded-lg p-6 mb-8 border-l-4 border-[#D66A5E]">
            <blockquote className="italic mb-0">
              "I'll never forget that first morning," Linda recalls. "I strapped
              this thing on my knee, turned it on, and just... waited.
              <br />
              <br />
              Within minutes, I felt this incredible warmth spreading through my
              joint. Not just surface heat, but deep, penetrating warmth that
              seemed to reach right into the bone.
              <br />
              <br />
              Then the gentle massage started. It was like having the world's
              best physical therapist working on my knee."
            </blockquote>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3">
             <img src="/chatgpt_09.png" alt="Woman standing up with a relieved expression" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg leading-relaxed mb-4">
                After 10 minutes, Linda removed the device and stood up.
              </p>
              <blockquote className="italic border-l-4 border-[#D66A5E] pl-4 bg-[#F2DDD6] p-4 rounded-r-lg">
                "For the first time in months, I stood up without wincing," she
                says, her eyes lighting up. "I actually took a few steps around
                the kitchen just to feel what it was like to walk without pain."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>;
}