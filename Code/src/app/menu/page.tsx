import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Catalogue",
  description: `Parcourez le catalogue complet de ${siteConfig.name} : gâteaux, cupcakes, pâtisseries et commandes spéciales.`,
};

export default function MenuPage() {
  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          number="—"
          label="Catalogue"
          title="Nos créations"
          description="Parcourez nos gâteaux et pâtisseries. Cliquez sur une création pour en savoir plus, ou commandez directement via WhatsApp."
        />

        <div className="mt-12">
          <ProductGrid />
        </div>
      </div>
    </section>
  );
}
