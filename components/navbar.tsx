"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { Home, User, FolderKanban, Mail } from "lucide-react"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#contact", label: "Contact", icon: Mail },
]

export function Navbar() {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <NavigationMenu className="rounded-xl border-4 border-black p-2 shadow-[0px_6px_0px_#000]">
        <NavigationMenuList className="gap-2">
          {navItems.map(({ href, label, icon: Icon }) => (
            <NavigationMenuItem key={href}>
              <Link
                href={href}
                aria-label={label}
                title={label}
                className="flex size-12 items-center justify-center rounded-lg transition-all hover:-translate-y-1 hover:border-2 hover:border-black hover:bg-[#F7BF18] active:translate-y-0 active:shadow-none"
              >
                <Icon size={22} strokeWidth={2.5} />
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
