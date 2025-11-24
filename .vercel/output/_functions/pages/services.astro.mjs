import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_CrhB6vN6.mjs';
import { g as getAlternateLinks, l as locales, b as buildLocaleUrl, $ as $$Layout, d as defaultLocale, a as getMessages, c as $$ContactSection } from '../chunks/ContactSection_DvzWCzyA.mjs';
import { $ as $$ServicesPage } from '../chunks/ServicesPage_W9XVk2hM.mjs';
import { s as servicesPageCopy } from '../chunks/pages_D-EidxKv.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.bluehorizonmexico.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const locale = defaultLocale;
  const messages = getMessages(locale);
  const pageCopy = servicesPageCopy[locale];
  const alternateLinks = getAlternateLinks(locale, Astro2.url);
  const languageSwitcher = {
    current: locale,
    options: locales.map((lang) => ({
      label: lang.toUpperCase(),
      value: lang,
      href: buildLocaleUrl(lang, Astro2.url)
    }))
  };
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageCopy.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "locale": locale, "messages": messages, "alternateLinks": alternateLinks, "languageSwitcher": languageSwitcher, "pageMeta": pageCopy.meta, "additionalStructuredData": [faqStructuredData] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ServicesPage", $$ServicesPage, { "services": messages.services, "contact": messages.contact, "footerContact": messages.footer.contact, "copy": pageCopy, "successStoriesHref": "/success-stories", "contactHref": "#contact" })} ${renderComponent($$result2, "ContactSection", $$ContactSection, { "contact": messages.contact, "phoneNumber": messages.footer.contact.phone })} ` })}`;
}, "/Users/pedro412/astro-horizon/agreeable-asteroid/src/pages/services/index.astro", void 0);

const $$file = "/Users/pedro412/astro-horizon/agreeable-asteroid/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
