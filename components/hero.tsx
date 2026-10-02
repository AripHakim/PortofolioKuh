export function Hero() {
  return (
    <section className="relative flex min-h-svh w-full min-w-0 items-center px-4 py-8 sm:px-6 sm:py-24 ">
      <div className="mx-auto grid w-full max-w-7xl gap-8 items-center lg:grid-cols-[1.4fr_0.6fr] lg:items-center lg:gap-12">
        {/* LEFT */}
        <div>

          <div className="mb-6 inline-flex border-2 border-black bg-[#F7BF18] px-3 py-2 font-mono text-xs font-bold shadow-[4px_4px_0_#000] sm:px-4 sm:text-sm">
            WASSUP Y&apos;ALL
          </div>

          <h1 className="max-w-full text-5xl leading-[0.9] font-black tracking-tighter uppercase sm:text-7xl lg:max-w-5xl lg:text-9xl lg:leading-[0.85]">
            Welcome to my website
            <br />
            <span className="text-[#EC1F24]">Portofolio.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-sm lg:text-base leading-relaxed font-medium sm:mt-8 sm:text-lg lg:mx-0">
            Just an Informatics graduate who somehow ended up spending most of
            his time making websites. Still learning, still experimenting, and
            hopefully becoming a full-stack web developer and UI/UX designer
            someday.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4 lg:justify-start">
            <a
              href="#projects"
              className="border-3 border-black bg-[#EC1F24] px-5 py-3 text-sm font-black text-white shadow-[5px_5px_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:px-6 sm:text-base"
            >
              VIEW MY WORK →
            </a>

            <a
              href="#contact"
              className="border-3 border-black bg-white px-5 py-3 text-sm font-black shadow-[5px_5px_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[#F7BF18] hover:shadow-none sm:px-6 sm:text-base"
            >
              LET&apos;S TALK
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-2 w-full min-w-0 max-w-[360px] sm:max-w-sm lg:mt-0">
          <div className="aspect-square w-full border-4 border-black bg-[#F7BF18] shadow-[8px_8px_0_#000] sm:shadow-[10px_10px_0_#000]">
            <div className="flex h-full items-center justify-center p-6 sm:p-8">
              <span className="text-center text-5xl leading-none font-black uppercase sm:text-6xl">
                ARIP R
                <br />
                HAKIM
              </span>
            </div>
          </div>

          <div className="absolute -top-4 -right-3 flex size-16 rotate-12 items-center justify-center rounded-full border-4 border-black bg-[#EC1F24] p-2 text-center text-[10px] leading-tight font-black text-white sm:-top-5 sm:-right-5 sm:size-20 sm:text-xs">
            HELLO WORLD!
          </div>
        </div>
      </div>
    </section>
  )
}
