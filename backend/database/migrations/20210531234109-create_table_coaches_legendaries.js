'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coaches_legendaries', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }, 
      coach_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'coaches',
          key: 'id'
        }
      },
      legendary_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'legendaries',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('coaches_legendaries');
  }
};
