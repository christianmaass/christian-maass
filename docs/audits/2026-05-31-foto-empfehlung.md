# Foto-Sichtung und Empfehlung

**christianmaass.com · Stand 2026-05-31**

Ergänzung zum UX-/Branding-/Headhunter-Audit. Adressiert die Top-2-Befunde (Foto-Vakuum auf Profilseite + unterdurchschnittliches Hero-Foto). **Gute Nachricht: das Material ist da. Die Seite nutzt es nicht.**

---

## Inventar — was im Repo liegt

### Studio-Porträts (3 Varianten, alle Brustbild-Halbporträt)

| Bild | Beschreibung | Eignung |
|---|---|---|
| `hero-maass.png` | **Schwarz-weiß**, Halbporträt mit Lehne, leichtes Lächeln, Augenkontakt, dunkler Sakko | ★★★★ stark, aber S/W passt nicht zu den Farbfotos |
| `christian-maass.png` | **Farbig**, gleiche Pose wie SW-Variante, freigestellt vor Weiß | ★★★★ stark, freigestellte Variante |
| `dr-christian-maass.png` | **Farbig**, frontaler Brustbild, dunkelblaues Hemd, direkter Augenkontakt, kein Sakko | ★★★★★ **der stärkste Porträt** – open-collar, direkter Blick, executive ohne Anzug-Steife |

### Bühnen-/Auftritts-Fotos (4 Varianten – bisher ungenutzt!)

| Bild | Beschreibung | Eignung |
|---|---|---|
| `lehre-christian-maass.png` | Thomann-Vortrag, hellbrauner Sakko, Folie hinter ihm: **„Die vergessenen Grundlagen im E-Commerce"** | ★★★★★ **literal eine deiner drei Säulen als Live-Vortrag** – Brand-Match perfekt |
| `lehre-dr-christian-maass.png` | Thomann-Vortrag, gleiche Garderobe, Wachstums-Chart 2000–2023 im Hintergrund, beidhändige Gestik | ★★★★ dynamisch, „Skalierungs"-Visual |
| `vortraege-doktor-christian-maass.png` | **Schwarz-weiß**, Profil-Ansicht im Spotlight, T-Shirt + Headset, sehr kinematisch | ★★★★ Statement-Bild, fast wie ein TED-Talk-Promo |
| `advisor-beirat-christian-maass.png` | E-Commerce Berlin Bühne, Sitz-Interview, Christian im Gespräch | ★★★ Authority-Signal („spricht öffentlich auf Branchen-Events"), aber Bildqualität niedriger |

### Authentische Asset-Bilder

| Bild | Eignung |
|---|---|
| `meine-buecher-maass.png` | Stapel der eigenen Bücher, klar erkennbar (UTB, Hanser) | ★★★★ ideal für Bücher-Seite-Header |

### Nicht brauchbar (Stock-/Icon-Bilder)

| Bild | Problem |
|---|---|
| `presse-podcast-interview.png` | Generisches Mikrofon-Icon auf Royalblau – wirkt wie ein WordPress-Stock-Asset |
| `wissenschaftliche-veroeffentlichungen.png` | Generischer Doktorhut auf Lila – inkonsistent mit dem nüchternen Brand-Look |
| `etailment-expertenrat-maass.png` | Nur das eTailment-Logo auf Rot – keine eigene Aussage |

→ **Empfehlung: diese drei aus dem Repo löschen.** Sie verleiten zur Verwendung und subtrahieren Brand-Substanz.

---

## Konkrete Zuordnung pro Seite

### 1. Home-Hero (`index.astro`)

**Empfehlung: `lehre-dr-christian-maass.png` (Bühnen-Foto mit Wachstums-Chart)**

Warum: Der Hero ist die Sekunden-1-Wirkung. Heute zeigst du `hero-maass.png` (Studio-Porträt SW), das im Layout merkwürdig zugeschnitten wirkt. Ein **Bühnen-Foto** sendet drei Signale gleichzeitig:
- Du bist in Aktion (nicht nur ein Foto-Termin)
- Du sprichst öffentlich auf großen Bühnen (Authority)
- Der Wachstums-Chart hinter dir illustriert visuell die These „Skalierung digitaler Geschäfte"

Das hellbraune Sakko, beidhändige Gestik, leichtes Lächeln – das ist Executive Presence in Bewegung. Genau das, was eine Personal Brand braucht.

**Alternative**, falls du Studio bevorzugst: `dr-christian-maass.png` (dunkelblaues Hemd, direkter Blick). Klarer, statischer, weniger inszeniert.

### 2. Profilseite (`christian-maass.astro`)

**Empfehlung: `dr-christian-maass.png` als Porträt-Anker in der `profile-header`**

Warum: Hier braucht es einen **stillen, vertrauenswürdigen Anker** – kein Bühnen-Drama. Direkter Augenkontakt, neutrale Pose, ruhige Komposition. Das Foto sollte links neben H1+Lead positioniert sein (Grid 1fr/auto), nicht als Vollbild-Hero. Sara (PO-Persona) hatte das ausdrücklich gefordert: „keine Zwischen-Visuals" – ein Porträt im Header löst das in einem Zug.

Größe: ~220×260 px im Header, freigestellt auf weißem Grund.

### 3. Vorträge & Lehre (`lehre.astro`)

**Empfehlung: `lehre-christian-maass.png` als Sektion-Bild zwischen Talks und University**

Warum: Das Foto zeigt dich live mit der Folie **„Die vergessenen Grundlagen im E-Commerce"** im Hintergrund. Das ist die literal-visuelle Beweis-Verbindung zwischen deiner Säule 2 und deiner Praxis. Stärker geht kaum.

Position: Volle Container-Breite zwischen der Talks-Sektion und der University-Sektion, oder als visueller Auftakt direkt unter H1.

Alternative für SW-Statement-Look: `vortraege-doktor-christian-maass.png` (Profil-Ansicht im Spotlight).

### 4. Beirat (`beirat.astro`)

**Empfehlung: `advisor-beirat-christian-maass.png` als Header-Bild**

Warum: Das E-Commerce-Berlin-Bühnenfoto zeigt dich in einer typischen Industrie-Vertreter-Pose (Interview-Setting). Passt zur BEVH-Verbandsrolle. Bildqualität ist nicht top, aber kontextuell perfekt. Sollte klein eingesetzt werden (z.B. 400×300 als rechtes Inset im Header, nicht als Vollbild).

Wenn keine Verfügbarkeit: **gar kein Foto** auf der Beirat-Seite – die Mandats-Karten mit Logos tragen die Seite jetzt schon (Track A).

### 5. Bücher (`buecher.astro`)

**Empfehlung: `meine-buecher-maass.png` als Header-Bild über der Bücher-Liste**

Warum: Der Bücher-Stapel ist authentisch (deine eigenen Bücher, erkennbar UTB + Hanser). Setzt einen visuellen Ankerpunkt vor der textlastigen Bücher-Liste. Heute fehlt das.

### 6. Perspektiven (`fachartikel.astro`)

**Empfehlung: kein Foto.**

Die Seite lebt von Klarheit + Säulen-Architektur. Ein Foto würde stören. Wenn überhaupt: ein abstrahiertes Header-Element, kein Personenbild.

### 7. Kontakt (`kontakt.astro`)

**Empfehlung: kein Foto.**

Diskretion ist hier wichtiger als Wirkung. Headhunter-Persona hat das bestätigt: „diskret, professionell, keine Werbe-Optik".

---

## Was noch fehlt (Foto-Shoot-Need)

Aktueller Bestand reicht für 80 % der Anwendungen. **Nicht zwingend nötig, aber wäre Upgrade:**

1. **Ein quadratisches Square-Crop des Porträts** für Social-Cards / OG-Image-Spezialfälle (heute wird `christian-maass.png` als OG genutzt, der Crop ist suboptimal)
2. **Ein Foto in Kontext "Office / Workspace"** als zusätzliche Variante – etwas anderes als Studio-Porträt oder Bühne. Würde der Profil-Seite Tiefe geben, ist aber kein Muss.
3. **EIN echtes Hochformat-Porträt** für mobile Hero-Crops, falls du das Hero-Bild auch auf Mobile zeigen willst (heute auf Mobile ausgeblendet)

Ein professioneller Halbtages-Shoot (3–4 Stunden, eine Location, ein Outfit-Wechsel) würde diese drei Lücken schließen. Aber **erstmal Track-A-Umsetzung mit Bestand machen, dann sehen, was nach drei Monaten noch wirklich fehlt.**

---

## Konkretes Umsetzungs-Paket (wenn freigegeben)

Code-seitig kann ich folgendes sofort umsetzen:

1. **Home-Hero austauschen** auf `lehre-dr-christian-maass.png` mit besserem Crop/Object-Position
2. **Profil-Header bauen** mit `dr-christian-maass.png` als 220×260-Bild links neben H1+Lead+Triade
3. **Vorträge-Sektion-Bild** auf `lehre-christian-maass.png` über die Talks-Cards
4. **Bücher-Header** mit `meine-buecher-maass.png`
5. **Beirat-Header** optional mit `advisor-beirat-christian-maass.png`
6. **Drei Stock-Bilder löschen** (`presse-podcast-interview.png`, `wissenschaftliche-veroeffentlichungen.png`, `etailment-expertenrat-maass.png`)
7. **OG-Images überprüfen** und ggf. auf `dr-christian-maass.png` standardisieren

Das adressiert die Audit-Befunde #1 und #2 zu großen Teilen, **ohne Foto-Shoot**.

---

## Fazit

Du hast in deinem Repo **vier ungenutzte Bühnen-Fotos** und **ein perfektes Studio-Porträt** (`dr-christian-maass.png`), die deine Marke visuell tragen würden. Das Problem ist nicht Mangel an Material, sondern Mangel an Einsatz. Eine Iteration mit dem Bestand bringt sofort 70–80 % der Wirkung, die ein Foto-Shoot bringen würde – ohne Kosten und ohne Wartezeit.
