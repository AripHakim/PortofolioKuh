"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import {
  Home,
  User,
  FolderKanban,
  Mail,
  Moon,
  Sun,
} from "lucide-react"

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#contact", label: "Contact", icon: Mail },
]

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === "dark"

  const itemClassName = `
    flex size-8 items-center justify-center rounded-lg
    !text-black transition-all
    hover:-translate-y-1 hover:border-2
    hover:border-black hover:bg-[#E8CCF5]
    active:translate-y-0 active:shadow-none
    lg:size-12
  `

  return (
    <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 lg:bottom-6">
      <NavigationMenu
        className="
          rounded-xl border-4 border-black
          !bg-[#F5E6FF] !text-black
          p-2
          shadow-[0px_6px_0px_var(--border)]
        "
      >
        <NavigationMenuList className="gap-2">
          {navItems.map(({ href, label, icon: Icon }) => (
            <NavigationMenuItem key={href}>
              <Link
                href={href}
                aria-label={label}
                title={label}
                className={itemClassName}
              >
                <Icon
                  size={22}
                  strokeWidth={2.5}
                  className="!text-black"
                />
              </Link>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem>
            <button
              type="button"
              aria-label={
                isDark ? "Aktifkan light mode" : "Aktifkan dark mode"
              }
              title={isDark ? "Light mode" : "Dark mode"}
              disabled={!mounted}
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={itemClassName}
            >
              {!mounted ? (
                <Moon size={22} strokeWidth={2.5} />
              ) : isDark ? (
                <Sun size={22} strokeWidth={2.5} />
              ) : (
                <Moon size={22} strokeWidth={2.5} />
              )}
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}