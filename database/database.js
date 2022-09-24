const Sequelize = require('sequelize');

const connection = new Sequelize(
    'livraria',
    'admin',
    'tirnanog',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;