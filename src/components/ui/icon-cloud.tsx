"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Cloud, fetchSimpleIcons, renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

export const cloudProps = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 40,
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native" as const,
        initial: [0.1, -0.1] as [number, number],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
    },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
    const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
    const minContrastRatio = theme === "dark" ? 2 : 1.2;

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e: React.MouseEvent) => e.preventDefault(),
        },
    });
};

export default function IconCloud({
    iconSlugs = [],
    imageArray = [],
}: {
    iconSlugs?: string[];
    imageArray?: string[];
}) {
    const [data, setData] = useState<{ simpleIcons: Record<string, SimpleIcon> } | null>(null);
    const theme = "dark"; // Default to dark for this portfolio

    useEffect(() => {
        if (iconSlugs.length > 0) {
            fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
        }
    }, [iconSlugs]);

    const renderedIcons = useMemo(() => {
        if (!data) return null;

        return Object.values(data.simpleIcons).map((icon) =>
            renderCustomIcon(icon, theme)
        );
    }, [data, theme]);

    return (
        <Cloud {...cloudProps}>
            <>
                {renderedIcons}
                {imageArray.map((image, index) => (
                    <a key={index} href="#" onClick={(e) => e.preventDefault()}>
                        <Image
                            height={42}
                            width={42}
                            alt="Icon"
                            src={image}
                            unoptimized
                        />
                    </a>
                ))}
            </>
        </Cloud>
    );
}
