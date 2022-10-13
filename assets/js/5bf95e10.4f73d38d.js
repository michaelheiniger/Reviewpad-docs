"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[40169],{49068:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var i=n(87462),a=(n(67294),n(3905)),o=n(90814);const s={},r=void 0,m={unversionedId:"guides/built-ins/functions/commitCount/index",id:"version-3.10.0/guides/built-ins/functions/commitCount/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.10.0/guides/built-ins/functions/commitCount/index.mdx",sourceDirName:"guides/built-ins/functions/commitCount",slug:"/guides/built-ins/functions/commitCount/",permalink:"/guides/built-ins/functions/commitCount/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/commitCount/index.mdx",tags:[],version:"3.10.0",frontMatter:{}},l={},u=[],p={toc:u};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Retrieves the total number of commits made into the pull request."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"int")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The total number of commits in the pull request.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$commitCount()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(o.Z,{language:"yml",mdxType:"CodeBlock"},"rules:\n  - name: has-too-many-commits\n    kind: patch\n    description: Verifies if the pull request has more than 3 commits\n    spec: '$commitCount() > 3'\n"))}c.isMDXComponent=!0}}]);