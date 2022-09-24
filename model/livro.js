const Sequelize = require('sequelize');

const connection = require('../database/database');
const Genero = require('./genero');
const Autor = require('./autor');
const Editora = require('./editora');

const Livro = connection.define(
    'livro',
    {
        titulo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        paginas: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
);

Livro.belongsTo(Genero);
Livro.belongsTo(Autor);
Livro.belongsTo(Editora);

// Livro.sync({force: true});

module.exports = Livro;