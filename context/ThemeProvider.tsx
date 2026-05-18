'use client'

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeProvider({
  initialTheme,
  children,
}: {
  initialTheme: Theme
  children: React.ReactNode
}) {
  const [theme, setThemeState] = useState<Theme>(initialTheme)

  // On mount, read stored cookie and sync state (handles static export where server always defaults to "dark")
  useEffect(() => {
    const m = document.cookie.match(/(?:^|; )theme=([^;]*)/)
    const stored: Theme = m && m[1] === "light" ? "light" : "dark"
    setThemeState(stored)
    document.documentElement.classList.remove("dark", "light")
    document.documentElement.classList.add(stored)
  }, [])

  const setTheme = (next: Theme) => {
    setThemeState(next)
    // Remove both classes first, then add the correct one
    document.documentElement.classList.remove("dark", "light")
    document.documentElement.classList.add(next)
    document.cookie = `theme=${next}; path=/; max-age=31536000`
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider")
  return ctx
}