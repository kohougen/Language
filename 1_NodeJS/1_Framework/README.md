# Framework

   名前 | 人気度 | 特徴
   ---------| ----------------|--------------------------------------------------------------
   Express  | 最もシェアが高い | 最も単純、最も最速、フルカスタマイズ可能
   Koa      | 人気が高い | デフォルトで generator/async/await に対応する、middlewareのカスケーディングとコールバック地獄の放棄
   Hapi     | 人気が高い | middlewareの代わりにpluginを利用する
   Sails    | 人気が高い | expressをベースに、WEBサービスではよく使われているような機能を標準搭載する
   Derby    | 普通の程度 | クライアントサイドとサーバーサイド両方のためのMVCアーキテクチャ

## Express
1. インストール

   ```
   npm install -g express-generator
   ```

1. 正しくインストールされたを確認

   ```
   express --help
   ```

1. ejsテンプレートエンジンをダウンロード（ダウンロード先は./projectFolder）

   ```
   express --ejs projectFolder
   ```

1. projectFolderに移動してdependenciesをインストール

   ```
   npm install
   ```

1. サービスを起動

   ```
   npm start
   ```

1. Viewの設定
   `./app.js`

   ```node
   var express = require('express');
   var app = express();

   app.set('views', path.join(__dirname, 'views'));        // View Pathを設定、『__dirname』は現在実行中のソースコードのパス
   app.set('view engine', 'ejs');                          // View Engineを設定、ejsは画面ファイルの拡張子
   app.set('view cache', true);                            // 画面キャッシュできるかどうかを設定、デフォルト値はFalse

   // error handler
   app.use(function(err, req, res, next) {                 // エラー処理Handler
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error', { message : res.locals.message,  // Viewにパラメータを渡す
                              error : res.locals.error });
   });

   module.exports = app;                                   // exports オブジェクト
   ```

   `./views/error.ejs`

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Express</title>
     </head>
     <body>
       <h1><%= message %></h1>
       <p>エラー内容： <%= error %></p>
     </body>
   </html>
   ```

1. Routeの設定
   `./app.js`

   ```node
   var login = require('./routes/login');          // モジュールを導入
   app.get('/login', login.form);                  // Routeを設定
   ```

   `./routes/login.js`

   ```node
   exports.form = (req, res) => {                  // exports メソッド
       res.render('login', { title: 'Login' });
   };
   ```