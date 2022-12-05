const express = require('express');
const relatorioController = require('./controllers/RelatorioController');
const router = express.Router();


router.get('/relatorio', relatorioController.getAll);


router.get('/', function(req, res){

    res.sendFile(__dirname +"/view/index.html");
});

module.exports = router;