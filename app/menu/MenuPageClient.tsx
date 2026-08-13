"use client";

import { useMemo, useState } from "react";
import { CategoryTabs } from "../../components/CategoryTabs";
import { menuCategories } from "../../content/menu-categories";
import { menuItems } from "../../content/menu-items";

export default function MenuPageClient() {
  const sortedCategories = useMemo(
    () => [...menuCategories].sort((a, b) => a.order - b.order),
    [],
  );

  const [activeCategory, setActiveCategory] = useState(
    sortedCategories[0]?.id ?? "",
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8 space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-battleRed">
          Nuestro menú
        </p>
        <h1 className="font-display text-4xl uppercase tracking-wide text-navy sm:text-5xl">
          Sabores que se sienten bien
        </h1>
        <p className="max-w-2xl text-base leading-7 text-charcoal/80">
          Cada platillo se prepara con la calidez de la casa y el sabor que nos identifica en Pachuca.
        </p>
      </header>

      <CategoryTabs
        categories={sortedCategories}
        items={menuItems}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />
    </main>
  );
}
