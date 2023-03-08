import{Z as T,x as L,y as E}from"./lit-html.25c79264.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=window,b=c.ShadowRoot&&(c.ShadyCSS===void 0||c.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,S=Symbol(),w=new WeakMap;let A=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==S)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(b&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=w.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&w.set(e,t))}return t}toString(){return this.cssText}};const M=s=>new A(typeof s=="string"?s:s+"",void 0,S),D=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((o,i,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[r+1],s[0]);return new A(e,s,S)},I=(s,t)=>{b?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),i=c.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,s.appendChild(o)})},C=b?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return M(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var v;const p=window,P=p.trustedTypes,N=P?P.emptyScript:"",O=p.reactiveElementPolyfillSupport,g={toAttribute(s,t){switch(t){case Boolean:s=s?N:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},R=(s,t)=>t!==s&&(t==t||s==s),m={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:R};class l extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const i=this._$Ep(o,e);i!==void 0&&(this._$Ev.set(i,o),t.push(i))}),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of o)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)e.unshift(C(i))}else t!==void 0&&e.push(C(t));return e}static _$Ep(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return I(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=m){var i;const r=this.constructor._$Ep(t,o);if(r!==void 0&&o.reflect===!0){const n=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:g).toAttribute(e,o.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var o;const i=this.constructor,r=i._$Ev.get(t);if(r!==void 0&&this._$El!==r){const n=i.getPropertyOptions(r),j=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:g;this._$El=r,this[r]=j.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||R)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(o)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}l.finalized=!0,l.elementProperties=new Map,l.elementStyles=[],l.shadowRootOptions={mode:"open"},O?.({ReactiveElement:l}),((v=p.reactiveElementVersions)!==null&&v!==void 0?v:p.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var y,$;class a extends l{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=T(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return L}}a.finalized=!0,a._$litElement$=!0,(y=globalThis.litElementHydrateSupport)===null||y===void 0||y.call(globalThis,{LitElement:a});const U=globalThis.litElementPolyfillSupport;U?.({LitElement:a});(($=globalThis.litElementVersions)!==null&&$!==void 0?$:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=s=>t=>typeof t=="function"?((e,o)=>(customElements.define(e,o),o))(s,t):((e,o)=>{const{kind:i,elements:r}=o;return{kind:i,elements:r,finisher(n){customElements.define(e,n)}}})(s,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}};function u(s){return(t,e)=>e!==void 0?((o,i,r)=>{i.constructor.createProperty(r,o)})(s,t,e):H(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(s){return u({...s,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _;((_=window.HTMLSlotElement)===null||_===void 0?void 0:_.prototype.assignedElements)!=null;var V=Object.defineProperty,B=Object.getOwnPropertyDescriptor,f=(s,t,e,o)=>{for(var i=o>1?void 0:o?B(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&V(t,e,i),i};let h=class extends a{constructor(){super(...arguments),this.docsHint="Click on the Vite and Lit logos to learn more",this.pokeId=0,this.pokemon=null}connectedCallback(){super.connectedCallback(),console.log("connectedCallback pokemon in lit",this.pokeId),this.loadPokemon()}async loadPokemon(){const s=await fetch(`/api/${this.pokeId}.json`);this.pokemon=await s.json(),console.log("load",this.pokemon)}update(s){s.has("pokeId")&&(this.pokemon=null,this.loadPokemon()),super.update(s)}render(){return console.log("render pokemon in lit"),this.renderPokemon()}renderPokemon(){return this.pokemon?E`
          <div class="link-card">
              <a href=${this.pokemon.species.url}>
                  <h2>
                      ${this.pokemon.species.name}
                      <span>&rarr;</span>
                  </h2>
                  <img src=${this.pokemon.sprites.front_default}/>
                  <p>
                      ${this.pokemon.types.map(({type:s})=>s.name).join(", ")}
                  </p>
              </a>
          </div>
      `:E`
      <div class="card">
          <h2>Loading...</h2>
      </div>
    `}};f([u()],h.prototype,"docsHint",2);f([u({type:Number,attribute:"poke-id"})],h.prototype,"pokeId",2);f([z()],h.prototype,"pokemon",2);h=f([x("lit-pokemon")],h);var q=Object.defineProperty,K=Object.getOwnPropertyDescriptor,k=(s,t,e,o)=>{for(var i=o>1?void 0:o?K(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(i=(o?n(t,e,i):n(i))||i);return o&&i&&q(t,e,i),i};let d=class extends a{constructor(){super(...arguments),this.docsHint="Click on the Vite and Lit logos to learn more",this._pokeId=Math.floor(Math.random()*150)+1}render(){return console.log("render pokmeon"),E`
      <div class="card">
          <h1>Currently showing: ${this._pokeId}</h1>
        <button @click=${this._onClick}>
          Randomize
        </button>
        <lit-pokemon poke-id=${this._pokeId}></lit-pokemon>
      </div>
    `}_onClick(){this._pokeId=Math.floor(Math.random()*150)+1}};d.styles=D`
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
  `;k([u()],d.prototype,"docsHint",2);k([z()],d.prototype,"_pokeId",2);d=k([x("random-pokemon")],d);export{d as RandomPokemon};
