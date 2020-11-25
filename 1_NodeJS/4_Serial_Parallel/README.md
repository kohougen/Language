# シリアル処理/パラレル処理

## シリアル処理

1. callback関数で実現
   * 中間的な関数を作って、ネストが深くならないような実現方法
   * 早期リターンでネストを減らす
   * パラメータを使って情報を渡す

   ```node
   var http = require("http");
   var fs = require("fs");
   http.createServer(function (req, res) {
      getTitles(res);
   }).listen(8000,"127.0.0.1");

   function getTitles (res) {
      fs.readFile("titles.json", function (err, data) {
         if (err) return hadError(err, res);
         getTemplate(JSON.parse(data.toString()), res);
      });
   }

   function getTemplate(titles, res) {
      fs.readFile("template.html", function (error, data) {
         if (err) return hadError(err, res);
         formatHtml(titles, data.toString(), res);
      }
   }

   function formatHtml (titles, template, res) {
         var html = template.replace("%",titles.join("</li><li>"));
         res.writeHead(200,{"Content-type":"text-html"});
         res.end(html);
   }

   function hadError (err, res) {
      res.end(err);
   }
   ```

1. async.seriesで実現
   * グローバル変数を使って情報を渡す

   ```node
   const async = require('async');
   var param = 'zero'
   async.series([ 
      callback => {
         setTimeout(() => {
               console.log('input param is:' + param);
               console.log('I execute first.');
               param = param + ' first'
               callback();
         }, 1000);
      },
      callback => {
         setTimeout(() => {
               console.log('input param is:' + param);
               console.log('I execute next.');
               param = param + ' second'
               callback();
         }, 500);
      },
      callback => {
         setTimeout(() => {
               console.log('input param is:' + param);
               console.log('I execute last.');
               param = param + ' third'
               callback();
         }, 100);
      },
      callback => {
         console.log('result is:' + param)
      }
   ]);
   ```

   上記コードの実行結果

   ```
   input param is:zero
   I execute first.
   input param is:zero first
   I execute next.
   input param is:zero first second
   I execute last.
   result is:zero first second third
   ```

## パラレル処理

1. callback関数で実現
   * 単独なタスクを定義して配列に追加し、配列をループして並列で実行
   * 並列処理の最後にチェックメソッドを追加し、すべての処理が終わるかどうかをチェック

   ```node
   const fs = require('fs'); 
   const tasks = []; 
   const wordCounts = {}; 
   const filesDir = './text'; 
   let completedTasks = 0;

   fs.readdir(filesDir, (err, files) => {
      if (err) throw err;
      files.forEach(file => {
         const task = (file => {
               return () => {
                  fs.readFile(file, (err, text) => {
                     if (err) throw err;
                     countWordsInText(text);
                     checkIfComplete();
                  });
               };
         })(`${filesDir}/${file}`);
         tasks.push(task);
      })
      tasks.forEach(task => task());
   });

   function countWordsInText(text) {
      const words = text.toString().toLowerCase().split(/\W+/).sort(); 
      words.filter(word => word).forEach(word => addWordCount(word)); 
   }

   function addWordCount(word) { 
      wordCounts[word] = (wordCounts[word]) ? wordCounts[word]+1 : 1;
   }

   function checkIfComplete() { 
      completedTasks++;
      if (completedTasks === tasks.length) { 
         for (let index in wordCounts) {
               console.log(`${index}: ${wordCounts[index]}`); 
         } 
      } 
   }
   ```

1. async.parallelで実現
   * 処理の実行中にエラーが発生しても既に開始している他の処理の実行は続行する、まだ開始していない処理の実行は行われない

   ```node
   var async = require('async');

   async.parallel([
      callback => {
        callback(null, 'aaa');
        //or
        callback(new Error('bbb'), null);
      }, 
      callback => {
        callback(null, 'ccc');
        //or
        callback(new Error('ddd'), null);
      }
   ], function (err, results) {});
   ```

1. async.parallelLimitで実現
   * 処理の実行中にエラーが発生しても既に開始している他の処理の実行は続行する、まだ開始していない処理の実行は行われない
   * 並列的に実行する処理の最大数を指定できる

   ```node
   var async = require('async');

   async.parallelLimit([
      function (callback) {
        callback(null, 'aaa');
        //or
        callback(new Error('bbb'), null);
      }, 
      function (callback) {
        callback(null, 'ccc');
        //or
        callback(new Error('ddd'), null);
      }
   ], 10, function (err, results) {});
   ```