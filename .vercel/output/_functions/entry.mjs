import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_tTqMNQNQ.mjs';
import { manifest } from './manifest_CvShbgp0.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/services.astro.mjs');
const _page3 = () => import('./pages/success-stories.astro.mjs');
const _page4 = () => import('./pages/_lang_/services.astro.mjs');
const _page5 = () => import('./pages/_lang_/success-stories.astro.mjs');
const _page6 = () => import('./pages/_lang_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/services/index.astro", _page2],
    ["src/pages/success-stories/index.astro", _page3],
    ["src/pages/[lang]/services/index.astro", _page4],
    ["src/pages/[lang]/success-stories/index.astro", _page5],
    ["src/pages/[lang]/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "98d54731-87aa-4e03-9d5e-a9e06dbe4b4f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
