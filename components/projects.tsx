"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

import ImageCard from "@/components/ui/image-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const projects = [
  {
    number: "01",
    title: "Website Profile - LPK MALEO GOGAKUIN",
    imageUrl: "/projects/lpk-maleo.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://maleogogakuin.vercel.app/",
    repo: "https://github.com/AripHakim/LPK-MGP",
  },
  {
    number: "02",
    title: "TV Information Display - LPK SEKAI MIRAI CEMERLANG",
    imageUrl: "/projects/tv-dashboard.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://tv-dashboard-sekaimirai.vercel.app/",
    repo: "https://github.com/lpk-sekai-mirai/TVDashboard",
  },
]

export function Projects() {
  const [api, setApi] = useState<CarouselApi>()

  // Auto-slide setiap 5 detik
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
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto w-full max-w-7xl">
        {/* HEADER */}
        <div className="mb-12">
          <div className="mb-6 inline-flex border-2 border-black bg-[#F7BF18] px-4 py-2 font-mono text-sm font-bold shadow-[4px_4px_0_#000]">
            #04-PROJECTS
          </div>

          <h2 className="max-w-5xl text-6xl leading-[0.85] font-black tracking-tighter uppercase sm:text-7xl lg:text-9xl">
            THINGS
            <br />
            <span className="text-[#EC1F24]">I&apos;VE BUILT.</span>
          </h2>
        </div>

        {/* PROJECT CAROUSEL */}
        <div className="relative w-full">
          <Carousel
            setApi={setApi}
            opts={{
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.number}>
                  <div className="relative px-2 pb-2">
                    <ImageCard
                      imageUrl={project.imageUrl}
                      className="rounded-none border-[3px] border-black shadow-[8px_8px_0_#000]"
                      caption={
                        <div>
                          {/* TITLE */}
                          <div className="flex items-start justify-between gap-6">
                            <h3 className="text-lg leading-tight font-black uppercase sm:text-xl">
                              {project.title}
                            </h3>
                          </div>

                          {/* TAGS */}
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center border-2 border-black bg-[#F7BF18] px-3 py-1 font-mono text-xs font-bold shadow-[2px_2px_0_#000]"
                              >
                                {tag}
                              </span>
                            ))}

                            {/* BUTTON */}
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 border-2 border-black bg-[#EC1F24] px-4 py-2 font-mono text-xs font-black text-white shadow-[3px_3px_0_#000] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#000]"
                            >
                              VIEW PROJECT
                              <ArrowUpRight size={16} strokeWidth={3} />
                            </a>
                            <a
                              href={project.repo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 border-2 border-black bg-[#EC1F24] px-4 py-2 font-mono text-xs font-black text-white shadow-[3px_3px_0_#000] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#000]"
                            >
                              VIEW REPOSITORY
                              <ArrowUpRight size={16} strokeWidth={3} />
                            </a>
                          </div>
                        </div>
                      }
                    />

                    {/* PROJECT NUMBER */}
                    <div className="absolute top-6 left-6 z-10 border-2 border-black bg-white px-4 py-2 font-mono text-sm font-black shadow-[4px_4px_0_#000]">
                      {project.number} / {projects.length}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-6 size-12 border-2 border-black bg-white text-black hover:bg-[#F7BF18]" />

            <CarouselNext className="right-6 size-12 border-2 border-black bg-white text-black hover:bg-[#F7BF18]" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
