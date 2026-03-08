"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { GraduationCap, Users } from "lucide-react";

export default function Education() {
    const { t } = useLanguage();
    const title = t("education.title") as string;
    const subtitle = t("education.subtitle") as string;
    const items = t("education.items") as unknown as { title: string; period: string; description: string; tags: string[] }[];

    const icons = [GraduationCap, Users];

    return (
        <section id="education" className="relative py-24 px-4">
            <div className="max-w-4xl mx-auto relative z-10">
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

                {/* Timeline */}
                <div className="relative">
                    {/* Central line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-purple-500/50 via-rose-500/30 to-transparent" />

                    {items.map((item, index) => {
                        const Icon = icons[index] || GraduationCap;
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex items-start mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                    } flex-row`}
                            >
                                {/* Timeline dot */}
                                <motion.div
                                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-sm z-10 ring-4 ring-white dark:ring-zinc-950"
                                    animate={{ boxShadow: ["0 0 0px rgba(168,85,247,0.3)", "0 0 15px rgba(168,85,247,0.6)", "0 0 0px rgba(168,85,247,0.3)"] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />

                                {/* Card */}
                                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                                    <motion.div
                                        className="glass-card p-6 rounded-md"
                                        whileHover={{
                                            y: -4,
                                            boxShadow: "0 0 30px rgba(168,85,247,0.2)",
                                        }}
                                        animate={{ y: [0, -3, 0] }}
                                        transition={{
                                            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
                                        }}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-sm">
                                                <Icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                            </div>
                                            <div>
                                                <h3 className="font-mono font-bold text-zinc-900 dark:text-zinc-100 text-base">
                                                    {item.title}
                                                </h3>
                                                <span className="text-xs font-mono text-rose-600 dark:text-rose-400">{item.period}</span>
                                            </div>
                                        </div>

                                        <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed mb-4 font-mono">
                                            {item.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 text-xs font-mono text-purple-700 dark:text-purple-400 bg-purple-500/10 border border-purple-500/25 dark:border-purple-500/20 rounded-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
