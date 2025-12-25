"use client";

import dynamic from "next/dynamic";
import React from "react";

const MeteorsOriginal = dynamic(() => import("./ui/meteors"), { ssr: false });

export function Meteors({ number }: { number?: number }) {
    return <MeteorsOriginal number={number} />;
}
