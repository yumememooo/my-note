---
title: "[security]oauth了解"
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