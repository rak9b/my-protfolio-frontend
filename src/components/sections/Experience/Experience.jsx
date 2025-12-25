import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Code2, Shield, Users, Award, BookOpen, Target } from 'lucide-react';

const RocketSVG = ({ className, showTrail = false }) => (
  <div className={`relative ${className}`}>
    {showTrail && (
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-orange-400 via-red-500 to-transparent opacity-70 animate-pulse"></div>
    )}
    <svg
      width="48"
      height="64"
      viewBox="0 0 48 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl"
    >
      {/* Rocket body */}
      <path
        d="M24 2L30 12H18L24 2Z"
        fill="url(#gradient1)"
        stroke="#60A5FA"
        strokeWidth="1"
      />
      <rect
        x="18"
        y="12"
        width="12"
        height="20"
        fill="url(#gradient2)"
        stroke="#60A5FA"
        strokeWidth="1"
        rx="1"
      />
      {/* Fins */}
      <path d="M18 32L12 40H18V32Z" fill="#3B82F6" stroke="#60A5FA" strokeWidth="1" />
      <path d="M30 32L36 40H30V32Z" fill="#3B82F6" stroke="#60A5FA" strokeWidth="1" />
      {/* Window */}
      <circle cx="24" cy="18" r="3" fill="#60A5FA" opacity="0.8" />

      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

RocketSVG.propTypes = {
  className: PropTypes.string,
  showTrail: PropTypes.bool,
};

const ExperienceCard = ({ experience, index, isVisible, slideDirection }) => {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`experience-card mb-32 transition-all duration-1000 ease-out ${isVisible
        ? 'opacity-100 translate-x-0 translate-y-0'
        : `opacity-0 ${slideDirection === 'up'
          ? (isLeft ? '-translate-x-full' : 'translate-x-full') + ' translate-y-8'
          : (isLeft ? '-translate-x-full' : 'translate-x-full') + ' -translate-y-8'
        }`
        } ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}
      style={{
        transform: `perspective(1000px) ${!isVisible ? 'rotateY(' + (isLeft ? '-15deg' : '15deg') + ')' : 'rotateY(0deg)'}`,
        transformOrigin: isLeft ? 'right center' : 'left center'
      }}
    >
      <div className={`flex ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
        <div className="group relative overflow-hidden max-w-lg w-full transform hover:-translate-y-2 transition-all duration-300">
          {/* Glass morphism effect */}
          <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-xl" />

          {/* Animated gradient border */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

          <div className="relative bg-gray-900/90 rounded-xl p-8 border border-gray-800/50 shadow-2xl backdrop-blur-xl">
            {/* Type indicator */}
            <div className="absolute top-4 right-4">
              <span className={`text-xs font-mono px-3 py-1 rounded-full ${experience.type === 'work' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                experience.type === 'leadership' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                  'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                {experience.type.toUpperCase()}
              </span>
            </div>

            {/* Floating icon */}
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 transition-all duration-500" />
              <experience.icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {experience.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-gray-300">
                <span className="font-semibold text-blue-400">{experience.company}</span>
                <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full w-fit">
                  {experience.period}
                </span>
              </div>
              <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 leading-relaxed">
                {experience.description}
              </p>
            </div>

            {/* Branch connector */}
            <div className={`hidden md:block absolute top-1/2 ${isLeft ? '-right-8' : '-left-8'
              } w-8 h-[2px] bg-gradient-to-r from-cyan-500/50 to-transparent ${isLeft ? '' : 'rotate-180'
              }`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    type: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
  slideDirection: PropTypes.string.isRequired,
};

const AchievementCard = ({ achievement, index, isVisible }) => (
  <div
    className={`achievement-card transition-all duration-700 ease-out delay-${index * 100} ${isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-8'
      }`}
  >
    <div className="group relative overflow-hidden p-6 rounded-xl backdrop-blur-lg bg-white/5 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
      <div className="flex items-start space-x-4">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
          <achievement.icon className="w-6 h-6 text-purple-400" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-white mb-2">{achievement.title}</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
        </div>
      </div>
    </div>
  </div>
);

AchievementCard.propTypes = {
  achievement: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

const Particle = () => {
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setStyles({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
      });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="absolute w-1 h-1 bg-blue-500/30 rounded-full animate-pulse"
      style={styles}
    />
  );
};

const InteractiveExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [rocketPosition, setRocketPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);
  const rocketRef = useRef(null);

  const experiences = [
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
  ];

  const achievements = [
    {
      icon: Award,
      title: (
        <>
          WebXtreme Hackathon 2025 - <span className="font-extrabold text-yellow-400 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Top 20</span>
        </>
      ),
      description: (
        <>
          Ranked in the <span className="font-bold text-yellow-400">Top 20</span> at NSU Tech Fest among <span className="font-bold text-blue-400">320+ teams</span> from <span className="font-bold text-purple-400">168 universities</span> across Bangladesh, for developing a secure Crime Reporting & Community Verification Platform focused on safety, transparency, and social impact.
        </>
      )
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
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
      setScrollDirection(direction);
      lastScrollY.current = currentScrollY;

      if (sectionRef.current && rocketRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const sectionTop = sectionRect.top + window.scrollY;
        const sectionHeight = sectionRect.height;
        const scrollProgress = Math.max(0, Math.min(1, (currentScrollY - sectionTop + window.innerHeight / 2) / sectionHeight));

        setRocketPosition(scrollProgress * 100);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          } else {
            setVisibleItems(prev => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
    );

    const cards = document.querySelectorAll('.experience-card, .achievement-card');
    cards.forEach((card, index) => {
      card.dataset.index = index;
      observer.observe(card);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#04081A] to-[#0A0F2A] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <Particle key={i} />
        ))}
      </div>

      <div ref={sectionRef} className="relative container mx-auto px-4 sm:px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text mb-6">
              Professional Journey
            </h2>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide max-w-2xl mx-auto">
            &quot;Transforming ideas into secure digital solutions, one project at a time&quot;
          </p>
        </div>

        {/* Main content with rocket */}
        <div className="relative">
          {/* Rocket - Hidden on mobile, visible on md+ */}
          <div
            ref={rocketRef}
            className="hidden md:block fixed left-1/2 transform -translate-x-1/2 z-20 transition-all duration-300 ease-out"
            style={{
              top: `${30 + (rocketPosition * 0.4)}%`,
              transform: `translateX(-50%) ${scrollDirection === 'up' ? 'translateY(-5px)' : 'translateY(5px)'}`,
            }}
          >
            <RocketSVG className="animate-bounce" showTrail={scrollDirection === 'down'} />
          </div>

          {/* Timeline line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500/30 via-blue-500/50 to-purple-500/30 h-full z-10"></div>

          {/* Experience cards */}
          <div className="relative z-20">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                isVisible={visibleItems.has(index)}
                slideDirection={scrollDirection}
              />
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4">
              Achievements & Recognition
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Notable accomplishments in cybersecurity competitions, certifications, and community contributions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                achievement={achievement}
                index={index}
                isVisible={visibleItems.has(experiences.length + index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 sm:left-20 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/5 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default InteractiveExperienceSection;