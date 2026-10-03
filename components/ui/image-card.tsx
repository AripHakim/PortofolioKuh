import Image from "next/image"
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
  return (
    <figure
      className={cn(
        "w-full overflow-hidden rounded-base border-2 border-border bg-background font-base shadow-shadow",
        className
      )}
    >
      <Image
        src={imageUrl}
        alt="image"
        width={1280}
        height={720}
        className="aspect-16/9 w-full object-fill"
      />

      <figcaption className="border-t-2 border-border p-4 text-foreground">
        {caption}
      </figcaption>
    </figure>
  )
}