const Sequelize = require('sequelize');

const connection = require('../database/database');

const Editora = connection.define(
    'editora',
    {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

// Editora.sync({force: true});

module.exports = Editora;