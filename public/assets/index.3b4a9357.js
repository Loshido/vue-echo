var Pc=Object.defineProperty,Mc=Object.defineProperties;var Dc=Object.getOwnPropertyDescriptors;var pi=Object.getOwnPropertySymbols;var Nc=Object.prototype.hasOwnProperty,xc=Object.prototype.propertyIsEnumerable;var gi=(t,e,n)=>e in t?Pc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,mi=(t,e)=>{for(var n in e||(e={}))Nc.call(e,n)&&gi(t,n,e[n]);if(pi)for(var n of pi(e))xc.call(e,n)&&gi(t,n,e[n]);return t},_i=(t,e)=>Mc(t,Dc(e));const Lc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Lc();function Ss(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Uc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$c=Ss(Uc);function Mo(t){return!!t||t===""}function wr(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=fe(r)?Hc(r):wr(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(fe(t))return t;if(ce(t))return t}}const Fc=/;(?![^(]*\))/g,Bc=/:(.+)/;function Hc(t){const e={};return t.split(Fc).forEach(n=>{if(n){const r=n.split(Bc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function As(t){let e="";if(fe(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=As(t[n]);r&&(e+=r+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ce=t=>fe(t)?t:t==null?"":$(t)||ce(t)&&(t.toString===Lo||!B(t.toString))?JSON.stringify(t,Do,2):String(t),Do=(t,e)=>e&&e.__v_isRef?Do(t,e.value):Gt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:No(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!$(e)&&!Uo(e)?String(e):e,Q={},Kt=[],De=()=>{},jc=()=>!1,Wc=/^on[^a-z]/,Ir=t=>Wc.test(t),Cs=t=>t.startsWith("onUpdate:"),ve=Object.assign,ks=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Vc=Object.prototype.hasOwnProperty,W=(t,e)=>Vc.call(t,e),$=Array.isArray,Gt=t=>Er(t)==="[object Map]",No=t=>Er(t)==="[object Set]",B=t=>typeof t=="function",fe=t=>typeof t=="string",Os=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",xo=t=>ce(t)&&B(t.then)&&B(t.catch),Lo=Object.prototype.toString,Er=t=>Lo.call(t),zc=t=>Er(t).slice(8,-1),Uo=t=>Er(t)==="[object Object]",Ps=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qn=Ss(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qc=/-(\w)/g,ze=Tr(t=>t.replace(qc,(e,n)=>n?n.toUpperCase():"")),Kc=/\B([A-Z])/g,sn=Tr(t=>t.replace(Kc,"-$1").toLowerCase()),Rr=Tr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Br=Tr(t=>t?`on${Rr(t)}`:""),Sn=(t,e)=>!Object.is(t,e),Zn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ar=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},cr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vi;const Gc=()=>vi||(vi=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Be;class Jc{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Be&&(this.parent=Be,this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Be;try{return Be=this,e()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Yc(t,e=Be){e&&e.active&&e.effects.push(t)}const Ms=t=>{const e=new Set(t);return e.w=0,e.n=0,e},$o=t=>(t.w&vt)>0,Fo=t=>(t.n&vt)>0,Xc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=vt},Qc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];$o(s)&&!Fo(s)?s.delete(t):e[n++]=s,s.w&=~vt,s.n&=~vt}e.length=n}},ts=new WeakMap;let mn=0,vt=1;const ns=30;let Pe;const Ct=Symbol(""),rs=Symbol("");class Ds{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Yc(this,r)}run(){if(!this.active)return this.fn();let e=Pe,n=pt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Pe,Pe=this,pt=!0,vt=1<<++mn,mn<=ns?Xc(this):yi(this),this.fn()}finally{mn<=ns&&Qc(this),vt=1<<--mn,Pe=this.parent,pt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pe===this?this.deferStop=!0:this.active&&(yi(this),this.onStop&&this.onStop(),this.active=!1)}}function yi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let pt=!0;const Bo=[];function on(){Bo.push(pt),pt=!1}function an(){const t=Bo.pop();pt=t===void 0?!0:t}function Te(t,e,n){if(pt&&Pe){let r=ts.get(t);r||ts.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ms()),Ho(s)}}function Ho(t,e){let n=!1;mn<=ns?Fo(t)||(t.n|=vt,n=!$o(t)):n=!t.has(Pe),n&&(t.add(Pe),Pe.deps.push(t))}function Qe(t,e,n,r,s,i){const o=ts.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Ps(n)&&a.push(o.get("length")):(a.push(o.get(Ct)),Gt(t)&&a.push(o.get(rs)));break;case"delete":$(t)||(a.push(o.get(Ct)),Gt(t)&&a.push(o.get(rs)));break;case"set":Gt(t)&&a.push(o.get(Ct));break}if(a.length===1)a[0]&&ss(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ss(Ms(c))}}function ss(t,e){for(const n of $(t)?t:[...t])(n!==Pe||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Zc=Ss("__proto__,__v_isRef,__isVue"),jo=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Os)),el=Ns(),tl=Ns(!1,!0),nl=Ns(!0),bi=rl();function rl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)Te(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){on();const r=K(this)[e].apply(this,n);return an(),r}}),t}function Ns(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?yl:Ko:e?qo:zo).get(r))return r;const o=$(r);if(!t&&o&&W(bi,s))return Reflect.get(bi,s,i);const a=Reflect.get(r,s,i);return(Os(s)?jo.has(s):Zc(s))||(t||Te(r,"get",s),e)?a:ge(a)?!o||!Ps(s)?a.value:a:ce(a)?t?Go(a):$n(a):a}}const sl=Wo(),il=Wo(!0);function Wo(t=!1){return function(n,r,s,i){let o=n[r];if(An(o)&&ge(o)&&!ge(s))return!1;if(!t&&!An(s)&&(Jo(s)||(s=K(s),o=K(o)),!$(n)&&ge(o)&&!ge(s)))return o.value=s,!0;const a=$(n)&&Ps(r)?Number(r)<n.length:W(n,r),c=Reflect.set(n,r,s,i);return n===K(i)&&(a?Sn(s,o)&&Qe(n,"set",r,s):Qe(n,"add",r,s)),c}}function ol(t,e){const n=W(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Qe(t,"delete",e,void 0),r}function al(t,e){const n=Reflect.has(t,e);return(!Os(e)||!jo.has(e))&&Te(t,"has",e),n}function cl(t){return Te(t,"iterate",$(t)?"length":Ct),Reflect.ownKeys(t)}const Vo={get:el,set:sl,deleteProperty:ol,has:al,ownKeys:cl},ll={get:nl,set(t,e){return!0},deleteProperty(t,e){return!0}},ul=ve({},Vo,{get:tl,set:il}),xs=t=>t,Sr=t=>Reflect.getPrototypeOf(t);function qn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);e!==i&&!n&&Te(s,"get",e),!n&&Te(s,"get",i);const{has:o}=Sr(s),a=r?xs:n?$s:Cn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Kn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return t!==s&&!e&&Te(r,"has",t),!e&&Te(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Gn(t,e=!1){return t=t.__v_raw,!e&&Te(K(t),"iterate",Ct),Reflect.get(t,"size",t)}function wi(t){t=K(t);const e=K(this);return Sr(e).has.call(e,t)||(e.add(t),Qe(e,"add",t,t)),this}function Ii(t,e){e=K(e);const n=K(this),{has:r,get:s}=Sr(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Sn(e,o)&&Qe(n,"set",t,e):Qe(n,"add",t,e),this}function Ei(t){const e=K(this),{has:n,get:r}=Sr(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Qe(e,"delete",t,void 0),i}function Ti(){const t=K(this),e=t.size!==0,n=t.clear();return e&&Qe(t,"clear",void 0,void 0),n}function Jn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?xs:t?$s:Cn;return!t&&Te(a,"iterate",Ct),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function Yn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Gt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?xs:e?$s:Cn;return!e&&Te(i,"iterate",c?rs:Ct),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function nt(t){return function(...e){return t==="delete"?!1:this}}function fl(){const t={get(i){return qn(this,i)},get size(){return Gn(this)},has:Kn,add:wi,set:Ii,delete:Ei,clear:Ti,forEach:Jn(!1,!1)},e={get(i){return qn(this,i,!1,!0)},get size(){return Gn(this)},has:Kn,add:wi,set:Ii,delete:Ei,clear:Ti,forEach:Jn(!1,!0)},n={get(i){return qn(this,i,!0)},get size(){return Gn(this,!0)},has(i){return Kn.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:Jn(!0,!1)},r={get(i){return qn(this,i,!0,!0)},get size(){return Gn(this,!0)},has(i){return Kn.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:Jn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Yn(i,!1,!1),n[i]=Yn(i,!0,!1),e[i]=Yn(i,!1,!0),r[i]=Yn(i,!0,!0)}),[t,n,e,r]}const[dl,hl,pl,gl]=fl();function Ls(t,e){const n=e?t?gl:pl:t?hl:dl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const ml={get:Ls(!1,!1)},_l={get:Ls(!1,!0)},vl={get:Ls(!0,!1)},zo=new WeakMap,qo=new WeakMap,Ko=new WeakMap,yl=new WeakMap;function bl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wl(t){return t.__v_skip||!Object.isExtensible(t)?0:bl(zc(t))}function $n(t){return An(t)?t:Us(t,!1,Vo,ml,zo)}function Il(t){return Us(t,!1,ul,_l,qo)}function Go(t){return Us(t,!0,ll,vl,Ko)}function Us(t,e,n,r,s){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=wl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Jt(t){return An(t)?Jt(t.__v_raw):!!(t&&t.__v_isReactive)}function An(t){return!!(t&&t.__v_isReadonly)}function Jo(t){return!!(t&&t.__v_isShallow)}function Yo(t){return Jt(t)||An(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Xo(t){return ar(t,"__v_skip",!0),t}const Cn=t=>ce(t)?$n(t):t,$s=t=>ce(t)?Go(t):t;function Qo(t){pt&&Pe&&(t=K(t),Ho(t.dep||(t.dep=Ms())))}function Zo(t,e){t=K(t),t.dep&&ss(t.dep)}function ge(t){return!!(t&&t.__v_isRef===!0)}function El(t){return ea(t,!1)}function Tl(t){return ea(t,!0)}function ea(t,e){return ge(t)?t:new Rl(t,e)}class Rl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:Cn(e)}get value(){return Qo(this),this._value}set value(e){e=this.__v_isShallow?e:K(e),Sn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Cn(e),Zo(this))}}function ue(t){return ge(t)?t.value:t}const Sl={get:(t,e,n)=>ue(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ge(s)&&!ge(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ta(t){return Jt(t)?t:new Proxy(t,Sl)}class Al{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ds(e,()=>{this._dirty||(this._dirty=!0,Zo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return Qo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Cl(t,e,n=!1){let r,s;const i=B(t);return i?(r=t,s=De):(r=t.get,s=t.set),new Al(r,s,i||!s,n)}function gt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ar(i,e,n)}return s}function Ne(t,e,n,r){if(B(t)){const i=gt(t,e,n,r);return i&&xo(i)&&i.catch(o=>{Ar(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ne(t[i],e,n,r));return s}function Ar(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){gt(c,null,10,[t,o,a]);return}}kl(t,n,s,r)}function kl(t,e,n,r=!0){console.error(t)}let lr=!1,is=!1;const Ee=[];let Ge=0;const bn=[];let _n=null,jt=0;const wn=[];let ot=null,Wt=0;const na=Promise.resolve();let Fs=null,os=null;function ra(t){const e=Fs||na;return t?e.then(this?t.bind(this):t):e}function Ol(t){let e=Ge+1,n=Ee.length;for(;e<n;){const r=e+n>>>1;kn(Ee[r])<t?e=r+1:n=r}return e}function sa(t){(!Ee.length||!Ee.includes(t,lr&&t.allowRecurse?Ge+1:Ge))&&t!==os&&(t.id==null?Ee.push(t):Ee.splice(Ol(t.id),0,t),ia())}function ia(){!lr&&!is&&(is=!0,Fs=na.then(ca))}function Pl(t){const e=Ee.indexOf(t);e>Ge&&Ee.splice(e,1)}function oa(t,e,n,r){$(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),ia()}function Ml(t){oa(t,_n,bn,jt)}function Dl(t){oa(t,ot,wn,Wt)}function Bs(t,e=null){if(bn.length){for(os=e,_n=[...new Set(bn)],bn.length=0,jt=0;jt<_n.length;jt++)_n[jt]();_n=null,jt=0,os=null,Bs(t,e)}}function aa(t){if(wn.length){const e=[...new Set(wn)];if(wn.length=0,ot){ot.push(...e);return}for(ot=e,ot.sort((n,r)=>kn(n)-kn(r)),Wt=0;Wt<ot.length;Wt++)ot[Wt]();ot=null,Wt=0}}const kn=t=>t.id==null?1/0:t.id;function ca(t){is=!1,lr=!0,Bs(t),Ee.sort((n,r)=>kn(n)-kn(r));const e=De;try{for(Ge=0;Ge<Ee.length;Ge++){const n=Ee[Ge];n&&n.active!==!1&&gt(n,null,14)}}finally{Ge=0,Ee.length=0,aa(),lr=!1,Fs=null,(Ee.length||bn.length||wn.length)&&ca(t)}}function Nl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Q;p?s=n.map(b=>b.trim()):h&&(s=n.map(cr))}let a,c=r[a=Br(e)]||r[a=Br(ze(e))];!c&&i&&(c=r[a=Br(sn(e))]),c&&Ne(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ne(l,t,6,s)}}function la(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const f=la(l,e,!0);f&&(a=!0,ve(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):ve(o,i),r.set(t,o),o)}function Cr(t,e){return!t||!Ir(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,sn(e))||W(t,e))}let Me=null,kr=null;function ur(t){const e=Me;return Me=t,kr=t&&t.type.__scopeId||null,e}function Hs(t){kr=t}function js(){kr=null}function ht(t,e=Me,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ni(-1);const i=ur(e),o=t(...s);return ur(i),r._d&&Ni(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Hr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:b,ctx:S,inheritAttrs:U}=t;let C,O;const F=ur(t);try{if(n.shapeFlag&4){const q=s||r;C=He(f.call(q,q,h,i,b,p,S)),O=c}else{const q=e;C=He(q.length>1?q(i,{attrs:c,slots:a,emit:l}):q(i,null)),O=e.props?c:xl(c)}}catch(q){In.length=0,Ar(q,t,1),C=re(Mt)}let z=C;if(O&&U!==!1){const q=Object.keys(O),{shapeFlag:de}=z;q.length&&de&7&&(o&&q.some(Cs)&&(O=Ll(O,o)),z=On(z,O))}return n.dirs&&(z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),C=z,ur(F),C}const xl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ir(n))&&((e||(e={}))[n]=t[n]);return e},Ll=(t,e)=>{const n={};for(const r in t)(!Cs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ul(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ri(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Cr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ri(r,o,l):!0:!!o;return!1}function Ri(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Cr(n,i))return!0}return!1}function $l({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Fl=t=>t.__isSuspense;function Bl(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Dl(t)}function er(t,e){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[t]=e}}function mt(t,e,n=!1){const r=pe||Me;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r.proxy):e}}const Si={};function tr(t,e,n){return ua(t,e,n)}function ua(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){const a=pe;let c,l=!1,f=!1;if(ge(t)?(c=()=>t.value,l=Jo(t)):Jt(t)?(c=()=>t,r=!0):$(t)?(f=!0,l=t.some(Jt),c=()=>t.map(O=>{if(ge(O))return O.value;if(Jt(O))return St(O);if(B(O))return gt(O,a,2)})):B(t)?e?c=()=>gt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ne(t,a,3,[p])}:c=De,e&&r){const O=c;c=()=>St(O())}let h,p=O=>{h=C.onStop=()=>{gt(O,a,4)}};if(Mn)return p=De,e?n&&Ne(e,a,3,[c(),f?[]:void 0,p]):c(),De;let b=f?[]:Si;const S=()=>{if(!!C.active)if(e){const O=C.run();(r||l||(f?O.some((F,z)=>Sn(F,b[z])):Sn(O,b)))&&(h&&h(),Ne(e,a,3,[O,b===Si?void 0:b,p]),b=O)}else C.run()};S.allowRecurse=!!e;let U;s==="sync"?U=S:s==="post"?U=()=>be(S,a&&a.suspense):U=()=>{!a||a.isMounted?Ml(S):S()};const C=new Ds(c,U);return e?n?S():b=C.run():s==="post"?be(C.run.bind(C),a&&a.suspense):C.run(),()=>{C.stop(),a&&a.scope&&ks(a.scope.effects,C)}}function Hl(t,e,n){const r=this.proxy,s=fe(t)?t.includes(".")?fa(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=pe;Zt(this);const a=ua(s,i.bind(r),n);return o?Zt(o):Ot(),a}function fa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function St(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ge(t))St(t.value,e);else if($(t))for(let n=0;n<t.length;n++)St(t[n],e);else if(No(t)||Gt(t))t.forEach(n=>{St(n,e)});else if(Uo(t))for(const n in t)St(t[n],e);return t}function da(t){return B(t)?{setup:t,name:t.name}:t}const as=t=>!!t.type.__asyncLoader,ha=t=>t.type.__isKeepAlive;function jl(t,e){pa(t,"a",e)}function Wl(t,e){pa(t,"da",e)}function pa(t,e,n=pe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Or(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ha(s.parent.vnode)&&Vl(r,e,n,s),s=s.parent}}function Vl(t,e,n,r){const s=Or(e,t,r,!0);ga(()=>{ks(r[e],s)},n)}function Or(t,e,n=pe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;on(),Zt(n);const a=Ne(e,n,t,o);return Ot(),an(),a});return r?s.unshift(i):s.push(i),i}}const et=t=>(e,n=pe)=>(!Mn||t==="sp")&&Or(t,e,n),zl=et("bm"),ql=et("m"),Kl=et("bu"),Gl=et("u"),Jl=et("bum"),ga=et("um"),Yl=et("sp"),Xl=et("rtg"),Ql=et("rtc");function Zl(t,e=pe){Or("ec",t,e)}let cs=!0;function eu(t){const e=_a(t),n=t.proxy,r=t.ctx;cs=!1,e.beforeCreate&&Ai(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:b,updated:S,activated:U,deactivated:C,beforeDestroy:O,beforeUnmount:F,destroyed:z,unmounted:q,render:de,renderTracked:he,renderTriggered:Se,errorCaptured:tt,serverPrefetch:ye,expose:Le,inheritAttrs:qe,components:ke,directives:Lt,filters:Ut}=e;if(l&&tu(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ee in o){const G=o[ee];B(G)&&(r[ee]=G.bind(n))}if(s){const ee=s.call(n,n);ce(ee)&&(t.data=$n(ee))}if(cs=!0,i)for(const ee in i){const G=i[ee],we=B(G)?G.bind(n,n):B(G.get)?G.get.bind(n,n):De,Ft=!B(G)&&B(G.set)?G.set.bind(n):De,Ke=je({get:we,set:Ft});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Ue=>Ke.value=Ue})}if(a)for(const ee in a)ma(a[ee],r,n,ee);if(c){const ee=B(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(G=>{er(G,ee[G])})}f&&Ai(f,t,"c");function ae(ee,G){$(G)?G.forEach(we=>ee(we.bind(n))):G&&ee(G.bind(n))}if(ae(zl,h),ae(ql,p),ae(Kl,b),ae(Gl,S),ae(jl,U),ae(Wl,C),ae(Zl,tt),ae(Ql,he),ae(Xl,Se),ae(Jl,F),ae(ga,q),ae(Yl,ye),$(Le))if(Le.length){const ee=t.exposed||(t.exposed={});Le.forEach(G=>{Object.defineProperty(ee,G,{get:()=>n[G],set:we=>n[G]=we})})}else t.exposed||(t.exposed={});de&&t.render===De&&(t.render=de),qe!=null&&(t.inheritAttrs=qe),ke&&(t.components=ke),Lt&&(t.directives=Lt)}function tu(t,e,n=De,r=!1){$(t)&&(t=ls(t));for(const s in t){const i=t[s];let o;ce(i)?"default"in i?o=mt(i.from||s,i.default,!0):o=mt(i.from||s):o=mt(i),ge(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ai(t,e,n){Ne($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ma(t,e,n,r){const s=r.includes(".")?fa(n,r):()=>n[r];if(fe(t)){const i=e[t];B(i)&&tr(s,i)}else if(B(t))tr(s,t.bind(n));else if(ce(t))if($(t))t.forEach(i=>ma(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&tr(s,i,t)}}function _a(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>fr(c,l,o,!0)),fr(c,e,o)),i.set(e,c),c}function fr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&fr(t,i,n,!0),s&&s.forEach(o=>fr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=nu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const nu={data:Ci,props:Et,emits:Et,methods:Et,computed:Et,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:Et,directives:Et,watch:su,provide:Ci,inject:ru};function Ci(t,e){return e?t?function(){return ve(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function ru(t,e){return Et(ls(t),ls(e))}function ls(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _e(t,e){return t?[...new Set([].concat(t,e))]:e}function Et(t,e){return t?ve(ve(Object.create(null),t),e):e}function su(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const r in e)n[r]=_e(t[r],e[r]);return n}function iu(t,e,n,r=!1){const s={},i={};ar(i,Pr,1),t.propsDefaults=Object.create(null),va(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Il(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ou(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Cr(t.emitsOptions,p))continue;const b=e[p];if(c)if(W(i,p))b!==i[p]&&(i[p]=b,l=!0);else{const S=ze(p);s[S]=us(c,a,S,b,t,!1)}else b!==i[p]&&(i[p]=b,l=!0)}}}else{va(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!W(e,h)&&((f=sn(h))===h||!W(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=us(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!W(e,h)&&!0)&&(delete i[h],l=!0)}l&&Qe(t,"set","$attrs")}function va(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Qn(c))continue;const l=e[c];let f;s&&W(s,f=ze(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Cr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=K(n),l=a||Q;for(let f=0;f<i.length;f++){const h=i[f];n[h]=us(s,c,h,l[h],t,!W(l,h))}}return o}function us(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=W(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&B(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Zt(s),r=l[n]=c.call(null,e),Ot())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===sn(n))&&(r=!0))}return r}function ya(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const f=h=>{c=!0;const[p,b]=ya(h,e,!0);ve(o,p),b&&a.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return r.set(t,Kt),Kt;if($(i))for(let f=0;f<i.length;f++){const h=ze(i[f]);ki(h)&&(o[h]=Q)}else if(i)for(const f in i){const h=ze(f);if(ki(h)){const p=i[f],b=o[h]=$(p)||B(p)?{type:p}:p;if(b){const S=Mi(Boolean,b.type),U=Mi(String,b.type);b[0]=S>-1,b[1]=U<0||S<U,(S>-1||W(b,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function ki(t){return t[0]!=="$"}function Oi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Pi(t,e){return Oi(t)===Oi(e)}function Mi(t,e){return $(e)?e.findIndex(n=>Pi(n,t)):B(e)&&Pi(e,t)?0:-1}const ba=t=>t[0]==="_"||t==="$stable",Ws=t=>$(t)?t.map(He):[He(t)],au=(t,e,n)=>{const r=ht((...s)=>Ws(e(...s)),n);return r._c=!1,r},wa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ba(s))continue;const i=t[s];if(B(i))e[s]=au(s,i,r);else if(i!=null){const o=Ws(i);e[s]=()=>o}}},Ia=(t,e)=>{const n=Ws(e);t.slots.default=()=>n},cu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),ar(e,"_",n)):wa(e,t.slots={})}else t.slots={},e&&Ia(t,e);ar(t.slots,Pr,1)},lu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ve(s,e),!n&&a===1&&delete s._):(i=!e.$stable,wa(e,s)),o=e}else e&&(Ia(t,e),o={default:1});if(i)for(const a in s)!ba(a)&&!(a in o)&&delete s[a]};function uu(t,e){const n=Me;if(n===null)return t;const r=Mr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Q]=e[i];B(o)&&(o={mounted:o,updated:o}),o.deep&&St(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function wt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(on(),Ne(c,n,8,[t.el,a,t,e]),an())}}function Ea(){return{app:null,config:{isNativeTag:jc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fu=0;function du(t,e){return function(r,s=null){B(r)||(r=Object.assign({},r)),s!=null&&!ce(s)&&(s=null);const i=Ea(),o=new Set;let a=!1;const c=i.app={_uid:fu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Nu,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(c,...f)):B(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=re(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Mr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function fs(t,e,n,r,s=!1){if($(t)){t.forEach((p,b)=>fs(p,e&&($(e)?e[b]:e),n,r,s));return}if(as(r)&&!s)return;const i=r.shapeFlag&4?Mr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===Q?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(fe(l)?(f[l]=null,W(h,l)&&(h[l]=null)):ge(l)&&(l.value=null)),B(c))gt(c,a,12,[o,f]);else{const p=fe(c),b=ge(c);if(p||b){const S=()=>{if(t.f){const U=p?f[c]:c.value;s?$(U)&&ks(U,i):$(U)?U.includes(i)||U.push(i):p?(f[c]=[i],W(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,W(h,c)&&(h[c]=o)):ge(c)&&(c.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,be(S,n)):S()}}}const be=Bl;function hu(t){return pu(t)}function pu(t,e){const n=Gc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:b=De,cloneNode:S,insertStaticContent:U}=t,C=(u,d,g,v=null,_=null,I=null,R=!1,w=null,E=!!d.dynamicChildren)=>{if(u===d)return;u&&!hn(u,d)&&(v=P(u),Ae(u,_,I,!0),u=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:y,ref:M,shapeFlag:A}=d;switch(y){case Vs:O(u,d,g,v);break;case Mt:F(u,d,g,v);break;case jr:u==null&&z(d,g,v,R);break;case le:Lt(u,d,g,v,_,I,R,w,E);break;default:A&1?he(u,d,g,v,_,I,R,w,E):A&6?Ut(u,d,g,v,_,I,R,w,E):(A&64||A&128)&&y.process(u,d,g,v,_,I,R,w,E,te)}M!=null&&_&&fs(M,u&&u.ref,I,d||u,!d)},O=(u,d,g,v)=>{if(u==null)r(d.el=a(d.children),g,v);else{const _=d.el=u.el;d.children!==u.children&&l(_,d.children)}},F=(u,d,g,v)=>{u==null?r(d.el=c(d.children||""),g,v):d.el=u.el},z=(u,d,g,v)=>{[u.el,u.anchor]=U(u.children,d,g,v,u.el,u.anchor)},q=({el:u,anchor:d},g,v)=>{let _;for(;u&&u!==d;)_=p(u),r(u,g,v),u=_;r(d,g,v)},de=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},he=(u,d,g,v,_,I,R,w,E)=>{R=R||d.type==="svg",u==null?Se(d,g,v,_,I,R,w,E):Le(u,d,_,I,R,w,E)},Se=(u,d,g,v,_,I,R,w)=>{let E,y;const{type:M,props:A,shapeFlag:D,transition:L,patchFlag:V,dirs:ie}=u;if(u.el&&S!==void 0&&V===-1)E=u.el=S(u.el);else{if(E=u.el=o(u.type,I,A&&A.is,A),D&8?f(E,u.children):D&16&&ye(u.children,E,null,v,_,I&&M!=="foreignObject",R,w),ie&&wt(u,null,v,"created"),A){for(const se in A)se!=="value"&&!Qn(se)&&i(E,se,null,A[se],I,u.children,v,_,T);"value"in A&&i(E,"value",null,A.value),(y=A.onVnodeBeforeMount)&&Fe(y,v,u)}tt(E,u,u.scopeId,R,v)}ie&&wt(u,null,v,"beforeMount");const Y=(!_||_&&!_.pendingBranch)&&L&&!L.persisted;Y&&L.beforeEnter(E),r(E,d,g),((y=A&&A.onVnodeMounted)||Y||ie)&&be(()=>{y&&Fe(y,v,u),Y&&L.enter(E),ie&&wt(u,null,v,"mounted")},_)},tt=(u,d,g,v,_)=>{if(g&&b(u,g),v)for(let I=0;I<v.length;I++)b(u,v[I]);if(_){let I=_.subTree;if(d===I){const R=_.vnode;tt(u,R,R.scopeId,R.slotScopeIds,_.parent)}}},ye=(u,d,g,v,_,I,R,w,E=0)=>{for(let y=E;y<u.length;y++){const M=u[y]=w?at(u[y]):He(u[y]);C(null,M,d,g,v,_,I,R,w)}},Le=(u,d,g,v,_,I,R)=>{const w=d.el=u.el;let{patchFlag:E,dynamicChildren:y,dirs:M}=d;E|=u.patchFlag&16;const A=u.props||Q,D=d.props||Q;let L;g&&It(g,!1),(L=D.onVnodeBeforeUpdate)&&Fe(L,g,d,u),M&&wt(d,u,g,"beforeUpdate"),g&&It(g,!0);const V=_&&d.type!=="foreignObject";if(y?qe(u.dynamicChildren,y,w,g,v,V,I):R||we(u,d,w,null,g,v,V,I,!1),E>0){if(E&16)ke(w,d,A,D,g,v,_);else if(E&2&&A.class!==D.class&&i(w,"class",null,D.class,_),E&4&&i(w,"style",A.style,D.style,_),E&8){const ie=d.dynamicProps;for(let Y=0;Y<ie.length;Y++){const se=ie[Y],Oe=A[se],Bt=D[se];(Bt!==Oe||se==="value")&&i(w,se,Oe,Bt,_,u.children,g,v,T)}}E&1&&u.children!==d.children&&f(w,d.children)}else!R&&y==null&&ke(w,d,A,D,g,v,_);((L=D.onVnodeUpdated)||M)&&be(()=>{L&&Fe(L,g,d,u),M&&wt(d,u,g,"updated")},v)},qe=(u,d,g,v,_,I,R)=>{for(let w=0;w<d.length;w++){const E=u[w],y=d[w],M=E.el&&(E.type===le||!hn(E,y)||E.shapeFlag&70)?h(E.el):g;C(E,y,M,null,v,_,I,R,!0)}},ke=(u,d,g,v,_,I,R)=>{if(g!==v){for(const w in v){if(Qn(w))continue;const E=v[w],y=g[w];E!==y&&w!=="value"&&i(u,w,y,E,R,d.children,_,I,T)}if(g!==Q)for(const w in g)!Qn(w)&&!(w in v)&&i(u,w,g[w],null,R,d.children,_,I,T);"value"in v&&i(u,"value",g.value,v.value)}},Lt=(u,d,g,v,_,I,R,w,E)=>{const y=d.el=u?u.el:a(""),M=d.anchor=u?u.anchor:a("");let{patchFlag:A,dynamicChildren:D,slotScopeIds:L}=d;L&&(w=w?w.concat(L):L),u==null?(r(y,g,v),r(M,g,v),ye(d.children,g,M,_,I,R,w,E)):A>0&&A&64&&D&&u.dynamicChildren?(qe(u.dynamicChildren,D,g,_,I,R,w),(d.key!=null||_&&d===_.subTree)&&Ta(u,d,!0)):we(u,d,g,M,_,I,R,w,E)},Ut=(u,d,g,v,_,I,R,w,E)=>{d.slotScopeIds=w,u==null?d.shapeFlag&512?_.ctx.activate(d,g,v,R,E):$t(d,g,v,_,I,R,E):ae(u,d,E)},$t=(u,d,g,v,_,I,R)=>{const w=u.component=Au(u,v,_);if(ha(u)&&(w.ctx.renderer=te),Cu(w),w.asyncDep){if(_&&_.registerDep(w,ee),!u.el){const E=w.subTree=re(Mt);F(null,E,d,g)}return}ee(w,u,d,g,_,I,R)},ae=(u,d,g)=>{const v=d.component=u.component;if(Ul(u,d,g))if(v.asyncDep&&!v.asyncResolved){G(v,d,g);return}else v.next=d,Pl(v.update),v.update();else d.component=u.component,d.el=u.el,v.vnode=d},ee=(u,d,g,v,_,I,R)=>{const w=()=>{if(u.isMounted){let{next:M,bu:A,u:D,parent:L,vnode:V}=u,ie=M,Y;It(u,!1),M?(M.el=V.el,G(u,M,R)):M=V,A&&Zn(A),(Y=M.props&&M.props.onVnodeBeforeUpdate)&&Fe(Y,L,M,V),It(u,!0);const se=Hr(u),Oe=u.subTree;u.subTree=se,C(Oe,se,h(Oe.el),P(Oe),u,_,I),M.el=se.el,ie===null&&$l(u,se.el),D&&be(D,_),(Y=M.props&&M.props.onVnodeUpdated)&&be(()=>Fe(Y,L,M,V),_)}else{let M;const{el:A,props:D}=d,{bm:L,m:V,parent:ie}=u,Y=as(d);if(It(u,!1),L&&Zn(L),!Y&&(M=D&&D.onVnodeBeforeMount)&&Fe(M,ie,d),It(u,!0),A&&H){const se=()=>{u.subTree=Hr(u),H(A,u.subTree,u,_,null)};Y?d.type.__asyncLoader().then(()=>!u.isUnmounted&&se()):se()}else{const se=u.subTree=Hr(u);C(null,se,g,v,u,_,I),d.el=se.el}if(V&&be(V,_),!Y&&(M=D&&D.onVnodeMounted)){const se=d;be(()=>Fe(M,ie,se),_)}d.shapeFlag&256&&u.a&&be(u.a,_),u.isMounted=!0,d=g=v=null}},E=u.effect=new Ds(w,()=>sa(u.update),u.scope),y=u.update=E.run.bind(E);y.id=u.uid,It(u,!0),y()},G=(u,d,g)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,ou(u,d.props,v,g),lu(u,d.children,g),on(),Bs(void 0,u.update),an()},we=(u,d,g,v,_,I,R,w,E=!1)=>{const y=u&&u.children,M=u?u.shapeFlag:0,A=d.children,{patchFlag:D,shapeFlag:L}=d;if(D>0){if(D&128){Ke(y,A,g,v,_,I,R,w,E);return}else if(D&256){Ft(y,A,g,v,_,I,R,w,E);return}}L&8?(M&16&&T(y,_,I),A!==y&&f(g,A)):M&16?L&16?Ke(y,A,g,v,_,I,R,w,E):T(y,_,I,!0):(M&8&&f(g,""),L&16&&ye(A,g,v,_,I,R,w,E))},Ft=(u,d,g,v,_,I,R,w,E)=>{u=u||Kt,d=d||Kt;const y=u.length,M=d.length,A=Math.min(y,M);let D;for(D=0;D<A;D++){const L=d[D]=E?at(d[D]):He(d[D]);C(u[D],L,g,null,_,I,R,w,E)}y>M?T(u,_,I,!0,!1,A):ye(d,g,v,_,I,R,w,E,A)},Ke=(u,d,g,v,_,I,R,w,E)=>{let y=0;const M=d.length;let A=u.length-1,D=M-1;for(;y<=A&&y<=D;){const L=u[y],V=d[y]=E?at(d[y]):He(d[y]);if(hn(L,V))C(L,V,g,null,_,I,R,w,E);else break;y++}for(;y<=A&&y<=D;){const L=u[A],V=d[D]=E?at(d[D]):He(d[D]);if(hn(L,V))C(L,V,g,null,_,I,R,w,E);else break;A--,D--}if(y>A){if(y<=D){const L=D+1,V=L<M?d[L].el:v;for(;y<=D;)C(null,d[y]=E?at(d[y]):He(d[y]),g,V,_,I,R,w,E),y++}}else if(y>D)for(;y<=A;)Ae(u[y],_,I,!0),y++;else{const L=y,V=y,ie=new Map;for(y=V;y<=D;y++){const Ie=d[y]=E?at(d[y]):He(d[y]);Ie.key!=null&&ie.set(Ie.key,y)}let Y,se=0;const Oe=D-V+1;let Bt=!1,fi=0;const dn=new Array(Oe);for(y=0;y<Oe;y++)dn[y]=0;for(y=L;y<=A;y++){const Ie=u[y];if(se>=Oe){Ae(Ie,_,I,!0);continue}let $e;if(Ie.key!=null)$e=ie.get(Ie.key);else for(Y=V;Y<=D;Y++)if(dn[Y-V]===0&&hn(Ie,d[Y])){$e=Y;break}$e===void 0?Ae(Ie,_,I,!0):(dn[$e-V]=y+1,$e>=fi?fi=$e:Bt=!0,C(Ie,d[$e],g,null,_,I,R,w,E),se++)}const di=Bt?gu(dn):Kt;for(Y=di.length-1,y=Oe-1;y>=0;y--){const Ie=V+y,$e=d[Ie],hi=Ie+1<M?d[Ie+1].el:v;dn[y]===0?C(null,$e,g,hi,_,I,R,w,E):Bt&&(Y<0||y!==di[Y]?Ue($e,g,hi,2):Y--)}}},Ue=(u,d,g,v,_=null)=>{const{el:I,type:R,transition:w,children:E,shapeFlag:y}=u;if(y&6){Ue(u.component.subTree,d,g,v);return}if(y&128){u.suspense.move(d,g,v);return}if(y&64){R.move(u,d,g,te);return}if(R===le){r(I,d,g);for(let A=0;A<E.length;A++)Ue(E[A],d,g,v);r(u.anchor,d,g);return}if(R===jr){q(u,d,g);return}if(v!==2&&y&1&&w)if(v===0)w.beforeEnter(I),r(I,d,g),be(()=>w.enter(I),_);else{const{leave:A,delayLeave:D,afterLeave:L}=w,V=()=>r(I,d,g),ie=()=>{A(I,()=>{V(),L&&L()})};D?D(I,V,ie):ie()}else r(I,d,g)},Ae=(u,d,g,v=!1,_=!1)=>{const{type:I,props:R,ref:w,children:E,dynamicChildren:y,shapeFlag:M,patchFlag:A,dirs:D}=u;if(w!=null&&fs(w,null,g,u,!0),M&256){d.ctx.deactivate(u);return}const L=M&1&&D,V=!as(u);let ie;if(V&&(ie=R&&R.onVnodeBeforeUnmount)&&Fe(ie,d,u),M&6)k(u.component,g,v);else{if(M&128){u.suspense.unmount(g,v);return}L&&wt(u,null,d,"beforeUnmount"),M&64?u.type.remove(u,d,g,_,te,v):y&&(I!==le||A>0&&A&64)?T(y,d,g,!1,!0):(I===le&&A&384||!_&&M&16)&&T(E,d,g),v&&Fr(u)}(V&&(ie=R&&R.onVnodeUnmounted)||L)&&be(()=>{ie&&Fe(ie,d,u),L&&wt(u,null,d,"unmounted")},g)},Fr=u=>{const{type:d,el:g,anchor:v,transition:_}=u;if(d===le){m(g,v);return}if(d===jr){de(u);return}const I=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:w}=_,E=()=>R(g,I);w?w(u.el,I,E):E()}else I()},m=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},k=(u,d,g)=>{const{bum:v,scope:_,update:I,subTree:R,um:w}=u;v&&Zn(v),_.stop(),I&&(I.active=!1,Ae(R,u,d,g)),w&&be(w,d),be(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,g,v=!1,_=!1,I=0)=>{for(let R=I;R<u.length;R++)Ae(u[R],d,g,v,_)},P=u=>u.shapeFlag&6?P(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),J=(u,d,g)=>{u==null?d._vnode&&Ae(d._vnode,null,null,!0):C(d._vnode||null,u,d,null,null,null,g),aa(),d._vnode=u},te={p:C,um:Ae,m:Ue,r:Fr,mt:$t,mc:ye,pc:we,pbc:qe,n:P,o:t};let j,H;return e&&([j,H]=e(te)),{render:J,hydrate:j,createApp:du(J,j)}}function It({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ta(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=at(s[i]),a.el=o.el),n||Ta(o,a))}}function gu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const mu=t=>t.__isTeleport,Ra="components";function _u(t,e){return yu(Ra,t,!0,e)||t}const vu=Symbol();function yu(t,e,n=!0,r=!1){const s=Me||pe;if(s){const i=s.type;if(t===Ra){const a=Mu(i);if(a&&(a===e||a===ze(e)||a===Rr(ze(e))))return i}const o=Di(s[t]||i[t],e)||Di(s.appContext[t],e);return!o&&r?i:o}}function Di(t,e){return t&&(t[e]||t[ze(e)]||t[Rr(ze(e))])}const le=Symbol(void 0),Vs=Symbol(void 0),Mt=Symbol(void 0),jr=Symbol(void 0),In=[];let kt=null;function Z(t=!1){In.push(kt=t?null:[])}function bu(){In.pop(),kt=In[In.length-1]||null}let dr=1;function Ni(t){dr+=t}function Sa(t){return t.dynamicChildren=dr>0?kt||Kt:null,bu(),dr>0&&kt&&kt.push(t),t}function oe(t,e,n,r,s,i){return Sa(N(t,e,n,r,s,i,!0))}function zs(t,e,n,r,s){return Sa(re(t,e,n,r,s,!0))}function ds(t){return t?t.__v_isVNode===!0:!1}function hn(t,e){return t.type===e.type&&t.key===e.key}const Pr="__vInternal",Aa=({key:t})=>t!=null?t:null,nr=({ref:t,ref_key:e,ref_for:n})=>t!=null?fe(t)||ge(t)||B(t)?{i:Me,r:t,k:e,f:!!n}:t:null;function N(t,e=null,n=null,r=0,s=null,i=t===le?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Aa(e),ref:e&&nr(e),scopeId:kr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ks(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),dr>0&&!o&&kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&kt.push(c),c}const re=wu;function wu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===vu)&&(t=Mt),ds(t)){const a=On(t,e,!0);return n&&Ks(a,n),a}if(Du(t)&&(t=t.__vccOpts),e){e=Iu(e);let{class:a,style:c}=e;a&&!fe(a)&&(e.class=As(a)),ce(c)&&(Yo(c)&&!$(c)&&(c=ve({},c)),e.style=wr(c))}const o=fe(t)?1:Fl(t)?128:mu(t)?64:ce(t)?4:B(t)?2:0;return N(t,e,n,r,s,o,i,!0)}function Iu(t){return t?Yo(t)||Pr in t?ve({},t):t:null}function On(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Eu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Aa(a),ref:e&&e.ref?n&&s?$(s)?s.concat(nr(e)):[s,nr(e)]:nr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&On(t.ssContent),ssFallback:t.ssFallback&&On(t.ssFallback),el:t.el,anchor:t.anchor}}function Re(t=" ",e=0){return re(Vs,null,t,e)}function qs(t="",e=!1){return e?(Z(),zs(Mt,null,t)):re(Mt,null,t)}function He(t){return t==null||typeof t=="boolean"?re(Mt):$(t)?re(le,null,t.slice()):typeof t=="object"?at(t):re(Vs,null,String(t))}function at(t){return t.el===null||t.memo?t:On(t)}function Ks(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ks(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Pr in e)?e._ctx=Me:s===3&&Me&&(Me.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Me},n=32):(e=String(e),r&64?(n=16,e=[Re(e)]):n=8);t.children=e,t.shapeFlag|=n}function Eu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=As([e.class,r.class]));else if(s==="style")e.style=wr([e.style,r.style]);else if(Ir(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Fe(t,e,n,r=null){Ne(t,e,7,[n,r])}function Pn(t,e,n,r){let s;const i=n&&n[r];if($(t)||fe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ce(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const hs=t=>t?Ca(t)?Mr(t)||t.proxy:hs(t.parent):null,hr=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hs(t.parent),$root:t=>hs(t.root),$emit:t=>t.emit,$options:t=>_a(t),$forceUpdate:t=>()=>sa(t.update),$nextTick:t=>ra.bind(t.proxy),$watch:t=>Hl.bind(t)}),Tu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const b=o[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Q&&W(r,e))return o[e]=1,r[e];if(s!==Q&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==Q&&W(n,e))return o[e]=4,n[e];cs&&(o[e]=0)}}const f=hr[e];let h,p;if(f)return e==="$attrs"&&Te(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Q&&W(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Q&&W(s,e)?(s[e]=n,!0):r!==Q&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Q&&W(t,o)||e!==Q&&W(e,o)||(a=i[0])&&W(a,o)||W(r,o)||W(hr,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Ru=Ea();let Su=0;function Au(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ru,i={uid:Su++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ya(r,s),emitsOptions:la(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Nl.bind(null,i),t.ce&&t.ce(i),i}let pe=null;const Zt=t=>{pe=t,t.scope.on()},Ot=()=>{pe&&pe.scope.off(),pe=null};function Ca(t){return t.vnode.shapeFlag&4}let Mn=!1;function Cu(t,e=!1){Mn=e;const{props:n,children:r}=t.vnode,s=Ca(t);iu(t,n,s,e),cu(t,r);const i=s?ku(t,e):void 0;return Mn=!1,i}function ku(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xo(new Proxy(t.ctx,Tu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Pu(t):null;Zt(t),on();const i=gt(r,t,0,[t.props,s]);if(an(),Ot(),xo(i)){if(i.then(Ot,Ot),e)return i.then(o=>{xi(t,o,e)}).catch(o=>{Ar(o,t,0)});t.asyncDep=i}else xi(t,i,e)}else ka(t,e)}function xi(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=ta(e)),ka(t,n)}let Li;function ka(t,e,n){const r=t.type;if(!t.render){if(!e&&Li&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ve(ve({isCustomElement:i,delimiters:a},o),c);r.render=Li(s,l)}}t.render=r.render||De}Zt(t),on(),eu(t),an(),Ot()}function Ou(t){return new Proxy(t.attrs,{get(e,n){return Te(t,"get","$attrs"),e[n]}})}function Pu(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Ou(t))},slots:t.slots,emit:t.emit,expose:e}}function Mr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ta(Xo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hr)return hr[n](t)}}))}function Mu(t){return B(t)&&t.displayName||t.name}function Du(t){return B(t)&&"__vccOpts"in t}const je=(t,e)=>Cl(t,e,Mn);function Oa(t,e,n){const r=arguments.length;return r===2?ce(e)&&!$(e)?ds(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ds(n)&&(n=[n]),re(t,e,n))}const Nu="3.2.33",xu="http://www.w3.org/2000/svg",Rt=typeof document!="undefined"?document:null,Ui=Rt&&Rt.createElement("template"),Lu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Rt.createElementNS(xu,t):Rt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rt.createTextNode(t),createComment:t=>Rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ui.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ui.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Uu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function $u(t,e,n){const r=t.style,s=fe(n);if(n&&!s){for(const i in n)ps(r,i,n[i]);if(e&&!fe(e))for(const i in e)n[i]==null&&ps(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const $i=/\s*!important$/;function ps(t,e,n){if($(n))n.forEach(r=>ps(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Fu(t,e);$i.test(n)?t.setProperty(sn(r),n.replace($i,""),"important"):t[r]=n}}const Fi=["Webkit","Moz","ms"],Wr={};function Fu(t,e){const n=Wr[e];if(n)return n;let r=ze(e);if(r!=="filter"&&r in t)return Wr[e]=r;r=Rr(r);for(let s=0;s<Fi.length;s++){const i=Fi[s]+r;if(i in t)return Wr[e]=i}return e}const Bi="http://www.w3.org/1999/xlink";function Bu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bi,e.slice(6,e.length)):t.setAttributeNS(Bi,e,n);else{const i=$c(e);n==null||i&&!Mo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Hu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Mo(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Pa,ju]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let gs=0;const Wu=Promise.resolve(),Vu=()=>{gs=0},zu=()=>gs||(Wu.then(Vu),gs=Pa());function Vt(t,e,n,r){t.addEventListener(e,n,r)}function qu(t,e,n,r){t.removeEventListener(e,n,r)}function Ku(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Gu(e);if(r){const l=i[e]=Ju(r,s);Vt(t,a,l,c)}else o&&(qu(t,a,o,c),i[e]=void 0)}}const Hi=/(?:Once|Passive|Capture)$/;function Gu(t){let e;if(Hi.test(t)){e={};let n;for(;n=t.match(Hi);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[sn(t.slice(2)),e]}function Ju(t,e){const n=r=>{const s=r.timeStamp||Pa();(ju||s>=n.attached-1)&&Ne(Yu(r,n.value),e,5,[r])};return n.value=t,n.attached=zu(),n}function Yu(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ji=/^on[a-z]/,Xu=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Uu(t,r,s):e==="style"?$u(t,n,r):Ir(e)?Cs(e)||Ku(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qu(t,e,r,s))?Hu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Bu(t,e,r,s))};function Qu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ji.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ji.test(e)&&fe(n)?!1:e in t}const Wi=t=>{const e=t.props["onUpdate:modelValue"];return $(e)?n=>Zn(e,n):e};function Zu(t){t.target.composing=!0}function Vi(t){const e=t.target;e.composing&&(e.composing=!1,ef(e,"input"))}function ef(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const tf={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Wi(s);const i=r||s.props&&s.props.type==="number";Vt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=cr(a)),t._assign(a)}),n&&Vt(t,"change",()=>{t.value=t.value.trim()}),e||(Vt(t,"compositionstart",Zu),Vt(t,"compositionend",Vi),Vt(t,"change",Vi))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Wi(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&cr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},nf=["ctrl","shift","alt","meta"],rf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>nf.some(n=>t[`${n}Key`]&&!e.includes(n))},E_=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=rf[e[s]];if(i&&i(n,e))return}return t(n,...r)},T_={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):pn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),pn(t,!0),r.enter(t)):r.leave(t,()=>{pn(t,!1)}):pn(t,e))},beforeUnmount(t,{value:e}){pn(t,e)}};function pn(t,e){t.style.display=e?t._vod:"none"}const sf=ve({patchProp:Xu},Lu);let zi;function of(){return zi||(zi=hu(sf))}const af=(...t)=>{const e=of().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=cf(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function cf(t){return fe(t)?document.querySelector(t):t}var qi="/assets/user.3ff37329.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},lf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Da={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,b=l&63;c||(b=64,o||(p=64)),r.push(n[f],n[h],n[p],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ma(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const b=a<<4&240|l>>2;if(r.push(b),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},uf=function(t){const e=Ma(t);return Da.encodeByteArray(e,!0)},Na=function(t){return uf(t).replace(/\./g,"")},ff=function(t){try{return Da.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function pf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mf(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _f(){return typeof indexedDB=="object"}function vf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yf,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fn.prototype.create)}}class Fn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?bf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new cn(s,a,r)}}function bf(t,e){return t.replace(wf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wf=/\{\$([^}]+)}/g;function If(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ki(i)&&Ki(o)){if(!pr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ki(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function yn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ef(t,e){const n=new Tf(t,e);return n.subscribe.bind(n)}class Tf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Rf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Vr),s.error===void 0&&(s.error=Vr),s.complete===void 0&&(s.complete=Vr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){return t&&t._delegate?t._delegate:t}class en{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new df;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cf(e))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tt){return this.instances.has(e)}getOptions(e=Tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Af(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tt){return this.component?this.component.multipleInstances?e:Tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Af(t){return t===Tt?void 0:t}function Cf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Of={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Pf=ne.INFO,Mf={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Df=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Mf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xa{constructor(e){this.name=e,this._logLevel=Pf,this._logHandler=Df,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Of[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Nf=(t,e)=>e.some(n=>t instanceof n);let Gi,Ji;function xf(){return Gi||(Gi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lf(){return Ji||(Ji=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const La=new WeakMap,ms=new WeakMap,Ua=new WeakMap,zr=new WeakMap,Gs=new WeakMap;function Uf(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_t(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&La.set(n,t)}).catch(()=>{}),Gs.set(e,t),e}function $f(t){if(ms.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ms.set(t,e)}let _s={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ms.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ua.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _t(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ff(t){_s=t(_s)}function Bf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qr(this),e,...n);return Ua.set(r,e.sort?e.sort():[e]),_t(r)}:Lf().includes(t)?function(...e){return t.apply(qr(this),e),_t(La.get(this))}:function(...e){return _t(t.apply(qr(this),e))}}function Hf(t){return typeof t=="function"?Bf(t):(t instanceof IDBTransaction&&$f(t),Nf(t,xf())?new Proxy(t,_s):t)}function _t(t){if(t instanceof IDBRequest)return Uf(t);if(zr.has(t))return zr.get(t);const e=Hf(t);return e!==t&&(zr.set(t,e),Gs.set(e,t)),e}const qr=t=>Gs.get(t);function jf(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_t(o);return r&&o.addEventListener("upgradeneeded",c=>{r(_t(o.result),c.oldVersion,c.newVersion,_t(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Wf=["get","getKey","getAll","getAllKeys","count"],Vf=["put","add","delete","clear"],Kr=new Map;function Yi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kr.get(e))return Kr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Vf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wf.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Kr.set(e,i),i}Ff(t=>_i(mi({},t),{get:(e,n,r)=>Yi(e,n)||t.get(e,n,r),has:(e,n)=>!!Yi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vs="@firebase/app",Xi="0.7.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new xa("@firebase/app"),Kf="@firebase/app-compat",Gf="@firebase/analytics-compat",Jf="@firebase/analytics",Yf="@firebase/app-check-compat",Xf="@firebase/app-check",Qf="@firebase/auth",Zf="@firebase/auth-compat",ed="@firebase/database",td="@firebase/database-compat",nd="@firebase/functions",rd="@firebase/functions-compat",sd="@firebase/installations",id="@firebase/installations-compat",od="@firebase/messaging",ad="@firebase/messaging-compat",cd="@firebase/performance",ld="@firebase/performance-compat",ud="@firebase/remote-config",fd="@firebase/remote-config-compat",dd="@firebase/storage",hd="@firebase/storage-compat",pd="@firebase/firestore",gd="@firebase/firestore-compat",md="firebase",_d="9.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="[DEFAULT]",vd={[vs]:"fire-core",[Kf]:"fire-core-compat",[Jf]:"fire-analytics",[Gf]:"fire-analytics-compat",[Xf]:"fire-app-check",[Yf]:"fire-app-check-compat",[Qf]:"fire-auth",[Zf]:"fire-auth-compat",[ed]:"fire-rtdb",[td]:"fire-rtdb-compat",[nd]:"fire-fn",[rd]:"fire-fn-compat",[sd]:"fire-iid",[id]:"fire-iid-compat",[od]:"fire-fcm",[ad]:"fire-fcm-compat",[cd]:"fire-perf",[ld]:"fire-perf-compat",[ud]:"fire-rc",[fd]:"fire-rc-compat",[dd]:"fire-gcs",[hd]:"fire-gcs-compat",[pd]:"fire-fst",[gd]:"fire-fst-compat","fire-js":"fire-js",[md]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Map,ys=new Map;function yd(t,e){try{t.container.addComponent(e)}catch(n){Js.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(ys.has(e))return Js.debug(`There were multiple attempts to register component ${e}.`),!1;ys.set(e,t);for(const n of gr.values())yd(n,t);return!0}function Fa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Dt=new Fn("app","Firebase",bd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=_d;function Id(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:$a,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Dt.create("bad-app-name",{appName:String(r)});const s=gr.get(r);if(s){if(pr(t,s.options)&&pr(n,s.config))return s;throw Dt.create("duplicate-app",{appName:r})}const i=new kf(r);for(const a of ys.values())i.addComponent(a);const o=new wd(t,n,i);return gr.set(r,o),o}function Ed(t=$a){const e=gr.get(t);if(!e)throw Dt.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let s=(r=vd[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Js.warn(a.join(" "));return}Dn(new en(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="firebase-heartbeat-database",Rd=1,Nn="firebase-heartbeat-store";let Gr=null;function Ba(){return Gr||(Gr=jf(Td,Rd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Nn)}}}).catch(t=>{throw Dt.create("storage-open",{originalErrorMessage:t.message})})),Gr}async function Sd(t){try{return(await Ba()).transaction(Nn).objectStore(Nn).get(Ha(t))}catch(e){throw Dt.create("storage-get",{originalErrorMessage:e.message})}}async function Qi(t,e){try{const r=(await Ba()).transaction(Nn,"readwrite");return await r.objectStore(Nn).put(e,Ha(t)),r.done}catch(n){throw Dt.create("storage-set",{originalErrorMessage:n.message})}}function Ha(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=1024,Cd=30*24*60*60*1e3;class kd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Cd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zi(),{heartbeatsToSend:n,unsentEntries:r}=Od(this._heartbeatsCache.heartbeats),s=Na(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Zi(){return new Date().toISOString().substring(0,10)}function Od(t,e=Ad){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),eo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),eo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _f()?vf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function eo(t){return Na(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t){Dn(new en("platform-logger",e=>new zf(e),"PRIVATE")),Dn(new en("heartbeat",e=>new kd(e),"PRIVATE")),Yt(vs,Xi,t),Yt(vs,Xi,"esm2017"),Yt("fire-js","")}Md("");function Ys(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ja(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dd=ja,Wa=new Fn("auth","Firebase",ja());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new xa("@firebase/auth");function rr(t,...e){to.logLevel<=ne.ERROR&&to.error(`Auth (${Dr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,...e){throw Xs(t,...e)}function We(t,...e){return Xs(t,...e)}function Nd(t,e,n){const r=Object.assign(Object.assign({},Dd()),{[e]:n});return new Fn("auth","Firebase",r).create(e,{appName:t.name})}function Xs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wa.create(t,...e)}function x(t,e,...n){if(!t)throw Xs(e,...n)}function Ye(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rr(e),new Error(e)}function Ze(t,e){t||Ye(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=new Map;function Xe(t){Ze(t instanceof Function,"Expected a class definition");let e=no.get(t);return e?(Ze(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,no.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t,e){const n=Fa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(pr(i,e!=null?e:{}))return s;xe(s,"already-initialized")}return n.initialize({options:e})}function Ld(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ud(){return ro()==="http:"||ro()==="https:"}function ro(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ud()||pf()||"connection"in navigator)?navigator.onLine:!0}function Fd(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ze(n>e,"Short delay should be less than long delay!"),this.isMobile=hf()||gf()}get(){return $d()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t,e){Ze(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=new Hn(3e4,6e4);function jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ln(t,e,n,r,s={}){return za(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Bn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Va.fetch()(qa(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function za(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bd),e);try{const s=new jd(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Jr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Jr(t,"email-already-in-use",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Nd(t,f,l);xe(t,f)}}catch(s){if(s instanceof cn)throw s;xe(t,"network-request-failed")}}async function Wn(t,e,n,r,s={}){const i=await ln(t,e,n,r,s);return"mfaPendingCredential"in i&&xe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function qa(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Qs(t.config,s):`${t.config.apiScheme}://${s}`}class jd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(We(this.auth,"network-request-failed")),Hd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=We(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(t,e){return ln(t,"POST","/v1/accounts:delete",e)}async function Vd(t,e){return ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zd(t,e=!1){const n=yt(t),r=await n.getIdToken(e),s=Zs(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:En(Yr(s.auth_time)),issuedAtTime:En(Yr(s.iat)),expirationTime:En(Yr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yr(t){return Number(t)*1e3}function Zs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ff(n);return s?JSON.parse(s):(rr("Failed to decode base64 JWT payload"),null)}catch(s){return rr("Caught error parsing JWT payload as JSON",s),null}}function qd(t){const e=Zs(t);return x(e,"internal-error"),x(typeof e.exp!="undefined","internal-error"),x(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&Kd(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Kd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=En(this.lastLoginAt),this.creationTime=En(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await tn(t,Vd(n,{idToken:r}));x(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Xd(i.providerUserInfo):[],a=Yd(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ka(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Jd(t){const e=yt(t);await mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yd(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xd(t){return t.map(e=>{var{providerId:n}=e,r=Ys(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qd(t,e){const n=await za(t,{},async()=>{const r=Bn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=qa(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Va.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken!="undefined","internal-error"),x(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):qd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qd(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new xn;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xn,this.toJSON())}_performRefresh(){return Ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){x(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Pt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ys(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ka(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await tn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zd(this,e)}reload(){return Jd(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tn(this,Wd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,U=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:z,emailVerified:q,isAnonymous:de,providerData:he,stsTokenManager:Se}=n;x(z&&Se,e,"internal-error");const tt=xn.fromJSON(this.name,Se);x(typeof z=="string",e,"internal-error"),rt(h,e.name),rt(p,e.name),x(typeof q=="boolean",e,"internal-error"),x(typeof de=="boolean",e,"internal-error"),rt(b,e.name),rt(S,e.name),rt(U,e.name),rt(C,e.name),rt(O,e.name),rt(F,e.name);const ye=new Pt({uid:z,auth:e,email:p,emailVerified:q,displayName:h,isAnonymous:de,photoURL:S,phoneNumber:b,tenantId:U,stsTokenManager:tt,createdAt:O,lastLoginAt:F});return he&&Array.isArray(he)&&(ye.providerData=he.map(Le=>Object.assign({},Le))),C&&(ye._redirectEventId=C),ye}static async _fromIdTokenResponse(e,n,r=!1){const s=new xn;s.updateFromServerResponse(n);const i=new Pt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ga.type="NONE";const so=Ga;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e,n){return`firebase:${t}:${e}:${n}`}class Xt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=sr(this.userKey,s.apiKey,i),this.fullPersistenceKey=sr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xt(Xe(so),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Xe(so);const o=sr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=Pt._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Xt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Xt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ja(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Za(e))return"Blackberry";if(ec(e))return"Webos";if(ei(e))return"Safari";if((e.includes("chrome/")||Ya(e))&&!e.includes("edge/"))return"Chrome";if(Qa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ja(t=me()){return/firefox\//i.test(t)}function ei(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ya(t=me()){return/crios\//i.test(t)}function Xa(t=me()){return/iemobile/i.test(t)}function Qa(t=me()){return/android/i.test(t)}function Za(t=me()){return/blackberry/i.test(t)}function ec(t=me()){return/webos/i.test(t)}function Nr(t=me()){return/iphone|ipad|ipod/i.test(t)}function Zd(t=me()){var e;return Nr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eh(){return mf()&&document.documentMode===10}function tc(t=me()){return Nr(t)||Qa(t)||ec(t)||Za(t)||/windows phone/i.test(t)||Xa(t)}function th(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t,e=[]){let n;switch(t){case"Browser":n=io(me());break;case"Worker":n=`${io(me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oo(this),this.idTokenSubscription=new oo(this),this.beforeStateQueue=new nh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xe(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?yt(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xe(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Xt.create(this,[Xe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function xr(t){return yt(t)}class oo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ef(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ye("not implemented")}_getIdTokenResponse(e){return Ye("not implemented")}_linkToIdToken(e,n){return Ye("not implemented")}_getReauthenticationResolver(e){return Ye("not implemented")}}async function sh(t,e){return ln(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ih(t,e){return Wn(t,"POST","/v1/accounts:signInWithPassword",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oh(t,e){return Wn(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}async function ah(t,e){return Wn(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends ti{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ln(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ln(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ih(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return oh(e,{email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return sh(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ah(e,{idToken:n,email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(t,e){return Wn(t,"POST","/v1/accounts:signInWithIdp",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="http://localhost";class Nt extends ti{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ys(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Nt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qt(e,n)}buildRequest(){const e={requestUri:ch,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uh(t){const e=vn(yn(t)).link,n=e?vn(yn(e)).deep_link_id:null,r=vn(yn(t)).deep_link_id;return(r?vn(yn(r)).link:null)||r||n||e||t}class ni{constructor(e){var n,r,s,i,o,a;const c=vn(yn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=lh((s=c.mode)!==null&&s!==void 0?s:null);x(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=uh(e);try{return new ni(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.providerId=un.PROVIDER_ID}static credential(e,n){return Ln._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ni.parseLink(n);return x(r,"argument-error"),Ln._fromEmailAndCode(e,r.code,r.tenantId)}}un.PROVIDER_ID="password";un.EMAIL_PASSWORD_SIGN_IN_METHOD="password";un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends rc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Vn{constructor(){super("facebook.com")}static credential(e){return Nt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Vn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ut.credential(n,r)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Vn{constructor(){super("github.com")}static credential(e){return Nt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Vn{constructor(){super("twitter.com")}static credential(e,n){return Nt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fh(t,e){return Wn(t,"POST","/v1/accounts:signUp",jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pt._fromIdTokenResponse(e,r,s),o=ao(r);return new xt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ao(r);return new xt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ao(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_r.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _r(e,n,r,s)}}function sc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_r._fromErrorAndOperation(t,i,e,r):i})}async function dh(t,e,n=!1){const r=await tn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hh(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await tn(t,sc(r,s,e,t),n);x(i.idToken,r,"internal-error");const o=Zs(i.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),xt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t,e,n=!1){const r="signIn",s=await sc(t,r,e),i=await xt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ph(t,e){return ic(xr(t),e)}async function R_(t,e,n){const r=xr(t),s=await fh(r,{returnSecureToken:!0,email:e,password:n}),i=await xt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function S_(t,e,n){return ph(yt(t),un.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gh(t,e){return ln(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=yt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await tn(r,gh(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function oc(t,e,n,r){return yt(t).onAuthStateChanged(e,n,r)}function C_(t){return yt(t).signOut()}const vr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vr,"1"),this.storage.removeItem(vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){const t=me();return ei(t)||Nr(t)}const _h=1e3,vh=10;class cc extends ac{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mh()&&th(),this.fallbackToPolling=tc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);eh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vh):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_h)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cc.type="LOCAL";const yh=cc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends ac{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lc.type="SESSION";const uc=lc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Lr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await bh(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ri("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return window}function Ih(t){Ve().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(){return typeof Ve().WorkerGlobalScope!="undefined"&&typeof Ve().importScripts=="function"}async function Eh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Th(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Rh(){return fc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="firebaseLocalStorageDb",Sh=1,yr="firebaseLocalStorage",hc="fbase_key";class zn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ur(t,e){return t.transaction([yr],e?"readwrite":"readonly").objectStore(yr)}function Ah(){const t=indexedDB.deleteDatabase(dc);return new zn(t).toPromise()}function ws(){const t=indexedDB.open(dc,Sh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yr,{keyPath:hc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yr)?e(r):(r.close(),await Ah(),e(await ws()))})})}async function co(t,e,n){const r=Ur(t,!0).put({[hc]:e,value:n});return new zn(r).toPromise()}async function Ch(t,e){const n=Ur(t,!1).get(e),r=await new zn(n).toPromise();return r===void 0?null:r.value}function lo(t,e){const n=Ur(t,!0).delete(e);return new zn(n).toPromise()}const kh=800,Oh=3;class pc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ws(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Oh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lr._getInstance(Rh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Eh(),!this.activeServiceWorker)return;this.sender=new wh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Th()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ws();return await co(e,vr,"1"),await lo(e,vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>co(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ch(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ur(s,!1).getAll();return new zn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pc.type="LOCAL";const Ph=pc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Dh(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=We("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Mh().appendChild(r)})}function Nh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Hn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t,e){return e?Xe(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends ti{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Lh(t){return ic(t.auth,new si(t),t.bypassAuthState)}function Uh(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),hh(n,new si(t),t.bypassAuthState)}async function $h(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),dh(n,new si(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lh;case"linkViaPopup":case"linkViaRedirect":return $h;case"reauthViaPopup":case"reauthViaRedirect":return Uh;default:xe(this.auth,"internal-error")}}resolve(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=new Hn(2e3,1e4);class qt extends gc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qt.currentPopupAction&&qt.currentPopupAction.cancel(),qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Ze(this.filter.length===1,"Popup operations only handle one event");const e=ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Fh.get())};e()}}qt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="pendingRedirect",ir=new Map;class Hh extends gc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ir.get(this.auth._key());if(!e){try{const r=await jh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ir.set(this.auth._key(),e)}return this.bypassAuthState||ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jh(t,e){const n=zh(e),r=Vh(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Wh(t,e){ir.set(t._key(),e)}function Vh(t){return Xe(t._redirectPersistence)}function zh(t){return sr(Bh,t.config.apiKey,t.name)}async function qh(t,e,n=!1){const r=xr(t),s=xh(r,e),o=await new Hh(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=10*60*1e3;class Gh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(We(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kh&&this.cachedEventUids.clear(),this.cachedEventUids.has(uo(e))}saveEventToCache(e){this.cachedEventUids.add(uo(e)),this.lastProcessedEventTime=Date.now()}}function uo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(t,e={}){return ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qh=/^https?/;async function Zh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yh(t);for(const n of e)try{if(ep(n))return}catch{}xe(t,"unauthorized-domain")}function ep(t){const e=bs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Qh.test(n))return!1;if(Xh.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new Hn(3e4,6e4);function fo(){const t=Ve().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function np(t){return new Promise((e,n)=>{var r,s,i;function o(){fo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fo(),n(We(t,"network-request-failed"))},timeout:tp.get()})}if(!((s=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ve().gapi)===null||i===void 0)&&i.load)o();else{const a=Nh("iframefcb");return Ve()[a]=()=>{gapi.load?o():n(We(t,"network-request-failed"))},Dh(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw or=null,e})}let or=null;function rp(t){return or=or||np(t),or}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=new Hn(5e3,15e3),ip="__/auth/iframe",op="emulator/auth/iframe",ap={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lp(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qs(e,op):`https://${t.config.authDomain}/${ip}`,r={apiKey:e.apiKey,appName:t.name,v:Dr},s=cp.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bn(r).slice(1)}`}async function up(t){const e=await rp(t),n=Ve().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:lp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ap,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=We(t,"network-request-failed"),a=Ve().setTimeout(()=>{i(o)},sp.get());function c(){Ve().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dp=500,hp=600,pp="_blank",gp="http://localhost";class ho{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mp(t,e,n,r=dp,s=hp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},fp),{width:r.toString(),height:s.toString(),top:i,left:o}),l=me().toLowerCase();n&&(a=Ya(l)?pp:n),Ja(l)&&(e=e||gp,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[b,S])=>`${p}${b}=${S},`,"");if(Zd(l)&&a!=="_self")return _p(e||"",a),new ho(null);const h=window.open(e||"",a,f);x(h,t,"popup-blocked");try{h.focus()}catch{}return new ho(h)}function _p(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="__/auth/handler",yp="emulator/auth/handler";function po(t,e,n,r,s,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Dr,eventId:s};if(e instanceof rc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",If(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Vn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${bp(t)}?${Bn(a).slice(1)}`}function bp({config:t}){return t.emulator?Qs(t,yp):`https://${t.authDomain}/${vp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="webStorageSupport";class wp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uc,this._completeRedirectFn=qh,this._overrideRedirectResult=Wh}async _openPopup(e,n,r,s){var i;Ze((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=po(e,n,r,bs(),s);return mp(e,o,ri())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Ih(po(e,n,r,bs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ze(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await up(e),r=new Gh(e);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xr,{type:Xr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Xr];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tc()||ei()||Nr()}}const Ip=wp;var go="@firebase/auth",mo="0.20.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Rp(t){Dn(new en("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{x(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),x(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nc(t)},f=new rh(a,c,l);return Ld(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new en("auth-internal",e=>{const n=xr(e.getProvider("auth").getImmediate());return(r=>new Ep(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(go,mo,Tp(t)),Yt(go,mo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t=Ed()){const e=Fa(t,"auth");return e.isInitialized()?e.getImmediate():xd(t,{popupRedirectResolver:Ip,persistence:[Ph,yh,uc]})}Rp("Browser");/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const _c=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",fn=t=>_c?Symbol(t):"_vr_"+t,Sp=fn("rvlm"),_o=fn("rvd"),oi=fn("r"),vc=fn("rl"),Is=fn("rvl"),zt=typeof window!="undefined";function Ap(t){return t.__esModule||_c&&t[Symbol.toStringTag]==="Module"}const X=Object.assign;function Qr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const Tn=()=>{},Cp=/\/$/,kp=t=>t.replace(Cp,"");function Zr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Dp(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Op(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Pp(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&nn(e.matched[r],n.matched[s])&&yc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function nn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Mp(t[n],e[n]))return!1;return!0}function Mp(t,e){return Array.isArray(t)?yo(t,e):Array.isArray(e)?yo(e,t):t===e}function yo(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Dp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Un;(function(t){t.pop="pop",t.push="push"})(Un||(Un={}));var Rn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Rn||(Rn={}));function Np(t){if(!t)if(zt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kp(t)}const xp=/^[^#]+#/;function Lp(t,e){return t.replace(xp,"#")+e}function Up(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const $r=()=>({left:window.pageXOffset,top:window.pageYOffset});function $p(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Up(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function bo(t,e){return(history.state?history.state.position-e:-1)+t}const Es=new Map;function Fp(t,e){Es.set(t,e)}function Bp(t){const e=Es.get(t);return Es.delete(t),e}let Hp=()=>location.protocol+"//"+location.host;function bc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),vo(c,"")}return vo(n,t)+r+s}function jp(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const b=bc(t,location),S=n.value,U=e.value;let C=0;if(p){if(n.value=b,e.value=p,o&&o===S){o=null;return}C=U?p.position-U.position:0}else r(b);s.forEach(O=>{O(n.value,S,{delta:C,type:Un.pop,direction:C?C>0?Rn.forward:Rn.back:Rn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const b=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(b),b}function f(){const{history:p}=window;!p.state||p.replaceState(X({},p.state,{scroll:$r()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function wo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?$r():null}}function Wp(t){const{history:e,location:n}=window,r={value:bc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Hp()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(b){console.error(b),n[f?"replace":"assign"](p)}}function o(c,l){const f=X({},e.state,wo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=X({},s.value,e.state,{forward:c,scroll:$r()});i(f.current,f,!0);const h=X({},wo(r.value,c,null),{position:f.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Vp(t){t=Np(t);const e=Wp(t),n=jp(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:Lp.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function zp(t){return typeof t=="string"||t&&typeof t=="object"}function wc(t){return typeof t=="string"||typeof t=="symbol"}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ic=fn("nf");var Io;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Io||(Io={}));function rn(t,e){return X(new Error,{type:t,[Ic]:!0},e)}function it(t,e){return t instanceof Error&&Ic in t&&(e==null||!!(t.type&e))}const Eo="[^/]+?",qp={sensitive:!1,strict:!1,start:!0,end:!0},Kp=/[.+*?^${}()[\]/\\]/g;function Gp(t,e){const n=X({},qp,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let b=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Kp,"\\$&"),b+=40;else if(p.type===1){const{value:S,repeatable:U,optional:C,regexp:O}=p;i.push({name:S,repeatable:U,optional:C});const F=O||Eo;if(F!==Eo){b+=10;try{new RegExp(`(${F})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${S}" (${F}): `+q.message)}}let z=U?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(z=C&&l.length<2?`(?:/${z})`:"/"+z),C&&(z+="?"),s+=z,b+=20,C&&(b+=-8),U&&(b+=-20),F===".*"&&(b+=-50)}f.push(b)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const b=f[p]||"",S=i[p-1];h[S.name]=b&&S.repeatable?b.split("/"):b}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const b of p)if(b.type===0)f+=b.value;else if(b.type===1){const{value:S,repeatable:U,optional:C}=b,O=S in l?l[S]:"";if(Array.isArray(O)&&!U)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const F=Array.isArray(O)?O.join("/"):O;if(!F)if(C)p.length<2&&t.length>1&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);f+=F}}return f}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Jp(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Yp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Jp(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Xp={type:0,value:""},Qp=/[a-zA-Z0-9_]/;function Zp(t){if(!t)return[[]];if(t==="/")return[[Xp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${n})/"${l}": ${b}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Qp.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function eg(t,e,n){const r=Gp(Zp(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function tg(t,e){const n=[],r=new Map;e=Ro({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const b=!p,S=rg(f);S.aliasOf=p&&p.record;const U=Ro(e,f),C=[S];if("alias"in f){const z=typeof f.alias=="string"?[f.alias]:f.alias;for(const q of z)C.push(X({},S,{components:p?p.record.components:S.components,path:q,aliasOf:p?p.record:S}))}let O,F;for(const z of C){const{path:q}=z;if(h&&q[0]!=="/"){const de=h.record.path,he=de[de.length-1]==="/"?"":"/";z.path=h.record.path+(q&&he+q)}if(O=eg(z,h,U),p?p.alias.push(O):(F=F||O,F!==O&&F.alias.push(O),b&&f.name&&!To(O)&&o(f.name)),"children"in S){const de=S.children;for(let he=0;he<de.length;he++)i(de[he],O,p&&p.children[he])}p=p||O,c(O)}return F?()=>{o(F)}:Tn}function o(f){if(wc(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&Yp(f,n[h])>=0&&(f.record.path!==n[h].record.path||!Ec(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!To(f)&&r.set(f.record.name,f)}function l(f,h){let p,b={},S,U;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw rn(1,{location:f});U=p.record.name,b=X(ng(h.params,p.keys.filter(F=>!F.optional).map(F=>F.name)),f.params),S=p.stringify(b)}else if("path"in f)S=f.path,p=n.find(F=>F.re.test(S)),p&&(b=p.parse(S),U=p.record.name);else{if(p=h.name?r.get(h.name):n.find(F=>F.re.test(h.path)),!p)throw rn(1,{location:f,currentLocation:h});U=p.record.name,b=X({},h.params,f.params),S=p.stringify(b)}const C=[];let O=p;for(;O;)C.unshift(O.record),O=O.parent;return{name:U,path:S,params:b,matched:C,meta:ig(C)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ng(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function rg(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:sg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function sg(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function To(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ig(t){return t.reduce((e,n)=>X(e,n.meta),{})}function Ro(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ec(t,e){return e.children.some(n=>n===t||Ec(t,n))}const Tc=/#/g,og=/&/g,ag=/\//g,cg=/=/g,lg=/\?/g,Rc=/\+/g,ug=/%5B/g,fg=/%5D/g,Sc=/%5E/g,dg=/%60/g,Ac=/%7B/g,hg=/%7C/g,Cc=/%7D/g,pg=/%20/g;function ai(t){return encodeURI(""+t).replace(hg,"|").replace(ug,"[").replace(fg,"]")}function gg(t){return ai(t).replace(Ac,"{").replace(Cc,"}").replace(Sc,"^")}function Ts(t){return ai(t).replace(Rc,"%2B").replace(pg,"+").replace(Tc,"%23").replace(og,"%26").replace(dg,"`").replace(Ac,"{").replace(Cc,"}").replace(Sc,"^")}function mg(t){return Ts(t).replace(cg,"%3D")}function _g(t){return ai(t).replace(Tc,"%23").replace(lg,"%3F")}function vg(t){return t==null?"":_g(t).replace(ag,"%2F")}function br(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function yg(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Rc," "),o=i.indexOf("="),a=br(o<0?i:i.slice(0,o)),c=o<0?null:br(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function So(t){let e="";for(let n in t){const r=t[n];if(n=mg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Ts(i)):[r&&Ts(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function bg(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function gn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ct(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(rn(4,{from:n,to:e})):h instanceof Error?a(h):zp(h)?a(rn(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function es(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(wg(a)){const l=(a.__vccOpts||a)[e];l&&s.push(ct(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Ap(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&ct(p,n,r,i,o)()}))}}return s}function wg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ao(t){const e=mt(oi),n=mt(vc),r=je(()=>e.resolve(ue(t.to))),s=je(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(nn.bind(null,f));if(p>-1)return p;const b=Co(c[l-2]);return l>1&&Co(f)===b&&h[h.length-1].path!==b?h.findIndex(nn.bind(null,c[l-2])):p}),i=je(()=>s.value>-1&&Tg(n.params,r.value.params)),o=je(()=>s.value>-1&&s.value===n.matched.length-1&&yc(n.params,r.value.params));function a(c={}){return Eg(c)?e[ue(t.replace)?"replace":"push"](ue(t.to)).catch(Tn):Promise.resolve()}return{route:r,href:je(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Ig=da({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ao,setup(t,{slots:e}){const n=$n(Ao(t)),{options:r}=mt(oi),s=je(()=>({[ko(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ko(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Oa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),At=Ig;function Eg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Tg(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Co(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ko=(t,e,n)=>t!=null?t:e!=null?e:n,Rg=da({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=mt(Is),s=je(()=>t.route||r.value),i=mt(_o,0),o=je(()=>s.value.matched[i]);er(_o,i+1),er(Sp,o),er(Is,s);const a=El();return tr(()=>[a.value,o.value,t.name],([c,l,f],[h,p,b])=>{l&&(l.instances[f]=c,p&&p!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),c&&l&&(!p||!nn(l,p)||!h)&&(l.enterCallbacks[f]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,f=l&&l.components[t.name],h=t.name;if(!f)return Oo(n.default,{Component:f,route:c});const p=l.props[t.name],b=p?p===!0?c.params:typeof p=="function"?p(c):p:null,U=Oa(f,X({},b,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Oo(n.default,{Component:U,route:c})||U}}});function Oo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ci=Rg;function Sg(t){const e=tg(t.routes,t),n=t.parseQuery||yg,r=t.stringifyQuery||So,s=t.history,i=gn(),o=gn(),a=gn(),c=Tl(st);let l=st;zt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Qr.bind(null,m=>""+m),h=Qr.bind(null,vg),p=Qr.bind(null,br);function b(m,k){let T,P;return wc(m)?(T=e.getRecordMatcher(m),P=k):P=m,e.addRoute(P,T)}function S(m){const k=e.getRecordMatcher(m);k&&e.removeRoute(k)}function U(){return e.getRoutes().map(m=>m.record)}function C(m){return!!e.getRecordMatcher(m)}function O(m,k){if(k=X({},k||c.value),typeof m=="string"){const H=Zr(n,m,k.path),u=e.resolve({path:H.path},k),d=s.createHref(H.fullPath);return X(H,u,{params:p(u.params),hash:br(H.hash),redirectedFrom:void 0,href:d})}let T;if("path"in m)T=X({},m,{path:Zr(n,m.path,k.path).path});else{const H=X({},m.params);for(const u in H)H[u]==null&&delete H[u];T=X({},m,{params:h(m.params)}),k.params=h(k.params)}const P=e.resolve(T,k),J=m.hash||"";P.params=f(p(P.params));const te=Op(r,X({},m,{hash:gg(J),path:P.path})),j=s.createHref(te);return X({fullPath:te,hash:J,query:r===So?bg(m.query):m.query||{}},P,{redirectedFrom:void 0,href:j})}function F(m){return typeof m=="string"?Zr(n,m,c.value.path):X({},m)}function z(m,k){if(l!==m)return rn(8,{from:k,to:m})}function q(m){return Se(m)}function de(m){return q(X(F(m),{replace:!0}))}function he(m){const k=m.matched[m.matched.length-1];if(k&&k.redirect){const{redirect:T}=k;let P=typeof T=="function"?T(m):T;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=F(P):{path:P},P.params={}),X({query:m.query,hash:m.hash,params:m.params},P)}}function Se(m,k){const T=l=O(m),P=c.value,J=m.state,te=m.force,j=m.replace===!0,H=he(T);if(H)return Se(X(F(H),{state:J,force:te,replace:j}),k||T);const u=T;u.redirectedFrom=k;let d;return!te&&Pp(r,P,T)&&(d=rn(16,{to:u,from:P}),Ft(P,P,!0,!1)),(d?Promise.resolve(d):ye(u,P)).catch(g=>it(g)?it(g,2)?g:we(g):ee(g,u,P)).then(g=>{if(g){if(it(g,2))return Se(X(F(g.to),{state:J,force:te,replace:j}),k||u)}else g=qe(u,P,!0,j,J);return Le(u,P,g),g})}function tt(m,k){const T=z(m,k);return T?Promise.reject(T):Promise.resolve()}function ye(m,k){let T;const[P,J,te]=Ag(m,k);T=es(P.reverse(),"beforeRouteLeave",m,k);for(const H of P)H.leaveGuards.forEach(u=>{T.push(ct(u,m,k))});const j=tt.bind(null,m,k);return T.push(j),Ht(T).then(()=>{T=[];for(const H of i.list())T.push(ct(H,m,k));return T.push(j),Ht(T)}).then(()=>{T=es(J,"beforeRouteUpdate",m,k);for(const H of J)H.updateGuards.forEach(u=>{T.push(ct(u,m,k))});return T.push(j),Ht(T)}).then(()=>{T=[];for(const H of m.matched)if(H.beforeEnter&&!k.matched.includes(H))if(Array.isArray(H.beforeEnter))for(const u of H.beforeEnter)T.push(ct(u,m,k));else T.push(ct(H.beforeEnter,m,k));return T.push(j),Ht(T)}).then(()=>(m.matched.forEach(H=>H.enterCallbacks={}),T=es(te,"beforeRouteEnter",m,k),T.push(j),Ht(T))).then(()=>{T=[];for(const H of o.list())T.push(ct(H,m,k));return T.push(j),Ht(T)}).catch(H=>it(H,8)?H:Promise.reject(H))}function Le(m,k,T){for(const P of a.list())P(m,k,T)}function qe(m,k,T,P,J){const te=z(m,k);if(te)return te;const j=k===st,H=zt?history.state:{};T&&(P||j?s.replace(m.fullPath,X({scroll:j&&H&&H.scroll},J)):s.push(m.fullPath,J)),c.value=m,Ft(m,k,T,j),we()}let ke;function Lt(){ke||(ke=s.listen((m,k,T)=>{const P=O(m),J=he(P);if(J){Se(X(J,{replace:!0}),P).catch(Tn);return}l=P;const te=c.value;zt&&Fp(bo(te.fullPath,T.delta),$r()),ye(P,te).catch(j=>it(j,12)?j:it(j,2)?(Se(j.to,P).then(H=>{it(H,20)&&!T.delta&&T.type===Un.pop&&s.go(-1,!1)}).catch(Tn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),ee(j,P,te))).then(j=>{j=j||qe(P,te,!1),j&&(T.delta?s.go(-T.delta,!1):T.type===Un.pop&&it(j,20)&&s.go(-1,!1)),Le(P,te,j)}).catch(Tn)}))}let Ut=gn(),$t=gn(),ae;function ee(m,k,T){we(m);const P=$t.list();return P.length?P.forEach(J=>J(m,k,T)):console.error(m),Promise.reject(m)}function G(){return ae&&c.value!==st?Promise.resolve():new Promise((m,k)=>{Ut.add([m,k])})}function we(m){return ae||(ae=!m,Lt(),Ut.list().forEach(([k,T])=>m?T(m):k()),Ut.reset()),m}function Ft(m,k,T,P){const{scrollBehavior:J}=t;if(!zt||!J)return Promise.resolve();const te=!T&&Bp(bo(m.fullPath,0))||(P||!T)&&history.state&&history.state.scroll||null;return ra().then(()=>J(m,k,te)).then(j=>j&&$p(j)).catch(j=>ee(j,m,k))}const Ke=m=>s.go(m);let Ue;const Ae=new Set;return{currentRoute:c,addRoute:b,removeRoute:S,hasRoute:C,getRoutes:U,resolve:O,options:t,push:q,replace:de,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:$t.add,isReady:G,install(m){const k=this;m.component("RouterLink",At),m.component("RouterView",ci),m.config.globalProperties.$router=k,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(c)}),zt&&!Ue&&c.value===st&&(Ue=!0,q(s.location).catch(J=>{}));const T={};for(const J in st)T[J]=je(()=>c.value[J]);m.provide(oi,k),m.provide(vc,$n(T)),m.provide(Is,c);const P=m.unmount;Ae.add(m),m.unmount=function(){Ae.delete(m),Ae.size<1&&(l=st,ke&&ke(),ke=null,c.value=st,Ue=!1,ae=!1),P()}}}}function Ht(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Ag(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>nn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>nn(l,c))||s.push(c))}return[n,r,s]}var bt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const li=t=>(Hs("data-v-715254ec"),t=t(),js(),t),Cg=li(()=>N("a",{href:"https://vuejs.org/",target:"_blank"},"VueJS",-1)),kg=li(()=>N("a",{href:"https://firebase.google.com/",target:"_blank"},"Firebase",-1)),Og=li(()=>N("a",{href:"https://github.com/loshido",target:"_blank"},"Github",-1)),Pg=Re("Home"),Mg=Re("Scripts"),Dg=Re("Life"),Ng=Re("Memo"),xg={data(){return{avatar:qi,isLogged:!1}},beforeMount(){const t=ii();oc(t,e=>{e?(this.isLogged=!0,this.avatar=e.photoURL):(this.isLogged=!1,this.avatar=qi)})},methods:{}},Lg=Object.assign(xg,{setup(t){return(e,n)=>(Z(),oe("nav",null,[Cg,kg,Og,re(ue(At),{to:"/","active-class":"active"},{default:ht(()=>[Pg]),_:1}),re(ue(At),{to:"/shop","active-class":"active"},{default:ht(()=>[Mg]),_:1}),re(ue(At),{"active-class":"active",to:"/life/me"},{default:ht(()=>[Dg]),_:1}),re(ue(At),{"active-class":"active",to:"/memo"},{default:ht(()=>[Ng]),_:1})]))}});var kc=bt(Lg,[["__scopeId","data-v-715254ec"]]);const Ug=t=>(Hs("data-v-0523acf3"),t=t(),js(),t),$g=Ug(()=>N("h1",null,[N("a",null,"Echo")],-1)),Fg={setup(t){return(e,n)=>(Z(),oe("header",null,[$g,re(kc)]))}};var Bg=bt(Fg,[["__scopeId","data-v-0523acf3"]]);const Hg={id:"box"},jg={data(){return{isLogged:!1}},beforeMount(){const t=ii();oc(t,e=>{e?this.isLogged=!0:this.isLogged=!1})},created(){this.$router.beforeEach((t,e)=>{if((t.name=="login"||t.name=="register"||t.name=="auth")&&this.isLogged)return"/auth/logged";if(t.name=="logged"&&!this.isLogged)return"/auth/login"})},watch:{isLogged(){console.log("user is logged ? "+this.isLogged)}}},Wg=Object.assign(jg,{setup(t){return(e,n)=>(Z(),oe("div",Hg,[re(ue(ci))]))}});const Vg=N("h3",null,"Copyrights \xA92022 Loshido",-1),zg={setup(t){return(e,n)=>(Z(),oe(le,null,[re(Bg,{id:"header"}),re(ue(ci)),N("footer",null,[Vg,re(kc)])],64))}},qg="modulepreload",Po={},Kg="/",Xn=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Kg}${r}`,r in Po)return;Po[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":qg,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};var Gg="/assets/encryption.240496fc.svg",Jg="/assets/finishline.f2c54ee6.svg",Yg="/assets/inspiration.f54dba38.svg",Xg="/assets/investing.90175cb0.svg",Qg="/assets/moving.c645aebb.svg",Zg="/assets/relax.2d0d9534.svg",em="/assets/sheet.eafe0f09.svg",tm="/assets/videographer.3f2fc966.svg",nm="/assets/warning.4a0e2241.svg",rm="/assets/working.05f83d43.svg";function sm(){return[{title:"VueJS",content:"Un approchable, performant et versatile framework pour cr\xE9er des pages web avec interface utilisateur.",rgb:"rgba(108, 147, 128, 0.85)",identifier:"vue",image:{src:"https://vuejs.org/images/logo.png",alt:"VueJS"}},{title:"Javascript",content:"JavaScript (JS) est le plus connu language de code pour les pages Web.",rgb:"rgba(147, 147, 108, 0.85)",identifier:"js",image:{src:"https://www.developpez.net/forums/attachments/p294178d1/a/a/a",alt:"JavaScript"}},{title:"HTML",content:`HTML signifie "HyperText Markup Language" qui se traduit par "language de balises pour l'hypertexte" `,rgb:"rgba(108, 147, 128, 0.85)",identifier:"html",image:{src:"https://cdn-icons-png.flaticon.com/512/732/732212.png",alt:"Image"}},{title:"CSS",content:"CSS est l'un des languages principaux du Web, Il sert d'apparence sur les pages Web",rgb:"rgba(108, 147, 147,0.85)",identifier:"css",image:{src:"https://cdn-icons-png.flaticon.com/512/732/732190.png",alt:"Image"}}]}function im(){return[{title:"Far far away",content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary"},{title:"Werther",content:"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my"},{title:"Kafka",content:"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The"},{title:"Pangram",content:"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens"},{title:"Cicero",content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui"}]}const Rs={header:`<strong>Bienvenue</strong>, cette page est un essai technique. J'apprends \xE0 utiliser <a class="link" target="_blank" href="https://vuejs.org/">VueJS</a> et en effet, il faut commencer par quelque chose sinon on reste bloqu\xE9 \xE0 rien savoir faire. Finalement, cette demo technique sera surement manipul\xE9e de pleins de fa\xE7ons diff\xE9rentes pour comprendre le fonctionnement de ce framework.`,warning:'Page inspir\xE9e initialement du site officiel de <a class="link" href="https://fivem.net">FiveM</a>, \xC9tant donn\xE9 que ma page est seulement faite pour apprendre.',nolimits:"<i><q>Mesurer les progr\xE8s de la programmation en lignes de code, c\u2019est comme mesurer les progr\xE8s de la construction d\u2019un avion en poids.</q></i>"},Je=[{title:"Encryption",key:"encryption",content:"Encryption Text",path:"/shop/encryption",image:{src:Gg,alt:"encryption"}},{title:"FinishLine",content:"Finish Line Text",key:"finishline",path:"/shop/finishline",image:{src:Jg,alt:"finishline"}},{title:"Inspiration",content:"Inspiration Text",key:"inspiration",path:"/shop/inspiration",image:{src:Yg,alt:"inspiration"}},{title:"investing",content:"investing Text",key:"investing",path:"/shop/investing",image:{src:Xg,alt:"investing"}},{title:"moving",content:"moving Text",key:"moving",path:"/shop/moving",image:{src:Qg,alt:"moving"}},{title:"relax",content:"relax Text",key:"relax",path:"/shop/relax",image:{src:Zg,alt:"relax"}},{title:"sheet",content:"sheet Text",key:"sheet",path:"/shop/sheet",image:{src:em,alt:"sheet"}},{title:"videographer",content:"videographer Text",key:"videographer",path:"/shop/videographer",image:{src:tm,alt:"videographer"}},{title:"warning",content:"warning Text",key:"warning",path:"/shop/warning",image:{src:nm,alt:"warning"}},{title:"working",content:"working Text",key:"working",path:"/shop/working",image:{src:rm,alt:"working"}}];function om(t){for(var e=0;e<Je.length;e++)for(var n in Je[e])if(typeof Je[e][n]=="string"&&Je[e][n]==t)return Je[e]}const am={id:"s1"},cm=["innerHTML"],lm={id:"s2"},um=Re("Shop"),fm={setup(t){return(e,n)=>(Z(),oe("main",null,[N("div",am,[N("p",{innerHTML:ue(Rs).header},null,8,cm)]),N("div",lm,[re(ue(At),{to:"/shop"},{default:ht(()=>[um]),_:1})])]))}};var dm=bt(fm,[["__scopeId","data-v-25f672e2"]]);const hm={props:["title","content","rgb","image"]},pm=["src","alt"];function gm(t,e,n,r,s,i){return Z(),oe("article",{style:wr({"background-color":n.rgb,border:"3px solid "+n.rgb})},[n.image?(Z(),oe("img",{key:0,class:"logo",src:n.image.src,alt:n.image.alt},null,8,pm)):qs("",!0),N("h1",null,Ce(n.title),1),N("p",null,Ce(n.content),1)],4)}var mm=bt(hm,[["render",gm],["__scopeId","data-v-067e2133"]]);const _m={id:"head"},vm={id:"container"},ym=["innerHTML"],bm={class:"module"},wm=N("h1",{id:"features-title"},"Features",-1),Im={class:"features-holder"},Em=["innerHTML"],Tm={class:"module",id:"faq"},Rm=N("h1",null,"F.A.Q.",-1),Sm=["id"],Am={class:"faq-title"},Cm=N("a",{href:"#",class:"link"},"#",-1),km={class:"faq-content"},Om={setup(t){return(e,n)=>(Z(),oe(le,null,[N("section",_m,[N("div",vm,[re(dm)]),N("p",{id:"ut",innerHTML:ue(Rs).warning},null,8,ym)]),N("section",bm,[wm,N("div",Im,[(Z(!0),oe(le,null,Pn(ue(sm)(),r=>(Z(),zs(mm,{title:r.title,content:r.content,rgb:r.rgb,image:r.image},null,8,["title","content","rgb","image"]))),256))]),N("h2",{innerHTML:ue(Rs).nolimits},null,8,Em)]),N("section",Tm,[Rm,(Z(!0),oe(le,null,Pn(ue(im)(),(r,s)=>(Z(),oe("div",{class:"faq",id:s},[N("h2",Am,[Cm,Re(" "+Ce(r.title),1)]),N("p",km,Ce(r.content),1)],8,Sm))),256))])],64))}};const Pm={props:["item"]},Mm={id:"img"},Dm=["src","alt"],Nm={id:"content"},xm=Re("En savoir plus");function Lm(t,e,n,r,s,i){const o=_u("RouterLink");return Z(),oe("article",null,[N("div",Mm,[N("h1",null,Ce(n.item.title),1),N("img",{src:n.item.image.src,alt:n.item.image.alt},null,8,Dm)]),N("div",Nm,[N("main",null,[N("p",null,Ce(n.item.content),1)]),re(o,{to:n.item.path},{default:ht(()=>[xm]),_:1},8,["to"])])])}var Um=bt(Pm,[["render",Lm],["__scopeId","data-v-53cd9779"]]);const $m={id:"page"},Fm={key:0,id:"warning"},Bm={class:"container"},Hm={class:"row"},jm={data(){return{isLogged:!1}},methods:{getRows(){if(Je.length==0)return!1;const t=Math.floor(Je.length/4.1)+1,e=[];if(t==1)return e[0]=[],Je.forEach((n,r)=>{e[0][r]=n}),console.log(e),e;for(let n=0;n<t;n++)e[n]=[],Je.forEach((r,s)=>{s<=n*4+3&&s>=n*4&&(e[n][s-n*4]=r)});return e}}},Wm=Object.assign(jm,{setup(t){return(e,n)=>(Z(),oe("div",$m,[e.getRows()?qs("",!0):(Z(),oe("h1",Fm,"\u26A0\uFE0F\u200B Il n'y a pas d'articles disponible \u26A0\uFE0F\u200B")),(Z(!0),oe(le,null,Pn(e.getRows(),(r,s)=>(Z(),oe("div",Bm,[N("div",Hm,[(Z(!0),oe(le,null,Pn(r,(i,o)=>(Z(),zs(Um,{item:i},null,8,["item"]))),256))])]))),256))]))}});var Vm=bt(Wm,[["__scopeId","data-v-0e1c3b6a"]]);const zm={id:"retour"},qm=Re("Revenir"),Km={key:0,id:"article-container"},Gm={id:"article-img"},Jm=["src","alt"],Ym={id:"article-content"},Xm=["textContent"],Qm=["innerHTML"],Zm={props:["article"],data(){return{page:{}}},created(){this.page=om(this.article)}},e_=Object.assign(Zm,{setup(t){return(e,n)=>(Z(),oe(le,null,[N("h1",zm,[re(ue(At),{to:"/shop"},{default:ht(()=>[qm]),_:1})]),t.article!=""?(Z(),oe("div",Km,[N("div",Gm,[N("img",{src:e.page.image.src,alt:e.page.image.alt},null,8,Jm)]),N("div",Ym,[N("h1",{textContent:Ce(e.page.title)},null,8,Xm),N("p",{innerHTML:e.page.content},null,8,Qm)])])):qs("",!0)],64))}});var t_=bt(e_,[["__scopeId","data-v-320f3c08"]]);const n_={props:["time"],data(){return{weeks:0,first:new Date(2006,1,3,0,0,0,0),today:new Date,current:new Date(2006,1,3,0,0,0,0),input:""}},watch:{input(t){var e=new Date(t).getTime();console.log(new Date(t).getFullYear()),new Date(t).getFullYear()>1900&&(this.$router.push({name:"life",params:{time:e}}),setTimeout(()=>{location.reload()},100))}},methods:{toMonth(t){return["Janvier","F\xE9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xFBt","Septembre","Octobre","Novembre","D\xE9cembre"][t.getMonth()]},diffDays(t,e){return Math.ceil(Math.abs(t-e)/(1e3*60*60*24))},addDay(t,e){return t.setDate(t.getDate()+e),t},getDay(t){var e=new Date(this.current.getTime());if(e=this.addDay(e,t*7-7),t!=1)for(;e.getDay()!=1;)e=this.addDay(e,-1);return e},CubeClicked(t){const e=document.getElementById(t+"cube");e.style.animation="clicked 1s ease-in-out",setTimeout(()=>{e.style.animation=""},1e3)}},computed:{displayBirthday(){return`${this.first.getDate()} ${this.toMonth(this.first)} ${this.first.getFullYear()}`},displayToday(){return`${this.today.getDate()} ${this.toMonth(this.today)}, en ${this.today.getFullYear()}`},displayWeeks(){return Math.ceil(this.diffDays(this.first,this.today)/7)},computedNewDate(){let t=this.time;return typeof t=="string"&&(t=cr(t)),t instanceof Date||(t=new Date(t)),t.getDate()+" "+this.toMonth(t)+" "+t.getFullYear()},toExposed(){let t=this.current;const e={date:t.getDate(),month:this.toMonth(t),year:t.getFullYear()};for(t=this.addDay(t,7);t.getDay()!=1;)t=this.addDay(t,-1);const n=t.getDate();return e.date+"-"+n+" "+e.month+" "+e.year}},created(){this.time!="me"&&(this.current=new Date,this.current.setTime(this.time)),this.weeks=Math.ceil(this.diffDays(this.current,this.today)/7)}},ui=t=>(Hs("data-v-217bf413"),t=t(),js(),t),r_=ui(()=>N("hr",{id:"separ"},null,-1)),s_=["textContent"],i_=Re(" semaines que je vies \u{1F9A6}."),o_={key:0},a_={key:1},c_={id:"aside"},l_=Re(" Saissisez votre date de naissance."),u_=ui(()=>N("br",null,null,-1)),f_=ui(()=>N("hr",null,null,-1)),d_={id:"tab"},h_=["onMouseover","id"],p_={class:"tooltip"};function g_(t,e,n,r,s,i){return Z(),oe(le,null,[N("h2",null,[Re("Aujourd'hui nous sommes le "+Ce(i.displayToday)+" \u2728. ",1),r_,N("h4",null,[Re("Et je suis n\xE9 le "+Ce(i.displayBirthday)+". Cela fait donc ",1),N("a",{href:"#tab",textContent:Ce(i.displayWeeks)},null,8,s_),i_])]),n.time=="me"?(Z(),oe("h3",o_,"Chacun de ces cubes repr\xE9sentent une semaine de ma vie")):(Z(),oe("h3",a_,"Vous avez saisis "+Ce(i.computedNewDate),1)),N("div",c_,[N("form",null,[N("label",null,[l_,u_,f_,uu(N("input",{type:"date",id:"date","onUpdate:modelValue":e[0]||(e[0]=o=>s.input=o)},null,512),[[tf,s.input]])])])]),N("div",d_,[(Z(!0),oe(le,null,Pn(s.weeks,o=>(Z(),oe("div",{class:"week",key:o,onMouseover:a=>i.CubeClicked(o),id:o+"cube"},[N("span",p_,Ce(i.toExposed),1)],40,h_))),128))])],64)}var m_=bt(n_,[["render",g_],["__scopeId","data-v-217bf413"]]);const __=Sg({history:Vp("/"),routes:[{path:"/",name:"home",component:Om},{path:"/shop",name:"shop",component:Vm},{path:"/shop/:article",name:"article",component:t_,props:!0},{path:"/life/:time",props:!0,name:"life",component:m_},{path:"/memo",name:"memo",component:()=>Xn(()=>import("./Memo.b5a05917.js"),["assets/Memo.b5a05917.js","assets/Memo.eaf8fdbe.css"])},{path:"/auth",name:"auth",component:Wg,redirect:t=>({path:"/auth/login"}),children:[{path:"login",name:"login",component:()=>Xn(()=>import("./login.0b35ce4c.js"),[])},{path:"register",name:"register",component:()=>Xn(()=>import("./register.743f4fc9.js"),[])},{path:"logged",name:"logged",component:()=>Xn(()=>import("./logged.d38fcdb1.js"),["assets/logged.d38fcdb1.js","assets/logged.dc771d62.css"])}]}]});var v_="firebase",y_="9.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt(v_,y_,"app");var b_={apiKey:"AIzaSyDXu6v0FyNnP_5WFTkjnMJFd8NVRNpLsEU",authDomain:"echo-vuejs.firebaseapp.com",projectId:"echo-vuejs",storageBucket:"echo-vuejs.appspot.com",messagingSenderId:"275245027821",appId:"1:275245027821:web:94dd53b250383dcf1217e4",measurementId:"G-Y3DSL5J2XD"};const w_=Id(b_);ii(w_);const Oc=af(zg);Oc.use(__);Oc.mount("#app");export{le as F,At as R,bt as _,N as a,E_ as b,oe as c,tf as d,re as e,Re as f,js as g,qs as h,ge as i,ht as j,ii as k,R_ as l,A_ as m,C_ as n,Z as o,Hs as p,S_ as s,Ce as t,ue as u,T_ as v,uu as w};
