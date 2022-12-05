const RelatorioModel = require('../models/RelatorioModel');

const getAll = async (req, res)=>{
    const [relatorioModel] = await RelatorioModel.getAll();
return res.status(200).json(relatorioModel);
};

const createRelatorio = async (req, res)=>{
        
};


module.exports = {
getAll,
createRelatorio

};