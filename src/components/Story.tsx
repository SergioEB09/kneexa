import React from 'react';
export function Story() {
  return <section className="bg-white py-10 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="prose lg:prose-lg mx-auto">
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-px bg-[#E5E0DC] flex-grow"></div>
            <span className="text-sm uppercase tracking-wider text-[#666666] whitespace-nowrap px-4">
              Her Story
            </span>
            <div className="h-px bg-[#E5E0DC] flex-grow"></div>
          </div>
          <p className="text-xl leading-relaxed mb-6 font-serif italic">
            It was 7:30 AM on a Tuesday when Linda Martinez realized she had
            become 'that woman.'
          </p>
          <div className="my-8 relative">
           <img src="/chatgpt_02.png" alt="A woman grimacing in pain while holding onto a stair railing, with a concerned young girl watching" className="w-full rounded-lg shadow-lg" />
            <div className="absolute -left-4 -bottom-4 bg-[#FDF9F6] text-[#333333] text-sm px-4 py-2 rounded shadow-lg transform -rotate-2 max-w-[250px]">
              <p className="text-sm italic mb-0">
                "That moment when Emma saw me struggling... it broke my heart" -
                Linda
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 my-8">
            <div className="w-full md:w-1/2">
              <p className="text-lg leading-relaxed mb-6">
                At 58, Linda had been dealing with knee pain for three years.
                What started as occasional stiffness had evolved into a daily
                prison that dictated every move she made.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The stairs in her two-story home had become her daily nemesis.
                Each step was a battle – gripping the railing with white
                knuckles, taking one stair at a time, wincing with each
                movement.
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-[#F2DDD6] p-6 rounded-lg">
              <blockquote className="italic border-l-4 border-[#D66A5E] pl-4 mb-0">
                "I remember the exact moment I knew things had to change," Linda
                tells me, her voice catching. "My 6-year-old granddaughter,
                Emma, was standing at the bottom of the stairs, watching me
                struggle. She asked me, 'Grandma, why do you walk like
                Great-Grandma now?' Great-Grandma is 89 and uses a walker."
              </blockquote>
            </div>
          </div>
          <p className="text-lg leading-relaxed mb-6">
            That innocent question hit Linda like a physical blow. This vibrant
            woman who had raised four children, run a successful business, and
            always been the "fun grandma" was now being compared to someone
            three decades older.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 my-8 border-l-4 border-[#D66A5E]">
            <p className="text-lg font-medium mb-4">
              Linda's daily reality had become:
            </p>
            <ul className="list-none pl-0 space-y-3">
              <li className="flex items-start">
                <span className="text-[#D66A5E] mr-2">•</span>
                Gripping handrails just to navigate her own home
              </li>
              <li className="flex items-start">
                <span className="text-[#D66A5E] mr-2">•</span>
                Making excuses to avoid playing with her grandchildren
              </li>
              <li className="flex items-start">
                <span className="text-[#D66A5E] mr-2">•</span>
                Planning her day around when her knees would "give out"
              </li>
              <li className="flex items-start">
                <span className="text-[#D66A5E] mr-2">•</span>
                Watching life pass by from the sidelines
              </li>
            </ul>
          </div>
          <p className="text-lg leading-relaxed mb-6">
            That night, Linda couldn't sleep. Not from the pain – though her
            knees throbbed constantly – but from the crushing realization that
            she was losing herself, piece by piece, to this invisible enemy.
          </p>
          <div className="flex items-center justify-center my-8">
            <div className="max-w-xl bg-[#FDF9F6] p-6 rounded-lg border border-[#E5E0DC] shadow-sm">
              <blockquote className="italic text-xl font-serif text-center mb-0">
                "I lay there thinking about all the moments I was missing. Emma
                had stopped asking me to play. My husband had stopped suggesting
                walks. I was disappearing from my own life."
              </blockquote>
            </div>
          </div>
          <p className="text-lg leading-relaxed mb-6">
            But what happened next changed everything. In just 10 minutes a day,
            using what she now calls her "weird little morning ritual," Linda
            found a way back to herself. No pills. No surgery. No expensive
            treatments.
          </p>
          <p className="text-xl font-semibold my-8 text-center bg-[#F2DDD6] py-4 px-6 rounded-lg">
            Here's how she did it...
          </p>
        </div>
      </div>
    </section>;
}