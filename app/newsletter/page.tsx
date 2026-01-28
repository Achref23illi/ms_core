'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Footer, Header } from '@/app/components';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export default function NewsletterPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('idle');

        try {
            const formData = new FormData(e.currentTarget as HTMLFormElement);
            const data = {
                type: 'newsletter',
                email: formData.get('email'),
                firstname: formData.get('firstname'),
                lastname: formData.get('lastname'),
                company: formData.get('company'),
                // Combine names for fallback
                name: `${formData.get('firstname')} ${formData.get('lastname')}`
            };

            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#092963] text-white flex flex-col">
            <Header />

            <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-2xl"
                >
                    <div className="text-center mb-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Inscription à l'infolettre</h1>
                        <p className="text-xl text-blue-200">
                            Restez à l'affût et assurez la sécurité de votre entreprise !
                        </p>
                    </div>

                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center"
                        >
                            <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Inscription confirmée !</h3>
                            <p className="text-blue-100 mb-8">
                                Merci de vous être inscrit. Vous recevrez bientôt nos actualités et conseils cybersécurité directement dans votre boîte courriel.
                            </p>
                            <Button
                                onClick={() => setStatus('idle')}
                                className="bg-white text-[#092963] hover:bg-gray-100 font-bold"
                            >
                                Retour au formulaire
                            </Button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl space-y-6">

                            {status === 'error' && (
                                <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-4 rounded-xl flex items-center gap-3">
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                    <p>Une erreur est survenue lors de l'inscription. Veuillez réessayer.</p>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-blue-100">
                                    Adresse courriel d'entreprise <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white/20 focus:border-[#eb7e2a] focus:ring-1 focus:ring-[#eb7e2a] outline-none transition-all text-white placeholder-blue-300/50"
                                    placeholder="nom@entreprise.com"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstname" className="block text-sm font-medium text-blue-100">
                                        Prénom <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white/20 focus:border-[#eb7e2a] focus:ring-1 focus:ring-[#eb7e2a] outline-none transition-all text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastname" className="block text-sm font-medium text-blue-100">
                                        Nom de famille <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white/20 focus:border-[#eb7e2a] focus:ring-1 focus:ring-[#eb7e2a] outline-none transition-all text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="block text-sm font-medium text-blue-100">
                                    Nom de l'entreprise <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white/20 focus:border-[#eb7e2a] focus:ring-1 focus:ring-[#eb7e2a] outline-none transition-all text-white"
                                />
                            </div>

                            <div className="pt-2">
                                <p className="text-xs text-red-400 mb-4">* Obligatoire.</p>

                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            required
                                            className="peer h-5 w-5 appearance-none rounded border border-white/30 bg-white/10 checked:bg-[#eb7e2a] checked:border-[#eb7e2a] transition-all cursor-pointer mt-0.5"
                                        />
                                        <CheckCircle className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 top-1.5 left-[3px] pointer-events-none transition-opacity" />
                                    </div>
                                    <span className="text-sm text-blue-100 group-hover:text-white transition-colors">
                                        J'accepte la <Link href="/privacy" className="text-[#eb7e2a] hover:underline">politique de confidentialité</Link>
                                    </span>
                                </label>
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-6 rounded-lg bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white font-bold text-lg shadow-lg shadow-[#eb7e2a]/20 transition-all hover:scale-[1.02] active:scale-[0.98] mt-4"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Inscription en cours...
                                    </>
                                ) : (
                                    "Je m'inscris"
                                )}
                            </Button>
                        </form>
                    )}
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
