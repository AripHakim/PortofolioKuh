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
    imageUrl: "projects/lpk-maleo.webp",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://maleogogakuin.vercel.app/",
    repo: "https://github.com/AripHakim/LPK-MGP",
  },
  {
    number: "02",
    title: "TV Information Display - LPK SEKAI MIRAI CEMERLANG",
    imageUrl: "projects/tv-dashboard.webp",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://tv-dashboard-sekaimirai.vercel.app/",
    repo: "https://github.com/lpk-sekai-mirai/TVDashboard",
  },
]

export function Projects() {
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
    <section id="projects" className="relative px-6 py-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12">
          <div className="mb-6 inline-flex border-2 border-black bg-chart-2 px-4 py-2 text-black font-mono text-sm font-bold shadow-[4px_4px_0_var(--border)]">
            #03-PROJECTS
          </div>

          <h2 className="max-w-5xl text-5xl lg:text-6xl leading-[0.85] font-black tracking-tighter uppercase sm:text-7xl lg:text-9xl">
            THINGS
            <br />
            <span className="text-chart-4">I&apos;VE BUILT.</span>
          </h2>
        </div>

        <div className="relative w-full">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
            }}
            className="w-full" 
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.number}>
                  <div className="relative px-2 pb-2">
                    <ImageCard
                      imageUrl={project.imageUrl}
                      className="rounded-none border-[3px] border-black shadow-[12px_12px_0_var(--border)]"
                      caption={
                        <div>
                          <div className="flex items-start gap-4">
                            <span
                                className="text-black border-2 border-black bg-chart-2 px-3 py-1 font-mono text-lg font-bold shadow-[2px_2px_0_var(--border)]"
                              >
                              #{project.number} - {project.title}
                              </span>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex text-black items-center border-2 border-black bg-chart-2 px-3 py-1 font-mono text-xs font-bold shadow-[2px_2px_0_var(--border)]"
                              >
                                {tag}
                              </span>
                            ))}

                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 border-2 border-black bg-chart-4 px-4 py-2 font-mono text-xs font-black text-white shadow-[3px_3px_0_var(--border)] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_var(--border)]"
                            >
                              VIEW PROJECT
                              <ArrowUpRight size={16} strokeWidth={3} />
                            </a>
                            <a
                              href={project.repo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 border-2 border-black bg-chart-4 px-4 py-2 font-mono text-xs font-black text-white shadow-[3px_3px_0_var(--border)] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_var(--border)]"
                            >
                              VIEW REPOSITORY
                              <ArrowUpRight size={16} strokeWidth={3} />
                            </a>
                          </div>
                        </div>
                      }
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="
            size-8 lg:size-12 
            border-2 border-black bg-white text-black 
            hover:bg-chart-2
            top-1/2 right-auto left-6 bottom-auto
            "
            
            />

            <CarouselNext className=" 
            top-1/2 right-6 bottom-auto
            size-8 lg:size-12 
            border-2 border-black bg-white text-black 
            hover:bg-chart-2" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
