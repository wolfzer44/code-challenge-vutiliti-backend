'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('random_values', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      value: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      random_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'randoms',
          key: 'id'
        }
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('random_values')
  }
}
