import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV, CTA_LABELS } from "@/lib/site-data";
import { Wordmark } from "./wordmark";

export function SiteNav({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = !overlay || scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="shell flex h-[4.5rem] items-center justify-between gap-6" aria-label="Navigation principale">
        <Link to="/" aria-label="Soummam — accueil">
          <Wordmark tone={solid ? "dark" : "light"} />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={cn(
                  "relative text-[0.82rem] font-semibold tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full",
                  solid ? "text-foreground/75 hover:text-primary" : "text-milk/85 hover:text-milk",
                  pathname.startsWith(item.to) && "after:w-full",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/produits"
            className={cn(
              "hidden rounded-full px-5 py-2.5 text-[0.8rem] font-bold tracking-wide transition-all duration-300 md:inline-flex",
              solid
                ? "bg-primary text-primary-foreground hover:shadow-lift"
                : "bg-milk/95 text-primary hover:bg-milk",
            )}
          >
            {CTA_LABELS.products}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-full border transition-colors lg:hidden",
              solid ? "border-border text-foreground" : "border-milk/40 text-milk",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="shell flex flex-col py-4">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="block border-b border-border/50 py-4 font-display text-xl font-extrabold uppercase tracking-tight text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-5">
            <Link
              to="/produits"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground"
            >
              {CTA_LABELS.products}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
