# Stand — christianmaass.com

Angelegt von setup-fast `--bestehend` (2026-10-18) aus Code und Doku.

## Was die App kann
### Startseite
Profil, Schwerpunkte und die fünf neuesten Blog-Beiträge.
Datei: `src/pages/index.astro`

### Blog
Übersicht mit 10 Beiträgen je Seite (`/blog/`, `/blog/2/` …), Detailseite mit Teilen-Leiste und Autoren-Box, RSS-Feed;
Entwürfe erscheinen nur im Dev-Server.
Dateien: `src/pages/blog/`, `src/content/articles/` · Roadmap: `specs/roadmap.md`

### Fachartikel
Liste der Veröffentlichungen in der Fachpresse mit externem Link, Sidebar „Presseanfragen“.
Dateien: `src/pages/fachartikel/`, `src/content/essays/` · Roadmap: `specs/roadmap-essays.md`

### Profil- und Rechtsseiten
Christian Maaß, Beirat, Bücher, Lehre, Kontakt, Impressum, Datenschutz, Barrierefreiheit, 404.
Dateien: `src/pages/*.astro`

## Modelle und Bausteine
Je Aufgabe genau **ein** Baustein. Zwei Einträge für dieselbe Aufgabe = Befund für `/arch-fast`.

| Aufgabe | Regel in einem Satz | Baustein (Pfad) |
|---|---|---|
| UI-Texte | alle Texte über `getTranslations()` | `src/i18n/translations.ts` |
| Inhalte laden | nur veröffentlichte, sortiert, Slug geprüft | `src/utils/articles.ts`, `src/utils/essays.ts` |
| Seitenrahmen, Meta, CSP | ein Layout für alle Astro-Seiten | `src/layouts/BaseLayout.astro` |
| Strukturierte Daten | JSON-LD nur über die Builder | `src/utils/jsonLd.ts` |
| Zeit / Datum | Anzeige über einen Formatter | `src/utils/formatDate.ts` |
| Farben | nur Tokens, hell und dunkel in drei Blöcken | `public/styles.css` |

## Konfiguration, die nicht driften darf
| Wert | Soll | Wo deklariert | Prüfung |
|---|---|---|---|
| Domain | `christianmaass.com` | `public/CNAME`, `astro.config.mjs` (`site`) | Rauchtest prod |
| Node | 22 | `.nvmrc`, Workflows | Workflow-Datei lesen |

## Bekannte Lücken und Schuld
| Lücke | Folge für Nutzer | Herkunft (Skill, Spec/Commit) | Wo festgehalten |
|---|---|---|---|
| Keine Test-Suite | Regressionen fallen nur im Build oder im Browser-Nachweis auf | setup-fast | hier |
| `prettier --check` scheitert an 6 Dateien, viele weitere unformatiert; CI prüft Format nicht | keine; Pflegeaufwand | setup-fast | `specs/produkt.md` → Als Nächstes 2 |
| `npm audit` meldet `astro`/`devalue` | gering — statischer Build, kein Server | setup-fast | `specs/produkt.md` → Als Nächstes 3 |
| Seite nennt ihren Commit nicht | Live-Prüfung kann den ausgelieferten Stand nicht belegen | setup-fast | `specs/produkt.md` → Als Nächstes 1 |
| Security-Header aus `public/_headers` wirken auf GitHub Pages nicht | nur die `<meta>`-CSP schützt | setup-fast, aus `docs/INFRA-CLOUDFLARE.md` | `docs/INFRA-CLOUDFLARE.md` |
| Branch-Protection auf `main` fehlt | jeder Merge braucht ein go (kein Auto-Merge) | setup-fast | hier |

## Letzter Architektur-Check
Noch keiner · Features seitdem: 0

## Verlauf
| Datum | Was | Spec / Commit | Version |
|---|---|---|---|
