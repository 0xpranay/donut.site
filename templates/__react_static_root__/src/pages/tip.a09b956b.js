(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{126:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n.n(a),r=n(224);t.default=function(){var e,t=(e="","undefined"!=typeof window&&(e=window.location.search),new URLSearchParams(e));return c.a.createElement(r.a,{recipient:t.get("recipient"),address:t.get("address"),contentId:t.get("contentId")})}},224:function(e,t,n){"use strict";var a,c=n(2),r=n.n(c),s=n(29),i=n.n(s),o=n(23),u=n.n(o),l=n(4),p=n.n(l),d=n(68),f=n(69),m=n(43),b=n(117),v=n.n(b),h=n(59),g=n(70),w=n(244),E=n(58),O=n(50),j=n(67),k=n(44),N=n(227),x=n.n(N),y=(n(218),new x.a);function T(){return(T=i()(r.a.mark((function e(t,n,a){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,t.approve(n,E.a);case 4:return c=e.sent,e.next=7,c.wait();case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:a(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function S(){return(S=i()(r.a.mark((function e(t,n,a,c,s,i,o){var u,l,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=s.replace(/,/g,""),console.log(a,c,s,i),o(!0),u=k.b[n][a.toLowerCase()],l=new h.a(k.b[n].tipping,k.a.Tipping,t),e.prev=5,e.next=8,l.tip(c,Object(g.b)(s),u,Object(w.a)(i));case 8:return p=e.sent,e.next=11,p.wait();case 11:e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(5),e.t0;case 16:o(!1);case 17:case"end":return e.stop()}}),e,null,[[5,13]])})))).apply(this,arguments)}t.a=function(e){var t=Object(m.b)(),n=t.account,c=t.active,s=t.chainId,o=t.library,b=Object(O.b)(),h=b.signer,w=(b.feeBalance,b.donutBalance,b.token),E=(b.tipping,Object(l.useState)(!1)),N=u()(E,2),x=N[0],C=N[1],U=Object(l.useState)(""),D=u()(U,2),I=D[0],L=D[1],P=Object(l.useState)(e.contentId),R=u()(P,2),A=R[0],B=R[1],F=Object(l.useState)(e.recipient||""),J=u()(F,2),_=J[0],q=J[1],K=Object(l.useState)(e.address),W=u()(K,2),z=W[0],G=W[1],H=Object(l.useState)(),M=u()(H,2),Q=M[0],V=M[1],X=Object(l.useState)("1"),Y=u()(X,2),Z=Y[0],$=Y[1],ee=Object(l.useState)(!1),te=u()(ee,2),ne=te[0],ae=te[1],ce=Object(l.useState)(""),re=u()(ce,2),se=re[0],ie=re[1],oe=Object(l.useRef)(null),ue=Object(l.useState)(!0),le=u()(ue,2),pe=le[0],de=le[1];function fe(){L(""),B(""),ie(""),q(""),oe&&oe.current&&oe.current.focus()}Object(l.useEffect)((function(){_&&L(e.recipient)}),[]),Object(l.useEffect)((function(){if(I){var e="",t=0;try{var n=new URL(I).pathname.split("/").filter((function(e){return!!e}));6===n.length?(e=n[5],t=1):5===n.length?(e=n[3],t=3):2===n.length&&["u","user"].includes(n[0])?q(n[1]):me(I)}catch(c){I.includes("/")?pe||me(I):(clearTimeout(a),a=setTimeout((function(){return Object(j.d)(I).then((function(e){e?q(I):pe||me(I)}))}),250))}[1,3].includes(t)&&B("t".concat(t,"_").concat(e))}}),[I]);var me=function(e){alert("".concat(e," could not be identified as a Reddit post, comment, or user.")),L("")};function be(){return ve.apply(this,arguments)}function ve(){return(ve=i()(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("checking approval"),e.next=3,w.allowance(n,k.b[s].tipping);case 3:t=e.sent,console.log("allowance",t),ae(t.gte(Object(g.b)(Z.replace(/,/g,""))));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(l.useEffect)((function(){function e(){return(e=i()(r.a.mark((function e(){var t,n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.b)("https://www.reddit.com/api/info.json?id=".concat(A));case 2:t=e.sent,n=t.data.children[0],a=n.kind,c=n.data,q(c.author),"t3"===a?ie(c.title):"t1"===a&&ie(c.body);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}A?function(){e.apply(this,arguments)}():ie("")}),[A]),Object(l.useEffect)((function(){if(!_)return G(""),void V("");function e(){return(e=i()(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.b)("https://old.reddit.com/user/".concat(_,"/about.json"));case 2:if(t=e.sent,!t.error){e.next=8;break}return L(""),q(""),e.abrupt("return");case 8:return e.next=10,Object(j.c)({username:_});case 10:return(n=e.sent)&&!z&&G(n.address),e.next=14,y.getPublicAddress({verifier:"reddit",verifierId:_});case 14:a=e.sent,V(a);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}de(!A),function(){e.apply(this,arguments)}()}),[_]),Object(l.useEffect)((function(){w?be():ae(!1)}),[w,Z]);var he,ge,we=Object(l.useState)(!0),Ee=u()(we,2);Ee[0],Ee[1];z?(he=z,ge=p.a.createElement("span",{className:"address-logo donut",style:{marginLeft:".25em"},title:"Using donut registered address for ".concat(_," (").concat(he,")")},"🍩")):Q?(he=Q,ge=p.a.createElement("img",{className:"address-logo torus",src:"/torus_logo.png",alt:"Torus Logo",title:"Using Tor.us address for ".concat(_," (").concat(he,")")})):_&&(ge=p.a.createElement("span",{className:"address-logo wait"}));var Oe,je,ke,Ne=x||!Z||!he,xe=v()("complete cute-pink-btn",{disabled:Ne});return Oe=c?100===s?ne?p.a.createElement("div",{className:xe,onClick:function(){return function(e,t,n,a,c,r,s){return S.apply(this,arguments)}(h,s,"DONUT",he,Z,A,C)}},"Send Tip"):p.a.createElement("div",{className:xe,onClick:function(){return function(e,t,n){return T.apply(this,arguments)}(w.connect(h),k.b[s].tipping,C).then(be)}},"Approve"):p.a.createElement("div",{className:xe,onClick:function(){return Object(j.g)(o,C)}},"Use xDai"):p.a.createElement("div",{className:"complete cute-pink-btn disabled"},"Connect Wallet First"),_&&(je=p.a.createElement(p.a.Fragment,null,p.a.createElement("a",{style:{textDecoration:"none"},target:"blank",href:"https://www.reddit.com/u/".concat(_)},"/u/",_),p.a.createElement(d.a,{className:"cancel",icon:f.a,onClick:fe}))),ke=pe?p.a.createElement("div",{className:"cute-input target-container"},p.a.createElement("span",{className:"user-prefix",onClick:function(){return oe.current.focus()}},"/u/"),p.a.createElement("input",{ref:oe,value:_,onChange:function(e){var t=e.target.value;clearTimeout(a),a=setTimeout((function(){return Object(j.d)(t).then((function(e){return e&&q(t)}))}),250)},placeholder:"vitalik"}),ge):p.a.createElement("div",{className:"cute-input target-container"},p.a.createElement("input",{ref:oe,value:I,onChange:function(e){return L(e.target.value)},onKeyPress:j.e,placeholder:"Paste a reddit post here"})),p.a.createElement("div",{className:"tipping-interface box"},p.a.createElement("div",{className:"tip-token"},"🍩"),p.a.createElement("div",{className:"cute-header tip-info"},je?p.a.createElement("span",null,"Tipping ",je):"Choose a ".concat(pe?"User":"Post"," to Tip")),p.a.createElement("div",{className:"tip-token-info"},je?"EthTrader DONUTs":p.a.createElement("span",null,"Or ",p.a.createElement("a",{onClick:function(){return fe()||de(!pe)}},"click here")," to tip a ",pe?"post":"user")),pe||!se&&!_?ke:p.a.createElement("div",{className:"reddit-preview"},p.a.createElement("h3",{className:"author"},_," ",ge),se&&p.a.createElement("p",{className:"body"},se)),p.a.createElement("div",{className:"cute-input quantity-container"},p.a.createElement("input",{value:Z,onChange:function(e){return function(e){$(Object(j.a)(e.replace(/,/g,"")))}(e.target.value)}}),p.a.createElement("div",{className:"token"},"DONUT")),Oe)}}}]);