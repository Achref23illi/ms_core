'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, UserX, AlertTriangle, CheckCircle2, MousePointerClick, GraduationCap, BarChart, ShieldAlert, Target, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PhishingTestPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#800000] mix-blend-multiply z-10" />
                    <Image
                        src="/images/security-phishing.png"
                        alt="Phishing Security Background"
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
                        <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 border border-red-400/30 text-red-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            SENSIBILISATION
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Test d'<span className="text-[#eb7e2a]">Hameçonnage</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Réduisez les risques liés au facteur humain grâce à des simulations réalistes.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Lancer une campagne
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl space-y-20">

                    {/* Introduction */}
                    <div className="text-center md:text-left max-w-4xl mx-auto md:mx-0">
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">Éduquer par la simulation</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            Le test d’hameçonnage permet d’évaluer le niveau de vigilance de vos employés face aux tentatives de fraude par courriel, SMS ou autres canaux de communication. Le facteur humain demeure l’un des principaux vecteurs d’attaque, et les campagnes de d’hameçonnage ciblées représentent une menace constante pour les organisations.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Chez Technologies MS Core, nous réalisons des campagnes d’hameçonnage simulées, réalistes et encadrées, afin d’identifier les comportements à risque et de renforcer la culture de cybersécurité.
                        </p>
                    </div>

                    {/* Ce que nous testons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Ce que nous testons</h3>
                            <p className="text-gray-600 mb-4">Nos campagnes de test d’hameçonnage évaluent notamment :</p>
                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    { icon: Mail, text: "La capacité des employés à reconnaître les courriels frauduleux" },
                                    { icon: MousePointerClick, text: "Les comportements face aux liens et pièces jointes malveillantes" },
                                    { icon: AlertTriangle, text: "La gestion des demandes suspectes (urgences, fausses autorités)" },
                                    { icon: Target, text: "Le respect des procédures internes de sécurité" },
                                    { icon: ShieldAlert, text: "Les réflexes de signalement des tentatives de phishing" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-[#eb7e2a]/30 transition-colors">
                                        <div className="p-2 bg-white rounded-full text-[#eb7e2a] shadow-sm">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/security-phishing.png"
                                    alt="Phishing Simulation Visualization"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[#092963]/10 mix-blend-overlay" />
                            </div>
                        </div>
                    </div>

                    {/* Approche & Amélioration */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#092963] mb-6 flex items-center gap-3">
                                <Target className="w-8 h-8 text-[#eb7e2a]" /> Notre approche
                            </h3>
                            <p className="text-gray-600 mb-4">Nous adoptons une approche progressive et pédagogique :</p>
                            <ul className="space-y-3">
                                {[
                                    "Définition du périmètre et des objectifs de la campagne",
                                    "Conception de scénarios réalistes et adaptés",
                                    "Lancement de campagnes simulées (email, selon besoins)",
                                    "Analyse des comportements et des résultats",
                                    "Sensibilisation ciblée à partir des constats"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#eb7e2a] mt-2.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#092963] mb-6 flex items-center gap-3">
                                <GraduationCap className="w-8 h-8 text-blue-600" /> Sensibilisation
                            </h3>
                            <p className="text-gray-600 mb-4">À l’issue des tests, nous accompagnons votre organisation dans :</p>
                            <ul className="space-y-3">
                                {[
                                    "La sensibilisation des employés aux risques liés à l’hameçonnage",
                                    "Le renforcement des bons réflexes de sécurité",
                                    "L’amélioration des procédures internes",
                                    "La mise en place de campagnes récurrentes",
                                    "Le suivi de l’évolution du niveau de vigilance"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Livrables & Bénéfices */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Livrables</h3>
                            <p className="text-gray-600 mb-4">Vous bénéficiez de :</p>
                            <ul className="space-y-3">
                                {[
                                    "Statistiques claires sur les taux de clic et de compromission",
                                    "Rapports détaillés par campagne",
                                    "Analyse des comportements à risque",
                                    "Recommandations concrètes et adaptées",
                                    "Tableaux de bord de suivi et d’amélioration"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <FileText className="w-5 h-5 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Les bénéfices</h3>
                            <ul className="space-y-3">
                                {[
                                    "Réduction des risques de compromission liés au phishing",
                                    "Amélioration du niveau de vigilance des employés",
                                    "Renforcement des bonnes pratiques de sécurité",
                                    "Diminution des incidents liés à l’erreur humaine",
                                    "Sensibilisation durable et mesurable"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <ShieldAlert className="w-5 h-5 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why Phishing Test */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-[#092963] mb-8 text-center">Pourquoi réaliser des tests d’hameçonnage ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">1</div>
                                <h4 className="font-bold text-[#092963] mb-2">Mesurer la vigilance</h4>
                                <p className="text-gray-600 text-sm">Évaluer les comportements réels des employés face aux tentatives de fraude.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">2</div>
                                <h4 className="font-bold text-[#092963] mb-2">Identifier les risques</h4>
                                <p className="text-gray-600 text-sm">Cibler précisément les besoins de sensibilisation et de formation.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">3</div>
                                <h4 className="font-bold text-[#092963] mb-2">Renforcer la culture</h4>
                                <p className="text-gray-600 text-sm">Instaurer de bons réflexes et réduire durablement les risques humains.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
