import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Stat } from "@/components/site/stat";
import { CtaLink } from "@/components/site/cta-link";
import { IMAGES } from "@/lib/images";
import { CTA_LABELS, PEOPLE_STATS, VALUES } from "@/lib/site-data";

export const Route = createFileRoute("/engagements")({
  head: () => ({
    meta: [
      { title: "Nos engagements — Laiterie Soummam" },
      {
        name: "description",
        content:
          "Emploi, agriculture locale, outil de production et investissements constants : les engagements de Laiterie Soummam en Algérie.",
      },
      { property: "og:title", content: "Nos engagements — Laiterie Soummam" },
      {
        property: "og:description",
        content: "2 000 emplois permanents, plus de 10 000 emplois indirects, 6 200 éleveurs partenaires.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EngagementsPage,
});

function EngagementsPage() {
  return (
    <PageShell overlayNav>
      <PageHero
        eyebrow="Nos engagements"
        title={
          <>
            Ce à quoi
            <br />
            nous tenons.
          </>
        }
        lead="Des engagements simples, tenus depuis 1993, et mesurables dans l'économie réelle."
        image={IMAGES.familyTable}
        alt="Famille algérienne autour d'un petit-déjeuner"
      />

      <section className="bg-background py-24">
        <div className="shell grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 80} className="bg-background p-10 lg:p-14">
              <span className="font-display text-sm font-extrabold tracking-widest text-leaf">
                0{i + 1}
              </span>
              <h2 className="mt-6 text-2xl font-extrabold uppercase tracking-tight text-primary">
                {v.title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                {v.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="shell">
          <Reveal>
            <h2 className="display-lg max-w-3xl">Un impact qui se compte en emplois.</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PEOPLE_STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
          <Reveal className="mt-14 flex flex-wrap gap-3">
            <CtaLink to="/nous-rejoindre">{CTA_LABELS.join}</CtaLink>
            <CtaLink to="/savoir-faire" variant="outline">
              {CTA_LABELS.savoirFaire}
            </CtaLink>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
