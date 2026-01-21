'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, AlertCircle, ChevronRight, Shield, Activity, FileText } from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { Button } from './button';

interface SupportFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultTab?: 'incident' | 'diagnostic';
}

type FormStep = 'identification' | 'details' | 'success';

export function SupportFormModal({ isOpen, onClose, defaultTab = 'incident' }: SupportFormModalProps) {
    const [activeTab, setActiveTab] = useState<'incident' | 'diagnostic'>(defaultTab);
    const [step, setStep] = useState<FormStep>('identification');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reset state when opening
    React.useEffect(() => {
        if (isOpen) {
            setStep('identification');
            setActiveTab(defaultTab);
            setIsSubmitting(false);
        }
    }, [isOpen, defaultTab]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const form = e.currentTarget as HTMLFormElement;
            const formData = new FormData(form);

            // Collect all data
            const data: any = {
                type: activeTab === 'incident' ? 'support' : 'diagnostic',
            };

            // Handle standard fields
            formData.forEach((value, key) => {
                // If key already exists (like multiple checkboxes), make it an array
                if (data[key]) {
                    if (!Array.isArray(data[key])) {
                        data[key] = [data[key]];
                    }
                    data[key].push(value);
                } else {
                    data[key] = value;
                }
            });

            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStep('success');
            } else {
                alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
            }
        } catch (error) {
            console.error(error);
            alert("Une erreur est survenue.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                    <div>
                        <h2 className="text-xl font-bold text-[#092963]">Centre de Soutien & Diagnostic</h2>
                        <p className="text-sm text-gray-500">Nos experts sont là pour évaluer votre situation et vous accompagner.</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Tabs */}
                {step !== 'success' && (
                    <div className="flex border-b border-gray-100">
                        <button
                            type="button"
                            onClick={() => { setActiveTab('incident'); setStep('identification'); }}
                            className={cn(
                                "flex-1 py-4 text-sm font-medium transition-colors relative",
                                activeTab === 'incident' ? "text-[#eb7e2a]" : "text-gray-500 hover:text-gray-700 bg-gray-50/50"
                            )}
                        >
                            <span className="flex items-center justify-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                Besoin de Soutien / Incident
                            </span>
                            {activeTab === 'incident' && (
                                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#eb7e2a]" />
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={() => { setActiveTab('diagnostic'); setStep('identification'); }}
                            className={cn(
                                "flex-1 py-4 text-sm font-medium transition-colors relative",
                                activeTab === 'diagnostic' ? "text-[#eb7e2a]" : "text-gray-500 hover:text-gray-700 bg-gray-50/50"
                            )}
                        >
                            <span className="flex items-center justify-center gap-2">
                                <Activity className="w-4 h-4" />
                                Diagnostic Gratuit
                            </span>
                            {activeTab === 'diagnostic' && (
                                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#eb7e2a]" />
                            )}
                        </button>
                    </div>
                )}

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    <AnimatePresence mode="wait">
                        {step === 'success' ? (
                            <SuccessView onClose={onClose} />
                        ) : (
                            <motion.form
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                onSubmit={handleSubmit}
                                className="space-y-8"
                            >
                                {/* Section 1: Identification (Shared) */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 text-[#092963] font-semibold border-b border-gray-100 pb-2">
                                        <div className="w-6 h-6 rounded-full bg-[#092963] text-white flex items-center justify-center text-xs">1</div>
                                        Identification
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input label="Nom et prénom" name="name" required />
                                        <Input label="Fonction / Titre" name="jobTitle" />
                                        <Input label="Entreprise / Organisation" name="company" required />
                                        <Input label="Pays / Ville" name="city" required />
                                        <Input label="Adresse courriel" name="email" type="email" required />
                                        <Input label="Numéro de téléphone" name="phone" type="tel" required />
                                    </div>
                                </div>

                                {/* Section 2: Specific Form */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 text-[#092963] font-semibold border-b border-gray-100 pb-2">
                                        <div className="w-6 h-6 rounded-full bg-[#092963] text-white flex items-center justify-center text-xs">2</div>
                                        {activeTab === 'incident' ? 'Détails de l\'incident' : 'Questionnaire d\'évaluation'}
                                    </div>

                                    {activeTab === 'incident' ? (
                                        <IncidentFormFields />
                                    ) : (
                                        <DiagnosticFormFields />
                                    )}
                                </div>

                                {/* Footer Actions */}
                                <div className="flex justify-end pt-4 border-t border-gray-100">
                                    <Button type="button" variant="ghost" onClick={onClose} className="mr-2">
                                        Annuler
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="bg-[#eb7e2a] hover:bg-[#d67020] text-white min-w-[150px]"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                                    </Button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}

function Input({ label, required, type = "text", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
    return (
        <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eb7e2a]/20 focus:border-[#eb7e2a] transition-all"
                required={required}
                type={type}
                {...props}
            />
        </div>
    );
}

function TextArea({ label, required, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
    return (
        <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <textarea
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eb7e2a]/20 focus:border-[#eb7e2a] transition-all min-h-[100px]"
                required={required}
                {...props}
            />
        </div>
    );
}

function RadioGroup({ label, options, name }: { label: string, options: string[], name: string }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 block">{label}</label>
            <div className="space-y-2">
                {options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" value={opt} name={name} className="accent-[#eb7e2a] w-4 h-4" />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900">{opt}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

function CheckboxGroup({ label, options, name }: { label: string, options: string[], name: string }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 block">{label}</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" name={name} value={opt} className="accent-[#eb7e2a] w-4 h-4 rounded" />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900">{opt}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

function IncidentFormFields() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <RadioGroup
                label="Quel est le motif principal de votre demande ?"
                name="motif"
                options={[
                    "Cyberattaque en cours",
                    "Cyberattaque passée",
                    "Suspicion de fraude",
                    "Besoin d’assistance préventive",
                    "Audit / évaluation de sécurité",
                    "Autre"
                ]}
            />

            <RadioGroup
                label="S’agit-il d’une situation urgente ?"
                name="urgence"
                options={[
                    "Oui – intervention immédiate requise",
                    "Non – assistance planifiée"
                ]}
            />

            <CheckboxGroup
                label="Quels types d’incidents vous affecte ?"
                name="incidents"
                options={[
                    "Hameçonnage (phishing)",
                    "Rançongiciel",
                    "Vol ou fuite de données",
                    "Compromission de comptes",
                    "Fraude financière",
                    "Indisponibilité des systèmes",
                    "Autre"
                ]}
            />

            <RadioGroup
                label="Quand l’incident (ou le besoin) a-t-il été détecté ?"
                name="date"
                options={[
                    "Aujourd’hui",
                    "Moins de 48 heures",
                    "Moins de 7 jours"
                ]}
            />

            <TextArea label="Souhaitez-vous ajouter des informations complémentaires ?" name="message" />
        </div>
    );
}

function DiagnosticFormFields() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-blue-50 p-4 rounded-lg text-sm text-[#092963] mb-4">
                En quelques minutes, obtenez une première analyse de votre posture de cybersécurité. Répondez par Oui ou Non.
            </div>

            <QuestionSection
                title="Gouvernance & pilotage de la sécurité"
                questions={[
                    "Existe-t-il une politique de sécurité de l’information formalisée, documentée et validée par la direction ?",
                    "Les rôles et responsabilités en cybersécurité sont-ils clairement définis et communiqués ?",
                    "La direction est-elle régulièrement informée des risques et incidents de cybersécurité ?",
                    "La sécurité de l’information est-elle intégrée dans les projets IT et métiers dès la phase de conception ?"
                ]}
            />

            <QuestionSection
                title="Gestion des risques & conformité"
                questions={[
                    "Avez-vous réalisé une analyses des risques cybersécurité au cours des 12 derniers mois ?",
                    "Les risques identifiés font-ils l’objet d’un plan de traitement documenté et suivi ?",
                    "Connaissez-vous les lois et règlements auxquelles votre organisation est assujettie en matière de sécurité ?",
                    "Des audits de sécurité ou de conformité sont-ils réalisés de façon périodique en interne ou par des firmes externes ?"
                ]}
            />

            <QuestionSection
                title="Ressources humaines & sensibilisation"
                questions={[
                    "Les employés et prestataires signent-ils des engagements de confidentialité avant tout accès aux données sensibles ?",
                    "Un programme de sensibilisation à la cybersécurité est-il en place (hameçonnage, mots de passe) ?",
                    "Les départs d’employés donnent-ils lieu à une révocation immédiate et systématique des accès ?"
                ]}
            />

            <QuestionSection
                title="Gestion des actifs & contrôle d’accès"
                questions={[
                    "Disposez-vous d’un inventaire à jour des actifs informationnels ?",
                    "Existe-il un processus formalisé de gestion des accès (Création, modification, suppression) ?",
                    "Les informations sont-elles classifiées selon leur sensibilité (publique, confidentielle, critique) ?",
                    "Les comptes à privilèges (administrateurs) font-ils l’objet d’une surveillance spécifique ?"
                ]}
            />

            <QuestionSection
                title="Sécurité technique & exploitation"
                questions={[
                    "Les systèmes critiques bénéficient-ils de mises à jour et correctifs de sécurité réguliers ?",
                    "Disposez-vous d’un processus de sauvegarde et de restauration des données, testé périodiquement ?",
                    "Les incidents de sécurité font-ils l’objet d’une détection, d’un traitement et d’un retour d’expérience formalisé ?",
                    "Utilisez-vous un SIEM ou tout autre outil de surveillance des évènements de sécurité ?",
                    "Disposez-vous d’un programme de tests d’intrusion internes ou externes ?"
                ]}
            />
        </div>
    );
}

function QuestionSection({ title, questions }: { title: string, questions: string[] }) {
    return (
        <div className="space-y-4">
            <h4 className="font-bold text-[#eb7e2a] border-b border-gray-100 pb-2">{title}</h4>
            <div className="space-y-4">
                {questions.map((q, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors">
                        <p className="text-sm text-gray-700 flex-1">{q}</p>
                        <div className="flex gap-4 min-w-[120px]">
                            <label className="flex items-center gap-1 cursor-pointer">
                                <input type="radio" value="Oui" name={q} className="accent-[#eb7e2a]" /> <span className="text-sm">Oui</span>
                            </label>
                            <label className="flex items-center gap-1 cursor-pointer">
                                <input type="radio" value="Non" name={q} className="accent-[#eb7e2a]" /> <span className="text-sm">Non</span>
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SuccessView({ onClose }: { onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
        >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#092963] mb-2">Demande envoyée avec succès</h3>
            <p className="text-gray-600 max-w-md mb-8">
                Merci de nous avoir contactés. Nos experts ont bien reçu vos informations et analyseront votre demande dans les plus brefs délais. Vous serez contacté sous peu.
            </p>
            <Button onClick={onClose} className="bg-[#092963] text-white hover:bg-[#092963]/90">
                Retour au site
            </Button>
        </motion.div>
    );
}
