/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, e as renderComponent, s as spreadAttributes, u as unescapeHTML, F as Fragment, _ as __astro_tag_component__, f as renderHead, g as createVNode } from '../astro.1335cd7d.mjs';
/* empty css                           *//* empty css                             *//* empty css                            *//* empty css                           */import { jsx, Fragment as Fragment$1, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                           *//* empty css                           *//* empty css                           */import { optimize } from 'svgo';
/* empty css                                            */
const $$Astro$G = createAstro("https://lea-stauder.art/");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["max-w-screen-xl mx-auto px-5 relative", className], "class:list")}>
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/components/container.astro");

const brush1 = "/_astro/brush1.0b58265b.svg";

const brush2 = "/_astro/brush2.4647bdfe.svg";

const brush3 = "/_astro/brush3.67ef79fe.svg";

const $$Astro$F = createAstro("https://lea-stauder.art/");
const $$BrushText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$BrushText;
  const { id, title, path, positioning } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(`absolute ${positioning} astro-SQXKQJXF`, "class")} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <path${addAttribute(id, "id")} fill="none" stroke="none"${addAttribute(path, "d")} class="astro-SQXKQJXF"></path>
  <text x="0" font-size="18" class="astro-SQXKQJXF">
    <textPath${addAttribute(`#${id}`, "href")} class="astro-SQXKQJXF">${title}</textPath>
  </text>
</svg>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/components/decorative/brushText.astro");

const $$Astro$E = createAstro("https://lea-stauder.art/");
const $$ImagePane = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$ImagePane;
  const { src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<img class=" astro-GGHQVV5F"${addAttribute(src, "src")}${addAttribute(alt, "alt")}>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/components/decorative/imagePane.astro");

const API_GATEWAY = "lea-stauder.art:81";
const COLORS = {
  black: "#000000",
  white: "#ffffff",
  redLight: "€C95370",
  redDark: "#BD2753",
  blueLight: "#517186",
  blueDark: "#294B62",
  purpleLight: "#7773CB",
  purpleDark: "#54509D"
};

const $$Astro$D = createAstro("https://lea-stauder.art/");
const $$ContactButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$ContactButton;
  return renderTemplate`${maybeRenderHead($$result)}<a href="/contact" class="astro-7TDK27U3">
  <p class="astro-7TDK27U3">
    <button class="red-button-right astro-7TDK27U3">${">"}</button> Pour me contacter, clique ici !
  </p>
</a>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/components/ui/contactButton.astro");

const $$Astro$C = createAstro("https://lea-stauder.art/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$Hero;
  const response = await fetch(
    `http://${"lea-stauder.art:81"}/api/generic-assets/1?populate=*`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${"d794bfa375e219c76e05cbc22cb2ae4bb53ed286a3db9fa5805ae36e3933f5d693a87591fa1509987865f42821831bd8d750277b9be0d2594c5fbe4f2db959a6b6c45881b995bb9cb1ace128bbb5900ac9023869b322f8f11cd6c7bc161b47728b55a03d545b0e2ae4914869c3c5f96ca8f200fc8fa5450f942fa39a7975ba9e"}`
      }
    }
  );
  const data = await response.json();
  const headerImage = data.data.attributes.source.data.attributes.url;
  console.log(`${API_GATEWAY}${headerImage}`);
  return renderTemplate`${maybeRenderHead($$result)}<section class="relative h-[calc(100vh-10vh)] hero astro-ZI4LDR3X">
  <div class="z-0 absolute top-56 my-auto grid-cols-3 grid-rows-2 hidden lg:grid astro-ZI4LDR3X">
    <div class="relative col-span-1 -ml-32 mt-28 astro-ZI4LDR3X">
      <img${addAttribute(brush1, "src")} alt="brush variant 1" class="astro-ZI4LDR3X">
      ${renderComponent($$result, "BrushText", $$BrushText, { "id": "hero-1", "title": "Il ne s'agit pas de peindre", "path": "M20, 200 C 70, 200 100, 300 270, 180", "positioning": "-top-44 ml-12", "class": "astro-ZI4LDR3X" })}
    </div>
    <div class="relative col-span-1 -mx-16 astro-ZI4LDR3X">
      <img class="absolute z-10  astro-ZI4LDR3X"${addAttribute(brush2, "src")} alt="brush variant 2">
      ${renderComponent($$result, "BrushText", $$BrushText, { "id": "hero-2", "title": " la vie mais de rendre vivante", "path": "M6, 170 C 200, 80 50, 105 270, 152", "positioning": "-top-12 ml-12", "class": "astro-ZI4LDR3X" })}
    </div>
    <div class="relative col-span-1 -mr-32 mt-20 astro-ZI4LDR3X">
      <img class="z-10 absolute astro-ZI4LDR3X"${addAttribute(brush3, "src")} alt="brush variant 3">
      <div class="absolute -top-28 ml-16 -mt-32 z-0 astro-ZI4LDR3X">
        ${renderComponent($$result, "ImagePane", $$ImagePane, { "src": `${API_GATEWAY}${headerImage}`, "alt": "Welcome art painting", "class": "astro-ZI4LDR3X" })}
        <img${addAttribute(`${API_GATEWAY}${headerImage}`, "src")} alt="TEST" class="astro-ZI4LDR3X">
      </div>
      ${renderComponent($$result, "BrushText", $$BrushText, { "id": "hero-3", "title": "la peinture... Pierre Bonnard", "path": "M10, 200 C 70, 200 100, 300 270, 180", "positioning": "-top-44 ml-12", "class": "astro-ZI4LDR3X" })}
    </div>
  </div>
  <!-- <main class="grid lg:grid-cols-2 place-items-left pt-16 pb-8 md:pt-8 md:flex md:flex-col">
    <div class="absolute top-40 z-20 flex md:w-full">
      <h1 class="text-6xl mt-4 text-slate-600 max-w-xl leading-snug">
        Léa<br />
        Stauder
      </h1>
      <div class="flex-col md:w-full">
        <h2 class="lg:hidden text-2xl">Il ne s'agit pas de peindre  la vie mais de rendre vivante la peinture... Pierre Bonnard</h2>
        <img class="w-full" src={brush1} alt="brush variant 3" />
      </div>
    </div>
  </main> -->
  
  <main class="grid lg:grid-cols-2 place-items-left pt-0 lg:pt-16 pb-8 md:pt-8 astro-ZI4LDR3X">
    <div class="absolute top-12 md:top-40 z-20 flex flex-col md:flex-row text-center astro-ZI4LDR3X">
      <h1 class="text-6xl mt-4 text-slate-600 max-w-full leading-snug astro-ZI4LDR3X">
        Léa<br class="astro-ZI4LDR3X">
        Stauder
      </h1>
      <div class=" astro-ZI4LDR3X">
        <h2 class="lg:hidden py-4 text-2xl text-center astro-ZI4LDR3X">Il ne s'agit pas de peindre  la vie mais de rendre vivante la peinture... Pierre Bonnard</h2>
        <img class="lg:hidden w-full astro-ZI4LDR3X"${addAttribute(brush1, "src")} alt="brush variant 3">
      </div>
    </div>
  </main>
  <div class="absolute right-0 sm:bottom-40 bottom-40 mt-6 flex flex-col sm:flex-row gap-3 astro-ZI4LDR3X">
    ${renderComponent($$result, "ContactButton", $$ContactButton, { "class": "astro-ZI4LDR3X" })}
  </div>
</section>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/components/hero.astro");

const $$Astro$B = createAstro("https://lea-stauder.art/");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}
${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}
${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}
${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}
${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}
${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro");

const $$Astro$A = createAstro("https://lea-stauder.art/");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}>
<meta property="og:type"${addAttribute(openGraph.basic.type, "content")}>
<meta property="og:image"${addAttribute(openGraph.basic.image, "content")}>
<meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro");

const $$Astro$z = createAstro("https://lea-stauder.art/");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { url, secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>
${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}
${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}
${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}
${!(height === null) ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}
${!(alt === null) ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-seo/src/components/OpenGraphImageTags.astro");

const $$Astro$y = createAstro("https://lea-stauder.art/");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}
${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}
${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}
${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}
${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}
${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}
${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro");

const $$Astro$x = createAstro("https://lea-stauder.art/");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}
${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-eqiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-seo/src/components/ExtendedTags.astro");

const $$Astro$w = createAstro("https://lea-stauder.art/");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, creator } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}
${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}
${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-seo/src/components/TwitterTags.astro");

const $$Astro$v = createAstro("https://lea-stauder.art/");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$SEO;
  const { props } = Astro2;
  const { title, description, canonical, noindex, nofollow, charset } = props;
  function validateProps(props2) {
    const { openGraph, description: description2 } = props2;
    if (openGraph) {
      if (!openGraph.basic || openGraph.basic.title == null || openGraph.basic.type == null || openGraph.basic.image == null) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (title && openGraph?.basic.title) {
      if (title == openGraph.basic.title) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (openGraph?.basic?.image && !openGraph?.image?.alt) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(props);
  return renderTemplate`${title ? renderTemplate`<title>${unescapeHTML(title)}</title>` : null}

${charset ? renderTemplate`<meta${addAttribute(charset, "charset")}>` : null}

<link rel="canonical"${addAttribute(canonical || Astro2.url.href, "href")}>

${description ? renderTemplate`<meta name="description"${addAttribute(description, "content")}>` : null}

<meta name="robots"${addAttribute(`${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`, "content")}>

${props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...props })}`}
${props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...props })}`}
${props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...props })}`}
${props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...props })}`}
${props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...props })}`}
${props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...props })}`}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-seo/src/SEO.astro");

const $$Astro$u = createAstro("https://lea-stauder.art/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="py-10">
  <p class="text-center text-sm text-black">
    Copyright © ${( new Date()).getFullYear()} Art.penter. All rights reserved.
  </p>
  <p class="text-center text-xs text-slate-500 mt-1">
    Made with :heart: by <a href="https://joerikaiser.dev" target="_blank" rel="noopener" class="hover:underline">
      Joeri Kaiser
    </a>
  </p>
</footer>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/components/footer.astro");

const $$Astro$t = createAstro("https://lea-stauder.art/");
const $$Astronav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Astronav;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}

`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-navbar/src/Astronav.astro");

const $$Astro$s = createAstro("https://lea-stauder.art/");
const $$MenuIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button id="astronav-menu">
  ${renderSlot($$result, $$slots["default"], renderTemplate`
    <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <title>Menu</title>
      <path class="astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path>
      <path class="astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path>
    </svg>
  `)}
</button>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-navbar/src/components/MenuIcon.astro");

const $$Astro$r = createAstro("https://lea-stauder.art/");
const $$OpenIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<span${addAttribute(["astronav-toggle", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-navbar/src/components/OpenIcon.astro");

const $$Astro$q = createAstro("https://lea-stauder.art/");
const $$CloseIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<span${addAttribute(["astronav-toggle hidden", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-navbar/src/components/CloseIcon.astro");

const $$Astro$p = createAstro("https://lea-stauder.art/");
const $$MenuItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<nav${addAttribute(["astronav-toggle", className], "class:list")}>
    ${renderSlot($$result, $$slots["default"])}
</nav>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-navbar/src/components/MenuItems.astro");

const $$Astro$o = createAstro("https://lea-stauder.art/");
const $$Dropdown$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Dropdown$1;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["astronav-dropdown", className], "class:list")} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-navbar/src/components/Dropdown.astro");

const $$Astro$n = createAstro("https://lea-stauder.art/");
const $$DropdownItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["dropdown-toggle hidden", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-navbar/src/components/DropdownItems.astro");

const $$Astro$m = createAstro("https://lea-stauder.art/");
const $$Dropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { title, lastItem, children } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="relative">
  ${renderComponent($$result, "Dropdown", $$Dropdown$1, { "class": "group" }, { "default": ($$result2) => renderTemplate`<button class="flex items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900">
      <span${addAttribute({ fontWeight: "900" }, "style")}>${title}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3 mt-0.5 group-open:rotate-180">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
      </svg>
    </button>${renderComponent($$result2, "DropdownItems", $$DropdownItems, {}, { "default": ($$result3) => renderTemplate`<div${addAttribute([
    "lg:absolute  w-full  lg:w-48",
    lastItem ? "lg:right-0 origin-top-right" : "lg:left-0 origin-top-left"
  ], "class:list")}>
        <div class="px-3 lg:py-2 bg-opacity-50 lg:rounded-md flex flex-col absolute">
          ${children.map((item) => renderTemplate`<a${addAttribute(item.path, "href")} class="z-50 py-1 text-gray-600 font-bold hover:text-gray-900 cursor-pointer">
                ${item.title}
              </a>`)}
        </div>
      </div>` })}` })}
</li>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/components/navbar/dropdown.astro");

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$l = createAstro("https://lea-stauder.art/");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-icon/lib/Icon.astro");

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$k = createAstro("https://lea-stauder.art/");
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>
    ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}
</svg>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-icon/lib/Spritesheet.astro");

const $$Astro$j = createAstro("https://lea-stauder.art/");
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}
${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-icon/lib/SpriteProvider.astro");

const $$Astro$i = createAstro("https://lea-stauder.art/");
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>
    ${title ? renderTemplate`<title>${title}</title>` : ""}
    <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use>
</svg>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/node_modules/astro-icon/lib/Sprite.astro");

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$h = createAstro("https://lea-stauder.art/");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuList = [
    {
      title: "Hello",
      path: "/"
    },
    {
      title: "Pr\xE9sentation",
      path: "/about"
    },
    {
      title: "Art",
      path: "#",
      children: [
        { title: "Oeuvres d'art", path: "/works" },
        { title: "Cr\xE9ations artisanales", path: "/crafts" },
        { title: "Bodypaint", path: "/bodypaint" }
      ]
    },
    {
      title: "Actu",
      path: "/actus"
    },
    {
      title: "Ateliers Participatifs",
      path: "/ateliers-participatifs"
    },
    {
      title: "Contact",
      path: "/contact"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "astro-57M2WULP" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<header class="flex flex-row lg:flex-row justify-between items-center my-0 astro-57M2WULP">
    ${renderComponent($$result2, "Astronav", $$Astronav, { "class": "astro-57M2WULP" }, { "default": ($$result3) => renderTemplate`<div class="flex w-full lg:w-auto items-center justify-between astro-57M2WULP">
        <a href="/" class="text-lg astro-57M2WULP"><span id="nav-title" class="font-bold text-slate-800 astro-57M2WULP">Art.penter</span>
        </a>
        <div class="block lg:hidden astro-57M2WULP">
          ${renderComponent($$result3, "MenuIcon", $$MenuIcon, { "class": "w-4 h-4 text-gray-800 astro-57M2WULP" })}
        </div>
      </div><div class="hidden lg:flex astro-57M2WULP">
        <div class="flex items-center p-2 mt-2 space-x-2 text-gray-600 astro-57M2WULP">
          ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-black w-8 h-8 astro-57M2WULP", "name": "mdi:instagram" })}
        </div>
        <div class="flex items-center p-2 mt-2 space-x-2 text-gray-600 astro-57M2WULP">
          ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-black w-8 h-8 astro-57M2WULP", "name": "ic:baseline-facebook" })}
        </div>
        <div class="flex items-center p-2 mt-2 space-x-2 text-gray-600 astro-57M2WULP">
          ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-black w-8 h-8 astro-57M2WULP", "name": "ic:baseline-tiktok" })}
        </div>
      </div>${renderComponent($$result3, "MenuItems", $$MenuItems, { "class": "hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0 astro-57M2WULP" }, { "default": ($$result4) => renderTemplate`<div class="astro-57M2WULP">
          <ul class="absoluteflex flex-col lg:flex-row lg:gap-3 astro-57M2WULP">
            ${menuList.map((item, index) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "class": "astro-57M2WULP" }, { "default": ($$result5) => renderTemplate`${item.children && renderTemplate`${renderComponent($$result5, "Dropdown", $$Dropdown, { "title": item.title, "children": item.children, "lastItem": index === menuList.length - 1, "class": "astro-57M2WULP" })}`}${!item.children && renderTemplate`<li class="astro-57M2WULP">
                      <a id="nav-item"${addAttribute(item.path, "href")} class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900 astro-57M2WULP">
                        ${item.title}
                      </a>
                    </li>`}` })}`)}
          </ul>
        </div>` })}` })}
  </header>` })}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/components/navbar/navbar.astro");

const Background = () => {
  return /* @__PURE__ */ jsx("div", {
    id: "background"
  });
};
__astro_tag_component__(Background, "@astrojs/react");

const $$Astro$g = createAstro("https://lea-stauder.art/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Layout;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  const resolvedImageWithDomain = new URL(
    // import screenshot of homepage
    "/opengraph.jpg",
    Astro2.site
  ).toString();
  const { title } = Astro2.props;
  const makeTitle = title ? title + " | Art.penter" : "Art.penter - L\xE9a Stauder - Art Portfolio";
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/png" href="/favicon.png">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <!-- TODO load screenshot of first contentfull paint -->
    <!-- <link rel="preload" as="image" href={src} alt="Hero" /> -->
    ${renderComponent($$result, "SEO", $$SEO, { "title": makeTitle, "description": "Art.penter is the personal Art Portfolio of L\xE9a Stauder", "canonical": canonicalURL, "openGraph": {
    basic: {
      url: canonicalURL,
      type: "website",
      title: `Art.penter - L\xE9a Stauder`,
      image: resolvedImageWithDomain
    },
    image: {
      alt: "Art.penter Portfolio Preview"
    }
  } })}
  ${renderHead($$result)}</head>
  <body class="relative background">
    ${renderComponent($$result, "Background", Background, {})}
    <section class="left-0 h-15 z-50 pt-20 px-10 w-full">
      ${renderComponent($$result, "Navbar", $$Navbar, {})}
    </section>
    <main class="relative z-10">
      ${renderSlot($$result, $$slots["default"])}
    </main>
    ${renderComponent($$result, "Footer", $$Footer, {})}
    
  </body>
</html>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/layouts/Layout.astro");

const $$Astro$f = createAstro("https://lea-stauder.art/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Hero", $$Hero, {})}` })}` })}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/index.astro");

const $$file$7 = "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/index.astro";
const $$url$7 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const MdxRenderer = ({
  mdxText
}) => {
  const mdxRenderer = (mdxArr) => {
    return mdxArr.map((node, index) => {
      if (node.type === "p") {
        return /* @__PURE__ */ jsx("p", {
          className: "text-xl",
          children: node.props.children
        }, index);
      }
      if (node.type === "h1") {
        return /* @__PURE__ */ jsx("h1", {
          className: "title text-4xl",
          children: node.props.children
        }, index);
      }
      if (node.type === "h2") {
        return /* @__PURE__ */ jsx("h2", {
          className: "subtitle text-2xl",
          children: node.props.children
        }, index);
      }
      if (node.type === "h3") {
        return /* @__PURE__ */ jsx("h3", {
          className: "subtitle italic text-2xl",
          children: node.props.children
        }, index);
      }
      if (node.type === "table") {
        return /* @__PURE__ */ jsx("table", {
          className: "styled-table",
          children: node.props.children.map((table, index2) => {
            if (table.type === "thead") {
              return /* @__PURE__ */ jsx("thead", {
                children: /* @__PURE__ */ jsx("tr", {
                  children: table.props.children.props.children.map((th, thIndex) => /* @__PURE__ */ jsx("th", {
                    children: th.props.children
                  }, thIndex))
                }, index2 + 1)
              }, index2);
            }
            if (table.type === "tbody") {
              return /* @__PURE__ */ jsx("tbody", {
                children: table.props.children.map((tr, trIndex) => {
                  return /* @__PURE__ */ jsx("tr", {
                    children: tr.props.children.map((td, tdIndex) => {
                      return /* @__PURE__ */ jsx("td", {
                        children: td.props.children
                      }, tdIndex);
                    })
                  }, trIndex);
                })
              }, index2);
            }
          })
        }, index);
      }
      return null;
    });
  };
  return /* @__PURE__ */ jsx(Fragment$1, {
    children: mdxRenderer(mdxText)
  });
};
__astro_tag_component__(MdxRenderer, "@astrojs/react");

const $$Astro$e = createAstro("https://lea-stauder.art/");
const $$Description = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Description;
  const descriptions = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/descriptions/0presentation.mdx": () => Promise.resolve().then(() => _page2),"../../pages/descriptions/1participatif.mdx": () => Promise.resolve().then(() => _page3),"../../pages/descriptions/2bodypaint.mdx": () => Promise.resolve().then(() => _page4),"../../pages/descriptions/3artisanat.mdx": () => Promise.resolve().then(() => _page5),"../../pages/descriptions/4paint.mdx": () => Promise.resolve().then(() => _page6)}), () => "../../pages/descriptions/*.{md,mdx}");
  const { id } = Astro2.props;
  const content = await descriptions[id].Content();
  const text = await content.props.children;
  return renderTemplate`${maybeRenderHead($$result)}<div class="w-full grid justify-center">
  <section class="w-8/12 grid gap-5 md:gap-10 text-center justify-self-center">
    ${renderComponent($$result, "MdxRenderer", MdxRenderer, { "client:load": true, "mdxText": text, "client:component-hydration": "load", "client:component-path": "@components/ui/MdxRenderer/MdxRenderer", "client:component-export": "default" })}
  </section>
</div>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/components/decorative/description.astro");

const $$Astro$d = createAstro("https://lea-stauder.art/");
const $$Sectionhead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["mt-16", align === "center" && "text-center"], "class:list")}>
  <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
    ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)}
  </h1>
  <p class="text-lg mt-4 text-slate-600">
    ${renderSlot($$result, $$slots["desc"], renderTemplate`Some description goes here`)}
  </p>
</div>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/components/sectionhead.astro");

const $$Astro$c = createAstro("https://lea-stauder.art/");
const $$Brush = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Brush;
  const { color, class: class2, width, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg version="1.1" id="svg48"${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 2012.3523 705.61829" sodipodi:docname="vecteezy_paint-brush-strokes-set_5948642.eps" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <defs id="defs52"></defs>
    <sodipodi:namedview id="namedview50" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" showgrid="false"></sodipodi:namedview>
    <g id="g56" inkscape:groupmode="layer" inkscape:label="Page 1" transform="matrix(1.3333333,0,0,-1.3333333,-2208.5374,4090.3137)">
      <g id="g58" transform="scale(0.1)">
        <g id="g1799-7-1" transform="matrix(0.99590839,0.09036853,0.09036853,-0.99590839,5828.7329,37012.413)" inkscape:export-filename="g1800.svg" inkscape:export-xdpi="96" inkscape:export-ydpi="96">
          <g id="g2204" transform="translate(-878.6935,-569.39585)">
            <g id="g1768-8-7">
              <g id="g1757-8-5" transform="translate(-67.053231,54.861734)">
                <path d="m 12969.433,12304.026 c 4.585,-1.699 9.363,-3.244 14.069,-4.644 -4.389,11.601 -9.152,8.311 -14.069,4.644 z m 363.229,-70.532 c 1.533,-1.422 2.952,-2.797 4.482,-4.228 -0.451,1.491 -2.128,2.879 -4.482,4.228 z M 18416.04,8829.1878 c -12352.0727,3194.3352 -6176.036,1597.1682 0,0 z m -6784.389,3695.9642 c 24.194,-5.036 31.551,0.42 53.059,-6.688 -19.029,23.611 -28.816,8.592 -53.059,6.688 z m 1334.009,15.187 c -4.677,12.192 -23.391,19.034 -40.687,26.448 -13.897,-16.049 23.819,-17.981 40.687,-26.448 z m -1450.496,-1445.478 c -35.169,7.556 -6.347,-4.268 11.38,-2.824 9.22,3.877 -11.247,9.324 -11.38,2.824 z m -210.958,910.968 c -13.85,3.56 -23.614,3.539 -29.84,-0.755 12.201,-3.725 29.529,-4.237 29.84,0.755 z m -179.674,50.441 c -1.986,0.308 -3.856,0.569 -5.845,0.867 1.698,-0.689 3.694,-0.966 5.845,-0.867 z m 465.16,511.363 c -0.193,-0.153 -0.493,-0.24 -0.687,-0.393 9.879,-0.35 19.648,-0.643 29.418,-0.938 -13.382,4.713 -22.97,5.13 -28.731,1.331 z m 958.123,64.604 c 12.906,-30.25 245.275,-22.651 245.275,-22.651 v 0 c 0,0 -70.942,4.206 -105.791,17.424 -50.393,4.482 -82.035,2.536 -139.484,5.227 z m -823.504,-1045.092 v 0 l -7.901,4.896 c 2.649,-2.568 7.901,-4.896 7.901,-4.896 z m -347.517,820.412 c -73.226,35.613 -158.427,16.053 -221.535,13.897 -17.113,-11.629 32.433,-31.517 28.557,-13.778 83.634,-28.812 128.58,-11.954 190.327,-1.127 27.623,-19.328 150.179,-35.079 119.828,-10.127 99.695,6.867 212.697,-11.631 313.808,-16.871 -12.048,5.399 -23.988,10.742 -36.149,16.187 0.124,-0.02 0.256,-0.02 0.377,-0.04 -152.993,24.571 -275.417,32.197 -423.12,34.066 5.145,-10.714 32.377,-9.237 27.908,-22.199 z m -0.956,136.37 c -31.692,5.404 -52.398,7.011 -80.198,7.061 15.698,-40.59 223.702,-67.036 111.244,-7.236 -14.906,5.506 -27.809,7.176 -31.046,0.175 z m 25.012,-1317.817 c -2.558,0.518 -4.801,0.838 -6.726,0.97 2.243,-0.32 4.483,-0.649 6.726,-0.97 z m -400.737,1382.247 c -10.847,-13.732 -3.317,-14.345 17.302,-16.17 11.883,11.736 -0.09,12.784 -17.302,16.17 z m 131.062,-14.93 c -8.757,3.762 -17.631,7.56 -26.385,11.333 -36.578,16.431 6.444,-24.084 26.385,-11.333 z m -430.33,151.124 c 8.683,-8.167 -8.581,-17.894 -5.857,-29.051 53.271,6.508 138.991,-23.659 150.573,20.148 -54.44,12.054 -94.519,-10.357 -144.716,8.903 z m 427.687,-40.032 c -16.445,10.809 -32.9,22.246 -49.338,32.75 -9.334,-9.031 -40.579,0.396 -56.915,-2.818 21.52,-30.792 81.422,-38.81 106.253,-29.932 z m 260.297,-113.314 c -127.924,56.779 6.309,-6.545 6.309,-6.545 v 0 c 0,0 -6.217,6.449 -6.309,6.545 z m 451.242,438.407 c 6.678,-6.288 13.246,-12.52 19.923,-18.809 11.904,-0.557 23.924,-1.151 35.828,-1.709 -18.585,6.835 -37.17,13.672 -55.751,20.518 z m 276.274,-164.914 c 48.732,6.045 -27.713,25.93 -47.34,25.001 8.869,-13.882 24.659,-23.382 47.34,-25.001 z m -293.542,-7.589 c 10.55,-1.618 21.105,-3.227 31.655,-4.845 -12.995,5.667 -23.638,7.381 -31.655,4.845 z m -48.233,29.95 c 67.577,-12.498 115.115,1.975 185.117,-11.043 -3.771,0.453 -7.534,0.926 -11.193,1.334 18.583,-9.117 44.32,-18.473 46.363,-32.931 -44.571,19.477 -27.363,-23.566 -53.757,-29.147 -127.347,40.657 -92.621,-37.518 -166.53,71.787 z m 1512.276,-2142.657 c 4.017,-4.398 6.817,-9.194 12.466,-13.142 1.739,-1.238 3.361,-2.441 4.873,-3.587 -2.583,5.657 -6.857,9.093 -17.339,16.729 z m 313.142,1770.611 c 0.121,-0.03 0.223,-0.101 0.453,-0.184 -0.06,0.185 -0.11,0.38 -0.162,0.575 -0.06,-0.149 -0.23,-0.242 -0.291,-0.391 z m 4488.887,-3788.7639 -859.511,321.6054 c -244.822,76.1783 1003.545,-267.645 859.511,-321.6054 z m -612.915,-212.9327 c -155.281,21.936 -316.679,33.2863 -474.273,46.1808 278.587,-73.9583 673.466,-66.7157 990.037,-113.3119 40.476,5.5909 99.503,-3.9444 150.338,-7.049 324.778,2.9132 -572.636,72.6332 -666.102,74.1801 z m 197.657,171.9575 c -1.269,7.4863 -10.74,14.0737 -24.082,20.4971 92.707,12.1435 -488.915,31.9468 -582.715,53.2761 22.655,-66.4969 458.987,-62.979 606.797,-73.7732 z m -618.471,48.91 c -5.933,0.4752 -11.876,0.9402 -17.817,1.4051 5.328,-1.5265 11.694,-1.461 17.817,-1.4051 z m -71.522,54.4971 c 135.692,10.9196 279.009,-13.4086 419.668,-21.7413 v 0 c 187.723,-18.2056 -370.227,90.0887 -458.014,106.9454 -170.786,23.0183 -156.123,67.7417 -235.376,80.5189 40.107,-20.3098 95.224,-38.5456 127.766,-59.7644 -35.167,-5.5203 -96.247,31.0885 -137.051,28.7174 -24.176,-19.9136 -1.848,-26.3855 34.831,-46.0426 -58.436,4.8416 -118.309,42.0877 -174.505,57.6919 19.361,27.6381 -53.572,45.8497 -74.46,45.689 85.669,-66.8103 -31.712,15.8574 -58.909,-1.126 71.376,-54.3513 155.6,-55.3996 232.764,-103.7105 45.741,-20.249 80.731,-50.3446 129.855,-47.9479 -46.305,26.3347 -16.811,20.8558 -11.86,45.4147 97.809,-21.5795 53.229,-30.862 205.291,-84.6446 z m -601.974,56.342 c -82.687,4.9245 -18.839,254.5768 -157.061,255.967 -46.493,8.562 11.995,-28.147 -5.563,-45.6165 54.151,-18.1453 151.883,-245.6421 191.291,-220.415 147.931,-34.0423 48.085,80.6797 -28.667,10.0645 z m 89.889,-37.5041 c -25.394,1.9601 -65.984,19.2057 -29.04,-12.3216 16.284,-1.2043 23.499,4.8998 29.04,12.3216 z m -167.164,349.662 c 7.228,3.7148 -2.915,11.1658 -12.694,14.7245 -60.757,26.5998 -82.424,54.0526 -143.861,48.6601 -46.677,11.8311 -71.349,16.9874 -110.235,45.6222 31.923,3.4051 168.649,-56.4538 145.479,-25.7902 -93.894,40.9441 -187.887,55.0555 -281.16,91.9483 14.343,11.6734 15.145,12.3193 -11.63,26.9196 11.138,10.4267 41.237,-22.5743 64.9,-14.2624 -25.301,27.0067 -66.134,34.8903 -101.279,49.6068 -64.644,27.6593 -113.899,72.7618 -183.869,75.8614 -120.02,21.512 -251.794,68.8394 -382.146,107.4411 104.924,-75.1958 220.005,-139.4585 350.08,-176.8796 206.154,-114.0227 443.585,-184.7491 666.415,-243.8518 z m -184.394,1495.1331 c 32.843,-28.633 80.649,-44.332 123.024,-58.519 -3.87,22.109 -50.631,37.988 -76.716,49.503 -36.661,19.756 -65.08,44.132 -106.753,60.052 173.999,-31.041 -163.027,122.961 -204.287,161.7 -13.065,15.673 -31.713,29.824 -53.704,42.915 v 0 c -10.489,5.8 -20.978,11.6 -31.474,17.382 v 0 c -559.663,422.598 144.342,-213.943 349.906,-273.042 z m -1110.946,-820.9169 c -170.288,80.872 -236.502,67.165 -33.575,-31.14 v 0 0 c 24.278,-14.904 50.501,-25.546 78.349,-32.714 105.362,3.797 6.751,46.418 -44.774,63.854 z m 127.733,1486.1379 c 742.698,-548.909 -95.678,372.277 -402.278,416.654 -0.405,0.304 -1.233,0.86 -1.428,1.032 0.271,-0.308 0.664,-0.641 1.043,-1.003 -46.58,15.175 -120.702,59.951 -120.702,59.951 v 0 c 0,0 -148.515,60.945 -78.565,21.486 69.965,-40.402 136.478,-87.684 215.979,-113.683 78.202,-12.631 69.313,-156 53.211,-181.582 36.582,10.893 93.731,-37.36 132.746,-62.485 30.698,7.831 53.085,-29.282 11.831,-7.813 48.016,-43.898 132.014,-80.243 188.163,-132.557 z m -468.048,482.336 v 0 l -367.155,219.073 v 0 c 0,0 -92.625,36.873 -130.389,52.981 1.188,0 2.494,-0.03 3.682,-0.02 -68.591,24.293 -142.401,50.67 -209.09,61.129 49.917,-30.344 96.107,-58.504 152.613,-61.24 -10.488,-5.703 51.897,-16.373 17.301,-19.424 -37.378,15.76 -12.264,-4.554 -2.689,-22.219 85.289,-49.1 148.553,-22.19 232.505,-59.967 -16.715,-9.671 4.22,-12.343 19.31,-20.32 4.426,-23.531 -41.86,7.643 -48.329,17.692 -64.306,6.261 20.366,-45.981 66.086,-48.984 98.941,-18.383 266.153,-118.702 266.153,-118.702 z m -1289.276,-1263.62 c -133.698,83.812 -309.798,115.444 -459.132,161.377 13.266,-6.946 21.737,-11.415 26.552,-14.817 -12.779,-40.912 92.33,-30.129 141.787,-67.454 32.587,-49.331 167.569,-50.057 248.503,-102.09 35.279,-14.434 70.757,-29.028 106.023,-43.492 6.8,-1.763 13.595,-3.212 20.151,-4.275 26.2,29.144 -54.391,47.584 -83.884,70.751 z m -695.95,211.04 c 20.281,18.784 -44.298,45.166 -51.852,27.527 11.564,-64.097 164.483,-57.986 216.735,-120.914 221.368,-35.101 -85.535,90.077 -164.883,93.387 z m -53.648,17.904 c -24.97,5.398 -29.051,-2.708 -31.267,-12.068 21.84,-3.363 28.958,2.804 31.267,12.068 z m -33.175,-12.22 c -13.394,4.682 -22.653,4.608 -28.928,1.167 13.495,-4.758 23.11,-5.106 28.928,-1.167 z m -148.349,43.484 c -3.185,-0.375 -6.527,-0.813 -10.169,-1.339 170.719,-87.453 130.423,-6.437 10.169,1.339 z m 14.998,211.093 c -95.488,21.371 -270.558,46.772 -270.558,46.772 v 0 c 0,0 242.936,-82.02 237.575,-73.788 86.647,-44.452 151.146,9.864 32.983,27.016 z m -37.759,-173.937 c -12.187,6.359 -22.236,8.237 -30.048,5.559 12.377,-6.54 22.135,-7.836 30.048,-5.559 z m -282.103,176.868 c -11.828,-19.726 57.905,-25.932 80.07,-34.997 201.958,-28.995 3.323,52.047 -80.07,34.997 z m 70.708,-52.215 c -6.919,-0.157 -26.208,5.923 -12.451,-2.74 9.303,-9.242 10.14,-4.254 12.451,2.74 z m -86.664,-1.722 c -28.68,34.591 -57.424,26.466 -88.909,30.432 26.227,-22.444 58.486,-30.673 88.909,-30.432 z m -36.675,558.095 -1.067,0.294 v 0 l 100.388,-41.783 v 0 c 0,0 15.284,3.547 29.321,-2.474 105.031,19.687 -93.433,38.776 -128.642,43.963 z m -346.681,-367.243 c -89.58,0.838 97.457,-51.607 131.83,-41.956 294.587,-59.038 -32.93,49.134 -131.83,41.956 z m 68.312,320.042 c -8.691,-10.693 -31.084,-3.492 -51.154,5.533 -187.547,9.275 -50.072,-49.633 46.288,-29.543 74.492,-11.704 91.286,16.359 4.866,24.01 z m -168.114,-3.267 c 3.3,20.153 -61.448,16.23 -63.77,7.259 24.454,-6.345 45.156,-11.863 63.77,-7.259 z m -79.018,40.835 c 22.903,-2.695 44.434,-2.922 59.499,2.035 -24.42,-2.017 -56.557,15.287 -59.499,-2.035 z m 268.305,-268.042 c -8.871,-0.742 -17.625,-1.52 -26.384,-2.309 27.982,-10 61.414,-30.285 26.384,2.309 z m -11.92,-32.947 c 11.294,-3.357 26.181,-9.884 28.596,0.936 -9.5,-0.338 -19.102,-0.608 -28.596,-0.936 z m 85.925,285.797 c -7.604,-15.812 60.557,-20.696 79.1,-19.838 14.23,24.668 -70.687,29.197 -79.1,19.838 z m 61.758,-63.543 c -50.237,-8.782 18.136,-39.784 48.339,-31.962 105.301,-8.562 -5.447,28.811 -48.339,31.962 z m 390.529,965.856 c -1.353,-13.729 23.414,-23.202 43.268,-30.159 61.155,9.689 -11.597,25.029 -43.268,30.159 z m 62.675,-213.331 c -1.641,-5.668 5.485,-11.177 16.737,-16.588 -5.546,5.504 -11.2,11.064 -16.737,16.588 z m 202.072,139.248 c 273.919,-39.139 -77.869,50.164 -155.95,51.722 -32.493,-61.873 112.429,-42.327 155.95,-51.722 z m 510.956,37.794 c 54.269,-15.4 -20.888,23.901 -38.915,30.812 -28.915,16.147 -53.127,5.87 -86.696,20.293 -24.419,-3.314 -55.783,1.598 -85.854,12.945 -15.928,-1.885 -54.714,10.405 -54.714,10.405 v 0 c 0,0 -646.808,139.797 -329.9,42.844 207.772,-43.259 391.833,-82.894 596.079,-117.299 z m -687.467,184.183 c -14.942,21.985 -46.229,32.286 -66.357,19.402 20.49,-15.136 43.533,-14.888 66.357,-19.402 z m 135.882,-17.674 c -4.26,18.091 -43.291,27.18 -64.107,35.015 -12.043,-15.054 45.972,-29.022 64.107,-35.015 z m 111.596,-22.616 c 8.194,-3.847 16.288,-6.321 24.275,-7.432 -9.22,7.818 -22.407,23.082 -24.275,7.432 z m 394.926,-84.693 c 82.665,-25.026 239.781,-61.53 239.781,-61.53 v 0 c 0,0 71.753,-45.088 120.434,-64.185 19.659,-3.543 39.207,-7.03 58.756,-10.517 -7.109,17.569 -12.385,19.189 -48.846,31.033 -86.959,55.706 204.39,-27.875 241.996,-46.646 35.334,16.892 175.806,-67.121 159.802,-17.213 -151.379,64.283 -309.413,78.707 -464.042,125.562 v -0.01 c -87.941,27.295 -264.09,64.656 -264.09,64.656 v 0 c 0,0 -54.423,11.121 -81.689,16.71 -96.612,22.497 -12.891,-26.568 37.903,-37.859 z m 728.172,-60.493 c -1.577,6.835 -7.43,8.33 -15.417,7.171 4.994,-2.64 10.04,-5.151 15.417,-7.171 z m -244.098,38.871 c 75.859,-43.744 166.351,-65.079 254.297,-93.661 -58.07,53.466 -183.785,79.299 -254.297,93.661 z m 397.791,-589.325 c -37.281,28.019 -90.082,14.546 -117.646,51.891 -21.472,9.467 -93.375,24.624 -43.117,-6.506 0,0 -0.593,0.165 -1.294,0.386 33.794,-10.623 252.248,-111.706 162.057,-45.771 z m -288.297,222.355 c -8.736,19.41 -34.719,28.809 -63.349,36.56 -18.763,-16.344 44.602,-24.922 63.349,-36.56 z m -78.651,206.127 c 89.846,-25.521 197.884,-110.509 278.186,-91.974 11.424,43.745 -79.255,40.248 -115.188,57.945 -39.518,7.238 -70.433,17.156 -109.318,33.423 4.598,-22.455 -38.453,8.565 -53.68,0.606 z m 8.604,-45.4 c -33.252,33.725 -459.028,97.31 -276.94,42.091 8.875,-4.771 17.633,-9.506 26.508,-14.278 68.643,-6.62 569.542,-142.079 250.432,-27.813 z m -499.255,-1354.944 c -25.22,28.496 -175.844,63.455 -171.05,38.557 42.628,-20.368 153.167,-64.43 171.05,-38.557 z m -279.238,-112.043 c 29.224,-12.786 59.176,-28.324 84.022,-22.333 -29.374,13.391 -57.725,22.152 -84.022,22.333 z m 211.454,430.391 c -4.727,14.019 -24.15,22.69 -46.187,30.441 -11.235,-19.237 26.832,-20.953 46.187,-30.441 z m 230.295,810.797 c -3.567,3.232 -6.835,6.874 -10.617,9.903 1.148,-4.646 3.922,-7.556 10.617,-9.903 z m 44.349,341.569 c -36.929,22.062 -72.143,34.709 -107.461,47.096 -8.375,-22.261 73.203,-36.968 107.461,-47.096 z m -373.865,-248.392 c 3.353,-8.309 15.23,-16.405 21.569,-24.501 29.515,-1.997 93.878,-31.835 107.659,-17.696 -24.999,10.527 -48.268,23.04 -73.536,31.603 -19.452,4.699 -33.753,1.298 -55.692,10.594 z m -624.37,-893.269 c 6.687,-13.413 24.591,-22.902 46.564,-30.813 45.94,10.213 -18.855,34.437 -46.564,30.813 z m 515.828,1060.83 c 15.458,21.518 -43.013,28.515 -64.058,33.837 9.711,-16.03 41.679,-28.877 64.058,-33.837 z m 155.867,67.955 c 241.38,-60.512 -22.156,37.675 -22.156,37.675 v 0 c 0,0 -104.112,32.93 -157.9,37.494 0,0 -0.679,-0.05 -0.675,-0.04 -42.095,-53.368 128.213,-59.641 180.727,-75.14 z m -538.809,-1456.635 c -16.877,-14.621 40.525,-20.998 51.543,-20.49 100.692,-26.089 -7.011,15.212 -51.543,20.49 z m 186.123,38.873 c -25.786,23.203 -96.898,62.078 -124.628,50.277 24.635,-35.785 81.337,-40.317 124.628,-50.277 z m 59.607,-48.381 c 44.549,-17.581 77.395,-43.858 117.67,-35.909 -20.071,28.19 -83.579,43.89 -117.67,35.909 z m 161.319,-7.628 c 108.79,-39.924 36.096,9.021 -28.531,22.615 0.109,-0.06 0.109,-0.06 0.106,-0.06 -34.739,22.262 -69.424,31.335 -103.935,33.368 -66.568,-18.805 108.768,-55.247 132.361,-55.917 z m 462.509,-134.215 v 0 c 30.438,-12.064 60.999,-24.154 91.552,-36.264 19.819,-20.04 79.613,-36.119 106.252,-33.834 -8.758,4.088 -17.511,8.184 -26.148,12.245 v 0 c -80.765,29.384 -81.906,89.275 -161.82,106.132 -55.783,6.473 -148.015,73.549 -189.177,49.446 54.435,-40.005 121.088,-72.325 179.34,-97.726 z m 632.97,1651.942 c 44.006,-55.956 -85.581,15.567 -106.648,5.566 28.334,-17.903 86.799,-24.585 95.795,-50.503 46.128,-15.64 218.1,-109.102 134.903,-33.407 11.4,-3.422 25.033,-8.492 26.221,-1.343 -57.438,33.582 -45.078,27.002 10.778,36.631 29.738,38.512 -166.541,116.594 -95.962,53.662 -169.709,62.98 -527.248,200.161 -527.248,200.161 v 0 c 0,0 -181.339,66.484 -264.635,68.189 -53.314,14.828 -109.42,68.261 -158.432,64.448 -11.792,-3.391 -0.952,-14.692 5.437,-23.966 -22.259,10.458 -10.259,-10.982 -12.095,-20.705 -16.709,11.459 -42.925,6.315 -16.972,-5.109 59.127,0.147 148.008,-57.971 224.245,-70.568 16.002,-6.054 48.135,-18.169 48.135,-18.169 v 0 c 0,0 419.453,-149.987 636.478,-204.887 z m 244.715,-187.773 c -253.29,93.218 -237.275,55.036 4.348,-15.926 v 0.01 c 79.116,-32.792 58.55,-0.95 -4.352,15.916 z m 163.387,116.376 c 111.201,-27.157 9.236,27.958 -38.576,42.37 -16.468,-22.058 11.046,-28.985 38.576,-42.37 z m 15.426,-102.014 c -11.129,-32.62 314.209,-158.505 225.072,-102.644 37.264,8.002 82.866,-34.603 118.915,-51.363 72.621,22.348 -154.947,113.648 -204.387,132.821 -40.245,-17.943 -90.682,16.318 -139.6,21.186 z m 185.755,11.973 c 18.954,-8.202 70.842,-41.812 71.291,-20.237 -18.831,7.527 -64.955,39.748 -71.291,20.237 z m 148.03,-334.392 c -136.312,65.348 99.629,-95.31 117.901,-71.077 -21.673,23.595 -83.048,47.472 -117.901,71.077 z m 210.584,17.923 c 224.312,-149.999 273.724,-289.827 -9.691,-130.041 -354.207,169.639 -604.322,380.537 9.691,130.041 z m 229,-431.94 c -8.912,-16.111 24.861,-18.518 38.445,-27.063 0.975,13.04 -25.028,21.564 -38.445,27.063 z m 109.191,34.772 c -43.369,18.388 -76.975,43.013 -112.099,68.686 -31.019,24.352 -79.643,58.244 -121.47,52.243 29.226,-24.251 63.381,-38.749 93.547,-60.682 v 0 c 25.478,-14.603 181.662,-149.907 140.018,-60.256 z m 163.037,-237.815 c 8.914,0.159 17.921,0.281 26.835,0.441 -10.616,13.73 -58.216,12.65 -26.835,-0.441 z m -34.172,-245.618 c -24.929,-3.19 22.583,-38.757 38.118,-42.494 18.418,23.046 -14.361,29.766 -38.118,42.494 z m -468.093,1097.994 c 128.685,-82.843 172.779,-281.708 279.01,-348.897 18.3,-21.122 68.024,-63.739 98.488,-62.601 72.325,-72.553 181.926,-138.088 269.404,-201.757 v 0 c 12.913,-13.389 179.124,-145.79 152.068,-88.004 -48.625,41.868 -110.676,80.702 -157.502,126.47 -25.512,61.854 -138.751,69.229 -164.203,122.457 -34.969,35.894 -86.277,63.171 -124.793,98.303 -98.979,58.732 -149.868,263.595 -270.599,335.496 -25.085,13.238 -65.221,19.278 -77.656,40.618 -137.777,50.368 -143.43,25.716 -4.217,-22.085 z m 1104.562,-948.936 c 62.057,-8.77 -27.209,52.355 -43.475,65.993 -121.949,58.772 -1.909,-38.477 43.475,-65.993 z m 164.932,-304.945 c 38.159,-38.139 237.69,-145.61 99.045,-50.858 -38.118,41.165 -48.119,46.304 -99.045,50.858 z m 113.356,-13.735 c -2.232,-27.305 60.434,-56.292 89.487,-68.823 20.628,33.417 -66.573,46.573 -89.487,68.823 z M 15948.73,9374.5984 c 25.366,-24.4538 100.73,-36.3361 59.144,-15.682 -16.175,4.2873 -32.346,8.5838 -59.144,15.682 z m 240.125,-148.9187 v -0.01 z m 66.283,-4.4738 c 12.547,-14.5567 29.302,-20.8709 49.104,-21.0075 -16.369,6.9994 -32.735,14.0081 -49.104,21.0075 z m -286.671,117.9923 c 29.703,-11.3746 59.906,-31.0894 88.419,-24.9189 2.476,-19.4271 32.541,-28.3151 53.06,-32.0021 69.755,-16.3944 116.226,-48.6791 188.869,-74.178 50.584,-13.3734 98.331,-187.8174 147.423,-208.637 -34.089,32.8305 -90.969,44.8195 -9.825,38.6359 -80.223,44.4022 -185.537,231.6427 -261.395,239.6464 -44.569,11.4399 -47.771,37.3237 -88.806,45.5054 -35.793,-21.7141 -77.885,20.827 -117.745,15.9483 z m 662.919,-424.4752 c 3.758,-1.8098 11.386,-5.1233 15.242,-6.6678 -2.786,8.8377 -8.078,10.5845 -15.242,6.6678 z m 764.039,1503.667 c 37.089,-18.558 131.844,-26.395 179.041,-18.245 -47.067,8.114 -158.161,42.634 -179.041,18.245 z m 615.568,-82.997 c 12.166,-7.31 25.313,-14.858 37.286,-22.116 123.347,-21.813 192.256,-34.492 76.154,-58.066 49.349,-24.876 146.13,-29.59 203.137,-53.074 341.155,5.622 422.543,-7.586 -24.587,111.216 21.424,16.579 -52.098,19.383 -80.133,28.492 -3.059,-2.66 -7.884,-4.898 -13.626,-6.815 -80.65,13.496 -116.509,-9.445 -198.231,0.363 z m 192.314,-149.777 c 32.255,-12.605 116.615,-15.601 166.056,-26.011 17.293,-2.651 29.861,-5.066 38.84,-7.583 -45.708,17.721 -168.273,20.017 -204.896,33.594 z m 216.743,25.158 c -16.754,0.687 -33.496,1.098 -49.889,1.068 16.427,-0.513 33.416,-0.32 50.282,-1.161 -12.045,3.363 -24.735,6.504 -38.847,9.331 13.902,-2.797 26.601,-5.926 38.454,-9.238 z m -676.9,-1497.871 c -14.885,1.8576 -29.761,3.7255 -44.653,5.5729 -46.039,-9.3388 51.48,-19.8617 44.653,-5.5729 z m 1.292,-31.4697 c -48.783,2.1588 -10.192,-6.9052 14.672,-11.7836 15.26,6.8105 8.013,9.446 -14.672,11.7836 z m -109.056,73.0863 c 77.927,-20.4198 574.967,-71.1773 380.818,-25.0057 -88.234,6.6349 -509.817,82.7777 -380.818,25.0057 z m 55.019,78.2596 c 54.006,-38.658 215.523,-31.4129 310.452,-48.6969 38.656,7.9981 110.904,6.5256 147.037,5.2169 40.125,8.3725 113.647,-0.8726 183.806,-10.8145 181.678,0.2828 -110.347,46.5813 -156.332,21.499 -152.942,24.2813 -326.826,18.8262 -484.963,32.7955 z m 185.545,37.3312 c 46.417,-26.4936 58.169,-28.7625 140.88,-27.3786 -46.956,9.4226 -91.675,21.6509 -140.88,27.3786 z m 28.73,36.2694 c 109.881,-37.5021 197.699,-0.7394 324.811,-32.1824 61.491,-17.5768 123.087,-20.3817 186.835,-22.8343 40.671,-7.9243 100.185,-12.1653 112.581,-27.971 830.146,-83.6866 -93.05,18.8246 -375.951,79.9929 -58.592,6.273 -347.78,53.7808 -248.276,2.9948 z m 381.888,159.915 c 48.562,-13.8533 103.318,-24.0524 156.805,-24.1275 151.881,-4.5278 -153.05,51.6689 -156.805,24.1275 z m 73.871,-156.375 c 4.09,-8.6387 -4.884,-14.6065 37.648,-19.029 25.872,10.7294 -12.368,15.55 -37.648,19.029 z M 11727.5,10969.605 c -1.537,1.736 -2.603,5.932 -5.121,5.9 1.719,-1.937 3.334,-3.808 5.121,-5.9 z m 122.825,668.463 c -6.706,6.219 -13.42,12.417 -20.238,18.682 -4.919,-6.92 3.683,-13.016 20.238,-18.682 z m 26.162,210.014 c -48.621,13.722 -87.421,11.033 -134.189,18.272 7.724,-0.461 15.562,-0.966 23.395,-1.482 -20.178,1.611 -76.098,9.368 -41.984,-10.533 -0.105,0.06 -1.084,-4.297 -1.246,-4.046 43.826,-17.414 215.618,-49.917 154.024,-2.211 z m -196.436,-204.635 c -6.032,13.727 -23.365,32.098 -44.201,44.433 -0.21,-29.756 -60.396,4.2 -88.901,0.888 85.475,-54.49 28.583,-55.95 133.102,-45.321 z m -119.277,147.936 c 22.733,-7.663 -3.573,-11.079 22.219,-18.999 212.66,-62.404 154.428,44.267 -22.219,18.999 z m 163.682,164.533 c -29.778,42.609 -89.027,35.666 -138.169,48.43 31.311,-32.01 95.925,-57.33 138.169,-48.43 z m -108.362,133.57 c -24.705,-51.451 240.425,-34.277 283.722,-42.597 -58.824,57.13 -204.869,40.668 -283.722,42.597 z m -229.004,-203.009 c 18.384,-7.333 36.881,-14.712 55.26,-22.056 188.513,-3.32 15.57,39.989 -55.26,22.056 z m 236.837,259.998 c 11.608,-16.881 26.95,-26.836 50.611,-21.164 10.359,6.032 36.919,0.326 53.21,-9.563 17.924,25.972 -57.314,24.14 -72.704,51.843 -43.941,43.772 -83.852,28.275 -126.486,29.459 -28.636,-12.084 -162.688,45.84 -176.226,-2.79 56.093,-7.004 136.931,-26.784 171.839,-7.369 27.786,-14.704 161.167,-55.437 99.755,-40.419 z m 244.533,244.196 c 7.459,-2.089 14.719,-3.692 21.777,-4.82 -11.124,11.578 -16.38,8.049 -21.777,4.82 z m 25.702,-367.785 c -38.234,3.902 -76.578,7.861 -114.812,11.763 31.354,-43.921 160.95,-63.768 188.519,-39.696 -16.739,7.164 -33.978,14.392 -50.83,21.601 -7.454,1.451 -15.155,3.592 -22.877,6.332 z m 172.924,155.142 c -10.667,13.675 -21.369,23.691 -41.468,26.475 -54.062,-7.808 10.8,-28.619 41.468,-26.475 z m 6.264,147.336 c 31.832,-10.256 45.665,9.861 7.356,17.476 -6.679,-3.785 -5.404,-11.366 -7.356,-17.476 z m 205.091,221.085 c -2.564,-3.394 -3.106,-8.628 -4.995,-12.633 26.373,-10.713 31.743,-3.329 4.995,12.633 z m -423.559,96.661 c 60.126,-46.773 174.26,-41.366 239.378,-46.926 l 81.244,-21.056 c 6.457,1.942 18.437,1.897 28.927,0.779 253.585,16.67 -283.982,78.02 -349.549,67.203 z m 322.953,166.479 c 2.518,-35.38 132.027,-52.516 132.027,-52.516 v 0 c 0,0 -91.31,58.954 -132.027,52.516 z m 6334.059,-3137.6156 c -12341.2627,2552.0176 -6170.631,1276.0086 0,0 z m -3514.655,-196.4627 c -236.281,140.0415 -493.551,299.6314 -677.959,474.4164 -382.852,218.4539 -956.774,461.7439 -1467.516,650.9209 -76.865,25.347 -646.213,179.275 -415.992,194.578 -45.02,20.969 -85.2,13.907 -115.137,13.562 -50.624,23.73 -104.431,55.537 -134.399,28.802 198.123,-93.351 -65.599,-46.956 -142.29,-21.507 -141.498,99.356 35.833,20.07 90.389,13.829 141.026,21.313 -240.612,135.828 -295.554,132.997 -28.811,-10.24 -72.977,2.114 -111.172,6.44 -8.131,-24.26 -175.089,53.294 -126.217,26.871 -33.599,-0.596 -120.283,26.872 -103.123,56.812 50.146,-13.866 83.194,18.184 119.348,12.08 181.645,-59.23 130.021,35.785 130.021,35.785 v 0 c 0,0 -228.406,19.707 -338.424,25.089 -19.626,-31.788 -91.134,26.251 -131.129,27.441 -1.953,29.949 91.031,-7.011 41.069,34.92 -36.199,6.319 -181.682,18.856 -99.266,39.673 154.085,-3.685 306.062,-26.86 475.514,-46.287 91.606,72.704 -65.099,60.186 -131.779,113.88 51.319,25.412 21.421,31.338 -34.472,40.137 -124.508,56.748 247.952,-1.109 281.308,-16.384 19.474,46.361 -204.233,49.06 -86.561,71.306 217.536,-5.882 -165.157,51.127 -211.771,49.652 v 0 c -25.349,-2.034 -62.639,15.242 -83.426,9.18 v 0 c -42.46,-12.03 -112.158,13.106 -165.408,16.073 -48.501,85.817 182.507,15.016 259.65,9.196 55.343,-14.052 3.06,22.81 40.248,29.65 -49.713,32.797 -87.057,17.451 -136.691,16.658 -99.943,-4.23 -283.05,52.7 -91.956,53.138 5.326,2.076 19.699,0.782 29.045,0.741 l -1.759,-0.109 c 78.396,-0.133 151.664,-31.419 227.468,-18.77 50.725,-24.454 103.741,-34.494 155.349,-36.956 71.503,-2.825 137.313,19.31 28.872,75.039 -48.204,-4.744 -94.997,2.111 -144.179,9.251 -11.88,-11.402 -53.089,-1.186 -62.972,-10.271 -73.445,58.791 -205.693,50.011 -292.026,54.952 -112.875,56.172 136.698,25.919 181.009,12.625 32.526,-0.103 14.578,25.847 -12.198,23.548 -112.125,17.086 133.325,50.747 133.325,50.747 v 0 c 0,0 -152.419,-3.904 -269.672,59.673 44.586,10.125 108.934,7.216 171.41,17.887 -22.808,23.071 -69.669,33.334 -72.836,14.806 -117.301,20.577 -410.896,55.092 -116.476,60.622 0.962,35.183 -125.998,-2.805 -170.055,44.256 99.467,15.726 231.606,-22.546 325.172,-8.363 -71.826,27.367 37.404,23.289 -33.851,53.365 60.417,7.545 -22.246,29.327 -40.345,52.629 -12.185,3.44 -23.383,5.738 -28.343,0.988 -15.427,4.547 -46.285,13.631 -46.285,13.631 v 0 c 0,0 -88.159,10.187 -134.786,16.476 -3.957,-11.051 -22.39,-1.891 -33.231,3.562 -7.421,-16.014 -35.365,4.799 -53.729,7.957 -31.386,-4.564 -93.792,-9.541 -93.792,-9.541 v 0 c 0,0 -388.317,87.661 -14.737,28.34 -0.116,0.04 -0.12,0.03 -0.124,0.02 62.693,-11.212 106.243,30.148 175.675,5.329 107.726,-9.084 225.823,-36.794 316.47,-26.555 17.904,-8.517 11.098,-16.189 11.423,-23.511 42.312,-9.448 59.873,4.581 90.918,15.778 -49.888,11.573 -79.882,56.899 -124.612,49.994 -53.594,4.716 -88.869,1.292 -141.437,7.236 -5.843,-19.596 -79.485,-26.915 -84.901,7.822 -30.147,33.901 -116.073,10.282 -148.648,65.167 -60.226,-2.203 -360.417,3.71 -213.649,-37.824 -23.932,-11.861 -65.486,-6.391 -52.797,20.975 -43.008,26.904 10.591,44.291 46.281,42.893 38.429,-8.3 51.964,-1.589 40.514,20.231 25.791,6.045 -7.742,13.737 -18.85,20.804 18.744,9.15 59.89,3.648 62.912,23.116 70.996,-1.473 -99.408,16.257 -94.366,-9.98 -296.126,-11.033 -35.815,40.404 82.923,51.632 -27.204,39.204 74.64,36.097 100.711,17.491 167.344,53.351 523.909,16.43 772.639,0.02 48.543,-0.918 62.04,49.558 35.822,81.447 35.481,4.58 181.827,-5.829 153.325,-48.769 62.074,-16.31 71.418,1.193 11.462,19.145 117.129,17.336 292.723,-59.729 415.173,-45.525 -68.708,19.454 -134.194,24.434 -174.694,54.917 -26.416,32.374 -35.392,-10.534 -61.288,8.174 -23.253,17.427 -79.846,10.206 -109.722,14.237 -53.005,18.512 -95.263,19.323 -138.019,20.856 -49.82,-6.126 -364.667,40.349 -185.69,50.891 -1.848,0.642 -3.698,1.282 -5.437,1.871 0.264,0 0.408,0.03 0.671,0.03 -26.008,15.511 26.67,3.662 41.25,-5.242 v -0.02 c 179.825,-27.332 283.21,7.473 454.814,-25.172 4.334,20.753 64.137,-14.472 94.214,-22.232 54.66,-14.111 371.95,-50.992 208.533,-3.05 -73.086,26.211 -210.632,52.781 -210.632,52.781 v 0 c 0,0 -42.849,7.802 -54.982,6.819 -20.264,14.072 -30.947,3.342 -54.239,12.876 -40.916,8.013 -77.087,-3.466 -115.472,-4.806 -72.144,24.635 -134.249,11.95 -220.91,28.43 0.262,-5.526 -19.095,2.655 -29.565,-2.998 -30.032,1.373 -70.075,14.462 -88.335,0.983 -87.132,3.946 -39.884,39.798 -39.884,39.798 v 0 l 1.759,0.108 c 101.04,-9.636 206.719,-10.442 310.1,-14.312 -59.446,44.227 -160.489,27.544 -239.507,45.635 -123.31,18.767 -46.63,9.209 -71.223,42.499 -67.974,27.436 -127.909,0.611 -197.113,18.519 -6.958,-4.149 -18.141,-5.388 -17.472,3.732 -96.61,49.467 -152.209,25.527 -253.629,44.951 -16.709,77.083 -74.436,48.875 -178.722,63.511 33.973,34.002 138.231,11.504 209.794,10.126 25.181,-47.437 103.694,-35.587 139.687,-35.916 189.123,-53.801 135.033,18.569 201.019,8.001 30.826,6.758 92.459,-13.564 132.202,-14.072 24.113,1.261 55.826,-5.715 85.325,-12.95 58.599,-12.202 398.335,-39.908 194.904,-56.125 37.16,-35.462 123.581,-19.073 175.826,-32.309 104.461,-9.982 195.884,-40.715 295.593,-58.832 11.003,-0.829 33.015,-2.468 33.015,-2.468 v 0 c 0,0 34.266,-4.584 51.288,-6.825 27.942,-12.371 75.994,-16.772 75.994,-16.772 v 0 c 0,0 299.396,-46.213 453.073,-97.36 55.44,-1.794 124.321,-19.199 187.372,-39.6 15.034,2.607 31.845,1.146 53.895,-8.845 414.984,-97.975 -206.71,110.2 -328.497,106.079 -22.732,19.359 0.262,30.21 -45.843,46.559 -34.199,1.5 -146.913,58.395 -66.931,39.426 v 0 c 24.637,-10.115 59.126,-13.828 77.714,-19.033 50.017,-30.096 99.808,-28.914 153.744,-53.258 v -0.01 c 205.669,-46.817 364.254,-75.151 41.173,31.278 v 0 c -13.948,-1.553 -57.785,20.707 -52.787,11.58 -193.638,53.074 -393.799,142.702 -583.949,138.419 26.12,-78.586 -227.413,28.325 -299.109,34.574 v 0.01 c -46.881,17.682 -170.15,1.785 -152.682,49.7 4.819,-2.095 14.425,-5.715 19.304,-7.336 -0.734,22.23 43.935,-10.327 58.025,1.65 -203.828,77.022 -92.089,50.214 21.748,40.92 36.791,2.936 71.277,-5.003 15.762,19.021 0.761,11.943 -6.451,29.912 19.01,16.95 212.825,-38.281 464.449,-53.734 710.386,-116.339 -95.611,76.947 -241.62,73.567 -354.886,116.755 -17.449,-4.66 -40.8,7.653 -62.968,11.833 -27.738,3.128 -86.314,23.507 -86.314,23.507 v 0 c 0,0 -277.773,24.121 -351.011,95.439 212.092,-30.017 428.766,-86.106 641.608,-136.367 46.563,-13.594 85.569,-22.417 129.638,-41.183 57.048,-7.577 117.017,-31.347 177.174,-45.883 60.83,11.488 160.494,-54.493 238.094,-71.857 62.446,-39.76 314.22,-97.727 110.748,-7.81 -94.9,30.941 -281.451,88.481 -281.451,88.481 v 0 c 0,0 -102.425,24.093 -156.113,41.898 -230.77,60.34 -468.142,120.985 -686.437,167.553 v 0.01 c -39.896,4.68 -457.64,90.655 -322.796,31.761 -33.585,3.012 -91.234,22.101 -103.877,3.945 -33.361,22.733 -50.855,0.09 -80.878,30.078 156.864,-34.526 -33.814,74.575 165.556,19.707 76.005,-2.451 247.525,-38.872 247.525,-38.872 v 0 c 0,0 36.614,-3.674 49.699,-7.167 4.455,5.777 1.493,15.699 20.451,13.355 171.367,-36.799 340.148,-67.951 515.653,-119.572 137.605,-64.761 225.158,-51.427 358.221,-93.594 270.266,-81.926 537.003,-202.44 804.714,-302.032 436.164,-175.412 880.541,-485.337 1199.5,-695.291 153.033,-74.722 277.535,-173.21 414.517,-262.754 41.259,-19.065 75.598,-40.555 91.428,-68.564 64.999,-34.494 92.738,-85.542 161.04,-124.399 -1.162,-6.586 8.11,-12.724 16.923,-18.664 81.431,-90.537 -70.58,-35.634 49.554,-111.38 6.172,-14.041 51.957,-43.76 50.397,-14.366 24.787,66.662 212.338,-129.364 263.217,-157.168 273.635,-196.384 344.782,-325.561 1051.212,-434.153 265.886,-460.301 1711.801,-95.587 1191.364,-206.128 -42.787,16.109 -187.831,21.876 -73.782,-2.5 77.489,-16.575 85.809,11.118 168.538,-20.856 v 0 c 234.781,149.658 461.194,-435.9056 -87.058,-294.353 -11.973,-6.501 -64.168,-12.42 -28.231,-24.81 1262.956,-661.9845 1627.004,-1081.191 16.193,-848.7324 -0.452,-42.4344 -198.636,15.0847 -230.144,-12.3654 150.17,-61.1279 -103.784,-18.9851 -169.677,-17.7538 176.812,-24.6359 306.099,-198.1343 480.394,-236.7424 v -0.011 c 1013.337,-335.9828 439.069,140.2701 -254.204,-251.8597 -40.909,-154.3022 580.965,179.4169 426.176,218.446 -554.423,36.3292 -52.084,-96.2059 -550.476,-316.9954 168.758,-35.2192 85.337,-63.5489 -41.175,-42.1873 0.225,-0.011 0.661,-0.053 0.892,-0.054 -89.39,23.0457 -192.082,33.827 -233.676,6.3414 -19.794,-3.1186 24.066,-2.0754 23.92,-13.3816 330.549,67.4727 -664.038,-321.8083 -2854.6,887.7383 z m -2770.03,2927.8063 -0.109,0.05 v 0 c 0,0 0.113,-0.05 0.109,-0.05 z m 2507.281,-669.128 c -0.128,0 -0.256,0.02 -0.385,0.03 0.876,-0.442 0.793,-0.322 0.385,-0.03 z m -3692.96,1059.068 c -16.566,4.014 -28.68,4.704 -29.866,-4.067 15.992,-4.128 30.884,-11.944 29.866,4.067 z m -109.54,3.313 c -13.741,3.828 -24.436,4.44 -30.289,0.09 -33.009,3.46 -64.249,4.455 -88.682,-0.521 -57.929,12.555 -301.18,3.478 -155.718,-26.976 90.816,6.752 173.263,9.457 264.391,9.182 32.685,-9.78 29.22,3.449 10.298,18.228 z m 872.169,-1893.105 c -20.767,12.829 -67.602,14.709 -26.389,-12.068 11.896,0.07 58.97,-4.466 26.389,12.068 z m -991.577,1142.092 c -28.199,4.913 -92.509,3.695 -28.931,-24.504 40.261,-17.752 104.777,10.293 28.931,24.504 z m 19.708,226.273 c -3.249,-0.21 -6.503,-0.429 -9.748,-0.629 3.338,0.104 6.689,0.238 9.748,0.629 z m 455.598,825.677 c 33.303,-2.735 146.894,-14.257 65.451,20.926 -116.33,20.369 -268.231,-14.422 -65.451,-20.926 z m 255.11,-7.513 c 28.565,-25.129 168.029,-38.201 104.193,-15.513 13.119,2.434 26.127,4.925 39.25,7.37 91.564,-6.995 47.076,4.239 -19.517,32.482 -18.639,-25.462 -193.755,42.712 -123.926,-24.339 z m 125.503,24 c 3.921,-0.411 7.846,-0.81 11.767,-1.221 -3.917,0.745 -7.826,1.185 -11.767,1.221 z m 6492.441,-4668.7823 c 0.405,0.2136 1.01,0.3859 1.423,0.6098 -2.288,0.6498 -2.602,0.5484 -1.423,-0.6098 z M 12337.962,10803.6 c 0.901,1.244 0.705,3.037 -0.8,5.501 0.191,-1.802 0.726,-3.734 0.8,-5.501 z m 855.438,-230.65 c -0.96,3.158 -1.75,5.759 -2.398,8.384 0.07,-2.434 0.925,-4.868 2.398,-8.384 z m -1302.907,354.165 c 1.061,-3.558 8.674,-17.613 16.106,-16.194 -0.213,2.727 0.06,5.348 0.553,7.859 -6.369,2.178 -11.853,4.907 -16.659,8.335 z m 1924.156,1484.616 c -10.016,6.831 -21.484,13.662 -30.469,21.084 1.23,-8.987 19.5,-14.977 30.469,-21.084 z m -274.742,95.912 c -0.113,-0.278 -0.411,-0.689 -0.129,-0.966 0,0.304 0.469,0.828 0.129,0.966 z m 4985.357,-1990.622 c -12350.176,1988.653 -6175.088,994.326 0,0 z m -7237.656,1445.959 c -0.196,0.166 -0.482,0.438 -0.482,0.438 z m 5544.37,-3074.9947 c -1.461,-0.1555 -2.917,-0.3008 -4.466,-0.4048 1.611,-0.019 3.064,0.1161 4.466,0.4048 z"${addAttribute(`fill:${color};fill-opacity:1;fill-rule:nonzero;stroke:none`, "style")} id="path984-3-5" sodipodi:nodetypes="cccccccccccccccccccccccccccccccccscccccccccccccccccccccccccccccccsccccccccccccccccccccccsccscsscccccccccsccsccccccccccccccccccccccccccscccccccccccscccccscscsccccscccccccssssccccccccccsccccccccccccccccccccssscccccccccccccccscscsccccccccccccccccccccccccccccccccccccccssscccccccccccsssccccccccsscccccccccccccccccccccccccccccccccccccccccccccccccscccsccccccccccccccccccccccccccscccccccssccccccssccccccccccccsccssccccccccccccccccccccsccccssccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccscsccccccccccccccccssccccccccccccccccccccccccccccsscccccccccsscccssccccccccccccccccccccccccccccccccccccssccccccscccccccccccccccccsscsscccccccccccccccccccccccccssccccccsscccccccssccccccccccccccccccccccccccccccccsccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"></path>
                <path d="m 18239.425,9374.7847 c 4.604,1.6481 9.398,3.1403 14.12,4.4882 -4.517,-11.5517 -9.243,-8.2093 -14.12,-4.4882 z m 363.986,66.5156 c 1.549,1.4058 2.983,2.7646 4.529,4.1782 -0.468,-1.4858 -2.16,-2.8547 -4.529,-4.1782 z m 5234.06,3467.4027 c 20.369,22.604 225.485,57.084 134.705,11.247 -40.598,3.903 -87.707,-8.2 -134.705,-11.247 z m 981.942,-948.097 c 11.536,2.448 23.632,4.471 35.534,5.852 -9.36,-9.387 -22.412,-8.111 -35.534,-5.852 z m -151.446,-2.865 v 0 c 16.341,-1.038 32.682,-2.076 49.023,-3.114 -48.928,-11.853 -49.023,3.114 -49.023,3.114 z M 16899.283,9168.446 c 24.248,4.7686 31.544,-0.7679 53.129,6.1016 -19.288,-23.3992 -28.909,-8.2728 -53.129,-6.1016 z m 1333.76,-29.9184 c -4.812,-12.1401 -23.6,-18.7746 -40.977,-25.9972 -13.718,16.202 24.016,17.7167 40.977,25.9972 z m 6555.692,2402.3464 c 207.349,33.395 505.814,14.811 107.045,-5.286 -41.947,-0.605 -101.197,-16.459 -107.045,5.286 z m -7990.136,-940.938 c -35.25,-7.167 -6.3,4.338 11.41,2.699 9.177,-3.979 -11.349,-9.199 -11.41,-2.699 z m 7110.415,2129.538 c 16.496,0.248 33.193,0.536 49.892,0.823 -18.331,-5.62 -38.749,-9.158 -49.892,-0.823 z m 895.087,-1023.902 c -56.503,-14.026 -21.183,2.787 0.695,14.849 66.928,4.533 47.634,-8.164 -0.695,-14.849 0.07,0.01 0.145,0.02 0.219,0.02 -0.218,-0.03 -0.218,-0.03 -0.219,-0.02 z m -434.468,-30.487 c 16.502,-1.837 -29.814,-8.723 -38.959,-12.151 v 0 c -47.837,-7.313 -84.143,0.885 -136.952,-12.23 26.125,23.843 155.784,49.865 175.903,24.392 v -0.01 z m -337.545,1297.875 c -49.29,30.178 173.489,38.766 225.537,41.574 -47.545,-33.814 -149.071,-28.769 -225.537,-41.574 z M 16577.593,9691.3534 c -13.888,-3.406 -23.652,-3.2781 -29.83,1.085 12.242,3.5895 29.574,3.9106 29.83,-1.085 z m -180.22,-48.4535 c -1.989,-0.2859 -3.862,-0.5267 -5.855,-0.8027 1.706,0.6709 3.706,0.9252 5.855,0.8027 z m 459.484,-516.4683 c -0.191,0.1548 -0.49,0.2448 -0.682,0.4006 9.882,0.2406 19.653,0.4253 29.426,0.6131 -13.433,-4.5653 -23.025,-4.8764 -28.744,-1.0137 z m 957.351,-75.1819 c 13.24,30.1061 245.51,19.9408 245.51,19.9408 v 0 c 0,0 -70.983,-3.4226 -105.977,-16.2547 -50.439,-3.9253 -82.058,-1.6302 -139.533,-3.6861 z m 6098.162,2117.4953 v 0 c 145.797,64.14 0,0 0,0 z m -6910.074,-1063.372 v 0 l -7.954,-4.809 c 2.677,2.539 7.954,4.809 7.954,4.809 z m 8257.342,1486.42 c -111.149,-22.416 -202.043,-1.893 -331.935,-25.245 -161.867,46.112 291.845,72.142 331.935,25.245 z m -17.199,148.813 c 36.153,0.603 65.193,-0.37 22.195,-17.445 -51.806,-1.932 -64.188,-1.806 -22.195,17.445 z M 16645.74,9288.8485 c -73.615,-34.8019 -158.595,-14.3023 -221.675,-11.4497 -16.984,11.8176 32.779,31.1571 28.708,13.462 83.947,27.8863 128.703,10.533 190.327,-0.9752 27.835,19.0222 150.557,33.4184 119.933,8.8034 99.613,-7.9675 212.812,9.2767 313.975,13.4042 -12.107,-5.2652 -24.105,-10.4767 -36.326,-15.7869 0.125,0.015 0.257,0.011 0.378,0.037 -153.255,-22.88 -275.756,-29.1538 -423.471,-29.392 5.263,10.6573 32.478,8.8798 28.152,21.8898 z m 8713.892,2565.3035 c 199.119,40.082 119.625,-31.491 -33.773,-20.875 11.025,6.96 22.725,13.945 33.773,20.875 z M 16643.278,9152.498 c -31.75,-5.0545 -52.472,-6.4323 -80.271,-6.1757 16.145,40.4145 224.428,64.5621 111.317,6.0076 -14.966,-5.3409 -27.886,-6.869 -31.046,0.1681 z m 8369.52,2305.053 c 60.67,-14.173 -111.969,-29.084 -136.887,-26.267 32.7,26.405 90.979,17.967 136.887,26.267 z m -142.463,1547.701 c -5.135,-14.505 -47.153,-20.957 -82.22,-28.889 -69.669,6.102 56.629,25.446 82.22,28.889 z m -223.118,-44.673 c -66.528,-7.419 -111.964,-31.467 -181.082,-35.276 -41.917,23.706 -208.693,-19.798 -285.402,-14.475 -169.276,-19.52 -68.618,16.633 21.606,42.1 0,0.01 -0.216,-0.02 -0.226,-0.01 114.387,32.817 53.981,-23.419 153.29,-10.482 68.047,-3.727 285.832,42.728 291.814,18.141 z m 348.256,-1026.853 c 10.653,6.544 21.5,13.138 32.354,19.722 77.516,15.321 10.012,-19.356 -32.354,-19.722 z m -8312.63,-1463.768 c -2.564,-0.49 -4.811,-0.786 -6.737,-0.895 2.247,0.295 4.489,0.599 6.737,0.895 z m -415.979,-1377.737 c -10.694,13.8514 -3.158,14.3811 17.48,15.9784 11.753,-11.8674 -0.232,-12.7832 -17.48,-15.9784 z m 131.22,13.4814 c -8.799,-3.6647 -17.715,-7.3644 -26.51,-11.0409 -36.757,-16.026 6.71,24.0119 26.51,11.0409 z m -431.973,-146.3622 c 8.773,8.0707 -8.384,17.988 -5.536,29.1145 53.195,-7.096 139.243,22.1221 150.341,-21.8103 -54.57,-11.4514 -94.399,11.4008 -144.805,-7.3042 z m 428.102,35.3063 c -16.563,-10.6264 -33.143,-21.8812 -49.696,-32.2028 -9.234,9.1335 -40.581,0.052 -56.88,3.4461 21.858,30.5529 81.845,37.9083 106.576,28.7567 z m 261.533,110.4325 c -128.543,-55.3626 6.381,6.475 6.381,6.475 v 0 c 0,0 -6.288,-6.3799 -6.381,-6.475 z m 446.373,-443.3632 c 6.747,6.2137 13.383,12.3725 20.13,18.5872 11.908,0.4291 23.935,0.8872 35.844,1.3133 -18.66,-6.6289 -37.318,-13.2608 -55.974,-19.9005 z m 278.078,161.8518 c 48.662,-6.5821 -27.998,-25.6216 -47.613,-24.4758 9.022,13.783 24.916,23.108 47.613,24.4758 z m -293.44,10.831 c 10.567,1.5016 21.14,2.9935 31.706,4.4951 -13.056,-5.5229 -23.718,-7.1197 -31.706,-4.4951 z m -48.561,-29.4157 c 67.711,11.7509 115.087,-3.2461 185.228,8.9981 -3.776,-0.4118 -7.543,-0.8433 -11.207,-1.2102 18.683,8.9111 44.521,17.982 46.724,32.4166 -44.784,-18.9834 -27.101,23.8674 -53.432,29.7393 -127.788,-39.2484 -92.201,38.5382 -167.313,-69.9438 z m 1535.847,2125.8241 c 4.065,4.354 6.919,9.119 12.611,13.004 1.752,1.219 3.387,2.404 4.912,3.533 -2.645,-5.628 -6.957,-9.016 -17.523,-16.537 z m 293.569,-1773.9606 c 0.121,0.025 0.224,0.1 0.455,0.1789 -0.06,-0.1839 -0.115,-0.3783 -0.168,-0.5728 -0.06,0.1496 -0.228,0.2443 -0.287,0.3939 z m 5520.881,4071.2966 c -66.182,-13.209 -304.705,-34.287 -214.044,6.357 v 0 c 16.852,3.65 33.505,7.26 50.366,10.9 36.927,-5.436 85.805,4.699 131.122,10.193 -10.927,-13.913 -6.796,-24.55 32.556,-27.45 z m -405.423,-67.69 c 17.861,-23.175 -130.56,-32.587 -174.183,-48.268 v 0.01 c -289.564,-27.259 62.76,40.156 174.191,48.257 v 0 z m -1195.528,-44.96 c -155.514,-20.22 -317.028,-29.787 -474.754,-40.94 279.387,70.877 674.162,59.274 991.228,102.371 40.411,-6.038 99.54,2.845 150.407,5.388 324.725,-6.5 -573.404,-66.305 -666.881,-66.819 z m 195.746,-174.131 c -1.352,-7.471 -10.896,-13.953 -24.307,-20.229 92.567,-13.167 -489.238,-26.546 -583.269,-46.837 23.389,66.242 459.656,57.906 607.576,67.066 z m -618.974,-42.076 c -5.938,-0.41 -11.886,-0.809 -17.831,-1.208 5.344,1.468 11.709,1.332 17.831,1.208 z m -72.119,-53.703 c 135.563,-12.418 279.14,10.326 419.882,17.105 v 0 c 187.913,16.13 -371.199,-85.995 -459.167,-101.881 -171.03,-21.131 -156.862,-66.014 -236.251,-77.914 40.329,19.865 95.644,37.491 128.418,58.349 -35.104,5.909 -96.584,-30.023 -137.36,-27.202 -23.954,20.18 -1.556,26.404 35.338,45.655 -58.486,-4.196 -118.766,-40.779 -175.131,-55.761 19.054,-27.85 -54.076,-45.256 -74.96,-44.864 86.401,65.861 -31.885,-15.506 -58.894,1.777 71.972,53.559 156.203,53.678 233.896,101.133 45.962,19.743 81.281,49.45 130.376,46.511 -46.593,-25.821 -17.04,-20.669 -12.361,-45.281 98.042,20.498 53.567,30.272 206.214,82.373 z m -602.56,-49.691 c -82.736,-4.011 -21.65,-254.353 -159.878,-254.217 -46.585,-8.048 12.305,28.013 -5.059,45.675 54.348,17.547 154.586,243.95 193.714,218.29 148.297,32.406 47.191,-81.206 -28.777,-9.748 z m 90.298,36.509 c -25.414,-1.679 -66.193,-18.476 -28.902,12.642 16.296,1.024 23.444,-5.159 28.902,-12.642 z m -171.015,-347.794 c 7.186,-3.795 -3.038,-11.133 -12.856,-14.584 -61.047,-25.927 -83.016,-53.139 -144.391,-47.068 -46.804,-11.315 -71.531,-16.198 -110.731,-44.402 31.883,-3.757 169.262,54.588 145.754,24.182 -94.339,-39.905 -188.482,-52.978 -282.158,-88.838 14.213,-11.831 15.008,-12.485 -11.926,-26.789 11.022,-10.55 41.484,22.117 65.054,13.544 -25.599,-26.725 -66.516,-34.157 -101.821,-48.485 -64.946,-26.943 -114.695,-71.499 -184.696,-73.826 -120.251,-20.186 -252.538,-66.054 -383.309,-103.215 105.748,74.033 221.532,137.021 352.012,173.003 207.401,111.74 445.598,179.84 669.068,236.478 z m -200.896,-1493.006 c 33.158,28.269 81.134,43.439 123.663,57.157 -4.114,-22.065 -51.047,-37.427 -77.258,-48.653 -36.876,-19.349 -65.563,-43.41 -107.409,-58.869 174.331,29.117 -164.375,-121.153 -206.06,-159.434 -13.238,-15.528 -32.041,-29.472 -54.176,-42.32 v 0 c -10.552,-5.683 -21.104,-11.367 -31.663,-17.033 v 0 c -564.297,-416.391 146.696,212.336 352.9,269.161 z m -1101.812,833.136 c -171.171,-78.986 -237.229,-64.549 -33.229,31.509 v 0 0 c 24.441,14.635 50.78,24.987 78.706,31.847 105.314,-4.961 6.238,-46.49 -45.477,-63.356 z m 111.313,-1487.458 c 748.714,540.674 -99.784,-371.1974 -406.855,-412.1862 -0.409,-0.299 -1.243,-0.8459 -1.439,-1.0156 0.274,0.3052 0.671,0.6338 1.053,0.9918 -46.745,-14.6596 -121.356,-58.6146 -121.356,-58.6146 v 0 c 0,0 -149.179,-59.301 -78.798,-20.6172 70.407,39.6268 137.439,86.1712 217.221,111.2905 78.337,11.7667 71.033,155.2253 55.214,180.9833 36.46,-11.296 94.137,36.323 133.427,61.016 30.61,-8.17 53.406,28.694 11.917,7.681 48.499,43.365 132.892,78.78 189.616,130.471 z m -473.347,-477.1375 v 0 l -369.552,-215.0047 v 0 c 0,0 -93.026,-35.8473 -130.966,-51.5374 1.188,-0.018 2.494,0 3.683,-0.021 -68.856,-23.5339 -142.953,-49.0941 -209.753,-58.8164 50.249,29.7916 96.747,57.4398 153.28,59.5508 -10.424,5.8185 52.074,15.7988 17.514,19.232 -37.549,-15.3459 -12.213,4.6895 -2.443,22.2477 85.826,48.1544 148.789,20.5482 233.153,57.3952 -16.607,9.8549 4.356,12.2952 19.534,20.1055 4.685,23.4804 -41.943,-7.1803 -48.522,-17.1572 -64.372,-5.5506 20.872,45.7532 66.623,48.251 99.138,17.2889 267.447,115.7551 267.447,115.7551 z m -1275.242,1277.7815 c -134.615,-82.329 -311.054,-112.015 -460.885,-156.296 13.341,6.799 21.861,11.174 26.714,14.523 -12.327,41.051 92.657,29.108 142.523,65.884 33.129,48.968 168.111,48.203 249.615,99.339 35.436,14.044 71.073,28.245 106.497,42.319 6.819,1.688 13.63,3.062 20.197,4.051 25.876,-29.431 -54.913,-46.98 -84.661,-69.82 z m -698.238,-203.341 c 20.072,-19.007 -44.794,-44.674 -52.152,-26.953 12.271,63.966 165.113,56.166 218.056,118.514 221.743,32.654 -86.524,-89.127 -165.904,-91.561 z m -53.842,-17.31 c -25.029,-5.122 -29.019,3.028 -31.132,12.412 21.876,3.122 28.925,-3.123 31.132,-12.412 z m -33.038,12.585 c -13.445,-4.534 -22.703,-4.357 -28.939,-0.847 13.546,4.608 23.165,4.851 28.939,0.847 z m -148.82,-41.843 c -3.181,0.41 -6.518,0.885 -10.154,1.452 171.674,85.562 130.486,4.996 10.154,-1.452 z m 12.665,-211.245 c -95.718,-20.315 -271.058,-43.782 -271.058,-43.782 v 0 c 0,0 243.827,79.332 238.376,71.16 87.133,43.493 151.028,-11.533 32.682,-27.378 z m -35.835,174.343 c -12.257,-6.224 -22.326,-7.991 -30.108,-5.227 12.449,6.403 22.22,7.591 30.108,5.227 z m -284.039,-173.741 c -11.61,19.855 58.187,25.291 80.452,34.11 202.265,26.763 2.747,-52.081 -80.452,-34.11 z m 71.279,51.431 c -6.916,0.233 -26.271,-5.634 -12.42,2.877 9.405,9.139 10.187,4.141 12.42,-2.877 z m -86.639,2.678 c -29.06,-34.272 -57.712,-25.83 -89.24,-29.448 26.474,22.153 58.822,30.025 89.24,29.448 z m -42.836,-557.656 -1.07,-0.281 v 0 l 100.842,40.671 v 0 c 0,0 15.245,-3.716 29.348,2.15 104.807,-20.845 -93.856,-37.742 -129.12,-42.54 z m -342.604,371.049 c -89.584,0.152 98.021,50.528 132.285,40.499 295.221,55.78 -33.47,-48.768 -132.285,-40.499 z m 64.773,-320.776 c -8.572,10.788 -31.044,3.834 -51.212,-4.968 -187.638,-7.203 -49.521,50.183 46.612,29.03 74.617,10.881 91.099,-17.366 4.6,-24.062 z m -168.068,5.123 c 3.077,-20.188 -61.623,-15.55 -63.846,-6.554 24.523,6.074 45.284,11.363 63.846,6.554 z m -79.464,-39.959 c 22.932,2.442 44.463,2.43 59.473,-2.693 -24.396,2.287 -56.723,-14.661 -59.473,2.693 z m 271.249,265.062 c -8.862,0.84 -17.607,1.715 -26.357,2.6 28.09,9.69 61.745,29.605 26.357,-2.6 z m -11.555,33.076 c 11.33,3.233 26.289,9.595 28.583,-1.251 -9.495,0.443 -19.094,0.819 -28.583,1.251 z m 82.763,-286.728 c -7.429,15.895 60.782,20.025 79.314,18.964 13.957,-24.824 -71.004,-28.416 -79.314,-18.964 z m 62.456,62.857 c -50.137,9.336 18.575,39.581 48.69,31.426 105.388,7.399 -5.766,-28.749 -48.69,-31.426 z m 379.838,-970.1103 c -1.201,13.7437 23.67,22.9426 43.599,29.6799 61.044,-10.3644 -11.873,-24.8997 -43.599,-29.6799 z m 65.027,212.6267 c -1.578,5.6856 5.608,11.1158 16.92,16.4014 -5.606,-5.4423 -11.321,-10.9394 -16.92,-16.4014 z m 200.523,-141.4715 c 274.334,36.1114 -78.419,-49.3009 -156.513,-49.9965 -31.807,62.2278 112.89,41.0823 156.513,49.9965 z m 510.506,-43.4348 c 54.437,14.7997 -21.15,-23.6685 -39.252,-30.3802 -29.091,-15.827 -53.188,-5.2834 -86.915,-19.3345 -24.38,3.5836 -55.797,-0.9819 -85.991,-11.9963 -15.907,2.0612 -54.827,-9.8 -54.827,-9.8 v 0 c 0,0 -648.312,-132.6447 -330.352,-39.1979 208.237,40.9615 392.724,78.5616 597.337,110.7089 z m -689.459,-176.5793 c -15.183,-21.8189 -46.582,-31.7738 -66.567,-18.6677 20.656,14.9087 43.695,14.4056 66.567,18.6677 z m 136.069,16.1721 c -4.459,-18.0423 -43.587,-26.7006 -64.489,-34.305 -11.876,15.1862 46.289,28.5129 64.489,34.305 z m 111.84,21.3819 c 8.235,3.7562 16.356,6.1411 24.355,7.1634 -9.306,-7.7155 -22.66,-22.8325 -24.355,-7.1634 z m 395.836,80.3268 c 82.937,24.1117 240.446,58.8782 240.446,58.8782 v 0 c 0,0 72.247,44.2924 121.136,62.8511 19.697,3.3249 39.282,6.596 58.869,9.8671 -7.303,-17.4897 -12.596,-19.0507 -49.185,-30.492 -87.57,-54.7415 204.684,25.6163 242.496,43.9714 35.145,-17.2819 176.536,65.1749 159.982,15.4468 -152.08,-62.6074 -310.264,-75.2853 -465.4,-120.4293 v 0.01 c -88.237,-26.3227 -264.787,-61.736 -264.787,-61.736 v 0 c 0,0 -54.543,-10.5193 -81.868,-15.8064 -96.855,-21.4293 -12.598,26.7088 38.317,37.4383 z m 728.797,52.4477 c -1.653,-6.8175 -7.522,-8.2474 -15.496,-7.0005 5.023,2.5842 10.097,5.0395 15.496,7.0005 z m -244.513,-36.1728 c 76.338,42.9032 167.06,63.2374 255.316,90.8461 -58.657,-52.8216 -184.649,-77.2637 -255.316,-90.8461 z m 404.276,584.8948 c -37.589,-27.6052 -90.238,-13.5497 -118.212,-50.5881 -21.576,-9.2294 -93.642,-23.5915 -43.043,6.9821 0,0 -0.595,-0.159 -1.298,-0.3719 33.909,10.2495 253.466,108.9128 162.553,43.9779 z m -290.736,-219.1572 c -8.949,-19.3121 -35.034,-28.4237 -63.749,-35.8583 -18.581,16.5505 44.875,24.4285 63.749,35.8583 z m -80.922,-205.2459 c 90.122,24.5281 199.092,108.3172 279.184,88.8968 10.941,-43.8692 -79.694,-39.37 -115.821,-56.6698 -39.595,-6.8008 -70.618,-16.3769 -109.68,-32.2131 4.846,22.4023 -38.545,-8.1403 -53.683,-0.014 z m 9.104,45.3025 c -33.622,-33.3559 -460.074,-92.2346 -277.387,-39.0302 8.927,4.6732 17.736,9.3113 26.663,13.9845 68.712,5.8619 571.077,135.781 250.724,25.0457 z m -484.26,1360.3753 c -25.534,-28.216 -176.534,-61.51 -171.466,-36.666 42.851,19.896 153.87,62.735 171.466,36.666 z m -277.983,115.12 c 29.363,12.462 59.484,27.669 84.263,21.404 -29.52,-13.066 -57.967,-21.514 -84.263,-21.404 z m 206.687,-432.701 c -4.882,-13.965 -24.399,-22.421 -46.52,-29.928 -11.022,19.36 27.061,20.655 46.52,29.928 z m 221.326,-813.2904 c -3.602,-3.1919 -6.91,-6.7974 -10.725,-9.7853 1.199,4.6335 4.005,7.5125 10.725,9.7853 z m 40.575,-342.0373 c -37.171,-21.6533 -72.522,-33.9105 -107.975,-45.9068 -8.129,22.3522 73.607,36.1578 107.975,45.9068 z m -371.099,252.5053 c 3.444,8.2718 15.409,16.2363 21.838,24.2619 29.535,1.6708 94.224,30.7956 107.848,16.5054 -25.114,-10.2504 -48.519,-22.5054 -73.881,-30.7885 -19.502,-4.4846 -33.765,-0.9254 -55.805,-9.9788 z m -614.467,900.1094 c 6.835,13.339 24.842,22.63 46.901,30.298 45.825,-10.72 -19.233,-34.227 -46.901,-30.298 z m 504.081,-1066.4615 c 15.22,-21.6868 -43.325,-28.0374 -64.428,-33.1272 9.887,15.9216 41.996,28.4148 64.428,33.1272 z m 155.107,-69.6722 c 242.034,57.8424 -22.571,-37.4275 -22.571,-37.4275 v 0 c 0,0 -104.469,-31.7788 -158.305,-35.7481 0,0 -0.678,0.061 -0.674,0.051 -41.503,53.8296 128.864,58.2213 181.546,73.1397 z m -522.689,1462.4977 c -16.715,14.806 40.754,20.548 51.765,19.919 100.975,24.975 -7.178,-15.134 -51.765,-19.919 z m 185.682,-40.927 c -26.04,-22.917 -97.577,-61.004 -125.176,-48.898 25.029,35.511 81.778,39.416 125.176,48.898 z m 60.137,47.719 c 44.741,17.089 77.875,43.002 118.06,34.608 -20.381,-27.966 -84.059,-42.965 -118.06,-34.608 z m 161.394,5.847 c 109.224,38.72 35.994,-9.42 -28.778,-22.299 0.109,0.06 0.109,0.06 0.106,0.06 -34.983,-21.877 -69.766,-30.566 -104.298,-32.218 -66.355,19.539 109.373,54.043 132.971,54.452 z m 463.963,129.099 v 0 c 30.57,11.727 61.262,23.479 91.947,35.25 20.04,19.821 80.007,35.238 106.62,32.66 -8.803,-3.992 -17.601,-7.992 -26.283,-11.956 v 0 c -81.084,-28.491 -82.886,-88.366 -162.981,-104.339 -55.851,-5.857 -148.819,-71.91 -189.712,-47.354 54.873,39.401 121.879,70.983 180.409,95.74 z m 614.688,-1658.8315 c 44.62,55.4659 -85.748,-14.6212 -106.704,-4.3881 28.531,17.5892 87.066,23.6252 96.348,49.4419 46.298,15.1296 219.292,106.6863 135.263,31.9149 11.437,3.2962 25.125,8.215 26.234,1.0535 -57.805,-32.9456 -45.373,-26.5031 10.373,-36.7481 29.312,-38.8383 -167.819,-114.7473 -96.549,-52.5986 -170.393,-61.1016 -529.426,-194.3258 -529.426,-194.3258 v 0 c 0,0 -182.062,-64.4779 -265.372,-65.2627 -53.474,-14.2384 -110.167,-67.0484 -159.134,-62.6938 -11.754,3.5205 -0.789,14.7016 5.701,23.904 -22.372,-10.211 -10.137,11.095 -11.866,20.837 -16.834,-11.2728 -42.991,-5.8398 -16.913,5.2964 59.121,-0.8 148.638,56.3327 225.01,68.0878 16.068,5.8763 48.333,17.6356 48.333,17.6356 v 0 c 0,0 421.084,145.346 638.702,197.846 z m 246.773,185.0585 c -254.303,-90.4146 -237.868,-52.4118 4.524,15.8771 v -0.01 c 79.473,31.9163 58.557,0.3035 -4.528,-15.8672 z m 162.093,-118.173 c 111.493,25.9271 8.926,-28.0589 -39.043,-41.9421 -16.223,22.2386 11.366,28.8614 39.043,41.9421 z m 16.551,101.8374 c -10.768,32.7402 315.94,155.0252 226.191,100.1516 37.174,-8.4131 83.244,33.6862 119.476,50.0466 72.37,-23.1482 -156.192,-111.9293 -205.841,-130.5552 -40.045,18.3855 -90.858,-15.3163 -139.826,-19.643 z m 185.611,-14.024 c 19.044,7.992 71.3,41.0271 71.51,19.4487 -18.912,-7.3185 -65.389,-39.0287 -71.51,-19.4487 z m 151.715,332.7366 c -137.026,-63.839 100.675,94.2038 118.678,69.7706 -21.932,-23.3542 -83.567,-46.5524 -118.678,-69.7706 z m 210.373,-20.2474 c 225.954,147.5122 276.908,286.7864 -8.254,130.1399 -356.059,-165.7165 -608.488,-373.8399 8.254,-130.1399 z m 233.756,429.3844 c -8.734,16.208 25.063,18.242 38.742,26.636 0.83,-13.05 -25.265,-21.286 -38.742,-26.636 z m 108.8,-35.976 c -43.569,-17.907 -77.445,-42.16 -112.851,-67.444 -31.286,-24.008 -80.281,-57.36 -122.039,-50.898 29.492,23.926 63.805,38.047 94.212,59.645 v 0 c 25.637,14.321 183.306,147.892 140.675,58.706 z m 165.653,236 c 8.912,-0.257 17.917,-0.479 26.829,-0.737 -10.766,-13.612 -58.352,-12.007 -26.829,0.737 z m -31.457,245.981 c -24.892,3.465 23.01,38.505 38.586,42.07 18.161,-23.248 -14.69,-29.606 -38.586,-42.07 z m -480.19,-1092.7582 c 129.592,81.417 175.879,279.7828 282.846,345.7948 18.532,20.9178 68.723,62.9836 99.173,61.5093 73.122,71.7491 183.441,136.0701 271.616,198.7691 v 0 c 13.06,13.246 180.724,143.803 153.031,86.32 -49.085,-41.329 -111.561,-79.475 -158.889,-124.723 -26.194,-61.568 -139.508,-67.693 -165.546,-120.636 -35.363,-35.506 -86.969,-62.2147 -125.871,-96.9188 -99.622,-57.6362 -152.77,-261.9244 -274.288,-332.4874 -25.229,-12.9601 -65.43,-18.5561 -78.099,-39.758 -138.326,-48.8434 -143.706,-24.1302 -3.973,22.13 z m 1114.975,936.6792 c 62.15,8.084 -27.786,-52.051 -44.201,-65.508 -122.591,-57.422 -1.484,38.495 44.201,65.508 z m 168.289,303.106 c 38.578,37.715 239.284,142.976 99.601,49.76 -38.571,-40.741 -48.627,-45.77 -99.601,-49.76 z m 113.501,12.481 c -1.931,27.328 61.052,55.622 90.242,67.831 20.257,-33.643 -67.084,-45.835 -90.242,-67.831 z m -344.019,1435.184 c 25.635,24.172 101.125,35.222 59.314,15.028 -16.222,-4.109 -32.44,-8.226 -59.314,-15.028 z m 241.755,146.257 v 0.01 z m 66.329,3.742 c 12.706,14.417 29.53,20.546 49.332,20.464 -16.445,-6.818 -32.888,-13.646 -49.332,-20.464 z m -287.957,-114.819 c 29.826,11.045 60.245,30.426 88.688,23.941 2.691,19.399 32.852,27.954 53.411,31.414 69.931,15.623 116.756,47.393 189.677,72.088 50.728,12.814 100.398,186.719 149.718,206.996 -34.45,-32.452 -91.459,-43.812 -10.252,-38.525 -80.707,-43.514 -188.083,-229.58 -264.025,-236.746 -44.693,-10.946 -48.181,-36.793 -89.303,-44.521 -35.552,22.108 -78.111,-19.966 -117.914,-14.647 z m 667.566,417.128 c 3.778,1.768 11.442,4.997 15.315,6.499 -2.883,-8.807 -8.195,-10.495 -15.315,-6.499 z m 747.386,-1512.013 c 37.291,18.147 132.128,24.938 179.232,16.267 -47.154,-7.594 -158.622,-40.885 -179.232,-16.267 z m 616.447,76.194 c 12.246,7.175 25.475,14.578 37.528,21.703 123.58,20.449 192.626,32.366 76.791,57.221 49.621,24.33 146.448,27.974 203.711,50.828 -190.307,-93.828 267.502,-25.243 419.329,-22.27 -142.192,-68.76 -273.402,-42.916 -445.143,-88.669 21.239,-16.814 -52.309,-18.806 -80.443,-27.604 -3.029,2.694 -7.83,4.985 -13.549,6.964 -80.795,-12.604 -116.398,10.732 -198.224,1.827 z m 605.365,206.185 c 5.418,-11.098 4.257,-12.284 -0.558,-0.476 v 0 c 0.185,0.159 0.373,0.316 0.558,0.476 z m -411.409,-58.542 c 32.393,12.249 116.781,14.313 166.334,24.176 17.321,2.46 29.915,4.736 38.922,7.154 -45.901,-17.215 -168.485,-18.158 -205.256,-31.33 z m 216.452,-27.549 c -16.76,-0.503 -33.506,-0.728 -49.898,-0.517 16.433,0.331 33.418,-0.05 50.293,0.605 -12.082,-3.229 -24.805,-6.23 -38.948,-8.901 13.932,2.644 26.665,5.632 38.553,8.813 z m -660.316,1505.254 c -14.904,-1.693 -29.8,-3.396 -44.712,-5.079 -45.932,9.847 51.697,19.292 44.712,5.079 z m 1.64,31.454 c -48.804,-1.62 -10.115,7.018 14.801,11.621 15.183,-6.978 7.908,-9.534 -14.801,-11.621 z m -109.857,-71.877 c 78.148,19.558 575.718,64.823 381.071,20.798 -88.301,-5.66 -510.7,-77.142 -381.071,-20.798 z m 54.152,-78.863 c 54.429,38.059 215.856,29.031 310.971,45.265 38.565,-8.424 110.824,-7.75 146.97,-6.84 40.03,-8.815 113.65,-0.383 183.914,8.784 181.664,-2.289 -110.855,-45.36 -156.56,-19.771 -153.201,-22.591 -327.014,-15.216 -485.295,-27.438 z m 185.12,-39.378 c 46.707,25.98 58.484,28.119 141.175,25.822 -47.057,-8.904 -91.909,-20.637 -141.175,-25.822 z m 28.329,-36.584 c 110.288,36.285 197.695,-1.445 325.146,28.593 61.682,16.896 123.304,19.021 187.076,20.769 40.756,7.475 100.313,11.058 112.883,26.726 64.219,60.56 197.597,19.168 308.215,54.142 56.908,15.291 103.614,6.236 162.04,19.582 193.758,31.509 147.032,-15.827 -11.999,-35.403 -84.943,-2.541 -195.536,-3.4 -170.022,-46.473 -103.961,-7.869 -140.902,14.507 -239.38,-24.139 -156.072,-21.881 -246.465,-5.563 -425.666,-43.545 -58.657,-5.625 -348.353,-49.937 -248.293,-0.252 z m 380.099,-164.123 c 48.711,13.316 103.576,22.91 157.061,22.394 151.921,2.851 -153.611,-49.975 -157.061,-22.394 z m 75.592,155.549 c 4.186,8.594 -4.722,14.66 37.857,18.612 25.752,-11.013 -12.539,-15.412 -37.857,-18.612 z M 17012.305,10722.84 c -1.556,-1.72 -2.668,-5.903 -5.185,-5.844 1.74,1.919 3.375,3.772 5.185,5.844 z m 115.436,-669.779 c -6.775,-6.145 -13.557,-12.268 -20.444,-18.457 -4.842,6.973 3.827,12.974 20.444,18.457 z m 23.84,-210.2898 c -48.769,-13.1844 -87.537,-10.0668 -134.382,-16.7893 7.728,0.3769 15.571,0.7939 23.41,1.2237 -20.195,-1.3878 -76.197,-8.5275 -41.866,10.9962 -0.105,-0.055 -1.036,4.3079 -1.201,4.0595 44.016,16.9289 216.156,47.5326 154.039,0.5099 z m -194.164,206.7908 c -6.183,-13.659 -23.718,-31.838 -44.688,-43.941 0.118,29.756 -60.44,-3.533 -88.906,0.09 86.071,53.542 29.199,55.63 133.594,43.847 z m -120.904,-146.6089 c 22.817,7.4117 -3.45,11.1173 22.428,18.7525 213.336,60.0517 153.93,-45.97 -22.428,-18.7525 z m 161.856,-166.331 c -30.247,-42.2774 -89.416,-34.68 -138.695,-46.9007 31.662,31.662 96.552,56.2672 138.695,46.9007 z m -109.831,-132.3647 c -24.135,51.721 240.789,31.6193 284.175,39.4612 -59.451,-56.4765 -205.305,-38.4035 -284.175,-39.4612 z m -226.748,205.5252 c 18.464,7.1298 37.041,14.3047 55.5,21.4443 188.539,1.238 15.128,-40.1583 -55.5,-21.4443 z m 233.951,-262.5975 c 11.794,16.7525 27.245,26.5367 50.842,20.6037 10.292,-6.1456 36.913,-0.7331 53.312,8.9753 17.636,-26.1688 -57.577,-23.5058 -73.272,-51.0374 -44.421,-43.2836 -84.159,-27.3471 -126.803,-28.0599 -28.501,12.3996 -163.185,-44.0404 -176.185,4.7357 56.167,6.3841 137.219,25.2708 171.91,5.4708 27.947,14.3968 161.769,53.6539 100.195,39.3148 z m 241.821,-246.8809 c 7.482,2.0057 14.76,3.5291 21.83,4.579 -11.252,-11.4549 -16.468,-7.8677 -21.83,-4.579 z m 29.763,367.4786 c -38.275,-3.4802 -76.66,-7.0152 -114.935,-10.4944 31.837,43.5718 161.645,61.9864 188.946,37.6113 -16.818,-6.9791 -34.135,-14.0159 -51.066,-21.0389 -7.47,-1.3686 -15.193,-3.4239 -22.945,-6.078 z m 171.199,-157.0421 c -10.816,-13.557 -21.629,-23.4542 -41.757,-26.0162 -53.972,8.4045 11.115,28.4981 41.757,26.0162 z m 4.637,-147.3969 c 31.944,9.9045 45.554,-10.364 7.162,-17.5558 -6.636,3.8587 -5.277,11.425 -7.162,17.5558 z m 202.637,-223.3361 c -2.526,3.4222 -3.011,8.6611 -4.855,12.6876 26.49,10.4205 31.778,2.9777 4.855,-12.6876 z m -424.601,-91.9776 c 60.639,46.1066 174.706,39.4389 239.882,44.2799 l 81.472,20.1571 c 6.435,-2.0136 18.415,-2.101 28.916,-1.0987 253.385,-19.4696 -284.826,-74.8792 -350.27,-63.3383 z m 321.095,-170.0357 c 2.909,35.3502 132.599,51.0551 132.599,51.0551 v 0 c 0,0 -91.956,-57.9426 -132.599,-51.0551 z m 6368.324,3067.4716 c 16.486,-0.926 34.822,3.497 52.396,2.959 -2.379,-58.712 -291.477,-19.464 -52.396,-2.959 z m 415.834,52.574 c 20.248,22.166 138.352,39.83 142.048,14.905 -47.352,-4.965 -94.696,-9.94 -142.048,-14.905 z m 480.407,43.203 c -15.349,-3.203 -30.705,-6.396 -46.255,-9.637 -28.914,12.391 43.346,26.427 46.255,9.637 z m -368.453,207.104 c 86.9,4.486 1.736,-14.695 -34.02,-21.446 -189.293,-25.351 -88.094,56.128 34.02,21.446 z m 320.231,173.551 c 57.38,14.981 212.011,29.503 87.075,3.666 -34.575,-6.781 -70.741,-10.635 -87.075,-3.666 z m 761.78,134.693 c 1.816,-0.547 3.778,-0.983 5.711,-1.378 -2.905,0.455 -8.778,0.259 -5.711,1.378 z m -1481.329,125.753 c 0.347,0.151 0.475,0.282 0.814,0.443 -0.346,-0.15 -0.38,-0.406 -0.814,-0.443 z m -258.169,260.321 c 6.963,1.771 20.988,1.622 30.533,2.758 -10.485,-1.414 -20.561,-2.167 -30.533,-2.758 z m 1902.976,454.714 c -517.909,-29.011 -1090.458,-122.241 -1623.199,-138.194 -2003.223,-121.43 -2821.741,-627.515 -3662.349,-1078.453 -237.813,-137.424 -496.83,-294.163 -683.157,-466.9 -385.24,-214.213 -961.815,-451.149 -1474.615,-634.673 -77.14,-24.497 -648.154,-172.129 -418.115,-189.973 -45.249,-20.471 -85.349,-12.965 -115.28,-12.29 -50.883,-23.17 -105.038,-54.38 -134.709,-27.316 199.141,91.158 -65.077,47.678 -142.043,23.078 -142.587,-97.788 35.609,-20.465 90.23,-14.827 140.782,-22.869 -242.098,-133.162 -297.004,-129.724 -28.697,10.557 -72.997,-1.308 -111.237,-5.212 -7.863,24.348 -175.667,-51.357 -126.507,-25.476 -33.59,0.967 -120.572,-25.542 -103.744,-55.67 50.296,13.312 82.989,-19.101 119.208,-13.397 182.288,57.221 129.618,-37.219 129.618,-37.219 v 0 c 0,0 -228.61,-17.183 -338.681,-21.349 -19.274,32.002 -91.418,-25.243 -131.423,-25.991 -2.284,-29.926 91.102,6.005 40.681,-35.372 -36.267,-5.919 -181.88,-16.848 -99.699,-38.575 154.117,1.984 306.34,23.479 475.997,41.033 90.797,-73.711 -65.76,-59.464 -133.029,-112.417 51.035,-25.977 21.073,-31.574 -34.914,-39.755 -125.126,-55.369 247.949,-1.629 281.472,13.277 18.961,-46.573 -204.762,-46.802 -87.343,-70.345 217.588,3.479 -165.711,-49.301 -212.306,-47.311 v 0 c -25.325,2.314 -62.804,-14.549 -83.523,-8.258 v 0 c -42.324,12.498 -112.296,-11.867 -165.575,-14.246 -49.446,-85.276 182.33,-17.03 259.533,-12.063 55.494,13.441 2.807,-22.842 39.917,-30.092 -50.072,-32.246 -87.243,-16.489 -136.866,-15.148 -99.89,5.334 -283.615,-49.57 -92.537,-52.119 5.302,-2.134 19.689,-1 29.035,-1.062 l -1.758,0.129 c 78.393,-0.733 152.002,29.742 227.662,16.257 50.992,23.892 104.115,33.346 155.747,35.238 71.53,2.035 137.092,-20.825 28.042,-75.353 -48.149,5.275 -95.015,-1.062 -144.272,-7.658 -11.754,11.532 -53.073,1.772 -62.856,10.965 -74.089,-57.976 -206.232,-47.736 -292.615,-51.724 -113.488,-54.9211 136.404,-27.426 180.859,-14.622 32.525,-0.257 14.292,-26.007 -12.457,-23.413 -112.307,-15.8458 132.757,-52.2159 132.757,-52.2159 v 0 c 0,0 -152.367,5.5868 -270.315,-56.6909 44.471,-10.6174 108.847,-8.4187 171.202,-19.7789 -23.061,-22.818 -70.034,-32.5629 -72.996,-14.0013 -117.521,-19.2803 -411.479,-50.5507 -117.138,-59.3316 0.573,-35.1914 -125.959,4.1965 -170.533,-42.3749 99.287,-16.824 231.84,19.9866 325.244,4.7709 -72.124,-26.5722 37.145,-23.7009 -34.438,-52.9881 60.33,-8.2114 -22.569,-29.0794 -40.924,-52.1797 -12.222,-3.3054 -23.445,-5.4792 -28.353,-0.6754 -15.476,-4.3761 -46.431,-13.1185 -46.431,-13.1185 v 0 c 0,0 -88.267,-9.2128 -134.961,-14.9868 -3.834,11.0946 -22.367,2.138 -33.268,-3.1948 -7.244,16.0948 -35.416,-4.4075 -53.813,-7.3626 -31.334,4.9101 -93.681,10.5763 -93.681,10.5763 v 0 c 0,0 -389.262,-83.3674 -15.049,-28.1761 -0.117,-0.035 -0.121,-0.025 -0.125,-0.015 62.813,10.5195 105.904,-31.3196 175.606,-7.2683 107.819,7.893 226.216,34.2972 316.744,23.058 17.997,8.3187 11.276,16.0653 11.682,23.383 42.414,8.9806 59.819,-5.2419 90.737,-16.7804 -50.012,-11.0214 -80.504,-56.0141 -125.156,-48.6156 -53.642,-4.123 -88.878,-0.3099 -141.508,-5.673 -5.626,19.6596 -79.183,27.7909 -84.982,-6.8835 -30.52,-33.5658 -116.179,-9.0001 -149.358,-63.5216 -60.198,2.8681 -360.437,0.2703 -213.219,40.1813 -23.799,12.124 -65.411,7.1131 -53.026,-20.3904 -43.302,-26.4279 10.101,-44.4052 45.805,-43.4014 38.518,7.8749 51.979,1.0146 40.288,-20.6781 25.722,-6.3288 -7.894,-13.6507 -19.079,-20.5944 18.642,-9.356 59.847,-4.3088 62.654,-23.8091 71.007,0.6891 -99.582,-15.1581 -94.251,11.0219 -295.986,14.3025 -36.259,-40.006 82.348,-52.5446 -27.636,-38.9014 74.237,-36.919 100.512,-18.6024 166.744,-55.1957 523.695,-22.2152 772.591,-8.5529 48.551,0.3817 61.489,-50.2409 34.921,-81.8379 35.428,-4.9718 181.88,3.8205 153.854,47.073 62.25,15.6228 71.401,-1.9824 11.249,-19.2704 116.932,-18.6283 293.366,56.4926 415.651,40.9364 -68.918,-18.6931 -134.455,-22.9503 -175.29,-52.9841 -26.771,-32.0804 -35.273,10.9242 -61.375,-7.497 -23.443,-17.1683 -79.953,-9.3228 -109.872,-13.0243 -53.205,-17.9251 -95.471,-18.269 -138.241,-19.3297 -49.749,6.6758 -365.09,-36.319 -186.241,-48.8371 -1.854,-0.6223 -3.711,-1.2418 -5.457,-1.8113 0.264,0 0.408,-0.032 0.671,-0.041 -26.178,-15.2235 26.628,-3.9572 41.305,4.7853 v 0.02 c 180.115,25.345 283.109,-10.5997 455.064,20.148 4.104,-20.8 64.293,13.763 94.453,21.1896 54.813,13.5069 372.491,46.8813 208.555,0.7472 -73.372,-25.4024 -211.203,-50.4517 -211.203,-50.4517 v 0 c 0,0 -42.932,-7.3287 -55.053,-6.2115 -20.419,-13.8473 -30.982,-3.0001 -54.378,-12.2758 -41.002,-7.5608 -77.044,4.3169 -115.412,6.0806 -72.412,-23.8371 -134.373,-10.4668 -221.211,-25.9883 0.323,5.5223 -19.122,-2.4441 -29.529,3.3241 -30.046,-1.0414 -70.231,-13.6875 -88.341,-0.01 -87.171,-2.9831 -40.321,-39.3553 -40.321,-39.3553 v 0 l 1.758,-0.1276 c 101.14,8.5198 206.821,8.1588 310.238,10.8872 -59.93,-43.5683 -160.783,-25.7705 -239.995,-42.9876 -123.511,-17.4043 -46.729,-8.6932 -71.689,-41.7096 -68.273,-26.6835 -127.907,0.8015 -197.306,-16.3411 -6.911,4.225 -18.08,5.5879 -17.511,-3.5389 -97.151,-48.3968 -152.482,-23.8442 -254.111,-42.1475 -17.559,-76.8936 -74.97,-48.0495 -179.412,-61.5327 33.596,-34.3756 138.095,-13.0304 209.67,-12.4428 25.702,47.1561 104.081,34.4394 140.075,34.3709 189.705,51.7096 134.819,-20.0587 200.918,-10.2198 30.75,-7.0986 92.603,12.5418 132.35,12.6108 24.097,-1.527 55.885,5.0976 85.462,12.0072 58.731,11.5537 398.752,35.5063 195.512,53.9688 37.549,35.0495 123.784,17.7065 176.172,30.365 104.565,8.8281 196.322,38.5494 296.225,55.5643 11.012,0.7072 33.04,2.1028 33.04,2.1028 v 0 c 0,0 34.314,4.2054 51.36,6.2587 28.077,12.0612 76.176,15.9315 76.176,15.9315 v 0 c 0,0 299.888,42.9038 454.12,92.3505 55.456,1.1812 124.525,17.825 187.797,37.5281 15.004,-2.7732 31.831,-1.4982 53.99,8.2491 416.041,93.3861 -207.914,-107.91 -329.649,-102.4443 -22.944,-19.1074 -0.07,-30.2118 -46.353,-46.0504 -34.214,-1.1221 -147.55,-56.7686 -67.364,-38.6844 v 0 c 24.748,9.8421 59.276,13.174 77.92,18.1736 50.347,29.5417 100.122,27.8097 154.323,51.5567 v 0.01 c 206.173,44.543 365.061,71.1238 40.825,-31.7302 v 0 c -13.93,1.707 -58.01,-20.0684 -52.911,-10.9967 -194.212,-50.9322 -395.351,-138.3447 -585.443,-131.9611 26.987,78.2925 -227.712,-25.8123 -299.472,-31.2686 v -0.01 c -47.073,-17.1633 -170.158,0.094 -153.221,-48.0113 4.842,2.0418 14.488,5.5552 19.384,7.1229 -0.979,-22.2207 44.046,9.8405 58.003,-2.2912 -204.666,-74.7661 -92.638,-49.194 21.295,-41.1576 36.757,-3.3424 71.327,4.2153 15.551,-19.194 0.629,-11.9509 -6.781,-29.8386 18.821,-17.1586 213.236,35.9285 465.015,48.6014 711.628,108.4862 -96.455,-75.8866 -242.418,-70.8935 -356.154,-112.8285 -17.396,4.852 -40.882,-7.2022 -63.094,-11.1363 -27.772,-2.8221 -86.569,-22.5525 -86.569,-22.5525 v 0 c 0,0 -278.022,-21.0517 -352.043,-91.5572 212.41,27.6727 429.69,81.3661 643.074,129.2734 46.711,13.0786 85.812,21.4704 130.086,39.7489 57.127,6.9465 117.355,30.0523 177.669,43.9231 60.699,-12.1591 161.086,52.7173 238.873,69.2226 62.882,39.0685 315.281,94.2508 110.828,6.5867 -95.236,-29.8908 -282.412,-85.3669 -282.412,-85.3669 v 0 c 0,0 -102.684,-22.9607 -156.566,-40.1716 -231.422,-57.7882 -469.449,-115.8072 -688.245,-159.9617 v -0.01 c -39.945,-4.2396 -458.613,-85.5957 -323.128,-28.1938 -33.616,-2.6415 -91.472,-21.0927 -103.913,-2.7981 -33.61,-22.3629 -50.853,0.4718 -81.206,-29.1832 157.237,32.7917 -34.635,-74.1967 165.328,-21.5334 76.028,1.6115 247.94,36.136 247.94,36.136 v 0 c 0,0 36.652,3.2693 49.775,6.6169 4.391,-5.8253 1.319,-15.7144 20.302,-13.5797 171.763,34.9044 340.878,64.1901 516.943,113.8698 138.311,63.2374 225.712,48.9371 359.232,89.6325 271.155,78.9356 539.206,196.4968 808.001,293.1264 438.074,170.5838 885.847,475.5826 1207.105,682.001 153.849,73.0274 279.431,170.1346 417.394,258.1603 41.467,18.607 76.041,39.717 92.179,67.549 65.376,33.775 93.678,84.513 162.405,122.613 -1.09,6.599 8.249,12.635 17.127,18.477 82.427,89.631 -70.181,36.411 50.782,110.825 6.326,13.972 52.437,43.184 50.552,13.809 24.049,-66.932 213.754,127.011 264.937,154.251 275.788,193.35 348.356,321.733 1055.943,422.517 628.731,520.265 1178.683,86.245 1369.642,150.324 -84.098,4.987 -84.098,4.987 -11.408,28.866 -12.934,31.71 -123.208,2.528 -164.666,13.769 -42.963,-15.636 -188.061,-19.801 -73.751,3.314 77.667,15.718 85.681,-12.065 168.758,18.993 v 0 c 31.88,0.14 416.232,34.548 269.615,54.594 -136.294,-21.386 -342.558,-20.839 -97.054,30.788 57.966,12.747 -22.549,6.018 -42.107,1.676 74.275,45.599 228.322,34.15 318.741,48.972 175.931,70.079 107.307,46.638 -53.2,64.879 -207.669,-2.11 -28.713,37.969 60.454,68.647 -44.718,18.68 -310.287,-30.999 -224.227,13.458 -0.611,-0.206 -1.224,-0.413 -1.834,-0.618 36.71,30.173 119.483,14.708 179.793,35.143 21.42,-6.95 63.712,0.04 93.09,7.246 -62.475,11.438 -157.231,-0.802 -237.206,-7.923 v 0.01 c -49.845,-4.741 -100.301,-6.623 -147.048,-18.003 -5.761,0.847 -22.661,-0.665 -32.517,-0.808 176.324,60.968 -90.576,17.741 -170.301,-2.764 -11.901,6.633 -64.027,13.128 -27.956,25.12 75.515,13.129 151.024,26.27 226.757,39.418 49.95,12.324 263.078,52.572 156.534,66.716 -169.296,-32.852 -147.042,-6.726 3.313,17.433 -57.509,21.405 285.456,60.132 270.331,88.416 -51.649,-3.917 -208.825,-27.947 -114.259,15.416 102.285,-1.268 171.272,43.681 270.738,45.136 -0.07,-0.01 -0.146,-0.02 -0.219,-0.02 100.843,0.882 196.541,23.195 295.303,16.048 -1.779,-0.395 -3.315,-0.8 -5.095,-1.194 214.801,31.574 67.887,40.122 -65.136,27.022 -3.393,-12.577 -68.205,-1.415 -96.642,-8.637 -131.756,-23.038 -252.682,-10.366 -385.956,-23.742 -42.526,26.861 -42.526,26.861 -164.163,3.326 -224.879,-36.181 148.321,80.804 247.907,75.276 185.562,55.665 232.254,-8.005 14.199,-9.281 -108.961,-57.286 -28.82,-81.256 71.331,-22.78 65.111,5.968 139.058,5.075 209.847,9.118 11.32,-0.25 22.612,-0.458 34.23,-0.495 v 0 c -10.824,0.208 -21.636,0.398 -32.458,0.603 73.605,4.291 143.873,14.052 197.213,42.52 -252.332,-28.037 -254.555,-10.045 -13.614,35.55 -73.147,9.371 -172.087,-10.572 -255.59,-13.175 -13.088,1.921 -63.522,-3.253 -51.452,4.445 -0.195,-0.05 -5.556,-3.572 -5.764,-3.602 -26.353,-6.328 -48.645,-9.247 -77.416,-11.293 3.218,18.447 204.04,44.17 67.1,39.649 -247.188,-39.376 -79.384,37.549 70.939,35.619 91.432,12.043 700.087,44.771 483.662,67.833 0.07,0.01 0.13,0.03 0.196,0.04 -43.261,-7.831 -80.266,-14.765 -124.196,-9.566 -149.408,-13.494 -262.374,-21.408 -80.611,32.887 -56.052,-12.528 -102.808,-10.832 -153.645,-2.723 341.233,49.558 186.843,42.446 -53.048,16.88 -217.308,-24.203 -462.847,-77.865 -679.656,-45.702 56.89,27.488 325.264,53.384 420.456,54.672 63.845,10.263 183.425,38.506 234.148,22.822 126.54,27.346 257.255,18.466 379.459,33.848 v 0.01 c 485.059,71.982 -409.112,5.324 -510.133,1.408 17.688,-0.09 35.567,-0.128 53.448,-0.167 -20.697,-0.509 -39.969,-0.172 -59.514,0.219 -83.436,6.219 -230.211,-19.258 -339.325,-15.183 -48.935,-11.545 -142.031,-16.112 -178.807,-5.228 125.699,38.517 356.156,27.767 505.886,42.035 412.969,30.71 791.36,45.734 1199.358,85.187 6.483,12.479 -35.829,9.372 -50.667,15.908 -84.1,-11.339 -166.661,5.638 -249.164,-14.875 -85.223,25.434 -829.87,-74.789 -693.384,-17.726 90.98,4.308 17.837,24.067 -25.768,30.929 83.649,59.72 233.104,23.569 360.111,58.333 161.694,33.682 367.685,11.22 501.195,69.126 -48.745,-1.1 -96.018,-0.227 -141.136,-13.4 -74.466,2.749 -1194.688,-91.759 -847.497,-10.049 167.724,8.441 307.821,8.917 470.097,35.919 125.596,-9.153 222.02,-13.601 356.667,9.893 0,-0.01 2.485,-0.215 2.493,-0.225 66.253,-2.915 217.353,13.162 269.208,37.594 -99.633,-1.535 -142.918,16.498 -246.313,-7.835 -127.07,20.842 -383.6,-59.124 -467.607,-5.557 34.651,23.313 85.637,24.515 141.057,28.052 v 0 c 183.371,19.871 379.608,16.732 488.737,81.52 44.491,35.649 -104.903,-19.729 -104.288,8.584 -413.179,-65.478 -946.025,-32.899 -1313.52,-144.126 104.572,-2.115 234.771,32.122 338.545,29.246 -52.061,-69.005 -531.818,-59.297 -728.856,-89.571 0.02,42.437 -198.79,-12.89 -229.993,14.907 150.836,59.465 -103.568,20.129 -169.471,19.626 -332.183,0.613 719.864,83.871 866.739,120.205 -22.803,41.383 89.341,27.488 138.522,22.388 66.541,16.313 176.379,25.564 212.294,55.57 -80.084,9.647 142.379,36.453 172.377,45.236 -295.647,12.602 -331.066,-109.194 -442.726,-25.254 -249.329,-5.161 489.566,52.256 619.331,57.655 -0.196,-0.05 -0.197,-0.06 -0.175,-0.07 228.023,67.787 -293.139,-9.614 -390,-7.872 -52.373,-16.945 -76.564,-0.208 -140.601,-15.868 -63.481,-9.541 -120.678,-9.025 -201.728,-14.47 v 0 c -100.717,0.15 -706.964,-79.013 -351.053,-6.097 v 0.01 c 167.111,13.977 329.564,43.125 506.108,58.677 18.029,-17.747 67.084,5.82 102.626,7.797 40.43,15.616 93.06,15.302 140.497,16.596 v 0 c 138.444,21.899 274.988,25.144 420.232,42.487 v 0.01 c 632.927,91.01 -356.123,-5.838 -500.91,-5.355 v -0.01 c -17.956,-5.204 -55.302,-13.486 -42.329,1.964 -142.025,-3.65 -293.222,-53.748 -462.765,-62.531 -366.582,8.746 -159.02,-16.622 -11.828,70.969 148.233,19.156 40.84,-60.921 186.506,9.62 50.045,10.719 100.06,21.478 150.083,32.227 v 0.02 c 117.941,10.153 204.652,40.413 318.381,45.867 61.356,-7.329 18.09,28.492 47.777,45.988 232.373,51.228 454.479,41.97 695.532,85.641 13.689,7.112 28.365,14.44 42.455,21.631 -402.889,-39.762 -793.177,-73.097 -1183.774,-115.243 -470.978,-73.983 25.926,40.428 -311.031,0.536 -118.408,-9.851 -277.478,-48.679 -348.966,-2.24 178.296,5.887 167.344,54.357 352.278,81.136 -71.201,3.61 -156.719,-17.194 -230.017,-24.556 -64.446,-2.663 -154.15,-10.09 -203.096,-7.966 219.075,102.406 1054.976,96.431 1233.5,189.613 v 0 c -156.457,-7.136 -317.224,-26.268 -468.709,-54.026 -82.014,23.7 -162.371,13.801 -267.279,-2.954 135.361,-33.537 -444.7,-89.234 -539.881,-81.331 169.137,33.353 86.033,62.602 -40.707,42.639 0.225,0.01 0.662,0.05 0.893,0.05 -89.639,-22.057 -192.444,-31.703 -233.732,-3.76 -19.758,3.337 24.087,1.809 24.067,13.117 307.582,57.623 641.254,14.724 898.638,88.251 92.793,-33.348 276.699,-12.082 377.197,34.664 1.033,0.458 2.066,0.917 3.099,1.374 -71.327,-22.948 -294.737,-6.973 -118.895,13.34 121.754,-11.953 235.421,71.966 342.144,32.65 58.435,0.864 251.418,16.144 124.44,34.193 103.178,23.721 140.813,11.144 203.965,-6.803 41.913,12.525 59.056,35.996 130.645,35.449 267.355,56.002 -107.504,26.062 -216.618,4.304 -56.669,-4.313 -86.674,2.351 -137.736,-10.628 -61.461,-0.552 -377.209,-37.321 -113.617,14.889 98.72,-10.652 528.877,69.597 424.675,29.374 201.142,29.769 415.13,48.429 606.023,85.39 76.716,21.983 -52.927,11.378 -102.607,4.051 -0.01,0 -0.02,-0.01 -0.04,-0.01 z m -8087.743,-4113.6822 -0.109,-0.045 v 0 c 0,0 0.113,0.045 0.109,0.045 z m 6983.888,3383.0022 v 0 c -0.196,-0.04 -0.217,-0.03 -0.217,-0.03 0,0 0,-0.01 0.217,0.03 z m -4469.37,-2741.6062 c -0.128,-0.01 -0.257,-0.011 -0.386,-0.017 0.881,0.4318 0.797,0.313 0.386,0.017 z M 16306.237,8906.8749 c -16.61,-3.831 -28.73,-4.3874 -29.819,4.3965 16.036,3.9511 31.014,11.6027 29.819,-4.3965 z m 8692.758,4185.0611 c -90.008,-49.197 -226.797,-38.773 -350.687,-51.103 84.431,46.841 234.619,40.036 350.687,51.103 z m 350.319,79.189 c -53.462,-8.123 -108.611,-19.728 -156.677,-16.355 44.86,7.859 142.546,42.77 156.677,16.355 z m 143.862,-1513.27 c -24.684,-19.153 -89.431,-23.214 -80.912,3.878 22.993,2.615 75.537,2.711 80.912,-3.878 z M 16196.667,8904.7721 c -13.782,-3.6767 -24.484,-4.1702 -30.288,0.2442 -33.045,-3.095 -64.294,-3.7455 -88.671,1.5008 -58.064,-11.9149 -301.2,-0.1523 -155.411,28.6942 90.736,-7.7549 173.148,-11.3703 264.274,-12.1015 32.791,9.418 29.18,-3.7718 10.096,-18.3407 z m 893.023,1883.3569 c -20.908,-12.599 -67.76,-13.961 -26.254,12.359 11.894,-0.202 59.016,3.814 26.254,-12.359 z M 16085.561,9657.058 c -28.252,-4.6017 -92.545,-2.6738 -28.66,24.8214 40.455,17.3063 104.657,-11.449 28.66,-24.8214 z m 17.207,-226.4773 c -3.247,0.2458 -6.498,0.5015 -9.74,0.7365 3.336,-0.1408 6.686,-0.3111 9.74,-0.7365 z m 446.452,-830.6582 c 33.331,2.3668 147.042,12.6336 65.215,-21.6474 -116.547,-19.0827 -268.055,17.3837 -65.215,21.6474 z m 255.177,4.6954 c 28.841,24.8115 168.44,36.343 104.358,14.3613 13.091,-2.5793 26.072,-5.2135 39.167,-7.8026 91.635,5.9833 47.026,-4.7596 -19.875,-32.2652 -18.357,25.6669 -194.215,-40.5695 -123.65,25.7065 z m 125.23,-25.3844 c 3.925,0.3673 7.854,0.7228 11.78,1.0911 -3.925,-0.7016 -7.838,-1.0984 -11.78,-1.0911 z m 8122.598,4120.2885 c 31.423,7.257 65.032,13.495 93.963,22.46 168.664,14.956 364.578,40.435 531.882,52.979 -65.144,-19.291 106.726,-10.22 16.976,-30.355 -124.219,-9.536 -248.399,-33.671 -377.633,-40.64 -50.66,27.778 -187.926,-11.663 -265.188,-4.444 z m -1578.991,476.506 c 0.403,-0.218 1.005,-0.396 1.416,-0.625 -2.295,-0.624 -2.608,-0.52 -1.416,0.625 z m -5848.67,-2293.936 c 0.886,-1.253 0.671,-3.044 -0.861,-5.491 0.211,1.8 0.767,3.726 0.861,5.491 z m 857.933,221.189 c -0.995,-3.146 -1.814,-5.738 -2.491,-8.356 0.1,2.432 0.979,4.857 2.491,8.356 z m -1306.74,-339.754 c 1.101,3.546 8.869,17.516 16.284,16.015 -0.243,-2.724 0,-5.348 0.466,-7.864 -6.392,-2.108 -11.906,-4.776 -16.75,-8.151 z m 1907.644,-1505.7754 c -10.091,-6.7198 -21.634,-13.4239 -30.701,-20.7467 1.329,8.9734 19.665,14.7614 30.701,20.7467 z m -275.786,-92.8725 c -0.112,0.2794 -0.402,0.6942 -0.122,0.9676 0,-0.3046 0.46,-0.8327 0.122,-0.9676 z m 6035.539,3950.6059 c -5.329,-2.674 -11.401,-5.291 -17.992,-7.832 6.286,2.339 10.742,7.025 17.992,7.832 z m 645.046,-887.709 c -9.376,-2.834 -18.938,-5.432 -28.655,-7.834 4.429,2.938 16.076,5.834 28.655,7.834 z m -638.735,1000.173 c -0.04,-0.235 0.109,-0.43 0.06,-0.665 -0.924,0.294 -1.745,0.454 -0.06,0.665 z m 382.178,-1602.376 c 0.652,0.253 1.305,0.507 1.957,0.76 -0.597,-0.424 -0.679,-1.21 -1.957,-0.76 z m -1372.634,-466.271 c 4.876,-0.604 9.768,-1.228 14.651,-1.841 -6.159,-3.097 -10.412,0.272 -14.651,1.841 z m -44.356,-58.979 c -5.142,-6.48 505.882,220.527 502.195,226.436 2.88,0.175 -505.255,-226.677 -502.195,-226.436 z m 569.257,438.304 c -82.929,19.229 86.326,36.991 130.737,38.301 -23.248,-41.484 -270.087,-78.635 -130.737,-38.301 z m 518.401,188.715 c -0.741,-0.239 -1.498,-0.457 -2.229,-0.707 -0.425,0.841 0.805,0.75 2.229,0.707 z m -405.094,-205.289 c 100.57,3.011 201.334,6.071 301.902,9.081 -119.121,-34.178 -152.264,-39.824 -19.306,-43.562 v 0 c 148.27,-17.115 -257.994,-65.916 -300.654,-36.509 68.318,16.707 143.027,27.308 193.95,44.031 -38.912,28.168 -396.635,-58.165 -175.892,26.959 z M 16561.47,9734.3831 c -0.198,-0.1638 -0.488,-0.4327 -0.488,-0.4327 z m 5577.991,3013.5749 c -1.459,0.172 -2.913,0.334 -4.461,0.455 1.611,0 3.063,-0.15 4.461,-0.455 z m 2129.815,10.557 c -7.08,-0.134 -13.259,0.358 -18.81,1.53 1.298,-2.853 5.121,-4.481 18.81,-1.53"${addAttribute(`fill:${color};fill-opacity:1;fill-rule:nonzero;stroke:none`, "style")} id="path984-9-8-4" sodipodi:nodetypes="cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccscccccccccccccccccccccccccccccccccccccccccccccccccccccccccsccccccccccccccccccccccsccscssccccccccccccccccccsccsccccccccccccccccccccccccccscccccccccccscccccscscsccccscccccccssssccccccccccsccccccccccccccccccccssscccccccccccccccscscsccccccccccccccccccccccccccccccccccccccssscccccccccccsssccccccccsscccccccccccccccccccccccccccccccccccccccccccccccccscccsccccccccccccccccccccccccccscccccccssccccccssccccccccccccsccssccccccccccccccccccccsccccssccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccscsccccccccccccccccccccccccccccccccccccccccssccccccccccccccccccccccccccccsscccccccccsscccssccccccccccccccccccccccccccccccccccccssccccccscccccccccccccccccsscsscccccccccccccccccccccccccssccccccsscccccccsscccccccccccccccccccccccccccccccccccccccccccccccccccccsscccccccccccccccccccccccccccccccccccccccccssccccccccccccccccssccccssccccccccccccccccccccssccccccccccccccccccccccsscsscscccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccscccccccccccccccccccccccccc"></path>
              </g>
              <ellipse${addAttribute(`fill:${color};stroke-width:7.5`, "style")} id="path1064-1-1" cx="18500.596" cy="-9184.21" transform="scale(1,-1)" rx="451.08536" ry="140.20221"></ellipse>
              <ellipse${addAttribute(`fill:${color};stroke-width:7.5`, "style")} id="path1745-5-8" cx="20435.996" cy="-10366.785" transform="scale(1,-1)" rx="338.31403" ry="213.3512"></ellipse>
              <ellipse${addAttribute(`fill:${color};stroke-width:7.5`, "style")} id="path1747-3-8" cx="19829.469" cy="-10119.907" transform="scale(1,-1)" rx="792.44733" ry="118.86709"></ellipse>
              <ellipse${addAttribute(`fill:${color};stroke-width:7.5`, "style")} id="path1749-5-3" cx="19899.57" cy="-10101.62" transform="scale(1,-1)" rx="289.54803" ry="265.16504"></ellipse>
              <ellipse${addAttribute(`fill:${color};stroke-width:7.5`, "style")} id="path1751-4-5" cx="20033.676" cy="-9869.9814" transform="scale(1,-1)" rx="112.77134" ry="173.72882"></ellipse>
              <ellipse${addAttribute(`fill:${color};stroke-width:7.5`, "style")} id="path1753-3-2" cx="19381.432" cy="-9757.2109" transform="scale(1,-1)" rx="508.995" ry="286.50015"></ellipse>
            </g>
            <rect${addAttribute(`fill:${color};stroke-width:7.5`, "style")} id="rect1770-6-2" width="1512.931" height="224.13794" x="17129.311" y="-9168.1035" transform="scale(1,-1)"></rect>
            <rect${addAttribute(`fill:${color};stroke-width:7.5`, "style")} id="rect1772-5-6" width="1663.7931" height="224.13794" x="16866.379" y="-9129.3105" transform="scale(1,-1)"></rect>
            <rect${addAttribute(`fill:${color};stroke-width:7.5`, "style")} id="rect1774-9-6" width="737.06897" height="366.37933" x="17336.207" y="-9077.5859" transform="scale(1,-1)"></rect>
            <rect${addAttribute(`fill:${color};stroke-width:7.5`, "style")} id="rect1776-5-7" width="125" height="146.55173" x="18103.449" y="-8922.4131" transform="scale(1,-1)"></rect>
            <rect${addAttribute(`fill:${color};stroke-width:7.5`, "style")} id="rect1778-4-8" width="357.75864" height="116.37931" x="18068.965" y="-8969.8271" transform="scale(1,-1)"></rect>
            <rect${addAttribute(`fill:${color};stroke-width:7.5`, "style")} id="rect1780-9-4" width="163.79311" height="64.655174" x="18142.242" y="-8875" transform="scale(1,-1)"></rect>
          </g>
        </g>
      </g>
    </g>
  </svg>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/components/decorative/brush.astro");

const $$Astro$b = createAstro("https://lea-stauder.art/");
const $$PageHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { id, title, subtitle, mainBrushColor, secondaryBrushColor } = Astro2.props;
  const response = await fetch(
    `http://${"lea-stauder.art:81"}/api/generic-assets/${id}?populate=*`
  );
  const data = await response.json();
  const headerImage = data.data.attributes.source.data.attributes.url;
  return renderTemplate`${maybeRenderHead($$result)}<section class="grid grid-cols-5 main-section z-0 astro-NR7CDCLH">
  <div class="col-span-3 h-full place-items-center grid astro-NR7CDCLH">
    <div class="w-full astro-NR7CDCLH">
      ${renderComponent($$result, "Sectionhead", $$Sectionhead, { "class": "astro-NR7CDCLH" }, { "desc": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result3) => renderTemplate`${subtitle}` })}`, "title": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result3) => renderTemplate`${title}` })}` })}
      <div class="w-full rotate-180 z-10 astro-NR7CDCLH">
        ${renderComponent($$result, "Brush", $$Brush, { "width": "100%", "height": "100%", "color": mainBrushColor, "class": "astro-NR7CDCLH" })}
      </div>
    </div>
  </div>
  <div class="col-span-2 w-full grid place-items-center astro-NR7CDCLH">
    <div class="relative w-full -mt-52 grid place-items-center astro-NR7CDCLH">
      <div class="z-10 absolute rotate-180 mt-56 w-full astro-NR7CDCLH">
        ${renderComponent($$result, "Brush", $$Brush, { "width": "100%", "height": "100%", "color": secondaryBrushColor, "class": "astro-NR7CDCLH" })}
      </div>
      <div class="absolute -mt-10 z-0 astro-NR7CDCLH">
        ${renderComponent($$result, "ImagePane", $$ImagePane, { "src": `${API_GATEWAY}${headerImage}`, "alt": "Welcome art painting", "class": "astro-NR7CDCLH" })}
      </div>
      <div class="absolute top-80 astro-NR7CDCLH">
        ${renderComponent($$result, "ContactButton", $$ContactButton, { "class": "astro-NR7CDCLH" })}
      </div>
    </div>
  </div>
</section>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/views/pageHeader.astro");

const $$Astro$a = createAstro("https://lea-stauder.art/");
const $$AteliersParticipatifs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$AteliersParticipatifs;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "mainBrushColor": COLORS.blueDark, "secondaryBrushColor": COLORS.purpleDark, "title": "ATELIERS PARTICIPATIFS", "subtitle": "Co-cr\xE9er avec chacun, jouer avec les couleurs, se d\xE9couvrir et d\xE9couvrir autrui", "id": "10" })}${renderComponent($$result2, "Description", $$Description, { "id": 1 })}` })}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/ateliers-participatifs.astro");

const $$file$6 = "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/ateliers-participatifs.astro";
const $$url$6 = "/ateliers-participatifs";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AteliersParticipatifs,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$5 = {};
function getHeadings$5() {
  return [{
    "depth": 2,
    "slug": "je-suis-l\xE9a-stauder-artiste-plasticienne-si-vous-souhaitez-en-savoir-plus-sur-mon-parcours-et-ma-philosophie-les-prochaines-lignes-sadressent-\xE0-vous",
    "text": "Je suis L\xE9a Stauder, artiste plasticienne, si vous souhaitez en savoir plus sur mon parcours et ma philosophie, les prochaines lignes s\u2019adressent \xE0 vous."
  }, {
    "depth": 1,
    "slug": "cr\xE9er",
    "text": "Cr\xE9er:"
  }, {
    "depth": 3,
    "slug": "cr\xE9er-veut-dire-lib\xE9rer-des-possibilit\xE9s-de-vie-susceptibles-daccro\xEEtre-\xE0-la-fois-la-puissance-de-la-sensibilit\xE9-et-la-jouissance-du-fait-de-vivre",
    "text": "Cr\xE9er veut dire: lib\xE9rer des possibilit\xE9s de vie susceptibles d\u2019accro\xEEtre \xE0 la fois la puissance de la sensibilit\xE9 et la jouissance du fait de vivre\u201D"
  }, {
    "depth": 2,
    "slug": "audi-2010-cr\xE9er-introduction-\xE0-lesth\xE9thique",
    "text": "AUDI, 2010. Cr\xE9er, introduction \xE0 l\u2019esth/\xE9thique."
  }, {
    "depth": 1,
    "slug": "rencontrer",
    "text": "Rencontrer:"
  }, {
    "depth": 3,
    "slug": "le-meilleur-lieu-de-tous-cest-lalt\xE9rit\xE9-comme-d\xE9couverte-de-lautre-et-connaissance-de-soi-giovanni-joppolo",
    "text": "Le meilleur lieu de tous, c\u2019est l\u2019alt\xE9rit\xE9, comme d\xE9couverte de l\u2019autre et connaissance de soi.\u201D Giovanni Joppolo"
  }, {
    "depth": 3,
    "slug": "le-bonheur-ce-nest-pas-une-not\xE9-s\xE9par\xE9e-cest-la-joie-que-deux-notes-ont-\xE0-rebondir-lune-contre-lautre",
    "text": "Le bonheur, ce n\u2019est pas une not\xE9 s\xE9par\xE9e. C\u2019est la joie que deux notes ont \xE0 rebondir l\u2019une contre l\u2019autre."
  }, {
    "depth": 3,
    "slug": "christian-bobin",
    "text": "Christian Bobin"
  }];
}
function _createMdxContent$4(props) {
  const _components = Object.assign({
    p: "p",
    h2: "h2",
    h1: "h1",
    h3: "h3"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Je suis fascin\xE9e par le mouvement quand il fait la cour \xE0 la couleur."
    }), "\n", createVNode(_components.p, {
      children: "Je suis fascin\xE9e par la trace qui d\xE9lasse et d\xE9laisse les artifices."
    }), "\n", createVNode(_components.p, {
      children: "Je suis fascin\xE9e par l\u2019art qui tisse des liens entre la main et le c\u0153ur, les c\u0153urs, en ch\u0153ur."
    }), "\n", createVNode(_components.h2, {
      id: "je-suis-l\xE9a-stauder-artiste-plasticienne-si-vous-souhaitez-en-savoir-plus-sur-mon-parcours-et-ma-philosophie-les-prochaines-lignes-sadressent-\xE0-vous",
      children: "Je suis L\xE9a Stauder, artiste plasticienne, si vous souhaitez en savoir plus sur mon parcours et ma philosophie, les prochaines lignes s\u2019adressent \xE0 vous."
    }), "\n", createVNode(_components.p, {
      children: "Depuis que je suis enfant, l\u2019art me permet de go\xFBter \xE0 la joie d\u2019\xEAtre en vie. Je me suis diT: et si je faisais de cette passion, un m\xE9tier? J\u2019ai explor\xE9 la voie du design au lyc\xE9e, mais elle chantait faux, alors, quand j\u2019ai eu mon bac en poche, j\u2019ai bifurqu\xE9 sur un autre chemin. Celui-ci m\u2019a permis de rencontrer les artistes de l\u2019Histoire de l\u2019art et de me reconnecter \xE0 mon go\xFBt de la cr\xE9ation sensible. Une fois ma licence en poche, je me suis envol\xE9e pour une \xEEle dans le Ch\u2019nord, j\u2019avais trouv\xE9 un d\xE9barcad\xE8re qui s\u2019intitulait \u201Cmaster en art et responsabilit\xE9 sociale\u201D . Gr\xE2ce \xE0 lui, j\u2019ai enrichi ma palette picturale de sons, de th\xE9\xE2tre et de rencontres. J\u2019y ai enfin trouv\xE9 ce que je cherchais: l\u2019aplomb pour contribuer \xE0 un art du vivant, un art qui soit pour tous.tes et r\xE9alisable par tous.tes. Un art du partage, un art pluri-aile, un art de l\u2019instant, un art qui permette de prendre soin du lien entre nous. Lorsque j\u2019ai achev\xE9 mon master en mai 2022, l\u2019\xE9vidence m\u2019a entra\xEEn\xE9 dans la danse: je suis artiste. Viendrez-vous danser en ma compagnie ?"
    }), "\n", createVNode(_components.h1, {
      id: "cr\xE9er",
      children: "Cr\xE9er:"
    }), "\n", createVNode(_components.h3, {
      id: "cr\xE9er-veut-dire-lib\xE9rer-des-possibilit\xE9s-de-vie-susceptibles-daccro\xEEtre-\xE0-la-fois-la-puissance-de-la-sensibilit\xE9-et-la-jouissance-du-fait-de-vivre",
      children: "Cr\xE9er veut dire: lib\xE9rer des possibilit\xE9s de vie susceptibles d\u2019accro\xEEtre \xE0 la fois la puissance de la sensibilit\xE9 et la jouissance du fait de vivre\u201D"
    }), "\n", createVNode(_components.h2, {
      id: "audi-2010-cr\xE9er-introduction-\xE0-lesth\xE9thique",
      children: "AUDI, 2010. Cr\xE9er, introduction \xE0 l\u2019esth/\xE9thique."
    }), "\n", createVNode(_components.p, {
      children: "J\u2019aime peindre. Sur toile d\u2019abord, pour ressentir ces gestes qui ont habit\xE9 l\u2019Histoire de l\u2019Art.\r\nJ\u2019aime peindre. Sur des v\xEAtements ensuite, pour semer de la po\xE9sie dans le quotidien. Pour que les \u0153uvres voyagent, pour que l\u2019Art sorte des mus\xE9es et des galeries, et qu\u2019il retrouve sa fonction premi\xE8re d\u2019ajouter de la vie \xE0 la vie.\r\nQuand je cr\xE9e je remets du mouvement dans ma vie. Comme une bulle de couleurs qui fait danser mes sens.\r\nJ\u2019aime peindre. J\u2019art-pente ma voie, j\u2019avance avec joie.\r\nQuand je cr\xE9e, je suis dans l\u2019instant. J\u2019accueille ce qui advient, j\u2019apprivoise, je rencontre. C\u2019est un va-et-vient entre moi et le monde. Du partage qui voyage."
    }), "\n", createVNode(_components.h1, {
      id: "rencontrer",
      children: "Rencontrer:"
    }), "\n", createVNode(_components.h3, {
      id: "le-meilleur-lieu-de-tous-cest-lalt\xE9rit\xE9-comme-d\xE9couverte-de-lautre-et-connaissance-de-soi-giovanni-joppolo",
      children: "Le meilleur lieu de tous, c\u2019est l\u2019alt\xE9rit\xE9, comme d\xE9couverte de l\u2019autre et connaissance de soi.\u201D Giovanni Joppolo"
    }), "\n", createVNode(_components.p, {
      children: "Partager, c\u2019est recevoir l\u2019alt\xE9rit\xE9 chez soi. Que cela soit dans le bodypaint, dans la customisation de v\xEAtement, la cr\xE9ation de bijoux ou lors d\u2019expositions, j\u2019ai \xE0 c\u0153ur de laisser un espace d\u2019expression aux autres. Chacun de mes tableaux, lorsqu\u2019il est expos\xE9, est accompagn\xE9 d\u2019un petit carnet o\xF9 tout le monde peut venir glisser un mot, un po\xE8me ou un dessin. C\u2019est aussi une mani\xE8re de remettre du vivant dans les salles d\u2019exposition, que cela ne soit pas qu\u2019une vitrine. J\u2019aime quand l\u2019art provoque des \xE9motions profondes chez le visiteur. Et j\u2019aime d\u2019autant plus quand ce dernier devient acteur, en ayant la possibilit\xE9 de partager \xE0 son tour son ressenti.\r\nDans ce m\xEAme esprit, j\u2019anime des ateliers de co-cr\xE9ation (voire la rubrique \u201Cateliers participatifs\u201D) qui invitent les participants \xE0 cr\xE9er une \u0153uvre, de mani\xE8re ludique, en ma compagnie. Ces moments nous permettent de nous rencontrer par le geste. L\u2019objectif de ces ateliers est de s\u2019ouvrir \xE0 ce qui advient, de respecter ce que l\u2019autre propose, d\u2019oser, de jouer, et de se laisser bercer par la beaut\xE9 du partage. Ces instants favorisent ainsi l\u2019\xE9mergence de la joie. La joie d\u2019\u0153uvrer \xE0 plusieurs sur un projet, de se sentir appartenir \xE0 un groupe, d\u2019\xEAtre \xE9cout\xE9 et respect\xE9 (l\u2019\xE9tat d\u2019esprit peut rappeler celui du Closlieu d\u2019Arno Stern). Un seul pr\xE9requis: \xEAtre curieux.se!"
    }), "\n", createVNode(_components.h3, {
      id: "le-bonheur-ce-nest-pas-une-not\xE9-s\xE9par\xE9e-cest-la-joie-que-deux-notes-ont-\xE0-rebondir-lune-contre-lautre",
      children: "Le bonheur, ce n\u2019est pas une not\xE9 s\xE9par\xE9e. C\u2019est la joie que deux notes ont \xE0 rebondir l\u2019une contre l\u2019autre."
    }), "\n", createVNode(_components.h3, {
      id: "christian-bobin",
      children: "Christian Bobin"
    })]
  });
}
function MDXContent$4(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$4, {
      ...props
    })
  }) : _createMdxContent$4(props);
}

__astro_tag_component__(getHeadings$5, "astro:jsx");
__astro_tag_component__(MDXContent$4, "astro:jsx");
const url$5 = "/descriptions/0presentation";
const file$5 = "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/descriptions/0presentation.mdx";
const Content$5 = (props = {}) => MDXContent$4({
											...props,
											components: { Fragment, ...props.components },
										});
Content$5[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$5.layout);

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$5,
  default: Content$5,
  file: file$5,
  frontmatter: frontmatter$5,
  getHeadings: getHeadings$5,
  url: url$5
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$4 = {};
function getHeadings$4() {
  return [{
    "depth": 3,
    "slug": "-a-quel-point-est-profond\xE9ment-ancr\xE9-en-nous-le-lien-qui-nous-rattache-aux-autres-et-\xE0-quel-point-serait-\xE9trange-lid\xE9e-dun-je-qui-existerait-en-labsence-dun-nous",
    "text": "\xAB A quel point est profond\xE9ment ancr\xE9 en nous le lien qui nous rattache aux autres, et \xE0 quel point serait \xE9trange l\u2019id\xE9e d\u2019un Je qui existerait en l\u2019absence d\u2019un Nous. \xBB"
  }, {
    "depth": 2,
    "slug": "giacomo-rizzolati-corrado-sinigaglia",
    "text": "Giacomo Rizzolati, Corrado Sinigaglia."
  }];
}
function _createMdxContent$3(props) {
  const _components = Object.assign({
    h3: "h3",
    h2: "h2",
    p: "p"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "-a-quel-point-est-profond\xE9ment-ancr\xE9-en-nous-le-lien-qui-nous-rattache-aux-autres-et-\xE0-quel-point-serait-\xE9trange-lid\xE9e-dun-je-qui-existerait-en-labsence-dun-nous",
      children: "\xAB A quel point est profond\xE9ment ancr\xE9 en nous le lien qui nous rattache aux autres, et \xE0 quel point serait \xE9trange l\u2019id\xE9e d\u2019un Je qui existerait en l\u2019absence d\u2019un Nous. \xBB"
    }), "\n", createVNode(_components.h2, {
      id: "giacomo-rizzolati-corrado-sinigaglia",
      children: "Giacomo Rizzolati, Corrado Sinigaglia."
    }), "\n", createVNode(_components.p, {
      children: "J\u2019aime partager le chemin de la mise en cr\xE9ativit\xE9. Vous trouverez donc en suivant plusieurs types d\u2019ateliers co-cr\xE9atifs que je propose. Chacun.e y est invit\xE9 \xE0 venir rencontrer sa propre cr\xE9ativit\xE9 en \xE9tant libre de tester diff\xE9rents m\xE9diums. Ces ateliers donnent forme \xE0 des \u0153uvres cr\xE9\xE9es \xE0 plusieurs mains, des \u0153uvres qui traduisent un \xE9change entre les participants. J\u2019aime faire en sorte que ces ateliers n\u2019\xE9rigent pas l\u2019esth\xE9tisme en ma\xEEtre, mais favorisent l\u2019\xE9coute de soi, le respect des autres et, surtout, j\u2019aime que la joie et la convivialit\xE9 s\u2019invitent \xE0 nos c\xF4t\xE9s. J\u2019adapte ces ateliers en fonction des publics, m\xEAme si j\u2019aime d\u2019autant plus quand tous les \xE2ges se rencontrent. Certains ateliers seront exclusivement graphiques, tandis que d\u2019autres entrem\xEAlent mon champ de comp\xE9tences avec ceux d\u2019autres artistes (par exemple en m\xEAlant bodypaint et danse). Je vous laisse d\xE9couvrir les pr\xE9sentations succinctes de ces ateliers, sachant qu\u2019ils peuvent faire l\u2019objet d\u2019une prestation ponctuelle, tout comme \xEAtre mis en place d\u2019une mani\xE8re plus r\xE9guli\xE8re. Pour retrouver les ateliers \xE0 venir, je vous invite sur l\u2019ongle actu, et pour un compl\xE9ment d\u2019information, contactez moi."
    })]
  });
}
function MDXContent$3(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$3, {
      ...props
    })
  }) : _createMdxContent$3(props);
}

__astro_tag_component__(getHeadings$4, "astro:jsx");
__astro_tag_component__(MDXContent$3, "astro:jsx");
const url$4 = "/descriptions/1participatif";
const file$4 = "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/descriptions/1participatif.mdx";
const Content$4 = (props = {}) => MDXContent$3({
											...props,
											components: { Fragment, ...props.components },
										});
Content$4[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$4.layout);

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$4,
  default: Content$4,
  file: file$4,
  frontmatter: frontmatter$4,
  getHeadings: getHeadings$4,
  url: url$4
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$3 = {};
function getHeadings$3() {
  return [];
}
function _createMdxContent$2(props) {
  const _components = Object.assign({
    p: "p",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Qu\u2019est-ce que le Bodypaint? Cet art vise \xE0 peindre sur son corps ou sur une partie du corps. Cela peut-\xEAtre de la peinture figurative mais \xE9galement de la peinture abstraite. Personnellement, j\u2019ai opt\xE9 pour l\u2019art abstrait car j\u2019emploi le bodypaint comme un moyen de red\xE9couvrir son corps, ses traits, sa beaut\xE9 propre. Mes couleurs viennent discuter avec votre corps dans un moment d\u2019une grande douceur qui vous est enti\xE8rement d\xE9di\xE9.\r\nLes peintures employ\xE9es sont des peintures test\xE9es sous contr\xF4les dermatologiques et employ\xE9es r\xE9guli\xE8rement dans les m\xE9tiers du cirque et du th\xE9\xE2tre pour parfaire les maquillages des com\xE9diens. Elles se nettoient avec un simple d\xE9maquillant et un lavage \xE0 l\u2019eau chaude et au savon."
    }), "\n", createVNode(_components.p, {
      children: "Pour le moment, j\u2019interviens uniquement dans la r\xE9gion occitanie.\r\nGr\xE2ce \xE0 la peinture corporelle je questionne les notions d\u2019image, de rencontre et de trace. Mes couleurs, sous formes abstraites, viennent dialoguer avec le r\xE9el, la figure et le corps. Ces moment o\xF9 je rencontre l\u2019autre, o\xF9 je vous rencontre, nous plongent dans une bulle. Nous nous rencontrons diff\xE9remment, par le toucher. Lorsque la personne se d\xE9couvre, la couleur sur la peau \xE9veille l\u2019imaginaire de l\u2019enfant, du carnaval et de la f\xEAte. La couleur permet d\u2019oser, de se regarder diff\xE9remment, de se r\xE9v\xE9ler \xE0 soi.\r\nCes immersions dans la couleur ont d\u2019autant plus de go\xFBt qu\u2019elles sont \xE9ph\xE9m\xE8res, j\u2019ouvre une parenth\xE8se dans le quotidien qui encourage l\u2019attention, celle de soi et celle envers les autres."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Nombre de personne"
          }), createVNode(_components.th, {
            children: "Photos"
          }), createVNode(_components.th, {
            children: "Dur\xE9e"
          }), createVNode(_components.th, {
            children: "Prix"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "1"
          }), createVNode(_components.td, {
            children: "Non"
          }), createVNode(_components.td, {
            children: "40 minutes"
          }), createVNode(_components.td, {
            children: "30 euros"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "1"
          }), createVNode(_components.td, {
            children: "Oui"
          }), createVNode(_components.td, {
            children: "1h30"
          }), createVNode(_components.td, {
            children: "50 euros"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "2"
          }), createVNode(_components.td, {
            children: "Non"
          }), createVNode(_components.td, {
            children: "1h20"
          }), createVNode(_components.td, {
            children: "45 euros"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "2"
          }), createVNode(_components.td, {
            children: "Oui"
          }), createVNode(_components.td, {
            children: "2h15"
          }), createVNode(_components.td, {
            children: "65 euros"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "3 personnes et +"
          }), createVNode(_components.td, {
            children: "Non"
          }), createVNode(_components.td, {
            children: "2h minimum"
          }), createVNode(_components.td, {
            children: "80 euros minimum"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "3 personnes et +"
          }), createVNode(_components.td, {
            children: "Oui"
          }), createVNode(_components.td, {
            children: "2h30 minimum"
          }), createVNode(_components.td, {
            children: "120 euros minimum"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Attention: je ne suis pas photographe, veuillez voir si mon travail vous pla\xEEt avant d\u2019opter pour une s\xE9ance comprenant un shooting photo. Je suis \xE9galement ouverte \xE0 la collaboration avec un.e photographe pour vos projets (EVJF, EVG, mariage, anniversaire, etc.)"
    })]
  });
}
function MDXContent$2(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$2, {
      ...props
    })
  }) : _createMdxContent$2(props);
}

__astro_tag_component__(getHeadings$3, "astro:jsx");
__astro_tag_component__(MDXContent$2, "astro:jsx");
const url$3 = "/descriptions/2bodypaint";
const file$3 = "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/descriptions/2bodypaint.mdx";
const Content$3 = (props = {}) => MDXContent$2({
											...props,
											components: { Fragment, ...props.components },
										});
Content$3[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$3.layout);

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$3,
  default: Content$3,
  file: file$3,
  frontmatter: frontmatter$3,
  getHeadings: getHeadings$3,
  url: url$3
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$2 = {};
function getHeadings$2() {
  return [];
}
function _createMdxContent$1(props) {
  const _components = Object.assign({
    p: "p"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "J\u2019aime l\u2019art qui s\u2019immisce dans les interstices, qui vient accrocher un regard l\xE0 o\xF9 on ne l\u2019attend pas, j\u2019aime l\u2019art qui voyage, qui sort des mus\xE9es, j\u2019aime l\u2019art quand il accompagne le mouvement de la vie. Car ce qui me pla\xEEt dans l\u2019art, c\u2019est sa facult\xE9 \xE0 accrocher un regard, \xE0 ramener l\u2019esprit dans le temps pr\xE9sent, il s\xE8me ainsi du merveilleux dans le quotidien et ajoute des \xE9pices \xE0 la saveur du monde."
    }), "\n", createVNode(_components.p, {
      children: "J\u2019explore donc cela dans diverses cr\xE9ations, telle que la customisation de veste en jean \xE0 la peinture acrylique, la cr\xE9ation de bijoux illustr\xE9s, la r\xE9alisation de marque-pages avec la technique d\u2019impression g\xE9lifi\xE9e et, au gr\xE8s de mes envies, de mes d\xE9couvertes, de ma curiosit\xE9, cette liste tendra \xE0 s\u2019\xE9toffer."
    }), "\n", createVNode(_components.p, {
      children: "Les ventes se feront via ma boutique en ligne Etsy, mais je prends \xE9galement des commandes, bonne visite!"
    })]
  });
}
function MDXContent$1(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1(props);
}

__astro_tag_component__(getHeadings$2, "astro:jsx");
__astro_tag_component__(MDXContent$1, "astro:jsx");
const url$2 = "/descriptions/3artisanat";
const file$2 = "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/descriptions/3artisanat.mdx";
const Content$2 = (props = {}) => MDXContent$1({
											...props,
											components: { Fragment, ...props.components },
										});
Content$2[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$2.layout);

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$2,
  default: Content$2,
  file: file$2,
  frontmatter: frontmatter$2,
  getHeadings: getHeadings$2,
  url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const frontmatter$1 = {};
function getHeadings$1() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Mon outil premier est la curiosit\xE9. Cette sorte de gourmandise enfantine qui pousse \xE0 explorer le monde. Je pars donc \xE0 l\u2019aventure de la couleur par bien des chemins: je peins \xE0 l\u2019acrylique, je grave dans du pastel gras, je saupoudre du pastel sec sur la toile, je colle diverses textures comme de l\u2019aluminium, du tissu ou du papier, je souffle sur l\u2019aquarelle pour cr\xE9er des arborescences, je teste la r\xE9action du sel avec l\u2019aquarelle\u2026 Je joue beaucoup, en somme."
    }), "\n", createVNode(_components.p, {
      children: "Pourtant, je commence syst\xE9matiquement mes toiles par un temps de rencontre avec l\u2019acrylique. Tant\xF4t travaillant la peinture les yeux ferm\xE9s pour mieux \xEAtre dans mon geste, tant\xF4t partant de l\u2019appel d\u2019une couleur que je module et dans laquelle, inexorablement, s\u2019immisce un visage\u2026 Miroir de moi-m\xEAme, la toile se construit au fur et \xE0 mesure que j\u2019y d\xE9verse mon \xE9motion. Je n\u2019anticipe rien pourtant. Je ne sais jamais \xE0 quoi ressemblera ma toile avant de la commencer. Mon mental part en vacances quand mes doigts saisissent un pinceau, comme si celui-ci \xE9tait la cl\xE9 qui me permet d\u2019entrer dans l\u2019instant. Selon mon \xE9tat, mon ressenti, mon \xE9motion, je suis attir\xE9e par telle ou telle couleur, c\u2019est une sorte d\u2019instinct en moi qui de temps en temps me chuchote \u201Cici, du bleu!\u201D \u201Cl\xE0, du rouge!\u201D. Je me coule dans mon geste, en qu\xEAte de justesse. La justesse de l\u2019expression de soi, j\u2019essaie de rester dans cet \xE9tat, de m\u2019y plonger totalement, sans m\u2019y noyer. Et, au fur et \xE0 mesure que mon \xE9motion se coule dans la toile, je remonte \xE0 la surface, mon cerveau se rallume et je sens une joie immense m\u2019envahir. Je me mets \xE0 discuter avec ce d\xE9but d\u2019\u0153uvre qui fait danser bien des couleurs."
    }), "\n", createVNode(_components.p, {
      children: "J\u2019ai la sensation qu\u2019\xE0 ce moment de la cr\xE9ation, je suis une sculptrice qui analyse son bloc de marbre avant de donner son premier coup de marteau. Je regarde longuement ce d\xE9but d\u2019\u0153uvre, parfois elle reste plusieurs jours sur le chevalet et je m\u2019impr\xE8gne de sa pr\xE9sence. D\u2019autres fois, au contraire, l\u2019\u0153uvre me montre directement qui elle est: je discerne la courbe d\u2019une joue, l\u2019ar\xEAte d\u2019un nez et je me laisse guider. C\u2019est \xE0 ce moment-l\xE0 qu\u2019entrent en sc\xE8ne pastel, collages et autres lubies du moment. La figuration et l\u2019abstraction se mettent peu \xE0 peu \xE0 r\xE9sonner l\u2019une avec l\u2019autre, et la toile s\u2019ach\xE8ve quand je sens que les deux chantent de concert une m\xEAme \xE9motion.\r\nL\u2019entendez-vous?"
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

__astro_tag_component__(getHeadings$1, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url$1 = "/descriptions/4paint";
const file$1 = "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/descriptions/4paint.mdx";
const Content$1 = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content$1[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$1.layout);

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$1,
  default: Content$1,
  file: file$1,
  frontmatter: frontmatter$1,
  getHeadings: getHeadings$1,
  url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("https://lea-stauder.art/");
const $$Bodypaint = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Bodypaint;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "mainBrushColor": COLORS.blueDark, "secondaryBrushColor": COLORS.purpleDark, "title": "BODYPAINT", "subtitle": "Qu'est-ce que c'est? Comment se d\xE9roule une s\xE9ance?", "id": "8" })}${renderComponent($$result2, "Description", $$Description, { "id": 2 })}` })}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/bodypaint.astro");

const $$file$5 = "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/bodypaint.astro";
const $$url$5 = "/bodypaint";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Bodypaint,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro("https://lea-stauder.art/");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    size = "md",
    style = "primary",
    block,
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    md: "px-5 py-2.5",
    lg: "px-6 py-3"
  };
  const styles = {
    outline: "border-2 border-black hover:bg-black text-black hover:text-white",
    primary: "bg-black text-white hover:bg-slate-900  border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead($$result)}<button${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])}
</button>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/components/ui/button.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro("https://lea-stauder.art/");
const $$Contactform = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Contactform;
  console.log("20aa2d0d-6e9f-42f5-b7b2-ec41a41ab8e8");
  return renderTemplate(_a || (_a = __template(["", '<form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation astro-UWNXE3I2" novalidate>\n  <input type="hidden" name="access_key"', ' class="astro-UWNXE3I2">\n  <div class="mb-5 astro-UWNXE3I2">\n    <input type="text" placeholder="Nom Complet" required class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 astro-UWNXE3I2" name="name">\n    <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1 astro-UWNXE3I2">\n      Veuillez renseigner un nom complet.\n    </div>\n  </div>\n  <div class="mb-5 astro-UWNXE3I2">\n    <label for="email_address" class="sr-only astro-UWNXE3I2">Addresse Email</label><input id="email_address" type="email" placeholder="Addresse Email" name="email" required class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 astro-UWNXE3I2">\n    <div class="empty-feedback text-red-400 text-sm mt-1 astro-UWNXE3I2">\n      Veuillez renseigner une adresse.\n    </div>\n    <div class="invalid-feedback text-red-400 text-sm mt-1 astro-UWNXE3I2">\n      Veuillez renseigner une adresse mail valide.\n    </div>\n  </div>\n  <div class="mb-3 astro-UWNXE3I2">\n    <textarea name="message" required placeholder="Votre Message" class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 astro-UWNXE3I2"></textarea>\n    <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1 astro-UWNXE3I2">\n      Veuillez renseigner un message.\n    </div>\n  </div>\n  ', `
  <div id="result" class="mt-3 text-center astro-UWNXE3I2"></div>
</form>



<script>
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "En cours d'envoi...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.classList.add("text-green-500");
          result.innerHTML = json.message;
        } else {
          console.log(response);
          result.classList.add("text-red-500");
          result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        result.innerHTML = "une erreur s'est produite!";
      })
      .then(function () {
        form.reset();
        form.classList.remove("was-validated");
        setTimeout(() => {
          result.style.display = "none";
        }, 5000);
      });
  });
<\/script>`])), maybeRenderHead($$result), addAttribute("20aa2d0d-6e9f-42f5-b7b2-ec41a41ab8e8", "value"), renderComponent($$result, "Button", $$Button, { "type": "submit", "size": "lg", "block": true, "class": "astro-UWNXE3I2" }, { "default": ($$result2) => renderTemplate`Envoyer !` }));
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/components/contactform.astro");

const $$Astro$6 = createAstro("https://lea-stauder.art/");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead($$result3)}<div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          Pour me contacter, c’est ici!
        </h2>
        <p class="text-lg leading-relaxed text-gray-800 mt-3">
          Une question, une demande, une envie, un projet, n’hésitez pas, envoyez moi un message!
Vous souhaitez être tenu au courant des dernières nouveautés? Suivez moi sur facebook, tik tok ou instagram: @art.penter 
        </p>
        <p class="text-lg leading-relaxed text-gray-800 mt-3">Je vous souhaite une très belle journée, et à bientôt!</p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "mdi:instagram" })}
            <span>Art.Penter</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "ic:baseline-tiktok" })}
            <span>Art.Penter</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "ic:baseline-facebook" })}
            <span>Art.Penter</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "uil:map-marker" })}
            <span>France</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4", "name": "uil:envelope" })}<a href="mailto:hello@astroshipstarter.com">leastauder24@gmail.com</a>
          </div>
        </div>
      </div>
      <div>
        ${renderComponent($$result3, "Contactform", $$Contactform, {})}
      </div>
    </div>` })}` })}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/contact.astro");

const $$file$4 = "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/contact.astro";
const $$url$4 = "/contact";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const cart = "/_astro/cart.ece9644a.svg";

const $$Astro$5 = createAstro("https://lea-stauder.art/");
const $$PageHeaderCentered = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PageHeaderCentered;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="grid place-items-center main-section astro-BV7LKNY5">
  <div class="flex flex-col place-items-center astro-BV7LKNY5">
    <div class="astro-BV7LKNY5">
      ${renderComponent($$result, "Sectionhead", $$Sectionhead, { "class": "astro-BV7LKNY5" }, { "desc": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result3) => renderTemplate`${subtitle}` })}`, "title": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result3) => renderTemplate`${title}` })}` })}
    </div>
    <div class="cart astro-BV7LKNY5">
      <img${addAttribute(cart, "src")} alt="cart" class="astro-BV7LKNY5">
      <div class="cart-text-container astro-BV7LKNY5">
        <p class="astro-BV7LKNY5">VERS MA BOUTIQUE ETSY</p>
      </div>
    </div>
    <div class="w-full grid place-items-center p-0 m-0 astro-BV7LKNY5">
      <img class="rotate-180 z-10 brush astro-BV7LKNY5"${addAttribute(brush2, "src")} alt="brush variant 2">
    </div>
  </div>
</section>`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/views/pageHeaderCentered.astro");

const $$Astro$4 = createAstro("https://lea-stauder.art/");
const $$Crafts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Crafts;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Crafts" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeaderCentered", $$PageHeaderCentered, { "title": "CREATIONS ARTISANALES", "subtitle": "vestes customis\xE9es, marques pages, bijoux et bien d'autres!" })}${renderComponent($$result2, "Description", $$Description, { "id": 3 })}` })}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/crafts.astro");

const $$file$3 = "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/crafts.astro";
const $$url$3 = "/crafts";

const _page9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Crafts,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://lea-stauder.art/");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "mainBrushColor": COLORS.black, "secondaryBrushColor": COLORS.purpleLight, "title": "PRESENTATION", "subtitle": "Parcours, philosophie et d\xE9marche cr\xE9ative.", "id": "2" })}${renderComponent($$result2, "Description", $$Description, { "id": 0 })}` })}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/about.astro");

const $$file$2 = "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/about.astro";
const $$url$2 = "/about";

const _page10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://lea-stauder.art/");
const $$Actus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Actus;
  return renderTemplate`<!-- ---
import { Picture } from "@astrojs/image/components";
import Container from "@components/container.astro";
import Sectionhead from "@components/sectionhead.astro";
import Layout from "@layouts/Layout.astro";
import { getFormattedDate } from "@utils/all";
import { log } from "astro/dist/core/logger/core";

const posts = (await Astro.glob("./blog/*.{md,mdx}")).sort(
  (a, b) =>
    new Date(b.frontmatter.publishDate).valueOf() -
    new Date(a.frontmatter.publishDate).valueOf()
);
---

<Layout title="Blog">
  <Container>
    <Sectionhead>
      <Fragment slot="title">Mes actualités</Fragment>
      <Fragment slot="desc"
        >Ici je partage mes événements et actualités !</Fragment
      >
    </Sectionhead>
    <main class="mt-16">
      <ul class="grid gap-16 max-w-4xl mx-auto">
        {
          posts.map((post, index) => (
            <li>
              <a href={post.url}>
                <div class="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                  <Picture
                    src={post.frontmatter.image}
                    widths={[200, 400, 800]}
                    sizes="(max-width: 800px) 100vw, 800px"
                    aspectRatio="16:9"
                    alt="Thumbnail"
                    loading={index === 0 ? "eager" : "lazy"}
                    class="w-full rounded-md aspect-video"
                  />
                  <div>
                    <span class="text-blue-400 uppercase tracking-wider text-sm font-bold">
                      {post.frontmatter.category}
                    </span>

                    <h2 class="text-3xl font-semibold leading-snug tracking-tight mt-1 ">
                      {post.frontmatter.title}
                    </h2>

                    <div class="flex gap-2 mt-3">
                      <span class="text-gray-400">
                        {post.frontmatter.author}
                      </span>
                      <span class="text-gray-400">• </span>
                      <time
                        class="text-gray-400"
                        datetime={post.frontmatter.publishDate}>
                        {getFormattedDate(post.frontmatter.publishDate)}
                      </time>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))
        }
      </ul>
    </main>
  </Container>
</Layout> -->`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/actus.astro");

const $$file$1 = "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/actus.astro";
const $$url$1 = "/actus";

const _page11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Actus,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const Modal = ({
  selectedItem,
  onClose
}) => {
  const [index, setIndex] = useState(0);
  const images = selectedItem.attributes.images.data;
  const handlePrev = () => {
    setIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };
  const handleNext = () => {
    setIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  };
  console.log(index);
  console.log(images[index]);
  return /* @__PURE__ */ jsx("div", {
    className: "fixed z-50 inset-0 overflow-y-auto modalBackground px-5",
    onClick: () => onClose,
    children: /* @__PURE__ */ jsx("div", {
      className: "flex items-center justify-center min-h-screen",
      children: /* @__PURE__ */ jsx("div", {
        className: "relative bg-white w-full max-w-xl mx-auto rounded-md shadow-lg overflow-hidden",
        children: /* @__PURE__ */ jsxs("div", {
          className: "px-6 py-4",
          children: [/* @__PURE__ */ jsx("div", {
            className: "flex justify-end",
            children: /* @__PURE__ */ jsx("button", {
              onClick: onClose,
              children: /* @__PURE__ */ jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-6 w-6 text-gray-500 hover:text-gray-800 transition-colors duration-300",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M6 18L18 6M6 6l12 12"
                })
              })
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "my-6 text-center sm:mt-0 sm:ml-4 sm:text-left",
            children: [/* @__PURE__ */ jsx("h2", {
              className: "text-xl font-bold leading-6 text-gray-900",
              children: selectedItem.attributes.title
            }), /* @__PURE__ */ jsx("div", {
              className: "mt-2",
              children: selectedItem.attributes.description
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "mt-2",
            children: [/* @__PURE__ */ jsx("img", {
              src: `${API_GATEWAY}${images[index].attributes.url}`,
              alt: ""
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex justify-between mt-4",
              children: [/* @__PURE__ */ jsx("button", {
                className: "text-gray-500 hover:text-gray-800 transition-colors duration-300",
                onClick: handlePrev,
                children: /* @__PURE__ */ jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-6 w-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 19l-7-7 7-7"
                  })
                })
              }), /* @__PURE__ */ jsx("button", {
                className: "ml-4 text-gray-500 hover:text-gray-800 transition-colors duration-300",
                onClick: handleNext,
                children: /* @__PURE__ */ jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-6 w-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M9 5l7 7-7 7"
                  })
                })
              })]
            })]
          })]
        })
      })
    })
  });
};
__astro_tag_component__(Modal, "@astrojs/react");

const ListView = ({
  data
}) => {
  const [selectedWork, setSelectedWork] = useState(void 0);
  return /* @__PURE__ */ jsxs("div", {
    className: "w-full p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-16",
    children: [data.map((item, index) => /* @__PURE__ */ jsxs("div", {
      role: "button",
      onClick: () => setSelectedWork(item),
      className: "max-w-sm rounded overflow-hidden shadow-lg cursor-pointer",
      style: {
        backgroundColor: COLORS.white
      },
      children: [/* @__PURE__ */ jsx("img", {
        className: "object-cover w-full h-80",
        src: `${API_GATEWAY}${item.attributes.images.data[0].attributes.url}`,
        alt: ""
      }), /* @__PURE__ */ jsxs("div", {
        className: "px-6 py-4",
        children: [/* @__PURE__ */ jsx("div", {
          className: "font-bold text-xl mb-2",
          children: item.attributes.title
        }), /* @__PURE__ */ jsx("div", {
          className: "overflow-hidden",
          children: /* @__PURE__ */ jsx("p", {
            className: "text-gray-700 h-6 text-base truncate",
            children: item.attributes.description
          })
        })]
      })]
    }, index)), selectedWork && /* @__PURE__ */ jsx(Modal, {
      onClose: () => setSelectedWork(void 0),
      selectedItem: selectedWork
    })]
  });
};
__astro_tag_component__(ListView, "@astrojs/react");

const $$Astro$1 = createAstro("https://lea-stauder.art/");
const $$Works = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Works;
  const response = await fetch(`http://${"lea-stauder.art:81"}/api/peintures?populate=*`);
  const data = await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "mainBrushColor": COLORS.purpleLight, "secondaryBrushColor": COLORS.black, "title": "OEUVRES D'ART", "subtitle": "Parcours, philosophie et d\xE9marche cr\xE9ative.", "id": "3" })}${renderComponent($$result2, "Description", $$Description, { "id": 4 })}${renderComponent($$result2, "ListView", ListView, { "client:visible": true, "data": data.data, "client:component-hydration": "visible", "client:component-path": "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/views/ListView/ListView", "client:component-export": "default" })}` })}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/works.astro");

const $$file = "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/works.astro";
const $$url = "/works";

const _page12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Works,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

/** */
const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

const $$Astro = createAstro("https://lea-stauder.art/");
const $$BlogLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": frontmatter.title }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead($$result3)}<div class="mx-auto max-w-[735px] mt-14">
      <span class="text-blue-400 uppercase tracking-wider text-sm font-medium">
        ${frontmatter.category}
      </span>
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight">
        ${frontmatter.title}
      </h1>
      <div class="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap">
        <span class="text-gray-400">
          ${frontmatter.author}
        </span>
        <span class="text-gray-400">•</span>
        <time class="text-gray-400"${addAttribute(frontmatter.publishDate, "datetime")}>
          ${getFormattedDate(frontmatter.publishDate)}
        </time>
        <span class="text-gray-400 hidden md:block">•</span>
        <div class="w-full md:w-auto flex flex-wrap gap-3">
          ${frontmatter.tags.map((tag) => renderTemplate`<span class="text-sm text-gray-500">#${tag}</span>`)}
        </div>
      </div>
    </div><div class="mx-auto prose prose-lg mt-6">
      ${renderSlot($$result3, $$slots["default"])}
    </div><div class="text-center mt-8">
      <a href="/blog" class="bg-gray-100 px-5 py-3 rounded-md hover:bg-gray-200 transition">← Retour aux actualités</a>
    </div>` })}` })}`;
}, "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/layouts/BlogLayout.astro");

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h1 id=\"bonjour\">Bonjour</h1>\n<h2 id=\"bonjour-1\">Bonjour</h2>\n<h3 id=\"bonjour-2\">Bonjour</h3>\n<h4 id=\"bonjour-3\">Bonjour</h4>\n<h5 id=\"bonjour-4\">Bonjour</h5>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Table Heading 1</th><th align=\"left\">Table Heading 2</th><th align=\"center\">Center align</th><th align=\"right\">Right align</th><th align=\"left\">Table Heading 5</th></tr></thead><tbody><tr><td align=\"left\">Item 1</td><td align=\"left\">Item 2</td><td align=\"center\">Item 3</td><td align=\"right\">Item 4</td><td align=\"left\">Item 5</td></tr><tr><td align=\"left\">Item 1</td><td align=\"left\">Item 2</td><td align=\"center\">Item 3</td><td align=\"right\">Item 4</td><td align=\"left\">Item 5</td></tr><tr><td align=\"left\">Item 1</td><td align=\"left\">Item 2</td><td align=\"center\">Item 3</td><td align=\"right\">Item 4</td><td align=\"left\">Item 5</td></tr><tr><td align=\"left\">Item 1</td><td align=\"left\">Item 2</td><td align=\"center\">Item 3</td><td align=\"right\">Item 4</td><td align=\"left\">Item 5</td></tr><tr><td align=\"left\">Item 1</td><td align=\"left\">Item 2</td><td align=\"center\">Item 3</td><td align=\"right\">Item 4</td><td align=\"left\">Item 5</td></tr></tbody></table>\n<ol>\n<li>List</li>\n</ol>\n<ul>\n<li>Vivamus in tellus dictum, fermentum massa sit amet, volutpat elit.</li>\n<li>\n<ul>\n<li>Vivamus in tellus dictum, fermentum massa sit amet, volutpat elit.</li>\n</ul>\n</li>\n<li>\n<ul>\n<li>\n<ul>\n<li>Vivamus in tellus dictum, fermentum massa sit amet, volutpat elit.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<p><strong>BOLD</strong>\r\n<em>ITALIC</em>\r\n<a href=\"www.google.com\">Link</a>\r\n<a href=\"https://www.facebook.com/profile.php?id=100007172853892\">Facebook</a></p>\n<p>Ornare cu cursus laoreet sagittis nunc fusce posuere per euismod dis vehicula a, semper fames lacus maecenas dictumst pulvinar neque enim non potenti. Torquent hac sociosqu eleifend potenti augue nulla vivamus senectus odio.</p>\n<h2 id=\"sodales-hendrerit-malesuada-et-vestibulum\">Sodales hendrerit malesuada et vestibulum</h2>\n<ul>\n<li>Luctus euismod pretium nisi et, est dui enim.</li>\n<li>Curae eget inceptos malesuada, fermentum class.</li>\n<li>Porttitor vestibulum aliquam porta feugiat velit, potenti eu placerat.</li>\n<li>Ligula lacus tempus ac porta, vel litora.</li>\n</ul>\n<p>Torquent non nisi lacinia faucibus nibh tortor taciti commodo porttitor, mus hendrerit id leo scelerisque mollis habitasse orci tristique aptent, lacus at molestie cubilia facilisis porta accumsan condimentum. Metus lacus suscipit porttitor integer facilisi torquent, nostra nulla platea at natoque varius venenatis, id quam pharetra aliquam leo.</p>");

				const frontmatter = {"title":"Exposition Montesquieu Mars 2023 !","excerpt":"J'expose mes nouveaux tableaux d'art a Montesquieu","publishDate":"2023-03-14T00:00:00.000Z","image":"http://localhost:1337/uploads/IMG_20221028_115635_1_8c61f5f33a.jpg?updated_at=2023-01-25T14:16:23.791Z","category":"Exposition","author":"Léa Stauder","layout":"@layouts/BlogLayout.astro","tags":["art","exposition","peinture"]};
				const file = "C:/Users/joeri/Documents/Projects/artpenter-astro/front/src/pages/blog/exposition-montesquieu.md";
				const url = "/blog/exposition-montesquieu";
				function rawContent() {
					return "\r\n# Bonjour\r\n\r\n## Bonjour\r\n\r\n### Bonjour\r\n\r\n#### Bonjour\r\n\r\n##### Bonjour\r\n\r\n| Table Heading 1 | Table Heading 2 | Center align | Right align | Table Heading 5 |\r\n| :-------------- | :-------------- | :----------: | ----------: | :-------------- |\r\n| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |\r\n| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |\r\n| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |\r\n| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |\r\n| Item 1          | Item 2          |    Item 3    |      Item 4 | Item 5          |\r\n\r\n1. List\r\n\r\n- Vivamus in tellus dictum, fermentum massa sit amet, volutpat elit.\r\n- - Vivamus in tellus dictum, fermentum massa sit amet, volutpat elit.\r\n- - - Vivamus in tellus dictum, fermentum massa sit amet, volutpat elit.\r\n\r\n**BOLD**\r\n_ITALIC_\r\n[Link](www.google.com)\r\n[Facebook](https://www.facebook.com/profile.php?id=100007172853892)\r\n\r\nOrnare cu cursus laoreet sagittis nunc fusce posuere per euismod dis vehicula a, semper fames lacus maecenas dictumst pulvinar neque enim non potenti. Torquent hac sociosqu eleifend potenti augue nulla vivamus senectus odio.\r\n\r\n## Sodales hendrerit malesuada et vestibulum\r\n\r\n- Luctus euismod pretium nisi et, est dui enim.\r\n- Curae eget inceptos malesuada, fermentum class.\r\n- Porttitor vestibulum aliquam porta feugiat velit, potenti eu placerat.\r\n- Ligula lacus tempus ac porta, vel litora.\r\n\r\nTorquent non nisi lacinia faucibus nibh tortor taciti commodo porttitor, mus hendrerit id leo scelerisque mollis habitasse orci tristique aptent, lacus at molestie cubilia facilisis porta accumsan condimentum. Metus lacus suscipit porttitor integer facilisi torquent, nostra nulla platea at natoque varius venenatis, id quam pharetra aliquam leo.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"bonjour","text":"Bonjour"},{"depth":2,"slug":"bonjour-1","text":"Bonjour"},{"depth":3,"slug":"bonjour-2","text":"Bonjour"},{"depth":4,"slug":"bonjour-3","text":"Bonjour"},{"depth":5,"slug":"bonjour-4","text":"Bonjour"},{"depth":2,"slug":"sodales-hendrerit-malesuada-et-vestibulum","text":"Sodales hendrerit malesuada et vestibulum"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$BlogLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const _page13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  images,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f, _page7 as g, _page8 as h, _page9 as i, _page10 as j, _page11 as k, _page12 as l, _page13 as m };
