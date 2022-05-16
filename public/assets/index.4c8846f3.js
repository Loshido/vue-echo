var Fc=Object.defineProperty,$c=Object.defineProperties;var Bc=Object.getOwnPropertyDescriptors;var _i=Object.getOwnPropertySymbols;var Hc=Object.prototype.hasOwnProperty,jc=Object.prototype.propertyIsEnumerable;var vi=(t,e,n)=>e in t?Fc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,yi=(t,e)=>{for(var n in e||(e={}))Hc.call(e,n)&&vi(t,n,e[n]);if(_i)for(var n of _i(e))jc.call(e,n)&&vi(t,n,e[n]);return t},bi=(t,e)=>$c(t,Bc(e));const Vc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Vc();function Ds(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Wc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zc=Ds(Wc);function xo(t){return!!t||t===""}function Ir(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=_e(r)?Gc(r):Ir(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(_e(t))return t;if(ge(t))return t}}const qc=/;(?![^(]*\))/g,Kc=/:(.+)/;function Gc(t){const e={};return t.split(qc).forEach(n=>{if(n){const r=n.split(Kc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xs(t){let e="";if(_e(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=xs(t[n]);r&&(e+=r+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pe=t=>_e(t)?t:t==null?"":$(t)||ge(t)&&(t.toString===$o||!B(t.toString))?JSON.stringify(t,Lo,2):String(t),Lo=(t,e)=>e&&e.__v_isRef?Lo(t,e.value):Yt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Uo(e)?{[`Set(${e.size})`]:[...e.values()]}:ge(e)&&!$(e)&&!Bo(e)?String(e):e,ee={},Jt=[],Fe=()=>{},Jc=()=>!1,Yc=/^on[^a-z]/,Er=t=>Yc.test(t),Ls=t=>t.startsWith("onUpdate:"),Ee=Object.assign,Us=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xc=Object.prototype.hasOwnProperty,q=(t,e)=>Xc.call(t,e),$=Array.isArray,Yt=t=>Tr(t)==="[object Map]",Uo=t=>Tr(t)==="[object Set]",B=t=>typeof t=="function",_e=t=>typeof t=="string",Fs=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",Fo=t=>ge(t)&&B(t.then)&&B(t.catch),$o=Object.prototype.toString,Tr=t=>$o.call(t),Qc=t=>Tr(t).slice(8,-1),Bo=t=>Tr(t)==="[object Object]",$s=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zn=Ds(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zc=/-(\w)/g,Je=Sr(t=>t.replace(Zc,(e,n)=>n?n.toUpperCase():"")),el=/\B([A-Z])/g,on=Sr(t=>t.replace(el,"-$1").toLowerCase()),Cr=Sr(t=>t.charAt(0).toUpperCase()+t.slice(1)),zr=Sr(t=>t?`on${Cr(t)}`:""),Cn=(t,e)=>!Object.is(t,e),er=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},cr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},lr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wi;const tl=()=>wi||(wi=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let We;class nl{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&We&&(this.parent=We,this.index=(We.scopes||(We.scopes=[])).push(this)-1)}run(e){if(this.active){const n=We;try{return We=this,e()}finally{We=n}}}on(){We=this}off(){We=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function rl(t,e=We){e&&e.active&&e.effects.push(t)}const Bs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ho=t=>(t.w&wt)>0,jo=t=>(t.n&wt)>0,sl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=wt},il=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ho(s)&&!jo(s)?s.delete(t):e[n++]=s,s.w&=~wt,s.n&=~wt}e.length=n}},as=new WeakMap;let pn=0,wt=1;const cs=30;let Ue;const Ot=Symbol(""),ls=Symbol("");class Hs{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,rl(this,r)}run(){if(!this.active)return this.fn();let e=Ue,n=_t;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ue,Ue=this,_t=!0,wt=1<<++pn,pn<=cs?sl(this):Ii(this),this.fn()}finally{pn<=cs&&il(this),wt=1<<--pn,Ue=this.parent,_t=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ue===this?this.deferStop=!0:this.active&&(Ii(this),this.onStop&&this.onStop(),this.active=!1)}}function Ii(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _t=!0;const Vo=[];function an(){Vo.push(_t),_t=!1}function cn(){const t=Vo.pop();_t=t===void 0?!0:t}function Oe(t,e,n){if(_t&&Ue){let r=as.get(t);r||as.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Bs()),Wo(s)}}function Wo(t,e){let n=!1;pn<=cs?jo(t)||(t.n|=wt,n=!Ho(t)):n=!t.has(Ue),n&&(t.add(Ue),Ue.deps.push(t))}function tt(t,e,n,r,s,i){const o=as.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?$s(n)&&a.push(o.get("length")):(a.push(o.get(Ot)),Yt(t)&&a.push(o.get(ls)));break;case"delete":$(t)||(a.push(o.get(Ot)),Yt(t)&&a.push(o.get(ls)));break;case"set":Yt(t)&&a.push(o.get(Ot));break}if(a.length===1)a[0]&&us(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);us(Bs(c))}}function us(t,e){for(const n of $(t)?t:[...t])(n!==Ue||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ol=Ds("__proto__,__v_isRef,__isVue"),zo=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Fs)),al=js(),cl=js(!1,!0),ll=js(!0),Ei=ul();function ul(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Oe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){an();const r=G(this)[e].apply(this,n);return cn(),r}}),t}function js(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Cl:Yo:e?Jo:Go).get(r))return r;const o=$(r);if(!t&&o&&q(Ei,s))return Reflect.get(Ei,s,i);const a=Reflect.get(r,s,i);return(Fs(s)?zo.has(s):ol(s))||(t||Oe(r,"get",s),e)?a:ye(a)?!o||!$s(s)?a.value:a:ge(a)?t?Xo(a):Fn(a):a}}const fl=qo(),dl=qo(!0);function qo(t=!1){return function(n,r,s,i){let o=n[r];if(Rn(o)&&ye(o)&&!ye(s))return!1;if(!t&&!Rn(s)&&(Qo(s)||(s=G(s),o=G(o)),!$(n)&&ye(o)&&!ye(s)))return o.value=s,!0;const a=$(n)&&$s(r)?Number(r)<n.length:q(n,r),c=Reflect.set(n,r,s,i);return n===G(i)&&(a?Cn(s,o)&&tt(n,"set",r,s):tt(n,"add",r,s)),c}}function hl(t,e){const n=q(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&tt(t,"delete",e,void 0),r}function pl(t,e){const n=Reflect.has(t,e);return(!Fs(e)||!zo.has(e))&&Oe(t,"has",e),n}function gl(t){return Oe(t,"iterate",$(t)?"length":Ot),Reflect.ownKeys(t)}const Ko={get:al,set:fl,deleteProperty:hl,has:pl,ownKeys:gl},ml={get:ll,set(t,e){return!0},deleteProperty(t,e){return!0}},_l=Ee({},Ko,{get:cl,set:dl}),Vs=t=>t,Rr=t=>Reflect.getPrototypeOf(t);function Gn(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);e!==i&&!n&&Oe(s,"get",e),!n&&Oe(s,"get",i);const{has:o}=Rr(s),a=r?Vs:n?qs:An;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Jn(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return t!==s&&!e&&Oe(r,"has",t),!e&&Oe(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Yn(t,e=!1){return t=t.__v_raw,!e&&Oe(G(t),"iterate",Ot),Reflect.get(t,"size",t)}function Ti(t){t=G(t);const e=G(this);return Rr(e).has.call(e,t)||(e.add(t),tt(e,"add",t,t)),this}function Si(t,e){e=G(e);const n=G(this),{has:r,get:s}=Rr(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Cn(e,o)&&tt(n,"set",t,e):tt(n,"add",t,e),this}function Ci(t){const e=G(this),{has:n,get:r}=Rr(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&tt(e,"delete",t,void 0),i}function Ri(){const t=G(this),e=t.size!==0,n=t.clear();return e&&tt(t,"clear",void 0,void 0),n}function Xn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=G(o),c=e?Vs:t?qs:An;return!t&&Oe(a,"iterate",Ot),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function Qn(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=Yt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?Vs:e?qs:An;return!e&&Oe(i,"iterate",c?ls:Ot),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function ot(t){return function(...e){return t==="delete"?!1:this}}function vl(){const t={get(i){return Gn(this,i)},get size(){return Yn(this)},has:Jn,add:Ti,set:Si,delete:Ci,clear:Ri,forEach:Xn(!1,!1)},e={get(i){return Gn(this,i,!1,!0)},get size(){return Yn(this)},has:Jn,add:Ti,set:Si,delete:Ci,clear:Ri,forEach:Xn(!1,!0)},n={get(i){return Gn(this,i,!0)},get size(){return Yn(this,!0)},has(i){return Jn.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:Xn(!0,!1)},r={get(i){return Gn(this,i,!0,!0)},get size(){return Yn(this,!0)},has(i){return Jn.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:Xn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Qn(i,!1,!1),n[i]=Qn(i,!0,!1),e[i]=Qn(i,!1,!0),r[i]=Qn(i,!0,!0)}),[t,n,e,r]}const[yl,bl,wl,Il]=vl();function Ws(t,e){const n=e?t?Il:wl:t?bl:yl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(q(n,s)&&s in r?n:r,s,i)}const El={get:Ws(!1,!1)},Tl={get:Ws(!1,!0)},Sl={get:Ws(!0,!1)},Go=new WeakMap,Jo=new WeakMap,Yo=new WeakMap,Cl=new WeakMap;function Rl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Al(t){return t.__v_skip||!Object.isExtensible(t)?0:Rl(Qc(t))}function Fn(t){return Rn(t)?t:zs(t,!1,Ko,El,Go)}function kl(t){return zs(t,!1,_l,Tl,Jo)}function Xo(t){return zs(t,!0,ml,Sl,Yo)}function zs(t,e,n,r,s){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Al(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Xt(t){return Rn(t)?Xt(t.__v_raw):!!(t&&t.__v_isReactive)}function Rn(t){return!!(t&&t.__v_isReadonly)}function Qo(t){return!!(t&&t.__v_isShallow)}function Zo(t){return Xt(t)||Rn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function ea(t){return cr(t,"__v_skip",!0),t}const An=t=>ge(t)?Fn(t):t,qs=t=>ge(t)?Xo(t):t;function ta(t){_t&&Ue&&(t=G(t),Wo(t.dep||(t.dep=Bs())))}function na(t,e){t=G(t),t.dep&&us(t.dep)}function ye(t){return!!(t&&t.__v_isRef===!0)}function Ol(t){return ra(t,!1)}function Pl(t){return ra(t,!0)}function ra(t,e){return ye(t)?t:new Ml(t,e)}class Ml{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:An(e)}get value(){return ta(this),this._value}set value(e){e=this.__v_isShallow?e:G(e),Cn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:An(e),na(this))}}function be(t){return ye(t)?t.value:t}const Nl={get:(t,e,n)=>be(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ye(s)&&!ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function sa(t){return Xt(t)?t:new Proxy(t,Nl)}class Dl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Hs(e,()=>{this._dirty||(this._dirty=!0,na(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return ta(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function xl(t,e,n=!1){let r,s;const i=B(t);return i?(r=t,s=Fe):(r=t.get,s=t.set),new Dl(r,s,i||!s,n)}function vt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ar(i,e,n)}return s}function De(t,e,n,r){if(B(t)){const i=vt(t,e,n,r);return i&&Fo(i)&&i.catch(o=>{Ar(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(De(t[i],e,n,r));return s}function Ar(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){vt(c,null,10,[t,o,a]);return}}Ll(t,n,s,r)}function Ll(t,e,n,r=!0){console.error(t)}let ur=!1,fs=!1;const ke=[];let Xe=0;const bn=[];let gn=null,Wt=0;const wn=[];let ut=null,zt=0;const ia=Promise.resolve();let Ks=null,ds=null;function oa(t){const e=Ks||ia;return t?e.then(this?t.bind(this):t):e}function Ul(t){let e=Xe+1,n=ke.length;for(;e<n;){const r=e+n>>>1;kn(ke[r])<t?e=r+1:n=r}return e}function aa(t){(!ke.length||!ke.includes(t,ur&&t.allowRecurse?Xe+1:Xe))&&t!==ds&&(t.id==null?ke.push(t):ke.splice(Ul(t.id),0,t),ca())}function ca(){!ur&&!fs&&(fs=!0,Ks=ia.then(fa))}function Fl(t){const e=ke.indexOf(t);e>Xe&&ke.splice(e,1)}function la(t,e,n,r){$(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),ca()}function $l(t){la(t,gn,bn,Wt)}function Bl(t){la(t,ut,wn,zt)}function Gs(t,e=null){if(bn.length){for(ds=e,gn=[...new Set(bn)],bn.length=0,Wt=0;Wt<gn.length;Wt++)gn[Wt]();gn=null,Wt=0,ds=null,Gs(t,e)}}function ua(t){if(wn.length){const e=[...new Set(wn)];if(wn.length=0,ut){ut.push(...e);return}for(ut=e,ut.sort((n,r)=>kn(n)-kn(r)),zt=0;zt<ut.length;zt++)ut[zt]();ut=null,zt=0}}const kn=t=>t.id==null?1/0:t.id;function fa(t){fs=!1,ur=!0,Gs(t),ke.sort((n,r)=>kn(n)-kn(r));const e=Fe;try{for(Xe=0;Xe<ke.length;Xe++){const n=ke[Xe];n&&n.active!==!1&&vt(n,null,14)}}finally{Xe=0,ke.length=0,ua(),ur=!1,Ks=null,(ke.length||bn.length||wn.length)&&fa(t)}}function Hl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ee;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||ee;p?s=n.map(y=>y.trim()):h&&(s=n.map(lr))}let a,c=r[a=zr(e)]||r[a=zr(Je(e))];!c&&i&&(c=r[a=zr(on(e))]),c&&De(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,De(l,t,6,s)}}function da(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const f=da(l,e,!0);f&&(a=!0,Ee(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):Ee(o,i),r.set(t,o),o)}function kr(t,e){return!t||!Er(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,on(e))||q(t,e))}let Ne=null,Or=null;function fr(t){const e=Ne;return Ne=t,Or=t&&t.type.__scopeId||null,e}function Pr(t){Or=t}function Mr(){Or=null}function Pt(t,e=Ne,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Fi(-1);const i=fr(e),o=t(...s);return fr(i),r._d&&Fi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function qr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:y,ctx:S,inheritAttrs:M}=t;let A,k;const L=fr(t);try{if(n.shapeFlag&4){const z=s||r;A=ze(f.call(z,z,h,i,y,p,S)),k=c}else{const z=e;A=ze(z.length>1?z(i,{attrs:c,slots:a,emit:l}):z(i,null)),k=e.props?c:jl(c)}}catch(z){In.length=0,Ar(z,t,1),A=ae($e)}let V=A;if(k&&M!==!1){const z=Object.keys(k),{shapeFlag:ce}=V;z.length&&ce&7&&(o&&z.some(Ls)&&(k=Vl(k,o)),V=xt(V,k))}return n.dirs&&(V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),A=V,fr(L),A}const jl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Er(n))&&((e||(e={}))[n]=t[n]);return e},Vl=(t,e)=>{const n={};for(const r in t)(!Ls(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Wl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ai(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!kr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ai(r,o,l):!0:!!o;return!1}function Ai(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!kr(n,i))return!0}return!1}function zl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ql=t=>t.__isSuspense;function Kl(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Bl(t)}function tr(t,e){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[t]=e}}function yt(t,e,n=!1){const r=me||Ne;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r.proxy):e}}const ki={};function nr(t,e,n){return ha(t,e,n)}function ha(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ee){const a=me;let c,l=!1,f=!1;if(ye(t)?(c=()=>t.value,l=Qo(t)):Xt(t)?(c=()=>t,r=!0):$(t)?(f=!0,l=t.some(Xt),c=()=>t.map(k=>{if(ye(k))return k.value;if(Xt(k))return At(k);if(B(k))return vt(k,a,2)})):B(t)?e?c=()=>vt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),De(t,a,3,[p])}:c=Fe,e&&r){const k=c;c=()=>At(k())}let h,p=k=>{h=A.onStop=()=>{vt(k,a,4)}};if(Pn)return p=Fe,e?n&&De(e,a,3,[c(),f?[]:void 0,p]):c(),Fe;let y=f?[]:ki;const S=()=>{if(!!A.active)if(e){const k=A.run();(r||l||(f?k.some((L,V)=>Cn(L,y[V])):Cn(k,y)))&&(h&&h(),De(e,a,3,[k,y===ki?void 0:y,p]),y=k)}else A.run()};S.allowRecurse=!!e;let M;s==="sync"?M=S:s==="post"?M=()=>Ce(S,a&&a.suspense):M=()=>{!a||a.isMounted?$l(S):S()};const A=new Hs(c,M);return e?n?S():y=A.run():s==="post"?Ce(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&Us(a.scope.effects,A)}}function Gl(t,e,n){const r=this.proxy,s=_e(t)?t.includes(".")?pa(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=me;tn(this);const a=ha(s,i.bind(r),n);return o?tn(o):Nt(),a}function pa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function At(t,e){if(!ge(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ye(t))At(t.value,e);else if($(t))for(let n=0;n<t.length;n++)At(t[n],e);else if(Uo(t)||Yt(t))t.forEach(n=>{At(n,e)});else if(Bo(t))for(const n in t)At(t[n],e);return t}function Jl(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ya(()=>{t.isMounted=!0}),ba(()=>{t.isUnmounting=!0}),t}const Me=[Function,Array],Yl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},setup(t,{slots:e}){const n=xu(),r=Jl();let s;return()=>{const i=e.default&&ma(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const M of i)if(M.type!==$e){o=M;break}}const a=G(t),{mode:c}=a;if(r.isLeaving)return Kr(o);const l=Oi(o);if(!l)return Kr(o);const f=hs(l,a,r,n);ps(l,f);const h=n.subTree,p=h&&Oi(h);let y=!1;const{getTransitionKey:S}=l.type;if(S){const M=S();s===void 0?s=M:M!==s&&(s=M,y=!0)}if(p&&p.type!==$e&&(!Ct(l,p)||y)){const M=hs(p,a,r,n);if(ps(p,M),c==="out-in")return r.isLeaving=!0,M.afterLeave=()=>{r.isLeaving=!1,n.update()},Kr(o);c==="in-out"&&l.type!==$e&&(M.delayLeave=(A,k,L)=>{const V=ga(r,p);V[String(p.key)]=p,A._leaveCb=()=>{k(),A._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=L})}return o}}},Xl=Yl;function ga(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function hs(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:y,onLeaveCancelled:S,onBeforeAppear:M,onAppear:A,onAfterAppear:k,onAppearCancelled:L}=e,V=String(t.key),z=ga(n,t),ce=(W,fe)=>{W&&De(W,r,9,fe)},ue={mode:i,persisted:o,beforeEnter(W){let fe=a;if(!n.isMounted)if(s)fe=M||a;else return;W._leaveCb&&W._leaveCb(!0);const te=z[V];te&&Ct(t,te)&&te.el._leaveCb&&te.el._leaveCb(),ce(fe,[W])},enter(W){let fe=c,te=l,we=f;if(!n.isMounted)if(s)fe=A||c,te=k||l,we=L||f;else return;let Ie=!1;const ve=W._enterCb=it=>{Ie||(Ie=!0,it?ce(we,[W]):ce(te,[W]),ue.delayedLeave&&ue.delayedLeave(),W._enterCb=void 0)};fe?(fe(W,ve),fe.length<=1&&ve()):ve()},leave(W,fe){const te=String(t.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return fe();ce(h,[W]);let we=!1;const Ie=W._leaveCb=ve=>{we||(we=!0,fe(),ve?ce(S,[W]):ce(y,[W]),W._leaveCb=void 0,z[te]===t&&delete z[te])};z[te]=t,p?(p(W,Ie),p.length<=1&&Ie()):Ie()},clone(W){return hs(W,e,n,r)}};return ue}function Kr(t){if(Nr(t))return t=xt(t),t.children=null,t}function Oi(t){return Nr(t)?t.children?t.children[0]:void 0:t}function ps(t,e){t.shapeFlag&6&&t.component?ps(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ma(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===de?(o.patchFlag&128&&s++,r=r.concat(ma(o.children,e,a))):(e||o.type!==$e)&&r.push(a!=null?xt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function _a(t){return B(t)?{setup:t,name:t.name}:t}const gs=t=>!!t.type.__asyncLoader,Nr=t=>t.type.__isKeepAlive;function Ql(t,e){va(t,"a",e)}function Zl(t,e){va(t,"da",e)}function va(t,e,n=me){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Dr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Nr(s.parent.vnode)&&eu(r,e,n,s),s=s.parent}}function eu(t,e,n,r){const s=Dr(e,t,r,!0);wa(()=>{Us(r[e],s)},n)}function Dr(t,e,n=me,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;an(),tn(n);const a=De(e,n,t,o);return Nt(),cn(),a});return r?s.unshift(i):s.push(i),i}}const rt=t=>(e,n=me)=>(!Pn||t==="sp")&&Dr(t,e,n),tu=rt("bm"),ya=rt("m"),nu=rt("bu"),ru=rt("u"),ba=rt("bum"),wa=rt("um"),su=rt("sp"),iu=rt("rtg"),ou=rt("rtc");function au(t,e=me){Dr("ec",t,e)}let ms=!0;function cu(t){const e=Ea(t),n=t.proxy,r=t.ctx;ms=!1,e.beforeCreate&&Pi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:y,updated:S,activated:M,deactivated:A,beforeDestroy:k,beforeUnmount:L,destroyed:V,unmounted:z,render:ce,renderTracked:ue,renderTriggered:W,errorCaptured:fe,serverPrefetch:te,expose:we,inheritAttrs:Ie,components:ve,directives:it,filters:$t}=e;if(l&&lu(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ne in o){const Y=o[ne];B(Y)&&(r[ne]=Y.bind(n))}if(s){const ne=s.call(n,n);ge(ne)&&(t.data=Fn(ne))}if(ms=!0,i)for(const ne in i){const Y=i[ne],Re=B(Y)?Y.bind(n,n):B(Y.get)?Y.get.bind(n,n):Fe,Ht=!B(Y)&&B(Y.set)?Y.set.bind(n):Fe,Ye=qe({get:Re,set:Ht});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:He=>Ye.value=He})}if(a)for(const ne in a)Ia(a[ne],r,n,ne);if(c){const ne=B(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(Y=>{tr(Y,ne[Y])})}f&&Pi(f,t,"c");function he(ne,Y){$(Y)?Y.forEach(Re=>ne(Re.bind(n))):Y&&ne(Y.bind(n))}if(he(tu,h),he(ya,p),he(nu,y),he(ru,S),he(Ql,M),he(Zl,A),he(au,fe),he(ou,ue),he(iu,W),he(ba,L),he(wa,z),he(su,te),$(we))if(we.length){const ne=t.exposed||(t.exposed={});we.forEach(Y=>{Object.defineProperty(ne,Y,{get:()=>n[Y],set:Re=>n[Y]=Re})})}else t.exposed||(t.exposed={});ce&&t.render===Fe&&(t.render=ce),Ie!=null&&(t.inheritAttrs=Ie),ve&&(t.components=ve),it&&(t.directives=it)}function lu(t,e,n=Fe,r=!1){$(t)&&(t=_s(t));for(const s in t){const i=t[s];let o;ge(i)?"default"in i?o=yt(i.from||s,i.default,!0):o=yt(i.from||s):o=yt(i),ye(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Pi(t,e,n){De($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ia(t,e,n,r){const s=r.includes(".")?pa(n,r):()=>n[r];if(_e(t)){const i=e[t];B(i)&&nr(s,i)}else if(B(t))nr(s,t.bind(n));else if(ge(t))if($(t))t.forEach(i=>Ia(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&nr(s,i,t)}}function Ea(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>dr(c,l,o,!0)),dr(c,e,o)),i.set(e,c),c}function dr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&dr(t,i,n,!0),s&&s.forEach(o=>dr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=uu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const uu={data:Mi,props:Tt,emits:Tt,methods:Tt,computed:Tt,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Tt,directives:Tt,watch:du,provide:Mi,inject:fu};function Mi(t,e){return e?t?function(){return Ee(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function fu(t,e){return Tt(_s(t),_s(e))}function _s(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function Tt(t,e){return t?Ee(Ee(Object.create(null),t),e):e}function du(t,e){if(!t)return e;if(!e)return t;const n=Ee(Object.create(null),t);for(const r in e)n[r]=Se(t[r],e[r]);return n}function hu(t,e,n,r=!1){const s={},i={};cr(i,xr,1),t.propsDefaults=Object.create(null),Ta(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:kl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function pu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=G(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(kr(t.emitsOptions,p))continue;const y=e[p];if(c)if(q(i,p))y!==i[p]&&(i[p]=y,l=!0);else{const S=Je(p);s[S]=vs(c,a,S,y,t,!1)}else y!==i[p]&&(i[p]=y,l=!0)}}}else{Ta(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!q(e,h)&&((f=on(h))===h||!q(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=vs(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!q(e,h)&&!0)&&(delete i[h],l=!0)}l&&tt(t,"set","$attrs")}function Ta(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Zn(c))continue;const l=e[c];let f;s&&q(s,f=Je(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:kr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=G(n),l=a||ee;for(let f=0;f<i.length;f++){const h=i[f];n[h]=vs(s,c,h,l[h],t,!q(l,h))}}return o}function vs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&B(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(tn(s),r=l[n]=c.call(null,e),Nt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===on(n))&&(r=!0))}return r}function Sa(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const f=h=>{c=!0;const[p,y]=Sa(h,e,!0);Ee(o,p),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return r.set(t,Jt),Jt;if($(i))for(let f=0;f<i.length;f++){const h=Je(i[f]);Ni(h)&&(o[h]=ee)}else if(i)for(const f in i){const h=Je(f);if(Ni(h)){const p=i[f],y=o[h]=$(p)||B(p)?{type:p}:p;if(y){const S=Li(Boolean,y.type),M=Li(String,y.type);y[0]=S>-1,y[1]=M<0||S<M,(S>-1||q(y,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Ni(t){return t[0]!=="$"}function Di(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function xi(t,e){return Di(t)===Di(e)}function Li(t,e){return $(e)?e.findIndex(n=>xi(n,t)):B(e)&&xi(e,t)?0:-1}const Ca=t=>t[0]==="_"||t==="$stable",Js=t=>$(t)?t.map(ze):[ze(t)],gu=(t,e,n)=>{const r=Pt((...s)=>Js(e(...s)),n);return r._c=!1,r},Ra=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ca(s))continue;const i=t[s];if(B(i))e[s]=gu(s,i,r);else if(i!=null){const o=Js(i);e[s]=()=>o}}},Aa=(t,e)=>{const n=Js(e);t.slots.default=()=>n},mu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),cr(e,"_",n)):Ra(e,t.slots={})}else t.slots={},e&&Aa(t,e);cr(t.slots,xr,1)},_u=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ee;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ee(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ra(e,s)),o=e}else e&&(Aa(t,e),o={default:1});if(i)for(const a in s)!Ca(a)&&!(a in o)&&delete s[a]};function mn(t,e){const n=Ne;if(n===null)return t;const r=Ur(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ee]=e[i];B(o)&&(o={mounted:o,updated:o}),o.deep&&At(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function It(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(an(),De(c,n,8,[t.el,a,t,e]),cn())}}function ka(){return{app:null,config:{isNativeTag:Jc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vu=0;function yu(t,e){return function(r,s=null){B(r)||(r=Object.assign({},r)),s!=null&&!ge(s)&&(s=null);const i=ka(),o=new Set;let a=!1;const c=i.app={_uid:vu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ju,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(c,...f)):B(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=ae(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Ur(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function ys(t,e,n,r,s=!1){if($(t)){t.forEach((p,y)=>ys(p,e&&($(e)?e[y]:e),n,r,s));return}if(gs(r)&&!s)return;const i=r.shapeFlag&4?Ur(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===ee?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(_e(l)?(f[l]=null,q(h,l)&&(h[l]=null)):ye(l)&&(l.value=null)),B(c))vt(c,a,12,[o,f]);else{const p=_e(c),y=ye(c);if(p||y){const S=()=>{if(t.f){const M=p?f[c]:c.value;s?$(M)&&Us(M,i):$(M)?M.includes(i)||M.push(i):p?(f[c]=[i],q(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,q(h,c)&&(h[c]=o)):ye(c)&&(c.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,Ce(S,n)):S()}}}const Ce=Kl;function bu(t){return wu(t)}function wu(t,e){const n=tl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:y=Fe,cloneNode:S,insertStaticContent:M}=t,A=(u,d,g,v=null,_=null,I=null,C=!1,w=null,E=!!d.dynamicChildren)=>{if(u===d)return;u&&!Ct(u,d)&&(v=N(u),Pe(u,_,I,!0),u=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:b,ref:D,shapeFlag:O}=d;switch(b){case Ys:k(u,d,g,v);break;case $e:L(u,d,g,v);break;case Gr:u==null&&V(d,g,v,C);break;case de:it(u,d,g,v,_,I,C,w,E);break;default:O&1?ue(u,d,g,v,_,I,C,w,E):O&6?$t(u,d,g,v,_,I,C,w,E):(O&64||O&128)&&b.process(u,d,g,v,_,I,C,w,E,re)}D!=null&&_&&ys(D,u&&u.ref,I,d||u,!d)},k=(u,d,g,v)=>{if(u==null)r(d.el=a(d.children),g,v);else{const _=d.el=u.el;d.children!==u.children&&l(_,d.children)}},L=(u,d,g,v)=>{u==null?r(d.el=c(d.children||""),g,v):d.el=u.el},V=(u,d,g,v)=>{[u.el,u.anchor]=M(u.children,d,g,v,u.el,u.anchor)},z=({el:u,anchor:d},g,v)=>{let _;for(;u&&u!==d;)_=p(u),r(u,g,v),u=_;r(d,g,v)},ce=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},ue=(u,d,g,v,_,I,C,w,E)=>{C=C||d.type==="svg",u==null?W(d,g,v,_,I,C,w,E):we(u,d,_,I,C,w,E)},W=(u,d,g,v,_,I,C,w)=>{let E,b;const{type:D,props:O,shapeFlag:x,transition:F,patchFlag:K,dirs:le}=u;if(u.el&&S!==void 0&&K===-1)E=u.el=S(u.el);else{if(E=u.el=o(u.type,I,O&&O.is,O),x&8?f(E,u.children):x&16&&te(u.children,E,null,v,_,I&&D!=="foreignObject",C,w),le&&It(u,null,v,"created"),O){for(const ie in O)ie!=="value"&&!Zn(ie)&&i(E,ie,null,O[ie],I,u.children,v,_,T);"value"in O&&i(E,"value",null,O.value),(b=O.onVnodeBeforeMount)&&Ve(b,v,u)}fe(E,u,u.scopeId,C,v)}le&&It(u,null,v,"beforeMount");const Q=(!_||_&&!_.pendingBranch)&&F&&!F.persisted;Q&&F.beforeEnter(E),r(E,d,g),((b=O&&O.onVnodeMounted)||Q||le)&&Ce(()=>{b&&Ve(b,v,u),Q&&F.enter(E),le&&It(u,null,v,"mounted")},_)},fe=(u,d,g,v,_)=>{if(g&&y(u,g),v)for(let I=0;I<v.length;I++)y(u,v[I]);if(_){let I=_.subTree;if(d===I){const C=_.vnode;fe(u,C,C.scopeId,C.slotScopeIds,_.parent)}}},te=(u,d,g,v,_,I,C,w,E=0)=>{for(let b=E;b<u.length;b++){const D=u[b]=w?ft(u[b]):ze(u[b]);A(null,D,d,g,v,_,I,C,w)}},we=(u,d,g,v,_,I,C)=>{const w=d.el=u.el;let{patchFlag:E,dynamicChildren:b,dirs:D}=d;E|=u.patchFlag&16;const O=u.props||ee,x=d.props||ee;let F;g&&Et(g,!1),(F=x.onVnodeBeforeUpdate)&&Ve(F,g,d,u),D&&It(d,u,g,"beforeUpdate"),g&&Et(g,!0);const K=_&&d.type!=="foreignObject";if(b?Ie(u.dynamicChildren,b,w,g,v,K,I):C||Re(u,d,w,null,g,v,K,I,!1),E>0){if(E&16)ve(w,d,O,x,g,v,_);else if(E&2&&O.class!==x.class&&i(w,"class",null,x.class,_),E&4&&i(w,"style",O.style,x.style,_),E&8){const le=d.dynamicProps;for(let Q=0;Q<le.length;Q++){const ie=le[Q],Le=O[ie],jt=x[ie];(jt!==Le||ie==="value")&&i(w,ie,Le,jt,_,u.children,g,v,T)}}E&1&&u.children!==d.children&&f(w,d.children)}else!C&&b==null&&ve(w,d,O,x,g,v,_);((F=x.onVnodeUpdated)||D)&&Ce(()=>{F&&Ve(F,g,d,u),D&&It(d,u,g,"updated")},v)},Ie=(u,d,g,v,_,I,C)=>{for(let w=0;w<d.length;w++){const E=u[w],b=d[w],D=E.el&&(E.type===de||!Ct(E,b)||E.shapeFlag&70)?h(E.el):g;A(E,b,D,null,v,_,I,C,!0)}},ve=(u,d,g,v,_,I,C)=>{if(g!==v){for(const w in v){if(Zn(w))continue;const E=v[w],b=g[w];E!==b&&w!=="value"&&i(u,w,b,E,C,d.children,_,I,T)}if(g!==ee)for(const w in g)!Zn(w)&&!(w in v)&&i(u,w,g[w],null,C,d.children,_,I,T);"value"in v&&i(u,"value",g.value,v.value)}},it=(u,d,g,v,_,I,C,w,E)=>{const b=d.el=u?u.el:a(""),D=d.anchor=u?u.anchor:a("");let{patchFlag:O,dynamicChildren:x,slotScopeIds:F}=d;F&&(w=w?w.concat(F):F),u==null?(r(b,g,v),r(D,g,v),te(d.children,g,D,_,I,C,w,E)):O>0&&O&64&&x&&u.dynamicChildren?(Ie(u.dynamicChildren,x,g,_,I,C,w),(d.key!=null||_&&d===_.subTree)&&Oa(u,d,!0)):Re(u,d,g,D,_,I,C,w,E)},$t=(u,d,g,v,_,I,C,w,E)=>{d.slotScopeIds=w,u==null?d.shapeFlag&512?_.ctx.activate(d,g,v,C,E):Bt(d,g,v,_,I,C,E):he(u,d,E)},Bt=(u,d,g,v,_,I,C)=>{const w=u.component=Du(u,v,_);if(Nr(u)&&(w.ctx.renderer=re),Lu(w),w.asyncDep){if(_&&_.registerDep(w,ne),!u.el){const E=w.subTree=ae($e);L(null,E,d,g)}return}ne(w,u,d,g,_,I,C)},he=(u,d,g)=>{const v=d.component=u.component;if(Wl(u,d,g))if(v.asyncDep&&!v.asyncResolved){Y(v,d,g);return}else v.next=d,Fl(v.update),v.update();else d.component=u.component,d.el=u.el,v.vnode=d},ne=(u,d,g,v,_,I,C)=>{const w=()=>{if(u.isMounted){let{next:D,bu:O,u:x,parent:F,vnode:K}=u,le=D,Q;Et(u,!1),D?(D.el=K.el,Y(u,D,C)):D=K,O&&er(O),(Q=D.props&&D.props.onVnodeBeforeUpdate)&&Ve(Q,F,D,K),Et(u,!0);const ie=qr(u),Le=u.subTree;u.subTree=ie,A(Le,ie,h(Le.el),N(Le),u,_,I),D.el=ie.el,le===null&&zl(u,ie.el),x&&Ce(x,_),(Q=D.props&&D.props.onVnodeUpdated)&&Ce(()=>Ve(Q,F,D,K),_)}else{let D;const{el:O,props:x}=d,{bm:F,m:K,parent:le}=u,Q=gs(d);if(Et(u,!1),F&&er(F),!Q&&(D=x&&x.onVnodeBeforeMount)&&Ve(D,le,d),Et(u,!0),O&&H){const ie=()=>{u.subTree=qr(u),H(O,u.subTree,u,_,null)};Q?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ie()):ie()}else{const ie=u.subTree=qr(u);A(null,ie,g,v,u,_,I),d.el=ie.el}if(K&&Ce(K,_),!Q&&(D=x&&x.onVnodeMounted)){const ie=d;Ce(()=>Ve(D,le,ie),_)}d.shapeFlag&256&&u.a&&Ce(u.a,_),u.isMounted=!0,d=g=v=null}},E=u.effect=new Hs(w,()=>aa(u.update),u.scope),b=u.update=E.run.bind(E);b.id=u.uid,Et(u,!0),b()},Y=(u,d,g)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,pu(u,d.props,v,g),_u(u,d.children,g),an(),Gs(void 0,u.update),cn()},Re=(u,d,g,v,_,I,C,w,E=!1)=>{const b=u&&u.children,D=u?u.shapeFlag:0,O=d.children,{patchFlag:x,shapeFlag:F}=d;if(x>0){if(x&128){Ye(b,O,g,v,_,I,C,w,E);return}else if(x&256){Ht(b,O,g,v,_,I,C,w,E);return}}F&8?(D&16&&T(b,_,I),O!==b&&f(g,O)):D&16?F&16?Ye(b,O,g,v,_,I,C,w,E):T(b,_,I,!0):(D&8&&f(g,""),F&16&&te(O,g,v,_,I,C,w,E))},Ht=(u,d,g,v,_,I,C,w,E)=>{u=u||Jt,d=d||Jt;const b=u.length,D=d.length,O=Math.min(b,D);let x;for(x=0;x<O;x++){const F=d[x]=E?ft(d[x]):ze(d[x]);A(u[x],F,g,null,_,I,C,w,E)}b>D?T(u,_,I,!0,!1,O):te(d,g,v,_,I,C,w,E,O)},Ye=(u,d,g,v,_,I,C,w,E)=>{let b=0;const D=d.length;let O=u.length-1,x=D-1;for(;b<=O&&b<=x;){const F=u[b],K=d[b]=E?ft(d[b]):ze(d[b]);if(Ct(F,K))A(F,K,g,null,_,I,C,w,E);else break;b++}for(;b<=O&&b<=x;){const F=u[O],K=d[x]=E?ft(d[x]):ze(d[x]);if(Ct(F,K))A(F,K,g,null,_,I,C,w,E);else break;O--,x--}if(b>O){if(b<=x){const F=x+1,K=F<D?d[F].el:v;for(;b<=x;)A(null,d[b]=E?ft(d[b]):ze(d[b]),g,K,_,I,C,w,E),b++}}else if(b>x)for(;b<=O;)Pe(u[b],_,I,!0),b++;else{const F=b,K=b,le=new Map;for(b=K;b<=x;b++){const Ae=d[b]=E?ft(d[b]):ze(d[b]);Ae.key!=null&&le.set(Ae.key,b)}let Q,ie=0;const Le=x-K+1;let jt=!1,pi=0;const dn=new Array(Le);for(b=0;b<Le;b++)dn[b]=0;for(b=F;b<=O;b++){const Ae=u[b];if(ie>=Le){Pe(Ae,_,I,!0);continue}let je;if(Ae.key!=null)je=le.get(Ae.key);else for(Q=K;Q<=x;Q++)if(dn[Q-K]===0&&Ct(Ae,d[Q])){je=Q;break}je===void 0?Pe(Ae,_,I,!0):(dn[je-K]=b+1,je>=pi?pi=je:jt=!0,A(Ae,d[je],g,null,_,I,C,w,E),ie++)}const gi=jt?Iu(dn):Jt;for(Q=gi.length-1,b=Le-1;b>=0;b--){const Ae=K+b,je=d[Ae],mi=Ae+1<D?d[Ae+1].el:v;dn[b]===0?A(null,je,g,mi,_,I,C,w,E):jt&&(Q<0||b!==gi[Q]?He(je,g,mi,2):Q--)}}},He=(u,d,g,v,_=null)=>{const{el:I,type:C,transition:w,children:E,shapeFlag:b}=u;if(b&6){He(u.component.subTree,d,g,v);return}if(b&128){u.suspense.move(d,g,v);return}if(b&64){C.move(u,d,g,re);return}if(C===de){r(I,d,g);for(let O=0;O<E.length;O++)He(E[O],d,g,v);r(u.anchor,d,g);return}if(C===Gr){z(u,d,g);return}if(v!==2&&b&1&&w)if(v===0)w.beforeEnter(I),r(I,d,g),Ce(()=>w.enter(I),_);else{const{leave:O,delayLeave:x,afterLeave:F}=w,K=()=>r(I,d,g),le=()=>{O(I,()=>{K(),F&&F()})};x?x(I,K,le):le()}else r(I,d,g)},Pe=(u,d,g,v=!1,_=!1)=>{const{type:I,props:C,ref:w,children:E,dynamicChildren:b,shapeFlag:D,patchFlag:O,dirs:x}=u;if(w!=null&&ys(w,null,g,u,!0),D&256){d.ctx.deactivate(u);return}const F=D&1&&x,K=!gs(u);let le;if(K&&(le=C&&C.onVnodeBeforeUnmount)&&Ve(le,d,u),D&6)P(u.component,g,v);else{if(D&128){u.suspense.unmount(g,v);return}F&&It(u,null,d,"beforeUnmount"),D&64?u.type.remove(u,d,g,_,re,v):b&&(I!==de||O>0&&O&64)?T(b,d,g,!1,!0):(I===de&&O&384||!_&&D&16)&&T(E,d,g),v&&Wr(u)}(K&&(le=C&&C.onVnodeUnmounted)||F)&&Ce(()=>{le&&Ve(le,d,u),F&&It(u,null,d,"unmounted")},g)},Wr=u=>{const{type:d,el:g,anchor:v,transition:_}=u;if(d===de){m(g,v);return}if(d===Gr){ce(u);return}const I=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:C,delayLeave:w}=_,E=()=>C(g,I);w?w(u.el,I,E):E()}else I()},m=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},P=(u,d,g)=>{const{bum:v,scope:_,update:I,subTree:C,um:w}=u;v&&er(v),_.stop(),I&&(I.active=!1,Pe(C,u,d,g)),w&&Ce(w,d),Ce(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,g,v=!1,_=!1,I=0)=>{for(let C=I;C<u.length;C++)Pe(u[C],d,g,v,_)},N=u=>u.shapeFlag&6?N(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),X=(u,d,g)=>{u==null?d._vnode&&Pe(d._vnode,null,null,!0):A(d._vnode||null,u,d,null,null,null,g),ua(),d._vnode=u},re={p:A,um:Pe,m:He,r:Wr,mt:Bt,mc:te,pc:Re,pbc:Ie,n:N,o:t};let j,H;return e&&([j,H]=e(re)),{render:X,hydrate:j,createApp:yu(X,j)}}function Et({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Oa(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ft(s[i]),a.el=o.el),n||Oa(o,a))}}function Iu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Eu=t=>t.__isTeleport,Pa="components";function Tu(t,e){return Cu(Pa,t,!0,e)||t}const Su=Symbol();function Cu(t,e,n=!0,r=!1){const s=Ne||me;if(s){const i=s.type;if(t===Pa){const a=Bu(i);if(a&&(a===e||a===Je(e)||a===Cr(Je(e))))return i}const o=Ui(s[t]||i[t],e)||Ui(s.appContext[t],e);return!o&&r?i:o}}function Ui(t,e){return t&&(t[e]||t[Je(e)]||t[Cr(Je(e))])}const de=Symbol(void 0),Ys=Symbol(void 0),$e=Symbol(void 0),Gr=Symbol(void 0),In=[];let Mt=null;function J(t=!1){In.push(Mt=t?null:[])}function Ru(){In.pop(),Mt=In[In.length-1]||null}let hr=1;function Fi(t){hr+=t}function Ma(t){return t.dynamicChildren=hr>0?Mt||Jt:null,Ru(),hr>0&&Mt&&Mt.push(t),t}function oe(t,e,n,r,s,i){return Ma(R(t,e,n,r,s,i,!0))}function Xs(t,e,n,r,s){return Ma(ae(t,e,n,r,s,!0))}function bs(t){return t?t.__v_isVNode===!0:!1}function Ct(t,e){return t.type===e.type&&t.key===e.key}const xr="__vInternal",Na=({key:t})=>t!=null?t:null,rr=({ref:t,ref_key:e,ref_for:n})=>t!=null?_e(t)||ye(t)||B(t)?{i:Ne,r:t,k:e,f:!!n}:t:null;function R(t,e=null,n=null,r=0,s=null,i=t===de?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Na(e),ref:e&&rr(e),scopeId:Or,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Qs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=_e(n)?8:16),hr>0&&!o&&Mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mt.push(c),c}const ae=Au;function Au(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Su)&&(t=$e),bs(t)){const a=xt(t,e,!0);return n&&Qs(a,n),a}if(Hu(t)&&(t=t.__vccOpts),e){e=ku(e);let{class:a,style:c}=e;a&&!_e(a)&&(e.class=xs(a)),ge(c)&&(Zo(c)&&!$(c)&&(c=Ee({},c)),e.style=Ir(c))}const o=_e(t)?1:ql(t)?128:Eu(t)?64:ge(t)?4:B(t)?2:0;return R(t,e,n,r,s,o,i,!0)}function ku(t){return t?Zo(t)||xr in t?Ee({},t):t:null}function xt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Ou(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Na(a),ref:e&&e.ref?n&&s?$(s)?s.concat(rr(e)):[s,rr(e)]:rr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==de?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xt(t.ssContent),ssFallback:t.ssFallback&&xt(t.ssFallback),el:t.el,anchor:t.anchor}}function xe(t=" ",e=0){return ae(Ys,null,t,e)}function Lr(t="",e=!1){return e?(J(),Xs($e,null,t)):ae($e,null,t)}function ze(t){return t==null||typeof t=="boolean"?ae($e):$(t)?ae(de,null,t.slice()):typeof t=="object"?ft(t):ae(Ys,null,String(t))}function ft(t){return t.el===null||t.memo?t:xt(t)}function Qs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Qs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(xr in e)?e._ctx=Ne:s===3&&Ne&&(Ne.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ne},n=32):(e=String(e),r&64?(n=16,e=[xe(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ou(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xs([e.class,r.class]));else if(s==="style")e.style=Ir([e.style,r.style]);else if(Er(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ve(t,e,n,r=null){De(t,e,7,[n,r])}function On(t,e,n,r){let s;const i=n&&n[r];if($(t)||_e(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ge(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ws=t=>t?Da(t)?Ur(t)||t.proxy:ws(t.parent):null,pr=Ee(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ws(t.parent),$root:t=>ws(t.root),$emit:t=>t.emit,$options:t=>Ea(t),$forceUpdate:t=>()=>aa(t.update),$nextTick:t=>oa.bind(t.proxy),$watch:t=>Gl.bind(t)}),Pu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==ee&&q(r,e))return o[e]=1,r[e];if(s!==ee&&q(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&q(l,e))return o[e]=3,i[e];if(n!==ee&&q(n,e))return o[e]=4,n[e];ms&&(o[e]=0)}}const f=pr[e];let h,p;if(f)return e==="$attrs"&&Oe(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ee&&q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,q(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==ee&&q(s,e)?(s[e]=n,!0):r!==ee&&q(r,e)?(r[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ee&&q(t,o)||e!==ee&&q(e,o)||(a=i[0])&&q(a,o)||q(r,o)||q(pr,o)||q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Mu=ka();let Nu=0;function Du(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Mu,i={uid:Nu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new nl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sa(r,s),emitsOptions:da(r,s),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Hl.bind(null,i),t.ce&&t.ce(i),i}let me=null;const xu=()=>me||Ne,tn=t=>{me=t,t.scope.on()},Nt=()=>{me&&me.scope.off(),me=null};function Da(t){return t.vnode.shapeFlag&4}let Pn=!1;function Lu(t,e=!1){Pn=e;const{props:n,children:r}=t.vnode,s=Da(t);hu(t,n,s,e),mu(t,r);const i=s?Uu(t,e):void 0;return Pn=!1,i}function Uu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ea(new Proxy(t.ctx,Pu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?$u(t):null;tn(t),an();const i=vt(r,t,0,[t.props,s]);if(cn(),Nt(),Fo(i)){if(i.then(Nt,Nt),e)return i.then(o=>{$i(t,o,e)}).catch(o=>{Ar(o,t,0)});t.asyncDep=i}else $i(t,i,e)}else xa(t,e)}function $i(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=sa(e)),xa(t,n)}let Bi;function xa(t,e,n){const r=t.type;if(!t.render){if(!e&&Bi&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ee(Ee({isCustomElement:i,delimiters:a},o),c);r.render=Bi(s,l)}}t.render=r.render||Fe}tn(t),an(),cu(t),cn(),Nt()}function Fu(t){return new Proxy(t.attrs,{get(e,n){return Oe(t,"get","$attrs"),e[n]}})}function $u(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Fu(t))},slots:t.slots,emit:t.emit,expose:e}}function Ur(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(sa(ea(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pr)return pr[n](t)}}))}function Bu(t){return B(t)&&t.displayName||t.name}function Hu(t){return B(t)&&"__vccOpts"in t}const qe=(t,e)=>xl(t,e,Pn);function La(t,e,n){const r=arguments.length;return r===2?ge(e)&&!$(e)?bs(e)?ae(t,null,[e]):ae(t,e):ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&bs(n)&&(n=[n]),ae(t,e,n))}const ju="3.2.33",Vu="http://www.w3.org/2000/svg",Rt=typeof document!="undefined"?document:null,Hi=Rt&&Rt.createElement("template"),Wu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Rt.createElementNS(Vu,t):Rt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rt.createTextNode(t),createComment:t=>Rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hi.innerHTML=r?`<svg>${t}</svg>`:t;const a=Hi.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function zu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function qu(t,e,n){const r=t.style,s=_e(n);if(n&&!s){for(const i in n)Is(r,i,n[i]);if(e&&!_e(e))for(const i in e)n[i]==null&&Is(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ji=/\s*!important$/;function Is(t,e,n){if($(n))n.forEach(r=>Is(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ku(t,e);ji.test(n)?t.setProperty(on(r),n.replace(ji,""),"important"):t[r]=n}}const Vi=["Webkit","Moz","ms"],Jr={};function Ku(t,e){const n=Jr[e];if(n)return n;let r=Je(e);if(r!=="filter"&&r in t)return Jr[e]=r;r=Cr(r);for(let s=0;s<Vi.length;s++){const i=Vi[s]+r;if(i in t)return Jr[e]=i}return e}const Wi="http://www.w3.org/1999/xlink";function Gu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Wi,e.slice(6,e.length)):t.setAttributeNS(Wi,e,n);else{const i=zc(e);n==null||i&&!xo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ju(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=xo(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Ua,Yu]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Es=0;const Xu=Promise.resolve(),Qu=()=>{Es=0},Zu=()=>Es||(Xu.then(Qu),Es=Ua());function qt(t,e,n,r){t.addEventListener(e,n,r)}function ef(t,e,n,r){t.removeEventListener(e,n,r)}function tf(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=nf(e);if(r){const l=i[e]=rf(r,s);qt(t,a,l,c)}else o&&(ef(t,a,o,c),i[e]=void 0)}}const zi=/(?:Once|Passive|Capture)$/;function nf(t){let e;if(zi.test(t)){e={};let n;for(;n=t.match(zi);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[on(t.slice(2)),e]}function rf(t,e){const n=r=>{const s=r.timeStamp||Ua();(Yu||s>=n.attached-1)&&De(sf(r,n.value),e,5,[r])};return n.value=t,n.attached=Zu(),n}function sf(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const qi=/^on[a-z]/,of=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?zu(t,r,s):e==="style"?qu(t,n,r):Er(e)?Ls(e)||tf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):af(t,e,r,s))?Ju(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Gu(t,e,r,s))};function af(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&qi.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||qi.test(e)&&_e(n)?!1:e in t}const cf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Xl.props;const Ki=t=>{const e=t.props["onUpdate:modelValue"];return $(e)?n=>er(e,n):e};function lf(t){t.target.composing=!0}function Gi(t){const e=t.target;e.composing&&(e.composing=!1,uf(e,"input"))}function uf(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const _n={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ki(s);const i=r||s.props&&s.props.type==="number";qt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=lr(a)),t._assign(a)}),n&&qt(t,"change",()=>{t.value=t.value.trim()}),e||(qt(t,"compositionstart",lf),qt(t,"compositionend",Gi),qt(t,"change",Gi))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ki(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&lr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},ff=Ee({patchProp:of},Wu);let Ji;function df(){return Ji||(Ji=bu(ff))}const hf=(...t)=>{const e=df().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=pf(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function pf(t){return _e(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Fa=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ln=t=>Fa?Symbol(t):"_vr_"+t,gf=ln("rvlm"),Yi=ln("rvd"),Zs=ln("r"),$a=ln("rl"),Ts=ln("rvl"),Kt=typeof window!="undefined";function mf(t){return t.__esModule||Fa&&t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function Yr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const En=()=>{},_f=/\/$/,vf=t=>t.replace(_f,"");function Xr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=If(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function yf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&nn(e.matched[r],n.matched[s])&&Ba(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function nn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ba(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wf(t[n],e[n]))return!1;return!0}function wf(t,e){return Array.isArray(t)?Qi(t,e):Array.isArray(e)?Qi(e,t):t===e}function Qi(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function If(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Mn;(function(t){t.pop="pop",t.push="push"})(Mn||(Mn={}));var Tn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Tn||(Tn={}));function Ef(t){if(!t)if(Kt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vf(t)}const Tf=/^[^#]+#/;function Sf(t,e){return t.replace(Tf,"#")+e}function Cf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Fr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Rf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Cf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Zi(t,e){return(history.state?history.state.position-e:-1)+t}const Ss=new Map;function Af(t,e){Ss.set(t,e)}function kf(t){const e=Ss.get(t);return Ss.delete(t),e}let Of=()=>location.protocol+"//"+location.host;function Ha(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Xi(c,"")}return Xi(n,t)+r+s}function Pf(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const y=Ha(t,location),S=n.value,M=e.value;let A=0;if(p){if(n.value=y,e.value=p,o&&o===S){o=null;return}A=M?p.position-M.position:0}else r(y);s.forEach(k=>{k(n.value,S,{delta:A,type:Mn.pop,direction:A?A>0?Tn.forward:Tn.back:Tn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const y=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(y),y}function f(){const{history:p}=window;!p.state||p.replaceState(Z({},p.state,{scroll:Fr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function eo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Fr():null}}function Mf(t){const{history:e,location:n}=window,r={value:Ha(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Of()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(y){console.error(y),n[f?"replace":"assign"](p)}}function o(c,l){const f=Z({},e.state,eo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=Z({},s.value,e.state,{forward:c,scroll:Fr()});i(f.current,f,!0);const h=Z({},eo(r.value,c,null),{position:f.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Nf(t){t=Ef(t);const e=Mf(t),n=Pf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Z({location:"",base:t,go:r,createHref:Sf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Df(t){return typeof t=="string"||t&&typeof t=="object"}function ja(t){return typeof t=="string"||typeof t=="symbol"}const at={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Va=ln("nf");var to;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(to||(to={}));function rn(t,e){return Z(new Error,{type:t,[Va]:!0},e)}function ct(t,e){return t instanceof Error&&Va in t&&(e==null||!!(t.type&e))}const no="[^/]+?",xf={sensitive:!1,strict:!1,start:!0,end:!0},Lf=/[.+*?^${}()[\]/\\]/g;function Uf(t,e){const n=Z({},xf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let y=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Lf,"\\$&"),y+=40;else if(p.type===1){const{value:S,repeatable:M,optional:A,regexp:k}=p;i.push({name:S,repeatable:M,optional:A});const L=k||no;if(L!==no){y+=10;try{new RegExp(`(${L})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${L}): `+z.message)}}let V=M?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(V=A&&l.length<2?`(?:/${V})`:"/"+V),A&&(V+="?"),s+=V,y+=20,A&&(y+=-8),M&&(y+=-20),L===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const y=f[p]||"",S=i[p-1];h[S.name]=y&&S.repeatable?y.split("/"):y}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const y of p)if(y.type===0)f+=y.value;else if(y.type===1){const{value:S,repeatable:M,optional:A}=y,k=S in l?l[S]:"";if(Array.isArray(k)&&!M)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const L=Array.isArray(k)?k.join("/"):k;if(!L)if(A)p.length<2&&t.length>1&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);f+=L}}return f}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ff(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function $f(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ff(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Bf={type:0,value:""},Hf=/[a-zA-Z0-9_]/;function jf(t){if(!t)return[[]];if(t==="/")return[[Bf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Hf.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Vf(t,e,n){const r=Uf(jf(t.path),n),s=Z(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Wf(t,e){const n=[],r=new Map;e=so({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const y=!p,S=qf(f);S.aliasOf=p&&p.record;const M=so(e,f),A=[S];if("alias"in f){const V=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of V)A.push(Z({},S,{components:p?p.record.components:S.components,path:z,aliasOf:p?p.record:S}))}let k,L;for(const V of A){const{path:z}=V;if(h&&z[0]!=="/"){const ce=h.record.path,ue=ce[ce.length-1]==="/"?"":"/";V.path=h.record.path+(z&&ue+z)}if(k=Vf(V,h,M),p?p.alias.push(k):(L=L||k,L!==k&&L.alias.push(k),y&&f.name&&!ro(k)&&o(f.name)),"children"in S){const ce=S.children;for(let ue=0;ue<ce.length;ue++)i(ce[ue],k,p&&p.children[ue])}p=p||k,c(k)}return L?()=>{o(L)}:En}function o(f){if(ja(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&$f(f,n[h])>=0&&(f.record.path!==n[h].record.path||!Wa(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!ro(f)&&r.set(f.record.name,f)}function l(f,h){let p,y={},S,M;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw rn(1,{location:f});M=p.record.name,y=Z(zf(h.params,p.keys.filter(L=>!L.optional).map(L=>L.name)),f.params),S=p.stringify(y)}else if("path"in f)S=f.path,p=n.find(L=>L.re.test(S)),p&&(y=p.parse(S),M=p.record.name);else{if(p=h.name?r.get(h.name):n.find(L=>L.re.test(h.path)),!p)throw rn(1,{location:f,currentLocation:h});M=p.record.name,y=Z({},h.params,f.params),S=p.stringify(y)}const A=[];let k=p;for(;k;)A.unshift(k.record),k=k.parent;return{name:M,path:S,params:y,matched:A,meta:Gf(A)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function zf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function qf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Kf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Kf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function ro(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Gf(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function so(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Wa(t,e){return e.children.some(n=>n===t||Wa(t,n))}const za=/#/g,Jf=/&/g,Yf=/\//g,Xf=/=/g,Qf=/\?/g,qa=/\+/g,Zf=/%5B/g,ed=/%5D/g,Ka=/%5E/g,td=/%60/g,Ga=/%7B/g,nd=/%7C/g,Ja=/%7D/g,rd=/%20/g;function ei(t){return encodeURI(""+t).replace(nd,"|").replace(Zf,"[").replace(ed,"]")}function sd(t){return ei(t).replace(Ga,"{").replace(Ja,"}").replace(Ka,"^")}function Cs(t){return ei(t).replace(qa,"%2B").replace(rd,"+").replace(za,"%23").replace(Jf,"%26").replace(td,"`").replace(Ga,"{").replace(Ja,"}").replace(Ka,"^")}function id(t){return Cs(t).replace(Xf,"%3D")}function od(t){return ei(t).replace(za,"%23").replace(Qf,"%3F")}function ad(t){return t==null?"":od(t).replace(Yf,"%2F")}function gr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function cd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(qa," "),o=i.indexOf("="),a=gr(o<0?i:i.slice(0,o)),c=o<0?null:gr(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function io(t){let e="";for(let n in t){const r=t[n];if(n=id(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Cs(i)):[r&&Cs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ld(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function hn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function dt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(rn(4,{from:n,to:e})):h instanceof Error?a(h):Df(h)?a(rn(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function Qr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ud(a)){const l=(a.__vccOpts||a)[e];l&&s.push(dt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=mf(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&dt(p,n,r,i,o)()}))}}return s}function ud(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function oo(t){const e=yt(Zs),n=yt($a),r=qe(()=>e.resolve(be(t.to))),s=qe(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(nn.bind(null,f));if(p>-1)return p;const y=ao(c[l-2]);return l>1&&ao(f)===y&&h[h.length-1].path!==y?h.findIndex(nn.bind(null,c[l-2])):p}),i=qe(()=>s.value>-1&&hd(n.params,r.value.params)),o=qe(()=>s.value>-1&&s.value===n.matched.length-1&&Ba(n.params,r.value.params));function a(c={}){return dd(c)?e[be(t.replace)?"replace":"push"](be(t.to)).catch(En):Promise.resolve()}return{route:r,href:qe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const fd=_a({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:oo,setup(t,{slots:e}){const n=Fn(oo(t)),{options:r}=yt(Zs),s=qe(()=>({[co(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[co(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:La("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),kt=fd;function dd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function hd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ao(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const co=(t,e,n)=>t!=null?t:e!=null?e:n,pd=_a({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=yt(Ts),s=qe(()=>t.route||r.value),i=yt(Yi,0),o=qe(()=>s.value.matched[i]);tr(Yi,i+1),tr(gf,o),tr(Ts,s);const a=Ol();return nr(()=>[a.value,o.value,t.name],([c,l,f],[h,p,y])=>{l&&(l.instances[f]=c,p&&p!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),c&&l&&(!p||!nn(l,p)||!h)&&(l.enterCallbacks[f]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,f=l&&l.components[t.name],h=t.name;if(!f)return lo(n.default,{Component:f,route:c});const p=l.props[t.name],y=p?p===!0?c.params:typeof p=="function"?p(c):p:null,M=La(f,Z({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return lo(n.default,{Component:M,route:c})||M}}});function lo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ya=pd;function gd(t){const e=Wf(t.routes,t),n=t.parseQuery||cd,r=t.stringifyQuery||io,s=t.history,i=hn(),o=hn(),a=hn(),c=Pl(at);let l=at;Kt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Yr.bind(null,m=>""+m),h=Yr.bind(null,ad),p=Yr.bind(null,gr);function y(m,P){let T,N;return ja(m)?(T=e.getRecordMatcher(m),N=P):N=m,e.addRoute(N,T)}function S(m){const P=e.getRecordMatcher(m);P&&e.removeRoute(P)}function M(){return e.getRoutes().map(m=>m.record)}function A(m){return!!e.getRecordMatcher(m)}function k(m,P){if(P=Z({},P||c.value),typeof m=="string"){const H=Xr(n,m,P.path),u=e.resolve({path:H.path},P),d=s.createHref(H.fullPath);return Z(H,u,{params:p(u.params),hash:gr(H.hash),redirectedFrom:void 0,href:d})}let T;if("path"in m)T=Z({},m,{path:Xr(n,m.path,P.path).path});else{const H=Z({},m.params);for(const u in H)H[u]==null&&delete H[u];T=Z({},m,{params:h(m.params)}),P.params=h(P.params)}const N=e.resolve(T,P),X=m.hash||"";N.params=f(p(N.params));const re=yf(r,Z({},m,{hash:sd(X),path:N.path})),j=s.createHref(re);return Z({fullPath:re,hash:X,query:r===io?ld(m.query):m.query||{}},N,{redirectedFrom:void 0,href:j})}function L(m){return typeof m=="string"?Xr(n,m,c.value.path):Z({},m)}function V(m,P){if(l!==m)return rn(8,{from:P,to:m})}function z(m){return W(m)}function ce(m){return z(Z(L(m),{replace:!0}))}function ue(m){const P=m.matched[m.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let N=typeof T=="function"?T(m):T;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=L(N):{path:N},N.params={}),Z({query:m.query,hash:m.hash,params:m.params},N)}}function W(m,P){const T=l=k(m),N=c.value,X=m.state,re=m.force,j=m.replace===!0,H=ue(T);if(H)return W(Z(L(H),{state:X,force:re,replace:j}),P||T);const u=T;u.redirectedFrom=P;let d;return!re&&bf(r,N,T)&&(d=rn(16,{to:u,from:N}),Ht(N,N,!0,!1)),(d?Promise.resolve(d):te(u,N)).catch(g=>ct(g)?ct(g,2)?g:Re(g):ne(g,u,N)).then(g=>{if(g){if(ct(g,2))return W(Z(L(g.to),{state:X,force:re,replace:j}),P||u)}else g=Ie(u,N,!0,j,X);return we(u,N,g),g})}function fe(m,P){const T=V(m,P);return T?Promise.reject(T):Promise.resolve()}function te(m,P){let T;const[N,X,re]=md(m,P);T=Qr(N.reverse(),"beforeRouteLeave",m,P);for(const H of N)H.leaveGuards.forEach(u=>{T.push(dt(u,m,P))});const j=fe.bind(null,m,P);return T.push(j),Vt(T).then(()=>{T=[];for(const H of i.list())T.push(dt(H,m,P));return T.push(j),Vt(T)}).then(()=>{T=Qr(X,"beforeRouteUpdate",m,P);for(const H of X)H.updateGuards.forEach(u=>{T.push(dt(u,m,P))});return T.push(j),Vt(T)}).then(()=>{T=[];for(const H of m.matched)if(H.beforeEnter&&!P.matched.includes(H))if(Array.isArray(H.beforeEnter))for(const u of H.beforeEnter)T.push(dt(u,m,P));else T.push(dt(H.beforeEnter,m,P));return T.push(j),Vt(T)}).then(()=>(m.matched.forEach(H=>H.enterCallbacks={}),T=Qr(re,"beforeRouteEnter",m,P),T.push(j),Vt(T))).then(()=>{T=[];for(const H of o.list())T.push(dt(H,m,P));return T.push(j),Vt(T)}).catch(H=>ct(H,8)?H:Promise.reject(H))}function we(m,P,T){for(const N of a.list())N(m,P,T)}function Ie(m,P,T,N,X){const re=V(m,P);if(re)return re;const j=P===at,H=Kt?history.state:{};T&&(N||j?s.replace(m.fullPath,Z({scroll:j&&H&&H.scroll},X)):s.push(m.fullPath,X)),c.value=m,Ht(m,P,T,j),Re()}let ve;function it(){ve||(ve=s.listen((m,P,T)=>{const N=k(m),X=ue(N);if(X){W(Z(X,{replace:!0}),N).catch(En);return}l=N;const re=c.value;Kt&&Af(Zi(re.fullPath,T.delta),Fr()),te(N,re).catch(j=>ct(j,12)?j:ct(j,2)?(W(j.to,N).then(H=>{ct(H,20)&&!T.delta&&T.type===Mn.pop&&s.go(-1,!1)}).catch(En),Promise.reject()):(T.delta&&s.go(-T.delta,!1),ne(j,N,re))).then(j=>{j=j||Ie(N,re,!1),j&&(T.delta?s.go(-T.delta,!1):T.type===Mn.pop&&ct(j,20)&&s.go(-1,!1)),we(N,re,j)}).catch(En)}))}let $t=hn(),Bt=hn(),he;function ne(m,P,T){Re(m);const N=Bt.list();return N.length?N.forEach(X=>X(m,P,T)):console.error(m),Promise.reject(m)}function Y(){return he&&c.value!==at?Promise.resolve():new Promise((m,P)=>{$t.add([m,P])})}function Re(m){return he||(he=!m,it(),$t.list().forEach(([P,T])=>m?T(m):P()),$t.reset()),m}function Ht(m,P,T,N){const{scrollBehavior:X}=t;if(!Kt||!X)return Promise.resolve();const re=!T&&kf(Zi(m.fullPath,0))||(N||!T)&&history.state&&history.state.scroll||null;return oa().then(()=>X(m,P,re)).then(j=>j&&Rf(j)).catch(j=>ne(j,m,P))}const Ye=m=>s.go(m);let He;const Pe=new Set;return{currentRoute:c,addRoute:y,removeRoute:S,hasRoute:A,getRoutes:M,resolve:k,options:t,push:z,replace:ce,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Bt.add,isReady:Y,install(m){const P=this;m.component("RouterLink",kt),m.component("RouterView",Ya),m.config.globalProperties.$router=P,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>be(c)}),Kt&&!He&&c.value===at&&(He=!0,z(s.location).catch(X=>{}));const T={};for(const X in at)T[X]=qe(()=>c.value[X]);m.provide(Zs,P),m.provide($a,Fn(T)),m.provide(Ts,c);const N=m.unmount;Pe.add(m),m.unmount=function(){Pe.delete(m),Pe.size<1&&(l=at,ve&&ve(),ve=null,c.value=at,He=!1,he=!1),N()}}}}function Vt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function md(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>nn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>nn(l,c))||s.push(c))}return[n,r,s]}var st=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const ti=t=>(Pr("data-v-494c3f2b"),t=t(),Mr(),t),_d=ti(()=>R("a",{href:"https://vuejs.org/",target:"_blank"},"VueJS",-1)),vd=ti(()=>R("a",{href:"https://firebase.google.com/",target:"_blank"},"Firebase",-1)),yd=ti(()=>R("a",{href:"https://github.com/loshido",target:"_blank"},"Github",-1)),bd=xe("Home"),wd=xe("Scripts"),Id=xe("Life"),Ed={setup(t){return(e,n)=>(J(),oe("nav",null,[_d,vd,yd,ae(be(kt),{to:"/","active-class":"active"},{default:Pt(()=>[bd]),_:1}),ae(be(kt),{to:"/shop","active-class":"active"},{default:Pt(()=>[wd]),_:1}),ae(be(kt),{"active-class":"active",to:"/life/me"},{default:Pt(()=>[Id]),_:1}),ae(be(kt),{to:"/auth",id:"user"})]))}};var Xa=st(Ed,[["__scopeId","data-v-494c3f2b"]]);const Td=t=>(Pr("data-v-42ae8495"),t=t(),Mr(),t),Sd=Td(()=>R("h1",null,[R("a",null,"Echo")],-1)),Cd={setup(t){return(e,n)=>(J(),oe("header",null,[Sd,ae(Xa)]))}};var Rd=st(Cd,[["__scopeId","data-v-42ae8495"]]);const Ad=R("h3",null,"Copyrights \xA92022 Loshido",-1),kd={setup(t){return(e,n)=>(J(),oe(de,null,[ae(Rd,{id:"header"}),ae(be(Ya)),R("footer",null,[Ad,ae(Xa)])],64))}};var Od="/assets/encryption.240496fc.svg",Pd="/assets/finishline.f2c54ee6.svg",Md="/assets/inspiration.f54dba38.svg",Nd="/assets/investing.90175cb0.svg",Dd="/assets/moving.c645aebb.svg",xd="/assets/relax.2d0d9534.svg",Ld="/assets/sheet.eafe0f09.svg",Ud="/assets/videographer.3f2fc966.svg",Fd="/assets/warning.4a0e2241.svg",$d="/assets/working.05f83d43.svg";function Bd(){return[{title:"VueJS",content:"Un approchable, performant et versatile framework pour cr\xE9er des pages web avec interface utilisateur.",rgb:"rgba(108, 147, 128, 0.85)",identifier:"vue",image:{src:"https://vuejs.org/images/logo.png",alt:"VueJS"}},{title:"Javascript",content:"JavaScript (JS) est le plus connu language de code pour les pages Web.",rgb:"rgba(147, 147, 108, 0.85)",identifier:"js",image:{src:"https://www.developpez.net/forums/attachments/p294178d1/a/a/a",alt:"JavaScript"}},{title:"HTML",content:`HTML signifie "HyperText Markup Language" qui se traduit par "language de balises pour l'hypertexte" `,rgb:"rgba(108, 147, 128, 0.85)",identifier:"html",image:{src:"https://cdn-icons-png.flaticon.com/512/732/732212.png",alt:"Image"}},{title:"CSS",content:"CSS est l'un des languages principaux du Web, Il sert d'apparence sur les pages Web",rgb:"rgba(108, 147, 147,0.85)",identifier:"css",image:{src:"https://cdn-icons-png.flaticon.com/512/732/732190.png",alt:"Image"}}]}function Hd(){return[{title:"Far far away",content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary"},{title:"Werther",content:"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my"},{title:"Kafka",content:"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The"},{title:"Pangram",content:"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens"},{title:"Cicero",content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui"}]}const Rs={header:`<strong>Bienvenue</strong>, cette page est un essai technique. J'apprends \xE0 utiliser <a class="link" target="_blank" href="https://vuejs.org/">VueJS</a> et en effet, il faut commencer par quelque chose sinon on reste bloqu\xE9 \xE0 rien savoir faire. Finalement, cette demo technique sera surement manipul\xE9e de pleins de fa\xE7ons diff\xE9rentes pour comprendre le fonctionnement de ce framework.`,warning:'Page inspir\xE9e initialement du site officiel de <a class="link" href="https://fivem.net">FiveM</a>, \xC9tant donn\xE9 que ma page est seulement faite pour apprendre.',nolimits:"<i><q>Mesurer les progr\xE8s de la programmation en lignes de code, c\u2019est comme mesurer les progr\xE8s de la construction d\u2019un avion en poids.</q></i>"},Qe=[{title:"Encryption",key:"encryption",content:"Encryption Text",path:"/shop/encryption",image:{src:Od,alt:"encryption"}},{title:"FinishLine",content:"Finish Line Text",key:"finishline",path:"/shop/finishline",image:{src:Pd,alt:"finishline"}},{title:"Inspiration",content:"Inspiration Text",key:"inspiration",path:"/shop/inspiration",image:{src:Md,alt:"inspiration"}},{title:"investing",content:"investing Text",key:"investing",path:"/shop/investing",image:{src:Nd,alt:"investing"}},{title:"moving",content:"moving Text",key:"moving",path:"/shop/moving",image:{src:Dd,alt:"moving"}},{title:"relax",content:"relax Text",key:"relax",path:"/shop/relax",image:{src:xd,alt:"relax"}},{title:"sheet",content:"sheet Text",key:"sheet",path:"/shop/sheet",image:{src:Ld,alt:"sheet"}},{title:"videographer",content:"videographer Text",key:"videographer",path:"/shop/videographer",image:{src:Ud,alt:"videographer"}},{title:"warning",content:"warning Text",key:"warning",path:"/shop/warning",image:{src:Fd,alt:"warning"}},{title:"working",content:"working Text",key:"working",path:"/shop/working",image:{src:$d,alt:"working"}}];function jd(t){for(var e=0;e<Qe.length;e++)for(var n in Qe[e])if(typeof Qe[e][n]=="string"&&Qe[e][n]==t)return Qe[e]}const Vd={id:"s1"},Wd=["innerHTML"],zd={id:"s2"},qd=xe("Shop"),Kd={setup(t){return(e,n)=>(J(),oe("main",null,[R("div",Vd,[R("p",{innerHTML:be(Rs).header},null,8,Wd)]),R("div",zd,[ae(be(kt),{to:"/shop"},{default:Pt(()=>[qd]),_:1})])]))}};var Gd=st(Kd,[["__scopeId","data-v-3981898c"]]);const Jd={props:["title","content","rgb","image"]},Yd=["src","alt"];function Xd(t,e,n,r,s,i){return J(),oe("article",{style:Ir({"background-color":n.rgb,border:"3px solid "+n.rgb})},[n.image?(J(),oe("img",{key:0,class:"logo",src:n.image.src,alt:n.image.alt},null,8,Yd)):Lr("",!0),R("h1",null,pe(n.title),1),R("p",null,pe(n.content),1)],4)}var Qd=st(Jd,[["render",Xd],["__scopeId","data-v-067e2133"]]);const Zd={id:"head"},eh={id:"container"},th=["innerHTML"],nh={class:"module"},rh=R("h1",{id:"features-title"},"Features",-1),sh={class:"features-holder"},ih=["innerHTML"],oh={class:"module",id:"faq"},ah=R("h1",null,"F.A.Q.",-1),ch=["id"],lh={class:"faq-title"},uh=R("a",{href:"#",class:"link"},"#",-1),fh={class:"faq-content"},dh={setup(t){return(e,n)=>(J(),oe(de,null,[R("section",Zd,[R("div",eh,[ae(Gd)]),R("p",{id:"ut",innerHTML:be(Rs).warning},null,8,th)]),R("section",nh,[rh,R("div",sh,[(J(!0),oe(de,null,On(be(Bd)(),r=>(J(),Xs(Qd,{title:r.title,content:r.content,rgb:r.rgb,image:r.image},null,8,["title","content","rgb","image"]))),256))]),R("h2",{innerHTML:be(Rs).nolimits},null,8,ih)]),R("section",oh,[ah,(J(!0),oe(de,null,On(be(Hd)(),(r,s)=>(J(),oe("div",{class:"faq",id:s},[R("h2",lh,[uh,xe(" "+pe(r.title),1)]),R("p",fh,pe(r.content),1)],8,ch))),256))])],64))}};const hh={props:["item"]},ph={id:"img"},gh=["src","alt"],mh={id:"content"},_h=xe("En savoir plus");function vh(t,e,n,r,s,i){const o=Tu("RouterLink");return J(),oe("article",null,[R("div",ph,[R("h1",null,pe(n.item.title),1),R("img",{src:n.item.image.src,alt:n.item.image.alt},null,8,gh)]),R("div",mh,[R("main",null,[R("p",null,pe(n.item.content),1)]),ae(o,{to:n.item.path},{default:Pt(()=>[_h]),_:1},8,["to"])])])}var yh=st(hh,[["render",vh],["__scopeId","data-v-53cd9779"]]);const bh={id:"page"},wh={key:0,id:"warning"},Ih={class:"container"},Eh={class:"row"},Th={data(){return{isLogged:!1}},methods:{getRows(){if(Qe.length==0)return!1;const t=Math.floor(Qe.length/4.1)+1,e=[];if(t==1)return e[0]=[],Qe.forEach((n,r)=>{e[0][r]=n}),console.log(e),e;for(let n=0;n<t;n++)e[n]=[],Qe.forEach((r,s)=>{s<=n*4+3&&s>=n*4&&(e[n][s-n*4]=r)});return e}}},Sh=Object.assign(Th,{setup(t){return(e,n)=>(J(),oe("div",bh,[e.getRows()?Lr("",!0):(J(),oe("h1",wh,"\u26A0\uFE0F\u200B Il n'y a pas d'articles disponible \u26A0\uFE0F\u200B")),(J(!0),oe(de,null,On(e.getRows(),(r,s)=>(J(),oe("div",Ih,[R("div",Eh,[(J(!0),oe(de,null,On(r,(i,o)=>(J(),Xs(yh,{item:i},null,8,["item"]))),256))])]))),256))]))}});var Ch=st(Sh,[["__scopeId","data-v-1db92aef"]]);const Rh={id:"retour"},Ah=xe("Revenir"),kh={key:0,id:"article-container"},Oh={id:"article-img"},Ph=["src","alt"],Mh={id:"article-content"},Nh=["textContent"],Dh=["innerHTML"],xh={props:["article"],data(){return{page:{}}},created(){this.page=jd(this.article)}},Lh=Object.assign(xh,{setup(t){return(e,n)=>(J(),oe(de,null,[R("h1",Rh,[ae(be(kt),{to:"/shop"},{default:Pt(()=>[Ah]),_:1})]),t.article!=""?(J(),oe("div",kh,[R("div",Oh,[R("img",{src:e.page.image.src,alt:e.page.image.alt},null,8,Ph)]),R("div",Mh,[R("h1",{textContent:pe(e.page.title)},null,8,Nh),R("p",{innerHTML:e.page.content},null,8,Dh)])])):Lr("",!0)],64))}});var Uh=st(Lh,[["__scopeId","data-v-320f3c08"]]);const Fh={props:["time"],data(){return{weeks:0,first:new Date(2006,1,3,0,0,0,0),today:new Date,current:new Date(2006,1,3,0,0,0,0),input:""}},watch:{input(t){var e=new Date(t).getTime();console.log(new Date(t).getFullYear()),new Date(t).getFullYear()>1900&&(this.$router.push({name:"life",params:{time:e}}),setTimeout(()=>{location.reload()},100))}},methods:{getSpecificWeeks(t){return Math.ceil(this.diffDays(t,this.today)/7)},toMonth(t){return["Janvier","F\xE9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xFBt","Septembre","Octobre","Novembre","D\xE9cembre"][t.getMonth()]},diffDays(t,e){return Math.ceil(Math.abs(t-e)/(1e3*60*60*24))},addDay(t,e){return t.setDate(t.getDate()+e),t},getDay(t){var e=new Date(this.current.getTime());if(e=this.addDay(e,t*7-7),t!=1)for(;e.getDay()!=1;)e=this.addDay(e,-1);return e},toExposed(t){const e={date:t.getDate(),month:this.toMonth(t),year:t.getFullYear()};for(t=this.addDay(t,7);t.getDay()!=1;)t=this.addDay(t,-1);const n=t.getDate();return e.date+"-"+n+" "+e.month+" "+e.year},CubeClicked(t){const e=document.getElementById(t+"cube");e.style.animation="clicked 1s ease-in-out",setTimeout(()=>{e.style.animation=""},1e3)},getNewDate(t){return typeof t=="string"&&(t=lr(t)),t instanceof Date||(t=new Date(t)),t.getDate()+" "+this.toMonth(t)+" "+t.getFullYear()}},created(){this.time!="me"&&(this.current=new Date,this.current.setTime(this.time)),this.weeks=Math.ceil(this.diffDays(this.current,this.today)/7)}},Qa=t=>(Pr("data-v-5e8df9ba"),t=t(),Mr(),t),$h=["textContent"],Bh=xe(" semaines que je vies \u{1F9A6}."),Hh={key:0},jh={key:1},Vh={key:2},Wh={id:"aside"},zh=xe(" Saissisez votre date de naissance."),qh=Qa(()=>R("br",null,null,-1)),Kh=Qa(()=>R("hr",null,null,-1)),Gh={id:"tab"},Jh=["onMouseover","id"],Yh={class:"tooltip"};function Xh(t,e,n,r,s,i){return J(),oe(de,null,[R("h2",null,[xe("Aujourd'hui nous sommes le "+pe(s.today.getDate())+" "+pe(i.toMonth(s.today))+", en "+pe(s.today.getFullYear())+" \u2728. ",1),R("h4",null,[xe("Et je suis n\xE9 le "+pe(s.first.getDate())+" "+pe(i.toMonth(s.first))+" "+pe(s.first.getFullYear())+". Cela fait donc ",1),R("a",{href:"#tab",id:"weeks",textContent:pe(i.getSpecificWeeks(s.first))},null,8,$h),Bh])]),n.time=="me"?(J(),oe("h3",Hh,"Chacun de ces cubes repr\xE9sentent une semaine de ma vie")):n.time.length>12?(J(),oe("h3",jh,"Vous avez saisis "+pe(i.getNewDate(n.time)),1)):s.input!=""?(J(),oe("h3",Vh,"Vous avez saisis "+pe(i.getNewDate(s.input)),1)):Lr("",!0),R("div",Wh,[R("form",null,[R("label",null,[zh,qh,Kh,mn(R("input",{type:"date",id:"date","onUpdate:modelValue":e[0]||(e[0]=o=>s.input=o)},null,512),[[_n,s.input]])])])]),R("div",Gh,[(J(!0),oe(de,null,On(s.weeks,o=>(J(),oe("div",{class:"week",key:o,onMouseover:a=>i.CubeClicked(o),id:o+"cube"},[R("span",Yh,pe(i.toExposed(s.current,o)),1)],40,Jh))),128))])],64)}var Qh=st(Fh,[["render",Xh],["__scopeId","data-v-5e8df9ba"]]);const ni=t=>(Pr("data-v-3f54659a"),t=t(),Mr(),t),Zh=ni(()=>R("h1",null,"Authentification Tests",-1)),ep={id:"login"},tp=ni(()=>R("h2",null,"Login",-1)),np=["textContent"],rp={id:"signin"},sp=ni(()=>R("h2",null,"Signin",-1)),ip=["textContent"],op={data(){return{login:{email:"",password:""},signin:{email:"",password:""}}},methods:{sendAuth(t){N_(t,{email:this.login.email,password:this.login.password})}}},ap=Object.assign(op,{setup(t){return(e,n)=>(J(),oe(de,null,[Zh,R("div",ep,[tp,R("form",null,[mn(R("input",{id:"login-email",type:"email",name:"email",placeholder:"email","onUpdate:modelValue":n[0]||(n[0]=r=>e.login.email=r)},null,512),[[_n,e.login.email]]),mn(R("input",{id:"login-password",type:"password",name:"password",placeholder:"password","onUpdate:modelValue":n[1]||(n[1]=r=>e.login.password=r)},null,512),[[_n,e.login.password]]),R("button",{id:"login-submit",onClick:n[2]||(n[2]=r=>e.sendAuth("login"))},"submit")]),R("h3",{textContent:pe(e.login)},null,8,np)]),R("div",rp,[sp,R("form",null,[mn(R("input",{id:"signin-email",type:"email",name:"email",placeholder:"email","onUpdate:modelValue":n[3]||(n[3]=r=>e.signin.email=r)},null,512),[[_n,e.signin.email]]),mn(R("input",{id:"signin-password",type:"password",name:"password",placeholder:"password","onUpdate:modelValue":n[4]||(n[4]=r=>e.signin.password=r)},null,512),[[_n,e.signin.password]]),R("button",{id:"signin-submit",onClick:n[5]||(n[5]=r=>e.sendAuth("signin"))},"submit")]),R("h3",{textContent:pe(e.signin)},null,8,ip)])],64))}});var cp=st(ap,[["__scopeId","data-v-3f54659a"]]);const lp=gd({history:Nf("/"),routes:[{path:"/",name:"home",component:dh},{path:"/shop",name:"shop",component:Ch},{path:"/shop/:article",name:"article",component:Uh,props:!0},{path:"/life/:time",props:!0,name:"life",component:Qh},{path:"/auth",name:"auth",component:cp}]});/**
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
 */const Za=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},up=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ec={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,y=l&63;c||(y=64,o||(p=64)),r.push(n[f],n[h],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Za(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):up(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const y=a<<4&240|l>>2;if(r.push(y),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},fp=function(t){const e=Za(t);return ec.encodeByteArray(e,!0)},tc=function(t){return fp(t).replace(/\./g,"")},dp=function(t){try{return ec.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class hp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Te(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pp(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function gp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _p(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vp(){return typeof indexedDB=="object"}function yp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const bp="FirebaseError";class un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bp,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$n.prototype.create)}}class $n{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?wp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new un(s,a,r)}}function wp(t,e){return t.replace(Ip,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ip=/\{\$([^}]+)}/g;function Ep(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(uo(i)&&uo(o)){if(!mr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function uo(t){return t!==null&&typeof t=="object"}/**
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
 */function Bn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function yn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Tp(t,e){const n=new Sp(t,e);return n.subscribe.bind(n)}class Sp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Cp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zr),s.error===void 0&&(s.error=Zr),s.complete===void 0&&(s.complete=Zr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zr(){}/**
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
 */function Hn(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const St="[DEFAULT]";/**
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
 */class Rp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kp(e))try{this.getOrInitializeService({instanceIdentifier:St})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=St){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=St){return this.instances.has(e)}getOptions(e=St){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ap(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=St){return this.component?this.component.multipleInstances?e:St:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ap(t){return t===St?void 0:t}function kp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Op{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Pp={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Mp=se.INFO,Np={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Dp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Np[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=Mp,this._logHandler=Dp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const xp=(t,e)=>e.some(n=>t instanceof n);let fo,ho;function Lp(){return fo||(fo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Up(){return ho||(ho=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rc=new WeakMap,As=new WeakMap,sc=new WeakMap,es=new WeakMap,ri=new WeakMap;function Fp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(bt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rc.set(n,t)}).catch(()=>{}),ri.set(e,t),e}function $p(t){if(As.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});As.set(t,e)}let ks={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return As.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bp(t){ks=t(ks)}function Hp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ts(this),e,...n);return sc.set(r,e.sort?e.sort():[e]),bt(r)}:Up().includes(t)?function(...e){return t.apply(ts(this),e),bt(rc.get(this))}:function(...e){return bt(t.apply(ts(this),e))}}function jp(t){return typeof t=="function"?Hp(t):(t instanceof IDBTransaction&&$p(t),xp(t,Lp())?new Proxy(t,ks):t)}function bt(t){if(t instanceof IDBRequest)return Fp(t);if(es.has(t))return es.get(t);const e=jp(t);return e!==t&&(es.set(t,e),ri.set(e,t)),e}const ts=t=>ri.get(t);function Vp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=bt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(bt(o.result),c.oldVersion,c.newVersion,bt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Wp=["get","getKey","getAll","getAllKeys","count"],zp=["put","add","delete","clear"],ns=new Map;function po(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ns.get(e))return ns.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ns.set(e,i),i}Bp(t=>bi(yi({},t),{get:(e,n,r)=>po(e,n)||t.get(e,n,r),has:(e,n)=>!!po(e,n)||t.has(e,n)}));/**
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
 */class qp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Os="@firebase/app",go="0.7.24";/**
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
 */const si=new nc("@firebase/app"),Gp="@firebase/app-compat",Jp="@firebase/analytics-compat",Yp="@firebase/analytics",Xp="@firebase/app-check-compat",Qp="@firebase/app-check",Zp="@firebase/auth",eg="@firebase/auth-compat",tg="@firebase/database",ng="@firebase/database-compat",rg="@firebase/functions",sg="@firebase/functions-compat",ig="@firebase/installations",og="@firebase/installations-compat",ag="@firebase/messaging",cg="@firebase/messaging-compat",lg="@firebase/performance",ug="@firebase/performance-compat",fg="@firebase/remote-config",dg="@firebase/remote-config-compat",hg="@firebase/storage",pg="@firebase/storage-compat",gg="@firebase/firestore",mg="@firebase/firestore-compat",_g="firebase",vg="9.8.1";/**
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
 */const ic="[DEFAULT]",yg={[Os]:"fire-core",[Gp]:"fire-core-compat",[Yp]:"fire-analytics",[Jp]:"fire-analytics-compat",[Qp]:"fire-app-check",[Xp]:"fire-app-check-compat",[Zp]:"fire-auth",[eg]:"fire-auth-compat",[tg]:"fire-rtdb",[ng]:"fire-rtdb-compat",[rg]:"fire-fn",[sg]:"fire-fn-compat",[ig]:"fire-iid",[og]:"fire-iid-compat",[ag]:"fire-fcm",[cg]:"fire-fcm-compat",[lg]:"fire-perf",[ug]:"fire-perf-compat",[fg]:"fire-rc",[dg]:"fire-rc-compat",[hg]:"fire-gcs",[pg]:"fire-gcs-compat",[gg]:"fire-fst",[mg]:"fire-fst-compat","fire-js":"fire-js",[_g]:"fire-js-all"};/**
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
 */const _r=new Map,Ps=new Map;function bg(t,e){try{t.container.addComponent(e)}catch(n){si.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(Ps.has(e))return si.debug(`There were multiple attempts to register component ${e}.`),!1;Ps.set(e,t);for(const n of _r.values())bg(n,t);return!0}function oc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const wg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Lt=new $n("app","Firebase",wg);/**
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
 */class Ig{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const $r=vg;function Eg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ic,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Lt.create("bad-app-name",{appName:String(r)});const s=_r.get(r);if(s){if(mr(t,s.options)&&mr(n,s.config))return s;throw Lt.create("duplicate-app",{appName:r})}const i=new Op(r);for(const a of Ps.values())i.addComponent(a);const o=new Ig(t,n,i);return _r.set(r,o),o}function Tg(t=ic){const e=_r.get(t);if(!e)throw Lt.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let s=(r=yg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),si.warn(a.join(" "));return}Nn(new sn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Sg="firebase-heartbeat-database",Cg=1,Dn="firebase-heartbeat-store";let rs=null;function ac(){return rs||(rs=Vp(Sg,Cg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dn)}}}).catch(t=>{throw Lt.create("storage-open",{originalErrorMessage:t.message})})),rs}async function Rg(t){try{return(await ac()).transaction(Dn).objectStore(Dn).get(cc(t))}catch(e){throw Lt.create("storage-get",{originalErrorMessage:e.message})}}async function mo(t,e){try{const r=(await ac()).transaction(Dn,"readwrite");return await r.objectStore(Dn).put(e,cc(t)),r.done}catch(n){throw Lt.create("storage-set",{originalErrorMessage:n.message})}}function cc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ag=1024,kg=30*24*60*60*1e3;class Og{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_o();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=kg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_o(),{heartbeatsToSend:n,unsentEntries:r}=Pg(this._heartbeatsCache.heartbeats),s=tc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function _o(){return new Date().toISOString().substring(0,10)}function Pg(t,e=Ag){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vp()?yp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Rg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vo(t){return tc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ng(t){Nn(new sn("platform-logger",e=>new qp(e),"PRIVATE")),Nn(new sn("heartbeat",e=>new Og(e),"PRIVATE")),Qt(Os,go,t),Qt(Os,go,"esm2017"),Qt("fire-js","")}Ng("");var Dg="firebase",xg="9.8.1";/**
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
 */Qt(Dg,xg,"app");function ii(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function lc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lg=lc,uc=new $n("auth","Firebase",lc());/**
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
 */const yo=new nc("@firebase/auth");function sr(t,...e){yo.logLevel<=se.ERROR&&yo.error(`Auth (${$r}): ${t}`,...e)}/**
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
 */function Be(t,...e){throw oi(t,...e)}function Ke(t,...e){return oi(t,...e)}function Ug(t,e,n){const r=Object.assign(Object.assign({},Lg()),{[e]:n});return new $n("auth","Firebase",r).create(e,{appName:t.name})}function oi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return uc.create(t,...e)}function U(t,e,...n){if(!t)throw oi(e,...n)}function Ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sr(e),new Error(e)}function nt(t,e){t||Ze(e)}/**
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
 */const bo=new Map;function et(t){nt(t instanceof Function,"Expected a class definition");let e=bo.get(t);return e?(nt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bo.set(t,e),e)}/**
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
 */function Fg(t,e){const n=oc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(mr(i,e!=null?e:{}))return s;Be(s,"already-initialized")}return n.initialize({options:e})}function $g(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ms(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Bg(){return wo()==="http:"||wo()==="https:"}function wo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Hg(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bg()||gp()||"connection"in navigator)?navigator.onLine:!0}function jg(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,nt(n>e,"Short delay should be less than long delay!"),this.isMobile=pp()||mp()}get(){return Hg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ai(t,e){nt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Wg=new jn(3e4,6e4);function Vn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wn(t,e,n,r,s={}){return dc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Bn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),fc.fetch()(hc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function dc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vg),e);try{const s=new zg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ss(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ss(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ss(t,"email-already-in-use",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ug(t,f,l);Be(t,f)}}catch(s){if(s instanceof un)throw s;Be(t,"network-request-failed")}}async function zn(t,e,n,r,s={}){const i=await Wn(t,e,n,r,s);return"mfaPendingCredential"in i&&Be(t,"multi-factor-auth-required",{_serverResponse:i}),i}function hc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ai(t.config,s):`${t.config.apiScheme}://${s}`}class zg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),Wg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ss(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ke(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function qg(t,e){return Wn(t,"POST","/v1/accounts:delete",e)}async function Kg(t,e){return Wn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Sn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gg(t,e=!1){const n=Hn(t),r=await n.getIdToken(e),s=ci(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Sn(is(s.auth_time)),issuedAtTime:Sn(is(s.iat)),expirationTime:Sn(is(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function is(t){return Number(t)*1e3}function ci(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sr("JWT malformed, contained fewer than 3 sections"),null;try{const s=dp(n);return s?JSON.parse(s):(sr("Failed to decode base64 JWT payload"),null)}catch(s){return sr("Caught error parsing JWT payload as JSON",s),null}}function Jg(t){const e=ci(t);return U(e,"internal-error"),U(typeof e.exp!="undefined","internal-error"),U(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof un&&Yg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Yg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Xg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sn(this.lastLoginAt),this.creationTime=Sn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await xn(t,Kg(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?em(i.providerUserInfo):[],a=Zg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new pc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Qg(t){const e=Hn(t);await vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function em(t){return t.map(e=>{var{providerId:n}=e,r=ii(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tm(t,e){const n=await dc(t,{},async()=>{const r=Bn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=hc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken!="undefined","internal-error"),U(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Jg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ln;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
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
 */function lt(t,e){U(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Dt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ii(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Gg(this,e)}reload(){return Qg(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xn(this,qg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,M=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:V,emailVerified:z,isAnonymous:ce,providerData:ue,stsTokenManager:W}=n;U(V&&W,e,"internal-error");const fe=Ln.fromJSON(this.name,W);U(typeof V=="string",e,"internal-error"),lt(h,e.name),lt(p,e.name),U(typeof z=="boolean",e,"internal-error"),U(typeof ce=="boolean",e,"internal-error"),lt(y,e.name),lt(S,e.name),lt(M,e.name),lt(A,e.name),lt(k,e.name),lt(L,e.name);const te=new Dt({uid:V,auth:e,email:p,emailVerified:z,displayName:h,isAnonymous:ce,photoURL:S,phoneNumber:y,tenantId:M,stsTokenManager:fe,createdAt:k,lastLoginAt:L});return ue&&Array.isArray(ue)&&(te.providerData=ue.map(we=>Object.assign({},we))),A&&(te._redirectEventId=A),te}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ln;s.updateFromServerResponse(n);const i=new Dt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await vr(i),i}}/**
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
 */class gc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gc.type="NONE";const Io=gc;/**
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
 */function ir(t,e,n){return`firebase:${t}:${e}:${n}`}class Zt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ir(this.userKey,s.apiKey,i),this.fullPersistenceKey=ir("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zt(et(Io),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||et(Io);const o=ir(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=Dt._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Zt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Zt(i,e,r))}}/**
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
 */function Eo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bc(e))return"Blackberry";if(wc(e))return"Webos";if(li(e))return"Safari";if((e.includes("chrome/")||_c(e))&&!e.includes("edge/"))return"Chrome";if(yc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mc(t=Te()){return/firefox\//i.test(t)}function li(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _c(t=Te()){return/crios\//i.test(t)}function vc(t=Te()){return/iemobile/i.test(t)}function yc(t=Te()){return/android/i.test(t)}function bc(t=Te()){return/blackberry/i.test(t)}function wc(t=Te()){return/webos/i.test(t)}function Br(t=Te()){return/iphone|ipad|ipod/i.test(t)}function nm(t=Te()){var e;return Br(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rm(){return _p()&&document.documentMode===10}function Ic(t=Te()){return Br(t)||yc(t)||wc(t)||bc(t)||/windows phone/i.test(t)||vc(t)}function sm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ec(t,e=[]){let n;switch(t){case"Browser":n=Eo(Te());break;case"Worker":n=`${Eo(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
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
 */class im{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r.message})}}}/**
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
 */class om{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new To(this),this.idTokenSubscription=new To(this),this.beforeStateQueue=new im(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=et(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Zt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Hn(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $n("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&et(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Zt.create(this,[et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ec(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Hr(t){return Hn(t)}class To{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tp(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class ui{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,n){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}async function am(t,e){return Wn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function cm(t,e){return zn(t,"POST","/v1/accounts:signInWithPassword",Vn(t,e))}/**
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
 */async function lm(t,e){return zn(t,"POST","/v1/accounts:signInWithEmailLink",Vn(t,e))}async function um(t,e){return zn(t,"POST","/v1/accounts:signInWithEmailLink",Vn(t,e))}/**
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
 */class Un extends ui{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Un(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Un(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return cm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lm(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return am(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return um(e,{idToken:n,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function en(t,e){return zn(t,"POST","/v1/accounts:signInWithIdp",Vn(t,e))}/**
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
 */const fm="http://localhost";class Ut extends ui{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ii(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ut(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return en(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,en(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,en(e,n)}buildRequest(){const e={requestUri:fm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bn(n)}return e}}/**
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
 */function dm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hm(t){const e=vn(yn(t)).link,n=e?vn(yn(e)).deep_link_id:null,r=vn(yn(t)).deep_link_id;return(r?vn(yn(r)).link:null)||r||n||e||t}class fi{constructor(e){var n,r,s,i,o,a;const c=vn(yn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=dm((s=c.mode)!==null&&s!==void 0?s:null);U(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hm(e);try{return new fi(n)}catch{return null}}}/**
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
 */class fn{constructor(){this.providerId=fn.PROVIDER_ID}static credential(e,n){return Un._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fi.parseLink(n);return U(r,"argument-error"),Un._fromEmailAndCode(e,r.code,r.tenantId)}}fn.PROVIDER_ID="password";fn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Tc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qn extends Tc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ht extends qn{constructor(){super("facebook.com")}static credential(e){return Ut._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
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
 */class pt extends qn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ut._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pt.credential(n,r)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
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
 */class gt extends qn{constructor(){super("github.com")}static credential(e){return Ut._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
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
 */class mt extends qn{constructor(){super("twitter.com")}static credential(e,n){return Ut._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
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
 */async function pm(t,e){return zn(t,"POST","/v1/accounts:signUp",Vn(t,e))}/**
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
 */class Ft{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Dt._fromIdTokenResponse(e,r,s),o=So(r);return new Ft({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=So(r);return new Ft({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function So(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class yr extends un{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,yr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new yr(e,n,r,s)}}function Sc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yr._fromErrorAndOperation(t,i,e,r):i})}async function gm(t,e,n=!1){const r=await xn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ft._forOperation(t,"link",r)}/**
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
 */async function mm(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await xn(t,Sc(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=ci(i.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Ft._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),i}}/**
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
 */async function Cc(t,e,n=!1){const r="signIn",s=await Sc(t,r,e),i=await Ft._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function _m(t,e){return Cc(Hr(t),e)}async function vm(t,e,n){const r=Hr(t),s=await pm(r,{returnSecureToken:!0,email:e,password:n}),i=await Ft._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function ym(t,e,n){return _m(Hn(t),fn.credential(e,n))}const br="__sak";/**
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
 */class Rc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function bm(){const t=Te();return li(t)||Br(t)}const wm=1e3,Im=10;class Ac extends Rc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bm()&&sm(),this.fallbackToPolling=Ic(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);rm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Im):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ac.type="LOCAL";const Em=Ac;/**
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
 */class kc extends Rc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kc.type="SESSION";const Oc=kc;/**
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
 */function Tm(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new jr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Tm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jr.receivers=[];/**
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
 */function di(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Sm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=di("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ge(){return window}function Cm(t){Ge().location.href=t}/**
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
 */function Pc(){return typeof Ge().WorkerGlobalScope!="undefined"&&typeof Ge().importScripts=="function"}async function Rm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Am(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function km(){return Pc()?self:null}/**
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
 */const Mc="firebaseLocalStorageDb",Om=1,wr="firebaseLocalStorage",Nc="fbase_key";class Kn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vr(t,e){return t.transaction([wr],e?"readwrite":"readonly").objectStore(wr)}function Pm(){const t=indexedDB.deleteDatabase(Mc);return new Kn(t).toPromise()}function Ns(){const t=indexedDB.open(Mc,Om);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wr,{keyPath:Nc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wr)?e(r):(r.close(),await Pm(),e(await Ns()))})})}async function Co(t,e,n){const r=Vr(t,!0).put({[Nc]:e,value:n});return new Kn(r).toPromise()}async function Mm(t,e){const n=Vr(t,!1).get(e),r=await new Kn(n).toPromise();return r===void 0?null:r.value}function Ro(t,e){const n=Vr(t,!0).delete(e);return new Kn(n).toPromise()}const Nm=800,Dm=3;class Dc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ns(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Dm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jr._getInstance(km()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Rm(),!this.activeServiceWorker)return;this.sender=new Sm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Am()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ns();return await Co(e,br,"1"),await Ro(e,br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Co(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Mm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ro(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Vr(s,!1).getAll();return new Kn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dc.type="LOCAL";const xm=Dc;/**
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
 */function Lm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Um(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Lm().appendChild(r)})}function Fm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new jn(3e4,6e4);/**
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
 */function $m(t,e){return e?et(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hi extends ui{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return en(e,this._buildIdpRequest())}_linkToIdToken(e,n){return en(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return en(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bm(t){return Cc(t.auth,new hi(t),t.bypassAuthState)}function Hm(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),mm(n,new hi(t),t.bypassAuthState)}async function jm(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),gm(n,new hi(t),t.bypassAuthState)}/**
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
 */class xc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bm;case"linkViaPopup":case"linkViaRedirect":return jm;case"reauthViaPopup":case"reauthViaRedirect":return Hm;default:Be(this.auth,"internal-error")}}resolve(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Vm=new jn(2e3,1e4);class Gt extends xc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Gt.currentPopupAction&&Gt.currentPopupAction.cancel(),Gt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){nt(this.filter.length===1,"Popup operations only handle one event");const e=di();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Vm.get())};e()}}Gt.currentPopupAction=null;/**
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
 */const Wm="pendingRedirect",or=new Map;class zm extends xc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=or.get(this.auth._key());if(!e){try{const r=await qm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}or.set(this.auth._key(),e)}return this.bypassAuthState||or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qm(t,e){const n=Jm(e),r=Gm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Km(t,e){or.set(t._key(),e)}function Gm(t){return et(t._redirectPersistence)}function Jm(t){return ir(Wm,t.config.apiKey,t.name)}async function Ym(t,e,n=!1){const r=Hr(t),s=$m(r,e),o=await new zm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Xm=10*60*1e3;class Qm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Lc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ao(e))}saveEventToCache(e){this.cachedEventUids.add(Ao(e)),this.lastProcessedEventTime=Date.now()}}function Ao(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lc(t);default:return!1}}/**
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
 */async function e_(t,e={}){return Wn(t,"GET","/v1/projects",e)}/**
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
 */const t_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n_=/^https?/;async function r_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await e_(t);for(const n of e)try{if(s_(n))return}catch{}Be(t,"unauthorized-domain")}function s_(t){const e=Ms(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!n_.test(n))return!1;if(t_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const i_=new jn(3e4,6e4);function ko(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function o_(t){return new Promise((e,n)=>{var r,s,i;function o(){ko(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ko(),n(Ke(t,"network-request-failed"))},timeout:i_.get()})}if(!((s=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)o();else{const a=Fm("iframefcb");return Ge()[a]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},Um(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ar=null,e})}let ar=null;function a_(t){return ar=ar||o_(t),ar}/**
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
 */const c_=new jn(5e3,15e3),l_="__/auth/iframe",u_="emulator/auth/iframe",f_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h_(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ai(e,u_):`https://${t.config.authDomain}/${l_}`,r={apiKey:e.apiKey,appName:t.name,v:$r},s=d_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bn(r).slice(1)}`}async function p_(t){const e=await a_(t),n=Ge().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:h_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:f_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),a=Ge().setTimeout(()=>{i(o)},c_.get());function c(){Ge().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const g_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m_=500,__=600,v_="_blank",y_="http://localhost";class Oo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b_(t,e,n,r=m_,s=__){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},g_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Te().toLowerCase();n&&(a=_c(l)?v_:n),mc(l)&&(e=e||y_,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[y,S])=>`${p}${y}=${S},`,"");if(nm(l)&&a!=="_self")return w_(e||"",a),new Oo(null);const h=window.open(e||"",a,f);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Oo(h)}function w_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const I_="__/auth/handler",E_="emulator/auth/handler";function Po(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$r,eventId:s};if(e instanceof Tc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ep(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof qn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${T_(t)}?${Bn(a).slice(1)}`}function T_({config:t}){return t.emulator?ai(t,E_):`https://${t.authDomain}/${I_}`}/**
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
 */const os="webStorageSupport";class S_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oc,this._completeRedirectFn=Ym,this._overrideRedirectResult=Km}async _openPopup(e,n,r,s){var i;nt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Po(e,n,r,Ms(),s);return b_(e,o,di())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Cm(Po(e,n,r,Ms(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await p_(e),r=new Qm(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(os,{type:os},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[os];o!==void 0&&n(!!o),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=r_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ic()||li()||Br()}}const C_=S_;var Mo="@firebase/auth",No="0.20.1";/**
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
 */class R_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function A_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function k_(t){Nn(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{U(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),U(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ec(t)},f=new om(a,c,l);return $g(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nn(new sn("auth-internal",e=>{const n=Hr(e.getProvider("auth").getImmediate());return(r=>new R_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(Mo,No,A_(t)),Qt(Mo,No,"esm2017")}/**
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
 */function O_(t=Tg()){const e=oc(t,"auth");return e.isInitialized()?e.getImmediate():Fg(t,{popupRedirectResolver:C_,persistence:[xm,Em,Oc]})}k_("Browser");var P_={apiKey:"AIzaSyDXu6v0FyNnP_5WFTkjnMJFd8NVRNpLsEU",authDomain:"echo-vuejs.firebaseapp.com",projectId:"echo-vuejs",storageBucket:"echo-vuejs.appspot.com",messagingSenderId:"275245027821",appId:"1:275245027821:web:94dd53b250383dcf1217e4",measurementId:"G-Y3DSL5J2XD"};const M_=Eg(P_),Do=O_(M_),Uc=hf(kd);Uc.use(lp);Uc.mount("#app");function N_(t,e){t=="login"?vm(Do,e.email,e.password).then(n=>{const r=n.user;console.log(r)}).catch(n=>{console.log(n)}):t=="signin"&&ym(Do,e.email,e.password).then(n=>{const r=n.user;console.log(r)}).catch(n=>{console.log(n)})}
