(this["webpackJsonpweather-forecast-app"]=this["webpackJsonpweather-forecast-app"]||[]).push([[0],{161:function(e,t,a){e.exports=a(340)},166:function(e,t,a){},167:function(e,t,a){},170:function(e,t,a){},338:function(e,t,a){},339:function(e,t,a){},340:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(4),i=a.n(l),o=(a(166),a(167),a(151)),r=a.n(o),s=a(24),u=(a(169),a(9)),d=a(154),m=a(343),f=a(341),p=(a(170),Object(n.createContext)({})),g=function(e){var t=Object(n.useState)(["\u82cf\u5dde"]),a=Object(s.a)(t,2),l=a[0],i=a[1],o=Object(n.useState)("\u82cf\u5dde"),r=Object(s.a)(o,2),u=r[0],d=r[1];return c.a.createElement(p.Provider,{value:{citys:l,city:u,setCitys:i,setCity:d}},e.children)},y=(a(171),u.a.createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1624952_5uc8qtf5xva.js"}));var b=function(){var e=Object(n.useContext)(p),t=e.citys,a=e.city,c=e.setCity,l=Object(n.useState)(),i=Object(s.a)(l,2),o=i[0],u=i[1],g=Object(n.useState)(!1),b=Object(s.a)(g,2),h=b[0],E=b[1],v=[{title:"Date",dataIndex:"date",key:"date"},{title:"Type",dataIndex:"type",key:"type",render:function(e){return n.createElement("span",null,e.map((function(e){console.log("type::::::: ".concat(e));var t="";switch(e){case"\u6674":t="iconqingtian";break;case"\u591a\u4e91":t="iconGroup";break;case"\u591a\u4e91\u8f6c\u6674":t="iconduoyunzhuanqingtian";break;case"\u96fe":t="iconwu";break;case"\u96fe\u973e":t="iconwumai";break;case"\u626c\u6c99":t="iconGroup1";break;case"\u9634":t="iconyintian";break;case"\u5c0f\u96e8":t="iconxiaoyu";break;case"\u4e2d\u96e8":t="iconzhongyu";break;case"\u5927\u96e8":t="icondayu";break;case"\u9635\u96e8":t="iconzhenyu";break;case"\u96f7\u9635\u96e8":t="iconleizhenyu";break;case"\u7279\u5927\u9635\u96e8":t="icontedazhenyu";break;case"\u66b4\u96e8":t="iconbaoyu";break;case"\u5927\u96e8\u8f6c\u6674":t="icondayuzhuanqing";break;case"\u5c0f\u96ea":t="iconxiaoxue";break;case"\u5c0f\u5230\u4e2d\u96ea":case"\u4e2d\u96ea":t="iconzhongxue";break;case"\u5927\u96ea":t="icondaxue";break;case"\u66b4\u96ea":t="iconbaoxue";break;default:t="iconqingtian"}return n.createElement(y,{type:t,style:{fontSize:"32px"}})})))}},{title:"Low",dataIndex:"low",key:"low"},{title:"High",dataIndex:"high",key:"high"},{title:"Fengli",dataIndex:"fengli",key:"fengli"},{title:"Fengxiang",dataIndex:"fengxiang",key:"fengxianggh"}],x=[];return void 0!==o&&null!=o&&1e3===o.status&&(null===o||void 0===o||o.data.forecast.map((function(e){var t={date:e.date,type:[e.type],low:e.low,high:e.high,fengli:e.fengli.replace("<![CDATA[","").replace("]]>",""),fengxiang:e.fengxiang};x.push(t)}))),Object(n.useEffect)((function(){console.log("result a: "),r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("result b: ".concat(a)),E(!0),0!==t.length){e.next=6;break}return u(void 0),setTimeout((function(){E(!1)}),1e3),e.abrupt("return");case 6:u({data:{yesterday:{date:"2\u65e5\u661f\u671f\u65e5",high:"\u9ad8\u6e29 12\u2103",fx:"\u4e1c\u5357\u98ce",low:"\u4f4e\u6e29 6\u2103",fl:"<![CDATA[<3\u7ea7]]>",type:"\u591a\u4e91"},city:"\u82cf\u5dde",forecast:[{date:"3\u65e5\u661f\u671f\u4e00",high:"\u9ad8\u6e29 12\u2103",fengli:"<![CDATA[3-4\u7ea7]]>",low:"\u4f4e\u6e29 3\u2103",fengxiang:"\u4e1c\u5317\u98ce",type:"\u591a\u4e91"},{date:"4\u65e5\u661f\u671f\u4e8c",high:"\u9ad8\u6e29 12\u2103",fengli:"<![CDATA[3-4\u7ea7]]>",low:"\u4f4e\u6e29 2\u2103",fengxiang:"\u4e1c\u98ce",type:"\u6674"},{date:"5\u65e5\u661f\u671f\u4e09",high:"\u9ad8\u6e29 11\u2103",fengli:"<![CDATA[3-4\u7ea7]]>",low:"\u4f4e\u6e29 2\u2103",fengxiang:"\u4e1c\u98ce",type:"\u591a\u4e91"},{date:"6\u65e5\u661f\u671f\u56db",high:"\u9ad8\u6e29 7\u2103",fengli:"<![CDATA[3-4\u7ea7]]>",low:"\u4f4e\u6e29 4\u2103",fengxiang:"\u4e1c\u98ce",type:"\u5c0f\u96e8"},{date:"7\u65e5\u661f\u671f\u4e94",high:"\u9ad8\u6e29 8\u2103",fengli:"<![CDATA[3-4\u7ea7]]>",low:"\u4f4e\u6e29 3\u2103",fengxiang:"\u4e1c\u5317\u98ce",type:"\u9634"}],ganmao:"\u5929\u51c9\uff0c\u663c\u591c\u6e29\u5dee\u8f83\u5927\uff0c\u8f83\u6613\u53d1\u751f\u611f\u5192\uff0c\u8bf7\u9002\u5f53\u589e\u51cf\u8863\u670d\uff0c\u4f53\u8d28\u8f83\u5f31\u7684\u670b\u53cb\u8bf7\u6ce8\u610f\u9002\u5f53\u9632\u62a4\u3002",wendu:"9"},status:1e3,desc:"OK"}),setTimeout((function(){E(!1)}),1e3);case 9:case"end":return e.stop()}}))}),[t,a]),n.createElement("div",null,h?n.createElement(d.a,{tip:"Loading..."}):n.createElement("div",null,n.createElement("div",null,n.createElement("p",{className:"city-style"},void 0===o||null===o||1e3!==o.status?"NA":a),n.createElement("p",{className:"weather-style"},void 0===o||null===o||1e3!==o.status?"NA":o.data.forecast[0].type),n.createElement("p",{className:"wendu-style"},void 0===o||null===o||1e3!==o.status?"NA":o.data.wendu),n.createElement("p",{className:"tips-style"},void 0===o||null===o||1e3!==o.status?"NA":o.data.ganmao)),n.createElement("div",{className:"table-style"},n.createElement(m.a,{showHeader:!1,pagination:!1,columns:v,dataSource:x}))),n.createElement(f.a,{effect:"fade",afterChange:function(e){c(t[e])}},0===t.length?n.createElement("div",null,n.createElement("h3",null,"NA")):t.map((function(e){return n.createElement("div",null,n.createElement("h3",null,e))}))))},h=a(83),E=(a(338),a(59)),v=a(29),x=a(345),w=a(344),k=a(346),C=a(342),O=E.a.Option;var j=function(){var e=Object(n.useState)({visible:!1}),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({visible:!1}),i=Object(s.a)(l,2),o=i[0],r=i[1],d=Object(n.useContext)(p),m=d.citys,f=d.setCity,g=d.setCitys,y=Object(n.useState)(""),b=Object(s.a)(y,2),j=b[0],N=b[1],A=Object(n.useState)(["\u82cf\u5dde","\u5317\u4eac","\u4e0a\u6d77","\u5357\u4eac","\u5e7f\u5dde"]),S=Object(s.a)(A,2),D=S[0],T=S[1],z=function(){""!==j&&T([].concat(Object(h.a)(D),[j])),N("")};return n.createElement("div",{className:"header-wrapper"},n.createElement("a",{className:"logo",href:"/"}),n.createElement(v.a,{className:"management",onClick:function(){c({visible:!0})}},n.createElement("i",{className:"iconfont"},"\ue7db"),"\u7ba1\u7406"),n.createElement(x.a,{title:"Citys Management",footer:null,bodyStyle:{height:"400px",overflow:"auto"},closable:!1,centered:!0,width:800,visible:a.visible,onOk:function(e){console.log(e),c({visible:!1})},onCancel:function(e){console.log(e),c({visible:!1})}},n.createElement("div",{className:"cards-wrapper"},m.map((function(e){return n.createElement("div",{style:{background:"#ECECEC",padding:"5px",margin:"5px"}},n.createElement(w.a,{title:e,extra:n.createElement("span",{className:"close",onClick:function(){return function(e){var t=m.indexOf(e);t>-1&&m.splice(t,1),g(Object(h.a)(m)),f(m[0])}(e)}}),bordered:!0,style:{width:200}},n.createElement("p",null,e)))})),n.createElement("div",{style:{margin:"10px",alignSelf:"center"}},n.createElement("div",null,n.createElement("span",{className:"add-button",onClick:function(){r({visible:!0})}},n.createElement("i",{className:"iconfont"},"\ue634")),n.createElement(k.a,{title:"Add City",placement:"right",closable:!1,onClose:function(){r({visible:!1})},visible:o.visible},n.createElement(E.a,{showSearch:!0,style:{width:200},placeholder:"Select a person",optionFilterProp:"children",onChange:function(e){console.log("selected ".concat(e)),g([e].concat(Object(h.a)(m))),f(e)},onFocus:function(){console.log("focus")},onBlur:function(){console.log("blur")},onSearch:function(e){console.log("search:",e),N(e)},dropdownRender:function(e){return n.createElement("div",null,e,n.createElement(C.a,{style:{margin:"4px 0"}}),n.createElement("div",{style:{padding:"4px 8px",cursor:"pointer"},onMouseDown:function(e){return e.preventDefault()},onClick:z},n.createElement(u.a,{type:"plus"})," Add item"))}},D.map((function(e){return n.createElement(O,{className:"option-style",value:e},e)})))))))))};a(339);var N=function(){return n.createElement("div",{className:"footer-wrapper"},n.createElement("div",{className:"copyright"}," @Copyright 2020"))},A=a(51),S=a(26),D=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null,c.a.createElement(A.a,null,c.a.createElement(j,null)),c.a.createElement(A.a,{type:"flex",justify:"center",align:"middle",className:"main-body"},c.a.createElement(S.a,{span:2}),c.a.createElement(S.a,{span:20},c.a.createElement(b,null)),c.a.createElement(S.a,{span:2})),c.a.createElement(A.a,{type:"flex",justify:"center",align:"middle"},c.a.createElement(N,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[161,1,2]]]);
//# sourceMappingURL=main.5cef57e9.chunk.js.map