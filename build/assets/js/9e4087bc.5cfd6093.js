"use strict";(self.webpackChunkpractica_02_manual=self.webpackChunkpractica_02_manual||[]).push([[2711],{9331:(e,a,r)=>{r.r(a),r.d(a,{default:()=>o});r(6540);var t=r(8774),s=r(1312),i=r(1003),c=r(781),n=r(1107),l=r(4848);function h(e){let{year:a,posts:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.A,{as:"h3",id:a,children:a}),(0,l.jsx)("ul",{children:r.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(t.A,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:a}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:a.map(((e,a)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(h,{...e})},a)))})})})}function o(e){let{archive:a}=e;const r=(0,s.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),t=(0,s.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const a=e.reduce(((e,a)=>{const r=a.metadata.date.split("-")[0],t=e.get(r)??[];return e.set(r,[a,...t])}),new Map);return Array.from(a,(e=>{let[a,r]=e;return{year:a,posts:r}}))}(a.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.be,{title:r,description:t}),(0,l.jsxs)(c.A,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(n.A,{as:"h1",className:"hero__title",children:r}),(0,l.jsx)("p",{className:"hero__subtitle",children:t})]})}),(0,l.jsx)("main",{children:h.length>0&&(0,l.jsx)(d,{years:h})})]})]})}}}]);