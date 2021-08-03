"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[2566],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=u(n),g=l,d=k["".concat(p,".").concat(g)]||k[g]||c[g]||r;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8997:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),o=["components"],i={title:"golang\u4ecb\u7d39\u8207\u512a\u52e2",hide_title:!0},p={unversionedId:"backend/golang/go_ why",id:"backend/golang/go_ why",isDocsHomePage:!1,title:"golang\u4ecb\u7d39\u8207\u512a\u52e2",description:"golang\u4ecb\u7d39",source:"@site/docs/backend/golang/01_go_ why.md",sourceDirName:"backend/golang",slug:"/backend/golang/go_ why",permalink:"/my-note/docs/backend/golang/go_ why",editUrl:"https://github.com/yumememooo/my-note/edit/master/docs/backend/golang/01_go_ why.md",version:"current",sidebarPosition:1,frontMatter:{title:"golang\u4ecb\u7d39\u8207\u512a\u52e2",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"JS\u66f4\u597d\u7684\u5beb\u6cd5",permalink:"/my-note/docs/frontend/best_pratice/js"},next:{title:"golang\u7684\u90a3\u4e9b\u5c0f\u4e8b",permalink:"/my-note/docs/backend/golang/go_ little_thing"}},u=[{value:"golang\u4ecb\u7d39",id:"golang\u4ecb\u7d39",children:[{value:"\u975c\u614b\u5f37\u578b\u5225",id:"\u975c\u614b\u5f37\u578b\u5225",children:[]},{value:"\u7de8\u8b6f vs \u76f4\u8b6f &amp; \u6df7\u5408",id:"\u7de8\u8b6f-vs-\u76f4\u8b6f--\u6df7\u5408",children:[]}]},{value:"\u70ba\u4ec0\u9ebc\u4f7f\u7528go",id:"\u70ba\u4ec0\u9ebc\u4f7f\u7528go",children:[{value:"\u8a2d\u8a08\u521d\u8877",id:"\u8a2d\u8a08\u521d\u8877",children:[]},{value:"\u9ad4\u7a4d",id:"\u9ad4\u7a4d",children:[]},{value:"\u7a0b\u5f0f\u7684\u555f\u52d5\u901f\u5ea6",id:"\u7a0b\u5f0f\u7684\u555f\u52d5\u901f\u5ea6",children:[]},{value:"Go \u4ea4\u53c9\u7de8\u8b6f(\u8de8\u5e73\u53f0\u7de8\u8b6f)\uff0c\u4e8c\u9032\u4f4d\u5236\u53ef\u57f7\u884c\u6a94\u6848",id:"go-\u4ea4\u53c9\u7de8\u8b6f\u8de8\u5e73\u53f0\u7de8\u8b6f\uff0c\u4e8c\u9032\u4f4d\u5236\u53ef\u57f7\u884c\u6a94\u6848",children:[]},{value:"\u5b89\u5168",id:"\u5b89\u5168",children:[]},{value:"\u5e76\u53d1\u6027",id:"\u5e76\u53d1\u6027",children:[]}]}],m={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"golang\u4ecb\u7d39"},"golang\u4ecb\u7d39"),(0,r.kt)("p",null,"Go\u662fGoogle\u958b\u767c\u7684\u4e00\u7a2e\u975c\u614b\u5f37\u578b\u5225\u3001\u7de8\u8b6f\u578b\u3001\u4e26\u767c\u578b\uff0c\u4e26\u5177\u6709\u5783\u573e\u56de\u6536\u529f\u80fd\u7684\u7a0b\u5f0f\u8a9e\u8a00\u3002"),(0,r.kt)("h3",{id:"\u975c\u614b\u5f37\u578b\u5225"},"\u975c\u614b\u5f37\u578b\u5225"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u975c\u614b\u8a9e\u8a00\u7684\u5b9a\u7fa9\u662f\u80fd\u5728\u7de8\u8b6f\u6642\u671f\u78ba\u8a8d\u8207\u6aa2\u67e5\u578b\u5225")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f37\u578b\u5225\u7684\u8a9e\u8a00\u6703\u62d2\u7d55\u96b1\u6027\u7684\u578b\u5225\u8f49\u63db\n\u5728\u5be6\u969b\u958b\u767c\u4e2d\u5f88\u5bb9\u6613\u9047\u5230\u51fa\u4e4e\u610f\u6599\u7684\u81ea\u52d5\u8f49\u578b\u6240\u5c0e\u81f4\u7684\u7a0b\u5f0f\u932f\u8aa4\uff0c\u6240\u4ee5\u5c31\u6613\u958b\u767c\u3001\u53ef\u7dad\u8b77\u6027\u9019\u4ef6\u4e8b\u60c5\u4e0a\u4f86\u8aaa\uff0c\u6211\u500b\u4eba\u6703\u504f\u597d\u9078\u64c7\u975c\u614b\u3001\u5f37\u578b\u5225\u7684\u8a9e\u8a00\u4f86\u7576\u4f5c\u958b\u767c\u5de5\u5177\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://millenniummeetonce.blogspot.com/2018/04/blog-post_5.html"},"\u52d5\u614b\u8a9e\u8a00\u8207\u975c\u614b\uff1f\u76f4\u8b6f\u8207\u7de8\u8b6f\uff1f\u5f37\u578b\u5225\u8207\u5f31\u578b\u5225\uff1f"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f9e\u5857\u4e0a\u770b\u4f86Jave\u8ddfgo\u4e00\u6a23\u662f\u975c\u614b\u5f37\u578b\u5225\uff0c\u4f46\u9019\u5f35\u5716c++\u8207\u7dad\u57fa\u5beb\u7684\u4e0d\u540c\uff1f\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JavaScript \u662f\u52d5\u614b\u578b\u5225\u52a0\u5f31\u578b\u5225 \uff0cJS\u5c31\u6703\u81ea\u52d5\u5e6b\u5fd9\u8f49\u578b\uff08\u81ea\u52d5\u8f49\u578b\uff09\n",(0,r.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10201839"},"\u4f60\u4e0d\u53ef\u4e0d\u77e5\u7684 JavaScript \u4e8c\u4e09\u4e8b#Day2\uff1a\u8cc7\u6599\u578b\u614b\u7684\u5922\u9b58\u2014\u2014\u52d5\u614b\u578b\u5225\u52a0\u5f31\u578b\u5225(1)")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i0.wp.com/cdn-images-1.medium.com/max/1600/1*LZvZgrN2sEebmd8ZEMP6XQ.png?w=810&ssl=1",alt:"Example banner"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://letscodeedu.wordpress.com/2019/04/07/q%EF%BC%9A%E9%97%9C%E6%96%BCc%E8%AA%9E%E8%A8%80%E3%80%81c%E3%80%81c%E4%B8%89%E7%A8%AE%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80%E7%9A%84%E5%B7%AE%E7%95%B0/"},"\u95dc\u65bcC\u8a9e\u8a00\u3001C#\u3001C++\u4e09\u7a2e\u7a0b\u5f0f\u8a9e\u8a00\u7684\u5dee\u7570"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"C\u8a9e\u8a00\u662f\u4e00\u7a2e\u7d50\u69cb\u5316\u7684\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u901a\u5e38\u904b\u505a\u5728\u8f03\u5e95\u5c64(\u4f5c\u696d\u7cfb\u7d71\u3001\u9a45\u52d5\u7a0b\u5f0f\u3001\u5d4c\u5165\u5f0f\u7cfb\u7d71\u3001\u89e3\u78bc\u5f15\u64ce)\u7684\u7a0b\u5f0f\u8a2d\u8a08\u4e0a\uff0cC\u8a9e\u8a00\u8f03\u63a5\u8fd1\u786c\u9ad4\u3002",(0,r.kt)("inlineCode",{parentName:"li"},"C\u8bed\u8a00\u672c\u8eab\u6ca1\u6709\u63d0\u4f9bGC\u673a\u5236")),(0,r.kt)("li",{parentName:"ul"},"C++ \u8a9e\u8a00\u662f\u9644\u8457\u5728C\u8a9e\u8a00\u4e4b\u4e0a\u7684\u4e00\u500b\u7a0b\u5f0f\u8a9e\u8a00\uff0cC++\u662f\u7d50\u69cb\u5316\u7684\u7269\u4ef6\u5c0e\u5411\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u8ddfC\u8a9e\u8a00\u5f88\u50cf\uff0c\u4f46\u53ef\u4ee5\u4f7f\u7528\u7269\u4ef6\u5c0e\u5411\u7684\u65b9\u5f0f\u4f86\u8a2d\u8a08\u7a0b\u5f0f\uff0c\u8f03\u5e38\u7528\u5728(\u9a45\u52d5\u7a0b\u5f0f\u3001\u5d4c\u5165\u5f0f\u7cfb\u7d71\u3001\u904a\u6232\u5f15\u64ce)\u3002"),(0,r.kt)("li",{parentName:"ul"},"C# \u662f\u4e00\u7a2e\u7269\u4ef6\u5c0e\u5411\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u5b8c\u6574\u7684\u7269\u4ef6\u5c0e\u5411\uff0c\u6bd4C, C++\u597d\u5b78\uff0c\u4f7f\u7528\u5fae\u8edf\u7684Virtual Studio\u5b78\u7fd2\u8f03\u597d\u5b78\u3001\u8f03\u5e38\u7528\u5728\uff1a\u904a\u6232\u8a2d\u8a08(Unity, Cocos2D)\u3001\u8cc7\u6599\u5eab\u61c9\u7528\u7a0b\u5f0f\u3002)",(0,r.kt)("inlineCode",{parentName:"li"},"\u5177\u81ea\u52d5\u5783\u573e\u6536\u96c6")))),(0,r.kt)("li",{parentName:"ul"},"Java, C# \u7b49\u9ad8\u968e\u8a9e\u8a00\u672c\u8eab\u5167\u5efa\u4e86\u5783\u573e\u56de\u6536\u5668\uff0c\u81ea\u52d5\u7684\u5783\u573e\u56de\u6536\u53ef\u4ee5\u8b93\u7a0b\u5f0f\u54e1\u4e0d\u9700\u8981\u8003\u616e\u592a\u591a\u52d5\u614b\u8a18\u61b6\u9ad4\u91cb\u653e\u3001\u7ba1\u7406\u554f\u984c\uff0c\n\u9019\u6a23\u53ef\u4ee5\u6e1b\u5c11\u4e86\u5167\u5b58\u6d29\u6f0f\u3001\u8a6d\u7570\u7684\u932f\u8aa4\u5c0e\u81f4\u7cfb\u7d71\u5d29\u6f70\u7b49\u554f\u984c\u3002")),(0,r.kt)("h3",{id:"\u7de8\u8b6f-vs-\u76f4\u8b6f--\u6df7\u5408"},"\u7de8\u8b6f vs \u76f4\u8b6f & \u6df7\u5408"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7de8\u8b6f\u8a9e\u8a00\uff08\u82f1\u8a9e\uff1aCompiled language\uff09\u662f\u4e00\u7a2e\u7a0b\u5f0f\u8a9e\u8a00\u985e\u578b\uff0c\u901a\u904e\u7de8\u8b6f\u5668\u4f86\u5be6\u4f5c\u3002\u5b83\u4e0d\u50cf\u76f4\u8b6f\u8a9e\u8a00\u4e00\u6a23\uff0c\u7531\u76f4\u8b6f\u5668\u5c07\u7a0b\u5f0f\u78bc\u4e00\u53e5\u4e00\u53e5\u57f7\u884c\uff0c\u800c\u662f\u4ee5\u7de8\u8b6f\u5668\uff0c\u5148\u5c07\u7a0b\u5f0f\u78bc\u7de8\u8b6f\u70ba\u6a5f\u5668\u78bc\uff0c\u518d\u52a0\u4ee5\u57f7\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u76f4\u8b6f\u8a9e\u8a00\uff08\u82f1\u8a9e\uff1aInterpreted language\uff09\u662f\u4e00\u7a2e\u7a0b\u5f0f\u8a9e\u8a00\u985e\u578b\u3002\u9019\u7a2e\u985e\u578b\u7684\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u6703\u5c07\u7a0b\u5f0f\u78bc\u4e00\u53e5\u4e00\u53e5\u76f4\u63a5\u57f7\u884c\uff0c\u4e0d\u9700\u8981\u50cf\u7de8\u8b6f\u8a9e\u8a00\uff08Compiled language\uff09\u4e00\u6a23\uff0c\u7d93\u904e\u7de8\u8b6f\u5668\u5148\u884c\u7de8\u8b6f\u70ba\u6a5f\u5668\u78bc\uff0c\u4e4b\u5f8c\u518d\u57f7\u884c\u3002\u9019\u7a2e\u7a0b\u5f0f\u8a9e\u8a00\u9700\u8981\u5229\u7528\u76f4\u8b6f\u5668\uff0c\u5728\u57f7\u884c\u671f\uff0c\u52d5\u614b\u5c07\u7a0b\u5f0f\u78bc\u9010\u53e5\u76f4\u8b6f\uff08interpret\uff09\u70ba\u6a5f\u5668\u78bc\uff0c\u6216\u662f\u5df2\u7d93\u9810\u5148\u7de8\u8b6f\u70ba\u6a5f\u5668\u78bc\u7684\u5b50\u7a0b\u5f0f\uff0c\u4e4b\u5f8c\u518d\u57f7\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7406\u8ad6\u4e0a\uff0c\u4efb\u4f55\u7a0b\u5f0f\u8a9e\u8a00\u90fd\u53ef\u4ee5\u662f\u7de8\u8b6f\u5f0f\uff0c\u6216\u76f4\u8b6f\u5f0f\u7684\u3002\u5b83\u5011\u4e4b\u9593\u7684\u5340\u5225\uff0c\u50c5\u8207\u7a0b\u5f0f\u7684\u61c9\u7528\u6709\u95dc\u3002\u8a31\u591a\u7a0b\u5f0f\u8a9e\u8a00\u540c\u6642\u63a1\u7528\u7de8\u8b6f\u5668\u8207\u76f4\u8b6f\u5668\u4f86\u5be6\u4f5c\uff0c\u5176\u4e2d\u5305\u62ecLisp\uff0cPascal\uff0cBASIC \u8207 Python\u3002JAVA\u53caC#\u63a1\u7528\u6df7\u5408\u65b9\u5f0f\uff0c\u5148\u5c07\u7a0b\u5f0f\u78bc\u7de8\u8b6f\u70ba\u4f4d\u5143\u7d44\u78bc\uff0c\u5728\u57f7\u884c\u6642\u518d\u9032\u884c\u76f4\u8b6f\u3002")),(0,r.kt)("h4",{id:"vs-java"},"vs java"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java\u7a0b\u5f0f\u8a9e\u8a00\u7684\u98a8\u683c\u5341\u5206\u63a5\u8fd1C++\u8a9e\u8a00\u3002\u7e7c\u627f\u4e86C++\u8a9e\u8a00\u7269\u4ef6\u5c0e\u5411\u6280\u8853\u7684\u6838\u5fc3\uff0c"),(0,r.kt)("li",{parentName:"ul"},"Java\u4e0d\u540c\u65bc\u4e00\u822c\u7684\u7de8\u8b6f\u8a9e\u8a00\u6216\u76f4\u8b6f\u8a9e\u8a00\u3002\u5b83\u9996\u5148\u5c07\u539f\u59cb\u78bc\u7de8\u8b6f\u6210\u4f4d\u5143\u7d44\u78bc\uff0c\u518d\u4f9d\u8cf4\u5404\u7a2e\u4e0d\u540c\u5e73\u53f0\u4e0a\u7684\u865b\u64ec\u6a5f\u5668\u4f86\u89e3\u91cb\u57f7\u884c\u4f4d\u5143\u7d44\u78bc\uff0c\u5f9e\u800c\u5177\u6709\u300c\u4e00\u6b21\u7de8\u5beb\uff0c\u5230\u8655\u57f7\u884c\u300d\u7684\u8de8\u5e73\u53f0\u7279\u6027\u3002")),(0,r.kt)("h2",{id:"\u70ba\u4ec0\u9ebc\u4f7f\u7528go"},"\u70ba\u4ec0\u9ebc\u4f7f\u7528go"),(0,r.kt)("h3",{id:"\u8a2d\u8a08\u521d\u8877"},"\u8a2d\u8a08\u521d\u8877"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000022285902"},"\u70ba\u4ec0\u9ebc\u8981\u7528Go\u8a9e\u8a00\uff1fsegmentfault"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8a2d\u8a08Go\u8a9e\u8a00\u662f\u70ba\u4e86\u89e3\u6c7a\u7576\u6642Google\u958b\u767c\u9047\u5230\u7684\u4e00\u4e9b\u554f\u984c"),(0,r.kt)("li",{parentName:"ul"},"Go\u7684\u7de8\u8b6f\u70ba\u4ec0\u9ebc\u5feb:Go\u7de8\u8b6f\u901f\u5ea6\u5feb\uff0c\u4e3b\u8981\u51fa\u65bc\u56db\u500b\u539f\u56e0\u4f7f\u7528\u4e86import\u7684\u5f15\u7528\u7ba1\u7406\u65b9\u5f0f\uff1b\u6c92\u6709\u6a21\u677f\u7684\u7de8\u8b6f\u8ca0\u64d4\uff1b1.5\u7248\u672c\u5f8c\u7684\u81ea\u8209\u7de8\u8b6f\u5668\u512a\u5316\uff1b\u66f4\u5c11\u7684\u95dc\u9375\u5b57\u3002"),(0,r.kt)("li",{parentName:"ul"},"Go\u7684\u5be6\u969b\u6027\u80fd\u5982\u4f55:Go\u96d6\u7136\u9084\u7121\u6cd5\u9054\u5230C++\u90a3\u6a23\u7684\u6975\u81f4\u6027\u80fd"),(0,r.kt)("li",{parentName:"ul"},"Go\u7684\u4e26\u767c\u7de8\u7a0b:\nGo\u7684\u4e26\u767c\u91cf\u53ef\u4ee5\u6bd4\u5927\u90e8\u5206\u8a9e\u8a00\u91cc\u666e\u901a\u7684\u7dda\u7a0b\u5be6\u73fe\u8981\u9ad8 \u8db3\u5920\u8f15\u91cf\u5316\u7684\u7dda\u7a0b\u5728\u76f8\u540c\u7684\u5167\u5b58\u4e0b\u4e5f\u5c31\u53ef\u4ee5\u6709\u66f4\u9ad8\u4e26\u767c\u91cf\uff08\u670d\u52d9\u5668CPU\u9084\u6c92\u6709\u98fd\u548c\u7684\u60c5\u6cc1\u4e0b\uff09\uff0c\u540c\u6642\u4e5f\u53ef\u4ee5\u6e1b\u5c11\u5f88\u591a\u4e0a\u4e0b\u6587\u5207\u63db\u7684\u6642\u9593\u958b\u92b7","[9]","\u3002\u4f46\u662f\u5982\u679c\u4f60\u7684\u6bcf\u500b\u7dda\u7a0b\u4f54\u7528\u7a7a\u9593\u90fd\u975e\u5e38\u5927\u6642\uff08\u6bd4\u598210MB\uff0c\u7576\u7136\u9019\u662f\u975e\u5e38\u898f\u9700\u6c42\u7684\u60c5\u6cc1\u4e0b\uff09\uff0cGo\u7684\u8f15\u91cf\u5316\u512a\u52e2\u5c31\u6c92\u6709\u90a3\u9ebc\u660e\u986f\u4e86\u3002"),(0,r.kt)("li",{parentName:"ul"},"Go\u7684\u5783\u573e\u56de\u6536"),(0,r.kt)("li",{parentName:"ul"},"Go\u4e0d\u9069\u5408\u505a\u4ec0\u9ebc:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6975\u81f4\u9ad8\u6027\u80fd\u512a\u5316\u7684\u5834\u666f\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528C/C++\uff0c\u751a\u81f3\u662f\u5f59\u7de8\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u7c21\u55ae\u6d41\u7a0b\u7684\u8173\u672c\u5de5\u5177\u3001\u6578\u503c\u5206\u6790\u3001\u6df1\u5ea6\u5b78\u7fd2\uff0c\u53ef\u80fdPython\u66f4\u9069\u5408\uff08\u81f3\u5c11\u76ee\u524d\u662f\uff09\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u642d\u4e00\u500b\u535a\u5ba2\u6216\u7db2\u7ad9\uff0cPHP\u4f55\u5617\u4e0d\u662f\u5929\u4e0b\u7b2c\u4e00\u7684\u8a9e\u8a00\u5462\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u60f3\u6bd4\u8f03\u65b9\u4fbf\u627e\u5230\u4e00\u4efd\u7684\u5f8c\u7aef\u5de5\u4f5c\uff0c\u7d55\u5927\u90e8\u5206\u516c\u53f8\u7684Java\u5d17\u4e00\u76f4\u7f3a\u4eba\uff08\u5728\u5be6\u969b\u751f\u7522\u904e\u7a0b\u4e2d\uff0c\u76ee\u524dGo\u4ecd\u6c92\u6709\u6bd4Java\u8868\u73fe\u5f97\u597d\u592a\u591a\uff0c\u81f3\u5c11\u6c92\u6709\u597d\u5230\u8b93\u4e00\u500b\u90e8\u9580/\u516c\u53f8\u5c07\u6838\u5fc3\u696d\u52d9\u91cd\u65b0\u8f49\u5411Go\u4f86\u9032\u884c\u91cd\u69cb\uff09\uff1b"))),(0,r.kt)("li",{parentName:"ul"},"\u64f4\u5c55\u95b1\u8b80",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u4ec0\u4e48 Go \u8bed\u8a00\u5728\u67d0\u4e9b\u65b9\u9762\u7684\u6027\u80fd\u8fd8\u4e0d\u5982 Java\uff1f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6765\u5217\u4e00\u4e0bGo\u7684\u4e0d\u8db3\u5427\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"channel\u5982\u679c\u4f7f\u7528\u4e0d\u5f53\uff0c\u975e\u5e38\u5bb9\u6613\u6b7b\u9501"),"(\u6ca1\u6709\u73b0\u6210\u7684Future\u673a\u5236 \uff0c\u8981\u81ea\u5df1\u901a\u8fc7channel\u5b9e\u73b0)/Java\u4e2d\u5f88\u591a\u8ba4\u4e3a\u7406\u6240\u5f53\u7136\u7684\u5e93\uff0c\u5728Go\u4e2d\u53d1\u73b0\u8981\u91cd\u65b0\u9020\u8f6e\u5b50(\u4e0d\u63d0\u4f9broutine\u6c60/\u6807\u51c6\u5e93\u4e2d\u6570\u636e\u7ed3\u6784\u8fdc\u4e0d\u5982Java\u4e30\u5bcc)/",(0,r.kt)("inlineCode",{parentName:"li"},"\u8d77\u65b0routine\u65f6\u4e00\u5b9a\u8981\u6ce8\u610frecover\u515c\u5e95\uff0c\u5426\u5219\u4e07\u4e00panic\u4e86\uff0c\u6574\u4e2a\u7a0b\u5e8f\u90fd\u6302\u4e86\u3002???")),(0,r.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u4e00\u95e8\u8f83\u65b0\u7684\u8bed\u8a00\uff0c\u6807\u51c6\u5e93\u8fd8\u5904\u5728\u5b8c\u5584\u9636\u6bb5(2017)"),(0,r.kt)("li",{parentName:"ul"},"Java\u7684\u4e0d\u8db3:\u5185\u5b58\u3001CPU\u6d88\u8017\u5927/\u7a0b\u5e8f\u9700\u8981\u9884\u70ed/Spring\u5168\u5bb6\u6876\u8d8a\u6765\u8d8a\u91cd"))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://toutiao.io/posts/awuoso/preview"},"\u8c22\u5b5f\u519b\uff1a\u6211\u4e3a\u4ec0\u4e48\u9009\u62e9\u4f7f\u7528Go\u8bed\u8a00\uff1f2016"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5167\u6709\u8a2d\u8a08\u521d\u8877 \u512a\u7f3a\u9ede"),(0,r.kt)("li",{parentName:"ul"},"\u9019\u5305\u62ec\u4e92\u806f\u7db2\u61c9\u7528\u3001\u7cfb\u7d71\u7de8\u7a0b\u548c\u7db2\u7d61\u7de8\u7a0b\u3002Go\u88e1\u9762\u7684\u6a19\u6e96\u5eab\u57fa\u672c\u4e0a\u5df2\u7d93\u662f\u975e\u5e38\u7a69\u5b9a\u4e86\uff0c\u7279\u5225\u662f\u6211\u9019\u88e1\u63d0\u5230\u7684\u4e09\u500b\uff0c\u7db2\u7d61\u5c64\u3001\u7cfb\u7d71\u5c64\u7684\u5eab\u975e\u5e38\u5be6\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"GC\u5ef6\u8fdf\u6709\u70b9\u5927\uff0c\u5728\u5e76\u53d1\u5f88\u5927\u7684\u60c5\u51b5\u4e0b\uff0c\u5904\u7406\u5f88\u5927\u7684\u65e5\u5fd7\uff0cGC\u6ca1\u6709\u90a3\u4e48\u5feb\uff0c\u5185\u5b58\u56de\u6536\u4e0d\u7ed9\u529b\uff0c\u540e\u6765\u7ecf\u8fc7Profile\u7a0b\u5e8f\u6539\u8fdb\u4e4b\u540e\u5f97\u5230\u4e86\u6539\u5584\u3002\u76ee\u524d\u6765\u770b\uff0cGC\u5df2\u7ecf\u4f18\u5316\u7684\u975e\u5e38\u597d\u4e86\uff0cGo1.5\u3001Go1.6\u7684GC\u524d\u540e\u5bf9\u6bd4\u56fe\u3002")))),(0,r.kt)("h3",{id:"\u9ad4\u7a4d"},"\u9ad4\u7a4d"),(0,r.kt)("p",null,"golang\u7de8\u8b6f\u66f4\u5c0f\u9ad4\u7a4d\u7684\u53ef\u57f7\u884c\u61c9\u7528\u7a0b\u5e8f?",(0,r.kt)("inlineCode",{parentName:"p"},"\u9084\u53ef\u4ee5\u66f4\u5c0f\u5594\uff1f\uff1f")),(0,r.kt)("h3",{id:"\u7a0b\u5f0f\u7684\u555f\u52d5\u901f\u5ea6"},"\u7a0b\u5f0f\u7684\u555f\u52d5\u901f\u5ea6"),(0,r.kt)("p",null,"\u53ef\u4ee5\u770bothers-\u7a0b\u5f0f\u7684\u555f\u52d5\u901f\u5ea6\u5206\u9801\u8aaa\u660e"),(0,r.kt)("h3",{id:"go-\u4ea4\u53c9\u7de8\u8b6f\u8de8\u5e73\u53f0\u7de8\u8b6f\uff0c\u4e8c\u9032\u4f4d\u5236\u53ef\u57f7\u884c\u6a94\u6848"},"Go \u4ea4\u53c9\u7de8\u8b6f(\u8de8\u5e73\u53f0\u7de8\u8b6f)\uff0c\u4e8c\u9032\u4f4d\u5236\u53ef\u57f7\u884c\u6a94\u6848"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/98215258"},"Go \u4ea4\u53c9\u7f16\u8bd1 (\u8de8\u5e73\u53f0\u7f16\u8bd1)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.iphpo.com/blog/2018/03/golang-%E7%9A%84%E8%B7%A8%E5%B9%B3%E5%8F%B0%E7%B7%A8%E8%AD%AF/"},"Golang \u7684\u8de8\u5e73\u53f0\u7de8\u8b6f \u7de8\u8b6f\u5e73\u53f0\u7684\u74b0\u5883\u8b8a\u6578")),(0,r.kt)("li",{parentName:"ul"},"[\u4e8c\u9032\u4f4d\u5236\u6a94\u6848\u662f\u4ec0\u9ebc\u6a23\u7684\uff1f]","(",(0,r.kt)("a",{parentName:"li",href:"https://www.gushiciku.cn/pl/ggVc/zh-tw%EF%BC%89"},"https://www.gushiciku.cn/pl/ggVc/zh-tw\uff09"))),(0,r.kt)("h3",{id:"\u5b89\u5168"},"\u5b89\u5168"),(0,r.kt)("p",null,"Go \u4e0d\u9700\u8981\u7a0b\u5e8f\u5458\u76f4\u63a5\u7ba1\u7406\u5185\u5b58\uff0c\u6240\u6709\u5185\u5b58\u5206\u914d\u90fd\u7531\u8bed\u8a00\u8fd0\u884c\u65f6\u81ea\u884c\u7ba1\u7406"),(0,r.kt)("h3",{id:"\u5e76\u53d1\u6027"},"\u5e76\u53d1\u6027"),(0,r.kt)("p",null,"\u8f15\u91cf\u7d1a\u7dda\u7a0bGoroutines\uff0c\u5929\u751f\u4f75\u767c\u7684\u8a2d\u8a08\uff0c\u958b\u92b7\u5c0f",(0,r.kt)("inlineCode",{parentName:"p"},"\u770b\u53e6\u4e00\u7bc7\u8a0e\u8ad6")),(0,r.kt)("h4",{id:"\u8207\u5176\u4ed6\u8a9e\u8a00\u76f8\u6bd4-other"},"\u8207\u5176\u4ed6\u8a9e\u8a00\u76f8\u6bd4 other...."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tw511.com/a/01/24700.html"},"go\u662f\u5f37\u578b\u5225\u8a9e\u8a00\u9ebc"),"\nGo\u7684\u8a9e\u6cd5\u63a5\u8fd1C\u8a9e\u8a00\uff0c\u8207C++\u76f8\u6bd4\uff0c\u4e0d\u540c\u65bcJava.... \uff08\u4e0d\u61c2\uff0c\u6587\u4e0d\u5c0d\u984c \u5f85\u67e5\uff09")))}c.isMDXComponent=!0}}]);