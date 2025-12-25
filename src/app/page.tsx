'use client';

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic imports - specific sections for home
const Hero = dynamic(() => import("@/components/sections/Hero/Hero"), { ssr: false });
const Header = dynamic(() => import("@/components/sections/Header/Header"), { ssr: false });
const About = dynamic(() => import("@/components/sections/About/About"), { ssr: false });
const BlogSection = dynamic(() => import("@/components/sections/Blog/BlogSection"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact/Contact"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/BackToTop"), { ssr: false });

export default function Home() {
    return (
        <div className="min-h-screen bg-[#020617]">
            <Header />
            <Suspense fallback={<div className="min-h-screen bg-[#020617]" />}>
                <Hero />
                <About />
                <BlogSection />
                <Contact />
            </Suspense>
            <BackToTop />
        </div>
    );
}
