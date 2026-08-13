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
  title: "Lucy’s Kitchen | Tex-Mex y Mexicana en Pachuca",
  description:
    "Lucy’s Kitchen en Pachuca sirve Tex-Mex, americana y mexicana con hamburguesas, fajitas, enchiladas y platillos de la casa.",
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
