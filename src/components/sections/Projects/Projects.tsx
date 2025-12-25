import { ReactLenis } from "@studio-freight/react-lenis";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    link: string;
    color: string;
    githubLink: string;
    liveLink: string;
}

const projects: Project[] = [
    {
        title: " Orfarm Grocery 🌱 ",
        description:
            "Orfarm Grocery is a modern online grocery shopping center that offers a wide range of organic and fresh produce. Built with the MERN stack (MongoDB, Express.js, React, Node.js), this platform provides a seamless shopping experience with features like product browsing, cart management, and secure checkout.",
        link: "https://i.ibb.co/XgnwgD7/Orfarm-Grocery.png",
        color: "#6e9972",
        githubLink: " https://github.com/rak9b/-Orfarm-Grocery-Online-Grocery-Shopping-Center",
        liveLink: "https://orfarm-grocery.vercel.app/",
    },
    {
        title: "Akademi - Scholarship Management System   ",
        description:
            "Akademi is a web-based Scholarship Management System designed to streamline the application, management, and approval processes for scholarships. Built using the MERN stack (MongoDB, Express.js, React, Node.js), Firebase for authentication, and Vercel for hosting the backend, this platform ensures efficient and secure scholarship management.",
        link: "https://i.postimg.cc/GhcMfHq7/Screenshot-2025-07-14-215711.png",
        color: "#89ff93",
        githubLink: " https://github.com/rak9b/Akademi---Scholarship-Management-System ",
        liveLink: "https://akademi-uni.web.app/",
    },
    {
        title: "📘 E-Tutor Booking  ",
        description:
            "E-Tutor Booking, a modern, responsive, and feature-rich Online Tutor Booking Platform . This web application is designed to connect students with qualified tutors across various languages and subjects. It offers a seamless experience from discovering tutors to scheduling and reviewing sessions.",
        link: "https://i.postimg.cc/W3rqgQR5/Screenshot-2025-06-29-150504.png",
        color: "#8f89ff",
        githubLink: "https://github.com/rak9b/-E-Tutor-Booking",
        liveLink: "https://tutor-booking-43ee8.web.app/",
    },
    {
        title: "🍲 Food Khazana ",
        description:
            "A user-friendly Recipe Book App where users can manage their recipes, discover recipes from others, add recipes to a wishlist, and like recipes. The app features a dynamic top recipes section based on likes, providing a simple and engaging platform for food enthusiasts.",
        link: "https://i.postimg.cc/MHQcq1Tv/Screenshot-2025-06-29-145857.png",
        color: "#5196fd",
        githubLink: "https://github.com/rak9b/-Food-Khazana---Recipe-Book-App",
        liveLink: "https://food-khazana.netlify.app/",
    },
    {
        title: "LeafyWorld - Gardening Community Platform",
        description:
            "LeafyWorld is a vibrant online community for gardening enthusiasts to connect, share knowledge, and grow together. Our platform brings together plant lovers from beginners to experts, offering a space to exchange tips, discover local gardeners, and participate in gardening events.💻✨",
        link: "https://i.postimg.cc/kMfsfKnq/Screenshot-2025-07-01-160141.png",
        color: "#ed649e",
        githubLink: "https://github.com/rak9b/-LeafyWorld---Gardening-Community-Platform/tree/main",
        liveLink: "https://leafyworld-b841c.web.app",
    },
    {
        title: "🔐 TheCrate",
        description:
            "A modern subscription-based web application built with React, Firebase Authentication, and Vite. It offers secure login, protected routes, user profile management, dynamic blogs, testimonials, and more.",
        link: "https://i.postimg.cc/sXhdnRwD/Screenshot-2025-06-29-151308.png",
        color: "#5196fd",
        githubLink: "https://github.com/rak9b/-subscription-service-website-",
        liveLink: "https://subscription-box-website.vercel.app/",
    },
];

export default function Projects() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        // Add specific styles for 1366x768 resolution
        const style = document.createElement("style");
        style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
        document.head.appendChild(style);

        // Resolution check function
        const checkResolution = () => {
            const isTargetResolution =
                window.innerWidth >= 1360 &&
                window.innerWidth <= 1370 &&
                window.innerHeight >= 760 &&
                window.innerHeight <= 775;

            if (isTargetResolution) {
                document.documentElement.style.setProperty("--project-scale", "0.85");
                document.documentElement.style.setProperty("--project-margin", "-5vh");
            } else {
                document.documentElement.style.setProperty("--project-scale", "1");
                document.documentElement.style.setProperty("--project-margin", "0");
            }
        };

        checkResolution();
        window.addEventListener("resize", checkResolution);

        return () => {
            document.head.removeChild(style);
            window.removeEventListener("resize", checkResolution);
        };
    }, []);

    return (
        <ReactLenis root>
            <main className="bg-black" ref={container}>
                <section className="text-white w-full bg-slate-950">
                    {projects.map((project, i) => {
                        const targetScale = 1 - (projects.length - i) * 0.05;
                        return (
                            <Card
                                key={`${project.title}_${i}`}
                                i={i}
                                url={project.link}
                                title={project.title}
                                color={project.color}
                                description={project.description}
                                progress={scrollYProgress}
                                range={[i * 0.25, 1]}
                                targetScale={targetScale}
                                githubLink={project.githubLink}
                                liveLink={project.liveLink}
                            />
                        );
                    })}
                </section>

                {/* Professional Scroll Indicator */}
                <div className="fixed left-1/2 bottom-8 z-50 pointer-events-none select-none transform -translate-x-1/2">
                    <div className="flex flex-col items-center gap-3 animate-fadeInUp">
                        {/* Minimalist Mouse Icon */}
                        <div className="bg-slate-800/90 backdrop-blur-lg border border-slate-600 rounded-xl px-4 py-3 shadow-lg">
                            <div className="flex flex-col items-center gap-2">
                                {/* Clean Mouse SVG */}
                                <svg width="24" height="36" viewBox="0 0 24 36" fill="none" className="opacity-90">
                                    <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="30"
                                        rx="9"
                                        stroke="#e2e8f0"
                                        strokeWidth="2"
                                        fill="rgba(30, 41, 59, 0.3)"
                                    />
                                    <circle cx="12" cy="12" r="2" fill="#60a5fa">
                                        <animate
                                            attributeName="cy"
                                            values="12;22;12"
                                            dur="2s"
                                            repeatCount="indefinite"
                                        />
                                        <animate
                                            attributeName="opacity"
                                            values="1;0.4;1"
                                            dur="2s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                </svg>

                                {/* Subtle Down Arrow */}
                                <div className="flex flex-col items-center gap-1">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="animate-bounce">
                                        <path
                                            d="M1 1L6 6L11 1"
                                            stroke="#60a5fa"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Professional Text */}
                        <span className="text-xs font-medium tracking-wider text-slate-400 uppercase">
                            Explore Projects
                        </span>
                    </div>
                </div>

                {/* Premium Scrollbar */}
                <style>
                    {`
            /* Fade-in animation */
            @keyframes fadeInUp {
              0% { 
                opacity: 0; 
                transform: translateY(20px);
              }
              100% { 
                opacity: 1; 
                transform: translateY(0);
              }
            }
            
            .animate-fadeInUp {
              animation: fadeInUp 1s ease-out forwards;
            }

            /* Premium Scrollbar Styles */
            ::-webkit-scrollbar {
              width: 8px;
              background: #0f172a;
            }
            
            ::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, #475569 0%, #334155 50%, #1e293b 100%);
              border-radius: 4px;
              border: 1px solid #1e293b;
              transition: all 0.3s ease;
            }
            
            ::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(180deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%);
              box-shadow: 0 0 8px rgba(96, 165, 250, 0.3);
            }
            
            ::-webkit-scrollbar-track {
              background: #0f172a;
              border-radius: 4px;
            }

            /* Firefox */
            html {
              scrollbar-width: thin;
              scrollbar-color: #475569 #0f172a;
            }
            
            /* Mobile responsiveness */
            @media (max-width: 640px) {
              .fixed.left-1\\/2.bottom-8 { 
                bottom: 1.5rem !important; 
              }
              .bg-slate-800\\/90 { 
                padding: 0.75rem 1rem !important; 
              }
              .text-xs { 
                font-size: 0.7rem !important; 
              }
            }
          `}
                </style>
            </main>
        </ReactLenis>
    );
}

interface CardProps {
    i: number;
    title: string;
    description: string;
    url: string;
    color: string;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
    githubLink: string;
    liveLink: string;
}

function Card({
    i,
    title,
    description,
    url,
    color,
    progress,
    range,
    targetScale,
    githubLink,
    liveLink,
}: CardProps) {
    const container = useRef<HTMLDivElement>(null);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="h-screen flex items-center justify-center sticky top-0 project-container"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                    transform: `scale(var(--project-scale, 1))`,
                    marginTop: "var(--project-margin, 0)",
                }}
                className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
                whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" },
                }}
            >
                {/* Enhanced professional card design */}
                <div className="w-full flex flex-col md:flex-row bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50">
                    {/* Image section with enhanced styling */}
                    <div className="w-full md:w-[55%] h-[280px] md:h-[420px] lg:h-[480px] relative overflow-hidden bg-slate-800">
                        <Image
                            src={url}
                            alt={title}
                            width={1200}
                            height={800}
                            className="w-full h-full object-cover"
                            unoptimized
                        />

                        {/* Professional overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Subtle colored overlay on hover */}
                        <motion.div
                            className="absolute inset-0"
                            style={{
                                background: `linear-gradient(135deg, ${color}20, transparent 70%)`
                            }}
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        />

                        {/* Professional project number badge */}
                        <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/10">
                            <span className="text-slate-400">0{i + 1}</span>
                        </div>

                        {/* Technology stack indicator */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex gap-2">
                                <div className="px-3 py-1 bg-black/50 backdrop-blur-md text-xs font-medium text-slate-300 rounded-full border border-white/10">
                                    React
                                </div>
                                <div className="px-3 py-1 bg-black/50 backdrop-blur-md text-xs font-medium text-slate-300 rounded-full border border-white/10">
                                    MERN
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content section with enhanced styling */}
                    <div className="w-full md:w-[45%] p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                        <div>
                            {/* Professional header with accent line */}
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-1 h-12 rounded-full"
                                    style={{ backgroundColor: color }}
                                />
                                <div className="flex-1 h-px bg-gradient-to-r from-slate-600 to-transparent" />
                            </div>

                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                                {title.trim()}
                            </h2>

                            <p className="text-slate-400 leading-relaxed text-sm md:text-base mb-6 max-w-md">
                                {description}
                            </p>


                        </div>

                        {/* Professional action buttons */}
                        <div className="mt-auto">
                            <div className="w-full h-px bg-gradient-to-r from-slate-700 via-slate-600 to-transparent mb-6" />

                            <div className="flex items-center justify-between">
                                {/* GitHub Link */}
                                <motion.a
                                    href={githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-600 transition-all duration-300"
                                    whileHover={{
                                        y: -2,
                                        boxShadow: `0 8px 25px ${color}20`
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-slate-300 group-hover:text-white transition-colors"
                                    >
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                                        Code
                                    </span>
                                </motion.a>

                                {/* Live Link */}
                                <motion.a
                                    href={liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 px-6 py-3 rounded-lg border-2 transition-all duration-300"
                                    style={{
                                        borderColor: color,
                                        backgroundColor: `${color}10`
                                    }}
                                    whileHover={{
                                        y: -2,
                                        backgroundColor: color,
                                        boxShadow: `0 8px 25px ${color}40`
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-colors group-hover:text-white"
                                        style={{ color }}
                                    >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15,3 21,3 21,9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    <span
                                        className="text-sm font-semibold transition-colors group-hover:text-white"
                                        style={{ color }}
                                    >
                                        Visit Live
                                    </span>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
