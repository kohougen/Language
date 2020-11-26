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

   1. ブラウザーから http://127.0.0.1:8001/ にアクセスして動作を確認する

      ![alt text](https://github.com/kohougen/Language/blob/main/1_NodeJS/Pictures/Express_Welcome.PNG)
   