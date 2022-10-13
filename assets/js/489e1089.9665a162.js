"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[59492],{58668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=n(87462),a=(n(67294),n(3905)),r=n(90814);const s={},l=void 0,o={unversionedId:"guides/built-ins/functions/hasLinearHistory/index",id:"version-3.10.0/guides/built-ins/functions/hasLinearHistory/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.10.0/guides/built-ins/functions/hasLinearHistory/index.mdx",sourceDirName:"guides/built-ins/functions/hasLinearHistory",slug:"/guides/built-ins/functions/hasLinearHistory/",permalink:"/guides/built-ins/functions/hasLinearHistory/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasLinearHistory/index.mdx",tags:[],version:"3.10.0",frontMatter:{}},p={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Checks if a pull request has a linear history."),(0,a.kt)("p",null,"A linear history is simply a Git history in which all commits come after one another, i.e., you will not find any merges of branches with independent commit histories."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the pull request has a linear history, ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$hasLinearHistory()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},"rules:\n  - name: has-linear-history\n    kind: patch\n    description: Verifies if the pull request has a linear history\n    spec: '$hasLinearHistory()'\n"))}m.isMDXComponent=!0}}]);