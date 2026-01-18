'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, Sparkles, FileText, BarChart, Mail, Settings, GraduationCap, LifeBuoy, Workflow, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Feature Data
const features = [
    {
        title: "Automatisation des tâches",
        icon: Sparkles,
        desc: "Créez des rapports complexes, résumez des documents ou générez des courriels en quelques secondes.",
        detail: "Libérez-vous des tâches répétitives pour vous concentrer sur la valeur ajoutée."
    },
    {
        title: "Création de contenu",
        icon: FileText,
        desc: "Rédigez des présentations percutantes avec PowerPoint ou des rapports professionnels avec Word, guidé par l’IA.",
        detail: "Passez de l'idée à la réalisation en un temps record."
    },
    {
        title: "Analyse de données",
        icon: BarChart,
        desc: "Utilisez Copilot dans Excel pour analyser vos données, identifier des tendances et créer des graphiques.",
        detail: "Prenez des décisions éclairées basées sur des analyses instantanées."
    },
    {
        title: "Gestion intelligente",
        icon: Mail,
        desc: "Copilot dans Outlook organise vos courriels, suggère des réponses et propose des créneaux pour vos réunions.",
        detail: "Reprenez le contrôle de votre boîte de réception et de votre agenda."
    }
];

// Services Data
const services = [
    {
        title: "Configuration et intégration",
        icon: Settings,
        desc: "Déploiement de Microsoft Copilot dans votre environnement Microsoft 365."
    },
    {
        title: "Formation personnalisée",
        icon: GraduationCap,
        desc: "Formation des équipes pour exploiter pleinement les capacités de Copilot."
    },
    {
        title: "Support continu",
        icon: LifeBuoy,
        desc: "Assistance technique pour garantir une utilisation fluide et une adoption réussie."
    },
    {
        title: "Optimisation des workflows",
        icon: Workflow,
        desc: "Analyse de vos processus actuels pour intégrer Copilot de manière stratégique."
    }
];

export default function CopilotPage() {
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
                        src="/images/Copilot.png"
                        alt="Microsoft Copilot Background"
                        fill
                        className="object-cover opacity-20 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] via-[#092963]/90 to-[#4a1d96]/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092963] to-transparent" />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative w-32 h-32 mx-auto mb-6 animate-float">
                            <Image
                                src="/images/Copilot.png"
                                alt="Microsoft Copilot Logo"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>

                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            L'IA AU SERVICE DE VOTRE PRODUCTIVITÉ
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Révolutionnez votre travail avec <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                                Microsoft 365 Copilot
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Boostez votre efficacité et concentrez-vous sur ce qui compte grâce à l’intelligence artificielle intégrée à vos outils quotidiens.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button className="rounded-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-purple-500/20">
                                Découvrir Copilot
                            </Button>
                            <Button className="rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-[#092963] backdrop-blur-sm px-6 py-2 text-sm font-medium transition-all">
                                En savoir plus
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section - What Copilot can do */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-purple-600 font-bold tracking-wider text-sm uppercase">Fonctionnalités Clés</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#092963] mt-3 mb-6">
                            Ce que Copilot peut faire pour vous
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Transformez vos processus et maximisez votre productivité grâce à l'intégration native dans Microsoft 365.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all"
                            >
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-[#092963] mb-3">{feature.title}</h3>
                                <p className="text-gray-800 font-medium mb-2">{feature.desc}</p>
                                <p className="text-gray-500 text-sm">{feature.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Included Services Section */}
            <section className="py-20 px-4 bg-[#092963] text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
                        <div className="max-w-xl">
                            <span className="text-purple-300 font-bold tracking-wider text-sm uppercase">Nos Services Inclus</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
                                Une intégration réussie de A à Z
                            </h2>
                            <p className="text-blue-100">
                                En tant que partenaire expert, nous vous accompagnons à chaque étape pour garantir le succès de votre transformation IA.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium border border-white/10">Expertise Certifiée</div>
                            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg text-sm font-medium border border-white/10">Approche Personnalisée</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <service.icon className="w-8 h-8 text-purple-300 mb-4" />
                                <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                                <p className="text-sm text-blue-100 leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-white relative">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#092963] mb-6">
                        Prêt à libérer votre potentiel ?
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Faites passer votre entreprise au niveau supérieur avec Microsoft Copilot et l'expertise de Technologies MS Core.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#092963] text-white px-8 py-4 text-lg font-bold hover:bg-[#0f3475] transition-all shadow-lg hover:shadow-xl hover:scale-105">
                            Demander une consultation
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
