"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[68256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,y=f["".concat(a,".").concat(m)]||f[m]||c[m]||l;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const l={title:"Notify when long live pull request",id:"notify-when-long-live-pull-request",slug:"/use-cases/notify-when-long-live-pull-request"},i=void 0,s={unversionedId:"use-cases/timestamps/notify-when-long-live-pull-request",id:"version-3.4.0/use-cases/timestamps/notify-when-long-live-pull-request",title:"Notify when long live pull request",description:"Here's an example of notifying the pull request author when the pull request has been opened for a long time.",source:"@site/versioned_docs/version-3.4.0/use-cases/timestamps/notify-when-long-live-pull-request.md",sourceDirName:"use-cases/timestamps",slug:"/use-cases/notify-when-long-live-pull-request",permalink:"/3.4.0/use-cases/notify-when-long-live-pull-request",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/timestamps/notify-when-long-live-pull-request.md",tags:[],version:"3.4.0",frontMatter:{title:"Notify when long live pull request",id:"notify-when-long-live-pull-request",slug:"/use-cases/notify-when-long-live-pull-request"},sidebar:"DocsSidebar",previous:{title:"Label on change freeze",permalink:"/3.4.0/use-cases/label-on-change-freeze"},next:{title:"How to Contribute",permalink:"/3.4.0/contributing/how-to-contribute"}},a={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here's an example of notifying the pull request author when the pull request has been opened for a long time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: longLiveChange\n    kind: patch\n    description: PR has been open for more than 15 days\n    spec: $createdAt() < 15 days ago\n\nworkflows:\n  - name: notify-long-live-pr\n    description: Notify author when long live PR\n    if:\n      - rule: longLiveChange\n    then:\n      - $comment("This PR has been opened for more than 15 days. Please consider closing it!")\n')))}c.isMDXComponent=!0}}]);