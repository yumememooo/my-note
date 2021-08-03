"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[7406],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),g=o,f=m["".concat(l,".").concat(g)]||m[g]||p[g]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2730:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={title:"[go] struct & tag"},l={unversionedId:"backend/golang/go_struct",id:"backend/golang/go_struct",isDocsHomePage:!1,title:"[go] struct & tag",description:"A\u7d50\u69cb\u88e1\u7684\u8cc7\u6599\u8981assign\u7d66B",source:"@site/docs/backend/golang/go_struct.md",sourceDirName:"backend/golang",slug:"/backend/golang/go_struct",permalink:"/my-note/docs/backend/golang/go_struct",editUrl:"https://github.com/yumememooo/my-note/edit/master/docs/backend/golang/go_struct.md",version:"current",lastUpdatedAt:1623591593,formattedLastUpdatedAt:"6/13/2021",frontMatter:{title:"[go] struct & tag"},sidebar:"tutorialSidebar",previous:{title:"[go] pprof",permalink:"/my-note/docs/backend/golang/go_pprof"},next:{title:"[go] switch",permalink:"/my-note/docs/backend/golang/go_switch"}},c=[{value:"A\u7d50\u69cb\u88e1\u7684\u8cc7\u6599\u8981assign\u7d66B",id:"a\u7d50\u69cb\u88e1\u7684\u8cc7\u6599\u8981assign\u7d66b",children:[]},{value:"tag",id:"tag",children:[]},{value:"\u5de2\u72c0\u67b6\u69cb inline",id:"\u5de2\u72c0\u67b6\u69cb-inline",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"a\u7d50\u69cb\u88e1\u7684\u8cc7\u6599\u8981assign\u7d66b"},"A\u7d50\u69cb\u88e1\u7684\u8cc7\u6599\u8981assign\u7d66B"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"\u539f\u59cb\u5beb\u6cd5","\u539f\u59cb\u5beb\u6cd5":!0},'package main\n\nimport (\n    "fmt"\n)\n\ntype User struct {\n    Name string\n    Age  int\n......................\u7565\n}\n\ntype Employee struct {\n    Name string\n    Age  int\n    Role string\n......................\u7565\n}\n\nfunc main() {\n    user := User{Name: "dj", Age: 18}\n    employee := Employee{Name: user.Name, Age: user.Age} //\u9019\u88e1\u8981\u5beb\u591a\u6b21\n    fmt.Printf("%#v\\n", employee)\n\n}\n')),(0,a.kt)("p",null,"//\u7db2\u8def\u4e0a\u627e\u5230\u7684\u5eabcopier\uff0c \u661f\u661f\u67091.9k\n",(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/113301827"},"https://zhuanlan.zhihu.com/p/113301827")),(0,a.kt)("p",null,"\u7db2\u8def\u7591\u554f\n",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/37246473/copy-one-struct-to-another-where-structs-have-same-members-and-different-types"},"https://stackoverflow.com/questions/37246473/copy-one-struct-to-another-where-structs-have-same-members-and-different-types")),(0,a.kt)("p",null,"\u4e00\u822c\u7684\u8f49\u578b\u61c9\u7528\nbar := Bar(foo)  \u8f49\u578b\u53ea\u80fd\u7528\u5728\u57fa\u790e\u985e\u578b\u5168\u90fd\u4e00\u6a23\u624d\u53ef\u4ee5(\u9664\u4e86tag)"),(0,a.kt)("h3",{id:"tag"},"tag"),(0,a.kt)("h4",{id:"golang\u4e2djson\u8207struct\u4e2dtag"},"golang\u4e2djson\u8207struct\u4e2dtag"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.itread01.com/content/1544652920.html"},"https://www.itread01.com/content/1544652920.html")),(0,a.kt)("p",null,"-\uff1a\u4e0d\u8981\u89e3\u6790\u9019\u500b\u6b04\u4f4d"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/10858787/what-are-the-uses-for-tags-in-go"},"https://stackoverflow.com/questions/10858787/what-are-the-uses-for-tags-in-go"),"\nUsually a dash value ('-') for the \"value\" means to exclude the field "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/53144276/omit-multiple-fields-with-mgo"},"https://stackoverflow.com/questions/53144276/omit-multiple-fields-with-mgo")),(0,a.kt)("p",null,"This looks like a typo. To ignore a field, the tag value must be a ",(0,a.kt)("inlineCode",{parentName:"p"},"hyphen"),", not an underscore."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Profit     float64    `json:"profit" bson:"-"`\n//\u9019\u6a23\u5beb\u8868\u793a\u8981\u79c0\u51fajson \u4f46\u662fbson\u4e0d\u8981\u89e3\u6790\u5c31\u4e0d\u6703\u5b58\u9032mongo\u4e86\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9023\u5b57\u865f (-) Hyphen "),(0,a.kt)("li",{parentName:"ul"},"\u9023\u63a5\u865f (\u2013) En Dash"),(0,a.kt)("li",{parentName:"ul"},"\u7834\u6298\u865f (\u2014) Em Dash"),(0,a.kt)("li",{parentName:"ul"},"\u9577\u5ea6\u7684\u4e0d\u540c\uff0c\u5f88\u591a\u4eba\u641e\u6df7")),(0,a.kt)("h3",{id:"\u5de2\u72c0\u67b6\u69cb-inline"},"\u5de2\u72c0\u67b6\u69cb inline"),(0,a.kt)("p",null,"\u5de2\u72c0\u67b6\u69cb \u4e00\u500b\u67b6\u69cb\u653e\u5165\u53e6\u4e00\u500b\u67b6\u69cb\n\u5982\u679c\u5b58\u5165\u5230MONGO\u6703\u591a\u4e86\u4e00\u5c64\u67b6\u69cb\uff0c\u9019\u6642\u5c31\u8981\u52a0\u5165",(0,a.kt)("inlineCode",{parentName:"p"},'bson:",inline"'),"\u907f\u514d"),(0,a.kt)("p",null,"type Cube struct {\nSquare ",(0,a.kt)("inlineCode",{parentName:"p"},'bson:",inline"'),"\nDepth  int\n}"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/20849591/storing-nested-structs-with-mgo"},"https://stackoverflow.com/questions/20849591/storing-nested-structs-with-mgo")))}p.isMDXComponent=!0}}]);