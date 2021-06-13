---
title: "[go] struct"
sidebar_position: 1
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

