'use strict';

const User = require('./users');
const Web3 = require('./web3');
const Web4 = require('./web4');
const Flag = require('./flag');
const Already_solved = require('./already_solved');
const First_blood = require('./first_blood')
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}



/*
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});*/

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
User.init(sequelize);

User.associate(db);

db.Web3 = Web3;
Web3.init(sequelize);

Web3.associate(db);

db.Web4 = Web4;
Web4.init(sequelize);

Web4.associate(db);

db.Flag = Flag;
Flag.init(sequelize);

Flag.associate(db);

db.Already_solved =Already_solved ;
Already_solved.init(sequelize);

Already_solved.associate(db);

db.First_blood = First_blood ;
First_blood.init(sequelize);

First_blood.associate(db);
module.exports = db;
