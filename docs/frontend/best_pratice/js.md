---
title: "JS更好的寫法"
---


### JS的好文

#### [[筆記] 談談JavaScript中函式的參數(parameter),arguments和展開運算子(spread)](https://pjchender.blogspot.com/2016/04/javascriptparameterargumentsspread.html)
- 在ＪＳ中函數可以不輸入參數，但是可以判斷引數arguments長度來避免沒有輸入的處理，透過輸入arguments可以得到一個類陣列，就是一個可能沒有所有陣列功能的陣列喔．
- 處理可能沒值得寫法name=name||'Myname';


#### 物件屬性名稱縮寫（Shorthand property names）
- Key 與 Value 名稱相同，可進行縮寫
- 物件內可直接省略 function 關鍵字進行縮寫

- [【 JavaScript ES6 】屬性與函式縮寫 Shorthand Property and Method Names](https://learningsky.io/shorthand-property-and-method-names/)
```js
const hello = 'world'

const obj = {
  hello
}

console.log(obj.hello === 'world')
console.log(Object.keys(obj))
console.log(typeof obj.hello)
```
- [Shorthand Property and Method Names in JavaScript | ES6](https://ui.dev/shorthand-properties/)
```js
function formatMessage (name, id, avatar) {
  return {
    name,
    id,
    avatar,
    timestamp: Date.now(),
    save () {
      //save message
    }
  }
}
```

#### ES6 - 解構賦值 Destructuring assignment
可以把陣列或物件中的資料解開擷取成為獨立變數
詳細請見:[MDN-解構賦值](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [透過解構賦值取出物件中的物件](https://ithelp.ithome.com.tw/articles/10217085)
```javascript
const o = {p: 42, q: true};
const {p, q} = o;

console.log(p); // 42
console.log(q); // true
```
  - 預設值
當解構物件中對應的值是 undefined 時，變數可以設定預設值。
  - 指派到新的變數名稱
```javascript
const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
  ```
  - 從作為函式參數的物件中提出某屬性的值
     userId({id}) ,userId(user)
  - 巢狀物件或陣列的解構
  - 循環取出的解構
  - 以物件演算屬性名稱解構
  - 在物件解構時使用其餘變數
  - 混合使用矩陣及物件解構

