(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[1586],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||l[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={title:"JS\u66f4\u597d\u7684\u5beb\u6cd5"},c={unversionedId:"frontend/best_pratice/js",id:"frontend/best_pratice/js",isDocsHomePage:!1,title:"JS\u66f4\u597d\u7684\u5beb\u6cd5",description:"JS\u7684\u597d\u6587",source:"@site/docs/frontend/best_pratice/js.md",sourceDirName:"frontend/best_pratice",slug:"/frontend/best_pratice/js",permalink:"/my-note/docs/frontend/best_pratice/js",editUrl:"https://github.com/yumememooo/my-note/edit/master/docs/frontend/best_pratice/js.md",version:"current",frontMatter:{title:"JS\u66f4\u597d\u7684\u5beb\u6cd5"},sidebar:"tutorialSidebar",previous:{title:"[\u5b89\u5168\u6027]\u70ba\u4ec0\u9ebc\u8d85\u9023\u7d50\u8981\u4f7f\u7528noreferrer noopener",permalink:"/my-note/docs/frontend/best_pratice/html_a_ref"},next:{title:"[go] Continuous Profiling",permalink:"/my-note/docs/backend/golang/go_Continuous Profiling"}},u=[{value:"JS\u7684\u597d\u6587",id:"js\u7684\u597d\u6587",children:[]}],p={toc:u};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"js\u7684\u597d\u6587"},"JS\u7684\u597d\u6587"),(0,a.kt)("h4",{id:"\u7b46\u8a18-\u8ac7\u8ac7javascript\u4e2d\u51fd\u5f0f\u7684\u53c3\u6578parameterarguments\u548c\u5c55\u958b\u904b\u7b97\u5b50spread"},(0,a.kt)("a",{parentName:"h4",href:"https://pjchender.blogspot.com/2016/04/javascriptparameterargumentsspread.html"},"[\u7b46\u8a18] \u8ac7\u8ac7JavaScript\u4e2d\u51fd\u5f0f\u7684\u53c3\u6578(parameter),arguments\u548c\u5c55\u958b\u904b\u7b97\u5b50(spread)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\uff2a\uff33\u4e2d\u51fd\u6578\u53ef\u4ee5\u4e0d\u8f38\u5165\u53c3\u6578\uff0c\u4f46\u662f\u53ef\u4ee5\u5224\u65b7\u5f15\u6578arguments\u9577\u5ea6\u4f86\u907f\u514d\u6c92\u6709\u8f38\u5165\u7684\u8655\u7406\uff0c\u900f\u904e\u8f38\u5165arguments\u53ef\u4ee5\u5f97\u5230\u4e00\u500b\u985e\u9663\u5217\uff0c\u5c31\u662f\u4e00\u500b\u53ef\u80fd\u6c92\u6709\u6240\u6709\u9663\u5217\u529f\u80fd\u7684\u9663\u5217\u5594\uff0e"),(0,a.kt)("li",{parentName:"ul"},"\u8655\u7406\u53ef\u80fd\u6c92\u503c\u5f97\u5beb\u6cd5name=name||'Myname';")))}s.isMDXComponent=!0}}]);