import d from"./ContentSlot.9f26de45.js";import m from"./ButtonLink.9ebca88d.js";import y from"./Terminal.d059f0d3.js";import{f as _,q as t,x as o,E as r,G as c,D as n,F as f,B as i,C as h,J as k,I as l,O as $}from"./runtime-core.esm-bundler.c752936e.js";/* empty css                      */import{s as B}from"./index.52fe7a95.js";import"./DocsAsideTree.54c4f4d1.js";import"./cookie.059535a7.js";import"./Container.580a96c7.js";/* empty css                       */import"./index.04aabe90.js";/* empty css                     */const v={class:"block-hero"},w={class:"layout"},q={class:"content"},C={key:0,class:"announce"},N={key:1,class:"title"},S={key:2,class:"description"},V={key:3,class:"extra"},g={class:"actions"},A=["href"],b={class:"support"},D=_({__name:"BlockHero",props:{cta:{type:Array,required:!1},secondary:{type:Array,required:!1},snippet:{type:String,required:!1},video:{type:Array,required:!1}},setup(s){return(e,E)=>{const a=d,u=m,p=y;return t(),o("section",v,[r("div",w,[r("div",q,[e.$slots.announce?(t(),o("p",C,[c(a,{use:e.$slots.announce,unwrap:"p"},null,8,["use"])])):n("",!0),e.$slots.title?(t(),o("h1",N,[c(a,{use:e.$slots.title,unwrap:"p"},null,8,["use"])])):n("",!0),e.$slots.description?(t(),o("p",S,[c(a,{use:e.$slots.description,unwrap:"p"},null,8,["use"])])):n("",!0),e.$slots.extra?(t(),o("div",V,[c(a,{use:e.$slots.extra,unwrap:"p"},null,8,["use"])])):n("",!0),r("div",g,[e.$slots.actions?(t(),i(a,{key:1,use:e.$slots.actions,unwrap:"p"},null,8,["use"])):(t(),o(f,{key:0},[s.cta?(t(),i(u,{key:0,class:"cta",bold:"",size:"medium",href:s.cta[1]},{default:h(()=>[k(l(s.cta[0]),1)]),_:1},8,["href"])):n("",!0),s.secondary?(t(),o("a",{key:1,href:s.secondary[1],class:"secondary"},l(s.secondary[0]),9,A)):n("",!0)],64))])]),r("div",b,[$(e.$slots,"support",{},()=>[s.snippet?(t(),i(p,{key:0,content:s.snippet},null,8,["content"])):n("",!0)],!0)])])])}}}),M=B(D,[["__scopeId","data-v-27211c58"]]);export{M as default};