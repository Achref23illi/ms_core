'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Footer } from '@/app/components';
import { faqData } from '@/app/lib/faq-data';

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-[#0f172a]">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#092963] to-[#0f172a]" />
                    <div className="absolute top-20 left-0 w-96 h-96 bg-[#eb7e2a]/10 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto relative z-10 text-center max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Questions <span className="text-[#eb7e2a]">Fréquentes</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-blue-100/80 leading-relaxed"
                    >
                        Tout ce que vous devez savoir sur la cybersécurité en Côte d'Ivoire et nos services.
                    </motion.p>
                </div>
            </section>

            {/* FAQ List */}
            <section className="py-12 px-4 pb-24">
                <div className="container mx-auto max-w-4xl">
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="border border-gray-800 rounded-xl bg-[#1e293b]/50 overflow-hidden hover:border-[#eb7e2a]/30 transition-colors"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                                >
                                    <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-[#eb7e2a]' : 'text-white'}`}>
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#eb7e2a]' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-gray-800/50 pt-4">
                                                {/* Check if answer needs a link injection for the last item */}
                                                {index === faqData.length - 1 ? (
                                                    <span>
                                                        {item.answer.replace(/Contactez Technologies MS Core pour une première évaluation confidentielle\./, '')}
                                                        Contactez Technologies MS Core pour une première évaluation confidentielle.{' '}
                                                        <Link href="/services/security" className="text-[#eb7e2a] hover:underline font-medium inline-flex items-center gap-1">
                                                            Nos services de cybersécurité <ArrowRight className="w-3 h-3" />
                                                        </Link>
                                                    </span>
                                                ) : (
                                                    item.answer
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Box */}
                    <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-[#092963] to-[#0f172a] rounded-2xl border border-blue-900/50 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#eb7e2a]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
                            Vous avez d'autres questions ?
                        </h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">
                            Notre équipe d'experts est là pour vous accompagner. N'hésitez pas à nous contacter pour une consultation personnalisée.
                        </p>
                        <div className="flex justify-center gap-4 relative z-10 flex-wrap">
                            <Link
                                href="/contact"
                                className="px-8 py-3 bg-[#eb7e2a] hover:bg-[#d96d1f] text-white font-bold rounded-lg transition-colors shadow-lg shadow-[#eb7e2a]/20"
                            >
                                Contactez-nous
                            </Link>
                            <Link
                                href="/services"
                                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors backdrop-blur-sm"
                            >
                                Nos Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
