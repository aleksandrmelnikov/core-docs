(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(6),r=(n(0),n(149)),i={title:"Contributing",sidebar_label:"Contributing"},c={id:"getting-started/contributing",title:"Contributing",description:"Welcome to Onepanel CE Project! We are excited to have you as part of the community and welcome all contributions.",source:"@site/docs/getting-started/contributing.md",permalink:"/docs/getting-started/contributing",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/contributing.md",sidebar_label:"Contributing",sidebar:"gettingStarted",previous:{title:"Creating annotation models on CVAT",permalink:"/docs/getting-started/use-cases/computervision/annotation/cvat/cvat_annotation_model"}},l=[{value:"Getting started as a contributor",id:"getting-started-as-a-contributor",children:[]},{value:"Code of conduct",id:"code-of-conduct",children:[]},{value:"Coding conventions",id:"coding-conventions",children:[{value:"Go",id:"go",children:[]},{value:"TypeScript and Angular",id:"typescript-and-angular",children:[]},{value:"SDKs",id:"sdks",children:[]}]},{value:"Documentation style guide",id:"documentation-style-guide",children:[]},{value:"Commits",id:"commits",children:[]},{value:"Pull Requests",id:"pull-requests",children:[{value:"Prefix the name with the type",id:"prefix-the-name-with-the-type",children:[]},{value:"Add a /kind label",id:"add-a-kind-label",children:[]}]},{value:"Project repositories",id:"project-repositories",children:[{value:"Platform",id:"platform",children:[]},{value:"SDKs",id:"sdks-1",children:[]},{value:"Documentation",id:"documentation",children:[]}]}],b={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Welcome to Onepanel CE Project! We are excited to have you as part of the community and welcome all contributions."),Object(r.b)("h2",{id:"getting-started-as-a-contributor"},"Getting started as a contributor"),Object(r.b)("p",null,"This document outlines project structure, guidelines and serves as a single source of truth for contributions. Our goal is to make it as easy for everyone to contribute to the code base, documentation, and components."),Object(r.b)("h2",{id:"code-of-conduct"},"Code of conduct"),Object(r.b)("p",null,"Make sure to read and observe our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/blob/master/CODE_OF_CONDUCT.md"}),"Code of Conduct"),"."),Object(r.b)("h2",{id:"coding-conventions"},"Coding conventions"),Object(r.b)("p",null,"All code should be written in the languages and frameworks listed below and follow that language's conventions. SDKs for different languages are an exception and should follow the best practices for that language."),Object(r.b)("h3",{id:"go"},"Go"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://golang.org/doc/effective_go.html"}),"Effective Go")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/golang/go/wiki/CodeReviewComments"}),"Go code review comments"))),Object(r.b)("h3",{id:"typescript-and-angular"},"TypeScript and Angular"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://angular.io/guide/styleguide"}),"Angular coding style guide"))),Object(r.b)("h3",{id:"sdks"},"SDKs"),Object(r.b)("p",null,"All SDKs should be generated with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator-cli"}),"OpenAPI Generator")," using our generated ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/onepanelio/core/blob/master/api/api.swagger.json"}),"API specification file"),". See our Python SDK's ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/onepanelio/python-sdk/blob/master/Makefile"}),"Makefile")," for reference."),Object(r.b)("h2",{id:"documentation-style-guide"},"Documentation style guide"),Object(r.b)("p",null,"We welcome all contributions and follow these highlights from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.google.com/style/highlights"}),"Google developer documentation style guide"),"."),Object(r.b)("p",null,"Our documentation site is built on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docusaurus.io/"}),"Docusaurus"),"."),Object(r.b)("h2",{id:"commits"},"Commits"),Object(r.b)("p",null,"All commits should follow ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.conventionalcommits.org/en/v1.0.0/"}),"Conventional Commits")," as closely as possible."),Object(r.b)("h2",{id:"pull-requests"},"Pull Requests"),Object(r.b)("p",null,"When making a pull request, "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Prefix the name with the type of commit (fix, feature, docs, etc)"),Object(r.b)("li",{parentName:"ol"},"Add a /kind label in the description (enhancement, bug, etc)")),Object(r.b)("h3",{id:"prefix-the-name-with-the-type"},"Prefix the name with the type"),Object(r.b)("p",null,"The types are"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fix")," - fixing something"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"feature")," - adding a feature"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"clean")," - cleaning up code"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"chore")," - something mundane like updating a version number"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"docs")," - updating documents"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tests")," - adding tests")),Object(r.b)("p",null,"An example is: "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"fix: issue where workspace page crashed upon three refreshes\n")),Object(r.b)("h3",{id:"add-a-kind-label"},"Add a /kind label"),Object(r.b)("p",null,"A /kind label helps further identify what the pull request is for"),Object(r.b)("p",null,"The types are"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"bug"),Object(r.b)("li",{parentName:"ul"},"enhancement"),Object(r.b)("li",{parentName:"ul"},"docs")),Object(r.b)("p",null,"An example is:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"/kind enhancement\n")),Object(r.b)("h2",{id:"project-repositories"},"Project repositories"),Object(r.b)("p",null,"Onepanel consists of the following repositories. See ",Object(r.b)("inlineCode",{parentName:"p"},"CONTRIBUTING.md")," file in each repository for more information."),Object(r.b)("h3",{id:"platform"},"Platform"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/onepanelio/core/"}),"Core API")," - Code base for backend (Go)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-ui/"}),"Core UI")," - Code base for UI (Angular + TypeScript)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/onepanelio/cli/"}),"CLI")," - Code base for Go CLI for installation and management (Go)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-ui/"}),"Manifests")," - Kustomize manifests used by CLI for installation and management (YAML)")),Object(r.b)("h3",{id:"sdks-1"},"SDKs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/onepanelio/python-sdk/"}),"Python SDK")," - Python SDK for automation")),Object(r.b)("h3",{id:"documentation"},"Documentation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-docs/"}),"Documentation")," - The repository for this site"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/onepanelio/core-api-docs/"}),"API Documentation")," - Documentation if you choose to use the API directly")))}u.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),u=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(i,".").concat(d)]||s[d]||p[d]||r;return n?o.a.createElement(m,c(c({ref:t},b),{},{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);