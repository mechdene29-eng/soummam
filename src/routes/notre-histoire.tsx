import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Stat } from "@/components/site/stat";
import { CtaLink } from "@/components/site/cta-link";
import { IMAGES } from "@/lib/images";
import { CTA_LABELS, PEOPLE_STATS, TIMELINE } from "@/lib/site-data";

export const Route = createFileRoute("/notre-histoire")({
  head: () => ({
    meta: [
      { title: "Notre histoire — Laiterie Soummam depuis 1993" },
      {
        name: "description",
        content:
          "De la première laiterie familiale de 1993 à l'usine de Taharacht à Akbou : trente ans d'histoire de Laiterie Soummam.",
      },
      { property: "og:title", content: "Notre histoire — Laiterie Soummam depuis 1993" },
      {
        property: "og:description",
        content: "Une histoire familiale devenue une histoire algérienne.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HistoirePage,
});

function HistoirePage() {
  return (
    <PageShell overlayNav>
      <PageHero
        eyebrow="Notre histoire"
        title={
          <>
            Une histoire familiale
            <br />
            devenue une histoire algérienne.
          </>
        }
        lead="Tout commence en 1993 dans la région d'Akbou, avec une famille et une conviction : produire en Algérie un yaourt d'une qualité irréprochable."
        image={IMAGES.farmAlgeria}
        alt="Montagnes et pâturages de la région de Béjaïa au lever du jour"
      >
        <CtaLink to="/savoir-faire" variant="ghost">
          {CTA_LABELS.savoirFaire}
        </CtaLink>
      </PageHero>

      <section className="bg-background py-24">
        <div className="shell">
          <ol className="relative border-l border-border">
            {TIMELINE.map((item, i) => (
              <li key={item.year} className="relative pb-16 pl-8 last:pb-0 md:pl-16">
                <span className="absolute -left-[5px] top-3 size-2.5 rounded-full bg-leaf" />
                <Reveal delay={i * 80}>
                  <span className="font-display text-[clamp(3rem,9vw,6.5rem)] font-extrabold leading-none tracking-tight text-primary/15">
                    {item.year}
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold uppercase tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-24 text-milk">
        <div className="shell">
          <Reveal>
            <h2 className="display-lg max-w-3xl text-milk">
              Trente ans plus tard, la même exigence.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PEOPLE_STATS.map((s) => (
              <Stat key={s.label} {...s} tone="light" />
            ))}
          </div>
          <Reveal className="mt-14 flex flex-wrap gap-3">
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
