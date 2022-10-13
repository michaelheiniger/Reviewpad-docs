"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[70925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={title:"Remove label based on file paths",id:"remove-label-based-on-file-paths",slug:"/use-cases/remove-label-based-on-file-paths"},o=void 0,l={unversionedId:"use-cases/automated-labelling/remove-label-based-on-file-paths",id:"version-3.7.0/use-cases/automated-labelling/remove-label-based-on-file-paths",title:"Remove label based on file paths",description:"Here's an example of a reviewpad.yml configuration that removes a label from a pull request that contains the proper changes based on the file path.",source:"@site/versioned_docs/version-3.7.0/use-cases/automated-labelling/remove-label-based-on-file-paths.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/remove-label-based-on-file-paths",permalink:"/3.7.0/use-cases/remove-label-based-on-file-paths",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/remove-label-based-on-file-paths.md",tags:[],version:"3.7.0",frontMatter:{title:"Remove label based on file paths",id:"remove-label-based-on-file-paths",slug:"/use-cases/remove-label-based-on-file-paths"},sidebar:"DocsSidebar",previous:{title:"Label potential missing changes",permalink:"/3.7.0/use-cases/label-potential-missing-changes"},next:{title:"Attention Set",permalink:"/3.7.0/use-cases/attention-set"}},i={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here's an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration that removes a label from a pull request that contains the proper changes based on the file path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  missing-tests:\n    description: Change misses the test specification\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "fd5e53"\n\nrules:\n  - name: codeChangesWithoutTests\n    kind: patch\n    description: Changes to src and not to test files\n    spec: $hasFilePattern("src/**") && !$hasFilePattern("*_test.go")\n  - name: codeChangesWithTests\n    kind: patch\n    description: Changes to src and to test files\n    spec: $hasFilePattern("src/**") && $hasFilePattern("*_test.go")\n\nworkflows:\n  - name: requireTests\n    description: Tests are required\n    if:\n      - rule: codeChangesWithoutTests\n    then:\n      - $addLabel("missing-tests")\n  - name: clean\n    description: Clean up process\n    if:\n      - rule: codeChangesWithTests\n    then:\n      - $removeLabel("missing-tests")\n')))}u.isMDXComponent=!0}}]);