import type { Metadata } from "next";
import MenuPageClient from "./MenuPageClient";

export const metadata: Metadata = {
  title: "Menú",
  description:
    "Explora el menú de Lucy’s Kitchen en Pachuca con tex-mex, hamburguesas, enchiladas y platillos de la casa.",
  openGraph: {
    title: "Menú | Lucy’s Kitchen",
    description:
      "Revisa los platillos más populares de Lucy’s Kitchen en Pachuca: tex-mex, hamburguesas y comida casera.",
    type: "website",
    images: [
      {
        url: "/images/gallery/food-02.jpg",
        width: 1200,
        height: 900,
        alt: "Platillo del menú de Lucy’s Kitchen",
      },
    ],
  },
};

export default function MenuPage() {
  return <MenuPageClient />;
}
