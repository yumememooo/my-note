---
title: "[go] channel"

---

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



### goroutine
- [控制协程(goroutine)的并发数量](https://geektutu.com/post/hpg-concurrency-control.html)
	- 根據寫法的不同 可以透過控制channel大小來開goroutine，达到了协程并发控制的目的。
	- 目前有很多第三方库实现了协程池，可以很方便地用来控制协程的并发数量TBD
	- 调整系统资源的上限 TBD