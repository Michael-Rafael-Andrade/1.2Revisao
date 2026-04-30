// importação da classe que gerencia as notas na memória
const Demanda = require('../model/modelos.js');

// cria e já exporta a função que será responsável pela tela principal
exports.tela_principal = async function(req, res){
    // lista todas as demandas utilizando o método do Sequelize
    const demandas = await Demanda.findAll();

    // formata a data de criação de cada demanda para o formato brasileiro
    demandas.forEach(demanda => {
        demanda.criada_em_fmt = new Date(demanda.criada_em).toLocaleDateString('pt-BR');
    });

    const contexto = {
        titulo_pagina: "Gerenciador de Demandas de TI",
        demandas: demandas,
    }

    // renderiza o arquivo index.hbs, dentro da pasta view
    res.render('index', contexto);
}