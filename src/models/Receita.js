const {Sequelize} = require('sequelize');

const sequelize = require('../database/sequelize');

const Receita = sequelize.define("TBL_HT_RECEITA", {
    id_receita: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome_paciente: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome_medico:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Receita;