---
title: "JMETER的使用"

---



JMETER在linex底下的指令apache-jmeter-4.0
只要將GUI版本設定完後另存jmx檔案
然後把apache-jmeter-4.0與jmx檔案丟進linux
然後建立report位置，到時會自動生成test.jtl與其他檔案，內有html可以打開就是報告了。
sudo sh jmeter -n -t /home/eda/testTool/jmx/httppush-u1-5m_stage201.jmx -l /home/eda/testTool/report/test.jtl -e -o /home/eda/testTool/report/test

GNU / Linux 各種壓縮與解壓縮指令

http://note.drx.tw/2008/04/command.html

Jmeter分布式执行报错解决方法汇总
https://cloud.tencent.com/developer/article/1540047