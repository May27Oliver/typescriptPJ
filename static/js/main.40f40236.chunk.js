(this["webpackJsonpmy-app-ts"]=this["webpackJsonpmy-app-ts"]||[]).push([[0],{19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n.n(a),s=n(12),i=n.n(s),o=(n(19),n(10)),j=n.n(o),p=n(13),b=n(2),u=n.p+"static/media/logo.6ce24c58.svg",d=n(5),l=n.n(d),O=n(7),h=n.n(O),x=n(0),m={username:"\u7c73\u7c73",shoppingCart:{items:[]}},f=Object(a.createContext)(m),g=r.a.createContext(void 0),C=function(e){var t=Object(a.useState)(m),n=Object(b.a)(t,2),c=n[0],r=n[1];return Object(x.jsx)(f.Provider,{value:c,children:Object(x.jsx)(g.Provider,{value:r,children:e.children})})},v=n(11),_=n(3),S=(c=function(e){var t=e.id,n=e.name,c=e.email,r=e.addToCart,s=Object(a.useContext)(f);return Object(x.jsxs)("div",{className:h.a.cardContainer,children:[Object(x.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(t)}),Object(x.jsx)("h2",{children:n}),Object(x.jsx)("p",{children:c}),Object(x.jsxs)("p",{children:["\u4f5c\u8005\uff1a",s.username]}),Object(x.jsx)("button",{onClick:function(){return r(t,n)},children:"\u52a0\u5165\u8cfc\u7269\u8eca"})]})},function(e){var t=Object(a.useContext)(g);return Object(x.jsx)(c,Object(_.a)(Object(_.a)({},e),{},{addToCart:function(e,n){t&&t((function(t){return Object(_.a)(Object(_.a)({},t),{},{shoppingCart:{items:[].concat(Object(v.a)(t.shoppingCart.items),[{id:e,name:n}])}})}))}}))}),A=function(e){var t=e.id,n=e.name,c=e.email,r=Object(a.useContext)(f),s=function(){var e=Object(a.useContext)(g);return function(t,n){e&&e((function(e){return Object(_.a)(Object(_.a)({},e),{},{shoppingCart:{items:[].concat(Object(v.a)(e.shoppingCart.items),[{id:t,name:n}])}})}))}}();return Object(x.jsxs)("div",{className:h.a.cardContainer,children:[Object(x.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(t)}),Object(x.jsx)("h2",{children:"\u6253\u6298\u5546\u54c1"}),Object(x.jsx)("h2",{children:n}),Object(x.jsx)("p",{children:c}),Object(x.jsxs)("p",{children:["\u4f5c\u8005\uff1a",r.username]}),Object(x.jsx)("button",{onClick:function(){return s(t,n)},children:"\u52a0\u5165\u8cfc\u7269\u8eca"})]})},N=n(8),w=n.n(N),L=n(14),k=function(e){var t=Object(a.useContext)(f),n=Object(a.useState)(!1),c=Object(b.a)(n,2),r=c[0],s=c[1];return Object(x.jsxs)("div",{className:w.a.cardContainer,children:[Object(x.jsxs)("button",{className:w.a.button,onClick:function(e){s(!r)},children:[Object(x.jsx)(L.a,{}),Object(x.jsxs)("span",{children:["\u8cfc\u7269\u8eca ",t.shoppingCart.items.length,"\uff08\u4ef6\uff09"]})]}),r?Object(x.jsx)("div",{className:w.a.cartDropDown,children:Object(x.jsx)("ul",{children:t.shoppingCart.items.map((function(e){return Object(x.jsx)("li",{children:e.name})}))})}):""]})},D=function(e){var t=Object(a.useState)(0),n=Object(b.a)(t,2),c=(n[0],n[1],Object(a.useState)([])),r=Object(b.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(!1),d=Object(b.a)(o,2),O=d[0],h=d[1],m=Object(a.useState)(""),f=Object(b.a)(m,2),g=f[0],C=f[1],v=function(){var e=Object(p.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/users");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,i(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),C(e.t0.message);case 14:h(!1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v()}),[]),Object(x.jsxs)("div",{className:l.a.app,children:[Object(x.jsxs)("div",{className:l.a.appHeader,children:[Object(x.jsx)("img",{src:u,className:l.a.appLogo,alt:"logo"}),Object(x.jsx)("h1",{children:"Oliver\u6a5f\u5668\u4eba\u7cbe\u54c1\u5c08\u8ce3\u5e97"})]}),Object(x.jsx)(k,{}),!g||""!==g&&Object(x.jsx)("div",{children:g}),O?Object(x.jsx)("h2",{children:"loading..."}):Object(x.jsx)("div",{className:l.a.robotList,children:s.map((function(e,t){return t%2===0?Object(x.jsx)(A,{id:e.id,name:e.name,email:e.email},e.id):Object(x.jsx)(S,{id:e.id,name:e.name,email:e.email},e.id)}))})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(C,{children:Object(x.jsx)(D,{})})}),document.getElementById("root")),y()},5:function(e,t,n){e.exports={app:"App_app__1svAO",appHeader:"App_appHeader__WiOcA",appLogo:"App_appLogo__11Fis","App-logo-spin":"App_App-logo-spin__1As8w",robotList:"App_robotList__3W8-r"}},7:function(e,t,n){e.exports={cardContainer:"Robot_cardContainer__1fTG2"}},8:function(e,t,n){e.exports={cartContainer:"ShoppingCart_cartContainer__3uYfd",cartDropDown:"ShoppingCart_cartDropDown__2xWel",button:"ShoppingCart_button__8drN8"}}},[[22,1,2]]]);
//# sourceMappingURL=main.40f40236.chunk.js.map