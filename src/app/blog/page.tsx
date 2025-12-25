import Link from "next/link";
import { Meteors } from "@/components/ClientMeteors";
import { API_URL } from "@/lib/api";



import AnimatedBlogList from "@/components/AnimatedBlogList";

async function getBlogs() {
    try {
        const res = await fetch(`${API_URL}/blogs`, { next: { revalidate: 60 } });
        if (!res.ok) throw new Error('Failed to fetch blogs');
        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default async function BlogPage() {
    const blogs = await getBlogs();

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#0f0728] to-[#1a0b2e] text-white">
            <Meteors number={20} />
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Portfolio</Link>
                    <div className="flex gap-6">
                        <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
                        <Link href="/blog" className="text-purple-400">Blog</Link>
                        <Link href="/projects" className="hover:text-pink-400 transition">Projects</Link>
                        <Link href="/login" className="hover:text-cyan-400 transition">Dashboard</Link>
                    </div>
                </div>
            </nav>
            <main className="relative container mx-auto px-4 py-24">
                <h1 className="text-6xl font-black mb-12 text-center">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Blog Posts</span>
                </h1>

                {blogs.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-2xl text-gray-400 mb-4">No blog posts yet</p>
                        <p className="text-gray-500">Check back soon for new content!</p>
                    </div>
                ) : (
                    <AnimatedBlogList blogs={blogs} />
                )}
            </main>
        </div>
    );
}
