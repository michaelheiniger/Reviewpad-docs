"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[47049],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58739:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294);function o(e){let{url:t}=e;return n.createElement("div",{style:{position:"relative",paddingBottom:"62.5%",height:0}},n.createElement("iframe",{src:t,frameBorder:0,allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}))}},32675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(58739);const i={title:"VSCode Reviewpad YAML Schema",id:"vscode-reviewpad-yaml-schema"},c=void 0,l={unversionedId:"tooling/vscode-reviewpad-yaml-schema",id:"version-3.4.0/tooling/vscode-reviewpad-yaml-schema",title:"VSCode Reviewpad YAML Schema",description:"To minimise errors when editing Reviewpad files, you can setup the Reviewpad yml schema on VSCode.",source:"@site/versioned_docs/version-3.4.0/tooling/vscode-reviewpad-yaml-schema.mdx",sourceDirName:"tooling",slug:"/tooling/vscode-reviewpad-yaml-schema",permalink:"/3.4.0/tooling/vscode-reviewpad-yaml-schema",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/tooling/vscode-reviewpad-yaml-schema.mdx",tags:[],version:"3.4.0",frontMatter:{title:"VSCode Reviewpad YAML Schema",id:"vscode-reviewpad-yaml-schema"},sidebar:"DocsSidebar",previous:{title:"How to Contribute",permalink:"/3.4.0/contributing/how-to-contribute"}},s={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To minimise errors when editing Reviewpad files, you can setup the Reviewpad yml schema on VSCode. "),(0,o.kt)("p",null,"You just need to download the latest JSON schema from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/schemas/tree/main"},"schemas/reviewpad")," and add the following settings to your VSCode workspace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"settings": {\n    "yaml.schemas": {\n        "PATH/schema.json": [\n            "reviewpad.yml",\n        ]\n    }\n}\n')),(0,o.kt)("p",null,"Now, when you are editing you will be able to check if your Reviewpad file is syntactically correct, access the documentation and get auto-completion of certain fields."),(0,o.kt)(a.Z,{url:"https://www.loom.com/embed/5d10b9b6f9f4483b9820614da2f190ef",mdxType:"LoomVideo"}))}m.isMDXComponent=!0}}]);