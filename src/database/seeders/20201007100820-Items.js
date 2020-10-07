'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Items',
      [
        {
          name: 'Wooden Slick Table',
          category: 'home',
          taken: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Plastic Slick Table',
          taken: true,
          category: 'bar',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taken: false,
          name: 'Laptop ',
          category: 'home',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
