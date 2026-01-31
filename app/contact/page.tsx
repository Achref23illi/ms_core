'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/app/components';
import { Button } from '@/app/components/ui/button';
import { faqData } from '@/app/lib/faq-data';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget as HTMLFormElement);
            const data = {
                type: 'contact',
                ...Object.fromEntries(formData),
            };

            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                alert("Une erreur est survenue. Veuillez réessayer.");
            }
        } catch (error) {
            console.error(error);
            alert("Une erreur est survenue.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Header / Hero */}
            <section className="relative pt-40 pb-16 px-4 bg-[#092963] text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#092963]/90 z-10" />
                    <img
                        src="/images/page-contact.png"
                        alt="Contact Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>
                <div className="container mx-auto relative z-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Communiquez avec nous
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-blue-100 max-w-2xl mx-auto"
                    >
                        Une équipe d'experts prête à répondre à vos enjeux technologiques.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        {/* Left Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-[#092963] mb-8">
                                Dites-nous comment nous pouvons vous aider.
                            </h2>

                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                                {isSuccess ? (
                                    <div className="text-center py-10">
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#092963] mb-2">Message envoyé !</h3>
                                        <p className="text-gray-600 mb-6">
                                            Merci de nous avoir contactés. Nous vous répondrons sous peu.
                                        </p>
                                        <Button
                                            onClick={() => setIsSuccess(false)}
                                            className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
                                        >
                                            Envoyer un autre message
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <label htmlFor="firstname" className="text-sm font-semibold text-gray-700">Votre prénom *</label>
                                                <input
                                                    id="firstname"
                                                    name="firstname"
                                                    required
                                                    type="text"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#eb7e2a] focus:ring-2 focus:ring-[#eb7e2a]/20 outline-none transition-all bg-white"
                                                    placeholder="Prénom"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="lastname" className="text-sm font-semibold text-gray-700">Votre nom *</label>
                                                <input
                                                    id="lastname"
                                                    name="lastname"
                                                    required
                                                    type="text"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#eb7e2a] focus:ring-2 focus:ring-[#eb7e2a]/20 outline-none transition-all bg-white"
                                                    placeholder="Nom"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Votre courriel *</label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    required
                                                    type="email"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#eb7e2a] focus:ring-2 focus:ring-[#eb7e2a]/20 outline-none transition-all bg-white"
                                                    placeholder="votre@email.com"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Numéro de téléphone *</label>
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    type="tel"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#eb7e2a] focus:ring-2 focus:ring-[#eb7e2a]/20 outline-none transition-all bg-white"
                                                    placeholder="(123) 456-7890"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <label htmlFor="organization" className="text-sm font-semibold text-gray-700">Votre entreprise *</label>
                                                <input
                                                    id="organization"
                                                    name="organization"
                                                    required
                                                    type="text"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#eb7e2a] focus:ring-2 focus:ring-[#eb7e2a]/20 outline-none transition-all bg-white"
                                                    placeholder="Nom de l'entreprise"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="website" className="text-sm font-semibold text-gray-700">Site web</label>
                                                <input
                                                    id="website"
                                                    name="website"
                                                    type="url"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#eb7e2a] focus:ring-2 focus:ring-[#eb7e2a]/20 outline-none transition-all bg-white"
                                                    placeholder="https://www.exemple.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Sujet *</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#eb7e2a] focus:ring-2 focus:ring-[#eb7e2a]/20 outline-none transition-all bg-white appearance-none"
                                            >
                                                <option value="">Sélectionnez un sujet</option>
                                                <option value="cyber">Cybersécurité</option>
                                                <option value="ai">Intelligence Artificielle</option>
                                                <option value="cloud">Solutions Cloud</option>
                                                <option value="equipment">Équipements</option>
                                                <option value="other">Autre</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-semibold text-gray-700">Votre message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#eb7e2a] focus:ring-2 focus:ring-[#eb7e2a]/20 outline-none transition-all bg-white resize-y"
                                                placeholder="Dites-nous en plus sur vos besoins..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 rounded-lg bg-[#eb7e2a] hover:bg-[#d66e1e] text-white font-bold shadow-md transition-all"
                                        >
                                            {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Right Column: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-12"
                        >
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#092963] mb-6">
                                    Tous nos bureaux
                                </h2>

                                <div className="mb-12 space-y-4">
                                    {/* This mimics the "Un seul numéro" style but just with email for now as we have multiple numbers */}
                                    <div className="bg-[#092963] p-6 rounded-2xl text-white text-center md:text-left">
                                        <p className="text-lg opacity-80 mb-2">Pour nous rejoindre par courriel</p>
                                        <a href="mailto:info@techmscore.com" className="text-2xl font-bold hover:text-[#eb7e2a] transition-colors break-all">
                                            info@techmscore.com
                                        </a>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-8">
                                    {/* Canada */}
                                    <div className="bg-white p-0 md:p-4 rounded-2xl border-0 md:border border-gray-100">
                                        <div className="flex items-center gap-3 mb-4">
                                            <img src="https://flagcdn.com/ca.svg" alt="Canada" className="w-8 h-6 object-cover rounded shadow-sm" />
                                            <h3 className="text-2xl font-bold text-[#eb7e2a]">QUÉBEC (Siège social)</h3>
                                        </div>
                                        <address className="not-italic text-gray-600 space-y-2 mb-6 text-lg">
                                            <p>877 rue du butor,<br />Lévis (QC), Canada.</p>
                                        </address>
                                        <div className="flex items-center gap-3 text-gray-900 font-bold text-xl">
                                            <Phone className="w-6 h-6 text-[#eb7e2a]" />
                                            <a href="tel:+15146092990" className="hover:text-[#eb7e2a] transition-colors">+1 514 609 2990</a>
                                        </div>
                                        <div className="mt-6 h-64 bg-gray-100 rounded-xl overflow-hidden relative border border-gray-200">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                frameBorder="0"
                                                title="Carte Siège Social Canada"
                                                scrolling="no"
                                                marginHeight={0}
                                                marginWidth={0}
                                                src="https://maps.google.com/maps?width=100%25&height=600&hl=fr&q=877%20rue%20du%20butor,%20L%C3%A9vis%20(QC),%20Canada&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                                className="absolute inset-0 w-full h-full"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-gray-200" />

                                    {/* Côte d'Ivoire */}
                                    <div className="bg-white p-0 md:p-4 rounded-2xl border-0 md:border border-gray-100">
                                        <div className="flex items-center gap-3 mb-4">
                                            <img src="https://flagcdn.com/ci.svg" alt="Côte d'Ivoire" className="w-8 h-6 object-cover rounded shadow-sm" />
                                            <h3 className="text-2xl font-bold text-[#eb7e2a]">ABIDJAN (Filiale)</h3>
                                        </div>
                                        <address className="not-italic text-gray-600 space-y-2 mb-6 text-lg">
                                            <p>Port-Bouët,<br />Zone industrielle Vridi</p>
                                        </address>
                                        <div className="flex items-center gap-3 text-gray-900 font-bold text-xl">
                                            <Phone className="w-6 h-6 text-[#eb7e2a]" />
                                            <a href="tel:+2250706052436" className="hover:text-[#eb7e2a] transition-colors">+225 07 06 05 24 36</a>
                                        </div>
                                        <div className="mt-6 h-64 bg-gray-100 rounded-xl overflow-hidden relative border border-gray-200">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                frameBorder="0"
                                                title="Carte Filiale Abidjan"
                                                scrolling="no"
                                                marginHeight={0}
                                                marginWidth={0}
                                                src="https://maps.google.com/maps?width=100%25&height=600&hl=fr&q=Port-Bou%C3%ABt,%20Zone%20industrielle%20Vridi,%20Abidjan&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                                className="absolute inset-0 w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-[#092963] text-sm font-bold uppercase tracking-wider rounded-md mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#092963] mb-4">
                            Questions fréquentes
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Vous avez des questions sur nos services ou la cybersécurité en Côte d'Ivoire ?
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#eb7e2a]/50 transition-colors shadow-sm cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <button
                                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                                >
                                    <span className={`text-lg font-medium transition-colors ${openFaqIndex === index ? 'text-[#eb7e2a]' : 'text-gray-900'}`}>
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-[#eb7e2a]' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openFaqIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                                {/* Check if answer needs a link injection for the last item */}
                                                {index === faqData.length - 1 ? (
                                                    <span>
                                                        {item.answer.replace(/Contactez Technologies MS Core pour une première évaluation confidentielle\./, '')}
                                                        Contactez Technologies MS Core pour une première évaluation confidentielle.{' '}
                                                        <Link href="/services/security" className="text-[#eb7e2a] hover:underline font-medium inline-flex items-center gap-1">
                                                            Nos services de cybersécurité <ArrowRight className="w-3 h-3" />
                                                        </Link>
                                                    </span>
                                                ) : (
                                                    item.answer
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
