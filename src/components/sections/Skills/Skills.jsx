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

const SkillsSection = () => {
  const skillCategories = [
    // Full-Stack Development Skills
    {
      icon: Code2,
      title: "🖥️ Frontend (Client-side)",
      color: "text-cyan-400",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="w-4 h-4 text-[#1572B6]" /> },
        { name: "Responsive Design", icon: <Layout className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Bootstrap", icon: <BsGrid1X2 className="w-4 h-4 text-[#7952B3]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "JavaScript (ES6+)", icon: <FaJs className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "DOM Manipulation", icon: <Code2 className="w-4 h-4 text-[#F0DB4F]" /> },
        { name: "React.js", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
        { name: "Server-side Rendering", icon: <Server className="w-4 h-4 text-[#000000]" /> },
        { name: "SEO Optimization", icon: <Search className="w-4 h-4 text-[#4285F4]" /> },
        { name: "Framer Motion", icon: <SiFramer className="w-4 h-4 text-[#0055FF]" /> },
      ],
    },
    {
      icon: Database,
      title: "⚙️ Backend (Server-side)",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-[#000000]" /> },
        { name: "REST API", icon: <TbApi className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "JWT Authentication", icon: <TbLock className="w-4 h-4 text-[#FB015B]" /> },
        { name: "Cookies & Sessions", icon: <BsGear className="w-4 h-4 text-[#F7931E]" /> },
        { name: "Middleware", icon: <Network className="w-4 h-4 text-[#68A063]" /> },
        { name: "Error Handling", icon: <AlertTriangle className="w-4 h-4 text-[#FF6B6B]" /> },
      ],
    },
    {
      icon: Layout,
      title: "🗃️ Database & Data Handling",
      color: "text-orange-400",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "Prisma ORM", icon: <SiPrisma className="w-4 h-4 text-[#2D3748]" /> },
        { name: "Query Optimization", icon: <Database className="w-4 h-4 text-[#00758F]" /> },
        { name: "Data Modeling", icon: <BsGrid1X2 className="w-4 h-4 text-[#1572B6]" /> },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
      ],
    },
    {
      icon: Brain,
      title: "🧠 Advanced Programming",
      color: "text-blue-400",
      skills: [
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "Async/Await", icon: <Code2 className="w-4 h-4 text-[#F0DB4F]" /> },
        { name: "Promise", icon: <FaJs className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "Fetch API", icon: <TbApi className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Error Handling", icon: <AlertTriangle className="w-4 h-4 text-[#FF6347]" /> },
        { name: "Data Structures", icon: <Brain className="w-4 h-4 text-[#9C27B0]" /> },
        { name: "Algorithms", icon: <BsGear className="w-4 h-4 text-[#00BCD4]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "🐳 DevOps & Deployment",
      color: "text-purple-400",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "Netlify", icon: <SiNetlify className="w-4 h-4 text-[#00C7B7]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "Railway", icon: <Server className="w-4 h-4 text-[#0B0D0E]" /> },
        { name: "Environment Config", icon: <BsGear className="w-4 h-4 text-[#68A063]" /> },
        { name: "GitHub Actions", icon: <FaGithub className="w-4 h-4 text-[#181717]" /> },
      ],
    },
    {
      icon: TestTube,
      title: "🎨 Career & Project Skills",
      color: "text-pink-400",
      skills: [
        { name: "Portfolio Building", icon: <FileText className="w-4 h-4 text-[#00D4AA]" /> },
        { name: "Full-Stack Projects", icon: <Code2 className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "GitHub Workflow", icon: <FaGithub className="w-4 h-4 text-[#181717]" /> },
        { name: "LinkedIn Optimization", icon: <BsPerson className="w-4 h-4 text-[#0A66C2]" /> },
        { name: "Resume Building", icon: <FileText className="w-4 h-4 text-[#4CAF50]" /> },
      ],
    },
    {
      icon: Users,
      title: "💼 Soft Skills",
      color: "text-emerald-400",
      skills: [
        { name: "Problem Solving", icon: <Brain className="w-4 h-4 text-[#9C27B0]" /> },
        { name: "Time Management", icon: <BsGear className="w-4 h-4 text-[#FF9800]" /> },
        { name: "Communication", icon: <BsPerson className="w-4 h-4 text-[#4CAF50]" /> },
        { name: "Teamwork", icon: <Users className="w-4 h-4 text-[#2196F3]" /> },
        { name: "Adaptability", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "Continuous Learning", icon: <Brain className="w-4 h-4 text-[#00BCD4]" /> },
        { name: "Agile & Scrum", icon: <FcWorkflow className="w-4 h-4" /> },
      ],
    },

    // Cybersecurity Skills
    {
      icon: Shield,
      title: "🔒 Cybersecurity Fundamentals",
      color: "text-red-400",
      skills: [
        { name: "CIA Triad", icon: <BsShieldCheck className="w-4 h-4 text-[#FF0000]" /> },
        { name: "Threat Modeling", icon: <TbShield className="w-4 h-4 text-[#8B0000]" /> },
        { name: "Risk Assessment", icon: <AlertTriangle className="w-4 h-4 text-[#FF4500]" /> },
        { name: "Vulnerability Management", icon: <TbBug className="w-4 h-4 text-[#FF6347]" /> },
        { name: "Security Controls", icon: <Lock className="w-4 h-4 text-[#DC143C]" /> },
      ],
    },
    {
      icon: TbShieldCheck,
      title: "🎯 Penetration Testing",
      color: "text-yellow-400",
      skills: [
        { name: "Pen Testing Lifecycle", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "Black/Grey/White Box", icon: <BsShieldLock className="w-4 h-4 text-[#FFD700]" /> },
        { name: "Reconnaissance", icon: <TbSearch className="w-4 h-4 text-[#4682B4]" /> },
        { name: "Exploitation", icon: <TbBug className="w-4 h-4 text-[#FF4444]" /> },
        { name: "Reporting", icon: <TbReport className="w-4 h-4 text-[#32CD32]" /> },
      ],
    },
    {
      icon: Eye,
      title: "🔍 Reconnaissance & OSINT",
      color: "text-indigo-400",
      skills: [
        { name: "OSINT", icon: <TbEye className="w-4 h-4 text-[#C51162]" /> },
        { name: "DNS Enumeration", icon: <GlobeIcon className="w-4 h-4 text-[#4285F4]" /> },
        { name: "WHOIS Analysis", icon: <Search className="w-4 h-4 text-[#00897B]" /> },
        { name: "Subdomain Enum", icon: <TbNetwork className="w-4 h-4 text-[#0277BD]" /> },
        { name: "Tech Fingerprinting", icon: <Code2 className="w-4 h-4 text-[#5E35B1]" /> },
      ],
    },
    {
      icon: Network,
      title: "🌐 Network Security",
      color: "text-teal-400",
      skills: [
        { name: "TCP/IP Model", icon: <Network className="w-4 h-4 text-[#00897B]" /> },
        { name: "OSI Model", icon: <TbNetwork className="w-4 h-4 text-[#0277BD]" /> },
        { name: "Port Scanning", icon: <TbSearch className="w-4 h-4 text-[#1976D2]" /> },
        { name: "Service Enumeration", icon: <Server className="w-4 h-4 text-[#455A64]" /> },
        { name: "VPN Concepts", icon: <MdVpnKey className="w-4 h-4 text-[#00BCD4]" /> },
      ],
    },
    {
      icon: AlertTriangle,
      title: "⚠️ OWASP Top 10",
      color: "text-rose-400",
      skills: [
        { name: "Broken Access Control", icon: <Lock className="w-4 h-4 text-[#FF1744]" /> },
        { name: "Injection Attacks", icon: <TbBug className="w-4 h-4 text-[#D50000]" /> },
        { name: "XSS", icon: <Code2 className="w-4 h-4 text-[#FF6D00]" /> },
        { name: "SQL Injection", icon: <Database className="w-4 h-4 text-[#C62828]" /> },
        { name: "CSRF", icon: <TbShield className="w-4 h-4 text-[#AD1457]" /> },
        { name: "Security Misconfiguration", icon: <BsGear className="w-4 h-4 text-[#E65100]" /> },
      ],
    },
    {
      icon: Wrench,
      title: "🛠️ Security Testing Tools",
      color: "text-amber-400",
      skills: [
        { name: "Kali Linux", icon: <SiKalilinux className="w-4 h-4 text-[#557C94]" /> },
        { name: "Burp Suite", icon: <SiBurpsuite className="w-4 h-4 text-[#FF6633]" /> },
        { name: "Metasploit", icon: <TbShield className="w-4 h-4 text-[#2596CD]" /> },
        { name: "Nmap", icon: <TbSearch className="w-4 h-4 text-[#4682B4]" /> },
        { name: "OWASP ZAP", icon: <BsShieldCheck className="w-4 h-4 text-[#00549E]" /> },
        { name: "Splunk", icon: <SiSplunk className="w-4 h-4 text-[#000000]" /> },
        { name: "Netcat", icon: <Network className="w-4 h-4 text-[#607D8B]" /> },
      ],
    },
    {
      icon: FaLinux,
      title: "💻 Operating Systems",
      color: "text-slate-400",
      skills: [
        { name: "Linux Administration", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "Bash Scripting", icon: <Code2 className="w-4 h-4 text-[#4EAA25]" /> },
        { name: "Windows Security", icon: <FaWindows className="w-4 h-4 text-[#0078D6]" /> },
        { name: "File Permissions", icon: <Lock className="w-4 h-4 text-[#607D8B]" /> },
        { name: "Process Management", icon: <Cpu className="w-4 h-4 text-[#FF6F00]" /> },
      ],
    },
    {
      icon: Lock,
      title: "🔐 Cryptography & Auth",
      color: "text-violet-400",
      skills: [
        { name: "Hashing", icon: <TbLock className="w-4 h-4 text-[#7B1FA2]" /> },
        { name: "Encryption", icon: <Lock className="w-4 h-4 text-[#512DA8]" /> },
        { name: "SSL/TLS", icon: <BsShieldCheck className="w-4 h-4 text-[#00897B]" /> },
        { name: "OAuth", icon: <MdVpnKey className="w-4 h-4 text-[#4285F4]" /> },
        { name: "Password Security", icon: <TbLock className="w-4 h-4 text-[#E91E63]" /> },
      ],
    },
    {
      icon: TbCertificate,
      title: "📜 Compliance & Standards",
      color: "text-sky-400",
      skills: [
        { name: "ISO 27001", icon: <TbCertificate className="w-4 h-4 text-[#0066CC]" /> },
        { name: "PCI DSS", icon: <MdPolicy className="w-4 h-4 text-[#00897B]" /> },
        { name: "Data Protection", icon: <BsShieldLock className="w-4 h-4 text-[#1976D2]" /> },
        { name: "Risk Rating (CVSS)", icon: <AlertTriangle className="w-4 h-4 text-[#FF9800]" /> },
        { name: "Ethical Hacking", icon: <BsShieldCheck className="w-4 h-4 text-[#4CAF50]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "🔧 Dev Tools & Platforms",
      color: "text-fuchsia-400",
      skills: [
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Postman", icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "Webpack", icon: <SiWebpack className="w-4 h-4 text-[#8DD6F9]" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
        { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
        { name: "Notion", icon: <SiNotion className="w-4 h-4 text-[#000000]" /> },
        { name: "Trello", icon: <SiTrello className="w-4 h-4 text-[#0079BF]" /> },
      ],
    },
  ];

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