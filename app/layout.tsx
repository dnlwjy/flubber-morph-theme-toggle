import type { Metadata } from "next";
import "./globals.css";
import { LazyMotion, domAnimation } from "framer-motion"
import ThemeProvider from "@/context/ThemeProvider"

export const metadata: Metadata = {
  title: "Flubber Morph Theme Toggle | by Daniel Wijaya",
  description: "A React theme toggle component that morphs between a crescent moon and sun using Flubber path interpolation and Framer Motion animation.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Reads cookie before React hydrates to prevent theme flash */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var m=document.cookie.match(/(?:^|; )theme=([^;]*)/);document.documentElement.classList.add(m&&m[1]==='light'?'light':'dark');})();` }} />
      </head>
      <body>
        <ThemeProvider initialTheme="dark">
          <LazyMotion features={domAnimation} strict>
              {children}
          </LazyMotion>
        </ThemeProvider>
      </body>
    </html>
  );
}