# Epic 02 — Typography: Satoshi + Editorial Scale

> **Status:** ⏳ Pending
> **Aufwand:** S (0,5–1 Tag)
> **Abhängigkeiten:** keine (kann parallel zu Epic 01 laufen)
> **Blockiert:** Epic 03, 04

## Ziel

**Satoshi** als Display-Font (Headlines) einführen — selbstgehostet, OFL-lizensiert via Fontshare. Body bleibt Montserrat. Editorial Type-Scale für die Hero-Headline ergänzen.

## Scope

### 1. Satoshi-Files beschaffen & ablegen

Quelle: https://www.fontshare.com/fonts/satoshi

Zu ladende Weights (subset auf Latin reicht):

- **Satoshi Medium (500)** — für UI-Texte / Nav-Items
- **Satoshi Bold (700)** — für Headlines (bzw. 500 für Hero, je nach Mood)

Dateinamen-Konvention (analog zu Montserrat im Repo):

```
public/fonts/satoshi-500.woff2
public/fonts/satoshi-700.woff2
public/fonts/SATOSHI-LICENSE.txt   ← OFL-License-Text mit ablegen
```

### 2. `@font-face` in `public/styles.css` ergänzen

Pattern direkt unter den bestehenden Montserrat-Blöcken (Zeilen ~6–28):

```css
@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/satoshi-500.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/satoshi-700.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### 3. Neue Typo-Tokens in `:root`

```css
--font-family-display: 'Satoshi', 'Inter', system-ui, sans-serif;
--font-family-base:    'Montserrat', Arial, sans-serif;          /* bleibt */

/* Editorial hero scale */
--font-size-hero: clamp(2.75rem, 6vw, 5.5rem);
--line-height-hero: 1.05;
--letter-spacing-hero: -0.02em;

/* Existing size scale bleibt unverändert (xs..3xl) */
```

### 4. Globale Anwendung

```css
h1, h2 {
  font-family: var(--font-family-display);
  letter-spacing: -0.01em;
}

h3 {
  font-family: var(--font-family-display);
}

body, p, li, a, button, input {
  font-family: var(--font-family-base);
}
```

### 5. Preload für Performance

In `src/layouts/BaseLayout.astro` (Head):

```html
<link rel="preload" href="/fonts/satoshi-500.woff2" as="font" type="font/woff2" crossorigin />
```

Nur den Weight preloaden, der above-the-fold im Hero erscheint.

## Kritische Dateien

- `public/styles.css` — `@font-face`, Tokens, globale H-Regeln
- `public/fonts/` — neue WOFF2-Files + Lizenz
- `src/layouts/BaseLayout.astro` — Preload-Tag

## Lizenz

Satoshi (Fontshare) ist unter der **SIL Open Font License (OFL)** kostenlos kommerziell nutzbar. Lizenztext **muss** im Repo mitgeführt werden (`public/fonts/SATOSHI-LICENSE.txt`).

## Out of Scope

- Body-Font-Wechsel — Montserrat bleibt vorerst, kann in einem späteren Epic abgelöst werden
- Komponentenspezifische Typo-Anpassungen — kommen in Epic 03/04

## Akzeptanzkriterien

- [ ] WOFF2-Files in `public/fonts/` vorhanden
- [ ] OFL-Lizenz im Repo
- [ ] `@font-face` deklariert
- [ ] Tokens `--font-family-display` und `--font-size-hero` etc. existieren
- [ ] H1 auf Startseite rendert in Satoshi (DevTools: `Computed → font-family` prüfen)
- [ ] Body rendert weiterhin in Montserrat
- [ ] Preload-Tag im `<head>` aktiv, kein FOIT/FOUT-Flash auf langsamen Verbindungen

## Verifikation

```bash
npm run dev
# Open DevTools > Network > Filter "Font"
# satoshi-500.woff2 must be preloaded (initiator: link rel=preload)
# H1 computed font-family must include "Satoshi"
```
