import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_Dvrixf_X.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Test = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1>Dies ist die Testseite</h1> <p>Wenn diese Seite funktioniert, liegt es an der index.astro.</p>`;
}, "/Users/christianmaass/christian-maass/src/pages/test.astro", void 0);

const $$file = "/Users/christianmaass/christian-maass/src/pages/test.astro";
const $$url = "/christian-maass/test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Test,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
