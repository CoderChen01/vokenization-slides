import{d as _,u as d,a as p,c as m,b as u,r as h,o as a,e as n,f as t,t as s,g as l,F as f,h as g,n as v,i as x,j as y,k as b,l as P,m as N,_ as k}from"./index-a547f75f.js";import{N as S}from"./NoteDisplay-e68a464b.js";const w={class:"m-4"},V={class:"mb-10"},j={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},M={class:"text-lg"},T={class:"font-bold flex gap-2"},B={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),E={key:0,class:"border-gray-400/50 mb-8"},H=_({__name:"PresenterPrint",setup(z){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>h.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(a(),n("div",{id:"page-root",style:v(l(N))},[t("div",w,[t("div",V,[t("h1",j,s(l(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(a(!0),n(f,null,g(i.value,(e,c)=>(a(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",M,[t("div",T,[t("div",B,s(e==null?void 0:e.no)+"/"+s(l(x)),1),y(" "+s(e==null?void 0:e.title)+" ",1),D])]),b(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(a(),n("hr",E)):P("v-if",!0)]))),128))])],4))}}),A=k(H,[["__file","/home/u2004/Projects/PersonalProjects/slides/20231013/MMESSE/node_modules/.pnpm/registry.npmmirror.com+@slidev+client@0.43.7_postcss@8.4.31_vite@4.4.11/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{A as default};
