import type { Metadata } from "next";
import { CTAButton } from "../../components/CTAButton";
import { HoursTable } from "../../components/HoursTable";
import { OpenClosedBadge } from "../../components/OpenClosedBadge";
import { SectionReveal } from "../../components/SectionReveal";
import { businessInfo } from "../../content/business-info";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Encuentra la ubicación, horario y datos de contacto de Lucy’s Kitchen en Pachuca.",
  openGraph: {
    title: "Contacto | Lucy’s Kitchen",
    description:
      "Visítanos en Pachuca, consulta horarios y contacta a Lucy’s Kitchen para llegar con facilidad.",
    type: "website",
    images: [
      {
        url: "/images/gallery/restaurant-exterior.jpg",
        width: 1200,
        height: 900,
        alt: "Exterior del restaurante Lucy’s Kitchen en Pachuca",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-battleRed">
          Contacto
        </p>
        <h1 className="mt-4 font-display text-4xl uppercase tracking-wide text-navy sm:text-5xl">
          Ven a visitarnos
        </h1>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <SectionReveal className="overflow-hidden rounded-[2rem] border border-navy/10 bg-cream shadow-sm">
          <iframe
            src={businessInfo.mapEmbedUrl}
            title="Mapa de ubicación de Lucy’s Kitchen"
            className="h-[420px] w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </SectionReveal>

        <SectionReveal delay={0.08} className="space-y-6">
          <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <OpenClosedBadge />
            </div>

            <div className="space-y-5">
              <div>
                <h2 className="font-display text-2xl uppercase tracking-wide text-navy">
                  Dirección
                </h2>
                <p className="mt-2 text-base leading-7 text-charcoal/80">
                  {businessInfo.address}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <CTAButton href={`tel:${businessInfo.phone}`} variant="primary" className="flex-1 justify-center">
                  Llamar
                </CTAButton>
                <CTAButton href={`https://wa.me/${businessInfo.whatsapp}`} variant="secondary" className="flex-1 justify-center">
                  WhatsApp
                </CTAButton>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm">
            <h2 className="font-display text-2xl uppercase tracking-wide text-navy">
              Horario
            </h2>
            <div className="mt-4">
              <HoursTable />
            </div>
          </div>
        </SectionReveal>
      </div>
    </main>
  );
}
