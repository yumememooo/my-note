


# all goroutines are asleep

有的時候會報錯fatal error: all goroutines are asleep - deadlock!
有的時候不會，如果拿掉ListenAndServe會報錯，因為"all"goroutines，沒有其他goroutines了。
大多時候可能會因為引用lib有goroutines而沒辦法看到這段錯誤訊息

Fatal 致命的

[golang 在这段代码中未检测到deadlock]
https://segmentfault.com/q/1010000022795442


```
package main

import (
	"fmt"
	"log"
	"net/http"
	_ "net/http/pprof"
	"runtime"

	"time"
)

func main() {

	go func() {
		log.Println(http.ListenAndServe("localhost:6060", nil))
	}()
	leak()
	time.Sleep(100 * time.Second)
}

func leak() {
	ch1 := make(chan int)
	for {
		select {
		case <-ch1:
			{
			fmt.Println("ch1 pop one")// goroutine線在等一個永遠不會來的資料，那整個程式就永遠等下去了

			}
		}
	}
}
```


### log.Fatal()和panic()函数

- [golang的log.Fatal()和panic()函数的区别](https://www.jianshu.com/p/f85ecae6e7df)
 - Exit與Fatal與和panic的差別
	- Exit與Fatal defer函数不会执行, panic會defer
	- 总结panic()就有点类似java语言的exception的处理，因而panic的行为和java的exception处理行为就非常类似，行为结合catch，和final语句块的处理流程。
	- 其中某一层函数定义了recover()功能??? TBD