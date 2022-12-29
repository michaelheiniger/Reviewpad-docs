"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40577],{257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const s={},o=void 0,l={unversionedId:"guides/built-ins/actions/merge/index",id:"version-3.20.0/guides/built-ins/actions/merge/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.20.0/guides/built-ins/actions/merge/index.mdx",sourceDirName:"guides/built-ins/actions/merge",slug:"/guides/built-ins/actions/merge/",permalink:"/guides/built-ins/actions/merge/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/merge/index.mdx",tags:[],version:"3.20.0",frontMatter:{}},p={},m=[],d={toc:m};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Merges a pull request with a specific merge method."),(0,i.kt)("p",null,"By default, this action is only enabled for open pull requests that are not draft."),(0,i.kt)("p",null,"Also, by default, if no parameter is provided, it will perform a standard git merge."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This buit-in is ",(0,i.kt)("strong",{parentName:"p"},"not")," available for ",(0,i.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,i.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"method")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The merge method (merge, rebase or squash).")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$merge()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: only-changes-documentation\n    spec: $hasFileExtensions([".md"])\n\nworkflows:\n  - name: merge\n    if:\n      - rule: only-changes-documentation\n    then:\n      - $merge()\n\n'))}u.isMDXComponent=!0}}]);