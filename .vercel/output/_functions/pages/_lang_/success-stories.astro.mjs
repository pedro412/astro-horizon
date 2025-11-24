import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CrhB6vN6.mjs';
import { r as resolveLocale, d as defaultLocale, a as getMessages, g as getAlternateLinks, l as locales, b as buildLocaleUrl, $ as $$Layout, c as $$ContactSection } from '../../chunks/ContactSection_DvzWCzyA.mjs';
import { $ as $$SuccessStoriesPage } from '../../chunks/SuccessStoriesPage_BY6yK_CL.mjs';
import { a as successStoriesPageCopy } from '../../chunks/pages_D-EidxKv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.bluehorizonmexico.com");
async function getStaticPaths() {
  return locales.map((locale) => ({
    params: { lang: locale }
  }));
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const langParam = Astro2.params.lang;
  if (!langParam) {
    return Astro2.redirect("/success-stories");
  }
  const locale = resolveLocale(langParam);
  if (locale !== langParam) {
    const target = locale === defaultLocale ? "/success-stories" : `/${locale}/success-stories`;
    return Astro2.redirect(target);
  }
  if (locale === defaultLocale) {
    return Astro2.redirect("/success-stories");
  }
  const messages = getMessages(locale);
  const pageCopy = successStoriesPageCopy[locale];
  const alternateLinks = getAlternateLinks(locale, Astro2.url);
  const languageSwitcher = {
    current: locale,
    options: locales.map((lang) => ({
      label: lang.toUpperCase(),
      value: lang,
      href: buildLocaleUrl(lang, Astro2.url)
    }))
  };
  const collectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageCopy.meta.title,
    description: pageCopy.meta.description,
    hasPart: messages.successStories.recentProjects.items.map((item) => ({
      "@type": "CreativeWork",
      name: item.description,
      datePublished: item.year
    }))
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "locale": locale, "messages": messages, "alternateLinks": alternateLinks, "languageSwitcher": languageSwitcher, "pageMeta": pageCopy.meta, "additionalStructuredData": [collectionStructuredData] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SuccessStoriesPage", $$SuccessStoriesPage, { "successStories": messages.successStories, "contact": messages.contact, "footerContact": messages.footer.contact, "copy": pageCopy, "contactHref": "#contact" })} ${renderComponent($$result2, "ContactSection", $$ContactSection, { "contact": messages.contact, "phoneNumber": messages.footer.contact.phone })} ` })}`;
}, "/Users/pedro412/astro-horizon/agreeable-asteroid/src/pages/[lang]/success-stories/index.astro", void 0);

const $$file = "/Users/pedro412/astro-horizon/agreeable-asteroid/src/pages/[lang]/success-stories/index.astro";
const $$url = "/[lang]/success-stories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
