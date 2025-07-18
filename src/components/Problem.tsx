export function Problem() {
  return (
    <section className="bg-[#F9F5F2] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex-col md:flex-row gap-8 items-center mb-8">
          <div className="w-full md:w-1/2">
            <img
              src="/pexels-koolina-grabowska-387543.jpg"
              alt="A frustrated woman looking at a pill bottle"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg leading-relaxed mb-6">
              “Take these pills and learn to live with it,” her orthopedist had said, barely looking up from his clipboard as he scribbled out yet another prescription.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Linda stared at the small bottle in her hands, fighting back tears of frustration. This was the third doctor who had dismissed her concerns with the same cavalier attitude.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 mb-8 border-l-4 border-l-[#D66A5E] shadow-sm">
          <p className="italic font-medium mb-4">Their “solutions” were always the same:</p>
          <ul className="list-none space-y-3 mb-8">
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#F2DDD6] flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-[#D66A5E]">1</span>
              </div>
              <span>“It’s just part of aging”</span>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#F2DDD6] flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-[#D66A5E]">2</span>
              </div>
              <span>“Take these stronger painkillers”</span>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#F2DDD6] flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-[#D66A5E]">3</span>
              </div>
              <span>“Come back when you’re ready for surgery”</span>
            </li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          But Linda knew in her heart that something wasn’t right. At 58, she was too young to accept a lifetime of dependency on pain medication. Too young to give up the activities that made life worth living.
        </p>

        <div className="relative my-8">
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-kneexaAccent"></div>
          <blockquote className="italic text-xl font-serif pl-6 my-8">
            "I remember sitting in my car after that appointment, holding that bottle of pills," Linda recalls. "I thought about Emma, about all the moments I was missing, and I just knew – there had to be another way."
          </blockquote>
        </div>

        <div className="text-lg leading-relaxed mb-6">
          <p>
            That’s when Linda made a decision that would change everything. She wasn’t going to accept that pain pills were her only option. She wasn’t going to “learn to live with it.”
          </p>
        </div>
      </div>
    </section>
  );
}