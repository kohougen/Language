'use strict';

const config = require('config');
const path = require('path');
const Sequelize = require('sequelize');

process.env['NODE_CONFIG_DIR'] = path.join(__dirname, '..', 'config');
const dbConfig = config.get('dbConfig');

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

const modelNames = [
  require('./user-model.js'),
];

const models = {};

modelNames.forEach((modelName) => {
  const model = modelName(sequelize, Sequelize);
  models[model.name] = model;
});

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) models[modelName].associate(models);
});

models.sequelize = sequelize;

module.exports = models;
