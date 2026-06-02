# Roadmap: Blog — Neueste Beiträge, Detailseiten, Übersicht

> Status: **Planung abgeschlossen, Refinement pro Epic vor Umsetzung**
> Erstellt: 2026-06-02

## Context

Die Site bekommt eine eigenständige Blog-Funktion: eine Sektion „Neueste Beiträge" auf der Startseite, eine paginierte Übersichtsseite und Detailseiten pro Artikel — alle als statische, im Repo gepflegte Markdown-Files (kein CMS, kein externer Service). Die Bildsprache übernimmt die Dark-Editorial-Typographie und das Container-Anker-System der bestehenden Site (Header/Footer-Anker, Satoshi für Headlines, Montserrat für Body, Akzentfarbe `#315a78`).

Ziel: dauerhaft pflegbare, schnelle, SEO-saubere Artikel-Plattform, die sich nahtlos in die bestehende Site einfügt und mit einem normalen Git-Workflow betrieben wird.

Bezug zur referenzierten Screenshot-Struktur (Kassenzone-ähnlich): nur das **Strukturmuster** (Titel + Summary + Meta links, Thumbnail rechts; Heading + 5 Einträge + „alle Artikel lesen") wird übernommen. **Typographie, Farben, Maße und Akzente** kommen vollständig aus dem bestehenden Dark-Editorial-System.

## Designentscheidungen

| Aspekt | Festlegung |
|---|---|
| Sprachscope | Blog **DE-only** (bestätigt, `deOnlyPages` in `src/i18n/utils.ts` enthält bereits `blog`) |
| Content-Backend | **Astro Content Collections** (Astro 5.16, `src/content/`, Markdown + Frontmatter) |
| URL-Struktur | `/blog/` (Overview, Seite 1) · `/blog/2/`, `/blog/3/` (Pagination) · `/blog/[slug]/` (Detail) |
| Artikel pro Übersichtsseite | 10 |
| Anzahl auf Startseite | 5 |
| Detail-Layout | 2 ⁄ 3 Content + 1 ⁄ 3 Sidebar; Container fluchtend mit Header (1200 px Anker bei x = 144 px @ 1440 vp) |
| Sidebar-Module | „Teilen": LinkedIn · Facebook · Mail · WhatsApp. Weitere Module später möglich (Slot-Architektur) |
| Author-Box | Unter Artikel-Body. Links Bio, rechts Foto. Vorerst einzelner Autor (Christian Maaß) |
| Datumsformat | DE: `21. Mai 2026` |
| Bildhandling | Bewusst **kein** `astro:assets` jetzt — Thumbnails als statische Dateien in `public/blog/` referenziert per Frontmatter-Pfad. (Optimierung in eigenem Folge-Epic, falls Lighthouse es verlangt) |
| Markdown | Astro-Default (GFM); keine zusätzlichen remark/rehype-Plugins vorerst |

## Was bewusst NICHT in der ersten Version

- Kein CMS, keine Admin-UI
- Keine Kommentar-Funktion
- Keine Tags/Taxonomie (nur eine optionale Kategorie pro Artikel)
- Keine Volltextsuche
- Kein Mehr-Autoren-System (Schema sieht es vor, UI nicht)
- Kein Newsletter-Signup im Sidebar (Slot bleibt frei für später)
- Kein Dark/Light-Toggle pro Artikel
- Keine Related-Articles-Logik
- Keine geplante EN-Variante der Artikel

Diese Punkte sind explizit **out of scope** und gehören in eigene spätere Roadmaps.

## Wiederverwendete Bestandteile

- **`BaseLayout.astro`** mit Slot `head` (für Article-JSON-LD)
- **Header-, Footer-, Breadcrumb-Komponenten** unverändert
- **Container-Anker-Pattern** (`max-width: var(--container-max-width)`, padding inside, `box-sizing: border-box`) — gleiche Konvention wie `.header-container` / `.footer-container` / `.hero-grid`
- **i18n-Translations** (`src/i18n/translations.ts`) — Erweiterung um Blog-Keys (Section-Titel, Datum-Strings, Share-Labels, Autorenbox-Text)
- **Design-Tokens** in `public/styles.css` — kein neues Farb-/Spacing-Token nötig
- **Astro Sitemap** (`astro.config.mjs`) — `serialize()` erweitern für `/blog/*` priorities
- **JSON-LD-Pattern** wie auf `fachartikel.astro` (ItemList + Article schema)

## Architektur-Skizze

```
src/
  content/
    config.ts                     # Collection-Schema (zod)
    articles/
      2026-05-21-mozart-bett.md
      2026-05-15-omr-china-ki.md
      ...
  components/
    article/
      LatestArticles.astro        # Homepage-Sektion (5 Items)
      ArticleRow.astro            # Title + Summary + Meta + Thumbnail (used 2x)
      ArticleHeader.astro         # Detail-Page: Titel + Byline + Lead + Hero-Image
      Prose.astro                 # Wrapper mit editorialen Markdown-Styles
      ShareSidebar.astro          # Sidebar-Modul Teilen
      AuthorBox.astro             # Footer-Section unter Artikel-Body
      Pagination.astro            # Übersicht: vorige/nächste + Seitenzahlen
  pages/
    blog/
      index.astro                 # ersetzt aktuelles src/pages/blog.astro
      [...page].astro             # Pagination (Astro paginate())
      [slug].astro                # Detail-Page
  utils/
    formatDate.ts                 # DE-Datumsformatierung
public/
  blog/
    {slug}/
      cover.jpg                   # Featured-Image pro Artikel
      ...
```

Aktuelles `src/pages/blog.astro` wird gelöscht und durch `src/pages/blog/index.astro` ersetzt.

## Epic-Übersicht

| # | Epic | Status | Aufwand | Beschreibung |
|---|---|---|---|---|
| 10 | [Foundation — Content Collection](#epic-10) | ✅ Done | S | Schema, Verzeichnis, 2–3 Stub-Artikel, Date-Formatter |
| 11 | [Homepage-Sektion „Neueste Beiträge"](#epic-11) | ⏳ Pending | M | Komponente unter Hero, 5 Artikel, „alle Artikel lesen" |
| 12 | [Article-Detail-Page Layout & Prose](#epic-12) | ⏳ Pending | M | Route `/blog/[slug]`, 2 ⁄ 3 + 1 ⁄ 3 Grid, Artikel-Header, Markdown-Prose |
| 13 | [Share-Sidebar](#epic-13) | ⏳ Pending | S | LinkedIn/Facebook/Mail/WhatsApp im Sidebar-Slot |
| 14 | [Autoren-Box](#epic-14) | ⏳ Pending | S | Bio + Foto unter Artikel-Body |
| 15 | [Übersichtsseite & Pagination](#epic-15) | ⏳ Pending | M | `/blog/`, `/blog/2/` etc., 10 pro Seite |
| 16 | [SEO, RSS, JSON-LD](#epic-16) | ⏳ Pending | S | Article-Schema, OG, RSS, Sitemap-Priorität |
| 17 | [QA & Release](#epic-17) | ⏳ Pending | S–M | A11y, Lighthouse, Cross-Browser, Empty-State |

## Reihenfolge & Abhängigkeiten

```
10 Foundation
   │
   ├──▶ 11 Homepage-Sektion ─┐
   │                          │
   ├──▶ 12 Detail-Layout ─────┼──▶ 13 Share ─┐
   │                          │              │
   │                          ├──▶ 14 Autorenbox ─┐
   │                          │                    │
   └──▶ 15 Overview + Page ───┘                    │
                                                    │
                                                    ▼
                                            16 SEO/RSS ─▶ 17 QA
```

Jedes Epic = ein Refinement-Termin + eigener Branch/PR.

---

<a id="epic-10"></a>
## Epic 10 — Foundation: Content Collection für Artikel

> **Aufwand:** S (0,5 Tag) · **Abhängigkeiten:** keine · **Blockiert:** alle folgenden Blog-Epics

### Ziel

Astro Content Collection `articles` etablieren. Schema-validiert, typsicher, mit ein paar realen Stub-Artikeln, damit die folgenden Epics gegen echte Daten arbeiten.

### Scope

- `src/content/config.ts` mit `defineCollection`-Schema (zod):
  - `title: string`
  - `summary: string` (3–4 Zeilen, max ~280 Zeichen)
  - `date: Date`
  - `author: string` (Default `"Christian Maaß"`)
  - `category?: string` (optional, frei wählbar)
  - `image: { src: string; alt: string }` (Pfad zu `/blog/{slug}/cover.{ext}`)
  - `draft?: boolean` (Default false; Drafts werden im Build ausgeschlossen)
- `src/content/articles/` mit 2–3 Stub-Markdown-Dateien (kann Bestandstexte aus Fachartikeln recyceln)
- `src/utils/formatDate.ts` — Helper für DE-Datum `21. Mai 2026` (Wochentag bei Bedarf später)
- Dateinamen-Konvention dokumentieren: `YYYY-MM-DD-slug.md` (sortbar, deterministisch)
- Slug-Quelle: aus Dateinamen abgeleitet (ohne Datum-Prefix)
- TypeScript-Typen werden via `astro sync` automatisch generiert

### Akzeptanzkriterien

- [ ] `npm run check` läuft sauber gegen Collection-Typen
- [ ] `await getCollection('articles')` liefert die Stub-Artikel zurück
- [ ] Draft-Artikel werden im Production-Build ausgeschlossen
- [ ] `formatDate(new Date('2026-05-21'))` ergibt `"21. Mai 2026"`

### Refinement-Punkte

- Genauer Feldsatz im Frontmatter (z. B. `readingTime` autoberechnen oder manuell?)
- Image als Pfad-String vs. Astro-Image-Reference (entscheidet, ob Epic 10 oder ein Folge-Epic `astro:assets` einführt)
- Kategorie als freier String vs. enum (z. B. `'Essay' | 'Interview' | 'Allgemein'`)

---

<a id="epic-11"></a>
## Epic 11 — Homepage-Sektion „Neueste Beiträge"

> **Aufwand:** M (1 Tag) · **Abhängigkeiten:** 10 · **Blockiert:** —

### Ziel

Sektion „Neueste Beiträge" auf der Startseite (`src/pages/index.astro`) zwischen Hero und Footer. Zeigt die 5 aktuellsten nicht-Draft-Artikel, sortiert absteigend nach Datum. Strukturmuster aus dem Screenshot, Typo/Farben aus Dark-Editorial.

### Scope

- Neue Komponente `src/components/article/LatestArticles.astro`
  - Holt 5 neueste Artikel via `getCollection('articles')` + Sort
  - Container fluchtet mit Header/Hero-Anker (gleiche Anchor-Konvention)
  - Section-Heading „Neueste Beiträge" (Satoshi Medium, Größe analog Hero-Sekundär)
- Sub-Komponente `src/components/article/ArticleRow.astro`
  - Layout: 2-spaltig (Text links, Thumbnail rechts), Aspekt-Verhältnis Thumbnail ~16:9
  - Links: Titel (H3 Satoshi), Summary (Montserrat, 3–4 Zeilen), Meta (`{category} · {date}`)
  - **Klick auf Titel ODER Thumbnail** → `/blog/{slug}/`
  - Wiederverwendbar (auch in Epic 15 verwendet)
- Link „alle Artikel lesen" → `/blog/`
- i18n: neue Keys in `src/i18n/translations.ts` (DE):
  - `pages.index.latestArticles.heading`
  - `pages.index.latestArticles.readAll`
- Eingebunden in `src/pages/index.astro` unter `<section class="hero">…</section>`
- Mobile: einspaltig (Thumbnail über Text), Spacing reduziert

### Akzeptanzkriterien

- [ ] Genau 5 Artikel werden gezeigt, neueste zuerst
- [ ] Titel und Thumbnail navigieren beide zu `/blog/{slug}/`
- [ ] Link „alle Artikel lesen" zielt auf `/blog/`
- [ ] Container-Anker stimmt mit Header (Wordmark) und Footer-Spalten überein
- [ ] Hover-States: Titel-Underline oder dezente Farbänderung, Thumbnail mit subtilem Zoom oder Border
- [ ] Mobile-Layout funktioniert ab 375 px Viewport
- [ ] Astro-Build clean

### Refinement-Punkte

- **Position bestätigen**: Unter dem Hero (Empfehlung) oder darüber? Aktuell geplant: unter Hero
- EN-Homepage: Sektion zeigen oder weglassen? (Artikel sind DE — Variante: heading auf EN, Items behalten DE-Titel + Hinweis; oder Sektion ganz weglassen)
- Visuelle Trenner zwischen den 5 Einträgen (Hairline-Border oder nur Spacing?)
- Empty-State, falls noch keine Artikel da sind

---

<a id="epic-12"></a>
## Epic 12 — Article-Detail-Page Layout & Prose

> **Aufwand:** M (1,5 Tage) · **Abhängigkeiten:** 10 · **Blockiert:** 13, 14

### Ziel

Detail-Route `src/pages/blog/[slug].astro` mit 2-Spalten-Layout (2 ⁄ 3 Content, 1 ⁄ 3 Sidebar), Artikel-Header und editorialer Markdown-Prose. Sidebar-Spalte wird in Epic 13 mit Inhalten gefüllt; Author-Box-Slot in Epic 14.

### Scope

- `src/pages/blog/[slug].astro` mit `getStaticPaths()` über Collection
- `src/components/article/ArticleHeader.astro`:
  - H1 (Satoshi Medium, Hero-Skala leicht kleiner als Homepage-Hero)
  - Byline (klein, muted: `Autor · 21. Mai 2026`)
  - Summary-Lead (3–4 Zeilen, Schriftgröße zwischen Body und Headline)
  - Featured Image (volle 2 ⁄ 3-Breite, ohne Card-Frame, evtl. dezenter Rand)
- Layout-Wrapper: CSS-Grid 2 ⁄ 3 + 1 ⁄ 3 (`grid-template-columns: 2fr 1fr` oder konkret), Container fluchtet mit Header
- `src/components/article/Prose.astro`: Markdown-Wrapper mit editorialen Styles für h2/h3, p, blockquote, code (inline + block), ul/ol, a, hr, img — alle mit Tokens
- Slots / Platzhalter: rechter Sidebar-Bereich (gefüllt durch ShareSidebar in Epic 13), unter Body ein Slot für AuthorBox (Epic 14)
- Mobile (≤ 900 px): einspaltig; Sidebar rutscht unter den Artikel
- SEO basics in dieser Iteration: title, description aus summary, canonical — JSON-LD/OG in Epic 16

### Akzeptanzkriterien

- [ ] Pro Artikel wird statisch eine HTML-Datei generiert
- [ ] Container-Anker stimmt (Brand fluchtet mit Artikel-Titel)
- [ ] H1, Byline, Lead-Text, Image, Body in der spezifizierten Reihenfolge
- [ ] Markdown rendert mit dunklen prose-Styles (gute Lesbarkeit, AA-Kontraste)
- [ ] Sidebar-Spalte sichtbar (kann zunächst leer sein oder „Platzhalter Teilen")
- [ ] Mobile: einspaltig, Sidebar unter Artikel
- [ ] Astro-Build clean, EN-Switch routet auf DE-Variante (= dieselbe Detail-URL)

### Refinement-Punkte

- **Sticky Sidebar** auf Desktop (mitscrollend) ja/nein
- Featured-Image-Behandlung: full-width links über Lead oder als „Aufmacher" ganz oben?
- Code-Highlighting (Shiki/Prism integration) jetzt oder nie?
- Anchor-Links auf H2/H3 (Klick-zum-Kopieren)?
- Reading-Time-Anzeige neben Byline?

---

<a id="epic-13"></a>
## Epic 13 — Share-Sidebar

> **Aufwand:** S (0,5 Tag) · **Abhängigkeiten:** 12 · **Blockiert:** —

### Ziel

Modul „Teilen" in der Sidebar der Detail-Page mit Buttons für LinkedIn, Facebook, Mail, WhatsApp. Klick öffnet die jeweilige Share-URL (LinkedIn/Facebook → neues Tab; Mail → `mailto:`; WhatsApp → `https://wa.me/?text=…`).

### Scope

- `src/components/article/ShareSidebar.astro`:
  - Kleiner Heading „Teilen" (uppercase, letter-spaced, muted)
  - 4 Buttons mit Icon + Label oder nur Icon (Refinement-Frage)
  - Share-URLs pro Plattform aus Artikel-URL + Titel zusammenbauen
- Server-side URL-Generation, damit kein JS nötig (statische Links mit `target="_blank" rel="noopener noreferrer"`)
- A11y: `aria-label` pro Button, Focus-States, Keyboard-erreichbar
- SVG-Icons: in `public/icons/` (linkedin, facebook, mail, whatsapp); SVGs als Inline oder Image-Tag
- Einbau in den Sidebar-Slot von Epic 12

### Akzeptanzkriterien

- [ ] Alle 4 Plattformen verfügbar
- [ ] LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=…`
- [ ] Facebook: `https://www.facebook.com/sharer/sharer.php?u=…`
- [ ] Mail: `mailto:?subject=…&body=…`
- [ ] WhatsApp: `https://wa.me/?text=…` (Titel + URL kombiniert)
- [ ] Keine JS-Abhängigkeit für die Basis-Funktion
- [ ] A11y: jeder Button hat `aria-label`, Tab-Reihenfolge logisch

### Refinement-Punkte

- Icons mit oder ohne Text-Labels? Reine Icons wirken puristischer
- Copy-Link-Button als 5. Option?
- WhatsApp-Share auf Desktop oft störend (kein wa.me-Handler) — ggf. nur auf Mobile zeigen?
- Visuelles Layout: vertikal gestapelt vs. horizontal?

---

<a id="epic-14"></a>
## Epic 14 — Autoren-Box

> **Aufwand:** S (0,5 Tag) · **Abhängigkeiten:** 12 · **Blockiert:** —

### Ziel

Wiederverwendbare Komponente `<AuthorBox />` mit linker Bio-Spalte und rechtem Portrait, eingebunden unter dem Artikel-Body auf jeder Detail-Page.

### Scope

- `src/components/article/AuthorBox.astro`:
  - Layout: 2-spaltig (Bio 2 ⁄ 3, Foto 1 ⁄ 3 — oder andere proportionalere Variante)
  - Container fluchtet mit Article-Body-Spalte (nicht über die ganze 2 ⁄ 3-Breite des Layouts hinaus)
  - Subtile Border-top (`var(--color-border-subtle)`) als Trenner zum Body
  - Bio-Text: 3–5 Sätze, Christian-Maaß-Stand-up: Aufsichtsrat, CDO, Autor, Speaker (Tone-of-Voice editorial)
  - Foto: Portrait, B/W oder farbig, mit dezent abgerundeten Ecken (`--radius-sm`)
- i18n: Bio-Text in `src/i18n/translations.ts` unter `components.authorBox.bio`
- Eingebunden in `src/pages/blog/[slug].astro` unter dem Markdown-Body
- Mobile: einspaltig, Foto über Bio

### Akzeptanzkriterien

- [ ] Komponente erscheint unter jedem Artikel-Body
- [ ] Container-Anker stimmt mit Artikel-Body
- [ ] Bio-Text aus i18n, nicht hardcoded
- [ ] Foto hat sinnvollen Alt-Text
- [ ] Mobile-Layout: einspaltig

### Refinement-Punkte

- Welches der bestehenden Portraits nehmen (`christian-maass.png` ist nahe; ggf. eigenes Editorial-Foto später)
- Link zu `/christian-maass` (Vollprofil) als CTA in der Box?
- Sollte die Box auch auf anderen Seiten reusable sein (About-Page, Beirat-Page)?

---

<a id="epic-15"></a>
## Epic 15 — Übersichtsseite & Pagination

> **Aufwand:** M (1 Tag) · **Abhängigkeiten:** 10 (Bonus: 11 für ArticleRow-Reuse) · **Blockiert:** —

### Ziel

`/blog/`-Übersicht mit allen veröffentlichten Artikeln, sortiert nach Datum, 10 pro Seite, mit Pagination unter der Liste. Aktuelles `src/pages/blog.astro` wird zu `src/pages/blog/index.astro` umgezogen und neu aufgebaut.

### Scope

- `src/pages/blog/[...page].astro` mit Astro `paginate()`-Helper
- Liste rendert wieder mit `ArticleRow.astro` aus Epic 11
- Pagination-Komponente `src/components/article/Pagination.astro`:
  - „Vorherige Seite" · „Seite 2 von 4" · „Nächste Seite"
  - Aktuelle Seite hervorgehoben, deaktivierte Pfeile bei Rand
- Seitentitel oben: „Beiträge" (oder „Alle Beiträge")
- Bei 11+ Artikeln automatisch weitere Seiten unter `/blog/2/`, `/blog/3/`, …
- Slug-Schutz: Slug darf nicht numerisch sein (sonst Konflikt mit Pagination-URLs) — als Convention dokumentieren oder zur Build-Zeit prüfen
- i18n: `pages.blog.title`, `pages.blog.description`, Pagination-Strings

### Akzeptanzkriterien

- [ ] `/blog/` zeigt 10 neueste Artikel
- [ ] `/blog/2/` zeigt Artikel 11–20 (sofern vorhanden)
- [ ] Auf der letzten Seite ist „Nächste" deaktiviert, auf der ersten „Vorherige"
- [ ] Empty-State: bei 0 Artikeln saubere Meldung statt Crash
- [ ] Container-Anker fluchtet mit Header
- [ ] Astro-Build erzeugt korrekte Anzahl Pages für N Artikel
- [ ] Astro-Build clean

### Refinement-Punkte

- Reihen-Trennung optisch (Hairline-Borders oder nur Spacing)
- Filter nach Kategorie auf Übersichtsseite — jetzt oder später?
- Sort-Optionen (neueste zuerst ist Default; älteste oder alphabetisch nötig?)
- URL-Format `/blog/2/` vs. `/blog/page/2/` — Astro-Default ist ersterer

---

<a id="epic-16"></a>
## Epic 16 — SEO, RSS, JSON-LD

> **Aufwand:** S (0,5 Tag) · **Abhängigkeiten:** 12, 15 · **Blockiert:** 17

### Ziel

Blog ist für Suchmaschinen, Social-Sharing-Crawler und RSS-Reader korrekt aufgestellt.

### Scope

- **JSON-LD `Article`** auf jeder Detail-Page (über `<Fragment slot="head">` in BaseLayout):
  - `headline`, `description`, `image`, `datePublished`, `author` (Person)
  - `mainEntityOfPage` mit canonical-URL
- **OpenGraph + Twitter Card** aus Frontmatter:
  - `og:title` = Artikel-Titel
  - `og:description` = Summary
  - `og:image` = Featured Image (absolut)
  - `og:type` = `article`
  - `article:published_time` = `date`
- **JSON-LD `Blog` / `ItemList`** auf `/blog/`-Übersicht (analog zum Pattern in `fachartikel.astro`)
- **RSS-Feed** `/blog/rss.xml` über `@astrojs/rss` (neu installieren)
  - Title, Description, Items: title, summary, link, pubDate
- **Sitemap-Update** in `astro.config.mjs`:
  - `/blog/` → priority 0.85, changefreq weekly
  - `/blog/[slug]/` → priority 0.7, changefreq monthly
  - Pagination-Seiten → priority 0.4, changefreq weekly (oder ausschließen)
- Test der JSON-LD mit Google Rich Results Test (manuell)

### Akzeptanzkriterien

- [ ] Jede Detail-Page hat valides Article-JSON-LD
- [ ] OG-Image, OG-Description aus Frontmatter
- [ ] RSS-Feed liefert die Artikel im erwarteten Schema
- [ ] Sitemap enthält Blog-Routen mit angepassten Prioritäten
- [ ] Google Rich Results Test besteht für Detail-Page

### Refinement-Punkte

- Schema-Variante: `Article` vs. `BlogPosting` (BlogPosting ist spezifischer; eigene Tradeoffs)
- RSS mit Full-Body oder nur Summary?
- Author als `Person`-Subgraph mit social-sameAs-Links?

---

<a id="epic-17"></a>
## Epic 17 — QA & Release

> **Aufwand:** S–M (0,5–1 Tag) · **Abhängigkeiten:** 11–16 · **Blockiert:** Release

### Ziel

Vor Live-Schaltung sicherstellen, dass die Blog-Funktion produktionsreif ist.

### Checkliste

- [ ] **Kontraste**: Body-Prose, Byline, Sidebar-Links, Pagination — alle WCAG AA
- [ ] **Keyboard-Nav**: Tab durch Homepage-Sektion-Items, Pagination-Links, Share-Buttons, AuthorBox-Link
- [ ] **Focus-Visible**: alle interaktiven Elemente sichtbar auf Dark-Bg
- [ ] **`prefers-reduced-motion`**: Hover-Animationen respektieren System-Setting (sollte global bereits greifen)
- [ ] **Lighthouse** auf `/blog/`, `/blog/{slug}/`, Startseite: Perf/A11y/Best-Practices/SEO ≥ 90
- [ ] **Cross-Browser**: Safari, Chrome, Firefox, Edge — sticky Sidebar (falls Epic 12-Refinement das beschließt), Share-Links
- [ ] **Mobile**: 375 px – 768 px Viewport; Touch-Targets ≥ 44 px für Share-Buttons und Pagination
- [ ] **Print-Stylesheet** für Detail-Page (optional, Refinement)
- [ ] **Empty-State**: 0 Artikel, 1 Artikel, genau 10, genau 11 (Pagination kickt) testen
- [ ] **Draft-Artikel** im Production-Build nicht sichtbar
- [ ] **Image-Performance**: Featured-Images haben `width`/`height`/`loading`, Thumbnails `loading="lazy"`
- [ ] **DE/EN-Switch**: führt auf Blog-Pfaden konsistent auf DE-Variante
- [ ] **Build & Deploy**: `npm run build` sauber, dist enthält alle Pages, Sitemap valide

### Refinement-Punkte

- Welcher OG-Image-Fallback, falls Frontmatter kein image hat?
- Festlegung: was bedeutet „released" — wird automatisch deployed (gh-pages) oder manuell?

---

## Offene grundsätzliche Refinement-Punkte (über alle Epics)

- **Position der Homepage-Sektion** (Epic 11): unter Hero (empfohlen) oder darüber?
- **EN-Homepage**: Sektion „Latest Articles" zeigen oder weglassen, wenn Artikel DE-only sind?
- **Sticky Sidebar** auf Detail-Page (Epic 12)?
- **Image-Pipeline** (`astro:assets` jetzt einführen oder erst wenn Lighthouse es verlangt)?
- **Kategorie-Modell**: freier String, enum, oder kein Kategorie-Feld?
- **Reading-Time-Berechnung**: automatisch (Wörter / 200 wpm) oder Frontmatter-Pflicht?

Diese Fragen werden im Refinement des jeweils ersten betroffenen Epics geklärt — sie werden hier nur gesammelt, damit nichts verloren geht.

## Wann ist die Roadmap abgeschlossen?

Wenn Epics 10–17 alle als ✅ Done markiert sind und Epic 17 (QA & Release) keine offenen Findings hat. Danach kann ein neuer Artikel jederzeit per
`git pull && add → markdown-file in src/content/articles/ → commit → push → deploy`
veröffentlicht werden, ohne Code-Änderungen.
