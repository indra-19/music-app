(this.webpackJsonpinmu=this.webpackJsonpinmu||[]).push([[0],{106:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),i=a(61),r=a.n(i),s=(a(78),a(47)),o=a.n(s),u=a(62),j=a(9),p=(a(80),a(134)),l=a(135),f=a(131),d=a(130),x=a(133),b=a(136),h=a(137),O=a(138),m=a(139),g=a(68),v=a.n(g),k=a(65),w=a.n(k),y=a(2);var T=function(){var t=Object(n.useState)(!1),e=Object(j.a)(t,2),a=e[0],c=e[1],i=Object(n.useState)([]),r=Object(j.a)(i,2),s=r[0],g=r[1],k=Object(n.useState)(""),T=Object(j.a)(k,2),E=T[0],Y=T[1],C=Object(n.useState)(""),I=Object(j.a)(C,2),M=I[0],S=I[1],Z=Object(n.useState)(""),L=Object(j.a)(Z,2),J=L[0],N=L[1],D=Object(n.useState)(""),F=Object(j.a)(D,2),U=F[0],z=F[1],Q=Object(n.useState)("https://api.napster.com/v2.2/tracks/top?apikey=N2EwY2E0Y2ItMTI4ZS00ZTg3LTg4MmEtY2JiMTdhODQxYzUw&range=day"),R=Object(j.a)(Q,2),P=R[0],W=R[1];Object(n.useEffect)((function(){W(""===U?"https://api.napster.com/v2.2/tracks/top?apikey=N2EwY2E0Y2ItMTI4ZS00ZTg3LTg4MmEtY2JiMTdhODQxYzUw&range=day":"https://api.napster.com/v2.2/search/verbose?apikey=N2EwY2E0Y2ItMTI4ZS00ZTg3LTg4MmEtY2JiMTdhODQxYzUw&query=".concat(U,"&type=track"))}),[U]),Object(n.useEffect)((function(){var t=function(){var t=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(!0),t.next=3,w.a.get(P);case 3:e=t.sent,g("https://api.napster.com/v2.2/tracks/top?apikey=N2EwY2E0Y2ItMTI4ZS00ZTg3LTg4MmEtY2JiMTdhODQxYzUw&range=day"===P?e.data.tracks:e.data.search.data.tracks),c(!1),console.log(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[P]),Object(n.useEffect)((function(){""===E||E.play()}),[E]);var B=function(){return Object(y.jsxs)(p.a,{position:"sticky",sx:{p:"10px 0",backgroundColor:"#000000"},children:[Object(y.jsxs)(l.a,{sx:{p:"2px 11px",display:"flex",alignItems:"center",backgroundColor:"#161616",borderRadius:"5px"},children:[Object(y.jsx)(v.a,{sx:{color:"#ffffff"}}),""===U?Object(y.jsx)(f.a,{id:"input",sx:{ml:2,color:"#ffffff"},placeholder:"Cari",value:U,fullWidth:"true",onChange:function(t){z(t.target.value)},autoComplete:"off"}):Object(y.jsx)(f.a,{id:"input",sx:{ml:2,color:"#ffffff"},placeholder:"Cari",value:U,fullWidth:"true",onChange:function(t){z(t.target.value)},autoFocus:!0,autoComplete:"off"})]}),""===M&&""===J?null:Object(y.jsxs)("h6",{id:"onplaying",children:["On Playing : ",M," - ",J]})]})},q=function(t){return Object(y.jsx)(d.a,{sx:{p:"5px 0"},children:Object(y.jsx)(l.a,{sx:{backgroundColor:"#161616",color:"#ffffff",borderRadius:"5px"},onClick:function(){""===E||E.pause(),Y(new Audio(t.preview)),S(t.artist),N(t.name)},children:Object(y.jsxs)(x.a,{container:!0,sx:{alignItems:"center"},children:[Object(y.jsxs)(x.a,{item:!0,xs:8,container:!0,direction:"column",children:[Object(y.jsx)(x.a,{item:!0,sx:{width:"100%"},children:Object(y.jsx)("h6",{id:"title",children:t.name})}),Object(y.jsx)(x.a,{item:!0,sx:{width:"100%"},children:Object(y.jsx)("h6",{id:"subtitle",children:t.artist})})]}),Object(y.jsx)(x.a,{item:!0,xs:4,children:Object(y.jsx)(b.a,{sx:{borderRadius:"0 5px 5px 0"},component:"img",height:"67px",image:"https://api.napster.com/imageserver/v2/albums/".concat(t.img,"/images/633x422.jpg"),alt:"No image"})})]})})})};return Object(y.jsxs)(h.a,{maxWidth:"sm",sx:{p:"0 20px",backgroundColor:"#000000",minHeight:"100vh"},children:[Object(y.jsx)(B,{}),a?Object(y.jsx)(O.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",height:"75vh"},children:Object(y.jsx)(m.a,{})}):s.map((function(t){return Object(y.jsx)(q,{name:t.name,artist:t.artistName,img:t.albumId,preview:t.previewURL})}))]})},E=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,140)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;a(t),n(t),c(t),i(t),r(t)}))};r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(T,{})}),document.getElementById("root")),E()},78:function(t,e,a){},80:function(t,e,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.923da9b9.chunk.js.map