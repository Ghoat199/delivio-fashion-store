import type { Metadata } from "next";
import Link from "next/link";
import StripeTestCheckout from "./stripe-test-checkout";

export const metadata: Metadata = {
  title: "Stripe-Test | DELIVIO FASHION",
  robots: { index: false, follow: false },
};

export default function StripeTestPage() {
  return (
    <main className="category-page">
      <div className="announcement"><span>DELIVIO FASHION®</span><span>INTERNER ZAHLUNGSTEST</span><span>TESTMODUS</span></div>
      <header className="category-header">
        <Link className="brand-lockup" href="/"><img src="/delivio-d-emblem.png" alt="DELIVIO FASHION Emblem" /><span>DELIVIO<small>FASHION®</small></span></Link>
        <Link className="category-home-link" href="/">← ZUR STARTSEITE</Link>
      </header>
      <section style={{ width: "min(100% - 40px, 850px)", margin: "0 auto", padding: "65px 0 90px" }}>
        <p className="section-kicker">STRIPE / TEST ENVIRONMENT</p>
        <h1 style={{ fontSize: "clamp(38px, 7vw, 68px)", lineHeight: 1, margin: "12px 0 22px" }}>ZAHLUNG TESTEN</h1>
        <div style={{ border: "1px solid #8f7546", background: "#15120d", padding: 20, marginBottom: 28 }}>
          <strong style={{ color: "#d3b477", letterSpacing: ".12em", fontSize: 12 }}>NUR TESTZAHLUNGEN – KEINE ECHTEN PRODUKTE</strong>
          <p style={{ color: "#b8b1a5", lineHeight: 1.7, margin: "9px 0 0", fontSize: 14 }}>Diese drei symbolischen Testartikel prüfen ausschließlich die Verbindung zu Stripe. Es werden keine echten DELIVIO-Produkte verkauft, keine Bestellungen gespeichert und keine Lieferungen ausgelöst.</p>
        </div>
        <StripeTestCheckout />
      </section>
      <footer className="category-footer"><span>© 2026 DELIVIO FASHION®</span><Link href="/impressum">IMPRESSUM</Link><Link href="/datenschutz">DATENSCHUTZ</Link></footer>
    </main>
  );
}
