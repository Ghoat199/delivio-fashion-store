import Link from "next/link";

export const metadata = { title: "Widerrufsbelehrung" };

export default function WiderrufPage() {
  return <main className="legal-page">
    <Link href="/" className="legal-back">← DELIVIO FASHION</Link>
    <p className="section-kicker">DELIVIO FASHION® / RECHTLICHES</p><h1>WIDERRUFSBELEHRUNG</h1>
    <p><strong>Entwurfsfassung – die elektronische Widerrufsfunktion und die Rücksendeabwicklung müssen vor Verkaufsstart fertig eingerichtet und getestet werden.</strong></p>
    <h2>Widerrufsrecht</h2>
    <p>Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
    <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem du oder ein von dir benannter Dritter, der nicht Beförderer ist, die Waren in Besitz genommen hast bzw. hat. Bei einer einheitlichen Bestellung mit mehreren Waren, die getrennt geliefert werden, beginnt die Frist mit Erhalt der letzten Ware.</p>
    <p>Um dein Widerrufsrecht auszuüben, musst du uns, Daniel Baker, DELIVIO FASHION – Einzelunternehmen, Stubaier Straße 9, 70327 Stuttgart, Deutschland, E-Mail: delivio.fashion@gmail.com, Telefon: 0163 9744449, mittels einer eindeutigen Erklärung (z. B. per Brief oder E-Mail) über deinen Entschluss informieren, diesen Vertrag zu widerrufen. Du kannst dafür das Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
    <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.</p>
    <h2>Folgen des Widerrufs</h2>
    <p>Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir erhalten haben, einschließlich der Lieferkosten (mit Ausnahme zusätzlicher Kosten, die sich daraus ergeben, dass du eine andere Art der Lieferung als die von uns angebotene günstigste Standardlieferung gewählt hast), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über deinen Widerruf bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas anderes vereinbart. Wegen dieser Rückzahlung werden dir keine Entgelte berechnet.</p>
    <p>Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis du den Nachweis erbracht hast, dass du die Waren zurückgesandt hast, je nachdem, welches der frühere Zeitpunkt ist.</p>
    <p>Du hast die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem du uns über den Widerruf dieses Vertrags unterrichtest, an die von uns für deine Rücksendung mitgeteilte Rücksendeadresse zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn du die Waren vor Ablauf der Frist von vierzehn Tagen absendest.</p>
    <p>Du trägst die unmittelbaren Kosten der Rücksendung der Waren. Bei mangelhafter, beschädigter oder falsch gelieferter Ware bleiben deine gesetzlichen Rechte unberührt; bitte kontaktiere uns vor einer Rücksendung, damit wir die kostenfreie Abwicklung organisieren können.</p>
    <p>Für einen etwaigen Wertverlust der Waren musst du nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.</p>
    <h2>Online-Widerruf</h2>
    <p>Vor Freischaltung des Bestellvorgangs richten wir eine elektronische Widerrufsfunktion ein, über die du den Vertrag online widerrufen und eine Eingangsbestätigung auf einem dauerhaften Datenträger erhalten kannst. Der konkrete Zugang zu dieser Funktion wird hier vor Verkaufsstart ergänzt.</p>
    <h2>Muster-Widerrufsformular</h2>
    <p>Wenn du den Vertrag widerrufen willst, kannst du das <Link href="/widerrufsformular">Muster-Widerrufsformular</Link> ausfüllen und an uns übermitteln. Die Verwendung des Formulars ist nicht vorgeschrieben.</p>
    <p className="legal-note">Entwurf – Stand November 2026</p>
  </main>;
}