import type { MetadataRoute } from "next";

const siteUrl = "https://delivio-fashion-store.netlify.app";
const categories = ["tshirts", "hoodies", "jackets", "pants", "caps", "accessories"];

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();
  const pages = [
    "",
    "/versand",
    "/impressum",
    "/datenschutz",
    "/agb",
    "/widerruf",
    "/widerrufsformular",
    "/retoure",
  ];

  return [
    ...pages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: updated,
      changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : 0.4,
    })),
    ...categories.map((category) => ({
      url: `${siteUrl}/category/${category}`,
      lastModified: updated,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
