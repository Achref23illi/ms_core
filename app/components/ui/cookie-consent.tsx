'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface CookiePreferences {
    functional: boolean;
    marketing: boolean;
    analytics: boolean;
}

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        functional: true, // Always enabled
        marketing: false,
        analytics: false,
    });

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Show the banner after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted = {
            functional: true,
            marketing: true,
            analytics: true,
        };
        localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
        localStorage.setItem('cookie-consent-date', new Date().toISOString());
        setIsVisible(false);
    };

    const handleRejectAll = () => {
        const onlyFunctional = {
            functional: true,
            marketing: false,
            analytics: false,
        };
        localStorage.setItem('cookie-consent', JSON.stringify(onlyFunctional));
        localStorage.setItem('cookie-consent-date', new Date().toISOString());
        setIsVisible(false);
    };

    const handleSavePreferences = () => {
        localStorage.setItem('cookie-consent', JSON.stringify(preferences));
        localStorage.setItem('cookie-consent-date', new Date().toISOString());
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[#eb7e2a]/10 rounded-lg">
                                    <Cookie className="w-6 h-6 text-[#eb7e2a]" />
                                </div>
                                <h2 className="text-xl font-bold text-[#092963]">Gérer le consentement</h2>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Pour offrir les meilleures expériences, nous utilisons des technologies telles que les cookies pour stocker et/ou accéder aux informations des appareils. Le fait de consentir à ces technologies nous permettra de traiter des données telles que le comportement de navigation ou les ID uniques sur ce site. Le fait de ne pas consentir ou de retirer son consentement peut avoir un effet négatif sur certaines caractéristiques et fonctions.
                        </p>
                    </div>

                    {/* Cookie Options */}
                    <div className="p-6 space-y-4">
                        {/* Functional - Always On */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <div>
                                <h3 className="font-semibold text-[#092963]">Fonctionnel</h3>
                                <p className="text-xs text-gray-500">Nécessaire au fonctionnement du site</p>
                            </div>
                            <span className="text-xs font-medium text-[#eb7e2a] bg-[#eb7e2a]/10 px-3 py-1 rounded-full">
                                Toujours actif
                            </span>
                        </div>

                        {/* Toggle Details */}
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="flex items-center gap-2 text-sm font-medium text-[#092963] hover:text-[#eb7e2a] transition-colors"
                        >
                            {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            {showDetails ? 'Masquer les détails' : 'Afficher les options'}
                        </button>

                        <AnimatePresence>
                            {showDetails && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-3 overflow-hidden"
                                >
                                    {/* Analytics */}
                                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                        <div>
                                            <h3 className="font-semibold text-[#092963]">Analytique</h3>
                                            <p className="text-xs text-gray-500">Mesure d'audience et statistiques</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={preferences.analytics}
                                                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#eb7e2a]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#eb7e2a]"></div>
                                        </label>
                                    </div>

                                    {/* Marketing */}
                                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                        <div>
                                            <h3 className="font-semibold text-[#092963]">Marketing</h3>
                                            <p className="text-xs text-gray-500">Publicité personnalisée</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={preferences.marketing}
                                                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#eb7e2a]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#eb7e2a]"></div>
                                        </label>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Actions */}
                    <div className="p-6 pt-0 space-y-3">
                        <div className="flex gap-3">
                            <button
                                onClick={handleAcceptAll}
                                className="flex-1 py-3 px-4 bg-[#eb7e2a] hover:bg-[#d06f24] text-white font-semibold rounded-xl transition-colors"
                            >
                                Accepter
                            </button>
                            <button
                                onClick={handleRejectAll}
                                className="flex-1 py-3 px-4 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold rounded-xl transition-colors"
                            >
                                Refuser
                            </button>
                        </div>
                        {showDetails && (
                            <button
                                onClick={handleSavePreferences}
                                className="w-full py-3 px-4 bg-[#092963] hover:bg-[#0a3478] text-white font-semibold rounded-xl transition-colors"
                            >
                                Enregistrer les préférences
                            </button>
                        )}
                    </div>

                    {/* Footer Links */}
                    <div className="px-6 pb-6 pt-0">
                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-500">
                            <Link href="/privacy" className="hover:text-[#eb7e2a] underline transition-colors">
                                Politique de confidentialité
                            </Link>
                            <span>•</span>
                            <Link href="/privacy" className="hover:text-[#eb7e2a] underline transition-colors">
                                Mentions légales
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
