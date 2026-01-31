'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MailWarning, UserCheck, ShieldAlert, CheckCircle2, FileText, MousePointerClick } from 'lucide-react';
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
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#ef4444] mix-blend-multiply z-10" />
                    <Image
                        src="/images/service-phishing.png"
                        alt="Phishing Test Background"
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
                        <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 border border-red-400/30 text-red-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            SENSIBILISATION ET PRÉVENTION
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Test d'<span className="text-[#eb7e2a]">Hameçonnage</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Évaluez et renforcez la vigilance de vos employés face aux tentatives de fraude et aux cybermenaces ciblées.
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
                <div className="container mx-auto max-w-5xl space-y-16">

                    {/* Introduction */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">Le facteur humain</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Le test d’hameçonnage permet d’évaluer le niveau de vigilance de vos employés face aux tentatives de fraude par courriel, SMS ou autres canaux de communication. Le facteur humain demeure l’un des principaux vecteurs d’attaque, et les campagnes d’hameçonnage ciblées représentent une menace constante pour les organisations.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Chez Technologies MS Core, nous réalisons des campagnes d’hameçonnage simulées, réalistes et encadrées, afin d’identifier les comportements à risque et de renforcer la culture de cybersécurité.
                        </p>
                    </div>

                    {/* Ce que nous testons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Ce que nous testons</h3>
                            <p className="text-gray-600 mb-4">Nos campagnes évaluent notamment :</p>
                            <ul className="space-y-3">
                                {[
                                    "La capacité des employés à reconnaître les courriels frauduleux",
                                    "Les comportements face aux liens et pièces jointes malveillantes",
                                    "La gestion des demandes suspectes (urgences, fausses autorités)",
                                    "Le respect des procédures internes de sécurité",
                                    "Les réflexes de signalement des tentatives de phishing"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <MousePointerClick className="w-5 h-5 text-[#eb7e2a] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 h-64 md:h-80 relative rounded-2xl overflow-hidden border border-red-100 shadow-lg">
                            <Image
                                src="/images/service-phishing-detail.png"
                                alt="Phishing Test Details"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Notre approche */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-[#092963] mb-6">Campagnes simulées</h3>
                                <p className="text-gray-600 mb-4">Une approche progressive et pédagogique :</p>
                                <ul className="space-y-3">
                                    {[
                                        "Définition des objectifs et scénarios",
                                        "Conception de courriels réalistes adaptés",
                                        "Lancement de campagnes contrôlées",
                                        "Analyse des comportements (clics, saisie)",
                                        "Sensibilisation immédiate (optionnelle)"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#eb7e2a]" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#092963] mb-6">Sensibilisation continue</h3>
                                <p className="text-gray-600 mb-4">Nous vous accompagnons pour :</p>
                                <ul className="space-y-3">
                                    {[
                                        "Sensibiliser les employés aux risques",
                                        "Renforcer les bons réflexes de sécurité",
                                        "Améliorer les procédures internes",
                                        "Mettre en place des campagnes récurrentes",
                                        "Suivre l'évolution de la vigilance"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
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
                            <p className="text-gray-600 mb-4">Vous bénéficiez de :</p>
                            <ul className="space-y-3">
                                {[
                                    "Statistiques claires (taux de clic, compromission, signalement)",
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
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Les bénéfices pour votre organisation</h3>
                            <ul className="space-y-3">
                                {[
                                    "Réduction des risques de compromission liés au phishing",
                                    "Amélioration du niveau de vigilance des employés",
                                    "Renforcement des bonnes pratiques de sécurité",
                                    "Diminution des incidents liés à l’erreur humaine",
                                    "Sensibilisation durable et mesurable"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why Phishing Test */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                        <h3 className="text-2xl font-bold text-[#092963] mb-8 text-center">Pourquoi réaliser des tests d’hameçonnage ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">1</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Mesurer la vigilance</h4>
                                <p className="text-gray-600 text-sm">Évaluer les comportements réels des employés face aux tentatives de fraude dans un cadre sécurisé.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">2</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Identifier les risques</h4>
                                <p className="text-gray-600 text-sm">Cibler précisément les besoins de sensibilisation et de formation selon les résultats.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">3</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Culture de sécurité</h4>
                                <p className="text-gray-600 text-sm">Instaurer de bons réflexes et réduire durablement les risques humains par la répétition.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
