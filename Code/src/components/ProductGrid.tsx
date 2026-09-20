"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products, Product, ProductCategory } from "@/data/products";
import { fadeUp, staggerContainer } from "@/lib/motion";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      <motion.div
        key={activeCategory}
        variants={staggerContainer(0.08, 0.05)}
        initial="hidden"
        animate="show"
        className="mt-10 grid items-stretch gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
              index={index}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-12 text-center text-ink-muted"
        >
          Aucun produit dans cette catégorie.
        </motion.p>
      )}

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
