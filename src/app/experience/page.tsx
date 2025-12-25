'use client';

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Header from "@/components/sections/Header/Header";

const Experience = dynamic(() => import("@/components/sections/Experience/Experience"), { ssr: false });

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-[#020617]">
            <Header />
            <Suspense fallback={<div className="min-h-screen bg-[#020617]" />}>
                <Experience />
            </Suspense>
        </div>
    );
}
