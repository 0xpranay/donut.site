(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{376:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),r=n(32),i=n.n(r),p=n(37),y=n.n(p),u=n(0),l=n.n(u),d=n(848),o=n(849),c=n(851),m=n(829),b={IERC20:n(834),LavaWallet:n(835),Tipping:n(836)},T=n(833),f=n(853),w=n(852),h=n(218),k=n(236);t.default=function(){var e,t=(e="","undefined"!=typeof window&&(e=window.location.search),new URLSearchParams(e)),n=function(){var e;if("undefined"!=typeof window){var t=Object(k.a)(),n=y()(t,1);e=n[0]}var a=Object(u.useState)(null),r=y()(a,2),p=r[0],l=r[1],d=Object(u.useState)(null),o=y()(d,2),c=o[0],m=o[1];return i()(s.a.mark((function t(){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.getNetwork();case 4:if(n=t.sent,m(n.chainId),a=e.getSigner()){t.next=9;break}return t.abrupt("return");case 9:return t.t0=l,t.next=12,a.getAddress();case 12:t.t1=t.sent,(0,t.t0)(t.t1);case 14:case"end":return t.stop()}}),t)})))(),[e,c,p]}(),a=y()(n,3),r=a[0],p=a[1],d=a[2],c=Object(u.useState)(!1),m=y()(c,2),b=m[0],O=m[1],S=Object(u.useState)(t.get("contentId")),M=y()(S,2),j=M[0],C=(M[1],Object(u.useState)(t.get("recipient"))),E=y()(C,2),N=E[0],A=(E[1],Object(u.useState)(t.get("address"))),I=y()(A,2),B=I[0],R=(I[1],Object(u.useState)(1e3)),_=y()(R,2),D=_[0],F=_[1],J=Object(u.useState)("DONUT"),L=y()(J,2),U=L[0],P=(L[1],Object(u.useState)("0")),W=y()(P,2),H=W[0],z=W[1],V=Object(u.useState)(!1),Y=y()(V,2),q=Y[0],G=Y[1],K=Object(u.useState)(!1),Q=y()(K,2);Q[0],Q[1];function X(){return Z.apply(this,arguments)}function Z(){return(Z=i()(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&p&&d){e.next=3;break}return G(!1),e.abrupt("return");case 3:return e.next=5,v(p,U).connect(r).allowance(d,T[p].tipping);case 5:t=e.sent,G(t.gte(Object(o.b)(D.toString())));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.useEffect)((function(){r&&p&&d?i()(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=z,e.next=3,v(p,U).connect(r).balanceOf(d);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))():z("0")}),[r,p,d,U]),Object(u.useEffect)((function(){i()(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:X();case 1:case"end":return e.stop()}}),e)})))()}),[r,p,d,U,D]),l.a.createElement("div",null,l.a.createElement("h1",null,"Reddit Tipping"),l.a.createElement("p",null,"account: ",d),l.a.createElement(f.a,{disabled:!0,size:"lg",checkedChildren:"Use relay",unCheckedChildren:"No relay",checked:b,onChange:function(e){return O(e.target.checked)}},"Use relay"),l.a.createElement(w.a,{placeholder:"tip amount",step:100,value:D,type:"number",onChange:F}),l.a.createElement("p",null,"Your ",U," balance: ",Object(o.a)(H)),l.a.createElement("p",null,"Tip u/",N," (@",B,") ",D," ",U," for ",j),r?q?l.a.createElement(h.a,{onClick:function(){return function(e,t,n,a,s,r){return x.apply(this,arguments)}(r,p,U,B,D,j)}},"Tip"):l.a.createElement(h.a,{onClick:function(){return function(e,t,n){return g.apply(this,arguments)}(r,p,U).then(X)}},"Approve"):"please connect wallet")};function g(){return(g=i()(s.a.mark((function e(t,n,a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(n,a).connect(t.getSigner()).approve(T[n].tipping,m.a);case 2:return r=e.sent,e.next=5,r.wait();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=i()(s.a.mark((function e(t,n,a,r,i,p){var y,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y=T[n][a],u=new d.a(T[n].tipping,b.Tipping,t.getSigner()),e.next=4,u.tip(r,Object(o.b)(i.toString()),y,Object(c.a)(p));case 4:return l=e.sent,e.next=7,l.wait();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return console.log(e),new d.a(T[e][t],b.IERC20)}},833:function(e){e.exports=JSON.parse('{"100":{"lavaWallet":"0x56398FdFD684b40B17B09BB1Cf826ED93A38C489","DONUT":"0x524B969793a64a602342d89BC2789D43a016B13A","tipping":"0xF40e98033eb722CC6B4a64F7b37737d56eCB17EF"}}')},834:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},835:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"chainId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"_chainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"burnSignature","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"contractName","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"}],"name":"getEIP712DomainHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getLavaDomainTypehash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"getLavaPacketHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getLavaPacketTypehash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"getLavaTypedDataHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"digest","type":"bytes32"}],"name":"signatureBurnStatus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"signatureIsValid","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"transferAndCallWithSignature","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes","name":"methodName","type":"bytes"},{"internalType":"address","name":"relayAuthority","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256","name":"relayerRewardTokens","type":"uint256"},{"internalType":"uint256","name":"expires","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"transferTokensWithSignature","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},836:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"bytes32","name":"contentId","type":"bytes32"}],"name":"Tip","type":"event"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"receiveTransfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"bytes32","name":"_contentId","type":"bytes32"}],"name":"tip","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}}]);