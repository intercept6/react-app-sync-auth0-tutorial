# React ＆ AppSync（GraphQL） ＆ Apollo Client サンプルアプリケーション

## 概要

[Auth0で保護されたAWS AppSync\(GraphQL\)をReactからApollo Clientで利用する方法をチュートリアルとしてまとめた ｜ Developers\.IO](https://dev.classmethod.jp/client-side/spa/react-appsync-auth0-tutorial/?preview_id=567833&preview_nonce=5371535f33&_thumbnail_id=403078&preview=true)
のサンプルコードです。

## 実行方法

1. ブログに従い、Auth0に定義とAppSyncを作成する。
2. サンプルJSONをリネームし、値を設定する。

```bash
mv auth-config.sample.json auth-config.json
mv app-sync-config.sample.json app-sync-config.json
```

3. アプリケーションを実行する

```bash
yarn start
```
