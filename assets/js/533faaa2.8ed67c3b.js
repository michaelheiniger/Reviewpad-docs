"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[9172],{93762:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),i=a(90814);const s={},l=void 0,o={unversionedId:"guides/built-ins/functions/reviewerStatus/index",id:"guides/built-ins/functions/reviewerStatus/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/reviewerStatus/index.mdx",sourceDirName:"guides/built-ins/functions/reviewerStatus",slug:"/guides/built-ins/functions/reviewerStatus/",permalink:"/next/guides/built-ins/functions/reviewerStatus/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/reviewerStatus/index.mdx",tags:[],version:"current",frontMatter:{}},p={},u=[],d={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Retrieves the status of a reviewer in the pull request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reviewer_login")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The GitHub login of the reviewer.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The status of a reviewer. It can be one of four string values: ",(0,r.kt)("inlineCode",{parentName:"td"},'""'),", if there was no review from the reviewer; ",(0,r.kt)("inlineCode",{parentName:"td"},'"COMMENTED"'),", if all the reviews from the reviewer were comments; ",(0,r.kt)("inlineCode",{parentName:"td"},'"CHANGES_REQUESTED"'),", if the last review, that was not a comment, requested changes; ",(0,r.kt)("inlineCode",{parentName:"td"},'"APPROVED"'),", if the last review that was not a comment requested changes.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$reviewerStatus("marcelosousa")\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},'rules:\n  - name: approved-by-marcelosousa\n    kind: patch\n    description: Checks if the pull request was approved by marcelosousa\n    spec: \'$reviewerStatus("marcelosousa") == "APPROVED"\'\n'))}m.isMDXComponent=!0}}]);