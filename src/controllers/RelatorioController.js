const { response } = require('../app');
const RelatorioModel = require('../models/RelatorioModel');

const getAll = async (_req, res)=>{
    const [relatorioModel] = await RelatorioModel.getAll();
    res.sendFile
return res.status(200).json(relatorioModel);
};

const createRelatorio = async (req, res)=>{
    const createdRelatorio = await RelatorioModel.createRelatorio(req.body);
    return res.status(201).json(createdRelatorio);
};


module.exports = {
getAll,
createRelatorio,

};