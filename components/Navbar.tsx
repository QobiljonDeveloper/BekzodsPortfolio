"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage, Locale } from "@/lib/i18n/LanguageContext";
import { Sun, Moon, Globe, Menu, X, Terminal } from "lucide-react";

const navLinks = [
    { key: "nav.home", href: "#home" },
    { key: "nav.education", href: "#education" },
    { key: "nav.projects", href: "#projects" },
    { key: "nav.skills", href: "#skills" },
    { key: "nav.contact", href: "#contact" },
];

const languages: { code: Locale; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "uz", label: "UZ" },
];

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const { locale, setLocale, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-purple-500/20"
                    : "bg-transparent border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="flex items-center gap-2 text-purple-700 dark:text-purple-400 font-mono text-sm font-bold tracking-wider"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Terminal className="w-4 h-4" />
                        <span className="hidden sm:inline">BK://dev</span>
                        <span className="sm:hidden">BK</span>
                    </motion.a>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.key}
                                href={link.href}
                                className="px-3 py-2 text-sm font-mono text-zinc-700 dark:text-zinc-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors rounded-sm relative group"
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className="text-purple-500/50 mr-1">&gt;</span>
                                {t(link.key) as string}
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-purple-500 group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2">
                        {/* Language Dropdown */}
                        <div className="relative">
                            <motion.button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-mono text-zinc-700 dark:text-zinc-400 hover:text-purple-700 dark:hover:text-purple-400 border border-zinc-300 dark:border-zinc-800 hover:border-purple-500/30 rounded-sm transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Globe className="w-3.5 h-3.5" />
                                {locale.toUpperCase()}
                            </motion.button>
                            <AnimatePresence>
                                {isLangOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute right-0 mt-2 w-24 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-purple-500/20 rounded-sm shadow-lg shadow-purple-500/5 overflow-hidden"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    setLocale(lang.code);
                                                    setIsLangOpen(false);
                                                }}
                                                className={`w-full px-3 py-2 text-left text-sm font-mono transition-colors ${locale === lang.code
                                                        ? "text-purple-700 dark:text-purple-400 bg-purple-500/10"
                                                        : "text-zinc-700 dark:text-zinc-400 hover:text-purple-700 dark:hover:text-purple-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                                                    }`}
                                            >
                                                {lang.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Theme Toggle */}
                        <motion.button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 text-zinc-700 dark:text-zinc-400 hover:text-purple-700 dark:hover:text-purple-400 border border-zinc-300 dark:border-zinc-800 hover:border-purple-500/30 rounded-sm transition-all"
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </motion.button>

                        {/* Mobile Menu Toggle */}
                        <motion.button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="md:hidden p-2 text-zinc-700 dark:text-zinc-400 hover:text-purple-700 dark:hover:text-purple-400 border border-zinc-300 dark:border-zinc-800 rounded-sm"
                            whileTap={{ scale: 0.9 }}
                        >
                            {isMobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-purple-500/20 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.key}
                                    href={link.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="block px-3 py-2 text-sm font-mono text-zinc-700 dark:text-zinc-400 hover:text-purple-700 dark:hover:text-purple-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 rounded-sm transition-colors"
                                >
                                    <span className="text-purple-500/50 mr-2">&gt;</span>
                                    {t(link.key) as string}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
