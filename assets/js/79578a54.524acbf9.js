"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[20883],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=s,d=u["".concat(o,".").concat(g)]||u[g]||m[g]||r;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7250:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(87462),s=(t(67294),t(3905));const r={title:"Label potential missing changes",id:"label-potential-missing-changes",slug:"/use-cases/label-potential-missing-changes"},i=void 0,l={unversionedId:"use-cases/automated-labelling/label-potential-missing-changes",id:"version-3.8.0/use-cases/automated-labelling/label-potential-missing-changes",title:"Label potential missing changes",description:"It is fairly common that changes in some files imply changes in other files.",source:"@site/versioned_docs/version-3.8.0/use-cases/automated-labelling/label-potential-missing-changes.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/label-potential-missing-changes",permalink:"/3.8.0/use-cases/label-potential-missing-changes",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-potential-missing-changes.md",tags:[],version:"3.8.0",frontMatter:{title:"Label potential missing changes",id:"label-potential-missing-changes",slug:"/use-cases/label-potential-missing-changes"},sidebar:"DocsSidebar",previous:{title:"Label critical changes with semantic code annotations",permalink:"/3.8.0/use-cases/label-critical-changes-with-semantic-code-annotations"},next:{title:"Remove label based on file paths",permalink:"/3.8.0/use-cases/remove-label-based-on-file-paths"}},o={},c=[],p={toc:c};function m(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"It is fairly common that changes in some files imply changes in other files."),(0,s.kt)("p",null,"As an example, modifying files in the ",(0,s.kt)("em",{parentName:"p"},"src")," directory might need changes in the ",(0,s.kt)("em",{parentName:"p"},"docs")," directory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  missing-specs:\n    description: Likely missing specs\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "294b69"\n\nrules:\n  - name: codeChangesImplySpecChanges\n    kind: patch\n    description: Changes to src and not to spec\n    spec: $hasFilePattern("src/**") && !$hasFilePattern("docs/**")\n\nworkflows:\n  - name: check-for-specs\n    description: Check for specs\n    if:\n      - rule: codeChangesImplySpecChanges\n    then:\n      - $addLabel("missing-specs")\n')),(0,s.kt)("p",null,"You can see this policy in the following pull request ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/action-demo/pull/2"},"reviewpad/action-demo/#2"),"."))}m.isMDXComponent=!0}}]);