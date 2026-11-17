"use client";

import { useEffect, useMemo, useState } from "react";

const categories = [
  { name: "T-SHIRTS", detail: "EVERYDAY ICONS", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85", id: "tees" },
  { name: "HOODIES", detail: "COMFORT WITH CHARACTER", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85", id: "hoodies" },
  { name: "JACKEN", detail: "MAKE AN ENTRANCE", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85", id: "jackets" },
  { name: "HOSEN", detail: "THE PERFECT FIT", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85", id: "pants" },
  { name: "CAPS", detail: "TOP OFF YOUR LOOK", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=85", id: "caps" },
  { name: "ACCESSOIRES", detail: "THE FINISHING TOUCH", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85", id: "accessories" },
];

const products = [
  { name: "THE SIGNATURE TEE", category: "T-SHIRTS", description: "OVERSIZED / HEAVY COTTON", price: 34.90, image: categories[0].image, label: "THE ICON" },
  { name: "AFTER HOURS HOODIE", category: "HOODIES", description: "RELAXED FIT / PREMIUM FEEL", price: 64.90, image: categories[1].image, label: "CORE COLLECTION" },
  { name: "CITY ARMOR JACKET", category: "JACKEN", description: "MODERN STREET LAYER", price: 89.90, image: categories[2].image, label: "NEW SEASON" },
];

type CartItem = { name: string; size: string; price: number };

const euro = (value: number) => value.toLocaleString("de-DE", { style: "currency", currency: "EUR" });


function DelivioEmblem({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 420 420" role="img" aria-label="DELIVIO D Emblem" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="delivioGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f5dfa9" />
          <stop offset=".48" stopColor="#c49a50" />
          <stop offset="1" stopColor="#80602e" />
        </linearGradient>
      </defs>
      
      <path d="M92 70 H224 C331 70 390 128 390 245 C390 362 331 420 224 420 H92 Z" fill="none" stroke="url(#delivioGold)" strokeWidth="18" strokeLinejoin="round"/>
      <path d="M142 118 H222 C301 118 340 159 340 245 C340 331 301 372 222 372 H142 Z" fill="none" stroke="url(#delivioGold)" strokeWidth="11"/>
      
    </svg>
  );
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [added, setAdded] = useState("");
  useEffect(() => {
    try { const saved = localStorage.getItem("delivio-cart"); if (saved) setCart(JSON.parse(saved)); } catch {}
  }, []);
  useEffect(() => { localStorage.setItem("delivio-cart", JSON.stringify(cart)); }, [cart]);
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);
  const shipping = cart.length > 0 ? 4.90 : 0;
  const total = subtotal + shipping;
  const add = (product: typeof products[number]) => {
    const size = selected[product.name];
    if (!size) return;
    setCart(items => [...items, { name: product.name, size, price: product.price }]);
    setAdded(product.name);
    window.setTimeout(() => setAdded(""), 1500);
  };

  return (
    <main className="site-shell">
      <div className="topbar"><span>DELIVIO FASHION®</span><span>VERSANDPAUSCHALE DEUTSCHLAND 4,90 €</span><span>EST. 2026</span></div>
      <header className="header">
        <a className="brand" href="#top"><DelivioEmblem className="brand-icon" /><span className="brand-name">DELIVIO<small>FASHION®</small></span></a>
        <nav><a href="#collections">KOLLEKTIONEN</a><a href="#edit">THE EDIT</a><a href="#story">DIE MARKE</a></nav>
        <button className="bag-trigger" onClick={() => setCartOpen(true)}>WARENKORB <b>{cart.length.toString().padStart(2, "0")}</b></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">INDEPENDENT FASHION LABEL · STUTTGART</p>
          <h1>OWN YOUR<br /><em>OWN</em><br />STYLE<span>.</span></h1>
          <p className="hero-description">Klare Designs. Starke Silhouetten. Dein Stil, deine Regeln. Entdecke DELIVIO FASHION – Premium Streetwear für deinen eigenen Weg.</p>
          <a className="gold-button" href="#collections">KOLLEKTION ENTDECKEN <span>↗</span></a>
        </div>
        <div className="hero-art">
          <div className="art-glow" />
          <DelivioEmblem className="hero-emblem" />
          <div className="art-caption"><span>THE SIGNATURE</span><span>01 / 06</span></div>
        </div>
        <div className="hero-side-note">DELIVIO · EST. MMXXVI</div>
      </section>

      <div className="gold-marquee"><div>BUILT DIFFERENT <b>✦</b> OWN YOUR STYLE <b>✦</b> DELIVIO FASHION <b>✦</b> BUILT DIFFERENT <b>✦</b> OWN YOUR STYLE <b>✦</b></div></div>

      <section className="section collections" id="collections">
        <div className="section-heading"><div><p className="eyebrow">01 — FINDE DEINEN STYLE</p><h2>SHOP BY<br /><em>CATEGORY</em></h2></div><p>Sechs Kategorien.<br />Ein unverwechselbarer Auftritt.</p></div>
        <div className="category-grid">{categories.map((category, index) => <a className="category-card" href="#edit" key={category.id}><img src={category.image} alt={category.name} /><span className="category-number">0{index + 1} / 06</span><div><small>{category.detail}</small><h3>{category.name}</h3></div><span className="category-arrow">↗</span></a>)}</div>
      </section>

      <section className="manifesto" id="story">
        <div className="manifesto-emblem"><DelivioEmblem className="manifesto-logo" /></div>
        <div className="manifesto-copy"><p className="eyebrow">02 — THE DELIVIO MINDSET</p><h2>NOT MADE<br /><em>TO FOLLOW.</em></h2><p>Wir folgen keinen Regeln, die nicht zu uns passen. DELIVIO steht für Selbstbewusstsein, klare Linien und den Mut, den eigenen Stil zu leben.</p><a href="#edit">DISCOVER THE BRAND ↗</a></div>
      </section>

      <section className="section edit" id="edit">
        <div className="section-heading"><div><p className="eyebrow">03 — SELECTED PIECES</p><h2>THE<br /><em>EDIT</em></h2></div><p>Ausgewählte Designvorschauen<br />aus der DELIVIO-Welt.</p></div>
        <div className="product-grid">{products.map(product => <article className="product-card" key={product.name}><div className="product-image"><img src={product.image} alt={product.name} /><span>{product.label}</span></div><div className="product-meta"><div><h3>{product.name}</h3><p>{product.description}</p></div><b>{euro(product.price)}</b></div><div className="product-actions"><div className="sizes">{["S", "M", "L", "XL", "XXL"].map(size => <button className={selected[product.name] === size ? "selected" : ""} onClick={() => setSelected(current => ({ ...current, [product.name]: size }))} key={size}>{size}</button>)}</div><button className="add-button" disabled={!selected[product.name]} onClick={() => add(product)}>{added === product.name ? "HINZUGEFÜGT ✓" : "IN DEN WARENKORB +"}</button></div></article>)}</div>
        <p className="catalogue-note">Produkt- und Preisvorschauen. Die Bestellfunktion wird nach Anbindung des Produktkatalogs und der Zahlungsanbieter freigeschaltet.</p>
      </section>

      <section className="shipping-strip" id="shipping"><span>✦</span><p>VERSAND INNERHALB DEUTSCHLANDS</p><strong>4,90 €</strong><span>✦</span><p>DELIVIO FASHION®</p></section>

      <footer className="footer">
        <div className="footer-main"><div><a className="brand footer-brand" href="#top"><DelivioEmblem className="brand-icon" /><span className="brand-name">DELIVIO<small>FASHION®</small></span></a><p>OWN YOUR STYLE.</p></div><div className="footer-column"><b>DISCOVER</b><a href="#collections">Kollektionen</a><a href="#edit">The Edit</a><a href="#story">Die Marke</a></div><div className="footer-column"><b>SERVICE</b><a href="mailto:delivio.fashion@gmail.com">Kontakt</a><a href="#shipping">Versand & Lieferung</a><span>Versand DE: 4,90 €</span></div><div className="footer-column"><b>RECHTLICHES</b><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a><a href="/agb">AGB</a></div></div>
        <div className="footer-bottom"><span>© 2026 DELIVIO FASHION®</span><span>STUTTGART · GERMANY</span><a href="mailto:delivio.fashion@gmail.com">DELIVIO.FASHION@GMAIL.COM</a></div>
      </footer>

      {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)}><aside className="cart-panel" onClick={event => event.stopPropagation()}><div className="cart-head"><div><small>DEINE AUSWAHL</small><h2>WARENKORB ({cart.length})</h2></div><button onClick={() => setCartOpen(false)}>×</button></div>{cart.length === 0 ? <p className="empty-cart">Dein nächstes Lieblingsstück wartet hier.</p> : <>{cart.map((item, index) => <div className="cart-item" key={index}><div><b>{item.name}</b><small>GRÖSSE {item.size}</small></div><strong>{euro(item.price)}</strong><button onClick={() => setCart(items => items.filter((_, itemIndex) => itemIndex !== index))}>×</button></div>)}<div className="cart-total"><span>ZWISCHENSUMME</span><b>{euro(subtotal)}</b></div><div className="cart-total"><span>VERSAND DEUTSCHLAND</span><b>{euro(shipping)}</b></div><div className="cart-total cart-grand-total"><span>GESAMTBETRAG</span><b>{euro(total)}</b></div><p className="cart-shipping">Die Versandkosten von 4,90 € sind im Gesamtbetrag enthalten. Checkout folgt nach Anbindung der Zahlungsanbieter.</p></>}<button className="continue-button" onClick={() => setCartOpen(false)}>WEITER SHOPPEN ↗</button></aside></div>}
    </main>
  );
}
