---
title: "[go] Continuous Profiling"
sidebar_position: 1
---

### go Continuous Profiling
谷歌還發布了Stackdriver Profiler，這是一項連續分析服務，每個人都可以使用。

[Cloud Profiler]https://cloud.google.com/profiler/


連續分析和執行
https://medium.com/@tvii/continuous-profiling-and-go-6c0ab4d2504b
我一直在研究profefe，這是一個用於連續分析的開放系統。該項目仍處於實驗狀態，但已準備好進行早期測試和反饋。

https://github.com/profefe/profefe
FAQ
Does continuous profiling affect the performance of the production?
To reduce the costs, users can adjust the frequency of collection rounds, e.g. collect 10 seconds of CPU profiles every 5 minutes.

conprof - Continuous Profiling
https://github.com/conprof/conprof
聊聊 Conprof 和可观测性
https://zhuanlan.zhihu.com/p/277376091