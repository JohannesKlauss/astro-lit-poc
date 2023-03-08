import{x as b,L as E,Z as v}from"../lit-html.25c79264.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=e=>e===null||typeof e!="object"&&typeof e!="function",m=(e,a)=>a===void 0?e?._$litType$!==void 0:e?._$litType$===a,A=e=>e.strings===void 0;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{R:T,D:w,V:u,I:h,F:x}=E,P=(e,a,l={})=>{if(a._$litPart$!==void 0)throw Error("container already contains a live render");let i,t;const n=[],o=document.createTreeWalker(a,NodeFilter.SHOW_COMMENT,null,!1);let r;for(;(r=o.nextNode())!==null;){const s=r.data;if(s.startsWith("lit-part")){if(n.length===0&&i!==void 0)throw Error("there must be only one root part per container");t=$(e,r,n,l),i!=null||(i=t)}else if(s.startsWith("lit-node"))R(r,n,l);else if(s.startsWith("/lit-part")){if(n.length===1&&t!==i)throw Error("internal error");t=I(r,t,n)}}console.assert(i!==void 0,"there should be exactly one root part in a render container"),a._$litPart$=i},$=(e,a,l,i)=>{let t,n;if(l.length===0)n=new h(a,null,void 0,i),t=e;else{const o=l[l.length-1];if(o.type==="template-instance")n=new h(a,null,o.instance,i),o.instance.u.push(n),t=o.result.values[o.instancePartIndex++],o.templatePartIndex++;else if(o.type==="iterable"){n=new h(a,null,o.part,i);const r=o.iterator.next();if(r.done)throw t=void 0,o.done=!0,Error("Unhandled shorter than expected iterable");t=r.value,o.part._$AH.push(n)}else n=new h(a,null,o.part,i)}if(t=u(n,t),t===b)l.push({part:n,type:"leaf"});else if(g(t))l.push({part:n,type:"leaf"}),n._$AH=t;else if(m(t)){const o="lit-part "+_(t);if(a.data!==o)throw Error("Hydration value mismatch: Unexpected TemplateResult rendered to part");{const r=h.prototype._$AC(t),s=new T(r,n);l.push({type:"template-instance",instance:s,part:n,templatePartIndex:0,instancePartIndex:0,result:t}),n._$AH=s}}else w(t)?(l.push({part:n,type:"iterable",value:t,iterator:t[Symbol.iterator](),done:!1}),n._$AH=[]):(l.push({part:n,type:"leaf"}),n._$AH=t??"");return n},I=(e,a,l)=>{if(a===void 0)throw Error("unbalanced part marker");a._$AB=e;const i=l.pop();if(i.type==="iterable"&&!i.iterator.next().done)throw Error("unexpected longer than expected iterable");if(l.length>0)return l[l.length-1].part},R=(e,a,l)=>{var i;const t=/lit-node (\d+)/.exec(e.data),n=parseInt(t[1]),o=(i=e.previousElementSibling)!==null&&i!==void 0?i:e.parentElement;if(o===null)throw Error("could not find node for attribute parts");o.removeAttribute("defer-hydration");const r=a[a.length-1];if(r.type!=="template-instance")throw Error("internal error");{const s=r.instance;for(;;){const p=s._$AD.parts[r.templatePartIndex];if(p===void 0||p.type!==d.ATTRIBUTE&&p.type!==d.ELEMENT||p.index!==n)break;if(p.type===d.ATTRIBUTE){const c=new p.ctor(o,p.name,p.strings,r.instance,l),f=A(c)?r.result.values[r.instancePartIndex]:r.result.values,y=!(c.type===d.EVENT||c.type===d.PROPERTY);c._$AI(f,c,r.instancePartIndex,y),r.instancePartIndex+=p.strings.length-1,s.u.push(c)}else{const c=new x(o,r.instance,l);u(c,r.result.values[r.instancePartIndex++]),s.u.push(c)}r.templatePartIndex++}}},_=e=>{const a=new Uint32Array(2).fill(5381);for(const i of e.strings)for(let t=0;t<i.length;t++)a[t%2]=33*a[t%2]^i.charCodeAt(t);const l=String.fromCharCode(...new Uint8Array(a.buffer));return btoa(l)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */globalThis.litElementHydrateSupport=({LitElement:e})=>{const a=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"observedAttributes").get;Object.defineProperty(e,"observedAttributes",{get(){return[...a.call(this),"defer-hydration"]}});const l=e.prototype.attributeChangedCallback;e.prototype.attributeChangedCallback=function(o,r,s){o==="defer-hydration"&&s===null&&i.call(this),l.call(this,o,r,s)};const i=e.prototype.connectedCallback;e.prototype.connectedCallback=function(){this.hasAttribute("defer-hydration")||i.call(this)};const t=e.prototype.createRenderRoot;e.prototype.createRenderRoot=function(){return this.shadowRoot?(this._$AG=!0,this.shadowRoot):t.call(this)};const n=Object.getPrototypeOf(e.prototype).update;e.prototype.update=function(o){const r=this.render();n.call(this,o),this._$AG?(this._$AG=!1,P(r,this.renderRoot,this.renderOptions)):v(r,this.renderRoot,this.renderOptions)}};
