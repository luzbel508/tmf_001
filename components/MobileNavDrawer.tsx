"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

type MobileNavDrawerProps = {
  id: string;
  open: boolean;
  onClose: () => void;
  items: { label: string; href: string }[];
};

export function MobileNavDrawer({
  id,
  open,
  onClose,
  items,
}: MobileNavDrawerProps) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Cerrar menú móvil"
            className="fixed inset-0 z-40 bg-charcoal/60 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.aside
            id={id}
            role="dialog"
            aria-modal="true"
            aria-label="Menú móvil"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-navy/10 bg-cream p-4 shadow-2xl md:hidden"
          >
            <div className="mb-6 flex items-center justify-end">
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={onClose}
                className="rounded-full border border-navy/20 p-2 text-navy transition-colors hover:bg-navy/5"
              >
                ✕
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="space-y-3"
            >
              {items.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.2, ease: "easeOut" },
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-xl border border-navy/10 bg-white/60 px-4 py-3 text-base font-medium text-navy transition-colors hover:bg-white"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default MobileNavDrawer;
