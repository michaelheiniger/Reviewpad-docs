"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[56610],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||c;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},66080:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const c={id:"label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern",title:"Label critical changes with code pattern"},i=void 0,o={unversionedId:"use-cases/automated-labelling/label-critical-changes-with-code-pattern",id:"version-3.9.0/use-cases/automated-labelling/label-critical-changes-with-code-pattern",title:"Label critical changes with code pattern",description:"The hasCodePattern built-in allows you to query the code contained in the diff to understand if, for example, particular function calls were changed or sensitive data (such as passwords or access tokens) are being explicitly added to the code.",source:"@site/versioned_docs/version-3.9.0/use-cases/automated-labelling/label-critical-changes-with-code-pattern.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/label-critical-changes-with-code-pattern",permalink:"/3.9.0/use-cases/label-critical-changes-with-code-pattern",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-critical-changes-with-code-pattern.md",tags:[],version:"3.9.0",frontMatter:{id:"label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern",title:"Label critical changes with code pattern"},sidebar:"DocsSidebar",previous:{title:"Label based on file paths",permalink:"/3.9.0/use-cases/label-based-on-file-paths"},next:{title:"Label critical changes with semantic code annotations",permalink:"/3.9.0/use-cases/label-critical-changes-with-semantic-code-annotations"}},l={},s=[],d={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/guides/built-ins#hascodepattern"},"hasCodePattern")," built-in allows you to query the code contained in the diff to understand if, for example, particular function calls were changed or sensitive data (such as passwords or access tokens) are being explicitly added to the code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  critical:\n    description: Critical code\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "fd5e53"\n\nrules:\n  - name: callsQuicksort\n    kind: patch\n    description: Patch contains the keyword quicksort\n    spec: $hasCodePattern("quicksort")\n\nworkflows:\n  - name: critical\n    description: Modifications of critical code require careful review\n    if:\n      - rule: callsQuicksort\n    then:\n      - $addLabel("critical")\n')))}u.isMDXComponent=!0}}]);