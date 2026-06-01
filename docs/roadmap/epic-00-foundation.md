# Epic 00 — Foundation

> **Status:** 🔄 In Progress
> **Aufwand:** XS (1–2 h)
> **Abhängigkeiten:** keine
> **Blockiert:** Epic 01 (sollte auf gemeinsamer Grundlage starten)

## Ziel

Designneutrale technische Grundlagen schaffen, **bevor** der Redesign beginnt — damit Code-Reviews lesbar bleiben, Tippfehler früh auffallen und Node-Versionen nicht driften. Kein Eingriff in Komponenten, kein Eingriff in Tokens.

## Scope

### 1. Node-Version pinnen — `.nvmrc`

```
22.16.0
```

- Aktuell lokal installiert: Node 22.16.0 (`node --version`)
- Verhindert Drift zwischen Maschinen / CI / GitHub Pages Deploy
- `nvm use` reicht dann lokal

### 2. `astro check` für Type-Safety in `.astro`-Dateien

- `tsconfig.json` existiert bereits mit `astro/tsconfigs/strict` ✓ (kein Änderungsbedarf)
- Was fehlt: das Tool, das den Check durchführt + ein npm-Script

**DevDeps:**
- `@astrojs/check` (Astro-Type-Checker)
- `typescript` (Peer-Dependency)

**Neues Script in `package.json`:**
```json
"check": "astro check"
```

Damit lässt sich vor jedem Commit / PR per `npm run check` prüfen, ob `.astro`-Dateien typkorrekt sind. Findet z. B. `undefined`-Zugriffe in Frontmatter, falsche Prop-Typen, fehlerhafte `t.pages.x.y`-Pfade gegen `translations.ts`.

### 3. Prettier — konsistente Formatierung

**DevDeps:**
- `prettier`
- `prettier-plugin-astro` (für `.astro`-Files)

**Config: `.prettierrc.mjs`**
```js
/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
};
```

**Ignore: `.prettierignore`** — Binär-/Generated-/Vendor-Pfade

**Scripts:**
```json
"format": "prettier --write .",
"format:check": "prettier --check ."
```

### Bewusste Entscheidung: nicht jetzt formatieren

Den bestehenden Code **nicht** mit `prettier --write .` umformatieren. Würde einen riesigen Formatierungs-Diff erzeugen, der die Design-Diffs in den späteren Epics überlagert.

Stattdessen: Prettier-Config liegt bereit, Editor-Integrationen formatieren neu geschriebenen Code, eine globale Normalisierung erfolgt **erst nach Epic 05**, in einem separaten "chore: prettier baseline"-Commit.

## Out of Scope

- ESLint — Astro hat eigenen Check via `astro check`; ESLint zusätzlich bringt für dieses Projekt aktuell zu wenig Mehrwert
- CI / GitHub Actions — sinnvoll nach Epic 01 (erster PR-Workflow), nicht jetzt
- Pre-Commit-Hooks (Husky/lefthook) — kann später nachgereicht werden
- Migration `public/*.png` → `src/assets/` mit `astro:assets` — eigene Aufgabe nach Epic 04, abhängig von der finalen Bildauswahl
- Codebase-weites `prettier --write` (siehe oben)

## Akzeptanzkriterien

- [x] `.nvmrc` mit `22.16.0`
- [x] `@astrojs/check` + `typescript` als devDependencies
- [x] `npm run check` läuft (auch wenn er heute Fehler meldet — wir wollen erstmal sehen, ob er greift)
- [x] `prettier` + `prettier-plugin-astro` als devDependencies
- [x] `.prettierrc.mjs` und `.prettierignore` vorhanden
- [x] `npm run format:check` läuft technisch (Ergebnis darf rot sein — wir formatieren nicht jetzt)
- [x] `package.json` enthält `check`, `format`, `format:check` Scripts

## Verifikation

```bash
nvm use                  # liest .nvmrc
npm install              # installiert neue devDeps
npm run check            # führt astro check aus
npm run format:check     # zeigt, welche Files Prettier umformatieren würde (informativ)
```

## Hinweis zum Working Tree

Vor Epic 00 ist das Working Directory voll von uncommittetem In-Progress-Stand (modifizierte Configs, Layout, Pages, viele neue Files). Empfehlung: vor dem ersten Epic-01-PR einen sauberen Snapshot-Commit machen, der den aktuellen Stand festhält ("WIP: Stand vor Dark-Redesign"). Sonst wird der erste Epic-PR unleserlich groß. Diese Aufgabe gehört nicht ins Epic 00 — sie wird vom Nutzer manuell gemacht, da Entscheidung über Commit-Splits beim Nutzer liegt.
