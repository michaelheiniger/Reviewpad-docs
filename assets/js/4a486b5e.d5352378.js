"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37219],{1e4:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),o=n(90814);const r={},p=void 0,s={unversionedId:"guides/built-ins/functions/approvalsCount/index",id:"version-3.20.0/guides/built-ins/functions/approvalsCount/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.20.0/guides/built-ins/functions/approvalsCount/index.mdx",sourceDirName:"guides/built-ins/functions/approvalsCount",slug:"/guides/built-ins/functions/approvalsCount/",permalink:"/guides/built-ins/functions/approvalsCount/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/approvalsCount/index.mdx",tags:[],version:"3.20.0",frontMatter:{}},l={},u=[],d={toc:u};function m(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the total number of approvals for a pull request."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This built-in is ",(0,i.kt)("strong",{parentName:"p"},"not")," available for ",(0,i.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,i.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The total number of approvals the pull request has received.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$approvalsCount()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: auto-merge\n    if:\n      - $approvalsCount() > 2\n    then:\n      - $merge()\n"))}m.isMDXComponent=!0}}]);