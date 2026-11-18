import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const categories: Record<string, { name: string; subtitle: string; number: string }> = {
  tshirts: { name: "T-SHIRTS", subtitle: "EVERYDAY STATEMENTS", number: "01" },
  hoodies: { name: "PULLOVER & HOODIES", subtitle: "COMFORT. CHARACTER.", number: "02" },
  jackets: { name: "JACKEN", subtitle: "LAYER WITH INTENTION", number: "03" },
  pants: { name: "HOSEN", subtitle: "THE RIGHT SILHOUETTE", number: "04" },
  caps: { name: "CAPS", subtitle: "FINISH THE LOOK", number: "05" },
  accessories: { name: "ACCESSOIRES", subtitle: "THE DETAILS MATTER", number: "06" },
};

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const item = categories[category];
  if (!item) return { title: "Kategorie nicht gefunden" };

  const title = `${item.name} | DELIVIO FASHION`;
  const description = `Entdecke die DELIVIO FASHION Kollektion ${item.name}. Premium Streetwear mit eigenständigem Charakter – entdecke die Kategorie.`;
  const url = `/category/${category}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", images: ["https://raw.githubusercontent.com/Ghoat199/delivio-fashion/netlify-final-prep/K%C3%B6nigliches%20Kristall-D%20mit%20Neon-Energie.png"] },
  };
}

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }));
}

type ShopProduct = { slug: string; name: string; category: string; price: number; image: string; description?: string; available: boolean };

// Echte Artikel werden später hier ergänzt. Nicht bestätigte Entwürfe bleiben bewusst unsichtbar.
const shopProducts: ShopProduct[] = [];

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = categories[category];
  if (!item) notFound();
  const products = shopProducts.filter((product) => product.category === category && product.available);

  return (
    <main className="category-page">
      <div className="announcement"><span>DELIVIO FASHION®</span><span>OWN YOUR IDENTITY.</span><span>EST. 2026</span></div>
      <header className="category-header">
        <Link className="brand-lockup" href="/"><img src="https://raw.githubusercontent.com/Ghoat199/delivio-fashion/netlify-final-prep/K%C3%B6nigliches%20Kristall-D%20mit%20Neon-Energie.png" alt="DELIVIO FASHION Emblem" /><span>DELIVIO<small>FASHION®</small></span></Link>
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
            <Link className="shop-product-card" href={`/product/${product.slug}`} key={product.slug}>
              <div className="shop-product-image"><img src={product.image} alt={product.name} loading="lazy" /><span>ENTDECKEN ↗</span></div>
              <div className="shop-product-meta"><div><h2>{product.name}</h2><p>{product.description}</p></div><strong>{product.price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</strong></div>
            </Link>
          ))}
        </section>
      ) : (
        <section className="collection-empty">
          <div className="collection-empty-mark"><img src="https://raw.githubusercontent.com/Ghoat199/delivio-fashion/netlify-final-prep/K%C3%B6nigliches%20Kristall-D%20mit%20Neon-Energie.png" alt="" /></div>
          <p className="section-kicker">DIE KOLLEKTION WIRD VORBEREITET</p>
          <h2>DEIN NÄCHSTES<br/><em>STATEMENT.</em></h2>
          <p>In dieser Kategorie findest du bald alle verfügbaren DELIVIO Artikel – mit Produktbildern, Details, Größen und Preisen.</p>
          <span>COMING SOON</span>
          <Link className="primary-link" href="/#kollektionen">WEITERE KATEGORIEN ENTDECKEN <span>↗</span></Link>
        </section>
      )}
      <footer className="category-footer"><span>© 2026 DELIVIO FASHION®</span><Link href="/impressum">IMPRESSUM</Link><Link href="/datenschutz">DATENSCHUTZ</Link><Link href="/agb">AGB</Link><Link href="/widerruf">WIDERRUF</Link><Link href="/retoure">RETOUREN</Link></footer>
    </main>
  );
}
