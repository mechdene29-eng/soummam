import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  to: string;
  params?: Record<string, string>;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light" | "ghost";
  className?: string;
};

const styles = {
  solid: "bg-primary text-primary-foreground hover:shadow-lift",
  outline: "border border-foreground/20 text-foreground hover:border-primary hover:text-primary",
  light: "bg-milk text-primary hover:shadow-lift",
  ghost: "border border-milk/40 text-milk hover:bg-milk hover:text-primary",
};

export function CtaLink({ to, params, children, variant = "solid", className }: Props) {
  return (
    <Link
      to={to}
      params={params as never}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold tracking-wide transition-all duration-300",
        styles[variant],
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
