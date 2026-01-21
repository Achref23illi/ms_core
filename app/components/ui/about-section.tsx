'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Award, Globe, ShieldCheck } from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { Button } from '@/app/components/ui/button';
import { CertificationsBadges } from '@/app/components/ui/certifications-badges';

export function AboutSection() {
    return (
        <section id="about" className="relative py-24 bg-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-32 z-0 pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10 px-4">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-[#eb7e2a]/10 text-[#eb7e2a] text-sm font-semibold tracking-wider mb-4 border border-[#eb7e2a]/20"
                    >
                        À PROPOS DE NOUS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-[#092963] mb-6 leading-tight"
                    >
                        Performance, Sécurité <br /> et Innovation
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Story & Expansion */}
                    <div className="space-y-12">

                        {/* Who we are */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-[#092963] rounded-lg text-white">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Notre Histoire</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Fondée en <span className="font-semibold text-[#092963]">2020 à Lévis, Québec</span>, Technologies MS Core se spécialise dans l’accompagnement des organisations vers une transformation numérique sécurisée et performante.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg mt-4">
                                Depuis nos débuts, nous combinons l’expertise Microsoft, l'IA et la cybersécurité pour aider nos clients à accroître leur efficacité et renforcer leur résilience opérationnelle.
                            </p>
                        </motion.div>

                        {/* Expansion */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-gradient-to-br from-[#092963] to-[#0f3475] p-8 rounded-2xl text-white shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-white/10 transition-colors" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                        <MapPin className="w-5 h-5 text-[#eb7e2a]" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Expansion en Côte d'Ivoire</h3>
                                </div>
                                <p className="text-white/90 leading-relaxed mb-6">
                                    En réponse à la demande croissante en Afrique de l’Ouest, nous avons établi une filiale à <span className="text-[#eb7e2a] font-semibold">Abidjan</span>.
                                </p>
                                <p className="text-white/80 text-sm leading-relaxed border-l-2 border-[#eb7e2a]/50 pl-4">
                                    Une équipe locale qui combine la rigueur des standards internationaux avec une compréhension profonde du contexte ivoirien pour les secteurs de la finance, des services et des infrastructures critiques.
                                </p>
                            </div>
                        </motion.div>

                    </div>

                    {/* Right Column: Key Stats, Certs & Contact */}
                    <div className="space-y-10 lg:pl-10">

                        {/* Certifications */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <CertificationsBadges />
                        </motion.div>

                        {/* Divider */}
                        <div className="h-px w-full bg-gray-100" />

                        {/* Locations */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <Globe className="w-4 h-4" /> Nos Bureaux
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Canada */}
                                <div className="group p-5 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                                    <div className="font-bold text-[#092963] mb-2 flex items-center gap-2">
                                        <img src="https://flagcdn.com/ca.svg" alt="Canada" className="w-5 h-4 object-cover rounded-sm shadow-sm" />
                                        Siège social Canada
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">877 rue du butor, Lévis (QC), Canada</p>
                                    <a href="tel:+15146092990" className="flex items-center gap-2 text-sm font-medium text-[#eb7e2a] hover:underline">
                                        <Phone className="w-3 h-3" /> +1 514 609 2990
                                    </a>
                                </div>

                                {/* Cote d'Ivoire */}
                                <div className="group p-5 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                                    <div className="font-bold text-[#092963] mb-2 flex items-center gap-2">
                                        <img src="https://flagcdn.com/ci.svg" alt="Côte d'Ivoire" className="w-5 h-4 object-cover rounded-sm shadow-sm" />
                                        Filiale Côte d'Ivoire
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">Port-Bouët, Zone industrielle Vridi, Abidjan</p>
                                    <a href="tel:+2250706052436" className="flex items-center gap-2 text-sm font-medium text-[#eb7e2a] hover:underline">
                                        <Phone className="w-3 h-3" /> +225 07 06 05 24 36
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Footer Email */}
                        <div className="pt-4">
                            <a href="mailto:info@techmscore.com" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#092963] transition-colors">
                                <Mail className="w-4 h-4" /> info@techmscore.com
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
