---
title: "golang的那些小事"
hide_title: true
---


# golang的那些小事

## 对比三款 Go Playground：你喜欢哪款？

https://jishuin.proginn.com/p/763bfbd2f333

重要的资料，及时整理备份
Go playground内容不确定是否是永久保存，目前看4年前的内容还可以访问，也有偶尔丢失的情况，从DB中没查到，提示在edit.go中
http://niliu.me/articles/3186.html


## go upgrade

從go1.15升到go 1.16
發現直接跑go run,不會幫忙抓沒有的相依。

```
要用下方指令去抓取
go get <package>[@<version>];
go mod tidy 也可以；
```
Go 1.16 中關於 go get 和 go install 你必須注意的地方
https://www.gushiciku.cn/pl/ggKn/zh-tw