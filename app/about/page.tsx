'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import {
    MapPin, Phone, Mail, Globe, ShieldCheck,
    Cpu, Cloud, HardDrive, Laptop, ChevronDown,
    CheckCircle2, Building2, Send, GraduationCap,
    Search, Server, Lock, UserCheck, ArrowLeft, Eye
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// --- Accordion Component ---
interface AccordionItemProps {
    title: string;
    subtitle: string;
    icon: React.ElementType;
    children: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
    index: number;
}

const AccordionItem = ({ title, subtitle, icon: Icon, children, isOpen, onClick, index }: AccordionItemProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`border rounded-xl overflow-hidden mb-4 transition-all duration-300 ${isOpen ? 'border-[#092963] shadow-lg bg-white' : 'border-gray-200 bg-gray-50 hover:bg-white'}`}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
                <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg transition-colors ${isOpen ? 'bg-[#092963] text-white' : 'bg-white border border-gray-100 text-[#092963]'}`}>
                        <Icon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-[#092963]' : 'text-gray-800'}`}>
                            {title}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium mt-1">{subtitle}</p>
                    </div>
                </div>
                <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#eb7e2a]/10 rotate-180' : 'bg-transparent'}`}>
                    <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-[#eb7e2a]' : 'text-gray-400'}`} />
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 pt-0 border-t border-gray-100/50">
                            <div className="pt-6 text-gray-600 leading-relaxed">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// --- Content Data ---

const pillars = [
    {
        title: "1. Cybersécurité et protection des données",
        subtitle: "Protégez ce qui compte le plus : vos informations.",
        icon: ShieldCheck,
        content: (
            <div className="space-y-8">
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/service-cybersecurity.png"
                        alt="Cybersécurité MS Core"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092963]/60 via-transparent to-transparent" />
                </div>
                <p className="font-semibold text-[#092963] text-lg bg-blue-50/50 p-4 rounded-lg italic">
                    « Nous sécurisons votre entreprise contre les menaces modernes. »
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963] flex items-center gap-2">
                            <Search className="w-4 h-4 text-[#eb7e2a]" /> Diagnostic en cybersécurité
                        </h4>
                        <p className="text-sm">Analyse de votre posture de sécurité pour identifier vulnérabilités et failles. Plan d’actions concret et priorisé.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963] flex items-center gap-2">
                            <Lock className="w-4 h-4 text-[#eb7e2a]" /> Tests d’intrusion
                        </h4>
                        <p className="text-sm">Simulation de cyberattaques contrôlées pour tester la résistance de vos systèmes et combler les failles avant qu'elles ne soient exploitées.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963] flex items-center gap-2">
                            <Cloud className="w-4 h-4 text-[#eb7e2a]" /> Sécurité cloud
                        </h4>
                        <p className="text-sm">Sécurisation des environnements Azure et M365 : correction des mauvaises configurations et renforcement des accès.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963] flex items-center gap-2">
                            <Eye className="w-4 h-4 text-[#eb7e2a]" /> Surveillance et réponse (SOC)
                        </h4>
                        <p className="text-sm">Surveillance continue 24/7 pour détecter les activités suspectes et intervenir rapidement pour contenir les incidents.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963] flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#eb7e2a]" /> Audit et conformité
                        </h4>
                        <p className="text-sm">Accompagnement vers la conformité ISO 27001, RGPD, PCI DSS et exigences locales.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963] flex items-center gap-2">
                            <UserCheck className="w-4 h-4 text-[#eb7e2a]" /> Test d’hameçonnage
                        </h4>
                        <p className="text-sm">Campagnes de phishing simulées pour évaluer la vigilance des employés et renforcer la sensibilisation.</p>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <h4 className="font-bold text-[#092963] flex items-center gap-2">
                            <Search className="w-4 h-4 text-[#eb7e2a]" /> Cyberenquête et investigation numérique
                        </h4>
                        <p className="text-sm">Analyse approfondie post-incident (fraudes, rançongiciels). Collecte de preuves numériques (forensique), rapports structurés pour prises de décision ou démarches juridiques.</p>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <h4 className="font-bold text-[#092963] flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-[#eb7e2a]" /> Formation et sensibilisation
                        </h4>
                        <p className="text-sm">Programmes adaptés pour développer une culture de cybersécurité durable et réduire le risque humain.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "2. Intelligence artificielle et automatisation",
        subtitle: "Boostez votre entreprise avec la puissance de l’IA.",
        icon: Cpu,
        content: (
            <div className="space-y-8">
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/service-ai.png"
                        alt="Intelligence Artificielle MS Core"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092963]/60 via-transparent to-transparent" />
                </div>
                <p className="font-semibold text-[#092963] text-lg bg-blue-50/50 p-4 rounded-lg italic">
                    « Transformez vos processus, gagnez du temps et augmentez votre performance. »
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963]">Conception de solutions IA</h4>
                        <p className="text-sm">Intégration de solutions IA sur mesure pour automatiser et optimiser vos opérations avec des gains mesurables.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963]">Chatbots & Assistants Virtuels</h4>
                        <p className="text-sm">Agents conversationnels intelligents pour améliorer l'expérience client et automatiser le support interne.</p>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <h4 className="font-bold text-[#092963]">Formation IA</h4>
                        <p className="text-sm">Accompagnement pour aider vos équipes à utiliser et encadrer l’IA de façon responsable et sécurisée.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "3. Solutions Microsoft et services Cloud",
        subtitle: "Travaillez plus vite, plus intelligemment et en toute sécurité.",
        icon: Cloud,
        content: (
            <div className="space-y-8">
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/service-microsoft.png"
                        alt="Solutions Microsoft MS Core"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092963]/60 via-transparent to-transparent" />
                </div>
                <p className="font-semibold text-[#092963] text-lg bg-blue-50/50 p-4 rounded-lg italic">
                    « Votre partenaire Microsoft pour moderniser votre entreprise. »
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963]">Intégration Microsoft 365 & Power Platform</h4>
                        <p className="text-sm">Déploiement de solutions collaboratives (Teams, SharePoint) et automatisation (Power Apps, Automate, BI) pour la performance.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963]">Migration Cloud</h4>
                        <p className="text-sm">Migration sécurisée de vos systèmes et données vers le cloud Microsoft avec minimisation des interruptions.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963]">Infrastructure Cloud Sécurisée</h4>
                        <p className="text-sm">Conception d'architectures robustes, incluant réseaux, sauvegardes et plans de reprise après sinistre.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963]">Optimisation & Gestion</h4>
                        <p className="text-sm">Gestion proactive de vos services cloud pour améliorer les performances et maîtriser les coûts.</p>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <h4 className="font-bold text-[#092963]">Support Microsoft</h4>
                        <p className="text-sm">Assistance technique et conseil au quotidien pour exploiter pleinement vos licences Microsoft.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "4. Fourniture de matériels et solutions électroniques",
        subtitle: "Des équipements professionnels pour vos équipes.",
        icon: HardDrive,
        content: (
            <div className="space-y-8">
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/service-hardware.png"
                        alt="Matériels Informatiques MS Core"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092963]/60 via-transparent to-transparent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963]">Matériels Informatiques</h4>
                        <p className="text-sm">Ordinateurs portables, serveurs, imprimantes et périphériques sélectionnés pour la performance et la sécurité.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963]">Logiciels & Licences</h4>
                        <p className="text-sm">Fourniture des licences adaptées à vos besoins métiers et respectueuses de votre budget.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963]">Installation & Config</h4>
                        <p className="text-sm">Mise en service rapide et maîtrisée de vos équipements par nos experts techniques.</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-[#092963]">Import / Export</h4>
                        <p className="text-sm">Chaîne d'approvisionnement maîtrisée pour la distribution de solutions électroniques au niveau local et international.</p>
                    </div>
                </div>
            </div>
        )
    }
];

export default function AboutPage() {
    const [openPillarIndex, setOpenPillarIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen bg-white">

            {/* Navigation Bar Placeholder */}
            <div className="absolute top-28 left-6 z-50">
                <Link href="/" className="inline-flex items-center gap-2 text-[#092963] hover:text-[#eb7e2a] transition-colors bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm">
                    <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
                </Link>
            </div>

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
                            QUI SOMMES-NOUS ?
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#092963] mb-6 leading-tight">
                            Technologies MS Core
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Votre partenaire stratégique pour une transformation numérique <span className="text-[#092963] font-semibold">sécurisée, performante et orientée résultats</span>.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Overview & Ivory Coast */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* History */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="p-3 bg-blue-50 w-fit rounded-xl text-[#092963] mb-2">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-[#092963]">Notre Histoire</h2>
                            <div className="prose prose-lg text-gray-600">
                                <p>
                                    Entreprise technologique fondée en <strong className="text-[#092963]">2020 à Lévis, Québec</strong>, nous aidons les organisations à tirer pleinement parti du potentiel des technologies modernes.
                                </p>
                                <p>
                                    En combinant l’expertise Microsoft, le Cloud, l’IA et la cybersécurité, notre objectif est simple : permettre à nos clients d’accroître leur efficacité tout en assurant leur résilience.
                                </p>
                            </div>
                        </motion.div>

                        {/* Ivory Coast Expansion */}
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
                                <div className="space-y-4">
                                    <p className="text-blue-100 leading-relaxed text-sm">
                                        En réponse à la demande croissante de services technologiques avancés en Afrique de l&apos;Ouest, Technologies MS Core a étendu ses activités en Côte d&apos;Ivoire avec une filiale dédiée.
                                    </p>
                                    <p className="text-blue-100 leading-relaxed text-sm">
                                        Cette expansion nous permet d’être plus près des organisations locales, qu’elles soient publiques ou privées, évoluant notamment dans les secteurs de la finance, de l’industrie, de l’énergie, du commerce, des services, de la santé, de l’éducation et des infrastructures critiques, afin de répondre à l’ensemble de leurs besoins technologiques.
                                    </p>
                                    <p className="text-blue-100 leading-relaxed text-sm">
                                        Implantée à Abidjan, notre équipe locale combine la rigueur des standards internationaux avec une compréhension profonde du contexte économique et réglementaire ivoirien.
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
                                    <span className="text-xs px-3 py-1 bg-white/10 rounded-full">Standards Internationaux</span>
                                    <span className="text-xs px-3 py-1 bg-white/10 rounded-full">Expertise Locale</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Pillars (Accordion) */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-[#eb7e2a] font-bold tracking-wider text-sm uppercase">Nos Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#092963] mt-3 mb-6">
                            Une expertise complète à 360°
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {pillars.map((pillar, index) => (
                            <AccordionItem
                                key={index}
                                index={index}
                                title={pillar.title}
                                subtitle={pillar.subtitle}
                                icon={pillar.icon}
                                isOpen={openPillarIndex === index}
                                onClick={() => setOpenPillarIndex(openPillarIndex === index ? null : index)}
                            >
                                {pillar.content}
                            </AccordionItem>
                        ))}
                    </div>
                </div>
            </section>



            {/* Contact & Footer Info */}
            <section className="py-20 px-4 bg-[#092963] text-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contactez-nous</h2>
                        <p className="text-blue-200 max-w-2xl mx-auto">
                            Que ce soit pour un projet au Canada ou en Afrique de l'Ouest, nos équipes sont prêtes à vous accompagner.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Canada Office */}
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <img src="https://flagcdn.com/ca.svg" alt="Canada" className="w-8 h-6 rounded shadow-sm object-cover" />
                                <h3 className="text-2xl font-bold">Siège social Canada</h3>
                            </div>
                            <div className="space-y-4 text-blue-100">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <p>877 rue du butor, Lévis (QC), G7A 5M1</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-[#eb7e2a]" />
                                    <a href="tel:+15146092990" className="hover:text-white transition-colors">+1 514 609 2990</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-[#eb7e2a]" />
                                    <a href="mailto:info@techmscore.com" className="hover:text-white transition-colors">info@techmscore.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Ivory Coast Office */}
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <img src="https://flagcdn.com/ci.svg" alt="Côte d'Ivoire" className="w-8 h-6 rounded shadow-sm object-cover" />
                                <h3 className="text-2xl font-bold">Filiale Côte d'Ivoire</h3>
                            </div>
                            <div className="space-y-4 text-blue-100">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-[#eb7e2a] mt-1" />
                                    <p>Port-Bouët, Zone industrielle Vridi, Abidjan</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-[#eb7e2a]" />
                                    <a href="tel:+2250706052436" className="hover:text-white transition-colors">+225 07 06 05 24 36</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-[#eb7e2a]" />
                                    <a href="mailto:info@techmscore.com" className="hover:text-white transition-colors">info@techmscore.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}


