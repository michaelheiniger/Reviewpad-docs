"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[50451],{52236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var s=n(87462),i=(n(67294),n(3905)),a=n(90814);const r={},l=void 0,o={unversionedId:"guides/built-ins/functions/assignees/index",id:"version-3.10.0/guides/built-ins/functions/assignees/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.10.0/guides/built-ins/functions/assignees/index.mdx",sourceDirName:"guides/built-ins/functions/assignees",slug:"/guides/built-ins/functions/assignees/",permalink:"/guides/built-ins/functions/assignees/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/assignees/index.mdx",tags:[],version:"3.10.0",frontMatter:{}},p={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the list of GitHub user logins that are assigned to the pull request."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub user logins that are assigned to the pull request.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$assignees()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(a.Z,{language:"yml",mdxType:"CodeBlock"},"rules:\n  - name: assigned-to-tech-lead\n    kind: patch\n    description: Verifies if pull request was assigned only to a specific tech lead\n    spec: '$assignees() == [\"john\"]'\n"))}m.isMDXComponent=!0}}]);