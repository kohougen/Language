# NodeJS
Node.js は、Chrome の V8 JavaScript エンジン で動作する JavaScript 環境です
* [Home Site](https://nodejs.org/ja/about/)
* [Download](https://nodejs.org/ja/download/)
* [Guide](https://nodejs.org/ja/docs/guides/)
* [API Reference](https://nodejs.org/ja/docs/)

## 概要
1. 非同期型のイベント駆動の JavaScript環境
1. サーバーサイドの JavaScript 実行環境
1. 大量のアクセスを高速に捌くことができる
1. ほとんどの Node.js の関数は I/O を直接実行しないため、プロセスをブロックしない
1. ブロックしないのでスケーラブルなシステムを開発するのに Node.js はとても最適です

## 依存関係

   ![alt text](https://github.com/kohougen/Language/blob/main/1_NodeJS/Pictures/Software_Stack.PNG)

1. V8: JavaScript エンジンを提供する [参考サイト](https://v8.dev/docs)
1. libuv: ノンブロッキング I/O 操作を一貫したインターフェースに抽象化するために使用される C ライブラリです [参考サイト](http://docs.libuv.org/en/v1.x/)
1. llhttp: HTTP 解析用軽量の C ライブラリです [参考サイト](https://github.com/nodejs/llhttp)
1. c-ares: 一部の非同期 DNS 要求では、c-ares というCライブラリを使用 [参考サイト](https://c-ares.haxx.se/docs.html)
1. OpenSSL:  Web がセキュリティの暗号機能 [参考サイト](https://www.openssl.org/)
1. zlib: 同期、非同期、ストリーミングの圧縮と解凍のインターフェース [参考サイト](https://www.zlib.net/manual.html)

## インストール [参考サイト](https://www.sejuku.net/blog/82322)
1. 公式サイトからNodeJSをダウンロードしてインストール
1. `node -v`と`npm -v`でバージョンを確認
1. `npm install 【パッケージ名】`でパッケージをインストール

## 内容一覧
1. [フレームワーク](https://github.com/kohougen/Language/tree/main/1_NodeJS/1_Framework)
