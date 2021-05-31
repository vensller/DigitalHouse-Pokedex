'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('legendaries', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(100),            
      },
      description: {
        type: Sequelize.STRING(100),
      },
      type: {
        type: Sequelize.STRING(100),
      },
      healthPoints: {
        type: Sequelize.FLOAT,
      },
      specialAttack: {
        type: Sequelize.FLOAT,
      },
      defense: {
        type: Sequelize.FLOAT,
      },
      attack: {
        type: Sequelize.FLOAT,
      },
      experience: {
        type: Sequelize.FLOAT,
      },
      specialDefense:{
        type: Sequelize.FLOAT,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {    
    await queryInterface.dropTable('legendaries');
  }
};
