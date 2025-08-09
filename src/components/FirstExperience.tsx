import React from 'react';

export function FirstExperience() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center space-x-2 mb-8">
          <div className="h-px bg-[#E5E0DC] flex-grow"></div>
          <h2 className="text-xl md:text-3xl font-bold text-center px-4 w-full max-w-3xl mx-auto mb-6">
            Her First Experience
          </h2>
          <div className="h-px bg-[#E5E0DC] flex-grow"></div>
        </div>

        <div className="prose lg:prose-lg mx-auto">
          <div className="relative">
            <div className="absolute -right-4 -top-4 bg-[#D66A5E] text-white text-sm px-4 py-2 rounded-full shadow-lg transform rotate-6">
              The moment everything changed
            </div>
            <img
              src="/chatgpt_03.jpg"
              alt="Woman relaxing with the knee therapy device showing red light treatment"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          <div className="flex justify-end my-4">
            <div className="bg-[#F2DDD6] p-3 rounded-lg max-w-xs transform rotate-1 shadow-sm">
              <p className="text-sm italic mb-0 text-center">
                "That first 20-minute session changed everything" - Linda
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Linda remembers every detail of that first morning. Sitting on her couch, early sunlight streaming through the windows, she carefully followed the simple instructions.
          </p>

          <div className="bg-[#F9F5F2] rounded-lg p-6 mb-8 border-l-4 border-[#D66A5E]">
            <p className="italic mb-4 text-lg font-medium">Linda recalls the moment:</p>
            <blockquote className="border-l-4 border-[#D66A5E] pl-4 bg-white p-4 rounded-r-lg shadow-sm">
              "I was honestly skeptical at first. But as soon as I turned it on, I felt this gentle warmth start to spread through my knee. Not just surface heat – this went deeper.
              <br />
              <br />
              Then the red light therapy kicked in, and the soft massage began. It felt like someone was carefully kneading away years of tension. For the first time in months, my knee didn't feel like it was fighting against me."
            </blockquote>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <p className="text-lg leading-relaxed mb-0">
                The device's display showed a simple 20-minute countdown. Linda leaned back, closed her eyes, and let the combination of therapies do their work.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-[#F2DDD6] border border-[#E5E0DC] rounded-lg p-6">
                <div className="text-center mb-4">
                  <span className="inline-block bg-[#D66A5E] text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                    What She Felt
                  </span>
                </div>
                <ul className="space-y-3 mb-0">
                  <li className="flex items-start">
                    <span className="text-[#D66A5E] mr-2">•</span>
                    Deep, penetrating warmth that loosened stiff joints
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D66A5E] mr-2">•</span>
                    Gentle massage that released years of tension
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D66A5E] mr-2">•</span>
                    Soothing red light that seemed to calm inflammation
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D66A5E] mr-2">•</span>
                    Supportive compression that stabilized the joint
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-8 bg-white border border-[#E5E0DC] rounded-lg p-6 shadow-sm">
            <blockquote className="italic text-xl font-serif text-center mb-0">
              "When the timer beeped after 20 minutes, I almost didn't want to move. My knee felt... different. Looser. More alive. I stood up without thinking – and that's when it hit me.
              <br />
              <br />
              No wincing. No grabbing for support. I just... stood up. Like I used to. That's when I knew this wasn't just another gimmick."
            </blockquote>
          </div>

          <p className="text-lg leading-relaxed mb-6 bg-[#F9F5F2] p-4 rounded-lg font-medium text-center">
            That simple 20-minute session marked the beginning of Linda's transformation. But even she couldn't have predicted just how much her life was about to change...
          </p>
        </div>
      </div>
    </section>
  );
}
