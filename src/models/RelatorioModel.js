const connection = require('./connection');

const AuditoriaQuery = 'SELECT * FROM `AUDITORIA_TESTE` LIMIT 100;';

const getAll = async ()=>{
 const listandoItens = await connection.execute(AuditoriaQuery);
 console.log(listandoItens);
 return listandoItens;
};

const createRelatorio = async (relatorio)=>{
    const date = new Date(Date.now());
    const { evidencia, local, disciplina, descricao } = relatorio;
    const query = 'INSERT INTO `AUDITORIA_TESTE`(create_time, evidencia, local, disciplina, descricao) VALUES(?,?,?,?,?)';
    const [createdRelatorio] = connection.execute(query,[date.toUTCString(), evidencia, local, disciplina, descricao,'pendente','']);
    return createdRelatorio;
};

module.exports={
getAll,
createRelatorio
};