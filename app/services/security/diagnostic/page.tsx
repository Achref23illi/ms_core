'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, ShieldAlert, Search, FileText, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SecurityDiagnosticPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Navigation */}
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    {/* Placeholder image until a specific one is chosen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#0f3475] mix-blend-multiply" />
                    <Image
                        src="/images/service-cybersecurity.png"
                        alt="Security Diagnostic Background"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center pt-32 md:pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            CYBERSÉCURITÉ ET PROTECTION DES DONNÉES
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Diagnostic en <span className="text-[#eb7e2a]">Cybersécurité</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Évaluez le niveau réel de sécurité de votre organisation. Identifiez vos vulnérabilités avant qu'elles ne soient exploitées.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Demander mon audit
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl space-y-16">

                    {/* Introduction */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">Comprendre votre posture de sécurité</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Le diagnostic de cybersécurité est une étape essentielle pour comprendre votre posture de sécurité actuelle, identifier les vulnérabilités critiques et prioriser les actions à mettre en place pour réduire les risques. Il offre une vision globale et objective de votre environnement technologique, organisationnel et humain.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Chez Technologies MS Core, nous réalisons un diagnostic structuré et pragmatique qui permet aux dirigeants et aux équipes TI de prendre des décisions éclairées, basées sur des constats concrets et mesurables.
                        </p>
                    </div>

                    {/* Ce que nous analysons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Ce que nous analysons</h3>
                            <p className="text-gray-600 mb-4">Notre diagnostic couvre notamment :</p>
                            <ul className="space-y-3">
                                {[
                                    "La gouvernance de la sécurité de l’information",
                                    "Les politiques, procédures et pratiques organisationnelles",
                                    "Les contrôles de sécurité techniques (réseaux, postes, serveurs, cloud, identités, accès)",
                                    "La protection des données et des informations sensibles",
                                    "Les risques liés au facteur humain et aux usages",
                                    "Le niveau de maturité globale en cybersécurité"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#eb7e2a] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 h-64 md:h-80 relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                            <Image
                                src="/images/service-diagnostic-detail.png"
                                alt="Security Diagnostic Details"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Notre approche */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-[#092963] mb-6">Notre approche</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Nous adoptons une approche méthodique, proportionnée à la taille et au contexte de votre organisation. Notre démarche est indépendante, factuelle et orientée vers la réalité opérationnelle de votre organisation.
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Collecte d’informations et entretiens ciblés",
                                "Analyse documentaire et technique",
                                "Identification des vulnérabilités, failles et écarts",
                                "Évaluation des risques et de leur impact potentiel",
                                "Priorisation des actions correctives"
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
                            <p className="text-gray-600 mb-4">À l’issue du diagnostic, vous recevez :</p>
                            <ul className="space-y-3">
                                {[
                                    "Un rapport clair et structuré présentant les constats clés",
                                    "Une évaluation de votre niveau de maturité en cybersécurité",
                                    "Une cartographie des risques prioritaires",
                                    "Un plan d’actions concret, hiérarchisé et réaliste",
                                    "Des recommandations adaptées à vos contraintes opérationnelles et budgétaires"
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
                                    "Vision claire de votre posture de cybersécurité",
                                    "Réduction des risques techniques, humains et organisationnels",
                                    "Meilleure priorisation des investissements en sécurité",
                                    "Renforcement de la résilience et de la confiance",
                                    "Base solide pour des démarches d’audit, de conformité ou d’amélioration continue"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <ShieldAlert className="w-5 h-5 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold text-[#092963] mb-4">Prêt à sécuriser votre avenir ?</h2>
                    <Link href="/contact" className="text-[#eb7e2a] font-semibold hover:underline">
                        Contactez-nous pour un diagnostic personnalisé &rarr;
                    </Link>
                </div>
            </section>
        </main>
    );
}
