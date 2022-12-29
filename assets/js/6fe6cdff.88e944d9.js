"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92066],{58547:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=a(87462),t=(a(67294),a(3905)),l=a(90814);const o={title:"Label on change freeze",id:"label-on-change-freeze",slug:"/use-cases/label-on-change-freeze"},r=void 0,c={unversionedId:"use-cases/timestamps/label-on-change-freeze/label-on-change-freeze",id:"version-3.19.0/use-cases/timestamps/label-on-change-freeze/label-on-change-freeze",title:"Label on change freeze",description:"An example of adding a label to not merge a pull request when on change freeze.",source:"@site/versioned_docs/version-3.19.0/use-cases/timestamps/label-on-change-freeze/index.mdx",sourceDirName:"use-cases/timestamps/label-on-change-freeze",slug:"/use-cases/label-on-change-freeze",permalink:"/3.19.0/use-cases/label-on-change-freeze",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/timestamps/label-on-change-freeze/index.mdx",tags:[],version:"3.19.0",frontMatter:{title:"Label on change freeze",id:"label-on-change-freeze",slug:"/use-cases/label-on-change-freeze"},sidebar:"DocsSidebar",previous:{title:"Timestamps",permalink:"/3.19.0/use-cases/timestamps"},next:{title:"Notify when long live pull request",permalink:"/3.19.0/use-cases/notify-when-long-live-pull-request"}},i={},d=[],m={toc:d};function u(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,s.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"An example of adding a label to not merge a pull request when on change freeze."),(0,t.kt)(l.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  do-not-merge:\n    color: 294b69\n\nrules:\n  - name: is-change-freeze\n    spec: $createdAt() >= 2022-04-05 && $createdAt() <= 2022-04-15\n\nworkflows:\n  - name: change-freeze\n    if:\n      - rule: is-change-freeze\n    then:\n      - $addLabel("do-not-merge")\n'))}u.isMDXComponent=!0}}]);