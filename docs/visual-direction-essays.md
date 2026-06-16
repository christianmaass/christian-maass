# Visual Direction — Essay-Cover

**Stand:** 2026-06-15
**Geltungsbereich:** Alle Beitragsbilder unter `public/essays/*.jpg`, referenziert aus `src/content/essays/*.md` (Frontmatter `image.src`).
**Single-Source-of-Truth.** Jedes neue Essay-Cover wird mit den hier definierten Regeln und dem Master-Prompt produziert.

---

## 1. Designziel

Die Cover sind ein verlängerter Arm der Editorial-Marke. Sie sollen wirken wie das Inhaltsverzeichnis eines Wirtschaftsmagazins — nicht wie Onboarding-Slides eines SaaS-Produkts.

**Vergleichsklasse (in dieser Reihenfolge):**

1. **The New Yorker** — Cover-Essays, Christoph Niemann, Olimpia Zagnoli, R. Kikuo Johnson
2. **The Atlantic** — Brian Stauffer, Edmon de Haro
3. **Stripe Press** — Buchcover, abstrahiert-konzeptuell, Riso-Print-Vibe
4. **Brand Eins** — Magazin-Cover, ruhige Typografie + reduzierte Illustration

**Was sie NICHT sein dürfen** (aktuelle Stilbrüche, die abgelöst werden):

- Whiteboard-Skizzen / Hand-drawn Doodles auf einfarbigem Hintergrund (← bisheriger Stil der drei vorhandenen Cover)
- Generische Tech-Icons (Warenkorb, Roboter, Kreditkarte)
- Photorealistische 3D-Renderings
- Stock-Fotografie ohne Treatment
- Foto-Composites
- Headlines, Slogans oder Text im Bild
- Identifizierbare Markenlogos oder reale Personen-Gesichter

---

## 2. Palette

Direkt aus dem Design-System abgeleitet (`public/styles.css`, Brand-Refresh 02f6d62).

| Rolle        | Hex       | Verwendung im Bild                         |
| ------------ | --------- | ------------------------------------------ |
| Cream Paper  | `#f6f1e8` | Dominanter Hintergrund, ~60–70% der Fläche |
| Deep Petrol  | `#315a78` | Hauptakzent für Form/Subjekt               |
| Muted Ochre  | `#c19a5b` | Sekundär-Akzent, Wärme                     |
| Burnt Sienna | `#a04a2a` | Selten gesetzter Punkt (Drama, max. 5%)    |
| Charcoal     | `#1a1a1a` | Tinten-Linien, Schatten, Konturen          |

**Regel:** Kein reines Weiß, kein reines Schwarz, keine gesättigten Primärfarben. Alles in Richtung Naturpigmente / Druckfarben verschoben.

---

## 3. Stil-Attribute

- **Komposition:** Zentral, ruhig, mit großzügigem negativem Raum. 16:9 horizontal.
- **Stilanmutung:** Hand-painted gouache ODER Riso-Print mit leichter Off-Register-Verschiebung. Sichtbare Pinselspur, sichtbares Korn.
- **Textur:** Subtiles Papierkorn, leichte Tinte-Verlaufsränder.
- **Licht:** Flach, gleichmäßig. Keine harten Schatten, keine dramatische Beleuchtung.
- **Figuration:** Abstrakt-figurativ. Gegenstände sind erkennbar, aber stilisiert. Menschen — falls nötig — als Silhouette / Rückenansicht / Umriss, nie portraitiert.
- **Tonalität:** Nachdenklich, leise ironisch, würdevoll-gelassen. Ein Senior-Business-Essay, kein Cartoon.

---

## 4. Master-Prompt (v2 — nach Pilot-Review)

Wiederverwendbarer Block. Nur `{ESSAY_CONCEPT}` wird pro Bild ausgetauscht (siehe Tabelle in §6).

**Änderungen gegenüber v1** (15.06.2026):

- Petrol-Sättigung präzisiert: „slightly desaturated, never bright cobalt, never sky blue, never navy" (verhindert die hellblaue Drift, die im Agentic-Engineering-Pilot leicht auftrat)
- Bauhaus-Sekundärelemente explizit verankert (halbgeometrische Hintergrundformen, die in beiden Pilots zufällig erschienen und Familienähnlichkeit über die Serie hinweg stiften)
- Negative Constraints erweitert: explizit gegen Glossy-Finish, Cartoon, Infografik

```
Editorial illustration in the style of The New Yorker and The Atlantic
cover essays, abstract-figurative composition, conceptual metaphor for:
{ESSAY_CONCEPT}.

Color palette: warm cream paper background (#f6f1e8) dominating roughly
60–70% of the frame. Primary accent: deep petrol blue (#315a78) —
slightly desaturated, never bright cobalt, never sky blue, never navy.
Supporting tones: muted ochre (#c19a5b), burnt sienna (#a04a2a),
charcoal black ink details (#1a1a1a). No pure white, no pure black, no
saturated primaries.

Texture: subtle riso-print grain, slight off-register registration,
visible paper grain, hand-painted gouache or screenprinted feeling.
Flat lighting, no harsh shadows, no glow effects.

Composition centered around the main metaphor, generous negative space,
horizontal 16:9 frame. May include subtle Bauhaus-style secondary
geometric elements — half-circles, color blocks, dotted connection
lines, simple bars — rendered in cream, ochre or petrol, sitting in the
mid- and background. They support, never overpower the main metaphor.

Mood: thoughtful, gentle irony, restrained gravitas — a senior business
essay cover, not a cartoon, not an infographic. If a human figure is
needed, render only hand, silhouette or back view, never an
identifiable face.

References: Christoph Niemann, Olimpia Zagnoli, R. Kikuo Johnson,
Brian Stauffer, Edmon de Haro.

Negative constraints: no text, no headlines, no slogans, no logos, no
identifiable people, no whiteboard doodles, no hand-drawn line-art
icons, no generic tech icons (cart, robot, card, gear), no 3D
renderings, no photorealism, no glossy digital finish.
```

---

## 5. Tool & Settings

**Empfohlen (primär):** Midjourney v7

- `--ar 16:9`
- `--style raw` (verhindert „glossy"-Default)
- `--stylize 200–400` (mittlere Stilisierung; > 400 wird zu kitschig)
- `--no text, logo, doodle, icon, 3d, photoreal`

**Alternativ:** Imagen 4 / Nano Banana / Flux 1.1 Pro — solange der Stil-Brief stabil reproduziert wird.

**Workflow pro Essay:**

1. Master-Prompt + `{ESSAY_CONCEPT}` aus §6 einsetzen
2. 4 Varianten generieren, beste auswählen
3. Optional: 1–2 Re-Rolls oder Vary (Strong) für Feinjustierung
4. Auf exakt 1200×675 px croppen (16:9)
5. JPEG-Export, mozjpeg q82, Ziel ~50 KB/Datei (entspricht den bestehenden 3 Cover-Größen)
6. Dateiname **exakt** wie in §6 angegeben

---

## 6. Konzept-Tabelle — alle 19 Essays

Spalte „ESSAY_CONCEPT" wird wörtlich in den Master-Prompt eingesetzt. Spalte „Dateiname" muss exakt zum Frontmatter-Pfad `image.src` passen.

| #   | Datum      | Dateiname (in `public/essays/`)           | ESSAY_CONCEPT                                                                                                                                 |
| --- | ---------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | 2015-10-21 | `beyond-print-flyeralarm.jpg`             | A folded paper newspaper slowly unfolding into a glowing screen — the moment print learns to glow                                             |
| 2   | 2022-01-01 | `krisenjahr-2023.jpg`                     | A small ledger book open on a wooden table, half its pages turning into autumn leaves — accounting in a year of decay                         |
| 3   | 2022-01-02 | `krisenfest-2023.jpg`                     | A modest brick warehouse standing firm in shallow flood water, its door wide open and well-lit inside — resilience as quiet preparedness      |
| 4   | 2022-10-08 | `t3n-ceo-fragen-it.jpg`                   | A pair of boxing gloves resting on a folded software blueprint — the executive's questions land like jabs                                     |
| 5   | 2023-01-01 | `temu-tesla-moment.jpg`                   | A small electric ember glowing inside a giant brown cardboard shipping box — quiet disruption from below                                      |
| 6   | 2023-05-22 | `digitalkompakt-thomann.jpg`              | A vinyl record spinning on a digital turntable, sound waves visualized as rising bar charts — analogue craft meets digital scale              |
| 7   | 2023-06-27 | `wuv-ki-thomann.jpg`                      | A guitar tuner being adjusted by a calm human hand while a soft blue glow hovers above — AI as instrument, not orchestra                      |
| 8   | 2023-12-21 | `kassenzone-thomann.jpg`                  | A single vintage cash register sitting at the center of a vast warehouse floor, light beams cutting through dust — the operator's perspective |
| 9   | 2024-01-01 | `margen-spiel.jpg`                        | An old brass balance scale where one pan holds coins, the other holds rising smoke — the margin game running out                              |
| 10  | 2024-01-02 | `entwickler-oder-anwaelte.jpg`            | A keyboard whose keys are slowly being replaced by legal pad pages — code displaced by clauses                                                |
| 11  | 2024-01-03 | `komplexitaetsfallen.jpg`                 | A small figure with a briefcase walking through a maze drawn on parchment, dotted line getting tangled — complexity as a quiet trap           |
| 12  | 2024-02-18 | `forbes-europe-ecommerce-innovators.jpg`  | A small leather running shoe crossing a finish line that fades into a winding road — the last mile as the longest one                         |
| 13  | 2024-02-22 | `berlin-expo-forgotten-foundations.jpg`   | A stone foundation being uncovered beneath a fashionable glass storefront — the architecture we forgot to build on                            |
| 14  | 2024-04-24 | `ops-attention-battle.jpg`                | A single lit lantern carried through a crowded marketplace at dusk — attention as a fragile flame                                             |
| 15  | 2024-06-24 | `sunlab-beyond-performance-konferenz.jpg` | A wooden conference table covered in scattered note cards, one card glowing gently in petrol blue — the conversation that mattered            |
| 16  | 2024-09-06 | `ecbbq-vergessene-grundlagen.jpg`         | A small wooden ladder leaning against an enormous library wall, only the lower shelves are reachable — the foundations we keep skipping       |
| 17  | 2025-07-10 | `fake-shops.jpg`                          | A theatrical mask leaning against a half-built storefront facade with hollow windows — deception as architecture                              |
| 18  | 2026-03-18 | `agentic-engineering.jpg`                 | A human hand placing a single chess piece onto a circuit board diagram — autonomy meets infrastructure                                        |
| 19  | 2026-04-20 | `thomann-kundenbindung.jpg`               | A single instrument string tied gently around a small wooden house — loyalty as quiet craft                                                   |

---

## 7. Output-Spezifikation

| Eigenschaft | Wert                            |
| ----------- | ------------------------------- |
| Format      | JPEG                            |
| Auflösung   | 1200 × 675 px (16:9)            |
| Encoder     | mozjpeg, Quality 82             |
| Zielgröße   | ~50 KB/Datei (Range 40–65 KB)   |
| Farbprofil  | sRGB                            |
| Metadaten   | EXIF stripped                   |
| Speicherort | `public/essays/<dateiname>.jpg` |

Astro's Sharp-Service erzeugt beim Build automatisch die WebP-Varianten — kein zusätzlicher Schritt nötig.

---

## 8. Verifikation nach Asset-Drop

**1. Build muss grün bleiben:**

```bash
npm run check    # 0 errors erwartet
npm run build    # alle pages built, 22+ WebP-Varianten regeneriert
```

**2. Keine 404 im Browser:**

```bash
npm run dev
# → http://localhost:4321/
# → http://localhost:4321/fachartikel/
```

DevTools-Network-Tab darf null Image-404 auf `/essays/*.jpg` zeigen.

**3. Visueller Brand-Konsistenz-Review:**

Side-by-side-Vergleich auf `/fachartikel/`:

- Wirken die 19 Cover wie ein zusammengehöriger Editorial-Set?
- Liest sich die Palette als verlängerter Arm der Brand (Cream/Petrol erkennbar)?
- Passt die Tonalität zur Hero-Headline „Manager, nicht Berater"?

Benchmark-Vergleich gegen Stripe Press Bookshop, The Atlantic Essay-Listing, Brand Eins Magazinarchiv.

---

## 9. Schema-Härtung (Phase 5, optional, NACH Asset-Drop)

Aktuell validiert `src/content.config.ts:32-35` nur, dass `image.src` mit `/` beginnt — nicht die Existenz der Datei. Genau dieser Gap hat den aktuellen P0-Befund ausgelöst (16 fehlende Bilder blieben unbemerkt).

**Nach Asset-Drop** (wichtig: erst danach, sonst bricht der Build sofort) folgenden Refine ergänzen:

```ts
import fs from 'node:fs';
import path from 'node:path';

// ...

image: z.object({
  src: z
    .string()
    .startsWith('/')
    .refine(
      (src) => fs.existsSync(path.join('public', src)),
      (src) => ({ message: `Image not found at public${src}` })
    ),
  alt: z.string().min(1),
}),
```

Effekt: Künftig bricht der Build sofort, wenn jemand einen Bildpfad pflegt, aber das Bild vergisst. Verhindert Wiederholung des aktuellen Audit-P0.

---

## 10. Audit-Schließung

Nach erfolgreichem Drop wird der P0-Befund in `docs/audits/2026-06-05-cto-ux-vollaudit.md` (TL;DR #1, ICE-Position 1) als erledigt markiert.
