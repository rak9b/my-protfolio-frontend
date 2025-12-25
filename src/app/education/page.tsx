'use client';

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Header from "@/components/sections/Header/Header";

const Education = dynamic(() => import("@/components/sections/Education/Education"), { ssr: false });

export default function EducationPage() {
    return (
        <div className="min-h-screen bg-[#020617]">
            <Header />
            <Suspense fallback={<div className="min-h-screen bg-[#020617]" />}>
                <Education />
            </Suspense>
        </div>
    );
}
