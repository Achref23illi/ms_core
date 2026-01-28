'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import { assets } from '@/app/config';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-foreground text-background py-12 px-4 relative z-50">
            <div className="container mx-auto max-w-6xl">
                {/* Newsletter Section */}
                <div className="flex flex-col md:flex-row justify-between items-center pb-12 mb-12 border-b border-background/20 gap-8">
                    <div className="space-y-4 text-center md:text-left max-w-xl">
                        <h3 className="text-3xl font-bold">Abonnez-vous à notre infolettre</h3>
                        <p className="text-background/80 text-lg">
                            Pour rester à l&apos;affût et vous assurer de la sécurité de votre entreprise.
                        </p>
                        <Link
                            href="/newsletter"
                            className="inline-block bg-[#eb7e2a] hover:bg-[#eb7e2a]/90 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105"
                        >
                            S&apos;inscrire à l&apos;infolettre
                        </Link>
                    </div>
                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex items-center gap-6">
                            <a href="#" className="p-2 bg-background/5 rounded-full hover:bg-background/10 transition-colors">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="p-2 bg-background/5 rounded-full hover:bg-background/10 transition-colors">
                                <Youtube className="w-6 h-6" />
                            </a>
                            <a href="#" className="p-2 bg-background/5 rounded-full hover:bg-background/10 transition-colors">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="p-2 bg-background/5 rounded-full hover:bg-background/10 transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                        <Link href="/privacy" className="text-sm font-medium text-background/60 hover:text-background transition-colors">
                            Politique de confidentialité
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <img
                            src={assets.images.logo}
                            alt="MS Core Technologies"
                            className="h-10 w-auto mb-4 brightness-0 invert"
                        />
                        <p className="text-background/70 text-sm leading-relaxed">
                            Transformation numérique sécurisée, performante et orientée résultats.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-background/70">
                            <li><Link href="/services/security" className="hover:text-background transition-colors">Cybersécurité</Link></li>
                            <li><Link href="/services/ai" className="hover:text-background transition-colors">Intelligence Artificielle</Link></li>
                            <li><Link href="/services/microsoft-365" className="hover:text-background transition-colors">Solutions Microsoft & Cloud</Link></li>
                            <li><Link href="/services/materiels" className="hover:text-background transition-colors">Matériels & Équipements</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-4">Entreprise</h4>
                        <ul className="space-y-2 text-sm text-background/70">
                            <li><Link href="/about" className="hover:text-background transition-colors">À propos</Link></li>
                            <li><Link href="/careers" className="hover:text-background transition-colors">Carrières</Link></li>
                            <li><Link href="/privacy" className="hover:text-background transition-colors">Politique de confidentialité</Link></li>
                            <li><Link href="/faq" className="hover:text-background transition-colors">FAQ</Link></li>
                            <li>
                                <button
                                    onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
                                    className="hover:text-background transition-colors text-left"
                                >
                                    Gérer les cookies
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-3 lg:col-span-2">
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <div className="flex flex-col gap-4 text-sm text-background/70">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:info@techmscore.com" className="hover:text-background transition-colors">info@techmscore.com</a>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                                <div>
                                    <h5 className="font-semibold text-background/90 text-xs uppercase tracking-wider mb-2">Canada</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <Phone className="w-4 h-4" />
                                            <span>+1 514 609 2990</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <MapPin className="w-4 h-4 mt-0.5 min-w-[16px]" />
                                            <span>877 rue du butor, Lévis (QC), G7A 5M1</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-background/90 text-xs uppercase tracking-wider mb-2">Côte d&apos;Ivoire</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <Phone className="w-4 h-4" />
                                            <span>+225 07 06 05 24 36</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <MapPin className="w-4 h-4 mt-0.5 min-w-[16px]" />
                                            <span>Port-Bouët, Zone industrielle Vridi, Abidjan</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-background/60">
                        © {currentYear} Technologies MS Core. Tous droits réservés.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-background/60 hover:text-background transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-background/60 hover:text-background transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
