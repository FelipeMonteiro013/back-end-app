const {Sequelize} = require('sequelize');

const sequelize = require('../database/sequelize');

const Exame = sequelize.define("TBL_HT_EXAME", {
    id_exame: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }, 
    
    nome_paciente: {
        type: Sequelize.STRING,
        allowNull: false, 
    }, 

    nome_medico: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 

    data_exame: {
        type: Sequelize.DATE,
        allowNull: false
    }, 

    tipo_exame: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 

    resultado_exame: {
        type: Sequelize.STRING,
        allowNull: false
    },

}); 

module.exports = Exame; 