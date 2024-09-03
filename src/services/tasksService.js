const { Tasks } = require("../models");

const getAllTasks = async () => {
  const tasks = await Tasks.findAll();
  return { message: 200, data: tasks };
};

const getTaskById = async (id) => {
  const task = await Tasks.findByPk(id);
  if (!task) return { message: 404, data: { message: "Task not found" } };
  return { message: 200, data: task };
}

module.exports = {
  getAllTasks,
  getTaskById,
};
