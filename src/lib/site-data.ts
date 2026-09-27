/**
 * Contenu factuel du site.
 * Source de vérité : soummam-dz.com (pages accueil, qui-sommes-nous,
 * ferme-algerie, produits, contact). Aucune statistique inventée.
 * Les zones sans information officielle sont marquées `pending: true`.
 */

export const BRAND = {
  name: "Soummam",
  legal: "Laiterie Soummam",
  founded: 1993,
  baseline: "Le goût qui nous rassemble.",
  closing: "Soummam. Depuis 1993, au cœur de la vie des Algériens.",
  address: "ZAC Taharacht — 06001 Akbou, Béjaïa, Algérie",
  consumerPhone: "+213 (0)770 250 300",
  phones: [
    { label: "Standard", value: "044 20 37 50 / 044 20 37 51" },
    { label: "Service commercial", value: "044 20 37 85", email: "sce.commercial@soummam-dz.com" },
    { label: "Collecte de lait", value: "044 20 37 71", email: "Collecte@soummam-dz.com" },
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/LaiterieSoummamOfficielle" },
    { label: "Instagram", href: "https://www.instagram.com/laiterie_soummam/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/laiteriesoummam/" },
  ],
} as const;

export const NAV = [
  { label: "Produits", to: "/produits" },
  { label: "Notre histoire", to: "/notre-histoire" },
  { label: "Notre savoir-faire", to: "/savoir-faire" },
  { label: "Nos engagements", to: "/engagements" },
  { label: "Nous rejoindre", to: "/nous-rejoindre" },
  { label: "Contact", to: "/contact" },
] as const;

/** Chiffres publiés par Laiterie Soummam. */
export const FARM_STATS = [
  { value: 6200, suffix: "", label: "éleveurs partenaires" },
  { value: 700000, suffix: " L", label: "de lait frais collectés chaque jour" },
  { value: 16000, suffix: "", label: "vaches laitières financées à 100 %" },
  { value: 53, suffix: "", label: "centres régionaux de collecte" },
  { value: 48, suffix: "", label: "camions isothermes" },
  { value: 11, suffix: "", label: "fermes de référence" },
] as const;

export const PEOPLE_STATS = [
  { value: 2000, suffix: "+", label: "emplois permanents" },
  { value: 10000, suffix: "+", label: "emplois indirects" },
  { value: 51, suffix: "", label: "lignes de production" },
  { value: 200, suffix: "", label: "références produits" },
] as const;

export const TIMELINE = [
  {
    year: "1993",
    title: "Une famille, une première laiterie",
    text: "La famille Hamitouche fonde Laiterie Soummam dans la région d'Akbou. Tout commence par un atelier, quelques ouvriers et une conviction : produire en Algérie un yaourt d'une qualité irréprochable.",
  },
  {
    year: "2000",
    title: "L'installation à Taharacht",
    text: "L'entreprise s'installe durablement dans la zone industrielle de Taharacht, à Akbou. Le site devient le cœur industriel de Soummam.",
  },
  {
    year: "2009",
    title: "La collecte de lait frais national",
    text: "Soummam lance un programme national de collecte de lait frais : éleveurs indépendants, centres de collecte régionaux et transport isotherme dédié.",
  },
  {
    year: "Aujourd'hui",
    title: "Une histoire algérienne",
    text: "Deux sites de production spécialisés, 51 lignes de production, 200 références et une capacité de traitement de 1 450 000 litres de lait cru par jour.",
  },
] as const;

export const JOURNEY = [
  { step: "01", title: "L'éleveur", text: "6 200 éleveurs partenaires, 16 000 vaches laitières financées à 100 % et 11 fermes de référence." },
  { step: "02", title: "La collecte", text: "53 centres régionaux collectent en moyenne 700 000 litres de lait frais chaque jour." },
  { step: "03", title: "Le froid", text: "48 camions isothermes maintiennent la chaîne du froid entre la ferme et l'usine." },
  { step: "04", title: "Le contrôle qualité", text: "Chaque lait réceptionné est contrôlé avant d'entrer en production." },
  { step: "05", title: "La production", text: "51 lignes de production et une capacité de traitement de 1 450 000 litres de lait cru par jour." },
  { step: "06", title: "La table", text: "200 références distribuées à travers le territoire national, jusqu'au petit-déjeuner des familles." },
] as const;

export const VALUES = [
  {
    title: "Une histoire familiale de 30 ans",
    text: "Soummam est née d'une famille et d'une région. Trente ans plus tard, la même exigence guide chaque pot de yaourt.",
  },
  {
    title: "Un acteur engagé pour l'emploi",
    text: "2 000 emplois permanents et plus de 10 000 emplois indirects dans la collecte, la logistique et la distribution.",
  },
  {
    title: "Un outil de production performant",
    text: "Deux sites spécialisés, 51 lignes de production et une capacité de 1 450 000 litres de lait cru traités par jour.",
  },
  {
    title: "Des investissements constants",
    text: "Financement des cheptels, centres de collecte, fermes de référence, transport isotherme : l'amont agricole est financé année après année.",
  },
] as const;

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "yaourts-desserts",
    name: "Yaourts & desserts",
    tagline: "Le métier d'origine",
    description:
      "Yaourts brassés, fermes et desserts lactés : la gamme historique de Soummam, née en 1993.",
  },
  {
    slug: "boissons-lactees",
    name: "Boissons lactées",
    tagline: "À boire, partout",
    description: "Des boissons lactées à emporter, pensées pour le quotidien et les petites faims.",
  },
  {
    slug: "lait-uht",
    name: "Lait UHT",
    tagline: "Le lait de tous les jours",
    description:
      "Lait UHT entier, demi-écrémé et laits enrichis, disponibles en plusieurs formats familiaux et individuels.",
  },
  {
    slug: "fromages",
    name: "Fromages",
    tagline: "Le quatrième métier",
    description: "La gamme fromagère de Soummam, quatrième métier de la laiterie.",
  },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  family: string;
  short: string;
  story: string;
  variants: string[];
  formats: string[];
  conservation: string;
  packaging: string;
  pending?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "dialna",
    name: "Dialna",
    category: "yaourts-desserts",
    family: "Spécialité laitière aromatisée sucrée",
    short: "Le brassé aromatisé qui a fait entrer Soummam dans les habitudes algériennes.",
    story:
      "Une spécialité laitière brassée, aromatisée et sucrée, déclinée en quatre parfums et deux formats. Onctueuse, simple, faite pour être partagée.",
    variants: ["Fraise", "Pêche", "Abricot", "Fruits des bois"],
    formats: ["70 g", "100 g"],
    conservation: "À conserver entre 0 °C et 6 °C.",
    packaging: "Pot operculé.",
  },
  {
    slug: "lait-uht-entier",
    name: "Lait UHT Entier",
    category: "lait-uht",
    family: "Lait UHT",
    short: "Le lait entier de la maison, du verre du matin à la pâtisserie du dimanche.",
    story:
      "Un lait UHT entier issu de la collecte Soummam, traité puis conditionné pour se conserver hors du froid jusqu'à l'ouverture.",
    variants: ["Entier"],
    formats: ["1 L", "500 ml", "180 ml"],
    conservation: "Avant ouverture : à température ambiante. Après ouverture : entre 0 °C et 6 °C.",
    packaging: "Brique.",
  },
  {
    slug: "lait-uht-demi-ecreme",
    name: "Lait UHT Demi-écrémé",
    category: "lait-uht",
    family: "Lait UHT",
    short: "La même origine, une matière grasse allégée.",
    story:
      "Le lait UHT demi-écrémé Soummam, pour celles et ceux qui préfèrent un lait plus léger au quotidien.",
    variants: ["Demi-écrémé"],
    formats: ["1 L"],
    conservation: "Avant ouverture : à température ambiante. Après ouverture : entre 0 °C et 6 °C.",
    packaging: "Brique.",
  },
  {
    slug: "vitamilk",
    name: "Vitamilk",
    category: "lait-uht",
    family: "Lait UHT",
    short: "Un lait UHT de la gamme Soummam.",
    story: "Vitamilk fait partie de la gamme de laits UHT Soummam.",
    variants: ["Vitamilk"],
    formats: ["1 L"],
    conservation: "Avant ouverture : à température ambiante. Après ouverture : entre 0 °C et 6 °C.",
    packaging: "Brique.",
  },
  {
    slug: "minceur",
    name: "Minceur",
    category: "lait-uht",
    family: "Lait UHT",
    short: "Un lait UHT de la gamme Soummam.",
    story: "Minceur fait partie de la gamme de laits UHT Soummam.",
    variants: ["Minceur"],
    formats: ["1 L"],
    conservation: "Avant ouverture : à température ambiante. Après ouverture : entre 0 °C et 6 °C.",
    packaging: "Brique.",
  },
  {
    slug: "boissons-lactees",
    name: "Boissons lactées",
    category: "boissons-lactees",
    family: "Boissons lactées",
    short: "L'un des quatre métiers de Soummam.",
    story:
      "Les boissons lactées constituent l'un des quatre métiers de Laiterie Soummam. Le détail des références de cette gamme sera publié ici.",
    variants: [],
    formats: [],
    conservation: "Information à compléter.",
    packaging: "Information à compléter.",
    pending: true,
  },
  {
    slug: "fromages",
    name: "Fromages",
    category: "fromages",
    family: "Fromages",
    short: "Le quatrième métier de la laiterie.",
    story:
      "La gamme fromagère complète Soummam. Le détail des références de cette gamme sera publié ici.",
    variants: [],
    formats: [],
    conservation: "Information à compléter.",
    packaging: "Information à compléter.",
    pending: true,
  },
];

export const FAQ = [
  {
    q: "Où sont fabriqués les produits Soummam ?",
    a: "Sur les sites de production de Laiterie Soummam situés dans la zone industrielle de Taharacht, à Akbou (wilaya de Béjaïa).",
  },
  {
    q: "D'où vient le lait utilisé par Soummam ?",
    a: "Du programme national de collecte lancé en 2009 : 6 200 éleveurs partenaires, 53 centres régionaux de collecte et 48 camions isothermes, pour une moyenne de 700 000 litres de lait frais collectés par jour.",
  },
  {
    q: "Comment conserver les yaourts et desserts ?",
    a: "Les yaourts et desserts se conservent au réfrigérateur, entre 0 °C et 6 °C, jusqu'à la date indiquée sur l'emballage.",
  },
  {
    q: "Et le lait UHT ?",
    a: "Le lait UHT se conserve à température ambiante avant ouverture. Une fois ouvert, il doit être placé au réfrigérateur entre 0 °C et 6 °C.",
  },
  {
    q: "Combien de références Soummam propose-t-elle ?",
    a: "200 références réparties sur quatre métiers : yaourts et desserts, boissons lactées, lait UHT et fromages.",
  },
  {
    q: "Comment contacter le service consommateurs ?",
    a: `Par téléphone au ${BRAND.consumerPhone}, ou via le formulaire de la page Contact.`,
  },
  {
    q: "Comment postuler chez Soummam ?",
    a: "Via le formulaire de candidature de la page « Nous rejoindre ». Attention : Soummam a publiquement alerté sur l'existence de faux comptes de recrutement à son nom ; seuls ses canaux officiels font foi.",
  },
];

export const CTA_LABELS = {
  products: "Découvrir nos produits",
  range: "Voir toute la gamme",
  story: "Découvrir notre histoire",
  savoirFaire: "Explorer notre savoir-faire",
  engagement: "Découvrir notre engagement",
  join: "Rejoindre Soummam",
  contact: "Nous contacter",
  consumer: "Contacter le service consommateurs",
} as const;

export function productsByCategory(slug: string) {
  return PRODUCTS.filter((p) => p.category === slug);
}

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function categoryOf(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
