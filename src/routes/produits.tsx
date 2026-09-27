import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { Reveal } from "@/components/site/reveal";
import { PageHero } from "@/components/site/page-hero";
import { CtaLink } from "@/components/site/cta-link";
import { CATEGORY_ALT, CATEGORY_IMAGES, IMAGES } from "@/lib/images";
import { CATEGORIES, CTA_LABELS, PRODUCTS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type ProductSearch = { c?: string };

export const Route = createFileRoute("/produits")({
  validateSearch: (search: Record<string, unknown>): ProductSearch => ({
    c: typeof search.c === "string" ? search.c : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Nos produits — Laiterie Soummam" },
      {
        name: "description",
        content:
          "Yaourts et desserts, boissons lactées, lait UHT et fromages : découvrez les 200 références de Laiterie Soummam.",
      },
      { property: "og:title", content: "Nos produits — Laiterie Soummam" },
      {
        property: "og:description",
        content: "Les quatre métiers de Soummam : yaourts et desserts, boissons lactées, lait UHT, fromages.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProduitsPage,
});

function ProduitsPage() {
  const { c } = Route.useSearch();
  const [category, setCategory] = useState<string | undefined>(c);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchCat = !category || p.category === category;
      const matchQuery =
        !q ||
        [p.name, p.family, p.short, ...p.variants].join(" ").toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [category, query]);

  return (
    <PageShell overlayNav>
      <PageHero
        eyebrow="Nos produits"
        title={
          <>
            200 références.
            <br />
            Quatre métiers.
          </>
        }
        lead="Yaourts et desserts, boissons lactées, lait UHT et fromages : la gamme Soummam, fabriquée à Akbou."
        image={IMAGES.heroMilk}
        alt="Lait frais et crème sur fond crème"
      />

      <section className="bg-background py-16">
        <div className="shell">
          <div className="flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
            <ul className="flex flex-wrap gap-2">
              <li>
                <FilterChip active={!category} onClick={() => setCategory(undefined)}>
                  Tout
                </FilterChip>
              </li>
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <FilterChip
                    active={category === cat.slug}
                    onClick={() => setCategory(cat.slug)}
                  >
                    {cat.name}
                  </FilterChip>
                </li>
              ))}
            </ul>

            <label className="relative flex w-full max-w-xs items-center">
              <Search className="pointer-events-none absolute left-4 size-4 text-muted-foreground" />
              <span className="sr-only">Rechercher un produit</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un produit, un parfum…"
                className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
            </label>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            {results.length} produit{results.length > 1 ? "s" : ""} affiché
            {results.length > 1 ? "s" : ""}
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p, i) => (
              <li key={p.slug}>
                <Reveal delay={(i % 3) * 70}>
                  <Link
                    to="/produits/$slug"
                    params={{ slug: p.slug }}
                    className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={CATEGORY_IMAGES[p.category]}
                        alt={CATEGORY_ALT[p.category]}
                        loading="lazy"
                        width={1200}
                        height={1504}
                        className="aspect-4/5 w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <p className="eyebrow text-leaf">{p.family}</p>
                      <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight">
                        {p.name}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {p.short}
                      </p>
                      {p.variants.length > 0 && (
                        <p className="mt-4 text-xs text-muted-foreground/80">
                          {p.variants.join(" · ")}
                        </p>
                      )}
                      <span className="mt-6 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-widest text-primary">
                        Découvrir
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>

          {results.length === 0 && (
            <p className="py-16 text-center text-muted-foreground">
              Aucun produit ne correspond à cette recherche.
            </p>
          )}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="shell flex flex-wrap items-end justify-between gap-6">
          <h2 className="display-lg max-w-2xl">Une question sur un produit ?</h2>
          <CtaLink to="/contact">{CTA_LABELS.consumer}</CtaLink>
        </div>
      </section>
    </PageShell>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-5 py-2.5 text-[0.8rem] font-semibold transition-all duration-300",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-foreground/70 hover:border-primary hover:text-primary",
      )}
    >
      {children}
    </button>
  );
}
