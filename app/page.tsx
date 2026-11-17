"use client";

const categories = [
  { name: "T-SHIRTS", note: "CLEAN EVERYDAY ESSENTIALS", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=90", number: "01" },
  { name: "HOODIES", note: "COMFORT WITH CHARACTER", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=90", number: "02" },
  { name: "JACKEN", note: "LAYER UP. STAND OUT.", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=90", number: "03" },
  { name: "HOSEN", note: "THE PERFECT SILHOUETTE", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=90", number: "04" },
  { name: "CAPS", note: "THE FINAL DETAIL", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=90", number: "05" },
  { name: "ACCESSOIRES", note: "DETAILS THAT DEFINE YOU", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=90", number: "06" },
];

export default function Home() {
  return (
    <main className="delivio-site">
      <div className="announcement">DELIVIO FASHION <span>·</span> PREMIUM STREETWEAR <span>·</span> STUTTGART</div>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="DELIVIO FASHION Startseite">
          <span className="wordmark-d">D</span>
          <span className="wordmark-type">DELIVIO<small>FASHION</small></span>
        </a>
        <nav className="main-nav" aria-label="Hauptnavigation">
          <a href="#collections">KOLLEKTIONEN</a>
          <a href="#about">ÜBER DELIVIO</a>
        </nav>
        <a className="contact-link" href="mailto:delivio.fashion@gmail.com">KONTAKT <span>↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> INDEPENDENT FASHION LABEL · STUTTGART</p>
          <h1>OWN YOUR<br /><em>STYLE.</em></h1>
          <p className="hero-copy">Klare Designs. Starke Silhouetten.<br />Dein Stil, deine Regeln.</p>
          <a className="hero-cta" href="#collections">ENTDECKE DIE KOLLEKTION <span>↘</span></a>
        </div>
        <div className="hero-index">DELIVIO / 2026</div>
      </section>

      <section className="collections" id="collections">
        <div className="section-intro">
          <div><p className="eyebrow"><span /> FINDE DEINEN LOOK</p><h2>SHOP BY <em>CATEGORY</em></h2></div>
          <p>Sechs Kategorien. Ein Stil.<br />Dein eigener Weg.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <a className="category-card" href="mailto:delivio.fashion@gmail.com?subject=DELIVIO%20FASHION%20-%20" key={category.number}>
              <img src={category.image} alt={category.name} loading="lazy" />
              <div className="card-overlay" />
              <span className="category-number">{category.number} <i>/ 06</i></span>
              <div className="category-label"><small>{category.note}</small><h3>{category.name}</h3></div>
              <span className="category-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="brand-note" id="about">
        <p className="eyebrow"><span /> DELIVIO FASHION</p>
        <h2>OWN YOUR <em>STYLE.</em></h2>
        <p>Premium Streetwear für deinen eigenen Weg.</p>
      </section>

      <footer className="site-footer">
        <a className="footer-wordmark" href="#home">DELIVIO <span>FASHION</span></a>
        <span>STUTTGART · GERMANY</span>
        <a href="mailto:delivio.fashion@gmail.com">DELIVIO.FASHION@GMAIL.COM</a>
        <small>© 2026 DELIVIO FASHION®</small>
      </footer>
    </main>
  );
}
