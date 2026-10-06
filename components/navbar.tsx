
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

  return (
    <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 lg:bottom-6">
      <NavigationMenu
        className="
          rounded-xl border-4 border-border
          bg-background p-2
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
                className="
                  flex size-8 items-center justify-center rounded-lg
                  text-foreground transition-all
                  hover:-translate-y-1 hover:border-2
                  hover:border-border hover:bg-chart-2
                  active:translate-y-0 active:shadow-none
                  lg:size-12
                "
              >
                <Icon size={22} strokeWidth={2.5} />
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
              className="
                flex size-8 items-center justify-center rounded-lg
                text-foreground transition-all
                hover:-translate-y-1 hover:border-2
                hover:border-border hover:bg-chart-2
                active:translate-y-0 active:shadow-none
                disabled:opacity-50
                lg:size-12
              "
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
