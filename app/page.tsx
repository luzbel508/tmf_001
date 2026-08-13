import type { Metadata } from "next";
import { CTAButton } from "../components/CTAButton";
import { OpenClosedBadge } from "../components/OpenClosedBadge";
import { SectionReveal } from "../components/SectionReveal";

const assetPath = (path: string) => `/tmf_001${path}`;

export const metadata: Metadata = {
  title: "Lucy’s Kitchen | Tex-Mex en Pachuca",
  description:
    "Consulta el menú, horario y ubicación de Lucy’s Kitchen en Pachuca para disfrutar de tex-mex, hamburguesas y platillos de la casa.",
  openGraph: {
    title: "Lucy’s Kitchen | Tex-Mex en Pachuca",
    description:
      "Descubre el menú, ubicación y horario de Lucy’s Kitchen en Pachuca para comer bien y compartir en familia.",
    type: "website",
    images: [
      {
        url: "/images/gallery/food-01.jpg",
        width: 1200,
        height: 900,
        alt: "Platillo tex-mex servido en Lucy’s Kitchen",
      },
    ],
  },
};

const teaserItems = [
  {
    title: "Menú",
    description:
      "Clásicos tex-mex, enchiladas, burgers y bebidas para una comida con sazón de casa.",
    href: "/menu",
    cta: "Explorar menú",
  },
  {
    title: "Sobre nosotros",
    description:
      "Un lugar cálido para comer bien, pasar un rato y volver por más.",
    href: "/about",
    cta: "Conocer la historia",
  },
  {
    title: "Contacto",
    description:
      "Consulta horario, dirección y cómo llegar con facilidad.",
    href: "/contact",
    cta: "Ir a contacto",
  },
];

export default function Home() {
  return (
    <main className="bg-cream text-navy">
      <section className="relative isolate overflow-hidden">
        <img
          src={assetPath("/images/gallery/food-01.jpg")}
          alt="Hamburguesa y platillo tex-mex servido en Lucy’s Kitchen"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03202F]/90 via-[#03202F]/75 to-[#03202F]/35" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/80">
              Lucy&apos;s Kitchen
            </p>
            <h1 className="mt-4 font-display text-5xl uppercase leading-none tracking-wide text-cream sm:text-6xl lg:text-7xl">
              Sabor tex-mex
              <span className="mt-2 block text-battleRed">con identidad local</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-cream/90">
              Hamburguesas, fajitas, enchiladas y platillos de la casa en un lugar que siempre se siente bienvenido.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTAButton href="/menu" variant="primary">
                Ver menú
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" className="border-cream text-cream hover:bg-cream/10">
                Cómo llegar
              </CTAButton>
            </div>

            <div className="mt-10">
              <OpenClosedBadge />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {teaserItems.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 0.08} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-battleRed">
                  {item.title}
                </p>
                <h2 className="mt-4 font-display text-3xl uppercase tracking-wide text-navy">
                  {item.title}
                </h2>
                <p className="mt-4 flex-1 text-base leading-7 text-charcoal/80">
                  {item.description}
                </p>
                <div className="mt-6">
                  <CTAButton href={item.href} variant="secondary" className="w-full justify-center">
                    {item.cta}
                  </CTAButton>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
