'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group flex items-center justify-center w-10 h-10 shadow-lg"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <span className="text-yellow-400 text-xl group-hover:rotate-12 transition-transform">☀️</span>
            ) : (
                <span className="text-indigo-400 text-xl group-hover:-rotate-12 transition-transform">🌙</span>
            )}
        </button>
    );
}
