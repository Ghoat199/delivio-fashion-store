import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://delivio-fashion.de";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "DELIVIO FASHION® — Own Your Royal Identity", template: "%s | DELIVIO FASHION" },
  description: "DELIVIO FASHION – Premium Streetwear aus Stuttgart. Entdecke T-Shirts, Hoodies, Jacken, Hosen, Caps und Accessoires.",
  applicationName: "DELIVIO FASHION",
  keywords: ["DELIVIO FASHION", "Streetwear", "Premium Fashion", "T-Shirts", "Hoodies", "Jacken", "Caps", "Stuttgart"],
  openGraph: { type: "website", locale: "de_DE", url: siteUrl, siteName: "DELIVIO FASHION", title: "DELIVIO FASHION® — Premium Streetwear", description: "Own your royal identity. Premium Streetwear aus Stuttgart." },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
