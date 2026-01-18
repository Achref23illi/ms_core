'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import {
    MapPin, Phone, Mail, ArrowRight, CheckCircle2,
    Briefcase, Users, GraduationCap, Clock,
    ChevronRight, ArrowLeft
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* Navigation Bar Placeholder - Consistent with other pages */}
            <div className="absolute top-28 left-6 z-50">
                <Link href="/" className="inline-flex items-center gap-2 text-[#092963] hover:text-[#eb7e2a] transition-colors bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm">
                    <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/careers-hero.jpg"
                        alt="Équipe collaborative technologies ms core"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#092963]/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092963] via-transparent to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-[#eb7e2a]/20 text-[#eb7e2a] font-bold tracking-wider text-xs mb-6 border border-[#eb7e2a]/30 backdrop-blur-sm">
                            REJOIGNEZ-NOUS
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                            Transformez votre carrière avec <span className="text-[#eb7e2a]">Technologies MS Core</span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-10">
                            Rejoignez une équipe qui valorise votre talent, innove avec Microsoft et sécurise l'avenir numérique des entreprises.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-[#eb7e2a] hover:bg-[#d66c1b] text-white rounded-full px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                                onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Voir les postes ouverts <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us / Company DNA */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[#092963] leading-tight">
                                Plus qu'un emploi, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#092963] to-[#eb7e2a]">
                                    une mission d'impact.
                                </span>
                            </h2>
                            <div className="prose prose-lg text-gray-600 space-y-4">
                                <p>
                                    Technologies MS Core est une entreprise technologique fondée en 2020 à Lévis, Québec. Depuis nos débuts, nous combinons la puissance de Microsoft, l'IA et la cybersécurité pour transformer les organisations.
                                </p>
                                <p>
                                    Notre récente expansion en <strong>Côte d’Ivoire (Abidjan)</strong> ouvre de nouvelles perspectives passionnantes. En nous rejoignant, vous participez à des projets d'envergure, tant au Canada qu'en Afrique de l'Ouest, avec une équipe qui allie expertise internationale et compréhension locale.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                <div className="space-y-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#eb7e2a]/30 transition-colors">
                                    <Clock className="w-8 h-8 text-[#eb7e2a]" />
                                    <h3 className="font-bold text-[#092963]">Flexibilité</h3>
                                    <p className="text-sm text-gray-600">Conciliation travail-famille et télétravail pour un équilibre sain.</p>
                                </div>
                                <div className="space-y-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#eb7e2a]/30 transition-colors">
                                    <Users className="w-8 h-8 text-[#eb7e2a]" />
                                    <h3 className="font-bold text-[#092963]">Collaboration</h3>
                                    <p className="text-sm text-gray-600">Une culture d'entraide où l'on ne travaille jamais seul.</p>
                                </div>
                                <div className="space-y-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#eb7e2a]/30 transition-colors">
                                    <GraduationCap className="w-8 h-8 text-[#eb7e2a]" />
                                    <h3 className="font-bold text-[#092963]">Formation</h3>
                                    <p className="text-sm text-gray-600">Formation continue payée et certifications Microsoft financées.</p>
                                </div>
                                <div className="space-y-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#eb7e2a]/30 transition-colors">
                                    <Briefcase className="w-8 h-8 text-[#eb7e2a]" />
                                    <h3 className="font-bold text-[#092963]">Croissance</h3>
                                    <p className="text-sm text-gray-600">Opportunités claires d'avancement et de promotion interne.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#092963]/10 to-[#eb7e2a]/10 rounded-3xl transform rotate-3" />
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-200">
                                {/* Use the same hero image for now, cropped differently, or a solid color block if appropriate */}
                                <Image
                                    src="/images/careers-hero.jpg" // Using the careers hero as the culture image for now
                                    alt="Culture d'entreprise"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[#092963]/20 mix-blend-overlay" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Job Positions Area */}
            <section id="positions" className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-[#eb7e2a] font-bold tracking-wider text-sm uppercase">Opportunités</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#092963] mt-3">
                            Postes disponibles
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Rejoignez nos experts et contribuez à des projets innovants.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Job Card 1 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-all"
                        >
                            <div className="space-y-3">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#092963] font-semibold text-xs border border-blue-100">
                                    Sécurité & Cloud
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-[#092963]">Spécialiste en Outils de Sécurité Microsoft M365</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Lévis / Abidjan / Hybride</div>
                                    <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> Temps plein</div>
                                </div>
                            </div>
                            <Button className="bg-white text-[#092963] border-2 border-[#092963] hover:bg-[#092963] hover:text-white rounded-full px-6 transition-colors whitespace-nowrap">
                                Postuler <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                        </motion.div>

                        {/* Job Card 2 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-all"
                        >
                            <div className="space-y-3">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#092963] font-semibold text-xs border border-blue-100">
                                    Identité & Accès
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-[#092963]">Spécialiste en Gestion des Identités et des Accès (IAM)</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Lévis / Abidjan / Hybride</div>
                                    <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> Temps plein</div>
                                </div>
                            </div>
                            <Button className="bg-white text-[#092963] border-2 border-[#092963] hover:bg-[#092963] hover:text-white rounded-full px-6 transition-colors whitespace-nowrap">
                                Postuler <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                        </motion.div>

                        {/* Spontaneous Application */}
                        <div className="bg-[#092963] rounded-2xl p-8 md:p-10 text-white text-center mt-8">
                            <h3 className="text-2xl font-bold mb-4">Aucun poste ne correspond à votre profil ?</h3>
                            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
                                Nous sommes toujours à la recherche de talents exceptionnels. Envoyez-nous une candidature spontanée et dites-nous comment vous pouvez faire la différence.
                            </p>
                            <Button className="bg-[#eb7e2a] hover:bg-[#d66c1b] text-white rounded-full px-8 py-6 h-auto text-lg hover:scale-105 transition-transform">
                                Envoyer une candidature spontanée
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recruitment Process */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#092963]">Notre processus de recrutement</h2>
                        <p className="text-gray-600 mt-2">Simple, transparent et humain.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Candidature", desc: "Envoyez votre CV et lettre de motivation via notre formulaire ou par courriel." },
                            { step: "02", title: "Entretien", desc: "Une discussion personnalisée pour comprendre vos aspirations et compétences." },
                            { step: "03", title: "Test Technique", desc: "Une évaluation pratique (si applicable) pour valider vos connaissances." },
                            { step: "04", title: "Offre", desc: "Une proposition sur mesure pour démarrer votre aventure avec nous." }
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 pt-12 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#eb7e2a]/30 transition-colors text-center md:text-left group">
                                <div className="absolute top-0 left-1/2 md:left-6 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 bg-white text-[#eb7e2a] font-black text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-[#eb7e2a]">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-[#092963] mb-3 group-hover:text-[#eb7e2a] transition-colors">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Contact Reminder */}
            <section className="py-20 px-4 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto max-w-4xl text-center space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#092963]">Prêt à nous rejoindre ?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#092963]">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Envoyez votre CV</p>
                                <a href="mailto:info@techmscore.com" className="text-lg font-bold text-[#092963] hover:text-[#eb7e2a] transition-colors">info@techmscore.com</a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#092963]">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Appelez-nous</p>
                                <a href="tel:5146092990" className="text-lg font-bold text-[#092963] hover:text-[#eb7e2a] transition-colors">514 609 2990</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
