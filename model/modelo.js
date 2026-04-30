const { DataTypes, Model } = require('sequelize');

const sequelize = require('./server.js');

class Demanda extends Model { } // classe herdando de 'Model'

Demanda.init( // construtor com a definição dos atributos
    {
        // substituindo o atributo 'chave'
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        texto: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        urgencia: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 1, max: 5 }
        },
        // novo tipo de ENUM, para limitar os valors possíveis do atributo 'status'
        status: {
            type: DataTypes.ENUM('pendente', 'em_andamento', 'concluido'),
            allowNull: false,
            defaultValue: 'pendente',
        }
    },
    {   // Configurações adicionais do modelo
        sequelize, // para estabelecer conexão com o BD
        freezeTableName: true, // nome da tabela igual ao nome da classe
        createdAt: 'criada_em', // nome do atributo 'createdAt'
        updatedAt: 'atualizada_em', // nome do atributo 'updatedAt'
    },
);

// Criar o banco de dados dentro da tabela 'demandas_ti' que está dentro do mysql 
sequelize.sync({ alter: true }).then(() => { // alter: true, para aplicar alterações de código no BD
    console.log('Modelos sincronizados com o banco de dados.');
}).catch((error) => {
    console.error('Erro ao sincronizar modelos com o banco de dados: ', error);
});

module.exports = Demanda;