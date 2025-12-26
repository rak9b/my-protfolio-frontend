import {
    Code2, Database, Layout, Brain, Cloud, TestTube, Users, Shield,
    Target, Award, BookOpen, Wrench, Eye, Network, AlertTriangle,
    Search, FileText, Globe as GlobeIcon, Server, Lock, Cpu
} from "lucide-react";
import {
    FaReact, FaNodeJs, FaGitAlt, FaLinux, FaDocker, FaHtml5,
    FaCss3Alt, FaJs, FaGithub, FaWindows
} from "react-icons/fa";
import {
    SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiVercel,
    SiVite, SiTypescript, SiPostgresql, SiRedux, SiExpress,
    SiFramer, SiNetlify, SiSplunk, SiBurpsuite, SiKalilinux,
    SiNotion, SiTrello, SiCloudflare, SiPostman, SiPrisma, SiWebpack
} from "react-icons/si";
import {
    TbBrandVscode, TbShield, TbBug, TbLock, TbEye, TbSearch,
    TbApi, TbShieldCheck, TbReport, TbCertificate, TbNetwork
} from "react-icons/tb";
import {
    BsFileEarmarkCode, BsGrid1X2, BsShieldCheck, BsPerson,
    BsGear, BsShieldLock
} from "react-icons/bs";
import { MdAnimation, MdSecurity, MdManageAccounts, MdPolicy, MdVpnKey } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";
import React from 'react';

export const PORTFOLIO_DATA = {
    profile: {
        name: "Md. Rakibul Islam",
        title: "Full-Stack Developer & Cybersecurity Professional",
        email: "mdrakibislam7018@gmail.com",
        phone: "+8801580673809",
        location: "Chittagong, Bangladesh",
        github: "https://github.com/rak9b",
        linkedin: "https://linkedin.com/in/md-rakibul-islam007",
    },

    experiences: [
        {
            icon: Code2,
            title: "Full Stack Developer Intern",
            company: "Code Craft",
            period: "Dec 2024 - Jan 2025",
            description: "Improved web app performance and security by integrating best coding practices, boosting project delivery efficiency by 30%. Collaborated with developers to debug and enhance 15+ real-world application features.",
            type: "work"
        },
        {
            icon: Code2,
            title: "Frontend Developer Intern",
            company: "StartHere",
            period: "Dec 2024 - Feb 2025",
            description: "Developed responsive front-end components increasing user engagement by 20%. Implemented secure API endpoints and authentication workflows following ISO standards.",
            type: "work"
        },
        {
            icon: Users,
            title: "Campus Cybersecurity Lead",
            company: "Port City International University",
            period: "2023 - Present",
            description: "Led campus-wide threat detection initiatives, securing university networks and enhancing cybersecurity awareness. Conducted workshops on ethical hacking educating 300+ students.",
            type: "leadership"
        },
        {
            icon: Target,
            title: "Mentor & Workshop Facilitator",
            company: "University Community",
            period: "2023 - Present",
            description: "Mentored peers and juniors in cybersecurity and full-stack development, cultivating a collaborative environment focused on skill growth and teamwork.",
            type: "leadership"
        }
    ],

    achievements: [
        {
            icon: Award,
            title: "WebXtreme Hackathon 2025 - Top 20",
            description: "Ranked in the Top 20 at NSU Tech Fest among 320+ teams from 168 universities across Bangladesh, for developing a secure Crime Reporting & Community Verification Platform focused on safety, transparency, and social impact.",
            isSpecial: true // For custom styling if needed
        },
        {
            icon: Shield,
            title: "CTF Competitions",
            description: "Active participant in national and online CTFs (Kingnight, CyberAid, BDSec CTF), refining problem-solving and penetration testing skills."
        },
        {
            icon: BookOpen,
            title: "Security Certifications",
            description: "Completed multiple cybersecurity certifications including TryHackMe Offensive Pentest, NDE by EC-Council, and pursuing OSCP."
        },
        {
            icon: Code2,
            title: "Open Source Contributions",
            description: "Maintained active GitHub profile with 5+ major projects showcasing full-stack development and security implementations."
        }
    ],

    skillCategories: [
        {
            icon: Code2,
            title: "🖥️ Frontend (Client-side)",
            color: "text-cyan-400",
            skills: [
                { name: "HTML5", icon: React.createElement(FaHtml5, { className: "w-4 h-4 text-[#E34F26]" }) },
                { name: "CSS3", icon: React.createElement(FaCss3Alt, { className: "w-4 h-4 text-[#1572B6]" }) },
                { name: "Responsive Design", icon: React.createElement(Layout, { className: "w-4 h-4 text-[#38B2AC]" }) },
                { name: "Bootstrap", icon: React.createElement(BsGrid1X2, { className: "w-4 h-4 text-[#7952B3]" }) },
                { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss, { className: "w-4 h-4 text-[#38B2AC]" }) },
                { name: "JavaScript (ES6+)", icon: React.createElement(FaJs, { className: "w-4 h-4 text-[#F7DF1E]" }) },
                { name: "DOM Manipulation", icon: React.createElement(Code2, { className: "w-4 h-4 text-[#F0DB4F]" }) },
                { name: "React.js", icon: React.createElement(FaReact, { className: "w-4 h-4 text-[#61DAFB]" }) },
                { name: "Next.js", icon: React.createElement(SiNextdotjs, { className: "w-4 h-4 text-white" }) },
                { name: "Server-side Rendering", icon: React.createElement(Server, { className: "w-4 h-4 text-[#000000]" }) },
                { name: "SEO Optimization", icon: React.createElement(Search, { className: "w-4 h-4 text-[#4285F4]" }) },
                { name: "Framer Motion", icon: React.createElement(SiFramer, { className: "w-4 h-4 text-[#0055FF]" }) },
            ],
        },
        {
            icon: Database,
            title: "⚙️ Backend (Server-side)",
            color: "text-green-400",
            skills: [
                { name: "Node.js", icon: React.createElement(FaNodeJs, { className: "w-4 h-4 text-[#339933]" }) },
                { name: "Express.js", icon: React.createElement(SiExpress, { className: "w-4 h-4 text-[#000000]" }) },
                { name: "REST API", icon: React.createElement(TbApi, { className: "w-4 h-4 text-[#FF6C37]" }) },
                { name: "JWT Authentication", icon: React.createElement(TbLock, { className: "w-4 h-4 text-[#FB015B]" }) },
                { name: "Cookies & Sessions", icon: React.createElement(BsGear, { className: "w-4 h-4 text-[#F7931E]" }) },
                { name: "Middleware", icon: React.createElement(Network, { className: "w-4 h-4 text-[#68A063]" }) },
                { name: "Error Handling", icon: React.createElement(AlertTriangle, { className: "w-4 h-4 text-[#FF6B6B]" }) },
            ],
        },
        {
            icon: Layout,
            title: "🗃️ Database & Data Handling",
            color: "text-orange-400",
            skills: [
                { name: "PostgreSQL", icon: React.createElement(SiPostgresql, { className: "w-4 h-4 text-[#336791]" }) },
                { name: "MongoDB", icon: React.createElement(SiMongodb, { className: "w-4 h-4 text-[#47A248]" }) },
                { name: "Prisma ORM", icon: React.createElement(SiPrisma, { className: "w-4 h-4 text-[#2D3748]" }) },
                { name: "Query Optimization", icon: React.createElement(Database, { className: "w-4 h-4 text-[#00758F]" }) },
                { name: "Data Modeling", icon: React.createElement(BsGrid1X2, { className: "w-4 h-4 text-[#1572B6]" }) },
                { name: "Firebase", icon: React.createElement(SiFirebase, { className: "w-4 h-4 text-[#FFCA28]" }) },
            ],
        },
        {
            icon: Brain,
            title: "🧠 Advanced Programming",
            color: "text-blue-400",
            skills: [
                { name: "TypeScript", icon: React.createElement(SiTypescript, { className: "w-4 h-4 text-[#3178C6]" }) },
                { name: "Async/Await", icon: React.createElement(Code2, { className: "w-4 h-4 text-[#F0DB4F]" }) },
                { name: "Promise", icon: React.createElement(FaJs, { className: "w-4 h-4 text-[#F7DF1E]" }) },
                { name: "Fetch API", icon: React.createElement(TbApi, { className: "w-4 h-4 text-[#61DAFB]" }) },
                { name: "Error Handling", icon: React.createElement(AlertTriangle, { className: "w-4 h-4 text-[#FF6347]" }) },
                { name: "Data Structures", icon: React.createElement(Brain, { className: "w-4 h-4 text-[#9C27B0]" }) },
                { name: "Algorithms", icon: React.createElement(BsGear, { className: "w-4 h-4 text-[#00BCD4]" }) },
            ],
        },
        {
            icon: Cloud,
            title: "🐳 DevOps & Deployment",
            color: "text-purple-400",
            skills: [
                { name: "Git & GitHub", icon: React.createElement(FaGitAlt, { className: "w-4 h-4 text-[#F05032]" }) },
                { name: "Docker", icon: React.createElement(FaDocker, { className: "w-4 h-4 text-[#2496ED]" }) },
                { name: "Netlify", icon: React.createElement(SiNetlify, { className: "w-4 h-4 text-[#00C7B7]" }) },
                { name: "Vercel", icon: React.createElement(SiVercel, { className: "w-4 h-4 text-white" }) },
                { name: "Railway", icon: React.createElement(Server, { className: "w-4 h-4 text-[#0B0D0E]" }) },
                { name: "Environment Config", icon: React.createElement(BsGear, { className: "w-4 h-4 text-[#68A063]" }) },
                { name: "GitHub Actions", icon: React.createElement(FaGithub, { className: "w-4 h-4 text-[#181717]" }) },
            ],
        },
        {
            icon: TestTube,
            title: "🎨 Career & Project Skills",
            color: "text-pink-400",
            skills: [
                { name: "Portfolio Building", icon: React.createElement(FileText, { className: "w-4 h-4 text-[#00D4AA]" }) },
                { name: "Full-Stack Projects", icon: React.createElement(Code2, { className: "w-4 h-4 text-[#61DAFB]" }) },
                { name: "GitHub Workflow", icon: React.createElement(FaGithub, { className: "w-4 h-4 text-[#181717]" }) },
                { name: "LinkedIn Optimization", icon: React.createElement(BsPerson, { className: "w-4 h-4 text-[#0A66C2]" }) },
                { name: "Resume Building", icon: React.createElement(FileText, { className: "w-4 h-4 text-[#4CAF50]" }) },
            ],
        },
        {
            icon: Users,
            title: "💼 Soft Skills",
            color: "text-emerald-400",
            skills: [
                { name: "Problem Solving", icon: React.createElement(Brain, { className: "w-4 h-4 text-[#9C27B0]" }) },
                { name: "Time Management", icon: React.createElement(BsGear, { className: "w-4 h-4 text-[#FF9800]" }) },
                { name: "Communication", icon: React.createElement(BsPerson, { className: "w-4 h-4 text-[#4CAF50]" }) },
                { name: "Teamwork", icon: React.createElement(Users, { className: "w-4 h-4 text-[#2196F3]" }) },
                { name: "Adaptability", icon: React.createElement(FcWorkflow, { className: "w-4 h-4" }) },
                { name: "Continuous Learning", icon: React.createElement(Brain, { className: "w-4 h-4 text-[#00BCD4]" }) },
                { name: "Agile & Scrum", icon: React.createElement(FcWorkflow, { className: "w-4 h-4" }) },
            ],
        },
        {
            icon: Shield,
            title: "🔒 Cybersecurity Fundamentals",
            color: "text-red-400",
            skills: [
                { name: "CIA Triad", icon: React.createElement(BsShieldCheck, { className: "w-4 h-4 text-[#FF0000]" }) },
                { name: "Threat Modeling", icon: React.createElement(TbShield, { className: "w-4 h-4 text-[#8B0000]" }) },
                { name: "Risk Assessment", icon: React.createElement(AlertTriangle, { className: "w-4 h-4 text-[#FF4500]" }) },
                { name: "Vulnerability Management", icon: React.createElement(TbBug, { className: "w-4 h-4 text-[#FF6347]" }) },
                { name: "Security Controls", icon: React.createElement(Lock, { className: "w-4 h-4 text-[#DC143C]" }) },
            ],
        },
        {
            icon: TbShieldCheck,
            title: "🎯 Penetration Testing",
            color: "text-yellow-400",
            skills: [
                { name: "Pen Testing Lifecycle", icon: React.createElement(FcWorkflow, { className: "w-4 h-4" }) },
                { name: "Black/Grey/White Box", icon: React.createElement(BsShieldLock, { className: "w-4 h-4 text-[#FFD700]" }) },
                { name: "Reconnaissance", icon: React.createElement(TbSearch, { className: "w-4 h-4 text-[#4682B4]" }) },
                { name: "Exploitation", icon: React.createElement(TbBug, { className: "w-4 h-4 text-[#FF4444]" }) },
                { name: "Reporting", icon: React.createElement(TbReport, { className: "w-4 h-4 text-[#32CD32]" }) },
            ],
        },
        {
            icon: Eye,
            title: "🔍 Reconnaissance & OSINT",
            color: "text-indigo-400",
            skills: [
                { name: "OSINT", icon: React.createElement(TbEye, { className: "w-4 h-4 text-[#C51162]" }) },
                { name: "DNS Enumeration", icon: React.createElement(GlobeIcon, { className: "w-4 h-4 text-[#4285F4]" }) },
                { name: "WHOIS Analysis", icon: React.createElement(Search, { className: "w-4 h-4 text-[#00897B]" }) },
                { name: "Subdomain Enum", icon: React.createElement(TbNetwork, { className: "w-4 h-4 text-[#0277BD]" }) },
                { name: "Tech Fingerprinting", icon: React.createElement(Code2, { className: "w-4 h-4 text-[#5E35B1]" }) },
            ],
        },
        {
            icon: Network,
            title: "🌐 Network Security",
            color: "text-teal-400",
            skills: [
                { name: "TCP/IP Model", icon: React.createElement(Network, { className: "w-4 h-4 text-[#00897B]" }) },
                { name: "OSI Model", icon: React.createElement(TbNetwork, { className: "w-4 h-4 text-[#0277BD]" }) },
                { name: "Port Scanning", icon: React.createElement(TbSearch, { className: "w-4 h-4 text-[#1976D2]" }) },
                { name: "Service Enumeration", icon: React.createElement(Server, { className: "w-4 h-4 text-[#455A64]" }) },
                { name: "VPN Concepts", icon: React.createElement(MdVpnKey, { className: "w-4 h-4 text-[#00BCD4]" }) },
            ],
        },
        {
            icon: AlertTriangle,
            title: "⚠️ OWASP Top 10",
            color: "text-rose-400",
            skills: [
                { name: "Broken Access Control", icon: React.createElement(Lock, { className: "w-4 h-4 text-[#FF1744]" }) },
                { name: "Injection Attacks", icon: React.createElement(TbBug, { className: "w-4 h-4 text-[#D50000]" }) },
                { name: "XSS", icon: React.createElement(Code2, { className: "w-4 h-4 text-[#FF6D00]" }) },
                { name: "SQL Injection", icon: React.createElement(Database, { className: "w-4 h-4 text-[#C62828]" }) },
                { name: "CSRF", icon: React.createElement(TbShield, { className: "w-4 h-4 text-[#AD1457]" }) },
                { name: "Security Misconfiguration", icon: React.createElement(BsGear, { className: "w-4 h-4 text-[#E65100]" }) },
            ],
        },
        {
            icon: Wrench,
            title: "🛠️ Security Testing Tools",
            color: "text-amber-400",
            skills: [
                { name: "Kali Linux", icon: React.createElement(SiKalilinux, { className: "w-4 h-4 text-[#557C94]" }) },
                { name: "Burp Suite", icon: React.createElement(SiBurpsuite, { className: "w-4 h-4 text-[#FF6633]" }) },
                { name: "Metasploit", icon: React.createElement(TbShield, { className: "w-4 h-4 text-[#2596CD]" }) },
                { name: "Nmap", icon: React.createElement(TbSearch, { className: "w-4 h-4 text-[#4682B4]" }) },
                { name: "OWASP ZAP", icon: React.createElement(BsShieldCheck, { className: "w-4 h-4 text-[#00549E]" }) },
                { name: "Splunk", icon: React.createElement(SiSplunk, { className: "w-4 h-4 text-[#000000]" }) },
                { name: "Netcat", icon: React.createElement(Network, { className: "w-4 h-4 text-[#607D8B]" }) },
            ],
        },
        {
            icon: FaLinux,
            title: "💻 Operating Systems",
            color: "text-slate-400",
            skills: [
                { name: "Linux Administration", icon: React.createElement(FaLinux, { className: "w-4 h-4 text-[#FCC624]" }) },
                { name: "Bash Scripting", icon: React.createElement(Code2, { className: "w-4 h-4 text-[#4EAA25]" }) },
                { name: "Windows Security", icon: React.createElement(FaWindows, { className: "w-4 h-4 text-[#0078D6]" }) },
                { name: "File Permissions", icon: React.createElement(Lock, { className: "w-4 h-4 text-[#607D8B]" }) },
                { name: "Process Management", icon: React.createElement(Cpu, { className: "w-4 h-4 text-[#FF6F00]" }) },
            ],
        },
        {
            icon: Lock,
            title: "🔐 Cryptography & Auth",
            color: "text-violet-400",
            skills: [
                { name: "Hashing", icon: React.createElement(TbLock, { className: "w-4 h-4 text-[#7B1FA2]" }) },
                { name: "Encryption", icon: React.createElement(Lock, { className: "w-4 h-4 text-[#512DA8]" }) },
                { name: "SSL/TLS", icon: React.createElement(BsShieldCheck, { className: "w-4 h-4 text-[#00897B]" }) },
                { name: "OAuth", icon: React.createElement(MdVpnKey, { className: "w-4 h-4 text-[#4285F4]" }) },
                { name: "Password Security", icon: React.createElement(TbLock, { className: "w-4 h-4 text-[#E91E63]" }) },
            ],
        },
        {
            icon: TbCertificate,
            title: "📜 Compliance & Standards",
            color: "text-sky-400",
            skills: [
                { name: "ISO 27001", icon: React.createElement(TbCertificate, { className: "w-4 h-4 text-[#0066CC]" }) },
                { name: "PCI DSS", icon: React.createElement(MdPolicy, { className: "w-4 h-4 text-[#00897B]" }) },
                { name: "Data Protection", icon: React.createElement(BsShieldLock, { className: "w-4 h-4 text-[#1976D2]" }) },
                { name: "Risk Rating (CVSS)", icon: React.createElement(AlertTriangle, { className: "w-4 h-4 text-[#FF9800]" }) },
                { name: "Ethical Hacking", icon: React.createElement(BsShieldCheck, { className: "w-4 h-4 text-[#4CAF50]" }) },
            ],
        },
        {
            icon: Cpu,
            title: "🔧 Dev Tools & Platforms",
            color: "text-fuchsia-400",
            skills: [
                { name: "VS Code", icon: React.createElement(TbBrandVscode, { className: "w-4 h-4 text-[#007ACC]" }) },
                { name: "Postman", icon: React.createElement(SiPostman, { className: "w-4 h-4 text-[#FF6C37]" }) },
                { name: "Webpack", icon: React.createElement(SiWebpack, { className: "w-4 h-4 text-[#8DD6F9]" }) },
                { name: "Vite", icon: React.createElement(SiVite, { className: "w-4 h-4 text-[#646CFF]" }) },
                { name: "Redux", icon: React.createElement(SiRedux, { className: "w-4 h-4 text-[#764ABC]" }) },
                { name: "Notion", icon: React.createElement(SiNotion, { className: "w-4 h-4 text-[#000000]" }) },
                { name: "Trello", icon: React.createElement(SiTrello, { className: "w-4 h-4 text-[#0079BF]" }) },
            ],
        },
    ],

    projects: [
        {
            title: " Orfarm Grocery 🌱 ",
            description: "Orfarm Grocery is a modern online grocery shopping center that offers a wide range of organic and fresh produce. Built with the MERN stack (MongoDB, Express.js, React, Node.js), this platform provides a seamless shopping experience with features like product browsing, cart management, and secure checkout.",
            link: "https://i.ibb.co/XgnwgD7/Orfarm-Grocery.png",
            color: "#6e9972",
            githubLink: "https://github.com/rak9b/-Orfarm-Grocery-Online-Grocery-Shopping-Center",
            liveLink: "https://orfarm-grocery.vercel.app/",
        },
        {
            title: "Akademi - Scholarship Management System",
            description: "Akademi is a web-based Scholarship Management System designed to streamline the application, management, and approval processes for scholarships. Built using the MERN stack (MongoDB, Express.js, React, Node.js), Firebase for authentication, and Vercel for hosting the backend, this platform ensures efficient and secure scholarship management.",
            link: "https://i.postimg.cc/GhcMfHq7/Screenshot-2025-07-14-215711.png",
            color: "#89ff93",
            githubLink: "https://github.com/rak9b/Akademi---Scholarship-Management-System",
            liveLink: "https://akademi-uni.web.app/",
        },
        {
            title: "📘 E-Tutor Booking",
            description: "E-Tutor Booking, a modern, responsive, and feature-rich Online Tutor Booking Platform. This web application is designed to connect students with qualified tutors across various languages and subjects. It offers a seamless experience from discovering tutors to scheduling and reviewing sessions.",
            link: "https://i.postimg.cc/W3rqgQR5/Screenshot-2025-06-29-150504.png",
            color: "#8f89ff",
            githubLink: "https://github.com/rak9b/-E-Tutor-Booking",
            liveLink: "https://tutor-booking-43ee8.web.app/",
        },
        {
            title: "🍲 Food Khazana",
            description: "A user-friendly Recipe Book App where users can manage their recipes, discover recipes from others, add recipes to a wishlist, and like recipes. The app features a dynamic top recipes section based on likes, providing a simple and engaging platform for food enthusiasts.",
            link: "https://i.postimg.cc/MHQcq1Tv/Screenshot-2025-06-29-145857.png",
            color: "#5196fd",
            githubLink: "https://github.com/rak9b/-Food-Khazana---Recipe-Book-App",
            liveLink: "https://food-khazana.netlify.app/",
        },
        {
            title: "LeafyWorld - Gardening Community Platform",
            description: "LeafyWorld is a vibrant online community for gardening enthusiasts to connect, share knowledge, and grow together. Our platform brings together plant lovers from beginners to experts, offering a space to exchange tips, discover local gardeners, and participate in gardening events.💻✨",
            link: "https://i.postimg.cc/kMfsfKnq/Screenshot-2025-07-01-160141.png",
            color: "#ed649e",
            githubLink: "https://github.com/rak9b/-LeafyWorld---Gardening-Community-Platform/tree/main",
            liveLink: "https://leafyworld-b841c.web.app",
        },
        {
            title: "🔐 TheCrate",
            description: "A modern subscription-based web application built with React, Firebase Authentication, and Vite. It offers secure login, protected routes, user profile management, dynamic blogs, testimonials, and more.",
            link: "https://i.postimg.cc/sXhdnRwD/Screenshot-2025-06-29-151308.png",
            color: "#5196fd",
            githubLink: "https://github.com/rak9b/-subscription-service-website-",
            liveLink: "https://subscription-box-website.vercel.app/",
        },
    ]
};
