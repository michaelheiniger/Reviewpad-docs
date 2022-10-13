"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[55013],{46049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),i=r(90814);const s={},o=void 0,l={unversionedId:"guides/built-ins/actions/error/index",id:"version-3.10.0/guides/built-ins/actions/error/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.10.0/guides/built-ins/actions/error/index.mdx",sourceDirName:"guides/built-ins/actions/error",slug:"/guides/built-ins/actions/error/",permalink:"/guides/built-ins/actions/error/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/error/index.mdx",tags:[],version:"3.10.0",frontMatter:{}},d={},p=[],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Add a message to the errors section of the report."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"comment")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The comment to be added in the errors.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'$error("Please do not touch these files.")\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},"workflows:\n  - name: error-large-pull-requests\n    description: Error about large pull requests\n    if:\n      - rule: is-large\n    then:\n      - '$error(\"This pull request was considered too large.\")'\n"))}m.isMDXComponent=!0}}]);