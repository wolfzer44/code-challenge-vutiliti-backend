'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        username: 'wolfzera',
        password:
          '$2b$12$VXh7lfERN9rgxR3JlJmnaOcpMDqA6t6Jc5ZxBIIDLOaNFz9S4zRzm',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
