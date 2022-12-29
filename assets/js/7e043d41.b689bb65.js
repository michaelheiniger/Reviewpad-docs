"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38013],{28797:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>a,default:()=>v,frontMatter:()=>t,metadata:()=>l,toc:()=>w});var r=n(87462),i=(n(67294),n(3905)),o=n(90814);const t={title:"Assign senior reviewers to new joiners",id:"assign-senior-reviewers-to-new-joiners",slug:"/use-cases/assign-senior-reviewers-to-new-joiners"},a=void 0,l={unversionedId:"use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners/assign-senior-reviewers-to-new-joiners",id:"version-3.19.0/use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners/assign-senior-reviewers-to-new-joiners",title:"Assign senior reviewers to new joiners",description:"An example of assigning senior reviewers to new joiners pull requests.",source:"@site/versioned_docs/version-3.19.0/use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners/index.mdx",sourceDirName:"use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners",slug:"/use-cases/assign-senior-reviewers-to-new-joiners",permalink:"/3.19.0/use-cases/assign-senior-reviewers-to-new-joiners",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners/index.mdx",tags:[],version:"3.19.0",frontMatter:{title:"Assign senior reviewers to new joiners",id:"assign-senior-reviewers-to-new-joiners",slug:"/use-cases/assign-senior-reviewers-to-new-joiners"},sidebar:"DocsSidebar",previous:{title:"Assign review to a team",permalink:"/3.19.0/use-cases/assign-review-to-a-team"},next:{title:"Assign reviewers in a sequence",permalink:"/3.19.0/use-cases/assign-sequential-reviewers"}},u={},w=[],d={toc:w};function v(e){let{components:s,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An example of assigning senior reviewers to new joiners pull requests."),(0,i.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  critical:\n    description: Critical review\n    color: 294b69\n\ngroups:\n  - name: seniors\n    description: Group of senior developers\n    kind: developers\n    spec: \'["torvalds"]\'\n\n  - name: juniors\n    description: Group of developers that have created less than 10 PRs\n    kind: developers\n    type: filter\n    param: developer\n    where: $pullRequestCountBy($developer, "all") < 10\n\nrules:\n  - name: authored-by-junior\n    spec: $isElementOf($author(), $group("juniors"))\n\nworkflows:\n  - name: critical\n    description: Pull requests by juniors should be reviewed by the senior developers\n    if:\n      - rule: authored-by-junior\n    then:\n      - $addLabel("critical")\n      - $assignReviewer($group("seniors"), "round-robin")\n'))}v.isMDXComponent=!0}}]);