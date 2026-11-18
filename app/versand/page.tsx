import Link from "next/link";

export const metadata = { title: "Versand & Lieferung" };

export default function VersandPage() {
  return <main className="legal-page"><Link href="/" className="legal-back">← DELIVIO FASHION</Link><p className="section-kicker">DELIVIO FASHION® / SERVICE</p><h1>VERSAND & LIEFERUNG</h1>
    <h2>Liefergebiet</h2><p>Derzeit liefern wir innerhalb Deutschlands.</p>
    <h2>Versandkosten</h2><p>Für Lieferungen innerhalb Deutschlands berechnen wir pauschal 4,90 € Versandkosten pro Bestellung. Alle im Shop angegebenen Verbraucherpreise verstehen sich als Gesamtpreise inklusive der gesetzlichen Umsatzsteuer.</p>
    <h2>Lieferzeit</h2><p>Die verbindliche voraussichtliche Lieferzeit wird vor dem Verkaufsstart anhand der tatsächlichen Produktions- und Versandzeiten unseres Fulfillment-Partners festgelegt und vor Abschluss einer Bestellung deutlich angezeigt. Derzeit ist der Shop noch nicht für Bestellungen freigeschaltet.</p>
    <h2>Sendungsverfolgung</h2><p>Sobald deine Bestellung versendet wurde und eine Sendungsverfolgung bereitgestellt wird, erhältst du die entsprechenden Versandinformationen.</p>
    <h2>Fragen zu deiner Lieferung?</h2><p>Schreib uns an <a href="mailto:delivio.fashion@gmail.com">delivio.fashion@gmail.com</a>.</p>
    <p className="legal-note">Stand: November 2026</p>
  </main>;
}
