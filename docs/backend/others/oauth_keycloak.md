---
title: "[security]oauth/Keycloak了解"
sidebar_position: 1
---



### OAuth

參考文章：
- [OAuth 2.0 授權框架](https://ithelp.ithome.com.tw/articles/10225956?sc=rss.iron)
  - OAuth 2.0 Grant Type授權類型 [內有startuml流程圖]
    - Authorization code grant
    - Resource owner password credentials grant 能用在授權伺服器對第三方應用程式有足夠的信任（如，公司內部服務串接），不然像 Facebook 帳號密碼提供給第三方應用程式處理，其實是非常不安全的。
    - Implicit grant 可以用於如 SPA 或 App 等，沒有後端服務的場景。
    - client credentials grant 類似之前 API 身分驗證所提到的信任服務機制，屬於服務與服務之間的串接，而不經由使用者
- [OAuth 是什麼? 跟 SSO 有什麼關係或差別?](https://yu-jack.github.io/2020/04/13/sso-vs-oauth/)
    - OAuth 是一種授權框架, 而不是認證框架
    - SSO 是一種認證的方式, 而不是授權的方式
    - 認證: 使用者拿著帳號密碼去登入網站, 這叫做認證
    - 授權: 使用者登入後, 開始依照本身的權限去操作, 這叫做授權





## keycloack
Keycloak as Authorization Server
### intro
- [oidc-generic.adoc](https://github.com/keycloak/keycloak-documentation/blob/main/securing_apps/topics/oidc/oidc-generic.adoc)
  - /realms/{realm-name}/.well-known/openid-configuration OpenID Connect 實現相關的端點和其他配置選項
  - /auth 授權端點執行最終用戶的身份驗證。這是通過將用戶代理重定向到此端點來完成的。
  - /token 令牌端點用於獲取令牌 
  - token/introspect 用於檢索令牌的活動狀態。換句話說，您可以使用它來驗證訪問或刷新令牌。它只能由機密客戶端調用。
  - /userinfo 用token可以拿到自身的資訊
  - /logout用戶代理可以重定向到端點，在這種情況下，活動用戶會話將被註銷。之後，用戶代理被重定向回應用程序。
  端點也可以由應用程序直接調用。要直接調用此端點，需要包含刷新令牌以及驗證客戶端所需的憑據。
  - Resource Owner Password Credentials - limitations of using this flow
  - Client Initiated Backchannel Authentication Grant???
  - v重定向 URI 使用基於重定向的流時，為您的客戶端使用有效的重定向 uri 很重要。還有一些特殊的重定向 URI


- [https://www.baeldung.com/postman-keycloak-endpoints](https://www.baeldung.com/postman-keycloak-endpoints)
  - authorization_endpoint 我們不會在 Postman 中使用這個端點。相反，我們通常通過瀏覽器啟動授權碼流程。如果沒有可用的活動登錄 cookie，Keycloak 會將用戶重定向到登錄頁面。最後，授權碼被傳送到重定向 URL。
  - 跟上述一樣提供token/userinfo的postman打法
  -  token/introspect將client_id、client_secret和token作為表單參數傳遞


  ### use


註冊client:
Client Protocol:openid-connect/saml [目前是選前者]

------------------
Authorization Grant(四種獲得Token的方式)

1.authorization code()
當用戶授權應用程序時，他們將被重定向回帶有 URL 中的臨時代碼的應用程序(/auth)然後使用代碼向應用程序(/token)交換AcessToken。/auth 會出現授權服務器的登入畫面，會產生session_code，一方面存在Keycloak裡，一方存在瀏覽器的Cookies裡面，如果登入過的話下一次會帶上Cookies就會直接登入不會出現登入畫面，如果登出Keycloak存的session就會清空，下一次需重新登入。

測試不管是由瀏覽器打還是後端打，都會跳出Keycloak登入畫面。
form body參考:
code: /auth帶回的授權碼，只能用一次
grant_type: authorization_code
client_id: client-react-sample
redirect_uri: http://10.144.57.109:3000/ //登入成功後會帶回前端位址,需註冊

2.implicit (隱藏式) 
應用場景主要是在沒有後端的純前端應用上，
會跳出Keycloak登入畫面，跟上述差不多只是少了一道code的拿取。

3.password (密碼模式)
此種方式通常較不推薦，安全性較低，
後端可以用password (密碼模式)，直接拿到token，
form body參考:
client_id:admin-cli
username:eda_admin
password:12345
grant_type:password
在這種模式下，測試不出SSO的用法@@

4.Client Credentials(憑證式)
針對程式間的身分驗證，會需要註冊拿到clientSecret/clientID。
不需使用者帳密即可拿取Token，
Token的權限設定需要再client-Service Accounts裡面再另外定義。
form body參考grant_type:client_credentials/client_secret:xxx/clientID



參考文章:
gin-oauth2-example
https://github.com/davidleitw/gin-oauth2-example
Keycloak的SSO功能与cookie的关系
https://blog.csdn.net/wdquan19851029/article/details/111887107
理解OAuth 2.0
https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html
這邊有詳述四種模式得流程，可以知道前端登入時發生什麼事，但從開發者模式倒是看不出來ˊˋ

GO语言实现 自动登陆华为云并获取cookies 详解（兼介绍SSO单点登陆）
https://bbs.huaweicloud.com/blogs/detail/113066


------

### start

#keycloak
https://www.keycloak.org/getting-started/getting-started-docker


## 啟動keycloak


	- 使用docker
docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:15.0.2

*啟動有時候會卡住 等他一下

	- 使用docker-compose 同時啟動keycloak-postgres

https://github.com/keycloak/keycloak-containers/blob/main/docker-compose-examples/keycloak-postgres.yml

### 啟動完畢開啟管理介面
http://127.0.0.1:8080/auth/

D:\dockerComposeTest\keycloak

### clieny 端Access Type設定
Access Type  OIDC 客戶端型別
The first is Access Type with three possible values:

Bearer-only – this is for services that rely solely on the bearer token included in the request and never initiate login on their own. It’s typically used for securing the back-end.

Confidential – clients of this type need to provide a secret in order to initiate the login process.

Public – since we have no real way of hiding the secret in a JS-based browser app, this is what we need to stick with.
https://scalac.io/blog/user-authentication-keycloak-1/
• 
• confidential：機密訪問型別用於服務端客戶端（需要執行瀏覽器登入和需要客戶端密碼）。這個型別用於服務端應用程式。???
• public：Public 訪問型別是客戶端型別客戶端（需要執行瀏覽器登入）。客戶端型別應用程式沒有安全儲存祕密的方式。相反，通過為客戶端配置正確的重定向 URI 來限制訪問非常重要。
• bearer-only：Bearer-only 訪問型別意味著應用程式僅允許 bearer 令牌請求。如果開啟這個，應用程式不能參與瀏覽器登入。

來自 <https://www.gushiciku.cn/pl/gRfq/zh-tw> 

更改設定

### clieny 端Access Type設定
Access Type  OIDC 客戶端型別
The first is Access Type with three possible values:

Bearer-only – this is for services that rely solely on the bearer token included in the request and never initiate login on their own. It’s typically used for securing the back-end.

Confidential – clients of this type need to provide a secret in order to initiate the login process.

Public – since we have no real way of hiding the secret in a JS-based browser app, this is what we need to stick with.
https://scalac.io/blog/user-authentication-keycloak-1/
• 
• confidential：機密訪問型別用於服務端客戶端（需要執行瀏覽器登入和需要客戶端密碼）。這個型別用於服務端應用程式。???
• public：Public 訪問型別是客戶端型別客戶端（需要執行瀏覽器登入）。客戶端型別應用程式沒有安全儲存祕密的方式。相反，通過為客戶端配置正確的重定向 URI 來限制訪問非常重要。
• bearer-only：Bearer-only 訪問型別意味著應用程式僅允許 bearer 令牌請求。如果開啟這個，應用程式不能參與瀏覽器登入。

來自 <https://www.gushiciku.cn/pl/gRfq/zh-tw> 

更改設定



## 建立一個APP



## 打開網頁




## React 範例
Keycloak与React集成应用（上篇）：用户登录
https://yglong.com/posts/frontend/keycloak-react-integration-01.html

## 後端golang的範例
https://stackoverflow.com/questions/48855122/keycloak-adaptor-for-golang-application

以上三個應用都是可以實作跳出SSO登入頁面做登入


POSTMAN



這樣打按下Get New Access Token 就會跳出登入框


{
    "name": "OAuth 2.0",
    "request": {
        "auth": {
            "type": "oauth2",
            "oauth2": [
                {
                    "key": "accessTokenUrl",
                    "value": "http://localhost:8080/auth/realms/demo/protocol/openid-connect/token",
                    "type": "string"
                },
                {
                    "key": "scope",
                    "value": "email",
                    "type": "string"
                },
                {
                    "key": "client_authentication",
                    "value": "body",
                    "type": "string"
                },
                {
                    "key": "redirect_uri",
                    "value": "http://127.0.0.1:8080/auth/realms/demo/account/",
                    "type": "string"
                },
                {
                    "key": "clientId",
                    "value": "client-public-cli",
                    "type": "string"
                },
                {
                    "key": "authUrl",
                    "value": "http://localhost:8080/auth/realms/demo/protocol/openid-connect/auth",
                    "type": "string"
                },
                {
                    "key": "tokenName",
                    "value": "test token",
                    "type": "string"
                },
                {
                    "key": "addTokenTo",
                    "value": "header",
                    "type": "string"
                }
            ]
        },
        "method": "GET",
        "header": [],
        "url": {
            "raw": "{{keycloak_url}}/auth/realms/demo/protocol/openid-connect/auth ",
            "host": [
                "{{keycloak_url}}"
            ],
            "path": [
                "auth",
                "realms",
                "demo",
                "protocol",
                "openid-connect",
                "auth "
            ]
        }
    },
    "response": []
},
[Keycloak授权服务指南Authorization_services-中文說明]
https://ranying666.github.io/2020/05/11/keycloak-authorization/
英文:[Authorization Services Guide]
https://www.keycloak.org/docs/latest/authorization_services/


### session

Session idle &max
https://ithelp.ithome.com.tw/m/articles/10279558?sc=iThelpR



通过Keycloak API理解OAuth2与OpenID Connect 原
https://blog.csdn.net/nklinsirui/article/details/112706006

可以將 session_state 存儲在客戶端的本地存儲中嗎？
https://stackoom.com/zh/question/4SkJ3