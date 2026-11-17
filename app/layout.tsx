import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://delivio-fashion.de";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "DELIVIO FASHION® — Own Your Style", template: "%s | DELIVIO FASHION" },
  description: "Own your style. Premium Streetwear aus Stuttgart. Entdecke T-Shirts, Hoodies, Jacken, Hosen, Caps und Accessoires.",
  applicationName: "DELIVIO FASHION",
  keywords: ["DELIVIO FASHION", "Streetwear", "Premium Fashion", "T-Shirts", "Hoodies", "Jacken", "Hosen", "Caps", "Accessoires", "Stuttgart"],
  openGraph: { type: "website", locale: "de_DE", url: siteUrl, siteName: "DELIVIO FASHION", title: "DELIVIO FASHION® — Own Your Style", description: "Premium Streetwear aus Stuttgart. Own your style." },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
