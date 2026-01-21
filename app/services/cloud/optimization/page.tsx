'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BarChart3, TrendingUp, Settings2, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CloudOptimizationPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#10b981] mix-blend-multiply z-10" />
                    <Image
                        src="/images/cloud-optimization.png"
                        alt="Cloud Optimization Background"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center pt-32 md:pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            PERFORMANCE & FINOPS
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Optimisation des <span className="text-[#eb7e2a]">Services Cloud</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Tirez le maximum de valeur de vos investissements. Améliorez les performances et réduisez vos coûts.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Optimiser mon cloud
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#092963] mb-6">Gestion proactive et efficace</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Nous optimisons vos environnements Microsoft et cloud pour améliorer les performances, réduire les coûts, renforcer la sécurité et assurer une gestion efficace et proactive de vos services informatiques.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <span className="text-gray-700">Analyse des coûts (FinOps)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <span className="text-gray-700">Tunning de performance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <span className="text-gray-700">Rationalisation des ressources</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/cloud-optimization.png"
                                alt="Optimization Dashboard Visualization"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
