"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[10257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=s,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const o={id:"ship-show-ask",slug:"ship-show-ask",title:"Ship/Show/Ask"},a=void 0,i={unversionedId:"use-cases/ship-show-ask",id:"version-3.9.0/use-cases/ship-show-ask",title:"Ship/Show/Ask",description:"Ship/Show/Ask is a methodology to increase the pace of software teams by not having to block developers for each pull request.",source:"@site/versioned_docs/version-3.9.0/use-cases/ship-show-ask.md",sourceDirName:"use-cases",slug:"/use-cases/ship-show-ask",permalink:"/3.9.0/use-cases/ship-show-ask",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/ship-show-ask.md",tags:[],version:"3.9.0",frontMatter:{id:"ship-show-ask",slug:"ship-show-ask",title:"Ship/Show/Ask"},sidebar:"DocsSidebar",previous:{title:"Assign reviewers in a sequence",permalink:"/3.9.0/use-cases/assign-sequential-reviewers"},next:{title:"Stale Issues or Pull Requests",permalink:"/3.9.0/use-cases/stale-issues-or-pull-requests"}},l={},p=[{value:"Know more",id:"know-more",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Ship/Show/Ask")," is a methodology to increase the pace of software teams by not having to block developers for each pull request."),(0,s.kt)("p",null,"It can easily be implemented with this new solution by specifying policies for teams to allow them to automatically merge certain PRs."),(0,s.kt)("p",null,"Here's an example of a ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file that we use in our team to automate these three processes."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"api-version: reviewpad.com/v3.x\n\nlabels:\n  ask:\n    color: 'fd5e53'\n  show:\n    color: 'ffd800'\n  ship:\n    color: '76dbbe'\n\ngroups:\n  - name: juniors\n    kind: developers\n    type: filter\n    param: developer\n    where: '$totalCreatedPullRequests($developer) < 10'\n\nworkflows:\n  - name: ask\n  description: Ask process - request a review before merge\n    if:\n      - '$hasFileName(\"main.js\")'\n      - '$fileCount() > 5'\n      - '$isElementOf($author(), $group(\"juniors\"))'\n    then:\n      - '$addLabel(\"ask\")'\n      - '$assignRandomReviewer()'\n\n  - name: show\n    description: Show process - auto-merge and later review\n    if:\n      - rule: '$hasFileExtensions([\".md\"])'\n        extra-actions:\n          - '$assignReviewer($group(\"seniors\"))'\n      - '$hasFileExtensions([\".test.ts\"])'\n    then:\n      - '$addLabel(\"show\")'\n      - '$merge(\"rebase\")'\n\n  - name: ship\n    description: Ship process - auto-merge without need for review\n    if:\n      - '$size() < 50'\n    then:\n      - '$addLabel(\"ship\")'\n      - '$merge(\"rebase\")'\n")),(0,s.kt)("h3",{id:"know-more"},"Know more"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://martinfowler.com/articles/ship-show-ask.html"},"Ship/Show/Ask methodology"))))}u.isMDXComponent=!0}}]);