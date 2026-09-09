import type { Metadata } from "next";
import CustomOrderForm from "@/components/CustomOrderForm";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Commande Personnalisée",
  description: `Commandez un gâteau sur mesure chez ${siteConfig.name}. Décrivez votre projet et contactez-nous via WhatsApp.`,
};

export default function CustomOrderPage() {
  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              label="Sur mesure"
              title="Votre gâteau de rêve"
              description={`Décrivez votre vision et nous vous répondrons rapidement. ${siteConfig.orderNotice}`}
            />

            <div className="mt-10 hidden space-y-4 lg:block">
              {[
                "Consultation gratuite incluse",
                "Saveurs et décor personnalisables",
                "Livraison sur Tunis et banlieue",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-ink-muted">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-soft text-accent">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-stone p-8 sm:p-10">
            <CustomOrderForm />
          </div>
        </div>
      </div>
    </section>
  );
}
