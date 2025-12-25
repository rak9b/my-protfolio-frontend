"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Globe from "@/components/Globe";
import { motion } from "framer-motion";
import {
    Code2, Database, Cloud, Shield, Brain, Wrench
} from "lucide-react";
import {
    FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaHtml5, FaJs
} from "react-icons/fa";
import {
    SiNextdotjs, SiTailwindcss, SiMongodb, SiVercel,
    SiTypescript, SiPostgresql, SiRedux, SiExpress, SiFramer, SiKalilinux, SiPostman
} from "react-icons/si";
import { TbBrandVscode, TbShield, TbBug } from "react-icons/tb";
import { BsGrid1X2, BsShieldCheck } from "react-icons/bs";

interface Skill {
    name: string;
    icon: React.ReactNode;
    learning?: boolean;
}

interface SkillCategory {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    skills: Skill[];
    color: string;
}

const SkillCard = ({ icon: Icon, title, skills, color }: SkillCategory) => (
    <Card className="group relative overflow-hidden bg-white/5 border-white/10 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent group-hover:via-cyan-500/10 animate-shimmer"></div>
        <CardContent className="p-8 relative z-10">
            <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-white/5 ${color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {title}
                </h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill: Skill, index: number) => (
                    <Badge
                        key={index}
                        variant="secondary"
                        className="group/badge relative bg-white/5 hover:bg-white/10 text-gray-100 border-white/5 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105"
                    >
                        <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
                            {skill.icon}
                        </span>
                        <span className="font-medium">{skill.name}</span>
                        {skill.learning && (
                            <span className="text-[10px] text-cyan-400 ml-1">(learning)</span>
                        )}
                    </Badge>
                ))}
            </div>
        </CardContent>
    </Card>
);

export default function Skills() {
    const skillCategories = [
        {
            icon: Brain,
            title: "Core Languages",
            color: "text-blue-400",
            skills: [
                { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
                { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
                { name: "SQL", icon: <Database className="text-[#336791]" /> },
                { name: "HTML/CSS", icon: <FaHtml5 className="text-[#E34F26]" /> },
            ],
        },
        {
            icon: Code2,
            title: "Frontend",
            color: "text-cyan-400",
            skills: [
                { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
                { name: "Framer Motion", icon: <SiFramer className="text-[#0055FF]" /> },
                { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
            ],
        },
        {
            icon: Database,
            title: "Backend",
            color: "text-emerald-400",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
                { name: "Express", icon: <SiExpress /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
                { name: "Prisma", icon: <BsGrid1X2 className="text-[#FF6C37]" /> },
            ],
        },
        {
            icon: Shield,
            title: "Security",
            color: "text-red-400",
            skills: [
                { name: "Pen Testing", icon: <TbShield className="text-red-500" /> },
                { name: "OWASP", icon: <BsShieldCheck className="text-emerald-500" /> },
                { name: "Bug Bounty", icon: <TbBug className="text-orange-500" /> },
                { name: "Kali Linux", icon: <SiKalilinux className="text-blue-400" /> },
            ],
        },
        {
            icon: Cloud,
            title: "DevOps",
            color: "text-purple-400",
            skills: [
                { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
                { name: "Vercel", icon: <SiVercel /> },
                { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
                { name: "CI/CD", icon: <Cloud /> },
            ],
        },
        {
            icon: Wrench,
            title: "Tools",
            color: "text-yellow-400",
            skills: [
                { name: "VS Code", icon: <TbBrandVscode className="text-[#007ACC]" /> },
                { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
                { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
            ],
        }
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Technical Arsenal
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive list of the technologies and tools I use to bring ideas to life.
                    </p>
                </div>

                <div className="flex justify-center items-center mb-16">
                    <Globe />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SkillCard
                                icon={category.icon}
                                title={category.title}
                                skills={category.skills}
                                color={category.color}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SiFigma({ className }: { className?: string }) {
    return <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>;
}
