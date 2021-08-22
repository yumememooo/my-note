---
title: "[go] trace"

---

### go 優化工具
https://ifun.dev/post/golang-concurrency/
使用pprof进行分析/使用trace来查看执行过程

[Go调优神器trace介绍]
https://studygolang.com/articles/9693
当完成关键任务的goroutine被阻止运行时，可能会引起延迟问题。 可能的原因有很多：做系统调用时被阻塞; 被共享内存阻塞（通道/互斥等）; 被runtime系统（例如GC）阻塞，甚至可能调度程序不像您想要的那样频繁地运行关键goroutine。

所有这些都可以使用go tool trace来识别

Golang跟踪剖析trace的使用
https://blog.csdn.net/u013474436/article/details/105232768
查看方法

golang性能诊断看这篇就够了
https://zhuanlan.zhihu.com/p/345413502
针对GO应用，性能诊断工具主要分为两层:OS层面和GO应用层面(go tool pprof /trace /gc)
Go: Trace 包探秘
https://xie.infoq.cn/article/59670a5b5c9fc7ddc4c24f598
查看方法

https://zhuanlan.zhihu.com/p/345413502
trace & GC問題
