# Epic 04 — Hero Section

> **Status:** ⏳ Pending
> **Aufwand:** M (1–2 Tage)
> **Abhängigkeiten:** Epic 01 (Tokens), Epic 02 (Satoshi), Epic 03 (Header)
> **Blockiert:** keine

## Ziel

Zweispaltige Hero-Section auf der Startseite mit editorialer Headline (genau **ein Akzentwort**), Supporting Text, Credentials-Signature und einem in den schwarzen Hintergrund auslaufenden Schwarz-Weiß-Portrait.

## Layout

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ┌────────────────────────┐    ┌──────────────────┐      │
│  │                        │    │                  │      │
│  │  Strategie, Skalierung,│    │   ╭──────────╮   │      │
│  │  Verantwortung — für   │    │   │          │   │      │
│  │  digitale Wertschöpfung│    │   │ Portrait │   │      │
│  │                        │    │   │  (B/W,   │   │      │
│  │  Lead-Text             │    │   │   faded) │   │      │
│  │  2–4 Zeilen            │    │   │          │   │      │
│  │                        │    │   ╰──────────╯   │      │
│  │  CDO · AUFSICHTSRAT ·  │    │                  │      │
│  │  AUTOR · SPEAKER       │    │                  │      │
│  └────────────────────────┘    └──────────────────┘      │
│         ~65%                          ~35%                │
└──────────────────────────────────────────────────────────┘
```

- Desktop: CSS Grid `grid-template-columns: 1.85fr 1fr` (entspricht 65/35)
- Vertikale Ausrichtung: zentriert (`align-items: center`), leicht erhöht
- Vertikales Padding: `var(--space-7)` oben + unten (96 px+)
- Max-Width: `1280px`, horizontal mittig

## Linke Spalte — Inhalt

### 1. Editorial Headline (H1)

```css
.hero-headline {
  font-family: var(--font-family-display);   /* Satoshi */
  font-size: var(--font-size-hero);          /* clamp(2.75, 6vw, 5.5rem) */
  font-weight: 500;                          /* medium, nicht bold */
  line-height: var(--line-height-hero);      /* 1.05 */
  letter-spacing: var(--letter-spacing-hero); /* -0.02em */
  color: var(--color-text-strong);           /* #f5f5f5 */
  max-width: 18ch;                            /* zwingt 3–4 Zeilen */
}

.hero-accent {
  color: var(--color-accent);                /* #315a78 */
}
```

**Beispieltext (Platzhalter — final mit Nutzer abstimmen):**

```html
<h1 class="hero-headline">
  Strategie, Skalierung,
  <span class="hero-accent">Verantwortung</span>
  — für digitale Wertschöpfung.
</h1>
```

**Regel:** Genau **ein Wort** trägt `.hero-accent`. Kein zweites Akzent-Element auf der Seite.

### 2. Supporting Text

```css
.hero-lead {
  margin-top: var(--space-4);
  font-family: var(--font-family-base);
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--color-text);                  /* #c8c8c8 */
  max-width: 52ch;                           /* komfortable Lesebreite */
}
```

- 2–4 Zeilen Fließtext
- Bietet Kontext, ohne mit der Headline zu konkurrieren

### 3. Credentials Line (Signatur)

```css
.hero-credentials {
  margin-top: var(--space-6);
  font-family: var(--font-family-base);
  font-size: 0.78rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--color-text-muted);            /* #8a8a8a */
}
```

```html
<p class="hero-credentials">CDO · AUFSICHTSRAT · AUTOR · SPEAKER</p>
```

- Trenner: Bullet-Punkt mit Spaces (` · `), kein Pipe, kein Slash
- Wirkt wie eine Signatur, nicht wie ein Marketing-Claim

## Rechte Spalte — Portrait

### Bild

- Pfad: `/christian-maass.png` (bereits im `public/`-Ordner vorhanden)
- Alt-Text: lokalisiert via `t.pages.index.hero.portraitAlt`

### Styling

```css
.hero-portrait {
  width: 100%;
  height: auto;
  max-height: 640px;
  object-fit: cover;
  object-position: center top;

  /* Editorial B/W */
  filter: grayscale(1) contrast(1.05) brightness(0.95);

  /* Edges fade into the page background */
  mask-image: radial-gradient(
    ellipse at center,
    black 55%,
    transparent 95%
  );
  -webkit-mask-image: radial-gradient(
    ellipse at center,
    black 55%,
    transparent 95%
  );
}
```

### Wichtig

- **Keine Card, kein Border, kein Frame, kein Shadow.**
- Bild verschmilzt mit `var(--color-bg)` (`#0a0a0a`)
- Kein Container-Background hinter dem Bild
- Effekt soll cinematic + integriert wirken, nicht aufgesetzt

## Mobile (≤ 768 px)

- Grid kollabiert: einspaltig
- Headline-Größe reduziert sich automatisch via `clamp()`
- Portrait optional ausblenden (`display: none` < 640 px) oder über der Headline einblenden — Entscheidung in der Implementierung treffen
- Vertikales Padding reduzieren auf `var(--space-5)`

## i18n-Texte

In `src/i18n/translations.ts` ergänzen unter `pages.index.hero`:

```ts
hero: {
  headlineLeft: 'Strategie, Skalierung,',
  headlineAccent: 'Verantwortung',
  headlineRight: '— für digitale Wertschöpfung.',
  lead: '…',                       // 2–4 Zeilen, vom Nutzer geliefert
  credentials: 'CDO · Aufsichtsrat · Autor · Speaker',
  portraitAlt: 'Christian Maaß — Porträt in Schwarz-Weiß'
}
```

**EN-Pendants** spiegelnd anlegen (vom Nutzer freigeben lassen — Tone-of-Voice editorial).

## Komponenten

### Geändert
- `src/pages/index.astro` — Hero-Block ersetzen
- `src/pages/en/index.astro` — analog
- `src/i18n/translations.ts` — Hero-Keys ergänzen (DE + EN)
- `public/styles.css` — Hero-spezifische Klassen (`.hero`, `.hero-headline`, `.hero-accent`, `.hero-lead`, `.hero-credentials`, `.hero-portrait`)

### Unverändert
- Strukturierte Daten (JSON-LD) im `<head>` von `index.astro` — bleibt
- Meta-Tags, OG-Image — bleibt (optional dunkles OG-Bild in Epic 06)

## Akzeptanzkriterien

- [ ] Headline in Satoshi, mehrzeilig, max-width forciert Zeilenumbrüche
- [ ] **Genau ein Wort** in `--color-accent` — sonst kein Akzent auf der Seite
- [ ] Supporting Text in `--color-text`, max-width 52ch
- [ ] Credentials-Line uppercase, letter-spacing 0.18em, muted
- [ ] Portrait in B/W (Filter), Ränder faden in `#0a0a0a` (Mask)
- [ ] Kein sichtbarer Rand, keine Card um das Bild
- [ ] Großzügiges vertikales Padding (`var(--space-7)`)
- [ ] EN-Variante komplett mit Übersetzungen befüllt
- [ ] Mobile: einspaltig, Headline lesbar, Portrait sinnvoll behandelt

## Verifikation

```bash
npm run dev
# Open localhost:4321
# Hero-Headline: 3–4 Zeilen, ein Wort in #315a78
# Bild fadet sauber in den schwarzen Hintergrund (kein harter Rand)
# Open /en/ → EN-Hero komplett übersetzt
# DevTools: Bild filter computed → grayscale(1)
# Resize zu 375px Width → Layout einspaltig, lesbar
```

## Offene Punkte (vor Umsetzung klären)

- [ ] **Genauer Headline-Wortlaut** DE + EN
- [ ] **Welches Wort** trägt die Akzentfarbe?
- [ ] **Lead-Text** (2–4 Zeilen) DE + EN
- [ ] **Credentials-Variante** — bleibt bei `CDO · AUFSICHTSRAT · AUTOR · SPEAKER`?
