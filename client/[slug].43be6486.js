import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,d as l,g as r,c,b as h,f as u,h as f,j as p,k as d,l as m,n as v}from"./client.f00967b0.js";function g(t){let s,a,g,j,b,w,x=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=o(x),b=e(),w=n("div"),this.h()},l(t){i('[data-svelte="svelte-iu3vwn"]',document.head).forEach(l),a=r(t),g=c(t,"H1",{});var s=h(g);j=u(s,x),s.forEach(l),b=r(t),w=c(t,"DIV",{class:!0}),h(w).forEach(l),this.h()},h(){f(w,"class","content svelte-1ycksgq")},m(t,s){p(t,a,s),p(t,g,s),d(g,j),p(t,b,s),p(t,w,s),w.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&x!==(x=t[0].title+"")&&m(j,x),1&a&&E!==(E=t[0].html+"")&&(w.innerHTML=E)},i:v,o:v,d(t){t&&l(a),t&&l(g),t&&l(b),t&&l(w)}}}async function j({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();return 200===s.status?{post:a}:(this.error(s.status,a.message),null)}function b(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,b,g,a,{post:0})}}export{j as preload};