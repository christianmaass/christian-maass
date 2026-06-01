# Epic 06 — QA: Accessibility · Performance · EN-Parität · Cross-Browser

> **Status:** ⏳ Pending
> **Aufwand:** M (1–2 Tage)
> **Abhängigkeiten:** Epic 01–05 abgeschlossen
> **Blockiert:** Release

## Ziel

Sicherstellen, dass der Dark-Redesign keine Regressionen einführt — visuell, funktional, performance- und A11y-seitig. Vor Release abnehmen.

## Checkliste

### 1. Accessibility (WCAG AA)

- [ ] **Kontraste** mit axe DevTools prüfen:
  - Body `#c8c8c8` auf `#0a0a0a` → ~11:1 ✓ (deutlich über AA 4.5:1)
  - Muted `#8a8a8a` auf `#0a0a0a` → ~5.3:1 ✓ (über AA für normalen Text)
  - Strong `#f5f5f5` auf `#0a0a0a` → ~17:1 ✓
  - Pill: `#ffffff` auf `#315a78` → ~7.2:1 ✓
  - Pflicht: jedes oben aufgeführte Paar im Live-Render testen
- [ ] **Focus-Outlines** sichtbar auf dunklem Grund:
  ```css
  :focus-visible {
    outline: 2px solid var(--color-text-strong);
    outline-offset: 2px;
    border-radius: 2px;
  }
  ```
- [ ] **Skip-Link** funktioniert (bereits in BaseLayout vorhanden), beim Fokus sichtbar
- [ ] **Tab-Reihenfolge** logisch: Skip-Link → Brand → Nav → Pill → Main → Footer
- [ ] **`prefers-reduced-motion`** respektiert: ggf. Hover-Transforms und Transitions deaktivieren:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }
  ```
- [ ] **Alt-Texte** auf allen Bildern, insbesondere Hero-Portrait
- [ ] **Heading-Struktur** (H1 nur einmal pro Seite, keine Sprünge H2→H4)

### 2. Performance

- [ ] **Lighthouse-Run** (mobile + desktop) auf Startseite:
  - Performance ≥ 90
  - Accessibility ≥ 95
  - Best Practices ≥ 95
  - SEO ≥ 95
- [ ] **Font-Loading:**
  - Satoshi-Files preloaded (Display-Weight)
  - `font-display: swap`
  - Kein FOIT > 100ms
- [ ] **Bilder:**
  - Hero-Portrait: prüfen ob WebP/AVIF lohnt (Astro `<Image>` oder manuell). PNG → WebP spart oft 40–60%
  - `loading="eager"` + `fetchpriority="high"` für Hero-Portrait
  - Below-the-fold-Bilder `loading="lazy"`
- [ ] **CSS-Bundle:** `public/styles.css` Größe vor/nach vergleichen. Kein massiver Wachstum erwartet.

### 3. EN-Parität

- [ ] Alle neuen i18n-Keys (Hero, ggf. Credentials) sind in beiden Sprachen befüllt
- [ ] Nav-Labels in `nav.*` korrekt (existieren bereits)
- [ ] DE/EN-Switch springt von jeder Seite zur Pendant-Seite
- [ ] Legal-Pages (Impressum, Datenschutz, Barrierefreiheit) bleiben DE-only — bewusst, nicht vergessen
- [ ] hreflang-Tags in BaseLayout funktionieren weiter (unverändert)

### 4. Cross-Browser

| Browser | Was testen |
|---|---|
| **Safari** (macOS + iOS) | `mask-image` (Portrait-Fade) — `-webkit-mask-image` Fallback aktiv |
| **Chrome** | Baseline |
| **Firefox** | Font-Weight-Rendering (Satoshi sieht in FF manchmal anders aus), CSS Grid |
| **Edge** | Identisch zu Chrome, kurzer Smoke-Test |

- [ ] Portrait fadet in allen Browsern (Safari ist der kritische Kandidat wegen `-webkit-mask-image`)
- [ ] Pill-Button rendert mit korrektem Border-Radius (`999px`) in allen Browsern
- [ ] Burger-Menu öffnet/schließt sauber auf Mobile-Safari

### 5. Mobile

- [ ] Viewport 375 px (iPhone SE) — Hero lesbar, Headline bricht sinnvoll
- [ ] Viewport 390 px (iPhone 14) — Standard-Smoke-Test
- [ ] Viewport 768 px (iPad) — Übergang Mobile→Desktop sauber
- [ ] **Touch-Targets** ≥ 44×44 px für alle interaktiven Elemente
- [ ] Burger-Overlay scrollbar wenn nötig (lange Nav-Liste)
- [ ] Portrait-Fade auf kleinen Screens — Entscheidung umgesetzt (ausblenden oder oberhalb der Headline)

### 6. SEO & Strukturierte Daten

- [ ] **JSON-LD** in `index.astro` unverändert und valide (Google Rich Results Test)
- [ ] **Meta-Description** der Startseite ggf. an neue Headline anpassen
- [ ] **OG-Image** — optional ein dunkles, editoriales OG-Bild erzeugen und in `public/og/` ablegen. Pfad in BaseLayout aktualisieren
- [ ] **Sitemap** wird automatisch generiert (`@astrojs/sitemap`) — `npm run build` und stichprobenartig `dist/sitemap-*.xml` prüfen

### 7. Build & Deploy

- [ ] `npm run build` läuft ohne Warnings/Errors
- [ ] `npm run preview` zeigt das Ergebnis identisch zu `dev`
- [ ] `dist/`-Output enthält alle neuen Assets (Satoshi-Files, geänderte CSS)
- [ ] `_headers`, `CNAME`, `robots.txt` unverändert (CDN/GitHub-Pages-Config)

### 8. Visuelle Final-Abnahme

- [ ] Side-by-Side-Vergleich mit Referenzen: Monocle Homepage, FT Weekend, Porsche Magazine — fühlt es sich auf Augenhöhe an?
- [ ] Nutzer-Sign-off auf:
  - Hero-Wording (Headline + Akzentwort + Lead)
  - Credentials-Line
  - Portrait-Auswahl (final oder Platzhalter)

## Verifikation — Tools & Befehle

```bash
# Build & local preview
npm run build && npm run preview

# axe DevTools: Chrome-Extension, manuell pro Seite

# Lighthouse: Chrome DevTools → Lighthouse-Tab, mobile + desktop

# Light-Mode-Reste suchen (sollte leer bleiben):
grep -RIn "#FAFAFA\|#F3F4F5\|#012030\|#5C7585" src/ public/styles.css

# Sitemap prüfen:
ls -la dist/sitemap-*.xml

# JSON-LD validieren:
# https://search.google.com/test/rich-results → Code von index.astro paste
```

## Akzeptanzkriterien

- [ ] Lighthouse mobile + desktop alle ≥ 90 (Best Practices/A11y ≥ 95)
- [ ] axe DevTools: 0 critical, 0 serious Issues
- [ ] Cross-Browser: Safari/Chrome/Firefox/Edge — Portrait-Fade + Pill funktionieren überall
- [ ] EN-Pages vollständig übersetzt, DE/EN-Switch funktioniert auf allen Seiten
- [ ] `npm run build` clean
- [ ] Visual-Sign-off durch Nutzer

## Was wir bei einem Befund tun

- **Critical/Serious A11y-Issue** → muss in Epic 06 gefixt werden, kein Release
- **Performance-Regression** (Lighthouse < 90) → Root-Cause, dann fixen
- **Visueller Bruch auf einer Sub-Page** → entscheiden: in Epic 06 fixen ODER als Folge-Epic notieren, falls Re-Design der Seite nötig

Release erfolgt erst, wenn diese Checkliste vollständig durch ist.
