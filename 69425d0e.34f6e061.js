(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{121:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return a})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),l=(t(0),t(151)),i={title:"Overview",sidebar_label:"Overview",description:"Deploy Onepanel to public cloud or on-premises"},c={id:"deployment/overview",title:"Overview",description:"Deploy Onepanel to public cloud or on-premises",source:"@site/docs/deployment/overview.md",permalink:"/docs/deployment/overview",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/overview.md",sidebar_label:"Overview",sidebar:"deployment",next:{title:"AKS deployment guide",permalink:"/docs/deployment/public/aks"}},a=[{value:"Installing on public cloud",id:"installing-on-public-cloud",children:[]},{value:"Installing on a single-node cluster",id:"installing-on-a-single-node-cluster",children:[]}],u={rightToc:a};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"You can install Onepanel on:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Public cloud"),Object(l.b)("li",{parentName:"ul"},"Single node cluster on desktop, edge or cloud")),Object(l.b)("h2",{id:"installing-on-public-cloud"},"Installing on public cloud"),Object(l.b)("p",null,"Follow these guides to install Onepanel in public cloud."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"To deploy on Azure Kubernetes Engine (AKS) follow ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/deployment/public/aks"}),"AKS deployment guide")),Object(l.b)("li",{parentName:"ul"},"To deploy on Google Kubernetes Engine (GKE) follow ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/deployment/public/gke"}),"GKE deployment guide")),Object(l.b)("li",{parentName:"ul"},"To deploy on Elastic Kubernetes Service (EKS) follow ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/deployment/public/eks"}),"EKS deployment guide"))),Object(l.b)("h2",{id:"installing-on-a-single-node-cluster"},"Installing on a single-node cluster"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"To deploy on Minikube follow ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/deployment/single-node/minikube"}),"Minikube deployment guide")),Object(l.b)("li",{parentName:"ul"},"To deploy on MicroK8s follow ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/deployment/single-node/microk8s"}),"MicroK8s deployment guide"))))}p.isMDXComponent=!0},151:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),b=p(t),s=r,m=b["".concat(i,".").concat(s)]||b[s]||d[s]||l;return t?o.a.createElement(m,c(c({ref:n},u),{},{components:t})):o.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<l;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);