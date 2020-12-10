# Sequelize
Sequelize is a promise-based Node.js ORM(Object-relational mapping) for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. 

   * [Home Site](https://sequelize.org/master/)

   1. [インストール](https://sequelize.org/master/manual/getting-started.html)

      ```
      # sequelizeをインストール
      npm install --save sequelize

      # 必要なDB driverをインストール
      npm install --save pg pg-hstore # Postgres
      npm install --save mysql2       # Mysql
      npm install --save mariadb      # Mariadb
      npm install --save sqlite3      # Sqlite
      npm install --save tedious      # SQL Server
      ```
   
   1. [DB接続情報の設定](https://sequelize.org/master/manual/getting-started.html)

      ```javascript
      const { Sequelize } = require('sequelize');

      const sequelize = new Sequelize('database', 'username', 'password', {
         host: 'localhost',
         port: '3306',
         dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
      });
      ```

   1. [Data Type](https://sequelize.org/v5/manual/data-types.html)

      ```javascript
      Sequelize.STRING(20)
      Sequelize.INTEGER
      Sequelize.DECIMAL(10, 2)
      Sequelize.BOOLEAN
      Sequelize.UUIDV4
      ```

   1. [Modelを定義](https://sequelize.org/master/manual/model-basics.html)

      * sequelize.defineを利用してModelを定義  [user-model.js](https://github.com/kohougen/Language/tree/main/1_NodeJS/7_Practice/workspace/models/user-model.js)

      ```javascript
      const user = sequelize.define("user", // model名（デフォルトはtable名として使う）
      {
         // 属性を定義
         email: {
            type: Sequelize.STRING(20),
            primaryKey: true,     // primaryKeyを指定しないと、デフォルトは『id』をPKとして使う
            allowNull: false,
            comment: "User's email"
         },
         employeeNo: {
            type: Sequelize.STRING(20),
            allowNull: false,
            comment: "User's employee number"
         },
         createdAt: Sequelize.DATE,
         updatedAt: Sequelize.DATE
      });
      ```

      * Modelクラスを継承してinitを利用してModelを定義

      ```javascript
      class User extends Model {}

      User.init({
         // 属性を定義
         firstName: {
            type: DataTypes.STRING,
            allowNull: false
         },
         lastName: {
            type: DataTypes.STRING
         }
      }, {
         sequelize,        // DB接続情報
         modelName: 'user' // model名（デフォルトはtable名として使う）
      });
      ```

   1. Modelを整合してExport  [index.js](https://github.com/kohougen/Language/tree/main/1_NodeJS/7_Practice/workspace/models/index.js)

      ```javascript
      const sequelize = new Sequelize(     // DB接続情報を設定
         dbConfig.database,
         dbConfig.username,
         dbConfig.password,
         dbConfig
      );

      const modelNames = [                 // Model一覧を取得
         require('./user-model.js'),
      ];

      const models = {};

      modelNames.forEach((modelName) => {  // Model毎にループしてModelのインスタンスを生成する
         const model = modelName(sequelize, Sequelize);
         models[model.name] = model;
      });

      models.sequelize = sequelize;
      module.exports = models;             // ModelsをExport
      ```

   1. [Modelを利用して簡単にCRUDを実現できる](https://sequelize.org/master/manual/model-querying-basics.html)

      [user-repository.js](https://github.com/kohougen/Language/tree/main/1_NodeJS/7_Practice/workspace/repositories/user-repository.js)

      ```javascript
      const models = require('../models');

      const result = await models.user.create(user);

      const result = await models.user.findAll();

      const result = await models.user.findOne({
        where: {
          email: email,
        }
      });
      ```
