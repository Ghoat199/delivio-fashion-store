import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWooCommerceBaseUrl } from "../../../lib/woocommerce";

export const dynamic = "force-dynamic";

const categories: Record<string, { name: string; subtitle: string; number: string; matches: string[] }> = {
  tshirts: { name: "T-SHIRTS", subtitle: "EVERYDAY STATEMENTS", number: "01", matches: ["tshirt", "t-shirts", "t-shirt", "shirts", "shirts"] },
  hoodies: { name: "PULLOVER & HOODIES", subtitle: "COMFORT. CHARACTER.", number: "02", matches: ["hoodies", "hoodie", "pullover", "sweatshirts", "sweatshirt"] },
  jackets: { name: "JACKEN", subtitle: "LAYER WITH INTENTION", number: "03", matches: ["jackets", "jacket", "jacken", "jacke"] },
  pants: { name: "HOSEN", subtitle: "THE RIGHT SILHOUETTE", number: "04", matches: ["pants", "trousers", "hosen", "hose"] },
  caps: { name: "CAPS", subtitle: "FINISH THE LOOK", number: "05", matches: ["caps", "cap", "muetzen", "mützen"] },
  accessories: { name: "ACCESSOIRES", subtitle: "THE DETAILS MATTER", number: "06", matches: ["accessories", "accessoires", "accessory"] },
};

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const item = categories[category];
  if (!item) return { title: "Kategorie nicht gefunden" };
  const title = `${item.name} | DELIVIO FASHION`;
  const description = `Entdecke die DELIVIO FASHION Kollektion ${item.name}.`;
  return { title, description, alternates: { canonical: `/category/${category}` } };
}

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }));
}

type StoreCategory = { id: number; name: string; slug: string };
type StoreProduct = {
  id: number;
  name: string;
  permalink: string;
  short_description?: string;
  images?: { src: string; alt?: string }[];
  prices?: { price: string; currency_code: string; currency_minor_unit: number };
  is_in_stock?: boolean;
};

async function loadProducts(category: { matches: string[] }): Promise<{ products: StoreProduct[]; connected: boolean }> {
  let baseUrl: string | null;
  try {
    baseUrl = getWooCommerceBaseUrl();
  } catch {
    return { products: [], connected: false };
  }
  if (!baseUrl) return { products: [], connected: false };

  try {
    const categoryResponse = await fetch(`${baseUrl}/wp-json/wc/store/v1/products/categories?per_page=100`, {
      headers: { Accept: "application/json" }, cache: "no-store",
    });
    if (!categoryResponse.ok) return { products: [], connected: false };
    const storeCategories = await categoryResponse.json() as StoreCategory[];
    const normalize = (value: string) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "");
    const wanted = new Set(category.matches.map(normalize));
    const match = storeCategories.find((entry) => wanted.has(normalize(entry.slug)) || wanted.has(normalize(entry.name)));
    if (!match) return { products: [], connected: true };

    const productResponse = await fetch(`${baseUrl}/wp-json/wc/store/v1/products?category=${match.id}&per_page=100&orderby=date&order=desc`, {
      headers: { Accept: "application/json" }, cache: "no-store",
    });
    if (!productResponse.ok) return { products: [], connected: false };
    const products = await productResponse.json() as StoreProduct[];
    return { products, connected: true };
  } catch {
    return { products: [], connected: false };
  }
}

function formatPrice(prices?: StoreProduct["prices"]) {
  if (!prices?.price) return "PREIS FOLGT";
  const amount = Number(prices.price) / Math.pow(10, prices.currency_minor_unit ?? 2);
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: prices.currency_code || "EUR" }).format(amount);
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = categories[category];
  if (!item) notFound();
  const { products, connected } = await loadProducts(item);

  return (
    <main className="category-page">
      <div className="announcement"><span>DELIVIO FASHION®</span><span>OWN YOUR IDENTITY.</span><span>EST. 2026</span></div>
      <header className="category-header">
        <Link className="brand-lockup" href="/"><span>DELIVIO<small>FASHION®</small></span></Link>
        <Link className="category-home-link" href="/">← ZURÜCK ZUM SHOP</Link>
      </header>
      <section className="collection-heading">
        <p className="section-kicker">{item.number} / DELIVIO COLLECTION</p>
        <h1>{item.name}</h1>
        <p>{item.subtitle}</p>
        <span>{products.length.toString().padStart(2, "0")} ARTIKEL</span>
      </section>
      {products.length > 0 ? (
        <section className="product-grid" aria-label={`Artikel in ${item.name}`}>
          {products.map((product) => (
            <a className="shop-product-card" href={product.permalink} key={product.id}>
              <div className="shop-product-image">
                {product.images?.[0]?.src ? <img src={product.images[0].src} alt={product.images[0].alt || product.name} loading="lazy" /> : <div className="collection-empty-mark">D.</div>}
                <span>ENTDECKEN ↗</span>
              </div>
              <div className="shop-product-meta">
                <div><h2>{product.name}</h2><p>{product.short_description?.replace(/<[^>]*>/g, "").slice(0, 110)}</p></div>
                <strong>{formatPrice(product.prices)}</strong>
              </div>
            </a>
          ))}
        </section>
      ) : (
        <section className="collection-empty">
          <p className="section-kicker">{connected ? "KOLLEKTION WIRD VORBEREITET" : "SHOP-VERBINDUNG NOCH NICHT AKTIV"}</p>
          <h2>{connected ? <>DEIN NÄCHSTES<br/><em>STATEMENT.</em></> : <>DEINE<br/><em>COLLECTION.</em></>}</h2>
          <p>{connected ? "Sobald Produkte dieser Kategorie in WooCommerce veröffentlicht und mit Printegy synchronisiert sind, erscheinen hier automatisch alle verfügbaren Artikel." : "Die Produktliste wird direkt aus dem DELIVIO-Shop geladen. Die Shop-Verbindung ist derzeit noch nicht erreichbar."}</p>
          <span>{connected ? "COMING SOON" : "SHOP CONNECTION PENDING"}</span>
          <Link className="primary-link" href="/#kollektionen">WEITERE KATEGORIEN ENTDECKEN <span>↗</span></Link>
        </section>
      )}
      <footer className="category-footer"><span>© 2026 DELIVIO FASHION®</span><Link href="/impressum">IMPRESSUM</Link><Link href="/datenschutz">DATENSCHUTZ</Link><Link href="/agb">AGB</Link><Link href="/widerruf">WIDERRUF</Link><Link href="/retoure">RETOUREN</Link></footer>
    </main>
  );
}
