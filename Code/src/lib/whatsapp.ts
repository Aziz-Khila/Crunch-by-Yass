import { siteConfig } from "@/data/site";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export function buildProductOrderMessage(productName: string): string {
  return `Bonjour, je voudrais commander : ${productName}`;
}

export function buildCustomOrderMessage(data: {
  occasion: string;
  size: string;
  flavor: string;
  budget: string;
  deliveryDate: string;
  message: string;
}): string {
  const lines = [
    "Bonjour, je souhaite passer une commande personnalisée :",
    "",
    `🎂 Occasion : ${data.occasion}`,
    `📏 Taille / portions : ${data.size}`,
    `🍰 Parfum(s) : ${data.flavor}`,
    `💰 Budget : ${data.budget}`,
    `📅 Date souhaitée : ${data.deliveryDate}`,
  ];

  if (data.message.trim()) {
    lines.push("", `💬 Message : ${data.message.trim()}`);
  }

  return lines.join("\n");
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

export function openMailto(subject: string, body: string): void {
  const url = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}
