'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Network, Shield, Globe, Wifi, Server, CheckCircle2, Lock, Activity, Layers } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function NetworkSecurityPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#1e3a8a] mix-blend-multiply z-10" />
                    <Image
                        src="/images/security-network.jpg"
                        alt="Network Security Background"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center pt-32 md:pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            INFRASTRUCTURE
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Sécurité des <span className="text-[#eb7e2a]">Réseaux</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Protégez votre infrastructure contre les intrusions et assurez la disponibilité de vos services critiques.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Sécuriser mon réseau
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl space-y-20">

                    {/* Introduction */}
                    <div className="text-center md:text-left max-w-4xl mx-auto md:mx-0">
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">Une infrastructure robuste et résiliente</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            La sécurité de votre réseau est la première ligne de défense contre les cyberattaques. Elle doit garantir la confidentialité, l’intégrité et la disponibilité de vos données tout en permettant à vos collaborateurs de travailler efficacement, où qu’ils soient.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Nous concevons et déployons des architectures réseau sécurisées (Zero Trust), intégrant les meilleures technologies pour filtrer le trafic, prévenir les intrusions et sécuriser les accès distants.
                        </p>
                    </div>

                    {/* Nos solutions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Nos solutions</h3>
                            <p className="text-gray-600 mb-4">Nous déployons et gérons :</p>
                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    { icon: Shield, text: "Pare-feu de nouvelle génération (NGFW)" },
                                    { icon: Globe, text: "Sécurisation des accès distants (VPN, ZTNA)" },
                                    { icon: Wifi, text: "Sécurité des réseaux sans fil (Wi-Fi)" },
                                    { icon: Activity, text: "Systèmes de prévention d’intrusion (IPS/IDS)" },
                                    { icon: Layers, text: "Segmentation réseau et micro-segmentation" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-[#eb7e2a]/30 transition-colors">
                                        <div className="p-2 bg-white rounded-full text-[#eb7e2a] shadow-sm">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/security-network.jpg"
                                    alt="Network Security Visualization"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[#092963]/10 mix-blend-overlay" />
                            </div>
                        </div>
                    </div>

                    {/* Approche & Technologies */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#092963] mb-6 flex items-center gap-3">
                                <Network className="w-8 h-8 text-[#eb7e2a]" /> Notre approche
                            </h3>
                            <p className="text-gray-600 mb-4">Nous privilégions le modèle "Zero Trust" :</p>
                            <ul className="space-y-3">
                                {[
                                    "Ne jamais faire confiance, toujours vérifier (Authentification continue)",
                                    "Accès au moindre privilège",
                                    "Chiffrement des communications de bout en bout",
                                    "Visibilité complète sur le trafic réseau",
                                    "Mise à jour et patching rigoureux des équipements"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#eb7e2a] mt-2.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#092963] mb-6 flex items-center gap-3">
                                <Server className="w-8 h-8 text-blue-600" /> Technologies utilisées
                            </h3>
                            <p className="text-gray-600 mb-4">Nous travaillons avec les leaders du marché :</p>
                            <ul className="space-y-3">
                                {[
                                    "Fortinet (FortiGate)",
                                    "Cisco (Secure Firewall)",
                                    "Palo Alto Networks",
                                    "Microsoft Azure Firewall & NSG",
                                    "Solutions SASE (Secure Access Service Edge)"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why Network Security */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-[#092963] mb-8 text-center">Pourquoi sécuriser votre réseau ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">1</div>
                                <h4 className="font-bold text-[#092963] mb-2">Bloquer les attaques</h4>
                                <p className="text-gray-600 text-sm">Empêcher les intrusions et la propagation des malwares.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">2</div>
                                <h4 className="font-bold text-[#092963] mb-2">Protéger les données</h4>
                                <p className="text-gray-600 text-sm">Sécuriser les flux d'informations sensibles en transit.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">3</div>
                                <h4 className="font-bold text-[#092963] mb-2">Assurer la continuité</h4>
                                <p className="text-gray-600 text-sm">Garantir la disponibilité des services et la productivité.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
