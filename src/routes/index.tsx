import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import { Reveal } from "@/components/site/reveal";
import { Stat } from "@/components/site/stat";
import { CtaLink } from "@/components/site/cta-link";
import { IMAGES, CATEGORY_IMAGES, CATEGORY_ALT } from "@/lib/images";
import {
  BRAND,
  CATEGORIES,
  CTA_LABELS,
  FARM_STATS,
  JOURNEY,
  PEOPLE_STATS,
  TIMELINE,
  VALUES,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laiterie Soummam — Le goût qui nous rassemble" },
      {
        name: "description",
        content:
          "Depuis 1993, Laiterie Soummam produit à Akbou yaourts, desserts, boissons lactées, lait UHT et fromages, avec 6 200 éleveurs partenaires et 700 000 litres de lait frais collectés chaque jour.",
      },
      { property: "og:title", content: "Laiterie Soummam — Le goût qui nous rassemble" },
      {
        property: "og:description",
        content:
          "De la ferme algérienne à la table des familles : découvrez l'histoire, le savoir-faire et les produits de Laiterie Soummam.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell overlayNav>
      {/* 01 — IMPACT DE MARQUE */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink">
        <img
          src={IMAGES.heroMilk}
          alt="Lait frais éclaboussant dans un verre, lumière du matin"
          width={1920}
          height={1200}
          className="absolute inset-0 -z-10 size-full object-cover animate-drift"
        />
        <div className="veil absolute inset-0 -z-10" />
        <div className="shell pb-16 pt-32">
          <div className="max-w-5xl">
            <p className="eyebrow text-sky opacity-0 [animation:fadeIn_1s_.2s_forwards] motion-reduce:opacity-100">
              Laiterie Soummam — Akbou, Algérie — depuis {BRAND.founded}
            </p>
            <h1 className="display-xl mt-6 text-milk">
              Le goût
              <br />
              qui nous rassemble.
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-milk/80">
              De la ferme algérienne à la table des familles. 6 200 éleveurs partenaires, 700 000
              litres de lait frais collectés chaque jour, 200 références.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <CtaLink to="/produits" variant="light">
                {CTA_LABELS.products}
              </CtaLink>
              <CtaLink to="/notre-histoire" variant="ghost">
                Notre histoire
              </CtaLink>
            </div>
          </div>
          <div className="mt-16 flex items-center gap-3 text-milk/50">
            <ArrowDown className="size-4 animate-float" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em]">
              Faire défiler
            </span>
          </div>
        </div>
      </section>

      {/* 02 — PRODUITS */}
      <section className="bg-cream py-24">
        <div className="shell">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-leaf">02 — Ce que nous fabriquons</p>
              <h2 className="display-lg mt-4 max-w-2xl">Quatre métiers, une même exigence.</h2>
            </div>
            <CtaLink to="/produits" variant="outline">
              {CTA_LABELS.range}
            </CtaLink>
          </Reveal>
        </div>

        <div className="mt-14 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex w-max gap-5 px-5 lg:px-[max(1.25rem,calc((100vw-84rem)/2+1.25rem))]">
            {CATEGORIES.map((cat, i) => (
              <li key={cat.slug}>
                <Reveal delay={i * 80}>
                  <Link
                    to="/produits"
                    search={{ c: cat.slug } as never}
                    className="group relative block h-[30rem] w-[19rem] overflow-hidden rounded-sm bg-ink sm:w-[22rem]"
                  >
                    <img
                      src={CATEGORY_IMAGES[cat.slug]}
                      alt={CATEGORY_ALT[cat.slug]}
                      loading="lazy"
                      width={1200}
                      height={1504}
                      className="absolute inset-0 size-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.07]"
                    />
                    <div className="veil absolute inset-0" />
                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <p className="eyebrow text-sky">{cat.tagline}</p>
                      <h3 className="mt-3 font-display text-3xl font-extrabold uppercase text-milk">
                        {cat.name}
                      </h3>
                      <p className="mt-3 max-w-[16rem] text-sm leading-snug text-milk/70">
                        {cat.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-widest text-milk">
                        Découvrir la gamme
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 03 — HISTOIRE */}
      <section className="bg-background py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-leaf">03 — D'où nous venons</p>
            <h2 className="display-lg mt-4 max-w-3xl">
              Une histoire familiale devenue une histoire algérienne.
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((item, i) => (
              <li key={item.year} className="bg-background">
                <Reveal delay={i * 90} className="h-full p-8">
                  <span className="font-display text-5xl font-extrabold tracking-tight text-primary/25">
                    {item.year}
                  </span>
                  <h3 className="mt-6 text-lg font-extrabold uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal className="mt-12">
            <CtaLink to="/notre-histoire" variant="outline">
              {CTA_LABELS.story}
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* 04 — LES GENS */}
      <section className="bg-ink py-24 text-milk">
        <div className="shell grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-sm">
              <img
                src={IMAGES.production}
                alt="Technicienne qualité contrôlant un pot de yaourt sur la ligne de production"
                loading="lazy"
                width={1600}
                height={1104}
                className="aspect-4/3 w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow text-sky">04 — Celles et ceux qui la font</p>
            <h2 className="display-lg mt-4 text-milk">
              Soummam n'est pas une usine. C'est un écosystème humain.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-milk/70">
              Éleveurs, collecteurs, chauffeurs, opérateurs, équipes qualité et logistique : des
              milliers de personnes se relaient chaque jour entre la ferme et la table.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {PEOPLE_STATS.map((s) => (
                <Stat key={s.label} {...s} tone="light" />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 — LA FERME */}
      <section className="relative isolate overflow-hidden bg-cream py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-leaf">05 — Là où tout commence</p>
            <h2 className="display-lg mt-4 max-w-3xl">La plus grande ferme d'Algérie.</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Depuis 2009, Soummam construit son propre réseau de collecte de lait frais avec des
              éleveurs indépendants partout sur le territoire.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="grid gap-8 sm:grid-cols-2">
                {FARM_STATS.map((s) => (
                  <Stat key={s.label} {...s} />
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-sm">
                <img
                  src={IMAGES.farmAlgeria}
                  alt="Éleveur algérien et ses vaches laitières dans les montagnes au lever du jour"
                  loading="lazy"
                  width={1600}
                  height={1104}
                  className="aspect-4/5 w-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 06 — QUALITÉ / PARCOURS */}
      <section className="bg-background py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-leaf">06 — Comment nous produisons</p>
            <h2 className="display-lg mt-4 max-w-3xl">De la ferme. À chaque table.</h2>
          </Reveal>

          <ol className="mt-16 space-y-px overflow-hidden rounded-sm bg-border">
            {JOURNEY.map((step, i) => (
              <li key={step.step} className="bg-background">
                <Reveal
                  delay={i * 70}
                  className="group grid items-baseline gap-4 px-2 py-8 transition-colors hover:bg-cream md:grid-cols-[5rem_16rem_1fr] md:px-6"
                >
                  <span className="font-display text-sm font-extrabold tracking-widest text-leaf">
                    {step.step}
                  </span>
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight">{step.title}</h3>
                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal className="mt-12">
            <CtaLink to="/savoir-faire" variant="outline">
              {CTA_LABELS.savoirFaire}
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* 07 — ÉCHELLE */}
      <section className="gradient-deep py-24 text-milk">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="eyebrow text-milk/60">07 — Notre présence</p>
            <h2 className="display-lg mt-4 text-milk">Soummam en Algérie.</h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-milk/75">
              Deux sites de production spécialisés à Akbou, 53 centres régionaux de collecte, 48
              camions isothermes et une capacité de traitement de 1 450 000 litres de lait cru par
              jour, au service d'une distribution nationale.
            </p>
            <div className="mt-10">
              <CtaLink to="/savoir-faire" variant="ghost">
                Voir notre réseau
              </CtaLink>
            </div>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-8">
            <Stat value={53} label="centres régionaux de collecte" tone="light" />
            <Stat value={48} label="camions isothermes" tone="light" />
            <Stat value={11} label="fermes de référence" tone="light" />
            <Stat value={51} label="lignes de production" tone="light" />
          </Reveal>
        </div>
      </section>

      {/* 08 — VALEURS */}
      <section className="bg-cream py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-leaf">08 — Ce à quoi nous tenons</p>
            <h2 className="display-lg mt-4 max-w-3xl">Quatre engagements, tenus depuis 1993.</h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="bg-cream p-10">
                <h3 className="text-xl font-extrabold uppercase tracking-tight text-primary">
                  {v.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {v.text}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <CtaLink to="/engagements" variant="outline">
              {CTA_LABELS.engagement}
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* 09 + 10 — PRODUITS & CTA */}
      <section className="relative isolate overflow-hidden bg-ink py-28 text-milk">
        <img
          src={IMAGES.familyTable}
          alt="Famille algérienne partageant un petit-déjeuner avec du lait et des yaourts"
          loading="lazy"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 size-full object-cover opacity-45"
        />
        <div className="veil absolute inset-0 -z-10" />
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-sky">09 — Passer à table</p>
            <h2 className="display-lg mt-4 max-w-3xl text-milk">
              200 références. Une seule promesse.
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaLink to="/produits" variant="light">
                {CTA_LABELS.range}
              </CtaLink>
              <CtaLink to="/contact" variant="ghost">
                {CTA_LABELS.consumer}
              </CtaLink>
              <CtaLink to="/nous-rejoindre" variant="ghost">
                {CTA_LABELS.join}
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
