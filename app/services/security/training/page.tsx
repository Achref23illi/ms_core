'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Users, GraduationCap, BrainCircuit, CheckCircle2, FileText, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SecurityTrainingPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#e11d48] mix-blend-multiply z-10" />
                    <Image
                        src="/images/service-training.jpg"
                        alt="Security Training Background"
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
                        <span className="inline-block py-1 px-3 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            FORMATION ET CULTURE
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Formation et <span className="text-[#eb7e2a]">Sensibilisation</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Renforcez votre première ligne de défense : vos employés. Développez une culture de sécurité durable au sein de votre organisation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Découvrir nos formations
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl space-y-16">

                    {/* Introduction */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">L'humain au cœur de la sécurité</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Les technologies seules ne suffisent pas à protéger une organisation. Les employés jouent un rôle clé dans la prévention des incidents de sécurité. La formation et la sensibilisation à la sécurité de l’information permettent de renforcer les bons réflexes, de réduire les erreurs humaines et d’impliquer l’ensemble des équipes dans la protection des données et des systèmes.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Chez Technologies MS Core, nous proposons des programmes de formation adaptés aux profils techniques et non techniques, conçus pour être concrets, accessibles et applicables au quotidien.
                        </p>
                    </div>

                    {/* Types de formations */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Programmes de formation</h3>
                            <p className="text-gray-600 mb-4">Nos formations couvrent notamment :</p>
                            <ul className="space-y-3">
                                {[
                                    "Sensibilisation générale à la cybersécurité",
                                    "Formation des dirigeants et gestionnaires (risques)",
                                    "Formation des équipes TI et sécurité",
                                    "Protection des renseignements personnels",
                                    "Bonnes pratiques (télétravail, numérique)",
                                    "Gestion des incidents et comportements à risque"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <GraduationCap className="w-5 h-5 text-[#eb7e2a] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 h-64 md:h-80 bg-rose-50 rounded-2xl flex items-center justify-center border border-rose-100">
                            <Users className="w-24 h-24 text-[#092963]/30" />
                        </div>
                    </div>

                    {/* Notre approche */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-[#092963] mb-6">Notre approche pédagogique</h3>
                                <p className="text-gray-600 mb-4">Une méthode interactive et progressive :</p>
                                <ul className="space-y-3">
                                    {[
                                        "Évaluation du niveau de maturité et besoins",
                                        "Adaptation au contexte et secteur",
                                        "Formation interactive et situations réelles",
                                        "Exemples concrets et études de cas",
                                        "Suivi et amélioration continue"
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
                                <p className="text-gray-600 mb-4">Au-delà du ponctuel, nous visons la durée :</p>
                                <ul className="space-y-3">
                                    {[
                                        "Programmes de sensibilisation récurrents",
                                        "Diffusion de contenus de prévention",
                                        "Intégration de la sécurité dans les processus",
                                        "Renforcement de la culture de sécurité",
                                        "Amélioration continue de la vigilance"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
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
                            <p className="text-gray-600 mb-4">Selon les besoins, vous bénéficiez de :</p>
                            <ul className="space-y-3">
                                {[
                                    "Supports de formation clairs et adaptés",
                                    "Modules de sensibilisation personnalisés",
                                    "Évaluations et questionnaires de compréhension",
                                    "Rapports de participation et de progression",
                                    "Recommandations pour renforcer la culture"
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
                                    "Réduction des incidents causés par l’erreur humaine",
                                    "Amélioration des comportements et réflexes de sécurité",
                                    "Meilleure protection des renseignements personnels",
                                    "Renforcement de la conformité et de la gouvernance",
                                    "Culture de cybersécurité durable et mesurable"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why Training */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                        <h3 className="text-2xl font-bold text-[#092963] mb-8 text-center">Pourquoi investir dans la formation ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">1</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Réduire les risques humains</h4>
                                <p className="text-gray-600 text-sm">La majorité des incidents impliquent une action humaine. La formation diminue significativement ces risques.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">2</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Responsabiliser les employés</h4>
                                <p className="text-gray-600 text-sm">Impliquer chaque employé dans la protection de l'information renforce la responsabilité collective.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">3</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Renforcer la conformité</h4>
                                <p className="text-gray-600 text-sm">Des employés formés contribuent au respect des politiques, des normes et à la résilience globale.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
