"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CartItem = { name: string; size: string; price: number };
const SHIPPING = 4.90;

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("delivio-cart");
      const parsed: unknown = raw ? JSON.parse(raw) : [];
      if (Array.isArray(parsed)) setItems(parsed.filter((item): item is CartItem =>
        item && typeof item.name === "string" && typeof item.size === "string" && typeof item.price === "number" && Number.isFinite(item.price) && item.price > 0
      ));
    } catch { setItems([]); }
  }, []);

  function removeItem(index: number) {
    const next = items.filter((_, i) => i !== index);
    setItems(next);
    localStorage.setItem("delivio-cart", JSON.stringify(next));
  }

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  return (
    <main className="category-page cart-page">
      <div className="announcement"><span>DELIVIO FASHION®</span><span>OWN YOUR IDENTITY.</span><span>EST. 2026</span></div>
      <header className="category-header">
        <Link className="brand-lockup" href="/"><img src="/delivio-d-emblem.png" alt="DELIVIO FASHION Emblem" /><span>DELIVIO<small>FASHION®</small></span></Link>
        <Link className="category-home-link" href="/#kollektionen">← WEITER SHOPPEN</Link>
      </header>
      <section className="cart-content">
        <p className="section-kicker">DELIVIO / YOUR SELECTION</p>
        <h1>WARENKORB</h1>
        {items.length === 0 ? <div className="cart-empty"><p>Dein Warenkorb ist noch leer.</p><Link className="primary-link" href="/#kollektionen">KOLLEKTION ENTDECKEN ↗</Link></div> : <>
          <div className="cart-items">{items.map((item, index) => <article className="cart-item" key={index}>
            <div><strong>{item.name}</strong><span>GRÖSSE {item.size}</span></div>
            <b>{item.price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</b>
            <button type="button" onClick={() => removeItem(index)} aria-label={item.name + " entfernen"}>ENTFERNEN ×</button>
          </article>)}</div>
          <div className="cart-summary"><div><span>Zwischensumme</span><b>{subtotal.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</b></div><div><span>Versand Deutschland</span><b>{SHIPPING.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</b></div><div className="cart-total"><span>Gesamtbetrag</span><b>{(subtotal + SHIPPING).toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</b></div></div>
          <Link className="cart-checkout" href="/checkout">CHECKOUT-VORSCHAU ANSEHEN</Link>
          <p className="cart-note">Der Shop wird vorbereitet. Bestellungen und Zahlungen sind derzeit noch nicht möglich. Der Checkout wird erst nach Einrichtung und Prüfung aller Produkte, Versand- und Zahlungsabläufe freigeschaltet.</p>
        </>}
      </section>
      <footer className="category-footer"><span>© 2026 DELIVIO FASHION®</span><Link href="/impressum">IMPRESSUM</Link><Link href="/datenschutz">DATENSCHUTZ</Link><Link href="/agb">AGB</Link><Link href="/widerruf">WIDERRUF</Link><Link href="/retoure">RETOUREN</Link></footer>
    </main>
  );
}
