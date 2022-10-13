"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[72462],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Introduction",id:"introduction",slug:"/"},i=void 0,l={unversionedId:"introduction",id:"version-3.2.0/introduction",title:"Introduction",description:"Reviewpad is an easy-to-use GitHub Action to accelerate the software delivery lifecycle.",source:"@site/versioned_docs/version-3.2.0/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/3.2.0/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/introduction.mdx",tags:[],version:"3.2.0",frontMatter:{title:"Introduction",id:"introduction",slug:"/"},sidebar:"DocsSidebar",next:{title:"Installation",permalink:"/3.2.0/getting-started/installation"}},s={},c=[{value:"\u26a1 <strong>Reviewpad is an easy-to-use GitHub Action</strong> to accelerate the software delivery lifecycle.",id:"-reviewpad-is-an-easy-to-use-github-action-to-accelerate-the-software-delivery-lifecycle",level:4},{value:"Why Reviewpad? \ud83d\ude0d",id:"why-reviewpad-",level:2},{value:"<strong>Pull requests take too much time to merge.</strong>",id:"pull-requests-take-too-much-time-to-merge",level:4}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"-reviewpad-is-an-easy-to-use-github-action-to-accelerate-the-software-delivery-lifecycle"},"\u26a1 ",(0,o.kt)("strong",{parentName:"h4"},"Reviewpad is an easy-to-use GitHub Action")," to accelerate the software delivery lifecycle."),(0,o.kt)("p",null,"Reviewpad reads a ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file from your repository. "),(0,o.kt)("p",null,"This configuration is where you can specify your pull request workflows."),(0,o.kt)("p",null,"The action enforces and automates those processes so that developers can have more time for the things that really matter!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Reviewpad Example",src:r(46321).Z,width:"3070",height:"2406"})),(0,o.kt)("h2",{id:"why-reviewpad-"},"Why Reviewpad? \ud83d\ude0d"),(0,o.kt)("h4",{id:"pull-requests-take-too-much-time-to-merge"},(0,o.kt)("strong",{parentName:"h4"},"Pull requests take too much time to merge.")),(0,o.kt)("p",null,"Most actions around pull requests such as reviewer assignment, the code review itself and the merge actions are still manual. "),(0,o.kt)("p",null,"It is up to the developers to understand"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Who")," should review;"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"What")," to review;"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"When")," to merge;"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"How")," to merge;")),(0,o.kt)("p",null,"\ud83d\udcaa ",(0,o.kt)("strong",{parentName:"p"},"We believe that most of these actions follow an implicit team policy that could be specified and automated.")),(0,o.kt)("p",null,"So we have created Reviewpad to help you automate:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pull request ",(0,o.kt)("strong",{parentName:"li"},"merges"),";"),(0,o.kt)("li",{parentName:"ol"},"Code ",(0,o.kt)("strong",{parentName:"li"},"review assignment")," policies;"),(0,o.kt)("li",{parentName:"ol"},"Custom ",(0,o.kt)("strong",{parentName:"li"},"code quality")," and ",(0,o.kt)("strong",{parentName:"li"},"security")," comments;"),(0,o.kt)("li",{parentName:"ol"},"Pull request ",(0,o.kt)("strong",{parentName:"li"},"labels"),".")),(0,o.kt)("p",null,"Finally, having workflow configurations in a git repository allows them to be updated in a consistent way and help onboarding new team members."))}p.isMDXComponent=!0},46321:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/reviewpad_preview_2x-29e0b8673e1081e4922522911fb4d201.png"}}]);