'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Cloud, Lock, Server, CheckCircle2, ShieldCheck, Activity, Key, FileText, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CloudSecurityPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#00aaff] mix-blend-multiply z-10" />
                    <Image
                        src="/images/security-cloud.png"
                        alt="Cloud Security Background"
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
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            PROTECTION CLOUD
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Sécurité <span className="text-[#eb7e2a]">Cloud</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Sécurisez vos environnements cloud et vos données critiques sur Microsoft Azure et Microsoft 365.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Sécuriser mon cloud
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl space-y-20">

                    {/* Introduction */}
                    <div className="text-center md:text-left max-w-4xl mx-auto md:mx-0">
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">Sécurisation complète de vos environnements</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            La sécurité cloud est un enjeu majeur pour les organisations qui exploitent des environnements tels que Microsoft Azure, Microsoft 365 ou d’autres plateformes infonuagiques. Une mauvaise configuration, des accès mal maîtrisés ou des contrôles insuffisants peuvent exposer vos données et vos services à des risques importants.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Chez Technologies MS Core, nous accompagnons les organisations dans la sécurisation complète de leurs environnements cloud afin de réduire les risques de compromission, protéger les données sensibles et assurer la continuité des activités.
                        </p>
                    </div>

                    {/* Ce que nous sécurisons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Ce que nous sécurisons</h3>
                            <p className="text-gray-600 mb-4">Nos interventions couvrent notamment :</p>
                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    { icon: Cloud, text: "Les environnements Microsoft Azure et Microsoft 365" },
                                    { icon: Key, text: "Les identités, accès et privilèges utilisateurs" },
                                    { icon: ShieldCheck, text: "Les configurations de sécurité cloud (politiques, journaux, alertes)" },
                                    { icon: Lock, text: "La protection des données et des informations sensibles" },
                                    { icon: Activity, text: "Les accès externes, API et connexions hybrides" },
                                    { icon: CheckCircle2, text: "La conformité aux bonnes pratiques et standards de sécurité cloud" }
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
                                    src="/images/security-cloud.png"
                                    alt="Visualization Security Cloud"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[#092963]/10 mix-blend-overlay" />
                            </div>
                        </div>
                    </div>

                    {/* Approche, Livrables, Bénéfices */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Approach */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#eb7e2a]">
                            <h3 className="text-xl font-bold text-[#092963] mb-4">Notre approche</h3>
                            <p className="text-gray-600 mb-4 text-sm">Nous adoptons une approche progressive et pragmatique :</p>
                            <ul className="space-y-3">
                                {[
                                    "Analyse de la configuration actuelle",
                                    "Identification des mauvaises configurations",
                                    "Renforcement des contrôles d’accès",
                                    "Mise en place de bonnes pratiques",
                                    "Accompagnement adoption outils sécurité"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#eb7e2a] mt-2" />
                                        <span className="text-sm text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Deliverables */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#092963]">
                            <h3 className="text-xl font-bold text-[#092963] mb-4">Livrables</h3>
                            <p className="text-gray-600 mb-4 text-sm">À l’issue de notre intervention :</p>
                            <ul className="space-y-3">
                                {[
                                    "État des lieux de la sécurité",
                                    "Liste des risques et configurations à corriger",
                                    "Recommandations techniques priorisées",
                                    "Plan d’actions clair et réaliste",
                                    "Documentation de gestion continue"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <FileText className="w-4 h-4 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-sm text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#eb7e2a]">
                            <h3 className="text-xl font-bold text-[#092963] mb-4">Bénéfices</h3>
                            <ul className="space-y-3">
                                {[
                                    "Réduction risques mauvaises configs",
                                    "Protection renforcée données et accès",
                                    "Meilleure visibilité activités/menaces",
                                    "Amélioration conformité et gouvernance",
                                    "Environnements plus résilients"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#eb7e2a] mt-1 shrink-0" />
                                        <span className="text-sm text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why Secure Cloud */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-[#092963] mb-8 text-center">Pourquoi sécuriser vos environnements cloud ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">1</div>
                                <h4 className="font-bold text-[#092963] mb-2">Réduire les risques</h4>
                                <p className="text-gray-600 text-sm">Corriger les failles de configuration avant qu'elles ne soient exploitées.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">2</div>
                                <h4 className="font-bold text-[#092963] mb-2">Protéger les critiques</h4>
                                <p className="text-gray-600 text-sm">Limiter les risques de fuite, d’intrusion ou d’abus de privilèges sur vos données.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">3</div>
                                <h4 className="font-bold text-[#092963] mb-2">Assurer la continuité</h4>
                                <p className="text-gray-600 text-sm">Maintenir la disponibilité des services et renforcer la confiance des clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
