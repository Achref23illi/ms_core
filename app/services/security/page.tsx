'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, ShieldCheck, Search, Lock, Cloud, Eye, CheckCircle2, UserCheck, GraduationCap, FileSearch } from 'lucide-react';
import Link from 'next/link';

// Services Data
const services = [
    {
        title: "Diagnostic en cybersécurité",
        icon: Search,
        desc: "Évaluez le niveau réel de sécurité de votre organisation.",
        detail: "Nous analysons votre posture de cybersécurité afin d’identifier les vulnérabilités, les failles organisationnelles et les risques prioritaires. Ce diagnostic permet d’obtenir une vision claire de votre niveau de maturité et de définir un plan d’actions concret et priorisé."
    },
    {
        title: "Tests d’intrusion",
        icon: Lock,
        desc: "Testez la résistance de vos systèmes face à des attaques réelles.",
        detail: "Nos experts simulent des cyberattaques contrôlées sur vos réseaux, applications et infrastructures afin d’identifier les failles exploitables avant qu’elles ne le soient par des acteurs malveillants."
    },
    {
        title: "Sécurité cloud",
        icon: Cloud,
        desc: "Sécurisez vos environnements cloud et vos données critiques.",
        detail: "Nous accompagnons les organisations dans la sécurisation de leurs environnements cloud (Microsoft Azure, Microsoft 365, etc.) en corrigeant les mauvaises configurations et en renforçant les contrôles d’accès."
    },
    {
        title: "Surveillance et réponse (SOC)",
        icon: Eye,
        desc: "Détectez et réagissez rapidement aux cybermenaces.",
        detail: "Grâce à une surveillance continue 24/7, nous détectons les activités suspectes, analysons les alertes et intervenons rapidement pour contenir, éradiquer et corriger les incidents."
    },
    {
        title: "Audit et conformité",
        icon: CheckCircle2,
        desc: "Respectez les exigences réglementaires et normatives.",
        detail: "Nous réalisons des audits de sécurité et vous accompagnons vers la conformité ISO 27001, RGPD, PCI DSS et autres exigences locales ou sectorielles."
    },
    {
        title: "Test d’hameçonnage",
        icon: UserCheck,
        desc: "Réduisez les risques liés au facteur humain.",
        detail: "Nous menons des campagnes de phishing simulées afin d’évaluer le niveau de vigilance de vos employés et renforcer la sensibilisation pour diminuer les compromissions de comptes."
    },
    {
        title: "Cyberenquête et investigation",
        icon: FileSearch,
        desc: "Analysez et réagissez efficacement après un incident.",
        detail: "À la suite de fraudes, intrusions ou rançongiciels, nos experts collectent, préservent et analysent les preuves numériques pour identifier l'origine de l'attaque et soutenir vos démarches juridiques."
    },
    {
        title: "Formation et sensibilisation",
        icon: GraduationCap,
        desc: "Développez une culture de cybersécurité durable.",
        detail: "Nos programmes adaptés visent à réduire les incidents liés au facteur humain, renforcer les bons réflexes de sécurité et impliquer l’ensemble des employés dans la protection de l'information."
    }
];

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* Top Navigation */}
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-[#092963] hover:text-[#eb7e2a] transition-colors bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 bg-[#092963] overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[url('/circuit-board.svg')] opacity-5 mix-blend-overlay pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eb7e2a]/20 border border-[#eb7e2a]/30 text-[#eb7e2a] font-bold tracking-wider text-xs mb-6">
                            <ShieldCheck className="w-4 h-4" /> CYBERSÉCURITÉ
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Protégez ce qui compte le plus : <br />
                            <span className="text-[#eb7e2a]">vos informations.</span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed italic">
                            « Nous sécurisons votre entreprise contre les menaces modernes. »
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro / Value Prop */}
            <section className="py-16 px-4 bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-[#092963] mb-6">Une approche proactive de la sécurité</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Dans un monde numérique en constante évolution, la sécurité n'est pas une option.
                        Nous vous aidons à anticiper, détecter et neutraliser les menaces avant qu'elles n'impactent votre activité.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:border-[#eb7e2a]/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#092963] group-hover:bg-[#eb7e2a] group-hover:text-white transition-colors duration-300">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-[#092963] mb-3 group-hover:text-[#eb7e2a] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 font-medium mb-3 min-h-[3rem]">
                                    {service.desc}
                                </p>
                                <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                                    {service.detail}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-[#092963] text-white text-center">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6">Ne laissez aucune faille exploitable</h2>
                    <p className="text-blue-100 mb-8 text-lg">
                        Demandez un diagnostic de sécurité dès aujourd'hui et prenez une longueur d'avance sur les cybermenaces.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-8 py-4 text-lg font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all hover:scale-105">
                        Parler à un expert en sécurité
                    </Link>
                </div>
            </section>

        </main>
    );
}
