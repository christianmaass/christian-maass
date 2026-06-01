# BUILD-Verification: HTML & JSON-LD Analyse

## Zusammenfassung

**KRITISCHES PROBLEM GEFUNDEN:** Alle EN-Seiten haben `<html lang="de">` statt `<html lang="en">`

---

## 1. /index.html (DE Homepage)

### HTML
- ✅ `<html lang="de">` - **KORREKT**
- ✅ canonical: `https://christianmaass.com` - **KORREKT**
- ✅ hreflang:
  - `hreflang="de"` → `https://christianmaass.com/` ✅
  - `hreflang="en"` → `https://christianmaass.com/en/` ✅
  - `hreflang="x-default"` → `https://christianmaass.com/` ✅

### JSON-LD
- **Anzahl JSON-LD Blöcke:** 1
- **Anzahl Person-Nodes:** 1
- ✅ Person @id: `"https://christianmaass.com/#person"` - **KORREKT**
- ✅ jobTitle: `"Managing Director & Chief Digital Officer"` - **KORREKT**
- ✅ inLanguage: `"de"` - **KORREKT**
- ✅ name: `"Christian Maaß"` - **KORREKT**
- ✅ url: `"https://christianmaass.com/"` - **KORREKT**
- ✅ sameAs: Array mit 4 Einträgen - **KORREKT**

**Status:** ✅ **KORREKT**

---

## 2. /en/index.html (EN Homepage)

### HTML
- ❌ `<html lang="de">` - **FEHLER: SOLLTE "en" SEIN**
- ✅ canonical: `https://christianmaass.com/en/` - **KORREKT**
- ✅ hreflang:
  - `hreflang="de"` → `https://christianmaass.com/` ✅
  - `hreflang="en"` → `https://christianmaass.com/en/` ✅
  - `hreflang="x-default"` → `https://christianmaass.com/` ✅

### JSON-LD
- **Anzahl JSON-LD Blöcke:** 1
- **Anzahl Person-Nodes:** 1
- ✅ Person @id: `"https://christianmaass.com/#person"` - **KORREKT**
- ✅ jobTitle: `"Managing Director & Chief Digital Officer"` - **KORREKT**
- ✅ inLanguage: `"en"` - **KORREKT**
- ✅ name: `"Christian Maaß"` - **KORREKT**
- ✅ url: `"https://christianmaass.com/"` - **KORREKT**
- ✅ sameAs: Array mit 4 Einträgen - **KORREKT**

**Status:** ❌ **FEHLER: lang-Attribut**

---

## 3. /christian-maass/index.html (DE)

### HTML
- ✅ `<html lang="de">` - **KORREKT**
- ✅ canonical: `https://christianmaass.com/christian-maass` - **KORREKT**
- ✅ hreflang:
  - `hreflang="de"` → `https://christianmaass.com/christian-maass` ✅
  - `hreflang="en"` → `https://christianmaass.com/en/christian-maass` ✅
  - `hreflang="x-default"` → `https://christianmaass.com/christian-maass` ✅

### JSON-LD
- **Anzahl JSON-LD Blöcke:** 2 (Person + WebPage)
- **Anzahl Person-Nodes:** 1
- ✅ Person @id: `"https://christianmaass.com/#person"` - **KORREKT**
- ✅ jobTitle: `"Managing Director & Chief Digital Officer"` - **KORREKT**
- ✅ inLanguage: `"de"` - **KORREKT**
- ✅ name: `"Christian Maaß"` - **KORREKT**
- ✅ url: `"https://christianmaass.com/christian-maass/"` - **KORREKT**
- ✅ sameAs: Array mit 4 Einträgen - **KORREKT**

**Status:** ✅ **KORREKT**

---

## 4. /en/christian-maass/index.html (EN)

### HTML
- ❌ `<html lang="de">` - **FEHLER: SOLLTE "en" SEIN**
- ✅ canonical: `https://christianmaass.com/en/christian-maass` - **KORREKT**
- ✅ hreflang:
  - `hreflang="de"` → `https://christianmaass.com/christian-maass` ✅
  - `hreflang="en"` → `https://christianmaass.com/en/christian-maass` ✅
  - `hreflang="x-default"` → `https://christianmaass.com/christian-maass` ✅

### JSON-LD
- **Anzahl JSON-LD Blöcke:** 1 (Person)
- **Anzahl Person-Nodes:** 1
- ✅ Person @id: `"https://christianmaass.com/#person"` - **KORREKT**
- ✅ jobTitle: `"Managing Director & Chief Digital Officer"` - **KORREKT**
- ✅ inLanguage: `"en"` - **KORREKT**
- ✅ name: `"Christian Maaß"` - **KORREKT**
- ✅ url: `"https://christianmaass.com/christian-maass/"` - **KORREKT**
- ✅ sameAs: Array mit 4 Einträgen - **KORREKT**

**Status:** ❌ **FEHLER: lang-Attribut**

---

## Problem-Analyse

### Root Cause

In `BaseLayout.astro` wird `lang` mit Default `"de"` definiert:

```astro
const {
  lang = "de",  // ← Default ist "de"
  currentLocale,
} = Astro.props;

const locale: Locale = currentLocale || getLocaleFromPath(Astro.url.pathname);
const finalLang = lang || locale || "de";  // ← Problem: lang ist bereits "de"
```

**Problem:** Wenn EN-Seiten `BaseLayout` ohne explizites `lang`-Prop aufrufen, wird `lang` auf `"de"` gesetzt (Default). Dann wird `finalLang = "de" || "en" || "de"` = `"de"`.

### Lösung

`finalLang` sollte zuerst `locale` prüfen, wenn `lang` nicht explizit übergeben wurde:

```astro
// Option 1: locale hat Priorität wenn lang nicht explizit gesetzt
const finalLang = (lang !== undefined && lang !== "de") ? lang : (locale || "de");

// Option 2: Immer locale verwenden wenn vorhanden (besser)
const finalLang = locale || lang || "de";
```

**Besser:** Da `locale` immer korrekt aus `currentLocale` oder URL-Pfad abgeleitet wird, sollte es Priorität haben:

```astro
const finalLang = locale || lang || "de";
```

ABER: Das Problem ist, dass `lang` bereits den Default "de" hat, also ist `lang !== undefined` immer true.

**Beste Lösung:** `lang` sollte optional sein ohne Default, oder `finalLang` sollte direkt aus `locale` abgeleitet werden:

```astro
const finalLang = locale || lang || "de";
```

---

## Konkreter Fix

**Datei:** `src/layouts/BaseLayout.astro`  
**Zeile:** 37

**Aktuell:**
```astro
const finalLang = lang || locale || "de";
```

**Geändert zu:**
```astro
const finalLang = locale || lang || "de";
```

**Begründung:** `locale` wird immer korrekt aus `currentLocale` oder URL-Pfad abgeleitet und hat daher Priorität. `lang` ist nur ein Fallback für explizite Überschreibungen.

---

## Zusammenfassung

| Seite | lang | canonical | hreflang | JSON-LD Blöcke | Person-Nodes | Status |
|-------|------|-----------|----------|----------------|--------------|--------|
| `/index.html` | ✅ de | ✅ | ✅ | 1 | 1 | ✅ |
| `/en/index.html` | ❌ **de** (sollte en) | ✅ | ✅ | 1 | 1 | ❌ |
| `/christian-maass/index.html` | ✅ de | ✅ | ✅ | 2 | 1 | ✅ |
| `/en/christian-maass/index.html` | ❌ **de** (sollte en) | ✅ | ✅ | 1 | 1 | ❌ |

**Alle anderen Metadaten (canonical, hreflang, JSON-LD) sind korrekt.**

