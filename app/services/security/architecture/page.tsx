'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, ShieldCheck, Cloud, Lock, Layout, ClipboardCheck, UserCheck, Eye, Scale, Zap, GraduationCap, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Services/Features Data
const features = [
    {
        title: "Alignement CAF",
        icon: Layout,
        desc: "Architecture standardisée.",
        detail: "Conception sécurisée respectant scrupuleusement les piliers du Microsoft Cloud Adoption Framework (CAF)."
    },
    {
        title: "Security Benchmark",
        icon: ClipboardCheck,
        desc: "Best practices Microsoft.",
        detail: "Implémentation des recommandations du Microsoft Cloud Security Benchmark pour une posture de sécurité optimale."
    },
    {
        title: "Gestion Identités (IAM)",
        icon: UserCheck,
        desc: "Contrôle d'accès strict.",
        detail: "Déploiement de Microsoft Entra ID, RBAC et MFA pour sécuriser l'accès aux ressources critiques."
    },
    {
        title: "Sécurité Cloud & Hybride",
        icon: Cloud,
        desc: "Protection multicloud.",
        detail: "Utilisation de Defender for Cloud pour détecter et remédier aux vulnérabilités sur Azure et environnements hybrides."
    },
    {
        title: "Protection des Données",
        icon: ShieldCheck,
        desc: "Information Protection.",
        detail: "Classification et sécurisation des données sensibles avec Microsoft Purview Information Protection."
    },
    {
        title: "Surveillance (SIEM/SOAR)",
        icon: Eye,
        desc: "Visibilité 360°.",
        detail: "Intégration de Microsoft Sentinel pour une détection proactive et une réponse automatisée aux incidents."
    },
    {
        title: "Conformité & Risques",
        icon: Scale,
        desc: "Normes internationales.",
        detail: "Architecture alignée sur ISO 27001, Loi 25 et RGPD avec évaluation continue des risques."
    },
    {
        title: "Optimisation Cloud",
        icon: Zap,
        desc: "Performance & Coûts.",
        detail: "Analyse des workloads pour maximiser l'efficacité et la sécurité tout en optimisant les ressources."
    },
    {
        title: "Culture Sécurité",
        icon: GraduationCap,
        desc: "Formation continue.",
        detail: "Programmes de sensibilisation pour vos équipes afin de réduire les risques liés au facteur humain."
    }
];

export default function SecurityArchitecturePage() {
    return (
        <main className="min-h-screen bg-white">

            {/* Navigation Bar Placeholder */}
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#092963]">
                {/* Background Image / Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/security-architecture.jpg"
                        alt="Security Architecture Blueprints"
                        fill
                        className="object-cover opacity-30 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] via-[#092963]/90 to-[#0f3475]/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092963] to-transparent" />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            ARCHITECTURE DE SÉCURITÉ
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Concevez une Architecture <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                                Résiliente et Évolutive
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Bâtissez des fondations solides pour votre transformation numérique. Nous concevons des infrastructures sécurisées basées sur les meilleures pratiques Microsoft et les standards de l'industrie.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="rounded-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center">
                                Demander un audit d'architecture
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-5xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#092963] mb-6">
                        Une sécurité intégrée dès la conception
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg">
                        Chez Technologies MS Core, nous ne nous contentons pas d'ajouter de la sécurité ; nous l'intégrons au cœur de votre architecture. En utilisant des outils éprouvés comme Azure Security Center, Microsoft Sentinel et Defender for Cloud, nous créons des environnements capables de résister aux menaces modernes.
                    </p>
                </div>
            </section>

            {/* Features Cloud Grid */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-[#eb7e2a] font-bold tracking-wider text-sm uppercase">Caractéristiques Clés</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#092963] mt-3 mb-6">
                            Les piliers de votre sécurité
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-cyan-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 text-[#092963] group-hover:bg-[#092963] group-hover:text-white transition-colors duration-300">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#092963] mb-3 group-hover:text-cyan-600 transition-colors">{feature.title}</h3>
                                <p className="text-gray-700 font-medium mb-3">{feature.desc}</p>
                                <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                                    {feature.detail}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us & Benefits Section */}
            <section className="py-20 px-4 bg-[#092963] text-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-cyan-400 font-bold tracking-wider text-sm uppercase mb-2 block">Avantages stratégiques</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">Pourquoi repenser votre architecture ?</h2>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-400/30">
                                            <CheckCircle2 className="w-5 h-5 text-cyan-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Résilience Accrue</h3>
                                        <p className="text-blue-100 text-sm leading-relaxed">Une infrastructure conçue pour anticiper, résister et se remettre rapidement des cyberattaques.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-400/30">
                                            <CheckCircle2 className="w-5 h-5 text-cyan-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Conformité Simplifiée</h3>
                                        <p className="text-blue-100 text-sm leading-relaxed">Répondez sans effort aux exigences réglementaires grâce à une conception alignée sur les standards (ISO, RGPD).</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-400/30">
                                            <CheckCircle2 className="w-5 h-5 text-cyan-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Optimisation des Coûts</h3>
                                        <p className="text-blue-100 text-sm leading-relaxed">Réduisez vos dépenses en sécurité en tirant parti des outils natifs Microsoft déjà inclus dans vos licences.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-6 text-center">L'expertise MS Core</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-[#092963]/50 p-4 rounded-xl border border-white/5">
                                    <h4 className="font-bold text-cyan-300 mb-2">Certifications</h4>
                                    <p className="text-xs text-blue-100">SC-100 (Architecte), AZ-500 (Azure Security), SC-200 (Ops Analyst).</p>
                                </div>
                                <div className="bg-[#092963]/50 p-4 rounded-xl border border-white/5">
                                    <h4 className="font-bold text-cyan-300 mb-2">Sur Mesure</h4>
                                    <p className="text-xs text-blue-100">Solutions adaptées à votre taille, votre secteur et vos contraintes spécifiques.</p>
                                </div>
                                <div className="bg-[#092963]/50 p-4 rounded-xl border border-white/5">
                                    <h4 className="font-bold text-cyan-300 mb-2">Intégration</h4>
                                    <p className="text-xs text-blue-100">Maîtrise totale de l'écosystème Microsoft pour une protection sans faille.</p>
                                </div>
                                <div className="bg-[#092963]/50 p-4 rounded-xl border border-white/5">
                                    <h4 className="font-bold text-cyan-300 mb-2">Stratégie</h4>
                                    <p className="text-xs text-blue-100">Une vision proactive alignée sur vos objectifs d'affaires.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#092963] mb-6">
                        Sécurisez vos fondations dès aujourd'hui
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Ne laissez pas une architecture vulnérable compromettre votre avenir. Discutez avec nos architectes de sécurité certifiés.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#092963] text-white px-8 py-4 text-lg font-bold hover:bg-[#0f3475] transition-all shadow-lg hover:shadow-xl hover:scale-105">
                            Obtenir une consultation gratuite
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
