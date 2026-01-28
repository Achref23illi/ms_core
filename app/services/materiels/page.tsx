'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Monitor, Package, Settings, Globe, Server, Printer, Laptop } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/app/components';

// Services Data
const services = [
    {
        title: "Fourniture de matériels",
        icon: Monitor,
        desc: "Équipez vos équipes avec des solutions fiables.",
        detail: "Large gamme de matériels informatiques professionnels : ordinateurs portables et de bureau, imprimantes, serveurs et périphériques, sélectionnés pour leur performance et fiabilité."
    },
    {
        title: "Logiciels et licences",
        icon: Package,
        desc: "Accédez aux outils adaptés à vos besoins métiers.",
        detail: "Fourniture de logiciels et licences (Microsoft, Adobe, sécurité, etc.) conformes à vos exigences fonctionnelles et budgétaires, avec accompagnement dans le choix."
    },
    {
        title: "Installation et configuration",
        icon: Settings,
        desc: "Une mise en service rapide et maîtrisée.",
        detail: "Nos équipes assurent l’installation, la configuration et la mise en service de vos équipements, garantissant un déploiement efficace, sécurisé et conforme aux bonnes pratiques."
    },
    {
        title: "Import / Export & Distribution",
        icon: Globe,
        desc: "Une chaîne d’approvisionnement maîtrisée.",
        detail: "Vente, distribution, importation et exportation de solutions électroniques. Nous garantissons la conformité, la qualité des produits et le respect des délais au niveau local et international."
    }
];

export default function MaterielsPage() {
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
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#092963]/80 mix-blend-multiply z-10" />
                    <img
                        src="/images/service-hardware.png"
                        alt="Hardware Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>

                <div className="container mx-auto max-w-6xl relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 font-bold tracking-wider text-xs mb-6 backdrop-blur-sm">
                            <Server className="w-4 h-4" /> SOLUTIONS MATÉRIELLES
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Fourniture de matériels et <br /> solutions électroniques
                        </h1>
                        <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                            Équipez vos équipes avec des solutions fiables et performantes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:border-[#092963]/20 transition-all duration-300"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center text-[#092963] group-hover:bg-[#092963] group-hover:text-white transition-colors duration-300">
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#092963] mb-3 group-hover:text-[#eb7e2a] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-700 font-medium mb-3">
                                            {service.desc}
                                        </p>
                                        <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                                            {service.detail}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Equipment Showcase (Visual only) */}
            <section className="py-16 px-4 bg-[#f8fafc] relative overflow-hidden">
                <div className="container mx-auto max-w-6xl text-center relative z-10">
                    <h2 className="text-2xl font-bold text-[#092963] mb-12">Types d'équipements disponibles</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-4 group">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                <Laptop className="w-10 h-10 text-gray-400 group-hover:text-[#092963] transition-colors" />
                            </div>
                            <span className="font-bold text-gray-700">Ordinateurs</span>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-4 group">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                <Server className="w-10 h-10 text-gray-400 group-hover:text-[#092963] transition-colors" />
                            </div>
                            <span className="font-bold text-gray-700">Serveurs</span>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-4 group">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                <Printer className="w-10 h-10 text-gray-400 group-hover:text-[#092963] transition-colors" />
                            </div>
                            <span className="font-bold text-gray-700">Périphériques</span>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-4 group">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                <Monitor className="w-10 h-10 text-gray-400 group-hover:text-[#092963] transition-colors" />
                            </div>
                            <span className="font-bold text-gray-700">Écrans</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-[#092963] text-white text-center">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6">Besoin d'équipements spécifiques ?</h2>
                    <p className="text-blue-100 mb-8 text-lg">
                        Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins et à votre budget.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-8 py-4 text-lg font-bold shadow-lg transition-all hover:scale-105">
                        Demander un devis
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
