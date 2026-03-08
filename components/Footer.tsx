"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
    Phone,
    Mail,
    Send,
    MapPin,
    Languages,
    Github,
    Terminal,
} from "lucide-react";

export default function Footer() {
    const { t } = useLanguage();
    const title = t("footer.title") as string;
    const subtitle = t("footer.subtitle") as string;
    const phone = t("footer.phone") as string;
    const email = t("footer.email") as string;
    const telegram = t("footer.telegram") as string;
    const github = t("footer.github") as string;
    const location = t("footer.location") as string;
    const languages = t("footer.languages") as string;
    const copyright = t("footer.copyright") as string;

    const contactItems = [
        { icon: Phone, label: phone, href: `tel:${phone.replace(/\s/g, "")}` },
        { icon: Mail, label: email, href: `mailto:${email}` },
        { icon: Send, label: telegram, href: `https://t.me/${telegram.replace("@", "")}` },
        { icon: Github, label: github, href: `https://github.com/${github}` },
        { icon: MapPin, label: location, href: "#" },
        { icon: Languages, label: languages, href: "#" },
    ];

    return (
        <footer id="contact" className="relative py-24 px-4 border-t border-purple-500/10">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold font-mono text-zinc-800 dark:text-zinc-100 mb-3">
                        <span className="text-purple-500">&gt;</span> {title}
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-500 font-mono text-sm">{subtitle}</p>
                </motion.div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                    {contactItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            whileHover={{
                                y: -4,
                                boxShadow: "0 0 25px rgba(168,85,247,0.2)",
                            }}
                            className="glass-card rounded-md p-4 flex items-center gap-3 group"
                        >
                            <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-sm group-hover:bg-purple-500/20 transition-colors">
                                <item.icon className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                            </div>
                            <span className="text-sm font-mono text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors truncate">
                                {item.label}
                            </span>
                        </motion.a>
                    ))}
                </div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="pt-8 border-t border-zinc-300/50 dark:border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-600 font-mono text-xs">
                        <Terminal className="w-3 h-3" />
                        <span>© {new Date().getFullYear()} Bekzod Keldiyorov. {copyright}</span>
                    </div>

                    <div className="flex items-center gap-1 text-zinc-400 dark:text-zinc-700 font-mono text-xs">
                        <span className="text-purple-500/50">&lt;/&gt;</span>
                        <span>Built with precision</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
