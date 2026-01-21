'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Building2, Globe, ShieldCheck } from 'lucide-react';
import { ContactSection, Footer, CertificationsBadges } from '@/app/components';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 bg-gray-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 -skew-x-12 translate-x-32 z-0 opacity-50 pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-[#eb7e2a]/10 text-[#eb7e2a] font-bold tracking-wider text-xs mb-6 border border-[#eb7e2a]/20">
                            CONTACTEZ-NOUS
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#092963] mb-6 leading-tight">
                            Parlons de votre projet
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Nos équipes au <span className="text-[#092963] font-semibold">Canada</span> et en <span className="text-[#092963] font-semibold">Côte d'Ivoire</span> sont prêtes à vous accompagner.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Qui sommes-nous & Expansion Content */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Qui sommes-nous */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="p-3 bg-blue-50 w-fit rounded-xl text-[#092963] mb-2">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-[#092963]">Qui sommes-nous?</h2>
                            <div className="prose prose-lg text-gray-600 leading-relaxed text-base">
                                <p className="mb-4">
                                    Technologies MS Core est une entreprise technologique fondée en 2020 à Lévis (Québec) au Canada, spécialisée dans l'accompagnement des organisations vers une transformation numérique sécurisée, performante et orientée résultats.
                                </p>
                                <p>
                                    Depuis nos débuts, nous aidons les entreprises à tirer pleinement parti du potentiel des technologies modernes en combinant l’expertise Microsoft, des solutions cloud innovantes, l’intelligence artificielle, ainsi que des services de cybersécurité de pointe. Notre objectif est de permettre à nos clients d’accroître leur efficacité, renforcer leur sécurité et accélérer leur croissance, tout en assurant l’agilité et la résilience de leurs opérations.
                                </p>
                            </div>
                        </motion.div>

                        {/* Expansion Côte d'Ivoire */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#092963] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                        <Globe className="w-6 h-6 text-[#eb7e2a]" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Notre expansion en Côte d’Ivoire</h3>
                                </div>
                                <div className="text-blue-100 leading-relaxed space-y-4">
                                    <p>
                                        En réponse à la demande croissante de services technologiques avancés en Afrique de l’Ouest, Technologies MS Core a étendu ses activités en Côte d’Ivoire avec une filiale dédiée.
                                    </p>
                                    <p>
                                        Cette expansion nous permet d'être plus près des organisations locales, qu'elles soient publiques ou privées, évoluant notamment dans les secteurs de la finance, de l'industrie, de l'énergie, du commerce, des services, de la santé, de l'éducation et des infrastructures critiques, afin de répondre à l'ensemble de leurs besoins technologiques.
                                    </p>
                                    <p className="text-sm border-t border-white/10 pt-4 mt-4">
                                        Implantée à Abidjan, notre équipe locale combine la rigueur des standards internationaux avec une compréhension profonde du contexte économique et réglementaire ivoirien.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto max-w-6xl text-center">
                    <CertificationsBadges />
                </div>
            </section>

            {/* Reused Contact Section (Form & Locations) */}
            <ContactSection />

            <Footer />
        </main>
    );
}
