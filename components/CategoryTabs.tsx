"use client";

import { AnimatePresence, motion } from "motion/react";
import type { KeyboardEvent } from "react";
import type { MenuCategory, MenuItem } from "../content/types";
import { MenuCard } from "./MenuCard";

type CategoryTabsProps = {
  categories: MenuCategory[];
  items: MenuItem[];
  activeCategory: string;
  onChange: (categoryId: string) => void;
};

export function CategoryTabs({
  categories,
  items,
  activeCategory,
  onChange,
}: CategoryTabsProps) {
  const orderedCategories = [...categories].sort((a, b) => a.order - b.order);
  const activeItems = items.filter((item) => item.category === activeCategory);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
      return;
    }

    event.preventDefault();

    const nextIndex =
      event.key === "ArrowRight"
        ? (currentIndex + 1) % orderedCategories.length
        : (currentIndex - 1 + orderedCategories.length) % orderedCategories.length;

    onChange(orderedCategories[nextIndex].id);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Categorías del menú">
        {orderedCategories.map((category, index) => {
          const isActive = category.id === activeCategory;
          const tabId = `tab-${category.id}`;
          const panelId = `panel-${category.id}`;

          return (
            <button
              key={category.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onKeyDown={(event) => handleKeyDown(event, index)}
              onClick={() => onChange(category.id)}
              className="relative rounded-full px-4 py-2 text-sm font-semibold text-navy transition-colors"
            >
              {isActive ? (
                <motion.span
                  layoutId="category-tab-indicator"
                  className="absolute inset-0 rounded-full bg-battleRed"
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                />
              ) : null}
              <span className={`relative z-10 ${isActive ? "text-cream" : "text-navy"}`}>
                {category.label}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          id={`panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {activeItems.length > 0 ? (
            activeItems.map((item) => <MenuCard key={item.id} item={item} />)
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-navy/20 bg-cream px-6 py-12 text-center text-lg font-medium text-navy">
              Próximamente
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default CategoryTabs;
