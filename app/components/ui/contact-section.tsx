'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function ContactSection() {
    return (
        <section id="contact" className="relative py-24 bg-slate-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#eb7e2a]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10 px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Contact Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-[#092963]/10 text-[#092963] text-sm font-semibold tracking-wider mb-4 border border-[#092963]/20">
                                CONTACTEZ-NOUS
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-[#092963] mb-6 leading-tight">
                                Prêt à transformer <br /> votre entreprise ?
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                Discutez avec nos experts pour découvrir comment nos solutions peuvent propulser votre croissance.
                            </p>
                        </motion.div>

                        <div className="space-y-8">

                            {/* General Contact */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="p-3 bg-white rounded-xl shadow-sm text-[#eb7e2a] border border-gray-100">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Par courriel</h4>
                                    <p className="text-gray-500 text-sm mb-1">Pour toute demande générale</p>
                                    <a href="mailto:info@techmscore.com" className="text-[#092963] font-semibold hover:text-[#eb7e2a] transition-colors">
                                        info@techmscore.com
                                    </a>
                                </div>
                            </motion.div>

                            <div className="h-px w-full bg-gray-200/50" />

                            {/* Offices Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                                {/* Siège Social */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <img src="https://flagcdn.com/ca.svg" alt="Canada" className="w-5 h-4 object-cover rounded shadow-sm" />
                                        <h4 className="font-bold text-[#092963]">Siège Social (Québec)</h4>
                                    </div>
                                    <div className="space-y-3 pl-1">
                                        <div className="flex items-start gap-3 text-sm text-gray-600">
                                            <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                                            <span>877 rue du butor,<br />Lévis (QC), Canada</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-gray-600">
                                            <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                                            <a href="tel:5146092990" className="hover:text-[#eb7e2a] transition-colors">514 609 2990</a>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Filiale */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <img src="https://flagcdn.com/ci.svg" alt="Côte d'Ivoire" className="w-5 h-4 object-cover rounded shadow-sm" />
                                        <h4 className="font-bold text-[#092963]">Filiale Abidjan</h4>
                                    </div>
                                    <div className="space-y-3 pl-1">
                                        <div className="flex items-start gap-3 text-sm text-gray-600">
                                            <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                                            <span>Port-Bouët,<br />Zone industrielle Vridi</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-gray-600">
                                            <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                                            <a href="tel:0706052436" className="hover:text-[#eb7e2a] transition-colors">07 06 05 24 36</a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 relative"
                    >
                        <h3 className="text-2xl font-bold text-[#092963] mb-6 flex items-center gap-2">
                            <MessageSquare className="w-6 h-6 text-[#eb7e2a]" />
                            Envoyez-nous un message
                        </h3>

                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Nom complet</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#092963]/10 focus:border-[#092963] transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Courriel</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#092963]/10 focus:border-[#092963] transition-all"
                                        placeholder="john@exemple.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Sujet</label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#092963]/10 focus:border-[#092963] transition-all appearance-none"
                                >
                                    <option value="">Sélectionnez un sujet</option>
                                    <option value="cyber">Cybersécurité</option>
                                    <option value="ai">Intelligence Artificielle</option>
                                    <option value="cloud">Solutions Microsoft & Cloud</option>
                                    <option value="hardware">Matériels & Équipements</option>
                                    <option value="other">Autre demande</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#092963]/10 focus:border-[#092963] transition-all resize-none"
                                    placeholder="Comment pouvons-nous vous aider ?"
                                />
                            </div>

                            <Button className="w-full py-6 rounded-xl bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white font-bold text-lg shadow-lg shadow-[#eb7e2a]/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                                Envoyer le message <Send className="w-5 h-5 ml-2" />
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
