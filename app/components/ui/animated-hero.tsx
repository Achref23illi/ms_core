'use client';

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Glow } from "@/app/components/ui/glow";
import { cn } from "@/app/lib/utils";
import { useTranslations } from "next-intl";

function AnimatedHero() {
    const t = useTranslations('hero');
    const [titleNumber, setTitleNumber] = useState(0);

    const titles = useMemo(
        () => [
            "Sécurisée",
            "Innovante",
            "Performante",
            "Intelligente",
            "Résiliente"
        ],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <Glow
                    variant="top"
                    className="animate-appear-zoom opacity-0 [animation-delay:200ms]"
                />
            </div>

            <div className="container mx-auto relative z-20 pt-20 md:pt-24">
                <div className="flex gap-6 py-8 lg:py-12 items-center justify-center flex-col">
                    {/* Badge */}
                    <div className="animate-appear opacity-0 [animation-delay:100ms]">
                        <Button variant="secondary" size="sm" className="gap-4 rounded-full">
                            {t('badge')} <MoveRight className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Title with animated word */}
                    <div className="flex gap-4 flex-col animate-appear opacity-0 [animation-delay:200ms]">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl max-w-3xl tracking-tighter text-center font-bold">
                            <span className="text-foreground block">Transformation Numérique</span>
                            <span className="relative block w-full h-[1.2em] mt-2">
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute inset-0 flex items-center justify-center font-bold text-[#0272c2]"
                                        initial={{ opacity: 0, y: -50 }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        animate={
                                            titleNumber === index
                                                ? {
                                                    y: 0,
                                                    opacity: 1,
                                                }
                                                : {
                                                    y: titleNumber > index ? -50 : 50,
                                                    opacity: 0,
                                                }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <p className="text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center animate-appear opacity-0 [animation-delay:400ms]">
                            {t('description')}
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-row gap-3 animate-appear opacity-0 [animation-delay:600ms]">
                        <Button size="lg" className="gap-4 rounded-full" variant="outline">
                            {t('secondaryCta')} <PhoneCall className="w-4 h-4" />
                        </Button>
                        <Button size="lg" className="gap-4 rounded-full">
                            {t('primaryCta')} <MoveRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { AnimatedHero };
