(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(2),i=n.n(c),s=n(43),u=n.n(s),o=n(28),p=n.n(o),l=n(236),d=n(139),f=n.n(d),b=n(88),v=n(83),m=n(347),w=n(84),g=n(64),h=(n(114),n(69)),O=(n(242),function(e){var t=Object(l.g)(),n=Object(g.b)(),c=n.provider,s=n.token,o=(n.balance,t.chainId),d=Object(r.useState)(!1),b=p()(d,2),m=b[0],w=(b[1],Object(r.useState)(e.contentId)),O=p()(w,2),y=O[0],k=(O[1],Object(r.useState)(e.recipient)),S=p()(k,2),N=S[0],x=(S[1],Object(r.useState)(e.address)),T=p()(x,2),C=T[0],I=(T[1],Object(r.useState)(1e3)),U=p()(I,2),D=U[0],J=U[1],q=Object(r.useState)(!1),A=p()(q,2),F=A[0],L=A[1];function P(){return R.apply(this,arguments)}function R(){return(R=u()(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.allowance(t.account,h.b[o].tipping);case 2:n=e.sent,L(n.gte(Object(v.d)(D.toString())));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){s?P():L(!1)}),[s,D]);var W="connected"!==t.status||!F||m||!D,z=f()("complete cute-pink-btn",{disabled:W});return a.a.createElement("div",{className:"tipping-interface box"},a.a.createElement("div",{className:"tip-token"},"🍩"),a.a.createElement("div",{className:"cute-header tip-info"},"Tipping /u/",N),a.a.createElement("div",{className:"tip-token-info"},"EthTrader DONUTs"),a.a.createElement("p",null,y),a.a.createElement("div",{className:"cute-input quantity-container"},a.a.createElement("input",{value:D,type:"number",onChange:function(e){return J(e.target.value)}}),a.a.createElement("div",{className:"token"},"DONUT")),"connected"===t.status&&!F&&a.a.createElement("div",{className:"complete cute-pink-btn",onClick:function(){return function(e,t){return j.apply(this,arguments)}(s.connect(c.getSigner()),h.b[o].tipping).then(P)}},"Approve"),a.a.createElement("div",{className:z,onClick:function(){return function(e,t,n,r,a,c){return E.apply(this,arguments)}(c,o,"DONUT",C,D,y)}},"connected"===t.status?"Send Tip":"Connect Wallet First"))});function j(){return(j=u()(i.a.mark((function e(t,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.approve(n,w.a);case 2:return r=e.sent,e.next=5,r.wait();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=u()(i.a.mark((function e(t,n,r,a,c,s){var u,o,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=h.b[n][r],o=new b.a(h.b[n].tipping,h.a.Tipping,t.getSigner()),e.next=4,o.tip(a,Object(v.d)(c.toString()),u,Object(m.a)(s));case 4:return p=e.sent,e.next=7,p.wait();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(){var e,t=(e="","undefined"!=typeof window&&(e=window.location.search),new URLSearchParams(e));return a.a.createElement(O,{recipient:t.get("recipient"),address:t.get("address"),contentId:t.get("contentId")})}},347:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(141),a=n(0),c=n(26);function i(e){var t=Object(c.f)(e);if(t.length>31)throw new Error("bytes32 string must be less than 32 bytes");return Object(a.i)(Object(a.b)([t,r.a]).slice(0,32))}function s(e){var t=Object(a.a)(e);if(32!==t.length)throw new Error("invalid bytes32 - not 32 bytes long");if(0!==t[31])throw new Error("invalid bytes32 string - no null terminator");for(var n=31;0===t[n-1];)n--;return Object(c.h)(t.slice(0,n))}}}]);