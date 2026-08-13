import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Mira el ambiente, la comida y el estilo de Lucy’s Kitchen en Pachuca a través de nuestra galería.",
  openGraph: {
    title: "Galería | Lucy’s Kitchen",
    description:
      "Un vistazo al ambiente, los platillos y la experiencia de Lucy’s Kitchen en Pachuca.",
    type: "website",
    images: [
      {
        url: "/images/gallery/food-03.jpg",
        width: 1200,
        height: 900,
        alt: "Platillo tex-mex destacado de Lucy’s Kitchen",
      },
    ],
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
