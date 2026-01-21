import { ArrowLeft, Scale, FileCheck, ShieldCheck, BookOpen, UserCheck, Server, CheckCircle2, Gavel, LayoutList, ClipboardCheck, BookOpenCheck, FileText } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

// ... (keep services if needed or replace them, but user provided new content structure so I will essentially replace the body content)

export default function CompliancePage() {
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
                        src="/images/compliance-audit.jpg"
                        alt="Compliance Audit Background"
                        fill
                        className="object-cover opacity-20 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#092963] via-[#092963]/95 to-[#0f3475]/90 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092963] to-transparent" />
                </div>

                <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 font-semibold tracking-wider text-xs mb-5 backdrop-blur-sm">
                            GOUVERNANCE & CONFORMITÉ
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Audit et <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Conformité
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base text-gray-200 leading-relaxed mb-8">
                            Assurez la protection de votre organisation et respectez les exigences légales avec une démarche structurée et pragmatique.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-bold shadow-lg shadow-blue-500/20 transition-all">
                                Démarrer mon audit
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl space-y-20">

                    {/* Introduction */}
                    <div className="text-center md:text-left max-w-4xl mx-auto md:mx-0">
                        <h2 className="text-3xl font-bold text-[#092963] mb-6">Répondre aux exigences, simplement</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            Les exigences en matière de cybersécurité, de protection des renseignements personnels et de conformité réglementaire sont de plus en plus strictes. Un audit de sécurité permet d’évaluer votre niveau de conformité, d’identifier les écarts et de structurer une démarche claire pour répondre aux exigences normatives et légales applicables à votre organisation.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Chez Technologies MS Core, nous accompagnons les organisations dans leurs démarches d’audit et de conformité en adoptant une approche pragmatique, alignée sur les standards internationaux et adaptée aux réalités opérationnelles.
                        </p>
                    </div>

                    {/* Normes couvertes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
                            <h3 className="text-2xl font-bold text-[#092963] mb-6">Normes et cadres couverts</h3>
                            <p className="text-gray-600 mb-4">Nos services d’audit et de conformité couvrent notamment :</p>
                            <ul className="space-y-4">
                                {[
                                    "ISO 27001 – Système de management de la sécurité de l’information (SMSI)",
                                    "PCI DSS – Sécurité des données de cartes de paiement",
                                    "SSAE 18 / SOC 2 Type II – Contrôles des services et sécurité des données",
                                    "Réglementations sur la protection des renseignements personnels (ex. lois locales et internationales)",
                                    "Autres exigences sectorielles ou contractuelles"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <BookOpenCheck className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/compliance-audit.jpg"
                                alt="Compliance Visualization"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[#092963]/10 mix-blend-overlay" />
                        </div>
                    </div>

                    {/* Approche & Accompagnement */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#092963] mb-6 flex items-center gap-3">
                                <ClipboardCheck className="w-8 h-8 text-[#eb7e2a]" /> Notre approche
                            </h3>
                            <p className="text-gray-600 mb-4">Nous adoptons une démarche structurée et progressive :</p>
                            <ul className="space-y-3">
                                {[
                                    "Analyse du périmètre et des exigences applicables",
                                    "Évaluation des contrôles organisationnels, techniques et opérationnels",
                                    "Identification des écarts de conformité et des risques associés",
                                    "Évaluation du niveau de maturité et de conformité",
                                    "Élaboration d’un plan d’actions correctives priorisé"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#eb7e2a] mt-2.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-sm text-gray-500 italic">Notre objectif est de rendre la conformité compréhensible, applicable et durable.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-[#092963] mb-6 flex items-center gap-3">
                                <LayoutList className="w-8 h-8 text-blue-600" /> Accompagnement
                            </h3>
                            <p className="text-gray-600 mb-4">Au-delà de l’audit, nous accompagnons votre organisation dans :</p>
                            <ul className="space-y-3">
                                {[
                                    "La définition ou la mise à jour des politiques et procédures",
                                    "La mise en place des contrôles requis",
                                    "La préparation aux audits externes et certifications",
                                    "La sensibilisation des équipes aux exigences réglementaires",
                                    "L’amélioration continue du dispositif de conformité"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
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
                                    "Un rapport d’audit clair et structuré",
                                    "La liste des écarts et non-conformités identifiés",
                                    "Une évaluation du niveau de conformité et de maturité",
                                    "Un plan d’actions concret et priorisé",
                                    "Des recommandations adaptées à vos contraintes opérationnelles"
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
                                    "Meilleure maîtrise des risques réglementaires et juridiques",
                                    "Structuration claire des démarches de conformité",
                                    "Réduction des risques de sanctions et d’incidents",
                                    "Renforcement de la confiance des clients et partenaires",
                                    "Alignement durable entre sécurité, conformité et opérations"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <ShieldCheck className="w-5 h-5 text-[#092963] mt-1 shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why Audit */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-[#092963] mb-8 text-center">Pourquoi réaliser un audit de conformité ?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">1</div>
                                <h4 className="font-bold text-[#092963] mb-2">Répondre aux exigences</h4>
                                <p className="text-gray-600 text-sm">Démontrer votre conformité aux normes et réglementations.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">2</div>
                                <h4 className="font-bold text-[#092963] mb-2">Corriger les écarts</h4>
                                <p className="text-gray-600 text-sm">Anticiper les constats et corriger les faiblesses avant un contrôle officiel.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#eb7e2a] shadow-sm">3</div>
                                <h4 className="font-bold text-[#092963] mb-2">Conformité durable</h4>
                                <p className="text-gray-600 text-sm">Structurer un cadre de gouvernance et de sécurité robuste et évolutif.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#092963] mb-6">
                        Passez à l'action dès aujourd'hui
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Ne laissez pas la complexité réglementaire ralentir votre croissance.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#092963] text-white px-8 py-4 text-lg font-bold hover:bg-[#0f3475] transition-all shadow-lg hover:shadow-xl hover:scale-105">
                            Demander un diagnostic gratuit
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
