'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldAlert, Activity } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { SupportFormModal } from './support-form-modal';

export function SupportSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [defaultTab, setDefaultTab] = useState<'incident' | 'diagnostic'>('incident');

    const openModal = (tab: 'incident' | 'diagnostic') => {
        setDefaultTab(tab);
        setIsModalOpen(true);
    };

    return (
        <section className="bg-gray-100 py-16 md:py-20 px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="bg-gray-200/50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">

                        <div className="flex-1 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#092963] mb-6">
                                    Besoin de soutien ?
                                </h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    Cyberattaque, fraude ou besoin d’accompagnement en cybersécurité ? <span className="font-semibold text-[#092963]">Nos experts sont là pour vous aider.</span>
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Remplissez ce formulaire et nous vous contacterons rapidement afin d’évaluer votre situation et vous accompagner dans les prochaines étapes.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap gap-4 pt-4"
                            >
                                <Button
                                    onClick={() => openModal('incident')}
                                    className="bg-[#eb7e2a] hover:bg-[#d67020] text-white text-lg px-8 py-6 h-auto rounded-xl shadow-lg shadow-orange-500/20 hover:scale-105 transition-all duration-300"
                                >
                                    Demande de soutien
                                </Button>

                                <Button
                                    onClick={() => openModal('diagnostic')}
                                    variant="outline"
                                    className="border-2 border-[#092963] text-[#092963] hover:bg-[#092963] hover:text-white text-lg px-8 py-6 h-auto rounded-xl transition-all duration-300"
                                >
                                    Diagnostic gratuit
                                </Button>
                            </motion.div>
                        </div>

                        {/* Optional Visual / Icon Side */}
                        <div className="hidden md:flex flex-col gap-4 text-gray-500 max-w-xs">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <ShieldAlert className="w-8 h-8 text-[#eb7e2a] mb-3" />
                                <h4 className="font-bold text-[#092963] mb-2">Urgence & Incident</h4>
                                <p className="text-sm">Intervention rapide en cas de cyberattaque, rançongiciel ou compromission.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <Activity className="w-8 h-8 text-[#092963] mb-3" />
                                <h4 className="font-bold text-[#092963] mb-2">Diagnostic Sécurité</h4>
                                <p className="text-sm">Évaluation complète de votre posture de sécurité en quelques minutes.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <SupportFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultTab={defaultTab}
            />
        </section>
    );
}
