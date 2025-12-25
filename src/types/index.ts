export interface Blog {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    coverImage?: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail?: string;
    technologies?: string;
    liveUrl?: string;
    githubUrl?: string;
    createdAt: string;
    updatedAt: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role?: string;
    company?: string;
    content: string;
    avatarUrl?: string;
    rating: number;
    isFeatured: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Resume {
    id: string;
    filename: string;
    filePath: string;
    role: string | null;
    skills: string | null;
    version: string | null;
    uploadedAt: string;
}

export interface Message {
    id: string;
    name: string;
    email: string;
    message: string;
    read: boolean;
    createdAt: string;
}
