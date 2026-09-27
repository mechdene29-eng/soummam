import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { Reveal } from "@/components/site/reveal";
import { CtaLink } from "@/components/site/cta-link";
import { CATEGORY_ALT, CATEGORY_IMAGES } from "@/lib/images";
import { CTA_LABELS, PRODUCTS, categoryOf, getProduct } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/produits/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Produit introuvable — Soummam" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — Laiterie Soummam`;
    return {
      meta: [
        { title },
        { name: "description", content: product.short },
        { property: "og:title", content: title },
        { property: "og:description", content: product.short },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductDetail,
});

function ProductNotFound() {
  return (
    <PageShell>
      <div className="shell flex min-h-[70vh] flex-col justify-center py-32">
        <h1 className="display-lg">Produit introuvable</h1>
        <p className="mt-5 max-w-md text-muted-foreground">
          Cette référence n'existe pas ou n'est plus disponible.
        </p>
        <div className="mt-9">
          <CtaLink to="/produits">{CTA_LABELS.range}</CtaLink>
        </div>
      </div>
    </PageShell>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const category = categoryOf(product.category);
  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  ).slice(0, 3);

  return (
    <PageShell>
      <article className="pt-[4.5rem]">
        <section className="bg-cream py-16 lg:py-24">
          <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <img
                src={CATEGORY_IMAGES[product.category]}
                alt={CATEGORY_ALT[product.category]}
                width={1200}
                height={1504}
                className="aspect-4/5 w-full rounded-sm object-cover shadow-soft"
              />
            </Reveal>
            <Reveal delay={120}>
              <nav className="text-xs text-muted-foreground" aria-label="Fil d'ariane">
                <Link to="/produits" className="hover:text-primary">
                  Produits
                </Link>
                <span className="px-2">/</span>
                <span>{category?.name}</span>
              </nav>
              <h1 className="display-lg mt-5">{product.name}</h1>
              <p className="mt-3 eyebrow text-leaf">{product.family}</p>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-foreground/80">
                {product.story}
              </p>

              {product.variants.length > 0 && (
                <div className="mt-9">
                  <h2 className="eyebrow text-muted-foreground">Parfums & variantes</h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <li
                        key={v}
                        className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold"
                      >
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.formats.length > 0 && (
                <div className="mt-8">
                  <h2 className="eyebrow text-muted-foreground">Formats disponibles</h2>
                  <p className="mt-3 font-display text-3xl font-extrabold tracking-tight text-primary">
                    {product.formats.join(" · ")}
                  </p>
                </div>
              )}

              <div className="mt-10">
                <CtaLink to="/produits">{CTA_LABELS.range}</CtaLink>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="shell max-w-3xl">
            <h2 className="display-lg">Informations produit</h2>
            <Accordion type="single" collapsible className="mt-10">
              <AccordionItem value="conservation">
                <AccordionTrigger className="text-left font-display text-lg font-extrabold uppercase tracking-tight">
                  Conservation
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {product.conservation}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="packaging">
                <AccordionTrigger className="text-left font-display text-lg font-extrabold uppercase tracking-tight">
                  Conditionnement
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {product.packaging}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="nutrition">
                <AccordionTrigger className="text-left font-display text-lg font-extrabold uppercase tracking-tight">
                  Valeurs nutritionnelles
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Les valeurs nutritionnelles détaillées figurent sur l'emballage du produit. Pour
                  toute précision, le service consommateurs répond à vos questions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {related.length > 0 && (
          <section className="bg-cream py-20">
            <div className="shell">
              <h2 className="display-lg">À découvrir aussi</h2>
              <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to="/produits/$slug"
                      params={{ slug: p.slug }}
                      className="group block h-full rounded-sm border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
                    >
                      <p className="eyebrow text-leaf">{p.family}</p>
                      <h3 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight">
                        {p.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {p.short}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </article>
    </PageShell>
  );
}
