'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, Rocket, Cloud, Shield, Server, Headphones, Settings, Lock, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/app/components';

// Services Data
const services = [
    {
        title: "Intégration et déploiement",
        icon: Rocket,
        desc: "Modernisez votre environnement de travail en toute simplicité.",
        detail: "Déploiement expert de Microsoft 365 et Power Platform pour booster la collaboration."
    },
    {
        title: "Migration vers le cloud",
        icon: Cloud,
        desc: "Passez au cloud en toute confiance et sécurité.",
        detail: "Migration fluide de vos systèmes et données vers le cloud Microsoft avec interruption minimale."
    },
    {
        title: "Infrastructures sécurisées",
        icon: Server,
        desc: "Des fondations cloud robustes et évolutives.",
        detail: "Conception d'architectures résilientes incluant réseau, sauvegarde et reprise après sinistre."
    },
    {
        title: "Sécurisation des accès",
        icon: Lock,
        desc: "Protégez vos utilisateurs et vos données critiques.",
        detail: "Mise en place de politiques de sécurité strictes, contrôles d'accès et protection des données."
    },
    {
        title: "Optimisation et gestion",
        icon: Zap,
        desc: "Tirez le maximum de valeur de vos investissements.",
        detail: "Gestion proactive pour améliorer les performances et maîtriser vos coûts cloud."
    },
    {
        title: "Support et conseil",
        icon: Headphones,
        desc: "Un accompagnement fiable au quotidien.",
        detail: "Assistance technique et conseils stratégiques pour faire évoluer votre environnement IT."
    }
];

export default function Microsoft365Page() {
    return (
        <main className="min-h-screen bg-white">

            {/* Navigation Bar Placeholder */}
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                {/* Background Image / Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#092963]/80 mix-blend-multiply z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092963] to-transparent z-10" />
                    <Image
                        src="/images/service-microsoft.png"
                        alt="Microsoft 365 Background"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-20 text-center pt-32 md:pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            SOLUTIONS CLOUD & MODERN WORK
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Travaillez plus vite, plus intelligemment<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                et en toute sécurité
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Votre partenaire Microsoft pour moderniser votre entreprise avec des solutions cloud innovantes, sécurisées et performantes.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-blue-500/20 transition-all">
                                Moderniser mon IT
                            </Link>
                            <Link href="#details" className="inline-flex items-center justify-center rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-[#092963] backdrop-blur-sm px-6 py-2 text-sm font-medium transition-all">
                                En savoir plus
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section id="details" className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-5xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#092963] mb-6">
                        Une transformation numérique sécurisée et performante
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg">
                        Nous accompagnons les organisations dans l'intégration de solutions Microsoft et cloud pour améliorer la collaboration, la productivité et la sécurité, tout en assurant une gestion fluide et optimisée de vos infrastructures.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-[#eb7e2a] font-bold tracking-wider text-sm uppercase">Nos Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#092963] mt-3 mb-6">
                            Solutions Microsoft Complètes
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

            {/* CTA Section */}
            <section className="py-24 px-4 bg-[#092963] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/circuit-board.svg')] bg-center bg-no-repeat bg-cover mix-blend-overlay"></div>
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Passez au cloud en toute confiance
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Nos experts certifiés vous guident vers une infrastructure moderne, sécurisée et évolutive.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] text-white px-8 py-4 text-lg font-bold hover:bg-[#eb7e2a]/90 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                            Demander une consultation
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
