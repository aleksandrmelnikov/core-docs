(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=(n(0),n(135));const o={title:"Namespaces",sidebar_label:"Namespaces"},c={id:"getting-started/concepts/namespaces",title:"Namespaces",description:"Namespaces in Onepanel are thin abstractions of [Kubernetes namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/). ",source:"@site/docs/getting-started/concepts/namespaces.md",permalink:"/docs/getting-started/concepts/namespaces",editUrl:"https://github.com/onepanelio/core-docs/tree/master/docs/getting-started/concepts/namespaces.md",sidebar_label:"Namespaces",sidebar:"gettingStarted",previous:{title:"Quick start",permalink:"/docs/getting-started/quickstart"},next:{title:"Workspaces",permalink:"/docs/getting-started/concepts/workspaces"}},s=[],i={rightToc:s};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Namespaces in Onepanel are thin abstractions of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"}),"Kubernetes namespaces"),". "),Object(a.b)("p",null,"They provide scope for all the resources (Workspaces, Workflows, Environment variables, etc.) in Onepanel. Resource names must be unique in each namespace and the same resource can only belong to one namespace."),Object(a.b)("p",null,"They are intended to be used to isolate teams or projects. Role based access control (RBAC) can be used to restrict users to one or more namespaces."))}p.isMDXComponent=!0},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,d=l["".concat(c,".").concat(b)]||l[b]||m[b]||o;return n?a.a.createElement(d,s({ref:t},p,{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);