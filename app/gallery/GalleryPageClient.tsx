"use client";

import { motion, useReducedMotion } from "motion/react";
import { gallery } from "../../content/gallery";

const assetPath = (path: string) => `/tmf_001${path}`;

export default function GalleryPageClient() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-battleRed">
          Galería
        </p>
        <h1 className="mt-4 font-display text-4xl uppercase tracking-wide text-navy sm:text-5xl">
          Un vistazo a la experiencia
        </h1>
      </header>

      <div className="overflow-hidden rounded-[2rem]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {gallery.map((image, index) => (
            <motion.figure
              key={image.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
              className="group overflow-hidden rounded-[1.5rem] border border-navy/10 bg-cream shadow-sm"
            >
              <div className="overflow-hidden">
                <img
                  src={assetPath(image.src)}
                  alt={image.alt || "Fotografía de Lucy’s Kitchen en Pachuca"}
                  className="h-72 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02] sm:h-80"
                />
              </div>

              {image.caption ? (
                <figcaption className="px-4 py-3 text-sm text-charcoal/75">
                  {image.caption}
                </figcaption>
              ) : null}
            </motion.figure>
          ))}
        </div>
      </div>
    </main>
  );
}
