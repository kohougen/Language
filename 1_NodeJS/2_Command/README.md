# Command

1. node.jsを実行
   ```
   node xxx.js
   ```
1. デバッグモードでnode.jsを実行
   ```
   node debug xxx.js
   ```
1. モジュールをインストール
   ```
   npm install --save / --save-dev xxx
   ※--save: package.jsonのdependenciesに追加
   ※--save-dev: package.jsonのdevDependenciesに追加
   ```
1. モジュールをアンインストール
   ```
   npm uninstall --save / --save-dev xxx
   ※--save: package.jsonのdependenciesから削除
   ※--save-dev: package.jsonのdevDependenciesから削除
   ```