import type { Metadata } from "next";
import { SectionReveal } from "../../components/SectionReveal";

const assetPath = (path: string) => `/tmf_001${path}`;

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce la historia de Lucy’s Kitchen en Pachuca, un lugar con ambiente cálido, sabor tex-mex y comida de la casa.",
  openGraph: {
    title: "Sobre nosotros | Lucy’s Kitchen",
    description:
      "Un lugar cálido en Pachuca para disfrutar de tex-mex y comida casera con identidad local.",
    type: "website",
    images: [
      {
        url: "/images/gallery/dining-area.jpg",
        width: 1200,
        height: 900,
        alt: "Interior cálido del restaurante Lucy’s Kitchen",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionReveal className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-battleRed">
            Sobre nosotros
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase tracking-wide text-navy sm:text-5xl">
            Un sitio para regresar por la buena comida
          </h1>
          <div className="mt-6 space-y-4 text-base leading-7 text-charcoal/80">
            <p>
              En Lucy&apos;s Kitchen celebramos la mezcla que hace que Pachuca se sienta en casa: sabores tex-mex, ingredientes contundentes y ese toque de cocina casera que convierte una comida en un momento de reunión.
            </p>
            <p>
              Desde hamburguesas y enchiladas hasta platillos con sazón de la casa, buscamos servir comida sencilla, sabrosa y hecha para compartir.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-cream shadow-sm">
          <img
            src={assetPath("/images/gallery/dining-area.jpg")}
            alt="Interior cálido del restaurante Lucy’s Kitchen con mesas y ambiente familiar"
            className="h-full w-full object-cover"
          />
        </div>
      </SectionReveal>
    </main>
  );
}
