"use client"

import { useEffect, useState } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function About() {
  const [api, setApi] = useState<CarouselApi>()

  // Auto-slide setiap 5 detik
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        // Kalau sudah di slide terakhir, kembali ke slide pertama
        api.scrollTo(0)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto w-full max-w-7xl">
        {/* HEADER */}
        <div className="mb-12">
          <div className="mb-6 inline-flex border-2 border-black bg-[#F7BF18] px-4 py-2 font-mono text-sm font-bold shadow-[4px_4px_0_#000]">
            #02-ABOUT ME
          </div>

          <h2 className="max-w-4xl text-6xl leading-[0.85] font-black tracking-tighter uppercase sm:text-7xl lg:text-9xl">
            A LITTLE
            <br />
            <span className="text-[#EC1F24]">ABOUT ME.</span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* INTRO CARD */}
          <div className="items-center border-[3px] border-black bg-white px-8 py-28 text-center shadow-[8px_8px_0_#000]">
            <p className="text-2xl leading-tight font-black uppercase">
              I&apos;m a frontend developer who enjoys turning ideas into
              interfaces.
            </p>

            <p className="mt-2 max-w-xl text-base leading-relaxed font-medium">
              When I&apos;m away from the screen, you&apos;ll usually find me
              listening to music, playing guitar, watching anime, or getting
              lost in a good manga or novel.
            </p>
          </div>

          {/* HOBBY CAROUSEL */}
          <Carousel
            setApi={setApi}
            className="w-full shadow-[8px_8px_0_#000]"
            opts={{
              loop: false,
            }}
          >
            <CarouselContent>
              {/* MUSIC & GUITAR */}
              <CarouselItem>
                <div className="h-full min-h-[280px] border-[3px] border-black bg-[#F7BF18] p-8 shadow-[8px_8px_0_#000]">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-6 text-5xl">🎵</div>

                      <p className="mb-2 font-mono text-sm font-bold">
                        #01-HOBBY
                      </p>

                      <h3 className="text-4xl font-black uppercase">
                        Music & Guitar
                      </h3>

                      <p className="mt-4 max-w-md leading-relaxed font-medium">
                        <b>Music is always around me.</b>
                        <br />
                        Whether I&apos;m listening to something new or picking
                        up my guitar, it&apos;s one of my favorite ways to
                        disconnect from the screen.
                      </p>
                    </div>

                    <div className="mt-8 font-mono text-xs font-bold">
                      LISTEN / PLAY / REPEAT
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* ANIMANGA & NOVELS */}
              <CarouselItem>
                <div className="h-full min-h-[280px] border-[3px] border-black bg-white p-8 shadow-[8px_8px_0_#000]">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-6 text-5xl">📚</div>

                      <p className="mb-2 font-mono text-sm font-bold">
                        #02-HOBBY
                      </p>

                      <h3 className="text-4xl font-black uppercase">
                        Animanga & Novels
                      </h3>

                      <p className="mt-4 max-w-md leading-relaxed font-medium">
                        <b>I love getting lost in good stories.</b>
                        <br />
                        Anime, manga, and novels give me a chance to explore
                        different worlds, characters, and perspectives.
                      </p>
                    </div>

                    <div className="mt-8 font-mono text-xs font-bold">
                      READ / WATCH / IMMERSE
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>

            {/* NAVIGATION */}
            <CarouselPrevious className="top-74 left-4 border-2 border-black bg-white text-black hover:bg-[#F7BF18]" />

            <CarouselNext className="top-74 right-4 border-2 border-black bg-white text-black hover:bg-[#F7BF18]" />
          </Carousel>
        </div>
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-4">
            <div className="mr-3 inline-flex border-2 border-black bg-[#F7BF18] px-4 py-2 font-mono text-sm font-bold shadow-[4px_4px_0_#000]">
              #03-SKILLS
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Git",
                "React",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "Figma",
              ].map((skill) => (
                <span
                  key={skill}
                  className="border-2 border-black bg-white px-4 py-2 font-mono text-sm font-bold shadow-[3px_3px_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#F7BF18] hover:shadow-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
