'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Buttons',
      [
        {
          text: 'active',
          clicks: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'active',
          clicks: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'inactive',
          clicks: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'active',
          clicks: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Buttons', null, {});
  },
};