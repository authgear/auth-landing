import{w as t,x as n,_ as e,a as r,b as s,c as a,i as c,s as u,d as o,S as i,g as f,f as l,t as h,q as p,e as v,l as m,h as d,j as x,k as y,m as b,o as g,p as R,u as j,r as w,n as k}from"./client.38eeaee2.js";function D(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=r(t);if(n){var c=r(this).constructor;e=Reflect.construct(a,arguments,c)}else e=a.apply(this,arguments);return s(this,e)}}function E(t){var n,e,r,s,a,c,u=t[0].title+"",o=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=f(),r=l("h1"),s=h(u),a=f(),c=l("div"),this.h()},l:function(t){p('[data-svelte="svelte-iu3vwn"]',document.head).forEach(v),e=m(t),r=d(t,"H1",{});var n=x(r);s=y(n,u),n.forEach(v),a=m(t),c=d(t,"DIV",{class:!0}),x(c).forEach(v),this.h()},h:function(){b(c,"class","content svelte-q42aha")},m:function(t,n){g(t,e,n),g(t,r,n),R(r,s),g(t,a,n),g(t,c,n),c.innerHTML=o},p:function(t,e){var r=j(e,1)[0];1&r&&n!==(n=t[0].title)&&(document.title=n),1&r&&u!==(u=t[0].title+"")&&w(s,u),1&r&&o!==(o=t[0].html+"")&&(c.innerHTML=o)},i:k,o:k,d:function(t){t&&v(e),t&&v(r),t&&v(a),t&&v(c)}}}function H(t){return q.apply(this,arguments)}function q(){return(q=t(n.mark((function t(e){var r,s,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,this.fetch("blog/".concat(r.slug,".json"));case 3:return s=t.sent,t.next=6,s.json();case 6:if(a=t.sent,200!==s.status){t.next=9;break}return t.abrupt("return",{post:a});case 9:return this.error(s.status,a.message),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function L(t,n,e){var r=n.post;return t.$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var M=function(t){e(r,i);var n=D(r);function r(t){var e;return a(this,r),e=n.call(this),c(o(e),t,L,E,u,{post:0}),e}return r}();export default M;export{H as preload};
