import heroMilk from "@/assets/hero-milk.jpg";
import farmAlgeria from "@/assets/farm-algeria.jpg";
import production from "@/assets/production.jpg";
import familyTable from "@/assets/family-table.jpg";
import catYaourts from "@/assets/cat-yaourts.jpg";
import catBoissons from "@/assets/cat-boissons.jpg";
import catLait from "@/assets/cat-lait.jpg";
import catFromages from "@/assets/cat-fromages.jpg";

export const IMAGES = { heroMilk, farmAlgeria, production, familyTable };

export const CATEGORY_IMAGES: Record<string, string> = {
  "yaourts-desserts": catYaourts,
  "boissons-lactees": catBoissons,
  "lait-uht": catLait,
  fromages: catFromages,
};

export const CATEGORY_ALT: Record<string, string> = {
  "yaourts-desserts": "Yaourt brassé à la fraise dans un bol en céramique",
  "boissons-lactees": "Grand verre de boisson lactée fraîche",
  "lait-uht": "Lait frais versé dans un verre",
  fromages: "Fromages frais sur une planche en pierre claire",
};
