"use client";

import { useState } from "react";

const products = [
  { id: "tee", name: "DELIVIO TEST T-Shirt", amount: "1,00 €", description: "Symbolischer Testartikel" },
  { id: "hoodie", name: "DELIVIO TEST Hoodie", amount: "2,00 €", description: "Symbolischer Testartikel" },
  { id: "cap", name: "DELIVIO TEST Cap", amount: "3,00 €", description: "Symbolischer Testartikel" },
] as const;

export default function StripeTestCheckout() {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function startCheckout(productId: string) {
    setLoading(productId);
    setError("");
    try {
      const response = await fetch("/api/stripe/test-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: 1 }),
      });
      const result = await response.json();
      if (!response.ok || typeof result.url !== "string") {
        throw new Error(typeof result.error === "string" ? result.error : "Checkout konnte nicht gestartet werden.");
      }
      window.location.assign(result.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unbekannter Fehler.");
      setLoading(null);
    }
  }

  return (
    <div style={{ display: "grid", gap: 14 }}>
      {products.map((product) => (
        <article key={product.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, flexWrap: "wrap", border: "1px solid #39352e", padding: 20 }}>
          <div>
            <strong style={{ display: "block", letterSpacing: ".06em" }}>{product.name}</strong>
            <span style={{ color: "#aaa49a", fontSize: 13 }}>{product.description}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <strong>{product.amount}</strong>
            <button type="button" disabled={loading !== null} onClick={() => startCheckout(product.id)} style={{ padding: "12px 16px", background: "#d3b477", color: "#111", border: 0, fontWeight: 700, cursor: loading ? "wait" : "pointer" }}>
              {loading === product.id ? "WIRD GEÖFFNET …" : "TEST ZAHLEN"}
            </button>
          </div>
        </article>
      ))}
      {error && <p role="alert" style={{ color: "#f0a0a0" }}>{error}</p>}
      <p style={{ color: "#aaa49a", fontSize: 12, lineHeight: 1.6 }}>Stripe zeigt die für dein Testkonto aktivierten und unterstützten Test-Zahlungsarten. Verwende ausschließlich Stripe-Testkartendaten aus der Stripe-Dokumentation.</p>
    </div>
  );
}
