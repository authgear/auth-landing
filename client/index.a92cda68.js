import{S as e,i as t,s as a,e as n,t as s,a as r,c as i,b as l,d as o,f as c,g as u,h as g,j as d,k as p,l as f,m,n as h,o as v,p as b,q as y,r as w,u as _,v as $,w as x,x as k,y as F}from"./client.7f2d6b24.js";import{C as A,a as E,R as S}from"./Resources.d68c79c8.js";function I(e){let t,a,_,$,x,k,F,E,S,I,C,D,j,T,L;const P=new A({});return{c(){t=n("section"),a=n("div"),_=n("div"),$=n("div"),x=n("h1"),k=s("Don't Compromise Security, Let us help"),F=r(),E=n("p"),S=s("Rapidly integrate authentication for your web and mobile applications,\n          with security and reliability"),I=r(),i(P.$$.fragment),C=r(),D=n("div"),j=n("img"),this.h()},l(e){t=l(e,"SECTION",{class:!0});var n=o(t);a=l(n,"DIV",{class:!0});var s=o(a);_=l(s,"DIV",{class:!0});var r=o(_);$=l(r,"DIV",{class:!0});var i=o($);x=l(i,"H1",{class:!0});var p=o(x);k=c(p,"Don't Compromise Security, Let us help"),p.forEach(u),F=g(i),E=l(i,"P",{class:!0});var f=o(E);S=c(f,"Rapidly integrate authentication for your web and mobile applications,\n          with security and reliability"),f.forEach(u),I=g(i),d(P.$$.fragment,i),i.forEach(u),C=g(r),D=l(r,"DIV",{class:!0});var m=o(D);j=l(m,"IMG",{class:!0,src:!0,alt:!0}),m.forEach(u),r.forEach(u),s.forEach(u),n.forEach(u),this.h()},h(){p(x,"class","svelte-fox7ad"),p(E,"class","svelte-fox7ad"),p($,"class","col-12 col-md-5 t tagline svelte-fox7ad"),p(j,"class","hero-img svelte-fox7ad"),j.src!==(T="img/hero-header-img.png")&&p(j,"src","img/hero-header-img.png"),p(j,"alt","Hero Header"),p(D,"class","hero-img-wrapper col-12 col-md-7 svelte-fox7ad"),p(_,"class","row"),p(a,"class","container-fluid svelte-fox7ad"),p(t,"class","hero-section svelte-fox7ad")},m(e,n){f(e,t,n),m(t,a),m(a,_),m(_,$),m($,x),m(x,k),m($,F),m($,E),m(E,S),m($,I),h(P,$,null),m(_,C),m(_,D),m(D,j),L=!0},p:v,i(e){L||(b(P.$$.fragment,e),L=!0)},o(e){y(P.$$.fragment,e),L=!1},d(e){e&&u(t),w(P)}}}class C extends e{constructor(e){super(),t(this,e,null,I,a,{})}}function D(e,t,a){const n=e.slice();return n[1]=t[a],n}function j(e){let t,a,i,d,h,b,y,w,_,$,x,k,F=e[1].title+"",A=e[1].description+"";return{c(){t=n("div"),a=n("div"),i=n("img"),b=r(),y=n("h3"),w=s(F),_=r(),$=n("p"),x=s(A),k=r(),this.h()},l(e){t=l(e,"DIV",{class:!0});var n=o(t);a=l(n,"DIV",{class:!0});var s=o(a);i=l(s,"IMG",{class:!0,src:!0,alt:!0}),s.forEach(u),b=g(n),y=l(n,"H3",{class:!0});var r=o(y);w=c(r,F),r.forEach(u),_=g(n),$=l(n,"P",{class:!0});var d=o($);x=c(d,A),d.forEach(u),k=g(n),n.forEach(u),this.h()},h(){p(i,"class","feature-img svelte-hirava"),i.src!==(d=e[1].imgSrc)&&p(i,"src",d),p(i,"alt",h=e[1].title),p(a,"class","feature-img-wrapper svelte-hirava"),p(y,"class","feature-title svelte-hirava"),p($,"class","feature-description svelte-hirava"),p(t,"class","feature-wrapper col-12 col-md-3 svelte-hirava")},m(e,n){f(e,t,n),m(t,a),m(a,i),m(t,b),m(t,y),m(y,w),m(t,_),m(t,$),m($,x),m(t,k)},p:v,d(e){e&&u(t)}}}function T(e){let t,a,s,r=e[0],i=[];for(let t=0;t<r.length;t+=1)i[t]=j(D(e,r,t));return{c(){t=n("section"),a=n("div"),s=n("div");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){t=l(e,"SECTION",{class:!0});var n=o(t);a=l(n,"DIV",{class:!0});var r=o(a);s=l(r,"DIV",{class:!0});var c=o(s);for(let e=0;e<i.length;e+=1)i[e].l(c);c.forEach(u),r.forEach(u),n.forEach(u),this.h()},h(){p(s,"class","row"),p(a,"class","container-fluid svelte-hirava"),p(t,"class","features-section svelte-hirava")},m(e,n){f(e,t,n),m(t,a),m(a,s);for(let e=0;e<i.length;e+=1)i[e].m(s,null)},p(e,[t]){if(1&t){let a;for(r=e[0],a=0;a<r.length;a+=1){const n=D(e,r,a);i[a]?i[a].p(n,t):(i[a]=j(n),i[a].c(),i[a].m(s,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=r.length}},i:v,o:v,d(e){e&&u(t),_(i,e)}}}function L(e){return[[{title:"Single Sign-On",description:"Login once to multiple applications",imgSrc:"img/features/sso.png"},{title:"User Management",description:"Centralized management for admin",imgSrc:"img/features/user-management.png"},{title:"Simple integration",description:"Support OpenID Connect, and K8S gateway Social Login",imgSrc:"img/features/simple-integration.png"},{title:"Social Login",description:"Sign in with Google, Facebook, Apple and more",imgSrc:"img/features/social-login.png"},{title:"Password Policies and MFA",description:"Multiple Factor Auth and Customizable Password Polices",imgSrc:"img/features/password-policies-mfa.png"},{title:"Sessions Management",description:"Better security with sessions management by users",imgSrc:"img/features/sessions-management.png"},{title:"Customizable Look and Feel",description:"Looks great out of the box and customizable",imgSrc:"img/features/customizable.png"},{title:"Existing user directories",description:"LDAP and Active Directory support",imgSrc:"img/features/user-directories.png"}]]}class P extends e{constructor(e){super(),t(this,e,L,T,a,{})}}function V(e){let t,a,i,d,h,b,y,w,_,$,x,k,F,A,E,S,I,C,D,j,T;return{c(){t=n("section"),a=n("div"),i=n("div"),d=n("div"),h=n("h3"),b=s("Trusted by"),y=r(),w=n("div"),_=n("div"),$=n("img"),k=r(),F=n("div"),A=n("div"),E=n("img"),I=r(),C=n("div"),D=n("div"),j=n("img"),this.h()},l(e){t=l(e,"SECTION",{class:!0});var n=o(t);a=l(n,"DIV",{class:!0});var s=o(a);i=l(s,"DIV",{class:!0});var r=o(i);d=l(r,"DIV",{class:!0});var p=o(d);h=l(p,"H3",{class:!0});var f=o(h);b=c(f,"Trusted by"),f.forEach(u),p.forEach(u),y=g(r),w=l(r,"DIV",{class:!0});var m=o(w);_=l(m,"DIV",{class:!0});var v=o(_);$=l(v,"IMG",{class:!0,src:!0,alt:!0}),v.forEach(u),m.forEach(u),k=g(r),F=l(r,"DIV",{class:!0});var x=o(F);A=l(x,"DIV",{class:!0});var S=o(A);E=l(S,"IMG",{class:!0,src:!0,alt:!0}),S.forEach(u),x.forEach(u),I=g(r),C=l(r,"DIV",{class:!0});var T=o(C);D=l(T,"DIV",{class:!0});var L=o(D);j=l(L,"IMG",{class:!0,src:!0,alt:!0}),L.forEach(u),T.forEach(u),r.forEach(u),s.forEach(u),n.forEach(u),this.h()},h(){p(h,"class","trustedby__title svelte-1slmma3"),p(d,"class","trustedby__title-wrapper col-12 svelte-1slmma3"),p($,"class","trustedby__img svelte-1slmma3"),$.src!==(x="img/trustedby/hkpc-logo.png")&&p($,"src","img/trustedby/hkpc-logo.png"),p($,"alt","HKPC Logo"),p(_,"class","trustedby__img-wrapper svelte-1slmma3"),p(w,"class","col-12 col-md-3"),p(E,"class","trustedby__img svelte-1slmma3"),E.src!==(S="img/trustedby/cmic-logo.png")&&p(E,"src","img/trustedby/cmic-logo.png"),p(E,"alt","CMIC Logo"),p(A,"class","trustedby__img-wrapper svelte-1slmma3"),p(F,"class","col-12 col-md-3"),p(j,"class","trustedby__img svelte-1slmma3"),j.src!==(T="img/trustedby/rees-logo.png")&&p(j,"src","img/trustedby/rees-logo.png"),p(j,"alt","REES Logo"),p(D,"class","trustedby__img-wrapper svelte-1slmma3"),p(C,"class","col-12 col-md-3"),p(i,"class","row"),p(a,"class","container-fluid svelte-1slmma3"),p(t,"class","trustedby svelte-1slmma3")},m(e,n){f(e,t,n),m(t,a),m(a,i),m(i,d),m(d,h),m(h,b),m(i,y),m(i,w),m(w,_),m(_,$),m(i,k),m(i,F),m(F,A),m(A,E),m(i,I),m(i,C),m(C,D),m(D,j)},p:v,i:v,o:v,d(e){e&&u(t)}}}class O extends e{constructor(e){super(),t(this,e,null,V,a,{})}}function M(e){let t,a,s,r;return{c(){t=n("section"),a=n("div"),s=n("img"),this.h()},l(e){t=l(e,"SECTION",{class:!0});var n=o(t);a=l(n,"DIV",{class:!0});var r=o(a);s=l(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(u),n.forEach(u),this.h()},h(){p(s,"class","devices-demo__img svelte-e98ln4"),s.src!==(r="img/devices-demo.png")&&p(s,"src","img/devices-demo.png"),p(s,"alt","Demo of Skygear Auth on Mobile and Desktop devices"),p(a,"class","container-fluid devices-demo__img-wrapper svelte-e98ln4"),p(t,"class","devices-demo svelte-e98ln4")},m(e,n){f(e,t,n),m(t,a),m(a,s)},p:v,i:v,o:v,d(e){e&&u(t)}}}class N extends e{constructor(e){super(),t(this,e,null,M,a,{})}}var z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var B=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof s?new s(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var s,r,i=n.util.type(t);switch(a=a||{},i){case"Object":if(r=n.util.objId(t),a[r])return a[r];for(var l in s={},a[r]=s,t)t.hasOwnProperty(l)&&(s[l]=e(t[l],a));return s;case"Array":return r=n.util.objId(t),a[r]?a[r]:(s=[],a[r]=s,t.forEach((function(t,n){s[n]=e(t,a)})),s);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var a in t)if(t[a].src==e)return t[a]}return null}}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var s in t)a[s]=t[s];return a},insertBefore:function(e,t,a,s){var r=(s=s||n.languages)[e],i={};for(var l in r)if(r.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a.hasOwnProperty(l)||(i[l]=r[l])}var c=s[e];return s[e]=i,n.languages.DFS(n.languages,(function(t,a){a===c&&t!=e&&(this[t]=i)})),i},DFS:function e(t,a,s,r){r=r||{};var i=n.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],s||l);var o=t[l],c=n.util.type(o);"Object"!==c||r[i(o)]?"Array"!==c||r[i(o)]||(r[i(o)]=!0,e(o,a,l,r)):(r[i(o)]=!0,e(o,a,null,r))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var s={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",s),s.elements=Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)),n.hooks.run("before-all-elements-highlight",s);for(var r,i=0;r=s.elements[i++];)n.highlightElement(r,!0===t,s.callback)},highlightElement:function(a,s,r){var i=n.util.getLanguage(a),l=n.languages[i];a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+i;var o=a.parentNode;o&&"pre"===o.nodeName.toLowerCase()&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+i);var c={element:a,language:i,grammar:l,code:a.textContent};function u(e){c.highlightedCode=e,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,n.hooks.run("after-highlight",c),n.hooks.run("complete",c),r&&r.call(c.element)}if(n.hooks.run("before-sanity-check",c),!c.code)return n.hooks.run("complete",c),void(r&&r.call(c.element));if(n.hooks.run("before-highlight",c),c.grammar)if(s&&e.Worker){var g=new Worker(n.filename);g.onmessage=function(e){u(e.data)},g.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(n.highlight(c.code,c.grammar,c.language));else u(n.util.encode(c.code))},highlight:function(e,t,a){var r={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",r),r.tokens=n.tokenize(r.code,r.grammar),n.hooks.run("after-tokenize",r),s.stringify(n.util.encode(r.tokens),r.language)},tokenize:function(e,t){var a=t.rest;if(a){for(var o in a)t[o]=a[o];delete t.rest}var c=new r;return i(c,c.head,e),function e(t,a,r,o,c,u,g){for(var d in r)if(r.hasOwnProperty(d)&&r[d]){var p=r[d];p=Array.isArray(p)?p:[p];for(var f=0;f<p.length;++f){if(g&&g==d+","+f)return;var m=p[f],h=m.inside,v=!!m.lookbehind,b=!!m.greedy,y=0,w=m.alias;if(b&&!m.pattern.global){var _=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,_+"g")}m=m.pattern||m;for(var $=o.next,x=c;$!==a.tail;x+=$.value.length,$=$.next){var k=$.value;if(a.length>t.length)return;if(!(k instanceof s)){var F=1;if(b&&$!=a.tail.prev){if(m.lastIndex=x,!(C=m.exec(t)))break;var A=C.index+(v&&C[1]?C[1].length:0),E=C.index+C[0].length,S=x;for(S+=$.value.length;A>=S;)$=$.next,S+=$.value.length;if(S-=$.value.length,x=S,$.value instanceof s)continue;for(var I=$;I!==a.tail&&(S<E||"string"==typeof I.value&&!I.prev.value.greedy);I=I.next)F++,S+=I.value.length;F--,k=t.slice(x,S),C.index-=x}else{m.lastIndex=0;var C=m.exec(k)}if(C){v&&(y=C[1]?C[1].length:0);A=C.index+y,C=C[0].slice(y),E=A+C.length;var D=k.slice(0,A),j=k.slice(E),T=$.prev;D&&(T=i(a,T,D),x+=D.length),l(a,T,F);var L=new s(d,h?n.tokenize(C,h):C,w,C,b);if($=i(a,T,L),j&&i(a,$,j),F>1&&e(t,a,r,$.prev,x,!0,d+","+f),u)break}else if(u)break}}}}}(e,c,t,c.head,0),function(e){var t=[],a=e.head.next;for(;a!==e.tail;)t.push(a.value),a=a.next;return t}(c)},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var s,r=0;s=a[r++];)s(t)}},Token:s};function s(e,t,a,n,s){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!s}function r(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function i(e,t,a){var n=t.next,s={value:a,prev:t,next:n};return t.next=s,n.prev=s,e.length++,s}function l(e,t,a){for(var n=t.next,s=0;s<a&&n!==e.tail;s++)n=n.next;t.next=n,n.prev=t,e.length-=s}if(e.Prism=n,s.stringify=function e(t,a){if("string"==typeof t)return t;if(Array.isArray(t)){var s="";return t.forEach((function(t){s+=e(t,a)})),s}var r={type:t.type,content:e(t.content,a),tag:"span",classes:["token",t.type],attributes:{},language:a},i=t.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(r.classes,i):r.classes.push(i)),n.hooks.run("wrap",r);var l="";for(var o in r.attributes)l+=" "+o+'="'+(r.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+l+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var a=JSON.parse(t.data),s=a.language,r=a.code,i=a.immediateClose;e.postMessage(n.highlight(r,n.languages[s],s)),i&&e.close()}),!1),n):n;var o=n.util.currentScript();function c(){n.manual||n.highlightAll()}if(o&&(n.filename=o.src,o.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){var u=document.readyState;"loading"===u||"interactive"===u&&o&&o.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==z&&(z.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,a){var n={};n["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[a]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};s["language-"+a]={pattern:/[\s\S]+/,inside:t.languages[a]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:s},t.languages.insertBefore("markup","cdata",r)}}),t.languages.xml=t.languages.extend("markup",{}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.markup.tag.addInlined("script","javascript"),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var n,s=e.getAttribute("data-src"),r=e,i=/\blang(?:uage)?-([\w-]+)\b/i;r&&!i.test(r.className);)r=r.parentNode;if(r&&(n=(e.className.match(i)||[,""])[1]),!n){var l=(s.match(/\.(\w+)$/)||[,""])[1];n=a[l]||l}var o=document.createElement("code");o.className="language-"+n,e.textContent="",o.textContent="Loading…",e.appendChild(o);var c=new XMLHttpRequest;c.open("GET",s,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(o.textContent=c.responseText,t.highlightElement(o),e.setAttribute("data-src-loaded","")):c.status>=400?o.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:o.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}));function q(e,t,a){const n=e.slice();return n[8]=t[a],n[10]=a,n}function H(e){let t,a,i,d,h=e[8].language+"";return{c(){t=n("button"),a=s(h),i=r(),this.h()},l(e){t=l(e,"BUTTON",{class:!0});var n=o(t);a=c(n,h),i=g(n),n.forEach(u),this.h()},h(){p(t,"class","editor__header__tab svelte-88mvb9"),$(t,"editor__header__tab--active",e[1].language===e[8].language)},m(n,s,r){f(n,t,s),m(t,a),m(t,i),r&&d(),d=x(t,"click",e[5](e[10]))},p(n,s){e=n,1&s&&h!==(h=e[8].language+"")&&k(a,h),3&s&&$(t,"editor__header__tab--active",e[1].language===e[8].language)},d(e){e&&u(t),d()}}}function Z(e){let t,a,i,d,h,b,y,w,k,F,A,E,S,I,C,D,j=e[0],T=[];for(let t=0;t<j.length;t+=1)T[t]=H(q(e,j,t));return{c(){t=n("div"),a=n("div"),i=n("div");for(let e=0;e<T.length;e+=1)T[e].c();d=r(),h=n("div"),b=n("button"),y=s("Copy Code"),w=r(),k=n("div"),F=s("Copied!"),A=r(),E=n("pre"),S=n("code"),this.h()},l(e){t=l(e,"DIV",{class:!0});var n=o(t);a=l(n,"DIV",{class:!0});var s=o(a);i=l(s,"DIV",{class:!0});var r=o(i);for(let e=0;e<T.length;e+=1)T[e].l(r);r.forEach(u),d=g(s),h=l(s,"DIV",{class:!0});var p=o(h);b=l(p,"BUTTON",{class:!0});var f=o(b);y=c(f,"Copy Code"),f.forEach(u),w=g(p),k=l(p,"DIV",{class:!0});var m=o(k);F=c(m,"Copied!"),m.forEach(u),p.forEach(u),s.forEach(u),A=g(n),E=l(n,"PRE",{class:!0});var v=o(E);S=l(v,"CODE",{class:!0}),o(S).forEach(u),v.forEach(u),n.forEach(u),this.h()},h(){p(i,"class","editor__header__tabs-wrapper svelte-88mvb9"),p(b,"class","editor__header__copybtn svelte-88mvb9"),p(k,"class","editor__header__copy-tooltip svelte-88mvb9"),$(k,"editor__header__copy-tooltip--visible",e[2]),p(h,"class","editor__header__copybtn-wrapper svelte-88mvb9"),p(a,"class","editor__header svelte-88mvb9"),p(S,"class",I="language-"+e[3]+" svelte-88mvb9"),p(E,"class",C="editor__code-wrapper language-"+e[3]+" svelte-88mvb9"),p(t,"class","editor svelte-88mvb9")},m(n,s,r){f(n,t,s),m(t,a),m(a,i);for(let e=0;e<T.length;e+=1)T[e].m(i,null);m(a,d),m(a,h),m(h,b),m(b,y),m(h,w),m(h,k),m(k,F),m(t,A),m(t,E),m(E,S),S.innerHTML=e[4],r&&D(),D=x(b,"click",e[6])},p(e,[t]){if(35&t){let a;for(j=e[0],a=0;a<j.length;a+=1){const n=q(e,j,a);T[a]?T[a].p(n,t):(T[a]=H(n),T[a].c(),T[a].m(i,null))}for(;a<T.length;a+=1)T[a].d(1);T.length=j.length}4&t&&$(k,"editor__header__copy-tooltip--visible",e[2]),16&t&&(S.innerHTML=e[4]),8&t&&I!==(I="language-"+e[3]+" svelte-88mvb9")&&p(S,"class",I),8&t&&C!==(C="editor__code-wrapper language-"+e[3]+" svelte-88mvb9")&&p(E,"class",C)},i:v,o:v,d(e){e&&u(t),_(T,e),D()}}}function G(e,t,a){let n,s,{codeTabs:r=[]}=t,i=r[0],l=!1;return e.$set=e=>{"codeTabs"in e&&a(0,r=e.codeTabs)},e.$$.update=()=>{2&e.$$.dirty&&a(3,n=i.language.toLowerCase()),10&e.$$.dirty&&a(4,s=function(e,t){let a;switch(e){case"javascript":a=B.languages.javascript;break;case"kotlin":a=B.languages.kotlin;break;case"swift":a=B.languages.swift;break;default:a=B.languages.javascript}return B.highlight(t,a,e)}(n,i.content))},[r,i,l,n,s,function(e){return function(){i!==r[e]&&a(1,i=r[e])}},function(){const e=document.createElement("textarea");e.value=i.content,e.style.top="0",e.style.left="0",e.style.zIndex="-1",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),document.body.removeChild(e),a(2,l=!0),setTimeout(()=>{a(2,l=!1)},1500)}]}!function(e){e.languages.kotlin=e.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[/\w+(?=\s*\()/,{pattern:/(\.)\w+(?=\s*\{)/,lookbehind:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete e.languages.kotlin["class-name"],e.languages.insertBefore("kotlin","string",{"raw-string":{pattern:/("""|''')[\s\S]*?\1/,alias:"string"}}),e.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),e.languages.insertBefore("kotlin","function",{label:{pattern:/\w+@|@\w+/,alias:"symbol"}});var t=[{pattern:/\$\{[^}]+\}/,inside:{delimiter:{pattern:/^\$\{|\}$/,alias:"variable"},rest:e.languages.kotlin}},{pattern:/\$\w+/,alias:"variable"}];e.languages.kotlin.string.inside=e.languages.kotlin["raw-string"].inside={interpolation:t}}(Prism),Prism.languages.swift=Prism.languages.extend("clike",{string:{pattern:/("|')(?:\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:{pattern:/\\\((?:[^()]|\([^)]+\))+\)/,inside:{delimiter:{pattern:/^\\\(|\)$/,alias:"variable"}}}}},keyword:/\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,constant:/\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,atrule:/@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,builtin:/\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/}),Prism.languages.swift.string.inside.interpolation.inside.rest=Prism.languages.swift;class R extends e{constructor(e){super(),t(this,e,G,Z,a,{codeTabs:0})}}function U(e){let t,a,_,$,x,k,F,A,E,S,I,C,D,j,T;const L=new R({props:{codeTabs:e[0]}});return{c(){t=n("section"),a=n("div"),_=n("div"),$=n("div"),x=n("h1"),k=s("Integrate Skygear Auth in Any Application in Just 5 Minutes!"),F=r(),A=n("div"),E=n("div"),i(L.$$.fragment),S=r(),I=n("div"),C=n("div"),D=n("img"),this.h()},l(e){t=l(e,"SECTION",{class:!0});var n=o(t);a=l(n,"DIV",{class:!0});var s=o(a);_=l(s,"DIV",{class:!0});var r=o(_);$=l(r,"DIV",{class:!0});var i=o($);x=l(i,"H1",{class:!0});var p=o(x);k=c(p,"Integrate Skygear Auth in Any Application in Just 5 Minutes!"),p.forEach(u),i.forEach(u),r.forEach(u),F=g(s),A=l(s,"DIV",{class:!0});var f=o(A);E=l(f,"DIV",{class:!0});var m=o(E);d(L.$$.fragment,m),m.forEach(u),S=g(f),I=l(f,"DIV",{class:!0});var h=o(I);C=l(h,"DIV",{class:!0});var v=o(C);D=l(v,"IMG",{class:!0,src:!0,alt:!0}),v.forEach(u),h.forEach(u),f.forEach(u),s.forEach(u),n.forEach(u),this.h()},h(){p(x,"class","code-sample__title svelte-tq09ij"),p($,"class","col-12"),p(_,"class","row"),p(E,"class","code-sample__editor-wrapper col-12 col-md-6 svelte-tq09ij"),p(D,"class","code-sample__img svelte-tq09ij"),D.src!==(j="ui-demo.png")&&p(D,"src","ui-demo.png"),p(D,"alt","UI Demo of Skygear Auth SSO"),p(C,"class","code-sample__img-wrapper svelte-tq09ij"),p(I,"class","col-12 col-md-6"),p(A,"class","code-sample__content-wrapper row svelte-tq09ij"),p(a,"class","container-fluid svelte-tq09ij"),p(t,"class","code-sample svelte-tq09ij")},m(e,n){f(e,t,n),m(t,a),m(a,_),m(_,$),m($,x),m(x,k),m(a,F),m(a,A),m(A,E),h(L,E,null),m(A,S),m(A,I),m(I,C),m(C,D),T=!0},p:v,i(e){T||(b(L.$$.fragment,e),T=!0)},o(e){y(L.$$.fragment,e),T=!1},d(e){e&&u(t),w(L)}}}function W(e){return[[{language:"JavaScript",content:"function() {\n\tconsole.log('I do not know how to code!!')\n}"},{language:"Kotlin",content:"function() { // this is some sample Kotlin code }"},{language:"Swift",content:"function() { // this is some sample Swift code }"}]]}class J extends e{constructor(e){super(),t(this,e,W,U,a,{})}}function K(e){let t,a,n,s,l,o,c,p;const m=new C({}),_=new N({}),$=new P({}),x=new J({}),k=new O({}),A=new E({}),I=new S({});return{c(){t=r(),i(m.$$.fragment),a=r(),i(_.$$.fragment),n=r(),i($.$$.fragment),s=r(),i(x.$$.fragment),l=r(),i(k.$$.fragment),o=r(),i(A.$$.fragment),c=r(),i(I.$$.fragment),this.h()},l(e){F('[data-svelte="svelte-d9az65"]',document.head).forEach(u),t=g(e),d(m.$$.fragment,e),a=g(e),d(_.$$.fragment,e),n=g(e),d($.$$.fragment,e),s=g(e),d(x.$$.fragment,e),l=g(e),d(k.$$.fragment,e),o=g(e),d(A.$$.fragment,e),c=g(e),d(I.$$.fragment,e),this.h()},h(){document.title="Skygear Auth"},m(e,r){f(e,t,r),h(m,e,r),f(e,a,r),h(_,e,r),f(e,n,r),h($,e,r),f(e,s,r),h(x,e,r),f(e,l,r),h(k,e,r),f(e,o,r),h(A,e,r),f(e,c,r),h(I,e,r),p=!0},p:v,i(e){p||(b(m.$$.fragment,e),b(_.$$.fragment,e),b($.$$.fragment,e),b(x.$$.fragment,e),b(k.$$.fragment,e),b(A.$$.fragment,e),b(I.$$.fragment,e),p=!0)},o(e){y(m.$$.fragment,e),y(_.$$.fragment,e),y($.$$.fragment,e),y(x.$$.fragment,e),y(k.$$.fragment,e),y(A.$$.fragment,e),y(I.$$.fragment,e),p=!1},d(e){e&&u(t),w(m,e),e&&u(a),w(_,e),e&&u(n),w($,e),e&&u(s),w(x,e),e&&u(l),w(k,e),e&&u(o),w(A,e),e&&u(c),w(I,e)}}}export default class extends e{constructor(e){super(),t(this,e,null,K,a,{})}}