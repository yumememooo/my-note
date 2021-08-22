---
title: "程式的啟動速度"
sidebar_position: 1
---

GO特性:体积更小、启动速度快


我手上的JAVA REST SpringBootApplication
 Started Application in 24.512 seconds
大約啟動速度是要20秒


手上的golang REST GIN 啟動速度
 Service started in: 12.536676ms


[你们的项目启动时间是几秒?]
(https://www.joyk.com/dig/detail/1624376067831542)


裡面有提到
网上能搜到,是 SpringBoot 启动优化的

具体参数是 `-XX:TieredStopAtLevel=1 -Xmx1024M -Xms1024m -noverify `

開發階段加了之後Started Application in 8.254 seconds，竟然縮短到八秒了!!

雖然不及go，但好很多了。

更多可以看
[Spring Boot启动速度慢的原因总结](https://www.javatt.com/p/98532)
[Spring Boot 启动速度优化](https://zhangkesheng.github.io/2018/06/19/Spring%20Boot%20Start-up/)

