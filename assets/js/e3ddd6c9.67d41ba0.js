"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[33538],{79249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const l={},s=void 0,p={unversionedId:"guides/built-ins/functions/changed/index",id:"guides/built-ins/functions/changed/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/changed/index.mdx",sourceDirName:"guides/built-ins/functions/changed",slug:"/guides/built-ins/functions/changed/",permalink:"/next/guides/built-ins/functions/changed/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/changed/index.mdx",tags:[],version:"current",frontMatter:{}},d={},o=[],m={toc:o};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"changed")," built-in receives two regexes with named capturing groups denoted by the ",(0,i.kt)("inlineCode",{parentName:"p"},"@X")," pattern."),(0,i.kt)("p",null,"These regexes are matched against the set of files in the patch."),(0,i.kt)("p",null,"The built-in checks if the value set of the first regex is contained in the second one."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"pre_file_pattern")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The antecedent file pattern expression.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"post_file_pattern")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The consequent file pattern expression.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if the value set of the first regex is contained in the second one, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$changed("@1.go", "@1.md")\n')),(0,i.kt)("p",null,"This spec will return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if for each file in the patch with the extension ",(0,i.kt)("inlineCode",{parentName:"p"},".go"),"\nthere is also a file in the patch with the same name with the extension ",(0,i.kt)("inlineCode",{parentName:"p"},".md"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'rules:\n  - name: does-not-modify-tests\n    kind: patch\n    description: Does not modify test files\n    spec: \'!$changed("src/@1.java", "test/@1.java")\''))}u.isMDXComponent=!0}}]);