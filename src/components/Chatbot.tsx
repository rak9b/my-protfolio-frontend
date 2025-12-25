'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { API_URL } from '@/lib/api';

interface Message {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: "👋 Hi! I'm an AI assistant here to help you learn about this portfolio. Ask me anything about skills, projects, or experience!",
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Fetch suggested questions
        fetch(`${API_URL}/chatbot/suggested-questions`)
            .then(res => res.json())
            .then(data => setSuggestedQuestions(data.questions || []))
            .catch(() => { });
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = async (text?: string) => {
        const messageText = text || input.trim();
        if (!messageText) return;

        const userMessage: Message = {
            role: 'user',
            content: messageText,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const conversationHistory = messages.map(m => ({
                role: m.role,
                content: m.content,
            }));

            const res = await fetch(`${API_URL}/chatbot/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: messageText,
                    conversationHistory,
                }),
            });

            if (!res.ok) {
                if (res.status === 503) {
                    throw new Error('AI service not configured');
                }
                throw new Error('Failed to get response');
            }

            const data = await res.json();

            const assistantMessage: Message = {
                role: 'assistant',
                content: data.reply,
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error(error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';

            // Check if it's a fetch failure (network error)
            const isNetworkError = errorMessage.includes('Failed to fetch') || errorMessage.includes('Network request failed');

            if (errorMessage === 'AI service not configured' || isNetworkError) {
                const fallbackMessage: Message = {
                    role: 'assistant',
                    content: "⚠️ **System Notice**: I'm currently unable to connect to the brain server (It might be offline or sleeping). Please try again later, or contact Rakibul directly via email!",
                    timestamp: new Date(),
                };
                setMessages(prev => [...prev, fallbackMessage]);
            } else {
                toast.error('Failed to get response. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="fixed bottom-6 right-6 z-50 group"
                    >
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                            Ask AI Assistant
                        </div>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="w-16 h-16 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                            <Sparkles className="w-8 h-8 text-white relative z-10" />

                            {/* Online Indicator */}
                            <span className="absolute top-3 right-3 w-3 h-3 bg-green-500 border-2 border-white rounded-full z-20"></span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] bg-[#0a0118]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/30 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-purple-500/20 flex items-center justify-between bg-gradient-to-r from-purple-900/40 to-pink-900/40">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20">
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white flex items-center gap-2">
                                        AI Assistant
                                        <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/30">Online</span>
                                    </h3>
                                    <p className="text-xs text-gray-400">Powered by GPT-4</p>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition text-gray-400 hover:text-white"
                                >
                                    <Minimize2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.role === 'assistant' && (
                                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                                            <Bot className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[85%] p-3.5 rounded-2xl shadow-md ${msg.role === 'user'
                                            ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-tr-none'
                                            : 'bg-white/10 text-gray-100 border border-white/10 rounded-tl-none backdrop-blur-sm'
                                            }`}
                                    >
                                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                        <p className="text-[10px] opacity-50 mt-1 text-right">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                    {msg.role === 'user' && (
                                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                                            <User className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                            {loading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex gap-3"
                                >
                                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                                        <Bot className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-2xl border border-white/10 rounded-tl-none">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100" />
                                            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggested Questions */}
                        {messages.length < 3 && !loading && suggestedQuestions.length > 0 && (
                            <div className="px-4 pb-2">
                                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-2 ml-1">Suggested Questions</p>
                                <div className="flex flex-wrap gap-2">
                                    {suggestedQuestions.slice(0, 4).map((q, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => sendMessage(q)}
                                            className="text-xs px-3 py-1.5 bg-white/5 hover:bg-white/10 text-purple-200 hover:text-white rounded-lg transition border border-white/10 hover:border-purple-500/50 text-left"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-4 border-t border-purple-500/20 bg-black/20 backdrop-blur-md">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    sendMessage();
                                }}
                                className="flex gap-3 relative"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="flex-1 pl-4 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all text-sm"
                                    disabled={loading}
                                />
                                <button
                                    type="submit"
                                    disabled={loading || !input.trim()}
                                    className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:scale-105 transition disabled:opacity-50 disabled:hover:scale-100 shadow-lg shadow-purple-500/20"
                                >
                                    <Send className="w-5 h-5 text-white" />
                                </button>
                            </form>
                            <p className="text-[10px] text-center text-gray-600 mt-2">
                                AI can make mistakes. Consider checking important info.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
