import type { Metadata } from "next";
import AboutView from "@/components/AboutView";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "À Propos",
  description: `Découvrez l'histoire de ${siteConfig.name}, notre philosophie et les témoignages de nos clients.`,
};

export default function AboutPage() {
  return <AboutView />;
}
