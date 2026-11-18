"use client";

const categories = [
  { number:"01", name:"T-SHIRTS", line:"EVERYDAY STATEMENTS", image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85", id:"tshirts" },
  { number:"02", name:"PULLOVER & HOODIES", line:"COMFORT. CHARACTER.", image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=85", id:"hoodies" },
  { number:"03", name:"JACKEN", line:"LAYER WITH INTENTION", image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85", id:"jackets" },
  { number:"04", name:"HOSEN", line:"THE RIGHT SILHOUETTE", image:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=85", id:"pants" },
  { number:"05", name:"CAPS", line:"FINISH THE LOOK", image:"https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85", id:"caps" },
  { number:"06", name:"ACCESSOIRES", line:"THE DETAILS MATTER", image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85", id:"accessories" }
];

export default function Home() {
  return <main className="store">
    <div className="announcement"><span>DELIVIO FASHION®</span><span>SHOP IN VORBEREITUNG · VERSAND DEUTSCHLAND 4,90 €</span><span>EST. 2026</span></div>
    <header className="site-header">
      <a className="brand-lockup" href="#start" aria-label="DELIVIO FASHION Startseite"><span>DELIVIO<small>FASHION®</small></span></a>
      <nav className="main-nav"><a href="#kollektionen">KOLLEKTIONEN</a><a href="#manifest">UNSERE HALTUNG</a><a href="#service">SERVICE</a></nav>
      <div className="header-actions"><a className="header-bag" href="/warenkorb">WARENKORB ↗</a><a className="header-cta" href="#kollektionen">SHOP ENTDECKEN <span>↗</span></a></div>
    </header>

    <section className="hero-new" id="start">
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="hero-content">
        <p className="kicker"><i></i> INDEPENDENT STREETWEAR · STUTTGART</p>
        <h1>OWN YOUR<br/><em>IDENTITY.</em></h1>
        <p className="hero-intro">Stil ist mehr als Kleidung. Er ist Ausdruck deiner Persönlichkeit. Entdecke eine Marke für Menschen, die ihren eigenen Weg gehen.</p>
        <a className="primary-link" href="#kollektionen">DIE KOLLEKTION ENTDECKEN <span>↗</span></a>
        <div className="hero-foot"><span>DESIGNED TO STAND OUT</span><span>01 — 06 / DELIVIO</span></div>
      </div>
      <span className="hero-vertical">DELIVIO FASHION® — EST. 2026</span>
    </section>

    <div className="ticker"><div>OWN YOUR IDENTITY <b>✦</b> BUILT ON CHARACTER <b>✦</b> DELIVIO FASHION <b>✦</b> OWN YOUR IDENTITY <b>✦</b> BUILT ON CHARACTER <b>✦</b> DELIVIO FASHION <b>✦</b></div></div>

    <section className="categories-section" id="kollektionen">
      <div className="section-top"><div><p className="section-kicker">01 / FINDE DEINEN STYLE</p><h2>SHOP BY<br/><em>CATEGORY</em></h2></div><p className="section-note">Sechs Bereiche. Unzählige Möglichkeiten.<br/>Dein Stil gibt die Richtung vor.</p></div>
      <div className="category-wall">{categories.map(item=><a className="category-tile" href={`/category/${item.id}`} key={item.id}>
        <img src={item.image} alt="" loading="lazy"/><span className="tile-shade"></span><span className="tile-number">{item.number} / 06</span><div className="tile-caption"><small>{item.line}</small><h3>{item.name}</h3></div><span className="tile-arrow">↗</span>
      </a>)}</div>
    </section>

    <section className="manifest-section" id="manifest">
      <div className="manifest-copy"><p className="section-kicker">02 / THE DELIVIO MINDSET</p><h2>NOT MADE<br/><em>TO FOLLOW.</em></h2><p>Wir glauben an Individualität statt Anpassung. An klare Designs statt kurzlebiger Trends. DELIVIO FASHION steht für Selbstbewusstsein, Charakter und den Mut, den eigenen Stil zu leben.</p><a href="#service">MEHR ÜBER DELIVIO <span>↗</span></a></div>
    </section>

        <section className="coming-section" id="coming-soon">
      <div className="coming-inner"><p className="section-kicker">03 / THE FIRST COLLECTION</p><span className="coming-symbol">D.</span><h2>YOUR NEXT<br/><em>FAVOURITE PIECE.</em></h2><p>Die Kollektion wird gerade vorbereitet. Schon bald findest du hier die ersten DELIVIO Pieces.</p><a className="outline-link" href="mailto:delivio.fashion@gmail.com?subject=DELIVIO%20FASHION%20Kollektion">FRAGEN ZUR KOLLEKTION? <span>↗</span></a></div>
    </section>

    <section className="service-band" id="service"><div><span>✦</span><p>VERSAND DEUTSCHLAND</p><strong>4,90 €</strong><small>Die konkrete Lieferzeit wird vor Verkaufsstart bekannt gegeben.</small></div><div><span>✦</span><p>FRAGEN? WIR SIND FÜR DICH DA</p><a href="mailto:delivio.fashion@gmail.com">DELIVIO.FASHION@GMAIL.COM ↗</a><small>0163 9744449</small></div><div><span>✦</span><p>DEIN STYLE. DEIN WEG.</p><strong>OWN YOUR IDENTITY.</strong></div></section>

    <footer className="site-footer">
      <div className="footer-upper"><div className="footer-brand-block"><a className="brand-lockup" href="#start"><span>DELIVIO<small>FASHION®</small></span></a><p>OWN YOUR IDENTITY.</p><small>INDEPENDENT STREETWEAR · STUTTGART</small></div><div className="footer-links"><b>EXPLORE</b><a href="#kollektionen">Kollektionen</a><a href="#manifest">Unsere Haltung</a><a href="#coming-soon">First Collection</a></div><div className="footer-links"><b>SERVICE</b><a href="mailto:delivio.fashion@gmail.com">Kontakt</a><a href="/versand">Versand & Lieferung</a><span>Deutschland · 4,90 € · Lieferzeit folgt</span></div><div className="footer-links"><b>RECHTLICHES</b><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a><a href="/agb">AGB</a><a href="/widerruf">Widerruf</a><a href="/retoure">Retouren</a></div></div>
      <div className="footer-lower"><span>© 2026 DELIVIO FASHION®</span><span>STUTTGART · GERMANY</span><a href="mailto:delivio.fashion@gmail.com">DELIVIO.FASHION@GMAIL.COM</a></div>
    </footer>
  </main>;
}
