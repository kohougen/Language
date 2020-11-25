# Javascriptコア知識

## 変数

   1. 大文字と小文字を区別する
   1. Unicode文字を使用できる（変数名に日本語を使えるが、よくないコーディングルールです）
   1. コメントアウト『//』と『/* */』
   1. 宣言する方法は三つがある var let const
      * var 全範囲、再宣言できる（再宣言後の初期値がundefined）
      * let スコープ範囲、範囲内で再宣言できない
      * const スコープ範囲、読み取り専用ので、範囲内で再初期化できないが、配列の中身やオブジェクトのプロパティは変更できる

         ```javascript
         const MY_OBJECT = {'key': 'value'};
         MY_OBJECT.key = 'otherValue';

         const MY_ARRAY = ['HTML','CSS'];
         MY_ARRAY.push('JAVASCRIPT');
         console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];
         ```

   1. 未宣言、初期値なしの場合はundefined
   1. 変数の巻き上げ（スコープの途中で宣言したローカル変数の宣言部分が、スコープの先頭に巻き上げられるとのこと）

      ```javascript
      (function() {
         console.log(myvar); // エラーは発生しないで、undefinedを出力
         var myvar = 'local value';
      })();
      ```

## データタイプ

   1. 値タイプ(値を格納するタイプ)
      * Boolean: true/false
      * Number: 整数または小数
      * BigInt: 整数値
      * String: 文字列 (特殊文字: \n 改行、\" ダブルコーテーション)
      * null: 特殊なキーワード
      * undefined: 値が未定義
      * Symbol: ES2015(ES6)の新タイプ
         * new は使用できないので、毎回新しいオブジェクトを生成する

            ```javascript
            const sym1 = Symbol("foo");
            const sym2 = Symbol("foo");
            console.log(sym1 === sym2);     // => false
            ```

         * 辞書のキーとして使用できる(文字列と違う)

            ```javascript
            const sym1 = Symbol("foo");
            const sym2 = Symbol("baa");
            var obj = {
               [sym1]: "Yamada",
               [sym2]: function() {
                  console.log(this[sym1]);
               }
            }
            obj[sym2]();      // => "Yamada"
            ```

   1. 参照タイプ（値の代わり指針を格納）
      * 配列
      * 関数
      * オブジェクト

## データ変更
   
   1. 文字列に変更: toString()
   1. 文字列 ⇒ 数値: parseInt() parseFloat()

      ```javascript
      parseInt('32');      // 32 デフォルトの基数は10
      parseInt('1001', 2); // 9 基数を2に指定
      parseInt('4.9');     // 4 小数部を切り捨て
      parseFloat('3.14');  // 3.14
      isNaN('abc');        // true isNaNで数値かどうかを判定できる
      ```

## ブロック

   1. 条件文

      ```javascript
      if (condition_1) {        // x == y または x != y データタイプを変更してから、値を比較
         statement_1;
      } else if (condition_2) { // x === y または x !== y 値、データタイプ両方を比較
         statement_2;
      } else if (condition_n) {
         statement_n;
      } else {
         statement_last;
      } 
      ```

   1. switch文

      ```javascript
      switch (expression) {
         case label_1:
            statements_1
            [break;]
         case label_2:
            statements_2
            [break;]
            …
         default:
            statements_def
            [break;]
      }
      ```
   
   1. ループ文

      ```javascript
      while(i < 10>) {
         i++;
      }

      do {
         i++;
      } while(i < 10)

      for(let i = 0; i < 10; i++) {

      }

      for(let attr in obj) {  // オブジェクトのプロパティ

      }

      for(let i of arr) {     // 配列、Map、Set

      }
      ```
   
   1. try...catch...finally

      ```javascript
      try {
         
      } catch (err) {

      } finally {

      }
      ```

## 関数

   1. デフォルト引数の指定 ES2015(ES6)の新機能

      ```javascript
      function multiply(a, b = 1) {
         return a * b;
      }

      multiply(5); // 5
      ```

   1. 短縮形の関数

      ```javascript
      var a = [
         'Hydrogen',
         'Helium'
      ];

      var a2 = a.map(function(s) { return s.length; });
      console.log(a2); // [8, 6]

      var a3 = a.map(s => s.length);
      console.log(a3); // [8, 6]
      ``` 

   1. 関数の巻き上げ（スコープの途中で宣言し関数の宣言部分が、スコープの先頭に巻き上げられるとのこと）

      ```javascript
      foo(); // "bar"

      function foo() {
         console.log('bar');
      }
      ```

   1. よく使う定義済み関数

      * encodeURI() と decodeURI()
         * エスケープされないもの: A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #
         *  "&", "+", "=" などのHTTPリクエストにおいて特別な文字がエンコードされない

         ```javascript
         const uri = 'https://mozilla.org/?key=イベント';
         const encoded = encodeURI(uri);
         console.log(encoded); // "https://mozilla.org/?key=%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88"

         try {
            console.log(decodeURI(encoded)); // "https://mozilla.org/?key=イベント"
         } catch (e) {
            console.error(e);
         }
         ```

      * encodeURIComponent() と decodeURIComponent()
         * エスケープされないもの: A-Z a-z 0-9 - _ . ! ~ * ' ( )
         *  "&", "+", "=" などのHTTPリクエストにおいて特別な文字もエンコードされる
      
## 正規表現

   1. 記載方法
      * /正規表現式/

         ```javascript
         var re = /ab+c/;
         ```

      * RegExp('正規表現式')

         ```javascript
         var re = new RegExp('ab+c');
         ```

   1. [オンラインテスト](https://regex101.com/)

   1. 特殊文字

      正規表現式        | マッチ内容
      ------------------| -----------------------
      .                 | 改行以外の任意の一文字にマッチ
      \+                | 直前の文字の 1 回以上の繰り返しにマッチ
      \*                | 直前の文字の 0 回以上の繰り返しにマッチ
      ?                 | 直前の文字の 0 回か 1 回の出現にマッチ
      /^Test$/          | 入力の先頭と末尾にマッチ
      (abc)             | マッチした内容を記憶する
      \w                | [A-Za-z0-9_]と同等
      \W                | [^A-Za-z0-9_]と同等
      \d                | [0-9]と同等
      \D                | [^0-9]と同等
      \s                | スペース、タブ、改ページ、改行を含むホワイトスペース文字にマッチ
      \S                | ホワイトスペース以外の文字にマッチ
      .*?[a-z]          | 非貪欲(lazy)マッチ、abcの場合は、aのみマッチ
      .*[a-z]           | 貪欲(greedy)マッチ、abcの場合は、abc全体マッチ
      (?=.*?[A-Z])      | １つの英大文字がある [参考サイト](https://qiita.com/momotaro98/items/460c6cac14473765ec14)
      {n}               | 直前の文字がちょうど n 回出現する
      {n,}              | 直前の式の少なくとも n 回の出現
      {n,m}             | 直前の文字が少なくとも n 回、多くても m 回出現

   1. サンプル

      * メールアドレス
         ```javascript
         [\w.-]+@[\w.-]+       // 使用できる文字は\wと.と-、ドメイン制限なし
         ^[\w.%+-]+@cac.co.jp$ // 使用できる文字は\wと.%+-、ドメイン制限あり
         ```
      
      * パスワード
         ```javascript
         new RegExp([
            '^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|',　　　　// 英大文字、英小文字、数字で構成 または
            '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|',  // 英大文字、英小文字、それ以外の文字で構成　または
            '(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|',  // 英大文字、数字、それ以外の文字で構成　または
            '(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{12,}$'] // 英小文字、数字、それ以外の文字で構成 12桁以上
            .join(''));
         ```

## Promiseチェーン

   1. 