const express = require('express');
const router = express.Router();
const Usuarios = require('../model/usuario');
const bcrypt = require('bcryptjs');
const checklogin = require('../middleware/checklogin');

router.get('/usuarios/novo', checklogin,  (req, res) => {
    res.render('usuarios/novo');
});

router.post('/usuarios/salvar', checklogin, (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    Usuarios.findOne(
        {
            where: {
                email: email
            }
        }
    ).then(usuario => {
        if(usuario == undefined)
        {
            const salt = bcrypt.genSaltSync(10);
            const senhaCriptografada = bcrypt.hashSync(senha, salt);

            Usuarios.create(
                {
                    nome: nome,
                    email: email,
                    senha: senhaCriptografada
                }
            ).then(() => {
                res.redirect('/usuarios');
            });
        }
        else
        {
            res.redirect('/usuarios');
        }
    })
});

router.get('/usuarios', checklogin, (req, res) => {
    Usuarios.findAll(
        {
            order: [
                ['nome', 'ASC']
            ]
        }
    ).then(usuarios => {
        res.render('usuarios/index', {usuarios: usuarios});
    })
});

router.get('/usuarios/editar/:id', checklogin, (req, res) => {
    const id = req.params.id;
    Usuarios.findByPk(id).then(usuario => {
        res.render('usuarios/editar', {usuario: usuario});
    });
});

router.post('/usuarios/alterar', checklogin, (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const email = req.body.email;

    Usuarios.update({
        nome: nome,
        email: email
    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect('/usuarios');
    });
});

router.get('/usuarios/excluir/:id', checklogin, (req, res) => {
    const id = req.params.id;

    Usuarios.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect('/usuarios');
    });
});

module.exports = router;