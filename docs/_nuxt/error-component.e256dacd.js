import{_ as o}from"./Container.580a96c7.js";import{d as n,q as f,B as g,ab as E,ac as k,u as s}from"./runtime-core.esm-bundler.c752936e.js";import"./index.52fe7a95.js";const P={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:e}=c;(e.stack||"").split(`
`).splice(1).map(t=>({text:t.replace("webpack:/","").replace(".vue",".js").trim(),internal:t.includes("node_modules")&&!t.includes(".cache")||t.includes("internal")||t.includes("new Promise")})).map(t=>`<span class="stack${t.internal?" internal":""}">${t.text}</span>`).join(`
`);const r=Number(e.statusCode||500),a=r===404,u=e.statusMessage??(a?"Page Not Found":"Internal Server Error"),i=e.message||e.toString(),p=void 0,m=n(()=>o(()=>import("./error-404.3b5512f9.js"),["./error-404.3b5512f9.js","./index.52fe7a95.js","./runtime-core.esm-bundler.c752936e.js","./entry.a6d383b7.js","./DocsAsideTree.54c4f4d1.js","./cookie.059535a7.js","./Container.580a96c7.js","./Container.dc145a5e.css","./DocsAsideTree.b13c5d2f.css","./query.c3f7607a.js","./entry.56a2a235.css","./error-404.97011ca1.css"],import.meta.url).then(t=>t.default||t)),_=n(()=>o(()=>import("./error-500.f2839bc7.js"),["./error-500.f2839bc7.js","./index.52fe7a95.js","./runtime-core.esm-bundler.c752936e.js","./entry.a6d383b7.js","./DocsAsideTree.54c4f4d1.js","./cookie.059535a7.js","./Container.580a96c7.js","./Container.dc145a5e.css","./DocsAsideTree.b13c5d2f.css","./query.c3f7607a.js","./entry.56a2a235.css","./error-500.82e14f63.css"],import.meta.url).then(t=>t.default||t)),d=a?m:_;return(t,l)=>(f(),g(s(d),E(k({statusCode:s(r),statusMessage:s(u),description:s(i),stack:s(p)})),null,16))}},h=P;export{h as default};