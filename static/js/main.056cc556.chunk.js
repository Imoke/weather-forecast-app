(this["webpackJsonpweather-forecast-app"]=this["webpackJsonpweather-forecast-app"]||[]).push([[0],{158:function(e,t,n){e.exports=n(337)},163:function(e,t,n){},164:function(e,t,n){},167:function(e,t,n){},335:function(e,t,n){},336:function(e,t,n){},337:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),l=n.n(o),i=(n(163),n(164),n(104)),r=n.n(i),s=n(24),u=(n(166),n(9)),d=n(150),m=n(340),p=n(338),f=(n(167),Object(a.createContext)({})),b=function(e){var t=Object(a.useState)(["\u82cf\u5dde"]),n=Object(s.a)(t,2),o=n[0],l=n[1],i=Object(a.useState)("\u82cf\u5dde"),r=Object(s.a)(i,2),u=r[0],d=r[1];return c.a.createElement(f.Provider,{value:{citys:o,city:u,setCitys:l,setCity:d}},e.children)},h=(n(168),u.a.createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1624952_5uc8qtf5xva.js"}));var g=function(){var e=Object(a.useContext)(f),t=e.citys,n=e.city,c=e.setCity,o=Object(a.useState)(),l=Object(s.a)(o,2),i=l[0],u=l[1],b=Object(a.useState)(!1),g=Object(s.a)(b,2),y=g[0],v=g[1],E=[{title:"Date",dataIndex:"date",key:"date"},{title:"Type",dataIndex:"type",key:"type",render:function(e){return a.createElement("span",null,e.map((function(e){console.log("type::::::: ".concat(e));var t="";switch(e){case"\u6674":t="iconqingtian";break;case"\u591a\u4e91":t="iconGroup";break;case"\u591a\u4e91\u8f6c\u6674":t="iconduoyunzhuanqingtian";break;case"\u96fe":t="iconwu";break;case"\u96fe\u973e":t="iconwumai";break;case"\u626c\u6c99":t="iconGroup1";break;case"\u9634":t="iconyintian";break;case"\u5c0f\u96e8":t="iconxiaoyu";break;case"\u4e2d\u96e8":t="iconzhongyu";break;case"\u5927\u96e8":t="icondayu";break;case"\u9635\u96e8":t="iconzhenyu";break;case"\u96f7\u9635\u96e8":t="iconleizhenyu";break;case"\u7279\u5927\u9635\u96e8":t="icontedazhenyu";break;case"\u66b4\u96e8":t="iconbaoyu";break;case"\u5927\u96e8\u8f6c\u6674":t="icondayuzhuanqing";break;case"\u5c0f\u96ea":t="iconxiaoxue";break;case"\u5c0f\u5230\u4e2d\u96ea":case"\u4e2d\u96ea":t="iconzhongxue";break;case"\u5927\u96ea":t="icondaxue";break;case"\u66b4\u96ea":t="iconbaoxue";break;default:t="iconqingtian"}return a.createElement(h,{type:t,style:{fontSize:"32px"}})})))}},{title:"Low",dataIndex:"low",key:"low"},{title:"High",dataIndex:"high",key:"high"},{title:"Fengli",dataIndex:"fengli",key:"fengli"},{title:"Fengxiang",dataIndex:"fengxiang",key:"fengxianggh"}],w=[];return void 0!==i&&null!=i&&1e3===i.status&&(null===i||void 0===i||i.data.forecast.map((function(e){var t={date:e.date,type:[e.type],low:e.low,high:e.high,fengli:e.fengli.replace("<![CDATA[","").replace("]]>",""),fengxiang:e.fengxiang};w.push(t)}))),Object(a.useEffect)((function(){console.log("result a: "),function(){var e;r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log("result b: ".concat(n)),v(!0),0!==t.length){a.next=6;break}return u(void 0),setTimeout((function(){v(!1)}),1e3),a.abrupt("return");case 6:return e=new Headers({"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}),a.next=9,r.a.awrap(fetch("http://wthrcdn.etouch.cn/weather_mini?city=".concat(n),{method:"GET",headers:e,mode:"cors"}).then((function(e){return console.log("res: ".concat(e)),e.json()})).then((function(e){u(e),setTimeout((function(){v(!1)}),1e3)})).catch((function(e){console.log("error: ".concat(e))})));case 9:case"end":return a.stop()}}))}()}),[t,n]),a.createElement("div",null,y?a.createElement(d.a,{tip:"Loading..."}):a.createElement("div",null,a.createElement("div",null,a.createElement("p",{className:"city-style"},void 0===i||null===i||1e3!==i.status?"NA":i.data.city),a.createElement("p",{className:"weather-style"},void 0===i||null===i||1e3!==i.status?"NA":i.data.forecast[0].type),a.createElement("p",{className:"wendu-style"},void 0===i||null===i||1e3!==i.status?"NA":i.data.wendu),a.createElement("p",{className:"tips-style"},void 0===i||null===i||1e3!==i.status?"NA":i.data.ganmao)),a.createElement("div",{className:"table-style"},a.createElement(m.a,{showHeader:!1,pagination:!1,columns:E,dataSource:w}))),a.createElement(p.a,{effect:"fade",afterChange:function(e){c(t[e])}},0===t.length?a.createElement("div",null,a.createElement("h3",null,"NA")):t.map((function(e){return a.createElement("div",null,a.createElement("h3",null,e))}))))},y=n(80),v=(n(335),n(57)),E=n(28),w=n(342),k=n(341),x=n(343),O=n(339),j=v.a.Option;var C=function(){var e=Object(a.useState)({visible:!1}),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)({visible:!1}),l=Object(s.a)(o,2),i=l[0],r=l[1],d=Object(a.useContext)(f),m=d.citys,p=d.setCity,b=d.setCitys,h=Object(a.useState)(""),g=Object(s.a)(h,2),C=g[0],N=g[1],S=Object(a.useState)(["\u82cf\u5dde","\u5317\u4eac","\u4e0a\u6d77","\u5357\u4eac","\u5e7f\u5dde"]),A=Object(s.a)(S,2),z=A[0],I=A[1],T=function(){""!==C&&I([].concat(Object(y.a)(z),[C])),N("")};return a.createElement("div",{className:"header-wrapper"},a.createElement("a",{className:"logo",href:"/"}),a.createElement(E.a,{className:"management",onClick:function(){c({visible:!0})}},a.createElement("i",{className:"iconfont"},"\ue7db"),"\u7ba1\u7406"),a.createElement(w.a,{title:"Citys Management",footer:null,bodyStyle:{height:"400px",overflow:"auto"},closable:!1,centered:!0,width:800,visible:n.visible,onOk:function(e){console.log(e),c({visible:!1})},onCancel:function(e){console.log(e),c({visible:!1})}},a.createElement("div",{className:"cards-wrapper"},m.map((function(e){return a.createElement("div",{style:{background:"#ECECEC",padding:"5px",margin:"5px"}},a.createElement(k.a,{title:e,extra:a.createElement("span",{className:"close",onClick:function(){return function(e){var t=m.indexOf(e);t>-1&&m.splice(t,1),b(Object(y.a)(m)),p(m[0])}(e)}}),bordered:!0,style:{width:200}},a.createElement("p",null,e)))})),a.createElement("div",{style:{margin:"10px",alignSelf:"center"}},a.createElement("div",null,a.createElement("span",{className:"add-button",onClick:function(){r({visible:!0})}},a.createElement("i",{className:"iconfont"},"\ue634")),a.createElement(x.a,{title:"Add City",placement:"right",closable:!1,onClose:function(){r({visible:!1})},visible:i.visible},a.createElement(v.a,{showSearch:!0,style:{width:200},placeholder:"Select a person",optionFilterProp:"children",onChange:function(e){console.log("selected ".concat(e)),b([e].concat(Object(y.a)(m))),p(e)},onFocus:function(){console.log("focus")},onBlur:function(){console.log("blur")},onSearch:function(e){console.log("search:",e),N(e)},dropdownRender:function(e){return a.createElement("div",null,e,a.createElement(O.a,{style:{margin:"4px 0"}}),a.createElement("div",{style:{padding:"4px 8px",cursor:"pointer"},onMouseDown:function(e){return e.preventDefault()},onClick:T},a.createElement(u.a,{type:"plus"})," Add item"))}},z.map((function(e){return a.createElement(j,{className:"option-style",value:e},e)})))))))))};n(336);var N=function(){return a.createElement("div",{className:"footer-wrapper"},a.createElement("div",{className:"copyright"}," @Copyright 2020"))},S=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b,null,c.a.createElement(C,null),c.a.createElement(g,null),c.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[158,1,2]]]);
//# sourceMappingURL=main.056cc556.chunk.js.map