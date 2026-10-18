# christianmaass.com — Produkt

**Ziel:** Die persönliche Website zeigt, wer Dr. Christian Maaß ist und wofür er steht, und führt Interessierte
zu Texten, Lehre, Beiratsarbeit und Kontakt.

**Nutzer:** Entscheider, Redaktionen und Veranstalter, Studierende, Leser der Fachartikel.

**Problem und Nutzen:** Wer Christian Maaß sucht, findet an einer Stelle eine aktuelle, schnelle und gut
auffindbare Übersicht mit eigenen Beiträgen und Veröffentlichungen in der Fachpresse.

Regeln und Nicht-Ziele: `specs/constitution.md` · Stand: `specs/stand.md` · Technik: Skill `stack`.

## Kernabläufe

1. Startseite → Profil, Schwerpunkte, neueste Blog-Beiträge.
2. Blog: Übersicht mit Seiten (`/blog/`) → Beitrag (`/blog/<slug>/`) → teilen.
3. Fachartikel: Liste (`/fachartikel/`) → externer Artikel; Presseanfragen.
4. Kontakt, Impressum, Datenschutz, Barrierefreiheit.

## Datenschutz

- Die Seite speichert keine Daten von Besuchern, setzt keine Cookies, lädt nichts von Dritten (CSP `'self'`).
- Kontakt per E-Mail-Link; Teilen-Links öffnen die jeweiligen Dienste erst auf Klick.
- Hosting: GitHub Pages (Server-Logs bei GitHub).

## Als Nächstes

Details der umgesetzten Epics: `specs/roadmap.md` (Blog, E10–E17) und `specs/roadmap-essays.md` (E18–E20).
Hier nur Reihenfolge und Horizont — oben zuerst.

1. Versionskennung im HTML — Live-Prüfung kann den ausgelieferten Stand belegen · Horizont: jetzt · in Arbeit
2. Formatierung: 6 Dateien, die Prettier nicht verarbeiten kann, dann `format:check` in die CI · Horizont: als nächstes
3. Abhängigkeiten: `npm audit` meldet `astro`/`devalue` · Horizont: als nächstes
4. E19 — Bilder für die Fachartikel (ausstehend laut `specs/roadmap-essays.md`) · Horizont: später
5. E17 — Lighthouse-Prüfung von Hand · Horizont: später
