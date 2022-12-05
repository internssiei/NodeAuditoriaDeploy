const express = require('express');
const relatorioController = require('./controllers/RelatorioController');
const router = express.Router();


router.get('/relatorio', relatorioController.getAll);

module.exports = router;