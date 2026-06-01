# Epic 05 — Site-wide Dark Migration

> **Status:** ⏳ Pending
> **Aufwand:** L (2–3 Tage)
> **Abhängigkeiten:** Epic 01 (Tokens), Epic 03 (Pill-Pattern), Epic 04 (Hero-Patterns)
> **Blockiert:** Epic 06 (QA muss danach laufen)

## Ziel

Alle Seiten und globalen Komponenten visuell auf das neue Dark-System heben. **Kein Redesign pro Seite** — nur Tokens & geteilte Komponenten ziehen, sodass jede Seite konsistent dunkel funktioniert (Lesbarkeit, Kontraste, CTAs, Karten, Footer).

## Scope

### 1. Footer (`src/components/Footer.astro`)

- Hintergrund: `var(--color-bg-elevated)` (#111111)
- Border-Top: `1px solid var(--color-border-subtle)`
- Headings: `var(--color-text-strong)`
- Body/Links: `var(--color-text-muted)` → hover `var(--color-text-strong)`
- Keine Shadows
- Buch-Cover (`executive-presence-maass.jpg` etc.): falls Cover hellen Hintergrund haben, mit `border: 1px solid var(--color-border-subtle)` absetzen ODER in einem `var(--color-bg-elevated)`-Container darstellen
- Social-Icons (`linkedin.svg`, `instagram.svg`, `mail.svg`): SVG-Fill via `filter: invert(0.8)` oder direkt im SVG auf `currentColor` umstellen — Hauptsache hell auf dunkel

### 2. Karten & Sektionen (`public/styles.css`)

Klassen, die im Repo verwendet werden (z. B. `card-soft`):

```css
.card-soft {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-md);
  /* shadow entfernen */
  padding: var(--space-4);
}

.card-soft--accent {
  border-left: 3px solid var(--color-accent);
}
```

- Heutige Box-Shadows: ersetzen durch Borders
- Heutige hellen Backgrounds (`#F3F4F5`): durch `--color-bg-elevated` ersetzen

### 3. CTAs / Buttons

- **Primary** = Pill aus Epic 03 wiederverwenden: `.contact-pill` (oder verallgemeinert `.btn-pill`)
- **Secondary / Ghost:**
  ```css
  .btn-ghost {
    display: inline-flex;
    align-items: center;
    padding: 0.65rem 1.5rem;
    background: transparent;
    border: 1px solid var(--color-border-subtle);
    border-radius: 999px;
    color: var(--color-text-strong);
    font-family: var(--font-family-base);
    font-weight: 500;
    text-decoration: none;
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .btn-ghost:hover {
    border-color: var(--color-text-strong);
    background: rgba(255,255,255,0.02);
  }
  ```
- Alle bestehenden CTA-Klassen auf einen dieser Stile mappen

### 4. Breadcrumb (`src/components/Breadcrumb.astro`)

- Text: `var(--color-text-muted)`
- Aktives Element: `var(--color-text-strong)`
- Trenner (`/` oder `›`): `var(--color-text-muted)` mit Opacity 0.5
- Kein Box-Hintergrund, kein Border

### 5. Bilder im Body

Buch-Cover, Speaker-Bilder, Logos auf den Seiten `buecher`, `beirat`, `lehre`:

- Falls Bild hellen Hintergrund hat → in `var(--color-bg-elevated)`-Container packen oder subtile Border (`--color-border-subtle`)
- Speaker-/Portrait-Bilder können optional auch in B/W via `filter: grayscale(1)` editorial konsistent gemacht werden (Entscheidung pro Seite)
- Logos (`logo-bevh.png`, `logo-mdm.png`, `logo-wmd.png`, `logo-optilyz.png`): meistens auf weiß optimiert — auf dunkler Seite ggf. via `background: white; padding: 0.5rem; border-radius: 0.25rem` rendern oder ein dunkles Logo-Asset bevorzugen

### 6. Pro-Seite-Smoke-Test

Schnelle visuelle Prüfung (kein Redesign):

| Seite | DE-Pfad | EN-Pfad | Punkte |
|---|---|---|---|
| Index | `/` | `/en/` | Hero (Epic 04 done) ✓ |
| Über | `/christian-maass` | `/en/christian-maass` | Lesefluss, Karten |
| Blog | `/blog` | — | Listendarstellung |
| Perspektiven | `/fachartikel` | `/en/fachartikel` | Artikel-Cards |
| Bücher | `/buecher` | `/en/buecher` | Buch-Cover-Grid |
| Beirat | `/beirat` | `/en/beirat` | Logos + Cards |
| Lehre | `/lehre` | `/en/lehre` | Speaker-Bilder |
| Kontakt | `/kontakt` | `/en/kontakt` | Formular/Links |
| Impressum | `/impressum` | — | Fließtext |
| Datenschutz | `/datenschutz` | — | Fließtext |
| Barrierefreiheit | `/barrierefreiheit` | — | Fließtext |

Jede Seite: lesbar, Karten dunkel, CTAs konsistent, Logos sichtbar. **Wenn etwas grob bricht: notieren, in eigenes Folge-Epic schieben.** Hier nicht redesignen.

## Kritische Dateien

- `src/components/Footer.astro`
- `src/components/Breadcrumb.astro`
- `public/styles.css` — Card-, CTA-, Footer-, Image-Klassen

## Out of Scope

- Re-Design einzelner Seiten (z. B. Bücher-Grid neu) — separate Epics
- Neue OG-Images — Epic 06
- Inhaltliche Änderungen — nur visuelle Migration

## Akzeptanzkriterien

- [ ] Footer dunkel, lesbar, Buch-Cover sichtbar
- [ ] Karten überall dunkel, mit subtler Border statt Shadow
- [ ] CTAs konsistent (Pill für Primary, Ghost für Secondary)
- [ ] Breadcrumb funktioniert auf dunklem Grund
- [ ] Logos auf Beirat-Seite sichtbar (entweder weiß-Hintergrund-Container oder dunkle Variante)
- [ ] Alle 11 Seiten (DE + EN wo vorhanden) sind durchscrollbar, lesbar, ohne hellen Flash
- [ ] `npm run build` läuft fehlerfrei
- [ ] Keine versehentlich hellen Sektionen (kein `#FAFAFA`-Flash)

## Verifikation

```bash
npm run dev

# Manuelles Sichten aller Seiten:
for path in / /christian-maass /blog /fachartikel /buecher /beirat /lehre /kontakt /impressum /datenschutz /barrierefreiheit /en/ /en/christian-maass /en/fachartikel /en/buecher /en/beirat /en/lehre /en/kontakt; do
  echo "Sichten: localhost:4321$path"
done

# Suche nach Light-Mode-Resten:
grep -RIn "#FAFAFA\|#F3F4F5\|#012030\|#5C7585" src/ public/ || echo "✓ keine alten Light-Tokens"
```
