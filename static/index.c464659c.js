import{_ as d}from"./nuxt-link.8c419a63.js";import{n as u,r as f,c as i,a as s,q as o,F as w,z as v,o as a,A as h,w as y,d as L,t as R,B as x}from"./entry.055985eb.js";import{_ as U,b as k,e as B,a as j,c as C,d as S,g as n}from"./index.c46a6dcb.js";import{u as N}from"./song.84d27988.js";const P=""+new URL("ads.049f32da.webp",import.meta.url).href,F=""+new URL("art.58725e63.webp",import.meta.url).href,I=""+new URL("body.b66e3cf4.webp",import.meta.url).href,M=""+new URL("chinese.e9023887.webp",import.meta.url).href,V=""+new URL("color.e47f5d27.webp",import.meta.url).href,z=""+new URL("deco-ball-1.0c081e16.gif",import.meta.url).href,O=""+new URL("deco-ball-2.cf537f1c.gif",import.meta.url).href,T=""+new URL("deco-ball-3.72cc3459.gif",import.meta.url).href,W=""+new URL("deco-ball-4.2e1d8f80.gif",import.meta.url).href,Y=""+new URL("english.6a7b686b.webp",import.meta.url).href,$=""+new URL("game-background-2.2f07627b.mp4",import.meta.url).href,q=""+new URL("game-background-3-2.3ab7ed76.mp4",import.meta.url).href,A=""+new URL("game-background-3.a9d1e33d.mp4",import.meta.url).href,D=""+new URL("japanese.b8367f4c.webp",import.meta.url).href,l=""+new URL("logo.17939a4b.png",import.meta.url).href,E=""+new URL("mj.77949a58.webp",import.meta.url).href,K=""+new URL("present.aea1bb0c.webp",import.meta.url).href,Q=""+new URL("star.b0f60d33.webp",import.meta.url).href,G={class:"relative overflow-hidden bg-slate-950"},H=s("iframe",{class:"category__background-video",src:"https://www.youtube.com/embed/pfLRFrgRoj8?si=bw4YK8o_amVy5Wx7&controls=0&start=5&mute=1&loop=1&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),J=["src"],X={class:"container relative flex items-center mx-auto py-20 px-4 min-h-screen"},Z=s("img",{class:"absolute top-12 right-0 w-80",src:l,alt:"logo"},null,-1),ee={class:"grid grid-cols-2 gap-x-8 gap-y-10 flex-1 max-w-5xl"},ie=u({__name:"index",setup(se){const _=f(""),r=N(),c=t=>Object.assign({"/assets/imgs/ads.webp":P,"/assets/imgs/art.webp":F,"/assets/imgs/background.mp4":U,"/assets/imgs/ball.mp4":k,"/assets/imgs/body.webp":I,"/assets/imgs/chinese.webp":M,"/assets/imgs/color.webp":V,"/assets/imgs/deco-ball-1.gif":z,"/assets/imgs/deco-ball-2.gif":O,"/assets/imgs/deco-ball-3.gif":T,"/assets/imgs/deco-ball-4.gif":W,"/assets/imgs/english.webp":Y,"/assets/imgs/game-background-2.mp4":$,"/assets/imgs/game-background-3-2.mp4":q,"/assets/imgs/game-background-3.mp4":A,"/assets/imgs/home-chart.png":B,"/assets/imgs/home-title.mp4":j,"/assets/imgs/japanese.webp":D,"/assets/imgs/logo.png":l,"/assets/imgs/mj.webp":E,"/assets/imgs/present.webp":K,"/assets/imgs/rule-video-1.mp4":C,"/assets/imgs/rule-video-2.mp4":S,"/assets/imgs/star.webp":Q})[`/assets/imgs/${t}`],m=t=>{_.value=t,n.to(".category__cover",{xPercent:0,yPercent:-50,opacity:1,duration:.8})},g=()=>{n.to(".category__cover",{xPercent:100,yPercent:-50,opacity:0,duration:.5})};return(t,p)=>{const b=d;return a(),i("div",G,[H,s("img",{class:"category__cover",src:c(o(_)),alt:"category-cover"},null,8,J),s("div",X,[Z,s("div",ee,[(a(!0),i(w,null,v(o(r).songQuestions,e=>(a(),h(b,{key:e.id,to:{name:"category-id",params:{id:e.id}},class:x(["category__btn",{"category__btn--disable":o(r).answeredCategoryIds.includes(e.id)}]),onMouseenter:te=>m(e.cover),onMouseleave:g},{default:y(()=>[L(R(e.name),1)]),_:2},1032,["to","class","onMouseenter"]))),128))])])])}}});export{ie as default};