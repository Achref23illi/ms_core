'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, ShieldCheck, Search, Lock, Cloud, Eye, CheckCircle2, UserCheck, GraduationCap, FileSearch, Server } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/app/components';

// Services Data
const services = [
    {
        title: "Diagnostic de cybersécurité",
        icon: Search,
        href: "/services/security/diagnostic",
        desc: "Évaluez le niveau réel de sécurité de votre organisation.",
        detail: "Nous analysons votre posture de cybersécurité afin d’identifier les vulnérabilités, les failles organisationnelles et les risques prioritaires."
    },
    {
        title: "Tests d’intrusion",
        icon: Lock,
        href: "/services/security/penetration-testing",
        desc: "Testez la résistance de vos systèmes face à des attaques réelles.",
        detail: "Nos experts simulent des cyberattaques contrôlées sur vos réseaux, applications et infrastructures afin d’identifier les failles exploitables."
    },
    {
        title: "Architecture de sécurité",
        icon: ShieldCheck,
        href: "/services/security/architecture",
        desc: "Concevez une infrastructure résiliente dès la base.",
        detail: "Nous concevons des architectures sécurisées alignées sur le Microsoft Cloud Adoption Framework (CAF) et les meilleures pratiques."
    },
    {
        title: "Sécurité des réseaux",
        icon: Cloud, // using Cloud icon as placeholder specific network icon might be needed or reused
        href: "/services/security/network",
        desc: "Protégez votre infrastructure et vos accès.",
        detail: "Pare-feu nouvelle génération, segmentation réseau (Zero Trust) et sécurisation des accès distants (VPN/ZTNA)."
    },
    {
        title: "Sécurité Cloud",
        icon: Cloud,
        href: "/services/security/cloud",
        desc: "Sécurisez vos environnements Microsoft 365 et Azure.",
        detail: "Protection des identités, des données et des applications dans le cloud avec une configuration optimale."
    },
    {
        title: "Sécurité Azure",
        icon: Server, // differentiating from general cloud
        href: "/services/security/azure",
        desc: "Expertise pointue sur l'écosystème Azure.",
        detail: "Implémentation de Defender for Cloud, Sentinel et Azure Policy pour une conformité et une sécurité maximale."
    },
    {
        title: "Surveillance de sécurité",
        icon: Eye,
        href: "/services/security/monitoring",
        desc: "Détection et réponse aux incidents 24/7.",
        detail: "Surveillance continue de vos alertes, chasse aux menaces (Threat Hunting) et intervention rapide en cas d'incident."
    },
    {
        title: "Audit et conformité",
        icon: CheckCircle2,
        href: "/services/security/compliance",
        desc: "Respectez les normes (ISO 27001, Loi 25).",
        detail: "Accompagnement complet pour vos audits de conformité, gestion des risques et alignement réglementaire."
    },
    {
        title: "Test d’hameçonnage",
        icon: UserCheck,
        href: "/services/security/phishing",
        desc: "Sensibilisez vos utilisateurs par la pratique.",
        detail: "Campagnes de simulation de phishing pour tester et éduquer vos collaborateurs face aux techniques d'ingénierie sociale."
    },
    {
        title: "Cyberenquête (Forensics)",
        icon: FileSearch,
        href: "/services/security/investigation",
        desc: "Cyberenquête après incident.",
        detail: "Collecte de preuves, analyse post-mortem et support juridique suite à une fraude ou une intrusion."
    },
    {
        title: "Formation et sensibilisation",
        icon: GraduationCap,
        href: "/services/security/training",
        desc: "Développez une culture de sécurité humaine.",
        detail: "Programmes de formation adaptés (utilisateurs, TI, direction) pour réduire le risque humain durablement."
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
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#092963]/90 z-10" />
                    <img
                        src="/images/service-cybersecurity.png"
                        alt="Security Background"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                </div>

                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-10" />

                <div className="container mx-auto max-w-6xl relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eb7e2a]/20 border border-[#eb7e2a]/30 text-[#eb7e2a] font-bold tracking-wider text-xs mb-6 backdrop-blur-sm">
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
                            <Link href={service.href} key={index} className="block h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:border-[#eb7e2a]/30 transition-all duration-300 h-full flex flex-col"
                                >
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#092963] group-hover:bg-[#eb7e2a] group-hover:text-white transition-colors duration-300 shrink-0">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#092963] mb-3 group-hover:text-[#eb7e2a] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700 font-medium mb-3 shrink-0">
                                        {service.desc}
                                    </p>
                                    <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4 mt-auto">
                                        {service.detail}
                                    </p>
                                </motion.div>
                            </Link>
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

            <Footer />
        </main>
    );
}
