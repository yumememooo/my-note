"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[4041],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=p(t),d=a,s=g["".concat(i,".").concat(d)]||g[d]||m[d]||o;return t?r.createElement(s,l(l({ref:n},u),{},{components:t})):r.createElement(s,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7543:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],c={title:"[go] channel"},i={unversionedId:"backend/golang/go_chan",id:"backend/golang/go_chan",isDocsHomePage:!1,title:"[go] channel",description:"channel",source:"@site/docs/backend/golang/go_chan.md",sourceDirName:"backend/golang",slug:"/backend/golang/go_chan",permalink:"/my-note/docs/backend/golang/go_chan",editUrl:"https://github.com/yumememooo/my-note/edit/master/docs/backend/golang/go_chan.md",version:"current",lastUpdatedAt:1629616622,formattedLastUpdatedAt:"8/22/2021",frontMatter:{title:"[go] channel"},sidebar:"tutorialSidebar",previous:{title:"Gorountine",permalink:"/my-note/docs/backend/golang/go_Gorountine"},next:{title:"[GO]MAP\u7684\u4f75\u767c\u554f\u984c",permalink:"/my-note/docs/backend/golang/go_map"}},p=[{value:"channel",id:"channel",children:[]},{value:"channel \u751f\u4ea7\u8005\u6d88\u8d39\u8005",id:"channel-\u751f\u4ea7\u8005\u6d88\u8d39\u8005",children:[]},{value:"goroutine",id:"goroutine",children:[]}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"channel"},"channel"),(0,o.kt)("p",null,"Do not communicate by sharing memory; instead, share memory by communicating."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000017958702"},"\u603b\u7ed3\u4e86\u624d\u77e5\u9053\uff0c\u539f\u6765channel\u6709\u8fd9\u4e48\u591a\u7528\u6cd5\uff01")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.evanlin.com/golangtw43/"},"[\u7814\u8a0e\u6703\u5fc3\u5f97] 20190730 GolangTW @M Space - Introducing the go channel and pipeline buffered/unbuffered channel"))),(0,o.kt)("h3",{id:"channel-\u751f\u4ea7\u8005\u6d88\u8d39\u8005"},"channel \u751f\u4ea7\u8005\u6d88\u8d39\u8005"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/ExMan/p/12408655.html"},"golang channel\u591a\u751f\u4ea7\u8005\u548c\u591a\u6d88\u8d39\u8005\u5b9e\u4f8b"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/u012050154/article/details/78926470"},"Go---channel\u5b9e\u73b0\u751f\u4ea7\u8005\u6d88\u8d39\u8005")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u7121\u7de9\u885d\u8207\u6709\u7de9\u885d\u5340\u7684\u7c21\u55ae\u7bc4\u4f8b\u8aaa\u660e"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/developer/article/1559262"},"\u51e0\u4e2a\u5e38\u89c1\u7684\u5e76\u53d1\u6a21\u578b\u2014\u2014\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u6a21\u578b\u3010Golang \u5165\u95e8\u7cfb\u5217\u5341\u4e03\u3011")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"- \u4e07\u4e00\u6d88\u8d39\u8005\u5904\u7406\u6570\u636e\u5f88\u6162\uff0c\u751f\u4ea7\u8005\u53ea\u80fd\u65e0\u7aef\u6d6a\u8d39\u65f6\u95f4\u3002\u4f7f\u7528\u4e86\u751f\u4ea7\u8005\uff0f\u6d88\u8d39\u8005\u6a21\u5f0f\u4e4b\u540e\uff0c\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u53ef\u4ee5\u662f\u4e24\u4e2a\u72ec\u7acb\u7684\u5e76\u53d1\u4e3b\u4f53\u3002\u751f\u4ea7\u8005\u628a\u5236\u9020\u51fa\u6765\u7684\u6570\u636e\u5f80\u7f13\u51b2\u533a\u4e00\u4e22\uff0c\u5c31\u53ef\u4ee5\u518d\u53bb\u751f\u4ea7\u4e0b\u4e00\u4e2a\u6570\u636e\u3002\u57fa\u672c\u4e0a\u4e0d\u7528\u4f9d\u8d56\u6d88\u8d39\u8005\u7684\u5904\u7406\u901f\u5ea6\u3002\n")),(0,o.kt)("p",{parentName:"li"},"\u5176\u5b9e\u6700\u5f53\u521d\u8fd9\u4e2a\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u6a21\u5f0f\uff0c\u4e3b\u8981\u5c31\u662f\u7528\u6765\u5904\u7406\u5e76\u53d1\u95ee\u9898\u7684\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"- \u5982\u679c\u751f\u4ea7\u8005\u5236\u9020\u6570\u636e\u7684\u901f\u5ea6\u65f6\u5feb\u65f6\u6162\uff0c\u7f13\u51b2\u533a\u7684\u597d\u5904\u5c31\u4f53\u73b0\u51fa\u6765\u4e86\u3002\u5f53\u6570\u636e\u5236\u9020\u5feb\u7684\u65f6\u5019\uff0c\u6d88\u8d39\u8005\u6765\u4e0d\u53ca\u5904\u7406\uff0c\u672a\u5904\u7406\u7684\u6570\u636e\u53ef\u4ee5\u6682\u65f6\u5b58\u5728\u7f13\u51b2\u533a\u4e2d\u3002\u7b49\u751f\u4ea7\u8005\u7684\u5236\u9020\u901f\u5ea6\u6162\u4e0b\u6765\uff0c\u6d88\u8d39\u8005\u518d\u6162\u6162\u5904\u7406\u6389\u3002\n")))),(0,o.kt)("h3",{id:"goroutine"},"goroutine"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://geektutu.com/post/hpg-concurrency-control.html"},"\u63a7\u5236\u534f\u7a0b(goroutine)\u7684\u5e76\u53d1\u6570\u91cf"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6839\u64da\u5beb\u6cd5\u7684\u4e0d\u540c \u53ef\u4ee5\u900f\u904e\u63a7\u5236channel\u5927\u5c0f\u4f86\u958bgoroutine\uff0c\u8fbe\u5230\u4e86\u534f\u7a0b\u5e76\u53d1\u63a7\u5236\u7684\u76ee\u7684\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6709\u5f88\u591a\u7b2c\u4e09\u65b9\u5e93\u5b9e\u73b0\u4e86\u534f\u7a0b\u6c60\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u7528\u6765\u63a7\u5236\u534f\u7a0b\u7684\u5e76\u53d1\u6570\u91cfTBD"),(0,o.kt)("li",{parentName:"ul"},"\u8c03\u6574\u7cfb\u7edf\u8d44\u6e90\u7684\u4e0a\u9650 TBD")))))}m.isMDXComponent=!0}}]);