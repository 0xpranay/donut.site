!function(t){function e(e){for(var r,c,i=e[0],s=e[1],u=e[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(_&&_(e);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={4:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(t){return c.p+"templates/"+({0:"__react_static_root__/src/pages/404",1:"__react_static_root__/src/pages/about",2:"__react_static_root__/src/pages/index",3:"__react_static_root__/src/pages/tip",6:"vendors~__react_static_root__/src/pages/tip"}[t]||t)+"."+{0:"378f94f8",1:"5722ff7f",2:"845d33f4",3:"c7184cf3",6:"6323a6f6"}[t]+".js"}(t);var s=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="https://ethtrader.github.io/donut.site/",c.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var _=s;o.push([377,5,7]),n()}({144:function(t,e,n){"use strict";var r=n(37),a=n.n(r),o=n(0),c=n.n(o),i=n(218),s=n(832),u=n(107),_=n(236),l=n(133),f=function(){return c.a.createElement("div",null,"This is a dynamic page! It will not be statically exported, but is available at runtime")};n(686),n(687),n(688);function d(t){var e=t.provider,n=t.loadWeb3Modal,r=t.logoutOfWeb3Modal;return c.a.createElement(i.a,{onClick:function(){e?r():n()}},e?"Disconnect Wallet":"Connect Wallet")}Object(u.addPrefetchExcludes)(["dynamic"]);e.a=function(){var t,e,n;if("undefined"!=typeof window){var r=Object(_.a)(),o=a()(r,3);t=o[0],e=o[1],n=o[2]}return c.a.createElement(u.Root,null,c.a.createElement(s.a,null,c.a.createElement(l.Link,{to:"/"},"Home"),c.a.createElement(l.Link,{to:"/tip?contentId=t3_kf251b&recipient=EthTraderCommunity&address=0xf7927bf0230c7b0E82376ac944AeedC3EA8dFa25"},"Tip"),c.a.createElement(d,{provider:t,loadWeb3Modal:e,logoutOfWeb3Modal:n})),c.a.createElement("div",null,c.a.createElement(c.a.Suspense,{fallback:c.a.createElement("em",null,"Loading...")},c.a.createElement(l.Router,null,c.a.createElement(f,{path:"dynamic"}),c.a.createElement(u.Routes,{path:"*"})))))}},236:function(t,e,n){"use strict";var r=n(3),a=n.n(r),o=n(32),c=n.n(o),i=n(37),s=n.n(i),u=n(0),_=n(823),l=n(355),f=n.n(l),d=n(356),p=n.n(d);e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(u.useState)(),n=s()(e,2),r=n[0],o=n[1],i=Object(u.useState)(!1),l=s()(i,2),d=l[0],m=l[1],h=t.autoLoad,v=void 0===h||h,g=t.infuraId,b=void 0===g?"INVALID_INFURA_KEY":g,j=t.NETWORK,y=void 0===j?"mainnet":j,E=new f.a({network:y,cacheProvider:!0,providerOptions:{walletconnect:{package:p.a,options:{infuraId:b}}}}),w=Object(u.useCallback)(c()(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.connect();case 2:e=t.sent,o(new _.a(e));case 4:case"end":return t.stop()}}),t)}))),[E]),O=Object(u.useCallback)(c()(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.clearCachedProvider();case 2:window.location.reload();case 3:case"end":return t.stop()}}),t)}))),[E]);return Object(u.useEffect)((function(){v&&!d&&E.cachedProvider&&(w(),m(!0))}),[v,d,w,m,E.cachedProvider]),[r,w,O]}},377:function(t,e,n){n(378),n(422),t.exports=n(430)},379:function(t,e,n){"use strict";n.r(e);var r=n(351),a=[{location:"__react_static_root__/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-reach-router",plugins:[],hooks:n.n(r)()({})},{location:"__react_static_root__/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"__react_static_root__/",plugins:[],hooks:{}}];e.default=a},423:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"notFoundTemplate",(function(){return h}));var r=n(56),a=n.n(r),o=n(57),c=n.n(o),i=n(0),s=n.n(i),u=n(59),_=n.n(u);Object(u.setHasBabelPlugin)();var l={loading:function(){return null},error:function(t){return console.error(t.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},f=_()(c()({id:"__react_static_root__/src/pages/404.js",load:function(){return Promise.all([n.e(0).then(n.bind(null,373))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/pages/404.js")},resolve:function(){return 373},chunkName:function(){return"__react_static_root__/src/pages/404"}}),l);f.template="__react_static_root__/src/pages/404.js";var d=_()(c()({id:"__react_static_root__/src/pages/about.js",load:function(){return Promise.all([n.e(1).then(n.bind(null,374))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/pages/about.js")},resolve:function(){return 374},chunkName:function(){return"__react_static_root__/src/pages/about"}}),l);d.template="__react_static_root__/src/pages/about.js";var p=_()(c()({id:"__react_static_root__/src/pages/index.js",load:function(){return Promise.all([n.e(2).then(n.bind(null,375))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/pages/index.js")},resolve:function(){return 375},chunkName:function(){return"__react_static_root__/src/pages/index"}}),l);p.template="__react_static_root__/src/pages/index.js";var m=_()(c()({id:"__react_static_root__/src/pages/tip.js",load:function(){return Promise.all([Promise.all([n.e(6),n.e(3)]).then(n.bind(null,376))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/pages/tip.js")},resolve:function(){return 376},chunkName:function(){return"__react_static_root__/src/pages/tip"}}),l);m.template="__react_static_root__/src/pages/tip.js",e.default={"__react_static_root__/src/pages/404.js":f,"__react_static_root__/src/pages/about.js":d,"__react_static_root__/src/pages/index.js":p,"__react_static_root__/src/pages/tip.js":m};var h="__react_static_root__/src/pages/404.js"}.call(this,"/")},425:function(t,e,n){var r={".":93,"./":93,"./index":93,"./index.js":93};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=425},434:function(t,e,n){"use strict";n.r(e),function(t){var r=n(0),a=n.n(r),o=n(71),c=n.n(o),i=n(369),s=n(144);if(e.default=s.a,"undefined"!=typeof document){var u=document.getElementById("root"),_=u.hasChildNodes()?c.a.hydrate:c.a.render,l=function(t){_(a.a.createElement(i.AppContainer,null,a.a.createElement(t,null)),u)};l(s.a),t&&t.hot&&t.hot.accept("./App",(function(){l(s.a)}))}}.call(this,n(235)(t))},442:function(t,e){},487:function(t,e){},489:function(t,e){},520:function(t,e){}});