const UserService = require('./user-service');

const Container = require("typedi").Container;

const factory = {
    UserService: Container.get(UserService),
};

module.exports = factory;