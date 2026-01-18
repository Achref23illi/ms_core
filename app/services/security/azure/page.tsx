'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, ShieldCheck, Cloud, Lock, Server, GraduationCap, Network, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Services Data based on extracted content
const services = [
    {
        title: "Architecture Cloud Azure",
        icon: Cloud,
        desc: "Fondations solides pour le cloud.",
        detail: "Audit complet, planification de l'adoption (CAF) et conception d'architectures robustes avec gouvernance Azure Policy."
    },
    {
        title: "Install & Config",
        icon: Server,
        desc: "Déploiement des solutions Microsoft.",
        detail: "Mise en place de Defender for Endpoint, Entra ID (SSO/MFA), et configuration unifiée avec Microsoft Defender XDR."
    },
    {
        title: "Gestion des Données",
        icon: ShieldCheck,
        desc: "Conformité et protection DLP.",
        detail: "Implémentation de Microsoft Purview et Azure Information Protection pour prévenir la fuite d'informations critiques."
    },
    {
        title: "Protection Réseau",
        icon: Network,
        desc: "Sécurité périmétrique avancée.",
        detail: "Déploiement d'Azure Firewall, protection DDoS et sécurisation des ressources cloud avec Defender for Cloud."
    },
    {
        title: "Surveillance Continue",
        icon: Lock,
        desc: "Gestion des menaces 24/7.",
        detail: "Suivi des incidents avec Microsoft Sentinel et gestion proactive des vulnérabilités pour réduire les risques."
    },
    {
        title: "Formation et Support",
        icon: GraduationCap,
        desc: "Accompagnement de vos équipes.",
        detail: "Sensibilisation aux meilleures pratiques en cybersécurité et support technique dédié pour vos besoins."
    }
];

export default function AzureSecurityPage() {
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
                        src="/images/azure-security.jpg"
                        alt="Azure Cloud Security Background"
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

                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            MICROSOFT AZURE SECURITY
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Services de Cybersécurité <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                avec Azure Security
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Protégez vos données, vos systèmes et vos utilisateurs avec une sécurité de pointe. Installation, configuration et gestion proactive pour une protection complète.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center">
                                Demander un audit gratuit
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-5xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#092963] mb-6">
                        Protégez votre entreprise avec une sécurité de pointe
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg">
                        Dans un monde où les cybermenaces évoluent constamment, la sécurité n'est pas une option. Nous sommes votre partenaire pour déployer les solutions de sécurité Microsoft et garantir une résilience totale face aux attaques.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-[#eb7e2a] font-bold tracking-wider text-sm uppercase">Nos Domaines d'Intervention</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#092963] mt-3 mb-6">
                            Solutions de Sécurité Complètes
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#092963] group-hover:bg-[#092963] group-hover:text-white transition-colors duration-300">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#092963] mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                                <p className="text-gray-700 font-medium mb-3">{service.desc}</p>
                                <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                                    {service.detail}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 px-4 bg-[#092963] text-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi nous faire confiance ?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <CheckCircle2 className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-lg font-bold mb-3">Expertise Certifiée</h3>
                            <p className="text-blue-100 text-sm">SC-100, AZ-500, SC-900, SC-200. Nos consultants maîtrisent l'écosystème Microsoft Security.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <CheckCircle2 className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-lg font-bold mb-3">Protection Sur Mesure</h3>
                            <p className="text-blue-100 text-sm">Des solutions adaptées à vos spécificités sectorielles et à vos objectifs de croissance.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <CheckCircle2 className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-lg font-bold mb-3">Approche Proactive</h3>
                            <p className="text-blue-100 text-sm">Nous anticipons les menaces avant qu'elles ne surviennent pour réduire drastiquement les risques.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <CheckCircle2 className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-lg font-bold mb-3">Sérénité Garantie</h3>
                            <p className="text-blue-100 text-sm">Gestion continue de vos outils de sécurité pour que vous puissiez vous concentrer sur votre business.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#092963] mb-6">
                        Transformez vos défis de sécurité en opportunités
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Découvrez comment nous pouvons protéger vos actifs numériques tout en renforçant votre conformité.
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
