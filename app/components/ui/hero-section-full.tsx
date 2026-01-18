'use client';

import React from 'react';
import { cn } from "@/app/lib/utils";
import { motion, type Variants } from 'motion/react';

interface HeroSectionFullProps {
    title: React.ReactNode;
    subtitle: string;
    callToAction: {
        text: string;
        href: string;
    };
    backgroundVideo: string;
    contactInfo?: {
        website: string;
        phone: string;
        address: string;
    };
    className?: string;
}

const HeroSectionFull = React.forwardRef<HTMLDivElement, HeroSectionFullProps>(
    ({ className, title, subtitle, callToAction, backgroundVideo, contactInfo }, ref) => {

        const containerVariants: Variants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                },
            },
        };

        const itemVariants: Variants = {
            hidden: { y: 30, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
                },
            },
        };

        return (
            <section
                ref={ref}
                className={cn(
                    "relative flex h-screen w-full flex-col items-center justify-center overflow-hidden text-center",
                    className
                )}
            >
                {/* Background Video with Dark Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#030c1a]/60 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030c1a]/95 via-[#030c1a]/50 to-[#030c1a]/70 z-10" />
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                    >
                        <source src={backgroundVideo} type="video/mp4" />
                    </video>
                </div>

                {/* Content Overlay - Compact Layout */}
                <motion.div
                    className="relative z-20 flex max-w-2xl flex-col items-center px-6"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl drop-shadow-md text-center leading-tight"
                        variants={itemVariants}
                    >
                        {title}
                    </motion.h1>

                    <motion.div
                        className="mt-3 h-0.5 w-16 rounded-full bg-[#eb7e2a]"
                        variants={itemVariants}
                    />

                    <motion.p
                        className="mt-4 max-w-lg text-sm font-normal text-gray-200 sm:text-base text-center leading-relaxed"
                        variants={itemVariants}
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4" variants={itemVariants}>
                        <a
                            href={callToAction.href}
                            className="inline-flex items-center justify-center rounded-full bg-[#eb7e2a] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-[#eb7e2a]/20 transition-all hover:bg-[#eb7e2a]/90 hover:scale-105 active:scale-95"
                        >
                            {callToAction.text}
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm border border-white/20 transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                        >
                            Contactez-nous
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator - Smaller */}
                <motion.div
                    className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 transform"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                >
                    <div className="h-8 w-5 rounded-full border-2 border-white/40 flex justify-center p-1">
                        <div className="w-0.5 h-1.5 bg-white/80 rounded-full animate-bounce" />
                    </div>
                </motion.div>
            </section>
        );
    }
);

HeroSectionFull.displayName = "HeroSectionFull";

export { HeroSectionFull };
