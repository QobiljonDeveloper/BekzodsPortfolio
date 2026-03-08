"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Server, ExternalLink, Layers } from "lucide-react";

export default function Projects() {
    const { t } = useLanguage();
    const title = t("projects.title") as string;
    const subtitle = t("projects.subtitle") as string;
    const items = t("projects.items") as unknown as {
        title: string;
        role: string;
        description: string;
        tags: string[];
        status: string;
    }[];

    return (
        <section id="projects" className="relative py-24 px-4">
            <div className="max-w-6xl mx-auto relative z-10">
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

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            animate={{ y: [0, -4, 0] }}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 0 40px rgba(168,85,247,0.25)",
                            }}
                            className="glass-card rounded-md overflow-hidden group cursor-pointer"
                            style={{
                                animationDuration: "4s",
                                animationTimingFunction: "ease-in-out",
                                animationIterationCount: "infinite",
                            }}
                        >
                            {/* Card header with gradient */}
                            <div className="h-2 bg-linear-to-r from-purple-500 via-purple-600 to-rose-500" />

                            <div className="p-6">
                                {/* Project icon & status */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-sm">
                                        <Server className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="flex items-center gap-1.5 px-2 py-1 text-xs font-mono text-green-700 dark:text-green-400 bg-green-500/10 border border-green-500/20 rounded-sm">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                            {project.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Project title & role */}
                                <h3 className="text-xl font-bold font-mono text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-xs font-mono text-rose-600 dark:text-rose-400 mb-3 flex items-center gap-1">
                                    <Layers className="w-3 h-3" />
                                    {project.role}
                                </p>

                                {/* Description */}
                                <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed mb-5 font-mono">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 text-xs font-mono text-purple-700 dark:text-purple-400 bg-purple-500/10 border border-purple-500/25 dark:border-purple-500/20 rounded-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* View link */}
                                <motion.div
                                    className="flex items-center gap-1 text-xs font-mono text-zinc-500 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors"
                                    whileHover={{ x: 4 }}
                                >
                                    <ExternalLink className="w-3 h-3" />
                                    <span>view_architecture()</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Placeholder card for future projects */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: items.length * 0.15 }}
                        className="glass-card rounded-md overflow-hidden border-dashed flex items-center justify-center min-h-[280px]"
                    >
                        <div className="text-center p-6">
                            <div className="p-3 bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-300/50 dark:border-zinc-700/50 rounded-sm inline-block mb-3">
                                <Server className="w-5 h-5 text-zinc-400 dark:text-zinc-600" />
                            </div>
                            <p className="text-sm font-mono text-zinc-400 dark:text-zinc-600">
                // more_projects_loading...
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
