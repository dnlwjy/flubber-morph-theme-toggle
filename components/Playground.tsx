'use client'

import { useState } from "react"
import ToggleTheme from "./ToggleTheme"
import { useTheme } from "@/context/ThemeProvider"
import Button from "./Button"

export default function ToggleThemePlayground() {
    const [size, setSize] = useState(192)
    const [strokeWidth, setStrokeWidth] = useState(0.75)
    const [filled, setFilled] = useState(false)
    const { theme } = useTheme()
    const isDark = theme === "dark"

    return (
        <div className="relative h-full w-full flex flex-col md:block items-center justify-center gap-8 px-4 py-10 md:py-0">

            <div className="flex flex-col gap-4 md:absolute inset-0 items-center justify-center">
                <p>Click below or hit (Space)</p>

                {/* PREVIEW */}
                <div className="relative flex items-center justify-center p-16 border border-(--divider) bg-(--white)/7">
                    <div className="flex items-center justify-center aspect-square w-full md:w-90">
                        <ToggleTheme size={size} strokeWidth={strokeWidth} filled={filled} />
                    </div>
                    <span className="absolute bottom-4 tag text-(--gray)">{isDark ? "light" : "dark"} mode enabled</span>
                </div>
            </div>

            <Button title="View on GitHub" click={() => window.open("https://github.com/dnlwjy/flubber-morph-theme-toggle", "_blank", "noopener,noreferrer")} styles="md:absolute md:right-6 md:top-6"/>

            {/* Property Controls */}
            <div className="w-full max-w-90 md:absolute md:right-6 md:bottom-6 md:w-72 flex flex-col gap-4">

                {/* Size */}
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                        <label className="tag text-(--gray)">size (px)</label>
                        <input
                            type="number"
                            min={24}
                            max={320}
                            step={4}
                            value={size}
                            onChange={(e) => setSize(Math.min(320, Math.max(24, Number(e.target.value))))}
                            className="tag text-(--white) bg-transparent text-left w-20 outline-none"
                        />
                    </div>
                    <input
                        type="range"
                        min={24}
                        max={320}
                        step={4}
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                        className="w-full accent-(--white) cursor-pointer h-0.5"
                    />
                </div>

                {/* Stroke Width */}
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                        <label className="tag text-(--gray)">Stroke</label>
                        <input
                            type="number"
                            min={0.1}
                            max={3}
                            step={0.05}
                            value={strokeWidth}
                            onChange={(e) => setStrokeWidth(Math.min(3, Math.max(0.1, Number(e.target.value))))}
                            className="tag text-(--white) bg-transparent text-left w-20 outline-none"
                        />
                    </div>
                    <input
                        type="range"
                        min={0.1}
                        max={3}
                        step={0.05}
                        value={strokeWidth}
                        onChange={(e) => setStrokeWidth(Number(e.target.value))}
                        className="w-full accent-(--white) cursor-pointer h-0.5"
                    />
                </div>

                {/* Filled */}
                <div className="flex items-center justify-between">
                    <label className="tag text-(--gray)">filled</label>
                    <div className="flex border border-(--divider) rounded overflow-hidden">
                        {["no", "yes"].map((opt) => {
                            const active = opt === "yes" ? filled : !filled
                            return (
                                <button
                                    key={opt}
                                    onClick={() => setFilled(opt === "yes")}
                                    className={`tag px-3 py-1 cursor-pointer transition-colors duration-300 ${active ? "bg-(--white) text-(--black)" : "text-(--gray) opacity-40"}`}
                                >
                                    {opt}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
