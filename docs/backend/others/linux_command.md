---
title: "[command]linux 歷史紀錄"
sidebar_position: 1
---

https://stackoverflow.com/questions/38526588/linux-command-history-with-date-and-time

```
echo 'export HISTTIMEFORMAT="%d/%m/%y %T "' >> ~/.bash_profile
source ~/.bash_profile
```

history | grep "XXXX"