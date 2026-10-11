# christianmaass.com

Persönliche Website von Christian Maaß — Managing Director & CDO bei Thomann, Aufsichts- und Beiratsrollen, Autor. Statisch generiert mit Astro, deutschsprachig, deployt auf GitHub Pages.

## Tech-Stack

- **Astro 6** (statisches Rendering, Content Collections)
- **TypeScript** (strict), CSS Custom Properties
- **Design-System** in `public/styles.css`: Bricolage Grotesque (Display), IBM Plex Sans (Text), IBM Plex Mono (Eyebrows, Chips, Meta), self-hosted in `public/fonts/`; helles und dunkles Theme über `prefers-color-scheme`
- **astro:assets** (Sharp, WebP-Optimierung)
- **GitHub Actions** CI/CD → `gh-pages` Branch → GitHub Pages
- **ESLint + Prettier + Husky** (Pre-Commit lint-staged)
- **Lighthouse CI** mit Performance-/A11y-/SEO-Budget

## Setup

```bash
npm install
npm run dev          # Dev-Server auf http://localhost:4321 (Drafts werden gezeigt)
npm run build        # Produktions-Build nach ./dist
npm run preview      # Lokaler Preview des Builds
npm run check        # astro check (TypeScript + Content-Schemas)
npm run lint         # ESLint über das gesamte Repo
npm run format       # Prettier formatiert das Repo
```

## Deploy

Auto-Deploy via GitHub Actions: jeder Push auf `main` triggert `.github/workflows/deploy.yml`, das `astro check` und `build` ausführt und das `dist/`-Verzeichnis auf den `gh-pages`-Branch pusht. GitHub Pages liest von dort und serviert unter christianmaass.com.

Manueller Deploy als Fallback: `npm run deploy`.

## Inhalt schreiben

Siehe [`docs/CONTENT.md`](docs/CONTENT.md) für Frontmatter-Templates, Bildanforderungen, Tonalität, Draft-Workflow und SEO-Checklist.

## Projektstruktur

```
src/
├── assets/              # Optimierungspflichtige Bilder (via <Image>)
├── components/          # UI-Komponenten (Header, Footer, Breadcrumb)
│   └── article/         # Article-spezifisch (Row, Pagination, Sidebar)
├── content/             # Content-Collections (articles, essays) mit Zod-Schemas
├── i18n/                # Übersetzungen + getTranslations() (single locale)
├── layouts/             # BaseLayout mit FOUC-Theme-Init + Meta-Tags
├── pages/               # Routen (de-only)
│   ├── blog/            # Übersicht + Detail
│   └── fachartikel/     # Essays-Listing
└── utils/               # config, jsonLd, articles, essays, formatDate

public/                  # Statische Assets (Originale für OG/JSON-LD-URLs)
docs/                    # Audits, Roadmaps, CONTENT-Guide
```

## Konventionen

- **Sprache**: Code (Komponenten, Utilities, Variablen) auf Englisch. UI-Texte über `src/i18n/translations.ts` auf Deutsch. Routen auf Deutsch (matched mit den URLs).
- **CSS-Klassen**: kebab-case. Komponenten-scoped Klassen folgen `<component>-<element>`. Seitenspezifische Klassen, die an einer Route hängen, dürfen den Route-Slug als Prefix verwenden (z.B. `.beirat-section`, `.fachartikel-img` — das ist Absicht, nicht Inkonsistenz).
- **Spacing**: ausschließlich Tokens (`--space-1` bis `--space-7`); keine Magic-Pixel im CSS.
- **Farben**: ausschließlich Tokens (`--color-*`), jeweils mit Light- und Dark-Wert. Akzent `--color-accent` (Teal) mit `--color-accent-soft` für Flächen und Chips; `--color-signal` (Orange) nur sparsam für einzelne Hervorhebungen. Hardcoded Hex/rgba sind reserviert für theme-unabhängige Bereiche (`--color-media-bg` als weiße Kachel für externe Logos).
- **Themes**: `:root` ist hell. Dunkel greift über `@media (prefers-color-scheme: dark)` und lässt sich per `data-theme="dark"`/`"light"` am `<html>` übersteuern. Neue Farb-Tokens immer in allen drei Blöcken pflegen. Bilder, die nur auf hellem Grund funktionieren, bekommen eine `--color-media-bg`-Kachel oder per `<picture>` eine Dark-Variante (siehe Thomann-Logo im Footer).
- **Typografie & Formen**: Headings in `--font-family-display` mit `--weight-display` (H1/H2) bzw. `--weight-semibold` (H3). Eyebrows, Navigation und Meta-Zeilen in `--font-family-mono`, uppercase, `--letter-spacing-eyebrow`. Karten: `--color-bg-elevated` + 1px `--color-border-subtle` + `--radius-md`, ohne Schatten. Buttons/Chips: `--radius-pill`. Fertige Muster: `.eyebrow`, `.card-soft` (`--accent`), `.chip`, `.stats`/`.stat`.
- **JSON-LD**: Über `src/utils/jsonLd.ts` (Person-/WebPage-/Article-Builder) erzeugen, um E-E-A-T-Konsistenz sicherzustellen. Einmalige Schema-Blöcke (Index-`@graph`) dürfen direkt im Page-Frontmatter bleiben.
- **Commits**: Conventional Commits (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, `perf:`, `content:`).

## SEO + GEO

- JSON-LD breit ausgebaut (Person, WebPage, BlogPosting, Article, BreadcrumbList, Speakable).
- `public/llms.txt` (llmstxt.org-Spec) und `public/robots.txt` mit expliziter AI-Crawler-Allowlist.
- Auto-Sitemap via `@astrojs/sitemap`, RSS via `@astrojs/rss` für den Blog.

## Audit-Historie

Audits, Roadmaps und Entscheidungs-Notizen unter `docs/audits/` und `docs/roadmap/`. Aktueller CTO-Audit-Plan: siehe `~/.claude/plans/auf-der-seite-b-cher-sleepy-frost.md` (außerhalb des Repos).
