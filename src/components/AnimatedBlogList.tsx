'use client';

import { motion } from 'framer-motion';
import { Blog } from '@/types';
import Link from 'next/link';

export default function AnimatedBlogList({ blogs }: { blogs: Blog[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
                <motion.div
                    key={blog.id || index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Link href={`/blog/${blog.slug}`} className="block group h-full">
                        <article className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/10 flex flex-col h-full hover:border-purple-500/30">
                            <span className="text-xs font-semibold text-purple-400 mb-4 uppercase tracking-widest">{new Date(blog.createdAt).toLocaleDateString()}</span>
                            <h2 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors line-clamp-2">{blog.title}</h2>
                            <p className="text-gray-400 mb-8 line-clamp-3 flex-1">{blog.excerpt || 'Read the full article to learn more...'}</p>
                            <span className="text-cyan-400 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                Read More <span>→</span>
                            </span>
                        </article>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
