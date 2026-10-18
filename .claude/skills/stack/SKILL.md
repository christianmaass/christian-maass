---
name: stack
description: Technik von christianmaass.com — lesen vor jeder Arbeit an Code, Tests, Release
---

# stack — christianmaass.com

Statische, deutschsprachige Website mit Astro 6, ausgeliefert über GitHub Pages (Branch `gh-pages`). Keine
Datenbank, keine Konten, keine Server-Logik. Details zur Architektur: `CLAUDE.md`.

## Betrieb

- Betrieb: `public-web` · Mini-Pfade: `src/content/`, `docs/`, `public/og/`, `public/essays/`
- Profil: web

## Befehle

| Zweck                                                             | Befehl                                                                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `check` (Pflicht vor jedem Commit; wie PR-Check der CI plus lint) | `npm run check:all`                                                                                         |
| `test:unit`, `test:flow`, `test:repeat`                           | entfallen — keine Test-Suite; Verhalten prüft der Browser-Nachweis (unten)                                  |
| `audit`                                                           | `npm run audit`                                                                                             |
| `secret-scan`                                                     | `npm run secret-scan`                                                                                       |
| start / build / preview                                           | `npm run dev` (Port 4321) · `npm run build` · `npm run preview` (Port 4321, gebaute Seite)                  |
| Browser-Nachweis (`browser`)                                      | `npm run build && npm run preview`, dann die betroffenen Seiten in 390 und 1280 px, hell und dunkel ansehen |
| deploy                                                            | Merge auf `main` (Workflow `deploy.yml`); Notweg `npm run deploy` nur mit go (G5)                           |

## Umgebungsprüfung

- Node laut `.nvmrc` (22.16.0); Port 4321 frei.

## Release-Weg

- Merge auf `main` = prod-Deploy: **ja** (`.github/workflows/deploy.yml` baut und schiebt `dist/` nach `gh-pages`).
- Migrationsordner: keiner.
- ohne Deploy: `specs/`, `docs/`, `CHANGELOG.md`, `README.md`, `CLAUDE.md`
- Deploy prüfen: `gh run list --workflow deploy.yml --commit <sha> --json status,conclusion --jq '.[0]'` → `completed`/`success`
- Rauchtest prod: `curl -fsS "https://christianmaass.com/?v=<sha>" | grep -q '<h1'` und dasselbe für `/blog/` und `/fachartikel/`
- Version live prüfen: `for i in $(seq 20); do curl -fsS "https://christianmaass.com/?v=<sha>" | grep -q 'name="version" content="<sha>"' && break; sleep 30; done` — bis 10 min, weil Pages nach dem Deploy-Lauf separat ausliefert; der Query-Parameter umgeht den CDN-Cache
- Rollback: vorigen Tag neu ausliefern — `gh workflow run deploy.yml --ref v<vorige>` (G5; nimmt nur Tag oder Branch, keinen sha), danach erneut live prüfen; ohne Tag oder dauerhaft: Revert-PR

## Konfiguration/Drift

Einzige Einstellung außerhalb des Repos: Branch-Protection auf `main` (Pflicht-Check `check`, auch für Admins) und Auto-Merge an — lesend prüfen mit `gh api repos/christianmaass/christian-maass/branches/main/protection`.
Lighthouse läuft bei PRs nicht, wenn nur Mini-Pfade oder Pfade „ohne Deploy“ geändert sind; auf `main` immer. `public/CNAME` (Domain) und `astro.config.mjs` (`site`, `trailingSlash`) liegen im Repo.
Security-Header aus `public/_headers` wirken auf GitHub Pages nicht (nur die `<meta>`-CSP) — `docs/INFRA-CLOUDFLARE.md`.

## Architekturregeln

- UI-Texte nur in `src/i18n/translations.ts`, Zugriff über `getTranslations()`.
- Collections nur über `getPublishedArticles()`/`getPublishedEssays()` laden.
- Farben nur über Tokens; neue Tokens in allen drei Blöcken (hell, dunkel per Media-Query, dunkel per `data-theme`).
- Keine externen Skripte, Fonts oder Styles (CSP `'self'`).
- Links und Canonicals enden mit `/` (`trailingSlash: 'always'`).

## Testkonventionen

- Keine Test-Suite; Nachweis je Änderung: `check` und Browser-Nachweis der betroffenen Seiten.

## Entscheidungen

- GitHub Pages statt Proxy/Edge — kostenlos und ausreichend; Grenzen in `docs/INFRA-CLOUDFLARE.md`.
- Kein CMS — Inhalte als Markdown im Repo.

## Fallstricke

Format: „Datum — Symptom → Ursache → Regel“.
