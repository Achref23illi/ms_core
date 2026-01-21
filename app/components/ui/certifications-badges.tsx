'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

const badges = [
    { src: '/badges/1-150x150.png', alt: 'Certification 1' },
    { src: '/badges/cybersecurity_architect.png', alt: 'Microsoft Cybersecurity Architect' },
    { src: '/badges/3-150x150.png', alt: 'Certification 3' },
    { src: '/badges/5-150x150.png', alt: 'Certification 5' },
    { src: '/badges/7-150x150.png', alt: 'Certification 7' },
    { src: '/badges/8-150x150.png', alt: 'Certification 8' },
    { src: '/badges/9-150x150.png', alt: 'Certification 9' },
    { src: '/badges/10-150x150.png', alt: 'Certification 10' },
    { src: '/badges/11-150x150.png', alt: 'Certification 11' },
    { src: '/badges/Scada.png', alt: 'PECB Lead SCADA Security Manager' },
    { src: '/badges/iso27001.png', alt: 'PECB ISO/IEC 27001' },
    { src: '/badges/cysa.png', alt: 'CompTIA CySA+' },
];

export function CertificationsBadges() {
    return (
        <div className="w-full">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck className="w-4 h-4" /> Notre équipe d’experts certifiés à votre disposition
            </h4>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
                {badges.map((badge, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="relative w-20 h-20 md:w-24 md:h-24 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
                    >
                        <Image
                            src={badge.src}
                            alt={badge.alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 80px, 96px"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
