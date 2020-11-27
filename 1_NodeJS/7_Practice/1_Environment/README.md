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

      # node npm expressのバージョンを確認
      node -v  
      npm -v
      express -- version

      # expressをインストール
      npm install -g express-generator
      express --ejs workspace

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
      │   └── www            // アプリの起動に関わる情報が記載されている。
      ├── node_modules       // アプリに必要なNode.jsのパッケージ置き場(npm installを実行したら自動的に生成される)
      │   ├─（中略）
      ├── public             // 静的ファイル置き場。Webアプリ開発では使うが、API開発では使わない
      │   ├── images
      │   ├── javascripts
      │   └── stylesheets
      │       └── style.css
      ├── routes             // ミドルウェア関数が書かれいているファイル置き場
      │   ├── index.js
      │   └── users.js
      ├── views              // HTMLのテンプレートファイル置き場。Webアプリ開発では使うが、API開発では使わない
      │   ├── error.ejs
      │   └── index.ejs
      ├── app.js             // アプリのメインファイル
      ├── package-lock.json  // 詳しいバージョン情報を保持(npm installを実行したら自動的に生成される)
      └── package.json       // アプリに必要なNode.jsのパッケージ情報等を記載する
      ```
   
   1. [app.jsの説明](https://github.com/kohougen/Language/tree/main/1_NodeJS/7_Practice/workspace/app.js)

   