import { ArrowLeft, ShieldAlert, Lock, Eye, Activity, Workflow, Database, CheckCircle2, Siren, Clock, LineChart, FileText } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

// ... (keep services if needed or replace them, but user provided new content structure so I will essentially replace the body content)

export default function SecurityMonitoringPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* Navigation Bar Placeholder */}
            <div className="absolute top-28 left-6 z-50">
                <Link href="/#services" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    <ArrowLeft className="w-4 h-4" /> Retour aux services
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#092963]">
                {/* Background Image / Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/security-monitoring-new.jpg"
                        alt="Security Monitoring Background"
                        fill
                        className="object-cover opacity-30 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] via-[#092963]/90 to-[#0f3475]/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092963] to-transparent" />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 border border-red-400/30 text-red-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            CYBERSÉCURITÉ AVANCÉE
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Surveillance et <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">
                                Réponse aux incidents
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Protection continue et proactive pour détecter et neutraliser les menaces avant impact.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-red-500/20 transition-all">
                                Sécuriser mon entreprise
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl space-y-20">

                    {/* Introduction */}
                    <div className="text-center md:text-left max-w-4xl mx-auto md:mx-0">
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">Détecter rapidement, réagir efficacement</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            Face à des menaces de plus en plus sophistiquées, la capacité à détecter rapidement les activités suspectes et à réagir efficacement aux incidents est devenue essentielle. Le service de Surveillance et réponse aux incidents permet de surveiller en continu vos systèmes, d’identifier les comportements anormaux et de contenir les attaques avant qu’elles n’aient un impact majeur sur vos opérations.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Chez Technologies MS Core, notre centre de surveillance combine technologies avancées, expertise humaine et processus éprouvés pour offrir une protection continue et proactive.
                        </p>
                    </div>

                    {/* Ce que nous surveillons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Ce que nous surveillons</h3>
                            <p className="text-gray-600 mb-4">Notre service centre de surveillance couvre notamment :</p>
                            <ul className="grid grid-cols-1 gap-3">
                                {[
                                    "Les environnements TI et cloud (réseaux, serveurs, postes, applications)",
                                    "Les environnements Microsoft Azure et Microsoft 365",
                                    "Les identités, accès et comptes utilisateurs",
                                    "Les journaux de sécurité et événements critiques",
                                    "Les activités suspectes et tentatives d’intrusion",
                                    "Les signaux de compromission et comportements anormaux"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <Eye className="w-5 h-5 text-[#eb7e2a] mt-1 shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 h-96 bg-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
                            <Activity className="w-32 h-32 text-red-500 animate-pulse relative z-10" />
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-0" />
                        </div>
                    </div>

                    {/* Approche & Réponse */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#092963] mb-6 flex items-center gap-3">
                                <Clock className="w-8 h-8 text-[#eb7e2a]" /> Notre approche
                            </h3>
                            <p className="text-gray-600 mb-4">Nous adoptons une approche structurée et continue :</p>
                            <ul className="space-y-3">
                                {[
                                    "Collecte et corrélation des journaux de sécurité",
                                    "Surveillance 24/7 ou selon les besoins de l’organisation",
                                    "Détection des menaces et priorisation des alertes",
                                    "Analyse approfondie des incidents",
                                    "Réponse rapide pour contenir, éradiquer et corriger"
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
                                <Siren className="w-8 h-8 text-red-500" /> Réponse aux incidents
                            </h3>
                            <p className="text-gray-600 mb-4">En cas d’incident de sécurité, nous intervenons pour :</p>
                            <ul className="space-y-3">
                                {[
                                    "Identifier l’origine et la nature de l’incident",
                                    "Contenir la menace afin de limiter les impacts",
                                    "Éliminer les causes de compromission",
                                    "Restaurer les systèmes et les services",
                                    "Formuler des recommandations pour prévenir la récurrence"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Livrables & Bénéfices */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Livrables</h3>
                            <ul className="space-y-3">
                                {[
                                    "Alertes de sécurité qualifiées et contextualisées",
                                    "Rapports d’incidents clairs et exploitables",
                                    "Tableaux de bord de visibilité et de suivi",
                                    "Recommandations d’amélioration continue",
                                    "Rapports exécutifs pour la direction"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <FileText className="w-5 h-5 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#eb7e2a] mb-6">Les bénéfices</h3>
                            <ul className="space-y-3">
                                {[
                                    "Réduction du temps de détection et de réponse (MTTD / MTTR)",
                                    "Limitation des impacts financiers et opérationnels",
                                    "Visibilité accrue sur les menaces et les activités suspectes",
                                    "Renforcement de la résilience et de la continuité des activités",
                                    "Tranquillité d’esprit grâce à une surveillance proactive"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <ShieldAlert className="w-5 h-5 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why SOC */}
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl font-bold text-white mb-8 text-center">Pourquoi mettre en place un service SOC ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                                <Eye className="w-10 h-10 text-red-500 mx-auto mb-4" />
                                <h4 className="font-bold text-white mb-2">Détecter les menaces avant</h4>
                                <p className="text-gray-400 text-sm">Identifier rapidement les comportements suspects et contenir les attaques à un stade précoce.</p>
                            </div>
                            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                                <Siren className="w-10 h-10 text-red-500 mx-auto mb-4" />
                                <h4 className="font-bold text-white mb-2">Réagir efficacement</h4>
                                <p className="text-gray-400 text-sm">Contenir et corriger les incidents de manière coordonnée, réduisant leur impact.</p>
                            </div>
                            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                                <LineChart className="w-10 h-10 text-red-500 mx-auto mb-4" />
                                <h4 className="font-bold text-white mb-2">Améliorer la posture</h4>
                                <p className="text-gray-400 text-sm">Amélioration continue grâce à l’analyse des incidents et aux retours d’expérience.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#092963] mb-6">
                        Prêt à sécuriser votre entreprise ?
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Ne laissez pas les cybermenaces compromettre votre activité. Contactez nos experts dès aujourd'hui.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] text-white px-8 py-4 text-lg font-bold hover:bg-[#eb7e2a]/90 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                            Demander une consultation gratuite
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
