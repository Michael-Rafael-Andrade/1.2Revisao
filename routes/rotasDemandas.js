// rotasDemandas.js
var express = require('express');
var router = express.Router();
var controllerDemandas = require('../controller/controllerDemandas.js');

// Rota para método GET da criação de demanda
router.get('/cria', controllerDemandas.cria_get);
// Rota para método POST da criação de demanda
router.post('/cria', controllerDemandas.cria_post);
// Roda para consulta de demanda
router.get('/consulta/:id', controllerDemandas.consulta);

module.exports = router;