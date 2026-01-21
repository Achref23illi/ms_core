'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Brain, Bot, Lightbulb, Cpu, CheckCircle2, ArrowRight, Workflow } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/app/components';

const aiServices = [
    {
        title: "Conception et intégration de solutions IA",
        description: "Nous concevons et intégrons des solutions d'intelligence artificielle adaptées à vos besoins métier afin d'automatiser, optimiser et améliorer vos opérations.",
        icon: Cpu,
        href: '/services/ai/integration'
    },
    {
        title: "Chatbots et assistants virtuels",
        description: "Nous développons des chatbots et assistants virtuels capables de répondre aux demandes des clients et des employés, automatiser le support et réduire les délais de réponse.",
        icon: Bot,
        href: '/services/ai/chatbots'
    },
    {
        title: "Formation et accompagnement IA",
        description: "Nous offrons des formations et du conseil en intelligence artificielle afin d'aider vos équipes à comprendre, utiliser et encadrer l'IA de façon responsable et sécurisée.",
        icon: Lightbulb,
        href: '/services/ai/training'
    },
    {
        title: "Automatisation intelligente des processus",
        description: "Optimisez et automatisez vos processus métiers grâce à l’IA afin de réduire les tâches manuelles, améliorer la productivité et diminuer les coûts opérationnels.",
        icon: Workflow,
        href: '/services/ai/automation'
    }
];

export default function AIServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Navigation */}
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[70vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#092963]/80 z-10 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092963] via-transparent to-transparent z-10" />
                    <img
                        src="/images/service-ai.png"
                        alt="AI Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-20 text-center pt-32 md:pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            <Brain className="w-4 h-4" />
                            INTELLIGENCE ARTIFICIELLE
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Boostez votre entreprise avec la <span className="text-[#eb7e2a]">puissance de l'IA</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Nous intégrons l'IA au cœur de vos processus pour transformer vos données et vos processus en avantages compétitifs.
                        </p>
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-3 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                            Discuter de mon projet IA
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="details" className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">Nos services d'Intelligence Artificielle</h2>
                        <div className="max-w-3xl mx-auto space-y-6">
                            <p className="text-gray-600 leading-relaxed">
                                Nous concevons et intégrons des solutions d’intelligence artificielle adaptées à vos besoins métier afin d’automatiser, optimiser et améliorer vos opérations.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Nos approches sont pragmatiques, sécurisées et orientées vers des gains mesurables, vous permettant de rester compétitif dans un marché en constante évolution.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 pt-4">
                                {["Solutions sur mesure", "Automatisation des processus", "Approche sécurisée", "Aide à la décision et valorisation des données"].map((item) => (
                                    <span key={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-700 text-sm font-medium border border-violet-100">
                                        <CheckCircle2 className="w-4 h-4" /> {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {aiServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#092963] mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                                <Link
                                    href={service.href}
                                    className="inline-flex items-center gap-2 text-[#eb7e2a] font-semibold text-sm hover:gap-3 transition-all"
                                >
                                    En savoir plus <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#092963] mb-6">Pourquoi nous choisir pour votre projet IA ?</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#eb7e2a] mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-[#092963]">Approche pragmatique</h4>
                                        <p className="text-gray-600 text-sm">Solutions orientées vers des gains mesurables et concrets.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#eb7e2a] mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-[#092963]">Sécurité intégrée</h4>
                                        <p className="text-gray-600 text-sm">IA responsable et conforme aux exigences organisationnelles.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#eb7e2a] mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-[#092963]">Expertise Microsoft</h4>
                                        <p className="text-gray-600 text-sm">Intégration native avec l'écosystème Microsoft et Azure AI.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-80 rounded-2xl overflow-hidden bg-white shadow-xl">
                            <img
                                src="/images/service-ai.png"
                                alt="AI Concept"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#092963]">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Prêt à intégrer l'IA dans votre entreprise ?</h2>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">Discutons de vos besoins et découvrez comment l'intelligence artificielle peut transformer vos opérations.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-8 py-3 text-sm font-bold shadow-lg transition-all">
                        Demander une consultation
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
