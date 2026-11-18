import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stripe-Test Rückkehr | DELIVIO FASHION",
  robots: { index: false, follow: false },
};

export default function StripeTestReturnPage() {
  return (
    <main className="category-page">
      <section style={{ width: "min(100% - 40px, 700px)", margin: "0 auto", padding: "90px 0", textAlign: "center" }}>
        <p className="section-kicker">DELIVIO / STRIPE TEST</p>
        <h1 style={{ fontSize: "clamp(34px, 7vw, 58px)", lineHeight: 1.05 }}>DU BIST ZURÜCK.</h1>
        <p style={{ color: "#b8b1a5", lineHeight: 1.8 }}>Diese Rückkehrseite bestätigt keine Zahlung und erstellt keine Bestellung. Der Zahlungsstatus wird separat über den signierten Stripe-Webhook geprüft. Es handelt sich ausschließlich um einen technischen Test.</p>
        <Link className="primary-link" href="/stripe-test">ZURÜCK ZUM TEST ↗</Link>
      </section>
    </main>
  );
}
