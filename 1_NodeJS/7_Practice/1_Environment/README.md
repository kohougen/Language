# RESTful APIサーバー(Expressフレームワーク)

## 環境構築(コンテナ)

   1. Dockerを利用してサーバーを立ち上げる

      ```
      # docker hub からNodeJsのイメージを取得
      docker pull node

      # yamlファイルにより、コンテナを起動
      docker-compose up -d

      # コンテナに接続
      docker exec -it express_practice bash

      # node npm のバージョンを確認
      node -v  
      npm -v

      # expressをインストール
      npm install -g express-generator

      # express のバージョンを確認
      express --version

      # expressプロジェクトを生成
      express --view=ejs workspace

      # dependenciesをインストール
      cd workspace
      npm install

      # サーバーを起動
      PORT=8001 npm start
      ```

   1. [docker-composeのYAMLファイル](https://github.com/kohougen/Language/tree/main/1_NodeJS/7_Practice/container/docker-compose.yml)

   1. ブラウザーから http://127.0.0.1:8001/ にアクセスして動作を確認できる

      ![alt text](https://github.com/kohougen/Language/blob/main/1_NodeJS/Pictures/Express_Welcome.PNG)
   
   1. 生成したプロジェクトの構成

      ```
      .
      ├── bin
      │   └── www                 // アプリの起動に関わる情報が記載されている。
      ├── config
      │   └── default.json        // DB接続情報など
      ├── dto                     // Data Transfer Object(Get/Setメソッド)
      │   ├── base-dto.js
      │   └── user-dto.js
      ├── models                  // テーブル毎にSequelize Modelを定義
      │   ├── index.js            // すべてのModelを整合してExport
      │   └── user-model.js       // usersテーブルのModel
      ├── node_modules            // アプリに必要なNode.jsのパッケージ置き場(npm installを実行したら自動的に生成される)
      │   ├─（中略）
      ├── public                  // 静的ファイル置き場。Webアプリ開発では使うが、API開発では使わない
      │   ├── images
      │   ├── javascripts
      │   └── stylesheets
      │       └── style.css
      ├── repositories            // CRUDメソッドを提供
      │   └── user-repository.js
      ├── routes                  // ルーティング関連のミドルウェア関数
      │   ├── index.js
      │   └── users.js
      ├── services                // サービス
      │   ├── servicesFactory.js  // すべてのサービスを整合してExport
      │   └── user-service.js     // User関連のサービスを提供
      ├── views                   // HTMLのテンプレートファイル置き場。Webアプリ開発では使うが、API開発では使わない
      │   ├── error.ejs
      │   └── index.ejs
      ├── app.js                  // アプリのメインファイル
      ├── package-lock.json       // 詳しいバージョン情報を保持(npm installを実行したら自動的に生成される)
      └── package.json            // アプリに必要なNode.jsのパッケージ情報等を記載する
      ```
   
   1. [app.jsの説明](https://github.com/kohougen/Language/tree/main/1_NodeJS/7_Practice/workspace/app.js)

   1. [sequelizeを利用してDB接続を実現できる](https://github.com/kohougen/Language/tree/main/1_NodeJS/7_Practice/2_Sequelize)

   1. [TypeDIを利用して依存性注入を実現できる](https://github.com/kohougen/Language/tree/main/1_NodeJS/7_Practice/3_TypeDI)
