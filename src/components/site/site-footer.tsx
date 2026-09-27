import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { BRAND } from "@/lib/site-data";
import { Wordmark } from "./wordmark";

const columns = [
  {
    title: "Produits",
    links: [
      { label: "Toute la gamme", to: "/produits" },
      { label: "Yaourts & desserts", to: "/produits" },
      { label: "Lait UHT", to: "/produits" },
    ],
  },
  {
    title: "L'entreprise",
    links: [
      { label: "Notre histoire", to: "/notre-histoire" },
      { label: "Notre savoir-faire", to: "/savoir-faire" },
      { label: "Nos engagements", to: "/engagements" },
    ],
  },
  {
    title: "Aller plus loin",
    links: [
      { label: "Nous rejoindre", to: "/nous-rejoindre" },
      { label: "Contact", to: "/contact" },
      { label: "FAQ", to: "/faq" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink text-milk">
      <div className="shell py-20">
        <p className="display-lg max-w-4xl text-milk">{BRAND.closing}</p>

        <div className="mt-16 grid gap-12 border-t border-milk/15 pt-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Wordmark tone="light" className="text-2xl" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-milk/60">{BRAND.address}</p>
            <a
              href={`tel:${BRAND.consumerPhone.replace(/[^+\d]/g, "")}`}
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-milk/25 px-5 py-3 text-sm font-semibold transition-colors hover:bg-milk hover:text-ink"
            >
              <Phone className="size-4" />
              Service consommateurs — {BRAND.consumerPhone}
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow text-milk/45">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-milk/75 transition-colors hover:text-milk">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-milk/15 pt-8 text-xs text-milk/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.legal}. Akbou, Béjaïa — Algérie.
          </p>
          <ul className="flex flex-wrap gap-6">
            {BRAND.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-milk"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/faq" className="transition-colors hover:text-milk">
                Mentions légales & cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
