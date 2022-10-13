"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[20783],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,h=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(h,c(c({ref:n},p),{},{components:t})):r.createElement(h,c({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},21579:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={title:"Enforce branch conventions",id:"enforce-branch-conventions"},c=void 0,s={unversionedId:"use-cases/enforce-branch-conventions",id:"version-3.4.0/use-cases/enforce-branch-conventions",title:"Enforce branch conventions",description:"To maintain consistency of development and best practices of CI/CD, it is important to enforce a policy of branch naming.",source:"@site/versioned_docs/version-3.4.0/use-cases/enforce-branch-conventions.md",sourceDirName:"use-cases",slug:"/use-cases/enforce-branch-conventions",permalink:"/3.4.0/use-cases/enforce-branch-conventions",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/enforce-branch-conventions.md",tags:[],version:"3.4.0",frontMatter:{title:"Enforce branch conventions",id:"enforce-branch-conventions"},sidebar:"DocsSidebar",previous:{title:"Comment on pull requests",permalink:"/3.4.0/use-cases/comment-on-pull-requests"},next:{title:"Enforce conventional commits",permalink:"/3.4.0/use-cases/enforce-conventional-commits"}},i={},l=[{value:"Enforce branch name and add label based on branches",id:"enforce-branch-name-and-add-label-based-on-branches",level:2}],p={toc:l};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To maintain consistency of development and best practices of CI/CD, it is important to enforce a policy of branch naming."),(0,a.kt)("p",null,"Reviewpad can be used enforce a branch naming policy and also automatically add labels based on the branch names."),(0,a.kt)("h2",{id:"enforce-branch-name-and-add-label-based-on-branches"},"Enforce branch name and add label based on branches"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"api-version: reviewpad.com/v3.x\n\nlabels:\n  release-minor:\n    name: 'release:minor :hash::arrow_up::hash:'\n    description: Release the changes as a minor\n    color: 'E96F70'\n  release-patch:\n    name: 'release:patch :hash::hash::arrow_up:'\n    description: Release the changes as a patch\n    color: 'FF9085'\n  release-skip:\n    name: 'release:skip :hash::hash::hash:'\n    description: Do not release changes\n    color: 'FFE9DE'\n  type-bugfix:\n    name: 'type:bugfix :beetle:'\n    description: Provides a bug fix\n    color: 'F9B1C9'\n  type-enhancement:\n    name: 'type:enhancement :ok_hand:'\n    description: Provides an enhancement\n    color: '92E7F3'\n  type-feature:\n    name: 'type:feature :rocket:'\n    description: Provides a new feature\n    color: '65ECA3'\n  type-hotfix:\n    name: 'type:hotfix :ninja:'\n    description: Provides a hot fix\n    color: 'BBA7E4'\n  type-support:\n    name: 'type:support :hammer:'\n    description: Provides a misc change\n    color: 'CDDBDC'\n\nworkflows:\n  - name: enforce-branch-naming\n    if:\n      - rule: '$startsWith($head(), \"bugfix/\")'\n        extra-actions:\n          - '$addLabel(\"release-patch\")'\n          - '$addLabel(\"type-bugfix\")'\n      - rule: '$startsWith($head(), \"enhancement/\")'\n        extra-actions:\n          - '$addLabel(\"release-minor\")'\n          - '$addLabel(\"type-enhancement\")'\n      - rule: '$startsWith($head(), \"feature/\")'\n        extra-actions:\n          - '$addLabel(\"release-minor\")'\n          - '$addLabel(\"type-feature\")'\n      - rule: '$startsWith($head(), \"hotfix/\")'\n        extra-actions:\n          - '$addLabel(\"release-patch\")'\n          - '$addLabel(\"type-hotfix\")'\n      - rule: '$startsWith($head(), \"support/\")'\n        extra-actions:\n          - '$addLabel(\"release-patch\")'\n          - '$addLabel(\"type-support\")'\n\n  - name: default-policy\n    description: By default it will put a warning\n    if:\n      - 'true'\n    then:\n      - '$addLabel(\"needs-review\")'\n      - '$warn(\"All branches must use the following nomenclature: prefix/name where prefix can be one of: bugfix, enhancement, feature, hotfix or support.\")'\n\n  - name: require-linear-history\n    always-run: true\n    if:\n      - '!$hasLinearHistory()'\n    then:\n      - '$warn(\"This pull request does not have linear history - please fix this!\")'\n")))}d.isMDXComponent=!0}}]);