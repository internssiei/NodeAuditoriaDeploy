const connection = require('./connection');

const AuditoriaQuery = 'SELECT * FROM `AUDITORIA_TESTE` LIMIT 100;';

const getAll = async ()=>{
 const listandoItens = await connection.execute(AuditoriaQuery);
 console.log(listandoItens);
 return listandoItens;
};

const createRelatorio = async (relatorio)=>{
    const {evidencia, local} = relatorio;
    
    const dateUTC = new Date(Date.now()).toUTCString();
    const query = 'INSERT INTO AUDITORIA_TESTE(create_time, evidencia, local, disciplina, descricao, situacao, resposta) VALUES(?, ?, ?, ?, ?, ?, ?)';
    const [createdRelatorio] = await connection.execute(query, [dateUTC, evidencia, local, 'disciplina', 'descricao','pendente','a']);
    return createdRelatorio;
};

module.exports={
getAll,
createRelatorio,
};