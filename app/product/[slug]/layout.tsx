import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produkte in Vorbereitung",
  description: "Die erste DELIVIO FASHION Kollektion wird vorbereitet.",
  robots: { index: false, follow: false },
};

export default function ProductLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
