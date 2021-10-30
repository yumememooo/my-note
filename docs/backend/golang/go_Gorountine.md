---
title: "[go] Gorountine 併發介紹"

---


---------------------------

# Gorountine
一種golang的協程？

>以下為個人學習上節錄網路資訊,皆有附上原文連結,可以點入原文看更多細節


## 多執行緒
- [電腦的核心 (Core) 和執行緒 (Tread)](https://jenifers001d.github.io/2020/08/04/%E9%9B%BB%E8%85%A6%E7%9F%A5%E8%AD%98/what-is-core-and-thread/
- 淺談多核CPU、多執行緒與平行計算](https://www.itread01.com/content/1549608874.html
    - 多執行緒的作用不只是用作平行計算
    - 阻塞在什麼時候發生呢？一般是等待IO操作（磁碟，資料庫，網路等等）。
    - 在單核時代，多執行緒的這個消除阻塞的作用還可以叫做“併發”，這和並行是有著本質的不同的。併發是“偽並行”，看似並行，而實際上還是一個CPU在執行一切事物，只是切換的太快，我們沒法察覺罷了。
    - 四種場景？？不懂
- [對於多執行緒程式，單核cpu與多核cpu是怎麼工作的](https://www.itread01.com/content/1544961004.html)
    - 多執行緒在單cpu中其實也是順序執行的，，不過系統可以幫你切換那個執行而已，效率不會有提高的≤切換執行緒反倒會增加開銷
    - `多執行緒的用處在於，做某個耗時的操作時，需要等待返回結果，這時用多執行緒可以提高程式併發程度`。如果一個不需要任何等待並且順序執行能夠完成的任務，用多執行緒簡直是浪費。
    - 什麼時候該使用多執行緒呢？這要分四種情況討論：？？不懂
- [【恐龍】理解 Process & Thread](https://medium.com/erens-tech-book/%E7%90%86%E8%A7%A3-process-thread-94a40721b492)
    - 併發不一定要在同一時刻？並發未必平行
- [15分鐘讀懂程序執行緒、同步非同步、阻塞非阻塞、併發並行，太實用了！](https://www.gushiciku.cn/pl/pcJA/zh-tw)
    - 多執行緒：火車站開n個視窗

## 併發與平行
- [ＩＴ邦 程序(進程)、執行緒(線程)、協程，傻傻分得清楚！](https://ithelp.ithome.com.tw/articles/10242047)
    - 程arallel 並行是利用多個 CPU 達到同時並行處理任務的需求（也就是同一個時間點有許多任務在同時執行）
    - Concurrent 則是許多任務在爭搶同一個 CPU 的資源，因此一個時間點只會有一個任務正在執行，只是因為切換非常快，使用者通常不會感覺到任務實際上一直在切換。 (單核是，但多核怪怪的 併發不一定要在同一時刻？並發未必平行)
    ![](https://miro.medium.com/max/1108/1*7GZrAWoGc_nZtuvHIJ9w-w.jpeg)

- [goroutine個人筆記 concurrency (併發) vs parallelism (並行)](https://hsinyu.gitbooks.io/golang_note/content/goroutine.html)覺得process圖這篇怪怪的
    - `M:N圖`
- [Concurrency-vs-Parallelism](https://www.codeproject.com/Articles/1267757/Concurrency-vs-Parallelism) 
    - 這圖畫得比較好

## 線程與協程
- [ＩＴ邦 程序(進程)、執行緒(線程)、協程，傻傻分得清楚！](https://ithelp.ithome.com.tw/articles/10242047)
    - MultiProcessing 多進程 & MultiThreadingf 多線程

- [Day 18 | Kotlin 中處理異步的好伙伴 - Coroutine](https://ithelp.ithome.com.tw/articles/10239629)
    - 程式（Application ）>進程（ Process ）>線程/執行緒（ Thread ) >協程（ Coroutine ） 
    - Process 之間是不能直接溝通的（如果可以任意呼叫到其他應用程式裏面的內容，那也有點太可怕了）
    - Thread 共享資源
    - 協程（ Coroutine ） ： Coroutine 一次只會執行一個 Job ，會透過頻繁切換 Job 達到類似異步的效果，需要的資源比開新的 Thread 少  `圖`


- [30-08 之應用層的 I/O 優化 ( 維護性 ) - 協程 Coroutine](https://ithelp.ithome.com.tw/articles/10219673)
    - coroutine 協程:在應用層實現同步非阻塞的 I/O 操作
    - 異步非阻塞寫法:callback hell->同步非阻塞寫法(在 nodejs 中的 async/await 就是協程)
    - coroutine 協程實現原理:應用端內部會『 自行 』的決定誰先執行
    - 關於 Coroutine 的幾個問題:coroutine是性能的減項,此應用已是一個異步非阻塞的應用，當你搭配 coroutine 下去，會減少不少的維護成本，因為寫法就和一般程式寫法一樣。
    - `Golang 的 Goroutine?-> 是coroutine嗎？`一半算，goroutine 有實現 corotuine 想完成的『同步』這個事情，但同時間它又針對 cpu 運算這方面在實現上增加不少改善
    - Golang 的運行架構:Sched+MPG 模型,goroutine 在運行時阻塞了會自動的分配到閒的 thread `有調度解說`


### 非阻塞 I/O 模型 Reactor
- [30-07 之應用層的 I/O 優化 - 非阻塞 I/O 模型 Reactor](https://ithelp.ithome.com.tw/articles/10219203)
當系統 I/O 操作繁重時，請使用 refactor 模式的支援語言或是框架。
當系統 CPU 運算繁重時，則使用 multi process 的模式。

## Goroutine 是coroutine嗎？
- 上面說一半算
- [goroutine和coroutine的区别](http://c.biancheng.net/view/96.html)
    - `goroutine 可能发生并行执行`；但 coroutine 始终顺序执行。
    - goroutines 通过通道来通信；coroutines 通过让出和恢复操作来通信 (goroutine 间使用 channel 通信，coroutine 使用 yield 和 resume 操作。)
    - goroutines 比 coroutines 更强大
    - goroutine 可能发生在多线程环境下，goroutine 无法控制自己获取高优先度支持；coroutine 始终发生在单线程，coroutine 程序需要主动交出控制权，宿主才能获得控制权并将控制权交给其他 coroutine。
    - coroutine 的运行机制属于协作式任务处理，如果开发者无意间或者故意让应用程序长时间占用 CPU，操作系统也无能为力
    - goroutine 属于抢占式任务处理，已经和现有的多线程和多进程任务处理非常类似。应用程序对 CPU 的控制最终还需要由操作系统来管理，操作系统如果发现一个应用程序长时间大量地占用 CPU，那么用户有权终止这个任务。
- [Go goroutine 是協程嗎？stackoverflow](https://stackoverflow.com/questions/18058164/is-a-go-goroutine-a-coroutine)
- [python协程与golang协程精讲](https://www.huaweicloud.com/articles/949bec4beeb84dfcaea30513b3d497c8.html)
    - Python的协程源于yield指令
    - Go实现了两种并发形式:
        - 多线程共享内存。如Java或者C++等在多线程中共享数据（例如数组、Map、或者某个结构体或对象）的时候，通过锁来访问.
        - Go语言特有的，也是Go语言推荐的：CSP（communicating sequential processes）并发模型。Go的CSP并发模型实现M, P, G : 
    - go的协程本质上还是系统的线程调用，而Python中的协程是eventloop模型实现，所以虽然都叫协程,Python 中的协程是严格的 1:N 关系一个线程对应了多个协程。虽然可以实现异步I/O，但是不能有效利用多核
    - 而 Go 中是 M:N 的关系也就是 N 个协程会映射分配到 M 个线程上多个线程能分配到不同核心上,CPU 密集的应用使用 goroutine 也会获得加速.
即使有少量阻塞的操作，也只会阻塞某个 worker 线程，而不会把整个程序阻塞
    - goroutine 中不需要显式使用 await 交出控制权，但是 Go 也不会严格按照时间片去调度 goroutine，而是会在可能阻塞的地方插入调度。goroutine 的调度可以看做是半抢占式的。

## Coroutine
這邊是講傳統的協程用法 yield
- [Coroutine: 入門篇](https://electronic.blue/blog/2012/06/11-coroutine-an-introduction/)
- [如何编写 C++ 20 协程(Coroutines)](https://mp.weixin.qq.com/s/6sN2hdxCNWiDfizWdzS2yA)
    - C++协程就是一个可以挂起(suspend)和恢复(resume)的函数(




### 所以？？
- [多進程/多執行緒！ 並發/平行？](https://codychen.me/2019/12/%E5%A4%9A%E9%80%B2%E7%A8%8B/%E5%A4%9A%E5%9F%B7%E8%A1%8C%E7%B7%92-%E4%B8%A6%E7%99%BC/%E5%B9%B3%E8%A1%8C/) 看完更不懂了

- Ｑ多核多執行緒是否就是平行處理？
- Ｑ：多核下的併發是否可以是一些平行處理一些併發處理？？
    - 這兩個問題在IT 邦幫忙有得到解答：）https://ithelp.ithome.com.tw/articles/10218483

- [Go FAQ 問題](https://www.gushiciku.cn/pl/2P2w/zh-tw)


---------------
## 影1 线程和协程的区别
1.（影）为什么golang能够脱颖而出？线程和协程的区别是什么？

1.1 線程是跟硬件相關的 會消耗佔用ＣＰＵ 內存等等
線程是軟件的概念 像是函數 method？ 類似是消息的隊列

1.2 創建goruntine的開銷是比較小的 速度也快很多
可以創建一百萬兩百萬的協程沒有問題
但就做不到創建一百萬兩百萬個線程了 慢且ＣＰＵ沒有這麼多core，內存被消耗得很厲害

1.3 線程都有一個唯一的ＩＤ來標示，“Goroutine沒有？”

#### 延伸閱讀：為什麼沒有Goroutine ID
- [Go 羣友提問：進程、線程都有 ID，為什麼 Goroutine 沒有 ID？](https://www.gushiciku.cn/pl/gYQQ/zh-hk)
- 在常規的進程、線程中都有其 ID 的概念，我們可以在程序中通過 ID 來獲取其他進程、線程中的數據，甚至是傳輸數據。就像一把鑰匙一樣，有了他幹啥都可以。
-  Go 語言在以前是有暴露方法去獲取 GoroutineID 的，但在 Go1.4 後就把該方法給隱藏起來了，不建議大家使用。假設可以通過 GoroutineID 進行跨協程操縱，那麼就有可能出現我的 Goroutine，不一定是由 “我” 自己決定的。可能其他正在處理的 GoroutineB 悄悄摸摸的改了我這個 GoroutineA 的行為。
這就有可能導致一個災難問題
- 其實還是可以寫程式去拿到Goroutine ID的，而去排查 Go 工程中的問題，例如：錯誤堆棧信息、PProf 性能分析等調試信息也可以看到。

1.4 通信方式
線程適用全局變量還要加鎖保證數據沒有,,,？？？
協程使用channel 


---------

看起來同步的方式去寫出異步 非阻塞式掛起

------
`不太懂`

[沈崴 - 为什么协程是真并行而线程不是](https://www.youtube.com/watch?v=uJXSMMyvAgM)
攜程也是可以多核
協程可以控制上下文 把邏輯切換點作為調度點?
協程是真並行?

----------------


## goroutine入门 
- [Golang 入门 : goroutine(协程)](https://www.cnblogs.com/sparkdev/p/10930168.html)
    - 要在一个协程中运行函数，直接在调用函数时添加关键字 go 就可以了
    - 协程也叫轻量级的线程，与传统的进程和线程相比，协程的最大特点是 "轻"！可以轻松创建上百万个协程而不会导致系统资源衰竭。
    - 多数编程语言在语法层面并不直接支持协程，而是通过库的方式支持。但是用库的方式支持的功能往往不是很完整，比如仅仅提供轻量级线程的创建、销毁和切换等能力。如果在这样的协程中调用一个同步 IO 操作，比如网络通信、本地文件读写，都会阻塞其他的并发执行的协程，从而无法达到轻量级线程本身期望达到的目标。
    - Golang 在语言级别支持协程，称之为 goroutine。Golang 标准库提供的所有系统调用操作(包括所有的同步 IO 操作)，都会出让 CPU 给其他 goroutine。这让 goroutine 的切换管理不依赖于系统的线程和进程，也不依赖于 CPU 的核心数量，而是交给 Golang 的运行时统一调度。
- [What are channels in Golang?](https://www.educative.io/edpresso/what-are-channels-in-golang)     `可愛的通道圖`
- [Golang协程详解和应用](https://zhuanlan.zhihu.com/p/74047342)
    - 并发还并行? 程式碼
    - 如果当前CPU是单核，那么上面程序就是并发执行，如果当前CPU是多核，那就是并行执行，结果都是一样的->说明单核CPU只能并发，不能并行


demoe:https://play.golang.org/p/ZR_Y6ugAgfW

## channel 介紹
- [# Day15 給我Go通道- Golang Channel (Block vs Deadlock)](https://ithelp.ithome.com.tw/articles/10241501) it幫幫忙
    - Unbuffered 是需要有同時有 一頭寫入、另一頭讀出
    - 讀寫速率要控制在一定的範圍內，Channel中的緩衝區塊才能起到作用。
    若寫入通道中的速度永遠大於寫入速度（塞娃娃的速度永遠比用娃娃來的快），那麼給再多再大的倉庫放，永遠都會有不夠放的一天。
    - 但是若是實作上真的有需求，可以透過一些trick的手段達成、模擬無限通道這件事 ？？？ＴＢＤ，
    例如使用 slice 來記錄通道中的東西。

- [pjchender [Golang] goroutines, channels, and concurrency](https://pjchender.dev/golang/goroutine-channels-concurrency/)
    - 可宣告單一通道@@ unidirectional channels `TBD`
    - 當 channel 本身就有值時，就不會走到 default，但如果 channel 執行的當下沒有值，還需要等其他 goroutine 設值到 channel 的話，就會直接走到 default
    -  worker pool 指的是有許多的 goroutines 同步的進行一個工作。要建立 worker pool，會先建立許多的 worker goroutine

- [Go channel的使用场景与注意项](https://blog.csdn.net/QiuHaoqian/article/details/113103478)
    - 信号通知 数据传递 
    - 生产消费模型 控制并发数
    - 执行任务超时
    - 自定义互斥锁
    - 注意channel 的哪些操作会引发 panic？只有提到關閉等發送問題

- [使用Select实现无阻塞读写](https://segmentfault.com/a/1190000017537297)
	- 无论是有缓存通道、无缓冲通道都存在阻塞的情况。
	- 示例代码是使用select修改后的无缓冲通道和有缓冲通道的读写,select+defalut
	- 使用Select+超时改善无阻塞读写,使用定时器替代default可以解决这个问题，给通道增加读写数据的容忍时间

### issue
- [IT邦幫忙發問](https://ithelp.ithome.com.tw/articles/10218923)
    - 設計錯誤 來源端應該限流設計 `TBD`

##  data race
- [15 Go语言并发1——Goroutine](https://segmentfault.com/a/1190000018719287)
    - Go 調度器
    - 简单使用waitgroup同步
    - 如何解决资源竞争和线程同步，这就有两类，一类是传统的方式——加锁，另一类是go语言有的通过chanel,采用`csp模型，即通过通信去共享内存，而不是通过共享内存而通信。`
    - `原子函数atomic` 然可以解决资源竞争问题，但是比较都是比较简单的，支持的数据类型也有限。所以，sync 提供了互斥锁来解决
    - sync包里提供了一种互斥型的锁，可以让我们自己灵活的控制哪些代码，同时只能有一个goroutine访问，被sync互斥锁控制的这段代码范围，被称之为临界区，临界区的代码，同一时间，只能有一个goroutine访问。代码如下
    - `读写锁`:goroutine进行写操作的时候，其他goroutine既不能进行读操作，也不能进行写操作。
- [Day10 Race Condition](https://ithelp.ithome.com.tw/articles/10239243)
    - race condition(或稱data race)  提到用channel與鎖做相加，有圖有程式碼,下一篇有效能對比
- [Go 簡單例子來理解 sync.Mutex 和 sync.RWMutex](https://clouding.city/go/mutex-rwmutex/)
    - 用讀寫鎖效能更好 有程式碼範例
- [Go: 关于锁（mutex）的一些使用注意事项](https://mozillazg.com/2019/04/notes-about-go-lock-mutex.html)
    - 尽量减少锁的持有时间 善用defer
    - copy 结构体操作可能导致非预期的死锁 使用 go vet 工具检查代码中锁的使用问题 ??? `TBD`
    - build/test 时使用 -race 参数以便运行时检测数据竞争问题
    - 使用 go-deadlock 检测死锁或锁等待问题`TBD`
    - 实现 tryLock 功能:一般 Lock() 如果拿不到锁的话，会一直阻塞在那里
    - 改为使用 channel:有些时候可能使用 channel 会更符合需求，合适的场景选择合适的方法即可，既不需要畏惧 channel 也不必畏惧 lock 。
        - （可以参考 [Share Memory By Communicating - The Go Blog](https://blog.golang.org/codelab-share) 这篇文章）`TBD`

- [闪电侠的小黑板](https://chende.ren/2020/12/28140907-009-concurrency.html)
    - 資料競爭的三種處理 圖 
    - 原子操作 互斥鎖 ｃｈａｎｎｅｌ 介紹與程式碼
- [用一個小例子談談 Golang 中的 Race Condition](https://larrylu.blog/race-condition-in-golang-c49a6e242259)
    - 透過 Race Detector 幾乎可以找到所有的 race condition，大部分時候也都只要加個鎖就可以解決
    - 鎖的缺點 不如用個迴圈把它從 0 加到 10000 可能還更快?


### 岩生


- 别混淆数据争用(data race) 和竞态条件(race condition)
https://blog.csdn.net/gg_18826075157/article/details/72582939 ？？看不懂

- Golang Taipei Gathering 分享 - Golang Race Detector under the hood
https://kkc.github.io/2021/06/29/golang-race-detector/
裡面的程式沒有 Data race，但是有 Race condition

#### Thread-Safety
-[[Java] Thread-Safety是什麼 – Part 2](https://ithelp.ithome.com.tw/articles/10229824?sc=rss.qu)
    - 在同一時間只有一個thread能存取synchronized method。

>執行緒安全 (Thread-safe)
現代程式設計為了提升效能，通常採用多執行緒的方式執行，但若沒有注意執行緒安全，往往會造成意想不到的錯誤。
- 查詢發現 JAVA也有讀寫鎖
- [Java Concurrency #2 - Thread Safety](https://www.gss.com.tw/blog/java-concurrency-2-thread-safety)
    - Race condition 就是某個運算的結果要看運氣才會正確，而且是因為多個 Thread 因為時間差或 相互交織(interleave) 造成的，就可以這麼稱呼這個現象

### Go Worker Pool
有一種寫法是可以開多個消費接收端進行處理，`但效能如何看？？ TBD` 
- [Go by Example: Worker Pools](https://gobyexample.com/worker-pools)
- [concurrency - Go Worker Pool似乎没有同时处理](https://www.coder.work/article/1027330)


### 關於到底什麼時候用鎖 go 鎖與channel選用??？？

- [如何理解“Do not communicate by sharing memory; instead, share memory by communicating.”？](https://www.zhihu.com/question/27596075)
    - communicate by sharing memory需要考虑加锁避免race condition,加锁又会提高开发及调试难度。而 share memory by communicating则可以将对共享资源(memory)的访问串行化，于是就不用考虑race condition了。后者有点像UI编程的消息驱动模型。
    - 其实这两种模式在Go语言都有很好的支持，所以我觉得这句话可以理解为宣传channel之优雅的一句口号而已，实际使用时还是应该具体问题具体分析。
- [golang 互斥锁的两种实现](https://www.jianshu.com/p/039732010f1c)
    - channel 本质上是一个MessageQueue，主要用于协程之间消息的传递，虽然也可以拿来当互斥锁（但是正常还是应该让mutex做）
    - channel成本更高，channel内部有Mutex.....从这里我们可以看出channel 里面不只有互斥锁,大柴小用
- [IT邦幫忙 Day11 Mutex vs Channel](https://ithelp.ithome.com.tw/articles/10239933)
    - Benchmark: 一般情況下，如果我們只是想避免變數上的污染，大可放心的使用較簡易的 mutex lock。畢竟他效能佳且使用較為直覺
- [IT邦幫忙發問 [golang] 使用channel與鎖遇到狀況的選用？](https://ithelp.ithome.com.tw/questions/10204745)

- [Go语言并发--传统锁与channel的选择](https://blog.csdn.net/windows_2015/article/details/108695948)
    - 有確認流程圖 但我看不懂`TBD`



---------------

## 推薦 IT邦幫忙教學文
- [# Day14 Go併發症狀- Goroutines (go)](https://ithelp.ithome.com.tw/articles/10240892)
    - 併發(Concurrency)是共享時間運算，在一段時間內輪流享有時間資源 ，是把時間切成很小很小段，在這小段的時間裡先後執行多項任務。一個人在一段時間內做兩件事
    - 併行(Parallelism)是平行運算，一直都能享有時間資源,是CPU有多個核心，可以同時處理多個任務。,兩個人同時在做事
    - Go併發（Goroutines）是輕量級的線程。
    - 入門使用及限制一個ＣＰＵ核心runtime.GOMAXPROCS(1)時, Goroutine 仍可以切換．

- [Go 的並發：Goroutine 與 Channel 介紹](https://ithelp.ithome.com.tw/articles/10212068?sc=pt)
    - 介紹單執行緒與多執行緒下Goroutine 的圖示
    - 互斥與channel
    - `TBD Q`

- [Channel, goroutine之間的溝通橋樑](https://ithelp.ithome.com.tw/articles/10218923)
    - Channel就像是一個輸送帶, 遵守著FIFO的規則, 保證收發資料的順序.
    - 多個goroutine為了搶奪存取資料, 勢必造成執行效率的低下, 使用queue是一種高效率的同步存取方式, channel就是一種queue一樣的結構.
    - channel 宣告介紹 ＋ `緩衝與無緩衝 圖`·
    - 發送資料量必須在消費方處理量+通道長度的範圍內, 才能正確的處理
    - 不要透過共享變數+Mutex來進行操作, 應該透過channel來共享
    - 對channel的操作行為整理 close slect& 發布端跟訂閱端這裡的使用場景....
    - `TBD Q`

- [Goroutine 讓你用少少的線程, 能接受更多的工作, 但沒說會作比較快](https://ithelp.ithome.com.tw/articles/10218483)
    - 一個goroutine大小大概2kb-4kb, 非常的小, 所以要管理個上千上萬個goroutine是相對於其他語言, 比較不佔記憶體的.
    - Go的併發同步模型是採用CSP(Communicating Sequential Process), 是一種訊息傳遞模式, 不是透過對資料加上lock來做同步存取, 而是透過CSP在goroutine之間傳遞訊息, channel在多個goroutine之間進行同步通信與交換.
    - 單核的情形下, Goroutine跟 NodeJS的EventLoop(1:m映射)很相似.
    - 多核心多線程, goroutine會生成多個邏輯處理器在調度器間處理, 每個上會有很多goroutines (n:m映射). 
    - Concurrency 圖 滿足Go跟Node的設計哲學, "用較少的資源作更多的事情". ＋ Parallelism goroutine在不同的系統線程M上執行.但如果要實現平行, 需要自己讓代碼執行在有多個物理cpu上. （`重要`）
    - `TBD Q`


- [Day09] 進程、線程、協程，傻傻分得清楚！](https://ithelp.ithome.com.tw/articles/10242047)
    - `圖 Concurrent & Parallel + 圖  進程、線程、協程`
    - 名詞對照


##  goroutine 調度模型
- [探究 goroutine 併發調度模型](https://www.readfog.com/a/1634446830986170368)
    - 官方宣稱原生 goroutine 併發成千上萬不成問題。實現併發編程，goroutine 具有消耗資源低、運行效率高等特點
    -  Go 調度器需要將衆多 goroutine 按照一定的算法調度到操作系統的線程上執行。這種在語言層面自帶調度器的，稱之爲原生支持併發。
    - 操作系統會爲每個線程分配固定大小（一般是 2MB）的內存塊做棧。線程在內核切換上下文是很慢的。
    - `動態棧`:goroutine 的棧不是固定的，一開始以一個很小的棧空間（2KB）開啓生命週期，棧的大小會根據需要動態伸縮。
    - `調度器的切換成本`Go 調度器是在其本身運行的用戶層進行調度的，不需要進入內核的上下文切換，調度成本會低很多。
- [Go goroutine理解](https://zhuanlan.zhihu.com/p/60613088)
    - Goroutine和其他语言的协程（coroutine）在使用方式上类似， 因此Goroutine可以理解为一种Go语言的协程。同时它可以运行在一个或多个线程上。
    - Go实现了两种并发形式。第一种是大家普遍认知的：多线程共享内存。其实就是Java或者C++等语言中的多线程开发。另外一种是Go语言特有的，也是Go语言推荐的：CSP（communicating sequential processes）并发模型。
    - GO并发模型的实现原理 `TBD hard`  M:N的圖
    - 每个 goroutine (协程) 默认占用内存远比 Java 、C 的线程少（goroutine：2KB ，线程：8MB）
    - Golang可以控制Goroutine的调度，从而在一个合适的时间进行GC。在应用层模拟的线程，它避免了上下文切换的额外耗费，兼顾了多线程的优点。简化了高并发程序的复杂度。缺点：协程调度机制无法实现公平调度。
- [深度解密Go语言之 scheduler](https://zhuanlan.zhihu.com/p/80853548)
    - `M:N 模型`:Go runtime 会负责 goroutine 的生老病死，从创建到销毁，都一手包办。Runtime 会在程序启动的时候，创建 M 个线程（CPU 执行调度的单位），之后创建的 N 个 goroutine 都会依附在这 M 个线程上执行。这就是 M:N 模型：向一个 channel 发送数据，被阻塞）时，runtime 会把当前 goroutine 调度走，让其他 goroutine 来执行。目的就是不让一个线程闲着，榨干 CPU 的每一滴油水。
    - 限制同时运行（不包含阻塞）的线程数为 N，N 等于 CPU 的核心数目；
    - scheduler 的陷阱:于 Go 语言中运行时间过长的 goroutine，Go scheduler 有一个后台线程在持续监控，一旦发现 goroutine 运行超过 10 ms，会设置 goroutine 的“抢占标志位”

## 可以用開的goroutines數量
- [为什么 Go 允许百万级别的 goroutines，而 Java 只允许数千级别的 threads?](https://zhuanlan.zhihu.com/p/162668146)
    - `Thread` CPUs 中的每一个 Core 在同一时刻只能真正并发执行一个 logic thread[1]。这就产生了一个结论：如果你的 threads 个数大于 CPU 的 Core 个数的话，有一部分的 Threads 就必须要暂停来让其他 Threads 工作，
    - 使用操作系统层面的 thread，每一个 thread 都需要耗费静态的大量的内存,果使用1MB的栈默认值，那么创建1000个 threads ，将使用 1GB 的 RAM ，虽然 RAM 现在很便宜，但是如果要创建一亿个 threads ，就需要T级别的内存。
    - 新建的一个 Goroutine 实际只占用 4KB 的栈空间。一个栈只占用 4KB，1GB 的内存可以创建 250 万个 Goroutine，相对于 Java 一个栈占用 1MB 的内存，这的确是一个很大的提高。
    - 在 JVM 中上下文的切换是很慢的
        - 评论: go的百万goroutine调度慢到吓人，内存占用也高到恐怖.而真正实现百万级调度还基本可用的是C#的task
        - 为啥C#支持无上限的协程，而Go只支持百万级？一个脑子正常的java程序员不可能开上千个thread






## Go DOC
- effective_go](https://golang.org/doc/effective_go)

### effective_go
高效的 Go 编程 中文翻譯

- [高效的 Go 编程](https://learnku.com/docs/effective-go/2020/concurrent/6249)
    - 併發
        - `Share by communicating`:不要通過共享內存來通信，而應通過通信來共享內存。
        - channel & channels `有看沒懂ＴＢＤ`
        - `並行化`程式碼 注意不要混淆并发（concurrency）和并行（parallelism）的概念：并发是用可独立执行组件构造程序的方法， 而并行则是为了效率在多 CPU 上平行地进行计算。尽管 Go 的并发特性能够让某些问题更易构造成并行计算， 但 Go 仍然是种并发而非并行的语言，且 Go 的模型并不适合所有的并行问题。 关于其中区别的讨论，


## Goroutine Pool
- 那些年我們追的 Goroutine Pool
https://medium.com/17media-tech/%E9%82%A3%E4%BA%9B%E5%B9%B4%E6%88%91%E5%80%91%E8%BF%BD%E7%9A%84-goroutine-pool-e8d211757ee

## 與其他語言的比較
- [Go VS Java：一位資深程式設計師對兩種語言的解讀](https://www.gushiciku.cn/pl/gJKi/zh-tw)
    - 在Go中程序之間的通訊可以通過共享記憶體(並不推薦)和共享通道來完成。它允許開發者使用GoMaxProcs環境變數定義一個多核心的健壯且流暢有併發系統。
    - Go提供了一種特殊模式-race(競賽)來執行二進位制檔案，並同時檢查執行情況。通過此機制來證明軟體是併發安全的。
- [Java 微服務能像 Go 一樣快嗎？](https://www.gushiciku.cn/dl/1psO4/zh-hk)
    - 在核心及內存容量更高的計算機上，Java 性能更好；在較小 / 性能較弱的計算機上，Go 性能更好。2020?
- [Java’s Thread model and Golang Goroutine 比較](https://medium.com/cymetrics/javas-thread-model-and-golang-goroutine-46f8475600ae)
    - 實際上目前 Java 有個 Loom Project，就是要在 JVM 上實作類似 goroutine 機制的 virtual thread。
- [Java微服務 vs Go微服務，究竟誰更強！？ 2020](https://iter01.com/581149.html)
	- 程式碼路徑非常短（只是操縱字串）
	- GO在2012年釋出了1.0版本（比JAVA晚了16年）
	- Java似乎比Go更善於使用所有可用的核心/執行緒—我們在Java測試中看到了更好的CPU利用率。Java效能在擁有更多核心和記憶體的機器上更好，Go效能在較小/功能較弱的機器上更好。在一臺“生產規模”的機器上，Java很容易就和Go一樣快，或者更快
	- 源代碼 https://github.com/markxnelson/go-java-go
- [Let's Golang](https://ithelp.ithome.com.tw/articles/10191148)
    - C/C++ 雖然快，但 Go 的開發效率比較高
    - 有討論是說 Java 與 Go 的效能差不多， Go 的程式碼比較少，可維護性自然比較高
- [ 3.8. Go 性能说明](https://learnku.com/docs/the-way-to-go/go-performance-description/3580)
    - Go 语言与 C 语言的性能差距大概在 10%~20% (2013)
    - 在最理想的情况下，Go 能够和 C++ 一样快，比 Scala 快 2 至 3 倍，比 Java 快 5 至 10 倍。(2011)
    - Go 的二进制文件体积是最大的（每个可执行文件都包含 runtime）。!!
- [Go 与 C++ 的对比和比较](http://blog.itpub.net/70001864/viewspace-2780863/)
    - Go isn’t magnitudes slower than C++ , 從內文看 除非追求極致才要用Ｃ

## others
- [微薄搜索](https://s.weibo.com/weibo/%25E5%258D%2594%25E7%25A8%258B?topnav=1&wvr=6&b=1)




======================


## 高併發下的問題


### 回收問題

- morestack 與 goroutine pool
https://www.readfog.com/a/1632193367810084864
- goroutine栈的申请与释放
https://blog.haohtml.com/archives/30403
当一个g运行结束的时候，可能会释放stack（只是有可能），原因在於可能被復用?
