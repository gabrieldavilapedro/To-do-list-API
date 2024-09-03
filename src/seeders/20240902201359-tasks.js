"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tasks",
      [
        {
          title: "Estudar Node.js",
          description: "Estudar Node.js para desenvolver APIs",
          check: false,
        },
        {
          title: "Estudar React",
          description: "Estudar React para desenvolver páginas web",
          check: false,
        },
        {
          title: "Estudar vue.js",
          description: "Estudar vue.js para desenvolver páginas web",
          check: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tasks", null, {});
  },
};
