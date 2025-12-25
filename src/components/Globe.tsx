"use client";

import IconCloud from "./ui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "react",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "postgresql",
    "mongodb",
    "firebase",
    "nginx",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "tailwindcss",
    "framer",
    "python",
    "linux",
    "cloudflare",
    "postman"
];

export default function Globe() {
    return (
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 bg-transparent">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
