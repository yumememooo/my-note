---
title: "[go] pprof"

---

### go  pprof

---------------------------


- [golang 程式效能調優](https://www.gushiciku.cn/pl/gQFE/zh-tw)
    - 在 golang 程式中，有哪些內容需要除錯優化？
    - golang 效能除錯優化方法：
        - Benchmark：基準測試，對特定程式碼的執行時間和記憶體資訊等進行測試
        - Profiling：程式分析，程式的執行畫像，在程式執行期間，通過取樣收集的資料對程式進行分析
        - Trace：跟蹤，在程式執行期間，通過採集發生的事件資料對程式進行分析
    - profiling 和 trace 有啥區別？ profiling 分析沒有時間線，trace 分析有時間線。
    - pprof
```
- pprof 是 golang 官方提供的效能調優分析工具，可以對程式進行效能分析，並可視化資料
- runtime/pprof：採集程式執行資料進行效能分析，一般用於後臺工具型應用，這種應用執行一段時間就結束
- net/http/pprof：對 runtime/pprof 的二次封裝，一般是服務型應用。比如 web server ，它一直執行。這個包對提供的 http 服務進行資料採集分析。
```

- [Golang中性能剖析 PProf](https://www.huaweicloud.com/articles/760089e5e8665e2397024ce2b9c39871.html)
pprof开启后，每隔一段时间（10ms）就会收集下当前的堆栈信息，获取各个函数占用的CPU以及内存资源；最后通过对这些采样数据进行分析，形成一个性能分析报告。

http://127.0.0.1:6060/debug/pprof/
/debug/pprof/profile：访问这个链接会自动进行 CPU profiling，持续 30s，并生成一个文件供下载

/debug/pprof/block：Goroutine阻塞事件的记录。默认每发生一次阻塞事件时取样一次。

/debug/pprof/goroutines：活跃Goroutine的信息的记录。仅在获取时取样一次。

/debug/pprof/heap： 堆内存分配情况的记录。默认每分配512K字节时取样一次。

/debug/pprof/mutex: 查看争用互斥锁的持有者。

/debug/pprof/threadcreate: 系统线程创建情况的记录。 仅在获取时取样一次。

- 获取的 Profiling 数据是动态的，要想获得有效的数据，请保证应用处于较大的负载

## 生產環境到底可不可以用？？

- [你不知道的 Go 之 pprof](https://segmentfault.com/a/1190000040152398)
    - CPU profiling/Memory profiling 代码编译自動寫入到某文件裡
    - 如果线上遇到 CPU 或内存占用过高，该怎么办呢？总不能将上面的 Profile 代码编译到生产环境吧，这无疑会极大地影响性能。net/http/pprof提供了一个方法，不使用时不会造成任何影响，遇到问题时可以开启 profiling 帮助我们排查问题。我们只需要使用import这个包，然后在一个新的 goroutine 中调用http.ListenAndServe()在某个端口启动一个默认的 HTTP 服务器即可
- [你的 pprof 暴露了](https://lightfish.cn/2018-03-25-translate-your-pprof-is-showing)
    - 安全问题 :显示函数名与文件路径:可能揭示商业敏感信息,分析会降低性能，为 DoS 攻击增加助攻
    - 预防 ：需要安排两台HTTP服务器 pprof服务监听本地6060端口并且限于本地访问
    - net/http/pprof 是很强大，但是请不要让你的调试信息暴露给全世界，遵循以上预防措施，你会没事的。
- [is it ok to use golang pprof on production without effecting performance?](https://stackoverflow.com/questions/64057727/is-it-ok-to-use-golang-pprof-on-production-without-effecting-performance)
    - Jaana Dogan (AWS技術總監＠＠) does say in her article "Continuous Profiling of Go programs"
    - pprof is safe to use in production.We target an additional 5% overhead for CPU and heap allocation profiling.
- [Continuous Profiling of Go programs](https://medium.com/google-cloud/continuous-profiling-of-go-programs-96d4416af77b)
    - 但這篇文章他講的是Google Cloud Profiler的產品 https://cloud.google.com/profiler/ ＠＠


---------------------------

- [高效能 Golang 程式 — 效能測量及分析](https://www.google.com/search?q=%E9%AB%98%E6%95%88%E8%83%BD+Golang+%E7%A8%8B%E5%BC%8F+%E2%80%94+%E6%95%88%E8%83%BD%E6%B8%AC%E9%87%8F%E5%8F%8A%E5%88%86%E6%9E%90&rlz=1C1GCEU_zh-TWTW857TW857&oq=%E9%AB%98%E6%95%88%E8%83%BD+Golang+%E7%A8%8B%E5%BC%8F+%E2%80%94+%E6%95%88%E8%83%BD%E6%B8%AC%E9%87%8F%E5%8F%8A%E5%88%86%E6%9E%90&aqs=chrome..69i57j69i60&sourceid=chrome&ie=UTF-8)
    - 當 CPU 分析啟用時，runtime 會每隔 10ms 中斷一次，並且紀錄當前運行 goroutines 的 stack trace
    - 千萬不要同時使用多種分析工具


- [application-monitoring-with-the-prometheus-client-and-groundwork-monitor](https://www.gwos.com/application-monitoring-with-the-prometheus-client-and-groundwork-monitor/)

- [pyroscope](https://pyroscope.io/docs/golang )


- [「csdn」 一看就懂系列之Golang的pprof](https://blog.csdn.net/u011957758/article/details/104612543)
    - 各種狀況

- [Go 高效能系列教程之二：效能評估和分析](https://iter01.com/601727.html)



- [[Day 17] Oops！Golang - 讓我們來抓出吃資源的兇手！](https://ithelp.ithome.com.tw/articles/10235172)
```
關於go tool pprof http://localhost:6060/debug/pprof/heap
請問進入之後 是否就只是只能看下go tool pprof的那個時間點發生的狀況。
裡面不管怎麼下top，看起來都是一樣的數值。

但如果使用瀏覽器 http://localhost:6060/debug/pprof
一直刷新是會看到有變化的。

所以應該是要再有問題發生的當下準確的下go tool pprof 才能看到問題對嗎?
```
-->自問自答 對！！


另外，https://github.com/google/pprof 的 pprof 功能更完整，它的網頁介面已支援 flamegraph。資料多的時候，應該比較方便了解大體情況。
安裝和用法如下:
$ go get github.com/google/pprof
$ pprof -http=0.0.0.0:8080 profile.out
注意這裡直接用 pprof，而不是用 Go 內建的 go tool pprof。
https://medium.com/@fcamel/go-%E7%9A%84-cpu-%E5%92%8C-blocking-profiling-a8bc3d902a3f


- [golang pprof 使用简介](https://www.jianshu.com/p/d97b095cd98a)
    - UI web 界面

- [csdn Golang使用pprof进行性能优化](https://blog.csdn.net/u013474436/article/details/103540507)


- [Golang性能分析和监控](https://teddygoodman.github.io/posts/golang-performance-flame-graph/)
    - 提到tool pprof 和 package pprof
    - Prometheus 用法

## 效能分析的文章

- [Go 语言高性能编程](https://github.com/geektutu/high-performance-go)
- 第一章 性能分析
并发编程 控制协程的并发数量 sync.Pool 复用对象 编译优化   逃逸分析对性能的影响