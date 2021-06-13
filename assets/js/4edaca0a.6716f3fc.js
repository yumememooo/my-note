(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[7406],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),g=o,f=m["".concat(s,".").concat(g)]||m[g]||l[g]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2730:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c={title:"[go] struct",sidebar_position:1},i={unversionedId:"backend/golang/go_struct",id:"backend/golang/go_struct",isDocsHomePage:!1,title:"[go] struct",description:"A\u7d50\u69cb\u88e1\u7684\u8cc7\u6599\u8981assign\u7d66B",source:"@site/docs/backend/golang/go_struct.md",sourceDirName:"backend/golang",slug:"/backend/golang/go_struct",permalink:"/my-note/docs/backend/golang/go_struct",editUrl:"https://github.com/yumememooo/my-note/edit/master/docs/backend/golang/go_struct.md",version:"current",sidebarPosition:1,frontMatter:{title:"[go] struct",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"[go] switch",permalink:"/my-note/docs/backend/golang/go_struct copy"},next:{title:"[go] trace",permalink:"/my-note/docs/backend/golang/go_trace"}},s=[{value:"A\u7d50\u69cb\u88e1\u7684\u8cc7\u6599\u8981assign\u7d66B",id:"a\u7d50\u69cb\u88e1\u7684\u8cc7\u6599\u8981assign\u7d66b",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"a\u7d50\u69cb\u88e1\u7684\u8cc7\u6599\u8981assign\u7d66b"},"A\u7d50\u69cb\u88e1\u7684\u8cc7\u6599\u8981assign\u7d66B"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"\u539f\u59cb\u5beb\u6cd5","\u539f\u59cb\u5beb\u6cd5":!0},'package main\n\nimport (\n    "fmt"\n)\n\ntype User struct {\n    Name string\n    Age  int\n......................\u7565\n}\n\ntype Employee struct {\n    Name string\n    Age  int\n    Role string\n......................\u7565\n}\n\nfunc main() {\n    user := User{Name: "dj", Age: 18}\n    employee := Employee{Name: user.Name, Age: user.Age} //\u9019\u88e1\u8981\u5beb\u591a\u6b21\n    fmt.Printf("%#v\\n", employee)\n\n}\n')),(0,a.kt)("p",null,"//\u7db2\u8def\u4e0a\u627e\u5230\u7684\u5eabcopier\uff0c \u661f\u661f\u67091.9k\n",(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/113301827"},"https://zhuanlan.zhihu.com/p/113301827")),(0,a.kt)("p",null,"\u7db2\u8def\u7591\u554f\n",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/37246473/copy-one-struct-to-another-where-structs-have-same-members-and-different-types"},"https://stackoverflow.com/questions/37246473/copy-one-struct-to-another-where-structs-have-same-members-and-different-types")),(0,a.kt)("p",null,"\u4e00\u822c\u7684\u8f49\u578b\u61c9\u7528\nbar := Bar(foo)  \u8f49\u578b\u53ea\u80fd\u7528\u5728\u57fa\u790e\u985e\u578b\u5168\u90fd\u4e00\u6a23\u624d\u53ef\u4ee5(\u9664\u4e86tag)"))}p.isMDXComponent=!0}}]);