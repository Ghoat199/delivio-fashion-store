"use client";

import { useEffect, useState } from "react";

type CatalogItem = {
  productId: string;
  priceId: string;
  name: string;
  description: string | null;
  image: string | null;
  amount: number;
  currency: string;
};

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: currency.toUpperCase() }).format(amount / 100);
}

export default function StripeCatalog() {
  const [products, setProducts] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/stripe/catalog", { cache: "no-store" })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Produkte konnten nicht geladen werden.");
        setProducts(Array.isArray(data.products) ? data.products : []);
      })
      .catch((reason) => setError(reason instanceof Error ? reason.message : "Katalog nicht erreichbar."))
      .finally(() => setLoading(false));
  }, []);

  async function buy(priceId: string) {
    setBusy(priceId);
    setError("");
    try {
      const response = await fetch("/api/stripe/test-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, quantity: 1 }),
      });
      const data = await response.json();
      if (!response.ok || typeof data.url !== "string") throw new Error(data.error || "Checkout konnte nicht gestartet werden.");
      window.location.assign(data.url);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Checkout fehlgeschlagen.");
      setBusy(null);
    }
  }

  if (loading || products.length === 0) return null;

  return (
    <section className="categories-section" id="stripe-kollektion">
      <div className="section-top">
        <div><p className="section-kicker">STRIPE / TESTKATALOG</p><h2>DEINE<br/><em>PIECES.</em></h2></div>
        <p className="section-note">Artikel und Preise werden direkt aus dem Stripe-Testkatalog geladen.</p>
      </div>
      <div className="category-wall" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
        {products.map((item) => (
          <article key={item.priceId} style={{ border: "1px solid #39352e", padding: 18, background: "#111" }}>
            {item.image ? <img src={item.image} alt={item.name} style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover" }} /> : <div style={{ width: "100%", aspectRatio: "4 / 5", display: "grid", placeItems: "center", background: "#1c1914", color: "#d3b477", fontSize: 46 }}>D.</div>}
            <h3 style={{ margin: "16px 0 6px" }}>{item.name}</h3>
            {item.description && <p style={{ color: "#aaa49a", fontSize: 13, lineHeight: 1.5 }}>{item.description}</p>}
            <strong style={{ display: "block", margin: "12px 0" }}>{formatPrice(item.amount, item.currency)}</strong>
            <button type="button" disabled={busy !== null} onClick={() => buy(item.priceId)} style={{ padding: "12px 16px", width: "100%", background: "#d3b477", color: "#111", border: 0, fontWeight: 700, cursor: busy ? "wait" : "pointer" }}>
              {busy === item.priceId ? "WIRD GEÖFFNET …" : "TESTKAUF"}
            </button>
          </article>
        ))}
      </div>
      {error && <p role="alert" style={{ color: "#f0a0a0" }}>{error}</p>}
    </section>
  );
}
