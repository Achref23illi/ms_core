'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

const badges = [
    {
        src: '/badges/1-150x150.png',
        alt: 'Microsoft Certified: Security Operations Analyst Associate',
        href: 'https://learn.microsoft.com/en-us/credentials/certifications/security-operations-analyst/'
    },
    {
        src: '/badges/2-150x150.png',
        alt: 'Microsoft Certified: Cybersecurity Architect Expert',
        href: 'https://learn.microsoft.com/en-us/credentials/certifications/exams/sc-100/'
    },
    {
        src: '/badges/3-150x150.png',
        alt: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
        href: 'https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/'
    },
    {
        src: '/badges/4-150x150.png',
        alt: 'Microsoft Certified: Azure Fundamentals',
        href: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/'
    },
    {
        src: '/badges/5-150x150.png',
        alt: 'Microsoft Certified: Azure Administrator Associate',
        href: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/'
    },
    {
        src: '/badges/7-150x150.png',
        alt: 'CompTIA Security+',
        href: 'https://www.comptia.org/certifications/security'
    },
    {
        src: '/badges/8-150x150.png',
        alt: 'ISC2 CISSP - Certified Information Systems Security Professional',
        href: 'https://www.isc2.org/Certifications/CISSP'
    },
    {
        src: '/badges/9-150x150.png',
        alt: 'EC-Council Certified Ethical Hacker (CEH)',
        href: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/'
    },
    {
        src: '/badges/10-150x150.png',
        alt: 'Microsoft Certified: Azure Security Engineer Associate',
        href: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/'
    },
    {
        src: '/badges/11-150x150.png',
        alt: 'Certificate of Cloud Security Knowledge (CCSK)',
        href: 'https://cloudsecurityalliance.org/education/ccsk/'
    },
    {
        src: '/badges/Scada.png',
        alt: 'PECB Lead SCADA Security Manager',
        href: 'https://pecb.com/en/education-and-certification-for-individuals/scada'
    },
    {
        src: '/badges/iso27001.png',
        alt: 'PECB ISO/IEC 27001',
        href: 'https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27001'
    },
    {
        src: '/badges/cysa.png',
        alt: 'CompTIA CySA+',
        href: 'https://www.comptia.org/certifications/cybersecurity-analyst'
    },
];

export function CertificationsBadges() {
    return (
        <div className="w-full">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck className="w-4 h-4" /> Notre équipe d’experts certifiés à votre disposition
            </h4>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
                {badges.map((badge, idx) => (
                    <motion.a
                        key={idx}
                        href={badge.href}
                        target={badge.href !== '#' ? "_blank" : undefined}
                        rel={badge.href !== '#' ? "noopener noreferrer" : undefined}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className={`relative w-20 h-20 md:w-24 md:h-24 transition-all duration-300 hover:scale-110 ${badge.href !== '#' ? 'cursor-pointer' : 'cursor-default'}`}
                        title={badge.href !== '#' ? `Voir la certification : ${badge.alt}` : badge.alt}
                    >
                        <Image
                            src={badge.src}
                            alt={badge.alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 80px, 96px"
                        />
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
