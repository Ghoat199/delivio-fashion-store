import Link from "next/link";

export const metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return <main className="legal-page"><Link href="/" className="legal-back">← DELIVIO FASHION</Link><p className="section-kicker">DELIVIO FASHION® / RECHTLICHES</p><h1>IMPRESSUM</h1>
    <h2>Angaben gemäß § 5 DDG</h2>
    <p>Daniel Baker<br/>DELIVIO FASHION – Einzelunternehmen<br/>Stubaier Straße 9<br/>70327 Stuttgart<br/>Deutschland</p>
    <h2>Kontakt</h2><p>Telefon: <a href="tel:+491639744449">0163 9744449</a><br/>E-Mail: <a href="mailto:delivio.fashion@gmail.com">delivio.fashion@gmail.com</a></p>
    <h2>Umsatzsteuer</h2><p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br/>DE365795432</p>
    <h2>Registereintrag</h2><p>Kein Eintrag im Handelsregister.</p>
    <p className="legal-note">Stand: November 2026</p>
  </main>;
}
