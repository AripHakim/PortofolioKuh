import Link from "next/link"
import { Mail } from "lucide-react"
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto w-full max-w-7xl">
        {/* HEADER */}
        <div className="mb-12">
          <div className="mb-6 inline-flex border-2 border-black bg-[#F7BF18] px-4 py-2 font-mono text-sm font-bold shadow-[4px_4px_0_#000]">
            #05-CONTACT
          </div>

          <h2 className="max-w-5xl text-6xl leading-[0.85] font-black tracking-tighter uppercase sm:text-7xl lg:text-9xl">
            LET&apos;S
            <br />
            MAKE
            <br />
            <span className="text-[#EC1F24]">SOMETHING.</span>
          </h2>
        </div>

        {/* CONTACT CARD */}
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          {/* MAIN CTA */}
          <div className="border-[3px] border-black bg-white p-8 shadow-[8px_8px_0_#000] sm:p-12">
            <p className="max-w-2xl text-2xl leading-tight font-black uppercase sm:text-3xl">
              Got an idea, project, or just want to say hello?
            </p>

            <p className="mt-6 max-w-xl leading-relaxed font-medium">
              I&apos;m always open to interesting projects, collaborations, or
              random conversations about web development and design.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* EMAIL */}
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arief.rahman0123@gmail.com"
                target="_blank"
                className="inline-flex items-center gap-3 border-[3px] border-black bg-[#EC1F24] px-6 py-4 font-mono text-sm font-black text-white shadow-[5px_5px_0_#000] transition-all duration-150 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[1px_1px_0_#000]"
              >
                <Mail size={24} strokeWidth={2.5} />
                Email me
                <span>↗</span>
              </Link>

              {/* WHATSAPP */}
              <Link
                href="https://wa.me/6282291570604?text=Hi%20Arip!%20I%20found%20your%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-[3px] border-black bg-[#25D366] px-6 py-4 font-mono text-sm font-black text-black shadow-[5px_5px_0_#000] transition-all duration-150 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[1px_1px_0_#000]"
              >
                <FaWhatsapp size={24} />
                Let&apos;s talk ↗{/* <span>↗</span> */}
              </Link>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="border-[3px] border-black bg-[#F7BF18] p-8 shadow-[8px_8px_0_#000]">
            <p className="mb-6 font-mono text-sm font-black">FIND ME ONLINE</p>

            <div className="flex flex-col gap-3">
              <Link
                href="https://github.com/AripHakim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-2 border-black bg-white px-4 py-3 font-black uppercase shadow-[3px_3px_0_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                <span className="flex items-center gap-3">
                  <FaGithub size={24} />
                  GitHub
                </span>

                <span>↗</span>
              </Link>

              <Link
                href="https://www.instagram.com/arip.rhakim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-2 border-black bg-white px-4 py-3 font-black uppercase shadow-[3px_3px_0_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                <span className="flex items-center gap-3">
                  <FaInstagram size={24} />
                  Instagram
                </span>

                <span>↗</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/ariprhakim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-2 border-black bg-white px-4 py-3 font-black uppercase shadow-[3px_3px_0_#000] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                <span className="flex items-center gap-3">
                  <FaLinkedin size={24} />
                  LinkedIn
                </span>

                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* FOOTER TEXT */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t-[3px] border-black pt-6 font-mono text-xs font-bold sm:flex-row">
          <span>ARIEF RAHMAN HAKIM © 2026</span>
          <span>BUILT WITH NEXT.JS + TAILWIND CSS</span>
        </div>
      </div>
    </section>
  )
}
