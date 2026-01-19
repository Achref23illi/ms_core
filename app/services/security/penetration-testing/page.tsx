'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, Lock, Laptop, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PenetrationTestingPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#2a0a4d] mix-blend-multiply" />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center pt-32 md:pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            CYBERSÉCURITÉ OFFENSIVE
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Tests <span className="text-[#eb7e2a]">d'Intrusion</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Testez la résistance de vos systèmes face à des attaques réelles. Identifiez les failles avant les pirates.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Planifier un test
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
                                <Shield className="w-24 h-24 text-gray-300" />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold text-[#092963] mb-6">Simulation d'attaques réalistes</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Nos experts simulent des cyberattaques contrôlées sur vos réseaux, applications et infrastructures afin d’identifier les failles exploitables avant qu’elles ne le soient par des acteurs malveillants.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Les tests d’intrusion permettent de renforcer la sécurité technique et de réduire significativement les risques d’incidents majeurs.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <span className="text-gray-700">Tests réseaux et applicatifs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <span className="text-gray-700">Identification des vecteurs d'attaque</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <span className="text-gray-700">Rapport technique détaillé</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold text-[#092963] mb-4">Votre infrastructure est-elle vraiment sûre ?</h2>
                    <Link href="/contact" className="text-[#eb7e2a] font-semibold hover:underline">
                        Contactez nos experts pour le savoir &rarr;
                    </Link>
                </div>
            </section>
        </main>
    );
}
