import Link from "next/link";

export const metadata = { title: "Retouren & Rücksendungen" };

export default function RetourePage() {
  return <main className="legal-page">
    <Link href="/" className="legal-back">← DELIVIO FASHION</Link>
    <p className="section-kicker">DELIVIO FASHION® / SERVICE</p>
    <h1>RETOUREN</h1>
    <p>Du möchtest einen Artikel zurücksenden? Bitte beachte die folgenden Hinweise. Dein Vertragspartner und Ansprechpartner bei allen Fragen zum Widerruf und zu Reklamationen bleibt DELIVIO FASHION.</p>
    <h2>Rücksendung bei einem normalen Widerruf</h2>
    <p>Die unmittelbaren Kosten der Rücksendung trägst du. Bitte frankiere das Paket ausreichend und bewahre den Einlieferungsbeleg auf.</p>
    <h2>Rücksendeadresse</h2>
    <p>Bitte sende Rücksendungen nicht ungefragt an eine Fulfillment- oder Geschäftsadresse. Kontaktiere uns vor dem Versand unter <a href="mailto:delivio.fashion@gmail.com">delivio.fashion@gmail.com</a>. Wir teilen dir die für deine Bestellung gültige Rücksendeadresse und die nächsten Schritte mit.</p>
    <h2>Beschädigte oder fehlerhafte Ware</h2>
    <p>Bitte sende beschädigte, fehlerhafte oder falsch gelieferte Artikel nicht eigenständig an Printegy zurück. Kontaktiere uns zuerst unter <a href="mailto:delivio.fashion@gmail.com">delivio.fashion@gmail.com</a> oder telefonisch unter <a href="tel:+491639744449">0163 9744449</a>. Wir kümmern uns um die weitere Abwicklung. Bei berechtigten Mängelansprüchen entstehen dir keine Rücksendekosten.</p>
    <h2>Wichtig</h2>
    <p>Die konkrete Retourenabwicklung und Rücksendeadresse werden vor dem Verkaufsstart festgelegt. Diese Seite enthält praktische Rücksendehinweise und ersetzt nicht die gesetzliche Widerrufsbelehrung. Dein gesetzliches Widerrufsrecht bleibt unberührt.</p>
    <p className="legal-note">Stand: November 2026</p>
  </main>;
}