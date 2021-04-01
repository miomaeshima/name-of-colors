'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('japanese_color_names', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      r: {
        type: Sequelize.INTEGER
      },
      g: {
        type: Sequelize.INTEGER
      },
      b: {
        type: Sequelize.INTEGER
      }      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('japanese_color_names');
  }
};