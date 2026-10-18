# Constitution — christianmaass.com

Seit: 2026-10-18

Allgemeine Engineering-Prinzipien gelten ohnehin (`~/.claude/skills/dev-fast/references/prinzipien.md`); hier nur,
was diese Seite darüber hinaus festlegt.

## Grundsätze
| # | Grundsatz | Warum |
|---|---|---|
| P1 | **Jede Seite ist ohne JavaScript lesbar und lädt nichts von Dritten.** | Datenschutz ohne Banner, CSP `'self'`. (Vorschlag) |
| P2 | **Lighthouse Accessibility und SEO ≥ 0,95 auf den Hauptseiten.** | Steht so in `lighthouserc.json`; Auffindbarkeit ist der Zweck der Seite. (Vorschlag) |
| P3 | **Kleine Inhaltsänderungen gehen am selben Tag live.** | Eine Website, die hinterherhinkt, wirkt veraltet. (Vorschlag) |

## MVP
**Umfang:** erreicht — Startseite, Blog mit Übersicht und Detailseiten, Fachartikel-Liste, Profilseiten, Rechtliches.
**Fertig, wenn:** erledigt; weitere Arbeit folgt „Als Nächstes“ in `specs/produkt.md`.

| Erfolgskriterium | Zielwert | Zeitraum | Wie gemessen |
|---|---|---|---|
| Durchlaufzeit je Spec | ≤ 1 h | 4–8 Wochen ab 2026-10-18 | Coach `leadTimeHours` (Vorschlag) |
| Fehler nach Release | 0 | 4–8 Wochen | `specs/fast/kennzahlen.md` (Vorschlag) |

## Riskanteste Annahmen
| Annahme | Wenn falsch, dann … | Testweg | Ergebnis |
|---|---|---|---|
| Der Deploy über GitHub Pages ist nach ≤ 10 min sichtbar | Live-Prüfung meldet den alten Stand | Versionskennung im HTML, Abfrage mit Query-Parameter | offen |

## Nicht-Ziele
- Kein CMS, keine Konten, keine Kommentare (Pflege im Repo reicht)
- Keine Tracker und keine Inhalte von Dritten

## Definition of Done
Gilt für jede Änderung.
| Bereich | Kriterium | Geprüft von |
|---|---|---|
| Funktion | Jedes AC mit Prüfweg „auto“ hat einen Nachweis (`check` oder Browser) | dev-fast |
| Regression | `check` aus `stack` läuft durch | dev-fast, CI |
| Darstellung | Browser-Nachweis der betroffenen Seiten in 390 und 1280 px, hell und dunkel | dev-fast (`browser`) |
| Sicherheit | `audit` und `secret-scan` laufen durch | release-fast |
| Live | Version live = ausgelieferter Commit, Rauchtest grün | release-fast (`live … ok`) |

## Änderungen
| Datum | Änderung | Warum |
|---|---|---|
