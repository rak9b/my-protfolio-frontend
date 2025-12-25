'use client';

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Header from "@/components/sections/Header/Header";

const Contact = dynamic(() => import("@/components/sections/Contact/Contact"), { ssr: false });

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#020617]">
            <Header />
            <Suspense fallback={<div className="min-h-screen bg-[#020617]" />}>
                <Contact />
            </Suspense>
        </div>
    );
}
