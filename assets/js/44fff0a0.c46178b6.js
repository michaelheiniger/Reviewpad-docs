"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[69648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62650:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,l={type:"mdx",permalink:"/changelog/reviewpad-v331-faro-edition",source:"@site/src/pages/changelog/reviewpad-v331-faro-edition.md",description:"New features",frontMatter:{}},p=[{value:"New features \ud83d\udd25",id:"new-features-",level:2},{value:"Reviewpad",id:"reviewpad",level:3},{value:"Aladino Built-ins",id:"aladino-built-ins",level:3},{value:"Functions",id:"functions",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"new-features-"},"New features \ud83d\udd25"),(0,a.kt)("h3",{id:"reviewpad"},"Reviewpad"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Feature: Support for workflows on issues using the ",(0,a.kt)("inlineCode",{parentName:"p"},"on")," field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"workflows"),". Check use case for workflow in issues ",(0,a.kt)("a",{parentName:"p",href:"/use-cases/check-issue-description"},"here"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Feature: All built-ins are now open source."))),(0,a.kt)("h3",{id:"aladino-built-ins"},"Aladino Built-ins"),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/guides/built-ins#lasteventat"},(0,a.kt)("inlineCode",{parentName:"a"},"lastEventAt"))," - Returns the timestamp of the last event in the timeline."))}c.isMDXComponent=!0}}]);