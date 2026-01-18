'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Brain, Cloud, Package, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { Button } from '@/app/components/ui/button';

// --- Data Structure ---

const servicesData = [
    {
        id: 'cybersecurity',
        title: "Cybersécurité",
        icon: Shield,
        tagline: "Protégez ce qui compte le plus : vos informations.",
        accroche: "Nous sécurisons votre entreprise contre les menaces modernes.",
        description: "Une approche complète pour identifier, protéger et défendre votre organisation contre les cybermenaces de plus en plus sophistiquées.",
        subServices: [
            { title: "Diagnostic en cybersécurité", desc: "Évaluez le niveau réel de sécurité de votre organisation et identifiez les vulnérabilités." },
            { title: "Tests d’intrusion", desc: "Testez la résistance de vos systèmes face à des attaques réelles simulées par nos experts." },
            { title: "Sécurité cloud", desc: "Sécurisez vos environnements Microsoft Azure et 365 contre les accès non autorisés." },
            { title: "Surveillance et réponse (SOC)", desc: "Détectez et réagissez rapidement aux activités suspectes 24/7." },
            { title: "Audit et conformité", desc: "Mise en conformité avec ISO 27001, RGPD, PCI DSS et autres normes." },
            { title: "Test d’hameçonnage", desc: "Campagnes simulées pour réduire les risques liés au facteur humain." },
            { title: "Cyberenquête", desc: "Investigation numérique approfondie suite à un incident pour identifier l'origine et l'impact." },
            { title: "Formation et sensibilisation", desc: "Développez une culture de sécurité durable au sein de vos équipes." },
        ]
    },
    {
        id: 'ai',
        title: "Intelligence Artificielle",
        icon: Brain,
        tagline: "Boostez votre entreprise avec la puissance de l’IA.",
        accroche: "Transformez vos processus, gagnez du temps et augmentez votre performance.",
        description: "L'intelligence artificielle n'est plus le futur, c'est le présent. Nous vous aidons à l'intégrer de manière pragmatique et sécurisée.",
        subServices: [
            { title: "Solutions IA sur mesure", desc: "Conception et intégration de modèles IA adaptés à vos données et besoins métier." },
            { title: "Chatbots & Assistants", desc: "Automatisez le support et améliorez l'expérience client avec l'IA conversationnelle." },
            { title: "Formation IA", desc: "Rendez vos équipes autonomes et responsables face aux technologies émergentes." },
        ]
    },
    {
        id: 'microsoft',
        title: "Solutions Microsoft & Cloud",
        icon: Cloud,
        tagline: "Travaillez plus vite, plus intelligemment et en toute sécurité.",
        accroche: "Votre partenaire Microsoft pour moderniser votre entreprise.",
        description: "En tant que partenaire Microsoft, nous vous accompagnons dans la transformation de votre environnement de travail numérique.",
        subServices: [
            { title: "Intégration Microsoft 365", desc: "Déploiement et adoption des outils collaboratifs modernes (Teams, SharePoint, etc.)." },
            { title: "Migration vers le cloud", desc: "Transition fluide de vos systèmes et données vers Microsoft Azure." },
            { title: "Infrastructures sécurisées", desc: "Architecture cloud robuste, incluant réseaux, sauvegarde et reprise après sinistre." },
            { title: "Sécurisation Microsoft", desc: "Renforcement des contrôles d'accès et protection des données dans le cloud." },
            { title: "Optimisation Cloud", desc: "Gestion proactive pour améliorer les performances et réduire les coûts." },
            { title: "Support et Conseil", desc: "Assistance technique et accompagnement stratégique au quotidien." },
        ]
    },
    {
        id: 'hardware',
        title: "Matériels & Électronique",
        icon: Package,
        tagline: "Équipez vos équipes avec des solutions fiables et performantes.",
        accroche: "Le bon outil pour le bon travail.",
        description: "Nous assurons la chaîne d'approvisionnement complète pour vos besoins en équipements technologiques.",
        subServices: [
            { title: "Matériels informatiques", desc: "Ordinateurs, serveurs et périphériques professionnels performants." },
            { title: "Logiciels et licences", desc: "Fourniture et gestion des licences adaptées à vos besoins opérationnels." },
            { title: "Installation & Config", desc: "Mise en service rapide, sécurisée et conforme aux bonnes pratiques." },
            { title: "Import / Export", desc: "Vente et distribution de solutions électroniques au niveau local et international." },
        ]
    }
];

export function ServicesSection() {
    const [activeTab, setActiveTab] = useState(servicesData[0].id);

    const activeService = servicesData.find(s => s.id === activeTab) || servicesData[0];

    return (
        <section id="services" className="relative py-24 px-4 bg-background overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#eb7e2a]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 -left-20 w-72 h-72 bg-blue-900/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">

                {/* Header */}
                <div className="text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-[#eb7e2a]/10 text-[#eb7e2a] text-sm font-semibold tracking-wider mb-4 border border-[#eb7e2a]/20">
                            NOS EXPERTISES
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Des solutions technologiques <br className="hidden md:block" />
                            <span className="text-[#092963]">pour votre croissance</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                            De la cybersécurité à l'intelligence artificielle, nous vous offrons une expertise de pointe pour transformer vos défis en opportunités.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Navigation Tabs (Left Column) */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-3">
                        {servicesData.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                className={cn(
                                    "group flex items-center gap-4 p-5 rounded-xl text-left transition-all duration-300 border",
                                    activeTab === service.id
                                        ? "bg-white border-[#eb7e2a]/30 shadow-lg shadow-black/5 scale-[1.02]"
                                        : "bg-white/50 border-transparent hover:bg-white hover:border-gray-200 hover:shadow-sm"
                                )}
                            >
                                <div className={cn(
                                    "p-3 rounded-lg transition-colors duration-300",
                                    activeTab === service.id
                                        ? "bg-[#eb7e2a] text-white"
                                        : "bg-gray-100 text-gray-500 group-hover:bg-[#eb7e2a]/10 group-hover:text-[#eb7e2a]"
                                )}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className={cn(
                                        "font-bold text-lg transition-colors",
                                        activeTab === service.id ? "text-[#092963]" : "text-gray-700"
                                    )}>
                                        {service.title}
                                    </h3>
                                    {activeTab === service.id && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="text-sm text-muted-foreground mt-1 line-clamp-1"
                                        >
                                            {service.tagline}
                                        </motion.p>
                                    )}
                                </div>
                                <ChevronRight className={cn(
                                    "w-5 h-5 transition-transform duration-300",
                                    activeTab === service.id ? "text-[#eb7e2a] rotate-90 lg:rotate-0" : "text-gray-300 group-hover:text-[#eb7e2a]/50"
                                )} />
                            </button>
                        ))}

                        <div className="hidden lg:block mt-8 p-6 bg-gradient-to-br from-[#092963] to-[#0f3475] rounded-2xl text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="font-bold text-xl mb-2">Besoin d'un conseil ?</h4>
                                <p className="text-white/80 text-sm mb-4">Nos experts sont là pour vous guider vers la meilleure solution.</p>
                                <a href="/contact" className="inline-flex items-center text-sm font-semibold text-[#eb7e2a] hover:text-white transition-colors">
                                    Contactez-nous <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                            <div className="absolute right-0 bottom-0 opacity-10">
                                <Shield className="w-24 h-24 -mr-4 -mb-4" />
                            </div>
                        </div>
                    </div>

                    {/* Content Area (Right Column) */}
                    <div className="w-full lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-xl shadow-gray-200/50 min-h-[600px] flex flex-col"
                            >
                                {/* Active Header */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-3 text-[#eb7e2a] mb-4">
                                        <activeService.icon className="w-8 h-8" />
                                        <span className="text-sm font-bold uppercase tracking-wider">{activeService.title}</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-[#092963] mb-4">
                                        {activeService.accroche}
                                    </h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {activeService.description}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-gradient-to-r from-gray-200 via-gray-100 to-transparent mb-8" />

                                {/* Sub Services Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-8 flex-grow">
                                    {activeService.subServices.map((sub, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 + 0.2 }}
                                            className="group"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="mt-1 min-w-5">
                                                    <CheckCircle2 className="w-5 h-5 text-[#eb7e2a]" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 group-hover:text-[#eb7e2a] transition-colors">
                                                        {sub.title}
                                                    </h4>
                                                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                                                        {sub.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Footer Action */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-auto border-t border-gray-100">
                                    <Button className="rounded-full bg-[#092963] hover:bg-[#092963]/90 text-white px-8">
                                        Demander une consultation
                                    </Button>
                                    <Button variant="outline" className="rounded-full border-gray-200 hover:bg-gray-50 hover:text-[#092963]">
                                        Voir plus de détails
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
