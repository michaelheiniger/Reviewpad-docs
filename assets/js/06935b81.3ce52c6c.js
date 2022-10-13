"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[60871],{52199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>o,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(87462),l=(n(67294),n(3905)),r=n(90814);const i={},s=void 0,p={unversionedId:"guides/built-ins/functions/rule/index",id:"guides/built-ins/functions/rule/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/rule/index.mdx",sourceDirName:"guides/built-ins/functions/rule",slug:"/guides/built-ins/functions/rule/",permalink:"/next/guides/built-ins/functions/rule/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/rule/index.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],d={toc:m};function o(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description"),":"),(0,l.kt)("p",null,"Evaluates a rule. This rule needs to be defined in the same ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"rule_name")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The rule name.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return value"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The evaluation of the rule.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"'$rule(\"is-small\")'\n")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,l.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},"rules:\n  - name: is-small\n    description: Small pull request\n    kind: patch\n    spec: '$size() < 10'\n\n  - name: is-not-small\n    description: Not a small pull request\n    kind: patch\n    spec: '!$rule(\"is-small\")'\n"))}o.isMDXComponent=!0}}]);