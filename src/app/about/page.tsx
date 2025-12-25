'use client';

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Header from "@/components/sections/Header/Header";

const About = dynamic(() => import("@/components/sections/About/About"), { ssr: false });

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#020617]">
            <Header />
            <Suspense fallback={<div className="min-h-screen bg-[#020617]" />}>
                <About />
            </Suspense>
        </div>
    );
}
