---
title: "[go] switch"

---

### go switch
Go 的 switch 语句类似于 C、C++、Java、JavaScript 和 PHP 中的，不过 Go 只运行选定的 case，而非之后所有的 case。 实际上，Go 自动提供了在这些语言中每个 case 后面所需的 break 语句。 除非以 fallthrough 语句结束，否则分支会自动终止。 Go 的另一点重要的不同在于 switch 的 case 无需为常量，且取值不必为整数。playground: https://tour.go-zh.org/flowcontrol/9

switch 语句执行的过程从上至下，直到找到匹配项，匹配项后面也不需要再加 break。
switch 默认情况下 case 最后自带 break 语句，匹配成功后就不会执行其他 case，如果我们需要执行后面的 case，可以使用 fallthrough 。
https://www.runoob.com/go/go-switch-statement.html
