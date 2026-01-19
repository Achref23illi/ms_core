'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, Scale, FileCheck, ShieldCheck, BookOpen, UserCheck, Server, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Services Data
const services = [
    {
        title: "Conformité Loi 25",
        icon: Scale,
        desc: "Respectez les exigences légales.",
        detail: "Analyse des écarts, mise à jour des politiques et gouvernance des données pour la Loi 25."
    },
    {
        title: "Certification ISO 27001",
        icon: ShieldCheck,
        desc: "Standard international de sécurité.",
        detail: "Mise en place d'un SMSI, préparation à l'audit et gestion continue de la sécurité de l'information."
    },
    {
        title: "Analyse des Risques",
        icon: FileCheck,
        desc: "Identifiez et gérez vos vulnérabilités.",
        detail: "Évaluation complète des risques et diagnostic de conformité adaptés à votre secteur."
    },
    {
        title: "Politiques de Protection",
        icon: BookOpen,
        desc: "Encadrez la gestion des données.",
        detail: "Élaboration de politiques claires et formation des employés aux meilleures pratiques de confidentialité."
    },
    {
        title: "Gestion des Incidents",
        icon: Server,
        desc: "Réagissez efficacement.",
        detail: "Procédures de détection et de signalement des incidents à la Commission d'accès à l'information (CAI)."
    },
    {
        title: "Technologies de Sécurité",
        icon: UserCheck,
        desc: "Outils avancés Microsoft.",
        detail: "Déploiement de Microsoft Purview et Azure Information Protection pour sécuriser vos données sensibles."
    }
];

export default function CompliancePage() {
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
                        src="/images/compliance-audit.jpg"
                        alt="Compliance Audit Background"
                        fill
                        className="object-cover opacity-20 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] via-[#092963]/95 to-[#0f3475]/90 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092963] to-transparent" />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            GOUVERNANCE & CONFORMITÉ
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Conformité Loi 25 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                et Norme ISO 27001
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Assurez la protection de vos données, respectez les exigences légales et renforcez la confiance de vos clients avec nos services d'experts.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-blue-500/20 transition-all">
                                Démarrer mon audit
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
                        Naviguez sereinement dans le paysage réglementaire
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg">
                        De la mise en conformité à la Loi 25 à l'obtention de la certification ISO 27001, nous vous accompagnons à chaque étape pour sécuriser vos actifs informationnels et garantir votre pérennité.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-[#eb7e2a] font-bold tracking-wider text-sm uppercase">Nos Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#092963] mt-3 mb-6">
                            Solutions de Conformité Complètes
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi Choisir Technologies MS Core ?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <CheckCircle2 className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Connaissance Locale</h3>
                            <p className="text-blue-100">Une expertise pointue des réglementations québécoises (Loi 25) et canadiennes pour une conformité sans faille.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <CheckCircle2 className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Technologies Avancées</h3>
                            <p className="text-blue-100">Utilisation des outils Microsoft Purview et de l'IA pour automatiser et renforcer votre posture de conformité.</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <CheckCircle2 className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Accompagnement Global</h3>
                            <p className="text-blue-100">De l'audit initial à la certification, nous sommes votre partenaire unique pour tous vos besoins en sécurité.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#092963] mb-6">
                        Passez à l'action dès aujourd'hui
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Ne laissez pas la complexité réglementaire ralentir votre croissance.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#092963] text-white px-8 py-4 text-lg font-bold hover:bg-[#0f3475] transition-all shadow-lg hover:shadow-xl hover:scale-105">
                            Demander un diagnostic gratuit
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
