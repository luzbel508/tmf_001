"use client";

import { motion } from "motion/react";
import { useState } from "react";
import type { MenuItem } from "../content/types";

const assetPath = (path: string) => `/tmf_001${path}`;

const currencyFormatter = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 0,
});

function formatPrice(value: number) {
  return currencyFormatter.format(value);
}

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-navy/10 bg-cream shadow-sm transition-shadow duration-200 hover:shadow-xl"
    >
      <div className="relative overflow-hidden bg-cream">
        {!imageFailed && item.image ? (
          <img
            src={assetPath(item.image)}
            alt={item.name}
            className="h-56 w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.05]"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-56 w-full items-center justify-center bg-cream px-4 text-center text-sm font-medium text-navy/70">
            Imagen no disponible
          </div>
        )}
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl uppercase leading-none tracking-wide text-navy">
            {item.name}
          </h3>
          <span className="whitespace-nowrap font-semibold text-battleRed">
            {formatPrice(item.price)}
          </span>
        </div>

        {item.description ? (
          <p className="text-sm leading-6 text-charcoal/80">{item.description}</p>
        ) : null}

        <div className="flex flex-wrap gap-2 pt-1">
          {typeof item.spiceLevel === "number" && item.spiceLevel > 0 ? (
            <span className="rounded-full bg-battleRed/10 px-2 py-1 text-xs font-semibold text-battleRed">
              {"🌶".repeat(item.spiceLevel)}
            </span>
          ) : null}

          {item.vegetarian ? (
            <span className="rounded-full bg-mustard/20 px-2 py-1 text-xs font-semibold text-navy">
              Vegetariano
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default MenuCard;
