export type SpiceLevel = 0 | 1 | 2 | 3;

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  spiceLevel?: SpiceLevel;
  vegetarian?: boolean;
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  order: number;
}

export interface DayHours {
  day: "lunes" | "martes" | "miércoles" | "jueves" | "viernes" | "sábado" | "domingo";
  open: string | null;
  close: string | null;
}

export interface BusinessInfo {
  name: "Lucy's Kitchen";
  cuisine: string[];
  address: string;
  phone: string;
  whatsapp: string;
  mapEmbedUrl: string;
  hours: DayHours[];
  socials?: { platform: string; url: string }[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}
