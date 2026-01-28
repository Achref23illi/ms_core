'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Monitor, ShieldCheck, Activity, BrainCircuit, CheckCircle2, FileText, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SecurityMonitoringPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#0f172a] mix-blend-multiply z-10" />
                    <Image
                        src="/images/service-monitoring.png"
                        alt="Security Monitoring Background"
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
                        <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-400/30 text-green-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            PROTECTION CONTINUE
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Surveillance et <span className="text-[#eb7e2a]">Réponse</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Détectez les menaces en temps réel et réagissez efficacement aux incidents de sécurité pour protéger vos opérations.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Demander une surveillance
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl space-y-16">

                    {/* Introduction */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">Vigilance 24/7</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Face à des menaces de plus en plus sophistiquées, la capacité à détecter rapidement les activités suspectes et à réagir efficacement aux incidents est devenue essentielle. Le service de Surveillance et réponse aux incidents permet de surveiller en continu vos systèmes, d’identifier les comportements anormaux et de contenir les attaques avant qu’elles n’aient un impact majeur sur vos opérations.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Chez Technologies MS Core, notre centre de surveillance combine technologies avancées, expertise humaine et processus éprouvés pour offrir une protection continue et proactive.
                        </p>
                    </div>

                    {/* Ce que nous surveillons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Ce que nous surveillons</h3>
                            <p className="text-gray-600 mb-4">Notre service centre de surveillance couvre notamment :</p>
                            <ul className="space-y-3">
                                {[
                                    "Les environnements TI et cloud (réseaux, serveurs, postes, applications)",
                                    "Les environnements Microsoft Azure et Microsoft 365",
                                    "Les identités, accès et comptes utilisateurs",
                                    "Les journaux de sécurité et événements critiques",
                                    "Les activités suspectes et tentatives d’intrusion",
                                    "Les signaux de compromission et comportements anormaux"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Monitor className="w-5 h-5 text-[#eb7e2a] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 h-64 md:h-80 bg-green-50 rounded-2xl flex items-center justify-center border border-green-100">
                            <Activity className="w-24 h-24 text-[#092963]/30" />
                        </div>
                    </div>

                    {/* Notre approche */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-[#092963] mb-6">Notre approche</h3>
                                <p className="text-gray-600 mb-4">Nous adoptons une approche structurée et continue de surveillance :</p>
                                <ul className="space-y-3">
                                    {[
                                        "Collecte et corrélation des journaux",
                                        "Surveillance 24/7 ou adaptée",
                                        "Détection et priorisation des menaces",
                                        "Analyse approfondie des incidents",
                                        "Réponse rapide pour contenir"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#eb7e2a] shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#092963] mb-6">Réponse aux incidents</h3>
                                <p className="text-gray-600 mb-4">En cas d'incident, nous intervenons pour :</p>
                                <ul className="space-y-3">
                                    {[
                                        "Identifier l’origine et la nature de l’incident",
                                        "Contenir la menace pour limiter les impacts",
                                        "Éliminer les causes de compromission",
                                        "Restaurer les systèmes et services",
                                        "Recommandations post-incident"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
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
                                    "Alertes de sécurité qualifiées et contextualisées",
                                    "Rapports d’incidents clairs et exploitables",
                                    "Tableaux de bord de visibilité et de suivi",
                                    "Recommandations d’amélioration continue",
                                    "Rapports exécutifs pour la direction"
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
                                    "Réduction du temps de détection et de réponse (MTTD / MTTR)",
                                    "Limitation des impacts financiers et opérationnels",
                                    "Visibilité accrue sur les menaces et les activités suspectes",
                                    "Renforcement de la résilience et de la continuité des activités",
                                    "Tranquillité d’esprit grâce à une surveillance proactive"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why SOC */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                        <h3 className="text-2xl font-bold text-[#092963] mb-8 text-center">Pourquoi mettre en place un service SOC ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">1</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Détecter les menaces avant qu’elles ne causent des dommages</h4>
                                <p className="text-gray-600 text-sm">Une surveillance continue permet d’identifier rapidement les comportements suspects et de contenir les attaques.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">2</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Réagir efficacement aux incidents de sécurité</h4>
                                <p className="text-gray-600 text-sm">Un centre de surveillance structuré permet de contenir et corriger les incidents de manière coordonnée.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">3</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Améliorer la posture de sécurité dans la durée</h4>
                                <p className="text-gray-600 text-sm">Le centre de surveillance contribue à l’amélioration continue grâce à l’analyse des incidents et recommandations.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
