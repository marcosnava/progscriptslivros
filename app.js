const express = require('express');

const connection = require('./database/database');

// Models
const Usuario = require('./model/usuario');
const Genero = require('./model/genero');
const Editora = require('./model/editora');
const Autor = require('./model/autor');
const Livro = require('./model/livro');

const app = express();

// Environment Setup
// Static Files Activation
app.use(express.static('public'));

// Form parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Database
connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com sucesso!');
  })
  .catch((error) => {
    console.log(error);
  });

// Access from other origin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-Width, Content-type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

module.exports = app;
