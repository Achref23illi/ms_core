'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/app/lib/utils';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

interface NavItem {
    label: string;
    href?: string;
    children?: NavItem[];
}

const navItems: NavItem[] = [
    { label: 'Accueil', href: '/' },
    {
        label: 'Services',
        children: [
            {
                label: 'Cybersécurité et protection des données',
                children: [
                    { label: 'Diagnostic en cybersécurité', href: '/services/security/diagnostic' },
                    { label: 'Tests d\'intrusion', href: '/services/security/penetration-testing' },
                    { label: 'Sécurité cloud', href: '/services/security/cloud' },
                    { label: 'Surveillance et réponse aux incidents (SOC)', href: '/services/security/monitoring' },
                    { label: 'Audit et conformité', href: '/services/security/compliance' },
                    { label: 'Test d\'hameçonnage', href: '/services/security/phishing' },
                    { label: 'Cyberenquête et investigation numérique', href: '/services/security/investigation' },
                    { label: 'Formation et sensibilisation', href: '/services/security/training' },
                ]
            },
            {
                label: 'Intelligence artificielle et automatisation',
                children: [
                    { label: 'Conception et intégration de solutions IA', href: '/services/ai/integration' },
                    { label: 'Chatbots et assistants virtuels', href: '/services/ai/chatbots' },
                    { label: 'Formation et accompagnement IA', href: '/services/ai/training' },
                ]
            },
            {
                label: 'Solutions Microsoft et services Cloud',
                children: [
                    { label: 'Intégration et déploiement Microsoft', href: '/services/microsoft-365' },
                    { label: 'Migration vers le cloud', href: '/services/cloud/migration' },
                    { label: 'Infrastructures cloud sécurisées', href: '/services/cloud/infrastructure' },
                    { label: 'Sécurisation des environnements', href: '/services/security/azure' },
                    { label: 'Optimisation et gestion cloud', href: '/services/cloud/optimization' },
                    { label: 'Conseil et support Microsoft', href: '/services/microsoft/support' },
                ]
            },
            {
                label: 'Fourniture de matériels et solutions électroniques',
                href: '/services/materiels'
            }
        ]
    },
    { label: 'À propos', href: '/about' },
    { label: 'Carrière', href: '/careers' },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed left-0 right-0 top-0 z-50 flex justify-center py-4 transition-all duration-300",
                scrolled ? "py-2" : "py-6"
            )}
        >
            <nav
                className={cn(
                    "relative flex items-center justify-between px-6 py-3 transition-all duration-300 backdrop-blur-xl",
                    "rounded-full border border-gray-200/50 shadow-lg",
                    scrolled ? "bg-white w-[95%] md:w-[90%] lg:w-[85%]" : "bg-white/95 w-[90%] md:w-[80%]"
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <img src="/logo.png" alt="MS Core Technologies" className="h-8 md:h-10 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                    {navItems.map((item, index) => (
                        <div
                            key={item.label}
                            className="relative group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Top Level Item */}
                            {item.children ? (
                                <button
                                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#092963] transition-colors hover:text-[#eb7e2a] rounded-full hover:bg-gray-100/50"
                                >
                                    {item.label}
                                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                                </button>
                            ) : (
                                <Link
                                    href={item.href!}
                                    className="block px-4 py-2 text-sm font-medium text-[#092963] transition-colors hover:text-[#eb7e2a] rounded-full hover:bg-gray-100/50"
                                >
                                    {item.label}
                                </Link>
                            )}

                            {/* Dropdown Menu (Level 1) */}
                            {item.children && (
                                <div className="absolute top-full left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="rounded-xl border border-gray-100 bg-white/95 backdrop-blur-xl shadow-2xl p-2">
                                        {item.children.map((child, childIndex) => (
                                            <div key={childIndex} className="relative group/sub">
                                                {child.children ? (
                                                    <div className="flex items-center justify-between w-full rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#092963]/5 hover:text-[#092963] transition-colors cursor-pointer">
                                                        <span>{child.label}</span>
                                                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover/sub:text-[#092963]" />
                                                    </div>
                                                ) : (
                                                    <Link
                                                        href={child.href!}
                                                        className="block w-full rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#092963]/5 hover:text-[#092963] transition-colors"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                )}

                                                {/* Nested Dropdown Menu (Level 2) */}
                                                {child.children && (
                                                    <div className="absolute left-full top-0 ml-2 w-72 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 transform translate-x-[-10px] group-hover/sub:translate-x-0">
                                                        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white/95 backdrop-blur-xl shadow-2xl p-2">
                                                            {child.children.map((subChild, subIndex) => (
                                                                <Link
                                                                    key={subIndex}
                                                                    href={subChild.href!}
                                                                    className="block w-full rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-[#092963]/5 hover:text-[#092963] transition-colors"
                                                                >
                                                                    {subChild.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    <Link
                        href="/contact"
                        className="ml-4 rounded-full bg-[#eb7e2a] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#eb7e2a]/20 transition-all hover:bg-[#eb7e2a]/90 hover:shadow-[#eb7e2a]/30 hover:scale-105 active:scale-95"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="flex md:hidden h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-[#092963] backdrop-blur-md"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-4 rounded-2xl border border-gray-200 bg-white/95 p-4 backdrop-blur-xl shadow-2xl md:hidden"
                        >
                            <nav className="flex flex-col space-y-2">
                                {navItems.map((item) => (
                                    <div key={item.label} className="flex flex-col">
                                        {/* Mobile Top Level */}
                                        {item.children ? (
                                            <div className="space-y-2">
                                                <div className="px-4 py-2 text-sm font-semibold text-[#092963] bg-gray-50 rounded-lg">
                                                    {item.label}
                                                </div>
                                                <div className="pl-4 space-y-2 border-l border-gray-200 ml-2">
                                                    {item.children.map((child, cIdx) => (
                                                        <div key={cIdx}>
                                                            {child.children ? (
                                                                <div className="space-y-2">
                                                                    <div className="px-4 py-2 text-sm text-gray-600 font-medium">
                                                                        {child.label}
                                                                    </div>
                                                                    <div className="pl-4 space-y-1 border-l border-gray-200 ml-2">
                                                                        {child.children.map((sub, sIdx) => (
                                                                            <Link
                                                                                key={sIdx}
                                                                                href={sub.href!}
                                                                                className="block px-4 py-2 text-sm text-gray-500 hover:text-[#092963] rounded-lg hover:bg-gray-50"
                                                                                onClick={() => setMobileMenuOpen(false)}
                                                                            >
                                                                                {sub.label}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <Link
                                                                    href={child.href!}
                                                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-[#092963] rounded-lg hover:bg-gray-50"
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                >
                                                                    {child.label}
                                                                </Link>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href!}
                                                className="px-4 py-2 text-sm font-medium text-[#092963] hover:bg-gray-50 rounded-lg transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <Link
                                    href="/contact"
                                    className="mt-4 flex w-full items-center justify-center rounded-lg bg-[#eb7e2a] px-4 py-3 text-sm font-semibold text-white transition-transform active:scale-95"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
