'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Linkedin, Twitter } from 'lucide-react';
import { blogPosts } from '@/app/lib/blog-data';
import { Footer } from '@/app/components';
// Removed unused import

// Simple Markdown Renderer Component
const MarkdownRenderer = ({ content }: { content: string }) => {
    // Split content by double newlines for paragraphs/blocks
    const blocks = content.split('\n\n');

    return (
        <div className="space-y-6 text-gray-300 leading-relaxed">
            {blocks.map((block, index) => {
                if (block.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">{block.replace('## ', '')}</h2>;
                }
                if (block.startsWith('### ')) {
                    return <h3 key={index} className="text-xl md:text-2xl font-semibold text-[#eb7e2a] mt-6 mb-3">{block.replace('### ', '')}</h3>;
                }
                if (block.startsWith('#### ')) {
                    return <h4 key={index} className="text-lg font-bold text-white mt-4 mb-2">{block.replace('#### ', '')}</h4>;
                }
                if (block.startsWith('* ') || block.startsWith('- ')) {
                    const items = block.split('\n').map(line => line.replace(/^[*|-]\s/, ''));
                    return (
                        <ul key={index} className="list-disc pl-6 space-y-2 mb-4">
                            {items.map((item, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                            ))}
                        </ul>
                    );
                }
                // Handle numbered lists simplistically if they start with "1. " and newline
                if (block.match(/^\d+\.\s/)) {
                    const lines = block.split('\n').filter(line => line.trim() !== '');
                    const listItems: { num: string; content: string }[] = [];
                    let currentItem: { num: string; content: string } | null = null;

                    lines.forEach(line => {
                        const match = line.match(/^(\d+)\.\s+(.*)/);
                        if (match) {
                            if (currentItem) listItems.push(currentItem);
                            currentItem = { num: match[1], content: match[2] };
                        } else {
                            if (currentItem) {
                                currentItem.content += ' ' + line;
                            }
                        }
                    });
                    if (currentItem) listItems.push(currentItem);

                    return (
                        <div key={index} className="space-y-6 mb-8">
                            {listItems.map((item, i) => {
                                const text = item.content;
                                const titleMatch = text.match(/\*\*(.*?)\*\*/);
                                const content = text.replace(/\*\*(.*?)\*\*/, '').trim();

                                return (
                                    <div key={i} className="flex gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#eb7e2a]/20 text-[#eb7e2a] flex items-center justify-center font-bold text-sm border border-[#eb7e2a]/50 mt-1">
                                            {item.num}
                                        </span>
                                        <div>
                                            {titleMatch && <strong className="block text-white mb-1 text-lg">{titleMatch[1]}</strong>}
                                            <span dangerouslySetInnerHTML={{ __html: content }} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                }

                // Default Paragraph
                // Handle links [text](url)
                let processedBlock = block.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#eb7e2a] hover:underline font-medium">$1</a>');
                // Handle bold
                processedBlock = processedBlock.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>');

                return <p key={index} dangerouslySetInnerHTML={{ __html: processedBlock }} />;
            })}
        </div>
    );
};

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Since we are in appdir with dynamic routes, this is a Server Component by default if we don't use 'use client'.
// But I need 'use client' for motion.
// I will just use 'use client' and unwrapping params.

export default function BlogPostPage(props: BlogPostPageProps) {
    // In Next.js 15+, params is a promise. But usually in 14 it is not.
    // To be safe I'll treat it as object. If it breaks I'll fix.
    // Actually, let's just use usePathname or assume standard prop.
    // For 'use client' components, props are passed directly.

    // NOTE: In Next.js App Router, dynamic pages receive params.
    // Since I'm making this a client component, I can access params directly.
    const params = React.use(props.params);
    const slug = params.slug;
    // Wait, "React.use" is new. Standard is just `params`.
    // Let's assume `params` is passed as a prop.

    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#092963] text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
                    <Link href="/actualites" className="text-[#eb7e2a] hover:underline">Retour aux actualités</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#0f172a]">
            {/* Progress Bar / Scroll Indicator could go here */}

            <article>
                {/* Hero / Header */}
                <div className="relative min-h-[70vh] w-full overflow-hidden flex flex-col justify-end">
                    <div className="absolute inset-0 bg-[#092963]/80 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent z-20" />
                    <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="relative z-30 pb-20 px-4 pt-48 w-full">
                        <div className="container mx-auto max-w-4xl">
                            <Link
                                href="/actualites"
                                className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Retour aux actualités
                            </Link>

                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-3 py-1 bg-[#eb7e2a] text-white text-xs font-bold uppercase tracking-wider rounded-md">
                                    {post.category}
                                </span>
                            </div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                            >
                                {post.title}
                            </motion.h1>

                            <div className="flex flex-wrap items-center gap-6 text-gray-300">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                                        MS
                                    </div>
                                    <span className="font-medium">{post.author}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Calendar className="w-4 h-4 text-[#eb7e2a]" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Clock className="w-4 h-4 text-[#eb7e2a]" />
                                    <span>{post.readTime} de lecture</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto max-w-4xl px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Social Share Sidebar (Desktop) */}
                        <div className="hidden lg:block col-span-1">
                            <div className="sticky top-32 flex flex-col gap-4 items-center">
                                <span className="text-xs font-bold text-gray-500 uppercase writing-mode-vertical mb-2">Partager</span>
                                <button className="w-10 h-10 rounded-full bg-[#1e293b] text-gray-400 hover:text-[#eb7e2a] hover:bg-[#eb7e2a]/10 flex items-center justify-center transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-[#1e293b] text-gray-400 hover:text-[#eb7e2a] hover:bg-[#eb7e2a]/10 flex items-center justify-center transition-all">
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-[#1e293b] text-gray-400 hover:text-[#eb7e2a] hover:bg-[#eb7e2a]/10 flex items-center justify-center transition-all">
                                    <Facebook className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Main Text */}
                        <div className="col-span-1 lg:col-span-10">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="prose prose-lg prose-invert max-w-none"
                            >
                                <p className="text-xl text-blue-100 mb-12 font-medium leading-relaxed border-l-4 border-[#eb7e2a] pl-6 font-italic">
                                    {post.excerpt}
                                </p>

                                <MarkdownRenderer content={post.content} />
                            </motion.div>

                            {/* Mobile Share */}
                            <div className="lg:hidden mt-12 pt-8 border-t border-gray-800">
                                <p className="text-center text-gray-500 mb-4 font-semibold">Partager cet article</p>
                                <div className="flex justify-center gap-4">
                                    <button className="w-12 h-12 rounded-full bg-[#1e293b] text-white flex items-center justify-center"><Linkedin /></button>
                                    <button className="w-12 h-12 rounded-full bg-[#1e293b] text-white flex items-center justify-center"><Twitter /></button>
                                    <button className="w-12 h-12 rounded-full bg-[#1e293b] text-white flex items-center justify-center"><Facebook /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Newsletter / CTA Section could go here */}

            <Footer />
        </main>
    );
}
