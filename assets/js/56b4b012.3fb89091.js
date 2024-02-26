"use strict";(self.webpackChunkpractica_02_manual=self.webpackChunkpractica_02_manual||[]).push([[247],{5286:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>t});var s=n(4848),i=n(8453);const r={sidebar_position:1},l="Manual para Script de Instalaci\xf3n",c={id:"tutorial/Manual para Script de Instalacion",title:"Manual para Script de Instalaci\xf3n",description:"Docker | GitLab | Opci\xf3n SSL | Opci\xf3n SSH",source:"@site/docs/tutorial/Manual para Script de Instalacion.md",sourceDirName:"tutorial",slug:"/tutorial/Manual para Script de Instalacion",permalink:"/Practica02Manual/docs/tutorial/Manual para Script de Instalacion",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/Manual para Script de Instalacion.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Gu\xeda",permalink:"/Practica02Manual/docs/category/gu\xeda"},next:{title:"Manual de Instalaci\xf3n",permalink:"/Practica02Manual/docs/tutorial/Manual de Instalacion"}},o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Requisitos previos",id:"requisitos-previos",level:2},{value:"Pasos",id:"pasos",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"manual-para-script-de-instalaci\xf3n",children:"Manual para Script de Instalaci\xf3n"}),"\n",(0,s.jsx)("h2",{class:"subtitulo",children:"Docker | GitLab | Opci\xf3n SSL | Opci\xf3n SSH"}),"\n",(0,s.jsx)("h3",{class:"subtitulo_small",children:" Facturador PRO4"}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(a.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(a.p,{children:"Hemos elaborado un script para uso en instancias Linux con Ubuntu 18 o superior. Este archivo actualiza el sistema, instala las herramientas, sus dependencias y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos (siempre y cuando el dominio ya est\xe9 configurado hacia la instancia). Su ejecuci\xf3n es muy sencilla."}),"\n",(0,s.jsx)(a.h2,{id:"requisitos-previos",children:"Requisitos previos"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:"Tener acceso a su servidor, vps, m\xe1quina virtual o local via SSH, en las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario,\r\nla IP del servidor y la clave ssh que puede ser un archivo .ppk o .pem, recuerde almacenarlas en su equipo local."}),"\n",(0,s.jsx)(a.li,{children:"Tener instalado una versi\xf3n de ssh en su m\xe1quina para conectarse de manera remota, puede utilizar putty, filezilla o una consola terminal.\r\npara mayor informaci\xf3n sobre el acceso SSH visite los siguientes manuales:"}),"\n"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"https://docs.google.com/document/d/1PmQejvNd_dkXVm8DPUYlQTag0wvES46tMpxX3MPhkNY/edit#",children:"gu\xeda para acceder con Putty "}),"(gesti\xf3n de servidor)"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"https://docs.google.com/document/d/1Xpri2102N4b5C-dG-FVPXW5ZWjEz5S4iDjpvl7Zwq2E/edit##",children:"gu\xeda para acceder con Winscp "}),"(gesti\xf3n de archivos con aplicaci\xf3n de escritorio)"]}),"\n"]}),"\n",(0,s.jsxs)(a.ol,{start:"3",children:["\n",(0,s.jsx)(a.li,{children:"Si es posible configurar su dominio apuntando a su instancia para que al finalizar la instalaci\xf3n se encuentre disponible el aplicativo. Edite los r\xe9cords A y CNAME donde A debe contener su IP y CNAME el valor * (asterisco) para que se tomen los subdominios registrados por la herramienta."}),"\n"]}),"\n",(0,s.jsx)("img",{class:"imagenes_horizontales",src:"https://github.com/AntonyCandiotti/Practica02Manual/blob/main/docs/tutorial/img/image3.png?raw=true",alt:""}),"\n",(0,s.jsxs)(a.ol,{start:"4",children:["\n",(0,s.jsx)(a.li,{children:"En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasar\xe1n a usar el aplicativo con los contenedores de Docker."}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"pasos",children:"Pasos"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:"Acceder a su instancia v\xeda SSH."}),"\n",(0,s.jsx)(a.li,{children:"Loguearse como superusuario:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"sudo su\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"3",children:["\n",(0,s.jsx)(a.li,{children:"Clonar el snippet de GitLab que contiene el script:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"git clone https://gitlab.com/snippets/2079063.git script\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"4",children:["\n",(0,s.jsx)(a.li,{children:"Ingresar a la carpeta clonada:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"cd script\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"5",children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)("p",{id:"paso6",children:"Dar permisos de ejecuci\xf3n al script: "}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"chmod +x install.sh\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"6",children:["\n",(0,s.jsx)(a.li,{children:"Ejecutar el comando para iniciar el despliegue:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"./install.sh [dominio] \n"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"por ejemplo:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"./install.sh facturador.pro\n"})}),"\n",(0,s.jsxs)(a.ol,{start:"7",children:["\n",(0,s.jsx)(a.li,{children:"Una vez ejecutado el comando iniciar\xe1 el proceso de actualizaci\xf3n del sistema, en el proceso se le solicitar\xe1:"}),"\n"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"a. el usuario y contrase\xf1a de GitLab, para que se pueda descargar el proyecto en su instancia"}),"\n",(0,s.jsxs)(a.li,{children:["b. si desea instalar  SSL gratuito, tenga en cuenta que este debe ser actualizado cada 90 d\xedas, el mensaje ser\xe1 el siguiente:","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)("p",{class:"letras_negras",children:"instalar con SSL? (debe tener acceso al panel de su dominio para editar/agregar records TXT). si[s] no[n]"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"i. deber\xe1 contestar con \u201cs\u201d o \u201cn\u201d para continuar"}),"\n",(0,s.jsxs)(a.li,{children:["ii. si selecciona ",(0,s.jsx)(a.strong,{children:"S\xcd"}),", deber\xe1 contestar las siguientes preguntas con \u201cy\u201d, son 2 en total, seguidamente se le ofrecer\xe1 un c\xf3digo que debe a\xf1adir en un r\xe9cord tipo TXT en su dominio quedando como ",(0,s.jsx)(a.strong,{children:"_acme-challenge.example.com"})," o simplemente ",(0,s.jsx)(a.strong,{children:"_acme-challenge"})," depender\xe1 de su proveedor."]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)("img",{src:"https://github.com/AntonyCandiotti/Practica02Manual/blob/main/docs/tutorial/img/image1.png?raw=true"}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["iii. para continuar presione ",(0,s.jsx)(a.strong,{children:"enter"}),", luego deber\xe1 repetir las acciones para a\xf1adir un segundo c\xf3digo y habr\xe1 finalizado la configuraci\xf3n, si el proceso es exitoso la ejecuci\xf3n del script continuar\xe1."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["c. si desea obtener y gestionar actualizaciones autom\xe1ticas, deber\xe1 disponer de su sesi\xf3n de gitlab al momento","\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)("p",{class:"letras_negras",children:["configurar clave SSH para actualizaci\xf3n autom\xe1tica? (requiere acceso a ",(0,s.jsx)(a.a,{href:"https://gitlab.com/profile/keys",children:"https://gitlab.com/profile/keys"}),"). si[s] no[n]"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"i. deber\xe1 contestar con \u201cs\u201d o \u201cn\u201d para continuar"}),"\n",(0,s.jsx)(a.li,{children:"ii. de seleccionar S\xcd, al final del despliegue se le dar\xe1 un extracto de texto que debe a\xf1adir a su configuraci\xf3n de gitlab"}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)("img",{id:"ssh_key",src:"https://github.com/AntonyCandiotti/Practica02Manual/blob/main/docs/tutorial/img/image2.png?raw=true"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.ol,{start:"8",children:["\n",(0,s.jsx)(a.li,{children:"Finalizado el script y dependiendo de sus selecciones anteriores, se le entregar\xe1 varios datos que debe guardar, como;"}),"\n"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"a. usuario administrador"}),"\n",(0,s.jsx)(a.li,{children:"b. contrase\xf1a para usuario administrador"}),"\n",(0,s.jsx)(a.li,{children:"c. url del proyecto"}),"\n",(0,s.jsx)(a.li,{children:"d. ubicaci\xf3n del proyecto dentro del servidor"}),"\n",(0,s.jsx)(a.li,{children:"e. clave ssh para a\xf1adir a gitlab(obligatorio para quienes seleccion la instalaci\xf3n de SSH)"}),"\n"]}),"\n",(0,s.jsx)(a.h1,{id:"enlaces-de-inter\xe9s",children:"Enlaces de inter\xe9s"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\u26ab"," ",(0,s.jsx)("a",{href:"#seccion1",children:"Actualizaci\xf3n de SSL"})]}),"\n",(0,s.jsxs)(a.li,{children:["\u26ab"," ",(0,s.jsx)("a",{href:"#seccion1",children:"Actualizaci\xf3n mediante ejecuci\xf3n Script para instalaciones Docker"})]}),"\n",(0,s.jsxs)(a.li,{children:["\u26ab"," ",(0,s.jsx)("a",{href:"#seccion1",children:"Gesti\xf3n de SSL independiente, no el que incorpora el Script"})]}),"\n",(0,s.jsxs)(a.li,{children:["\u26ab"," ",(0,s.jsx)("a",{href:"#seccion1",children:"Gu\xeda gitlab para la instalaci\xf3n, contiene el script usado en el presente manual"}),", adem\xe1s posee los par\xe1metros extras que pueden usarse en la ejecuci\xf3n del ",(0,s.jsx)("a",{href:"#paso6",children:"paso 6"})]}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>c});var s=n(6540);const i={},r=s.createContext(i);function l(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);