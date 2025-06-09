"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Only run after component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const toggleTheme = () => {
    if (!mounted) return
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button 
      onClick={toggleTheme}
      variant="ghost" 
      size="icon" 
      className="relative h-9 w-9 rounded-full hover:bg-[#E3DCD5]/50 dark:hover:bg-[#857F75]/30 transition-colors duration-300">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[#8F8675]" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[#A89A7D]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
