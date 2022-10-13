"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[42045],{76320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),s=n(90814);const l={},r=void 0,o={unversionedId:"guides/built-ins/actions/disableActions/index",id:"version-3.10.0/guides/built-ins/actions/disableActions/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.10.0/guides/built-ins/actions/disableActions/index.mdx",sourceDirName:"guides/built-ins/actions/disableActions",slug:"/guides/built-ins/actions/disableActions/",permalink:"/guides/built-ins/actions/disableActions/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/disableActions/index.mdx",tags:[],version:"3.10.0",frontMatter:{}},d={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Disables the list of actions passed as an argument."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"actions")),(0,i.kt)("td",{parentName:"tr",align:null},"[","]string"),(0,i.kt)("td",{parentName:"tr",align:null},"The list of actions to be disabled.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$disableActions(["assignReviewer"])\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",mdxType:"CodeBlock"},'workflows:\n  - name: reviewer-assignment-config\n    if:\n      - rule: is-draft\n    then:\n      - \'$disableActions(["assignReviewer", "assignTeamReviewer", "assignRandomReviewer"])\'\n'))}c.isMDXComponent=!0}}]);