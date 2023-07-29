"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[670],{1811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=r(7896),n=(r(2784),r(876));const a={sidebar_position:6},i="Other Properties",p={unversionedId:"other-properties",id:"other-properties",title:"Other Properties",description:"focusColor",source:"@site/docs/other-properties.mdx",sourceDirName:".",slug:"/other-properties",permalink:"/Custoplayer/other-properties",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Preview Tooltip",permalink:"/Custoplayer/preview-tooltip"},next:{title:"Setting Up Subtitles",permalink:"/Custoplayer/setting-up-subtitles"}},s={},l=[{value:"focusColor",id:"focuscolor",level:2},{value:"Usage",id:"usage",level:3}],c={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"other-properties"},"Other Properties"),(0,n.kt)("h2",{id:"focuscolor"},"focusColor"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"focusColor")," property is used to set the color of the focus square that appears when the user tabs on a clickable field."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Custoplayer } from 'custoplayer';\n\nfunction CustoplayerExample() {\n  return (\n    <Custoplayer\n      src='https://custoplayer.nyc3.cdn.digitaloceanspaces.com/docs/compressed-custoplayer-demo.mp4'\n      values={{\n        item1: {\n          id: \"playButton1\"\n        },\n        focusColor='#77a4ed'\n      }}\n    />\n  );\n}\n\nexport default CustoplayerExample;\n")))}f.isMDXComponent=!0},876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);