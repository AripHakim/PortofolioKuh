"use client"

import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type Props = {
  imageUrl: string
  caption: ReactNode
  className?: string
}

export default function ImageCard({
  imageUrl,
  caption,
  className,
}: Props) {
  const pathname = usePathname()

  const basePath = pathname.startsWith("/PortofolioKuh")
    ? "/PortofolioKuh"
    : ""

  const imageSrc = `${basePath}${imageUrl}`

  return (
    <figure
      className={cn(
        "w-full overflow-hidden rounded-base border-2 border-border bg-background font-base shadow-shadow",
        className
      )}
    >
      <img
        className="aspect-16/9 w-full object-fill"
        src={imageSrc}
        alt="image"
      />

      <figcaption className="border-t-2 border-border p-4 text-foreground">
        {caption}
      </figcaption>
    </figure>
  )
}