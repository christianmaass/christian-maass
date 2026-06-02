# Roadmap: Sticky Share-Menü + Essays/Interviews-Seite

> Status: **Umsetzung abgeschlossen — Bildmaterial steht noch aus**
> Erstellt: 2026-06-02
> Letzte Aktualisierung: 2026-06-02

## Context

Zwei Verbesserungen am bestehenden Dark-Editorial-Auftritt:

1. **Blog-Detailseite** (`/blog/[slug]`) — Das Teilen-Menü in der rechten Sidebar bleibt beim Scrollen nicht sichtbar, obwohl es als `position: sticky` ausgezeichnet ist. Beim Lesen langer Artikel rutscht es aus dem Viewport.
2. **Essays-Seite** (`/fachartikel`) — Inhaltliche Neuausrichtung. Die heutige Säulen-Logik („KI im Operating", „Vergessene Grundlagen", „Board-Perspektive") wird aufgegeben. Stattdessen wird die Seite als **Sammlung journalistischer Veröffentlichungen** (Essays und Interviews) in der Fachpresse positioniert, im Render-Pattern der Blog-Beiträge (Titel + Text + Bild), mit externem „Zum Artikel"-Link statt eigener Detailseite, plus rechtes Sidebar-Modul „Presseanfragen" als Einstiegspunkt für Medien- und Speaker-Anfragen.

Beide Veränderungen sind reuse-orientiert: bestehende Komponenten-Patterns (`ArticleRow`, Sidebar-Grid aus `blog/[slug].astro`), Design-Tokens und i18n-Struktur. Keine neuen Farb-/Spacing-Tokens, kein CMS, keine Detailseiten für Essays.

## Designentscheidungen

| Aspekt | Festlegung |
|---|---|
| URL der Essays-Seite | bleibt `/fachartikel` (keine Redirects) |
| Nav-Label | bleibt `Essays` (Header + Footer) |
| Heading auf der Seite | `Essays & Interviews.` |
| EN-Version | parallel pflegen, englisches Intro und Sidebar, deutsche Artikel-Titel und -Links bleiben |
| Bildquelle | Nutzer liefert Bilder; abgelegt unter `public/essays/{slug}.jpg` |
| Typ-Label pro Eintrag | `Essay` oder `Interview`, sichtbar in Meta-Zeile (`{type} · {year} · eTailment`) |
| Presseanfragen-CTA | verlinkt auf `/kontakt` bzw. `/en/kontakt` |
| Detailseite pro Essay | **keine** — externer Link öffnet im neuen Tab (`target="_blank" rel="noopener noreferrer"`) |
| Säulen-Kacheln + Säulen-Sektionen | werden vollständig entfernt (DE + EN), inklusive deprecated Translation-Keys (`pillars`, `pillarLabels`, `articlesTitle`, `articlesIntro`, `strategic`, `operational`, `legal`) |

## Was bewusst NICHT in dieser Runde

- Keine Migration der Essays in eine Content Collection (bleibt als strukturierte Daten in `translations.ts`)
- Keine Detailseiten für Essays
- Keine Tag-/Taxonomie-Logik für Essays jenseits des `Essay`/`Interview`-Labels
- Keine generische Extraktion des Sticky-Sidebar-Patterns in eine eigene Layout-Komponente — bei aktuell zwei Use-Sites lohnt sich die Abstraktion nicht
- Kein zusätzliches Sidebar-Modul auf `/blog/[slug]` (bleibt nur Teilen-Box)

## Wiederverwendete Bestandteile

- `BaseLayout.astro` mit `head`-Slot (für JSON-LD)
- Container-Anker-Pattern (`max-width: var(--container-max-width)`, padding inside, `box-sizing: border-box`)
- `ArticleRow.astro` als Vorlage für `EssayRow.astro`
- Sticky-Grid-Pattern aus `blog/[slug].astro` (nach Epic 18 fix-bereit)
- Design-Tokens in `public/styles.css`
- i18n-Translations (`src/i18n/translations.ts`) — Erweiterung um `pressInquiries`-Block und neue `articles`-Shape

## Epic-Übersicht

| # | Epic | Status | Aufwand | Beschreibung |
|---|---|---|---|---|
| 18 | [Sticky Share-Sidebar Fix](#epic-18) | ✅ Done | XS | Sticky-Verhalten der Teilen-Box auf `/blog/[slug]` reparieren |
| 19 | [Essays & Interviews — Inhaltliche Umstellung](#epic-19) | ✅ Done · Bilder ausstehend | M | Heading, Intro, Listenpattern, Typ-Label, Bild, Schema, EN-Parität, JSON-LD |
| 20 | [Presseanfragen-Sidebar auf der Essays-Seite](#epic-20) | ✅ Done | S | 2-Spalten-Grid auf `/fachartikel`, Sticky-Box „Presseanfragen" rechts |

## Reihenfolge & Abhängigkeiten

```
18 Sticky-Fix ────┐
                   ├──▶ 20 Presseanfragen-Sidebar
19 Essays Restructure ─┘
```

- **18** zuerst — isolierter Fix; entkoppelt Risiko vom Rest.
- **19** unabhängig von 18, kann parallel begonnen werden; liefert die volle Breite der neuen Essays-Seite.
- **20** baut sowohl auf der in 18 belastbaren Sticky-Mechanik als auch auf der in 19 entstandenen Seitenstruktur auf.

Jedes Epic = ein Refinement-Termin + eigener Branch/PR. Kein Big-Bang-Merge.

---

## Epic 18 — Sticky Share-Sidebar Fix {#epic-18}

**Ziel:** Das Teilen-Menü auf `/blog/[slug]` bleibt beim Scrollen dauerhaft sichtbar.

**Root cause:** In `src/pages/blog/[slug].astro` setzt `.article-page-grid` `align-items: start`. Damit schrumpft die Sidebar-Grid-Zelle auf die Höhe ihres Inhalts. Sticky braucht aber Höhe im Containing-Block — ohne sie kein Scroll-Range, kein Pinning.

**Änderung (einzige Datei):**
- `src/pages/blog/[slug].astro` — `align-items: start;` aus `.article-page-grid` entfernen. Default `stretch` lässt die Sidebar-Zelle die volle Reihenhöhe einnehmen.
- Mobile-Regel (`@media max-width: 900px`) bleibt unverändert (`position: static`).
- Vor PR-Merge: `grep -rn "overflow:" src/layouts/ public/styles.css` → keine `hidden|clip|auto`-Ancestors.

**Verifikation:**
- `npm run dev`, `/blog/<beliebiger-slug>` öffnen, langsam scrollen → Teilen-Menü bleibt mit `--space-5` Abstand zur Oberkante stehen, bis das Artikel-Ende erreicht ist.
- Viewport auf 800 px verkleinern → Sidebar stackt unter Content, kein Sticky-Verhalten.
- `npm run build && npm run preview` → identisches Verhalten im Production-Build.

---

## Epic 19 — Essays & Interviews — Inhaltliche & strukturelle Umstellung {#epic-19}

**Ziel:** `/fachartikel` zeigt H1 „Essays & Interviews.", neuen Intro-Text, eine flache Liste von sechs Einträgen im Blog-Row-Pattern (Titel + Summary + Meta + 16:9-Thumbnail rechts) mit externem „Zum Artikel"-Link. Säulen-Kacheln und Säulen-Sektionen entfallen.

**Neue/geänderte Dateien:**
- `src/components/article/EssayRow.astro` *(neu)* — Kopie des `ArticleRow.astro`-Patterns, ohne Date-Formatter, mit externem Link.
- `src/i18n/translations.ts` — Interface (`Translations.pages.fachartikel`) + DE-Daten + EN-Daten überarbeiten.
- `src/pages/fachartikel.astro` — Seitenrumpf neu rendern, JSON-LD anpassen.
- `src/pages/en/fachartikel.astro` — analog mit englischem Intro, deutsche Artikel-Titel bleiben.

**Translation-Schema (neu, ersetzt die alten Felder):**
```ts
fachartikel: {
  title: string;
  description: string;
  h1: string;
  intro: string;
  articles: Array<{
    title: string;
    type: 'Essay' | 'Interview';
    year: string;
    description: string;        // wirkt als Summary in EssayRow
    cta: string;                // "Zum Artikel"
    url: string;
    image: { src: string; alt: string };
  }>;
}
```

**Zu löschende Translation-Keys** (DE + EN): `pillars`, `pillarLabels`, `articlesTitle`, `articlesIntro`, `strategic`, `operational`, `legal`. Aus den `articles`-Einträgen entfallen `pillar` und `meta`; ergänzt werden `type` und `image`.

**Copy DE:**
- H1: `Essays & Interviews.`
- Intro: `Journalistische Veröffentlichungen in der Fachpresse — Essays und Interviews zu Handel, KI im Operating und digitaler Verantwortung. Erschienen im Expertenrat von eTailment. Persönliche Beobachtungen aus der operativen Praxis, nicht aus der Beraterperspektive.`

**Copy EN:**
- H1: `Essays & Interviews.`
- Intro: `Journalistic publications in the trade press — essays and interviews on retail, AI in operations, and digital accountability. Published in the eTailment expert council. Personal observations from operational practice, not consulting decks.`

**Typ-Zuordnung der 6 bestehenden Artikel:** Vor Umsetzung Rückfrage an Nutzer, welche Einträge `Interview` und welche `Essay` sind. Default ohne Antwort: alle `Essay`.

**Bild-Pfade als Platzhalter in translations.ts:** `image: { src: '/essays/<slug>.jpg', alt: '<title>' }`. Nutzer liefert die Bilder separat unter `public/essays/`.

**JSON-LD-Anpassung:** `articleSection: pillarSectionMap[...]` entfällt, stattdessen `genre: article.type`. `WebPage.name`/`.description` und `ItemList.name`/`.description` auf neue Texte aktualisieren.

**Verifikation:**
- `grep -rn "pillarLabels\|articlesTitle\|articlesIntro\|pillarSectionMap" src/` → 0 Treffer.
- `npm run build` läuft fehlerfrei (TS-Errors aus gelöschten Keys fangen Konsumenten ab).
- Visual auf `/fachartikel`: 6 Zeilen, Bild rechts, Titel/Bild öffnen eTailment im neuen Tab; Meta-Zeile z. B. `Essay · 2024 · eTailment`.
- A11y: Thumb-Link hat `aria-label`.
- JSON-LD via Google Rich Results Test prüfen.
- EN-Pendant unter `/en/fachartikel` zeigt englische Intro/Sidebar-Texte, deutsche Artikel-Titel und deutsche eTailment-Links.

---

## Epic 20 — Presseanfragen-Sidebar auf der Essays-Seite {#epic-20}

**Ziel:** `/fachartikel` erhält das gleiche 2/3 + 1/3-Layout wie `/blog/[slug]`. Rechts ein Sticky-Modul „Presseanfragen" als Einstiegspunkt für Medien- und Speaker-Anfragen.

**Abhängigkeit:** Epic 18 vorher gemerged, damit das Sticky-Pattern belastbar ist.

**Neue/geänderte Dateien:**
- `src/components/article/PressInquiriesBox.astro` *(neu)* — wiederverwendbares, props-basiertes Sidebar-Modul.
- `src/pages/fachartikel.astro` — Body in 2-Spalten-Grid wrappen, Box im rechten Slot.
- `src/pages/en/fachartikel.astro` — analog.
- `src/i18n/translations.ts` — Block `pages.fachartikel.pressInquiries` ergänzen (DE + EN + Interface).

**Translation-Erweiterung:**
```ts
pressInquiries: {
  eyebrow: string;  // DE: 'PRESSEANFRAGEN', EN: 'PRESS INQUIRIES'
  heading: string;  // DE: 'Interview & Speaker', EN: 'Interview & Speaker'
  body: string;
  cta: string;      // DE: 'Anfrage senden', EN: 'Send inquiry'
  ctaHref: string;  // '/kontakt' bzw. '/en/kontakt'
}
```

**Copy DE:**
- Body: `Für Interview-, Speaker- oder Medienanfragen erreichen Sie mich am besten direkt per E-Mail. Ich antworte persönlich — ohne Agentur, ohne Formular.`
- CTA: `Anfrage senden →` → `/kontakt`

**Copy EN:**
- Body: `For interview, speaker, or media inquiries please reach out directly by email. I respond personally — no agency, no form.`
- CTA: `Send inquiry →` → `/en/kontakt`

**Styling:** Card im Stil der bestehenden Elevated-Boxen — `background: var(--color-bg-elevated)`, `padding: var(--space-5)`, `border-radius: var(--radius-sm)`. Eyebrow wie `.share-heading` (uppercase, letter-spacing 0.18em, `--color-text-muted`). CTA wie `.text-cta` (unterstrichen, hover `--color-text-muted`).

**Page-Layout in `fachartikel.astro`:** 2-Spalten-Grid analog zu `blog/[slug].astro`, ohne `align-items: start` (Lehre aus Epic 18). Mobile ≤ 900 px: einspaltig, Sidebar stackt unten, kein Sticky.

**Verifikation:**
- Desktop ≥ 1024 px: Box bleibt beim Scrollen im View, `--space-5` zur Oberkante.
- Mobile ≤ 900 px: Box stackt unter Essay-Liste, volle Breite, kein Sticky.
- CTA-Klick auf `/fachartikel` öffnet `/kontakt`; auf `/en/fachartikel` öffnet `/en/kontakt`.
- Regression: `/blog/[slug]` weiterhin sticky.
- `npm run build` ohne Warnungen.
- Lighthouse A11y ≥ 95 auf `/fachartikel`.
