var Oc=Object.defineProperty,Pc=Object.defineProperties;var Mc=Object.getOwnPropertyDescriptors;var di=Object.getOwnPropertySymbols;var Dc=Object.prototype.hasOwnProperty,Nc=Object.prototype.propertyIsEnumerable;var hi=(t,e,n)=>e in t?Oc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,pi=(t,e)=>{for(var n in e||(e={}))Dc.call(e,n)&&hi(t,n,e[n]);if(di)for(var n of di(e))Nc.call(e,n)&&hi(t,n,e[n]);return t},gi=(t,e)=>Pc(t,Mc(e));const xc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};xc();function Ss(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Lc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uc=Ss(Lc);function Oo(t){return!!t||t===""}function yr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=fe(r)?Bc(r):yr(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(fe(t))return t;if(ce(t))return t}}const Fc=/;(?![^(]*\))/g,$c=/:(.+)/;function Bc(t){const e={};return t.split(Fc).forEach(n=>{if(n){const r=n.split($c);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function As(t){let e="";if(fe(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=As(t[n]);r&&(e+=r+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pe=t=>fe(t)?t:t==null?"":F(t)||ce(t)&&(t.toString===No||!B(t.toString))?JSON.stringify(t,Po,2):String(t),Po=(t,e)=>e&&e.__v_isRef?Po(t,e.value):Gt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Mo(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!F(e)&&!xo(e)?String(e):e,Z={},Kt=[],De=()=>{},Hc=()=>!1,jc=/^on[^a-z]/,br=t=>jc.test(t),Cs=t=>t.startsWith("onUpdate:"),ye=Object.assign,ks=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Wc=Object.prototype.hasOwnProperty,W=(t,e)=>Wc.call(t,e),F=Array.isArray,Gt=t=>wr(t)==="[object Map]",Mo=t=>wr(t)==="[object Set]",B=t=>typeof t=="function",fe=t=>typeof t=="string",Os=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",Do=t=>ce(t)&&B(t.then)&&B(t.catch),No=Object.prototype.toString,wr=t=>No.call(t),Vc=t=>wr(t).slice(8,-1),xo=t=>wr(t)==="[object Object]",Ps=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yn=Ss(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ir=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zc=/-(\w)/g,ze=Ir(t=>t.replace(zc,(e,n)=>n?n.toUpperCase():"")),qc=/\B([A-Z])/g,sn=Ir(t=>t.replace(qc,"-$1").toLowerCase()),Er=Ir(t=>t.charAt(0).toUpperCase()+t.slice(1)),$r=Ir(t=>t?`on${Er(t)}`:""),Rn=(t,e)=>!Object.is(t,e),Xn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ir=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},or=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mi;const Kc=()=>mi||(mi=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Be;class Gc{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Be&&(this.parent=Be,this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Be;try{return Be=this,e()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Jc(t,e=Be){e&&e.active&&e.effects.push(t)}const Ms=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Lo=t=>(t.w&vt)>0,Uo=t=>(t.n&vt)>0,Yc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=vt},Xc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Lo(s)&&!Uo(s)?s.delete(t):e[n++]=s,s.w&=~vt,s.n&=~vt}e.length=n}},ts=new WeakMap;let gn=0,vt=1;const ns=30;let Pe;const Ct=Symbol(""),rs=Symbol("");class Ds{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Jc(this,r)}run(){if(!this.active)return this.fn();let e=Pe,n=pt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Pe,Pe=this,pt=!0,vt=1<<++gn,gn<=ns?Yc(this):_i(this),this.fn()}finally{gn<=ns&&Xc(this),vt=1<<--gn,Pe=this.parent,pt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pe===this?this.deferStop=!0:this.active&&(_i(this),this.onStop&&this.onStop(),this.active=!1)}}function _i(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let pt=!0;const Fo=[];function on(){Fo.push(pt),pt=!1}function an(){const t=Fo.pop();pt=t===void 0?!0:t}function Re(t,e,n){if(pt&&Pe){let r=ts.get(t);r||ts.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ms()),$o(s)}}function $o(t,e){let n=!1;gn<=ns?Uo(t)||(t.n|=vt,n=!Lo(t)):n=!t.has(Pe),n&&(t.add(Pe),Pe.deps.push(t))}function Qe(t,e,n,r,s,i){const o=ts.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?Ps(n)&&a.push(o.get("length")):(a.push(o.get(Ct)),Gt(t)&&a.push(o.get(rs)));break;case"delete":F(t)||(a.push(o.get(Ct)),Gt(t)&&a.push(o.get(rs)));break;case"set":Gt(t)&&a.push(o.get(Ct));break}if(a.length===1)a[0]&&ss(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ss(Ms(c))}}function ss(t,e){for(const n of F(t)?t:[...t])(n!==Pe||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Qc=Ss("__proto__,__v_isRef,__isVue"),Bo=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Os)),Zc=Ns(),el=Ns(!1,!0),tl=Ns(!0),vi=nl();function nl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)Re(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){on();const r=K(this)[e].apply(this,n);return an(),r}}),t}function Ns(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?vl:zo:e?Vo:Wo).get(r))return r;const o=F(r);if(!t&&o&&W(vi,s))return Reflect.get(vi,s,i);const a=Reflect.get(r,s,i);return(Os(s)?Bo.has(s):Qc(s))||(t||Re(r,"get",s),e)?a:me(a)?!o||!Ps(s)?a.value:a:ce(a)?t?qo(a):Un(a):a}}const rl=Ho(),sl=Ho(!0);function Ho(t=!1){return function(n,r,s,i){let o=n[r];if(Sn(o)&&me(o)&&!me(s))return!1;if(!t&&!Sn(s)&&(Ko(s)||(s=K(s),o=K(o)),!F(n)&&me(o)&&!me(s)))return o.value=s,!0;const a=F(n)&&Ps(r)?Number(r)<n.length:W(n,r),c=Reflect.set(n,r,s,i);return n===K(i)&&(a?Rn(s,o)&&Qe(n,"set",r,s):Qe(n,"add",r,s)),c}}function il(t,e){const n=W(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Qe(t,"delete",e,void 0),r}function ol(t,e){const n=Reflect.has(t,e);return(!Os(e)||!Bo.has(e))&&Re(t,"has",e),n}function al(t){return Re(t,"iterate",F(t)?"length":Ct),Reflect.ownKeys(t)}const jo={get:Zc,set:rl,deleteProperty:il,has:ol,ownKeys:al},cl={get:tl,set(t,e){return!0},deleteProperty(t,e){return!0}},ll=ye({},jo,{get:el,set:sl}),xs=t=>t,Tr=t=>Reflect.getPrototypeOf(t);function zn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);e!==i&&!n&&Re(s,"get",e),!n&&Re(s,"get",i);const{has:o}=Tr(s),a=r?xs:n?Fs:An;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function qn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return t!==s&&!e&&Re(r,"has",t),!e&&Re(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Kn(t,e=!1){return t=t.__v_raw,!e&&Re(K(t),"iterate",Ct),Reflect.get(t,"size",t)}function yi(t){t=K(t);const e=K(this);return Tr(e).has.call(e,t)||(e.add(t),Qe(e,"add",t,t)),this}function bi(t,e){e=K(e);const n=K(this),{has:r,get:s}=Tr(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Rn(e,o)&&Qe(n,"set",t,e):Qe(n,"add",t,e),this}function wi(t){const e=K(this),{has:n,get:r}=Tr(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Qe(e,"delete",t,void 0),i}function Ii(){const t=K(this),e=t.size!==0,n=t.clear();return e&&Qe(t,"clear",void 0,void 0),n}function Gn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?xs:t?Fs:An;return!t&&Re(a,"iterate",Ct),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function Jn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Gt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?xs:e?Fs:An;return!e&&Re(i,"iterate",c?rs:Ct),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function nt(t){return function(...e){return t==="delete"?!1:this}}function ul(){const t={get(i){return zn(this,i)},get size(){return Kn(this)},has:qn,add:yi,set:bi,delete:wi,clear:Ii,forEach:Gn(!1,!1)},e={get(i){return zn(this,i,!1,!0)},get size(){return Kn(this)},has:qn,add:yi,set:bi,delete:wi,clear:Ii,forEach:Gn(!1,!0)},n={get(i){return zn(this,i,!0)},get size(){return Kn(this,!0)},has(i){return qn.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:Gn(!0,!1)},r={get(i){return zn(this,i,!0,!0)},get size(){return Kn(this,!0)},has(i){return qn.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:Gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Jn(i,!1,!1),n[i]=Jn(i,!0,!1),e[i]=Jn(i,!1,!0),r[i]=Jn(i,!0,!0)}),[t,n,e,r]}const[fl,dl,hl,pl]=ul();function Ls(t,e){const n=e?t?pl:hl:t?dl:fl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const gl={get:Ls(!1,!1)},ml={get:Ls(!1,!0)},_l={get:Ls(!0,!1)},Wo=new WeakMap,Vo=new WeakMap,zo=new WeakMap,vl=new WeakMap;function yl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bl(t){return t.__v_skip||!Object.isExtensible(t)?0:yl(Vc(t))}function Un(t){return Sn(t)?t:Us(t,!1,jo,gl,Wo)}function wl(t){return Us(t,!1,ll,ml,Vo)}function qo(t){return Us(t,!0,cl,_l,zo)}function Us(t,e,n,r,s){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=bl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Jt(t){return Sn(t)?Jt(t.__v_raw):!!(t&&t.__v_isReactive)}function Sn(t){return!!(t&&t.__v_isReadonly)}function Ko(t){return!!(t&&t.__v_isShallow)}function Go(t){return Jt(t)||Sn(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Jo(t){return ir(t,"__v_skip",!0),t}const An=t=>ce(t)?Un(t):t,Fs=t=>ce(t)?qo(t):t;function Yo(t){pt&&Pe&&(t=K(t),$o(t.dep||(t.dep=Ms())))}function Xo(t,e){t=K(t),t.dep&&ss(t.dep)}function me(t){return!!(t&&t.__v_isRef===!0)}function Il(t){return Qo(t,!1)}function El(t){return Qo(t,!0)}function Qo(t,e){return me(t)?t:new Tl(t,e)}class Tl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:An(e)}get value(){return Yo(this),this._value}set value(e){e=this.__v_isShallow?e:K(e),Rn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:An(e),Xo(this))}}function ue(t){return me(t)?t.value:t}const Rl={get:(t,e,n)=>ue(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Zo(t){return Jt(t)?t:new Proxy(t,Rl)}class Sl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ds(e,()=>{this._dirty||(this._dirty=!0,Xo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return Yo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Al(t,e,n=!1){let r,s;const i=B(t);return i?(r=t,s=De):(r=t.get,s=t.set),new Sl(r,s,i||!s,n)}function gt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Rr(i,e,n)}return s}function Ne(t,e,n,r){if(B(t)){const i=gt(t,e,n,r);return i&&Do(i)&&i.catch(o=>{Rr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ne(t[i],e,n,r));return s}function Rr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){gt(c,null,10,[t,o,a]);return}}Cl(t,n,s,r)}function Cl(t,e,n,r=!0){console.error(t)}let ar=!1,is=!1;const Te=[];let Ge=0;const yn=[];let mn=null,jt=0;const bn=[];let ot=null,Wt=0;const ea=Promise.resolve();let $s=null,os=null;function ta(t){const e=$s||ea;return t?e.then(this?t.bind(this):t):e}function kl(t){let e=Ge+1,n=Te.length;for(;e<n;){const r=e+n>>>1;Cn(Te[r])<t?e=r+1:n=r}return e}function na(t){(!Te.length||!Te.includes(t,ar&&t.allowRecurse?Ge+1:Ge))&&t!==os&&(t.id==null?Te.push(t):Te.splice(kl(t.id),0,t),ra())}function ra(){!ar&&!is&&(is=!0,$s=ea.then(oa))}function Ol(t){const e=Te.indexOf(t);e>Ge&&Te.splice(e,1)}function sa(t,e,n,r){F(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),ra()}function Pl(t){sa(t,mn,yn,jt)}function Ml(t){sa(t,ot,bn,Wt)}function Bs(t,e=null){if(yn.length){for(os=e,mn=[...new Set(yn)],yn.length=0,jt=0;jt<mn.length;jt++)mn[jt]();mn=null,jt=0,os=null,Bs(t,e)}}function ia(t){if(bn.length){const e=[...new Set(bn)];if(bn.length=0,ot){ot.push(...e);return}for(ot=e,ot.sort((n,r)=>Cn(n)-Cn(r)),Wt=0;Wt<ot.length;Wt++)ot[Wt]();ot=null,Wt=0}}const Cn=t=>t.id==null?1/0:t.id;function oa(t){is=!1,ar=!0,Bs(t),Te.sort((n,r)=>Cn(n)-Cn(r));const e=De;try{for(Ge=0;Ge<Te.length;Ge++){const n=Te[Ge];n&&n.active!==!1&&gt(n,null,14)}}finally{Ge=0,Te.length=0,ia(),ar=!1,$s=null,(Te.length||yn.length||bn.length)&&oa(t)}}function Dl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Z;p?s=n.map(b=>b.trim()):h&&(s=n.map(or))}let a,c=r[a=$r(e)]||r[a=$r(ze(e))];!c&&i&&(c=r[a=$r(sn(e))]),c&&Ne(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ne(l,t,6,s)}}function aa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const f=aa(l,e,!0);f&&(a=!0,ye(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):ye(o,i),r.set(t,o),o)}function Sr(t,e){return!t||!br(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,sn(e))||W(t,e))}let Me=null,Ar=null;function cr(t){const e=Me;return Me=t,Ar=t&&t.type.__scopeId||null,e}function Hs(t){Ar=t}function js(){Ar=null}function ht(t,e=Me,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Mi(-1);const i=cr(e),o=t(...s);return cr(i),r._d&&Mi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Br(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:b,ctx:S,inheritAttrs:U}=t;let C,O;const $=cr(t);try{if(n.shapeFlag&4){const q=s||r;C=He(f.call(q,q,h,i,b,p,S)),O=c}else{const q=e;C=He(q.length>1?q(i,{attrs:c,slots:a,emit:l}):q(i,null)),O=e.props?c:Nl(c)}}catch(q){wn.length=0,Rr(q,t,1),C=re(Mt)}let z=C;if(O&&U!==!1){const q=Object.keys(O),{shapeFlag:de}=z;q.length&&de&7&&(o&&q.some(Cs)&&(O=xl(O,o)),z=kn(z,O))}return n.dirs&&(z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),C=z,cr($),C}const Nl=t=>{let e;for(const n in t)(n==="class"||n==="style"||br(n))&&((e||(e={}))[n]=t[n]);return e},xl=(t,e)=>{const n={};for(const r in t)(!Cs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ll(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ei(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Sr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ei(r,o,l):!0:!!o;return!1}function Ei(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Sr(n,i))return!0}return!1}function Ul({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Fl=t=>t.__isSuspense;function $l(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Ml(t)}function Qn(t,e){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[t]=e}}function mt(t,e,n=!1){const r=ge||Me;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r.proxy):e}}const Ti={};function Zn(t,e,n){return ca(t,e,n)}function ca(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Z){const a=ge;let c,l=!1,f=!1;if(me(t)?(c=()=>t.value,l=Ko(t)):Jt(t)?(c=()=>t,r=!0):F(t)?(f=!0,l=t.some(Jt),c=()=>t.map(O=>{if(me(O))return O.value;if(Jt(O))return St(O);if(B(O))return gt(O,a,2)})):B(t)?e?c=()=>gt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ne(t,a,3,[p])}:c=De,e&&r){const O=c;c=()=>St(O())}let h,p=O=>{h=C.onStop=()=>{gt(O,a,4)}};if(Pn)return p=De,e?n&&Ne(e,a,3,[c(),f?[]:void 0,p]):c(),De;let b=f?[]:Ti;const S=()=>{if(!!C.active)if(e){const O=C.run();(r||l||(f?O.some(($,z)=>Rn($,b[z])):Rn(O,b)))&&(h&&h(),Ne(e,a,3,[O,b===Ti?void 0:b,p]),b=O)}else C.run()};S.allowRecurse=!!e;let U;s==="sync"?U=S:s==="post"?U=()=>we(S,a&&a.suspense):U=()=>{!a||a.isMounted?Pl(S):S()};const C=new Ds(c,U);return e?n?S():b=C.run():s==="post"?we(C.run.bind(C),a&&a.suspense):C.run(),()=>{C.stop(),a&&a.scope&&ks(a.scope.effects,C)}}function Bl(t,e,n){const r=this.proxy,s=fe(t)?t.includes(".")?la(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=ge;Zt(this);const a=ca(s,i.bind(r),n);return o?Zt(o):Ot(),a}function la(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function St(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),me(t))St(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)St(t[n],e);else if(Mo(t)||Gt(t))t.forEach(n=>{St(n,e)});else if(xo(t))for(const n in t)St(t[n],e);return t}function ua(t){return B(t)?{setup:t,name:t.name}:t}const as=t=>!!t.type.__asyncLoader,fa=t=>t.type.__isKeepAlive;function Hl(t,e){da(t,"a",e)}function jl(t,e){da(t,"da",e)}function da(t,e,n=ge){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Cr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)fa(s.parent.vnode)&&Wl(r,e,n,s),s=s.parent}}function Wl(t,e,n,r){const s=Cr(e,t,r,!0);ha(()=>{ks(r[e],s)},n)}function Cr(t,e,n=ge,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;on(),Zt(n);const a=Ne(e,n,t,o);return Ot(),an(),a});return r?s.unshift(i):s.push(i),i}}const et=t=>(e,n=ge)=>(!Pn||t==="sp")&&Cr(t,e,n),Vl=et("bm"),zl=et("m"),ql=et("bu"),Kl=et("u"),Gl=et("bum"),ha=et("um"),Jl=et("sp"),Yl=et("rtg"),Xl=et("rtc");function Ql(t,e=ge){Cr("ec",t,e)}let cs=!0;function Zl(t){const e=ga(t),n=t.proxy,r=t.ctx;cs=!1,e.beforeCreate&&Ri(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:b,updated:S,activated:U,deactivated:C,beforeDestroy:O,beforeUnmount:$,destroyed:z,unmounted:q,render:de,renderTracked:he,renderTriggered:Se,errorCaptured:tt,serverPrefetch:be,expose:Le,inheritAttrs:qe,components:ke,directives:Lt,filters:Ut}=e;if(l&&eu(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ee in o){const J=o[ee];B(J)&&(r[ee]=J.bind(n))}if(s){const ee=s.call(n,n);ce(ee)&&(t.data=Un(ee))}if(cs=!0,i)for(const ee in i){const J=i[ee],Ie=B(J)?J.bind(n,n):B(J.get)?J.get.bind(n,n):De,$t=!B(J)&&B(J.set)?J.set.bind(n):De,Ke=je({get:Ie,set:$t});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Ue=>Ke.value=Ue})}if(a)for(const ee in a)pa(a[ee],r,n,ee);if(c){const ee=B(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(J=>{Qn(J,ee[J])})}f&&Ri(f,t,"c");function ae(ee,J){F(J)?J.forEach(Ie=>ee(Ie.bind(n))):J&&ee(J.bind(n))}if(ae(Vl,h),ae(zl,p),ae(ql,b),ae(Kl,S),ae(Hl,U),ae(jl,C),ae(Ql,tt),ae(Xl,he),ae(Yl,Se),ae(Gl,$),ae(ha,q),ae(Jl,be),F(Le))if(Le.length){const ee=t.exposed||(t.exposed={});Le.forEach(J=>{Object.defineProperty(ee,J,{get:()=>n[J],set:Ie=>n[J]=Ie})})}else t.exposed||(t.exposed={});de&&t.render===De&&(t.render=de),qe!=null&&(t.inheritAttrs=qe),ke&&(t.components=ke),Lt&&(t.directives=Lt)}function eu(t,e,n=De,r=!1){F(t)&&(t=ls(t));for(const s in t){const i=t[s];let o;ce(i)?"default"in i?o=mt(i.from||s,i.default,!0):o=mt(i.from||s):o=mt(i),me(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ri(t,e,n){Ne(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function pa(t,e,n,r){const s=r.includes(".")?la(n,r):()=>n[r];if(fe(t)){const i=e[t];B(i)&&Zn(s,i)}else if(B(t))Zn(s,t.bind(n));else if(ce(t))if(F(t))t.forEach(i=>pa(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&Zn(s,i,t)}}function ga(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>lr(c,l,o,!0)),lr(c,e,o)),i.set(e,c),c}function lr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&lr(t,i,n,!0),s&&s.forEach(o=>lr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=tu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const tu={data:Si,props:Et,emits:Et,methods:Et,computed:Et,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:Et,directives:Et,watch:ru,provide:Si,inject:nu};function Si(t,e){return e?t?function(){return ye(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function nu(t,e){return Et(ls(t),ls(e))}function ls(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ve(t,e){return t?[...new Set([].concat(t,e))]:e}function Et(t,e){return t?ye(ye(Object.create(null),t),e):e}function ru(t,e){if(!t)return e;if(!e)return t;const n=ye(Object.create(null),t);for(const r in e)n[r]=ve(t[r],e[r]);return n}function su(t,e,n,r=!1){const s={},i={};ir(i,kr,1),t.propsDefaults=Object.create(null),ma(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:wl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function iu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Sr(t.emitsOptions,p))continue;const b=e[p];if(c)if(W(i,p))b!==i[p]&&(i[p]=b,l=!0);else{const S=ze(p);s[S]=us(c,a,S,b,t,!1)}else b!==i[p]&&(i[p]=b,l=!0)}}}else{ma(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!W(e,h)&&((f=sn(h))===h||!W(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=us(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!W(e,h)&&!0)&&(delete i[h],l=!0)}l&&Qe(t,"set","$attrs")}function ma(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Yn(c))continue;const l=e[c];let f;s&&W(s,f=ze(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Sr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=K(n),l=a||Z;for(let f=0;f<i.length;f++){const h=i[f];n[h]=us(s,c,h,l[h],t,!W(l,h))}}return o}function us(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=W(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&B(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Zt(s),r=l[n]=c.call(null,e),Ot())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===sn(n))&&(r=!0))}return r}function _a(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const f=h=>{c=!0;const[p,b]=_a(h,e,!0);ye(o,p),b&&a.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return r.set(t,Kt),Kt;if(F(i))for(let f=0;f<i.length;f++){const h=ze(i[f]);Ai(h)&&(o[h]=Z)}else if(i)for(const f in i){const h=ze(f);if(Ai(h)){const p=i[f],b=o[h]=F(p)||B(p)?{type:p}:p;if(b){const S=Oi(Boolean,b.type),U=Oi(String,b.type);b[0]=S>-1,b[1]=U<0||S<U,(S>-1||W(b,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Ai(t){return t[0]!=="$"}function Ci(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ki(t,e){return Ci(t)===Ci(e)}function Oi(t,e){return F(e)?e.findIndex(n=>ki(n,t)):B(e)&&ki(e,t)?0:-1}const va=t=>t[0]==="_"||t==="$stable",Ws=t=>F(t)?t.map(He):[He(t)],ou=(t,e,n)=>{const r=ht((...s)=>Ws(e(...s)),n);return r._c=!1,r},ya=(t,e,n)=>{const r=t._ctx;for(const s in t){if(va(s))continue;const i=t[s];if(B(i))e[s]=ou(s,i,r);else if(i!=null){const o=Ws(i);e[s]=()=>o}}},ba=(t,e)=>{const n=Ws(e);t.slots.default=()=>n},au=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),ir(e,"_",n)):ya(e,t.slots={})}else t.slots={},e&&ba(t,e);ir(t.slots,kr,1)},cu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ye(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ya(e,s)),o=e}else e&&(ba(t,e),o={default:1});if(i)for(const a in s)!va(a)&&!(a in o)&&delete s[a]};function lu(t,e){const n=Me;if(n===null)return t;const r=Pr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Z]=e[i];B(o)&&(o={mounted:o,updated:o}),o.deep&&St(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function wt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(on(),Ne(c,n,8,[t.el,a,t,e]),an())}}function wa(){return{app:null,config:{isNativeTag:Hc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uu=0;function fu(t,e){return function(r,s=null){B(r)||(r=Object.assign({},r)),s!=null&&!ce(s)&&(s=null);const i=wa(),o=new Set;let a=!1;const c=i.app={_uid:uu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Du,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(c,...f)):B(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=re(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Pr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function fs(t,e,n,r,s=!1){if(F(t)){t.forEach((p,b)=>fs(p,e&&(F(e)?e[b]:e),n,r,s));return}if(as(r)&&!s)return;const i=r.shapeFlag&4?Pr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===Z?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(fe(l)?(f[l]=null,W(h,l)&&(h[l]=null)):me(l)&&(l.value=null)),B(c))gt(c,a,12,[o,f]);else{const p=fe(c),b=me(c);if(p||b){const S=()=>{if(t.f){const U=p?f[c]:c.value;s?F(U)&&ks(U,i):F(U)?U.includes(i)||U.push(i):p?(f[c]=[i],W(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,W(h,c)&&(h[c]=o)):me(c)&&(c.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,we(S,n)):S()}}}const we=$l;function du(t){return hu(t)}function hu(t,e){const n=Kc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:b=De,cloneNode:S,insertStaticContent:U}=t,C=(u,d,g,v=null,_=null,I=null,R=!1,w=null,E=!!d.dynamicChildren)=>{if(u===d)return;u&&!hn(u,d)&&(v=P(u),Ae(u,_,I,!0),u=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:y,ref:M,shapeFlag:A}=d;switch(y){case Vs:O(u,d,g,v);break;case Mt:$(u,d,g,v);break;case Hr:u==null&&z(d,g,v,R);break;case le:Lt(u,d,g,v,_,I,R,w,E);break;default:A&1?he(u,d,g,v,_,I,R,w,E):A&6?Ut(u,d,g,v,_,I,R,w,E):(A&64||A&128)&&y.process(u,d,g,v,_,I,R,w,E,te)}M!=null&&_&&fs(M,u&&u.ref,I,d||u,!d)},O=(u,d,g,v)=>{if(u==null)r(d.el=a(d.children),g,v);else{const _=d.el=u.el;d.children!==u.children&&l(_,d.children)}},$=(u,d,g,v)=>{u==null?r(d.el=c(d.children||""),g,v):d.el=u.el},z=(u,d,g,v)=>{[u.el,u.anchor]=U(u.children,d,g,v,u.el,u.anchor)},q=({el:u,anchor:d},g,v)=>{let _;for(;u&&u!==d;)_=p(u),r(u,g,v),u=_;r(d,g,v)},de=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},he=(u,d,g,v,_,I,R,w,E)=>{R=R||d.type==="svg",u==null?Se(d,g,v,_,I,R,w,E):Le(u,d,_,I,R,w,E)},Se=(u,d,g,v,_,I,R,w)=>{let E,y;const{type:M,props:A,shapeFlag:D,transition:L,patchFlag:V,dirs:oe}=u;if(u.el&&S!==void 0&&V===-1)E=u.el=S(u.el);else{if(E=u.el=o(u.type,I,A&&A.is,A),D&8?f(E,u.children):D&16&&be(u.children,E,null,v,_,I&&M!=="foreignObject",R,w),oe&&wt(u,null,v,"created"),A){for(const se in A)se!=="value"&&!Yn(se)&&i(E,se,null,A[se],I,u.children,v,_,T);"value"in A&&i(E,"value",null,A.value),(y=A.onVnodeBeforeMount)&&$e(y,v,u)}tt(E,u,u.scopeId,R,v)}oe&&wt(u,null,v,"beforeMount");const X=(!_||_&&!_.pendingBranch)&&L&&!L.persisted;X&&L.beforeEnter(E),r(E,d,g),((y=A&&A.onVnodeMounted)||X||oe)&&we(()=>{y&&$e(y,v,u),X&&L.enter(E),oe&&wt(u,null,v,"mounted")},_)},tt=(u,d,g,v,_)=>{if(g&&b(u,g),v)for(let I=0;I<v.length;I++)b(u,v[I]);if(_){let I=_.subTree;if(d===I){const R=_.vnode;tt(u,R,R.scopeId,R.slotScopeIds,_.parent)}}},be=(u,d,g,v,_,I,R,w,E=0)=>{for(let y=E;y<u.length;y++){const M=u[y]=w?at(u[y]):He(u[y]);C(null,M,d,g,v,_,I,R,w)}},Le=(u,d,g,v,_,I,R)=>{const w=d.el=u.el;let{patchFlag:E,dynamicChildren:y,dirs:M}=d;E|=u.patchFlag&16;const A=u.props||Z,D=d.props||Z;let L;g&&It(g,!1),(L=D.onVnodeBeforeUpdate)&&$e(L,g,d,u),M&&wt(d,u,g,"beforeUpdate"),g&&It(g,!0);const V=_&&d.type!=="foreignObject";if(y?qe(u.dynamicChildren,y,w,g,v,V,I):R||Ie(u,d,w,null,g,v,V,I,!1),E>0){if(E&16)ke(w,d,A,D,g,v,_);else if(E&2&&A.class!==D.class&&i(w,"class",null,D.class,_),E&4&&i(w,"style",A.style,D.style,_),E&8){const oe=d.dynamicProps;for(let X=0;X<oe.length;X++){const se=oe[X],Oe=A[se],Bt=D[se];(Bt!==Oe||se==="value")&&i(w,se,Oe,Bt,_,u.children,g,v,T)}}E&1&&u.children!==d.children&&f(w,d.children)}else!R&&y==null&&ke(w,d,A,D,g,v,_);((L=D.onVnodeUpdated)||M)&&we(()=>{L&&$e(L,g,d,u),M&&wt(d,u,g,"updated")},v)},qe=(u,d,g,v,_,I,R)=>{for(let w=0;w<d.length;w++){const E=u[w],y=d[w],M=E.el&&(E.type===le||!hn(E,y)||E.shapeFlag&70)?h(E.el):g;C(E,y,M,null,v,_,I,R,!0)}},ke=(u,d,g,v,_,I,R)=>{if(g!==v){for(const w in v){if(Yn(w))continue;const E=v[w],y=g[w];E!==y&&w!=="value"&&i(u,w,y,E,R,d.children,_,I,T)}if(g!==Z)for(const w in g)!Yn(w)&&!(w in v)&&i(u,w,g[w],null,R,d.children,_,I,T);"value"in v&&i(u,"value",g.value,v.value)}},Lt=(u,d,g,v,_,I,R,w,E)=>{const y=d.el=u?u.el:a(""),M=d.anchor=u?u.anchor:a("");let{patchFlag:A,dynamicChildren:D,slotScopeIds:L}=d;L&&(w=w?w.concat(L):L),u==null?(r(y,g,v),r(M,g,v),be(d.children,g,M,_,I,R,w,E)):A>0&&A&64&&D&&u.dynamicChildren?(qe(u.dynamicChildren,D,g,_,I,R,w),(d.key!=null||_&&d===_.subTree)&&Ia(u,d,!0)):Ie(u,d,g,M,_,I,R,w,E)},Ut=(u,d,g,v,_,I,R,w,E)=>{d.slotScopeIds=w,u==null?d.shapeFlag&512?_.ctx.activate(d,g,v,R,E):Ft(d,g,v,_,I,R,E):ae(u,d,E)},Ft=(u,d,g,v,_,I,R)=>{const w=u.component=Su(u,v,_);if(fa(u)&&(w.ctx.renderer=te),Au(w),w.asyncDep){if(_&&_.registerDep(w,ee),!u.el){const E=w.subTree=re(Mt);$(null,E,d,g)}return}ee(w,u,d,g,_,I,R)},ae=(u,d,g)=>{const v=d.component=u.component;if(Ll(u,d,g))if(v.asyncDep&&!v.asyncResolved){J(v,d,g);return}else v.next=d,Ol(v.update),v.update();else d.component=u.component,d.el=u.el,v.vnode=d},ee=(u,d,g,v,_,I,R)=>{const w=()=>{if(u.isMounted){let{next:M,bu:A,u:D,parent:L,vnode:V}=u,oe=M,X;It(u,!1),M?(M.el=V.el,J(u,M,R)):M=V,A&&Xn(A),(X=M.props&&M.props.onVnodeBeforeUpdate)&&$e(X,L,M,V),It(u,!0);const se=Br(u),Oe=u.subTree;u.subTree=se,C(Oe,se,h(Oe.el),P(Oe),u,_,I),M.el=se.el,oe===null&&Ul(u,se.el),D&&we(D,_),(X=M.props&&M.props.onVnodeUpdated)&&we(()=>$e(X,L,M,V),_)}else{let M;const{el:A,props:D}=d,{bm:L,m:V,parent:oe}=u,X=as(d);if(It(u,!1),L&&Xn(L),!X&&(M=D&&D.onVnodeBeforeMount)&&$e(M,oe,d),It(u,!0),A&&H){const se=()=>{u.subTree=Br(u),H(A,u.subTree,u,_,null)};X?d.type.__asyncLoader().then(()=>!u.isUnmounted&&se()):se()}else{const se=u.subTree=Br(u);C(null,se,g,v,u,_,I),d.el=se.el}if(V&&we(V,_),!X&&(M=D&&D.onVnodeMounted)){const se=d;we(()=>$e(M,oe,se),_)}d.shapeFlag&256&&u.a&&we(u.a,_),u.isMounted=!0,d=g=v=null}},E=u.effect=new Ds(w,()=>na(u.update),u.scope),y=u.update=E.run.bind(E);y.id=u.uid,It(u,!0),y()},J=(u,d,g)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,iu(u,d.props,v,g),cu(u,d.children,g),on(),Bs(void 0,u.update),an()},Ie=(u,d,g,v,_,I,R,w,E=!1)=>{const y=u&&u.children,M=u?u.shapeFlag:0,A=d.children,{patchFlag:D,shapeFlag:L}=d;if(D>0){if(D&128){Ke(y,A,g,v,_,I,R,w,E);return}else if(D&256){$t(y,A,g,v,_,I,R,w,E);return}}L&8?(M&16&&T(y,_,I),A!==y&&f(g,A)):M&16?L&16?Ke(y,A,g,v,_,I,R,w,E):T(y,_,I,!0):(M&8&&f(g,""),L&16&&be(A,g,v,_,I,R,w,E))},$t=(u,d,g,v,_,I,R,w,E)=>{u=u||Kt,d=d||Kt;const y=u.length,M=d.length,A=Math.min(y,M);let D;for(D=0;D<A;D++){const L=d[D]=E?at(d[D]):He(d[D]);C(u[D],L,g,null,_,I,R,w,E)}y>M?T(u,_,I,!0,!1,A):be(d,g,v,_,I,R,w,E,A)},Ke=(u,d,g,v,_,I,R,w,E)=>{let y=0;const M=d.length;let A=u.length-1,D=M-1;for(;y<=A&&y<=D;){const L=u[y],V=d[y]=E?at(d[y]):He(d[y]);if(hn(L,V))C(L,V,g,null,_,I,R,w,E);else break;y++}for(;y<=A&&y<=D;){const L=u[A],V=d[D]=E?at(d[D]):He(d[D]);if(hn(L,V))C(L,V,g,null,_,I,R,w,E);else break;A--,D--}if(y>A){if(y<=D){const L=D+1,V=L<M?d[L].el:v;for(;y<=D;)C(null,d[y]=E?at(d[y]):He(d[y]),g,V,_,I,R,w,E),y++}}else if(y>D)for(;y<=A;)Ae(u[y],_,I,!0),y++;else{const L=y,V=y,oe=new Map;for(y=V;y<=D;y++){const Ee=d[y]=E?at(d[y]):He(d[y]);Ee.key!=null&&oe.set(Ee.key,y)}let X,se=0;const Oe=D-V+1;let Bt=!1,li=0;const dn=new Array(Oe);for(y=0;y<Oe;y++)dn[y]=0;for(y=L;y<=A;y++){const Ee=u[y];if(se>=Oe){Ae(Ee,_,I,!0);continue}let Fe;if(Ee.key!=null)Fe=oe.get(Ee.key);else for(X=V;X<=D;X++)if(dn[X-V]===0&&hn(Ee,d[X])){Fe=X;break}Fe===void 0?Ae(Ee,_,I,!0):(dn[Fe-V]=y+1,Fe>=li?li=Fe:Bt=!0,C(Ee,d[Fe],g,null,_,I,R,w,E),se++)}const ui=Bt?pu(dn):Kt;for(X=ui.length-1,y=Oe-1;y>=0;y--){const Ee=V+y,Fe=d[Ee],fi=Ee+1<M?d[Ee+1].el:v;dn[y]===0?C(null,Fe,g,fi,_,I,R,w,E):Bt&&(X<0||y!==ui[X]?Ue(Fe,g,fi,2):X--)}}},Ue=(u,d,g,v,_=null)=>{const{el:I,type:R,transition:w,children:E,shapeFlag:y}=u;if(y&6){Ue(u.component.subTree,d,g,v);return}if(y&128){u.suspense.move(d,g,v);return}if(y&64){R.move(u,d,g,te);return}if(R===le){r(I,d,g);for(let A=0;A<E.length;A++)Ue(E[A],d,g,v);r(u.anchor,d,g);return}if(R===Hr){q(u,d,g);return}if(v!==2&&y&1&&w)if(v===0)w.beforeEnter(I),r(I,d,g),we(()=>w.enter(I),_);else{const{leave:A,delayLeave:D,afterLeave:L}=w,V=()=>r(I,d,g),oe=()=>{A(I,()=>{V(),L&&L()})};D?D(I,V,oe):oe()}else r(I,d,g)},Ae=(u,d,g,v=!1,_=!1)=>{const{type:I,props:R,ref:w,children:E,dynamicChildren:y,shapeFlag:M,patchFlag:A,dirs:D}=u;if(w!=null&&fs(w,null,g,u,!0),M&256){d.ctx.deactivate(u);return}const L=M&1&&D,V=!as(u);let oe;if(V&&(oe=R&&R.onVnodeBeforeUnmount)&&$e(oe,d,u),M&6)k(u.component,g,v);else{if(M&128){u.suspense.unmount(g,v);return}L&&wt(u,null,d,"beforeUnmount"),M&64?u.type.remove(u,d,g,_,te,v):y&&(I!==le||A>0&&A&64)?T(y,d,g,!1,!0):(I===le&&A&384||!_&&M&16)&&T(E,d,g),v&&Fr(u)}(V&&(oe=R&&R.onVnodeUnmounted)||L)&&we(()=>{oe&&$e(oe,d,u),L&&wt(u,null,d,"unmounted")},g)},Fr=u=>{const{type:d,el:g,anchor:v,transition:_}=u;if(d===le){m(g,v);return}if(d===Hr){de(u);return}const I=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:w}=_,E=()=>R(g,I);w?w(u.el,I,E):E()}else I()},m=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},k=(u,d,g)=>{const{bum:v,scope:_,update:I,subTree:R,um:w}=u;v&&Xn(v),_.stop(),I&&(I.active=!1,Ae(R,u,d,g)),w&&we(w,d),we(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,g,v=!1,_=!1,I=0)=>{for(let R=I;R<u.length;R++)Ae(u[R],d,g,v,_)},P=u=>u.shapeFlag&6?P(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),Y=(u,d,g)=>{u==null?d._vnode&&Ae(d._vnode,null,null,!0):C(d._vnode||null,u,d,null,null,null,g),ia(),d._vnode=u},te={p:C,um:Ae,m:Ue,r:Fr,mt:Ft,mc:be,pc:Ie,pbc:qe,n:P,o:t};let j,H;return e&&([j,H]=e(te)),{render:Y,hydrate:j,createApp:fu(Y,j)}}function It({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ia(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=at(s[i]),a.el=o.el),n||Ia(o,a))}}function pu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const gu=t=>t.__isTeleport,Ea="components";function mu(t,e){return vu(Ea,t,!0,e)||t}const _u=Symbol();function vu(t,e,n=!0,r=!1){const s=Me||ge;if(s){const i=s.type;if(t===Ea){const a=Pu(i);if(a&&(a===e||a===ze(e)||a===Er(ze(e))))return i}const o=Pi(s[t]||i[t],e)||Pi(s.appContext[t],e);return!o&&r?i:o}}function Pi(t,e){return t&&(t[e]||t[ze(e)]||t[Er(ze(e))])}const le=Symbol(void 0),Vs=Symbol(void 0),Mt=Symbol(void 0),Hr=Symbol(void 0),wn=[];let kt=null;function G(t=!1){wn.push(kt=t?null:[])}function yu(){wn.pop(),kt=wn[wn.length-1]||null}let ur=1;function Mi(t){ur+=t}function Ta(t){return t.dynamicChildren=ur>0?kt||Kt:null,yu(),ur>0&&kt&&kt.push(t),t}function ie(t,e,n,r,s,i){return Ta(N(t,e,n,r,s,i,!0))}function zs(t,e,n,r,s){return Ta(re(t,e,n,r,s,!0))}function ds(t){return t?t.__v_isVNode===!0:!1}function hn(t,e){return t.type===e.type&&t.key===e.key}const kr="__vInternal",Ra=({key:t})=>t!=null?t:null,er=({ref:t,ref_key:e,ref_for:n})=>t!=null?fe(t)||me(t)||B(t)?{i:Me,r:t,k:e,f:!!n}:t:null;function N(t,e=null,n=null,r=0,s=null,i=t===le?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ra(e),ref:e&&er(e),scopeId:Ar,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(qs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),ur>0&&!o&&kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&kt.push(c),c}const re=bu;function bu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===_u)&&(t=Mt),ds(t)){const a=kn(t,e,!0);return n&&qs(a,n),a}if(Mu(t)&&(t=t.__vccOpts),e){e=wu(e);let{class:a,style:c}=e;a&&!fe(a)&&(e.class=As(a)),ce(c)&&(Go(c)&&!F(c)&&(c=ye({},c)),e.style=yr(c))}const o=fe(t)?1:Fl(t)?128:gu(t)?64:ce(t)?4:B(t)?2:0;return N(t,e,n,r,s,o,i,!0)}function wu(t){return t?Go(t)||kr in t?ye({},t):t:null}function kn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Iu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ra(a),ref:e&&e.ref?n&&s?F(s)?s.concat(er(e)):[s,er(e)]:er(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kn(t.ssContent),ssFallback:t.ssFallback&&kn(t.ssFallback),el:t.el,anchor:t.anchor}}function Ce(t=" ",e=0){return re(Vs,null,t,e)}function Or(t="",e=!1){return e?(G(),zs(Mt,null,t)):re(Mt,null,t)}function He(t){return t==null||typeof t=="boolean"?re(Mt):F(t)?re(le,null,t.slice()):typeof t=="object"?at(t):re(Vs,null,String(t))}function at(t){return t.el===null||t.memo?t:kn(t)}function qs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),qs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(kr in e)?e._ctx=Me:s===3&&Me&&(Me.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Me},n=32):(e=String(e),r&64?(n=16,e=[Ce(e)]):n=8);t.children=e,t.shapeFlag|=n}function Iu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=As([e.class,r.class]));else if(s==="style")e.style=yr([e.style,r.style]);else if(br(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $e(t,e,n,r=null){Ne(t,e,7,[n,r])}function On(t,e,n,r){let s;const i=n&&n[r];if(F(t)||fe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ce(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const hs=t=>t?Sa(t)?Pr(t)||t.proxy:hs(t.parent):null,fr=ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hs(t.parent),$root:t=>hs(t.root),$emit:t=>t.emit,$options:t=>ga(t),$forceUpdate:t=>()=>na(t.update),$nextTick:t=>ta.bind(t.proxy),$watch:t=>Bl.bind(t)}),Eu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const b=o[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Z&&W(r,e))return o[e]=1,r[e];if(s!==Z&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==Z&&W(n,e))return o[e]=4,n[e];cs&&(o[e]=0)}}const f=fr[e];let h,p;if(f)return e==="$attrs"&&Re(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Z&&W(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Z&&W(s,e)?(s[e]=n,!0):r!==Z&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Z&&W(t,o)||e!==Z&&W(e,o)||(a=i[0])&&W(a,o)||W(r,o)||W(fr,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Tu=wa();let Ru=0;function Su(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Tu,i={uid:Ru++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_a(r,s),emitsOptions:aa(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Dl.bind(null,i),t.ce&&t.ce(i),i}let ge=null;const Zt=t=>{ge=t,t.scope.on()},Ot=()=>{ge&&ge.scope.off(),ge=null};function Sa(t){return t.vnode.shapeFlag&4}let Pn=!1;function Au(t,e=!1){Pn=e;const{props:n,children:r}=t.vnode,s=Sa(t);su(t,n,s,e),au(t,r);const i=s?Cu(t,e):void 0;return Pn=!1,i}function Cu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Jo(new Proxy(t.ctx,Eu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Ou(t):null;Zt(t),on();const i=gt(r,t,0,[t.props,s]);if(an(),Ot(),Do(i)){if(i.then(Ot,Ot),e)return i.then(o=>{Di(t,o,e)}).catch(o=>{Rr(o,t,0)});t.asyncDep=i}else Di(t,i,e)}else Aa(t,e)}function Di(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=Zo(e)),Aa(t,n)}let Ni;function Aa(t,e,n){const r=t.type;if(!t.render){if(!e&&Ni&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ye(ye({isCustomElement:i,delimiters:a},o),c);r.render=Ni(s,l)}}t.render=r.render||De}Zt(t),on(),Zl(t),an(),Ot()}function ku(t){return new Proxy(t.attrs,{get(e,n){return Re(t,"get","$attrs"),e[n]}})}function Ou(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=ku(t))},slots:t.slots,emit:t.emit,expose:e}}function Pr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zo(Jo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fr)return fr[n](t)}}))}function Pu(t){return B(t)&&t.displayName||t.name}function Mu(t){return B(t)&&"__vccOpts"in t}const je=(t,e)=>Al(t,e,Pn);function Ca(t,e,n){const r=arguments.length;return r===2?ce(e)&&!F(e)?ds(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ds(n)&&(n=[n]),re(t,e,n))}const Du="3.2.33",Nu="http://www.w3.org/2000/svg",Rt=typeof document!="undefined"?document:null,xi=Rt&&Rt.createElement("template"),xu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Rt.createElementNS(Nu,t):Rt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rt.createTextNode(t),createComment:t=>Rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{xi.innerHTML=r?`<svg>${t}</svg>`:t;const a=xi.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Lu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Uu(t,e,n){const r=t.style,s=fe(n);if(n&&!s){for(const i in n)ps(r,i,n[i]);if(e&&!fe(e))for(const i in e)n[i]==null&&ps(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Li=/\s*!important$/;function ps(t,e,n){if(F(n))n.forEach(r=>ps(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Fu(t,e);Li.test(n)?t.setProperty(sn(r),n.replace(Li,""),"important"):t[r]=n}}const Ui=["Webkit","Moz","ms"],jr={};function Fu(t,e){const n=jr[e];if(n)return n;let r=ze(e);if(r!=="filter"&&r in t)return jr[e]=r;r=Er(r);for(let s=0;s<Ui.length;s++){const i=Ui[s]+r;if(i in t)return jr[e]=i}return e}const Fi="http://www.w3.org/1999/xlink";function $u(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Fi,e.slice(6,e.length)):t.setAttributeNS(Fi,e,n);else{const i=Uc(e);n==null||i&&!Oo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Bu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Oo(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[ka,Hu]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let gs=0;const ju=Promise.resolve(),Wu=()=>{gs=0},Vu=()=>gs||(ju.then(Wu),gs=ka());function Vt(t,e,n,r){t.addEventListener(e,n,r)}function zu(t,e,n,r){t.removeEventListener(e,n,r)}function qu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Ku(e);if(r){const l=i[e]=Gu(r,s);Vt(t,a,l,c)}else o&&(zu(t,a,o,c),i[e]=void 0)}}const $i=/(?:Once|Passive|Capture)$/;function Ku(t){let e;if($i.test(t)){e={};let n;for(;n=t.match($i);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[sn(t.slice(2)),e]}function Gu(t,e){const n=r=>{const s=r.timeStamp||ka();(Hu||s>=n.attached-1)&&Ne(Ju(r,n.value),e,5,[r])};return n.value=t,n.attached=Vu(),n}function Ju(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Bi=/^on[a-z]/,Yu=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Lu(t,r,s):e==="style"?Uu(t,n,r):br(e)?Cs(e)||qu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xu(t,e,r,s))?Bu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$u(t,e,r,s))};function Xu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Bi.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Bi.test(e)&&fe(n)?!1:e in t}const Hi=t=>{const e=t.props["onUpdate:modelValue"];return F(e)?n=>Xn(e,n):e};function Qu(t){t.target.composing=!0}function ji(t){const e=t.target;e.composing&&(e.composing=!1,Zu(e,"input"))}function Zu(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const ef={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Hi(s);const i=r||s.props&&s.props.type==="number";Vt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=or(a)),t._assign(a)}),n&&Vt(t,"change",()=>{t.value=t.value.trim()}),e||(Vt(t,"compositionstart",Qu),Vt(t,"compositionend",ji),Vt(t,"change",ji))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Hi(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&or(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},tf=["ctrl","shift","alt","meta"],nf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>tf.some(n=>t[`${n}Key`]&&!e.includes(n))},I_=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=nf[e[s]];if(i&&i(n,e))return}return t(n,...r)},rf=ye({patchProp:Yu},xu);let Wi;function sf(){return Wi||(Wi=du(rf))}const of=(...t)=>{const e=sf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=af(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function af(t){return fe(t)?document.querySelector(t):t}var Vi="/assets/user.3ff37329.png";/**
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
 */const Oa=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,b=l&63;c||(b=64,o||(p=64)),r.push(n[f],n[h],n[p],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Oa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const b=a<<4&240|l>>2;if(r.push(b),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},lf=function(t){const e=Oa(t);return Pa.encodeByteArray(e,!0)},Ma=function(t){return lf(t).replace(/\./g,"")},uf=function(t){try{return Pa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class ff{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _e(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function df(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function hf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gf(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mf(){return typeof indexedDB=="object"}function _f(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const vf="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vf,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fn.prototype.create)}}class Fn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new cn(s,a,r)}}function yf(t,e){return t.replace(bf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bf=/\{\$([^}]+)}/g;function wf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(zi(i)&&zi(o)){if(!dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function zi(t){return t!==null&&typeof t=="object"}/**
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
 */function $n(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _n(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function vn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function If(t,e){const n=new Ef(t,e);return n.subscribe.bind(n)}class Ef{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Tf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wr),s.error===void 0&&(s.error=Wr),s.complete===void 0&&(s.complete=Wr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wr(){}/**
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
 */class Rf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ff;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Af(e))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tt){return this.instances.has(e)}getOptions(e=Tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tt){return this.component?this.component.multipleInstances?e:Tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sf(t){return t===Tt?void 0:t}function Af(t){return t.instantiationMode==="EAGER"}/**
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
 */class Cf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const kf={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Of=ne.INFO,Pf={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Mf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Pf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Da{constructor(e){this.name=e,this._logLevel=Of,this._logHandler=Mf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Df=(t,e)=>e.some(n=>t instanceof n);let qi,Ki;function Nf(){return qi||(qi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xf(){return Ki||(Ki=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Na=new WeakMap,ms=new WeakMap,xa=new WeakMap,Vr=new WeakMap,Ks=new WeakMap;function Lf(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_t(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Na.set(n,t)}).catch(()=>{}),Ks.set(e,t),e}function Uf(t){if(ms.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ms.set(t,e)}let _s={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ms.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _t(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ff(t){_s=t(_s)}function $f(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zr(this),e,...n);return xa.set(r,e.sort?e.sort():[e]),_t(r)}:xf().includes(t)?function(...e){return t.apply(zr(this),e),_t(Na.get(this))}:function(...e){return _t(t.apply(zr(this),e))}}function Bf(t){return typeof t=="function"?$f(t):(t instanceof IDBTransaction&&Uf(t),Df(t,Nf())?new Proxy(t,_s):t)}function _t(t){if(t instanceof IDBRequest)return Lf(t);if(Vr.has(t))return Vr.get(t);const e=Bf(t);return e!==t&&(Vr.set(t,e),Ks.set(e,t)),e}const zr=t=>Ks.get(t);function Hf(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_t(o);return r&&o.addEventListener("upgradeneeded",c=>{r(_t(o.result),c.oldVersion,c.newVersion,_t(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const jf=["get","getKey","getAll","getAllKeys","count"],Wf=["put","add","delete","clear"],qr=new Map;function Gi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qr.get(e))return qr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Wf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jf.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return qr.set(e,i),i}Ff(t=>gi(pi({},t),{get:(e,n,r)=>Gi(e,n)||t.get(e,n,r),has:(e,n)=>!!Gi(e,n)||t.has(e,n)}));/**
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
 */class Vf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vs="@firebase/app",Ji="0.7.24";/**
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
 */const Gs=new Da("@firebase/app"),qf="@firebase/app-compat",Kf="@firebase/analytics-compat",Gf="@firebase/analytics",Jf="@firebase/app-check-compat",Yf="@firebase/app-check",Xf="@firebase/auth",Qf="@firebase/auth-compat",Zf="@firebase/database",ed="@firebase/database-compat",td="@firebase/functions",nd="@firebase/functions-compat",rd="@firebase/installations",sd="@firebase/installations-compat",id="@firebase/messaging",od="@firebase/messaging-compat",ad="@firebase/performance",cd="@firebase/performance-compat",ld="@firebase/remote-config",ud="@firebase/remote-config-compat",fd="@firebase/storage",dd="@firebase/storage-compat",hd="@firebase/firestore",pd="@firebase/firestore-compat",gd="firebase",md="9.8.1";/**
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
 */const La="[DEFAULT]",_d={[vs]:"fire-core",[qf]:"fire-core-compat",[Gf]:"fire-analytics",[Kf]:"fire-analytics-compat",[Yf]:"fire-app-check",[Jf]:"fire-app-check-compat",[Xf]:"fire-auth",[Qf]:"fire-auth-compat",[Zf]:"fire-rtdb",[ed]:"fire-rtdb-compat",[td]:"fire-fn",[nd]:"fire-fn-compat",[rd]:"fire-iid",[sd]:"fire-iid-compat",[id]:"fire-fcm",[od]:"fire-fcm-compat",[ad]:"fire-perf",[cd]:"fire-perf-compat",[ld]:"fire-rc",[ud]:"fire-rc-compat",[fd]:"fire-gcs",[dd]:"fire-gcs-compat",[hd]:"fire-fst",[pd]:"fire-fst-compat","fire-js":"fire-js",[gd]:"fire-js-all"};/**
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
 */const hr=new Map,ys=new Map;function vd(t,e){try{t.container.addComponent(e)}catch(n){Gs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mn(t){const e=t.name;if(ys.has(e))return Gs.debug(`There were multiple attempts to register component ${e}.`),!1;ys.set(e,t);for(const n of hr.values())vd(n,t);return!0}function Ua(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const yd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Dt=new Fn("app","Firebase",yd);/**
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
 */class bd{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Mr=md;function wd(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:La,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Dt.create("bad-app-name",{appName:String(r)});const s=hr.get(r);if(s){if(dr(t,s.options)&&dr(n,s.config))return s;throw Dt.create("duplicate-app",{appName:r})}const i=new Cf(r);for(const a of ys.values())i.addComponent(a);const o=new bd(t,n,i);return hr.set(r,o),o}function Id(t=La){const e=hr.get(t);if(!e)throw Dt.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let s=(r=_d[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gs.warn(a.join(" "));return}Mn(new en(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ed="firebase-heartbeat-database",Td=1,Dn="firebase-heartbeat-store";let Kr=null;function Fa(){return Kr||(Kr=Hf(Ed,Td,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dn)}}}).catch(t=>{throw Dt.create("storage-open",{originalErrorMessage:t.message})})),Kr}async function Rd(t){try{return(await Fa()).transaction(Dn).objectStore(Dn).get($a(t))}catch(e){throw Dt.create("storage-get",{originalErrorMessage:e.message})}}async function Yi(t,e){try{const r=(await Fa()).transaction(Dn,"readwrite");return await r.objectStore(Dn).put(e,$a(t)),r.done}catch(n){throw Dt.create("storage-set",{originalErrorMessage:n.message})}}function $a(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sd=1024,Ad=30*24*60*60*1e3;class Cd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Od(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Ad}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xi(),{heartbeatsToSend:n,unsentEntries:r}=kd(this._heartbeatsCache.heartbeats),s=Ma(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xi(){return new Date().toISOString().substring(0,10)}function kd(t,e=Sd){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Od{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mf()?_f().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Rd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qi(t){return Ma(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Pd(t){Mn(new en("platform-logger",e=>new Vf(e),"PRIVATE")),Mn(new en("heartbeat",e=>new Cd(e),"PRIVATE")),Yt(vs,Ji,t),Yt(vs,Ji,"esm2017"),Yt("fire-js","")}Pd("");function Js(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ba(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Md=Ba,Ha=new Fn("auth","Firebase",Ba());/**
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
 */const Zi=new Da("@firebase/auth");function tr(t,...e){Zi.logLevel<=ne.ERROR&&Zi.error(`Auth (${Mr}): ${t}`,...e)}/**
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
 */function xe(t,...e){throw Ys(t,...e)}function We(t,...e){return Ys(t,...e)}function Dd(t,e,n){const r=Object.assign(Object.assign({},Md()),{[e]:n});return new Fn("auth","Firebase",r).create(e,{appName:t.name})}function Ys(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ha.create(t,...e)}function x(t,e,...n){if(!t)throw Ys(e,...n)}function Ye(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tr(e),new Error(e)}function Ze(t,e){t||Ye(e)}/**
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
 */const eo=new Map;function Xe(t){Ze(t instanceof Function,"Expected a class definition");let e=eo.get(t);return e?(Ze(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,eo.set(t,e),e)}/**
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
 */function Nd(t,e){const n=Ua(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(dr(i,e!=null?e:{}))return s;xe(s,"already-initialized")}return n.initialize({options:e})}function xd(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function bs(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ld(){return to()==="http:"||to()==="https:"}function to(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ud(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ld()||hf()||"connection"in navigator)?navigator.onLine:!0}function Fd(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ze(n>e,"Short delay should be less than long delay!"),this.isMobile=df()||pf()}get(){return Ud()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xs(t,e){Ze(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ja{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $d={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Bd=new Bn(3e4,6e4);function Hn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ln(t,e,n,r,s={}){return Wa(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=$n(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ja.fetch()(Va(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Wa(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$d),e);try{const s=new Hd(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Gr(t,"email-already-in-use",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Dd(t,f,l);xe(t,f)}}catch(s){if(s instanceof cn)throw s;xe(t,"network-request-failed")}}async function jn(t,e,n,r,s={}){const i=await ln(t,e,n,r,s);return"mfaPendingCredential"in i&&xe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Va(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Xs(t.config,s):`${t.config.apiScheme}://${s}`}class Hd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(We(this.auth,"network-request-failed")),Bd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=We(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function jd(t,e){return ln(t,"POST","/v1/accounts:delete",e)}async function Wd(t,e){return ln(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function In(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vd(t,e=!1){const n=yt(t),r=await n.getIdToken(e),s=Qs(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:In(Jr(s.auth_time)),issuedAtTime:In(Jr(s.iat)),expirationTime:In(Jr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Jr(t){return Number(t)*1e3}function Qs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tr("JWT malformed, contained fewer than 3 sections"),null;try{const s=uf(n);return s?JSON.parse(s):(tr("Failed to decode base64 JWT payload"),null)}catch(s){return tr("Caught error parsing JWT payload as JSON",s),null}}function zd(t){const e=Qs(t);return x(e,"internal-error"),x(typeof e.exp!="undefined","internal-error"),x(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&qd(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Kd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class za{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=In(this.lastLoginAt),this.creationTime=In(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await tn(t,Wd(n,{idToken:r}));x(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yd(i.providerUserInfo):[],a=Jd(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new za(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Gd(t){const e=yt(t);await pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jd(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Yd(t){return t.map(e=>{var{providerId:n}=e,r=Js(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Xd(t,e){const n=await Wa(t,{},async()=>{const r=$n({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Va(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ja.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Nn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken!="undefined","internal-error"),x(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):zd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Xd(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Nn;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nn,this.toJSON())}_performRefresh(){return Ye("not implemented")}}/**
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
 */function rt(t,e){x(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Pt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Js(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new za(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await tn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vd(this,e)}reload(){return Gd(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tn(this,jd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,U=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,$=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:z,emailVerified:q,isAnonymous:de,providerData:he,stsTokenManager:Se}=n;x(z&&Se,e,"internal-error");const tt=Nn.fromJSON(this.name,Se);x(typeof z=="string",e,"internal-error"),rt(h,e.name),rt(p,e.name),x(typeof q=="boolean",e,"internal-error"),x(typeof de=="boolean",e,"internal-error"),rt(b,e.name),rt(S,e.name),rt(U,e.name),rt(C,e.name),rt(O,e.name),rt($,e.name);const be=new Pt({uid:z,auth:e,email:p,emailVerified:q,displayName:h,isAnonymous:de,photoURL:S,phoneNumber:b,tenantId:U,stsTokenManager:tt,createdAt:O,lastLoginAt:$});return he&&Array.isArray(he)&&(be.providerData=he.map(Le=>Object.assign({},Le))),C&&(be._redirectEventId=C),be}static async _fromIdTokenResponse(e,n,r=!1){const s=new Nn;s.updateFromServerResponse(n);const i=new Pt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await pr(i),i}}/**
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
 */class qa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qa.type="NONE";const no=qa;/**
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
 */function nr(t,e,n){return`firebase:${t}:${e}:${n}`}class Xt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=nr(this.userKey,s.apiKey,i),this.fullPersistenceKey=nr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xt(Xe(no),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Xe(no);const o=nr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=Pt._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Xt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Xt(i,e,r))}}/**
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
 */function ro(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ja(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ka(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xa(e))return"Blackberry";if(Qa(e))return"Webos";if(Zs(e))return"Safari";if((e.includes("chrome/")||Ga(e))&&!e.includes("edge/"))return"Chrome";if(Ya(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ka(t=_e()){return/firefox\//i.test(t)}function Zs(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ga(t=_e()){return/crios\//i.test(t)}function Ja(t=_e()){return/iemobile/i.test(t)}function Ya(t=_e()){return/android/i.test(t)}function Xa(t=_e()){return/blackberry/i.test(t)}function Qa(t=_e()){return/webos/i.test(t)}function Dr(t=_e()){return/iphone|ipad|ipod/i.test(t)}function Qd(t=_e()){var e;return Dr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zd(){return gf()&&document.documentMode===10}function Za(t=_e()){return Dr(t)||Ya(t)||Qa(t)||Xa(t)||/windows phone/i.test(t)||Ja(t)}function eh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ec(t,e=[]){let n;switch(t){case"Browser":n=ro(_e());break;case"Worker":n=`${ro(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mr}/${r}`}/**
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
 */class th{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r.message})}}}/**
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
 */class nh{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new so(this),this.idTokenSubscription=new so(this),this.beforeStateQueue=new th(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ha,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xe(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?yt(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xe(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Xt.create(this,[Xe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ec(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Nr(t){return yt(t)}class so{constructor(e){this.auth=e,this.observer=null,this.addObserver=If(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class ei{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ye("not implemented")}_getIdTokenResponse(e){return Ye("not implemented")}_linkToIdToken(e,n){return Ye("not implemented")}_getReauthenticationResolver(e){return Ye("not implemented")}}async function rh(t,e){return ln(t,"POST","/v1/accounts:update",e)}/**
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
 */async function sh(t,e){return jn(t,"POST","/v1/accounts:signInWithPassword",Hn(t,e))}/**
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
 */async function ih(t,e){return jn(t,"POST","/v1/accounts:signInWithEmailLink",Hn(t,e))}async function oh(t,e){return jn(t,"POST","/v1/accounts:signInWithEmailLink",Hn(t,e))}/**
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
 */class xn extends ei{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return sh(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ih(e,{email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return rh(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return oh(e,{idToken:n,email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qt(t,e){return jn(t,"POST","/v1/accounts:signInWithIdp",Hn(t,e))}/**
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
 */const ah="http://localhost";class Nt extends ei{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Js(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Nt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qt(e,n)}buildRequest(){const e={requestUri:ah,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$n(n)}return e}}/**
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
 */function ch(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lh(t){const e=_n(vn(t)).link,n=e?_n(vn(e)).deep_link_id:null,r=_n(vn(t)).deep_link_id;return(r?_n(vn(r)).link:null)||r||n||e||t}class ti{constructor(e){var n,r,s,i,o,a;const c=_n(vn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=ch((s=c.mode)!==null&&s!==void 0?s:null);x(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=lh(e);try{return new ti(n)}catch{return null}}}/**
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
 */class un{constructor(){this.providerId=un.PROVIDER_ID}static credential(e,n){return xn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ti.parseLink(n);return x(r,"argument-error"),xn._fromEmailAndCode(e,r.code,r.tenantId)}}un.PROVIDER_ID="password";un.EMAIL_PASSWORD_SIGN_IN_METHOD="password";un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wn extends tc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class lt extends Wn{constructor(){super("facebook.com")}static credential(e){return Nt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
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
 */class ut extends Wn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ut.credential(n,r)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
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
 */class ft extends Wn{constructor(){super("github.com")}static credential(e){return Nt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
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
 */class dt extends Wn{constructor(){super("twitter.com")}static credential(e,n){return Nt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
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
 */async function uh(t,e){return jn(t,"POST","/v1/accounts:signUp",Hn(t,e))}/**
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
 */class xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pt._fromIdTokenResponse(e,r,s),o=io(r);return new xt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=io(r);return new xt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function io(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class gr extends cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,gr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new gr(e,n,r,s)}}function nc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?gr._fromErrorAndOperation(t,i,e,r):i})}async function fh(t,e,n=!1){const r=await tn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xt._forOperation(t,"link",r)}/**
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
 */async function dh(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await tn(t,nc(r,s,e,t),n);x(i.idToken,r,"internal-error");const o=Qs(i.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),xt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xe(r,"user-mismatch"),i}}/**
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
 */async function rc(t,e,n=!1){const r="signIn",s=await nc(t,r,e),i=await xt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function hh(t,e){return rc(Nr(t),e)}async function E_(t,e,n){const r=Nr(t),s=await uh(r,{returnSecureToken:!0,email:e,password:n}),i=await xt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function T_(t,e,n){return hh(yt(t),un.credential(e,n))}/**
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
 */async function ph(t,e){return ln(t,"POST","/v1/accounts:update",e)}/**
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
 */async function R_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=yt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await tn(r,ph(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function sc(t,e,n,r){return yt(t).onAuthStateChanged(e,n,r)}function S_(t){return yt(t).signOut()}const mr="__sak";/**
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
 */class ic{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mr,"1"),this.storage.removeItem(mr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function gh(){const t=_e();return Zs(t)||Dr(t)}const mh=1e3,_h=10;class oc extends ic{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gh()&&eh(),this.fallbackToPolling=Za(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Zd()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_h):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oc.type="LOCAL";const vh=oc;/**
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
 */class ac extends ic{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ac.type="SESSION";const cc=ac;/**
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
 */function yh(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new xr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await yh(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xr.receivers=[];/**
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
 */function ni(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ni("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ve(){return window}function wh(t){Ve().location.href=t}/**
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
 */function lc(){return typeof Ve().WorkerGlobalScope!="undefined"&&typeof Ve().importScripts=="function"}async function Ih(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Eh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Th(){return lc()?self:null}/**
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
 */const uc="firebaseLocalStorageDb",Rh=1,_r="firebaseLocalStorage",fc="fbase_key";class Vn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lr(t,e){return t.transaction([_r],e?"readwrite":"readonly").objectStore(_r)}function Sh(){const t=indexedDB.deleteDatabase(uc);return new Vn(t).toPromise()}function ws(){const t=indexedDB.open(uc,Rh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_r,{keyPath:fc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_r)?e(r):(r.close(),await Sh(),e(await ws()))})})}async function oo(t,e,n){const r=Lr(t,!0).put({[fc]:e,value:n});return new Vn(r).toPromise()}async function Ah(t,e){const n=Lr(t,!1).get(e),r=await new Vn(n).toPromise();return r===void 0?null:r.value}function ao(t,e){const n=Lr(t,!0).delete(e);return new Vn(n).toPromise()}const Ch=800,kh=3;class dc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ws(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xr._getInstance(Th()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ih(),!this.activeServiceWorker)return;this.sender=new bh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Eh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ws();return await oo(e,mr,"1"),await ao(e,mr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>oo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ah(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ao(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Lr(s,!1).getAll();return new Vn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ch)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dc.type="LOCAL";const Oh=dc;/**
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
 */function Ph(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Mh(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=We("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ph().appendChild(r)})}function Dh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Bn(3e4,6e4);/**
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
 */function Nh(t,e){return e?Xe(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ri extends ei{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xh(t){return rc(t.auth,new ri(t),t.bypassAuthState)}function Lh(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),dh(n,new ri(t),t.bypassAuthState)}async function Uh(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),fh(n,new ri(t),t.bypassAuthState)}/**
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
 */class hc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xh;case"linkViaPopup":case"linkViaRedirect":return Uh;case"reauthViaPopup":case"reauthViaRedirect":return Lh;default:xe(this.auth,"internal-error")}}resolve(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Fh=new Bn(2e3,1e4);class qt extends hc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qt.currentPopupAction&&qt.currentPopupAction.cancel(),qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Ze(this.filter.length===1,"Popup operations only handle one event");const e=ni();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Fh.get())};e()}}qt.currentPopupAction=null;/**
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
 */const $h="pendingRedirect",rr=new Map;class Bh extends hc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rr.get(this.auth._key());if(!e){try{const r=await Hh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rr.set(this.auth._key(),e)}return this.bypassAuthState||rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hh(t,e){const n=Vh(e),r=Wh(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function jh(t,e){rr.set(t._key(),e)}function Wh(t){return Xe(t._redirectPersistence)}function Vh(t){return nr($h,t.config.apiKey,t.name)}async function zh(t,e,n=!1){const r=Nr(t),s=Nh(r,e),o=await new Bh(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const qh=10*60*1e3;class Kh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(We(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qh&&this.cachedEventUids.clear(),this.cachedEventUids.has(co(e))}saveEventToCache(e){this.cachedEventUids.add(co(e)),this.lastProcessedEventTime=Date.now()}}function co(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pc(t);default:return!1}}/**
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
 */async function Jh(t,e={}){return ln(t,"GET","/v1/projects",e)}/**
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
 */const Yh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xh=/^https?/;async function Qh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Jh(t);for(const n of e)try{if(Zh(n))return}catch{}xe(t,"unauthorized-domain")}function Zh(t){const e=bs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Xh.test(n))return!1;if(Yh.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ep=new Bn(3e4,6e4);function lo(){const t=Ve().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tp(t){return new Promise((e,n)=>{var r,s,i;function o(){lo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lo(),n(We(t,"network-request-failed"))},timeout:ep.get()})}if(!((s=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ve().gapi)===null||i===void 0)&&i.load)o();else{const a=Dh("iframefcb");return Ve()[a]=()=>{gapi.load?o():n(We(t,"network-request-failed"))},Mh(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw sr=null,e})}let sr=null;function np(t){return sr=sr||tp(t),sr}/**
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
 */const rp=new Bn(5e3,15e3),sp="__/auth/iframe",ip="emulator/auth/iframe",op={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ap=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cp(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xs(e,ip):`https://${t.config.authDomain}/${sp}`,r={apiKey:e.apiKey,appName:t.name,v:Mr},s=ap.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$n(r).slice(1)}`}async function lp(t){const e=await np(t),n=Ve().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:cp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:op,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=We(t,"network-request-failed"),a=Ve().setTimeout(()=>{i(o)},rp.get());function c(){Ve().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const up={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fp=500,dp=600,hp="_blank",pp="http://localhost";class uo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gp(t,e,n,r=fp,s=dp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},up),{width:r.toString(),height:s.toString(),top:i,left:o}),l=_e().toLowerCase();n&&(a=Ga(l)?hp:n),Ka(l)&&(e=e||pp,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[b,S])=>`${p}${b}=${S},`,"");if(Qd(l)&&a!=="_self")return mp(e||"",a),new uo(null);const h=window.open(e||"",a,f);x(h,t,"popup-blocked");try{h.focus()}catch{}return new uo(h)}function mp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _p="__/auth/handler",vp="emulator/auth/handler";function fo(t,e,n,r,s,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mr,eventId:s};if(e instanceof tc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Wn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${yp(t)}?${$n(a).slice(1)}`}function yp({config:t}){return t.emulator?Xs(t,vp):`https://${t.authDomain}/${_p}`}/**
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
 */const Yr="webStorageSupport";class bp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cc,this._completeRedirectFn=zh,this._overrideRedirectResult=jh}async _openPopup(e,n,r,s){var i;Ze((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=fo(e,n,r,bs(),s);return gp(e,o,ni())}async _openRedirect(e,n,r,s){return await this._originValidation(e),wh(fo(e,n,r,bs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ze(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lp(e),r=new Kh(e);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yr,{type:Yr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Yr];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Za()||Zs()||Dr()}}const wp=bp;var ho="@firebase/auth",po="0.20.1";/**
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
 */class Ip{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ep(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Tp(t){Mn(new en("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{x(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),x(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ec(t)},f=new nh(a,c,l);return xd(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mn(new en("auth-internal",e=>{const n=Nr(e.getProvider("auth").getImmediate());return(r=>new Ip(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(ho,po,Ep(t)),Yt(ho,po,"esm2017")}/**
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
 */function si(t=Id()){const e=Ua(t,"auth");return e.isInitialized()?e.getImmediate():Nd(t,{popupRedirectResolver:wp,persistence:[Oh,vh,cc]})}Tp("Browser");/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const gc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",fn=t=>gc?Symbol(t):"_vr_"+t,Rp=fn("rvlm"),go=fn("rvd"),ii=fn("r"),mc=fn("rl"),Is=fn("rvl"),zt=typeof window!="undefined";function Sp(t){return t.__esModule||gc&&t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Xr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const En=()=>{},Ap=/\/$/,Cp=t=>t.replace(Ap,"");function Qr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Mp(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function kp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function mo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Op(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&nn(e.matched[r],n.matched[s])&&_c(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function nn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _c(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Pp(t[n],e[n]))return!1;return!0}function Pp(t,e){return Array.isArray(t)?_o(t,e):Array.isArray(e)?_o(e,t):t===e}function _o(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Mp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ln;(function(t){t.pop="pop",t.push="push"})(Ln||(Ln={}));var Tn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Tn||(Tn={}));function Dp(t){if(!t)if(zt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Cp(t)}const Np=/^[^#]+#/;function xp(t,e){return t.replace(Np,"#")+e}function Lp(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ur=()=>({left:window.pageXOffset,top:window.pageYOffset});function Up(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Lp(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function vo(t,e){return(history.state?history.state.position-e:-1)+t}const Es=new Map;function Fp(t,e){Es.set(t,e)}function $p(t){const e=Es.get(t);return Es.delete(t),e}let Bp=()=>location.protocol+"//"+location.host;function vc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),mo(c,"")}return mo(n,t)+r+s}function Hp(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const b=vc(t,location),S=n.value,U=e.value;let C=0;if(p){if(n.value=b,e.value=p,o&&o===S){o=null;return}C=U?p.position-U.position:0}else r(b);s.forEach(O=>{O(n.value,S,{delta:C,type:Ln.pop,direction:C?C>0?Tn.forward:Tn.back:Tn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const b=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(b),b}function f(){const{history:p}=window;!p.state||p.replaceState(Q({},p.state,{scroll:Ur()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function yo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ur():null}}function jp(t){const{history:e,location:n}=window,r={value:vc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Bp()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(b){console.error(b),n[f?"replace":"assign"](p)}}function o(c,l){const f=Q({},e.state,yo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=Q({},s.value,e.state,{forward:c,scroll:Ur()});i(f.current,f,!0);const h=Q({},yo(r.value,c,null),{position:f.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Wp(t){t=Dp(t);const e=jp(t),n=Hp(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:xp.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Vp(t){return typeof t=="string"||t&&typeof t=="object"}function yc(t){return typeof t=="string"||typeof t=="symbol"}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bc=fn("nf");var bo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(bo||(bo={}));function rn(t,e){return Q(new Error,{type:t,[bc]:!0},e)}function it(t,e){return t instanceof Error&&bc in t&&(e==null||!!(t.type&e))}const wo="[^/]+?",zp={sensitive:!1,strict:!1,start:!0,end:!0},qp=/[.+*?^${}()[\]/\\]/g;function Kp(t,e){const n=Q({},zp,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let b=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(qp,"\\$&"),b+=40;else if(p.type===1){const{value:S,repeatable:U,optional:C,regexp:O}=p;i.push({name:S,repeatable:U,optional:C});const $=O||wo;if($!==wo){b+=10;try{new RegExp(`(${$})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${S}" (${$}): `+q.message)}}let z=U?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;h||(z=C&&l.length<2?`(?:/${z})`:"/"+z),C&&(z+="?"),s+=z,b+=20,C&&(b+=-8),U&&(b+=-20),$===".*"&&(b+=-50)}f.push(b)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const b=f[p]||"",S=i[p-1];h[S.name]=b&&S.repeatable?b.split("/"):b}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const b of p)if(b.type===0)f+=b.value;else if(b.type===1){const{value:S,repeatable:U,optional:C}=b,O=S in l?l[S]:"";if(Array.isArray(O)&&!U)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const $=Array.isArray(O)?O.join("/"):O;if(!$)if(C)p.length<2&&t.length>1&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);f+=$}}return f}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Gp(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Jp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Gp(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Yp={type:0,value:""},Xp=/[a-zA-Z0-9_]/;function Qp(t){if(!t)return[[]];if(t==="/")return[[Yp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${n})/"${l}": ${b}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Xp.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Zp(t,e,n){const r=Kp(Qp(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function eg(t,e){const n=[],r=new Map;e=Eo({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const b=!p,S=ng(f);S.aliasOf=p&&p.record;const U=Eo(e,f),C=[S];if("alias"in f){const z=typeof f.alias=="string"?[f.alias]:f.alias;for(const q of z)C.push(Q({},S,{components:p?p.record.components:S.components,path:q,aliasOf:p?p.record:S}))}let O,$;for(const z of C){const{path:q}=z;if(h&&q[0]!=="/"){const de=h.record.path,he=de[de.length-1]==="/"?"":"/";z.path=h.record.path+(q&&he+q)}if(O=Zp(z,h,U),p?p.alias.push(O):($=$||O,$!==O&&$.alias.push(O),b&&f.name&&!Io(O)&&o(f.name)),"children"in S){const de=S.children;for(let he=0;he<de.length;he++)i(de[he],O,p&&p.children[he])}p=p||O,c(O)}return $?()=>{o($)}:En}function o(f){if(yc(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&Jp(f,n[h])>=0&&(f.record.path!==n[h].record.path||!wc(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!Io(f)&&r.set(f.record.name,f)}function l(f,h){let p,b={},S,U;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw rn(1,{location:f});U=p.record.name,b=Q(tg(h.params,p.keys.filter($=>!$.optional).map($=>$.name)),f.params),S=p.stringify(b)}else if("path"in f)S=f.path,p=n.find($=>$.re.test(S)),p&&(b=p.parse(S),U=p.record.name);else{if(p=h.name?r.get(h.name):n.find($=>$.re.test(h.path)),!p)throw rn(1,{location:f,currentLocation:h});U=p.record.name,b=Q({},h.params,f.params),S=p.stringify(b)}const C=[];let O=p;for(;O;)C.unshift(O.record),O=O.parent;return{name:U,path:S,params:b,matched:C,meta:sg(C)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function tg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ng(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:rg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function rg(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Io(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sg(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function Eo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function wc(t,e){return e.children.some(n=>n===t||wc(t,n))}const Ic=/#/g,ig=/&/g,og=/\//g,ag=/=/g,cg=/\?/g,Ec=/\+/g,lg=/%5B/g,ug=/%5D/g,Tc=/%5E/g,fg=/%60/g,Rc=/%7B/g,dg=/%7C/g,Sc=/%7D/g,hg=/%20/g;function oi(t){return encodeURI(""+t).replace(dg,"|").replace(lg,"[").replace(ug,"]")}function pg(t){return oi(t).replace(Rc,"{").replace(Sc,"}").replace(Tc,"^")}function Ts(t){return oi(t).replace(Ec,"%2B").replace(hg,"+").replace(Ic,"%23").replace(ig,"%26").replace(fg,"`").replace(Rc,"{").replace(Sc,"}").replace(Tc,"^")}function gg(t){return Ts(t).replace(ag,"%3D")}function mg(t){return oi(t).replace(Ic,"%23").replace(cg,"%3F")}function _g(t){return t==null?"":mg(t).replace(og,"%2F")}function vr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function vg(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ec," "),o=i.indexOf("="),a=vr(o<0?i:i.slice(0,o)),c=o<0?null:vr(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function To(t){let e="";for(let n in t){const r=t[n];if(n=gg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Ts(i)):[r&&Ts(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function yg(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function pn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ct(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(rn(4,{from:n,to:e})):h instanceof Error?a(h):Vp(h)?a(rn(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function Zr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(bg(a)){const l=(a.__vccOpts||a)[e];l&&s.push(ct(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Sp(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&ct(p,n,r,i,o)()}))}}return s}function bg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ro(t){const e=mt(ii),n=mt(mc),r=je(()=>e.resolve(ue(t.to))),s=je(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(nn.bind(null,f));if(p>-1)return p;const b=So(c[l-2]);return l>1&&So(f)===b&&h[h.length-1].path!==b?h.findIndex(nn.bind(null,c[l-2])):p}),i=je(()=>s.value>-1&&Eg(n.params,r.value.params)),o=je(()=>s.value>-1&&s.value===n.matched.length-1&&_c(n.params,r.value.params));function a(c={}){return Ig(c)?e[ue(t.replace)?"replace":"push"](ue(t.to)).catch(En):Promise.resolve()}return{route:r,href:je(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const wg=ua({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ro,setup(t,{slots:e}){const n=Un(Ro(t)),{options:r}=mt(ii),s=je(()=>({[Ao(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ao(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ca("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),At=wg;function Ig(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Eg(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function So(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ao=(t,e,n)=>t!=null?t:e!=null?e:n,Tg=ua({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=mt(Is),s=je(()=>t.route||r.value),i=mt(go,0),o=je(()=>s.value.matched[i]);Qn(go,i+1),Qn(Rp,o),Qn(Is,s);const a=Il();return Zn(()=>[a.value,o.value,t.name],([c,l,f],[h,p,b])=>{l&&(l.instances[f]=c,p&&p!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),c&&l&&(!p||!nn(l,p)||!h)&&(l.enterCallbacks[f]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,f=l&&l.components[t.name],h=t.name;if(!f)return Co(n.default,{Component:f,route:c});const p=l.props[t.name],b=p?p===!0?c.params:typeof p=="function"?p(c):p:null,U=Ca(f,Q({},b,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Co(n.default,{Component:U,route:c})||U}}});function Co(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ai=Tg;function Rg(t){const e=eg(t.routes,t),n=t.parseQuery||vg,r=t.stringifyQuery||To,s=t.history,i=pn(),o=pn(),a=pn(),c=El(st);let l=st;zt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Xr.bind(null,m=>""+m),h=Xr.bind(null,_g),p=Xr.bind(null,vr);function b(m,k){let T,P;return yc(m)?(T=e.getRecordMatcher(m),P=k):P=m,e.addRoute(P,T)}function S(m){const k=e.getRecordMatcher(m);k&&e.removeRoute(k)}function U(){return e.getRoutes().map(m=>m.record)}function C(m){return!!e.getRecordMatcher(m)}function O(m,k){if(k=Q({},k||c.value),typeof m=="string"){const H=Qr(n,m,k.path),u=e.resolve({path:H.path},k),d=s.createHref(H.fullPath);return Q(H,u,{params:p(u.params),hash:vr(H.hash),redirectedFrom:void 0,href:d})}let T;if("path"in m)T=Q({},m,{path:Qr(n,m.path,k.path).path});else{const H=Q({},m.params);for(const u in H)H[u]==null&&delete H[u];T=Q({},m,{params:h(m.params)}),k.params=h(k.params)}const P=e.resolve(T,k),Y=m.hash||"";P.params=f(p(P.params));const te=kp(r,Q({},m,{hash:pg(Y),path:P.path})),j=s.createHref(te);return Q({fullPath:te,hash:Y,query:r===To?yg(m.query):m.query||{}},P,{redirectedFrom:void 0,href:j})}function $(m){return typeof m=="string"?Qr(n,m,c.value.path):Q({},m)}function z(m,k){if(l!==m)return rn(8,{from:k,to:m})}function q(m){return Se(m)}function de(m){return q(Q($(m),{replace:!0}))}function he(m){const k=m.matched[m.matched.length-1];if(k&&k.redirect){const{redirect:T}=k;let P=typeof T=="function"?T(m):T;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=$(P):{path:P},P.params={}),Q({query:m.query,hash:m.hash,params:m.params},P)}}function Se(m,k){const T=l=O(m),P=c.value,Y=m.state,te=m.force,j=m.replace===!0,H=he(T);if(H)return Se(Q($(H),{state:Y,force:te,replace:j}),k||T);const u=T;u.redirectedFrom=k;let d;return!te&&Op(r,P,T)&&(d=rn(16,{to:u,from:P}),$t(P,P,!0,!1)),(d?Promise.resolve(d):be(u,P)).catch(g=>it(g)?it(g,2)?g:Ie(g):ee(g,u,P)).then(g=>{if(g){if(it(g,2))return Se(Q($(g.to),{state:Y,force:te,replace:j}),k||u)}else g=qe(u,P,!0,j,Y);return Le(u,P,g),g})}function tt(m,k){const T=z(m,k);return T?Promise.reject(T):Promise.resolve()}function be(m,k){let T;const[P,Y,te]=Sg(m,k);T=Zr(P.reverse(),"beforeRouteLeave",m,k);for(const H of P)H.leaveGuards.forEach(u=>{T.push(ct(u,m,k))});const j=tt.bind(null,m,k);return T.push(j),Ht(T).then(()=>{T=[];for(const H of i.list())T.push(ct(H,m,k));return T.push(j),Ht(T)}).then(()=>{T=Zr(Y,"beforeRouteUpdate",m,k);for(const H of Y)H.updateGuards.forEach(u=>{T.push(ct(u,m,k))});return T.push(j),Ht(T)}).then(()=>{T=[];for(const H of m.matched)if(H.beforeEnter&&!k.matched.includes(H))if(Array.isArray(H.beforeEnter))for(const u of H.beforeEnter)T.push(ct(u,m,k));else T.push(ct(H.beforeEnter,m,k));return T.push(j),Ht(T)}).then(()=>(m.matched.forEach(H=>H.enterCallbacks={}),T=Zr(te,"beforeRouteEnter",m,k),T.push(j),Ht(T))).then(()=>{T=[];for(const H of o.list())T.push(ct(H,m,k));return T.push(j),Ht(T)}).catch(H=>it(H,8)?H:Promise.reject(H))}function Le(m,k,T){for(const P of a.list())P(m,k,T)}function qe(m,k,T,P,Y){const te=z(m,k);if(te)return te;const j=k===st,H=zt?history.state:{};T&&(P||j?s.replace(m.fullPath,Q({scroll:j&&H&&H.scroll},Y)):s.push(m.fullPath,Y)),c.value=m,$t(m,k,T,j),Ie()}let ke;function Lt(){ke||(ke=s.listen((m,k,T)=>{const P=O(m),Y=he(P);if(Y){Se(Q(Y,{replace:!0}),P).catch(En);return}l=P;const te=c.value;zt&&Fp(vo(te.fullPath,T.delta),Ur()),be(P,te).catch(j=>it(j,12)?j:it(j,2)?(Se(j.to,P).then(H=>{it(H,20)&&!T.delta&&T.type===Ln.pop&&s.go(-1,!1)}).catch(En),Promise.reject()):(T.delta&&s.go(-T.delta,!1),ee(j,P,te))).then(j=>{j=j||qe(P,te,!1),j&&(T.delta?s.go(-T.delta,!1):T.type===Ln.pop&&it(j,20)&&s.go(-1,!1)),Le(P,te,j)}).catch(En)}))}let Ut=pn(),Ft=pn(),ae;function ee(m,k,T){Ie(m);const P=Ft.list();return P.length?P.forEach(Y=>Y(m,k,T)):console.error(m),Promise.reject(m)}function J(){return ae&&c.value!==st?Promise.resolve():new Promise((m,k)=>{Ut.add([m,k])})}function Ie(m){return ae||(ae=!m,Lt(),Ut.list().forEach(([k,T])=>m?T(m):k()),Ut.reset()),m}function $t(m,k,T,P){const{scrollBehavior:Y}=t;if(!zt||!Y)return Promise.resolve();const te=!T&&$p(vo(m.fullPath,0))||(P||!T)&&history.state&&history.state.scroll||null;return ta().then(()=>Y(m,k,te)).then(j=>j&&Up(j)).catch(j=>ee(j,m,k))}const Ke=m=>s.go(m);let Ue;const Ae=new Set;return{currentRoute:c,addRoute:b,removeRoute:S,hasRoute:C,getRoutes:U,resolve:O,options:t,push:q,replace:de,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ft.add,isReady:J,install(m){const k=this;m.component("RouterLink",At),m.component("RouterView",ai),m.config.globalProperties.$router=k,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(c)}),zt&&!Ue&&c.value===st&&(Ue=!0,q(s.location).catch(Y=>{}));const T={};for(const Y in st)T[Y]=je(()=>c.value[Y]);m.provide(ii,k),m.provide(mc,Un(T)),m.provide(Is,c);const P=m.unmount;Ae.add(m),m.unmount=function(){Ae.delete(m),Ae.size<1&&(l=st,ke&&ke(),ke=null,c.value=st,Ue=!1,ae=!1),P()}}}}function Ht(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Sg(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>nn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>nn(l,c))||s.push(c))}return[n,r,s]}var bt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const ci=t=>(Hs("data-v-c705e514"),t=t(),js(),t),Ag=ci(()=>N("a",{href:"https://vuejs.org/",target:"_blank"},"VueJS",-1)),Cg=ci(()=>N("a",{href:"https://firebase.google.com/",target:"_blank"},"Firebase",-1)),kg=ci(()=>N("a",{href:"https://github.com/loshido",target:"_blank"},"Github",-1)),Og=Ce("Home"),Pg=Ce("Scripts"),Mg=Ce("Life"),Dg=["src"],Ng={data(){return{avatar:Vi,isLogged:!1}},beforeMount(){const t=si();sc(t,e=>{e?(this.isLogged=!0,this.avatar=e.photoURL):(this.isLogged=!1,this.avatar=Vi)})},methods:{}},xg=Object.assign(Ng,{setup(t){return(e,n)=>(G(),ie("nav",null,[Ag,Cg,kg,re(ue(At),{to:"/","active-class":"active"},{default:ht(()=>[Og]),_:1}),re(ue(At),{to:"/shop","active-class":"active"},{default:ht(()=>[Pg]),_:1}),re(ue(At),{"active-class":"active",to:"/life/me"},{default:ht(()=>[Mg]),_:1}),re(ue(At),{to:"/auth",id:"user","active-class":"active-user"},{default:ht(()=>[N("img",{src:e.avatar,alt:"Profil Picture"},null,8,Dg)]),_:1})]))}});var Ac=bt(xg,[["__scopeId","data-v-c705e514"]]);const Lg=t=>(Hs("data-v-496efa82"),t=t(),js(),t),Ug=Lg(()=>N("h1",null,[N("a",null,"Echo")],-1)),Fg={setup(t){return(e,n)=>(G(),ie("header",null,[Ug,re(Ac)]))}};var $g=bt(Fg,[["__scopeId","data-v-496efa82"]]);const Bg={id:"box"},Hg={data(){return{isLogged:!1}},beforeMount(){const t=si();sc(t,e=>{e?this.isLogged=!0:this.isLogged=!1})},created(){this.$router.beforeEach((t,e)=>{if((t.name=="login"||t.name=="register"||t.name=="auth")&&this.isLogged)return"/auth/logged";if(t.name=="logged"&&!this.isLogged)return"/auth/login"})},watch:{isLogged(){console.log("user is logged ? "+this.isLogged)}}},jg=Object.assign(Hg,{setup(t){return(e,n)=>(G(),ie("div",Bg,[re(ue(ai))]))}});const Wg=N("h3",null,"Copyrights \xA92022 Loshido",-1),Vg={setup(t){return(e,n)=>(G(),ie(le,null,[re($g,{id:"header"}),re(ue(ai)),N("footer",null,[Wg,re(Ac)])],64))}},zg="modulepreload",ko={},qg="/",es=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${qg}${r}`,r in ko)return;ko[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":zg,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};var Kg="/assets/encryption.240496fc.svg",Gg="/assets/finishline.f2c54ee6.svg",Jg="/assets/inspiration.f54dba38.svg",Yg="/assets/investing.90175cb0.svg",Xg="/assets/moving.c645aebb.svg",Qg="/assets/relax.2d0d9534.svg",Zg="/assets/sheet.eafe0f09.svg",em="/assets/videographer.3f2fc966.svg",tm="/assets/warning.4a0e2241.svg",nm="/assets/working.05f83d43.svg";function rm(){return[{title:"VueJS",content:"Un approchable, performant et versatile framework pour cr\xE9er des pages web avec interface utilisateur.",rgb:"rgba(108, 147, 128, 0.85)",identifier:"vue",image:{src:"https://vuejs.org/images/logo.png",alt:"VueJS"}},{title:"Javascript",content:"JavaScript (JS) est le plus connu language de code pour les pages Web.",rgb:"rgba(147, 147, 108, 0.85)",identifier:"js",image:{src:"https://www.developpez.net/forums/attachments/p294178d1/a/a/a",alt:"JavaScript"}},{title:"HTML",content:`HTML signifie "HyperText Markup Language" qui se traduit par "language de balises pour l'hypertexte" `,rgb:"rgba(108, 147, 128, 0.85)",identifier:"html",image:{src:"https://cdn-icons-png.flaticon.com/512/732/732212.png",alt:"Image"}},{title:"CSS",content:"CSS est l'un des languages principaux du Web, Il sert d'apparence sur les pages Web",rgb:"rgba(108, 147, 147,0.85)",identifier:"css",image:{src:"https://cdn-icons-png.flaticon.com/512/732/732190.png",alt:"Image"}}]}function sm(){return[{title:"Far far away",content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary"},{title:"Werther",content:"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my"},{title:"Kafka",content:"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The"},{title:"Pangram",content:"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens"},{title:"Cicero",content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui"}]}const Rs={header:`<strong>Bienvenue</strong>, cette page est un essai technique. J'apprends \xE0 utiliser <a class="link" target="_blank" href="https://vuejs.org/">VueJS</a> et en effet, il faut commencer par quelque chose sinon on reste bloqu\xE9 \xE0 rien savoir faire. Finalement, cette demo technique sera surement manipul\xE9e de pleins de fa\xE7ons diff\xE9rentes pour comprendre le fonctionnement de ce framework.`,warning:'Page inspir\xE9e initialement du site officiel de <a class="link" href="https://fivem.net">FiveM</a>, \xC9tant donn\xE9 que ma page est seulement faite pour apprendre.',nolimits:"<i><q>Mesurer les progr\xE8s de la programmation en lignes de code, c\u2019est comme mesurer les progr\xE8s de la construction d\u2019un avion en poids.</q></i>"},Je=[{title:"Encryption",key:"encryption",content:"Encryption Text",path:"/shop/encryption",image:{src:Kg,alt:"encryption"}},{title:"FinishLine",content:"Finish Line Text",key:"finishline",path:"/shop/finishline",image:{src:Gg,alt:"finishline"}},{title:"Inspiration",content:"Inspiration Text",key:"inspiration",path:"/shop/inspiration",image:{src:Jg,alt:"inspiration"}},{title:"investing",content:"investing Text",key:"investing",path:"/shop/investing",image:{src:Yg,alt:"investing"}},{title:"moving",content:"moving Text",key:"moving",path:"/shop/moving",image:{src:Xg,alt:"moving"}},{title:"relax",content:"relax Text",key:"relax",path:"/shop/relax",image:{src:Qg,alt:"relax"}},{title:"sheet",content:"sheet Text",key:"sheet",path:"/shop/sheet",image:{src:Zg,alt:"sheet"}},{title:"videographer",content:"videographer Text",key:"videographer",path:"/shop/videographer",image:{src:em,alt:"videographer"}},{title:"warning",content:"warning Text",key:"warning",path:"/shop/warning",image:{src:tm,alt:"warning"}},{title:"working",content:"working Text",key:"working",path:"/shop/working",image:{src:nm,alt:"working"}}];function im(t){for(var e=0;e<Je.length;e++)for(var n in Je[e])if(typeof Je[e][n]=="string"&&Je[e][n]==t)return Je[e]}const om={id:"s1"},am=["innerHTML"],cm={id:"s2"},lm=Ce("Shop"),um={setup(t){return(e,n)=>(G(),ie("main",null,[N("div",om,[N("p",{innerHTML:ue(Rs).header},null,8,am)]),N("div",cm,[re(ue(At),{to:"/shop"},{default:ht(()=>[lm]),_:1})])]))}};var fm=bt(um,[["__scopeId","data-v-3981898c"]]);const dm={props:["title","content","rgb","image"]},hm=["src","alt"];function pm(t,e,n,r,s,i){return G(),ie("article",{style:yr({"background-color":n.rgb,border:"3px solid "+n.rgb})},[n.image?(G(),ie("img",{key:0,class:"logo",src:n.image.src,alt:n.image.alt},null,8,hm)):Or("",!0),N("h1",null,pe(n.title),1),N("p",null,pe(n.content),1)],4)}var gm=bt(dm,[["render",pm],["__scopeId","data-v-067e2133"]]);const mm={id:"head"},_m={id:"container"},vm=["innerHTML"],ym={class:"module"},bm=N("h1",{id:"features-title"},"Features",-1),wm={class:"features-holder"},Im=["innerHTML"],Em={class:"module",id:"faq"},Tm=N("h1",null,"F.A.Q.",-1),Rm=["id"],Sm={class:"faq-title"},Am=N("a",{href:"#",class:"link"},"#",-1),Cm={class:"faq-content"},km={setup(t){return(e,n)=>(G(),ie(le,null,[N("section",mm,[N("div",_m,[re(fm)]),N("p",{id:"ut",innerHTML:ue(Rs).warning},null,8,vm)]),N("section",ym,[bm,N("div",wm,[(G(!0),ie(le,null,On(ue(rm)(),r=>(G(),zs(gm,{title:r.title,content:r.content,rgb:r.rgb,image:r.image},null,8,["title","content","rgb","image"]))),256))]),N("h2",{innerHTML:ue(Rs).nolimits},null,8,Im)]),N("section",Em,[Tm,(G(!0),ie(le,null,On(ue(sm)(),(r,s)=>(G(),ie("div",{class:"faq",id:s},[N("h2",Sm,[Am,Ce(" "+pe(r.title),1)]),N("p",Cm,pe(r.content),1)],8,Rm))),256))])],64))}};const Om={props:["item"]},Pm={id:"img"},Mm=["src","alt"],Dm={id:"content"},Nm=Ce("En savoir plus");function xm(t,e,n,r,s,i){const o=mu("RouterLink");return G(),ie("article",null,[N("div",Pm,[N("h1",null,pe(n.item.title),1),N("img",{src:n.item.image.src,alt:n.item.image.alt},null,8,Mm)]),N("div",Dm,[N("main",null,[N("p",null,pe(n.item.content),1)]),re(o,{to:n.item.path},{default:ht(()=>[Nm]),_:1},8,["to"])])])}var Lm=bt(Om,[["render",xm],["__scopeId","data-v-53cd9779"]]);const Um={id:"page"},Fm={key:0,id:"warning"},$m={class:"container"},Bm={class:"row"},Hm={data(){return{isLogged:!1}},methods:{getRows(){if(Je.length==0)return!1;const t=Math.floor(Je.length/4.1)+1,e=[];if(t==1)return e[0]=[],Je.forEach((n,r)=>{e[0][r]=n}),console.log(e),e;for(let n=0;n<t;n++)e[n]=[],Je.forEach((r,s)=>{s<=n*4+3&&s>=n*4&&(e[n][s-n*4]=r)});return e}}},jm=Object.assign(Hm,{setup(t){return(e,n)=>(G(),ie("div",Um,[e.getRows()?Or("",!0):(G(),ie("h1",Fm,"\u26A0\uFE0F\u200B Il n'y a pas d'articles disponible \u26A0\uFE0F\u200B")),(G(!0),ie(le,null,On(e.getRows(),(r,s)=>(G(),ie("div",$m,[N("div",Bm,[(G(!0),ie(le,null,On(r,(i,o)=>(G(),zs(Lm,{item:i},null,8,["item"]))),256))])]))),256))]))}});var Wm=bt(jm,[["__scopeId","data-v-1db92aef"]]);const Vm={id:"retour"},zm=Ce("Revenir"),qm={key:0,id:"article-container"},Km={id:"article-img"},Gm=["src","alt"],Jm={id:"article-content"},Ym=["textContent"],Xm=["innerHTML"],Qm={props:["article"],data(){return{page:{}}},created(){this.page=im(this.article)}},Zm=Object.assign(Qm,{setup(t){return(e,n)=>(G(),ie(le,null,[N("h1",Vm,[re(ue(At),{to:"/shop"},{default:ht(()=>[zm]),_:1})]),t.article!=""?(G(),ie("div",qm,[N("div",Km,[N("img",{src:e.page.image.src,alt:e.page.image.alt},null,8,Gm)]),N("div",Jm,[N("h1",{textContent:pe(e.page.title)},null,8,Ym),N("p",{innerHTML:e.page.content},null,8,Xm)])])):Or("",!0)],64))}});var e_=bt(Zm,[["__scopeId","data-v-320f3c08"]]);const t_={props:["time"],data(){return{weeks:0,first:new Date(2006,1,3,0,0,0,0),today:new Date,current:new Date(2006,1,3,0,0,0,0),input:""}},watch:{input(t){var e=new Date(t).getTime();console.log(new Date(t).getFullYear()),new Date(t).getFullYear()>1900&&(this.$router.push({name:"life",params:{time:e}}),setTimeout(()=>{location.reload()},100))}},methods:{getSpecificWeeks(t){return Math.ceil(this.diffDays(t,this.today)/7)},toMonth(t){return["Janvier","F\xE9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xFBt","Septembre","Octobre","Novembre","D\xE9cembre"][t.getMonth()]},diffDays(t,e){return Math.ceil(Math.abs(t-e)/(1e3*60*60*24))},addDay(t,e){return t.setDate(t.getDate()+e),t},getDay(t){var e=new Date(this.current.getTime());if(e=this.addDay(e,t*7-7),t!=1)for(;e.getDay()!=1;)e=this.addDay(e,-1);return e},toExposed(t){const e={date:t.getDate(),month:this.toMonth(t),year:t.getFullYear()};for(t=this.addDay(t,7);t.getDay()!=1;)t=this.addDay(t,-1);const n=t.getDate();return e.date+"-"+n+" "+e.month+" "+e.year},CubeClicked(t){const e=document.getElementById(t+"cube");e.style.animation="clicked 1s ease-in-out",setTimeout(()=>{e.style.animation=""},1e3)},getNewDate(t){return typeof t=="string"&&(t=or(t)),t instanceof Date||(t=new Date(t)),t.getDate()+" "+this.toMonth(t)+" "+t.getFullYear()}},created(){this.time!="me"&&(this.current=new Date,this.current.setTime(this.time)),this.weeks=Math.ceil(this.diffDays(this.current,this.today)/7)}},Cc=t=>(Hs("data-v-5e8df9ba"),t=t(),js(),t),n_=["textContent"],r_=Ce(" semaines que je vies \u{1F9A6}."),s_={key:0},i_={key:1},o_={key:2},a_={id:"aside"},c_=Ce(" Saissisez votre date de naissance."),l_=Cc(()=>N("br",null,null,-1)),u_=Cc(()=>N("hr",null,null,-1)),f_={id:"tab"},d_=["onMouseover","id"],h_={class:"tooltip"};function p_(t,e,n,r,s,i){return G(),ie(le,null,[N("h2",null,[Ce("Aujourd'hui nous sommes le "+pe(s.today.getDate())+" "+pe(i.toMonth(s.today))+", en "+pe(s.today.getFullYear())+" \u2728. ",1),N("h4",null,[Ce("Et je suis n\xE9 le "+pe(s.first.getDate())+" "+pe(i.toMonth(s.first))+" "+pe(s.first.getFullYear())+". Cela fait donc ",1),N("a",{href:"#tab",id:"weeks",textContent:pe(i.getSpecificWeeks(s.first))},null,8,n_),r_])]),n.time=="me"?(G(),ie("h3",s_,"Chacun de ces cubes repr\xE9sentent une semaine de ma vie")):n.time.length>12?(G(),ie("h3",i_,"Vous avez saisis "+pe(i.getNewDate(n.time)),1)):s.input!=""?(G(),ie("h3",o_,"Vous avez saisis "+pe(i.getNewDate(s.input)),1)):Or("",!0),N("div",a_,[N("form",null,[N("label",null,[c_,l_,u_,lu(N("input",{type:"date",id:"date","onUpdate:modelValue":e[0]||(e[0]=o=>s.input=o)},null,512),[[ef,s.input]])])])]),N("div",f_,[(G(!0),ie(le,null,On(s.weeks,o=>(G(),ie("div",{class:"week",key:o,onMouseover:a=>i.CubeClicked(o),id:o+"cube"},[N("span",h_,pe(i.toExposed(s.current,o)),1)],40,d_))),128))])],64)}var g_=bt(t_,[["render",p_],["__scopeId","data-v-5e8df9ba"]]);const m_=Rg({history:Wp("/"),routes:[{path:"/",name:"home",component:km},{path:"/shop",name:"shop",component:Wm},{path:"/shop/:article",name:"article",component:e_,props:!0},{path:"/life/:time",props:!0,name:"life",component:g_},{path:"/auth",name:"auth",component:jg,redirect:t=>({path:"/auth/login"}),children:[{path:"login",name:"login",component:()=>es(()=>import("./login.ef43ee9a.js"),[])},{path:"register",name:"register",component:()=>es(()=>import("./register.3ef2de0f.js"),[])},{path:"logged",name:"logged",component:()=>es(()=>import("./logged.3a0a4891.js"),["assets/logged.3a0a4891.js","assets/logged.8351adc9.css"])}]}]});var __="firebase",v_="9.8.1";/**
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
 */Yt(__,v_,"app");var y_={apiKey:"AIzaSyDXu6v0FyNnP_5WFTkjnMJFd8NVRNpLsEU",authDomain:"echo-vuejs.firebaseapp.com",projectId:"echo-vuejs",storageBucket:"echo-vuejs.appspot.com",messagingSenderId:"275245027821",appId:"1:275245027821:web:94dd53b250383dcf1217e4",measurementId:"G-Y3DSL5J2XD"};const b_=wd(y_);si(b_);const kc=of(Vg);kc.use(m_);kc.mount("#app");export{le as F,At as R,bt as _,N as a,I_ as b,ie as c,Or as d,re as e,ht as f,Ce as g,si as h,me as i,E_ as j,js as k,R_ as l,S_ as m,G as o,Hs as p,T_ as s,pe as t,ue as u,ef as v,lu as w};
