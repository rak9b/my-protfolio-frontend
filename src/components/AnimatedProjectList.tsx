'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/types';

export default function AnimatedProjectList({ projects }: { projects: Project[] }) {
    return (
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/10"
                >
                    {/* Image Container */}
                    <div className="aspect-video w-full overflow-hidden relative">
                        {project.thumbnail ? (
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                unoptimized
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center">
                                <span className="text-gray-500 italic">No Preview Available</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:to-white transition-all">
                            {project.title}
                        </h2>
                        <p className="text-gray-400 mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors">
                            {project.description}
                        </p>

                        {project.technologies && (
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.technologies.split(',').map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase tracking-wider">
                                        {tech.trim()}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="flex gap-4">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-cyan-500/20"
                                >
                                    Live Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 bg-white/10 border border-white/20 rounded-full font-bold text-sm hover:bg-white/20 transition-all"
                                >
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
