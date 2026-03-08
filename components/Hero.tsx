"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ChevronDown, Send } from "lucide-react";

export default function Hero() {
    const { t } = useLanguage();
    const [displayedName, setDisplayedName] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [typingComplete, setTypingComplete] = useState(false);

    const fullName = t("hero.name") as string;

    useEffect(() => {
        setDisplayedName("");
        setTypingComplete(false);
        let i = 0;
        const interval = setInterval(() => {
            if (i < fullName.length) {
                setDisplayedName(fullName.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
                setTypingComplete(true);
            }
        }, 80);

        return () => clearInterval(interval);
    }, [fullName]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-4 pt-16"
        >
            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Terminal greeting */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-6"
                >
                    <span className="font-mono text-sm text-purple-600/70 dark:text-purple-500/70 tracking-wider">
                        {t("hero.greeting") as string}
                    </span>
                </motion.div>

                {/* Typing name */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="mb-4"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-mono tracking-tight">
                        <span className="text-zinc-800 dark:text-zinc-100">
                            {displayedName}
                        </span>
                        <span
                            className={`inline-block w-[3px] h-[0.8em] ml-1 bg-purple-500 align-middle transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"
                                }`}
                        />
                    </h1>
                </motion.div>

                {/* Role badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: typingComplete ? 1 : 0, y: typingComplete ? 0 : 20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <span className="inline-block px-4 py-1.5 text-sm font-mono text-rose-600 dark:text-rose-400 border border-rose-500/30 rounded-sm bg-rose-500/5">
                        [ {t("hero.role") as string} ]
                    </span>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: typingComplete ? 1 : 0, y: typingComplete ? 0 : 20 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-lg sm:text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 mb-4 max-w-2xl mx-auto"
                >
                    {t("hero.subtitle") as string}
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: typingComplete ? 1 : 0, y: typingComplete ? 0 : 20 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-sm sm:text-base text-zinc-500 dark:text-zinc-500 mb-10 max-w-xl mx-auto font-mono leading-relaxed"
                >
                    {t("hero.description") as string}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: typingComplete ? 1 : 0, y: typingComplete ? 0 : 20 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        href="#projects"
                        className="group relative px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-mono text-sm rounded-sm overflow-hidden transition-colors"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168,85,247,0.4)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <ChevronDown className="w-4 h-4" />
                            {t("hero.cta_primary") as string}
                        </span>
                    </motion.a>

                    <motion.a
                        href="#contact"
                        className="group px-8 py-3 border border-rose-500/30 hover:border-rose-500/60 text-rose-600 dark:text-rose-400 hover:text-rose-500 dark:hover:text-rose-300 font-mono text-sm rounded-sm transition-all"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(225,29,72,0.2)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            {t("hero.cta_secondary") as string}
                        </span>
                    </motion.a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: typingComplete ? 1 : 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-5 h-8 border border-zinc-400 dark:border-zinc-700 rounded-full flex items-start justify-center p-1"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-2 bg-purple-500 rounded-full"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
