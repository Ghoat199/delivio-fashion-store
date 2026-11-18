import Link from "next/link";

const fieldStyle = { width: "100%", background: "#111", border: "1px solid #39352e", color: "#aaa49a", padding: "14px 15px", fontSize: "14px", borderRadius: "0" };

export const metadata = {
  title: "Checkout | DELIVIO FASHION",
  description: "Vorschau des Bestellablaufs bei DELIVIO FASHION. Der Checkout ist noch nicht freigeschaltet.",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <main className="category-page">
      <div className="announcement"><span>DELIVIO FASHION®</span><span>OWN YOUR IDENTITY.</span><span>EST. 2026</span></div>
      <header className="category-header">
        <Link className="brand-lockup" href="/"><img src="/delivio-d-emblem.png" alt="DELIVIO FASHION Emblem" /><span>DELIVIO<small>FASHION®</small></span></Link>
        <Link className="category-home-link" href="/warenkorb">← ZURÜCK ZUM WARENKORB</Link>
      </header>
      <section style={{ width: "min(100% - 40px, 900px)", margin: "0 auto", padding: "65px 0 90px" }}>
        <p className="section-kicker">DELIVIO / SECURE CHECKOUT</p>
        <h1 style={{ fontSize: "clamp(38px, 7vw, 68px)", lineHeight: 1, margin: "12px 0 22px" }}>BESTELLUNG</h1>
        <div style={{ border: "1px solid #8f7546", padding: "20px", marginBottom: "34px", background: "#15120d" }}>
          <strong style={{ color: "#d3b477", letterSpacing: "0.12em", fontSize: "12px" }}>CHECKOUT NOCH NICHT FREIGESCHALTET</strong>
          <p style={{ color: "#b8b1a5", lineHeight: 1.7, margin: "9px 0 0", fontSize: "14px" }}>Diese Seite zeigt den geplanten Bestellablauf. Deine Angaben werden hier weder abgefragt noch gespeichert. Bestellungen und Zahlungen sind erst möglich, wenn Produkte, Versand, Steuern und Zahlungsanbieter vollständig eingerichtet und getestet sind.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.5fr) minmax(240px, 0.8fr)", gap: "34px" }}>
          <section>
            <h2 style={{ fontSize: "20px", margin: "0 0 18px" }}>1. KONTAKTDATEN</h2>
            <fieldset disabled style={{ border: 0, padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <label style={{ color: "#aaa49a", fontSize: "12px" }}>Vorname<input style={{ ...fieldStyle, display: "block", marginTop: "7px" }} placeholder="Vorname" /></label>
              <label style={{ color: "#aaa49a", fontSize: "12px" }}>Nachname<input style={{ ...fieldStyle, display: "block", marginTop: "7px" }} placeholder="Nachname" /></label>
              <label style={{ color: "#aaa49a", fontSize: "12px", gridColumn: "1 / -1" }}>E-Mail-Adresse<input type="email" style={{ ...fieldStyle, display: "block", marginTop: "7px" }} placeholder="name@beispiel.de" /></label>
            </fieldset>
            <h2 style={{ fontSize: "20px", margin: "34px 0 18px" }}>2. RECHNUNGSADRESSE</h2>
            <fieldset disabled style={{ border: 0, padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <label style={{ color: "#aaa49a", fontSize: "12px", gridColumn: "1 / -1" }}>Firma (optional)<input style={{ ...fieldStyle, display: "block", marginTop: "7px" }} placeholder="Firmenname" /></label>
              <label style={{ color: "#aaa49a", fontSize: "12px", gridColumn: "1 / -1" }}>Straße und Hausnummer<input style={{ ...fieldStyle, display: "block", marginTop: "7px" }} placeholder="Straße und Hausnummer" /></label>
              <label style={{ color: "#aaa49a", fontSize: "12px" }}>Postleitzahl<input style={{ ...fieldStyle, display: "block", marginTop: "7px" }} placeholder="PLZ" /></label>
              <label style={{ color: "#aaa49a", fontSize: "12px" }}>Ort<input style={{ ...fieldStyle, display: "block", marginTop: "7px" }} placeholder="Ort" /></label>
              <label style={{ color: "#aaa49a", fontSize: "12px", gridColumn: "1 / -1" }}>Land<input style={{ ...fieldStyle, display: "block", marginTop: "7px" }} value="Deutschland" readOnly /></label>
              <label style={{ color: "#aaa49a", fontSize: "12px", gridColumn: "1 / -1" }}>USt-IdNr. (optional für Geschäftskunden)<input style={{ ...fieldStyle, display: "block", marginTop: "7px" }} placeholder="DE…" /></label>
            </fieldset>
            <h2 style={{ fontSize: "20px", margin: "34px 0 12px" }}>3. ZAHLUNGSART</h2>
            <p style={{ color: "#aaa49a", fontSize: "14px", lineHeight: 1.7 }}>Die verfügbaren Zahlungsarten werden nach der sicheren Anbindung des Zahlungsanbieters angezeigt.</p>
            <button type="button" disabled style={{ width: "100%", padding: "16px", background: "#514832", border: 0, color: "#aaa49a", letterSpacing: "0.12em", fontWeight: 700, marginTop: "18px", cursor: "not-allowed" }}>BESTELLUNG NOCH NICHT MÖGLICH</button>
          </section>
          <aside style={{ border: "1px solid #39352e", padding: "20px", alignSelf: "start" }}>
            <h2 style={{ fontSize: "17px", margin: "0 0 18px" }}>DEINE BESTELLUNG</h2>
            <p style={{ color: "#aaa49a", fontSize: "13px", lineHeight: 1.7 }}>Deine ausgewählten Artikel erscheinen hier, sobald der Warenkorb mit dem Checkout verbunden ist.</p>
            <div style={{ borderTop: "1px solid #39352e", marginTop: "20px", paddingTop: "16px", display: "flex", justifyContent: "space-between", fontSize: "13px" }}><span>Versand Deutschland</span><strong>4,90 €</strong></div>
            <p style={{ color: "#aaa49a", fontSize: "11px", lineHeight: 1.6, marginTop: "18px" }}>Die konkrete Lieferzeit wird vor Verkaufsstart bestätigt.</p>
          </aside>
        </div>
      </section>
      <footer className="category-footer"><span>© 2026 DELIVIO FASHION®</span><Link href="/impressum">IMPRESSUM</Link><Link href="/datenschutz">DATENSCHUTZ</Link><Link href="/agb">AGB</Link><Link href="/widerruf">WIDERRUF</Link><Link href="/retoure">RETOUREN</Link></footer>
      <style>{`@media(max-width:700px){.category-page section[style*="900px"] > div[style*="grid-template-columns: minmax"]{grid-template-columns:1fr!important}}@media(max-width:480px){fieldset[style*="grid-template-columns"]{grid-template-columns:1fr!important}fieldset label{grid-column:1 / -1!important}}`}</style>
    </main>
  );
}
