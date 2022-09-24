const Sequelize = require('sequelize');

const connection = require('../database/database');

const Autor = connection.define(
    'autor',
    {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nascimento: {
            type: Sequelize.DATE,
            allowNull: false
        },
        morte: {
            type: Sequelize.DATE
        },
        bio: {
            type: Sequelize.TEXT
        }
    }
);

// Autor.sync({force: true});

module.exports = Autor;