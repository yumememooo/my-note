---
title: "[go] struct & tag"

---


### A結構裡的資料要assign給B

``` go 原始寫法
package main

import (
	"fmt"
)

type User struct {
	Name string
	Age  int
......................略
}

type Employee struct {
	Name string
	Age  int
	Role string
......................略
}

func main() {
	user := User{Name: "dj", Age: 18}
	employee := Employee{Name: user.Name, Age: user.Age} //這裡要寫多次
	fmt.Printf("%#v\n", employee)

}
```

//網路上找到的庫copier， 星星有1.9k
https://zhuanlan.zhihu.com/p/113301827



網路疑問
https://stackoverflow.com/questions/37246473/copy-one-struct-to-another-where-structs-have-same-members-and-different-types

一般的轉型應用
bar := Bar(foo)  轉型只能用在基礎類型全都一樣才可以(除了tag)

### tag


#### golang中json與struct中tag
https://www.itread01.com/content/1544652920.html

-：不要解析這個欄位

https://stackoverflow.com/questions/10858787/what-are-the-uses-for-tags-in-go
Usually a dash value ('-') for the "value" means to exclude the field 

https://stackoverflow.com/questions/53144276/omit-multiple-fields-with-mgo

This looks like a typo. To ignore a field, the tag value must be a `hyphen`, not an underscore.

```
Profit     float64    `json:"profit" bson:"-"`
//這樣寫表示要秀出json 但是bson不要解析就不會存進mongo了

```
- 連字號 (-) Hyphen 
- 連接號 (–) En Dash
- 破折號 (—) Em Dash
- 長度的不同，很多人搞混

### 巢狀架構 inline

巢狀架構 一個架構放入另一個架構
如果存入到MONGO會多了一層架構，這時就要加入`bson:",inline"`避免

type Cube struct {
    Square `bson:",inline"`
    Depth  int
}

https://stackoverflow.com/questions/20849591/storing-nested-structs-with-mgo



### String Formatting

[Go by Example: String Formatting](https://gobyexample.com/string-formatting)


### 空结构体
- [go语言-空结构体/ chan struct{}](https://blog.csdn.net/inthat/article/details/106917358)
	- 空结构体也不需要填充字节
	- chan struct{}:通过消息来共享数据是golang的一种设计哲学，channel则是这种哲理的体现。stop 它是一个管道chan，内部的数据类型是struct{}。