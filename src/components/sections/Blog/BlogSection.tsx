'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { API_URL } from '@/lib/api';

interface Blog {
    id: string;
    title: string;
    excerpt: string;
    coverImage?: string;
    createdAt: string;
    readTime?: string;
    slug: string;
}

export default function BlogSection() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/blogs`)
            .then((res) => res.json())
            .then((data) => {
                // Take only the latest 3 blogs
                setBlogs(data.slice(0, 3));
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch blogs:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="py-20 bg-[#020617] relative overflow-hidden">
                <div className="container mx-auto px-4 text-center">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                </div>
            </section>
        );
    }

    if (blogs.length === 0) return null;

    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden" id="blog">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Latest Insights
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Thoughts, tutorials, and updates from the world of development and security.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.id || index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <Link href={`/blog/${blog.slug}`} className="block h-full">
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60" />
                                    <Image
                                        src={blog.coverImage || '/placeholder-blog.jpg'}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-4 text-xs text-gray-300">
                                        <span className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(blog.createdAt).toLocaleDateString()}
                                        </span>
                                        {blog.readTime && (
                                            <span className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
                                                <Clock className="w-3 h-3" />
                                                {blog.readTime}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {blog.excerpt}
                                    </p>
                                    <div className="flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                                        Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/25"
                    >
                        View All Posts
                    </Link>
                </div>
            </div>
        </section>
    );
}
