const Sequelize = require('sequelize');

const connection = require('../database/database');

const Genero = connection.define(
    'genero',
    {
        genero: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

// Genero.sync({force: true});

module.exports = Genero;