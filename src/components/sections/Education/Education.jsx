import { useState } from "react";
import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
  Shield,
  Code,
  Users,
  Zap,
  Target,
  Brain,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const EducationSection = () => {
  // hoveredIndex and setHoveredIndex were unused
  const [expandedIndex, setExpandedIndex] = useState(null);

  const educationData = [
    {
      degree: "Bachelor&apos;s in Computer Science &amp; Engineering",
      school: "Port City International University, Bangladesh",
      mascot: "🎓",
      year: "2024-2027 (Expected)",
      status: "Currently Enrolled",
      achievements: ["Full Stack Development Focus", "Cybersecurity Specialization"],
      skills: ["Software Engineering", "Data Structures", "Algorithms", "Computer Networks", "Database Systems"],
      description:
        "After exploring different academic paths, I strategically shifted to Computer Science &amp; Engineering (CSE) at a private university. Here, I am building a strong foundation in software engineering, full-stack development, and cybersecurity, aligning my studies with my passion and career goals.",
    },
    {
      degree: "Zoology (1 Year)",
      school: "Chattogram  University, Bangladesh",
      mascot: "🦉",
      year: "2022-2023",
      status: "Completed (Shifted)",
      achievements: ["Explored Biological Sciences"],
      skills: ["Biology", "Research", "Critical Thinking"],
      description:
        "Enrolled in Zoology due to family circumstances and studied for a year. This experience helped me realize my true interests lay elsewhere, motivating my eventual transition to CSE.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "U K A M H College & University",
      mascot: "📗",
      year: "2019–2021",
      status: "Completed",
      achievements: [
        "Science Stream",
        "Active BNCC Member",
        "University Admission Ranks: RU (345th, C unit – Top 0.53%), DU (4535th, D unit – Top 4.53%), CU (3453rd, A unit – Top 4.94%)",
        "GUST Score: 63.5"
      ],
      skills: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Resilience",
        "Leadership & Discipline (via BNCC)",
        "Time Management",
        "Competitive Exam Preparation",
        "Advanced Science Knowledge",
        "Analytical Reasoning",
        "Admission Test Strategy",
        "Team Communication"
      ],
      description:
        "Completed science-based curriculum while actively participating in BNCC, gaining discipline, leadership, and teamwork experience. Participated in highly competitive university admission journey, securing top ranks among tens of thousands of candidates, including RU (Top 0.53%). Despite family challenges, continued higher studies with determination and shifted academic focus to CSE to align with long-term goals."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      school: "GNH School",
      mascot: "📘",
      year: "2017-2019",
      status: "Completed",
      achievements: [
        "Science Background",
        "Active Scouts Member",
        "National & District Camps",
        "Volunteer & Community Service",
      ],
      skills: ["Science", "Teamwork", "Discipline", "Adaptability", "Leadership"],
      description:
        "Completed SSC in Science. As an active Scout, participated in national/district camps and community service, developing leadership, teamwork, discipline, and adaptability—skills that shaped my mindset beyond academics.",
    },
  ];

  const certifications = [
    {
      title: "Certified Ethical Hacker (CEH)",
      provider: "Mind Luster",
      icon: <Shield className="w-5 h-5 text-red-400" />,
      color: "red",
    },
    {
      title: "Network Defense Essentials (NDE)",
      provider: "EC-Council",
      icon: <Shield className="w-5 h-5 text-blue-400" />,
      color: "blue",
    },
    {
      title: "ISO 27001 Information Security",
      provider: "Mind Luster",
      icon: <Award className="w-5 h-5 text-green-400" />,
      color: "green",
    },
    {
      title: "TryHackMe Offensive Pentest",
      provider: "TryHackMe",
      icon: <Target className="w-5 h-5 text-purple-400" />,
      color: "purple",
    },
    {
      title: "CompTIA PenTest+",
      provider: "TryHackMe",
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      color: "yellow",
    },
    {
      title: "Junior Cybersecurity Analyst",
      provider: "Cisco Networking Academy",
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      color: "cyan",
    },
  ];

  const ongoingCourses = [
    "Advanced Node.js & API Development",
    "Progressive Web Apps (PWA) with React",
    "Blue Team Level 1 (BTL1) - SOC & Threat Hunting",
    "Offensive Security Certified Professional (OSCP)",
  ];

  const achievements = [
    {
      title: "WebXtreme Hackathon 2025",
      description: "Top 20 - NSU Tech Fest",
      project: "Crime Reporting & Community Verification Platform",
      icon: <Trophy className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: "CTF Competitions",
      description: "National & Online CTFs",
      project: "Kingnight, CyberAid, BDSec CTF",
      icon: <Target className="w-5 h-5 text-red-400" />,
    },
    {
      title: "Campus Leadership",
      description: "Cybersecurity Awareness",
      project: "Educated 300+ students through workshops",
      icon: <Users className="w-5 h-5 text-green-400" />,
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-20 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey & Achievements
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            My academic path reflects resilience, adaptability, and a commitment to growth—shaped by leadership, service, and a passion for technology.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 w-full max-w-7xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative border rounded-xl px-4 py-6 transition-all duration-500 ease-in-out bg-gray-900/50 backdrop-blur-sm cursor-pointer
                ${expandedIndex === index
                  ? "z-20 border-teal-500 shadow-xl shadow-teal-500/20 scale-[1.04]"
                  : "border-blue-400/20"}
                `}
              style={{
                width: "100%",
                minWidth: 0,
                maxWidth: "100%",
                height: expandedIndex === index ? "auto" : "400px",
                minHeight: "400px",
                maxHeight: expandedIndex === index ? "none" : "400px",
                margin: 0,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                overflow: expandedIndex === index ? "visible" : "hidden",
                transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
              }}
              onClick={() => toggleExpand(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

              <div className="space-y-3 relative z-10 h-full flex flex-col">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {edu.degree}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${edu.status === 'Currently Enrolled'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-blue-500/20 text-blue-400'
                        }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm border-l-2 border-teal-500 pl-3 flex-grow"
                  style={{
                    textOverflow: expandedIndex === index ? "unset" : "ellipsis",
                    whiteSpace: expandedIndex === index ? "normal" : "nowrap",
                    overflow: expandedIndex === index ? "visible" : "hidden",
                  }}
                >
                  {expandedIndex === index
                    ? edu.description
                    : (edu.description.length > 110 ? edu.description.substring(0, 110) + "..." : edu.description)
                  }
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Achievements
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {(expandedIndex === index ? edu.achievements : edu.achievements.slice(0, 2)).map((achievement, i) => (
                      <div
                        key={`${achievement}_${i}`}
                        className="px-2 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs flex items-center gap-1"
                        style={{
                          maxWidth: "100%",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: expandedIndex === index ? "normal" : "nowrap",
                        }}
                      >
                        <Award className="w-3 h-3" />
                        <span className={expandedIndex === index ? "" : "truncate"}>
                          {expandedIndex === index
                            ? achievement
                            : (achievement.length > 25 ? achievement.substring(0, 25) + "..." : achievement)
                          }
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {(expandedIndex === index ? edu.skills : edu.skills.slice(0, 6)).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300 truncate"
                      style={{
                        maxWidth: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* See More Button */}
                {(edu.description.length > 110 || edu.achievements.length > 2 || edu.skills.length > 6) && (
                  <button
                    onClick={e => { e.stopPropagation(); toggleExpand(index); }}
                    className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    {expandedIndex === index ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        See Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        See More
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Professional Certifications & Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 hover:border-teal-500 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg bg-${cert.color}-500/20`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{cert.title}</h4>
                    <p className="text-gray-400 text-xs">{cert.provider}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Creative More Certification Button */}
          <div className="flex justify-center mt-10">
            <a
              href="https://drive.google.com/drive/folders/1AY5QJGcYjg0VJPOGjX6SHlxNhgGp1tCr"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-8 py-3 font-bold text-lg rounded-xl bg-gradient-to-r from-[#151a33] via-[#2d1a3a] to-pink-500 text-white shadow-lg hover:scale-105 hover:shadow-pink-500/40 transition-all duration-300 group"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#151a33]/60 via-[#2d1a3a]/40 to-pink-500/40 blur opacity-60 group-hover:opacity-80 transition"></span>
              <span className="relative z-10 flex items-center gap-2">
                <Shield className="w-5 h-5 animate-pulse" />
                More Certifications
              </span>
            </a>
          </div>
        </div>

        {/* Ongoing Learning */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Ongoing Professional Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ongoingCourses.map((course, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-4 flex items-center gap-3"
              >
                <Code className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">{course}</span>
                <span className="ml-auto text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded">
                  In Progress
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Leadership */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Leadership & Competition Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  {achievement.icon}
                  <h4 className="text-white font-bold">{achievement.title}</h4>
                </div>
                <p className="text-gray-300 text-sm mb-2">{achievement.description}</p>
                <p className="text-gray-400 text-xs italic">{achievement.project}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;