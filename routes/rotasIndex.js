var express = require('express');
var router = express.Router();
var controllerIndex = require('../controller/controllerIndex.js');

/* GET home page. */
router.get('/', controllerIndex.tela_principal);
  
  // function(req, res, next) {
  // res.render('index', { title: 'Express' });
// });

module.exports = router;
