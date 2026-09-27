import { cn } from "@/lib/utils";
import { useCountUp } from "@/hooks/use-reveal";

function format(n: number) {
  return new Intl.NumberFormat("fr-FR").format(n);
}

export function Stat({
  value,
  suffix = "",
  label,
  tone = "dark",
  className,
}: {
  value: number;
  suffix?: string;
  label: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div className={cn("border-t pt-5", tone === "light" ? "border-milk/25" : "border-border", className)}>
      <span
        ref={ref}
        className={cn(
          "block font-display text-[clamp(2.2rem,5vw,3.75rem)] font-extrabold tracking-tight tabular-nums",
          tone === "light" ? "text-milk" : "text-primary",
        )}
      >
        {format(current)}
        {suffix}
      </span>
      <span
        className={cn(
          "mt-2 block max-w-[16rem] text-sm leading-snug",
          tone === "light" ? "text-milk/70" : "text-muted-foreground",
        )}
      >
        {label}
      </span>
    </div>
  );
}
