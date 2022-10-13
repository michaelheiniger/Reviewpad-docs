"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[41160],{79596:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var n=s(87462),a=(s(67294),s(3905)),i=s(90814);const r={},l=void 0,u={unversionedId:"guides/built-ins/actions/assignAssignees/index",id:"guides/built-ins/actions/assignAssignees/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/actions/assignAssignees/index.mdx",sourceDirName:"guides/built-ins/actions/assignAssignees",slug:"/guides/built-ins/actions/assignAssignees/",permalink:"/next/guides/built-ins/actions/assignAssignees/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/assignAssignees/index.mdx",tags:[],version:"current",frontMatter:{}},o={},p=[],g={toc:p};function d(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Assigns up to 10 assignees to a pull request."),(0,a.kt)("p",null,"Users already assigned to a pull request are not replaced."),(0,a.kt)("p",null,"Only users with push access can assign users to a pull request. Otherwise, assignees are silently ignored."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"assignees")),(0,a.kt)("td",{parentName:"tr",align:null},"[","]string"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of GitHub logins to assign the pull request to.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'$assignAssignees(["john", "marie", "peter"])\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},"workflows:\n  - name: assign-to-author\n    description: Assign pull request to author\n    always-run: true\n    then:\n      - '$assignAssignees([$author()])'\n"))}d.isMDXComponent=!0}}]);