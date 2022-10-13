"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[16031],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25495:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={title:"Aladino Syntax",id:"syntax"},o=void 0,l={unversionedId:"guides/aladino/syntax",id:"version-3.8.0/guides/aladino/syntax",title:"Aladino Syntax",description:"The syntax of Aladino is quite simple. Here's the BNF grammar representation:",source:"@site/versioned_docs/version-3.8.0/guides/aladino/syntax.md",sourceDirName:"guides/aladino",slug:"/guides/aladino/syntax",permalink:"/3.8.0/guides/aladino/syntax",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/aladino/syntax.md",tags:[],version:"3.8.0",frontMatter:{title:"Aladino Syntax",id:"syntax"},sidebar:"DocsSidebar",previous:{title:"Aladino Specification",permalink:"/3.8.0/guides/aladino/specification"},next:{title:"Aladino Semantics",permalink:"/3.8.0/guides/aladino/semantics"}},s={},p=[],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The syntax of Aladino is quite simple. Here's the BNF grammar representation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"prog := stat_list\nstat := expr\nexpr := expr BINOP expr\n      | UNARYOP expr\n      | TIMESTAMP\n      | RELATIVE_TIMESTAMP\n      | NUMBER\n      | STRING\n      | BOOLEAN\n      | '[' expr_list ']'\n      | '$' IDENTIFIER '(' expr_list ')'\n      | '(' expr_list '=>' expr  ')'\n\nTIMESTAMP := \n        YYYYMMDD \n      | YYYY-MM-DD\n      | YYYYMMDDTHH:MM:SS\n      | YYYY-MM-DDTHH:MM:SS\n\nRELATIVE_TIMESTAMP := NUMBER TIME_UNIT ago\n\nTIME_UNIT := \n        'year'   | 'years'\n      | 'month'  | 'months'\n      | 'week'   | 'weeks'\n      | 'day'    | 'days'\n      | 'hour'   | 'hours'\n      | 'minute' | 'minutes'\n\nBINOP := \n        '==' | '>=' | '>' | '<' | '<=' \n      | '&&' | '||' \n\nUNARYOP := '!'\n")),(0,a.kt)("p",null,"This allows us to specify:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Logical expressions: e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},'"a" == "a"')," or ",(0,a.kt)("inlineCode",{parentName:"li"},"$fun() == 1"),";"),(0,a.kt)("li",{parentName:"ol"},"Function calls: e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},'$label("bug")')),(0,a.kt)("li",{parentName:"ol"},"Lambda functions: e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"($dev => $dev == $author())"))))}u.isMDXComponent=!0}}]);