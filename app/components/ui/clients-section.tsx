'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

// Client logos - Add your logo files to public/clients/ folder
const clients = [
    {
        name: 'Greenways CIV',
        logo: '/clients/greenways.png', // Add this file
        url: 'https://greenways-civ.com/'
    },
    {
        name: 'Signature TI',
        logo: '/clients/signatureti.png', // Add this file
        url: 'https://signatureti.com/'
    },
    {
        name: 'Octosafes',
        logo: '/clients/octosafes.png', // Add this file
        url: 'https://www.octosafes.com/'
    },
    {
        name: 'Suzang Group',
        logo: '/clients/suzang.png', // Add this file
        url: 'https://suzang-group.com/'
    }
];

export function ClientsSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-[#eb7e2a] font-bold tracking-wider text-sm uppercase">
                        Nos Partenaires
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#092963] mt-2">
                        Ils nous font confiance
                    </h2>
                </motion.div>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    {clients.map((client, index) => (
                        <motion.a
                            key={client.name}
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative h-16 w-32 md:h-20 md:w-40 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                className="object-contain"
                            />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
