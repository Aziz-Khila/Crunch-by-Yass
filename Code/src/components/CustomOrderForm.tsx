"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import { buildCustomOrderMessage, openWhatsApp, openMailto } from "@/lib/whatsapp";

type FormData = {
  occasion: string;
  size: string;
  flavor: string;
  budget: string;
  deliveryDate: string;
  message: string;
};

const initialForm: FormData = {
  occasion: "",
  size: "",
  flavor: "",
  budget: "",
  deliveryDate: "",
  message: "",
};

export default function CustomOrderForm() {
  const [form, setForm] = useState<FormData>(initialForm);

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent, via: "whatsapp" | "email") => {
    e.preventDefault();
    const message = buildCustomOrderMessage(form);

    if (via === "whatsapp") {
      openWhatsApp(message);
    } else {
      openMailto("Commande personnalisée — Crunch by Yass", message);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-cream-dark bg-cream-light/60 px-4 py-3 text-base text-ink placeholder:text-ink-faint transition-all focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <form className="space-y-5" onSubmit={(e) => handleSubmit(e, "whatsapp")}>
      <div>
        <label htmlFor="occasion" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
          Occasion *
        </label>
        <input
          id="occasion"
          type="text"
          required
          placeholder="Anniversaire, Mariage, Baptême..."
          value={form.occasion}
          onChange={(e) => update("occasion", e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="size" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
            Taille / portions *
          </label>
          <input
            id="size"
            type="text"
            required
            placeholder="20 personnes, 2 étages..."
            value={form.size}
            onChange={(e) => update("size", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="flavor" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
            Parfum(s) *
          </label>
          <input
            id="flavor"
            type="text"
            required
            placeholder="Chocolat, Vanille, Fruits rouges..."
            value={form.flavor}
            onChange={(e) => update("flavor", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
            Budget *
          </label>
          <input
            id="budget"
            type="text"
            required
            placeholder="80–120 DT"
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="deliveryDate" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
            Date souhaitée *
          </label>
          <input
            id="deliveryDate"
            type="date"
            required
            value={form.deliveryDate}
            onChange={(e) => update("deliveryDate", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
          Détails supplémentaires
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Couleurs, décor, allergies, livraison..."
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-3 border-t border-cream-dark pb-20 pt-6 sm:flex-row sm:pb-0">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(37,211,102,0.25)] transition-all hover:bg-[#20bd5a]"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Envoyer via WhatsApp
        </button>
        <button
          type="button"
          onClick={(e) => handleSubmit(e, "email")}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-cream-dark bg-cream-light px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:border-accent hover:text-accent"
        >
          <Mail className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          Envoyer par email
        </button>
      </div>
    </form>
  );
}
