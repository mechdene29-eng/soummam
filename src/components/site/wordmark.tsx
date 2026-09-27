import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-[0.12em] font-display text-xl font-extrabold uppercase tracking-[-0.04em]",
        tone === "light" ? "text-milk" : "text-primary",
        className,
      )}
    >
      Soummam
      <span className={cn("size-[0.28em] rounded-full", tone === "light" ? "bg-sky" : "bg-leaf")} />
    </span>
  );
}
