import Link from "next/link";

export const metadata = { title: "Allgemeine Geschäftsbedingungen" };

export default function AGBPage() {
  return <main className="legal-page">
    <Link href="/" className="legal-back">← DELIVIO FASHION</Link>
    <p className="section-kicker">DELIVIO FASHION® / RECHTLICHES</p><h1>ALLGEMEINE GESCHÄFTSBEDINGUNGEN</h1>
    <p><strong>Entwurfsfassung – vor Verkaufsstart rechtlich und anhand der tatsächlichen Shop- und Zahlungsabläufe prüfen.</strong></p>
    <h2>1. Geltungsbereich und Anbieter</h2>
    <p>Diese Allgemeinen Geschäftsbedingungen gelten für Bestellungen von Verbrauchern im Sinne des § 13 BGB und Unternehmern im Sinne des § 14 BGB über den Online-Shop DELIVIO FASHION. Verbraucher und Unternehmer werden nachfolgend gemeinsam „Kunden“ genannt. Anbieter und Vertragspartner ist Daniel Baker, DELIVIO FASHION – Einzelunternehmen, Stubaier Straße 9, 70327 Stuttgart, Deutschland, E-Mail: delivio.fashion@gmail.com, Telefon: 0163 9744449. Abweichende Bedingungen von Unternehmern gelten nur, wenn wir ihrer Geltung ausdrücklich in Textform zugestimmt haben.</p>
    <h2>2. Vertragsschluss</h2>
    <p>Die Präsentation von Waren im Online-Shop stellt kein rechtlich bindendes Angebot dar. Mit Abschluss des Bestellvorgangs gibst du ein verbindliches Angebot zum Kauf der im Warenkorb enthaltenen Waren ab. Der Vertrag kommt erst zustande, wenn wir deine Bestellung ausdrücklich annehmen oder den Versand der Ware bestätigen. Eine automatisch versandte Eingangsbestätigung stellt für sich allein noch keine Annahme dar, sofern sie nicht ausdrücklich als Auftragsbestätigung bezeichnet ist.</p>
    <h2>3. Preise und Versandkosten</h2>
    <p>Alle im Shop angegebenen Preise sind Gesamtpreise in Euro und enthalten die gesetzliche Umsatzsteuer. Für Lieferungen innerhalb Deutschlands berechnen wir zusätzlich 4,90 € Versandkosten pro Bestellung. Vor Abgabe der Bestellung werden Gesamtpreis und Versandkosten im Warenkorb bzw. an der Kasse angezeigt.</p>
    <h2>4. Zahlung</h2>
    <p>Die im Shop tatsächlich verfügbaren Zahlungsarten werden dir im Bestellprozess angezeigt. Die Zahlung ist entsprechend der dort ausgewählten Zahlungsart fällig. Bestellungen können erst abgegeben werden, wenn die Zahlungsabwicklung technisch eingerichtet und freigeschaltet ist.</p>
    <h2>5. Lieferung und Herstellung</h2>
    <p>Wir liefern derzeit ausschließlich innerhalb Deutschlands. Die konkrete voraussichtliche Lieferzeit wird vor Abgabe der Bestellung im Shop angezeigt. Sie richtet sich nach den bestätigten Produktions- und Versandzeiten des Fulfillment-Partners. Teillieferungen erfolgen nur, soweit sie für dich zumutbar sind und dir dadurch keine zusätzlichen Versandkosten entstehen.</p>
    <h2>6. Eigentumsvorbehalt</h2>
    <p>Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.</p>
    <h2>7. Gesetzliche Mängelrechte</h2>
    <p>Es gelten die gesetzlichen Mängelhaftungsrechte. Bitte wende dich bei beschädigter, fehlerhafter oder falsch gelieferter Ware an delivio.fashion@gmail.com oder telefonisch an 0163 9744449. Bitte sende solche Artikel nicht ohne vorherige Abstimmung an das Fulfillment-Unternehmen zurück.</p>
    <h2>8. Widerrufsrecht</h2>
    <p>Verbrauchern steht grundsätzlich das gesetzliche Widerrufsrecht zu. Einzelheiten findest du in unserer <Link href="/widerruf">Widerrufsbelehrung</Link>. Die gesetzlichen Ausnahmen bleiben unberührt. Die bloße Herstellung eines Artikels nach Bestelleingang schließt das Widerrufsrecht nicht automatisch aus.</p>
    <h2>9. Besondere Regelungen für Unternehmer</h2>
    <p>Für Bestellungen, die ein Kunde als Unternehmer im Sinne des § 14 BGB tätigt, gelten die gesetzlichen Regelungen für Unternehmer. Ein gesetzliches Widerrufsrecht für Verbraucher besteht bei solchen Geschäftskäufen nicht. Ist der Kunde Kaufmann, gelten die Untersuchungs- und Rügepflichten des § 377 HGB. Erkennbare Mängel sind in diesem Fall unverzüglich nach Ablieferung, verdeckte Mängel unverzüglich nach Entdeckung anzuzeigen. Diese Regelung gilt nicht für Verbraucher.</p>
    <p>Ist der Kunde Unternehmer, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen, ist – soweit gesetzlich zulässig – Stuttgart ausschließlicher Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis. Im Übrigen gelten die gesetzlichen Gerichtsstände.</p>
    <h2>10. Streitbeilegung</h2>
    <p>Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, sofern keine gesetzliche Verpflichtung besteht.</p>
    <h2>11. Anwendbares Recht</h2>
    <p>Es gilt deutsches Recht unter Wahrung der zwingenden Verbraucherschutzvorschriften des Staates, in dem du deinen gewöhnlichen Aufenthalt hast.</p>
    <p className="legal-note">Entwurf – Stand November 2026. Vor Freischaltung des Verkaufs rechtlich prüfen lassen.</p>
  </main>;
}