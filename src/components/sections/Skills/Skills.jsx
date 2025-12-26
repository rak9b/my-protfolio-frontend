import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PropTypes from "prop-types";
import IconCloudDemo from "@/components/Globe";
import { Code2, Database, Layout, Cpu, Cloud, Shield, TestTube, Users, Brain, Wrench, Lock, Eye, Search, FileText, Globe as GlobeIcon, Server, Network, AlertTriangle } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaWindows,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiVite,
  SiTypescript,
  SiPostgresql,
  SiRedux,
  SiExpress,
  SiFramer,
  SiNetlify,
  SiSplunk,
  SiBurpsuite,
  SiKalilinux,
  SiNotion,
  SiTrello,
  SiCloudflare,
  SiPostman,
  SiPrisma,
  SiWebpack,
} from "react-icons/si";
import { TbBrandVscode, TbShield, TbBug, TbLock, TbEye, TbSearch, TbApi, TbShieldCheck, TbReport, TbCertificate, TbNetwork } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2, BsShieldCheck, BsPerson, BsGear, BsShieldLock } from "react-icons/bs";
import { MdAnimation, MdSecurity, MdManageAccounts, MdPolicy, MdVpnKey } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
            {skill.learning && (
              <span className="text-xs text-yellow-400 ml-1">(learning)</span>
            )}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

SkillCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      learning: PropTypes.bool,
    })
  ).isRequired,
  color: PropTypes.string.isRequired,
};

import { PORTFOLIO_DATA } from "@/constants/data";

const SkillsSection = () => {
  const { skillCategories } = PORTFOLIO_DATA;

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center mb-12">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={`${category.title}_${index}`}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;