(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{917:function(e,t,a){"use strict";a.d(t,{F4:function(){return m},iv:function(){return c},xB:function(){return l}});var n=a(7294);a(8417);var r=a(2443);a(8679);var i=a(444),s=a(8137),o=a(7278),l=(0,r.w)(function(e,t){var a=e.styles,l=(0,s.O)([a],void 0,(0,n.useContext)(r.T)),c=(0,n.useRef)();return(0,o.j)(function(){var e=t.key+"-global",a=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,r=document.querySelector('style[data-emotion="'+e+" "+l.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),null!==r&&(n=!0,r.setAttribute("data-emotion",e),a.hydrate([r])),c.current=[a,n],function(){a.flush()}},[t]),(0,o.j)(function(){var e=c.current,a=e[0];if(e[1]){e[1]=!1;return}if(void 0!==l.next&&(0,i.My)(t,l.next,!0),a.tags.length){var n=a.tags[a.tags.length-1].nextElementSibling;a.before=n,a.flush()}t.insert("",l,a,!1)},[t,l.name]),null});function c(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.O)(t)}var m=function(){var e=c.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},2180:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(7294),r=a(1664),i=a.n(r),s=n.createElement;function o(){return s("div",{className:"fixed bottom-[-1px] left-0 right-0 flex w-screen bg-FooterBackground"},s("div",{className:"flex grow justify-center"},s(i(),{href:"/"},s("img",{className:"p-3",src:"/images/NavBar_Home.png",alt:"GoHome"}))),s("div",{className:"flex grow justify-center"},s(i(),{href:"/search"},s("img",{className:"p-3",src:"/images/NavBar_Search.png",alt:"GoSearch"}))),s("div",{className:"flex grow justify-center"},s(i(),{href:"/profile"},s("img",{className:"p-3",src:"/images/NavBar_User.png",alt:"GoUser"}))))}},4957:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),r=n.createElement;function i(){return r("div",{className:"mr-1 inline-block flex h-4 w-6 flex-row items-center justify-center rounded-md bg-SecondaryLight"},r("p",{className:"text-[10px] font-bold text-FontPrimaryDark"},"휴재"))}var s=n.createElement;function o(){return s("div",{className:"mr-1 inline-block h-4 w-6 rounded-md bg-PrimaryLight"},s("span",{className:"flex h-full items-center justify-center text-[10px] font-bold text-FontPrimaryDark"},"완결"))}var l=n.createElement;function c(e){var t=e.imageUrl,a=e.webtoonName,r=e.status;return l("div",{className:"inline-block",onClick:function(){}},l("div",{className:"mr-2 inline-block flex flex-col"},l("img",{src:t,alt:"imageURL",className:"h-30 mt-2 w-24"}),l("div",{className:"mt-1 flex h-4 flex-row items-center text-sm"},"휴재중"===r?l(i,null):l(n.Fragment,null),"완결"===r?l(o,null):l(n.Fragment,null),l("div",{className:"flex items-center justify-center text-[16px] text-semibold"},a))))}},9702:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var n=a(7294),r=a(1664),i=a.n(r),s=a(5675),o=a.n(s),l=a(917),c=a(2180),m=n.createElement;function u(e){var t=e.categoryTitle,a=e.route;return m("div",{className:"flex justify-between rounded-lg bg-BackgroundLightComponent"},m("div",{className:"text-lg font-bold"},t),("my-webtoon"===a||"managola"===a||"genre-taste"===a)&&m("div",{className:"flex items-center"},m(i(),{href:"my-webtoon"===a?"/my-webtoon":"managola"===a?"/managola":"genre-taste"},m("img",{src:"/images/goOtherPage.png",alt:"goOtherPage"}))))}var g=a(4957);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var d=a(1525),p=a.n(d),h=n.createElement;function v(){var e=(0,n.useState)(0),t=e[0],a=e[1];(0,n.useEffect)(function(){var e=setInterval(function(){a(function(e){return(e+1)%r.length})},3e3);return function(){return clearInterval(e)}},[]);var r=[{id:1,rank:1,webtoonname:"1초"},{id:2,rank:2,webtoonname:"호랑이행님"},{id:3,rank:3,webtoonname:"재벌집 막내아들"},{id:4,rank:4,webtoonname:"신의 탑"},{id:5,rank:5,webtoonname:"이름이 긴 웹툰이 있을 수도 있으니까12345678"},{id:6,rank:6,webtoonname:"기안84"}];return h("div",{className:p().rollingbanner},h("div",{className:p().leftitem},h("img",{src:"/images/Main_Chatgrow.png",alt:"top10",className:p().chatgrowicon}),h("div",{className:p().title},"TOP 10")),h("div",{className:p().wrap},h("ul",null,r.map(function(e,a){var n={};return a===(t+r.length-1)%r.length?n={className:p().prev}:a===t?n={className:p().current}:a===(t+2)%r.length&&(n={className:p().next}),h("li",f({key:a},n),h("span",{className:p().rankfont},a+1),"\xa0 \xa0",h("span",{className:p().rankitemfont},e.webtoonname))}))))}var b=n.createElement,x={name:"2oz9hh",styles:"background:linear-gradient(120deg, #92c83e 0%, #92c83e 50%, #6ebe44 50%, #6ebe44 100%);color:white;text-align:center;transform:perspective(1000px) rotateX(10deg);box-shadow:0px 5px 5px rgba(0, 0, 0, 0.15),0px 5px 5px rgba(0, 0, 0, 0.1);transform:perspective(1000px) rotateX(10deg)"},w={name:"y8nmmz",styles:"background:linear-gradient(120deg, #f9dc5c 0%, #f9dc5c 50%, #f4d03f 50%, #f4d03f 100%);color:white;text-align:center;transform:perspective(1000px) rotateX(10deg);box-shadow:0px 5px 5px rgba(0, 0, 0, 0.15),0px 5px 5px rgba(0, 0, 0, 0.1);transform:perspective(1000px) rotateX(10deg)"};function _(){var e=function(e,t){window.scrollTo({top:t,left:e,behavior:"smooth"})};(0,n.useEffect)(function(){var t=0,a=function(){var a=document.documentElement.scrollTop,n=a>t?"down":"up";t=a,"down"===n&&a>20&&a<56?e(0,56):"up"===n&&56===a&&e(0,0)};return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}},[]);var t=[{id:1,name:"1조",imagePath:"/images/Temp_Webtoon_Thumnail.jpg",status:"휴재중"},{id:2,name:"호랑이행님",imagePath:"/images/Temp_Webtoon_Thumnail.jpg",status:"휴재중"},{id:3,name:"신의 탑",imagePath:"/images/Temp_Webtoon_Thumnail.jpg",status:"연재중"},{id:4,name:"웹툰4",imagePath:"/images/Temp_Webtoon_Thumnail.jpg",status:"완결"},{id:5,name:"웹툰5",imagePath:"/images/Temp_Webtoon_Thumnail.jpg",status:"연재중"},{id:6,name:"웹툰6",imagePath:"/images/Temp_Webtoon_Thumnail.jpg",status:"연재중"}];return b("div",{className:" h-full w-full bg-BackgroundLight"},b("div",{className:"sticky top-0 z-10 flex h-14 w-screen items-center justify-between bg-PrimaryLight px-5"},b("div",{className:"h-6 w-6"}),b("img",{src:"/images/MNMN_Logo_White.png",alt:"Logo",className:"h-10 w-10"}),b(i(),{href:"/notification"},b("img",{src:"/images/HeaderBar_Noti.png",alt:"Noti"}))),b("div",{className:" z-0 flex h-14 w-full items-center justify-center rounded-b-xl bg-PrimaryLight p-2"},b("div",{className:"flex h-full w-11/12 items-center justify-between rounded-2xl bg-white px-6"},b(v,null))),b("div",{className:"mb-3 flex justify-center"},b("div",{className:"w-11/12 rounded-lg bg-BackgroundLightComponent px-4 pt-4"},b(u,{categoryTitle:"내가 보는 웹툰",route:"my-webtoon"}),b("div",{className:"mb-4 overflow-x-auto whitespace-nowrap"},t.map(function(e){return b(g.Z,{key:e.id,webtoonName:e.name,imageUrl:e.imagePath,status:e.status})})))),b("div",{className:"mb-4 flex justify-center"},b("div",{className:"grid h-32 w-11/12 grid-cols-3 gap-2"},b("div",{css:(0,l.iv)(w,";","","",""),className:"col-span-1 rounded-lg bg-white px-4"},b("div",{className:"flex h-full w-full items-center justify-center"},b(i(),{href:"/genre-taste"},b("div",{className:"p-2 font-bold"},"선호취향",b("br",null),"설정하기")),b("div",{className:"absolute bottom-1 right-2"},b(i(),{href:"/genre-taste"},b(o(),{src:"/images/goOtherPageWhite.png",alt:"선호취향 이동",width:24,height:24}))))),b("div",{css:(0,l.iv)(x,";","","",""),className:"relative col-span-2 rounded-lg bg-[#0B99FF] px-4"},b("div",{className:"z-10 flex flex-col justify-between"},b("div",{className:"z-10 flex items-center justify-center pt-4"},b("img",{className:"z-10 h-24 w-24 p-2",src:"/images/character.png",alt:"hi"}),b(i(),{href:"/managola"},b("div",{className:"flex items-center p-2 font-bold"},"취향검사",b("br",null),"하러가기"))),b("div",{className:"absolute bottom-1 right-2"},b(i(),{href:"/managola"},b(o(),{src:"/images/goOtherPageWhite.png",alt:"마나골라 이동",width:24,height:24}))))))),b("div",{className:"mb-3 flex justify-center"},b("div",{className:"w-11/12 rounded-lg bg-BackgroundLightComponent px-4 pt-4"},b(u,{categoryTitle:"마나마나가 준비했어요"}),b("div",{className:"mb-4 overflow-x-auto whitespace-nowrap"},t.map(function(e){return b(g.Z,{key:e.id,webtoonName:e.name,imageUrl:e.imagePath,status:e.status})})))),b("div",{className:"mb-3 flex justify-center"},b("div",{className:"w-11/12 rounded-lg bg-BackgroundLightComponent px-4 pt-4"},b(u,{categoryTitle:"이 달의 신작"}),b("div",{className:"mb-4 overflow-x-auto  whitespace-nowrap"},t.map(function(e){return b(g.Z,{key:e.id,webtoonName:e.name,imageUrl:e.imagePath,status:e.status})})))),b(c.Z,null))}},8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(9702)}])},1525:function(e){e.exports={container:"Top10_container__nctfS",rollingbanner:"Top10_rollingbanner__wMwaR",leftitem:"Top10_leftitem___gH74",rankfont:"Top10_rankfont__dx_kb",rankitemfont:"Top10_rankitemfont__LrI3H",chatgrowicon:"Top10_chatgrowicon__09c80",title:"Top10_title__rfSXE",wrap:"Top10_wrap__0a54D",prev:"Top10_prev__qi_pC",current:"Top10_current__p1GP9",next:"Top10_next__DBqyR",reverse:"Top10_reverse__V6gxz"}}},function(e){e.O(0,[664,675,449,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);