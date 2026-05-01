
const Demanda = require('../model/modelo');

exports.cria_get = function (req, res){
    const contexto = {
        titulo_pagina: "Criar nova demanda",
    }

    res.render('cria_demanda', contexto);
}

exports.cria_post = async function (req, res){
    const nova_demanda = {
        titulo: req.body.titulo,
        texto: req.body.texto,
        urgencia: req.body.urgencia,
        // status padrão 'pendente', definido no modelo
    };

    await Demanda.create(nova_demanda);
    return res.redirect('/');
};