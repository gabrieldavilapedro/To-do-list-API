const tasksService = require("../services/tasksService");

const getAllTasks = async (_req, res) => {
  const { message, data } = await tasksService.getAllTasks();
  return res.status(message).json(data);
};

module.exports = {
  getAllTasks,
};
