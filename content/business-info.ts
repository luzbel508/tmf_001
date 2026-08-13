import type { BusinessInfo } from "./types";

export const businessInfo: BusinessInfo = {
  name: "Lucy's Kitchen",
  cuisine: ["Americana", "Mexicana", "Tex-Mex"],
  address: "Blvd. San Alfonso 99-Mz 7 Lt 2 Local 1A, Ejido de, 43845 Jagüey de Téllez, Hgo.",
  phone: "+527712880620",
  whatsapp: "527712880620",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.7779957142475!2d-98.80000142366309!3d20.01783018139048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a10d8df17bf1%3A0x758ad8b7ef90af2b!2sLucys%20Kitchen!5e0!3m2!1ses!2smx!4v1786573145784!5m2!1ses!2smx",
  hours: [
    { day: "lunes", open: "09:00", close: "21:00" },
    { day: "martes", open: "09:00", close: "21:00" },
    { day: "miércoles", open: "09:00", close: "21:00" },
    { day: "jueves", open: "09:00", close: "21:00" },
    { day: "viernes", open: "09:00", close: "21:00" },
    { day: "sábado", open: "09:00", close: "21:00" },
    { day: "domingo", open: "09:00", close: "15:00" },
  ],
  socials: [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/people/Lucys-Kitchen-MX/61556155106733/",
    },
  ],
};
