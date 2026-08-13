import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rigo.github.io/tmf_001"),
  title: {
    default: "Lucy’s Kitchen | Tex-Mex en Pachuca",
    template: "%s | Lucy’s Kitchen",
  },
  description:
    "Lucy’s Kitchen en Pachuca sirve tex-mex, hamburguesas, fajitas, enchiladas y platillos caseros en un ambiente cálido y familiar.",
  applicationName: "Lucy’s Kitchen",
  openGraph: {
    title: "Lucy’s Kitchen | Tex-Mex en Pachuca",
    description:
      "Tex-mex, hamburguesas, fajitas y platillos de la casa en un lugar cálido para comer y compartir en Pachuca.",
    siteName: "Lucy’s Kitchen",
    locale: "es_MX",
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
  twitter: {
    card: "summary_large_image",
    title: "Lucy’s Kitchen | Tex-Mex en Pachuca",
    description:
      "Tex-mex, hamburguesas, fajitas y platillos de la casa en un lugar cálido para comer y compartir en Pachuca.",
    images: ["/images/gallery/food-01.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
