const tasksService = require("../services/tasksService");

const getAllTasks = async (_req, res) => {
  const { message, data } = await tasksService.getAllTasks();
  return res.status(message).json(data);
};

const getTaskById = async (req, res) => {
  const { id } = req.params;
  const { message, data } = await tasksService.getTaskById(id);
  return res.status(message).json(data);
}

module.exports = {
  getAllTasks,
  getTaskById,
};
