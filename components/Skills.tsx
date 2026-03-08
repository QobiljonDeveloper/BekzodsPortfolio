"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
    Code2,
    Layers,
    Database,
    Network,
    Wrench,
} from "lucide-react";

const categoryIcons: Record<string, typeof Code2> = {
    languages: Code2,
    frameworks: Layers,
    databases: Database,
    architecture: Network,
    tools: Wrench,
};

const categoryColors: Record<string, { text: string; border: string; bg: string }> = {
    languages: { text: "text-purple-700 dark:text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" },
    frameworks: { text: "text-rose-700 dark:text-rose-400", border: "border-rose-500/30", bg: "bg-rose-500/10" },
    databases: { text: "text-amber-700 dark:text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/10" },
    architecture: { text: "text-cyan-700 dark:text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/10" },
    tools: { text: "text-lime-700 dark:text-lime-400", border: "border-lime-500/30", bg: "bg-lime-500/10" },
};

export default function Skills() {
    const { t } = useLanguage();
    const title = t("skills.title") as string;
    const subtitle = t("skills.subtitle") as string;
    const categories = t("skills.categories") as unknown as Record<string, { title: string; items: string[] }>;

    return (
        <section id="skills" className="relative py-24 px-4">
            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold font-mono text-zinc-900 dark:text-zinc-100 mb-3">
                        <span className="text-purple-600 dark:text-purple-500">#</span> {title}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-500 font-mono text-sm">{subtitle}</p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(categories).map(([key, category], categoryIndex) => {
                        const Icon = categoryIcons[key] || Code2;
                        const colors = categoryColors[key] || categoryColors.languages;

                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                animate={{ y: [0, -3, 0] }}
                                whileHover={{
                                    y: -6,
                                    boxShadow: "0 0 35px rgba(168,85,247,0.2)",
                                }}
                                className="glass-card rounded-md p-6"
                                style={{
                                    animationDuration: `${4 + categoryIndex * 0.5}s`,
                                    animationTimingFunction: "ease-in-out",
                                    animationIterationCount: "infinite",
                                }}
                            >
                                {/* Category header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className={`p-2 ${colors.bg} border ${colors.border} rounded-sm`}>
                                        <Icon className={`w-4 h-4 ${colors.text}`} />
                                    </div>
                                    <h3 className="font-mono font-bold text-zinc-800 dark:text-zinc-200 text-sm tracking-wider uppercase">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Skill badges */}
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                                duration: 0.3,
                                            }}
                                            whileHover={{
                                                scale: 1.1,
                                                boxShadow: "0 0 15px rgba(168,85,247,0.4)",
                                            }}
                                            className={`px-3 py-1.5 text-xs font-mono ${colors.text} ${colors.bg} border ${colors.border} rounded-sm cursor-default transition-colors`}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
