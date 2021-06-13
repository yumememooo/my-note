---
title: "位元與數字"
sidebar_position: 1
---






##### 位元與進位

- Bit:電腦資料都是以一個位元(0或1)儲存，相當於二進位

- 二進位 (Binary，bin)
- 十進位 (Decimal，dec)
- 十六進位 (Hexadecimal，hex)，數字符號：0~ 10, A~F


#### 進位轉換
- 可以藉由十進位除以X進位得餘數，來轉換為別的進位
- 其他進位轉換成十進位可以依數字 * 原本進位數次來換成十進位
    - Binary(11)=1 * 2^1 + 1* 2^0=Decimal(3)

[二、八、十與十六進位 (數字系統) 轉換教學](https://www.footmark.info/introduction-to-computer/digital-system-conversion/)


#### 資料型態

- [go-識預定義型態](https://openhome.cc/Gossip/Go/PreDeclaredType.html)

- uint不帶正負號，int帶正負號，後面數字代表長度為幾位元。
- Ex: 8bit=☐☐☐☐☐☐☐☐ 八個位元,
    - uint8:不帶正負號，Binary二進位:00000000 ~ 11111111，轉十進位為0~255
    - int8, 轉換成帶正負號、 8 位元的整數

可以在[進位換算計算機](https://dec.0123456789.tw/)輸入轉換

##### 資料型態範圍
```
uint8  : 0 ~ 255
uint16 : 0 ~ 65535
uint32 : 0 ~ 4294967295
uint64 : 0 ~ 18446744073709551615
int8   : -128 ~ 127
int16  : -32768 ~ 32767
int32  : -2147483648 ~ 2147483647
int64  : -9223372036854775808 ~ 9223372036854775807
```




