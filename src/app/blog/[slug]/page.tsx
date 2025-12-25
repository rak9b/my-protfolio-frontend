import { API_URL } from '@/lib/api';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Meteors } from '@/components/ClientMeteors';
import { Metadata } from 'next';

interface Blog {
    id: number;
    title: string;
    content: string;
    excerpt?: string;
    author: string;
    createdAt: string;
    updatedAt: string;
}

// Generate static params for all blog posts (ISR requirement)
export async function generateStaticParams() {
    try {
        const blogs: Blog[] = await fetch(`${API_URL}/blogs`).then(res => res.json());
        return blogs.map((blog) => ({
            slug: blog.id.toString(),
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    try {
        const blog: Blog = await fetch(`${API_URL}/blogs/${params.slug}`, {
            next: { revalidate: 60 }
        }).then(res => res.json());

        return {
            title: blog.title,
            description: blog.excerpt || blog.content.substring(0, 150).replace(/<[^>]*>/g, ''),
            authors: [{ name: blog.author }],
        };
    } catch {
        return {
            title: 'Blog Post',
        };
    }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    let blog: Blog;

    try {
        const res = await fetch(`${API_URL}/blogs/${params.slug}`, {
            next: { revalidate: 60 }, // ISR
            cache: 'force-cache',
        });

        if (!res.ok) {
            notFound();
        }

        blog = await res.json();
    } catch (error) {
        console.error('Error fetching blog:', error);
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#0f0728] to-[#1a0b2e] text-white overflow-hidden">
            <Meteors number={20} />
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Portfolio
                    </Link>
                    <div className="flex gap-6">
                        <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
                        <Link href="/blog" className="text-purple-400">Blog</Link>
                        <Link href="/projects" className="hover:text-pink-400 transition">Projects</Link>
                    </div>
                </div>
            </nav>

            <main className="container mx-auto px-4 py-32 max-w-4xl">
                <article>
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        {blog.title}
                    </h1>

                    <div className="flex gap-4 text-sm text-gray-400 mb-8">
                        <span>By {blog.author}</span>
                        <span>•</span>
                        <time>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>

                    <div className="mt-12">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition">
                            <span>←</span> Back to all posts
                        </Link>
                    </div>
                </article>
            </main>
        </div>
    );
}
