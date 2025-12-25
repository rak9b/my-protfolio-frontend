'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import dynamic from 'next/dynamic';
import { API_URL } from '@/lib/api';

const Meteors = dynamic(() => import('@/components/ui/meteors'), { ssr: false });

interface FormErrors {
    email?: string;
    password?: string;
}

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const router = useRouter();

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Email validation
        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Password validation
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate before submitting
        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }

        setLoading(true);
        setErrors({});

        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        try {
            const res = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: trimmedEmail, password: trimmedPassword })
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                throw new Error(errorData.error || 'Invalid credentials');
            }

            const data = await res.json();
            localStorage.setItem('token', data.token);
            toast.success('Login successful!');
            router.push('/dashboard');
        } catch (error) {
            const err = error as Error;
            toast.error(err.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#0f0728] to-[#1a0b2e] text-white flex items-center justify-center overflow-hidden">
            <Meteors number={30} />
            <div className="relative z-10 w-full max-w-md p-8 mx-4">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-xl">
                    <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-6 inline-block transition">← Back to home</Link>
                    <h1 className="text-5xl font-black mb-8 text-center">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Admin Login</span>
                    </h1>

                    <form onSubmit={handleLogin} className="space-y-6" noValidate>
                        <div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (errors.email) setErrors({ ...errors, email: undefined });
                                }}
                                className={`w-full px-4 py-3 rounded-lg bg-black/30 border text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition ${errors.email
                                        ? 'border-red-500 focus:ring-red-500'
                                        : 'border-purple-500/30 focus:ring-purple-500'
                                    }`}
                                placeholder="Email"
                                required
                            />
                            {errors.email && (
                                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                                    <span>⚠</span> {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (errors.password) setErrors({ ...errors, password: undefined });
                                }}
                                className={`w-full px-4 py-3 rounded-lg bg-black/30 border text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition ${errors.password
                                        ? 'border-red-500 focus:ring-red-500'
                                        : 'border-purple-500/30 focus:ring-purple-500'
                                    }`}
                                placeholder="Password"
                                required
                            />
                            {errors.password && (
                                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                                    <span>⚠</span> {errors.password}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg font-bold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
