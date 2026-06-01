# UX-, Branding- & Headhunter-Audit aus drei Perspektiven

**christianmaass.com · Stand 2026-05-31**

Dieser Audit ist eine **reine Diagnose**. Drei Personas (UX-/Branding-Spezialist, Headhunter, Product Owner) beschreiben ihre Wahrnehmung in Ich-Form, qualitativ, ohne Empfehlungen. Die Therapie kommt in einer separaten Session. Belegmaterial: 14 Screenshots in `docs/audits/screenshots/2026-05-31/`.

---

## Executive Summary

Die Seite trägt eine **starke verbale Marke** – „Synchron, oder es wird teuer.", die Triade „Strategie. Technologie. Organisation.", die drei Säulen, das Bekenntnis „Manager, nicht Berater". Diese Sprache ist scharf, eigenständig, merkbar. Aber sie steht in einem **visuellen Vakuum**: es gibt kein erkennbares Design-System, keine konsistente Bildsprache, keinen sichtbaren Christian Maaß als Person. Die Profil-Seite – das Herzstück einer Personal Brand – hat **kein Foto**, sondern fünf Textwüsten untereinander. Der Hero auf der Home zeigt ein unvorteilhaft zugeschnittenes Foto. Die Komponenten variieren von Seite zu Seite ohne erkennbares System. Die Header-Navigation hat fünf Einträge, der Footer sieben, mit teilweise abweichender Benennung („Beirat & Verbandsarbeit" vs. „Beiratstätigkeit"). Auf Mobile ist die Profilseite eine Endlos-Rolle, auf Beirat sprengt das BEVH-Logo das Card-Format.

**Die Antwort auf Christians Frage „Strahlt die Seite Executive Presence aus?" ist: Verbal ja, visuell nein.** Alle drei Personas kommen zur gleichen Diagnose mit unterschiedlichen Worten. Christians eigener Eindruck – „nicht klar strukturiert, nicht einheitlich, keine Executive Presence" – wird vom Audit **bestätigt**, mit der Präzisierung: das Problem ist nicht die Struktur des Inhalts (die ist seit Phase 1–3 sauber), sondern die **visuelle Inszenierung des Inhalts**.

---

## Persona 1 — UX-/Branding-Spezialist

*(Vivian, 14 Jahre als Brand-Designerin für Executive-Profile, Aufsichtsrats-Kommunikation, Verlags-Markenführung)*

Ich öffne `home-desktop.png` und denke zwei Sekunden: gut, klare Sprache, schöner Pointensatz. Dann fängt mein Blick an zu wandern, und er bleibt nirgends hängen. Das Hero-Foto rechts ist mein erster Reibungspunkt. Ein Mann auf einem dunklen Bildausschnitt, halb zugeschnitten, ohne klare Pose, ohne Augenkontakt – das wirkt nicht wie ein gewähltes Executive-Portrait, sondern wie ein Snapshot, der zufällig die richtige Dateigröße hatte. Bei einem Mann, der für „Executive Presence" ein eigenes Buch geschrieben hat, ist das eine fast schmerzhafte Inkonsistenz zwischen Versprechen und Beweis.

Dann scrolle ich weiter und merke: hier gibt es kein erkennbares **Design-System**. Ich sehe drei verschiedene Karten-Komponenten allein auf der Startseite – die Säulen-Boxen oben, die Fallbeispiel-Boxen unten, beide mit unterschiedlicher Behandlung von Whitespace und Trennlinien. Auf `buecher-desktop.png` taucht ein vierter Card-Typ auf (Buchcover links, Text rechts), auf `beirat-desktop.png` ein fünfter (Logo plus Bullet-Liste plus Zwischenbild), auf `kontakt-desktop.png` ein sechster (Pastel-Box mit Mailto-Link). Es gibt also nicht ein Designsystem mit Varianten, sondern sechs unterschiedliche Layout-Erfindungen für sechs Inhalts-Typen. Das ist nicht falsch, es ist nur nicht **diszipliniert**. Eine starke Marke hat zwei, vielleicht drei Komponenten – und benutzt sie überall. Hier sehe ich Patchwork.

Typografisch ist Montserrat 300/400/700 eine vernünftige Wahl – nüchtern, klar, ohne Geschmacks-Statement. Aber die Hierarchie ist nicht konsequent. Auf der Home steht die H1 in `2.6rem`, auf der Profil-Seite in `2.5rem`, auf der Perspektiven-Seite und auf der Kontakt-Seite ebenfalls in `2.5rem`, im Hero anderer Seiten wieder in `2.2rem` (siehe `public/styles.css`). Das sind die Reste mehrerer Iterationen, die nebeneinander stehen geblieben sind. Ein Leser bemerkt das nicht bewusst, aber sein Gehirn registriert: hier hat niemand das Skalierungs-Raster verteidigt.

Mein größtes Problem ist die **Profilseite** (`profile-desktop.png`). Ich öffne sie, sehe „Manager, nicht Berater." – starker Satz – und darunter folgen **sechs Textblöcke ohne ein einziges visuelles Element**. Kein Foto, keine Grafik, keine Zwischen-Komponente, keine Zitat-Box. Das ist eine Wikipedia-Seite, kein Profil. Bei einem Executive auf C-Level erwarte ich auf der Profilseite mindestens drei Dinge: ein professionelles Porträt, das Vertrauen aufbaut; eine visuelle Struktur, die Lese-Disziplin signalisiert; und einen ästhetischen Standard, der zum Auftreten passt. Hier finde ich nichts davon. Die Tonalität der Texte ist gut, aber sie ertrinken in einer typografischen Monotonie.

Die **Bildsprache** insgesamt ist ein Vakuum. Auf der Beirat-Seite (`beirat-desktop.png`) sind die Mandate mit Logo-Grafiken bestückt – und zwischen Logo und Text taucht plötzlich ein zugeschnittenes Symbol-Bild auf (sieht aus wie ein abgeschnittenes Mobilgerät bei Optilyz, ein Aufkleber bei WIRmachenDRUCK). Das wirkt wie ein nachträglich eingefügter Lückenfüller, nicht wie eine kuratierte Bildauswahl. Bei MDM ist es das Logo selbst, das in einer Box auf hellgrauem Verlauf schwebt – wieder anders. Ein Aufsichtsrat oder Headhunter, der das sieht, registriert: hier wurde Branding nicht zu Ende gedacht.

Die **Farbpalette** ist disziplinierter – ein dunkles Anthrazit-Petrol (`#012030`), ein neutrales Grau (`#5C7585`), ein helles Verlaufsgrau – nicht überzeichnet, kein „Berater-Lila", keine Akzentfarbe. Das ist gut, das passt zu einer seriösen Executive-Positionierung. Aber: die Restraint wird durch die uneinheitliche Anwendung wieder verspielt. Das Eyebrow-Label „WORÜBER ICH ARBEITE" / „WORAN ICH ES BEWIESEN HABE" / „VORTRAGSTHEMEN" ist eine schöne Idee – aber nicht überall konsistent eingesetzt.

Auf **Mobile** wird das Layout brüchig. Die Profilseite (`profile-mobile.png`) ist eine endlose Rolle von Texten ohne visuelle Pausen. Die Beirat-Mobile (`beirat-mobile.png`) zeigt das BEVH-Logo so groß, dass es das Card-Raster sprengt, während die anderen Logos in normaler Größe darunter sitzen. Das wirkt amateurhaft, weil keine Bildregeln definiert sind.

**Mein Resümee:** Die Seite hat eine **gute Stimme, aber kein Gesicht**. Die verbalen Markenelemente sind stark – „Synchronisation", die Triade, die drei Säulen, der Manager-vs.-Berater-Schnitt. Aber Executive Presence ist immer das Zusammenspiel von Wort und Bild, von Sprache und Inszenierung. Hier fehlt die zweite Hälfte fast komplett. Wenn ich gefragt würde: würde ich diese Seite einem CEO-Bekannten als Vorbild zeigen? Nein. Nicht weil die Substanz fehlt, sondern weil die Form sie nicht trägt.

---

## Persona 2 — Headhunter

*(Marc, 18 Jahre Executive Search, spezialisiert auf CDO-/COO-Mandate im DACH-Mittelstand und PE-Portfolio, eigener Boutique-Search-Partner mit fünfköpfigem Team)*

Ich bin Headhunter. Ich lande hier nicht zufällig. Ich habe Christian Maaß auf LinkedIn gesehen, er ist mir in einer Long-List für eine CDO-Suche aufgefallen, ich klicke auf den Website-Link in seinem Profil. Ich habe **90 Sekunden**. Was bleibt hängen?

**Sekunde 1–15.** Hero-Bereich. Ich lese „Synchron, oder es wird teuer." – ein guter Satz, der mich kurz lächeln lässt. Darunter ein klar formulierter Lead, der erklärt, was er meint. „Strategie, Technologie und Organisation laufen nicht synchron" – ja, das ist genau die Schmerz-Beschreibung, die viele meiner Klienten haben. Mini-Bio darunter: MD & CDO Thomann, BEVH-VP, Beirat, Autor, Dozent. Gute Stapelung. Ich sehe ein Foto, aber es bringt mir nichts – ein leicht abgewandter Mann, ich erkenne kein Gesicht. Für eine Headhunter-Long-List ist das ein Nachteil. Ich möchte sehen, mit wem ich es zu tun habe, bevor ich entscheide, ob ich weiterlese.

**Sekunde 15–30.** Ich scrolle. Drei Themen-Säulen tauchen auf. „KI im Operating, nicht im Marketing", „Die vergessenen Grundlagen", „Board-Perspektive auf Digital & KI". Das ist scharf. Nicht beliebig. Wenn ich an meine Klienten denke – Mittelstandsvorstände, die nach digitaler Verstärkung suchen – dann ist das genau das Vokabular, das sie hören wollen. Christian positioniert sich nicht als Cheerleader, sondern als jemand mit Meinung. Pluspunkt.

**Sekunde 30–60.** Drei Fallbeispiele: Thomann, OTTO, Vistaprint. Mit Jahreszahlen, Rolle, Kontext. Ich erkenne in zehn Sekunden: Skalierungsphasen, Plattform-Transformation, Cross-border-Portfolio. Drei verschiedene Archetypen, alle relevant. Das ist gut präsentiert. Ich klicke auf „Mehr im Profil →".

**Sekunde 60–90.** Profil-Seite. Hier verliere ich Aufmerksamkeit. Ich lese „Manager, nicht Berater" – noch ein guter Satz. Dann beginnt eine **Textwüste**. Drei Fallbeispiele detailliert ausgearbeitet (gut), dann „Plug-and-Play"-Erzählung (gut), dann „Werk", „Mandate"-Sektion, eine Call-to-Action-Box. Aber: ich sehe immer noch **kein Foto von Christian Maaß**. Ich lese seine Biografie, ohne ihn als Mensch erfasst zu haben. Für eine Suche, in der ich gleich entscheiden muss, ob ich anrufe oder weiterklicke, ist das ein echter Nachteil. Eine Profil-Seite einer C-Level-Person ohne Porträt ist im Executive-Search wie eine Bewerbung ohne Foto: ich kann sie lesen, aber sie hinterlässt keinen Eindruck.

Was finde ich an **Authority-Signalen**? BEVH-Vorstand ist drin (gut, das ist Drittquelle). Vier Bücher sind drin (sehr gut, das ist Substanz). Frankfurt-School-Lehre ist drin (gut). Die Beirats-Mandate sind erwähnt (gut). Wenn ich auf die Beirat-Seite gehe, sehe ich die Logos (BEVH, Optilyz, WIRmachenDRUCK, MDM) – das ist konkret. Plus die Stationen-Historie ist im Schema.org-Markup vollständig (Lycos, AutoScout24, OTTO, Bertelsmann, Flyeralarm, Vistaprint, Thomann). Das sind alles echte Beweise. Wenn ich den **30-Sekunden-Test** abarbeite:

- **Wer ist er?** MD & CDO Thomann, VP E-Commerce BEVH. ✓
- **Wofür steht er?** Synchronisation digitaler Geschäfte, „Manager, nicht Berater". ✓
- **Was hat er bewiesen?** Drei konkrete Stationen, vier Bücher, vier Mandate. ✓
- **Wie erreiche ich ihn?** Eigene Kontaktseite mit drei differenzierten Wegen (Beirat/Speaker/Medien), E-Mail, LinkedIn. ✓

Das ist – inhaltlich – **eine der saubereren persönlichen Executive-Seiten**, die ich in den letzten Jahren gesehen habe. Die meisten C-Level-Profile sind entweder Coaching-Marketing (zu offensiv) oder reine CV-Kopien (zu generisch). Hier ist eine Mitte erreicht, die selten ist.

**Wo sich für mich Friction zeigt**: 

Erstens, die fehlenden Fotos. Ohne Porträt bleibt er für mich eine Stimme, kein Gesicht. Wenn ich einen Kollegen frage „erinnerst du dich an Christian Maaß?", muss ich ihm den Namen ausbuchstabieren statt zu sagen „der mit dem charakteristischen Profil".

Zweitens, das **Vertrauenssignal der Seite selbst**. Eine Brand-Seite ist immer auch Beweis der eigenen Standards. Wenn ich auf der Beirat-Seite sehe, dass das BEVH-Logo das Card-Raster sprengt und die Optilyz-Mandatskarte ein zugeschnittenes Foto enthält, das aussieht wie versehentlich eingefügt, dann denke ich: das ist nicht End-to-End durchgezogen. Das ist menschlich, das ist verzeihlich, aber es subtrahiert Punkte beim ersten Eindruck.

Drittens, das **Profilbild-Problem auf der Profilseite**. Eine Profilseite ohne Foto ist eine vergebene Chance. Auf Mobile (`profile-mobile.png`) ist es noch krasser – fünf Textwüsten ohne ein einziges visuelles Anker-Element. Ich scrolle und scrolle, ohne dass mein Auge irgendwo Halt findet.

**Würde ich Christian für ein Top-Mandat einer namhaften Firma vorschlagen, basierend nur auf dieser Seite?**

**Ja, bedingt.** Inhaltlich ja – die Substanz, die Positionierung, die Mandate, die Publikationen, die Stationen tragen das. Aber ich würde meinem Klienten beim Vorstellungs-Brief explizit dazu sagen müssen: „Die Webseite zeigt nicht das Gesicht, also nicht überrascht sein, wenn die Person im Gespräch anders wirkt als die Marke." Das ist keine starke Verkaufs-Position. Eine Top-Seite hätte mein Vorab-Briefing schon zu 80 % erledigt; diese erledigt vielleicht 50 %.

---

## Persona 3 — Product Owner

*(Sara, 9 Jahre PO in B2B-SaaS, davor Content-Strategin, jetzt Beraterin für Conversion-Architektur bei Kunden mit langen Sales-Cycles)*

Ich gehe das wie einen User-Flow durch. Wer kommt hierher und was passiert?

**Eintritt 1: Google-Suche „Christian Maaß CDO".** Trifft die Home. Hero ist klar, drei Säulen sind klar, drei Fallbeispiele sind klar. Sehr gut. Die CTAs „Mein Profil" und „Kontakt" sind dezent, nicht aufdringlich, semantisch korrekt. Mein Mental Model nach Sekunde 10: das ist ein C-Level-Operator, der wahrscheinlich für Anfragen interessiert ist – aber nicht aggressiv verkauft.

**Eintritt 2: LinkedIn-Bio → Website.** Trifft die Home. Hier kommt schon ein erstes Problem: jemand, der mich auf LinkedIn schon gesehen hat, weiß bereits, dass ich MD & CDO Thomann bin. Was bekommt er **zusätzlich** auf der Website? Das wird mir in der Hero-Sektion nicht klar genug. Die Säulen helfen, die Fallbeispiele helfen. Aber der Hero selbst wiederholt die LinkedIn-Headline („MD & CDO Thomann · VP E-Commerce BEVH · Beirat · Autor · Dozent") statt zu sagen: „auf dieser Seite findest du, was nicht in mein LinkedIn-Profil passt".

**Eintritt 3: Headhunter, hat den Namen aus einer Long-List.** Trifft die Home, klickt sofort auf „Christian Maaß" (Header) für Profil. Profilseite öffnet sich. Hier liegt mein **größter Friction Point**. Die Profilseite ist eine wunderschön formulierte, aber funktional schwer scanbare Wall of Text. Auf Mobile (`profile-mobile.png`) zähle ich ungefähr sieben Bildschirmlängen, bis ich am Ende bin. Es gibt keine Zwischen-Visuals, keine Foto-Anker, keine inhaltlichen Highlights, die das Auge im F-Pattern auffangen. Mein Headhunter-Aufmerksamkeitsbudget hat 60 Sekunden auf der Seite – ich verbrauche es zu 80 % mit Scrollen, zu 20 % mit Lesen.

**Navigations-Architektur.** Hier habe ich ein klares Sauberkeits-Problem. Header: 5 Items (Startseite, Christian Maaß, Perspektiven, Bücher, Kontakt). Footer: 7 Items (zusätzlich Lehre, Beiratstätigkeit). Schon das ist eine Inkonsistenz, die mein Mental Model verwirrt. Schlimmer noch: im Header steht „Christian Maaß" als Link-Label für die Profil-Seite, im Footer steht ebenfalls „Christian Maaß", aber dann auch „Beiratstätigkeit", während die Seite selbst „Beirat & Verbandsarbeit" als Titel führt. Drei verschiedene Wörter für dieselbe Sache. Das ist eine UX-Wunde, klein aber sichtbar.

**CTAs.** Sind in Phase 2 schon gut bereinigt worden. Die Sackgasse auf der Lehre-Seite ist weg, die Kontakt-Seite hat klare differenzierte Mailto-Wege. Auf der Profilseite gibt es am Ende eine CTA-Box „Kontakt aufnehmen" – gut platziert, aber visuell nicht stark genug. Sie ist eine Pastel-Box mit einem hellgrauen Knopf, der sich nicht klar von den anderen Pastel-Boxen auf der Seite abhebt. Wenn ich konsequent denke: das ist der wichtigste CTA der ganzen Seite – die Bestätigung des Brand-Versprechens, jetzt aktiv werden – und er konkurriert visuell mit „Mein aktuelles Buch" im Footer, das dieselbe Aufmerksamkeitsklasse bekommt.

**Mobile UX.** Hier habe ich mehrere Detail-Probleme:

- Auf `home-mobile.png` verschwindet das Hero-Foto (gut, weil das Desktop-Bild eh nicht trägt), aber dann startet der Inhalt mit der Triade in Caps-Lock-Eyebrow direkt unter dem Header – das wirkt wie „mitten in den Inhalt geworfen", nicht wie ein begrüßender Hero.
- Auf `beirat-mobile.png` ist die BEVH-Card mit einem riesigen Logo das visuell dominante Element, während die drei anderen Mandate als kleinere Logo-Karten darunter wirken. Das vermittelt eine Hierarchie, die inhaltlich vielleicht nicht beabsichtigt ist (alle vier Mandate sind gleichberechtigt relevant).
- Auf `profile-mobile.png` und `buecher-mobile.png` ist die Textlänge bei mobilem Lesen erschlagend. Niemand liest auf dem Handy 700 Wörter am Stück.
- Touch-Targets bei den Mailto-Links auf der Kontakt-Seite sind okay (über 44px), aber visuell unscheinbar – sie sehen wie normaler Text aus, nicht wie tappable Elements.

**Content-Scannability.** Das ist die größte Diskrepanz: die Texte sind sehr gut geschrieben (pointiert, klare Sätze, gute Tonalität), aber für **Lesen** geschrieben, nicht für **Scannen**. Wenn ich als PO User-Tests mit dieser Seite machen würde, würde ich vermuten, dass die meisten Nutzer (besonders auf Mobile) nach 30 Sekunden weiterklicken, ohne den Kern der Botschaft mitgenommen zu haben. Die Hero auf der Home funktioniert, weil sie eine Pointensatz-Architektur hat. Die Unterseiten funktionieren nicht, weil sie zu Fließtext-lastig sind.

**Konsistenz von Patterns.** Ich zähle auf der Seite mindestens fünf verschiedene Card-Layouts, die alle leicht unterschiedlich aussehen. Auf der Home: Pillar-Cards mit Trennlinie unter dem H3, Fallbeispiel-Cards mit Untertitel-Italic. Auf Perspektiven: Pillar-Cards (anders, klickbar mit unterstrichenem H2), Artikel-Cards (eigene Pastel-Box). Auf Lehre: Säulen wieder anders. Auf Buecher: Buch-Detail-Box (Bild links, Text rechts). Auf Beirat: Logo-Karten mit Bullet-Listen plus rätselhaftem Zwischenbild. Auf Kontakt: Channel-Boxen mit Mailto. Das sind sechs unterschiedliche Komponenten für ein Sechs-Seiten-Site. Aus PO-Sicht ist das ein klares Symptom von **fehlendem Design-System**.

**Mein Fazit:** Funktional läuft die Seite. Die Information Architecture ist nachvollziehbar, die Conversion-Pfade sind nicht aktiv blockiert, die wichtigsten CTAs sind da. Aber die Seite ist nicht **gebaut für die Aufmerksamkeit, die sie bekommt**. Mein hypothetischer Headhunter-Besuch (60 Sekunden, Mobile) würde wahrscheinlich an der Profilseite scheitern – nicht weil der Inhalt schwach ist, sondern weil er nicht für 60-Sekunden-Konsum optimiert ist.

---

## Synthese — Gemeinsamer Nenner

Drei verschiedene Personas, drei verschiedene Sprachen, im Kern dieselbe Diagnose.

### Drei Wahrnehmungen, die alle teilen

**1. Das Foto-Problem.**
- Vivian (Brand): „kein Gesicht … wie ein Snapshot, der zufällig die richtige Dateigröße hatte"
- Marc (Headhunter): „ich kann sie lesen, aber sie hinterlässt keinen Eindruck"
- Sara (PO): „keine Zwischen-Visuals, keine Foto-Anker"

Alle drei kommen unabhängig zur Beobachtung, dass das Fehlen eines starken Porträts – besonders auf der Profilseite – das größte Einzelproblem ist. Die Profilseite einer Personal Brand ohne Foto ist wie eine Restaurant-Karte ohne Foto vom Chefkoch.

**2. Das Komponenten-Patchwork.**
- Vivian: „sechs unterschiedliche Layout-Erfindungen für sechs Inhalts-Typen … Patchwork"
- Marc: „nicht End-to-End durchgezogen … subtrahiert Punkte beim ersten Eindruck"
- Sara: „mindestens fünf verschiedene Card-Layouts … klares Symptom von fehlendem Design-System"

Alle drei sehen: die Komponenten sind pro Seite ad-hoc erfunden, nicht aus einem System abgeleitet. Das ist kein katastrophales Problem, aber es ist ein dauerhaftes Vertrauens-Subtraktions-Signal.

**3. Die Wall-of-Text auf den Unterseiten.**
- Vivian: „typografische Monotonie … Wikipedia, kein Profil"
- Marc: „ich verbrauche 80 % der Zeit mit Scrollen, 20 % mit Lesen"
- Sara: „für Lesen geschrieben, nicht für Scannen"

Alle drei stoßen sich daran, dass die Inhaltsseiten – allen voran die Profilseite – als reine Textwüsten gestaltet sind, ohne visuelle Pausen, ohne Highlight-Elemente, ohne Scan-Hilfen.

### Christians eigener Eindruck — die Verifikation

Christian sagte: **„Das Design ist nicht klar strukturiert."**

→ **Stimmt teilweise.** Die Information Architecture ist klar (Header, Footer, Page-Struktur). Aber die **visuelle Komposition** der einzelnen Seiten ist nicht aus einem System abgeleitet – jede Seite erfindet ihre Karten und Spacings neu. Das ist es, was als „unstrukturiert" wahrgenommen wird. Genauer: es fehlt nicht Struktur, es fehlt **Disziplin**.

Christian sagte: **„Das Design ist nicht einheitlich."**

→ **Stimmt voll.** Mindestens fünf bis sechs unterschiedliche Card-Komponenten, drei verschiedene H1-Größen, abweichende Eyebrow-Behandlung, inkonsistente Bildbehandlung auf der Beirat-Seite, abweichende Benennungen zwischen Header und Footer („Beiratstätigkeit" vs. „Beirat & Verbandsarbeit"). Alle drei Personas bestätigen die Beobachtung.

Christian sagte: **„Die Seite strahlt nicht Executive Presence aus."**

→ **Stimmt mit Präzisierung.** *Verbal* strahlt die Seite Executive Presence aus – die Tonalität, die These „Manager, nicht Berater", die scharfen Pointensätze, die kuratierte Themen-Auswahl. Das ist Executive-tauglich, sogar überdurchschnittlich. *Visuell* dagegen strahlt die Seite die Presence nicht aus – fehlendes Porträt, uneinheitliche Komponenten, kein gestalterisches Statement, Bildmaterial wirkt zufällig. Eine Person, die für „Executive Presence" ein Buch geschrieben hat, hat eine Seite gebaut, die in ihrer eigenen Vier-Säulen-Definition (*Auftreten, Kommunikation, Wirkung, Feedback*) bei *Auftreten* und *Wirkung* hinter dem eigenen Anspruch zurückbleibt.

### Top-5 Befunde

1. **Die Profilseite hat kein Foto.** Das ist der schwerwiegendste Einzel-Befund. Eine Personal-Brand-Profilseite ohne professionelles Porträt verfehlt ihre Kernfunktion.
2. **Das Hero-Foto auf der Home ist unterdurchschnittlich.** Schief zugeschnitten, kein Augenkontakt, wirkt wie Stock oder Snapshot statt wie ein gewähltes Executive-Portrait.
3. **Es gibt kein Design-System, sondern sechs ad-hoc-Komponenten** – Pillar-Cards, Article-Cards, Book-Detail-Boxen, Beirat-Logo-Karten, Kontakt-Channel-Boxen, Fallbeispiel-Boxen. Alle leicht unterschiedlich, ohne erkennbares System.
4. **Die Unterseiten (Profil, Bücher, Beirat) sind für Lesen, nicht für Scannen gebaut.** Bei einer Zielgruppe, die maximal 60–90 Sekunden Aufmerksamkeit mitbringt, ist das eine vermeidbare Hürde.
5. **Navigation und Benennung sind inkonsistent.** Header ≠ Footer (5 vs. 7 Items), „Beirat" / „Beirat & Verbandsarbeit" / „Beiratstätigkeit" werden austauschbar verwendet, die Profilseite trägt eine andere Benennung als der Header-Link.

### Was die Seite richtig gut macht — damit es nicht untergeht

- **Verbale Marke ist stark.** „Synchron, oder es wird teuer.", „Strategie. Technologie. Organisation.", „Manager, nicht Berater." – das sind echte Marken-Sätze, nicht Watte.
- **Themen-Säulen sind scharf.** Drei klare Cluster, durchgezogen über mehrere Seiten, mit Anti-Mainstream-Pointe.
- **Drei Fallbeispiele.** Statt CV-Liste werden Thomann/OTTO/Vistaprint als Synchronisations-Archetypen erzählt – das ist überdurchschnittlich gut.
- **Kontakt-Seite ist klar.** Drei differenzierte Wege, kein aufdringliches Formular, diskret und professionell.
- **Tonalität durchgezogen.** „Pointiert mit Haltung" zieht sich durch alle Texte – auch die kleineren Intros (Bücher, Perspektiven, Beirat). Das ist konsistent.
- **SEO-Basis ist sauber.** JSON-LD, hreflang, automatische Sitemap, Article-Schemas – das ist technisch besser als bei den meisten Personal-Brand-Seiten.

**Die Marke ist gebaut. Das Gesicht der Marke fehlt.**

---

## Anhang — Screenshot-Index

Alle Screenshots in `docs/audits/screenshots/2026-05-31/`:

| Seite | Pre-Audit Desktop | Pre-Audit Mobile | Nach Track A | Nach Track B |
|---|---|---|---|---|
| Home | `home-desktop.png` | `home-mobile.png` | `trackA-home-desktop.png` | `trackB-home-desktop.png` |
| Profil | `profile-desktop.png` | `profile-mobile.png` | `trackA-profile-desktop.png` / `trackA-profile-mobile.png` | `trackB-profile-desktop.png` / `trackB-profile-mobile.png` |
| Perspektiven | `fachartikel-desktop.png` | `fachartikel-mobile.png` | — | — |
| Bücher | `buecher-desktop.png` | `buecher-mobile.png` | — | `trackB-buecher-desktop.png` |
| Vorträge & Lehre | `lehre-desktop.png` | `lehre-mobile.png` | — | `trackB-lehre-desktop.png` |
| Beirat | `beirat-desktop.png` | `beirat-mobile.png` | `trackA-beirat-desktop.png` / `trackA-beirat-mobile.png` | — |
| Kontakt | `kontakt-desktop.png` | `kontakt-mobile.png` | — | — |

Audit-Methodik im Plan-File: `~/.claude/plans/verschafft-dir-einen-berblick-federated-deer.md` (Stand 2026-05-31).

---

## Status-Update — Was nach dem Audit umgesetzt wurde

Stand: 2026-05-31, nach Track A + Track B.

### Top-5-Befunde — aktueller Status

| # | Befund | Status | Maßnahme |
|---|---|---|---|
| 1 | Profilseite hat kein Foto | ✅ **gelöst** | Grid-Header mit `dr-christian-maass.png` (220px Porträt links, H1/Lead/Triade rechts). Mobile: zentriert oben. |
| 2 | Hero-Foto auf Home unterdurchschnittlich | ✅ **gelöst** | `lehre-dr-christian-maass.png` (Bühne mit Wachstums-Chart) ersetzt das alte Studio-S/W. Authority-Signal + visuelle Brand-Verbindung zur Skalierungs-These. |
| 3 | Kein Design-System, sechs ad-hoc-Komponenten | ✅ **adressiert** | CSS Custom Properties (Spacing, Type, Color, Radius), globale Typo-Hierarchie, einheitliche `.card-soft`-Basisklasse, alle Pastel-Cards auf gleiche Padding/Radius-Werte. |
| 4 | Wall-of-Text auf Unterseiten | ✅ **adressiert** | Profilseite mit Eyebrows, Triade-Mark, Pull-Quote in Plug-and-Play-Sektion, klare Sektions-Trenner; visueller Anker durch Foto. Beirat-Seite mit konsistenten Mandats-Cards. |
| 5 | Navigation/Benennung inkonsistent | ✅ **gelöst** | Header und Footer jetzt 7 identische Items, Labels normalisiert: „Profil", „Vorträge & Lehre", „Beirat". DE + EN. |

### Bonus-Verbesserungen (über die Top-5 hinaus)

- **Beirat-Seite vollständig neu**: `.mandate-card`-Komponente mit fixem Logo-Container (160×100, weiß, `object-fit: contain`) → BEVH-Logo sprengt das Layout nicht mehr; alle vier Mandate visuell gleichberechtigt.
- **Vorträge-Seite mit Säulen-Beleg-Foto**: Bühnen-Bild mit Folie „Die vergessenen Grundlagen im E-Commerce" als visuelle Bestätigung von Säule 2.
- **Bücher-Header**: Bücher-Stapel-Foto im Grid neben H1/Lead, vor der Bücher-Liste.
- **Repo-Hygiene**: drei generische Stock-Bilder (Podcast-Mic, Doktorhut, eTailment-Logo auf Rot) gelöscht; `.gitignore` um Test-Artefakte erweitert.
- **CSP-Header** für inline JSON-LD repariert (Phase 3).
- **Automatische Sitemap** via `@astrojs/sitemap` (Phase 3).

### Was bewusst NICHT adressiert wurde

- **Track C / größerer Design-Refactor** mit externem Designer – nur sinnvoll, wenn weitere Iteration nach Live-Test nötig.
- **Englische Versionen** der Phase-1-Texte (Profilseite-Cases, Kontakt-Channels) – DE+EN sind im Translations-File parallel gepflegt, EN-Seiten visualisieren aber noch teilweise die alte Struktur (en/index.astro Hero und Boxen).
- **Astro `<Image>`/`<Picture>`** für WebP/AVIF-Auslieferung – Performance-Polish, kein UX-Befund.
- **Optional ungenutzte Personen-Fotos**: `hero-maass.png` (alte S/W-Variante), `christian-maass.png` (Farb-Studio), `advisor-beirat-christian-maass.png` (Bühne E-Commerce Berlin), `vortraege-doktor-christian-maass.png` (Profil-SW) liegen noch im Repo – sind als Reserve sinnvoll oder können aufgeräumt werden.

### Zusammenfassung

Die ursprüngliche Diagnose der drei Personas bezog sich auf den Stand **vor Track A und Track B**. Mit den jetzt umgesetzten Änderungen sind **alle Top-5-Befunde adressiert**. Die Marke hat jetzt ein Gesicht – das wichtigste verbleibende Risiko des Audits ist gelöst. Verbal stark + visuell jetzt auch tragend. Ein externer Re-Test der drei Personas würde vermutlich ein deutlich verschobenes Urteil ergeben.
