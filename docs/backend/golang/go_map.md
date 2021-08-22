---
title: "[GO]MAP的併發問題"

---



### GOLANG的MAP的併發問題


[Day5 .[重災經驗篇] gorutine與map的讀寫](https://ithelp.ithome.com.tw/articles/10218003)

[[GOLANG FAQ 有關MAP的問題]](https://golang.org/doc/faq#atomic_maps)
- contain a special check that automatically reports at run time when a map is modified unsafely by concurrent execution.
- Map程式執行會報錯誤

[競爭併發得trace](https://ifun.dev/post/golang-concurrency/)

關於map的競爭解法說明
[慎用golang中的map，特别是在并发操作中](https://www.jianshu.com/p/0c8519f4498e)

[golang-fatal-error-concurrent-map-read-and-map-write](https://stackoverflow.com/questions/45585589/golang-fatal-error-concurrent-map-read-and-map-write/45585833)

```
Control access to the map with sync.RWMutex{}. Use this option if you have single reads and writes, not loops over the map. See RWMutex

Use a syncmap.Map{} instead of a normal map. This map is already taking care of race issues but may be slower depending on your usage. syncmap.Map{}s main advantage lies with for loops. See syncmap
```

[[Golang中sync.Map的實現原理]](https://www.gushiciku.cn/pl/peIP/zh-tw)
- 需要併發讀寫時，一般的做法是加鎖，但這樣效能並不高，Go語言在 1.9 版本中提供了一種效率較高的併發安全的 sync.Map

---
### sync.Map的用法以及原理

[為什麼 Go Map 和 Slice 是非線性安全的？](https://www.gushiciku.cn/pl/gEdt/zh-tw)
其實Slice也是非線性安全，但需自行處理之，
Go 語言的 sync.Map 支援併發讀寫 map，採取了 “空間換時間” 的機制，但預設的Map不支援，Go 官方在經過了長時間的討論後，認為 Go map 更應適配典型使用場景。


[由浅入深聊聊Golang的sync.Map](https://studygolang.com/articles/22128)

不适用于大量写的场景，这样会导致read map读不到数据而进一步加锁读取，同时dirty map也会一直晋升为read map，整体性能较差。sync.Map适用场景：大量读，少量写與證明

------------------------------
TBD: 從解說看來syncmap.Map似乎更適合用於有loop read map時，但是如果是大量寫，少量讀也是嗎?從解說看來是，但不確定該說的大量比率如何詮釋，待研究確認。



 i <= 100
end:98.0947msalloc [280272]      heapAlloc [280272]      HeapInuse [950272]      Goroutine[3]
Update Unlock
end:1m40.0204304salloc [303160]          heapAlloc [303160]      HeapInuse [802816]      Goroutine[3]









目的:
需要維護不同的非同步工作(job)，並記錄最後的完成時間。
另一方面，需要定期去查看所有工作的最後完成時間並做紀錄上傳，上傳後即刪除目前維護的時間。


遇到問題:
知道如果非同步存取相同的變數會有data race的問題，透過go run -race可檢測。

解決方法:
1.使用鎖 2.使用syncMap

結果:
方法1竟然鎖不住? 追查結果是因為重複create map 變數的地方有問題
方法2成功

```go lock map
package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	newTimeMapCache()
	go func() {
		for {
			time.Sleep(5 * time.Second)
			for device, time := range TimeMap().AllMap() {
				fmt.Printf("read TimeMap job(%s) time(%d)\n", device, time)
			}
			//record then remove all
			TimeMap().RemoveAllMap()
		}
	}()

	jobRetry_Ch := make(chan string, 2)
	for w := uint(1); w <= 2; w++ {
		go Woker(w, jobRetry_Ch)
	}
	for i := 0; i < 10; i++ {
		go func(i int) {
			jobRetry_Ch <- fmt.Sprintf("job_%d", i)

		}(i)
	}

	time.Sleep(20 * time.Second)
	fmt.Printf("end")
}

func Woker(id uint, jobs <-chan string) {
	for j := range jobs {
		time := time.Now().UnixNano()
		TimeMap().Update(fmt.Sprintf("job_%s", j), time)

	}
	fmt.Println("end RetryPushWoker", id)
}

var (
	tmc *timeMapCache
	mu  sync.RWMutex
)

type TimeMapCache interface {
	AllMap() map[string]int64
	Update(jobID string, time int64)
	RemoveAllMap()
}

type timeMapCache struct {
	timeMap map[string]int64 // key is device id, and value is push time
}

func (d *timeMapCache) AllMap() map[string]int64 {
	mu.RLock()
	defer mu.RUnlock()
	return d.timeMap
}

func (d *timeMapCache) Update(jobID string, time int64) {
	fmt.Println("Update Lock")
	mu.Lock()
	defer mu.Unlock()
	d.timeMap[jobID] = time //why can't lock??
	fmt.Printf("Update key(%s) value(%d) \n", jobID, time)
	fmt.Println("Update Unlock")
}

func (d *timeMapCache) RemoveAllMap() {
	mu.Lock()
	defer mu.Unlock()
	d.timeMap = make(map[string]int64)
}
func newTimeMapCache() TimeMapCache {
	timeMap := make(map[string]int64)
	tmc = &timeMapCache{timeMap: timeMap}
	return tmc
}

func TimeMap() TimeMapCache {
	// if tmc == nil {
	// 	newTimeMapCache() // will cause data race
	// }
	return tmc

}

```

方法二:
sync.Map，該包中的Map提供了Store、Load、Delete、Range等操。並且sync包中的Map是開箱可用的，也即是聲明後就可以直接使用
```GO sync.Map
package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {

	go func() {
		for {
			time.Sleep(5 * time.Second)
			TimeMap.Range(func(key, value interface{}) bool {
				fmt.Printf("read TimeMap job(%s) time(%d)\n", key, value)
				DeleteTimeMap(key.(string))
				return true
			})

		}
	}()
	for i := 0; i < 10; i++ {
		go func(i int) {
			time := time.Now().UnixNano()
			UpdateTimeMap(fmt.Sprintf("job_%d", i), time)
		}(i)
	}

	time.Sleep(20 * time.Second)
	fmt.Printf("end")
}

var TimeMap sync.Map

func UpdateTimeMap(jobID string, time int64) {
	fmt.Println("Update Lock")
	TimeMap.Store(jobID, time)
	fmt.Printf("Update key(%s) value(%d) \n", jobID, time)
	fmt.Println("Update Unlock")
}
func DeleteTimeMap(jobID string) {
	TimeMap.Delete(jobID)
}

```

