var Sequelize = require('sequelize');
var path = require('path');
var logger = require('morgan');

var schema = new Sequelize('sqlite://db.sqlite', {
    dialect: 'sqlite',

    pool: {
        min: 0,
        max: 500,
        idle: 1000
    },

    storage: path.join(__dirname, 'db.sqlite')
});


module.exports = {
    sequelize: Sequelize,
    schema: schema,
    logger: logger,
    path: path

};