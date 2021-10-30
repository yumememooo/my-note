


## 這天要推github提供推不上了

2021/08/14要從vscode推上code 提供推不上去

錯誤訊息
···
> git push origin master:master
remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
fatal: unable to access 'https://github.com/yumememooo/my-note.git/': The requested URL returned error: 403

···

看了文章說明，Any apps/services that access Git repositories on GitHub.com directly using your password
似乎不能直接輸入密碼連結了，推薦改用token或ＳＳＨ key
For developers, if you are using a password to authenticate Git operations with GitHub.com today, you must begin using a personal access token over HTTPS (recommended) or SSH key by August 13, 2021, to avoid disruption. 

### 用token
1.要先去github生成token
https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
注意生成之後只會看到一次，之後都看不到了，要先記住．

Settings->Developer settings->Personal access tokens

1. 要先去ＭＡＣ的應用程式找到鑰匙圈,找github先刪除．
https://stackoverflow.com/questions/68191392/password-authentication-is-temporarily-disabled-as-part-of-a-brownout-please-us
2. 再推一次會問你密碼....這時竟然是要輸入token, 就傳上去了＝＝
這時候鑰匙圈存取裡面存的會是token 不像之前是明碼．

=====================================