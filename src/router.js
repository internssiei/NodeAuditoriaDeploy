const express = require('express');
const relatorioController = require('./controllers/RelatorioController');
const router = express.Router();

router.get('/', function(req, res){
    res.sendFile(__dirname +"/view/index.html");
});

router.get('/relatorio', relatorioController.getAll );
router.post('/relatorio', relatorioController.createRelatorio );



module.exports = router;