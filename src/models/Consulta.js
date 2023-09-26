const {Sequelize} = require ('sequelize');

const sequelize = require('../database/sequelize');

const Consulta = sequelize.define("TBL_HT_CONSULTA", {
    id_consulta: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    data_consulta: {
        type: Sequelize.DATE,
        allowNull: false
    },
    
    medico: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    CRM: {
        type: Sequelize.STRING,
        allowNull: false,

    },

    nome_paciente: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    alergias: {
        type: Sequelize.STRING,
        allowNull: false,

    },

    motivo_da_consulta: {
        type: Sequelize.STRING,
        allowNull: false,
     
    },

    sintomas: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    diagnostico: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    prescricao: {
        type: Sequelize.STRING,
        allowNull: false,
    }

})

module.exports = Consulta;
