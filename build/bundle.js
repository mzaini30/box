var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function u(t,n,e){t.$$.on_destroy.push(c(n,e))}function l(t,n,e=n){return t.set(e),n}function a(t,n){t.appendChild(n)}function f(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function w(t){return function(n){return n.preventDefault(),t.call(this,n)}}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function y(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function x(t,n){t.value=null==n?"":n}let j;function E(t){j=t}function k(){if(!j)throw new Error("Function called outside component initialization");return j}function _(t){k().$$.on_mount.push(t)}function C(){const t=k();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function L(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const S=[],q=[],O=[],I=[],A=Promise.resolve();let R=!1;function T(){R||(R=!0,A.then(z))}function D(){return T(),A}function H(t){O.push(t)}let M=!1;const N=new Set;function z(){if(!M){M=!0;do{for(let t=0;t<S.length;t+=1){const n=S[t];E(n),U(n.$$)}for(E(null),S.length=0;q.length;)q.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];N.has(n)||(N.add(n),n())}O.length=0}while(S.length);for(;I.length;)I.pop()();R=!1,M=!1,N.clear()}}function U(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const F=new Set;let J;function Y(){J={r:0,c:[],p:J}}function B(){J.r||r(J.c),J=J.p}function P(t,n){t&&t.i&&(F.delete(t),t.i(n))}function X(t,n,e,o){if(t&&t.o){if(F.has(t))return;F.add(t),J.c.push((()=>{F.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function W(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function G(t){return"object"==typeof t&&null!==t?t:{}}function K(t){t&&t.c()}function Q(t,n,o){const{fragment:i,on_mount:c,on_destroy:u,after_update:l}=t.$$;i&&i.m(n,o),H((()=>{const n=c.map(e).filter(s);u?u.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(H)}function V(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Z(n,e,s,i,c,u,l=[-1]){const a=j;E(n);const f=e.props||{},h=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:l,skip_bound:!1};let p=!1;if(h.ctx=s?s(n,f,((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&c(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&function(t,n){-1===t.$$.dirty[0]&&(S.push(t),T(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);h.fragment&&h.fragment.l(t),t.forEach(d)}else h.fragment&&h.fragment.c();e.intro&&P(n.$$.fragment),Q(n,e.target,e.anchor),z()}E(a)}class tt{$destroy(){V(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nt=[];function et(t,n){return{subscribe:ot(t,n).subscribe}}function ot(n,e=t){let o;const r=[];function s(t){if(i(n,t)&&(n=t,o)){const t=!nt.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),nt.push(e,n)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(i,c=t){const u=[i,c];return r.push(u),1===r.length&&(o=e(s)||t),i(n),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function rt(n,e,o){const i=!Array.isArray(n),u=i?[n]:n,l=e.length<2;return et(o,(n=>{let o=!1;const a=[];let f=0,d=t;const h=()=>{if(f)return;d();const o=e(i?a[0]:a,n);l?n(o):d=s(o)?o:t},p=u.map(((t,n)=>c(t,(t=>{a[n]=t,f&=~(1<<n),o&&h()}),(()=>{f|=1<<n}))));return o=!0,h(),function(){r(p),d()}}))}function st(t){let e,o,r;const s=[t[2]];var i=t[0];function c(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=new i(c()),e.$on("routeEvent",t[7])),{c(){e&&K(e.$$.fragment),o=$()},m(t,n){e&&Q(e,t,n),f(t,o,n),r=!0},p(t,n){const r=4&n?W(s,[G(t[2])]):{};if(i!==(i=t[0])){if(e){Y();const t=e;X(t.$$.fragment,1,0,(()=>{V(t,1)})),B()}i?(e=new i(c()),e.$on("routeEvent",t[7]),K(e.$$.fragment),P(e.$$.fragment,1),Q(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&P(e.$$.fragment,t),r=!0)},o(t){e&&X(e.$$.fragment,t),r=!1},d(t){t&&d(o),e&&V(e,t)}}}function it(t){let e,o,r;const s=[{params:t[1]},t[2]];var i=t[0];function c(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=new i(c()),e.$on("routeEvent",t[6])),{c(){e&&K(e.$$.fragment),o=$()},m(t,n){e&&Q(e,t,n),f(t,o,n),r=!0},p(t,n){const r=6&n?W(s,[2&n&&{params:t[1]},4&n&&G(t[2])]):{};if(i!==(i=t[0])){if(e){Y();const t=e;X(t.$$.fragment,1,0,(()=>{V(t,1)})),B()}i?(e=new i(c()),e.$on("routeEvent",t[6]),K(e.$$.fragment),P(e.$$.fragment,1),Q(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&P(e.$$.fragment,t),r=!0)},o(t){e&&X(e.$$.fragment,t),r=!1},d(t){t&&d(o),e&&V(e,t)}}}function ct(t){let n,e,o,r;const s=[it,st],i=[];function c(t,n){return t[1]?0:1}return n=c(t),e=i[n]=s[n](t),{c(){e.c(),o=$()},m(t,e){i[n].m(t,e),f(t,o,e),r=!0},p(t,[r]){let u=n;n=c(t),n===u?i[n].p(t,r):(Y(),X(i[u],1,1,(()=>{i[u]=null})),B(),e=i[n],e||(e=i[n]=s[n](t),e.c()),P(e,1),e.m(o.parentNode,o))},i(t){r||(P(e),r=!0)},o(t){X(e),r=!1},d(t){i[n].d(t),t&&d(o)}}}function ut(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const lt=et(null,(function(t){t(ut());const n=()=>{t(ut())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));rt(lt,(t=>t.location)),rt(lt,(t=>t.querystring));async function at(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");await D(),history.replaceState({scrollX:window.scrollX,scrollY:window.scrollY},void 0,void 0),window.location.hash=("#"==t.charAt(0)?"":"#")+t}function ft(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:s=!1}=n;class i{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,i=[],c="",u=t.split("/");for(u[0]||u.shift();r=u.shift();)"*"===(e=r[0])?(i.push("wild"),c+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),c+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~o?"?":"")+"\\"+r.substring(s))):c+="/"+r;return{keys:i,pattern:new RegExp("^"+c+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r&&t.startsWith(r))t=t.substr(r.length)||"/";else if(r instanceof RegExp){const n=t.match(r);n&&n[0]&&(t=t.substr(n[0].length)||"/")}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const c=[];o instanceof Map?o.forEach(((t,n)=>{c.push(new i(n,t))})):Object.keys(o).forEach((t=>{c.push(new i(t,o[t]))}));let u=null,l=null,a={};const f=C();async function d(t,n){await D(),f(t,n)}let h=null;var p;s&&(window.addEventListener("popstate",(t=>{h=t.state&&t.state.scrollY?t.state:null})),p=()=>{h?window.scrollTo(h.scrollX,h.scrollY):window.scrollTo(0,0)},k().$$.after_update.push(p));let m=null,g=null;return lt.subscribe((async t=>{m=t;let n=0;for(;n<c.length;){const o=c[n].match(t.location);if(!o){n++;continue}const r={route:c[n].path,location:t.location,querystring:t.querystring,userData:c[n].userData};if(!await c[n].checkConditions(r))return e(0,u=null),g=null,void d("conditionsFailed",r);d("routeLoading",Object.assign({},r));const s=c[n].component;if(g!=s){s.loading?(e(0,u=s.loading),g=s,e(1,l=s.loadingParams),e(2,a={}),d("routeLoaded",Object.assign({},r,{component:u,name:u.name}))):(e(0,u=null),g=null);const n=await s();if(t!=m)return;e(0,u=n&&n.default||n),g=s}return o&&"object"==typeof o&&Object.keys(o).length?e(1,l=o):e(1,l=null),e(2,a=c[n].props),void d("routeLoaded",Object.assign({},r,{component:u,name:u.name}))}e(0,u=null),g=null})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[u,l,a,o,r,s,function(n){L(t,n)},function(n){L(t,n)}]}class dt extends tt{constructor(t){super(),Z(this,t,ft,ct,i,{routes:3,prefix:4,restoreScrollState:5})}}const ht=()=>{localStorage.password?fetch("https://mzaini30.nasihosting.com/json/41dbd69a23dbe44b26015268e595592f").then((t=>t.json())).then((t=>{localStorage.password!=t&&at("/login")})):at("/login")},pt="https://mzaini30.nasihosting.com/json/9d13bb711ae5346680cd4aa41d029241",mt=ot(!1);function gt(t,n,e){const o=t.slice();return o[6]=n[e],o}function $t(t){let n,e,o,r=t[6].judul+"";return{c(){n=p("a"),e=m(r),v(n,"href",o="#/"+t[6].slug),v(n,"class","list-group-item list-group-item-action")},m(t,o){f(t,n,o),a(n,e)},p(t,s){1&s&&r!==(r=t[6].judul+"")&&y(e,r),1&s&&o!==(o="#/"+t[6].slug)&&v(n,"href",o)},d(t){t&&d(n)}}}function bt(n){let e,o,s,i,c,u,l,m,$,y,j,E,k,_,C,L,S,q,O,I,A=n[0],R=[];for(let t=0;t<A.length;t+=1)R[t]=$t(gt(n,A,t));return{c(){e=p("div"),o=p("br"),s=g(),i=p("h1"),i.textContent="Box",c=g(),u=p("hr"),l=g(),m=p("form"),$=p("div"),y=p("input"),j=g(),E=p("div");for(let t=0;t<R.length;t+=1)R[t].c();k=g(),_=p("div"),C=p("div"),C.textContent="✂",L=g(),S=p("a"),S.textContent="✎",q=g(),v(i,"class","text-center"),v(y,"type","search"),v(y,"class","form-control"),v(y,"placeholder","Cari apa?"),v(y,"name",""),y.required=!0,v($,"class","form-group"),v(E,"class","list-group svelte-rbqg3s"),v(e,"class","container"),v(C,"class","btn btn-danger"),v(S,"href","#/tulis"),v(S,"class","btn btn-info"),v(_,"class","bawah"),document.title="Box"},m(t,r){f(t,e,r),a(e,o),a(e,s),a(e,i),a(e,c),a(e,u),a(e,l),a(e,m),a(m,$),a($,y),x(y,n[1]),a(e,j),a(e,E);for(let t=0;t<R.length;t+=1)R[t].m(E,null);f(t,k,r),f(t,_,r),a(_,C),a(_,L),a(_,S),f(t,q,r),O||(I=[b(y,"input",n[4]),b(m,"submit",w(n[2])),b(C,"click",n[3])],O=!0)},p(t,[n]){if(2&n&&x(y,t[1]),1&n){let e;for(A=t[0],e=0;e<A.length;e+=1){const o=gt(t,A,e);R[e]?R[e].p(o,n):(R[e]=$t(o),R[e].c(),R[e].m(E,null))}for(;e<R.length;e+=1)R[e].d(1);R.length=A.length}},i:t,o:t,d(t){t&&d(e),h(R,t),t&&d(k),t&&d(_),t&&d(q),O=!1,r(I)}}}function wt(t,n,e){let o;u(t,mt,(t=>e(5,o=t)));let r=[],s="";_((()=>{ht(),l(mt,o=!0,o),fetch(pt).then((t=>t.json())).then((t=>{l(mt,o=!1,o),e(0,r=t.reverse())}))}));return[r,s,()=>{at("/cari/"+encodeURIComponent(s))},()=>{localStorage.removeItem("password"),at("/login")},function(){s=this.value,e(1,s)}]}class vt extends tt{constructor(t){super(),Z(this,t,wt,bt,i,{})}}function yt(n){let e,o,s,i,c,u,l,h;return{c(){e=p("div"),o=p("br"),s=g(),i=p("form"),c=p("input"),u=g(),v(c,"type","password"),v(c,"class","form-control"),v(c,"placeholder","Apa passwordnya?"),c.required=!0,v(c,"name",""),v(e,"class","container"),document.title="Login"},m(t,r){f(t,e,r),a(e,o),a(e,s),a(e,i),a(i,c),n[3](c),x(c,n[1]),f(t,u,r),l||(h=[b(c,"input",n[4]),b(i,"submit",w(n[2]))],l=!0)},p(t,[n]){2&n&&c.value!==t[1]&&x(c,t[1])},i:t,o:t,d(t){t&&d(e),n[3](null),t&&d(u),l=!1,r(h)}}}function xt(t,n,e){let o,r;u(t,mt,(t=>e(5,o=t)));let s="";_((()=>{r.focus()}));return[r,s,()=>{l(mt,o=!0,o),fetch("https://mzaini30.nasihosting.com/json/41dbd69a23dbe44b26015268e595592f").then((t=>t.json())).then((t=>{l(mt,o=!1,o),s==t?(localStorage.setItem("password",s),at("/")):e(1,s="")}))},function(t){q[t?"unshift":"push"]((()=>{r=t,e(0,r)}))},function(){s=this.value,e(1,s)}]}class jt extends tt{constructor(t){super(),Z(this,t,xt,yt,i,{})}}function Et(t){t=(t=t.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var n="àáäâèéëêìíïîòóöôùúüûñç·/_,:;",e=0,o=n.length;e<o;e++)t=t.replace(new RegExp(n.charAt(e),"g"),"aaaaeeeeiiiioooouuuunc------".charAt(e));return t=t.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}const kt=()=>{let t=new Date;return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`};function _t(n){let e,o,s,i,c,u,l,h,m;return{c(){e=p("form"),o=p("input"),s=g(),i=p("textarea"),c=g(),u=p("div"),u.innerHTML='<input type="submit" class="btn btn-success" value="✓" name=""/>',l=g(),v(o,"type",""),v(o,"class","form-control"),v(o,"placeholder","Judul"),v(o,"name",""),o.required=!0,v(i,"class","form-control"),v(i,"placeholder","Isi"),v(u,"class","bawah"),document.title="Tulis baru"},m(t,r){f(t,e,r),a(e,o),x(o,n[2]),n[6](o),a(e,s),a(e,i),x(i,n[3]),n[8](i),a(e,c),a(e,u),f(t,l,r),h||(m=[b(o,"input",n[5]),b(i,"input",n[7]),b(e,"submit",w(n[4]))],h=!0)},p(t,[n]){4&n&&o.value!==t[2]&&x(o,t[2]),8&n&&x(i,t[3])},i:t,o:t,d(t){t&&d(e),n[6](null),n[8](null),t&&d(l),h=!1,r(m)}}}function Ct(t,n,e){let o,r,s;u(t,mt,(t=>e(9,o=t)));let i="",c="";_((()=>{s.focus(),ht();const t=()=>e(0,r.style.height=window.innerHeight-120+"px",r);t(),window.addEventListener("resize",t)}));return[r,s,i,c,()=>{l(mt,o=!0,o),fetch(pt).then((t=>t.json())).then((t=>{l(mt,o=!1,o),t.push({waktu:kt(),judul:i,isi:c,slug:Et(i)});let n=new FormData;n.append("json",JSON.stringify(t)),l(mt,o=!0,o),fetch(pt+"/ubah",{method:"post",body:n}).then((()=>{l(mt,o=!1,o),at("/"+Et(i))}))}))},function(){i=this.value,e(2,i)},function(t){q[t?"unshift":"push"]((()=>{s=t,e(1,s)}))},function(){c=this.value,e(3,c)},function(t){q[t?"unshift":"push"]((()=>{r=t,e(0,r)}))}]}class Lt extends tt{constructor(t){super(),Z(this,t,Ct,_t,i,{})}}function St(n){let e,o,r,s,i,c,u,l,h,$,w,x,j,E,k,_,C,L,S,q,O,I,A,R,T,D,H=n[1].judul+"",M=n[1].waktu+"",N=n[1].isi+"";return document.title=R=n[1].judul,{c(){e=p("div"),o=p("br"),r=g(),s=p("h1"),i=m(H),c=g(),u=p("hr"),l=g(),h=p("p"),$=p("code"),w=m(M),x=g(),j=p("div"),E=g(),k=p("div"),_=p("div"),_.textContent="×",C=g(),L=p("a"),S=m("✍"),O=g(),I=p("a"),I.textContent="☖",A=g(),v(s,"class","text-center"),v(j,"class","isinya svelte-8w0gqx"),v(e,"class","container"),v(_,"class","btn btn-danger"),v(L,"href",q="#/"+n[0].slug+"/edit"),v(L,"class","btn btn-warning"),v(I,"href","#/"),v(I,"class","btn btn-success"),v(k,"class","bawah")},m(t,d){f(t,e,d),a(e,o),a(e,r),a(e,s),a(s,i),a(e,c),a(e,u),a(e,l),a(e,h),a(h,$),a($,w),a(e,x),a(e,j),j.innerHTML=N,f(t,E,d),f(t,k,d),a(k,_),a(k,C),a(k,L),a(L,S),a(k,O),a(k,I),f(t,A,d),T||(D=b(_,"click",n[2]),T=!0)},p(t,[n]){2&n&&H!==(H=t[1].judul+"")&&y(i,H),2&n&&M!==(M=t[1].waktu+"")&&y(w,M),2&n&&N!==(N=t[1].isi+"")&&(j.innerHTML=N),1&n&&q!==(q="#/"+t[0].slug+"/edit")&&v(L,"href",q),2&n&&R!==(R=t[1].judul)&&(document.title=R)},i:t,o:t,d(t){t&&d(e),t&&d(E),t&&d(k),t&&d(A),T=!1,D()}}}function qt(t,n,e){let o;u(t,mt,(t=>e(3,o=t)));let{params:r}=n,s={judul:"",waktu:"",isi:""};return _((()=>{ht(),l(mt,o=!0,o),fetch(pt).then((t=>t.json())).then((t=>{l(mt,o=!1,o),t=t.filter((t=>t.slug==r.slug)),e(1,s=t[0]),e(1,s.isi=marked(t[0].isi),s)}))})),t.$$set=t=>{"params"in t&&e(0,r=t.params)},[r,s,()=>{confirm("Hapus kah?")&&(l(mt,o=!0,o),fetch(pt).then((t=>t.json())).then((t=>{l(mt,o=!1,o),t=t.filter((t=>t.slug!=r.slug));let n=new FormData;n.append("json",JSON.stringify(t)),l(mt,o=!0,o),fetch(pt+"/ubah",{method:"post",body:n}).then((()=>{l(mt,o=!1,o),at("/")}))})))}]}class Ot extends tt{constructor(t){super(),Z(this,t,qt,St,i,{params:0})}}function It(n){let e,o,s,i,c,u,l,h,m,$;return document.title=h="Edit "+n[2],{c(){e=p("form"),o=p("input"),s=g(),i=p("textarea"),c=g(),u=p("div"),u.innerHTML='<input type="submit" class="btn btn-success" value="✓" name=""/>',l=g(),v(o,"type",""),v(o,"class","form-control"),v(o,"placeholder","Judul"),v(o,"name",""),o.required=!0,v(i,"class","form-control"),v(i,"placeholder","Isi"),v(u,"class","bawah")},m(t,r){f(t,e,r),a(e,o),x(o,n[2]),n[7](o),a(e,s),a(e,i),x(i,n[3]),n[9](i),a(e,c),a(e,u),f(t,l,r),m||($=[b(o,"input",n[6]),b(i,"input",n[8]),b(e,"submit",w(n[4]))],m=!0)},p(t,[n]){4&n&&o.value!==t[2]&&x(o,t[2]),8&n&&x(i,t[3]),4&n&&h!==(h="Edit "+t[2])&&(document.title=h)},i:t,o:t,d(t){t&&d(e),n[7](null),n[9](null),t&&d(l),m=!1,r($)}}}function At(t,n,e){let o;u(t,mt,(t=>e(10,o=t)));let r,s,{params:i}=n,c="",a="";_((()=>{s.focus(),ht();const t=()=>e(0,r.style.height=window.innerHeight-120+"px",r);t(),window.addEventListener("resize",t),l(mt,o=!0,o),fetch(pt).then((t=>t.json())).then((t=>{l(mt,o=!1,o),t=t.filter((t=>t.slug==i.slug))[0],e(2,c=t.judul),e(3,a=t.isi)}))}));return t.$$set=t=>{"params"in t&&e(5,i=t.params)},[r,s,c,a,()=>{l(mt,o=!0,o),fetch(pt).then((t=>t.json())).then((t=>{l(mt,o=!1,o);let n=t.findIndex((t=>t.slug==i.slug));t[n].judul=c,t[n].isi=a;let e=new FormData;e.append("json",JSON.stringify(t)),l(mt,o=!0,o),fetch(pt+"/ubah",{method:"post",body:e}).then((()=>{l(mt,o=!1,o),at("/"+i.slug)}))}))},i,function(){c=this.value,e(2,c)},function(t){q[t?"unshift":"push"]((()=>{s=t,e(1,s)}))},function(){a=this.value,e(3,a)},function(t){q[t?"unshift":"push"]((()=>{r=t,e(0,r)}))}]}class Rt extends tt{constructor(t){super(),Z(this,t,At,It,i,{params:5})}}function Tt(t,n,e){const o=t.slice();return o[7]=n[e],o}function Dt(t){let n,e,o,r=t[7].judul+"";return{c(){n=p("a"),e=m(r),v(n,"href",o="#/"+t[7].slug),v(n,"class","list-group-item list-group-item-action")},m(t,o){f(t,n,o),a(n,e)},p(t,s){2&s&&r!==(r=t[7].judul+"")&&y(e,r),2&s&&o!==(o="#/"+t[7].slug)&&v(n,"href",o)},d(t){t&&d(n)}}}function Ht(n){let e,o,s,i,c,u,l,m,$,y,j,E,k,_,C,L,S,q,O=n[1],I=[];for(let t=0;t<O.length;t+=1)I[t]=Dt(Tt(n,O,t));return document.title=L="Cari "+decodeURIComponent(n[0].cari),{c(){e=p("div"),o=p("br"),s=g(),i=p("h1"),i.textContent="Cari",c=g(),u=p("hr"),l=g(),m=p("form"),$=p("div"),y=p("input"),j=g(),E=p("div");for(let t=0;t<I.length;t+=1)I[t].c();k=g(),_=p("div"),_.innerHTML='<a href="#/" class="btn btn-info">☖</a>',C=g(),v(i,"class","text-center"),v(y,"type","search"),v(y,"class","form-control"),v(y,"placeholder","Cari apa?"),v(y,"name",""),y.required=!0,v($,"class","form-group"),v(E,"class","list-group svelte-rbqg3s"),v(e,"class","container"),v(_,"class","bawah")},m(t,r){f(t,e,r),a(e,o),a(e,s),a(e,i),a(e,c),a(e,u),a(e,l),a(e,m),a(m,$),a($,y),x(y,n[2]),n[6](y),a(e,j),a(e,E);for(let t=0;t<I.length;t+=1)I[t].m(E,null);f(t,k,r),f(t,_,r),f(t,C,r),S||(q=[b(y,"input",n[5]),b(m,"submit",w(n[4]))],S=!0)},p(t,[n]){if(4&n&&x(y,t[2]),2&n){let e;for(O=t[1],e=0;e<O.length;e+=1){const o=Tt(t,O,e);I[e]?I[e].p(o,n):(I[e]=Dt(o),I[e].c(),I[e].m(E,null))}for(;e<I.length;e+=1)I[e].d(1);I.length=O.length}1&n&&L!==(L="Cari "+decodeURIComponent(t[0].cari))&&(document.title=L)},i:t,o:t,d(t){t&&d(e),n[6](null),h(I,t),t&&d(k),t&&d(_),t&&d(C),S=!1,r(q)}}}function Mt(t,n,e){let o,{params:r}=n,s=[],i="";_((()=>{ht(),o.focus(),e(2,i=decodeURIComponent(r.cari))}));return t.$$set=t=>{"params"in t&&e(0,r=t.params)},t.$$.update=()=>{if(3&t.$$.dirty&&r){let t=decodeURIComponent(r.cari);fetch(pt).then((t=>t.json())).then((n=>{e(1,s=n.reverse().filter((n=>n.judul.toLowerCase().includes(t.toLowerCase())||n.isi.toLowerCase().includes(t.toLowerCase())))),0==s.length&&e(1,s=[{slug:"",judul:t+" tidak ditemukan"}])}))}},[r,s,i,o,()=>{at("/cari/"+encodeURIComponent(i))},function(){i=this.value,e(2,i)},function(t){q[t?"unshift":"push"]((()=>{o=t,e(3,o)}))}]}class Nt extends tt{constructor(t){super(),Z(this,t,Mt,Ht,i,{params:0})}}function zt(n){let e;return{c(){e=p("div"),e.innerHTML='<div class="indeterminate svelte-jvqqfy"></div>',v(e,"class","progress-loading svelte-jvqqfy")},m(t,n){f(t,e,n)},p:t,i:t,o:t,d(t){t&&d(e)}}}class Ut extends tt{constructor(t){super(),Z(this,t,null,zt,i,{})}}function Ft(t){let n,e;return n=new Ut({}),{c(){K(n.$$.fragment)},m(t,o){Q(n,t,o),e=!0},i(t){e||(P(n.$$.fragment,t),e=!0)},o(t){X(n.$$.fragment,t),e=!1},d(t){V(n,t)}}}function Jt(t){let n,e,o,r=t[0]&&Ft();return e=new dt({props:{routes:t[1]}}),{c(){r&&r.c(),n=g(),K(e.$$.fragment)},m(t,s){r&&r.m(t,s),f(t,n,s),Q(e,t,s),o=!0},p(t,[e]){t[0]?r?1&e&&P(r,1):(r=Ft(),r.c(),P(r,1),r.m(n.parentNode,n)):r&&(Y(),X(r,1,1,(()=>{r=null})),B())},i(t){o||(P(r),P(e.$$.fragment,t),o=!0)},o(t){X(r),X(e.$$.fragment,t),o=!1},d(t){r&&r.d(t),t&&d(n),V(e,t)}}}function Yt(t,n,e){let o;u(t,mt,(t=>e(0,o=t)));return[o,{"/":vt,"/login":jt,"/tulis":Lt,"/cari/:cari":Nt,"/:slug":Ot,"/:slug/edit":Rt}]}return new class extends tt{constructor(t){super(),Z(this,t,Yt,Jt,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
