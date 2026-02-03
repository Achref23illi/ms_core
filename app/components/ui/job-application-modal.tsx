'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Upload, FileText, Trash2 } from 'lucide-react';
import { Button } from './button';

interface JobApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultJobTitle?: string;
}

type FormStep = 'form' | 'success';

export function JobApplicationModal({ isOpen, onClose, defaultJobTitle = '' }: JobApplicationModalProps) {
    const [step, setStep] = useState<FormStep>('form');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [cvFile, setCvFile] = useState<File | null>(null);

    // Reset state when opening
    useEffect(() => {
        if (isOpen) {
            setStep('form');
            setCvFile(null);
            setIsSubmitting(false);
        }
    }, [isOpen]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setCvFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const form = e.currentTarget as HTMLFormElement;
            const formData = new FormData(form);

            if (cvFile) {
                formData.set('cv', cvFile);
            }
            // defaultJobTitle might be overriden by hidden input if needed, 
            // but we can ensure it's there
            if (!formData.get('jobTitle')) {
                formData.append('jobTitle', defaultJobTitle);
            }

            const response = await fetch('/api/apply', {
                method: 'POST',
                body: formData,
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
                className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                    <div>
                        <h2 className="text-xl font-bold text-[#092963]">Postuler maintenant</h2>
                        <p className="text-sm text-gray-500">{defaultJobTitle}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    <AnimatePresence mode="wait">
                        {step === 'success' ? (
                            <SuccessView onClose={onClose} />
                        ) : (
                            <motion.form
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <input type="hidden" name="jobTitle" value={defaultJobTitle} />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input label="Prénom" name="firstName" required />
                                    <Input label="Nom" name="lastName" required />
                                </div>

                                <Input label="Email" name="email" type="email" required />
                                <Input label="Téléphone" name="phone" type="tel" required />

                                {/* File Upload */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 block">CV (PDF ou DOCX) *</label>
                                    <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${cvFile ? 'border-[#eb7e2a] bg-[#eb7e2a]/5' : 'border-gray-300 hover:border-[#eb7e2a]'}`}>
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            id="cv-upload"
                                            required
                                        />

                                        {!cvFile ? (
                                            <label htmlFor="cv-upload" className="cursor-pointer flex flex-col items-center gap-2">
                                                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#092963] flex items-center justify-center">
                                                    <Upload className="w-5 h-5" />
                                                </div>
                                                <span className="text-sm font-medium text-[#092963]">Cliquez pour ajouter votre CV</span>
                                                <span className="text-xs text-gray-500">PDF, DOC, DOCX (Max 5Mo)</span>
                                            </label>
                                        ) : (
                                            <div className="flex items-center justify-between bg-white p-3 rounded border border-[#eb7e2a]/30">
                                                <div className="flex items-center gap-3">
                                                    <FileText className="w-5 h-5 text-[#eb7e2a]" />
                                                    <span className="text-sm font-medium text-gray-700 truncate max-w-[200px]">{cvFile.name}</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => setCvFile(null)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Message (Optionnel)</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eb7e2a]/20 focus:border-[#eb7e2a] transition-all bg-white resize-none"
                                        placeholder="Dites-nous pourquoi vous êtes la personne idéale..."
                                    />
                                </div>

                                <div className="flex justify-end pt-4 border-t border-gray-100">
                                    <Button type="button" variant="ghost" onClick={onClose} className="mr-2">
                                        Annuler
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="bg-[#eb7e2a] hover:bg-[#d67020] text-white min-w-[150px]"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma candidature'}
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
            <h3 className="text-2xl font-bold text-[#092963] mb-2">Candidature envoyée !</h3>
            <p className="text-gray-600 max-w-md mb-8">
                Merci de votre intérêt. Votre candidature a été transmise à notre équipe RH. Vous recevrez un courriel de confirmation sous peu.
            </p>
            <Button onClick={onClose} className="bg-[#092963] text-white hover:bg-[#092963]/90">
                Retour au site
            </Button>
        </motion.div>
    );
}
