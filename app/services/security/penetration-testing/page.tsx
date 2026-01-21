'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Bug, ShieldAlert, Code, Server, CheckCircle2, FileText, Wifi, Lock, Globe, Laptop } from 'lucide-react';
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
                            Test d'<span className="text-[#eb7e2a]">Intrusion</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Évaluez la résistance de vos systèmes en simulant des attaques réelles menées par nos experts éthiques.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Planifier un pentest
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl space-y-20">

                    {/* Introduction */}
                    <div className="text-center md:text-left max-w-4xl mx-auto md:mx-0">
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">Éprouver pour mieux protéger</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            Les tests d’intrusion (pentesting) sont indispensables pour valider l’efficacité de vos mesures de sécurité. Ils consistent à simuler des cyberattaques réalistes afin d’identifier les vulnérabilités exploitables avant que des acteurs malveillants ne le fassent.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Nos experts certifiés (CEH, OSCP) adoptent la posture d’un attaquant (Red Team) pour tester la robustesse de vos infrastructures, applications et processus, sans impacter vos opérations.
                        </p>
                    </div>

                    {/* Nos types de tests */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Nos types de tests</h3>
                            <p className="text-gray-600 mb-4">Nous réalisons des tests sur différents périmètres :</p>
                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    { icon: Server, text: "Infrastructure (Interne / Externe)" },
                                    { icon: Code, text: "Applications Web et Mobiles & API" },
                                    { icon: Wifi, text: "Réseaux sans fil (Wi-Fi)" },
                                    { icon: ShieldAlert, text: "Ingénierie sociale (Physique et Numérique)" },
                                    { icon: Lock, text: "Active Directory et environnements Cloud" }
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
                                    src="/images/security-pentest.jpg"
                                    alt="Penetration Testing Visualization"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[#092963]/10 mix-blend-overlay" />
                            </div>
                        </div>
                    </div>

                    {/* Approche & Méthodologie */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#092963] mb-6 flex items-center gap-3">
                                <Bug className="w-8 h-8 text-[#eb7e2a]" /> Notre méthodologie
                            </h3>
                            <p className="text-gray-600 mb-4">Nous suivons des standards reconnus (PTES, OWASP, OSSTMM) :</p>
                            <ul className="space-y-3">
                                {[
                                    "Reconnaissance et collecte d'informations (OSINT)",
                                    "Analyse des vulnérabilités (Scan & Recherche manuelle)",
                                    "Exploitation (compromission contrôlée)",
                                    "Post-exploitation et élévation de privilèges",
                                    "Rapport et nettoyage des traces"
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
                                <FileText className="w-8 h-8 text-blue-600" /> Livrables
                            </h3>
                            <p className="text-gray-600 mb-4">Vous recevez un rapport complet incluant :</p>
                            <ul className="space-y-3">
                                {[
                                    "Résumé exécutif pour la direction (risques business)",
                                    "Détail technique des vulnérabilités (CVSS, preuves)",
                                    "Scénarios d'attaque réussis",
                                    "Recommandations de correction priorisées",
                                    "Plan d'action pour le renforcement"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why Pentest */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-[#092963] mb-8 text-center">Pourquoi réaliser un test d’intrusion ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">1</div>
                                <h4 className="font-bold text-[#092963] mb-2">Identifier les failles</h4>
                                <p className="text-gray-600 text-sm">Découvrir les vulnérabilités invisibles aux scans automatisés.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">2</div>
                                <h4 className="font-bold text-[#092963] mb-2">Valider la sécurité</h4>
                                <p className="text-gray-600 text-sm">S'assurer que les contrôles en place sont efficaces et configurés correctement.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">3</div>
                                <h4 className="font-bold text-[#092963] mb-2">Conformité</h4>
                                <p className="text-gray-600 text-sm">Répondre aux exigences réglementaires (PCI DSS, ISO 27001, Cyberassurance).</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
