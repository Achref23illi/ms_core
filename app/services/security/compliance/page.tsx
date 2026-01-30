'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, ScrollText, Scale, CheckCircle2, FileText, BadgeCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CompliancePage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#475569] mix-blend-multiply z-10" />
                    <Image
                        src="/images/service-governance.png"
                        alt="Compliance Background"
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
                        <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 border border-yellow-400/30 text-yellow-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            NORMES ET RÈGLEMENTS
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Audit et <span className="text-[#eb7e2a]">Conformité</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Assurez votre conformité aux normes internationales (ISO 27001, PCI DSS) et réglementations locales avec un accompagnement expert.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Commencer ma démarche
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl space-y-16">

                    {/* Introduction */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">Respect des exigences</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Les exigences en matière de cybersécurité, de protection des renseignements personnels et de conformité réglementaire sont de plus en plus strictes. Un audit de sécurité permet d’évaluer votre niveau de conformité, d’identifier les écarts et de structurer une démarche claire pour répondre aux exigences normatives et légales applicables à votre organisation.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Chez Technologies MS Core, nous accompagnons les organisations dans leurs démarches d’audit et de conformité en adoptant une approche pragmatique, alignée sur les standards internationaux et adaptée aux réalités opérationnelles.
                        </p>
                    </div>

                    {/* Normes couvertes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Normes et cadres couverts</h3>
                            <p className="text-gray-600 mb-4">Nos services couvrent notamment :</p>
                            <ul className="space-y-3">
                                {[
                                    "ISO 27001 – Système de management de la sécurité de l’information (SMSI)",
                                    "PCI DSS – Sécurité des données de cartes de paiement",
                                    "SSAE 18 / SOC 2 Type II – Contrôles des services",
                                    "Réglementations sur la protection des renseignements personnels",
                                    "Autres exigences sectorielles ou contractuelles"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <BadgeCheck className="w-5 h-5 text-[#eb7e2a] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 h-64 md:h-80 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
                            <Scale className="w-24 h-24 text-[#092963]/30" />
                        </div>
                    </div>

                    {/* Notre approche */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-[#092963] mb-6">Notre démarche d'audit</h3>
                                <p className="text-gray-600 mb-4">Une méthode structurée et progressive :</p>
                                <ul className="space-y-3">
                                    {[
                                        "Analyse du périmètre et des exigences",
                                        "Évaluation des contrôles organisationnels et techniques",
                                        "Identification des écarts et risques",
                                        "Évaluation du niveau de maturité",
                                        "Plan d’actions correctives priorisé"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#eb7e2a]" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#092963] mb-6">Accompagnement</h3>
                                <p className="text-gray-600 mb-4">Au-delà de l'audit, nous vous aidons pour :</p>
                                <ul className="space-y-3">
                                    {[
                                        "Définition des politiques et procédures",
                                        "Mise en place des contrôles requis",
                                        "Préparation aux audits externes",
                                        "Sensibilisation des équipes",
                                        "Amélioration continue du dispositif"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
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
                            <p className="text-gray-600 mb-4">À l’issue de l’audit, vous recevez :</p>
                            <ul className="space-y-3">
                                {[
                                    "Un rapport d’audit clair et structuré",
                                    "La liste des écarts et non-conformités identifiés",
                                    "Une évaluation du niveau de conformité et de maturité",
                                    "Un plan d’actions concret et priorisé",
                                    "Des recommandations adaptées à vos contraintes"
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
                                    "Meilleure maîtrise des risques réglementaires et juridiques",
                                    "Structuration claire des démarches de conformité",
                                    "Réduction des risques de sanctions et d’incidents",
                                    "Renforcement de la confiance des clients et partenaires",
                                    "Alignement durable entre sécurité, conformité et opérations"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why Audit */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                        <h3 className="text-2xl font-bold text-[#092963] mb-8 text-center">Pourquoi réaliser un audit de conformité ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">1</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Répondre aux exigences</h4>
                                <p className="text-gray-600 text-sm">Démontrer votre conformité aux normes et réglementations envers autorités et clients.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">2</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Identifier et corriger les écarts</h4>
                                <p className="text-gray-600 text-sm">Anticiper les constats et corriger les faiblesses avant une certification officielle.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">3</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Conformité durable</h4>
                                <p className="text-gray-600 text-sm">Structurer un cadre de gouvernance et de sécurité robuste et évolutif.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
