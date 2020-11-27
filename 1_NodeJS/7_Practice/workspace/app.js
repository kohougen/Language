var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// View pathとengineを設定、『__dirname』は現在実行中のソースコードのパス、ここは./viewsに設定する
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// コンソールへ出力するログのフォーマットを設定する(https://www.npmjs.com/package/morgan)
// dev: colored green for success codes,red for server error codes, yellow for client error codes, 
// cyan for redirection codes, and uncolored for information codes
app.use(logger('dev'));

// body-parserを基づいてクライアントから送信されたデータを解析、req.bodyで取得できる
app.use(express.json()); // リクエストデータがJSONオブジェクトの場合は、こちを使う
app.use(express.urlencoded({ extended: false })); // リクエストデータが文字列の場合は、こちを使う

// cookie解析(一時的なユーザ情報を保存する仕組み、Languageとか)
app.use(cookieParser());

// イメージ、CSS ファイル、JavaScript ファイルなどの静的ファイルを提供する
app.use(express.static(path.join(__dirname, 'public')));

// ルーティングを設定
app.use('/', indexRouter);
app.use('/users', usersRouter);

// ルーティングで該当先が無かったら、404画面を表示するミドルウェア
app.use(function(req, res, next) {
  next(createError(404));
});

// エラー処理ミドルウェア
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// オブジェクトappをエクスポート(bin\www中で使う)
module.exports = app;