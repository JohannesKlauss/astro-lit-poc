import '@lit/reactive-element';
import 'lit-html';
import { LitElement, html, css } from 'lit-element/lit-element.js';
import 'lit-html/is-server.js';
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, f as renderComponent, m as maybeRenderHead } from '../astro.726f2157.mjs';
import 'html-escaper';
/* empty css                           */import { property, state, customElement } from 'lit/decorators.js';
/* empty css                          *//* empty css                          */
const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/Users/johannesklauss/Documents/Spacetime/astro-lit/src/layouts/Layout.astro");

var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
let LitPokemon = class extends LitElement {
  constructor() {
    super(...arguments);
    this.docsHint = "Click on the Vite and Lit logos to learn more";
    this.pokeId = 0;
    this.pokemon = null;
  }
  connectedCallback() {
    super.connectedCallback();
    console.log("connectedCallback pokemon in lit", this.pokeId);
    this.loadPokemon();
  }
  async loadPokemon() {
    const res = await fetch(`/api/${this.pokeId}.json`);
    this.pokemon = await res.json();
    console.log("load", this.pokemon);
  }
  update(changedProperties) {
    if (changedProperties.has("pokeId")) {
      this.pokemon = null;
      this.loadPokemon();
    }
    super.update(changedProperties);
  }
  render() {
    console.log("render pokemon in lit");
    return this.renderPokemon();
  }
  renderPokemon() {
    if (this.pokemon) {
      return html`
          <div class="link-card">
              <a href=${this.pokemon.species.url}>
                  <h2>
                      ${this.pokemon.species.name}
                      <span>&rarr;</span>
                  </h2>
                  <img src=${this.pokemon.sprites.front_default}/>
                  <p>
                      ${this.pokemon.types.map(({ type }) => type.name).join(", ")}
                  </p>
              </a>
          </div>
      `;
    }
    return html`
      <div class="card">
          <h2>Loading...</h2>
      </div>
    `;
  }
};
__decorateClass$1([
  property()
], LitPokemon.prototype, "docsHint", 2);
__decorateClass$1([
  property({ type: Number, attribute: "poke-id" })
], LitPokemon.prototype, "pokeId", 2);
__decorateClass$1([
  state()
], LitPokemon.prototype, "pokemon", 2);
LitPokemon = __decorateClass$1([
  customElement("lit-pokemon")
], LitPokemon);

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let RandomPokemon = class extends LitElement {
  constructor() {
    super(...arguments);
    this.docsHint = "Click on the Vite and Lit logos to learn more";
    this._pokeId = Math.floor(Math.random() * 150) + 1;
  }
  render() {
    console.log("render pokmeon");
    return html`
      <div class="card">
          <h1>Currently showing: ${this._pokeId}</h1>
        <button @click=${this._onClick}>
          Randomize
        </button>
        <lit-pokemon poke-id=${this._pokeId}></lit-pokemon>
      </div>
    `;
  }
  _onClick() {
    this._pokeId = Math.floor(Math.random() * 150) + 1;
  }
};
RandomPokemon.styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
    }
  `;
__decorateClass([
  property()
], RandomPokemon.prototype, "docsHint", 2);
__decorateClass([
  state()
], RandomPokemon.prototype, "_pokeId", 2);
RandomPokemon = __decorateClass([
  customElement("random-pokemon")
], RandomPokemon);

const $$Astro$2 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="astro-J7PV25F6">
		<h1 class="astro-J7PV25F6">Rendered <span class="text-gradient astro-J7PV25F6">SSG</span></h1>
		<p class="instructions astro-J7PV25F6">
			These cards are rendered as SSG pages. They are generated at build time and served statically.
		</p>
		<ul role="list" class="link-card-grid astro-J7PV25F6">
			<li class="astro-J7PV25F6">
			    <a href="/pokemon-ssg/1" class="astro-J7PV25F6">Das funktioniert</a>
			    <a href="/pokemon-ssg/4" class="astro-J7PV25F6">Das funktioniert</a>
			    <a href="/pokemon-ssg/5" class="astro-J7PV25F6">Das nicht</a>
			</li>
		</ul>

		<h1 class="astro-J7PV25F6">Rendered <span class="text-gradient astro-J7PV25F6">SSR</span></h1>
        		<p class="instructions astro-J7PV25F6">
        			These cards are rendered as SSR pages. They are generated on the fly and served dynamically.
        		</p>
        		<ul role="list" class="link-card-grid astro-J7PV25F6">
        			<li class="astro-J7PV25F6">
        			    <a href="/pokemon-ssr/1" class="astro-J7PV25F6">Das funktioniert</a>
        			    <a href="/pokemon-ssr/4" class="astro-J7PV25F6">Das funktioniert</a>
        			    <a href="/pokemon-ssr/5" class="astro-J7PV25F6">Das auch</a>
        			</li>
        		</ul>

        		<span class="astro-J7PV25F6">Hallo</span>

        		${renderComponent($$result2, "RandomPokemon", RandomPokemon, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/johannesklauss/Documents/Spacetime/astro-lit/src/components/RandomPokemon.ts", "client:component-export": "RandomPokemon", "class": "astro-J7PV25F6" })}

        		<span class="astro-J7PV25F6">web components</span>
	</main>` })}`;
}, "/Users/johannesklauss/Documents/Spacetime/astro-lit/src/pages/index.astro");

const $$file$1 = "/Users/johannesklauss/Documents/Spacetime/astro-lit/src/pages/index.astro";
const $$url$1 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Pokemon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pokemon;
  const { id } = Astro2.props;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  console.log("fetch", data.species.name);
  return renderTemplate`${maybeRenderHead($$result)}<li class="link-card astro-4F7677Q2">
    <a${addAttribute(data.species.url, "href")} class="astro-4F7677Q2">
		<h2 class="astro-4F7677Q2">
			${data.species.name}
			<span class="astro-4F7677Q2">&rarr;</span>
		</h2>
		<img${addAttribute(data.sprites.front_default, "src")} class="astro-4F7677Q2">
		<p class="astro-4F7677Q2">
			${data.types.map(({ type }) => type.name).join(", ")}
		</p>
	</a>
</li>`;
}, "/Users/johannesklauss/Documents/Spacetime/astro-lit/src/components/Pokemon.astro");

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  return renderTemplate`${maybeRenderHead($$result)}<a href="/" class="astro-I3GBWS4T">back</a>

<h1 class="astro-I3GBWS4T">Rendered as SSR</h1>

${renderComponent($$result, "Pokemon", $$Pokemon, { "id": id, "class": "astro-I3GBWS4T" })}`;
}, "/Users/johannesklauss/Documents/Spacetime/astro-lit/src/pages/pokemon-ssr/[id].astro");

const $$file = "/Users/johannesklauss/Documents/Spacetime/astro-lit/src/pages/pokemon-ssr/[id].astro";
const $$url = "/pokemon-ssr/[id]";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const get = async ({ params }) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  return {
    body: JSON.stringify(await response.json())
  };
};

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	get
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Pokemon as $, _page0 as _, _page2 as a, _page3 as b };
