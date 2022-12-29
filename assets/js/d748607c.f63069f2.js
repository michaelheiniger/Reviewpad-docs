"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64174],{94742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),l=n(90814);const s={},r=void 0,o={unversionedId:"guides/built-ins/functions/filesPath/index",id:"version-3.20.0/guides/built-ins/functions/filesPath/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.20.0/guides/built-ins/functions/filesPath/index.mdx",sourceDirName:"guides/built-ins/functions/filesPath",slug:"/guides/built-ins/functions/filesPath/",permalink:"/guides/built-ins/functions/filesPath/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/filesPath/index.mdx",tags:[],version:"3.20.0",frontMatter:{}},p={},d=[],u={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the list of all file paths changed in the pull request."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This buit-in is ",(0,i.kt)("strong",{parentName:"p"},"not")," available for ",(0,i.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,i.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"A list of all file paths changed files in the patch.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$filesPath()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(l.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: binary-files-not-allowed\n    if:\n      - '$any($filesPath(), ($filePath: String => $isBinary($filePath)))'\n    then:\n      - $fail(\"Binary files are not allowed.\")\n"))}m.isMDXComponent=!0}}]);