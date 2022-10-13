"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[15351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,y=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41308:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={title:"Security",slug:"security"},a=void 0,c={unversionedId:"getting-started/security",id:"version-3.2.0/getting-started/security",title:"Security",description:"Reviewpad is distributed through Docker images so that it can be executed easily with any runner. This can be either a GitHub action runner, developer machine, or a server in the organization.",source:"@site/versioned_docs/version-3.2.0/getting-started/security.md",sourceDirName:"getting-started",slug:"/getting-started/security",permalink:"/3.2.0/getting-started/security",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/getting-started/security.md",tags:[],version:"3.2.0",frontMatter:{title:"Security",slug:"security"},sidebar:"DocsSidebar",previous:{title:"Installation",permalink:"/3.2.0/getting-started/installation"},next:{title:"Syntax",permalink:"/3.2.0/guides/syntax"}},s={},u=[],p={toc:u};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Reviewpad is distributed through Docker images so that it can be executed easily with any runner. This can be either a GitHub action runner, developer machine, or a server in the organization."),(0,i.kt)("admonition",{title:"INFO",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A running instance of Reviewpad does not communicate with ",(0,i.kt)("a",{parentName:"p",href:"http://reviewpad.com/"},"Reviewpad.com")," servers or any non-disclosed third-party to send any information.")),(0,i.kt)("p",null,"Reviewpad executions do not communicate between them, they are ephemeral and run in an isolated environment from other users so that there is no possibility of information leaks between environments."),(0,i.kt)("p",null,"For further investigation, you can inspect the Docker images on ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/reviewpad/action"},"dockerhub"),"."))}l.isMDXComponent=!0}}]);