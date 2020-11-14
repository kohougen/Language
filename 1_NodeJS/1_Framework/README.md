# Framework

   Name | 人気度 | 特徴
   ---------| -------------------------------------------------------------------------------
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
2. 正しくインストールされたを確認
   ```
   express --help
   ```
3. ejsテンプレートエンジンをダウンロード（ダウンロード先は./projectFolder）
   ```
   express --ejs projectFolder
   ```
4. projectFolderに移動してdependenciesをインストール
   ```
   npm install
   ```
5. サービスを起動
   ```
   npm start
   ```