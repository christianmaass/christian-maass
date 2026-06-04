# Infra-Optionen: Cloudflare als Proxy vor GitHub Pages

## Status quo

- Hosting: GitHub Pages, Source `gh-pages`-Branch.
- DNS: `christianmaass.com` → GitHub Pages über A/AAAA-Records.
- TLS: Auto-zertifiziert via Let's Encrypt durch GitHub.
- Header: `public/_headers` enthält strikte Security-Header (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSP). **GitHub Pages liest die Datei nicht** — die Header sind nur als `<meta>`-Tags in der HTML wirksam.

## Warum überhaupt einen Proxy?

Drei konkrete Lücken adressiert ein Proxy:

1. **HTTP-Security-Header**. `_headers` wird auf Netlify/Cloudflare-Pages/Vercel ausgewertet, auf GitHub Pages nicht. Header haben HTTP-höhere Priorität als HTML-Meta-CSPs.
2. **301-Redirects**. Auf GitHub Pages keine Server-side-Redirects möglich. Konkretes Problem: alte `/en/*`-URLs (vor EN-Removal in Suchindex) liefern jetzt 404 statt sauber auf `/` zu redirecten — Linkjuice und Indexierung leiden.
3. **CSP-Nonces**. Aktuell `script-src 'self' 'unsafe-inline'` wegen FOUC-Theme-Init und JSON-LD-Inline. Mit einem Edge-Worker können pro Request Nonces injiziert und `unsafe-inline` entfernt werden — striktere CSP, geringeres XSS-Risiko.

Weitere Soft-Vorteile: globaler CDN-Cache, Brotli/Zstd-Kompression, Bot-Mitigation, Analytics ohne Tracker.

## Cloudflare-Free reicht

Für den Use-Case (statische Site, niedrige Latenz, Header-Kontrolle) ist der Cloudflare-Free-Plan ausreichend. Workers für CSP-Nonces wären optional und im Free-Plan 100k Requests/Tag inkludiert.

## Migrationsskizze (eine Stunde Arbeit)

1. **Cloudflare-Account anlegen**, Domain `christianmaass.com` adden, NS-Records bei der Domain-Registrar auf die zugewiesenen Cloudflare-NS umstellen.
2. **DNS-Records in Cloudflare anlegen**: `A`/`AAAA` zeigen weiter auf die GitHub-Pages-IPs (185.199.108-111.153), Proxy-Modus „Proxied (Cloud orange)".
3. **SSL/TLS-Mode** auf `Full (strict)` setzen — Cloudflare validiert das Let's-Encrypt-Zertifikat von GitHub.
4. **Page Rules / Transform Rules / Rules → Redirect Rules** für die alten EN-Pfade:
   ```
   If URL Path starts with "/en/"
   Then 301 redirect to https://christianmaass.com/
   ```
5. **Transform Rules → Modify Response Header** mit dem Inhalt aus `public/_headers` (HSTS, X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy, Permissions-Policy, CSP).
6. **Workers (optional)**: Edge-Worker, der die HTML pro Request mit einem Random-Nonce versieht und `script-src 'self' 'nonce-{NONCE}'` setzt. Inline-Scripts bekommen `nonce={NONCE}`-Attribut. Zeitaufwand: zwei Stunden initial.
7. **Cloudflare Analytics** aktivieren (privacy-first, kein Cookie-Banner-Bedarf).

## Rückbau-Path

Falls Cloudflare Probleme macht: NS-Records am Registrar zurück auf GitHub-Default, Cloudflare-Account behalten. Kein Lock-in.

## Entscheidung

**Aktuell aufgeschoben.** Sinn ergibt es, sobald entweder:

- alte EN-URLs in der Search Console messbar 404s werfen (Indexierungs-Verlust), **oder**
- ein konkreter Security-Vorfall die `unsafe-inline`-Lücke akut macht, **oder**
- gewünscht ist, ohne Tracker brauchbare Web-Analytics zu sehen.

Bis dahin bleibt die Site direkt auf GitHub Pages — schlank und reicht.

## Verwandte Stellen im Repo

- `public/_headers` — der Header-Block, der bei Proxy-Migration übernommen würde.
- `src/layouts/BaseLayout.astro` (Zeile 49) — die `<meta>`-CSP, die heute die einzige wirksame Sicherheitspolitik ist.
- `astro.config.mjs` — `site: 'https://christianmaass.com'`, wäre für Cloudflare-Setup unverändert.
