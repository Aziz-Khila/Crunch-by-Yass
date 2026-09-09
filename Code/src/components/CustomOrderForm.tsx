"use client";

import { FormEvent, useState } from "react";
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
    "w-full border-b border-stone-dark bg-transparent px-0 py-3 text-ink placeholder:text-ink-faint transition-colors focus:border-accent focus:outline-none";

  return (
    <form className="space-y-8" onSubmit={(e) => handleSubmit(e, "whatsapp")}>
      <div>
        <label htmlFor="occasion" className="mb-1 block text-xs font-medium uppercase tracking-[0.15em] text-ink-faint">
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

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="size" className="mb-1 block text-xs font-medium uppercase tracking-[0.15em] text-ink-faint">
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
          <label htmlFor="flavor" className="mb-1 block text-xs font-medium uppercase tracking-[0.15em] text-ink-faint">
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

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className="mb-1 block text-xs font-medium uppercase tracking-[0.15em] text-ink-faint">
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
          <label htmlFor="deliveryDate" className="mb-1 block text-xs font-medium uppercase tracking-[0.15em] text-ink-faint">
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
        <label htmlFor="message" className="mb-1 block text-xs font-medium uppercase tracking-[0.15em] text-ink-faint">
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

      <div className="flex flex-col gap-3 border-t border-stone-dark/60 pt-8 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-medium text-white transition-all hover:bg-[#20bd5a]"
        >
          Envoyer via WhatsApp
        </button>
        <button
          type="button"
          onClick={(e) => handleSubmit(e, "email")}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-stone-dark px-6 py-4 text-sm font-medium text-ink transition-all hover:border-accent hover:text-accent"
        >
          Envoyer par email
        </button>
      </div>
    </form>
  );
}
