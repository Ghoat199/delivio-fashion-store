"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { LanguageSwitch, useLanguage } from "../../components/Language";

const catalogue: Record<string, { name: string; type: string; price: string; tag: string; description: string; story: string; details: string[]; status: string }> = {
  king: { name: "DELIVIO KING TEE", type: "WEIT GESCHNITTENES T-SHIRT", price: "34,90 €", tag: "DROP 001", description: "Ein klares Statement. Das DELIVIO-Königs-T-Shirt verbindet einen lässigen, weiten Schnitt mit dem selbstbewussten Auftritt der ersten Kollektion.", story: "Für alle, die ihren eigenen Weg gehen. Klare Mode trifft auf die Energie der DELIVIO-Königskollektion.", details: ["Weit geschnittenes T-Shirt", "Schwarzer Look mit königlichem Zeichen", "Teil der ersten Entwurfskollektion"], status: "Designkonzept – Produkt und Verfügbarkeit noch nicht bestätigt." },
  signature: { name: "SIGNATURE HOODIE", type: "SCHWERES KAPUZEN-SWEATSHIRT", price: "64,90 €", tag: "NEW DROP", description: "Schlicht, kraftvoll und vielseitig. Das Kapuzen-Sweatshirt ist als markantes Lieblingsstück für deinen Alltag gedacht.", story: "Weniger Ablenkung, mehr Charakter. Ein klarer DELIVIO-Auftritt mit hohem Wiedererkennungswert.", details: ["Schweres Kapuzen-Sweatshirt", "Klares Signatur-Design", "Für vielseitige Alltagslooks"], status: "Designkonzept – Produkt und Verfügbarkeit noch nicht bestätigt." },
  limits: { name: "NO LIMITS TEE", type: "T-SHIRT MIT AUFFÄLLIGEM MOTIV", price: "34,90 €", tag: "STATEMENT PIECE", description: "Ein Zeichen für deinen eigenen Weg. Das T-Shirt OHNE GRENZEN setzt auf ein markantes Motiv und eine klare Botschaft.", story: "Grenzen setzt nur du selbst. Ein ausdrucksstarker Entwurf aus der Welt von DELIVIO.", details: ["T-Shirt mit auffälligem Motiv", "Klare Botschaft: OHNE GRENZEN", "Teil der ersten Entwurfskollektion"], status: "Designkonzept – Produkt und Verfügbarkeit noch nicht bestätigt." },
  royal: { name: "ROYAL CARGO PANTS", type: "CARGHOSE IM STRASSENMODE-STIL", price: "59,90 €", tag: "COMING SOON", description: "Eine Hose mit praktischen Details und einem klaren, selbstbewussten DELIVIO-Auftritt.", story: "Ein Entwurf für den nächsten Schritt der Kollektion – als vielseitige Ergänzung zu den ausdrucksstarken Oberteilen.", details: ["Cargohosen-Entwurf", "Praktischer und markanter Stil", "Für eine spätere Kollektion vorgesehen"], status: "Noch nicht erhältlich." },
  bomber: { name: "DELIVIO BOMBER", type: "JACKE IM BOMBER-STIL", price: "89,90 €", tag: "COMING SOON", description: "Eine markante Jacke für den DELIVIO-Auftritt. Der klare Schnitt ergänzt deinen Look mit einer starken Form.", story: "Für den großen Auftritt und den Alltag. Ein Jackenentwurf mit klarem und zeitlosem Markenauftritt.", details: ["Jacke im Bomber-Stil", "Markanter Lagenlook", "Für eine spätere Kollektion vorgesehen"], status: "Noch nicht erhältlich." },
  crown: { name: "CROWN CLUB CAP", type: "KOPFBEDECKUNG", price: "29,90 €", tag: "COMING SOON", description: "Ein schlichtes Accessoire mit eigenständigem DELIVIO-Zeichen – zurückhaltend im Aussehen, stark im Charakter.", story: "Die Krone als Haltung. Dieser Entwurf rundet den DELIVIO-Auftritt ab.", details: ["Entwurf einer Kopfbedeckung", "Schlichtes DELIVIO-Zeichen", "Als Accessoire für eine spätere Kollektion vorgesehen"], status: "COMING SOON – noch nicht bestellbar." },
};

function DelivioMark({ className = "" }: { className?: string }) {
  return <span className={className} aria-label="DELIVIO monogram">D</span>;
}

export default function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { language } = useLanguage();
  const en = language === "en";
  const [size, setSize] = useState("");
  const [notice, setNotice] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("delivio-cart");
      const items: unknown = saved ? JSON.parse(saved) : [];
      if (Array.isArray(items)) setCartCount(items.length);
    } catch {
      setCartCount(0);
    }
  }, []);
  const { slug } = use(params);
  const product = catalogue[slug];

  if (!product) {
    return <main className="detail-page"><div className="wrap"><p className="eyebrow">DELIVIO FASHION</p><h1>{en ? "PRODUCT NOT FOUND." : "PRODUKT NICHT GEFUNDEN."}</h1><Link className="button" href="/#collection">{en ? "BACK TO SHOP" : "ZURÜCK ZUM SHOP"} <span>↗</span></Link></div></main>;
  }

  const comingSoon = slug === "royal" || slug === "bomber" || slug === "crown";
  const displayType = en ? ({ king: "OVERSIZED T-SHIRT", signature: "HEAVYWEIGHT HOODIE", limits: "GRAPHIC T-SHIRT", royal: "STREETWEAR PANTS", bomber: "STREETWEAR JACKET", crown: "HEADWEAR" } as Record<string,string>)[slug] : product.type;
  const displayName = en ? product.name : ({ king: "DELIVIO KÖNIGS-T-SHIRT", signature: "SIGNATUR-SWEATSHIRT", limits: "OHNE-GRENZEN-T-SHIRT", royal: "KÖNIGLICHE CARGHOSE", bomber: "DELIVIO-BOMBERJACKE", crown: "KRONEN-CAP" } as Record<string,string>)[slug];

  function addToCart() {
    if (!size || comingSoon) return;
    try {
      const saved = localStorage.getItem("delivio-cart");
      const parsed: unknown = saved ? JSON.parse(saved) : [];
      const current = Array.isArray(parsed) ? parsed.filter((item) => item && typeof item.name === "string" && typeof item.size === "string" && typeof item.price === "string") : [];
      const updated = [...current, { name: displayName, size, price: product.price }];
      localStorage.setItem("delivio-cart", JSON.stringify(updated));
      setCartCount(updated.length);
      setNotice(true);
    } catch {
      setNotice(false);
    }
  }

  return (
    <main className="detail-page">
      <div className="announcement">{en ? "DELIVIO ROYAL STREETWEAR" : "DELIVIO KÖNIGLICHE STRASSENMODE"} <span>✦</span> {en ? "DROP 001" : "KOLLEKTION 001"}</div>
      <header className="nav wrap detail-nav"><div className="detail-brand"><Link className="logo" href="/"><DelivioMark className="header-monogram" /> DELIVIO<span className="logo-light">®</span></Link><LanguageSwitch /></div><div className="detail-nav-actions"><Link className="detail-back" href="/#collection">{en ? "← BACK TO SHOP" : "← ZURÜCK ZU DEN PRODUKTEN"}</Link><Link className="detail-cart-link" href="/?cart=open">{en ? "BAG" : "WARENKORB"} ({cartCount})</Link></div></header>
      <div className="wrap detail-breadcrumb"><Link href="/">{en ? "HOME" : "STARTSEITE"}</Link><span>/</span><Link href="/#collection">{en ? "SHOP" : "PRODUKTE"}</Link><span>/</span><b>{displayName}</b></div>
      <section className="wrap detail-layout">
        <div className={`detail-visual detail-${slug}`}>
          <span className="product-tag">{en ? product.tag : ({ "DROP 001": "KOLLEKTION 001", "NEW DROP": "NEUHEIT", "STATEMENT PIECE": "BESONDERES DESIGN", "COMING SOON": "DEMNÄCHST" } as Record<string,string>)[product.tag] || product.tag}</span>
          <div className={`detail-garment garment-${slug}`}><div className="detail-print">{slug === "king" ? <><DelivioMark className="mini-monogram" /><strong>{en ? <>DELIVIO<br/>KING</> : <>DELIVIO<br/>KÖNIG</>}</strong><small>{en ? "LEAD YOUR WAY" : "GEH DEINEN WEG"}</small></> : slug === "signature" ? <><b>D.</b><small>{en ? "DELIVIO SIGNATURE" : "DELIVIO SIGNATUR"}</small></> : slug === "limits" ? <><strong>{en ? <>NO<br/>LIMITS</> : <>OHNE<br/>GRENZEN</>}</strong><small>{en ? "EST. MMXXVI" : "GEGR. 2026"}</small></> : <><strong>{slug === "bomber" ? "D." : en ? (slug === "royal" ? "ROYAL" : "CROWN") : (slug === "royal" ? "KÖNIGLICH" : "KRONE")}</strong><small>{en ? "DELIVIO / EST. 2026" : "DELIVIO / GEGR. 2026"}</small></>}</div></div>
          <span className="detail-visual-caption">{en ? "DELIVIO FASHION® / CONCEPT VISUAL" : "DELIVIO FASHION® / ENTWURFSANSICHT"}</span>
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{en ? product.tag : ({ "DROP 001": "KOLLEKTION 001", "NEW DROP": "NEUHEIT", "STATEMENT PIECE": "BESONDERES DESIGN", "COMING SOON": "DEMNÄCHST" } as Record<string,string>)[product.tag] || product.tag} · {displayType}</p>
          <h1>{displayName}</h1>
          <p className="detail-price">{product.price}</p>
          <p className="detail-description">{en ? ({ king: "A clear statement. The DELIVIO KING TEE combines a relaxed oversized silhouette with the confident look of the first collection.", signature: "Clean, powerful and versatile. The Signature Hoodie is designed as a distinctive essential for your everyday streetwear look.", limits: "A statement for your own path. The NO LIMITS TEE features bold graphics and a clear message.", royal: "A utility-inspired streetwear look with a distinct DELIVIO attitude.", bomber: "A bold layer for the DELIVIO look, with a strong silhouette.", crown: "A clean accessory with its own DELIVIO statement — understated in look, strong in character." } as Record<string,string>)[slug] : product.description}</p>
          <div className="detail-rule" />
          <h2>{en ? "THE STORY" : "DIE STORY"}</h2>
          <p className="detail-story">{en ? ({ king: "For those who walk their own path. Reduced streetwear design meets the energy of the DELIVIO KING Collection.", signature: "Less distraction, more character. A minimalist DELIVIO look with strong recognition.", limits: "The only limits are the ones you set. A bold graphic concept from the world of DELIVIO.", royal: "A concept for the next stage of the collection — a versatile counterpart to statement tops.", bomber: "For everyday wear and making an entrance. A jacket concept with a clear, refined brand identity.", crown: "The crown as an attitude. This cap concept completes the DELIVIO streetwear look." } as Record<string,string>)[slug] : product.story}</p>
          <h2>{en ? "PRODUCT HIGHLIGHTS" : "DIE WICHTIGSTEN MERKMALE"}</h2>
          <ul>{(en ? ({ king: ["Oversized streetwear concept", "Black look with a royal statement", "Part of the conceptual DROP 001 collection"], signature: ["Heavyweight hoodie concept", "Clean signature design", "Made for versatile streetwear looks"], limits: ["Graphic T-shirt concept", "Bold NO LIMITS statement", "Part of the conceptual DROP 001 collection"], royal: ["Cargo pants concept", "Utility-inspired look", "Planned piece for a future collection"], bomber: ["Bomber jacket concept", "Bold layering look", "Planned piece for a future collection"], crown: ["Headwear concept", "Minimal DELIVIO branding", "Planned accessory for a future collection"] } as Record<string,string[]>)[slug] : product.details).map((item) => <li key={item}>{item}</li>)}</ul>
          {!comingSoon && <><div className="size-label">{en ? "SELECT SIZE" : "GRÖSSE WÄHLEN"}</div><div className="size-options detail-sizes">{["S", "M", "L", "XL", "XXL"].map((item) => <button key={item} type="button" className={size === item ? "size-option selected" : "size-option"} onClick={() => { setSize(item); setNotice(false); }}>{item}</button>)}</div><button className="add-button detail-add" type="button" disabled={!size} onClick={addToCart}>{en ? "ADD TO BAG" : "IN DEN WARENKORB"} <span>＋</span></button>{notice && <p className="added-message" role="status">{en ? `${displayName} · Size ${size} added to your bag.` : `${displayName} · Größe ${size} wurde deinem Warenkorb hinzugefügt.`} <Link href="/?cart=open">{en ? "View shopping bag" : "Warenkorb öffnen"} →</Link></p>}</>}
          <p className="detail-status">{en ? (comingSoon ? "COMING SOON — NOT AVAILABLE TO ORDER YET." : "Design concept — product and availability have not yet been confirmed.") : product.status}</p>
          <Link className="detail-back-bottom" href="/#collection">{en ? "← DISCOVER MORE PRODUCTS" : "← WEITERE PRODUKTE ENTDECKEN"}</Link>
        </div>
      </section>
      <footer><div className="footer-bottom wrap"><span>© 2026 DELIVIO FASHION</span><span>{en ? "STUTTGART, GERMANY" : "STUTTGART, DEUTSCHLAND"}</span><span>{en ? "LEAD YOUR WAY." : "GEH DEINEN WEG."}</span></div></footer>
    </main>
  );
}
