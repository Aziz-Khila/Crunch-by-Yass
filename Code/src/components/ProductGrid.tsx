"use client";

import { useMemo, useState } from "react";
import { products, Product, ProductCategory } from "@/data/products";
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

      <div className="mt-10 grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={setSelectedProduct}
            index={index}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-warm-brown-light">Aucun produit dans cette catégorie.</p>
      )}

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
