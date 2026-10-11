# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Persönliche Website christianmaass.com: statisch generiert mit Astro 6, deutschsprachig, gehostet auf GitHub Pages.

## Befehle

Node-Version laut `.nvmrc`: 22.16.0 (CI nutzt Node 22).

```bash
npm run dev       # Dev-Server auf http://localhost:4321, zeigt auch Drafts
npm run build     # Produktions-Build nach ./dist, Drafts werden ausgeblendet
npm run preview   # den Build lokal ausliefern
npm run check     # astro check: TypeScript + Zod-Schemas der Content-Collections
npm run lint      # ESLint
npm run format    # Prettier
```

Es gibt keine Test-Suite. Prüfen lässt sich eine Änderung mit `npm run check && npm run build`; genau das laufen PR-Check und Deploy in CI. Der Pre-Commit-Hook (Husky + lint-staged) führt `eslint --fix` und `prettier --write` auf den gestagten Dateien aus.

## Deploy

Jeder Push auf `main` startet `.github/workflows/deploy.yml` (check → build → `dist/` auf den Branch `gh-pages`). Lighthouse CI (`lighthouserc.json`) prüft die Hauptseiten; bei Accessibility und SEO führt ein Score unter 0.95 zum Fehler. Manueller Fallback: `npm run deploy`.

## Architektur

- **Content Collections** (`src/content.config.ts`): Es gibt zwei Collections. `articles` (Blog, gerendert unter `/blog/<slug>/`) und `essays` (Fachartikel: nur Listing-Einträge unter `/fachartikel/`, die per `externalUrl` auf externe Publikationen verlinken; es gibt keine eigene Detailseite). Ein ungültiges Frontmatter lässt den Build scheitern. Frontmatter-Vorlagen, Bildmaße, Tonalität und SEO-Checkliste stehen in `docs/CONTENT.md`.
- **Slugs**: Dateinamen folgen dem Muster `YYYY-MM-DD-slug.md`. `src/utils/articles.ts` bzw. `essays.ts` entfernen das Datums-Präfix und werfen einen Fehler, wenn der Slug rein numerisch ist, denn das würde mit Pagination-Routen wie `/blog/2/` kollidieren. Collections immer über `getPublishedArticles()`/`getPublishedEssays()` laden: Diese filtern Drafts nur im Produktions-Build, sortieren nach Datum und validieren die Slugs.
- **Pagination-Routen**: `src/pages/blog/[...page].astro` und `src/pages/fachartikel/[...page].astro`; die Detailseite liegt in `src/pages/blog/[slug].astro`, der RSS-Feed in `blog/rss.xml.ts`.
- **Layout**: `src/layouts/BaseLayout.astro` setzt Meta- und OG-Tags, die CSP (nur `'self'`, also keine externen Skripte, Fonts oder Styles), Font-Preloads und bindet Header, Footer und Breadcrumb ein.
- **Styles**: Die globalen Design-Tokens und Styles liegen in `public/styles.css` (wird per `<link>` geladen, nicht über die Astro-Pipeline). Self-hosted Fonts liegen in `public/fonts/`, das Burger-Menü ist ein Inline-Skript in `public/js/burger-menu.js`.
- **UI-Texte**: alle Texte in `src/i18n/translations.ts` (typisiertes `Translations`-Interface), Zugriff über `getTranslations()`. Es gibt nur eine Locale; das Interface muss trotzdem bei jedem neuen Text erweitert werden.
- **SEO**: JSON-LD über die Builder in `src/utils/jsonLd.ts` erzeugen. `SITE_URL` steht in `src/utils/config.ts`. Prioritäten und Ausschlüsse der Sitemap pflegt `astro.config.mjs`; neue Top-Level-Seiten dort im `serialize` einordnen. Daneben gibt es `public/llms.txt` und `public/robots.txt` (Allowlist für AI-Crawler).
- **Bilder**: Brand-Assets in `src/assets/` laufen durch `astro:assets`/`<Image>`. OG- und Schema-Bilder brauchen stabile URLs und liegen deshalb in `public/` (`public/og/`, `public/essays/`).
- **Nicht-öffentliche Präsentationen**: `public/thomann/`, `public/ecommerce/` und `public/ehi2026/` sind eigenständige statische HTML-Foliensätze mit eigenen Inline-Styles; sie laufen nicht über Astro. Sie sind `noindex` und in `astro.config.mjs` aus der Sitemap ausgeschlossen. Ein Großteil der jüngeren Commits betrifft diese Folien.

## Konventionen

- Code und Bezeichner auf Englisch, UI-Texte und Routen auf Deutsch.
- CSS: Klassen in kebab-case, Muster `<component>-<element>`. Seitenspezifische Klassen dürfen den Route-Slug als Präfix tragen (z. B. `.beirat-section`); das ist Absicht.
- Abstände ausschließlich über die Tokens `--space-1` bis `--space-7`, Farben ausschließlich über `--color-*`. Hartcodierte Farben nur in theme-unabhängigen Bereichen (z. B. `--color-media-bg`).
- Commits nach Conventional Commits: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, `perf:` sowie `content:` für Inhaltsänderungen.
- Im Markdown-Body von Beiträgen keine H1 verwenden; `title` wird als H1 gerendert.
