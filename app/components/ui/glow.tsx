import React from "react";
import { cn } from "@/app/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const glowVariants = cva("absolute w-full", {
    variants: {
        variant: {
            top: "top-0",
            above: "-top-[128px]",
            bottom: "bottom-0",
            below: "-bottom-[128px]",
            center: "top-[50%]",
        },
    },
    defaultVariants: {
        variant: "top",
    },
});

const Glow = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof glowVariants>
>(({ className, variant, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(glowVariants({ variant }), className)}
        {...props}
    >
        {/* Primary glow - uses brand color (blue) */}
        <div
            className={cn(
                "absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] sm:h-[512px]",
                "bg-[radial-gradient(ellipse_at_center,_rgba(2,114,194,0.4)_10%,_rgba(2,114,194,0)_60%)]",
                variant === "center" && "-translate-y-1/2",
            )}
        />
        {/* Secondary glow - uses primary color (dark blue) */}
        <div
            className={cn(
                "absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] sm:h-[256px]",
                "bg-[radial-gradient(ellipse_at_center,_rgba(9,41,99,0.25)_10%,_rgba(9,41,99,0)_60%)]",
                variant === "center" && "-translate-y-1/2",
            )}
        />
    </div>
));
Glow.displayName = "Glow";

export { Glow };
