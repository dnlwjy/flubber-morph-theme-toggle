import type { Metadata } from "next";
import "./globals.css";
import { LazyMotion, domAnimation } from "framer-motion"
import { cookies } from "next/headers"
import ThemeProvider from "@/context/ThemeProvider"

export const metadata: Metadata = {
  title: "Flubber Morph Theme Toggle | by Daniel Wijaya",
  description: "A React theme toggle component that morphs between a crescent moon and sun using Flubber path interpolation and Framer Motion animation.",
  icons: {
    icon: '/favicon.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const cookieTheme = cookieStore.get("theme")?.value
  const initialTheme: "dark" | "light" = cookieTheme === "light" ? "light" : "dark"

  return (
    <html lang="en" className={initialTheme === "dark" ? "dark" : ""}>
      <body>
        <ThemeProvider initialTheme={initialTheme}>
          <LazyMotion features={domAnimation} strict>
              {children}
          </LazyMotion>
        </ThemeProvider>
      </body>
    </html>
  );
}