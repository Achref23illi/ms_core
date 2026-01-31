'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/app/lib/utils';
import { ChevronDown, Menu, X, Shield, Brain, Cloud, Package, ArrowRight } from 'lucide-react';

interface ServiceCategory {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
    href: string;
    image?: string;
    items: { label: string; href: string }[];
}

const serviceCategories: ServiceCategory[] = [
    {
        id: 'security',
        title: 'Cybersécurité',
        description: 'Protection complète de vos systèmes et données',
        icon: Shield,
        color: 'from-red-500 to-rose-600',
        href: '/services/security',
        image: '/images/service-cybersecurity.png',
        items: [
            { label: 'Diagnostic de cybersécurité', href: '/services/security/diagnostic' },
            { label: 'Tests d\'intrusion', href: '/services/security/penetration-testing' },
            { label: 'Sécurité cloud', href: '/services/security/cloud' },
            { label: 'Surveillance de sécurité', href: '/services/security/monitoring' },
            { label: 'Audit et conformité', href: '/services/security/compliance' },
            { label: 'Test d\'hameçonnage', href: '/services/security/phishing' },
            { label: 'Cyberenquête', href: '/services/security/investigation' },
            { label: 'Formation sécurité', href: '/services/security/training' },
        ]
    },
    {
        id: 'ai',
        title: 'Intelligence Artificielle',
        description: 'Automatisation et solutions IA sur mesure',
        icon: Brain,
        color: 'from-violet-500 to-purple-600',
        href: '/services/ai',
        image: '/images/service-ai.png',
        items: [
            { label: 'Intégration de solutions IA', href: '/services/ai/integration' },
            { label: 'Chatbots et assistants', href: '/services/ai/chatbots' },
            { label: 'Formation IA', href: '/services/ai/training' },
        ]
    },
    {
        id: 'cloud',
        title: 'Microsoft & Cloud',
        description: 'Migration et infrastructure cloud sécurisée',
        icon: Cloud,
        color: 'from-blue-500 to-cyan-600',
        href: '/services/microsoft-365',
        image: '/images/service-microsoft.png',
        items: [
            { label: 'Microsoft 365', href: '/services/microsoft-365' },
            { label: 'Migration cloud', href: '/services/cloud/migration' },
            { label: 'Infrastructure cloud', href: '/services/cloud/infrastructure' },
            { label: 'Sécurité Azure', href: '/services/security/azure' },
            { label: 'Optimisation cloud', href: '/services/cloud/optimization' },
            { label: 'Support Microsoft', href: '/services/microsoft/support' },
        ]
    },
    {
        id: 'hardware',
        title: 'Matériels & Solutions',
        description: 'Fourniture de solutions électroniques',
        icon: Package,
        color: 'from-amber-500 to-orange-600',
        href: '/services/materiels',
        image: '/images/service-hardware.png',
        items: []
    }
];

const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '#', hasDropdown: true },
    { label: 'À propos', href: '/about' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Carrière', href: '/careers' },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | null>('security');
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);

    // Timeout ref for hover handling
    const closeTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (servicesOpen) setActiveCategory('security');
    }, [servicesOpen]);

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = () => {
            if (servicesOpen) setServicesOpen(false);
        };
        if (servicesOpen) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [servicesOpen]);

    const handleMouseEnter = () => {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
        }
        setServicesOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => {
            setServicesOpen(false);
        }, 150); // Small delay to allow moving mouse to the menu
    };

    const activeCategoryData = serviceCategories.find(c => c.id === activeCategory);

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
                    <img src="/logo.png" alt="MS Core Technologies" className="h-12 md:h-14 w-auto -my-2" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-1">
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            className="relative"
                            onMouseEnter={item.hasDropdown ? handleMouseEnter : undefined}
                            onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
                        >
                            {item.hasDropdown ? (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setServicesOpen(!servicesOpen);
                                    }}
                                    className={cn(
                                        "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-full",
                                        servicesOpen
                                            ? "text-[#eb7e2a] bg-orange-50"
                                            : "text-[#092963] hover:text-[#eb7e2a] hover:bg-gray-100/50"
                                    )}
                                >
                                    {item.label}
                                    <ChevronDown className={cn(
                                        "h-4 w-4 transition-transform duration-200",
                                        servicesOpen && "rotate-180"
                                    )} />
                                </button>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="block px-4 py-2 text-sm font-medium text-[#092963] transition-colors hover:text-[#eb7e2a] rounded-full hover:bg-gray-100/50"
                                >
                                    {item.label}
                                </Link>
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
                    className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-[#092963]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Desktop Mega Menu */}
                <AnimatePresence>
                    {servicesOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[900px] max-w-[95vw]"
                            onClick={(e) => e.stopPropagation()}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={cn(
                                "rounded-2xl border border-gray-200 shadow-2xl overflow-hidden transition-all duration-200 ease-in-out",
                                activeCategory ? "bg-white w-full" : "bg-gray-50 w-72"
                            )}>
                                <div className="flex">
                                    {/* Categories Sidebar */}
                                    <div className="w-72 bg-gray-50 p-4 border-r border-gray-100">
                                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                                            Nos Services
                                        </p>
                                        {serviceCategories.map((category) => {
                                            const Icon = category.icon;
                                            const isLink = category.items.length === 0;

                                            if (isLink) {
                                                return (
                                                    <Link
                                                        key={category.id}
                                                        href={category.href}
                                                        onClick={() => setServicesOpen(false)}
                                                        onMouseEnter={() => setActiveCategory(null)}
                                                        className="w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left hover:bg-gray-50 group"
                                                    >
                                                        <div className={cn(
                                                            "w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br",
                                                            category.color
                                                        )}>
                                                            <Icon className="w-5 h-5 text-white" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-semibold text-sm text-gray-700 group-hover:text-[#092963] truncate">
                                                                {category.title}
                                                            </p>
                                                            <p className="text-xs text-gray-500 truncate">
                                                                {category.description}
                                                            </p>
                                                        </div>
                                                        <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </Link>
                                                );
                                            }

                                            return (
                                                <button
                                                    key={category.id}
                                                    onMouseEnter={() => setActiveCategory(category.id)}
                                                    onClick={() => setActiveCategory(category.id)}
                                                    className={cn(
                                                        "w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left group",
                                                        activeCategory === category.id
                                                            ? "bg-white shadow-md"
                                                            : "hover:bg-white/50"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br",
                                                        category.color
                                                    )}>
                                                        <Icon className="w-5 h-5 text-white" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className={cn(
                                                            "font-semibold text-sm truncate",
                                                            activeCategory === category.id ? "text-[#092963]" : "text-gray-700"
                                                        )}>
                                                            {category.title}
                                                        </p>
                                                        <p className="text-xs text-gray-500 truncate">
                                                            {category.description}
                                                        </p>
                                                    </div>
                                                    <ChevronDown className={cn(
                                                        "w-4 h-4 text-gray-400 -rotate-90",
                                                        activeCategory === category.id && "text-[#eb7e2a]"
                                                    )} />
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Services Detail Panel */}
                                    {activeCategoryData && (
                                        <div className="flex-1 p-6 relative">
                                            {activeCategoryData.image && (
                                                <div className="absolute top-0 left-0 right-0 h-32 bg-gray-100 z-0">
                                                    <img
                                                        src={activeCategoryData.image}
                                                        alt={activeCategoryData.title}
                                                        className="w-full h-full object-cover opacity-30"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                                                </div>
                                            )}
                                            {activeCategoryData.items.length > 0 && (
                                                <motion.div
                                                    key={activeCategoryData.id}
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="relative z-10 pt-16"
                                                >
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className={cn(
                                                                "w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br shadow-lg",
                                                                activeCategoryData.color
                                                            )}>
                                                                <activeCategoryData.icon className="w-5 h-5 text-white" />
                                                            </div>
                                                            <div>
                                                                <h3 className="font-bold text-[#092963] text-lg">{activeCategoryData.title}</h3>
                                                                <p className="text-sm text-gray-500">{activeCategoryData.description}</p>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            href={activeCategoryData.href}
                                                            onClick={() => setServicesOpen(false)}
                                                            className="flex items-center gap-1 text-sm font-semibold text-[#eb7e2a] hover:underline"
                                                        >
                                                            Voir tout <ArrowRight className="w-4 h-4" />
                                                        </Link>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-2">
                                                        {activeCategoryData.items.map((item) => (
                                                            <Link
                                                                key={item.href}
                                                                href={item.href}
                                                                onClick={() => setServicesOpen(false)}
                                                                className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                                            >
                                                                <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#eb7e2a] transition-colors" />
                                                                <span className="text-sm text-gray-700 group-hover:text-[#092963] transition-colors">
                                                                    {item.label}
                                                                </span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto"
                        >
                            <nav className="flex flex-col space-y-1">
                                {/* Home */}
                                <Link
                                    href="/"
                                    className="px-4 py-3 text-sm font-medium text-[#092963] hover:bg-gray-50 rounded-xl"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Accueil
                                </Link>

                                {/* Services with expandable categories */}
                                <div className="border-t border-gray-100 pt-2 mt-2">
                                    <button
                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#092963] hover:bg-gray-50 rounded-xl"
                                    >
                                        Services
                                        <ChevronDown className={cn(
                                            "w-4 h-4 transition-transform",
                                            mobileServicesOpen && "rotate-180"
                                        )} />
                                    </button>

                                    <AnimatePresence>
                                        {mobileServicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pl-2 space-y-1 mt-1">
                                                    {serviceCategories.map((category) => {
                                                        const Icon = category.icon;
                                                        const isExpanded = mobileActiveCategory === category.id;
                                                        const isLink = category.items.length === 0;

                                                        if (isLink) {
                                                            return (
                                                                <Link
                                                                    key={category.id}
                                                                    href={category.href}
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50"
                                                                >
                                                                    <div className={cn(
                                                                        "w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br",
                                                                        category.color
                                                                    )}>
                                                                        <Icon className="w-4 h-4 text-white" />
                                                                    </div>
                                                                    <div className="flex-1 text-left">
                                                                        <p className="font-medium text-sm text-[#092963]">{category.title}</p>
                                                                        <p className="text-xs text-gray-500">{category.description}</p>
                                                                    </div>
                                                                    <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90" />
                                                                </Link>
                                                            );
                                                        }

                                                        return (
                                                            <div key={category.id}>
                                                                <button
                                                                    onClick={() => setMobileActiveCategory(isExpanded ? null : category.id)}
                                                                    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50"
                                                                >
                                                                    <div className={cn(
                                                                        "w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br",
                                                                        category.color
                                                                    )}>
                                                                        <Icon className="w-4 h-4 text-white" />
                                                                    </div>
                                                                    <div className="flex-1 text-left">
                                                                        <p className="font-medium text-sm text-[#092963]">{category.title}</p>
                                                                        <p className="text-xs text-gray-500">{category.description}</p>
                                                                    </div>
                                                                    {category.items.length > 0 && (
                                                                        <ChevronDown className={cn(
                                                                            "w-4 h-4 text-gray-400 transition-transform",
                                                                            isExpanded && "rotate-180"
                                                                        )} />
                                                                    )}
                                                                </button>

                                                                <AnimatePresence>
                                                                    {isExpanded && category.items.length > 0 && (
                                                                        <motion.div
                                                                            initial={{ opacity: 0, height: 0 }}
                                                                            animate={{ opacity: 1, height: 'auto' }}
                                                                            exit={{ opacity: 0, height: 0 }}
                                                                            className="overflow-hidden"
                                                                        >
                                                                            <div className="ml-12 border-l-2 border-gray-100 pl-4 py-2 space-y-1">
                                                                                {category.items.map((item) => (
                                                                                    <Link
                                                                                        key={item.href}
                                                                                        href={item.href}
                                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                                        className="block py-2 text-sm text-gray-600 hover:text-[#eb7e2a]"
                                                                                    >
                                                                                        {item.label}
                                                                                    </Link>
                                                                                ))}
                                                                                <Link
                                                                                    href={category.href}
                                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                                    className="flex items-center gap-1 py-2 text-sm font-medium text-[#eb7e2a]"
                                                                                >
                                                                                    Voir tout <ArrowRight className="w-3 h-3" />
                                                                                </Link>
                                                                            </div>
                                                                        </motion.div>
                                                                    )}
                                                                </AnimatePresence>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Other nav items */}
                                <div className="border-t border-gray-100 pt-2 mt-2">
                                    <Link
                                        href="/about"
                                        className="block px-4 py-3 text-sm font-medium text-[#092963] hover:bg-gray-50 rounded-xl"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        À propos
                                    </Link>
                                    <Link
                                        href="/actualites"
                                        className="block px-4 py-3 text-sm font-medium text-[#092963] hover:bg-gray-50 rounded-xl"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Actualités
                                    </Link>
                                    <Link
                                        href="/careers"
                                        className="block px-4 py-3 text-sm font-medium text-[#092963] hover:bg-gray-50 rounded-xl"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Carrière
                                    </Link>
                                </div>

                                {/* Contact CTA */}
                                <Link
                                    href="/contact"
                                    className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#eb7e2a] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#eb7e2a]/20"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contactez-nous
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
