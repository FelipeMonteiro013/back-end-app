const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('FIAP Cloud', 'RM97020', '061099', {
  dialect: 'oracle',
  host: 'oracle.fiap.com.br',
  port: 1521, 
  logging: false, 
  dialectOptions: {
    connectString: 'oracle.fiap.com.br:1521/orcl',
  },
});

module.exports = sequelize;
