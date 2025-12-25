import Image from "next/image";
import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400 mb-6">
            Developer. Designer.<br />
            Creator. Innovator.
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={HeroImg}
                alt="Rakibul Islam Profile"
                width={800}
                height={600}
                className="object-cover w-full h-auto transform transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-8">
                <p className="text-white font-medium">Building the future, one line of code at a time.</p>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Hello! I&apos;m <span className="text-blue-400 font-semibold">Rakib</span>, a passionate Full-Stack Developer
                dedicated to crafting intuitive, high-performance web solutions. I seamlessly blend
                technical expertise with creative design to build applications that strictly adhere
                to modern standards and deliver exceptional user experiences.
              </p>
              <p>
                My mission is to simplify complex workflows. As the creator of <span className="text-purple-400 font-semibold">RoksJS</span>,
                I actively contribute to the open-source community, empowering developers to build faster and better.
                I am constantly expanding my horizons in backend architecture and cloud security.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <blockquote className="relative">
                <i className="fas fa-quote-left text-blue-500/30 text-4xl absolute -top-4 -left-2"></i>
                <p className="text-gray-200 italic pl-8 mb-6 relative z-10">
                  &quot;I am a lifelong learner and innovator, driven by a desire to contribute
                  to the developer community with tools that deliver real value. Pushing boundaries
                  is not just a goal, it&apos;s my standard.&quot;
                </p>
                <footer className="flex items-center gap-4 pl-8">
                  <div className="flex-shrink-0">
                    <Image src={OlovaLogo} alt="RoksJS" width={40} height={40} className="rounded-full bg-white/10 p-1" />
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-white block">Md. Rakibul Islam</cite>
                    <span className="text-sm text-blue-400">Creator of RoksJS</span>
                  </div>
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
