import{l as at}from"./index.BFqC5wTN.js";const wt=!1;var Un=Array.isArray,jn=Array.from,Bn=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,rn=Object.getOwnPropertyDescriptors,Vn=Object.prototype,Gn=Array.prototype,en=Object.getPrototypeOf;function Kn(t){return typeof t=="function"}const $n=()=>{};function Wn(t){return typeof(t==null?void 0:t.then)=="function"}function Zn(t){return t()}function Tt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,mt=4,j=8,ut=16,A=32,J=64,tt=128,O=256,K=512,h=1024,x=2048,q=4096,b=8192,P=16384,sn=32768,At=65536,zn=1<<17,ln=1<<19,gt=1<<20,ht=Symbol("$state"),Jn=Symbol("legacy props"),Qn=Symbol("");function xt(t){return t===this.v}function an(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Xn(t,n){return t!==n}function It(t){return!an(t,this.v)}function un(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function on(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function _n(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function tr(){throw new Error("https://svelte.dev/e/hydration_failed")}function nr(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function rr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function er(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function vn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const sr=1,lr=2,ar=16,ur=1,or=2,ir=4,fr=8,_r=16,cr=1,vr=2,pr=4,hr=1,dr=2,pn="[",hn="[!",dn="]",St={},Er=Symbol(),yr="http://www.w3.org/2000/svg";function ot(t,n){var r={f:0,v:t,reactions:null,equals:xt,version:0};return r}function wr(t){return Rt(ot(t))}function En(t,n=!1){var e;const r=ot(t);return n||(r.equals=It),at&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function Tr(t,n=!1){return Rt(En(t,n))}function Rt(t){return i!==null&&i.f&y&&(m===null?Nn([t]):m.push(t)),t}function kt(t,n){return i!==null&&ct()&&i.f&(y|ut)&&(m===null||!m.includes(t))&&vn(),yn(t,n)}function yn(t,n){return t.equals(n)||(t.v=n,t.version=Wt(),Ot(t,x),ct()&&u!==null&&u.f&h&&!(u.f&A)&&(v!==null&&v.includes(t)?(T(u,x),X(u)):g===null?Cn([t]):g.push(t))),n}function Ot(t,n){var r=t.reactions;if(r!==null)for(var e=ct(),s=r.length,l=0;l<s;l++){var a=r[l],f=a.f;f&x||!e&&a===u||(T(a,n),f&(h|O)&&(f&y?Ot(a,q):X(a)))}}function Nt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let R=!1;function mr(t){R=t}let w;function M(t){if(t===null)throw Nt(),St;return w=t}function Ar(){return M(N(w))}function gr(t){if(R){if(N(w)!==null)throw Nt(),St;w=t}}function xr(t=1){if(R){for(var n=t,r=w;n--;)r=N(r);w=r}}function Ir(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===dn){if(t===0)return n;t-=1}else(r===pn||r===hn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var dt,Ct,Dt;function Sr(){if(dt===void 0){dt=window;var t=Element.prototype,n=Node.prototype;Ct=pt(n,"firstChild").get,Dt=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Ct.call(t)}function N(t){return Dt.call(t)}function Rr(t,n){if(!R)return rt(t);var r=rt(w);if(r===null)r=w.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),M(e),e}return M(r),r}function kr(t,n){if(!R){var r=rt(t);return r instanceof Comment&&r.data===""?N(r):r}return w}function Or(t,n=1,r=!1){let e=R?w:t;for(var s;n--;)s=e,e=N(e);if(!R)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=nt();return e===null?s==null||s.after(a):e.before(a),M(a),a}return M(e),e}function Nr(t){t.textContent=""}function wn(t){var n=y|x;u===null?n|=O:u.f|=gt;var r=i!==null&&i.f&y?i:null;const e={children:null,ctx:o,deps:null,equals:xt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Cr(t){const n=wn(t);return n.equals=It,n}function bt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?it(e):k(e)}}}function Tn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function qt(t){var n,r=u;z(Tn(t));try{bt(t),n=Zt(t)}finally{z(r)}return n}function Pt(t){var n=qt(t),r=(S||t.f&O)&&t.deps!==null?q:h;T(t,r),t.equals(n)||(t.v=n,t.version=Wt())}function it(t){bt(t),U(t,0),T(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ft(t){u===null&&i===null&&fn(),i!==null&&i.f&O&&on(),_t&&un()}function mn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&J)!==0,l=u,a={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var f=C;try{Et(!0),B(a),a.f|=sn}catch(_){throw k(a),_}finally{Et(f)}}else n!==null&&X(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&gt)===0;if(!p&&!s&&e&&(l!==null&&mn(a,l),i!==null&&i.f&y)){var d=i;(d.children??(d.children=[])).push(a)}return a}function Dr(t){const n=F(j,null,!1);return T(n,h),n.teardown=t,n}function br(t){Ft();var n=u!==null&&(u.f&A)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:i})}else{var e=Lt(t);return e}}function qr(t){return Ft(),ft(t)}function Pr(t){const n=F(J,t,!0);return(r={})=>new Promise(e=>{r.outro?xn(n,()=>{k(n),e(void 0)}):(k(n),e(void 0))})}function Lt(t){return F(mt,t,!1)}function Fr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ft(()=>{t(),!e.ran&&(e.ran=!0,kt(r.l.r2,!0),Ln(n))})}function Lr(){var t=o;ft(()=>{if(tn(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&h&&T(r,q),L(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function ft(t){return F(j,t,!0)}function Mr(t){return An(t)}function An(t,n=0){return F(j|ut|n,t,!0)}function Yr(t,n=!0){return F(j|A,t,!0,n)}function Mt(t){var n=t.teardown;if(n!==null){const r=_t,e=i;yt(!0),Z(null);try{n.call(null)}finally{yt(r),Z(e)}}}function Yt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)it(n[r])}}function Ht(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;k(r,n),r=e}}function gn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&A||k(n),n=r}}function k(t,n=!0){var r=!1;if((n||t.f&ln)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:N(e);e.remove(),e=l}r=!0}Ht(t,n&&!r),Yt(t),U(t,0),T(t,P);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Mt(t);var f=t.parent;f!==null&&f.first!==null&&Ut(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ut(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function xn(t,n){var r=[];jt(t,r,!0),In(r,()=>{k(t),n&&n()})}function In(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function jt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&At)!==0||(e.f&A)!==0;jt(e,n,l?r:!1),e=s}}}function Hr(t){Bt(t,!0)}function Bt(t,n){if(t.f&b){L(t)&&B(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&At)!==0||(r.f&A)!==0;Bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const Sn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let $=!1,W=!1,et=[],st=[];function Vt(){$=!1;const t=et.slice();et=[],Tt(t)}function Gt(){W=!1;const t=st.slice();st=[],Tt(t)}function Ur(t){$||($=!0,queueMicrotask(Vt)),et.push(t)}function jr(t){W||(W=!0,Sn(Gt)),st.push(t)}function Rn(){$&&Vt(),W&&Gt()}function Br(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function kn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Kt=0,On=1;let V=!1,G=Kt,Y=!1,H=null,C=!1,_t=!1;function Et(t){C=t}function yt(t){_t=t}let I=[],D=0;let i=null;function Z(t){i=t}let u=null;function z(t){u=t}let m=null;function Nn(t){m=t}let v=null,E=0,g=null;function Cn(t){g=t}let $t=1,S=!1,o=null;function Vr(t){o=t}function Wt(){return++$t}function ct(){return!at||o!==null&&o.l===null}function L(t){var a,f;var n=t.f;if(n&x)return!0;if(n&q){var r=t.deps,e=(n&O)!==0;if(r!==null){var s;if(n&K){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=K}for(s=0;s<r.length;s++){var l=r[s];if(L(l)&&Pt(l),e&&u!==null&&!S&&!((f=l==null?void 0:l.reactions)!=null&&f.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}(!e||u!==null&&!S)&&T(t,h)}return!1}function Dn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw V=!1,t}function bn(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&tt)===0)}function Q(t,n,r,e){if(V){if(r===null&&(V=!1),bn(n))throw t;return}r!==null&&(V=!0);{Dn(t,n);return}}function Zt(t){var vt;var n=v,r=E,e=g,s=i,l=S,a=m,f=o,p=t.f;v=null,E=0,g=null,i=p&(A|J)?null:t,S=!C&&(p&O)!==0,m=null,o=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(U(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!S)for(c=E;c<_.length;c++)((vt=_[c]).reactions??(vt.reactions=[])).push(t)}else _!==null&&E<_.length&&(U(t,E),_.length=E);return d}finally{v=n,E=r,g=e,i=s,S=l,m=a,o=f}}function qn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(T(n,q),n.f&(O|K)||(n.f^=K),U(n,0))}function U(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)qn(t,r[e])}function B(t){var n=t.f;if(!(n&P)){T(t,h);var r=u,e=o;u=t;try{n&ut?gn(t):Ht(t),Yt(t),Mt(t);var s=Zt(t);t.teardown=typeof s=="function"?s:null,t.version=$t}catch(l){Q(l,t,r,e||t.ctx)}finally{u=r}}}function zt(){if(D>1e3){D=0;try{_n()}catch(t){if(H!==null)Q(t,H,null);else throw t}}D++}function Jt(t){var n=t.length;if(n!==0){zt();var r=C;C=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Qt(s,l),Pn(l)}}finally{C=r}}}function Pn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(P|b)))try{L(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ut(e):e.fn=null))}catch(s){Q(s,e,null,e.ctx)}}}function Fn(){if(Y=!1,D>1001)return;const t=I;I=[],Jt(t),Y||(D=0,H=null)}function X(t){G===Kt&&(Y||(Y=!0,queueMicrotask(Fn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(J|A)){if(!(r&h))return;n.f^=h}}I.push(n)}function Qt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&A)!==0,a=l&&(s&h)!==0,f=r.next;if(!a&&!(s&b))if(s&j){if(l)r.f^=h;else try{L(r)&&B(r)}catch(c){Q(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&mt&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Qt(p,n)}function Xt(t){var n=G,r=I;try{zt();const s=[];G=On,I=s,Y=!1,Jt(r);var e=t==null?void 0:t();return Rn(),(I.length>0||s.length>0)&&Xt(),D=0,H=null,e}finally{G=n,I=r}}async function Gr(){await Promise.resolve(),Xt()}function tn(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&P){var e=qt(t);return it(t),e}if(i!==null){m!==null&&m.includes(t)&&cn();var s=i.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),g!==null&&u!==null&&u.f&h&&!(u.f&A)&&g.includes(t)&&(T(u,x),X(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,f=l;a!==null;)if(a.f&y){var p=a;f=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(l=t,L(l)&&Pt(l)),t.v}function Ln(t){const n=i;try{return i=null,t()}finally{i=n}}const Mn=~(x|q|h);function T(t,n){t.f=t.f&Mn|n}function Kr(t){return nn().get(t)}function $r(t,n){return nn().set(t,n),n}function nn(t){return o===null&&kn(),o.c??(o.c=new Map(Yn(o)||void 0))}function Yn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Wr(t,n=1){var r=tn(t),e=n===1?r++:r--;return kt(t,r),e}function Zr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},at&&!n&&(o.l={s:null,u:null,r1:[],r2:ot(!1)})}function zr(t){const n=o;if(n!==null){const a=n.e;if(a!==null){var r=u,e=i;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];z(l.effect),Z(l.reaction),Lt(l.fn)}}finally{z(r),Z(e)}}o=n.p,n.m=!0}return{}}function Jr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=en(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=rn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{kt as $,o as A,kn as B,br as C,Un as D,ln as E,Dr as F,ct as G,St as H,$n as I,Tt as J,an as K,qr as L,Zn as M,tn as N,Jr as O,wn as P,dr as Q,kr as R,ht as S,hr as T,Mr as U,Rr as V,gr as W,Or as X,Kr as Y,Fr as Z,Lr as _,Ar as a,Tr as a0,yr as a1,Cr as a2,xr as a3,Vn as a4,Gn as a5,ot as a6,rr as a7,pt as a8,Er as a9,yn as aA,jt as aB,In as aC,lr as aD,sr as aE,ar as aF,jr as aG,Qn as aH,rn as aI,Xt as aJ,Gr as aK,wr as aL,ut as aM,sn as aN,cr as aO,vr as aP,pr as aQ,$r as aR,Br as aS,Xn as aT,dt as aU,Wn as aV,Vr as aW,er as aa,en as ab,At as ac,hn as ad,Ir as ae,Hr as af,xn as ag,En as ah,nr as ai,zn as aj,ir as ak,It as al,Wr as am,Kn as an,Jn as ao,A as ap,J as aq,z as ar,ur as as,or as at,fr as au,_r as av,Z as aw,i as ax,Bn as ay,b as az,An as b,Yr as c,k as d,w as e,Nt as f,N as g,R as h,rt as i,Lt as j,Sr as k,pn as l,mr as m,dn as n,tr as o,Nr as p,Ur as q,ft as r,M as s,jn as t,Ln as u,Pr as v,nt as w,Zr as x,u as y,zr as z};
