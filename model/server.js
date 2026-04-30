const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'demandas_ti',     // nome a base de dados
    'fullstack',      // nome do usuário do banco de dados
    'BancoDeDados',        // senha do usuário
    {
        host: 'localhost', // endereço do BD
        dialect: 'mysql'  // dialeto do BD
    }
);


// // APÓS O TESTE DE CONEXÃO COM O BANCO DE DADOS DEVE COMENTAR ESTAS LINHAS PARA NÃO FICAR SINCRONIZANDO CONSTANTEMNETE COM O BD.
// // Conexão com o banco de dados
// sequelize.authenticate().then(() => {
//     console.log('Conexão com banco de dados estabelecida com sucesso.');
// }).catch((error) => {
//     console.error('Erro ao se conectar ao banco de dados: ', error);
// });


module.exports = sequelize; // exportar o módulo