# Editorial-Guide — Blog & Essays

Praktischer Leitfaden für neue Inhalte. Frontmatter wird beim Build via Zod validiert (`src/content/config.ts`) — fehlerhafte Felder lassen den Build scheitern, also lieber jetzt sauber.

## Inhaltsarten

| Sammlung | Wo | URL-Pfad | Typ-Definition |
| --- | --- | --- | --- |
| **articles** (Blog) | `src/content/articles/*.md` | `/blog/<slug>/` | Eigene Texte, längere Beiträge, Notizen |
| **essays** (Fachartikel) | `src/content/essays/*.md` | `/fachartikel/` (Listing) → externer Link | Journalistische Veröffentlichungen, die woanders erscheinen (z.B. eTailment) |

## Dateinamen-Konvention

`YYYY-MM-DD-kurzer-slug.md`. Das Datums-Präfix sortiert Files chronologisch im Editor und wird vom Slug-Generator entfernt. Slug muss mindestens einen nicht-numerischen Anteil haben (sonst kollidiert mit Pagination-Routen wie `/blog/2`).

Beispiele:
- `2026-05-21-ki-im-operating-statt-im-marketing.md` → `/blog/ki-im-operating-statt-im-marketing/`
- `2024-01-01-margen-spiel.md` → in Essay-Listing als externer Link

## Frontmatter — Blog-Beitrag

```yaml
---
title: "Die vergessenen Grundlagen im Digitalgeschäft"
summary: "Während alle über Transformation reden, bleibt der größte Wert in operativen Grundlagen liegen. Wo Substanz Glanz schlägt."
date: 2026-06-15
lastModified: 2026-06-20   # optional, nur falls inhaltlich nachträglich überarbeitet
author: "Christian Maaß"   # optional, Default ist Christian Maaß
category: "Essay"          # Essay | Notiz | Interview | Allgemein
image:
  src: "/og/grundlagen.jpg"   # 1200×630 px, in /public/og/ ablegen
  alt: "Grundlagen im Digitalgeschäft — Skizze auf Whiteboard"
  width: 1200      # optional, Default-Fallback 1200
  height: 630      # optional, Default-Fallback 630
draft: false       # true blendet im Produktions-Build aus
---

# Eigener Markdown-Body folgt hier. H1 vermeiden — das `title`-Feld wird als H1 gerendert.
```

**Pflichtfelder**: `title`, `summary` (1–320 Zeichen — wird zur Meta-Description), `date`, `category`, `image.src`, `image.alt`.

**Verhalten**:
- `lastModified` fließt als `dateModified` ins Article-Schema (sonst `datePublished` als Fallback).
- `wordCount` wird automatisch aus dem Markdown-Body errechnet.
- Speakable-Selektoren (`.article-title`, `.article-lead`) sind im Schema gesetzt — keine Aktion nötig.

## Frontmatter — Essay (externer Link)

```yaml
---
title: "Margen-Spiel: Warum Discounter neu denken müssen"
summary: "Im eTailment-Expertenrat zu den strukturellen Margen-Verschiebungen im deutschen Handel."
date: 2024-01-15
type: "Essay"                                         # Essay | Interview
externalUrl: "https://etailment.de/news/.../margen-spiel"   # Pflicht, wohin verlinkt wird
publisher: "eTailment"                                # Default eTailment, kann überschrieben werden
image:
  src: "/essays/margen-spiel.jpg"
  alt: "Vorschaubild zum Essay »Margen-Spiel«"
draft: false
---

# Body bleibt meist leer — der Klick aus der Listing-Seite geht direkt zur externalUrl.
```

## Bilder

| Verwendung | Empfohlene Maße | Format | Speicherort |
| --- | --- | --- | --- |
| OG-Image Blog/Essay | 1200×630 px | JPG/WebP (`/public/og/`) | `/public/og/<slug>.jpg` |
| Hero im Beitrag | mind. 1200×675 px (16:9) | JPG/WebP | `/public/blog/<slug>/hero.jpg` |
| Brand-Assets (Hero, Portrait, Buchcover) | je nach Platz | wird via `astro:assets` optimiert | `src/assets/` |

**Optimierung**:
- Brand-Assets in `src/assets/` werden automatisch zu WebP konvertiert und mit `srcset` ausgeliefert (über `<Image>`-Komponente).
- OG-Image-URLs und Schema-Image-URLs müssen **stabil** bleiben → diese gehören nach `/public/`, nicht nach `src/assets/`.
- Dateien klein halten: OG-JPG unter 200 KB. Tool-Empfehlung: ImageOptim / squoosh.app.

## Tonalität

- Persönlich, präzise, ohne Buzzwords. Erfahrungssätze statt Theorie-Folien.
- Zielgruppe: Boards, CEOs, CDOs, Digital-Verantwortliche im DACH-Raum.
- Typische Länge:
  - Notiz: 300–600 Wörter, eine konkrete Beobachtung.
  - Essay: 1.000–2.500 Wörter, ein Argument mit Beispielen.
  - Interview: variiert (Q&A-Format).
- Eine Headline mit Verb und Position, nicht generisch ("Über KI" → "Warum KI im Operating stattfindet, nicht im Marketing").

## Draft-Workflow

1. Datei mit `draft: true` in `src/content/articles/` ablegen.
2. `npm run dev` starten → Vorschau unter `http://localhost:4321/blog/<slug>/` (Dev-Server zeigt auch Drafts).
3. Wenn fertig: `draft: false` setzen, committen, mergen.
4. Production-Build (`npm run build`) blendet Drafts automatisch aus.

## SEO-Checklist vor Veröffentlichung

- [ ] `title`: mit Verb oder Position, max. ~65 Zeichen (sonst Cut-off im SERP).
- [ ] `summary`: 120–280 Zeichen, beschreibt den Wert für den Leser, beantwortet "Warum klicken?".
- [ ] `image`: 1200×630 (OG), keine Whitespace-Border, lesbar als Thumbnail.
- [ ] `category`: passt zur Hauptaussage. Bei Unsicherheit → `Allgemein`.
- [ ] Markdown-Body: H2/H3 strukturiert, mind. ein Outbound-Link auf belastbare Quelle, interne Links auf 1–2 ältere relevante Beiträge.
- [ ] Code/Zitate als Markdown-Block (>) — wird semantisch als `<blockquote>` gerendert (gut für AI-Crawler).
- [ ] Letzte Frage: "Würde ich diesen Text einem Vorstand auf den Tisch legen?". Wenn nein → kürzen.

## Hilfreiche Befehle

```bash
npm run dev               # Dev-Server mit Drafts
npm run build             # Produktions-Build (Drafts raus)
npx astro check           # Frontmatter- und Type-Validierung
```

## Wo ist was

- Article-Schema (JSON-LD, BlogPosting, Speakable, ImageObject): `src/pages/blog/[slug].astro` — automatisch aus Frontmatter.
- Essay-Listing & Article-`@graph`: `src/pages/fachartikel/[...page].astro`.
- Author-Person und Publisher-Refs zentral: `src/utils/jsonLd.ts` (E-E-A-T-Konsistenz).
- Sitemap und RSS werden beim Build automatisch erzeugt — neue Beiträge erscheinen ohne weitere Aktion.
