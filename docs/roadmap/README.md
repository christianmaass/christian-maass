# Roadmap: Dark Editorial Redesign

> Status: **Planung abgeschlossen, Umsetzung steht aus**
> Letzte Aktualisierung: 2026-06-01

## Zielbild

Die Site wird vom heutigen hellen Auftritt (`#FAFAFA`, Montserrat, Navy-Akzent) auf eine **dunkle, editoriale Bildsprache** umgestellt — Referenzen: *Monocle*, *FT Weekend*, *Porsche Magazine*, Boutique-Strategieberatungen.

Positioniert wird Christian Maaß als Board-Level-Executive, Aufsichtsrat, Autor und Speaker. Die heutige Optik trägt diese Rolle nicht — der Redesign schafft visuelle Glaubwürdigkeit auf C-Level / Aufsichtsrat-Niveau.

## Designentscheidungen (verbindlich)

| Aspekt | Festlegung |
|---|---|
| Scope | Gesamte Site (alle DE- und EN-Unterseiten) |
| Hintergrund | `#0a0a0a` |
| Akzent (genau einer) | `#315a78` — muted petrol/steel blue |
| Headline-Font | **Satoshi** (Fontshare, OFL, selbstgehostet) |
| Body-Font | Montserrat (bleibt, später optional ablösbar) |
| DE/EN-Switch | Letzter Eintrag in der Center-Navigation |
| Hero-Portrait | `christian-maass.png`, später durch finales Editorial-Foto ersetzbar |

**Was wir nicht tun:** Gradients, Glassmorphism, Neon-Akzente, Startup-Illustrationen, Inter als Headline-Font, geometrische/futuristische Fonts.

## Epics

| # | Epic | Status | Aufwand | Beschreibung |
|---|---|---|---|---|
| 00 | [Foundation](./epic-00-foundation.md) | ✅ Done | XS | `.nvmrc`, `astro check`, Prettier — designneutral |
| 01 | [Design Tokens](./epic-01-design-tokens.md) | ✅ Done | S | Neue Farb-/Border-/Shadow-Tokens in `public/styles.css` |
| 02 | [Typography](./epic-02-typography.md) | ✅ Done | S | Satoshi integrieren, editorial Type-Scale |
| 03 | [Navigation](./epic-03-navigation.md) | ✅ Done | M | Header neu: Name · Nav · Kontakt-Pill |
| 04 | [Hero](./epic-04-hero.md) | ✅ Done | M | Zweispaltige Hero mit Portrait-Fade |
| 05 | [Site-wide Dark](./epic-05-global-dark.md) | ⏳ Pending | L | Footer, Karten, CTAs, alle Seiten |
| 06 | [QA](./epic-06-qa.md) | ⏳ Pending | M | A11y · Performance · EN-Parität · Cross-Browser |

## Reihenfolge & Abhängigkeiten

```
00 Foundation ──> 01 Tokens ──┬──> 03 Navigation ──> 04 Hero ──> 05 Site-wide ──> 06 QA
                  02 Type ────┘
```

- **00** zuerst — schafft die Tool-Basis, designneutral
- **01 + 02** sind das visuelle Fundament, können parallel laufen
- **03** setzt 01+02 voraus
- **04** baut visuell direkt auf 03 auf
- **05** rollt die in 03/04 entstandenen Patterns aus
- **06** schließt vor Release ab

**Workflow:** Jedes Epic = eigener Branch + PR. Kein Big-Bang-Merge.

## Prinzipien für die Umsetzung

1. **Tokens zuerst, dann Komponenten.** Keine Hardcoded-Hex-Werte in Komponenten — alles über `--color-*`-Variablen.
2. **Bestehendes wiederverwenden.** i18n-System, BaseLayout, Astro-Config und JSON-LD bleiben unverändert. Nur Optik & Hero-Texte ändern sich.
3. **Akzentfarbe ist heilig.** Genau ein Wort im Hero-Headline trägt `--color-accent`. Kein Button, kein Link, kein Hover bekommt diese Farbe zusätzlich (außer dem expliziten Kontakt-Pill).
4. **Negative Space ist Inhalt.** Lieber zu wenig als zu viel auf der Fläche.
5. **Mobile bleibt nutzbar.** Burger-Menu-Logik (`public/js/burger-menu.js`) bleibt, nur Optik ändert sich.

## Verifikation pro Epic

1. `npm run dev` → `localhost:4321`
2. Visual: Hero, Header, mind. 3 Unterseiten DE+EN
3. A11y: axe DevTools, Keyboard-Tab-Reihenfolge, Focus-Outlines auf dunklem Grund sichtbar
4. `npm run build` clean
5. Lighthouse Performance/A11y/Best-Practices ≥ 90

## Offene Punkte für die Implementierungsphase

- Genauer Wortlaut der Hero-Headline (DE + EN) — welches Wort trägt die Akzentfarbe?
- Supporting-Lead-Text (2–4 Zeilen, beide Sprachen)
- Credentials-Line endgültig: `CDO · AUFSICHTSRAT · AUTOR · SPEAKER` oder Variante?
- Finales Editorial-Portrait — wird vom Nutzer geliefert, Platzhalter bis dahin: `christian-maass.png`
