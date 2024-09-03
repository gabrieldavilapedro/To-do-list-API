const { Tasks } = require("../models");

const getAllTasks = async () => {
  const tasks = await Tasks.findAll();
  return { message: 200, data: tasks };
};

module.exports = {
  getAllTasks,
};
