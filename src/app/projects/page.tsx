'use client';

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Header from "@/components/sections/Header/Header";

const Projects = dynamic(() => import("@/components/sections/Projects/Projects"), { ssr: false });

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-[#020617]">
            <Header />
            <Suspense fallback={<div className="min-h-screen bg-[#020617]" />}>
                <Projects />
            </Suspense>
        </div>
    );
}
