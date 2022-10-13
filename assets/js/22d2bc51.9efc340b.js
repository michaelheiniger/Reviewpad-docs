"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[56899],{43617:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var a=n(87462),l=(n(67294),n(3905)),i=n(90814);const r={},s=void 0,u={unversionedId:"guides/built-ins/functions/totalCreatedPullRequests/index",id:"guides/built-ins/functions/totalCreatedPullRequests/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/totalCreatedPullRequests/index.mdx",sourceDirName:"guides/built-ins/functions/totalCreatedPullRequests",slug:"/guides/built-ins/functions/totalCreatedPullRequests/",permalink:"/next/guides/built-ins/functions/totalCreatedPullRequests/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/totalCreatedPullRequests/index.mdx",tags:[],version:"current",frontMatter:{}},o={},p=[],d={toc:p};function m(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description"),":"),(0,l.kt)("p",null,"Retrieves the total number of pull requests created by the given GitHub user login."),(0,l.kt)("admonition",{title:"INFO",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This built-in will be deprecated in the upcoming 4.x series as it."),(0,l.kt)("p",{parentName:"admonition"},"Replace its usage by ",(0,l.kt)("inlineCode",{parentName:"p"},'$pullRequestCountBy(CURRENT_ARGUMENT, "all")'),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"user_login")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The GitHub user login.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The total number of pull requests created by the GitHub user login.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"$totalCreatedPullRequests($author())\n")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,l.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},"rules:\n  - name: is-junior\n    kind: patch\n    description: Verifies if author is junior\n    spec: '$totalCreatedPullRequests($author()) < 3'\n"))}m.isMDXComponent=!0}}]);