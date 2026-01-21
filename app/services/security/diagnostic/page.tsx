'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, ShieldAlert, Search, FileText, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SecurityDiagnosticPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Navigation */}
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    {/* Placeholder image until a specific one is chosen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#0f3475] mix-blend-multiply" />
                    <Image
                        src="/images/service-cybersecurity.png"
                        alt="Security Diagnostic Background"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center pt-32 md:pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            CYBERSÉCURITÉ ET PROTECTION DES DONNÉES
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Diagnostic en <span className="text-[#eb7e2a]">Cybersécurité</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Évaluez le niveau réel de sécurité de votre organisation. Identifiez vos vulnérabilités avant qu'elles ne soient exploitées.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Demander mon audit
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#092963] mb-6">Comprendre vos risques pour mieux vous protéger</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Nous analysons votre posture de cybersécurité afin d’identifier les vulnérabilités, les failles organisationnelles et les risques prioritaires pouvant affecter vos systèmes, vos données et vos opérations.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Ce diagnostic permet d’obtenir une vision claire de votre niveau de maturité et de définir un plan d’actions concret et priorisé.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <span className="text-gray-700">Identification des vulnérabilités critiques</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <span className="text-gray-700">Analyse des failles organisationnelles</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <span className="text-gray-700">Plan d'action priorisé</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
                            <Search className="w-24 h-24 text-gray-300" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold text-[#092963] mb-4">Prêt à sécuriser votre avenir ?</h2>
                    <Link href="/contact" className="text-[#eb7e2a] font-semibold hover:underline">
                        Contactez-nous pour un diagnostic personnalisé &rarr;
                    </Link>
                </div>
            </section>
        </main>
    );
}
