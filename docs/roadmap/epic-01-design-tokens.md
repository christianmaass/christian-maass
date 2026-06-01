# Epic 01 — Design Tokens & Color System

> **Status:** ⏳ Pending
> **Aufwand:** S (0,5–1 Tag)
> **Abhängigkeiten:** keine
> **Blockiert:** Epic 03, 04, 05

## Ziel

Vollständig neues Token-Set in `public/styles.css` etablieren. Alte Tokens werden **ersetzt**, nicht parallel geführt — das Light-Theme verschwindet vollständig.

## Scope

### Neue Color Tokens

```css
:root {
  /* Backgrounds */
  --color-bg: #0a0a0a;              /* page background */
  --color-bg-elevated: #111111;     /* footer, cards, elevated surfaces */

  /* Text */
  --color-text-strong: #f5f5f5;     /* H1-H3, brand name */
  --color-text:        #c8c8c8;     /* body, lead */
  --color-text-muted:  #8a8a8a;     /* nav, credentials, eyebrow */

  /* Accent — exactly one accent */
  --color-accent:    #315a78;       /* muted petrol blue */
  --color-on-accent: #ffffff;       /* text on accent (kontakt pill) */

  /* Borders */
  --color-border-subtle: rgba(255, 255, 255, 0.08);
  --color-border-strong: rgba(255, 255, 255, 0.16);
}
```

### Zu entfernende (oder umzudeutende) Tokens

| Alt | Wert (alt) | Aktion |
|---|---|---|
| `--color-bg` | `#FAFAFA` | überschreiben mit `#0a0a0a` |
| `--color-bg-soft` | `#F3F4F5` | umbenennen → `--color-bg-elevated`, neuer Wert `#111111` |
| `--color-text` | `#333` | überschreiben mit `#c8c8c8` |
| `--color-text-strong` | `#012030` | überschreiben mit `#f5f5f5` |
| `--color-text-muted` | `#5C7585` | überschreiben mit `#8a8a8a` |
| `--color-accent` | `#012030` | überschreiben mit `#315a78` |
| `--color-on-accent` | `#ffffff` | bleibt |
| `--color-border-subtle` | `rgba(0,0,0,0.1)` | invertieren → `rgba(255,255,255,0.08)` |

### Spacing & Layout (unverändert)

`--space-1` bis `--space-7`, `--container-max-width`, `--container-padding-x` bleiben — die 8px-Skala funktioniert weiterhin.

### Shadows (anpassen oder entfernen)

Auf dunklem Hintergrund funktionieren die heutigen Box-Shadows nicht. Optionen:

- **Empfohlen:** Shadow-Tokens entfernen, durch `border: 1px solid var(--color-border-subtle)` ersetzen, wo Tiefe erzeugt werden soll
- Alternative: Shadows als sehr subtilen Glow definieren: `0 1px 0 rgba(255,255,255,0.04)` — nur wenn nötig

## Kritische Dateien

- `public/styles.css` (`:root`-Block ~Zeilen 30–160)

## Out of Scope

- Komponenten-Anpassungen — die kommen in Epic 03, 04, 05
- Schriftarten — Epic 02

## Akzeptanzkriterien

- [ ] Alle alten Light-Theme-Hex-Werte aus `:root` entfernt
- [ ] Neue Tokens vollständig definiert
- [ ] `body { background: var(--color-bg); color: var(--color-text); }` rendert die Seite auf `#0a0a0a` mit hellem Text
- [ ] `npm run build` läuft fehlerfrei
- [ ] Visual smoke test: Startseite öffnet, ist dunkel — auch wenn einzelne Komponenten noch nicht final aussehen

## Verifikation

```bash
npm run dev
# Open localhost:4321 — page background should be #0a0a0a
# Text should be readable (#c8c8c8 on #0a0a0a passes WCAG AA)
```
