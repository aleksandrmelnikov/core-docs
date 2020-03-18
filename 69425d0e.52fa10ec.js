(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return a})),t.d(n,"default",(function(){return u}));var r=t(1),l=(t(0),t(125));const o={title:"Overview",sidebar_label:"Overview"},i={id:"deployment/overview",title:"Overview",description:"You can install Onepanel on:",source:"@site/docs/deployment/overview.md",permalink:"/core-docs/docs/deployment/overview",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/deployment/overview.md",sidebar_label:"Overview",sidebar:"deployment",next:{title:"Quickstart",permalink:"/core-docs/docs/deployment/configuration/cli"}},a=[{value:"Installing on public cloud",id:"installing-on-public-cloud",children:[]},{value:"Installing on a single node cluster",id:"installing-on-a-single-node-cluster",children:[]}],c={rightToc:a};function u({components:e,...n}){return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"You can install Onepanel on:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Public cloud"),Object(l.b)("li",{parentName:"ul"},"Single node cluster on desktop, edge or cloud")),Object(l.b)("h2",{id:"installing-on-public-cloud"},"Installing on public cloud"),Object(l.b)("p",null,"Follow these guides to install on single node cluster or desktop."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"To install on Azure Kubernetes Engine (AKS) follow ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"public/aks"}),"AKS installation guide")),Object(l.b)("li",{parentName:"ul"},"To install on Google Kubernetes Engine (GKE) follow ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"public/gke"}),"GKE installation guide")),Object(l.b)("li",{parentName:"ul"},"To install on Elastic Kubernetes Service (EKS) follow ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"public/eks"}),"EKS installation guide"))),Object(l.b)("h2",{id:"installing-on-a-single-node-cluster"},"Installing on a single node cluster"),Object(l.b)("p",null,"Follow these guides to install on a single-node cluster or your desktop."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"To install on MicroK8s follow ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"single-node/microk8s"}),"MicroK8s installation guide"))))}u.isMDXComponent=!0},125:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),l=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=l.a.createContext({}),s=function(e){var n=l.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a({},n,{},e)),t},p=function(e){var n=s(e.components);return l.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return t?l.a.createElement(f,a({ref:n},u,{components:t})):l.a.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<o;u++)i[u]=t[u];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);