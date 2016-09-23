var Sequelize = require('sequelize');
var db = require('../_db');

var Author = db.define('author', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  biography: Sequelize.TEXT,
  imageUrl: Sequelize.STRING,
  style: {
    type: Sequelize.JSON,
    allowNull: false
  },
  lexicon: {
    type: Sequelize.JSON,
    allowNull:false
  },
  owned: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Author;
