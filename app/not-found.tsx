import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", background: "#090909", color: "#f4f0e8", display: "grid", placeItems: "center", padding: "32px 20px", textAlign: "center" }}>
      <section style={{ width: "100%", maxWidth: "560px" }}>
        <Link href="/" aria-label="Zur DELIVIO FASHION Startseite" style={{ display: "inline-flex", alignItems: "center", gap: "12px", color: "inherit", textDecoration: "none", marginBottom: "56px" }}>
          <img src="/delivio-d-emblem.png" alt="DELIVIO FASHION Emblem" width="58" height="58" style={{ objectFit: "contain" }} />
          <span style={{ fontSize: "18px", fontWeight: 800, letterSpacing: "0.16em" }}>DELIVIO<small style={{ display: "block", fontSize: "9px", letterSpacing: "0.34em" }}>FASHION®</small></span>
        </Link>
        <p style={{ color: "#c8a96b", fontSize: "12px", letterSpacing: "0.28em", fontWeight: 700 }}>ERROR 404</p>
        <h1 style={{ fontSize: "clamp(42px, 9vw, 76px)", lineHeight: 0.98, letterSpacing: "-0.05em", margin: "18px 0" }}>DIESE SEITE<br /><em style={{ color: "#c8a96b", fontStyle: "normal" }}>GIBT ES NICHT.</em></h1>
        <p style={{ color: "#aaa49a", lineHeight: 1.7, margin: "0 auto 32px", maxWidth: "390px" }}>Der Link ist möglicherweise veraltet oder die Seite wurde verschoben. Zurück im Shop findest du unsere Kollektionen.</p>
        <Link href="/" style={{ display: "inline-block", padding: "15px 24px", background: "#c8a96b", color: "#090909", fontSize: "11px", fontWeight: 800, letterSpacing: "0.14em", textDecoration: "none" }}>ZURÜCK ZUM SHOP ↗</Link>
      </section>
    </main>
  );
}
