import type { Metadata } from "next";
import CatalogueView from "@/components/CatalogueView";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Catalogue",
  description: `Parcourez le catalogue complet de ${siteConfig.name} : gâteaux, cupcakes, pâtisseries et commandes spéciales.`,
};

export default function MenuPage() {
  return <CatalogueView />;
}
