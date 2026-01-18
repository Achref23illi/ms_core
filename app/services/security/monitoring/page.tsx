'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, ShieldAlert, Lock, Eye, Activity, Workflow, Database, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Services Data
const services = [
    {
        title: "SOC 24/7 (Sentinel)",
        icon: Activity,
        desc: "Surveillance continue et intelligente.",
        detail: "Utilisation de Microsoft Sentinel pour une détection proactive des menaces 24/7 et une remédiation rapide."
    },
    {
        title: "Défense Renforcée",
        icon: ShieldAlert,
        desc: "Protection multicouche complète.",
        detail: "Microsoft Defender protège vos endpoints, courriels et identités contre les malwares et ransomwares."
    },
    {
        title: "Gestion des Données",
        icon: Database,
        desc: "Sécurisez vos informations sensibles.",
        detail: "Microsoft Purview assure la classification et la protection de vos données, où qu'elles soient."
    },
    {
        title: "Services Gérés",
        icon: Eye,
        desc: "Tranquillité d'esprit totale.",
        detail: "Gestion complète des alertes, reporting détaillé et recommandations stratégiques par nos experts."
    },
    {
        title: "Détection Avancée",
        icon: Lock,
        desc: "L'IA au service de votre sécurité.",
        detail: "Identification des menaces complexes grâce à l'intelligence artificielle et au Threat Intelligence mondial."
    },
    {
        title: "Automatisation",
        icon: Workflow,
        desc: "Réponse aux incidents accélérée.",
        detail: "Orchestration des réponses avec Microsoft Logic Apps pour neutraliser les attaques en temps réel."
    }
];

export default function SecurityMonitoringPage() {
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
                        src="/images/security-monitoring-new.jpg"
                        alt="Security Monitoring Background"
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

                        <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 border border-red-400/30 text-red-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            CYBERSÉCURITÉ AVANCÉE
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Surveillance de Sécurité <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">
                                Basée sur Microsoft
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Assurez la protection de votre entreprise avec une visibilité complète, une détection proactive et une réponse rapide aux incidents 24/7.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button className="rounded-full bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-red-500/20">
                                Sécuriser mon entreprise
                            </Button>
                            <Button className="rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-[#092963] backdrop-blur-sm px-6 py-2 text-sm font-medium transition-all">
                                En savoir plus
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-5xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#092963] mb-6">
                        Expertise et outils de pointe pour votre sécurité
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg">
                        Nous combinons l'expertise de nos spécialistes certifiés avec la puissance des solutions Microsoft (Sentinel, Defender, Purview) pour offrir une protection inégalée contre les cybermenaces modernes.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-[#eb7e2a] font-bold tracking-wider text-sm uppercase">Nos Services Inclus</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#092963] mt-3 mb-6">
                            Une approche globale de la sécurité
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
                                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-red-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-[#092963] group-hover:bg-[#092963] group-hover:text-white transition-colors duration-300">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#092963] mb-3 group-hover:text-red-600 transition-colors">{service.title}</h3>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi Choisir Technologies MS Core ?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <CheckCircle2 className="w-10 h-10 text-red-400 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Expertise Certifiée</h3>
                            <p className="text-blue-100">Nos spécialistes détiennent les certifications SC-100, AZ-500 et SC-200, garantissant une maîtrise totale des technologies Microsoft.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <CheckCircle2 className="w-10 h-10 text-red-400 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Partenariat Microsoft</h3>
                            <p className="text-blue-100">Notre statut de partenaire nous permet de tirer le meilleur parti des outils Sentinel, Defender et Purview pour votre entreprise.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <CheckCircle2 className="w-10 h-10 text-red-400 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Approche Personnalisée</h3>
                            <p className="text-blue-100">Des solutions sur mesure adaptées à vos besoins spécifiques, quelle que soit la taille ou le secteur de votre organisation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#092963] mb-6">
                        Prêt à sécuriser votre entreprise ?
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Ne laissez pas les cybermenaces compromettre votre activité. Contactez nos experts dès aujourd'hui.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#092963] text-white px-8 py-4 text-lg font-bold hover:bg-[#0f3475] transition-all shadow-lg hover:shadow-xl hover:scale-105">
                            Demander une consultation gratuite
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
