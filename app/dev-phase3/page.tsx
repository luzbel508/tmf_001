"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CTAButton } from "../../components/CTAButton";
import { CategoryTabs } from "../../components/CategoryTabs";
import { HoursTable } from "../../components/HoursTable";
import { MenuCard } from "../../components/MenuCard";
import { MobileNavDrawer } from "../../components/MobileNavDrawer";
import { OpenClosedBadge } from "../../components/OpenClosedBadge";
import { SectionReveal } from "../../components/SectionReveal";
import { businessInfo } from "../../content/business-info";
import { menuCategories } from "../../content/menu-categories";
import { menuItems } from "../../content/menu-items";

const demoItems = menuItems.slice(0, 6);
const emptyCategoryId = "ensaladas";
const categoryList = [...menuCategories].sort((a, b) => a.order - b.order);
const [firstCategory] = categoryList;

export default function DevPhase3Page() {
  const [activeCategory, setActiveCategory] = useState(firstCategory.id);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const visibleItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-cream text-navy">
      <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
        <section className="space-y-4">
          <h1 className="font-display text-4xl uppercase tracking-wide text-navy">
            Phase 3 Component Playground
          </h1>
          <p className="max-w-2xl text-charcoal/80">
            Temporary isolated validation page for shared components. This route exists only for Phase 3 verification and should not be considered production UI.
          </p>
        </section>

        <SectionReveal className="space-y-4 rounded-3xl border border-navy/10 bg-white/60 p-6">
          <h2 className="font-display text-3xl uppercase tracking-wide text-navy">CTAButton</h2>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="/menu" variant="primary">Ver menú</CTAButton>
            <CTAButton href="https://example.com" variant="secondary">Cómo llegar</CTAButton>
          </div>
        </SectionReveal>

        <SectionReveal className="space-y-4 rounded-3xl border border-navy/10 bg-white/60 p-6">
          <h2 className="font-display text-3xl uppercase tracking-wide text-navy">OpenClosedBadge</h2>
          <OpenClosedBadge />
        </SectionReveal>

        <SectionReveal className="space-y-4 rounded-3xl border border-navy/10 bg-white/60 p-6">
          <h2 className="font-display text-3xl uppercase tracking-wide text-navy">HoursTable</h2>
          <HoursTable />
        </SectionReveal>

        <SectionReveal className="space-y-4 rounded-3xl border border-navy/10 bg-white/60 p-6">
          <h2 className="font-display text-3xl uppercase tracking-wide text-navy">MenuCard</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <MenuCard item={demoItems[0]} />
            <MenuCard item={{ ...demoItems[1], image: "/images/menu/missing-image.jpg" }} />
          </div>
        </SectionReveal>

        <SectionReveal className="space-y-4 rounded-3xl border border-navy/10 bg-white/60 p-6">
          <h2 className="font-display text-3xl uppercase tracking-wide text-navy">CategoryTabs</h2>
          <CategoryTabs
            categories={categoryList}
            items={menuItems}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </SectionReveal>

        <SectionReveal className="space-y-4 rounded-3xl border border-navy/10 bg-white/60 p-6">
          <h2 className="font-display text-3xl uppercase tracking-wide text-navy">MobileNavDrawer</h2>
          <button
            type="button"
            aria-expanded={drawerOpen}
            aria-controls="dev-drawer"
            onClick={() => setDrawerOpen(true)}
            className="rounded-full bg-battleRed px-5 py-3 text-sm font-semibold text-cream"
          >
            Abrir drawer
          </button>
          <MobileNavDrawer
            id="dev-drawer"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            items={[
              { label: "Inicio", href: "/" },
              { label: "Menú", href: "/menu" },
              { label: "Sobre nosotros", href: "/about" },
              { label: "Contacto", href: "/contact" },
            ]}
          />
        </SectionReveal>

        <SectionReveal className="space-y-4 rounded-3xl border border-navy/10 bg-white/60 p-6">
          <h2 className="font-display text-3xl uppercase tracking-wide text-navy">Empty category state</h2>
          <div className="rounded-2xl border border-dashed border-navy/20 bg-cream p-8 text-center">
            <p className="text-lg text-navy">Próximamente</p>
          </div>
        </SectionReveal>
      </div>
    </main>
  );
}
