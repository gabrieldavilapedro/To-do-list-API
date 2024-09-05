'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          title: 'Estudar Node.js',
          description: 'Estudar Node.js para desenvolver APIs',
          check: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Estudar React',
          description: 'Estudar React para desenvolver páginas web',
          check: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Estudar vue.js',
          description: 'Estudar vue.js para desenvolver páginas web',
          check: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
