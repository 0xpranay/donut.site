!function(e){function t(t){for(var a,i,o=t[0],u=t[1],p=t[2],c=0,y=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&y.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(l&&l(t);y.length;)y.shift()();return s.push.apply(s,p||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={9:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.src=function(e){return i.p+"templates/"+({5:"__react_static_root__/src/pages/404",6:"__react_static_root__/src/pages/about",7:"__react_static_root__/src/pages/index",8:"__react_static_root__/src/pages/tip"}[e]||e)+"."+{0:"483a6d6a",1:"84df1706",3:"b916382c",4:"23dec52a",5:"553856d2",6:"9f488615",7:"27d48356",8:"e1002e7d",11:"abe5eb57",12:"cfddddd2",13:"3bdf88f1",14:"788ffe27",15:"c4a78145",16:"5ea24b79",17:"091d4267",18:"fcddac6f",19:"a56cc3e2",20:"494d8f33",21:"bdff0f20"}[e]+".js"}(e);var u=new Error;s=function(t){o.onerror=o.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,n[1](u)}r[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://www.donut.community/",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var l=u;s.push([148,2,10]),n()}({111:function(e,t,n){"use strict";var a=n(63);n.d(t,"a",(function(){return a.Link})),n.d(t,"b",(function(){return a.Router}))},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(2),n(43);var a=function(e){var t=NaN;return e<1e5?t=e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",").replace(/[^0-9^,]+/g,""):t=e<1e6?Math.floor(e/1e3)+"K":Math.floor(e/1e5)/10+"M",Number.isNaN(t)?"0":t}},119:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},120:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"chainId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"_chainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"burnSignature","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"contractName","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"}],"name":"getEIP712DomainHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getLavaDomainTypehash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"getLavaPacketHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getLavaPacketTypehash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"getLavaTypedDataHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"digest","type":"bytes32"}],"name":"signatureBurnStatus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"signatureIsValid","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"transferAndCallWithSignature","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"transferTokensWithSignature","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},121:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"bytes32","name":"contentId","type":"bytes32"}],"name":"Tip","type":"event"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"receiveTransfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"bytes32","name":"_contentId","type":"bytes32"}],"name":"tip","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},148:function(e,t,n){n(149),n(196),e.exports=n(204)},150:function(e,t,n){"use strict";n.r(t);var a=n(115),r=[{location:"__react_static_root__/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-reach-router",plugins:[],hooks:n.n(a)()({})},{location:"__react_static_root__/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-sass",plugins:[],hooks:{}},{location:"__react_static_root__/",plugins:[],hooks:{}}];t.default=r},197:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",(function(){return _}));var a=n(35),r=n.n(a),s=n(36),i=n.n(s),o=n(3),u=n.n(o),p=n(37),l=n.n(p);Object(p.setHasBabelPlugin)();var c={loading:function(){return null},error:function(e){return console.error(e.error),u.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},y=l()(i()({id:"__react_static_root__/src/pages/404.js",load:function(){return Promise.all([n.e(5).then(n.bind(null,144))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/404.js")},resolve:function(){return 144},chunkName:function(){return"__react_static_root__/src/pages/404"}}),c);y.template="__react_static_root__/src/pages/404.js";var d=l()(i()({id:"__react_static_root__/src/pages/about.js",load:function(){return Promise.all([n.e(6).then(n.bind(null,145))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/about.js")},resolve:function(){return 145},chunkName:function(){return"__react_static_root__/src/pages/about"}}),c);d.template="__react_static_root__/src/pages/about.js";var m=l()(i()({id:"__react_static_root__/src/pages/index.js",load:function(){return Promise.all([n.e(7).then(n.bind(null,146))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/index.js")},resolve:function(){return 146},chunkName:function(){return"__react_static_root__/src/pages/index"}}),c);m.template="__react_static_root__/src/pages/index.js";var f=l()(i()({id:"__react_static_root__/src/pages/tip.js",load:function(){return Promise.all([Promise.all([n.e(2),n.e(8)]).then(n.bind(null,147))]).then((function(e){return e[0]}))},path:function(){return r.a.join(e,"__react_static_root__/src/pages/tip.js")},resolve:function(){return 147},chunkName:function(){return"__react_static_root__/src/pages/tip"}}),c);f.template="__react_static_root__/src/pages/tip.js",t.default={"__react_static_root__/src/pages/404.js":y,"__react_static_root__/src/pages/about.js":d,"__react_static_root__/src/pages/index.js":m,"__react_static_root__/src/pages/tip.js":f};var _="__react_static_root__/src/pages/404.js"}.call(this,"/")},199:function(e,t,n){var a={".":52,"./":52,"./index":52,"./index.js":52};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=199},208:function(e,t,n){"use strict";n.r(t),function(e){var a=n(3),r=n.n(a),s=n(79),i=n.n(s),o=n(125),u=(n(213),n(70));if(t.default=u.a,"undefined"!=typeof document){var p=document.getElementById("root"),l=p.hasChildNodes()?i.a.hydrate:i.a.render,c=function(e){l(r.a.createElement(o.AppContainer,null,r.a.createElement(e,null)),p)};c(u.a),e&&e.hot&&e.hot.accept("./App",(function(){c(u.a)}))}}.call(this,n(209)(e))},214:function(e,t){},62:function(e){e.exports=JSON.parse('{"1":{"DONUT":"0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9","tipping":"0xE3b8Ff1EAd55Bc511127CfE90F5cEdBB90C401b4"},"100":{"lavaWallet":"0x56398FdFD684b40B17B09BB1Cf826ED93A38C489","DONUT":"0x524B969793a64a602342d89BC2789D43a016B13A","tipping":"0xF40e98033eb722CC6B4a64F7b37737d56eCB17EF"}}')},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return b}));var a=n(2),r=n.n(a),s=n(43),i=n.n(s),o=n(28),u=n.n(o),p=n(3),l=n.n(p),c=n(88),y=n(140),d=n(84),m=n(69),f=Object(p.createContext)();function _(e){var t=e.wallet,n=e.children,a=function(e){var t=Object(p.useState)(null),n=u()(t,2),a=n[0],s=n[1],o=Object(p.useState)(d.f),l=u()(o,2),f=l[0],_=l[1],b=Object(p.useState)(null),T=u()(b,2),h=T[0],v=T[1];return Object(p.useEffect)((function(){"connected"===e.status?s(new y.a(e.ethereum)):s(null)}),[e]),Object(p.useEffect)((function(){if(!a)return _(d.f),void v(null);var t=new c.a(m.b[e.chainId.toString()].DONUT,m.a.IERC20,a);function n(){return(n=i()(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(m.b[e.chainId.toString()].DONUT),n.next=3,t.balanceOf(e.account);case 3:a=n.sent,_(a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}v(t),function(){n.apply(this,arguments)}()}),[a]),{provider:a,balance:f,token:h}}(t);return l.a.createElement(f.Provider,{value:a},n)}var b=function(){return Object(p.useContext)(f)}},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a={IERC20:n(119),LavaWallet:n(120),Tipping:n(121)},r=n(62)},70:function(e,t,n){"use strict";var a=n(3),r=n.n(a),s=(n(139),n(54)),i=n(236),o=n(64),u=n(111),p=function(){return r.a.createElement("div",null,"This is a dynamic page! It will not be statically exported, but is available at runtime")},l=n(81),c=n.n(l),y=n(114),d=n(83),m=(n(233),function(e){var t=e.connect;return r.a.createElement("div",{className:"connect-wallet-button cute-pink-btn",onClick:t},"Connect Wallet")}),f=function(e){var t=e.wallet,n=e.donuts,a=e.disconnect,s=t.account,i=s.substr(0,6)+"..."+s.substr(s.length-4);return r.a.createElement("div",{className:"wallet-details box"},r.a.createElement("div",{className:"donut-bal"},Object(y.a)(Object(d.b)(n.balance)),"  🍩"),r.a.createElement("div",{className:"address-container"},r.a.createElement("div",{className:"short-address"},i),r.a.createElement(c.a,{diameter:18,seed:Object(l.jsNumberForAddress)(s)})),r.a.createElement("div",{className:"disconnect",onClick:a},"X"))},_=function(){var e=Object(i.g)(),t=Object(o.b)();return r.a.createElement("div",{className:"wallet-info"},"connected"!==e.status&&r.a.createElement(m,{connect:function(){return e.connect()}}),"connected"===e.status&&r.a.createElement(f,{wallet:e,donuts:t,disconnect:function(){return e.reset()}}))};n(234);function b(){var e=Object(i.g)();return r.a.createElement(s.Root,null,r.a.createElement("div",{className:"app"},r.a.createElement("nav",null,r.a.createElement(_,null),e.error&&"ChainUnsupportedError"===e.error.name&&r.a.createElement("p",null,"Switch to ",e.networkName)),r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("em",null,"Loading...")},r.a.createElement(u.b,null,r.a.createElement(p,{path:"dynamic"}),r.a.createElement(s.Routes,{path:"*"})))))}function T(e){var t=e.children,n=Object(i.g)();return r.a.createElement(o.a,{wallet:n},t)}Object(s.addPrefetchExcludes)(["dynamic"]);t.a=function(){return r.a.createElement(i.a,{chainId:100,connectors:{}},r.a.createElement(T,null,r.a.createElement(b,null)))}}});