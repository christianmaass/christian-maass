# Technische SEO-Analyse: christianmaass.com
**Datum:** Januar 2025  
**Analysiert von:** Senior Technical SEO & Executive Branding Auditor

---

## 1. EXECUTIVE SUMMARY (Top 10 Issues + ROI-Fixes)

### 🔴 Kritische Probleme (sofort beheben)
1. **Homepage H1 ist temporärer Buch-Promotion-Text** – verletzt Executive-Briefing-Prinzip und SEO-Best-Practices
2. **Fehlende Meta-Descriptions** auf mehreren Seiten (executive-presence, barrierefreiheit)
3. **Homepage-Title zu generisch** – "Dr. Christian Maaß" ohne Kontext/Rolle
4. **Keine Bildoptimierung** – PNG/JPG ohne WebP, kein Lazy Loading, keine width/height-Attribute
5. **Font-Loading ohne `font-display: swap`** – blockiert Rendering

### 🟡 Wichtige Verbesserungen (hoher ROI)
6. **Structured Data inkonsistent** – Person-Schema auf Homepage fehlt `jobTitle`-Spezifität (CDO bei Thomann)
7. **Homepage ohne klare Heading-Hierarchie** – H1 temporär, keine H2 für Rollen/Kontext
8. **Thin Content** – executive-presence.astro ist Placeholder, fachartikel.astro hat unvollständige Links
9. **Fehlende interne Verlinkung** – keine Breadcrumbs, keine kontextuellen Links zwischen verwandten Seiten
10. **Performance** – keine Bildkompression, kein Preload für kritische Assets

---

## 2. URL-INVENTAR & METADATEN-ANALYSE

| URL | Indexierbar? | Canonical | Title (Zeichen) | Meta Desc (Zeichen) | H1 | Issues | Fix-Priorität |
|-----|--------------|-----------|-----------------|---------------------|-----|--------|---------------|
| `/` | ✅ Ja | ✅ `https://christianmaass.com` | "Dr. Christian Maaß" (19) | "Persönliche Seite von Christian Maaß, Unternehmer, Berater und Autor." (70) | "Ab dem 14. August im Handel" | 🔴 H1 ist temporärer Promotion-Text; Title zu generisch; keine H2-Struktur | **KRITISCH** |
| `/christian-maass` | ✅ Ja | ✅ `https://christianmaass.com/christian-maass` | "Christian Maaß – Über mich" (26) | "Profil Dr. Christian Maaß, Unternehmer, Berater und Autor im Digital Business." (88) | "Christian Maaß" | 🟡 Title könnte spezifischer sein (Rolle/Kontext) | **HOCH** |
| `/buecher` | ✅ Ja | ✅ `https://christianmaass.com/buecher` | "Bücher von Christian Maaß" (28) | "Überblick meiner Bücher: Executive Presence, Online Produktmanagement, E-Business Management und Open-Source-Software." (142) | "Meine Bücher verbinden Technologie, Business und den Faktor Mensch" | ✅ Gut strukturiert | **NIEDRIG** |
| `/fachartikel` | ✅ Ja | ✅ `https://christianmaass.com/fachartikel` | "Fachartikel von Christian Maaß" (30) | "Überblick der Fachartikel und Publikationen von Christian Maaß." (66) | "Fachartikel und Pressebeiträge" | 🟡 Viele Artikel ohne Links; Meta Desc zu generisch | **MITTEL** |
| `/lehre` | ✅ Ja | ✅ `https://christianmaass.com/lehre` | "Keynotes, Vorträge und Lehre - Christian Maaß" (45) | "Christian Maaß hält regelmäßig unternehmerische Vorträge und unterrichtet in der universitären Lehre." (100) | "Wissen teilen, Austausch ermöglichen" | ✅ Gut | **NIEDRIG** |
| `/beirat` | ✅ Ja | ✅ `https://christianmaass.com/beirat` | "Christian Maaß als Beirat und Advisor" (38) | "Christian Maaß berät Unternehmen zu den Themen Strategie, Organisation, Digitalisierung und Kommunikation." (110) | "Beirat und Advisory" | ✅ Gut | **NIEDRIG** |
| `/kontakt` | ✅ Ja | ✅ `https://christianmaass.com/kontakt` | "Kontakt mit Dr. Christian Maaß aufnehmen" (38) | "Ob Frage oder Anfrage – ich freue mich auf Ihre Nachricht und antworte persönlich." (88) | "Ob Frage oder Anfrage – ich melde mich zeitnah persönlich zurück." | ✅ Gut | **NIEDRIG** |
| `/executive-presence` | ✅ Ja | ✅ `https://christianmaass.com/executive-presence` | "Executive Presence – Buch von Christian Maaß" (44) | "Executive Presence – mehr als der erste Eindruck: Als Führungskraft souverän auftreten, kommunizieren und wirken. Erscheint am 21. August 2025." (155) | "Executive Presence" | 🔴 Placeholder-Content ("Details folgen"); kein strukturierter Content | **HOCH** |
| `/impressum` | ✅ Ja | ✅ `https://christianmaass.com/impressum` | "Impressum - Christian Maaß" (25) | "Impressum und rechtliche Angaben der Website von Christian Maaß." (62) | "Impressum" | ✅ OK (legal) | **NIEDRIG** |
| `/datenschutz` | ✅ Ja | ✅ `https://christianmaass.com/datenschutz` | "Datenschutzerklärung von Christian Maaß" (37) | "Datenschutzerklärung, Sammlung von Daten, etc." (45) | "Datenschutzerklärung" | 🟡 Meta Desc zu generisch/kurz | **MITTEL** |
| `/barrierefreiheit` | ✅ Ja | ✅ `https://christianmaass.com/barrierefreiheit` | "Barrierefreiheitserklärung - Christian Maaß" (38) | "Das Thema Barrierefreiheit liegt mir sehr am Herzen." (50) | "Erklärung zur Barrierefreiheit" | 🟡 Meta Desc zu generisch | **MITTEL** |

### Duplikate & Thin Content
- **Keine duplizierten Titles** ✅
- **Keine duplizierten Meta Descriptions** ✅
- **Keine duplizierten H1s** ✅
- **Thin Content:** `/executive-presence` ist Placeholder (nur 2 Absätze)

---

## 3. ROBOTS.TXT & SITEMAP.XML

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://christianmaass.com/sitemap.xml
```
✅ **Status:** Korrekt, keine Blockierungen

### sitemap.xml
✅ **Status:** Vorhanden, alle 11 Seiten enthalten  
⚠️ **Verbesserung:** Fehlen `lastmod`, `changefreq`, `priority` (optional, aber empfohlen)

**Coverage:** Alle indexierbaren Seiten sind enthalten ✅

---

## 4. URL-STRUKTUR & REDIRECTS

### Canonical-Konsistenz
✅ **Alle Seiten haben korrekte Canonicals**  
✅ **Konsistente Trailing-Slash-Behandlung** (keine trailing slashes in URLs)  
✅ **HTTPS durchgehend** (alle Canonicals verwenden `https://`)

### Redirect-Plan
**KEINE ÄNDERUNGEN ERFORDERLICH** – bestehende URL-Struktur ist SEO-freundlich:
- Kurze, beschreibende URLs
- Keine Parameter
- Konsistente Struktur

**Empfehlung:** Falls zukünftig URLs geändert werden, 301-Redirects implementieren.

---

## 5. ON-PAGE TECHNICAL SEO (Homepage-Fokus)

### Homepage: Aktuelle Situation
```12:14:src/pages/index.astro
const title = "Dr. Christian Maaß";
const description = "Persönliche Seite von Christian Maaß, Unternehmer, Berater und Autor.";
```

```103:103:src/pages/index.astro
<h1>Ab dem 14. August im Handel</h1>
```

### Homepage: Empfohlene Optimierungen

#### A. Title Tag (≤60 Zeichen)
**Aktuell:** "Dr. Christian Maaß" (19 Zeichen)  
**Empfohlen:** "Dr. Christian Maaß | Geschäftsführer & CDO Thomann" (48 Zeichen)

**Alternativ (wenn Rolle weniger prominent):**  
"Dr. Christian Maaß | Geschäftsführer, Autor & Beirat" (47 Zeichen)

#### B. Meta Description (≤155 Zeichen)
**Aktuell:** "Persönliche Seite von Christian Maaß, Unternehmer, Berater und Autor." (70 Zeichen)  
**Empfohlen:** "Geschäftsführer & CDO bei Thomann. Autor, Beirat und Vorstand BEVH. 20+ Jahre Digital Business, Strategie und E-Commerce." (124 Zeichen)

#### C. H1 & Heading-Hierarchie
**Problem:** Aktueller H1 "Ab dem 14. August im Handel" ist temporärer Promotion-Text.

**Empfehlung (Executive Briefing bleibt kurz):**
```html
<h1>Dr. Christian Maaß</h1>
<!-- Hero-Banner bleibt, aber H1 wird geändert -->

<!-- Nach Hero-Banner, vor Content-Boxen: -->
<h2>Rolle & Verantwortung</h2>
<!-- Optional: Kurzer Text oder direkt zu Boxen -->

<!-- In Content-Boxen: -->
<h3>Zu meinen Büchern</h3>
<h3>Advisor- und Beiratstätigkeiten</h3>
<h3>Lehre und Vorträge</h3>
```

**ODER (wenn Promotion-H1 bleiben soll):**
- Promotion als `<section>` ohne H1
- Haupt-H1: "Dr. Christian Maaß"
- H2: "Rolle & Verantwortung", "Impact & Track Record", "Mandate & Kontext"

#### D. Open Graph & Twitter Cards
✅ **Bereits vorhanden** in `BaseLayout.astro`  
⚠️ **Verbesserung:** Homepage-spezifisches OG-Image (aktuell: `christian-maass.png`)

**Empfohlen für Homepage:**
```astro
const ogImage = `${siteUrl}/og/homepage-executive.jpg`; // Professionelles Executive-Bild
```

#### E. Interne Navigation & Anchor-Links
**Aktuell:** Skip-Link vorhanden ✅  
**Empfehlung:** Anchor-Navigation für Homepage-Sektionen (optional, für Executive Briefing nicht zwingend)

```html
<nav aria-label="Sprungnavigation">
  <a href="#rolle">Rolle & Verantwortung</a>
  <a href="#impact">Impact & Track Record</a>
  <a href="#mandate">Mandate & Kontext</a>
</nav>
```

---

## 6. STRUCTURED DATA (Schema.org JSON-LD)

### Homepage: Aktuelles Person-Schema
✅ **Vorhanden** mit @graph-Struktur  
⚠️ **Verbesserungen erforderlich:**

#### A. JobTitle-Spezifität
**Aktuell:**
```json
"jobTitle": "Geschäftsführer, Autor, Berater & Beirat"
```

**Empfohlen (präziser):**
```json
"jobTitle": "Geschäftsführer & Chief Digital Officer",
"hasOccupation": [
  {
    "@type": "Occupation",
    "name": "Geschäftsführer & CDO",
    "occupationLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Burgebrach",
        "addressCountry": "DE"
      }
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Thomann",
      "url": "https://www.thomann.de/"
    }
  },
  {
    "@type": "Occupation",
    "name": "Autor",
    "occupationLocation": {
      "@type": "Place",
      "addressCountry": "DE"
    }
  },
  {
    "@type": "Occupation",
    "name": "Beirat & Advisor"
  }
]
```

#### B. Vollständiges Homepage-Schema (Copy-Paste-Ready)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://christianmaass.com/#person",
      "name": "Christian Maaß",
      "alternateName": "Dr. Christian Maaß",
      "honorificPrefix": "Dr.",
      "url": "https://christianmaass.com/",
      "image": "https://christianmaass.com/christian-maass.png",
      "sameAs": [
        "https://www.linkedin.com/in/christianmaass/",
        "https://www.amazon.de/stores/author/B0045949JA",
        "https://www.instagram.com/christianmaass/",
        "https://x.com/ChristianMaass"
      ],
      "jobTitle": "Geschäftsführer & Chief Digital Officer",
      "worksFor": {
        "@type": "Organization",
        "name": "Thomann",
        "url": "https://www.thomann.de/",
        "description": "Weltweit größter Online-Musikfachhändler"
      },
      "memberOf": [
        {
          "@type": "Organization",
          "additionalType": "TradeAssociation",
          "name": "BEVH – Bundesverband E-Commerce und Versandhandel Deutschland e.V.",
          "description": "Wirtschaftsverband für E-Commerce und Versandhandel",
          "url": "https://www.bevh.org/",
          "member": { "@id": "https://christianmaass.com/#person" },
          "roleName": "Vorstand",
          "startDate": "2023-11-01"
        }
      ],
      "knowsAbout": [
        "Strategie",
        "E-Commerce",
        "Produktmanagement",
        "Unternehmensberatung",
        "Beiratsmandate",
        "Projektmanagement",
        "Leadership",
        "Marketing",
        "Medienwirtschaft",
        "Handel",
        "Prozessoptimierung",
        "Digitale Transformation",
        "Change Management",
        "Executive Presence"
      ],
      "description": "Geschäftsführer & CDO bei Thomann. Autor, Beirat und Vorstand BEVH. 20+ Jahre Erfahrung im Digital Business, Strategieentwicklung und E-Commerce.",
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "University of Oxford",
          "url": "https://www.ox.ac.uk/"
        },
        {
          "@type": "EducationalOrganization",
          "name": "INSEAD",
          "url": "https://www.insead.edu/"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Universität Paderborn",
          "url": "https://www.uni-paderborn.de/"
        }
      ],
      "award": [],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://christianmaass.com/"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://christianmaass.com/#organization",
      "name": "Christian Maaß",
      "url": "https://christianmaass.com/",
      "logo": "https://christianmaass.com/logo-maass.png",
      "sameAs": [
        "https://www.linkedin.com/company/christian-maass/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+49-1735143253",
        "contactType": "CustomerService",
        "email": "christian@christianmaass.com"
      }
    }
  ]
}
```

### Bücher-Seite: Book-Schema
✅ **Bereits vorhanden und gut strukturiert**  
✅ Alle 4 Bücher haben vollständige Book-Schemas mit ISBN, Publisher, DatePublished

**Keine Änderungen erforderlich** ✅

### Fachartikel-Seite: Fehlendes Schema
**Empfehlung:** CollectionPage-Schema hinzufügen:

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Fachartikel von Christian Maaß",
  "description": "Fachartikel, Pressebeiträge und wissenschaftliche Publikationen",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Article",
        "headline": "Warum das Spiel mit den Margen endlich ist",
        "datePublished": "2024",
        "author": {
          "@type": "Person",
          "@id": "https://christianmaass.com/#person"
        },
        "publisher": {
          "@type": "Organization",
          "name": "eTailment"
        }
      }
      // Weitere Artikel...
    ]
  }
}
```

---

## 7. PERFORMANCE & CORE WEB VITALS

### Identifizierte Probleme

#### A. Bildoptimierung
**Status:** ❌ Keine Optimierung
- Alle Bilder sind PNG/JPG ohne WebP-Varianten
- Keine `loading="lazy"` Attribute
- Keine `width`/`height` Attribute (CLS-Risiko)
- Keine Bildkompression sichtbar

**Empfohlene Fixes:**
1. **WebP-Konvertierung** für alle Bilder
2. **Lazy Loading** für Below-the-Fold-Bilder:
   ```html
   <img src="..." alt="..." loading="lazy" width="500" height="300" />
   ```
3. **Hero-Bild:** `fetchpriority="high"` (bereits in Welcome.astro vorhanden, aber nicht auf Homepage-Hero)
4. **Responsive Images:** `srcset` für verschiedene Bildschirmgrößen

**Erwarteter Impact:**
- LCP: **-0.5 bis -1.0s** (bei optimierten Hero-Bildern)
- CLS: **-0.05 bis -0.1** (durch width/height)

#### B. Font-Loading
**Status:** ⚠️ Teilweise optimiert
- `preconnect` vorhanden ✅
- `font-display: swap` **FEHLT** ❌

**Fix:**
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">
```

**Erwarteter Impact:**
- FCP: **-0.2 bis -0.4s**
- CLS: **-0.02** (weniger Layout-Shift)

#### C. CSS/JS
**Status:** ✅ Astro minifiziert automatisch  
⚠️ **Verbesserung:** CSS könnte kritische Styles inline haben (Above-the-Fold)

#### D. Caching & Compression
**Status:** ❓ Nicht analysierbar (Server-Konfiguration)  
**Empfehlung:** 
- Browser-Caching: `Cache-Control: max-age=31536000` für statische Assets
- Gzip/Brotli-Kompression aktivieren

### Performance-Checklist (Priorisiert)

1. **KRITISCH:** WebP-Konvertierung + Lazy Loading
2. **HOCH:** Font-Loading mit `display=swap`
3. **MITTEL:** Width/Height-Attribute für alle Bilder
4. **MITTEL:** Preload für Hero-Bild
5. **NIEDRIG:** Responsive Images (srcset)

---

## 8. CONTENT-STRATEGIE (Zwei-Schichten-Architektur)

### Layer 1: Homepage (Executive Briefing)
✅ **Bleibt wie geplant:** Kurz, faktisch, nicht erklärend  
⚠️ **Minimale SEO-Verbesserungen:**
- H1 auf "Dr. Christian Maaß" ändern (statt temporärer Promotion)
- H2-Struktur für Rollen/Kontext (optional, sehr kurz)

### Layer 2: SEO-Content auf Sekundärseiten

#### A. Bestehende Seiten optimieren

**`/fachartikel`** – Erweitern zu Knowledge Hub:
- Vollständige Links zu allen Artikeln
- Kategorisierung (E-Commerce, Strategie, Digitalisierung)
- Kurze Abstracts pro Artikel
- Schema.org Article-Markup

**`/executive-presence`** – Von Placeholder zu vollständiger Buchseite:
- Buchbeschreibung (aus Schema übernehmen)
- Leseprobe-Link
- Rezensionen/Testimonials (falls vorhanden)
- Related Content (Link zu `/buecher`)

#### B. Neue Content-Cluster vorschlagen

**Cluster 1: Digitale Strategie & Governance**
- `/perspektiven/digitale-strategie` – "Wie Unternehmen digitale Strategien entwickeln und umsetzen"
- `/perspektiven/governance` – "Governance-Strukturen für digitale Transformation"
- **Ziel:** Long-Tail-Keywords wie "digitale Strategie entwickeln", "Governance digitale Transformation"

**Cluster 2: E-Commerce & Skalierung**
- `/perspektiven/e-commerce-skalierung` – "E-Commerce-Geschäfte skalieren: Strategien und Fallstricke"
- `/perspektiven/margen-management` – "Margen-Management im E-Commerce" (basierend auf eTailment-Artikel)
- **Ziel:** "E-Commerce skalieren", "Online-Handel Margen"

**Cluster 3: Executive Decision-Making**
- `/perspektiven/executive-decision-making` – "Entscheidungsfindung auf C-Level: Methoden und Fallstricke"
- `/perspektiven/ai-value-creation` – "KI in der Wertschöpfung: Strategische Perspektiven"
- **Ziel:** "Executive Entscheidungen", "KI Wertschöpfung"

**Cluster 4: Beirat & Advisory**
- `/perspektiven/beirat-mandate` – "Beiratsmandate erfolgreich gestalten"
- `/perspektiven/advisory-best-practices` – "Advisory-Arbeit: Best Practices aus der Praxis"
- **Ziel:** "Beirat werden", "Advisory Mandate"

#### C. Interne Verlinkungs-Strategie

**Homepage → Sekundärseiten:**
- Kontextuelle Links in Content-Boxen (bereits vorhanden ✅)
- Footer-Links (bereits vorhanden ✅)

**Sekundärseiten → Homepage:**
- Breadcrumbs (optional, aber empfohlen):
  ```html
  <nav aria-label="Breadcrumb">
    <a href="/">Home</a> / <span>Fachartikel</span>
  </nav>
  ```

**Sekundärseiten untereinander:**
- Related Content am Ende jeder Seite
- Beispiel auf `/buecher`: "Weitere Perspektiven: [Link zu `/perspektiven/executive-decision-making`]"

---

## 9. ARCHITEKTUR-VORSCHLAG

### Navigation-Struktur (Erweitert)

**Hauptnavigation (Header):**
- Home
- Christian Maaß
- Bücher
- Perspektiven (NEU – ersetzt "Fachartikel" oder als zusätzlicher Menüpunkt)
- Lehre
- Beiratstätigkeit
- Kontakt

**Footer-Navigation:**
- Wie bisher ✅

### URL-Struktur (Empfohlen)

```
/
/christian-maass
/buecher
/executive-presence
/fachartikel (bleibt für bestehende Links)
/perspektiven (NEU – Knowledge Hub)
  /perspektiven/digitale-strategie
  /perspektiven/e-commerce-skalierung
  /perspektiven/executive-decision-making
  /perspektiven/beirat-mandate
/lehre
/beirat
/kontakt
/impressum
/datenschutz
/barrierefreiheit
```

### Interne Verlinkungs-Matrix

| Von | Zu | Link-Text | Kontext |
|-----|----|-----------|---------|
| Homepage | `/christian-maass` | "Christian Maaß" | Header-Nav |
| Homepage | `/buecher` | "Zu meinen Büchern" | Content-Box |
| Homepage | `/beirat` | "Beiratstätigkeiten" | Content-Box |
| Homepage | `/lehre` | "Lehre und Vorträge" | Content-Box |
| `/christian-maass` | `/buecher` | "Bücher" | Inhalt |
| `/christian-maass` | `/fachartikel` | "Fachartikel" | Inhalt |
| `/christian-maass` | `/beirat` | "Beirat" | Inhalt |
| `/buecher` | `/executive-presence` | "Executive Presence" | Buch-Card |
| `/fachartikel` | `/perspektiven/*` | "Weitere Perspektiven" | Related Content |
| `/beirat` | `/perspektiven/beirat-mandate` | "Beiratsmandate erfolgreich gestalten" | Related Content |

---

## 10. ZUSAMMENFASSUNG: ACTION ITEMS

### Sofort umsetzen (Kritisch)
1. ✅ Homepage H1 ändern: "Ab dem 14. August..." → "Dr. Christian Maaß"
2. ✅ Homepage Title optimieren: "Dr. Christian Maaß | Geschäftsführer & CDO Thomann"
3. ✅ Homepage Meta Description erweitern (124 Zeichen)
4. ✅ Font-Loading: `display=swap` hinzufügen
5. ✅ Structured Data: `jobTitle` präzisieren (CDO bei Thomann)

### Kurzfristig (1-2 Wochen)
6. ✅ Bildoptimierung: WebP-Konvertierung + Lazy Loading
7. ✅ Width/Height-Attribute für alle Bilder
8. ✅ `/executive-presence` Content vervollständigen
9. ✅ Meta Descriptions für `/datenschutz` und `/barrierefreiheit` verbessern
10. ✅ `/fachartikel` vollständige Links hinzufügen

### Mittelfristig (1-3 Monate)
11. ✅ Content-Cluster `/perspektiven` aufbauen (4 Artikel)
12. ✅ Breadcrumbs implementieren
13. ✅ Related Content auf Sekundärseiten
14. ✅ Article-Schema für `/fachartikel`
15. ✅ Performance-Monitoring einrichten (Google PageSpeed Insights)

---

## 11. ANHANG: CODE-SNIPPETS (Copy-Paste-Ready)

### Homepage: Optimierter Title & Description
```astro
const title = "Dr. Christian Maaß | Geschäftsführer & CDO Thomann";
const description = "Geschäftsführer & CDO bei Thomann. Autor, Beirat und Vorstand BEVH. 20+ Jahre Digital Business, Strategie und E-Commerce.";
```

### BaseLayout: Font-Loading Fix
```astro
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">
```

### Bild-Optimierung Template
```html
<img 
  src="/hero-maass.webp" 
  srcset="/hero-maass.webp 1x, /hero-maass-2x.webp 2x"
  alt="Dr. Christian Maaß" 
  width="500" 
  height="600"
  loading="eager"
  fetchpriority="high"
/>
```

### Lazy Loading für Below-the-Fold
```html
<img 
  src="/meine-buecher-maass.webp" 
  alt="Bücher von Christian Maaß" 
  width="400" 
  height="300"
  loading="lazy"
/>
```

---

**Ende der Analyse**

