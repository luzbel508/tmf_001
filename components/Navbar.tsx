"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { MobileNavDrawer } from "./MobileNavDrawer";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Menú", href: "/menu" },
  { label: "Sobre nosotros", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

const drawerId = "mobile-nav-drawer";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const wasOpenRef = useRef(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? latest;

    if (latest > previous && latest > 80) {
      setHidden(true);
      return;
    }

    setHidden(false);
  });

  useEffect(() => {
    if (wasOpenRef.current && !mobileOpen) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
    wasOpenRef.current = mobileOpen;
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden ? "-110%" : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="sticky top-0 z-40 border-b border-navy/10 bg-cream/90 backdrop-blur-sm"
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="font-display text-2xl uppercase tracking-wide text-navy">
            Lucy&apos;s Kitchen
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy transition-colors hover:text-battleRed"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls={drawerId}
            onClick={() => setMobileOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white/70 text-navy transition-colors hover:bg-white md:hidden"
          >
            <span className="sr-only">Menú</span>
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-navy transition-all ${
                  mobileOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-navy transition-all ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-navy transition-all ${
                  mobileOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </nav>
      </motion.header>

      <MobileNavDrawer
        id={drawerId}
        open={mobileOpen}
        onClose={closeDrawer}
        items={navItems}
      />
    </>
  );
}

export default Navbar;
