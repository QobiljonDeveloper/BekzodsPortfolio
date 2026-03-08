import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin", "cyrillic"],
    variable: "--font-jetbrains",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Bekzod Keldiyorov | Backend Developer",
    description:
        "Architecting solid, scalable backend systems with C# and .NET ecosystem. Backend Developer based in Tashkent, Uzbekistan.",
    keywords: [
        "Backend Developer",
        "C#",
        ".NET",
        "ASP.NET",
        "Software Engineer",
        "Bekzod Keldiyorov",
        "Tashkent",
    ],
    authors: [{ name: "Bekzod Keldiyorov" }],
    openGraph: {
        title: "Bekzod Keldiyorov | Backend Developer",
        description: "Architecting solid, scalable backend systems",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
            >
                <ThemeProvider>
                    <LanguageProvider>{children}</LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
