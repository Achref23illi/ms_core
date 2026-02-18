'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Download, ShieldCheck, UserCheck, GraduationCap } from 'lucide-react';

const courses = [
    {
        id: 'MSC01',
        title: 'Formation MSC 01 – Sécurité Microsoft',
        description: 'Cette formation permet de maîtriser l’écosystème de sécurité Microsoft et de mettre en œuvre les contrôles de sécurité essentiels pour protéger les identités, les postes de travail, les données et les environnements cloud. Elle s’adresse aux équipes TI et Sécurité souhaitant déployer une sécurité opérationnelle efficace, alignée avec les besoins métiers et réglementaires.',
        details: 'Les participants acquièrent une compréhension approfondie des solutions Microsoft telles que Entra ID, Defender, Intune, Sentinel et Purview, à travers des travaux pratiques guidés basés sur des scénarios réels en entreprise. Cette formation favorise l’autonomie des équipes et améliore significativement la posture de sécurité globale de l’organisation',
        icon: ShieldCheck,
        color: 'bg-blue-50 text-blue-600',
    },
    {
        id: 'MSC02',
        title: 'Formation MSC 02 – Mesures de sécurité ISO/IEC 27001:2022 (Annexe A)',
        description: 'Cette formation est dédiée à la compréhension et à l’application des mesures de sécurité de l’Annexe A de la norme ISO/IEC 27001:2022. Elle permet aux participants de relier les exigences de la norme aux enjeux organisationnels, humains, physiques et technologiques de la sécurité de l’information.',
        details: 'À l’issue de la formation, les participants sont capables d’identifier les contrôles applicables, de contribuer efficacement à la mise en œuvre d’un SMSI, et de soutenir les démarches de conformité et de certification ISO 27001. Des outils concrets sont fournis, incluant la matrice des contrôles, le registre des risques et la déclaration d’applicabilité (SoA).',
        icon: BookOpen,
        color: 'bg-green-50 text-green-600',
    },
    {
        id: 'MSC03',
        title: 'Formation MSC 03 – Formation et sensibilisation à la sécurité de l’information',
        description: 'Cette formation est conçue pour tous les employés, gestionnaires et équipes non techniques, avec un objectif clair : réduire les incidents liés au facteur humain. Elle adopte un langage simple, non technique, et s’appuie sur des cas concrets et des situations réelles rencontrées en entreprise.',
        details: 'Les modules couvrent notamment l’hameçonnage, les compromissions de comptes, la protection des données, le télétravail, les rançongiciels, les risques liés à l’intelligence artificielle et la protection des renseignements personnels. Cette formation contribue à instaurer une véritable culture de cybersécurité et à renforcer la vigilance collective au sein de l’organisation.',
        icon: UserCheck,
        color: 'bg-orange-50 text-orange-600',
    },
    {
        id: 'MSC04',
        title: 'Formation MSC 04 – Préparation à la certification ISO 27001 Lead Implementer',
        description: 'Cette formation avancée s’adresse aux professionnels impliqués dans la planification, la mise en œuvre et le pilotage d’un Système de Management de la Sécurité de l’Information (SMSI). Elle vise à fournir les compétences nécessaires pour diriger un projet ISO 27 001, depuis l’initiation jusqu’à la préparation à l’audit de certification.',
        details: 'Les participants sont formés sur les phases clés du SMSI : planification, mise en œuvre, surveillance, amélioration continue et préparation à l’audit. Cette formation permet aux participants de se préparer à la certification ISO 27 001 Lead Implementer.',
        icon: GraduationCap,
        color: 'bg-purple-50 text-purple-600',
    },
];

export default function FormationPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Navigation Bar Placeholder - to push content down below fixed header if needed, but header handles padding too */}
            <div className="absolute top-28 left-6 z-50 hidden md:block">
                <Link href="/" className="inline-flex items-center gap-2 text-[#092963] hover:text-[#eb7e2a] transition-colors bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm">
                    <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 bg-gray-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 -skew-x-12 translate-x-32 z-0 opacity-50 pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-[#eb7e2a]/10 text-[#eb7e2a] font-bold tracking-wider text-xs mb-6 border border-[#eb7e2a]/20 uppercase">
                            MS CORE ACADEMY
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#092963] mb-6 leading-tight">
                            Formations professionnelles
                            <br className="hidden md:block" /> de cybersécurité en Côte d’Ivoire
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl text-center space-y-8 text-gray-600 leading-relaxed text-lg">
                    <p>
                        Dans un contexte où les cybermenaces, la fraude et les exigences réglementaires ne cessent de croître, la formation est un levier stratégique essentiel pour les entreprises.
                    </p>
                    <p>
                        Chez <span className="font-bold text-[#092963]">Technologies MS CORE</span>, nous accompagnons les entreprises, institutions et professionnels en Côte d’Ivoire à travers des formations pratiques, structurées et adaptées aux réalités locales, tout en respectant les standards internationaux.
                    </p>
                    <p>
                        Nos programmes de formation visent à renforcer les compétences techniques, développer une culture de cybersécurité, et soutenir les démarches de conformité et de certification. Ils combinent théorie, cas réels, démonstrations et ateliers pratiques afin de garantir une montée en compétence concrète et immédiatement applicable.
                    </p>
                </div>
            </section>

            {/* Courses List */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 gap-8">
                        {courses.map((course, index) => {
                            const Icon = course.icon;
                            return (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${course.color} group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <h3 className="text-2xl font-bold text-[#092963] group-hover:text-[#eb7e2a] transition-colors">{course.title}</h3>
                                            <p className="text-gray-700 font-medium leading-relaxed text-lg">
                                                {course.description}
                                            </p>
                                            <div className="h-px bg-gray-100 w-full my-4" />
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {course.details}
                                            </p>

                                            <div className="pt-6">
                                                <a
                                                    href="/catalogue.pdf"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-[#092963] font-semibold hover:text-[#eb7e2a] transition-colors group/link"
                                                >
                                                    <Download className="w-4 h-4 group-hover/link:translate-y-1 transition-transform" />
                                                    <span>Pour en savoir plus Télécharger le CATALOGUE DE FORMATION</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-[#092963] text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#eb7e2a] rounded-full blur-[128px] opacity-20" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20" />

                <div className="container mx-auto max-w-4xl space-y-8 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">Prêt à renforcer vos compétences ?</h2>
                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
                        Téléchargez notre catalogue complet pour découvrir tous les détails de nos formations et choisissez celle qui correspond à vos besoins.
                    </p>
                    <div className="pt-8">
                        <a
                            href="/catalogue.pdf"
                            download
                            className="inline-flex items-center gap-3 bg-[#eb7e2a] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#eb7e2a]/90 transition-all hover:scale-105 active:scale-95 text-lg"
                        >
                            <Download className="w-6 h-6" />
                            télécharger le catalogue
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
