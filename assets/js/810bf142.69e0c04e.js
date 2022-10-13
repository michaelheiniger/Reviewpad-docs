"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[88703],{74266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),s=n(90814);const l={},r=void 0,p={unversionedId:"guides/built-ins/actions/fail/index",id:"guides/built-ins/actions/fail/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/actions/fail/index.mdx",sourceDirName:"guides/built-ins/actions/fail",slug:"/guides/built-ins/actions/fail/",permalink:"/next/guides/built-ins/actions/fail/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/fail/index.mdx",tags:[],version:"current",frontMatter:{}},o={},m=[],u={toc:m};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Fails the action with a given fail message which will appear in the logs of the GitHub action."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fail_message")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The fail message.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$fail("please review the missing specs")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",mdxType:"CodeBlock"},"workflows:\n  - name: fail-on-missing-specs\n    description: Fails the action on missing specs\n    if:\n      - rule: missing-specs\n    then:\n      - '$fail(\"please review the missing specs\")'\n"))}d.isMDXComponent=!0}}]);