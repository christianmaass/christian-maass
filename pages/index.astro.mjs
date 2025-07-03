import { c as createComponent, a as createAstro, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderHead, e as renderComponent, f as renderSlot } from '../chunks/astro/server_Dvrixf_X.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  return renderTemplate(_a || (_a = __template(["", '<header> <div class="header-container"> <div class="logo"> <a href="/"><img src="/logo-maass.png" alt="Christian Maa\xDF Logo"></a> </div> <nav id="main-nav" class="nav"> <a href="/"', '>Home</a> <a href="/christian-maass"', '>Christian Maa\xDF</a> <a href="/buecher"', '>B\xFCcher</a> <a href="/fachartikel"', '>Fachartikel</a> <a href="/kontakt"', `>Kontakt</a> </nav> <div class="spacer"></div> <button class="burger" id="burger" aria-label="Men\xFC \xF6ffnen">
\u2630
</button> </div> </header> <script>
  // Dieses Skript geh\xF6rt zum Header, da es dessen Funktionalit\xE4t steuert
  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('main-nav');
    if (burger && nav) { // Sicherstellen, dass die Elemente existieren
      burger.addEventListener('click', () => {
        nav.classList.toggle('open');
      });
    }
  });
<\/script>`])), maybeRenderHead(), addAttribute(pathname === "/" ? "active" : "", "class"), addAttribute(pathname === "/christian-maass" ? "active" : "", "class"), addAttribute(pathname === "/buecher" ? "active" : "", "class"), addAttribute(pathname === "/fachartikel" ? "active" : "", "class"), addAttribute(pathname === "/kontakt" ? "active" : "", "class"));
}, "/Users/christianmaass/christian-maass/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class="footer-container"> <div class="footer-block"> <h3>Navigation</h3> <ul> <li><a href="/">Home</a></li> <li><a href="/buecher">Bücher</a></li> <li><a href="/fachartikel">Fachartikel</a></li> <li><a href="/christian-maass">Christian Maaß</a></li> <li><a href="/kontakt">Kontakt</a></li> </ul> </div> <div class="footer-block"> <h3>Kontakt</h3> <address>
Dr. Christian Maaß<br>
Am Leinritt 7<br>
96049 Bamberg<br> <a href="mailto:christian@netzbaron.de">Christian@netzbaron.de</a><br> <a href="tel:+491735143253">+49 173 5143253</a> </address> </div> <div class="footer-block"> <h3>Rechtliches</h3> <ul> <li><a href="/impressum">Impressum</a></li> <li><a href="/datenschutz">Datenschutz</a></li> <li><a href="/barrierefreiheit">Barrierefreiheit</a></li> </ul> </div> <div class="footer-block"> <h3>Aktuelles Buch</h3> <a href="/buecher/mein-aktuelles-buch"> <img src="/executive-presence-maass.jpg" alt="Executive Presence" class="footer-book-cover"> </a> <p>„Executive Presence“</p> </div> </div> <div class="footer-copy">
&copy; 2025 Christian Maaß. Alle Rechte vorbehalten.
</div> </footer>`;
}, "/Users/christianmaass/christian-maass/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Christian Maa\xDF \u2013 Autorenseite", description = "Pers\xF6nliche Webseite von Christian Maa\xDF" } = Astro2.props;
  return renderTemplate`<html lang="de"> <head><meta charset="UTF-8"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet"${addAttribute(Astro2.resolve("/styles.css"), "href")}><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} <!-- ALLES was jede Seite übergibt, wird hier gerendert --> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/christianmaass/christian-maass/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero-banner"> <div class="hero-content"> <h1>Ab dem 15. September im Handel</h1> <p>Mein aktuelles Buch zum Thema "Executive Presence"</p> <a${addAttribute(Astro2.resolve("/Executive Presence"), "href")} class="cta-btn">Zum Buch</a> </div> <div class="hero-image"> <img${addAttribute(Astro2.resolve("/hero-maass.png"), "src")} alt="Hero Bild"> </div> </section> <div class="content-wrapper"> <div class="content-box-row"> <div class="content-box"> <img${addAttribute(Astro2.resolve("/box1.jpg"), "src")} alt="Bild 1"> <h3>Titel 1</h3> <p>Kurzer Beschreibungstext für Box 1.</p> <a${addAttribute(Astro2.resolve("/mehr1"), "href")} class="cta-btn">Mehr erfahren</a> </div> <div class="content-box"> <img${addAttribute(Astro2.resolve("/box2.jpg"), "src")} alt="Bild 2"> <h3>Titel 2</h3> <p>Kurzer Beschreibungstext für Box 2.</p> <a${addAttribute(Astro2.resolve("/mehr2"), "href")} class="cta-btn">Mehr erfahren</a> </div> <div class="content-box"> <img${addAttribute(Astro2.resolve("/box3.jpg"), "src")} alt="Bild 3"> <h3>Titel 3</h3> <p>Kurzer Beschreibungstext für Box 3.</p> <a${addAttribute(Astro2.resolve("/mehr3"), "href")} class="cta-btn">Mehr erfahren</a> </div> </div> </div> ` })}`;
}, "/Users/christianmaass/christian-maass/src/pages/index.astro", void 0);

const $$file = "/Users/christianmaass/christian-maass/src/pages/index.astro";
const $$url = "/christian-maass";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
