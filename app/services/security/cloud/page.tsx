'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Cloud, Shield, Lock, Activity, CheckCircle2, FileText, Server } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CloudSecurityPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            <section className="relative min-h-[80vh] h-auto flex items-center justify-center overflow-hidden bg-[#092963] pb-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] to-[#0ea5e9] mix-blend-multiply z-10" />
                    <Image
                        src="/images/service-cloud.png"
                        alt="Cloud Security Background"
                        fill
                        className="object-cover opacity-40"
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
                            PROTECTION INFONUAGIQUE
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Sécurité <span className="text-[#eb7e2a]">Cloud</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Sécurisez vos environnements Microsoft 365, Azure et cloud hybride contre les accès non autorisés et les fuites de données.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-[#eb7e2a]/20 transition-all">
                                Sécuriser mon cloud
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl space-y-16">

                    {/* Introduction */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">Sécurité cloud</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            La sécurité cloud est un enjeu majeur pour les organisations qui exploitent des environnements tels que Microsoft Azure, Microsoft 365 ou d’autres plateformes infonuagiques. Une mauvaise configuration, des accès mal maîtrisés ou des contrôles insuffisants peuvent exposer vos données et vos services à des risques importants.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Chez Technologies MS Core, nous accompagnons les organisations dans la sécurisation complète de leurs environnements cloud afin de réduire les risques de compromission, protéger les données sensibles et assurer la continuité des activités.
                        </p>
                    </div>

                    {/* Ce que nous sécurisons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Ce que nous sécurisons</h3>
                            <p className="text-gray-600 mb-4">Nos interventions couvrent notamment :</p>
                            <ul className="space-y-3">
                                {[
                                    "Les environnements Microsoft Azure et Microsoft 365",
                                    "Les identités, accès et privilèges utilisateurs",
                                    "Les configurations de sécurité cloud (politiques, journaux, alertes)",
                                    "La protection des données et des informations sensibles",
                                    "Les accès externes, API et connexions hybrides",
                                    "La conformité aux bonnes pratiques et standards de sécurité cloud"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Cloud className="w-5 h-5 text-[#eb7e2a] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 h-64 md:h-80 relative rounded-2xl overflow-hidden border border-blue-100 shadow-lg">
                            <Image
                                src="/images/service-cloud-detail.png"
                                alt="Cloud Security Details"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Notre approche */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-[#092963] mb-6">Notre approche</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Nous adoptons une approche progressive et pragmatique. Nos recommandations tiennent compte de votre maturité, de vos contraintes opérationnelles et de vos objectifs d’affaires.
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Analyse de la configuration actuelle de l’environnement cloud",
                                "Identification des mauvaises configurations et des écarts de sécurité",
                                "Renforcement des contrôles d’accès et des mécanismes de protection",
                                "Mise en place de bonnes pratiques de sécurité cloud",
                                "Accompagnement dans l’adoption des outils de sécurité Microsoft"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-2 h-2 rounded-full bg-[#eb7e2a]" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Livrables & Bénéfices */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Livrables</h3>
                            <p className="text-gray-600 mb-4">À l’issue de notre intervention, vous recevez :</p>
                            <ul className="space-y-3">
                                {[
                                    "Un état des lieux de la sécurité de votre environnement cloud",
                                    "La liste des risques et configurations à corriger",
                                    "Des recommandations techniques priorisées",
                                    "Un plan d’actions clair et réaliste",
                                    "Une documentation facilitant la gestion continue de la sécurité"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <FileText className="w-5 h-5 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Les bénéfices pour votre organisation</h3>
                            <ul className="space-y-3">
                                {[
                                    "Réduction des risques liés aux mauvaises configurations cloud",
                                    "Protection renforcée des données et des accès",
                                    "Meilleure visibilité sur les activités et les menaces",
                                    "Amélioration de la conformité et de la gouvernance cloud",
                                    "Environnements cloud plus résilients et sécurisés"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why Cloud Security */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                        <h3 className="text-2xl font-bold text-[#092963] mb-8 text-center">Pourquoi sécuriser vos environnements cloud ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">1</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Réduire les risques liés aux mauvaises configurations</h4>
                                <p className="text-gray-600 text-sm">La majorité des incidents cloud sont causés par des erreurs de configuration. La sécurisation cloud permet de corriger ces failles.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">2</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Protéger les données et les accès critiques</h4>
                                <p className="text-gray-600 text-sm">La sécurité cloud renforce le contrôle des identités, des accès et des données afin de limiter les risques de fuite.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#092963] font-bold text-xl">3</div>
                                <h4 className="font-bold text-[#eb7e2a] mb-2">Assurer la continuité et la confiance</h4>
                                <p className="text-gray-600 text-sm">Un environnement cloud sécurisé permet de maintenir la disponibilité des services et de respecter les exigences réglementaires.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
