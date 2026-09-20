import type { Metadata } from "next";
import CustomOrderView from "@/components/CustomOrderView";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Commande Personnalisée",
  description: `Commandez un gâteau sur mesure chez ${siteConfig.name}. Décrivez votre projet et contactez-nous via WhatsApp.`,
};

export default function CustomOrderPage() {
  return <CustomOrderView />;
}
