"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42057],{26388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>m});var i=t(87462),o=(t(67294),t(3905));const a={id:"extends",slug:"/guides/extends",title:"Extends"},s="Extends",r={unversionedId:"guides/extends",id:"version-3.17.0/guides/extends",title:"Extends",description:"Through the extends property, Reviewpad users can extend the current configuration from other configurations.",source:"@site/versioned_docs/version-3.17.0/guides/extends.md",sourceDirName:"guides",slug:"/guides/extends",permalink:"/guides/extends",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/extends.md",tags:[],version:"3.17.0",frontMatter:{id:"extends",slug:"/guides/extends",title:"Extends"},sidebar:"DocsSidebar",previous:{title:"Commands",permalink:"/guides/commands"},next:{title:"Migrations",permalink:"/guides/migrations"}},l={},m=[{value:"How it works",id:"how-it-works",level:2}],d={toc:m};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extends"},"Extends"),(0,o.kt)("p",null,"Through the ",(0,o.kt)("inlineCode",{parentName:"p"},"extends")," property, Reviewpad users can extend the current configuration from other configurations."),(0,o.kt)("p",null,"This allows the ability to share common specifications for labels, rules and workflows from multiple GitHub repositories\nwith the possibility to override the inherited configurations."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"In the Reviewpad configuration, users specify in the ",(0,o.kt)("inlineCode",{parentName:"p"},"extends")," property\na list of other Reviewpad configuration files as GitHub blob urls (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/reviewpad/reviewpad/blob/main/reviewpad.yml"),")."),(0,o.kt)("p",null,"As an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"api-version: reviewpad.com/v3.x\n\nextends:\n  - https://github.com/baz/foo/blob/main/common.yml\n  - https://github.com/baz/qux/blob/main/team_a.yml\n")),(0,o.kt)("p",null,"These GitHub blob urls can live in different repositories."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please note that Reviewpad GitHub App (or the underlying token used to run Reviewpad) has to be able to read the contents of these repositories.\nYou can do it by installing the Reviewpad GitHub App in all repositories (or the whole organization) where you which to extend Reviewpad from."),(0,o.kt)("p",{parentName:"admonition"},"In the example above, Reviewpad GitHub App needs to be installed either in the organization ",(0,o.kt)("inlineCode",{parentName:"p"},"baz")," or in both projects ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"qux"),".")),(0,o.kt)("p",null,"The final configuration is computed by concatenating all configurations included in the extends section\n(in the order they are specified) with the contents of the current configuration."),(0,o.kt)("p",null,"If properties have the same name, the one that was defined last overrides the previous ones."),(0,o.kt)("p",null,"For example, consider the following specification:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'api-version: reviewpad.com/v3.x\n\nextends:\n  - https://github.com/baz/foo/blob/main/common.yml\n  - https://github.com/baz/qux/blob/main/team_a.yml\n\nworkflows:\n  - name: small-size\n    always-run: true\n    if:\n      - $size() < 30\n    then:\n      - $info("this is a small pr")\n')),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"common.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: small-size\n    always-run: true\n    if:\n      - $size() < 5\n    then:\n      - $info("this is a very small pr")\n\n  - name: medium-size\n    always-run: true\n    if:\n      - $size() >= 30\n    then:\n      - $info("this is not a small pr")\n      - $assignRandomReviewer()\n')),(0,o.kt)("p",null,"and ",(0,o.kt)("inlineCode",{parentName:"p"},"team_a.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: small-size\n    always-run: true\n    if:\n      - $size() < 10\n    then:\n      - $info("this is a small pr for team a")\n\n  - name: medium-size\n    always-run: true\n    if:\n      - $size() >= 30\n    then:\n      - $info("this is not a small pr")\n')),(0,o.kt)("p",null,"The final configuration will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  # we first load the "medium-size" workflow from common.yml (the first configuration in the extends section)\n  # then we override it with the "medium-size" workflow from team_a.yml (the second configuration in the extends section)\n  - name: medium-size\n    always-run: true\n    if:\n      - $size() >= 30\n    then:\n      - $info("this is not a small pr")\n\n  # we first load the "small-size" workflow from common.yml (the first configuration in the extends section)\n  # then we override it with the "small-size" workflow from team_a.yml (the second configuration in the extends section)\n  # and finally we override it with the "small-size" workflow from the current configuration\n  - name: small-size\n    always-run: true\n    if:\n      - $size() < 30\n    then:\n      - $info("this is a small pr")\n')))}p.isMDXComponent=!0}}]);