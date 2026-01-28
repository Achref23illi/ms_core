'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Bug, ShieldAlert, Code, Server, CheckCircle2, FileText, Wifi, Lock, Globe } from 'lucide-react';
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
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#7f1d1d] mix-blend-multiply z-10" />
                    <Image
                        src="/images/security-pentest.jpg"
                        alt="Penetration Testing Background"
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
                            AUDIT OFFENSIF
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Tests d'<span className="text-[#eb7e2a]">Intrusion</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Mesurez concrètement le niveau de sécurité de vos systèmes en simulant des attaques contrôlées.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Demander un test d'intrusion
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl space-y-16">

                    {/* Introduction */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">Tests d’intrusion</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Les tests d’intrusion permettent de mesurer concrètement le niveau de sécurité de vos systèmes en simulant des attaques contrôlées, similaires à celles menées par des acteurs malveillants. Contrairement à une simple analyse automatisée, le test d’intrusion met en évidence les failles réellement exploitables et leur impact potentiel sur vos activités.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Chez Technologies MS Core, nos tests d’intrusion sont réalisés de manière encadrée, éthique et sécurisée, afin d’identifier les vulnérabilités critiques avant qu’elles ne soient exploitées.
                        </p>
                    </div>

                    {/* Types de tests */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 text-[#eb7e2a] shadow-sm">
                                <Code className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#092963] mb-3">Tests d’intrusion applicatifs</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Nous évaluons la sécurité de vos applications Web, API et applications métiers afin d’identifier les failles telles que les erreurs de gestion des accès, les injections, les failles logiques ou les vulnérabilités liées au développement.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 text-[#eb7e2a] shadow-sm">
                                <Server className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#092963] mb-3">Tests d’intrusion systèmes</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Nous analysons la sécurité de vos systèmes d’exploitation, serveurs et postes de travail afin d’identifier les failles de configuration, les vulnérabilités logicielles et les possibilités d’escalade de privilèges.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 text-[#eb7e2a] shadow-sm">
                                <Wifi className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#092963] mb-3">Tests d’intrusion infras</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Nous testons la robustesse de vos infrastructures réseau (réseaux internes, périmétriques, VPN, Wi-Fi, cloud) afin d’identifier les points d’entrée exploitables et les faiblesses de segmentation.
                            </p>
                        </div>
                    </div>

                    {/* Approche */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-[#092963] mb-6">Notre approche</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Nos tests d’intrusion sont réalisés selon une méthodologie rigoureuse. Chaque intervention est planifiée afin de limiter les risques sur les environnements de production.
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Définition du périmètre et des objectifs du test",
                                "Choix du type de test (boîte noire, grise ou blanche)",
                                "Simulation d’attaques contrôlées et exploitation encadrée",
                                "Analyse des impacts potentiels",
                                "Documentation détaillée des vulnérabilités"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-2 h-2 rounded-full bg-[#eb7e2a]" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Livrables & Bénéfices */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Livrables</h3>
                            <p className="text-gray-600 mb-4">À l’issue du test d’intrusion, vous recevez :</p>
                            <ul className="space-y-3">
                                {[
                                    "Un rapport détaillé des vulnérabilités identifiées",
                                    "La démonstration des failles exploitables",
                                    "Une évaluation du niveau de criticité et des risques associés",
                                    "Des recommandations techniques claires et priorisées",
                                    "Un résumé exécutif destiné aux décideurs"
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
                                    "Identification des failles réellement exploitables",
                                    "Réduction du risque de compromission et d’incidents majeurs",
                                    "Amélioration continue de la sécurité technique",
                                    "Meilleure préparation face aux attaques réelles",
                                    "Renforcement de la confiance des clients et partenaires"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why Pentest */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                        <h3 className="text-2xl font-bold text-[#092963] mb-8 text-center">Pourquoi réaliser un test d’intrusion ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">1</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Tester la sécurité dans des conditions réelles</h4>
                                <p className="text-gray-600 text-sm">Les tests d’intrusion reproduisent les techniques utilisées par les attaquants pour identifier ce qui peut réellement être exploité.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">2</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Identifier les failles critiques avant les cybercriminels</h4>
                                <p className="text-gray-600 text-sm">Un test d’intrusion permet de corriger les vulnérabilités les plus dangereuses avant qu’elles ne soient utilisées.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">3</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Renforcer votre posture de sécurité globale</h4>
                                <p className="text-gray-600 text-sm">En corrigeant les failles identifiées, vous améliorez la résilience de votre infrastructure et réduisez les risques d’incidents.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
