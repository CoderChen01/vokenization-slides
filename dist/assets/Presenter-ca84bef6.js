import{o as d,e as k,f as e,y as S,z as E,b as h,d as V,A as y,q as v,B as T,_ as B,C as z,D,c as b,a as H,E as P,G as R,I as A,J as I,K as j,L,M as q,N as F,O,P as U,g as r,k as u,t as W,n as x,Q as $,S as M,l as Z,R as G,T as w,U as J,F as K,V as Q,W as X,s as Y,X as ee,Y as se,m as N,Z as te,$ as oe,a0 as le,a1 as ne,a2 as ae,i as re,a3 as ie}from"./index-a547f75f.js";import{N as ce}from"./NoteDisplay-e68a464b.js";import ue from"./DrawingControls-22e06893.js";const de={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_e=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[_e];function pe(o,n){return d(),k("svg",de,me)}const ve={name:"carbon-renew",render:pe},he={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fe=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ge=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),xe=[fe,ge];function we(o,n){return d(),k("svg",he,xe)}const Se={name:"carbon-time",render:we},ye="/assets/logo-title-horizontal-96c3c915.png";function ke(){const o=S(Date.now()),n=E({interval:1e3}),_=h(()=>{const s=(n.value-o.value)/1e3,l=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${l}`});function m(){o.value=n.value}return{timer:_,resetTimer:m}}const Ce=V({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(o){const n=o,_=h(()=>{var s,l,t;return(t=(l=(s=y.value)==null?void 0:s.meta)==null?void 0:l.slide)==null?void 0:t.note}),m=h(()=>{var s,l,t;return(t=(l=(s=y.value)==null?void 0:s.meta)==null?void 0:l.slide)==null?void 0:t.noteHTML});return(s,l)=>(d(),v(ce,{class:T(n.class),note:_.value,"note-html":m.value},null,8,["class","note","note-html"]))}}),be=B(Ce,[["__file","/home/u2004/Projects/PersonalProjects/slides/20231013/MMESSE/node_modules/.pnpm/registry.npmmirror.com+@slidev+client@0.43.7_postcss@8.4.31_vite@4.4.11/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=o=>(Q("data-v-ee8c8e6d"),o=o(),X(),o),Pe={class:"bg-main h-full slidev-presenter"},$e={class:"grid-container"},Me={class:"grid-section top flex"},Ne=f(()=>e("img",{src:ye,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),Ve=f(()=>e("div",{class:"flex-auto"},null,-1)),Te={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Be=f(()=>e("div",{class:"context"}," current ",-1)),Ee=f(()=>e("div",{class:"context"}," next ",-1)),ze={class:"grid-section note overflow-auto"},De={class:"grid-section bottom"},He={class:"progress-bar"},Re=V({__name:"Presenter",setup(o){const n=S();z(),D(n);const _=b.titleTemplate.replace("%s",b.title||"Slidev");H({title:`Presenter - ${_}`});const{timer:m,resetTimer:s}=ke(),l=S([]),t=h(()=>P.value<R.value?{route:y.value,clicks:P.value+1}:A.value?{route:I.value,clicks:0}:null);return j(),L(()=>{const C=n.value.querySelector("#slide-content"),i=q(F()),g=O();U(()=>{if(!g.value||ee.value||!se.value)return;const c=C.getBoundingClientRect(),a=(i.x-c.left)/c.width*100,p=(i.y-c.top)/c.height*100;if(!(a<0||a>100||p<0||p>100))return{x:a,y:p}},c=>{Y.cursor=c})}),(C,i)=>{const g=Se,c=ve;return d(),k(K,null,[e("div",Pe,[e("div",$e,[e("div",Me,[Ne,Ve,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:i[0]||(i[0]=(...a)=>r(s)&&r(s)(...a))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Te,W(r(m)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(r(N))},[u(M,{key:"main",class:"h-full w-full"},{default:$(()=>[u(te,{"render-context":"presenter"})]),_:1}),Be],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(r(N))},[t.value?(d(),v(M,{key:"next",class:"h-full w-full"},{default:$(()=>{var a;return[u(r(le),{is:(a=t.value.route)==null?void 0:a.component,"clicks-elements":l.value,"onUpdate:clicksElements":i[1]||(i[1]=p=>l.value=p),clicks:t.value.clicks,"clicks-disabled":!1,class:T(r(oe)(t.value.route)),route:t.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):Z("v-if",!0),Ee],4),e("div",ze,[(d(),v(be,{key:2,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",De,[u(ne,{persist:!0})]),(d(),v(ue,{key:0}))]),e("div",He,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(r(ae)-1)/(r(re)-1)*100}%`})},null,4)])]),u(ie),u(J,{modelValue:r(w),"onUpdate:modelValue":i[2]||(i[2]=a=>G(w)?w.value=a:null)},null,8,["modelValue"])],64)}}});const Le=B(Re,[["__scopeId","data-v-ee8c8e6d"],["__file","/home/u2004/Projects/PersonalProjects/slides/20231013/MMESSE/node_modules/.pnpm/registry.npmmirror.com+@slidev+client@0.43.7_postcss@8.4.31_vite@4.4.11/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Le as default};
