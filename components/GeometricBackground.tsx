"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface Shape {
    id: number;
    type: "cube" | "block" | "diamond";
    x: string;
    y: string;
    size: number;
    duration: number;
    delay: number;
    rotateStart: number;
}

const shapes: Shape[] = [
    { id: 1, type: "cube", x: "10%", y: "15%", size: 60, duration: 20, delay: 0, rotateStart: 0 },
    { id: 2, type: "block", x: "80%", y: "20%", size: 45, duration: 25, delay: 2, rotateStart: 45 },
    { id: 3, type: "diamond", x: "25%", y: "70%", size: 50, duration: 22, delay: 1, rotateStart: 30 },
    { id: 4, type: "cube", x: "70%", y: "65%", size: 55, duration: 18, delay: 3, rotateStart: 15 },
    { id: 5, type: "block", x: "50%", y: "40%", size: 40, duration: 24, delay: 0.5, rotateStart: 60 },
    { id: 6, type: "diamond", x: "90%", y: "80%", size: 35, duration: 21, delay: 1.5, rotateStart: 20 },
    { id: 7, type: "cube", x: "15%", y: "45%", size: 30, duration: 26, delay: 4, rotateStart: 75 },
    { id: 8, type: "block", x: "60%", y: "10%", size: 48, duration: 19, delay: 2.5, rotateStart: 10 },
    { id: 9, type: "diamond", x: "35%", y: "90%", size: 42, duration: 23, delay: 3.5, rotateStart: 50 },
    { id: 10, type: "cube", x: "85%", y: "45%", size: 38, duration: 27, delay: 1, rotateStart: 40 },
];

function WireframeShape({ shape, isDark }: { shape: Shape; isDark: boolean }) {
    const opacity = isDark ? 1 : 0.6;
    const strokeColor =
        shape.type === "cube"
            ? `rgba(168, 85, 247, ${isDark ? 0.15 : 0.25})`
            : shape.type === "block"
                ? `rgba(225, 29, 72, ${isDark ? 0.12 : 0.2})`
                : `rgba(168, 85, 247, ${isDark ? 0.1 : 0.18})`;

    const renderShape = () => {
        const s = shape.size;
        switch (shape.type) {
            case "cube":
                return (
                    <svg width={s} height={s} viewBox="0 0 60 60" fill="none" style={{ opacity }}>
                        <rect x="10" y="15" width="30" height="30" stroke={strokeColor} strokeWidth="1" />
                        <polygon points="10,15 25,5 55,5 40,15" stroke={strokeColor} strokeWidth="1" fill="none" />
                        <polygon points="40,15 55,5 55,35 40,45" stroke={strokeColor} strokeWidth="1" fill="none" />
                        <line x1="40" y1="15" x2="40" y2="45" stroke={strokeColor} strokeWidth="0.5" />
                        <line x1="10" y1="15" x2="25" y2="5" stroke={strokeColor} strokeWidth="0.5" />
                    </svg>
                );
            case "block":
                return (
                    <svg width={s} height={s} viewBox="0 0 60 60" fill="none" style={{ opacity }}>
                        <rect x="5" y="10" width="40" height="25" stroke={strokeColor} strokeWidth="1" />
                        <polygon points="5,10 15,2 55,2 45,10" stroke={strokeColor} strokeWidth="1" fill="none" />
                        <polygon points="45,10 55,2 55,27 45,35" stroke={strokeColor} strokeWidth="1" fill="none" />
                        <line x1="18" y1="10" x2="18" y2="35" stroke={strokeColor} strokeWidth="0.3" />
                        <line x1="31" y1="10" x2="31" y2="35" stroke={strokeColor} strokeWidth="0.3" />
                        <line x1="5" y1="22" x2="45" y2="22" stroke={strokeColor} strokeWidth="0.3" />
                    </svg>
                );
            case "diamond":
                return (
                    <svg width={s} height={s} viewBox="0 0 60 60" fill="none" style={{ opacity }}>
                        <polygon points="30,5 55,30 30,55 5,30" stroke={strokeColor} strokeWidth="1" fill="none" />
                        <polygon points="30,12 48,30 30,48 12,30" stroke={strokeColor} strokeWidth="0.5" fill="none" />
                        <line x1="30" y1="5" x2="30" y2="55" stroke={strokeColor} strokeWidth="0.3" />
                        <line x1="5" y1="30" x2="55" y2="30" stroke={strokeColor} strokeWidth="0.3" />
                    </svg>
                );
        }
    };

    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{ left: shape.x, top: shape.y }}
            initial={{ rotate: shape.rotateStart, y: 0, x: 0 }}
            animate={{
                rotate: [shape.rotateStart, shape.rotateStart + 360],
                y: [0, -30, 0, 30, 0],
                x: [0, 15, 0, -15, 0],
            }}
            transition={{
                rotate: { duration: shape.duration * 2, repeat: Infinity, ease: "linear" },
                y: { duration: shape.duration, repeat: Infinity, ease: "easeInOut", delay: shape.delay },
                x: {
                    duration: shape.duration * 1.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: shape.delay + 1,
                },
            }}
        >
            {renderShape()}
        </motion.div>
    );
}

export default function GeometricBackground() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Gradient overlay — adapts to theme */}
            <div
                className={`absolute inset-0 ${isDark
                        ? "bg-linear-to-b from-zinc-950 via-zinc-950/95 to-zinc-950"
                        : "bg-linear-to-b from-zinc-100 via-zinc-50/95 to-zinc-100"
                    }`}
            />
            <div
                className={`absolute inset-0 ${isDark
                        ? "bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.05)_0%,_transparent_60%)]"
                        : "bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.08)_0%,_transparent_60%)]"
                    }`}
            />
            <div
                className={`absolute inset-0 ${isDark
                        ? "bg-[radial-gradient(ellipse_at_bottom_right,_rgba(225,29,72,0.03)_0%,_transparent_50%)]"
                        : "bg-[radial-gradient(ellipse_at_bottom_right,_rgba(225,29,72,0.05)_0%,_transparent_50%)]"
                    }`}
            />

            {/* Grid pattern */}
            <div
                className={`absolute inset-0 ${isDark ? "opacity-[0.03]" : "opacity-[0.06]"}`}
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Floating wireframe shapes */}
            {shapes.map((shape) => (
                <WireframeShape key={shape.id} shape={shape} isDark={isDark} />
            ))}
        </div>
    );
}
