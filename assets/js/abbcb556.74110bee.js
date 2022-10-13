"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[82225],{21960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var l=t(87462),s=(t(67294),t(3905)),o=t(90814);const i={title:"Notify when long live pull request",id:"notify-when-long-live-pull-request",slug:"/use-cases/notify-when-long-live-pull-request"},u=void 0,r={unversionedId:"use-cases/timestamps/notify-when-long-live-pull-request/notify-when-long-live-pull-request",id:"use-cases/timestamps/notify-when-long-live-pull-request/notify-when-long-live-pull-request",title:"Notify when long live pull request",description:"An example of notifying the pull request author when the pull request has been opened for a long time.",source:"@site/docs/use-cases/timestamps/notify-when-long-live-pull-request/index.mdx",sourceDirName:"use-cases/timestamps/notify-when-long-live-pull-request",slug:"/use-cases/notify-when-long-live-pull-request",permalink:"/next/use-cases/notify-when-long-live-pull-request",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/timestamps/notify-when-long-live-pull-request/index.mdx",tags:[],version:"current",frontMatter:{title:"Notify when long live pull request",id:"notify-when-long-live-pull-request",slug:"/use-cases/notify-when-long-live-pull-request"},sidebar:"DocsSidebar",previous:{title:"Label on change freeze",permalink:"/next/use-cases/label-on-change-freeze"},next:{title:"How to Contribute",permalink:"/next/contributing/how-to-contribute"}},a={},p=[],c={toc:p};function h(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"An example of notifying the pull request author when the pull request has been opened for a long time."),(0,s.kt)(o.Z,{language:"yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nrules:\n  - name: long-live-change\n    kind: patch\n    description: Pull request has been opened for more than 15 days\n    spec: '$createdAt() < 15 days ago'\n\nworkflows:\n  - name: notify-long-live-pr\n    description: Notify author when long live pull request\n    if:\n      - rule: long-live-change\n    then:\n      - '$comment(\"This pull request has been opened for more than 15 days. Please consider closing it!\")'\n"))}h.isMDXComponent=!0}}]);