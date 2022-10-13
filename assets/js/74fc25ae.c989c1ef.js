"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[30825],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>m});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),s=t;return e&&(s="function"==typeof e?e(t):l(l({},t),e)),s},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(s),m=a,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return s?n.createElement(f,l(l({ref:t},c),{},{components:s})):n.createElement(f,l({ref:t},c))}));function m(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,l=new Array(r);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=s[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},50738:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=s(87462),a=(s(67294),s(3905));const r={title:"Stale Issues or Pull Requests",id:"stale-issues-or-pull-requests"},l=void 0,i={unversionedId:"use-cases/stale-issues-or-pull-requests",id:"version-3.5.0/use-cases/stale-issues-or-pull-requests",title:"Stale Issues or Pull Requests",description:"A stale issue / pull request is one which does not have activity for X time duration.",source:"@site/versioned_docs/version-3.5.0/use-cases/stale-issues-pull-requests.md",sourceDirName:"use-cases",slug:"/use-cases/stale-issues-or-pull-requests",permalink:"/3.5.0/use-cases/stale-issues-or-pull-requests",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/stale-issues-pull-requests.md",tags:[],version:"3.5.0",frontMatter:{title:"Stale Issues or Pull Requests",id:"stale-issues-or-pull-requests"},sidebar:"DocsSidebar",previous:{title:"Ship/Show/Ask",permalink:"/3.5.0/use-cases/ship-show-ask"},next:{title:"Timestamps",permalink:"/3.5.0/use-cases/timestamps/"}},o={},u=[{value:"Add stale label to an issue / pull request and close it if it remains inactive after stale labeling",id:"add-stale-label-to-an-issue--pull-request-and-close-it-if-it-remains-inactive-after-stale-labeling",level:2},{value:"Reviewpad Action",id:"reviewpad-action",level:2}],c={toc:u};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"stale issue / pull request")," is one which does not have activity for X time duration."),(0,a.kt)("h2",{id:"add-stale-label-to-an-issue--pull-request-and-close-it-if-it-remains-inactive-after-stale-labeling"},"Add stale label to an issue / pull request and close it if it remains inactive after stale labeling"),(0,a.kt)("p",null,"The following configuration checks for a non-stale issue/pull request if it has been inactive for more than one month then add the stale label."),(0,a.kt)("p",null,"If after this labeling, the stale issue/pull request remains inactive for more 7 days, then a comment to the issue/pull request is made, notifying of the inactivity, and closes it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"reviewpad.yml","reviewpad.yml":!0},'api-version: reviewpad.com/v3.x\n\nlabels:\n  stale-label:\n    name: stale\n    description: Stale issue/pull request\n\nrules:\n  - name: labeled-as-stale\n    kind: patch\n    description: Issue/Pull request has stale label\n    spec: \'$isElementOf("stale", $labels())\'\n\nworkflows:\n  - name: stale-issue-or-pr-handling\n    on:\n      - "issue"\n      - "pull_request"\n    if:\n      - rule: \'!$rule("labeled-as-stale") && $lastEventAt() < 30 days ago\'\n        extra-actions:\n          - \'$info("This issue is stale.")\'\n          - \'$addLabel("stale-label")\'\n      - rule: \'$rule("labeled-as-stale") && $lastEventAt() < 7 days ago\'\n        extra-actions:\n          - \'$commentOnce("Closing because this issue has been inactive for more than one month.")\'\n          - \'$close()\'\n')),(0,a.kt)("h2",{id:"reviewpad-action"},"Reviewpad Action"),(0,a.kt)("p",null,"In order to have the automation for ",(0,a.kt)("inlineCode",{parentName:"p"},"stale issues / pull requests")," working properly we need to update our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/reviewpad-action"},"reviewpad action")," by adding a cron job to schedule the stale test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"reviewpad.yml","reviewpad.yml":!0},'name: Reviewpad\n\non:\n  schedule:\n    # Run every day at midnight\n    - cron: "0 0 * * *"\n\njobs:\n  reviewpad:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Reviewpad\n        uses: reviewpad/action@v3.x\n')))}p.isMDXComponent=!0}}]);