'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { API_URL } from '@/lib/api';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch(`${API_URL}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                toast.success('Message sent! I will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error();
            }
        } catch {
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">Get In Touch</h2>
                    <p className="text-gray-400">Have a project in mind or just want to say hi? My inbox is always open.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-400 ml-1">Name</label>
                                <input
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-pink-500/50 outline-none transition-all placeholder:text-gray-600"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-400 ml-1">Email</label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-pink-500/50 outline-none transition-all placeholder:text-gray-600"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-400 ml-1">Message</label>
                            <textarea
                                required
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-pink-500/50 outline-none transition-all placeholder:text-gray-600 h-40 resize-none"
                                placeholder="How can I help you?"
                            />
                        </div>
                        <button
                            disabled={isSubmitting}
                            className="w-full py-5 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl font-black text-xl shadow-xl shadow-pink-500/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message ➤'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
