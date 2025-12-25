'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { API_URL } from '@/lib/api';
import Editor from '@/components/Editor';
import { Blog, Project, Testimonial, Resume, Message } from '@/types';

const Meteors = dynamic(() => import('../../components/ui/meteors'), { ssr: false });

export default function DashboardPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [resume, setResume] = useState<Resume | null>(null);

    const [currentTab, setCurrentTab] = useState<'blogs' | 'projects' | 'testimonials' | 'resume' | 'messages'>('blogs');
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<'blog' | 'project' | 'testimonial'>('blog');
    const [editingItem, setEditingItem] = useState<Blog | Project | Testimonial | null>(null);

    // Form States
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [liveUrl, setLiveUrl] = useState('');
    const [githubUrl, setGithubUrl] = useState('');

    // Testimonial Form States
    const [testName, setTestName] = useState('');
    const [testRole, setTestRole] = useState('');
    const [testContent, setTestContent] = useState('');
    const [testRating, setTestRating] = useState(5);

    // Resume Form States
    const [resumeUrl, setResumeUrl] = useState('');
    const [resumeVersion, setResumeVersion] = useState('');
    const [resumeRole, setResumeRole] = useState('');
    const [resumeSkills, setResumeSkills] = useState('');

    const router = useRouter();

    const fetchData = useCallback(async () => {
        try {
            const token = localStorage.getItem('token');
            const [blogsRes, projectsRes, testsRes, resumeRes, messagesRes] = await Promise.all([
                fetch(`${API_URL}/blogs`),
                fetch(`${API_URL}/projects`),
                fetch(`${API_URL}/testimonials`),
                fetch(`${API_URL}/resume`),
                fetch(`${API_URL}/messages`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                })
            ]);
            setBlogs(await blogsRes.json());
            setProjects(await projectsRes.json());
            setTestimonials(await testsRes.json());
            const rData = await resumeRes.json();
            setResume(rData);
            if (rData) {
                setResumeUrl(rData.filePath || '');
                setResumeVersion(rData.version || '');
                setResumeRole(rData.role || '');
                setResumeSkills(rData.skills || '');
            }
            setMessages(await messagesRes.json());
        } catch {
            toast.error('Failed to fetch data');
        }
    }, [setBlogs, setProjects, setTestimonials, setResume, setResumeUrl, setResumeVersion, setResumeRole, setResumeSkills, setMessages]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
            return;
        }
        fetchData();
    }, [router, fetchData]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/');
        toast.success('Logged out successfully');
    };

    const handleDelete = async (type: 'blogs' | 'projects' | 'testimonials', id: string) => {
        const token = localStorage.getItem('token');
        if (!confirm('Are you sure?')) return;

        try {
            const res = await fetch(`${API_URL}/${type}/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (res.ok) fetchData();
        } catch {
            toast.error('Failed to delete item');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            let url = `${API_URL}/${modalType}s`;
            if (modalType === 'testimonial') url = `${API_URL}/testimonials`;

            let method = 'POST';
            if (editingItem) {
                url = `${url}/${editingItem.id}`;
                method = 'PUT';
            }

            let body = {};
            if (modalType === 'blog') body = { title, slug, content, published: true };
            if (modalType === 'project') body = { title, description, technologies, thumbnail, liveUrl, githubUrl };
            if (modalType === 'testimonial') body = { name: testName, role: testRole, content: testContent, rating: testRating };

            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(body)
            });

            if (res.ok) {
                toast.success('Saved successfully');
                setShowModal(false);
                resetForm();
                fetchData();
            } else {
                throw new Error('Operation failed');
            }
        } catch {
            toast.error('Failed to save content');
        }
    };

    const handleResumeUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`${API_URL}/resume`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ filename: 'Resume', filePath: resumeUrl, version: resumeVersion, role: resumeRole, skills: resumeSkills })
            });
            if (res.ok) {
                setShowModal(false);
                fetchData();
            }
        } catch {
            toast.error('Failed to save content');
        }
    };

    const resetForm = () => {
        setTitle('');
        setSlug('');
        setContent('');
        setDescription('');
        setTechnologies('');
        setThumbnail('');
        setLiveUrl('');
        setGithubUrl('');
        setTestName('');
        setTestRole('');
        setTestContent('');
        setTestRating(5);
        setEditingItem(null);
    };

    const openModal = (type: 'blog' | 'project' | 'testimonial', item?: Blog | Project | Testimonial) => {
        setModalType(type);
        setEditingItem(item || null);

        if (item) {
            if (type === 'blog') {
                const b = item as Blog;
                setTitle(b.title);
                setSlug(b.slug);
                setContent(b.content);
            } else if (type === 'project') {
                const p = item as Project;
                setTitle(p.title);
                setDescription(p.description);
                setTechnologies(p.technologies || '');
                setThumbnail(p.thumbnail || '');
                setLiveUrl(p.liveUrl || '');
                setGithubUrl(p.githubUrl || '');
            } else if (type === 'testimonial') {
                const t = item as Testimonial;
                setTestName(t.name);
                setTestRole(t.role || '');
                setTestContent(t.content);
                setTestRating(t.rating || 5);
            }
        } else {
            resetForm();
        }
        setShowModal(true);
    };

    return (
        <div className="min-h-screen bg-[#0a0118] text-white overflow-hidden relative">
            <Meteors number={15} />
            <nav className="p-4 border-b border-purple-500/20 flex justify-between items-center bg-black/20 backdrop-blur-md relative z-10">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Admin Dashboard</h1>
                <div className="flex gap-4">
                    <div className="bg-white/5 p-1 rounded-lg flex gap-1">
                        {(['blogs', 'projects', 'testimonials', 'resume', 'messages'] as const).map(tab => (
                            <button
                                key={tab}
                                onClick={() => setCurrentTab(tab)}
                                className={`px-4 py-1.5 rounded-md text-sm font-medium capitalize transition-all ${currentTab === tab ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <button onClick={handleLogout} className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg font-bold">Logout</button>
                </div>
            </nav>

            <main className="container mx-auto p-12 relative z-10">
                {currentTab === 'blogs' && (
                    <section className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl animate-in fade-in duration-500">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-bold text-purple-400">Blogs</h2>
                            <button onClick={() => openModal('blog')} className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-xl transition shadow-lg shadow-purple-500/20 active:scale-95 font-semibold">+ New Blog</button>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {blogs.map((b: Blog) => (
                                <div key={b.id} className="p-6 rounded-2xl bg-black/40 border border-purple-500/10 hover:border-purple-500/30 transition-all flex justify-between items-center group">
                                    <span className="font-semibold text-lg text-gray-200">{b.title}</span>
                                    <div className="flex gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => openModal('blog', b)} className="px-4 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors">Edit</button>
                                        <button onClick={() => handleDelete('blogs', b.id)} className="px-4 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {currentTab === 'projects' && (
                    <section className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl animate-in fade-in duration-500">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-bold text-pink-400">Projects</h2>
                            <button onClick={() => openModal('project')} className="px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-xl transition shadow-lg shadow-pink-500/20 active:scale-95 font-semibold">+ New Project</button>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {projects.map((p: Project) => (
                                <div key={p.id} className="p-6 rounded-2xl bg-black/40 border border-pink-500/10 hover:border-pink-500/30 transition-all flex justify-between items-center group">
                                    <span className="font-semibold text-lg text-gray-200">{p.title}</span>
                                    <div className="flex gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => openModal('project', p)} className="px-4 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors">Edit</button>
                                        <button onClick={() => handleDelete('projects', p.id)} className="px-4 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {currentTab === 'testimonials' && (
                    <section className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl animate-in fade-in duration-500">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-bold text-cyan-400">Testimonials</h2>
                            <button onClick={() => openModal('testimonial')} className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-xl transition shadow-lg shadow-cyan-500/20 active:scale-95 font-semibold">+ New Testimonial</button>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {testimonials.map((t: Testimonial) => (
                                <div key={t.id} className="p-6 rounded-2xl bg-black/40 border border-cyan-500/10 hover:border-cyan-500/30 transition-all flex justify-between items-center group">
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-lg text-gray-200">{t.name}</span>
                                        <span className="text-sm text-gray-500">{t.role} @ {t.company}</span>
                                    </div>
                                    <div className="flex gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => openModal('testimonial', t)} className="px-4 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors">Edit</button>
                                        <button onClick={() => handleDelete('testimonials', t.id)} className="px-4 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {currentTab === 'resume' && (
                    <section className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl animate-in fade-in duration-500 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-200 mb-8">Resume Management</h2>
                        <form onSubmit={handleResumeUpdate} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-400">Resume URL (PDF Link)</label>
                                <input value={resumeUrl} onChange={e => setResumeUrl(e.target.value)} placeholder="https://..." className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500/50 outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-400">Job Role / Headline</label>
                                <input value={resumeRole} onChange={e => setResumeRole(e.target.value)} placeholder="Full-Stack Developer & AI Enthusiast" className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500/50 outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-400">Key Skills (Comma separated)</label>
                                <textarea value={resumeSkills} onChange={e => setResumeSkills(e.target.value)} placeholder="React, Next.js, TypeScript, Node.js..." className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500/50 outline-none transition-all h-32" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-400">Version Name</label>
                                <input value={resumeVersion} onChange={e => setResumeVersion(e.target.value)} placeholder="Dec 2025 Optimized" className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500/50 outline-none transition-all" />
                            </div>
                            <button type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold shadow-lg shadow-purple-500/20 hover:scale-[1.01] transition-all">Update Latest Resume</button>
                        </form>
                        {resume && (
                            <div className="mt-8 p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20 flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-purple-400 font-semibold mb-1 uppercase tracking-wider">Current Active</p>
                                    <p className="text-xl font-bold">{resume.version || 'Default Version'}</p>
                                    <p className="text-xs text-gray-500 mt-1">Uploaded: {new Date(resume.uploadedAt).toLocaleString()}</p>
                                </div>
                                <a href={resume.filePath} target="_blank" className="text-cyan-400 hover:underline font-medium">View Live</a>
                            </div>
                        )}
                    </section>
                )}

                {currentTab === 'messages' && (
                    <section className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl animate-in fade-in duration-500">
                        <h2 className="text-3xl font-bold text-white mb-8">Incoming Messages</h2>
                        <div className="grid grid-cols-1 gap-6">
                            {messages.length === 0 ? (
                                <p className="text-center py-20 text-gray-500">No messages yet.</p>
                            ) : (
                                messages.map((m: Message) => (
                                    <div key={m.id} className="p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col gap-4">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="font-bold text-xl">{m.name}</h3>
                                                <p className="text-purple-400">{m.email}</p>
                                            </div>
                                            <span className="text-xs text-gray-500">{new Date(m.createdAt).toLocaleString()}</span>
                                        </div>
                                        <p className="text-gray-300 bg-white/5 p-4 rounded-xl border border-white/5 italic">&ldquo;{m.message}&rdquo;</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>
                )}
            </main>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
                    <div className="bg-[#1a0b2e] border border-purple-500/30 rounded-3xl p-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-purple-500/20">
                        <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            {editingItem ? 'Edit' : 'Create'} {modalType === 'blog' ? 'Blog' : modalType === 'project' ? 'Project' : 'Testimonial'}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {modalType === 'testimonial' ? (
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-gray-400">Name</label>
                                            <input value={testName} onChange={e => setTestName(e.target.value)} className="w-full p-4 rounded-xl bg-black/30 border border-purple-500/20 focus:border-purple-400 outline-none transition" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-gray-400">Role</label>
                                            <input value={testRole} onChange={e => setTestRole(e.target.value)} className="w-full p-4 rounded-xl bg-black/30 border border-purple-500/20 focus:border-purple-400 outline-none transition" placeholder="CEO, Lead Developer..." />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-400">Feedback</label>
                                        <textarea value={testContent} onChange={e => setTestContent(e.target.value)} className="w-full p-4 rounded-xl bg-black/30 border border-purple-500/20 focus:border-purple-400 outline-none transition h-32" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-400">Rating (1-5)</label>
                                        <input type="number" min="1" max="5" value={testRating} onChange={e => setTestRating(parseInt(e.target.value))} className="w-full p-4 rounded-xl bg-black/30 border border-purple-500/20 focus:border-purple-400 outline-none transition" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-400">Title</label>
                                        <input value={title} onChange={e => setTitle(e.target.value)} className="w-full p-4 rounded-xl bg-black/30 border border-purple-500/20 focus:border-purple-400 outline-none transition" required />
                                    </div>

                                    {modalType === 'blog' ? (
                                        <>
                                            <div>
                                                <label className="block text-sm font-medium mb-2 text-gray-400">Slug</label>
                                                <input value={slug} onChange={e => setSlug(e.target.value)} className="w-full p-4 rounded-xl bg-black/30 border border-purple-500/20 focus:border-purple-400 outline-none transition" required />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2 text-gray-400">Content</label>
                                                <div className="bg-white/90 rounded-2xl text-black overflow-hidden shadow-inner">
                                                    <Editor value={content} onChange={setContent} className="h-64 mb-12" />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div>
                                                <label className="block text-sm font-medium mb-2 text-gray-400">Description</label>
                                                <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full p-4 rounded-xl bg-black/30 border border-purple-500/20 focus:border-purple-400 outline-none transition h-32" required />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2 text-gray-400">Technologies</label>
                                                <input value={technologies} onChange={e => setTechnologies(e.target.value)} placeholder="React, Node, Prisma..." className="w-full p-4 rounded-xl bg-black/30 border border-purple-500/20 focus:border-purple-400 outline-none transition" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium mb-2 text-gray-300">Thumbnail URL</label>
                                                    <input value={thumbnail} onChange={e => setThumbnail(e.target.value)} placeholder="https://..." className="w-full p-4 rounded-xl bg-black/30 border border-purple-500/20 focus:border-purple-400 outline-none transition" />
                                                </div>
                                                <div className="flex items-end pb-4">
                                                    {thumbnail && (
                                                        <div className="relative h-10 w-10">
                                                            <Image
                                                                src={thumbnail}
                                                                fill
                                                                className="rounded border border-white/20 object-cover"
                                                                alt="Preview"
                                                                unoptimized
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium mb-2 text-gray-400">Live URL</label>
                                                    <input value={liveUrl} onChange={e => setLiveUrl(e.target.value)} placeholder="https://..." className="w-full p-4 rounded-xl bg-black/30 border border-purple-500/20 focus:border-purple-400 outline-none transition" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-2 text-gray-400">GitHub URL</label>
                                                    <input value={githubUrl} onChange={e => setGithubUrl(e.target.value)} placeholder="https://..." className="w-full p-4 rounded-xl bg-black/30 border border-purple-500/20 focus:border-purple-400 outline-none transition" />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </>
                            )}

                            <div className="flex gap-4 pt-8">
                                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold transition">Cancel</button>
                                <button type="submit" className="flex-1 py-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-xl font-bold text-white shadow-xl shadow-purple-500/20 hover:scale-[1.02] active:scale-95 transition-all">{editingItem ? 'Update' : 'Create'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
