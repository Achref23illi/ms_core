'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, CheckCircle2, Zap, BarChart, Users, Building, Stethoscope, GraduationCap, Briefcase, Calculator, Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Industry Data
const industries = [
    {
        title: "Cabinets d'Avocats",
        icon: Briefcase,
        desc: "Transformez la gestion de vos dossiers juridiques.",
        bullets: [
            "Automatisation de la gestion des dossiers clients",
            "Suivi des heures facturables et facturation",
            "Optimisation des relances clients",
            "Accès aux données en temps réel"
        ]
    },
    {
        title: "Cabinets d’Expertise Comptable",
        icon: Calculator,
        desc: "Automatisez vos tâches comptables et financières.",
        bullets: [
            "Gestion simplifiée des clients et documents",
            "Facturation et relances automatisées",
            "Saisie rapide et sans erreur",
            "Rappels des échéances fiscales"
        ]
    },
    {
        title: "Services Professionnels",
        icon: Users,
        desc: "Optimisez vos projets et vos relations clients.",
        bullets: [
            "Gestion centralisée des projets et missions",
            "Suivi du temps facturable",
            "Facturation automatisée",
            "Analyse des performances"
        ]
    },
    {
        title: "Agences Immobilières",
        icon: Home,
        desc: "Simplifiez la gestion de vos biens et clients.",
        bullets: [
            "Centralisation des biens et acquéreurs",
            "Rappels automatisés pour les visites",
            "Rapports de ventes détaillés",
            "Suivi des transactions"
        ]
    },
    {
        title: "Cliniques Médicales",
        icon: Stethoscope,
        desc: "Gagnez du temps pour ce qui compte : vos patients.",
        bullets: [
            "Gestion sécurisée des dossiers patients",
            "Rappels de rendez-vous automatisés",
            "Analyse de l'activité de la clinique",
            "Conformité et sécurité des données"
        ]
    },
    {
        title: "Architecture & Design",
        icon: Building,
        desc: "Livrez vos projets avec précision et rentabilité.",
        bullets: [
            "Planification et suivi budgétaire des projets",
            "Gestion documentaire centralisée",
            "Analyse des coûts et délais",
            "Automatisation des relances"
        ]
    },
    {
        title: "Formation & Éducation",
        icon: GraduationCap,
        desc: "Simplifiez vos inscriptions et l'expérience apprenant.",
        bullets: [
            "Gestion fluide des inscriptions",
            "Automatisation des rappels de sessions",
            "Suivi des performances et présences",
            "Centralisation des ressources pédagogiques"
        ]
    }
];

export default function DynamicsPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* Navigation Bar Placeholder (if global header isn't sufficient) */}
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
                        src="/images/dynamics365.png"
                        alt="Microsoft Dynamics 365 Background"
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
                        <div className="relative w-32 h-32 mx-auto mb-6 animate-float">
                            <Image
                                src="/images/dynamics365.png"
                                alt="Microsoft Dynamics 365 & Power Platform"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>

                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            PARTENAIRE MICROSOFT
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Transformez vos opérations <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb7e2a] to-orange-300">
                                Dynamics 365 & Power Platform
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Quel que soit votre domaine d’activité, révolutionnez votre manière de travailler avec des solutions innovantes conçues pour automatiser, analyser et optimiser.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button className="rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20">
                                Transformer mon entreprise
                            </Button>
                            <Button className="rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-[#092963] backdrop-blur-sm px-6 py-2 text-sm font-medium transition-all">
                                En savoir plus
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-[#092963]">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#092963] mb-4">Power Platform</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Des outils simples et puissants pour automatiser les tâches répétitives, analyser les données en temps réel et créer des applications personnalisées, le tout sans nécessiter de compétences complexes en programmation.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
                        >
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-[#eb7e2a]">
                                <BarChart className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-4">Dynamics 365</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Une combinaison intelligente d'outils de gestion d’entreprise (ERP) et de relations clients (CRM) pour centraliser vos opérations, optimiser vos processus et améliorer considérablement la satisfaction client.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Industry Use Cases */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-[#eb7e2a] font-bold tracking-wider text-sm uppercase">Secteurs D'activité</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#092963] mt-3 mb-6">
                            Solutions adaptées à votre réalité
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Découvrez comment nos services peuvent être adaptés spécifiquement à votre secteur pour maximiser vos performances.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                            >
                                <div className="mb-6 flex items-center justify-between">
                                    <div className="p-3 rounded-lg bg-[#092963]/5 text-[#092963] group-hover:bg-[#eb7e2a] group-hover:text-white transition-colors duration-300">
                                        <industry.icon className="w-6 h-6" />
                                    </div>
                                    <div className="h-px flex-1 bg-gray-100 ml-4 group-hover:bg-[#eb7e2a]/20 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#eb7e2a] transition-colors">{industry.title}</h3>
                                <p className="text-gray-500 text-sm mb-6 font-medium">{industry.desc}</p>

                                <ul className="space-y-3">
                                    {industry.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                                            <CheckCircle2 className="w-4 h-4 text-[#eb7e2a] mt-0.5 shrink-0" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-[#092963] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#eb7e2a]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Prêt à passer au niveau supérieur ?
                    </h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Nos experts certifiés sont prêts à vous accompagner dans la transformation numérique de votre entreprise.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-[#092963] px-8 py-4 text-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                            Demander une consultation
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
