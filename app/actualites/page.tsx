'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Footer } from '@/app/components';
import { blogPosts } from '@/app/lib/blog-data';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#092963]">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#092963] to-[#0f172a]" />
                    {/* Abstract background elements */}
                    <div className="absolute top-20 right-0 w-96 h-96 bg-[#eb7e2a]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Actualités & <span className="text-[#eb7e2a]">Blogue</span>
                        </h1>
                        <p className="text-xl text-blue-100/80 leading-relaxed">
                            Découvrez les dernières tendances, analyses et conseils en cybersécurité et technologies pour protéger votre entreprise.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 px-4 bg-[#0f172a]">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-[#1e293b] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#eb7e2a]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#eb7e2a]/10 flex flex-col h-full"
                            >
                                <Link href={`/actualites/${post.slug}`} className="block relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-[#eb7e2a] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-lg">
                                            {post.category}
                                        </span>
                                    </div>
                                </Link>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 text-[#eb7e2a]" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3 text-[#eb7e2a]" />
                                            <span>{post.author}</span>
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#eb7e2a] transition-colors">
                                        <Link href={`/actualites/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-700/50 flex items-center justify-between">
                                        <Link
                                            href={`/actualites/${post.slug}`}
                                            className="text-[#eb7e2a] text-sm font-semibold flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                                        >
                                            Lire l'article <ArrowRight className="w-4 h-4" />
                                        </Link>
                                        <span className="text-xs text-gray-500 font-medium">
                                            {post.readTime} de lecture
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
