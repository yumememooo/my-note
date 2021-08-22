---
title: "網路文章 react hook系列文學習筆記"
hide_title: true
---

## 前言
>本筆記依照網路文章並標注`個人學習內文重點`，想要自行從頭學習者，附上連結請自行進系列文學習． 

- 學習系列文連結： [pjchender-從 Hooks 開始，讓你的網頁 React 起來](https://ithelp.ithome.com.tw/users/20103315/ironman/2668)

推推推：這個系列概念真的寫得很好，IT邦幫忙雖有發表文章，但也買了這系列出版的書，還可以加入社團喔！！

- 超級推薦購書 [天瓏](https://www.tenlong.com.tw/products/9789864345083)



----

<!--more-->




----

----

-------------- 以下開始為個人筆記 ，非教學 -------------

＊如有任何其他疑慮請寄mail告知，謝謝

----


### day1~2 從 Hook 開始學習？
先備知識
- （2019）二月， React 16.8 版開始正式支援 Hooks 的用法
-  `JavaScript ES6` 的語法

自己將學到的一些樣板字面值、物件屬性名稱縮寫、解構賦值等等更新在[[JS 01] javascript 新手上路與概念筆記](https://yumememooo.github.io/2021/02/20/js-start-01/)裡，但`很多進階用法仍不熟悉，需要再多看幾次`．

### day3 用原生 JavaScript 
- 原文連結[[Day 03 - 計數器] 用原生 JavaScript 做一個簡單的計數器](https://ithelp.ithome.com.tw/articles/10217628)
- 透過document.querySelector(".chevron-up");與downElement.addEventListener("click",等原生寫法也可以做一個點擊按鈕的計數器．

### day4 JSX 使用與Babel

- 透過 `JSX 這種把 HTML 寫在 JavaScript 中·的方式`，就可以直接使用 if 判斷式。它的好處還不只這些
-  Babel 是JavaScript 前處理器，編譯器，主要能轉換JSX與ES6成各瀏覽器支持的ＪＳ

自己將學到的內容整理成[[React 02] react JSX 基本語法](https://yumememooo.github.io/2020/05/30/react02-jsx/),`持續學習中`．


### day5 用JSX改寫
- 好處：React 組件的重複特性 大寫駝峰的方式
- 在 JSX 中套入 CSS 樣式，用className或是in-line stytle去取代，

組件說明自己更新在[[React 03] React component 與生命週期](https://yumememooo.github.io/2021/02/27/react03-component-props/)

自己再補充css-in-js用法
[[React][✍練習]套用 css-in-js (Emotion 庫)撰寫 CSS](https://yumememooo.github.io/2021/04/18/react-css/)

### day6 useState的出現
- 原文連結 [[Day 06 - 計數器] 醒醒啊！為什麼一動也不動 - useState 的基本使用](https://ithelp.ithome.com.tw/articles/10219287)
- React加入變數的組件，要改回最一般箭頭函式的寫法，也就是 () => {}
 
  `這邊要多理解一下React中簡寫的不同`
```diff
import ReactDOM from "react-dom";

//JSX縮寫 直接用()
- // const App = () => (
- //     <div>256</div>
- // );
//JSX有變數時 改() => {}
+const App = () => {
+  const count = 256;
+  return (
+      <div>{count}</div>
  );
+};
ReactDOM.render(<App />, document.getElementById("root"));
```
- 一般加法可以在console看到變化，但是畫面還是不會變，透過 useState 讓 React 知道有東西變了． useState 其實是React 物件中的一個方法，用法的兩個參數其實是解構賦植的用法

```js
const [count, setCount] = useState(<資料預設值>);
//useState是回傳一個陣列，array[0]對應到count，[1]對應到setCount ->陣列解構賦植的用法
//第一個是變數，第二個是方法，命名可自取，但第二個習慣以set開頭，預設值可以是字串、數值或物件．
... 找到要使用的地方
   <div className="chevron chevron-up"
        onClick={() => {
          // STEP 3: 使用 setCount 方法來改變 count 的值
          setCount(count + 1);
        }}
      />

```
- 當 count 的值沒變時，畫面並不會重新渲染


-----
### day7 條件渲染
- 內文連結：[[Day 07 - 計數器] 幫計數器設個最大最小值吧 - JSX 中條件渲染的使用](https://ithelp.ithome.com.tw/articles/10219716)

#### 判斷隱藏元素的寫法- ＪＳ的邏輯運算子透用到兩種
##### 1. 用css隱藏時也有兩種
- display:none （空間會消失 導致畫面排版「跳一下）
- visibility:hidden（空間會存在）
```diff
//找到要加的地方
<div
+  style={{
+    visibility: count >= 10 && 'hidden',
+  }}
  onClick={() => {
    setCount(count + 1);
  }}
/>

//或者寫在className 隱藏元素 --> .vh是先定義到 css裡

<div
+  className={`chevron chevron-up ${count >= 10 && 'vh'}`}
  onClick={() => {
    setCount(count + 1);
  }}
/>

```

  - 引用內文：JavaScript 中條件式完成，這裡會使用到 &&與｜｜概念
  >在 JavaScript 中，&& 或 || 這種語法稱作「邏輯運算子（Expressions - Logical operator）」，而因為在 JSX 中的 {} 內只能放入表達式（expressions），而不能寫入像是 if...else... 這種陳述句（statement）
  - || 就是前面為假時去拿後面的那個,為真拿前面  `遇假即停`
  ```
const a = 0 || 'iPhone'; 
// 因為 0 被轉型後為 false，所以 a 會是 'iPhone'
const b = 26900 || 24900;  
// 因為 26900 會轉型為 true，所以 b 會是 26900
  ```
  - && 就是前面為真時去拿後面的那個,為假拿前面  `遇真即停`
  ```
const a = 0 && 'iPhone';   
// 因為 0 被轉型後為 false，所以 a 會是 0
const b = 26900 && 24900;  
// 因為 26900 轉型為 true，所以 b 會是 24900
  ```

##### 2. 或是把ＤＯＭ整個都隱藏
一樣條件判斷，只是套用在 JSX 的元素上 ，後者的好處是不能讓使用者自行修改ＣＳＳ
```diff
//找到要控制的區塊
+ {count < 10 && (
  <div
    onClick={() => {
      setCount(count + 1);
    }}
  />
+ )}
```
>引用內文：如果你需要比較嚴格的去控制使用者的行為，不想要使用者透過 CSS 就能簡單修改的話，那麼就把 DOM 整個移除；但如果這個功能被使用者手動打開也不會有太大影響的話，那就使用 CSS 樣式來控制畫面就好，如此會有比較好的效能和體驗(不會讓畫面排版有抖動的情況)。

##### 其他補充
- 防止快手點擊，小心使用transition: all 0.3s;， 這會讓所有的樣式都會有過渡（transition）的效果，-->這個按鈕在 0.3s 內並不會馬上消失，所以通常都`要限定哪些有做 transition`: background-image 0.3s;
- 重要補充：JSX 中標籤內如果沒有內容的話可以自己關閉
```
<div className="xxx" />
舉例來說 <div></div>，
因為開頭和結尾的 HTML 標籤之間沒有任何內容，
因此在 JSX 中會變成 <div />。
```
----


### day 8 onclick & array Map
- 內文連結：[[Day 08 - 計數器] 一個不夠，給我一次來十個 - JSX 中迴圈的使用](https://ithelp.ithome.com.tw/articles/10220209)

#### 程式碼簡潔onclick 
- 程式碼簡潔onclick ，()->參數用法的問題可以改成用箭頭函式解決
  - 將onclick中的函數抽出來，並去除掉（）=>，直接撰寫函數，不會執行而是設定
  [練習](https://github.com/yumememooo/counter-water/commit/a084004203346ad204d5d53ff7fe4868a7d452c6)
  
```diff
+ const handelSubtract = () => {
    setCount(count - 1);
    console.log(`current Count is ${count}`);
+ };

+<ActionBlock onClick={handelSubtract}
```
  -  onclick奇怪的地方->>如果該函式有參數，不能直接撰寫要加上onClick={() => handelAction('Subtract')}，不能會被當做要馬上執行而壞掉進入無限迴圈（函式後加上小括號會直接呼叫該函式onClick={handelSubtract`()`}），`要小心這細微的差距`．
  [範例](https://github.com/yumememooo/counter-water/commit/71b627e3eefdf7b7aa97b35f44588cb6437a6135)
  - 還有兩種更精簡的寫法，不需加（）＝> （需拿掉 不然會沒反應）
    - 要return function(){}中 [範例](https://github.com/yumememooo/counter-water/commit/c1fd638c3238a484f8f4fc723a1c7e8f4289231b)
    - 箭頭函式更精簡 ，最外圈{}拿掉，後面加上（）=> [範例](https://github.com/yumememooo/counter-water/commit/1ebfae46ef066765ba7145e57dd22b79a0f53cac)

#### 迴圈重複渲染
>不可以用for 迴圈 本身是個 statements 而非 expressions，執行的時候並不會有回傳值，因此不能直接放到 JSX 中的 {} 內去執行
- 重複渲染物件Render 多個 Component
  - 可以參考react的array Map用法說明 [列表與 Key](https://zh-hant.reactjs.org/docs/lists-and-keys.html) ->[練習](https://github.com/yumememooo/counter-water/commit/90adbbdec4100f4f49010bce5305446e1780b3e6)

```
 {[...Array(7)].map((item, index) => <div> {index + 1} <Counter /> </div>)}
```

-----
### day 9 單位轉換器
- dribbble 版型 +  FontAwesome 
-  `<React.Fragment>竟然還可以縮寫成 <>`

- 拆分組建
https://ithelp.ithome.com.tw/articles/10221113


- 父組件傳給子組件-透過解構賦值把 props 內需要用到的變數取出
- 須注意hook不能放進條件式中
https://ithelp.ithome.com.tw/articles/10221577


- props 就是指由外部傳入該組件內的資料，以上圖為例，就是因為在使用該組件時是透過 <Counter maxNumber="30" minNumber="21" startingValue="25" /> 這種方式把資料帶入該組件內的。

>hooks 裡面的 State 表示的是該組件自身內部的資料，也就是使用 useState 產生的資料。
不論是 props 或 state 的值都可以直接在 React 開發者工具內進行修改，這在檢查程式邏輯的時候非常方便，例如我們可以直接透過修改 state 或 maxNumber 等欄位看看畫面是不是如我們預期的，在特定條件下「向上／下箭頭」就會消失：

- React 開發者工具
TBD 碼表...效能檢視 Profilers
https://ithelp.ithome.com.tw/articles/10222217

- 及時天氣的API註冊
https://ithelp.ithome.com.tw/articles/10222662

NPM 趨勢比較圖
https://www.npmtrends.com/


- 可以將SVG當作組件傳入
- motion的區塊用法
#theme組件props傳入區塊用法
https://ithelp.ithome.com.tw/articles/10223594

#API與陣列操作
- setState的相關包覆寫法，要把相關的一些欄位都放進status裡，另外set時不能只寫出要修改或添加的物件屬性
https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables
```
https://ithelp.ithome.com.tw/articles/10224031
const weatherElements = locationData.weatherElement.reduce(
  (neededElements, item) => {
    if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
      neededElements[item.elementName] = item.elementValue;
    }
    return neededElements;
  },
  {}
);


```
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)
陣列.reduce(回調函數[累積,目前值,目前陣列,陣列],初始值)
這個陣列可以再指派出去。

- 無窮迴圈的發生(待看TBD) useEffect與setState的順序練習
- 組件渲染完後，如果 dependencies 有改變，才會呼叫 useEffect 內的 function
- useEffect意思與可以在裡面做手動更改 DOM 畫面，而不是透過讓React 組件內 state 改變而更新畫面呈現的方式
https://ithelp.ithome.com.tw/articles/10224270

- 請求多個API時要更正的setState,prestate
https://ithelp.ithome.com.tw/articles/10224650


#優化UX 請求多個API造成畫面兩次渲染。
改成當API資訊都完成後再更新畫面，ES6 後更多人使用的則是 Promise 和 async/awit function。
位置寫錯的錯誤思考?如果將useEffort內的function寫在外面會發生什麼事?React Hooks ESLint Plugin 顯示錯誤提示??只是寫法風格問題
看體驗，當然有時候可以分兩次渲染
https://ithelp.ithome.com.tw/articles/10225102

- 新增onclick重新整理，套用useEffort裡的function
為了建立可共用function->Hooks ESLint Plugin 顯示錯誤提示
#把 fetchData 放到 dependencies 中(原來函示可以放在這邊@@?)，因為 fetchData 是一個函式，而在 JavaScript 中函式本質上就是物件的一種，物件在 JavaScript 中直接用 === 判斷並不是直接看屬性名稱和屬性值相不相同來決定的。-->避免 useEffect 內的函式不斷執行 - useCallback 的使用

https://ithelp.ithome.com.tw/articles/10225504

- 陣列判斷
Object的處理
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
- useMemo 的使用:複雜的運算，因此除非有特定資料改變，否則不希望每次畫面重新渲染時都要在重新計算一次
https://ithelp.ithome.com.tw/articles/10225927

#載入中的旋轉動畫控制 css-in-js 判斷
#解構賦值的優化使用解說
https://ithelp.ithome.com.tw/articles/10226579

- 主題套用ThemeProvider
直接在 DevTools 中將 light 改成 dark 試試看
https://ithelp.ithome.com.tw/articles/10226957

- 整體組件成不同檔案與用prop傳值
- 自己做Custom Hook(後端理解為function具有回傳值，就是在做function而已)
https://ithelp.ithome.com.tw/articles/10227282

#讓子層組件可以修改父層組件的資料狀態 作法是一樣的
https://ithelp.ithome.com.tw/articles/10227537
#Controlled vs Uncontrolled Components 的寫法比較
##在 React 中表單元素的處理主要可以分成兩種 Controlled 和 Uncontrolled 這兩種
##像是 <input /> 這類的表單元素本身就可以保有自己的資料狀態，可以直接透過 JavaScript 再取出該元素的值，因為使用者輸入的內容可以直接保存在 <input /> 元素內。
##針對表單元素， React 會建議我們使用 Controlled Components，基本上使用 Controlled Components 和 Uncontrolled Components 都能達到一樣或類似的效果
##提醒：多數的表單元素都可以交給 React 處理，除了上傳檔案用的 <input type="file" /> 例外，因為該元素有安全性的疑慮，JavaScript 只能取值而不能改值，只能透過 Uncontrolled Components 的方式處理。
#- Uncontrolled Components - useRef 的使用但要特別留意的是：「當 input 欄位內的資料有變動時，並不像 Controlled Component 一樣會促發畫面重新渲染」，因此，若有重新渲染畫面的需求，建議還是使用 Controlled Component 來處理

##有些時候想要看某個組件被重新渲染了幾次，就可以類似這樣寫
https://ithelp.ithome.com.tw/articles/10227866


##將使用者設定地區保存下來：useEffect 搭配 localStorage
https://ithelp.ithome.com.tw/articles/10228132

#發布Github Pages 使用 CSS Reset & 搬移專案
https://ithelp.ithome.com.tw/articles/10228423

##PWA概念，把網站漸進成APP serviceWorker
https://ithelp.ithome.com.tw/articles/10228556
