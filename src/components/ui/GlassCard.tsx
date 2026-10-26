import React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, hoverEffect = true, glow = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base Glassmorphism styling
          "relative overflow-hidden rounded-2xl p-6 sm:p-8",
          "bg-webtizen-card/70 backdrop-blur-md",
          "border border-webtizen-muted/20 text-webtizen-text",
          // Hover State
          hoverEffect && [
            "transition-all duration-300 ease-out",
            "hover:border-webtizen-accent/80",
            "hover:shadow-[0_0_20px_rgba(84,128,98,0.3)]",
            "hover:-translate-y-1",
          ],
          // Static Glow option
          glow && "shadow-[0_0_20px_rgba(84,128,98,0.25)] border-webtizen-accent/60",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
