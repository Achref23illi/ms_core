'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, Fingerprint, HardDrive, CheckCircle2, FileText, Lock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CyberInvestigationPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#312e81] mix-blend-multiply z-10" />
                    <Image
                        src="/images/service-investigation.jpg"
                        alt="Cyber Investigation Background"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center pt-32 md:pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            ANALYSE FORENSIQUE
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Cyberenquête et <span className="text-[#eb7e2a]">Investigation</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Analysez les incidents, identifiez les causes racines et préservez les preuves numériques avec nos experts en investigation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Demander une enquête
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl space-y-16">

                    {/* Introduction */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">Comprendre l'incident</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Lorsqu’un incident de cybersécurité survient, il est essentiel de comprendre ce qui s’est réellement passé, d’en identifier l’origine, d’en mesurer l’impact et de préserver les preuves numériques. La cyberenquête et l’investigation numérique permettent d’analyser en profondeur les incidents afin d’appuyer les décisions opérationnelles, juridiques et réglementaires.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Chez Technologies MS Core, nous accompagnons les organisations dans l’analyse méthodique et rigoureuse des incidents de sécurité, en appliquant des méthodes d’investigation forensique reconnues et conformes aux exigences légales.
                        </p>
                    </div>

                    {/* Types d'incidents */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Types d’incidents traités</h3>
                            <p className="text-gray-600 mb-4">Nos services couvrent notamment :</p>
                            <ul className="space-y-3">
                                {[
                                    "Fraudes numériques et financières",
                                    "Compromissions de comptes et d’identités",
                                    "Intrusions systèmes et accès non autorisés",
                                    "Fuites ou vols de données",
                                    "Rançongiciels et logiciels malveillants",
                                    "Abus internes ou comportements malveillants"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <ShieldAlert className="w-5 h-5 text-[#eb7e2a] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 h-64 md:h-80 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
                            <Fingerprint className="w-24 h-24 text-[#092963]/30" />
                        </div>
                    </div>

                    {/* Notre approche */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-[#092963] mb-6">Notre méthodologie</h3>
                                <p className="text-gray-600 mb-4">Une démarche structurée et rigoureuse :</p>
                                <ul className="space-y-3">
                                    {[
                                        "Qualification de l’incident et périmètre",
                                        "Collecte et sécurisation des preuves",
                                        "Analyse forensique des systèmes et données",
                                        "Reconstitution de la chronologie",
                                        "Identification des causes et impacts"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#eb7e2a]" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#092963] mb-6">Rigueur et Légalité</h3>
                                <p className="text-gray-600 mb-4">Nos interventions respectent :</p>
                                <ul className="space-y-3">
                                    {[
                                        "Les bonnes pratiques de la criminalistique",
                                        "Les exigences légales applicables",
                                        "La chaîne de possession (Chain of Custody)",
                                        "La confidentialité absolue",
                                        "L'intégrité des preuves pour usage juridique"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Livrables & Bénéfices */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Livrables</h3>
                            <p className="text-gray-600 mb-4">À l’issue de l’enquête, vous recevez :</p>
                            <ul className="space-y-3">
                                {[
                                    "Un rapport d’investigation clair et structuré",
                                    "La chronologie détaillée des événements",
                                    "Les constats techniques et les preuves numériques",
                                    "L’évaluation des impacts opérationnels et financiers",
                                    "Des recommandations pour éviter la récurrence"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <FileText className="w-5 h-5 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Les bénéfices pour votre organisation</h3>
                            <ul className="space-y-3">
                                {[
                                    "Compréhension claire et factuelle des incidents",
                                    "Meilleure prise de décision en situation de crise",
                                    "Limitation des impacts et des dommages",
                                    "Soutien aux démarches juridiques et réglementaires",
                                    "Renforcement durable de la posture de sécurité"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why Investigation */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                        <h3 className="text-2xl font-bold text-[#092963] mb-8 text-center">Pourquoi faire appel à un service de cyberenquête ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">1</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Comprendre précisément</h4>
                                <p className="text-gray-600 text-sm">Identifier les causes réelles de l’incident et éviter les conclusions hâtives par une analyse factuelle.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">2</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Préserver les preuves</h4>
                                <p className="text-gray-600 text-sm">La collecte et la conservation adéquates sont essentielles pour toute démarche juridique future.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">3</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Prévenir la récurrence</h4>
                                <p className="text-gray-600 text-sm">Tirer les enseignements de l'incident pour corriger les failles et renforcer la sécurité.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
