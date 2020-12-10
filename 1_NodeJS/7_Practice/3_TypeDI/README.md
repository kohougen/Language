# TypeDI
TypeDI is a dependency injection tool for JavaScript and TypeScript. 

   * [Home Site](https://www.npmjs.com/package/typedi)

   1. インストール

      ```
      npm install typedi --save
      ```

   1. サービスの依存性注入

      ```javascript
      const UserService = require('./user-service');
      const Container = require("typedi").Container;

      const factory = {
         UserService: Container.get(UserService),
      };

      module.exports = factory;
      ```