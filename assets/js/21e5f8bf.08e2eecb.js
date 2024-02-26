"use strict";(self.webpackChunkpractica_02_manual=self.webpackChunkpractica_02_manual||[]).push([[700],{1131:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=a(4848),s=a(8453);const i={sidebar_position:4},t="Instalaci\xf3n del Facturador",c={id:"tutorial/create-a-page",title:"Instalaci\xf3n del Facturador",description:"Docker | Linux | SSL externo",source:"@site/docs/tutorial/create-a-page.md",sourceDirName:"tutorial",slug:"/tutorial/create-a-page",permalink:"/Practica02Manual/docs/tutorial/create-a-page",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/create-a-page.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Manual de Instalaci\xf3n",permalink:"/Practica02Manual/docs/tutorial/create-a-document"}},l={},o=[{value:"Pasos",id:"pasos",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"instalaci\xf3n-del-facturador",children:"Instalaci\xf3n del Facturador"}),"\n",(0,r.jsx)("h2",{class:"subtitulo",children:"Docker | Linux | SSL externo"}),"\n",(0,r.jsx)(n.h2,{id:"pasos",children:"Pasos"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:['para instalar debe ejecutar el script evitando instalar el SSL, le ser\xe1 consultado en el proceso y deber\xe1 ingresar "',(0,r.jsx)(n.strong,{children:"n"}),'"']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"finalizada la instalaci\xf3n debe dirigirse a la ruta de instalaci\xf3n:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd /root/facturadorpro31/\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["debe editar el archivo ",(0,r.jsx)(n.strong,{children:".env"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nano .env\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Dentro del editor, localice los par\xe1metros y realice los siguientes cambios:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Antes"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"APP_URL=http://${APP_URL_BASE}\r\nFORCE_HTTPS=false\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Despu\xe9s"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"APP_URL=https://${APP_URL_BASE}\r\nFORCE_HTTPS=true\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u26ab"," Una vez realizados los cambios, guarde y salga del editor."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u26ab"," Ejecute los siguientes comandos para eliminar la cach\xe9 de la aplicaci\xf3n:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"php artisan config:cache\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u26ab"," Con esto, habr\xe1 completado la configuraci\xf3n del lado de la herramienta. Sin embargo, tenga en cuenta que hasta que no configure un SSL, no podr\xe1 acceder a la herramienta."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Importante",type:"warning",children:(0,r.jsx)(n.p,{children:"Recuerde habilitar el puerto 443 para poder acceder a la herramienta."})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>c});var r=a(6540);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);