'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, FileSearch, HardDrive, CheckCircle2, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function InvestigationPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#404040] mix-blend-multiply" />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center pt-32 md:pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-gray-500/20 border border-gray-400/30 text-gray-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            INVESTIGATION NUMÉRIQUE
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Cyberenquête et <span className="text-[#eb7e2a]">Investigation</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Analysez les incidents, identifiez leur origine et collectez des preuves numériques exploitables.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Contacter un expert
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#092963] mb-6">Faites la lumière sur les incidents</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Nous accompagnons les organisations dans l’analyse approfondie des incidents de cybersécurité afin d’identifier leur origine, comprendre les modes opératoires des pirates, évaluer l’impact réel et produire des preuves numériques exploitables.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Nos experts interviennent à la suite d’incidents tels que les fraudes numériques, les compromissions de comptes, les intrusions systèmes, les fuites de données, les rançongiciels ou abus internes.
                            </p>
                        </div>
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
                            <FileSearch className="w-24 h-24 text-gray-300" />
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <HardDrive className="w-10 h-10 text-[#eb7e2a] mb-4" />
                            <h3 className="text-xl font-bold text-[#092963] mb-2">Collecte et Préservation</h3>
                            <p className="text-gray-600 text-sm">Collecte et préservation des traces numériques respectant les exigences légales et réglementaires.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <Search className="w-10 h-10 text-[#eb7e2a] mb-4" />
                            <h3 className="text-xl font-bold text-[#092963] mb-2">Analyse Forensique</h3>
                            <p className="text-gray-600 text-sm">Reconstitution de la chronologie des événements et identification des modes opératoires.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <FileText className="w-10 h-10 text-[#eb7e2a] mb-4" />
                            <h3 className="text-xl font-bold text-[#092963] mb-2">Rapport d'Expertise</h3>
                            <p className="text-gray-600 text-sm">Rapports clairs incluant constats, preuves et recommandations pour soutenir vos démarches.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
