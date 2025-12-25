import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Chatbot from "@/components/Chatbot";
import PageTransition from "@/components/PageTransition";
import CursorGlow from "@/components/CursorGlow";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Md. Rakibul Islam | Full-Stack Portfolio",
    description: "Professional portfolio of Md. Rakibul Islam, Full-Stack Developer and creator of RoksJS. Showcasing elite web projects, technical insights, and AI-driven experiences.",
};

import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider>
                    <CursorGlow />
                    <PageTransition>
                        {children}
                    </PageTransition>
                    <Chatbot />
                    <BackToTop />
                    <Toaster position="top-right" />
                </ThemeProvider>
            </body>
        </html>
    );
}
