# Epic 03 — Navigation & Header Redesign

> **Status:** ⏳ Pending
> **Aufwand:** M (1–2 Tage)
> **Abhängigkeiten:** Epic 01 (Tokens), Epic 02 (Satoshi)
> **Blockiert:** Epic 04 (visueller Kontext), Epic 05 (Pill-Pattern wird reused)

## Ziel

Header neu aufbauen: drei klar getrennte Zonen, 80–90 px Höhe, kein Logo-Icon, **DE/EN als letzter Eintrag** in der Center-Navigation, ein dezenter Kontakt-Pill rechts.

## Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│ Christian Maaß    BLOG  PERSPEKTIVEN  BÜCHER  BEIRAT            │
│                   ÜBER  DE/EN                       [ Kontakt ] │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

- Höhe: 80–90 px
- Horizontales Padding: `var(--container-padding-x)` × 2 (großzügig)
- Volle Breite (kein Container-Constraint im Header — Inhalt innen begrenzt auf 1280 px max)
- Border-Bottom: optional `1px solid var(--color-border-subtle)` für subtile Abgrenzung

## Zone 1 — Brand (links)

```html
<a href="/" class="brand">Christian Maaß</a>
```

```css
.brand {
  font-family: var(--font-family-display);
  font-weight: 500;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
  color: var(--color-text-strong);
  text-decoration: none;
}
```

- Kein Logo-Icon
- Der Name selbst ist die Marke
- Auf Hover: leichte Opacity (0.85), kein Underline

## Zone 2 — Navigation (mittig)

**Items (in dieser Reihenfolge):**

1. Blog
2. Perspektiven (`/fachartikel`)
3. Bücher (`/buecher`)
4. Beirat (`/beirat`)
5. Über (`/christian-maass`)
6. DE / EN — Sprache (letzter Eintrag, gleicher Stil wie Nav-Items)

```css
.nav {
  display: flex;
  align-items: center;
  gap: 2.5rem;            /* generous spacing */
  font-family: var(--font-family-base);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.nav a {
  color: var(--color-text-muted);   /* #8a8a8a */
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav a:hover,
.nav a.active {
  color: var(--color-text-strong);   /* #f5f5f5 */
}
```

- **Keine sichtbaren Trenner** zwischen den Items
- **Keine Underlines** (auch nicht aktiv) — der Farbwechsel reicht
- DE/EN als zwei Spans im selben Item-Slot, nicht-aktive Sprache `--color-text-muted`, aktive `--color-text-strong`

### Beispiel DE/EN

```html
<span class="nav-lang">
  <a href="/">DE</a>
  <span aria-hidden="true">/</span>
  <a href="/en/">EN</a>
</span>
```

(Aktivierung über pathname-Check wie heute. Wiederverwendung von `getAlternateUrl()` aus `src/i18n/utils.ts`.)

## Zone 3 — Kontakt-Pill (rechts)

```html
<a href="/kontakt" class="contact-pill">Kontakt</a>
```

```css
.contact-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.65rem 1.5rem;
  background: var(--color-accent);     /* #315a78 */
  color: var(--color-on-accent);
  font-family: var(--font-family-base);
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  border-radius: 999px;                /* pill */
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
}

.contact-pill:hover {
  background: #3d647f;                 /* 1 Step heller */
  transform: translateY(-1px);
}
```

- EN-Variante: Text „Contact" (i18n)
- Hover: dezent, kein Glow, kein Shadow

## Mobile (≤ 768 px)

- Brand bleibt links sichtbar
- Nav + Contact-Pill verschwinden, Burger-Icon erscheint rechts
- Burger-Logik bleibt: `public/js/burger-menu.js` unverändert
- Burger-Overlay-Style neu:
  - Full-Screen `var(--color-bg)` (#0a0a0a)
  - Nav-Items zentriert, vertikal, große Type (`clamp(1.5rem, 5vw, 2.5rem)`)
  - DE/EN unten
  - Contact-Pill am unteren Ende
  - Close-X oben rechts

## Komponenten

### Geändert
- `src/components/Header.astro` — komplett neu, scoped `<style>`
- `src/components/LanguageSwitcher.astro` — vereinfachen: nur noch die zwei DE/EN-Links + Slash dazwischen, kein eigenes Spacing/Box

### Unverändert
- `src/i18n/utils.ts` — `getAlternateUrl()`, `getLocaleFromPath()` wiederverwenden
- `src/i18n/translations.ts` — Nav-Labels existieren bereits (`nav.blog`, `nav.fachartikel` etc.)
- `public/js/burger-menu.js` — Logik bleibt
- `src/layouts/BaseLayout.astro` — Header-Einbindung unverändert

## Akzeptanzkriterien

- [ ] Header zeigt: „Christian Maaß" links, 5 Nav-Items + DE/EN mittig, Kontakt-Pill rechts
- [ ] Header-Höhe ≈ 80–90 px
- [ ] Nav-Items in `--color-text-muted`, Hover/Aktiv in `--color-text-strong`
- [ ] DE/EN funktioniert auf allen Seiten (auch EN-Pages)
- [ ] Aktive Sprache visuell hervorgehoben (Farbwechsel)
- [ ] Kontakt-Pill in `--color-accent`, abgerundet (999 px), Hover funktioniert
- [ ] Mobile: Burger zeigt dunkles Vollbild-Overlay, Nav lesbar, DE/EN + Kontakt-Pill enthalten
- [ ] Keyboard-Nav: Tab durch alle Items, `:focus-visible` sichtbar auf dunklem Grund

## Verifikation

```bash
npm run dev
# Desktop: localhost:4321 — Header wie Spec
# Resize <768px → Burger erscheint, klick → dunkles Vollbild
# Tab-Reihenfolge: Brand → Blog → ... → DE/EN → Kontakt
# /en/ → EN-Aktiv, DE-Klick führt zur DE-Variante derselben Seite
```
