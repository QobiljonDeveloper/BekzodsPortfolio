"use client";

import GeometricBackground from "@/components/GeometricBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <GeometricBackground />
            <Navbar />
            <main className="relative z-10">
                <Hero />
                <Education />
                <Projects />
                <Skills />
                <Footer />
            </main>
        </>
    );
}
