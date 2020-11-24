# Middleware関数

1. Middleware関数の構成

   ![alt text](https://github.com/kohougen/Language/blob/main/1_NodeJS/Pictures/Middleware_Function.PNG)

1. Middleware関数の実行順番

   ![alt text](https://github.com/kohougen/Language/blob/main/1_NodeJS/Pictures/Middleware_Model.PNG)

1. サンプルコード

   ```node
   var express = require('express')
   var app = express()

   var middlewareOne = function (req, res, next) {
      console.log('This is middleware function 1')
      next()
   }

   var middlewareTwo = function (req, res, next) {
      console.log('This is middleware function 2')
      next()
   }

   app.use(middlewareOne)
   app.use(middlewareTwo)

   app.get('/', function (req, res) {
      res.send('Hello World!')
   })

   app.listen(3000)
   ```