'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, FileSearch, HardDrive, CheckCircle2, FileText, Microscope, ShieldQuestion, Fingerprint, Scale, UserCheck } from 'lucide-react';
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
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#404040] mix-blend-multiply z-10" />
                    <Image
                        src="/images/security-investigation.png"
                        alt="Cyber Investigation Background"
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
                <div className="container mx-auto max-w-6xl space-y-20">

                    {/* Introduction */}
                    <div className="text-center md:text-left max-w-4xl mx-auto md:mx-0">
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">Faites la lumière sur les incidents</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            L’investigation numérique (forensics) permet d’analyser les supports informatiques pour comprendre le déroulement d’un événement de sécurité, identifier les responsables et collecter des preuves. Cette démarche est essentielle pour comprendre non seulement "ce qui s’est passé", mais aussi "comment" et "pourquoi".
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Nous accompagnons les organisations dans l’analyse approfondie des incidents de cybersécurité afin d’identifier leur origine, comprendre les modes opératoires des pirates, évaluer l’impact réel et produire des preuves numériques exploitables.
                        </p>
                    </div>

                    {/* Services et Cas d'usage */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Quand faire appel à nous ?</h3>
                            <p className="text-gray-600 mb-4">Nos experts interviennent dans les cas suivants :</p>
                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    { icon: ShieldQuestion, text: "Fraudes numériques et financières (BEC, compromission de courriels)" },
                                    { icon: Fingerprint, text: "Intrusions systèmes et vols de données (Data Exfiltration)" },
                                    { icon: HardDrive, text: "Rançongiciels (Ransomware) et sabotage informatique" },
                                    { icon: UserCheck, text: "Abus de privilèges, fuites internes ou actes malveillants d'employés" },
                                    { icon: Scale, text: "Litiges juridiques nécessitant une expertise technique (recherche de preuves)" }
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
                                    src="/images/security-investigation.png"
                                    alt="Digital Forensics Visualization"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[#092963]/10 mix-blend-overlay" />
                            </div>
                        </div>
                    </div>

                    {/* Approche & Expertise */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#092963] mb-6 flex items-center gap-3">
                                <Microscope className="w-8 h-8 text-[#eb7e2a]" /> Notre approche
                            </h3>
                            <p className="text-gray-600 mb-4">Nous suivons une méthodologie rigoureuse garantissant l’intégrité des preuves :</p>
                            <ul className="space-y-3">
                                {[
                                    "Préservation et acquisition forensique des données (copie conforme)",
                                    "Reconstitution de la chronologie des événements (Timeline Analysis)",
                                    "Analyse des journaux, registres et artefacts systèmes",
                                    "Récupération de fichiers supprimés ou dissimulés",
                                    "Analyse de la mémoire vive (RAM) pour les menaces actives"
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
                                <FileText className="w-8 h-8 text-blue-600" /> Services couverts
                            </h3>
                            <p className="text-gray-600 mb-4">Nos domaines d'investigation :</p>
                            <ul className="space-y-3">
                                {[
                                    "Collecte et préservation de preuves numériques",
                                    "Analyse Post-Mortem d’incidents de sécurité",
                                    "Recherche de traces de compromission (IOCs)",
                                    "Investigation sur les menaces internes",
                                    "Soutien technique au contentieux juridique"
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
                            <ul className="space-y-3">
                                {[
                                    "Rapport d’investigation détaillé (technique et exécutif)",
                                    "Chronologie précise des événements",
                                    "Preuves numériques collectées et scellées",
                                    "Recommandations de sécurité pour éviter la récidive",
                                    "Témoignage d’expert si nécessaire"
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
                                    "Compréhension claire des causes et responsabilités",
                                    "Capacité à soutenir des actions juridiques avec des preuves solides",
                                    "Identification des failles exploitées pour mieux se protéger",
                                    "Limitation des impacts futurs grâce aux leçons apprises",
                                    "Réponse factuelle aux parties prenantes (clients, régulateurs)"
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
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-[#092963] mb-8 text-center">Pourquoi faire appel à des experts en investigation ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">1</div>
                                <h4 className="font-bold text-[#092963] mb-2">Expertise Technique</h4>
                                <p className="text-gray-600 text-sm">Des compétences pointues pour analyser des traces complexes et invisibles.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">2</div>
                                <h4 className="font-bold text-[#092963] mb-2">Méthodologie Légale</h4>
                                <p className="text-gray-600 text-sm">Respect des procédures pour garantir l'admissibilité des preuves.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">3</div>
                                <h4 className="font-bold text-[#092963] mb-2">Neutralité & Objectivité</h4>
                                <p className="text-gray-600 text-sm">Une analyse indépendante et factuelle des événements.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
