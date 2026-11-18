import Link from "next/link";

export const metadata = { title: "Muster-Widerrufsformular" };

export default function WiderrufsformularPage() {
  return <main className="legal-page">
    <Link href="/" className="legal-back">← DELIVIO FASHION</Link>
    <p className="section-kicker">DELIVIO FASHION® / RECHTLICHES</p><h1>MUSTER-WIDERRUFSFORMULAR</h1>
    <p>Wenn du den Vertrag widerrufen willst, fülle bitte dieses Formular aus und sende es an uns. Die Verwendung dieses Formulars ist nicht vorgeschrieben.</p>
    <p>An<br/>Daniel Baker – DELIVIO FASHION<br/>Stubaier Straße 9<br/>70327 Stuttgart<br/>Deutschland<br/>E-Mail: delivio.fashion@gmail.com</p>
    <p>Hiermit widerrufe ich den von mir abgeschlossenen Vertrag über den Kauf der folgenden Waren:</p>
    <p>__________________________________________________</p>
    <p>Bestellt am: ____________________  Erhalten am: ____________________</p>
    <p>Name des Verbrauchers: __________________________________________</p>
    <p>Anschrift des Verbrauchers: _______________________________________</p>
    <p>______________________________________________________________</p>
    <p>Datum: ____________________</p>
    <p>Unterschrift (nur bei Mitteilung auf Papier): __________________________</p>
    <p><a href="mailto:delivio.fashion@gmail.com?subject=Widerruf%20DELIVIO%20FASHION&body=Hiermit%20widerrufe%20ich%20meinen%20Kaufvertrag.%0A%0AName:%0ABestellnummer:%0ABestellte%20Waren:%0ABestelldatum:%0AEmpfangsdatum:">Per E-Mail senden ↗</a></p>
    <p className="legal-note">Dieses Muster ersetzt nicht die künftig bereitzustellende elektronische Widerrufsfunktion nach § 356a BGB.</p>
  </main>;
}