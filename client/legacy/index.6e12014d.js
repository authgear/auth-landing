import{_ as t,a as n,b as r,c as e,i as o,s,d as c,S as a,f,t as u,g as i,h as l,j as h,k as p,e as v,l as g,m as d,o as m,p as R,r as y,q as E,u as b,n as j,v as x}from"./client.38eeaee2.js";function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,s=n(t);if(e){var c=n(this).constructor;o=Reflect.construct(s,arguments,c)}else o=s.apply(this,arguments);return r(this,o)}}function L(t,n,r){var e=t.slice();return e[1]=n[r],e}function S(t){var n,r,e,o,s,c=t[1].title+"";return{c:function(){n=f("li"),r=f("a"),e=u(c),s=i(),this.h()},l:function(t){n=l(t,"LI",{});var o=h(n);r=l(o,"A",{rel:!0,href:!0});var a=h(r);e=p(a,c),a.forEach(v),s=g(o),o.forEach(v),this.h()},h:function(){d(r,"rel","prefetch"),d(r,"href",o="blog/"+t[1].slug)},m:function(t,o){m(t,n,o),R(n,r),R(r,e),R(n,s)},p:function(t,n){1&n&&c!==(c=t[1].title+"")&&y(e,c),1&n&&o!==(o="blog/"+t[1].slug)&&d(r,"href",o)},d:function(t){t&&v(n)}}}function k(t){for(var n,r,e,o,s,c=t[0],a=[],y=0;y<c.length;y+=1)a[y]=S(L(t,c,y));return{c:function(){n=i(),r=f("h1"),e=u("Recent posts"),o=i(),s=f("ul");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){E('[data-svelte="svelte-10h7psl"]',document.head).forEach(v),n=g(t),r=l(t,"H1",{});var c=h(r);e=p(c,"Recent posts"),c.forEach(v),o=g(t),s=l(t,"UL",{class:!0});for(var f=h(s),u=0;u<a.length;u+=1)a[u].l(f);f.forEach(v),this.h()},h:function(){document.title="Blog",d(s,"class","svelte-13psmeo")},m:function(t,c){m(t,n,c),m(t,r,c),R(r,e),m(t,o,c),m(t,s,c);for(var f=0;f<a.length;f+=1)a[f].m(s,null)},p:function(t,n){var r=b(n,1)[0];if(1&r){var e;for(c=t[0],e=0;e<c.length;e+=1){var o=L(t,c,e);a[e]?a[e].p(o,r):(a[e]=S(o),a[e].c(),a[e].m(s,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=c.length}},i:j,o:j,d:function(t){t&&v(n),t&&v(r),t&&v(o),t&&v(s),x(a,t)}}}function q(){return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function A(t,n,r){var e=n.posts;return t.$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var B=function(n){t(f,a);var r=D(f);function f(t){var n;return e(this,f),n=r.call(this),o(c(n),t,A,k,s,{posts:0}),n}return f}();export default B;export{q as preload};
