(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[324],{7898:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(7294),r=i(1163),a=i(1664),c=i.n(a),l=n.createElement;function o(e){var t=(0,r.useRouter)(),i=e.showBackBtn,n=e.pageName,a=e.rightBtn,o=i&&"EDIT"===a?l("div",{className:"h-6 w-12"},l("img",{src:"/images/HeaderBar_Back.png",alt:"goBack",onClick:function(){return t.back()}})):i?l("div",{className:""},l("img",{src:"/images/HeaderBar_Back.png",alt:"goBack",onClick:function(){return t.back()}})):l("div",{className:"h-6 w-6"}),s=null;switch(a){case"NOTI":s=l("div",null,l(c(),{href:"/notification"},l("img",{src:"/images/HeaderBar_Noti.png",alt:"notification"})));break;case"EDIT":s=l("div",{className:"flex h-6 w-12 items-center justify-center rounded-md border-2 border-BackgroundLightComponentBolder text-sm"},"편집");break;default:s=l("div",{className:"h-6 w-6"})}return l("div",{className:"z-30 flex h-14 items-center justify-between bg-BackgroundLightComponent p-5"},o,l("div",{className:""},l("p",{className:"text-xl font-bold"},n)),s)}},9868:function(e,t,i){"use strict";var n=i(7294),r=i(2766),a=i(4493),c=i(1265),l=i(1927),o=n.createElement,s=(0,c.Z)({palette:{primary:{main:"rgba(190, 52, 85, 1)"}}});t.Z=function(e){var t=e.defaultValue,i=e.comment,c=(0,n.useState)(t.content),m=c[0],u=c[1],d=(0,n.useState)(t.spoiler),f=d[0],p=d[1];return o("div",{className:"h-fit rounded border border-PrimaryLight bg-BackgroundLightComponent"},o("div",{className:"m-1 h-fit"},o(l.Z,{theme:s},o(r.Z,{fullWidth:!0,id:"standard-multiline-flexible",color:"primary",multiline:!0,value:m,onChange:function(e){u(e.target.value)},maxRows:5,variant:"standard"}))),o("div",{className:"flex items-center justify-between"},o("div",{className:"ml-1 flex"},o("div",{className:"flex items-center"},o("p",{className:"text-gray-400"},"스포일러가 포함")),o(a.Z,{checked:f,onChange:function(e){p(e.target.checked)}})),o("div",{className:"flex items-center"},o("button",{className:"m-1 rounded-full bg-PrimaryLight py-1 px-4 font-semibold text-FontPrimaryDark",onClick:function(){console.log(m,f),i({content:m,spoiler:f}),u(""),p(!1)}},"등록"))))}},9312:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return w}});var n=i(6687),r=i(7294),a=i(1163),c=i(5675),l=i.n(c),o=i(7898),s=i(9661),m=r.createElement,u=function(e){var t=e.chat,i=e.itemInfo,n="https://i.namu.wiki/i/xss2U6BFSuoMjDMssQDkkUNNvzOgpWjkTJ_pgdcRF034Qc_vlAZ6yOVI6ik1rhHBWpxovuBg5MIE55Wcf54uyLI6KplwA5lrYS5Omaa-G1MXvAawlW_QQO0gCR63K_TdrlqX75TyqynnSF89211hqg.webp",a=(0,r.useState)(t.isSpoiler),c=a[0],o=a[1],u=function(e){var t=new Date,i=new Date(e),n=Math.floor((t.getTime()-i.getTime())/1e3/60);if(n<1)return"방금전";if(n<60)return"".concat(n,"분전");var r=Math.floor(n/60);if(r<24)return"".concat(r,"시간전");var a=Math.floor(r/24);if(a<30)return"".concat(a,"일전");var c=Math.floor(a/30);return c<12?"".concat(c,"달전"):"".concat(Math.floor(a/365),"년전")},d=m("div",{className:"flex flex-col"},m("div",{className:"flex justify-center"},m("p",{className:"inline-block font-bold text-red-600"},"스포일러"),m("p",{className:"inline-block"},"\xa0주의")),m("button",{onClick:function(){o(!1)}},"눌러서 보기"));return"김태학"===t.user.nickname?m("div",{className:"my-2 flex justify-end"},m("div",{className:"max-w-[65%]"},m("div",{className:"flex rounded bg-BackgroundLightComponent p-1.5"},m("p",{className:"whitespace-pre-wrap break-all"},t.content),m("div",{className:"ml-auto"},m("button",{className:"w-4",onClick:function(){i(t),console.log("더보기클릭함")}},m(l(),{src:"/images/More.png",width:20,height:20,alt:"#"})))),m("div",null,m("p",{className:"text-right"},u(t.createTime),"|",t.user.nickname))),m("div",{className:"ml-1 flex items-center"},m(s.Z,{alt:"Remy Sharp",src:n}))):m("div",{className:"mjustify-end my-2 flex"},m("div",{className:"mr-1 flex items-center"},m(s.Z,{alt:"Remy Sharp",src:n})),m("div",{className:"max-w-[65%]"},m("div",{className:"relative flex rounded bg-BackgroundLightComponent p-1.5"},m("p",{className:c?"whitespace-pre-wrap break-all blur-sm":"whitespace-pre-wrap break-all"},t.content),m("div",{className:"mr-0"},m("button",{className:"w-4",onClick:function(){i(t),console.log("더보기클릭함")}},m(l(),{src:"/images/More.png",width:20,height:20,alt:"#"}))),m("div",{className:"absolute w-full"},c?d:null)),m("div",null,m("p",null,t.user.nickname,"|",u(t.createTime)))))},d=i(8456),f=i(2806),p=i(9868),g=r.createElement,h=function(e){var t=e.chat,i=e.open,n=e.close,a=e.deleteComment,c=e.modifyComment,l=(0,r.useState)("init"),o=l[0],s=l[1],m=function(){n(),s("init")},u=function(e){s(e)},d=g("div",{className:"flex justify-center"},g("div",{className:"my-6 flex w-2/3 flex-col items-center justify-center"},g("p",{className:"text-center text-2xl text-PrimaryLight"},"이 댓글을 정말 삭제하시겠습니까?"),g("hr",{className:"my-2 w-full border border-PrimaryLight bg-PrimaryLight"}),g("button",{className:"flex w-1/2 flex-col items-center justify-center py-3",onClick:function(){a(t),m()}},g("p",{className:"text-center"},"삭제하기")))),h=g("div",{className:"flex justify-center"},g("div",{className:"my-6 flex w-[80%] flex-col items-center justify-center"},g("p",{className:"text-center text-2xl text-PrimaryLight"},"리뷰 수정"),g("hr",{className:"my-2 w-full border border-PrimaryLight bg-PrimaryLight"}),g(p.Z,{defaultValue:{content:t.content,spoiler:t.isSpoiler},comment:function(e){var i={id:t.id,content:e.content,isSpoiler:e.spoiler,report:t.report,createTime:t.createTime,user:{id:t.user.id,nickname:t.user.nickname,imagePath:t.user.imagePath}};c(t,i),m()}}))),x=g("div",{className:"flex justify-center"},g("div",{className:"my-6 flex w-2/3 flex-col items-center justify-center"},g("p",{className:"text-center text-2xl text-PrimaryLight"},"이 댓글을 정말 신고하시겠습니까?"),g("hr",{className:"my-2 w-full border border-PrimaryLight bg-PrimaryLight"}),g("button",{className:"flex w-1/2 flex-col items-center justify-center py-3",onClick:function(){alert("신고가 접수되었습니다."),m()}},g("p",{className:"text-center"},"신고하기")))),N=g("div",{className:"flex justify-center"},g("div",{className:"my-6 flex w-2/3 flex-col items-center justify-center"},g("p",{className:"text-center text-2xl text-PrimaryLight"},"댓글 설정"),g("hr",{className:"my-2 w-full border border-PrimaryLight bg-PrimaryLight"}),g("button",{className:"flex w-1/2 flex-col items-center justify-center py-3",onClick:function(){u("del")}},g("p",{className:"text-center"},"삭제하기")),g("button",{className:"flex w-1/2 flex-col items-center justify-center py-3",onClick:function(){u("modify")}},g("p",{className:"text-center"},"수정하기")))),y=g("div",{className:"flex justify-center"},g("div",{className:"my-6 flex w-2/3 flex-col items-center justify-center"},g("p",{className:"text-center text-2xl text-PrimaryLight"},"댓글 설정"),g("hr",{className:"my-2 w-full border border-PrimaryLight bg-PrimaryLight"}),g("button",{className:"flex w-1/2 flex-col items-center justify-center py-3",onClick:function(){u("report")}},g("p",{className:"text-center"},"신고하기"))));return g(f.Z,{anchor:"bottom",open:i,onOpen:function(){},onClose:m},(null==t?void 0:t.user.nickname)==="김태학"?"init"===o?N:"del"===o?d:"modify"===o?h:void 0:"init"===o?y:"report"===o?x:void 0)},x=r.createElement,N=function(e){var t=e.commentList,i=e.commentEnd,n=e.loadComment,a=e.deleteComment,c=e.modifyComment,l=(0,r.useState)(0),o=l[0],s=l[1],m=(0,r.useState)("no"),f=m[0],p=m[1],g=(0,r.useState)(0),N=g[0],y=g[1],v=(0,r.useRef)(null),k=function(){v.current.scrollTop=v.current.scrollHeight-v.current.clientHeight},b=function(e){setTimeout(function(){v.current.scrollTop=e,p("no")},1e3)};(0,r.useEffect)(function(){"no"!==f?b(N+v.current.scrollHeight-o):k()},[t]),(0,r.useEffect)(function(){s(v.current.scrollHeight),y(v.current.scrollTop),"add"===f?n():"del"===f&&a("ee")},[f]),(0,r.useEffect)(function(){k()},[]);var w=(0,r.useState)(),P=w[0],T=w[1],S=(0,r.useState)(!1),C=S[0],L=S[1],j=function(e){T(e),L(!0),console.log("chatList에서"),console.log(e)};return x("div",{className:"mx-3 max-w-full overflow-auto bg-slate-100",ref:v,onScroll:function(){0!==v.current.scrollTop||i||"no"!==f||p("add")}},x("div",{className:"flex justify-center"},"add"===f?x(d.Z,null):null),x("div",{className:"m-2 flex min-h-screen max-w-full flex-col-reverse"},null==t?void 0:t.map(function(e){return x(u,{chat:e,itemInfo:j,key:e.id})})),C?x(h,{chat:P,open:C,close:function(){L(!1)},deleteComment:a,modifyComment:c}):null)},y=r.createElement,v={content:"",spoiler:!1},k=[{id:1,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!1,report:0,createTime:"2023-03-13 11:22:33",user:{id:1,nickname:"김태학",imagePath:"url"}},{id:2,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!0,report:0,createTime:"2023-03-13 11:22:33",user:{id:1,nickname:"싸피",imagePath:"url"}},{id:3,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!1,report:0,createTime:"2023-03-13 11:22:33",user:{id:1,nickname:"김태학",imagePath:"url"}},{id:4,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!0,report:0,createTime:"2023-03-12 11:22:33",user:{id:1,nickname:"싸피",imagePath:"url"}},{id:5,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!1,report:0,createTime:"2023-03-12 11:22:33",user:{id:1,nickname:"싸피",imagePath:"url"}},{id:6,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!0,report:0,createTime:"2023-03-11 11:22:33",user:{id:1,nickname:"싸피",imagePath:"url"}},{id:7,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!1,report:0,createTime:"2023-03-11 11:22:33",user:{id:1,nickname:"싸피",imagePath:"url"}},{id:8,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!0,report:0,createTime:"2023-03-10 11:22:33",user:{id:1,nickname:"김태학",imagePath:"url"}},{id:9,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!1,report:0,createTime:"2023-03-10 11:22:33",user:{id:1,nickname:"싸피",imagePath:"url"}},{id:10,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!0,report:0,createTime:"2023-03-09 11:22:33",user:{id:1,nickname:"싸피",imagePath:"url"}}],b=[{id:11,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!1,report:0,createTime:"2023-03-08 11:22:33",user:{id:1,nickname:"싸피",imagePath:"url"}},{id:22,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!0,report:0,createTime:"2023-03-05 11:22:33",user:{id:1,nickname:"김태학",imagePath:"url"}},{id:33,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!1,report:0,createTime:"2023-03-05 11:22:33",user:{id:1,nickname:"싸피",imagePath:"url"}},{id:44,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!0,report:0,createTime:"2023-03-04 11:22:33",user:{id:1,nickname:"싸피",imagePath:"url"}},{id:55,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!1,report:0,createTime:"2023-02-13 11:22:33",user:{id:1,nickname:"싸피",imagePath:"url"}},{id:66,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!0,report:0,createTime:"2023-01-13 11:22:33",user:{id:1,nickname:"싸피",imagePath:"url"}},{id:77,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!1,report:0,createTime:"2022-03-13 11:22:33",user:{id:1,nickname:"김태학",imagePath:"url"}},{id:88,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!0,report:0,createTime:"2021-03-13 11:22:33",user:{id:1,nickname:"싸피",imagePath:"url"}},{id:99,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!1,report:0,createTime:"2020-03-13 11:22:33",user:{id:1,nickname:"싸피",imagePath:"url"}},{id:100,content:"이것은 댓글 내용요요용요요요요요요용",isSpoiler:!0,report:0,createTime:"2019-03-13 11:22:33",user:{id:1,nickname:"싸피",imagePath:"url"}}];function w(){var e=(0,a.useRouter)().query,t=e.WEBTOON_THEME_COLOR,i=e.imagePath,c=e.name,s=y("div",{className:"flex h-16"},y("div",null,y(l(),{className:"h-full w-auto",src:"string"==typeof i?i:"",alt:"웹툰 이미지",width:100,height:200,priority:!0})," "),y("div",{className:"ml-3 flex items-center"},y("p",{className:"text-FontPrimaryDark"},c))),m=(0,r.useState)(k),u=m[0],d=m[1],f=(0,r.useState)(!1),g=f[0];return f[1],(0,r.useEffect)(function(){console.log(u)},[u]),y("div",null,y("div",{className:"flex h-screen w-screen flex-col"},y(o.Z,{showBackBtn:!0,pageName:"",rightBtn:"NOTI"}),y("div",{style:"string"==typeof t?{background:t}:{background:"black"},className:"w-full px-3 py-1 drop-shadow-xl"},s),y(N,{commentList:u,commentEnd:g,loadComment:function(){console.log("댓글 로딩"),d([].concat((0,n.Z)(u),b))},deleteComment:function(e){for(var t=0;t<u.length;t++)u[t]===e&&u.splice(t,1);d((0,n.Z)(u))},modifyComment:function(e,t){for(var i=0;i<u.length;i++)if(u[i]===e){u[i]=t;break}d((0,n.Z)(u))}}),y("div",{className:"m-2"},y(p.Z,{defaultValue:v,comment:function(e){d([{id:3323,content:e.content,isSpoiler:e.spoiler,report:0,createTime:"2023-03-13 11:22:33",user:{id:1,nickname:"김태학",imagePath:"url"}}].concat((0,n.Z)(u)))}}))))}},3664:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail/[webtoon_id]/comment",function(){return i(9312)}])}},function(e){e.O(0,[774,664,675,449,317,858,888,179],function(){return e(e.s=3664)}),_N_E=e.O()}]);