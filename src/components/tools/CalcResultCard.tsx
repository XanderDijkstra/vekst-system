import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface CalcResultCardProps {
  label: string;
  value: string;
  caption?: string;
  variant?: "hero" | "default";
  icon?: ReactNode;
}

/**
 * Shared result card for calculator pages.
 * - "hero" variant uses the accent color for the primary "aha" number.
 * - "default" variant is a muted card for secondary metrics.
 */
const CalcResultCard = ({
  label,
  value,
  caption,
  variant = "default",
  icon,
}: CalcResultCardProps) => {
  const isHero = variant === "hero";

  return (
    <motion.div
      {...fadeInUp}
      className={
        isHero
          ? "rounded-2xl bg-primary text-primary-foreground p-6 md:p-8 shadow-system-card"
          : "rounded-2xl bg-card border border-border p-6 shadow-system-card"
      }
    >
      <div className="flex items-center gap-2">
        {icon && <span className={isHero ? "text-accent" : "text-muted-foreground"}>{icon}</span>}
        <p
          className={
            isHero
              ? "text-xs font-bold uppercase tracking-widest text-accent"
              : "text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          }
        >
          {label}
        </p>
      </div>
      <p
        className={
          isHero
            ? "mt-3 text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground tabular-nums"
            : "mt-3 text-2xl md:text-3xl font-bold tracking-tight text-foreground tabular-nums"
        }
      >
        {value}
      </p>
      {caption && (
        <p
          className={
            isHero
              ? "mt-2 text-sm text-primary-foreground/70 leading-relaxed"
              : "mt-2 text-sm text-muted-foreground leading-relaxed"
          }
        >
          {caption}
        </p>
      )}
    </motion.div>
  );
};

export default CalcResultCard;
