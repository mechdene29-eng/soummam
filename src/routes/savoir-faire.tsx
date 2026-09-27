import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Stat } from "@/components/site/stat";
import { CtaLink } from "@/components/site/cta-link";
import { IMAGES } from "@/lib/images";
import { CTA_LABELS, FARM_STATS, JOURNEY } from "@/lib/site-data";

export const Route = createFileRoute("/savoir-faire")({
  head: () => ({
    meta: [
      { title: "Notre savoir-faire — collecte, qualité et production Soummam" },
      {
        name: "description",
        content:
          "53 centres de collecte, 48 camions isothermes, 51 lignes de production et 1 450 000 litres de lait cru traités par jour : le savoir-faire industriel de Laiterie Soummam.",
      },
      { property: "og:title", content: "Notre savoir-faire — Laiterie Soummam" },
      {
        property: "og:description",
        content: "De la collecte du lait frais à la distribution nationale.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SavoirFairePage,
});

function SavoirFairePage() {
  return (
    <PageShell overlayNav>
      <PageHero
        eyebrow="Notre savoir-faire"
        title={
          <>
            Tout ce qui se passe
            <br />
            avant le réfrigérateur.
          </>
        }
        lead="Chaque jour, en moyenne 700 000 litres de lait frais entrent dans le circuit Soummam. Voici le chemin qu'ils parcourent."
        image={IMAGES.production}
        alt="Ligne de production laitière moderne en acier inoxydable"
      />

      <section className="bg-background py-24">
        <div className="shell">
          <ol className="space-y-px overflow-hidden rounded-sm bg-border">
            {JOURNEY.map((step, i) => (
              <li key={step.step} className="bg-background">
                <Reveal
                  delay={i * 70}
                  className="grid items-baseline gap-4 px-2 py-9 transition-colors hover:bg-cream md:grid-cols-[5rem_18rem_1fr] md:px-6"
                >
                  <span className="font-display text-sm font-extrabold tracking-widest text-leaf">
                    {step.step}
                  </span>
                  <h2 className="text-2xl font-extrabold uppercase tracking-tight">{step.title}</h2>
                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-leaf">La plus grande ferme d'Algérie</p>
            <h2 className="display-lg mt-4 max-w-3xl">Un amont agricole financé, encadré, suivi.</h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Depuis 2009, Soummam développe un programme national de collecte de lait frais avec
              des éleveurs indépendants, des centres de collecte régionaux et un transport
              isotherme dédié.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FARM_STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-deep py-24 text-milk">
        <div className="shell grid gap-10 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <h2 className="display-lg text-milk">1 450 000 litres par jour.</h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-milk/75">
              C'est la capacité de traitement de lait cru de Laiterie Soummam, répartie sur deux
              sites de production spécialisés et 51 lignes de production, dans la zone industrielle
              de Taharacht à Akbou.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-3">
            <CtaLink to="/produits" variant="light">
              {CTA_LABELS.products}
            </CtaLink>
            <CtaLink to="/engagements" variant="ghost">
              {CTA_LABELS.engagement}
            </CtaLink>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
