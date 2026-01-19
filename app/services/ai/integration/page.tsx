'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Brain, Cpu, Database, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AIIntegrationPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#7c3aed] mix-blend-multiply" />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center pt-32 md:pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            INTELLIGENCE ARTIFICIELLE
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Conception et <span className="text-[#eb7e2a]">Intégration IA</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Transformez vos données et vos processus en leviers de performance grâce à des solutions d'IA sur mesure.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Discuter de mon projet
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#092963] mb-6">L'IA au service de votre métier</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Nous concevons et intégrons des solutions d’intelligence artificielle adaptées à vos besoins métier afin d’automatiser, optimiser et améliorer vos opérations.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Nos approches sont pragmatiques, sécurisées et orientées vers des gains mesurables, vous permettant de rester compétitif dans un marché en constante évolution.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <span className="text-gray-700">Solutions sur mesure</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <span className="text-gray-700">Automatisation des processus</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <span className="text-gray-700">Approche sécurisée</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
                            <Brain className="w-24 h-24 text-gray-300" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
