'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Headphones, MessageCircleQuestion, Wrench, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MicrosoftSupportPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#8b5cf6] mix-blend-multiply" />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center pt-32 md:pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            ACCOMPAGNEMENT EXPERT
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Conseil et <span className="text-[#eb7e2a]">Support Microsoft</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Un accompagnement fiable au quotidien pour exploiter pleinement vos solutions Microsoft.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Demander de l'aide
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
                                <Headphones className="w-24 h-24 text-gray-300" />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold text-[#092963] mb-6">Support technique réactif</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Nous offrons des services de conseil, d’assistance technique et de support pour vous aider à exploiter pleinement vos solutions Microsoft, résoudre rapidement les incidents et accompagner l’évolution continue de votre environnement IT.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <span className="text-gray-700">Résolution rapide des incidents</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <span className="text-gray-700">Maintenance préventive</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <span className="text-gray-700">Conseil et évolution</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
