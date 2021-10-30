---
title: "[go] channel 介紹"

---

---------------------------

### channel
Do not communicate by sharing memory; instead, share memory by communicating.
- [总结了才知道，原来channel有这么多用法！](https://segmentfault.com/a/1190000017958702)
- [[研討會心得] 20190730 GolangTW @M Space - Introducing the go channel and pipeline buffered/unbuffered channel](https://www.evanlin.com/golangtw43/)

### channel 生产者消费者
- [golang channel多生产者和多消费者实例](https://www.cnblogs.com/ExMan/p/12408655.html)
- [Go---channel实现生产者消费者](https://blog.csdn.net/u012050154/article/details/78926470)
	- 無緩衝與有緩衝區的簡單範例說明

- [几个常见的并发模型——生产者消费者模型【Golang 入门系列十七】](https://cloud.tencent.com/developer/article/1559262)
	- 万一消费者处理数据很慢，生产者只能无端浪费时间。使用了生产者／消费者模式之后，生产者和消费者可以是两个独立的并发主体。生产者把制造出来的数据往缓冲区一丢，就可以再去生产下一个数据。基本上不用依赖消费者的处理速度。
其实最当初这个生产者消费者模式，主要就是用来处理并发问题的。
	- 如果生产者制造数据的速度时快时慢，缓冲区的好处就体现出来了。当数据制造快的时候，消费者来不及处理，未处理的数据可以暂时存在缓冲区中。等生产者的制造速度慢下来，消费者再慢慢处理掉。


### 关于channel要make多大的问题
- [关于channel要make多大的问题](https://golangtc.com/t/54866a98421aa93d90000098)
很可能你实际上不需要10K长度的channel，如果看上去需要，实际上可能是你的消费者的速度太慢导致。你应该增加消费者的速度或数量；或者减少生产者的速度或数量。应该从这方面去想解决方法。

- [Channel最佳实践之基本规则译](https://cloud.tencent.com/developer/news/67994)
官方的go编译器限制channel里的单个元素最多65535个字节，也就是说如果channel缓冲数组里面容纳的是struct，那这个struct的size不能大过65535。尽管如此，我们也不应该传递体积过大的元素值，因为channel的数据从进入到流出会涉及到数据拷贝操作。如果元素体积过大，最好的方法还是使用`传递指针来取代传递值`。

延伸：
- [golang 傳值、傳指標 觀點](https://medium.com/caesars-study-review-on-web-development/golang-%E5%82%B3%E5%80%BC-%E5%82%B3%E6%8C%87%E6%A8%99-%E8%A7%80%E9%BB%9E-20bcdd42169a)

>經常可以聽到一種說法，如果 struct 結構很大，為了避免 copy 整個結構，所以會建議用 by pointer ，只傳遞指標效率較好。
golang 在編譯時會進行逃逸分析 ( escape analysis ) ，傳遞指標的話，系統有可能會暗自的將相關變數移往 heap ，基本判斷方法，看你沒有在後續的系統中繼續引用該變數，有的話變數就會逃逸到 heap，更多參考可查 [1]。
當 heap 逐漸累積，到達某個大小，就會引起 GC ( garbage collection ) ，為了 mark 哪些變數還有繼續被引用，總不能 mark 後變數又改變狀態，這樣判斷就會不準確，因此整個系統會短暫的停擺，也就是所謂的 STW ( Stop-the-world ) ， 頻繁的觸發 GC 對整體系統的效能會有引響。
Pacer 是用來決定，什麼樣的情況觸發下一次的 GC cycle， GC 發生時，清除多餘了垃圾，標記目前活躍的 live memory ，並且設定下次 GC 發生的條件是 heap 的大小為 live memory 的兩倍時 [2]。兩倍並不是固定值，可調整環境變數 GOGC 其預設值是 100 [3]， 表示垃圾為 live memory 的 100% 也就是 garbage + live memory = heap = 2倍 live memory。
說完了 by pointer 的缺點 ， 來看看 by value 的好處， by value 則是會將變數 copy 到 stack 上， stack 在函數結束時，就會自己消滅，可以減少 GC 觸發的次數。
到底哪個方式效率比較好，只看單點函數傳遞，指標傳遞效率是較好的，但以系統面來說，還是要做 benchmark 的檢測，才能判斷。

- 沒有用@@

### goroutine
- [控制协程(goroutine)的并发数量](https://geektutu.com/post/hpg-concurrency-control.html)
	- 根據寫法的不同 可以透過控制channel大小來開goroutine，达到了协程并发控制的目的。
	- 目前有很多第三方库实现了协程池，可以很方便地用来控制协程的并发数量TBD
	- 调整系统资源的上限 TBD