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

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <section id="about" className="relative px-6 py-12 ">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12">
          <div className="mb-6 inline-flex border-2 text-black border-black bg-chart-2 px-4 py-2 font-mono text-sm font-bold shadow-[4px_4px_0_#000]">
            #02-ABOUT ME
          </div>

          <h2 className="max-w-4xl text-5xl lg:text-6xl leading-[0.85] font-black tracking-tighter uppercase sm:text-7xl lg:text-9xl">
            A LITTLE
            <br />
            <span className="text-chart-4">ABOUT ME.</span>
          </h2>
        </div>

        <div className="grid text-black min-w-0 gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="flex w-full min-w-0 flex-col items-center border-[3px] border-black bg-white px-2 py-16 lg:px-4 lg:py-28  text-center shadow-[8px_8px_0_#000]">
            <p className="text-xl lg:text-2xl leading-tight font-black uppercase">
              I&apos;m a frontend developer who enjoys turning ideas into
              interfaces.
            </p>

            <p className="mt-2 max-w-xl text-sm lg:text-base leading-relaxed font-medium">
              When I&apos;m away from the screen, you&apos;ll usually find me
              listening to music, playing guitar, watching anime, or getting
              lost in a good manga or novel.
            </p>
          </div>

          <Carousel
            setApi={setApi}
            className="relative min-w-0 w-full shadow-[8px_8px_0_#000]"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="h-full min-h-[280px] bg-chart-2 p-8">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-6 text-3xl lg:text-5xl">🎵</div>
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

                    <div className=" font-mono text-xs font-bold">
                      LISTEN / PLAY / REPEAT
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="h-full min-h-[280px] border-[3px] border-black bg-white p-8 ">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-6 text-3xl lg:text-5xl">📚</div>

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

                    <div className=" font-mono text-xs font-bold">
                      READ / WATCH / IMMERSE
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="left-1 bg-white text-black hover:bg-chart-2" />

            <CarouselNext className="right-1 bg-white text-black hover:bg-chart-2" />
          </Carousel>
        </div>
        <div className="mt-16">
          <div className="mb-6 text-black flex items-center gap-4">
            <div className="mr-3 inline-flex border-2 border-black bg-chart-2 px-4 py-2 font-mono text-sm font-bold shadow-[4px_4px_0_#000]">
              SKILLS
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
                  className="border-2 border-black bg-white px-4 py-2 font-mono text-sm font-bold shadow-[3px_3px_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-chart-2 hover:shadow-none"
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
