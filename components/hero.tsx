import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center px-6 py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
        {/* LEFT */}
        <div>
          <div className="mb-6 inline-flex border-2 border-black bg-[#F7BF18] px-4 py-2 font-mono text-sm font-bold shadow-[4px_4px_0_#000]">
            WASSUP Y&apos;ALL
          </div>

          <h1 className="max-w-5xl text-6xl leading-[0.85] font-black tracking-tighter uppercase sm:text-7xl lg:text-9xl">
            Welcome to my website
            <br />
            {/* <br /> */}
            <span className="text-[#EC1F24]">Portofolio.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed font-medium">
            Just an Informatics graduate who somehow ended up spending most of
            his time making websites. Still learning, still experimenting, and
            hopefully becoming a full-stack web developer and UI/UX designer
            someday.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="border-3 border-black bg-[#EC1F24] px-6 py-3 font-black text-white shadow-[5px_5px_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              VIEW MY WORK →
            </a>

            <a
              href="#contact"
              className="border-3 border-black bg-white px-6 py-3 font-black shadow-[5px_5px_0_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[#F7BF18] hover:shadow-none"
            >
              LET&apos;S TALK
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="aspect-square border-4 border-black bg-[#F7BF18] shadow-[10px_10px_0_#000]">
            <div className="flex h-full items-center justify-center p-8">
              <span className="text-center text-6xl font-black uppercase leading-none">
                ARIP R
                <br />
                HAKIM
              </span>
            </div>
          </div>

          {/* <div className="aspect-square overflow-hidden border-4 border-black shadow-[10px_10px_0_#000]">
            <Image
              src="/logo.png"
              alt="Arip Hakim"
              fill
              className="object-cover"
              priority
            />
          </div> */}

          <div className="absolute -top-5 -right-5 flex size-20 rotate-12 items-center justify-center rounded-full border-4 border-black bg-[#EC1F24] text-center text-xs font-black text-white">
            HELLO WORLD!
          </div>
        </div>
      </div>
    </section>
  )
}
